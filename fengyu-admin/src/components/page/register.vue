<template>
    <div class="bg">
        <div class="content">
            <button class="back" @click="clearData"><a href="user">返回</a></button>
            <div class="title">账号注册</div>
            <el-form :model="user" :rules="rules" class="form" ref="formData">
                <el-form-item label="名字" prop="name" class="form-group">
                  <el-input v-model="user.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" class="form-group">
                    <el-input v-model="user.password"></el-input> 
                </el-form-item>
                <el-form-item label="电话" prop="phone" class="form-group">
                    <el-input v-model="user.phone"></el-input> 
                </el-form-item>
            </el-form>
            <div class="from-button">
                <button type="button" class="btn" @click="clearData">清空</button>
                <button type="button" class="btn" @click="onRegister">注册</button>
            </div>
        </div>
    </div>
</template>

<script>
import {ref,reactive} from "vue"
import axios from 'axios'
import { ElMessageBox} from 'element-plus'
export default {
    name:'register',
    setup(){
        let user=reactive({
            name:'',
            password:'',
            phone:''
        })
        //校验规则
        let rules = reactive({
        name: [
            { required: true, message: "请设置名字", trigger: "blur" },
            { min: 2, max: 10, message: "请输入 2 到 10 个字符", trigger: "blur" },
        ],
        password: [
            { required: true, message: "请设置密码", trigger: "blur" },
            { min: 6, max: 6, message: "请输入6位数字", trigger: "blur" },
        ],
        phone: [
            { required: true, message: "请输入电话号码", trigger: "blur" },
            { min: 11, max: 11, message: "请输入11位数字", trigger: "blur" },
        ],
        })
        let formData=ref(null)
        //清空表单
        let clearData=()=>{
            if(user.name&&user.password){
                formData.value.resetFields();
            }   
        }
        //校验表单
        let onRegister=() => {
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
                    console.log(crateAccount())
                    let account=crateAccount();
                    const { data: res } = await axios.post("/shopping/registerback",{name:user.name,password:user.password,account:account,phone:user.phone});
                    console.log(res);
                    //清空表单
                    clearData();
                    ElMessageBox.confirm(
                        `账号注册成功,你的账号是${account}。`,
                        '注册提示',
                         {
                            confirmButtonText: '好的',
                            cancelButtonText: '取消',
                            type: 'success',
                         }
                    )
                }
                    
            })
        }
        //随机6位数字生成用户账号
        let crateAccount=()=>{
            let account=[];
            for(let i=1;i<7;i++){
               let x=Math.floor(Math.random()*10)
                account.push(x)
                if(account[0]==0){
                    account[0]=Math.floor(Math.random()*10+1)
                }
            }
            let newAccount=account.join("")
            return newAccount
        }
        return{
            user,
            clearData,
            rules,
            onRegister,
            formData
        }
    }
}
</script>

<style lang="less" scoped>
.bg {
  width: 100%;
  height: 90vh;
//   background: url('http://www.wallcoo.com/cartoon/abstract_colors_1920x1200_1112/wallpapers/1280x800/abstract_color_background_picture_8016.jpg');
  background-size: cover;
}
.content{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%; 
    height:100%;
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
      width: 57px;
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



