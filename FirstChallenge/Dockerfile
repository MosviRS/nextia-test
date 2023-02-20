FROM node:14-alpine

WORKDIR /app

COPY package.json package-lock.json ./

ENV NODE_ENV production

RUN npm install
RUN ls -lan

COPY . .

EXPOSE 3000

CMD ["npm", "start"]