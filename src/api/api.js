import axios from "axios";

// const API = axios.create({ baseURL: 'http://localhost:4000/api/'});
// const API = axios.create({baseURL:"http://localhost/profinsummit/api/v1"})
const API = axios.create({
  baseURL: "https://profxsummit.com/adminpanel/api/v1",
});


API.interceptors.request.use((request) => {
  const token = localStorage.getItem("token");
  const basicAuth = `Basic ` + btoa("profxsummit:772414293281728");
  request.headers.authorization = basicAuth;
  if (token) {
    request.headers.token = `Bearer ${token}`;
  }
  return request;
});

API.interceptors.response.use((response) => {
  return response;
});

export default API;
