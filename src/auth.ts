import inquirer from 'inquirer';
const NetRC = require('netrc-rw');

if (!NetRC.hasHost("api.shipengine.com")) {
	NetRC.addHost("api.shipengine.com");
}

export function login() {
	if (get_key()) {
		return console.log("You are already logged in. Please logout to login as another user.");
	}
	inquirer.prompt([{
		type: 'password',
		message: 'Please enter your ShipEngine API Key:',
		name:'api_key'
	}]).then((answers: { api_key? : string }) => {
		_set_key(answers.api_key);
		console.log('You have successfully logged in.');
	});
};

export function logout() {
	_clear_key();
	console.log("You are no longer logged-in to ShipEngine.");
};

export function get_key() {
	const key = NetRC.host("api.shipengine.com").password;
	return key;
}

function _set_key(api_key? : string) {
	NetRC.host("api.shipengine.com").password = api_key;
	NetRC.write();
}

function _clear_key() {
	NetRC.host("api.shipengine.com").password = false;
	NetRC.write();
}