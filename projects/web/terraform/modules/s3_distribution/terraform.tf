locals {
  domain_name = var.cim_environment == "master" ? "canimuch.com" : "${var_cim_environment}.canimunch.com"
}


data "aws_acm_certificate" "cert" {
  domain   = "canimunch.com"
  statuses = ["ISSUED"]
}

data "aws_route53_zone" "route_zone" {
  name = local.domain_name
}

resource "aws_s3_bucket" "web_dist" {
  bucket = local.domain_name
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}

resource "aws_route53_record" "route_record" {
  zone_id = aws_route53_zone.route_zone.zone_id
  name    = "Web - ${var.cim_environment == "master" ? "prod" : var.cim_environment}"
  type    = "CNAME"
  ttl     = "300"
  records = [aws_cloudfront_distribution.s3_distribution.domain]
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = "${aws_s3_bucket.web_dist.bucket_regional_domain_name}"
    origin_id   = "cim-web-${var.cim_environment == "master" ? "prod" : var.cim_environment}"
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Managed by Terraform"

  aliases = ["canimunch.com"]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "cim-web-${var.cim_environment== "master" ? "prod" : var.cim_environment}"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = {
    "project" = "can-i-munch",
    "managed_by" = "terraform"
    "environment" = var.cim_environment == "master" ? "prod" : var.cim_environment
  }

  viewer_certificate {
    acm_certificate_arn = data.aws_acm_certificate.cert.arn
  }
}