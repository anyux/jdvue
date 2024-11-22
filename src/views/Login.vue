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
    <el-button type="primary" @click="doSubmit(ruleFormRef)">提交</el-button>
  </el-form>
</template>

<!--<script>-->
<!--import { defineComponent } from "vue";-->
<!--export default defineComponent({-->
<!--  setup(){-->
<!--    return {-->
<!--      formSize: "default",-->
<!--      ruleForm: {-->
<!--        username: "Hello",-->
<!--        password: "123",-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--})-->
<!--</script>-->
<script setup>

// 内部数据双向绑定的引用
//双向数据绑定
import {ref,reactive} from "vue";
// 引入创建的api/user.js组件
import {test,login} from "@/api/user";

// 单向数据输出,双向数据绑定,还需要Api方法的调用
// formSize.value
const formSize = ref('default');
// 直接跟原始结构一样,ruleForm.username
const ruleForm = reactive({
  username: "Helloworld",
  password: "123456",
})

// 需要改变的复杂对象,reactive,性能优化,直接使用固定对象
const rules = {
  username: [
    {
      required: true,
      message: "必须输入用户名",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "必须输入密码",
      trigger: "blur"
    }
  ]
}

// 获取页面组件对象,ref引用东西 需要通过.value使用
const ruleFormRef = ref();

// 提交动作,方式1
// const doSubmit =  () => {
//   console.log("submit", ruleForm);
//
//   ruleFormRef.value.validate((valid,fields) => {
//     if (valid) {
//       console.log("submit!");
//     }else {
//       console.log("error submit", fields);
//     }
//   })
// }

// 提交动作,传递方式2,纯函数,复用性高
const doSubmit =  (form) => {
  console.log("submit", ruleForm);
  // 添加aynsc异步
  form.validate(async (valid,fields) => {
    if (valid) {
      console.log("submit 纯函数");
    //   使用引入的test,login方法
     // 使用异步方法
      let res = await test()
      console.log(res.data)
    }else {
      console.log("error submit", fields);
    }
  })
}
</script>


