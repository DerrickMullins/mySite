# Base image for Node.js
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for Express
COPY package*.json ./

# Install Express dependencies
RUN npm install

# Copy the Express server file
COPY server.js ./

# Copy the React build files
COPY build ./build

# Install serve globally
RUN npm install -g serve

# Expose the ports
EXPOSE 8000

# Start both the Express server and serve the React app
CMD ["sh", "-c", "node server.js & serve -s build"]
