import { createApp } from "vue";
import "@/assets/styles/global.css";
import App from "./App.vue";
/**
 * 引入AntV
 */
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

/**
 * 引入Pinia
 */
import pinia from "@/store";

/**
 * 引入路由
 */
import router from "@/router";

/**
 * 创建Vue实例
 */
const app = createApp(App);

/**
 * 挂载AntV
 */
app.use(Antd);

/**
 * 挂载Pinia
 */
app.use(pinia);

/**
 * 挂载路由
 */
app.use(router);

/**
 * 挂载Vue实例
 */
app.mount("#app");
