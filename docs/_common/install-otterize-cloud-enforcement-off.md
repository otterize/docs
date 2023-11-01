Set *client id* and *client secret* to your values and run:
```shell
helm upgrade --install otterize otterize/otterize-kubernetes \
-n otterize-system --create-namespace \
--set global.otterizeCloud.credentials.clientId=client_id \
--set global.otterizeCloud.credentials.clientSecret=client_secret \
--set intentsOperator.operator.mode=defaultShadow \
--set credentialsOperator.useOtterizeCloud=true
```