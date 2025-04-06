FROM node:18-slim

WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy app source
COPY . .

# Build the application
RUN yarn build

# Cloud Run will set PORT environment variable
ENV PORT=8080

# Expose the port
EXPOSE ${PORT}

# Run the application
CMD [ "node", "dist/index.js" ] 