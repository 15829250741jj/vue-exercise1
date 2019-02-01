<template>
  <div class="login">
    <div class="box">
      <h2>用户登录</h2>
      <el-form
        ref="myform"
        :model="loginForm"
        label-position="top"
        status-icon
        label-width="100px"
        class="demo-ruleForm"
        :rules="myrules"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login" class="btn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      myrules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ]
      }
    };
  },
  methods: {
    login() {
      this.$refs.myform.validate(async(valid) => {
        if (valid) {
          var res=await this.$http.post('/login',this.loginForm)
          var {meta,data}=res.data
          if(meta.status==200){
              this.$message({
                  message:meta.msg,
                  type:'success'
              })
              window.localStorage.setItem('token',data.token)
              this.$router.push('/home')
              
          }else{
              this.$message.error(meta.msg)
          }
        } else {
          this.$message.error('参数不合法，请重新输入')
        }
      });
    }
  },
  mounted() {}
};
</script>
<style>
.login {
  background-color: cadetblue;
  width: 100%;
  height: 100%;
  position: relative;
}
.login .box {
  width: 500px;
  padding: 40px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
}
.login .box h2 {
  margin-bottom: 20px;
}
.login .box .btn {
  width: 100%;
}
</style>


