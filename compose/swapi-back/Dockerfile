FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

ENV PORT 8000

COPY . .

EXPOSE $PORT

CMD ["node","app.mjs"]

