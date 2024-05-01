import axios from "axios";

export const tasksInstance = axios.create({
  baseURL: "https://localhost:3000/api",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
  withCredentials: true,
});
