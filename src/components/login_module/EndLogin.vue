<template>
  <div>
    <el-image style="width: 45%; margin: 10px auto;" :src="require('../../assets/logo.png')"/>
    <el-card class="login-banner">
      <div slot="header" class="clearfix">
        <span class="welcome_span">欢迎登录</span>
      </div>
      <user-login/>
<!--      <camera-login/>-->
    </el-card>
  </div>
</template>
<script>
import UserLogin from './UserLogin'
import CameraLogin from './CameraLogin'
export default {
  name: 'EndLogin',
  components: {
    'user-login': UserLogin,
    'camera-login': CameraLogin
  }
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .login-banner{
    width: 500px;
    height: 340px;
    position: relative;
    top: 2vh;
    left: 50%;
    margin-left: -250px;
  }
  .welcome_span{
    color: #00d9e1;
  }

</style>
