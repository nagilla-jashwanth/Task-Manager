import axios from "axios";

export const api = axios.create({
  baseURL: "https://task-manager-backend-0t4n.onrender.com"
});
