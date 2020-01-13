
locals {
  all_domains = sort(tolist(setunion([var.apex_domain], var.sub_domain_names)))
}

resource "aws_route53_zone" "domain_routes" {
  name = "canimunch.com"
  tags = {
    "project" = "can-i-munch",
    "managed_by" = "terraform"
  }
}

# resource "aws_route53_record" "route_records" {
#   for_each = local.all_domains

#   zone_id = aws_route53_zone.domain_routes.zone_id
#   name    = each.value
#   type    = "A"
#   ttl     = "300"
# }

resource "aws_acm_certificate" "default" {
  domain_name               = var.apex_domain
  subject_alternative_names = [for name in local.all_domains : "*.${name}"]
  validation_method         = "DNS"
  tags                      = {
    "project" = "can-i-munch",
    "managed_by" = "terraform"
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "validation" {
  count = length(local.all_domains)
  depends_on = [aws_acm_certificate.default]

  name    = trimprefix(aws_acm_certificate.default.domain_validation_options[count.index + 1].resource_record_name, "*.")
  type    = aws_acm_certificate.default.domain_validation_options[count.index + 1].resource_record_type
  zone_id = aws_route53_zone.domain_routes.zone_id
  records = [aws_acm_certificate.default.domain_validation_options[count.index + 1].resource_record_value]
  ttl     = "60"
  allow_overwrite = true
}

resource "aws_acm_certificate_validation" "default" {
  count = length(aws_route53_record.validation)

  certificate_arn         = aws_acm_certificate.default.arn
  
  validation_record_fqdns = [for validation in aws_route53_record.validation: validation.fqdn]
}

output "rec_validation" {
  value = aws_route53_record.validation
}