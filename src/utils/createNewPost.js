const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../database/posts.json');

function createNewPost(post) {
	try {
		// 1. Read the current users
		const data = fs.readFileSync(filePath, 'utf8');
		const posts = JSON.parse(data);

		// 2. Add the new user
		posts.push(post);

		// 3. Save back to the JSON file
		fs.writeFileSync(filePath, JSON.stringify(posts, null, 2), 'utf8');

		return true;
	} catch (error) {
		console.error('Error creating post:', error);
		return false;
	}
}

module.exports = createNewPost;
