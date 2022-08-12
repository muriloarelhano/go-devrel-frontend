import http from '../http';
import { CreateUser } from '../interfaces/createUser';

export async function getUser() {
  try {
    const response = await http.get('/user');
    return(response);
  } catch (error) {
    console.error(error);
  }
}

export async function createUser(data: CreateUser) {
  try {
    const response = await http.post('/user', {data});
    return(response);
  } catch (error) {
    console.error(error);
  }
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