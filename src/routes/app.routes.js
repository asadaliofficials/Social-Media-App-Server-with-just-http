const { get } = require('http');
const createAccount = require('../controllers/auth.controllers');
const { newPostController, getAllPosts } = require('../controllers/post.controllers');

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
			newPostController(req, res);
			break;
		case '/posts':
			getAllPosts(req, res);
			break;

		default:
			break;
	}
}

module.exports = manageRoutes;
