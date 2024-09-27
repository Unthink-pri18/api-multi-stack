#!/bin/bash
set -e

echo "Application Name: $APPLICATION_NAME" >> /home/ubuntu/check-env-after.log

case "$APPLICATION_NAME" in
    "testing-variables")
        echo "My name is dev" >> /home/ubuntu/check-env-after.log
        ;;
    "stage")
        echo "My name is stage" >> /home/ubuntu/check-env-after.log
        ;;
    "qa")
        echo "My name is qa" >> /home/ubuntu/check-env-after.log
        ;;
    "preprod")
        echo "My name is preprod" >> /home/ubuntu/check-env-after.log
        ;;
    *)
        echo "Application name is not recognized: $APPLICATION_NAME" >> /home/ubuntu/check-env-after.log
        ;;
esac

