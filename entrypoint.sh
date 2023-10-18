#!/bin/bash
# THIS FILE HAS BEEN AUTOMATICALLY GENERATED BY WHALE
# Only modify it using the whale command line
# See whale --help for further information

set -e

if [ $ON_AWS ] ; then
  echo "Sleeping to give istio-proxy time to launch ..."
  sleep 5

  export $(ssmsh -inject -path $APPLICATION_NAME)
fi

exec dumb-init --rewrite 15:${REWRITE_SIGTERM_TO:-15} "$@"