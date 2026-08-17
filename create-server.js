//How to import a module

const http = require("http");
//variable = require(“module name”)

//create a server
//request - client to server
//response - server to client
const server = http.createServer((request, response) => {
	response.write("<h1>Hello World<h1>");
	response.end();
});

//add a port number
server.listen(3000, () => {
	console.log("server is running");
});
