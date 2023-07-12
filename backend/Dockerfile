# Official Golang image
FROM golang:latest

# Working directory
WORKDIR /app
# Folder build save build of go server to auto refresh
RUN mkdir "/build"

# Copy everything at /app
COPY . /app

# Install CompileDaemon
RUN go get github.com/githubnemo/CompileDaemon
RUN go install github.com/githubnemo/CompileDaemon

# Allow permission for the scripts
RUN chmod +x .docker/*.sh

# Expose port
EXPOSE 8080

# Define the command to run the app
ENTRYPOINT [ ".docker/entrypoint.sh" ]
