<!-- 404页面 -->
<template>
  <a-result status="404" title="404" sub-title="对不起，该页面未找到">
    <template #extra>
      <a-button type="primary" @click="goMain">返回主页</a-button>
    </template>
  </a-result>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter(); // 路由

/**
 * 返回主页
 */
function goMain() {
  router.push("/");
}
</script>
