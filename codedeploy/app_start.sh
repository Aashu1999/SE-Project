#!/bin/bash

# stop all server
pm2 stop all

# run backend
cd /home/ubuntu/se-project/backend/ && npm deploy
# run library
cd /home/ubuntu/se-project/library/ && npm deploy
# run user
cd /home/ubuntu/se-project/user/ && npm deploy