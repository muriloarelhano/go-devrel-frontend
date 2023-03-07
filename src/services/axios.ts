import axios from "axios";


console.log(process.env.REACT_APP_BACKEND_API_HOST)

const http = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_HOST ?? "http://localhost:4000",
});
// const http = axios.create({ baseURL: "https://godevrelbackend.fly.dev" });

export default http;
