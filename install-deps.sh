#!/bin/bash

# Install necessary dependencies
apt-get update && apt-get install -y \
    wget \
    apt-transport-https \
    ca-certificates \
    gnupg \
    --no-install-recommends

# Add Google’s official GPG key
wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add -

# Set up the stable repository
echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list

# Update package list and install chrome
apt-get update && apt-get install -y google-chrome-stable

# Clean up
apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
