import axios, { AxiosResponse } from "axios";
import { getKey } from "./auth";
import { handleAPIError } from "./error";

interface Carrier {
  readonly friendly_name: string;
  readonly carrier_id: string;
}

export default abstract class Carriers {
  private static apiURL: string = "https://api.shipengine.com";
  private static apiToken: string | undefined;

  /**
   * Checks for the presence of the apiToken and returns a boolean for if it exists
   * @returns {boolean} returns whether the apiToken / auth has been setup
   */
  private static setup(): boolean {
    this.apiToken = getKey();
    if (!this.apiToken) {
      console.log("Please log in to access your account resources.");
      return false;
    } else {
      return true;
    }
  }

  /**
   * Lists carrier resources
   */
  public static list(): undefined | void {
    if (!this.setup()) return;

    axios
      .get<Carrier[]>(`${this.apiURL}/v1/carriers`, {
        headers: { "API-Key": this.apiToken },
      })
      .then((response: AxiosResponse) => {
        const { carriers } = response.data;
        console.log(`You have ${carriers.length} carrier accounts connected:`);
        if (carriers.length > 0) {
          for (const carrier of carriers) {
            console.log(`- ${carrier.friendly_name} (${carrier.carrier_id})`);
          }
        }
      })
      .catch(handleAPIError);
  }
}
