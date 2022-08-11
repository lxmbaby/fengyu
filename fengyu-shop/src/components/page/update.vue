<template>
  <div class="content">
      <button class="back" @click="router.go(-1)">返回</button>
      <div class="title">账号管理</div>
      <el-form :model="user" :rules="rules" class="form" ref="formData">
          <el-form-item label="账号" prop="account" class="form-group">
            <el-input v-model="user.account" disabled></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" class="form-group">
              <el-input v-model="user.password"></el-input> 
          </el-form-item>
          <el-form-item label="名字" prop="name" class="form-group">
            <el-input v-model="user.name"></el-input>
          </el-form-item>
          <el-form-item label="地址" prop="address" class="form-group">
            <el-input v-model="user.address"></el-input>
          </el-form-item>
          <el-form-item label="电话" prop="phone" class="form-group">
            <el-input v-model="user.phone"></el-input>
          </el-form-item>
        </el-form>
        <div class="from-button">
            <button type="button" class="btn" @click="clearData">清空</button>
            <button type="button" class="btn" @click="onRegister">修改</button>
        </div>
  </div>
</template>

<script>
import {ref,reactive,toRef,computed} from "vue"
import axios from 'axios'
import { ElMessageBox} from 'element-plus'
import {useStore} from 'vuex'
import {useRouter} from "vue-router"
export default {
    name:'update',
    setup(){
        let router=useRouter();
        let store=useStore();
        let List=computed(()=>{
          return store.state.user.profile
        })
        console.log(List.value)
        let user=reactive({
            account:List.value.account,
            name:List.value.name,
            password:List.value.password,
            address:List.value.address,
            phone:List.value.phone
        })
        //校验规则
        let rules = reactive({
            account: [
                { required: true, message: "请输入账号", trigger: "blur" },
                { min: 6, max: 6, message: "请输入 位数字", trigger: "blur" },
            ],
            name: [
                { required: true, message: "请设置新名字", trigger: "blur" },
                { min: 2, max: 10, message: "请输入 2 到 10 个字符", trigger: "blur" },
            ],
            password: [
                { required: true, message: "请设置新密码", trigger: "blur" },
                { min: 6, max: 6, message: "请输入6位数字", trigger: "blur" },
            ],
            address:[
                { required: true, message: "请输入居住地址", trigger: "blur" },
            ],
            phone: [
                { required: true, message: "请设置新电话号码", trigger: "blur" },
                { min: 11, max: 11, message: "请输入 11位数字", trigger: "blur" },
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
                if (valid) {
                    //校验成功
                    console.log("修改成功")
                    const { data: res } = await axios.post("/shopping/updateuser",
                    {account:user.account,name:user.name,password:user.password,address:user.address,phone:user.phone});
                    console.log(res);
                    //清空表单
                    clearData();
                    if(res.code==200){
                        store.dispatch('user/getUser', {account:user.account,password:user.password});
                        ElMessageBox.confirm(
                        `账号信息修改成功!`,
                        '注册提示',
                         {
                            confirmButtonText: '好的',
                            cancelButtonText: '取消',
                            type: 'success',
                         }
                        )
                    }else{
                        ElMessageBox.confirm(
                        `账号信息修改失败!`,
                        '注册提示',
                         {
                            confirmButtonText: '好的',
                            cancelButtonText: '取消',
                            type: 'success',
                         }
                        )
                    }
                    
                    
                }else{
                    //校验失败
                    ElMessageBox.confirm(
                        '请按照提示设置账号和密码！',
                        '注册提示',
                         {
                            confirmButtonText: '好的',
                            cancelButtonText: '取消',
                            type: 'error',
                         }
                    )
                }
                    
            })
        }
        return{
            user,
            clearData,
            rules,
            onRegister,
            router,
            formData
        }
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:50%; 
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



