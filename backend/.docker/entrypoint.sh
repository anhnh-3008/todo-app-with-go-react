#!/bin/bash

.docker/wait-for-it.sh mysql:3306 --timeout=300 -- echo 'Mysql service is ready!'

# CompileDaemon will auto refresh go server whenever modify source code
CompileDaemon -build="go build -o /build/app" -command="/build/app"
