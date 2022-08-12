import axios from "axios";
import { parseCookies } from "nookies";



export function getAPIClient(ctx?: any){
  const { "pet-token": token } = parseCookies(ctx);
  const api = axios.create({
    baseURL: "https://adoteumpet-backend.herokuapp.com/api",
    headers: {
      "Content-Type": "application/json"
    },
  });
  
  const AuthHeader = {
    headers:{
      'Authorization': `Bearer ${token}` 
    }
  }

  return {AuthHeader, api}
}
