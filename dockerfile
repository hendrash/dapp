FROM node:14.16.0
EXPOSE 3000
WORKDIR /dapp
COPY package.json /dapp
COPY . /dapp
RUN npx yarn install 
CMD npx yarn start

# sudo docker build -t my-nodejs-app .
# sudo docker run -it -p 3000:3000 my-nodejs-app
