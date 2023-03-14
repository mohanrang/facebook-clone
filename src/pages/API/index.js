import Axios from "axios";
import config from "../config/config";

const axios = Axios.create({
  baseURL: config.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// axios.interceptors.request.use(
//   function () {
//     const token = localStorage.getItem("auth-token");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

export default axios;
