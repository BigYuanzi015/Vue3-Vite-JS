import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

/**
 * Vite配置文件
 * 详细配置说明请访问: https://vitejs.dev/config/
 * @returns Vite配置对象
 */
export default defineConfig({
  // 使用的插件列表
  plugins: [vue()],
  // 静态资源的基础路径
  base: "./",
  // 文件解析配置
  resolve: {
    // 支持的文件扩展名
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    // 别名设置，用于快速引用路径
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // 构建相关配置
  build: { assetsPublicPath: "./" },
  // 服务器配置
  server: {
    // 服务器监听端口
    port: 8080,
    // 配置代理，用于将本地开发服务器的请求转发到指定的目标服务器
    proxy: {
      "/api": {
        target: "http://example.com/",
        changeOrigin: true,
      },
    },
  },
});
