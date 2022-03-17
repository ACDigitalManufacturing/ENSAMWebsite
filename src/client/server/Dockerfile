FROM node:16

WORKDIR /app

COPY package.json .
RUN npm install


RUN npm -g install typescript
COPY . .

ENV NODE_ENV=PRODUCTION
ENV DB_CONNECTION_STRING="mongodb+srv://client:XbgtJnVqzbSmVT9@cluster0.icygy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

CMD ["npm", "start"]
