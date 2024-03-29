FROM node:14 as builder

# Set the working directory to /app inside the container
WORKDIR /app

# Copy app files
COPY . .

# Install pre-dependencies
RUN apt-get update || : && apt-get install python -y

# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm install --legacy-peer-deps

# Build the dist
RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production

# Copy built assets from `builder` image
COPY --from=builder /app/dist /usr/share/nginx/html

# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 4200

# Start nginx
CMD ["nginx", "-g", "daemon off;"]