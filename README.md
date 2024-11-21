# jdvue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

使用阿里云镜像源加速NPM
```
npm config set registry http://registry.npmmirror.com
```

查看当前镜像源

```
npm config get registry
```

安装vue3
```
npm i @vue/cli@4.5.13 -g
```

老电脑,找到到路径,设置环境变量也找不到
```
H:\nodejs\node.exe H:\npmcache\node_modules\@vue\cli\bin\vue.js create jdvue
```

脚手架初始化目录结构
```
vue create jd-shop-manager
```

初始化选择
```
? Please pick a preset: Manually select features
? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert
 selection)
>(*) Choose Vue version
 (*) Babel
? Check the features needed for your project: Choose Vue version, Babel, Router
? Choose a version of Vue.js that you want to start the project with 3.x
? Use history mode for router? (Requires proper server setup for index fallback in production) No       
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No
```

运行服务
```
 $ cd jdvue
 $ npm run serve
```

安装element
```
npm i element-plus -D
```

安装pinia
```
npm i pinia
```

安装axios
```
npm i axios
```

打开 element-plus官网,选择指南,安装和快速开始
https://element-plus.org/zh-CN/

复制到vue3的main.js
```
#添加下面两行
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
    .use(router)
    .use(ElementPlus) // 添加
    .mount('#app')
```
在App.vue文件添加
```
<template>
	...
	<!--    // 添加的按钮-->
	<el-button>Default</el-button>
</template>
```

ele 官网 找组件-form表单-验证表单,查看源代码,逐一复制,逐一检查
同时开启login路由,在router/index.js
```
#新增以下内容
,
  {
    path: '/login',
    name: 'Login',  // 组件名
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
```
同时新增views/Login.vue文件
将上面的form验证表单的内容复制过来,删除所有包含ts的内容,如type类型相关的
**方式1:defineComponent方式**
```bash
<template>
  <el-form
      ref="ruleFormRef"
      style="max-width: 600px"
      :model="ruleForm"
      :rules="rules"
      label-width="auto"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="ruleForm.username" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password"/>
    </el-form-item>

  </el-form>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup(){
    return {
      formSize: "default",
      ruleForm: {
        username: "Hello",
        password: "123",
      }
    }
  }
})
</script>
```

**方式2:setup方式**
优点
1.组件引入不用声明
2.无需通过setup返回,局部变量即可页面使用
```
<script setup>

// 内部数据双向绑定的引用
import {ref,reactive} from "vue";

//双向数据绑定
const formSize = ref('default')
const ruleForm = reactive({
  username: "Helloworld",
  password: "123456",
})

</script>
```



