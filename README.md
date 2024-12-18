# Vue3 + Vite + JS

该模板使用`node`版本为`14+`，模板使用`Vite`作为框架，采用`Vue3`和`JS`作为开发语言。在 UI 方面采用`AntV`作为 UI 库。使用`Axios`作为 request 库。使用`Vue-Router 4`作为路由库。使用`Pinia`作为状态管理库。

## 快速开始

```bash
npm install
npm run dev
npm run build
```

## 目录结构

```
vite-antv-js-template
├─ .gitignore
├─ index.html
├─ LICENSE
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ api
│  │  └─ example.js
│  ├─ App.vue
│  ├─ assets
│  │  ├─ styles
│  │  │  └─ global.css
│  │  └─ vue.svg
│  ├─ components
│  │  └─ HelloWorld.vue
│  ├─ config
│  │  └─ constants.js
│  ├─ layout
│  │  └─ layoutIndex.vue
│  ├─ main.js
│  ├─ router
│  │  └─ index.js
│  ├─ services
│  │  └─ index.js
│  ├─ store
│  │  ├─ index.js
│  │  └─ modules
│  │     └─ example.js
│  ├─ style.css
│  ├─ utils
│  │  ├─ Auth.js
│  │  ├─ axios
│  │  │  └─ index.js
│  │  ├─ router
│  │  │  └─ index.js
│  │  └─ store
│  │     ├─ index.js
│  │     └─ modules
│  │        └─ example.js
│  └─ views
│     ├─ error
│     │  └─ NotFoundPage.vue
│     ├─ example
│     │  └─ examplePage.vue
│     └─ index
│        └─ indexPage.vue
└─ vite.config.js

```

## 配置

```json
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
}
```

## 依赖库

    1.@ant-design/icons-vue
    2.ant-design-vue
    3.pinia
    4.vue-router
    5.sass
    6.axios

## 完成时间

    2024-05-21
