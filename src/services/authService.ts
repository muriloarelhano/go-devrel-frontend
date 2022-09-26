import { LoginInfo } from '../interfaces/loginInfo';
import http from './axios';

export async function login(data: LoginInfo) {
  try {
    const response = await http.get('/auth/login', {params: {...data}});
    return (response.data);
  } catch (error) {
    console.error(error);
  }

}