# Use a Node.js image
FROM node:18.15.0

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy everything to the container
COPY . .

RUN npm run build

# Expose port
EXPOSE 3000

CMD ["npm", "start"]

