#!/bin/bash

#not interested in the output
pm2 describe server > /dev/null

#get the exist status
RUNNING=$?

#if running == 0 : server is running.. restart
#if running == 1 : server is not running.. start

if [ "${RUNNING}" -ne 0]; then

    echo "starting the server"

	#start the server
	pm2 start server.js

else
    echo "restarting the server"

	#restart the server
	pm2 restart 0
fi
