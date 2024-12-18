<!-- 布局界面 -->
<template>
  <div class="layout-index-page">
    <a-layout>
      <a-layout-sider
        v-model:collapsed="collapsed"
        :trigger="null"
        breakpoint="lg"
        collapsed-width="80"
        collapsible
      >
        <div class="logo"></div>
        <a-menu
          v-model:selectedKeys="selectedKeys"
          :items="menuData"
          theme="dark"
          mode="inline"
          @click="handleClick"
        >
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header class="layout-index-page-header">
          <menu-unfold-outlined
            v-if="collapsed"
            class="header-trigger"
            @click="handleCollapse"
          />
          <menu-fold-outlined
            v-else
            class="header-trigger"
            @click="handleCollapse"
          />
        </a-layout-header>
        <a-layout-content class="layout-index-page-content">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script setup>
import { ref, onMounted, h, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
import {
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons-vue";

const selectedKeys = ref([]); // 当前选中菜单
const collapsed = ref(false); // 侧边栏折叠状态
const router = useRouter(); // 路由实例
const ICONS = {
  SettingOutlined,
  // 其他图标
};
const menuData = ref([]); // 菜单数据

/**
 * 初始化菜单数据
 */
function initMenu() {
  const menu = router.options.routes.filter(
    (item) => item.path == "/" && item.name === "main",
  );
  if (menu && menu.length > 0) {
    menuData.value = generateMenuItems(menu[0].children);
    // 获取当前路由的信息
    const currentPath = router.currentRoute.value.path;
    // 找到当前路由对应的菜单项
    const selectedMenuItem = findMenuItemByPath(menuData.value, currentPath);
    // 如果找到了匹配的菜单项，更新选中的菜单项
    if (selectedMenuItem) {
      selectedKeys.value = [selectedMenuItem.key];
      // 如果有父菜单，也要选中父菜单
      if (selectedMenuItem.children) {
        selectedKeys.value = selectedKeys.value.concat(
          selectedMenuItem.children.map((item) => item.key),
        );
      }
    }
  } else {
    message.error("菜单加载失败！请检查菜单路由配置！");
  }
}

/**
 * 根据路径查找匹配的菜单项
 * @param {Array} items 菜单项
 * @param {string} path 当前路径
 * @returns {Object|null} 返回匹配的菜单项
 */
function findMenuItemByPath(items, path) {
  for (let item of items) {
    if (item.key === path) {
      return item; // 如果路径匹配，返回该菜单项
    }
    // 如果有子菜单，递归查找
    if (item.children) {
      const childItem = findMenuItemByPath(item.children, path);
      if (childItem) {
        return childItem; // 找到子项，返回
      }
    }
  }
  return null; // 未找到匹配的菜单项
}

/**
 * 创建一个列表项对象
 *
 * @param {string} label - 列项的标签
 * @param {string} key - 列项的唯一键值
 * @param {string} icon - 列项的图标
 * @param {Array} children - 列项的子列表
 * @param {string} type - 列项的类型
 * @returns {Object} 返回一个包含列表项信息的对象
 */
function getItem(label, key, icon, children, type) {
  return { key, icon, children, label, type };
}

/**
 * 根据路由配置生成菜单项
 * @param {Array} routes - 路由配置数组
 * @returns {Array} - 生成的菜单项数组
 */
function generateMenuItems(routes) {
  return routes.map((route) => {
    // 如果路由有 `meta` 配置，使用它来设置菜单项
    const { path, meta, children } = route;
    // 获取路由的图标
    const icon = meta?.icon ? ICONS[meta.icon] : null;
    // 生成当前路由的菜单项
    const menuItem = getItem(
      meta?.name,
      path,
      icon ? () => h(icon) : null, // 如果有 icon 就生成图标节点
      children ? generateMenuItems(children) : null, // 如果有子路由，递归处理
    );
    return menuItem;
  });
}

/**
 * 控制菜单折叠状态的函数
 */
function handleCollapse() {
  collapsed.value = !collapsed.value;
}

/**
 * 处理点击事件的函数
 * @param {Object} e - 事件对象，包含被点击项的key属性
 */
function handleClick(e) {
  router.push(e.key);
}

onMounted(() => {
  initMenu();
});
</script>
<style lang="scss" scoped>
$contentMargin: 24px; // 页面内容外边距

.layout-index-page {
  .layout-index-page-header {
    background: #fff;
    padding: 0;
  }

  .header-trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }

  .layout-index-page-content {
    margin: $contentMargin 16px;
    padding: $contentMargin;
    background: #fff;
    height: calc(100vh - 64px - $contentMargin * 2);
    overflow: auto;
  }
}
</style>
