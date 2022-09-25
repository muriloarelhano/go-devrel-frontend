import { CreateUser } from '../interfaces/createUser';
import http from './axios';

export async function getUser() {
  try {
    const response = await http.get('/user');
    return (response);
  } catch (error) {
    console.error(error);
  }
}

export async function createUser(data: CreateUser) {
  try {
    const response = await http.post('/user', { ...data });
    return (response.data);
  } catch (error) {
    console.error(error);
  }

}

export async function updateUser() {
  try {
    const response = await http.put('/user');
    return (response);
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