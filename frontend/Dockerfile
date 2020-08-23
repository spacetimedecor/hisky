FROM node

WORKDIR /app/frontend
COPY package.json /app/frontend

RUN yarn global add serve

RUN yarn install
COPY . .
RUN yarn run build

#was 3000
EXPOSE 5000
CMD [ "serve", "-s", "dist" ]
