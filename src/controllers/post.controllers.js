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
	const filePath = path.join(__dirname, '../database/posts.json');
	try {
		// 1. Read the current users
		const data = fs.readFileSync(filePath, 'utf8');
		const posts = JSON.parse(data);

		return res.end(JSON.stringify(posts));
	} catch (error) {
		console.error('failed to get all posts:', error);
		return res.end('failed to get all posts, try again later!');
	}
}

function getOnePost(req, res) {
	const { id } = JSON.parse(req.body);
	const filePath = path.join(__dirname, '../database/posts.json');
	try {
		// 1. Read the current users
		const data = fs.readFileSync(filePath, 'utf8');
		const posts = JSON.parse(data);
		for (const post of posts) {
			console.log(post.id + '===' + id);
			if (post.id == id) {
				return res.end(JSON.stringify(post));
			}
		}
		return res.end('post not found!');
	} catch (error) {
		console.error('failed to get post:', error);
		return res.end('failed to get post, try again later!');
	}
}

module.exports = { newPostController, getAllPosts, getOnePost };
