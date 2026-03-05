import axios from "axios";

const api = axios.create({
  baseURL: "http://YOUR_LOCAL_IP:5000"
});

export default api;