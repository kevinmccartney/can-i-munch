terraform {
  backend "s3" {}
  required_version = ">= 0.12.0"
  required_providers {
    aws = ">= 2.60.0"
  }
}

provider "aws" {
  version = "~> 2.8"
  region = var.cim_aws_region
}

data "terraform_remote_state" "state" {
  backend = "s3"
  config = {
    bucket     = "cim-api-state"
    dynamodb_table = "cim-api-state-locks"
    region     = var.cim_aws_region
    key        = "global/terraform.tfstate"
  }
}

resource "aws_s3_bucket" "terraform_state" {
  bucket = "cim-api-state"
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
  name         = "cim-api-state-locks"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"
  attribute {
    name = "LockID"
    type = "S"
  }
}

