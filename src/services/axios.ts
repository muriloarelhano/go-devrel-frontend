import axios from "axios";

const http = axios.create({ baseURL: "https://godevrelbackend.fly.dev" });

export default http;
