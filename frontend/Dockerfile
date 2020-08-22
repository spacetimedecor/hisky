FROM node

WORKDIR /app/frontend
COPY package.json /app/frontend

RUN yarn global add http-server

RUN yarn install
COPY . .
RUN yarn run build

#was 3000
EXPOSE 8080
CMD [ "http-server", "dist" ]
