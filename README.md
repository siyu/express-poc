express-poc: vuejs/expressjs/nodejs proof of concept


Instructions

## install nodemon (auto node server restart)
npm install nodemon -g

## setup client
cd client
npm install
## start client
npm run dev
## URL
http://localhost:8080/
## build for production
npm run build (will generate all client code in dist folder)

## setup server
cd server
npm install
## start server
option 1) from terminal: npm start
option 2) from vs code: 
  Setup: -> Debug -> Open Configuration -> launch.json -> Add Configuration -> Choose Nodemon Setup -> Update "program": "${workspaceFolder}/server/src/app.js"
  Start: -> Debug -> Start Debugging
## URL
http://localhost:8081/


## TODO
extract route from app.js
setup controllers
setup models
eploy to AWS
database (connect, save, read, update, delete)