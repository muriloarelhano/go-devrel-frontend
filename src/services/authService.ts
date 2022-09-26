import { LoginInfo } from '../interfaces/loginInfo';
import http from './axios';
import { tokenService } from './tokenService';

export async function login(data: LoginInfo) {
  try {
    const response = await http.get('/auth/login', {params: {...data}});

    tokenService.save(response.data.id_token);

    return (response.data);
  } catch (error) {
    console.error(error);
  }

}