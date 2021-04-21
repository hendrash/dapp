FROM node:10
EXPOSE 3000
WORKDIR /dapp
COPY package.json /dapp
RUN npx yarn install && npx yarn build
COPY . /dapp
CMD npx yarn start