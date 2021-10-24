# Stage: 0 Build portfolio codes
FROM node:lts-alpine as build

# Setup node_module's cache directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json inside the image
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install --production=false

# Copy the source code inside the image
COPY . .

# Build portfolio
RUN npm run build

# Stage: 1 Step up web server
FROM nginx:1.21.3

# Copy the source code to nginx root
RUN mkdir -p /usr/share/nginx/ag-legaspi.com/frontend
COPY --from=build /usr/src/app/dist/frontend /usr/share/nginx/ag-legaspi.com/frontend/

EXPOSE 80