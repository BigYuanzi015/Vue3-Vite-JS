/**
 * 使用Pinia定义一个名为demo的store。
 *
 * @returns {Object} 返回一个包含counter和increment方法的对象。
 */
import { defineStore } from "pinia";
import { ref } from "vue";

const useDemoStore = defineStore("demo", () => {
  // 初始化一个计数器，初始值为0
  const counter = ref(0);

  /**
   * 计数器加一。
   */
  const increment = () => {
    counter.value++;
  };

  // 返回计数器和增加方法
  return {
    counter,
    increment,
  };
});

export default useDemoStore;
