const checkAccountDuplication = require('../utils/checkAccountDuplication');
const addNewUser = require('../utils/addNewUser');
function createAccount(req, res) {
	const { name, email, password, isadmin } = JSON.parse(req.body);
	const duplicateAccount = checkAccountDuplication(email);
	if (duplicateAccount) return res.end('Account already exists, change you email!');
	let user = {
		name: name,
		email: email,
		password: password,
		isadmin: isadmin
	}
	const addingNewUser = addNewUser(user);
	if(addingNewUser){
		return res.end('account created successfully');
	}
	res.end('failed to create account');
	
}
module.exports = createAccount;
