# Use the official Node.js image as a parent image
FROM node:18.9.1

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 5050

# Command to run the application
CMD ["npm", "start"]
