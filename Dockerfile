# --- Stage 1: Build the React Application ---
FROM node:20-alpine as builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# --- IMPORTANT: Write the GEMINI_API_KEY to a .env.local file ---
# This uses a build argument (passed during the build process)
ARG GEMINI_API_KEY
RUN echo "VITE_GEMINI_API_KEY=$GEMINI_API_KEY" > .env.local

# Copy the rest of the application source code
COPY . .

# Build the React application for production
# This command runs your build script (usually defined in package.json)
RUN npm run build

# --- Stage 2: Serve the Application with Nginx ---
FROM nginx:alpine

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built files from the 'builder' stage into Nginx's public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 8080 as requested
EXPOSE 8080

# Nginx Alpine runs in the foreground by default, which is required for Cloud Run
CMD ["nginx", "-g", "daemon off;"]
