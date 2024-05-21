<!-- 404页面 -->
<template>
  <div class="btn">
    <el-button round @click="goMain()">返回主页</el-button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

/**
 * 返回主页
 */
function goMain() {
  router.push("/");
}
</script>

<style lang="scss" scoped></style>
