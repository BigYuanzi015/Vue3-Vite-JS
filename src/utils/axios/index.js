import axios from "axios";
import { getToken, removeToken, removeUser } from "@/utils/Auth";
import router from "@/router/index.js";
import { notification } from "ant-design-vue";

const [api, contextHolder] = notification.useNotification();

const request = axios.create({
  baseURL: "/api",
  timeout: 3 * 60 * 1000, //设置过期时间
  headers: {
    "Content-Type": "application/json;charset=utf-8", //设置请求头中的属性
  },
});

// 拦截请求，主要用于向请求头中添加token等操作
request.interceptors.request.use(
  (config) => {
    // 对请求配置进行修改
    config.headers["Authorization"] = getToken() || null;
    return config;
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error);
  },
);

// 拦截响应结果。主要是对一些通用错误进行处理，例如token过期等情况
request.interceptors.response.use(
  (res) => {
    const { status, data } = res;
    const { code, data: body } = data;
    return data;
  },
  (error) => {
    console.error(error, "error");
    if (error.response.status === 401) {
      api.info({
        message: `登录失效，请重新登录`,
        description: "即将返回登录页重新登录！",
        topRight,
      });
      router.push({
        name: "login",
      });
      removeToken();
      removeUser();
    }
    return Promise.reject(error.response.data);
  },
);

export default request;
