<template>
<div class="bg">
    <div class="content">
      <button class="back" @click="clearData"><a href="/login">返回</a></button>
      <div class="title">密码重置</div>
      <el-form :model="user" :rules="rules" class="form" ref="formData">
          <el-form-item label="账号" prop="account" class="form-group">
            <el-input v-model="user.account"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" class="form-group">
              <el-input v-model="user.password"></el-input> 
          </el-form-item>
        </el-form>
        <div class="from-button">
            <button type="button" class="btn" @click="clearData">清空</button>
            <button type="button" class="btn" @click="onReset">重置</button>
        </div>
    </div>
</div>
</template>

<script>
import {ref,reactive} from "vue"
import axios from 'axios'
import { ElMessageBox} from 'element-plus'
export default {
    name:'reset',
    setup(){
        let user=reactive({
            account:'',
            password:''
        })
        //校验规则
        let rules = reactive({
        account: [
            { required: true, message: "请输入要重置密码的账号", trigger: "blur" },
            { min: 6,max: 6, message: "请输入 6位数字", trigger: "blur" },
        ],
        password: [
            { required: true, message: "请设置新的密码", trigger: "blur" },
            { min: 6, max: 6, message: "请输入6位数字", trigger: "blur" },
        ],
        })
        let formData=ref(null)
        //清空表单
        let clearData=()=>{
            if(user.account&&user.password){
                formData.value.resetFields();
            }   
        }
        //校验表单
        let onReset=() => {
            formData.value.validate(async(valid) => {
                //校验失败
                if (!valid) {
                    ElMessageBox.confirm(
                        '请按照提示设置账号和密码！',
                        '注册提示',
                         {
                            confirmButtonText: '好的',
                            cancelButtonText: '取消',
                            type: 'error',
                         }
                    )
                }else{
                    //校验成功
                    console.log("注册成功")
                    const { data: res } = await axios.post("/shopping/reset",{account:user.account,password:user.password});
                    console.log(res);
                    //清空表单
                    clearData();
                    ElMessageBox.confirm(
                        `密码重置成功,你的新密码是${user.password}。`,
                        '重置提示',
                         {
                            confirmButtonText: '好的',
                            cancelButtonText: '取消',
                            type: 'success',
                         }
                    )
                }
                    
            })
        }
        return{
            user,
            clearData,
            rules,
            onReset,
            formData
        }
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
    .title{
        font-size: 30px;
        font-weight: bold;
        color: #555;
    }
}
  .form-group{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 350px;
    margin-top: 22px;
  }
  .form-control{
    width: 300px;
    height: 23px;
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
      &:hover{
        color: #fff;
      }
    }
  }
</style>
