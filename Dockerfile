# Base image
FROM node:18

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Expose the port from env (default is 5000)
EXPOSE 5000

# Start the app
CMD ["node", "index.js"]
