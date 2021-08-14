//此文件是axios配置类
import axios from "axios";
import { Message } from "element-ui";
// //配置Nprogress
// import Nprogress from "nprogress";
// import "nprogress/nprogress.css";
const service = axios.create({
  baseURL: "http://localhost:80",
  timeout: 2000,
});

// 添加请求拦截器
service.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    // Nprogress.start(); //显示进度条
    //修改header中的token
    config.headers.common["token"] = sessionStorage.getItem("token") || "";
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    // Nprogress.done(); //完成进度条

    Message({
      message: error.message,
      type: "error",
    });
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function(response) {
    // Nprogress.done(); //完成进度条
    return response;
  },
  function(error) {
    // Nprogress.done(); //完成进度条
    // 对响应错误做点什么
    // Message({
    //   message: error.message,
    //   type: "error",
    // });
    return error;
  }
);
export default service;
