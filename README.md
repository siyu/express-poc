# express-poc: vuejs/expressjs/nodejs proof of concept


### Instructions

Install nodemon (auto node server restart)
``` bash
npm install nodemon -g
```

setup client
``` bash
cd client
npm install
```

start client
``` bash
npm run dev
```

URL: http://localhost:8080/

build for production (will generate all client code in dist folder)
``` bash
npm run build 
```

setup server
``` bash
cd server
npm install
```

start server
  - from terminal: npm start
  - from vs code: 
    - Setup: -> Debug -> Open Configuration -> launch.json -> Add Configuration -> Choose Nodemon Setup -> Update "program": "${workspaceFolder}/server/src/app.js"
    - Start: -> Debug -> Start Debugging
    
URL: http://localhost:8081/


### TODO
- extract route from app.js
- setup controllers
- setup models
- deploy to AWS
- database (connect, save, read, update, delete)
