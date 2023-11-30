FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

ENV BASE_URL=http://localhost:80

COPY . .

RUN npm run build

EXPOSE $PORT

CMD ["npm","run","dev"]

