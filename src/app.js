const http = require('http');

const bodyDataParser = require('./middlewares/bodyDataParser.middleware');

const server = http.createServer((req, res) => {
	bodyDataParser(req, res);
});

module.exports = server;
