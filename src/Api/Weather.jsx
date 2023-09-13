import axios from "axios";

   export  const api = axios.create({ 
    baseURL : 'https://api.openweathermap.org/data/2.5'
  }) 

 export const api_key = 'a7e8fc7d7c2077dbb15abe827afc593f'
