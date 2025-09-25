// routes.js
const createAccount = require('../controllers/auth.controllers');
const { newPostController, getAllPosts, getOnePost } = require('../controllers/post.controllers');
const routes = {
	GET: {
		'/': (req, res) => res.end('Welcome to the home page!'),
		'/posts': getAllPosts,
	},
	POST: {
		'/post': getOnePost,
		'/register': createAccount,
		'/create-post': newPostController,
	},
};

function manageRoutes(req, res) {
	const method = req.method;
	const url = req.url;

	const handler = routes[method]?.[url];

	if (handler) {
		handler(req, res);
	} else {
		res.writeHead(404, { 'Content-Type': 'text/plain' });
		res.end('Not found');
	}
}

module.exports = manageRoutes;
