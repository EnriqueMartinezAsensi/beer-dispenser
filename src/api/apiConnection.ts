import axios from "axios";

const apiConnection = axios.create({
  baseURL: "http://localhost:8002/api",
});

export default apiConnection;
