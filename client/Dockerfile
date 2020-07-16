# Build environment
FROM node:13.12.0-alpine as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build

# Production environment
FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]