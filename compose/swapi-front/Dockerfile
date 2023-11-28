FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

ENV PORT 3000

COPY . .

RUN npm run build

EXPOSE $PORT

CMD ["npm","run","start"]

