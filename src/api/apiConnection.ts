import axios from "axios";

const apiConnection = axios.create({
  baseURL: "http://192.168.0.102:8002/api",
});

export default apiConnection;
