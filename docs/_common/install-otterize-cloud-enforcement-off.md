Set *client id* and *client secret* to your values and run:
```shell
helm upgrade --install otterize -n otterize-system --create-namespace -f ./otterize-kubernetes/values.yaml otterize-kubernetes \
--set intentsOperator.operator.enableEnforcement=false \
--set intentsOperator.cloud.credentials.clientId=client_id \
--set intentsOperator.cloud.credentials.clientSecret=client_secret

```
