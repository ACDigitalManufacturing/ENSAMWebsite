FROM node:latest

WORKDIR /app

RUN npm install pm2@latest -g
RUN npm install typescript -g

# RUN makdir ./client & makdir./server

COPY client/package.json client/package.json
COPY server/package.json server/package.json

RUN ls
RUN cd ./client && ls 
RUN npm --version

RUN cd ./client && npm  cache clear --force && npm install
RUN cd ./server && npm  cache clear --force && npm install
# RUN cd ..

COPY . .
RUN cd ./client && npm build
RUN cd ./server && npm build



CMD ["sh","./run_servers.sh"]

# next js client server running on port 3000
EXPOSE 3000
# node js express api server running on port 3000
EXPOSE 5000 