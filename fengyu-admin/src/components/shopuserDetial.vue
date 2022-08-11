<template>
<button type="button" @click="router.go(-1)" class="detialout">返回</button>
  <h4 class="detial">用户详情</h4>
  <table>
    <tr>
        <th>用户账号</th>
        <td>{{List.account}}</td>  
    </tr>
    <tr>
      <th>用户密码</th>
      <td>{{List.password}}</td>
    </tr>
    <tr>
      <th>用户名称</th>
      <td>{{List.name}}</td>
    </tr>
    <tr>
      <th>用户电话</th>
      <td>{{List.phone}}</td>
    </tr>
    <tr>
      <th>账号状态</th>
      <td>
        <span v-if="List.state==1">可用</span>
        <span v-else>不可用</span>
      </td>
    </tr>
    <tr>
      <th>创建时间</th>
      <td>{{List.time}}</td>
    </tr>
  </table>
</template>

<script>
import {useRouter} from "vue-router"
import { computed,toRef } from 'vue';
import {useStore} from 'vuex'
export default {
    name:"shopuserDetial",
    props:['id'],
    setup(props){
    let sid=toRef(props,'id')
    let store=useStore();
    //通过dispatch调用vuex中actions的gettable方法
    store.dispatch('shopuser/getshoptable');
    let List=computed(()=>{
      return store.state.shopuser.shopuserList[sid.value-1]
    })
    let router=useRouter();
       return {
         List,
         router,
         sid
       }
    }
}
</script>

<style lang="less" scoped>
.detial{
  width: 100%;
  text-align: center;
}
.detialout{
    width: 60px;
    height: 35px;
    // font-size: 12px;
    border: none;
    margin: 0;
    padding: 0;
    background:rgb(239,239,239);
    &:hover{
        background: #aaa;
    }
}
table{
  width: 100%;
  border: 1px solid #000;
}
th,td{
  border: 1px solid rgb(239,239,239);
  text-align: center;
}
</style>>

