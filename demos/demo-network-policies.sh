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
pei "# - client, client-other and server pods communicating over HTTP"
prompt
pei "kubectl apply -f https://docs.otterize.com/code-examples/automate-network-policies/all.yaml"
prompt
pei ""
prompt
sleep 2
pei "# Check that the client and server pods were deployed"
prompt
pei "kubectl get pods -n otterize-tutorial-npol"
prompt
pei ""
prompt
pei "# Let's look at the client's output logs"
prompt
pei "kubectl logs --tail -0 -f -n otterize-tutorial-npol deploy/client | head -n 13"
prompt
pei "# We can see that it's able to call the server"
prompt
pei "# Let's look at the client-other's output logs"
prompt
pei "kubectl logs --tail -0 -f -n otterize-tutorial-npol deploy/client-other | head -n 13"
prompt
pei "# We can see that it too is able to call the server"
prompt
pei ""
prompt
pei "# This is our base mode - both clients are able to call the server."
prompt
pei ""
prompt
pei "# Let's apply an intents file which Otterize will use"
prompt
pei "# to automatically configure network policies allowing calls"
prompt
pei "# from the client to the server while blocking all other unintended calls."
prompt
pei "# The intents file is a custom resource you can apply directly to your K8s cluster"
prompt
pei "# It looks as follows"
prompt
pei "curl https://docs.otterize.com/code-examples/automate-network-policies/intents.yaml"
echo # the intents yaml doesn't have new line at the end of the file
prompt
pei "kubectl apply -f https://docs.otterize.com/code-examples/automate-network-policies/intents.yaml"
prompt
pei "# And we can now see that the client is still able to call the server"
prompt
pei "kubectl logs --tail 0 -f -n otterize-tutorial-npol deploy/client | head -n 13"
prompt
pei "# While the client-other pod is timing out when calling the server"
prompt
pei "kubectl logs --tail 0 -f -n otterize-tutorial-npol deploy/client-other | head -n 4"
prompt
pei "# That's how easy it is to manage network policies with Otterize 🦦"
