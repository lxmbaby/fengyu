<template>
<!-- 登录页面组件 -->
<div class="bg">
    <div class="content">
    <button class="back"><a href="/">返回首页</a></button>
    <div class="logo">
      <img src="@/assets/image/logo.png" alt="枫遇">
    </div>
    <el-form :model="user" :rules="rules" class="form" ref="formData">
          <el-form-item label="账号" prop="account" autocomplete="off" class="form-group">
            <el-input v-model="user.account"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" class="form-group">
              <el-input v-model="user.password" type="password" @blur="jiaoyan"></el-input> 
          </el-form-item>
        </el-form>
        <div class="from-button">
            <button type="button" class="btn"><a href="reset">重置</a></button>
            <button type="button" class="btn" @click="onLogin">登录</button>
        </div>
  </div>
</div>
</template>

<script>
import { useStore } from 'vuex'
import {useRouter} from 'vue-router'
import {computed, reactive,ref} from "vue"
import { ElMessageBox} from 'element-plus'
export default {
    name:'loginOne',
    setup(){
    let user=reactive({
      account:'',
      password:''
    });
    console.log(user.account,user.password)
    const store=useStore();
    const router=useRouter();
    //校验规则
        let rules = reactive({
        account: [
            { required: true, message: "请输入账号", trigger: "blur" },
            { min: 6, max: 6, message: "请输入 6 位数字", trigger: "blur" },
        ],
        password: [
            { required: true, message: "请输入密码", trigger: "blur" },
            { min: 6, max: 6, message: "请输入6位数字", trigger: "blur" },
        ],
        })
    let formData=ref(null)
    let jiaoyan=()=>{
      store.dispatch('user/getUser',{account:user.account,password:user.password});
    }
    let onLogin=()=>{
      let token=computed(()=>{
        return store.state.user.profile.token
      })
      formData.value.validate((valid) => {
         if (valid&&token.value) {  
             router.push("/firstpage");
        }else{
            ElMessageBox.confirm(
               `账号或密码错误或者没有按照指示输入`,
               '登录提示',
                {
                   confirmButtonText: '好的',
                   cancelButtonText: '取消',
                   type: 'error',
                }
            )
          }    
      })
    }
    return{user,rules,formData,onLogin,jiaoyan}
  }
}
</script>

<style lang="less" scoped>
.bg {
  width: 100%;
  height: 100vh;
  background: url('http://www.wallcoo.com/cartoon/abstract_colors_1920x1200_1112/wallpapers/1280x800/abstract_color_background_picture_8016.jpg');
  background-size: cover;
} 
.content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 620px;
    height:450px;
    background: rgba(0, 0, 0,.2);
    border-radius: 3px;
    .back{
        position: absolute;
        top: 10px;
        left: 10px;
        width: 70px;
        height: 30px;
        border: none;
        border-radius: 3px;
        background: #fff;
        a{
            text-decoration: none;
        }
    }
    .logo{
      width: 50%;
      height: 120px;
      margin-left: 40px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .form-group{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 350px;
    padding: 10px 0;
  }
  .from-button{
    position: absolute;
    bottom: 23px;
    right: 27px;
    display: flex;
    justify-content: space-between;
    width: 130px;
    .btn{
      width: 55px;
      height: 35px;
      background: cyan;
      border: none;
      border-radius: 3px;
      a{
        color: #000;
        text-decoration: none;
      }
      &:hover{
        color: #fff;
      }
    }
  }
</style>