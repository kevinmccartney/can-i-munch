variable "sub_domain_names" {
  type = set(string)
  description = "The sub domain names for which to register certs"
}

variable "apex_domain" {
  type = string
  description = "The root domain name"
}