const fs = require('fs');
const path = require('path');

const checkAccountDuplication = require('../utils/checkAccountDuplication');
const createNewPost = require('../utils/createNewPost');
function newPostController(req, res) {
	const { title, description, views, likes, userEmail } = JSON.parse(req.body);
	const isLoggedIn = checkAccountDuplication(userEmail);
	if (!isLoggedIn) return res.end('please login first to create post');
	const id = Math.floor(Math.random() * 1000000) + 1;
	let newPost = {
		title,
		title,
		description: description,
		views: views,
		likes: likes,
		userEmail: userEmail,
		id: id,
	};
	const creatingPost = createNewPost(newPost);
	if (creatingPost) return res.end('post created successfully...👍');
	res.end('failed to create post, try again later!');
}

function getAllPosts(req, res) {
	
}

module.exports = { newPostController, getAllPosts };
