import inquirer from "inquirer";
const netrc = require('netrc-parser').default

const HOST = "api.shipengine.com";

export function login() : void {
  if (getKey()) {
    return console.log(
      "You are already logged in. Please logout to login as another user.",
    );
  }
  inquirer
    .prompt([
      {
        type: "password",
        message: "Please enter your ShipEngine API Key:",
        name: "api_key",
      },
    ])
    .then((answers: { api_key: string }) => {
      setKey(answers.api_key);
      console.log("You have successfully logged in.");
    });
}

export function logout() : void {
  clearKey();
  console.log("You are no longer logged-in to ShipEngine.");
}

export function getKey(): string {
  netrc.loadSync();
  const key = netrc.machines[HOST].password;
  return key;
}

function setKey(apiKey: string) : void {
  netrc.loadSync();
  netrc.machines[HOST].password = apiKey;
  netrc.saveSync();
}

function clearKey(): void {
  netrc.loadSync();
  netrc.machines[HOST].password = false;
  netrc.saveSync();
}
