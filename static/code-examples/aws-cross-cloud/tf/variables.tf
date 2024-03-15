variable "aws_region" {
  default = "us-west-2"
}

variable "aws_rolesanywhere_trust_anchor-name" {
  default = "otterize-cert-manager-spiffe"
}

variable "otterize-credentials-operator-role-name" {
  default = "otterize-credentials-operator"
}

variable "otterize-credentials-operator-policy-name" {
  default = "otterize-credentials-operator"
}

variable "otterize-credentials-operator-profile-name" {
  default = "otterize-credentials-operator"
}

variable "otterize-intents-operator-role-name" {
  default = "otterize-intents-operator"
}

variable "otterize-intents-operator-policy-name" {
  default = "otterize-intents-operator"
}

variable "otterize-intents-operator-profile-name" {
  default = "otterize-intents-operator"
}

variable "trust-domain" {
  default = "spiffe.cert-manager.io"
}

variable "otterize-namespace" {
  default = "otterize-system"
}

variable "otterize-credentials-operator-serviceaccount" {
  default = "credentials-operator-controller-manager"
}

variable "otterize-intents-operator-serviceaccount" {
  default = "intents-operator-controller-manager"
}