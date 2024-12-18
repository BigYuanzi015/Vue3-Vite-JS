/**
 * @file store/modules/example.js
 * @description 使用 Pinia 定义一个名为 demo 的状态管理 store，包含计数器和操作计数器的增量方法。
 * @author BigYuanZi015
 * @date 2024-12-18
 * @lastModified 2024-12-18
 * @version 1.0.0
 */

// 导入 Pinia 的 defineStore 和 Vue 的 ref
import { defineStore } from "pinia";
import { ref } from "vue";

// 定义一个名为 "demo" 的 store
const useDemoStore = defineStore("demo", () => {
  // 初始化一个计数器，初始值为 0
  const counter = ref(0);
  /**
   * 计数器加一的方法。
   * 每次调用该方法，计数器的值增加 1。
   */
  const increment = () => {
    counter.value++;
  };
  // 返回计数器和增量方法，供组件访问
  return {
    counter,
    increment,
  };
});
// 导出 useDemoStore 供其他组件使用
export default useDemoStore;
