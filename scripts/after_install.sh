#!/bin/bash
set -e

echo "Application Name: $APPLICATION_NAME" >> /home/ubuntu/check-env-after.log

if [ "$APPLICATION_NAME" == "testing-variables" ]; then
    echo "My name is dev" >> /home/ubuntu/check-env-after.log
elif [ "$APPLICATION_NAME" == "stage" ]; then
    echo "My name is stage" >> /home/ubuntu/check-env-after.log
elif [ "$APPLICATION_NAME" == "qa" ]; then
    echo "My name is qa" >> /home/ubuntu/check-env-after.log
elif [ "$APPLICATION_NAME" == "preprod" ]; then
    echo "My name is preprod" >> /home/ubuntu/check-env-after.log
else
    echo "Application name is not recognized: $APPLICATION_NAME"
fi
