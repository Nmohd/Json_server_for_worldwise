const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

server.listen(port);


// {
//   "name": "json_server_for_worldwise",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "node index.js",
//     "dev": "nodemon index.js"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC",
//   "dependencies": {
//     "cors": "^2.8.5",
//     "dotenv": "^16.3.1",
//     "json-serve": "^0.1.0",
//     "json-server": "^0.17.4",
//     "nodemon": "^3.0.2"
//   }
// }
