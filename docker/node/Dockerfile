FROM node:16-alpine

RUN mkdir /app && chown node:node /app
WORKDIR /app

USER node
COPY --chown=node:node ./backend/node/package*.json ./

RUN npm install
COPY . .

EXPOSE 80

CMD ["npm", "run", "dev"]