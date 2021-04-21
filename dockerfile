FROM node:14.16.0
EXPOSE 3000
WORKDIR /dapp
COPY package.json /dapp
COPY . /dapp
RUN npx yarn install 
CMD npx yarn start