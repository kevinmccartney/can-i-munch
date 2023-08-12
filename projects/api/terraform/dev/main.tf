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
    key        = "${var.cim_environment}/terraform.tfstate"
  }
}

module "api-gateway" {
  source = "../modules/api-gateway"

  cim_environment=var.cim_environment
}
