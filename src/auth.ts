import inquirer from 'inquirer';

export function login () {
	inquirer.prompt([{
		type: 'password',
		message: 'Please enter your ShipEngine API Key:',
		name:'api_key'
	}]).then((answers: object) => {
		console.log(JSON.stringify(answers, null, '  '));
		console.log('You have successfully logged in.');
	});
};

export function logout () {
	console.log("Logging out...");
};