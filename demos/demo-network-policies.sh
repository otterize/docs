#!/bin/bash

########################
# include the magic
########################
. ./demo-magic.sh

# some supporting functions

function prompt {
  echo -n "[otis@river ~]"
}

# hide the evidence
clear

prompt
pei "# Let's play with network policies"
prompt
pei "# We'll start by deploying"
prompt
pei "# - client and server pods communicating over HTTP"
prompt
pei "# - a default deny network policy to block the communication between them"
prompt
pei "kubectl apply -f https://docs.otterize.com/code-examples/network-policies/all.yaml"
prompt
pei ""
prompt
pei "# Check that the client and server pods were deployed"
prompt
pei "kubectl get pods -n otterize-tutorial-npol"
prompt
pei "# Check that the default deny network policy was deployed"
prompt
pei "kubectl get NetworkPolicies -n otterize-tutorial-npol"
prompt
pei ""
prompt
pei "# Let's look at the client's output logs"
prompt
pei "kubectl logs --tail -0 -f -n otterize-tutorial-npol deploy/client | head -n 4"
prompt
pei "# We can see that it's timing out when calling the server"
prompt
pei "# because of the default deny network policy"
prompt
pei "# Let's apply an intents file which Otterize will use"
prompt
pei "# to automatically configure network policies"
prompt
pei "# The intents file is a custom resource you can apply directly to your K8s cluster"
prompt
pei "# It looks as follows"
prompt
pei "curl https://docs.otterize.com/code-examples/network-policies/intents/intents.yaml"
echo # the intents yaml doesn't have new line at the end of the file
prompt
pei "kubectl apply -f https://docs.otterize.com/code-examples/network-policies/intents/intents.yaml"
prompt
pei "# And we can now see that the client is able to call the server"
prompt
pei "kubectl logs --tail 0 -f -n otterize-tutorial-npol deploy/client | head -n 18"
prompt
pei "# That's how easy it is to manage network policies with Otterize 🦦"
