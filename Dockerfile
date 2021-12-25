FROM node:14.16-alpine

WORKDIR /src/

COPY package.json package-lock.json /src/

RUN npm ci --silent

COPY . .

# Run local
CMD ["npm", "run", "dev"]
