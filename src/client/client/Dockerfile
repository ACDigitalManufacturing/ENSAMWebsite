FROM node:16

WORKDIR /app

COPY package.json .
RUN npm install


RUN npm -g install typescript
COPY . .

RUN npm run build

CMD ["npm", "start"]
