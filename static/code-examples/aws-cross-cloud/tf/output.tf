output "otterize-credentials-operator-trust-profile-arn" {
  value = module.otterize-aws-iam.otterize-credentials-operator-trust-profile-arn
}

output "otterize-intents-operator-trust-profile-arn" {
  value = module.otterize-aws-iam.otterize-intents-operator-trust-profile-arn
}

output "trust-anchor-arn" {
  value = module.otterize-aws-iam.trust-anchor-arn
}

output "otterize-credentials-operator-role-arn" {
  value = module.otterize-aws-iam.otterize-credentials-operator-role-arn
}

output "otterize-intents-operator-role-arn" {
  value = module.otterize-aws-iam.otterize-intents-operator-role-arn
}