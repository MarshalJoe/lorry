import inquirer from 'inquirer';
const NetRC = require('netrc-rw');

if (!NetRC.hasHost('shipengine.com')) {
	NetRC.addHost('shipengine.com')
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
		const api_key = answers.api_key;
		_set_key(api_key);
		console.log('You have successfully logged in.');
	});
};

export function logout() {
	_clear_key();
	console.log("You are no longer logged-in to ShipEngine.");
};

export function get_key() {
	let key = NetRC.host('shipengine.com').password;
	return key;
}

function _set_key(api_key? : string) {
	NetRC.host('shipengine.com').password = api_key;
	NetRC.write();
}

function _clear_key() {
	NetRC.host('shipengine.com').password = false;
	NetRC.write();
}