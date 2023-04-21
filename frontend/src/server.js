import axios from "axios";

const PROXY_URL = "http://localhost:8080/";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: PROXY_URL,
});

export const userRequest = axios.create({
  baseURL: PROXY_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
