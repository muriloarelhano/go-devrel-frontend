import { CreateUser } from "../interfaces/user/CreateUser";
import { UpdateUser } from "../interfaces/user/UpdateUser";
import http from "./axios";

export async function getUser() {
  try {
    const response = await http.get("/user");
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function createUser(data: CreateUser) {
  try {
    const response = await http.post("/user", { ...data });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateUser(data: UpdateUser) {
  try {
    return await http.put("/user", data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteUser() {
  try {
    await http.delete("/user");
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getManyUsersByIds(ids: string[]) {
  try {
    return (
      await http.post("/user/admin/get-by-ids", {
        ids,
      })
    ).data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function resetPassword(data: {
  password: string;
  newPassword: string;
}) {
  try {
    await http.put("/user/reset-password", data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
