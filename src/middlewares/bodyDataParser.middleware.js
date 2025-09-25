const manageRoutes = require('../routes/app.routes');

function bodyDataParser(req, res) {
	let body = '';
	req.on('data', chunk => (body += chunk));
	req.on('end', () => {
		req.body = body;
		manageRoutes(req, res);
	});
}
module.exports = bodyDataParser;
