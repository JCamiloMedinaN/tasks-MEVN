import axios from "axios"

export const tasksInstance = axios.create({
  baseURL: "https://localhost:3000/api",
  withCredentials: true
});
