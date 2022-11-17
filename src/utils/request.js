import axios from "axios";
import qs from 'qs';

import router from "@/router/index.js";

const service = axios.create({
  timeout:80000,
  baseURL:process.env.NODE_ENV == "development"? '/api' : "https://api.apiopen.top",
  post:{
    "Content-Type": "application/x-www-form-urlencoded",
  }
});
//请求拦截
service.interceptors.request.use(
    (config) => {
      if(localStorage.getItem("SENPENG_TOKEN")) {
        config.headers.Authorization = localStorage.getItem("SENPENG_TOKEN");
      }
      if(config.method == "post" && config.data) {
        config.data = qs.stringify(config.data);
      }
      if(config["params"] && !config["time"]) {
        let params = Object.create(null);
        // 删除空参数
        for(let key in config["params"]) {
          if(!["", undefined].includes(config["params"][key])) {
            params[key] = config["params"][key];
          }
        }
        config["params"] = params;
      }
      //进行判断当前是否为form-data形式的请求
      if (config.headers.common.Accept === "form-data") {
         config.baseURL = "";
      }
      return config;
    },
    (error) => {
      // Do something with request error
      console.log(error); // for debug
      Promise.reject(error);
    }
);

//响应拦截
service.interceptors.response.use(
  res => {
    return res.data
  },err => {
    // if(error.res.status === 401) {
    //   Message.warning("登录信息已过期，请您重新登录！");
    //   setTimeout(() => {
    //     localStorage.removeItem("SENPENG_TOKEN");
    //     router.push({ path: "/login" });
    //   }, 1000);
    // }
    return Promise.reject(err);
  }
)

export default service;