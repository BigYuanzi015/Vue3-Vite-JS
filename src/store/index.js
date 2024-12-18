/**
 * @file store/index.js
 * @description 设置并导出 Pinia 实例，用于在整个项目中提供状态管理。
 * @author BigYuanZi015
 * @date 2024-12-18
 * @lastModified 2024-12-18
 * @version 1.0.0
 */

// 导入 Pinia 库
import { createPinia } from "pinia";
// 创建 Pinia 实例
const pinia = createPinia();
// 导出 Pinia 实例
export default pinia;
