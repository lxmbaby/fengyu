<template>
  <h4 class="listname">权限管理</h4>
    <!-- 后台用户权限管理 -->
   <table v-if="profile.identity==0">
     <caption>后台用户权限管理</caption>
    <thead>
        <tr>
          <th>#</th>
          <th>用户名称</th>
          <th>账号状态</th>
          <th>现在身份</th>
          <th>更改身份</th>     
        </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in userList" :key="item.id">
        <td>{{index+1}}</td>
        <td>{{item.name}}</td>
        <td>
          <el-switch style="display: block" v-model="item.state" @click="stateChange(item.state,item.id)"
            active-color="#13ce66" inactive-color="#ff4949" :active-value="1" :inactive-value="0"
            active-text="启用" inactive-text="禁用">
          </el-switch>
        </td>
        <td>
          <span v-if="item.identity==0">管理员</span>
          <span v-else>普通用户</span>
        </td>
        <td>  
         <el-switch  v-model="item.identity" active-color="#13ce66" inactive-color="#ff4949"
          :active-value="1" :inactive-value="0" @click="identityChange(item.identity,item.id)">
         </el-switch>
        </td>
      </tr>
    </tbody>
   </table>
   <!-- 前台用户权限管理 -->
    <table>
      <caption>商城用户权限管理</caption>
    <thead>
      <tr class="title"></tr>
      <tr>
        <th>#</th>
        <th>用户名称</th>
        <th>账号状态</th>    
      </tr>
    </thead>
    
    <tbody>
      <tr v-for="(item,index) in shopuserList" :key="item.id">
        <td>{{index+1}}</td>
        <td>{{item.name}}</td>
        <td>
          <el-switch style="display: block" v-model="item.state" @click="shopstateChange(item.state,item.id)"
            active-color="#13ce66" inactive-color="#ff4949" :active-value="1" :inactive-value="0"
            active-text="启用" inactive-text="禁用">
          </el-switch>
        </td>
      </tr>
    </tbody>
   </table>
</template>

<script>
  import axios from 'axios'
  import { computed } from 'vue';
  import {useStore} from 'vuex'
  export default {
    setup() {
    let store=useStore()
    //通过dispatch调用vuex中actions的gettable方法
    store.dispatch('usertable/gettable');
    //后台用户数据
    let userList=computed(()=>{
      return store.state.usertable.userList
    })
    //前台用户数据
    let shopuserList=computed(()=>{
      return store.state.shopuser.shopuserList
    })
    //获取身份
    let profile=computed(()=>{
            return store.state.user.profile;
    })
    //更改后台用户的使用状态
    async function stateChange(state,id){
      const {data:res}=await axios.post('/shopping/updateState',{state:state,id:id})
      console.log(res)
    }
    //更改后台用户的身份状态  
    async function identityChange(identity,id){
      const {data:res}=await axios.post('/shopping/updateIdentity',{identity:identity,id:id})
      console.log(res) 
    }
    //更改前台用户的使用状态
    async function shopstateChange(state,id){
      const {data:res}=await axios.post('/shopping/updatestate',{state:state,id:id})
      console.log(res)
    }
      return {
       userList,
       shopuserList,
       stateChange,
       identityChange,
       profile,
       shopstateChange
      };
    },
  };
</script>

<style lang="less" scoped>
.listname{
  width: 100%;
  text-align: center;
}
table{
  width: 100%;
  // background: #f3f3f3;
  border: 1px solid #000;
  caption{
    caption-side: top;
    text-align: center;
  }
}
th,td{
  border: 1px solid rgb(239,239,239);
  text-align: center;
  height: 30px;
}
</style>>