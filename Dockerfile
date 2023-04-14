# Use the official Nginx image as the base image
FROM nginx:stable

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build folder to the Nginx html folder
COPY build /usr/share/nginx/html
