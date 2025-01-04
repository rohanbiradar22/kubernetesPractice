#!/bin/bash

sudo apt update -y

sudo apt install docker.io -y

sudo usermod -aG docker ubuntu

sudo apt install docker-buildx

# now logout and login again for changes to take effect

set -e