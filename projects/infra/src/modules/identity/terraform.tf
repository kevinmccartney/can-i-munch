locals {
  environments = tomap({
    "prod" = "cim-users",
    "dev"  = "cim-users-dev",
  })
}


resource "aws_cognito_user_pool" "user_pool" {
  for_each  = local.environments

  name = each.value
  tags = {
    "project"     = "can-i-munch",
    "managed_by"  = "terraform"
    "environment" = each.key
  }
}