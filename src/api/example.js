import request from "@/utils/axios/index.js"; // 引入刚才封装好的axios实例

/**
 * 发起一个GET请求来获取数据
 * @param {Object} params - 请求携带的参数，将被合并到请求的params对象中
 * @return {Promise} 返回一个Promise对象，用于处理请求的成功与失败
 */
export function exampleGet(params) {
  // 使用request函数发起GET请求，配置请求的URL、方式以及参数
  return request({
    url: "/example/get", // 接口地址
    method: "get", // 请求方式
    params: { ...params },
  });
}
