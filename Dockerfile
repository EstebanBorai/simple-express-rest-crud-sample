FROM node

RUN mkdir -p /node-express-simple/

COPY package.json .
RUN npm install

COPY . .

EXPOSE 8080

CMD npm run server
