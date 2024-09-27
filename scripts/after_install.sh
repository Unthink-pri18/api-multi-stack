#!/bin/bash
set -e

echo "Application Name: $APPLICATION_NAME" >> /home/ubuntu/check-env-after.log

if [ "$APP_NAME" == "dev" ]; then
    echo "My name is dev" >> /home/ubuntu/check-env-after.log
elif [ "$APP_NAME" == "stage" ]; then
    echo "My name is stage" >> /home/ubuntu/check-env-after.log
elif [ "$APP_NAME" == "qa" ]; then
    echo "My name is qa" >> /home/ubuntu/check-env-after.log
elif [ "$APP_NAME" == "preprod" ]; then
    echo "My name is preprod" >> /home/ubuntu/check-env-after.log
else
    echo "Application name is not recognized: $APP_NAME"
fi
