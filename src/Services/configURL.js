import axios from "axios";
import {
  offLoadingAction,
  onLoadingAction,
} from "../Redux/Actions/spinnerAction";
import { store } from "../index";
import { localStorageService } from "./localStorageService";

// export const TOKEN = process.env.REACT_APP_API_TOKEN;
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MCIsIkhldEhhblN0cmluZyI6IjE4LzAxLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNTUzNjAwMDAwMCIsIm5iZiI6MTY3NzQzMDgwMCwiZXhwIjoxNzA1NjgzNjAwfQ.s4X0R0Wi80X0f9MLJ2XYxRKJdQJBW27dwvkpfN03100";
export const https = axios.create({
  //   baseURL: process.env.REACT_APP_API_URL,
  baseURL: "https://movienew.cybersoft.edu.vn",
  headers: {
    TokenCybersoft: TOKEN,
    Authorization: "Bearer " + localStorageService.user.get()?.accessToken,
  },
});

// Add a request interceptor
https.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    store.dispatch(onLoadingAction());
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    store.dispatch(offLoadingAction());
    return response;
  },
  function (error) {
    store.dispatch(offLoadingAction());
    return Promise.reject(error);
  }
);
