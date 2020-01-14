terraform {
  backend "s3" {}
}

data "terraform_remote_state" "state" {
  backend = "s3"
  config = {
    bucket     = "cim-infra-state"
    lock_table = "cim-infra-state-locks"
    region     = var.cim_aws_region
    key        = "terraform.tf"
  }
}

provider "aws" {
  version = "~> 2.8"
  region = var.cim_aws_region
}

resource "aws_s3_bucket" "terraform_state" {
  bucket = "cim-infra-state"
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
  name         = "cim-infra-state-locks"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"
  attribute {
    name = "LockID"
    type = "S"
  }
}

module "web_certs" {
  source = "./modules/cert"

  domain_names = tomap({
    "apex"   = "canimunch.com"
    "admin"  = "admin.canimunch.com",
    "api"    = "api.canimunch.com",
    "devops" = "devops.canimunch.com",
  })
}

module "identity" {
  source = "./modules/identity"
}

output "sms_role" {
  value = module.identity.sms_role
}
