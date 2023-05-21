import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_HOST ?? "http://localhost:4000",
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem("id_token")}`,
  },
});

export default http;
