const users = require('../database/users.json');
function checkAccountDuplication(email) {
	for (const user of users) {
		if (user.email == email) {
			return true;
		}
	}
	return false;
}

module.exports = checkAccountDuplication;
