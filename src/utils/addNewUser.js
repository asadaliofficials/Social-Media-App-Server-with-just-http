const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../database/users.json');

function addNewUser(user) {
	try {
		// 1. Read the current users
		const data = fs.readFileSync(filePath, 'utf8');
		const users = JSON.parse(data);

		// 2. Add the new user
		users.push(user);

		// 3. Save back to the JSON file
		fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf8');

		return true;
	} catch (error) {
		console.error('Error adding user:', error);
		return false;
	}
}

module.exports = addNewUser;
