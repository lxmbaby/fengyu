<template>
<!-- 登录页面组件 -->
  <div class="content">
    <form>
      <div class="form-group">
        <label for="usename">账号:</label>
        <input type="text" class="form-control" id="usename" placeholder="请输入账号" v-model.trim="user.useword">
      </div>
      <div class="form-group">
        <label for="usenamePassword">密码:</label>
        <input type="password" class="form-control" id="usenamePassword" placeholder="请输入密码" v-model.trim="user.password">
      </div>
      <div class="from-button">
        <button type="button" class="btn btn-primary">注册</button>
        <button type="button" class="btn btn-primary" @click="onLogin">登录</button>
      </div> 
    </form> 
  </div>
</template>

<script>
import { useStore } from 'vuex'
import {reactive} from "vue"
export default {
    name:'login',
    setup(){
    let user=reactive({
      useword:'',
      password:''
    });
    const store=useStore()
    let onLogin=()=>{
      store.dispatch('getUser',"useword","password");
    }
    return{user,onLogin}
    }
}
</script>

<style lang="less" scoped>
.content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height:280px;
    background: rgb(141, 137, 137);
  }
  label{
    padding: 7px;
    margin-top: 7px;
  }
  .form-group{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 350px;
  }
  .form-control{
    width: 300px;
  }
  form{
    position: relative;
  }
  .from-button{
    position: absolute;
    right: 0;
    display: flex;
    justify-content: space-between;
    width: 130px;
  }
</style>