#!/bin/bash

.docker/wait-for-it.sh mysql:3306 --timeout=300 -- echo 'Mysql service is ready!'

go run main.go
