import inquirer from "inquirer";
const NetRC = require("netrc-rw");

const HOST = "api.shipengine.com";

if (!NetRC.hasHost(HOST)) {
  NetRC.addHost(HOST);
}

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
  const key = NetRC.host(HOST).password;
  return key;
}

function setKey(apiKey: string) : void {
  NetRC.host(HOST).password = apiKey;
  NetRC.write();
}

function clearKey(): void {
  NetRC.host(HOST).password = false;
  NetRC.write();
}
