import axios from "axios";
import { parseCookies } from "nookies";

const { "pet-token": token } = parseCookies();

export const ApiServices = axios.create({
  baseURL: "https://adoteumpet-backend.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json"
  },
});

export const AuthHeader = {
  headers:{
    'Authorization': `Bearer ${token}` 
  }
}