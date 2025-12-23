# Dockerfile

# Step 1: Use official Node.js image
FROM node:16

# Step 2: Set the working directory in the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the app's source code
COPY . .

# Step 6: Expose the port the app will run on
EXPOSE 3000

# Step 7: Start the Node.js app
CMD ["node", "index.js"]
