data "aws_acm_certificate" "cert" {
  domain   = "canimunch.com"
  statuses = ["ISSUED"]
}

data "aws_route53_zone" "route_zone" {
  name = "canimunch.com"
}

resource "aws_s3_bucket" "web_dist" {
  bucket = var.environment == "master" ? "canimunch.com" : "${var.environment}.canimunch.com"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}

resource "aws_route53_record" "route_record" {
  zone_id = data.aws_route53_zone.route_zone.zone_id
  name    = var.environment
  type    = "CNAME"
  ttl     = "300"
  records = [aws_cloudfront_distribution.s3_distribution.domain_name]
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.web_dist.website_endpoint
    origin_id   = "cim-web-${var.environment}"

    custom_origin_config {
      http_port                = 80
      https_port               = 443
      origin_keepalive_timeout = 5
      origin_protocol_policy   = "https-only"
      origin_read_timeout      = 30
      origin_ssl_protocols     = [
          "TLSv1",
          "TLSv1.1",
          "TLSv1.2",
        ]
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Managed by Terraform"

  aliases = [var.environment == "master" ? "canimunch.com" : "${var.environment}.canimunch.com"]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "cim-web-${var.environment}"

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
    "environment" = var.environment
  }

  viewer_certificate {
    acm_certificate_arn = data.aws_acm_certificate.cert.arn
    ssl_support_method  = "sni-only"
  }
}
