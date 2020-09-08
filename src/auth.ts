import inquirer from "inquirer";
const netrc = require("netrc-parser").default;

const HOST = "api.shipengine.com";

/**
 * Login and provide the apiKey for setting in the netrc file
 */
export function login(): void {
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

/**
 * Log out and clear credentials
 */
export function logout(): void {
  clearKey();
  console.log("You are no longer logged-in to ShipEngine.");
}

/**
 * Retrieves a key if it exists in the netrc file
 * @returns {<string> | <undefined>} the key value or undefined if no key set
 */
export function getKey(): string | undefined {
  netrc.loadSync();
  const key = netrc.machines[HOST] ? netrc.machines[HOST].password : undefined;
  return key;
}

/**
 * Sets a key in the netrc file
 *
 * @param {string} apiKey The key that should be set
 */
function setKey(apiKey: string): void {
  netrc.loadSync();
  if (!netrc.machines[HOST]) {
    netrc.machines[HOST] = {};
  }
  netrc.machines[HOST].password = apiKey;
  netrc.saveSync();
}

/**
 * Clears a key in the netrc file
 */
function clearKey(): void {
  netrc.loadSync();
  if (!netrc.machines[HOST]) {
    netrc.machines[HOST] = {};
  }
  netrc.machines[HOST].password = false;
  netrc.saveSync();
}
