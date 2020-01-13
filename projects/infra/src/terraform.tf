provider "aws" {
  version = "~> 2.8"
  region = var.cim_aws_region
}

resource "aws_s3_bucket" "terraform_state" {
  bucket = "cim-infra-${var.cim_environment}-state"
  versioning {
    enabled = true
  }
  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }
}

resource "aws_dynamodb_table" "terraform_locks" {
  name         = "cim-infra-${var.cim_environment}-state-locks"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"
  attribute {
    name = "LockID"
    type = "S"
  }
}

module "web_certs" {
  source = "./modules/cert"

  apex_domain = "canimunch.com"
  sub_domain_names = tolist([
    "admin.canimunch.com",
    "api.canimunch.com",
    "devops.canimunch.com",
  ])
}

output "rec_validation" {
  value = module.web_certs.rec_validation
}