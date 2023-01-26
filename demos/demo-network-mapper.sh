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
pei "### Otterize network mapper demo ###"
prompt
pei "# Install & run the network mapper to start building network map"
prompt
pei "helm install network-mapper otterize/network-mapper -n otterize-system --create-namespace"
prompt
pei "# Install Otterize CLI to interact with the network mapper"
prompt
pei "brew install otterize/otterize/otterize-cli"
prompt
sleep 1
pei "# Show the map in namespace \"labstg\" as a list"
prompt
sleep 1
pei "otterize mapper list -n labstg"
prompt
sleep 10
