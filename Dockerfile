FROM node:16-alpine
WORKDIR /app
COPY package.json ./
RUN npm install --unsafe-perm=true --allow-root
COPY . .
EXPOSE 3003
CMD ["npm", "start"]
