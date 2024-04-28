#!/bin/bash

# stop all server
pm2 stop all

# run backend
cd /home/ubuntu/se-project/backend/ && npm run deploy
# run library
cd /home/ubuntu/se-project/library/ && npm run deploy
# run user
cd /home/ubuntu/se-project/user/ && npm run deploy