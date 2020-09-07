import axios, { AxiosResponse } from "axios";
import { getKey } from "./auth";
import { handleAPIError } from "./error";

interface Carrier {
  readonly friendly_name: string;
  readonly carrier_id: string;
}

export function list() {
  const apiToken = getKey();
  if (!apiToken) {
    console.log("Please log in to access your account resources.");
    return;
  }

  axios
    .get<Carrier[]>("https://api.shipengine.com/v1/carriers", {
      headers: { "API-Key": apiToken },
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
