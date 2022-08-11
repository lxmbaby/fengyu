<template>
<div class="search">
  <input type="text" v-model="str" placeholder="输入要查询的用户名称即可自动查询">
  <!-- <button class="button go" @click="lookup"><i class="iconfont sou">&#xe622;</i></button> -->
  </div>
<h4 class="listname">商城用户管理</h4>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>用户账号</th>
        <th>用户密码</th>
        <th>用户名称</th>
        <th>用户电话</th>
        <th>创建时间</th>
        <th>更多</th>
        <th>操作</th>     
      </tr>
    </thead>
    <tbody v-if="lookup()">
      <tr v-for="(item,index) in lookup()" :key="item.id">
        <td>{{index+1}}</td>
        <td>{{item.account}}</td>
        <td>{{item.password}}</td>
        <td>{{item.name}}</td>
        <td>{{item.phone}}</td>
        <td>{{item.time}}</td>
        <td>
            <router-link :to="`/main/shopuser/shopuserDetial/${item.id}`" class="linkstyle ctrol-left" >详情</router-link>        
        </td>
        <td>
          <router-link :to="`/main/shopuser/shopupdate/${item.id}`" class="linkstyle ctrol-left" >修改</router-link>
          <button  type="button" class="ctrol ctrol-right" @click="userDelete(item.id,item.name)">删除</button>
        </td>
      </tr>
    </tbody>
    <tbody v-if="str==null">
      <tr v-for="(item,index) in userList" :key="item.id">
        <td>{{index+1}}</td>
        <td>{{item.account}}</td>
        <td>{{item.password}}</td>
        <td>{{item.name}}</td>
        <td>{{item.phone}}</td>
        <td>{{item.time}}</td>
        <td>
            <router-link :to="`/main/shopuser/shopuserDetial/${item.id}`" class="linkstyle ctrol-left" >详情</router-link>        
        </td>
        <td>
          <router-link :to="`/main/shopuser/shopupdate/${item.id}`" class="linkstyle ctrol-left" >修改</router-link>
          <button  type="button" class="ctrol ctrol-right" @click="userDelete(item.id,item.name)">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
  <el-dialog title="提示" v-model="dialogVisible.outDelete" width="40%">
     <span>此操作将永久删除该账号, 是否继续?</span>
     <template #footer>
              <span class="dialog-footer">
                <el-button @click="dialogVisible.outDelete = false">取 消</el-button>
                <el-button type="primary" @click="deleteResult">确 定</el-button>
              </span>
      </template>
    </el-dialog>
     <el-dialog title="提示" v-model="dialogVisible.inDelete" width="40%">
     <div v-if="dialogVisible.delResult">
         <p>删除成功！！！</p> 
        </div>
      <div v-else>删除失败！！！</div>
     <template #footer>
              <span class="dialog-footer">
                <el-button type="primary" @click="delWindow">确 定</el-button>
              </span>
      </template>
     </el-dialog>
</template>
<script>
import { computed,reactive,ref } from 'vue';
import {useStore} from 'vuex'
import axios from 'axios'
import {useRouter} from 'vue-router';
export default {
  name:"ushopser",
  setup(){
    let store=useStore()
    const router=useRouter();
    let str=ref(null)
    //通过dispatch调用vuex中actions的gettable方法
    store.dispatch('shopuser/getshoptable');
    let userList=computed(()=>{
      return store.state.shopuser.shopuserList
    })
    let lookup=()=>{
      let a=userList.value.filter(item=>{
      return item.name.indexOf(str.value)!==-1
    })
    return a
    }
    // 控制窗口显示和隐藏标志
    let dialogVisible=reactive({
      outDelete:false,
      inDelete:false,
      delResult:true,
    });
    //记录操作的账号的id
    let tie=reactive(
      {
        id:0,
        name:''
      }
    )
    //打开删除提示框
    function userDelete(id,name){
      dialogVisible.outDelete=true
      tie.id=id;
      tie.name=name;
    }
    //请求删除用户
    async function deleteResult(){
      const {data:res}=await axios.post("/shopping/delete",{id:tie.id,name:tie.name})
      console.log(res)
      if(res.code==200){
        dialogVisible.inDelete=true;
      }else{
        dialogVisible.inDelete=true;
        dialogVisible.delResult=false;
      }
    }
    //同时关闭两个删除窗口
     function delWindow(){
      dialogVisible.outDelete=false;
      dialogVisible.inDelete=false;
      router.go(0);
    }
    return{
      str,
      lookup,
      userList,
      dialogVisible,
      userDelete,
      delWindow,
      deleteResult
    }
  }
}
</script>

<style lang="less" scoped>
.search{
  width: 40%;
  // background: orchid;
  display: flex;
  justify-content: left;
  align-items: center;
  input{
    width: 100%;
    height: 30px;
    border: 1px solid red;
  }
  .go{
    width: 50px;
    height: 34px;
    background: red;
    border: 1px solid red;
    margin-left:1px;
    i{
      font-size: 20px;
      color: #fff;
    }
  }
}
.listname{
  position: relative;
  width: 100%;
  text-align: center;
}
table{
  width: 100%;
  border: 1px solid #000;
}
th,td{
  border: 1px solid rgb(239,239,239);
  text-align: center;
}
.linkstyle{
  text-decoration: none;
  padding:  6px 8px;
}
.adduser{
  position: absolute;
  top: 80px;
  right: 15px;
  width: 75px;
  height: 33px;
  background: cyan;
  font-size: 12px;
  border: none;
  a{
    text-decoration: none;
  }
}
.ctrol{
  width: 45px;
  height: 33px;
  font-size: 16px;
  border: none;
  margin: 0 5px;
  color:#f56c6c;
  background-color: #fef0f0;
  border-color: #fbc4c4;
}
.ctrol-left{
  color:#409eff;
  background-color: #ecf5ff;
  border-color: #b3d8ff;
}
.ctrol-left:hover{
  background: #66b1ff;
  color: #fff;
}
.ctrol-right:hover {
  background: #f78989;
  color: #fff;
}
</style>>

