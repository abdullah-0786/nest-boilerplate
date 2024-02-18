#Build stage
FROM node:18-alpine3.18 AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install
COPY . .
## RUN npm run db:generate
RUN npm run build

#Run stage
FROM node:18-alpine3.18
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/bin ./bin
# COPY --from=builder /app/prisma ./prisma
EXPOSE 8000
CMD [ "npm", "run", "start:dev" ]
# CMD ["bin/startup.sh"]