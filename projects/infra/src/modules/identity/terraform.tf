data "aws_iam_policy_document" "sns_policy" {
  version = "2012-10-17"

  statement {
    actions = [
      "sns:publish"
    ]
    effect = "Allow"
    resources = ["*"]
  }
}

locals {
  environments = tomap({
    "prod" = "cim_users_prod",
    "dev"  = "cim_users_dev",
  })
}

resource "aws_cognito_user_pool" "user_pool" {
  for_each  = local.environments

  name                     = each.value
  auto_verified_attributes = [
    "email",
    "phone_number",
  ]
  email_configuration {
    email_sending_account = "COGNITO_DEFAULT"
  }
  schema {
    attribute_data_type      = "String"
    developer_only_attribute = false 
    mutable                  = true 
    name                     = "email" 
    required                 = true 

    string_attribute_constraints {
      max_length = "2048" 
      min_length = "0" 
    }
  }
  schema {
    attribute_data_type      = "String"
    developer_only_attribute = false
    mutable                  = true
    name                     = "family_name"
    required                 = true

    string_attribute_constraints {
      max_length = "2048"
      min_length = "0"
    }
  }
  schema {
    attribute_data_type      = "String"
    developer_only_attribute = false
    mutable                  = true
    name                     = "given_name"
    required                 = true

    string_attribute_constraints {
      max_length = "2048"
      min_length = "0"
    }
  }
  schema {
    attribute_data_type      = "String"
    developer_only_attribute = false
    mutable                  = true
    name                     = "phone_number"
    required                 = true

    string_attribute_constraints {
      max_length = "2048"
      min_length = "0"
    }
  }
  schema {
    attribute_data_type      = "String"
    developer_only_attribute = false
    mutable                  = true
    name                     = "preferred_username"
    required                 = true

    string_attribute_constraints {
        max_length = "2048"
        min_length = "0"
    }
  }
  mfa_configuration          = "OPTIONAL"

  sms_authentication_message = "Your authentication code is {####}. "
  # sms_configuration {
  #   external_id    = "0caa45dd-ce2f-4203-9b24-677ef2bfa1b7"
  #   sns_caller_arn = aws_iam_role.sms_role[each.value].arn
  # }


  tags = {
    "project"     = "can_i_munch",
    "managed_by"  = "terraform"
    "environment" = each.key
  }
}

resource "aws_iam_role" "sms_role" {
  for_each = local.environments
  
  name = "${each.value}-SMS-Role"
  assume_role_policy = data.aws_iam_policy_document.sns_policy.json
}

output "sms_role" {
  value = aws_iam_role.sms_role
}
