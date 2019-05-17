FROM node

RUN mkdir -p /node-express-simple/server/

WORKDIR /node-express-simple/server/

COPY package.json .
RUN npm install

COPY . .

EXPOSE 4200

CMD npm run start
