# Official Golang image
FROM golang:latest

# Working directory
WORKDIR /app

# Copy everything at /app
COPY . /app

# Build the go app
RUN go build -o main .
RUN chmod +x main.go

# Expose port
EXPOSE 8080

# Define the command to run the app
CMD ["./main"]
