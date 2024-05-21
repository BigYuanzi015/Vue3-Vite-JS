// router index 基础配置文件
import * as VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    name: "main",
    redirect: "/index",
    component: () => import("@/views/index/indexPage.vue"),
    children: [
      {
        path: "/index",
        name: "example",
        meta: {
          name: "示例页面",
        },
        component: () => import("@/views/example/examplePage.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("@/views/error/NotFoundPage.vue"),
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes,
});

export default router;
