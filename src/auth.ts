import inquirer from "inquirer";
const NetRC = require("netrc-rw");

if (!NetRC.hasHost("api.shipengine.com")) {
  NetRC.addHost("api.shipengine.com");
}

export function login() {
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
    .then((answers: { api_key?: string }) => {
      setKey(answers.api_key);
      console.log("You have successfully logged in.");
    });
}

export function logout() {
  clearKey();
  console.log("You are no longer logged-in to ShipEngine.");
}

export function getKey() {
  const key = NetRC.host("api.shipengine.com").password;
  return key;
}

function setKey(apiKey?: string) {
  NetRC.host("api.shipengine.com").password = apiKey;
  NetRC.write();
}

function clearKey() {
  NetRC.host("api.shipengine.com").password = false;
  NetRC.write();
}
