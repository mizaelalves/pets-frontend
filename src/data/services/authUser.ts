import { ApiServices } from './apiServices';


interface SignInRequestType{
  email: string;
  password: string;
}

export async function SignInRequest(data: SignInRequestType){
  await ApiServices.post('/auth/user').then((response) => {
    const token = response.data.token
    return token
  })
}

export async function recoverUserInformation(){
  await ApiServices.post('/auth/user').then((response) => {
    const token = response.data.token
   return token
  })
}