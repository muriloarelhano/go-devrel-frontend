import { CreateUser } from '../interfaces/createUser';
import http from './axios';

export async function getUser() {
  try {
    const response = await http.get('/user');
    return(response);
  } catch (error) {
    console.error(error);
  }
}

export async function createUser(data: CreateUser) {
    const response = await http.get('/user', {data,   headers: { 'Content-Type': "multipart/form-data" }});
    return(response);

}

export async function updateUser() {
  try {
    const response = await http.put('/user');
    return(response);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteUser() {
  try {
 await http.delete('/user');

  } catch (error) {
    console.error(error);
  }
}