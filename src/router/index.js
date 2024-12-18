/**
 * @file router/index.js
 * @description 路由配置文件，定义了应用的所有路由及其导航守卫。
 * @author BigYuanZi015
 * @date 2024-12-18
 * @lastModified 2024-12-18
 * @version 1.0.0
 */

// 导入 Vue Router
import * as VueRouter from "vue-router";
import { HTML_BASE_TITLE } from "@/config/constants";
import layoutVue from "@/layout/layoutIndex.vue";

// 路由配置
const routes = [
  {
    path: "/", // 根路径，重定向到 /index
    name: "main", // 主路由的名称
    redirect: "/index", // 重定向到 /index 页面
    component: layoutVue, // 加载主页面组件
    children: [
      {
        path: "/index", // 示例页面路径
        name: "example", // 示例页面的路由名称
        meta: {
          name: "示例页面", // 页面名称
          title: "", // 页面标题，将动态生成
          icon: "SettingOutlined",
        },
        component: () => import("@/views/example/examplePage.vue"), // 示例页面组件
      },
    ],
  },
  {
    path: "/:catchAll(.*)", // 捕获所有未匹配的路由，显示 404 页面
    name: "404", // 404 页面的路由名称
    component: () => import("@/views/error/NotFoundPage.vue"), // 加载 404 页面组件
  },
];
// 创建并配置 Vue Router 实例
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(), // 使用 hash 模式
  routes, // 设置路由
});
// 路由导航守卫：每次路由变化前，动态设置页面标题
router.beforeEach((to, from, next) => {
  // 如果路由的 meta 中有 name 字段，则动态生成 title
  if (to.meta.name) {
    to.meta.title = to.meta.name + HTML_BASE_TITLE; // 根据 name 动态设置 title
  }
  // 如果路由的 meta 中有 title 字段，则更新页面标题
  if (to.meta.title) {
    document.title = to.meta.title; // 更新页面标题
  }
  next(); // 确保导航继续
});

export default router;
