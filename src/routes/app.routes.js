const createAccount = require('../controllers/auth.controllers');
const createNewPost = require('../controllers/post.controllers');

function manageRoutes(req, res) {
	const url = req.url;

	switch (url) {
		case '/':
			res.end('wellcome to the home page!');
			break;
		case '/register':
			createAccount(req, res);
			break;
		case '/create-post':
			createNewPost(req, res);
			break;
		case '/':
			res.end('wellcome to the home page!');
			break;

		default:
			break;
	}
}

module.exports = manageRoutes;
