/**
 * @file services/index.js
 * @description 配置并导出 Axios 请求实例，包含请求拦截器和响应拦截器，用于处理认证（Token）以及通用错误（如登录失效）。
 * @author BigYuanZi015
 * @date 2024-12-18
 * @lastModified 2024-12-18
 * @version 1.0.0
 */

// 导入必要的库和工具函数
import axios from "axios";
import router from "@/router/index.js";
import { getToken, removeToken, removeUser } from "@/utils/Auth";
import { notification } from "ant-design-vue";
import { API_BASE_URL } from "@/config/constants";

// 创建通知容器实例
const [api, contextHolder] = notification.useNotification();
// 创建 Axios 实例
const request = axios.create({
  baseURL: API_BASE_URL, // 设置API的基础URL
  timeout: 3 * 60 * 1000, // 设置请求超时时间为3分钟
  headers: {
    "Content-Type": "application/json;charset=utf-8", // 设置请求头中的Content-Type
  },
});
// 请求拦截器：每次发送请求前，添加Token（如果有的话）
request.interceptors.request.use(
  (config) => {
    // 获取 Token 并将其添加到请求头的 Authorization 字段中
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error);
  },
);
// 响应拦截器：处理响应结果，并进行通用错误处理
request.interceptors.response.use(
  (res) => {
    // 从响应中解构数据
    const { status, data } = res;
    const { code, data: body } = data;
    // 返回响应数据
    return data;
  },
  (error) => {
    // 处理响应错误
    console.error(error, "error");
    // 当错误状态为 401（未授权）时，表示 Token 已失效
    if (error.response.status === 401) {
      api.info({
        message: "登录失效，请重新登录",
        description: "即将返回登录页重新登录！",
        topRight: 50, // 显示位置
      });
      // 跳转到登录页面
      router.push({ name: "login" });
      // 清除存储的 Token 和用户信息
      removeToken();
      removeUser();
    }

    // 返回 Promise.reject，携带响应数据以便后续处理
    return Promise.reject(error.response.data);
  },
);
// 导出 Axios 请求实例
export default request;
