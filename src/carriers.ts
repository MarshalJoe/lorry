import axios, {
  AxiosResponse,
  AxiosError,
} from 'axios';
import { get_key } from './auth';

interface Carrier {
	readonly friendly_name: string,
	readonly carrier_id: string,
};

export function list() {
	const api_token = get_key();
	if (!api_token) {
		console.log("Please log in to access your account resources.");
		return;
	}

	axios.get<Carrier[]>('https://api.shipengine.com/v1/carriers', {
		headers: { 'API-Key': api_token },
	})
  	.then((response: AxiosResponse) => {
  		const { carriers } = response.data;
  		console.log(`You have ${carriers.length} carrier accounts connected:`);
  		if (carriers.length > 0) {
  			for (var i in carriers) {
  				console.log(`- ${carriers[i].friendly_name} (${carriers[i].carrier_id})`);
  			}
  		}
  	})
  	.catch((error: AxiosError) => {
  		if (error.response) {
		    console.log(error.response.data);
		    console.log(error.response.status);
		    console.log(error.response.headers);
		    console.log(error);
		  } else {
		    console.log(error.message);
		  }
  	});
}