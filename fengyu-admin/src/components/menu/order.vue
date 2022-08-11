<template>
<div class="search">
  <input type="text" v-model="str" placeholder="输入要查询的用户名称即可自动查询">
  <!-- <button class="button go" @click="lookup"><i class="iconfont sou">&#xe622;</i></button> -->
</div>
  <h4 class="listname">订单管理</h4>
   <div class="contain">
      <!-- <div class="kong" v-if="1">
        <p>此处空空如也哦！</p>
        <p>请先完成账号注册并登录才可以查看购物车哦！！！</p>
      </div> -->
      <div class="boxtop">
             <div class="id">订单号</div>
             <div class="name">收货人姓名</div>
             <div class="phone">收货人电话</div>
             <div class="address">收货人地址</div>
             <div class="num">金额</div>
             <div class="time">下单时间</div>
             <div class="state">订单状态</div>
             <div class="ctrol">操作</div>
      </div>
       <ul class="goodlist">
         <template v-if="lookup()">
           <li v-for="(item,index) in lookup()" :key="item.did">
           <div class="box">
              <div class="id">{{index+1}}</div>
              <div class="name">{{item.name}}</div>
              <div class="phone">{{item.phone}}</div>
              <div class="address">{{item.address}}</div>
              <div class="num">{{item.num}}</div>
              <div class="time">{{item.time}}</div>
              <div class="state">未处理</div>
              <div class="ctrol">
                <button  type="button" class="ctrol-center" @click="orderbreak(item.did)">完成</button>
                <router-link :to="`/main/order/orderDetial/${item.did}`" class="linkstyle ctrol-left" >详情</router-link> 
                <button  type="button" class="ctrol-right" @click="orderDelete(item.did)">删除</button>
              </div>
            </div>
         </li>
         </template>
         <template v-if="str==null">
           <li v-for="(item,index) in orderlist" :key="item.did">
           <div class="box">
              <div class="id">{{index+1}}</div>
              <div class="name">{{item.name}}</div>
              <div class="phone">{{item.phone}}</div>
              <div class="address">{{item.address}}</div>
              <div class="num">{{item.num}}</div>
              <div class="time">{{item.time}}</div>
              <div class="state">未处理</div>
              <div class="ctrol">
                <button  type="button" class="ctrol-center" @click="orderbreak(item.did)">完成</button>
                <router-link :to="`/main/order/orderDetial/${item.did}`" class="linkstyle ctrol-left" >详情</router-link> 
                <button  type="button" class="ctrol-right" @click="orderDelete(item.did)">删除</button>
              </div>
            </div>
         </li>
         </template>
       </ul>
   </div>
   <el-dialog title="提示" v-model="dialogVisible.outDelete" width="40%">
     <span>此操作将永久删除该订单, 是否继续?</span>
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
import { useStore } from 'vuex'
import {computed,reactive,ref} from "vue"
import axios from "axios";
import {useRouter} from 'vue-router';
export default {
  setup(){
    const store=useStore();
    const router=useRouter();
    let str=ref(null)
    store.dispatch('shoporder/getorder');
    //获取到本地存储中oder模块中的用户订单数据
    let orderlist=computed(()=>{
      return store.state.shoporder.order
    })
    let lookup=()=>{
      let a=orderlist.value.filter(item=>{
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
    let did=ref(null)
    //打开删除提示框
    function orderDelete(id){
      dialogVisible.outDelete=true;
      console.log(id)
      did.value=id;
    }
    //请求删除用户
    async function deleteResult(){
      const {data:res}=await axios.post("/shopping/deleteorder",{id:did.value})
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
    let orderbreak=async(id)=>{
      const {data:res}=await axios.post("/shopping/updataorder",{id:id})
      console.log(res)
      router.go(0);
    }
    return{
      str,
      lookup,
      orderlist,
      dialogVisible,
      orderDelete,
      delWindow,
      deleteResult,
      orderbreak
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
  width: 100%;
  text-align: center;
}
.contain{
  width: 100%;
  height: 400px;
  margin:0 auto;
  background:#fff ;
  .kong{
    width: 100%;
    height: 600px;
    margin:0 auto;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .boxtop{
    width: 100%;
    height: 50px;
    display: flex;
    background: #f3f3f3;
    border: 1px solid #e9e9e9;
    .id{
      width: 5%;
      height: 100%;
      
      text-align: center;
      line-height: 50px;
    }
    .name{
      width: 10%;
      height: 100%;
      text-align: center;
      line-height: 50px;
    }
    .phone,.address{
      width: 15%;
      height: 100%;
      text-align: center;
      line-height: 50px;
    }
    .num{
      width: 10%;
      height: 100%;
      text-align: center;
      line-height: 50px;
      margin-right: 8px;
    }
    .time{
      width: 20%;
      height: 100%;
      text-align: center;
      line-height: 50px;
      margin-right: 15px;
    }
    .state{
      width: 10%;
      height: 100%;
      text-align: center;
      line-height: 50px;
      margin-right: 15px;
    }
    .ctrol{
      width: 15%;
      height: 100%;
      text-align: center;
      line-height: 50px;
      margin-right: 15px;
    }
  }
  .goodlist{
    height: 540px;
    overflow: scroll;
    list-style-type: none;
    padding: 0;
    margin: 0;
    .box{
      width: 100%;
      height: 50px;
      display: flex;
      border: 1px solid #e9e9e9;
      .id{
      width: 5%;
      height: 100%;
      
      text-align: center;
      line-height: 50px;
      }
      .name{
        width: 10%;
        height: 100%;
        text-align: center;
        line-height: 50px;
      }
      .phone,.address{
        width: 15%;
        height: 100%;
        text-align: center;
        line-height: 50px;
      }
      .num{
        width: 10%;
        height: 100%;
        text-align: center;
        line-height: 50px;
        margin-right: 8px;
      }
      .time{
        width: 20%;
        height: 100%;
        text-align: center;
        line-height: 50px;
        margin-right: 15px;
      }
      .state{
        width: 10%;
        height: 100%;
        text-align: center;
        line-height: 50px;
        margin-right: 15px;
      }
      .linkstyle{
        text-decoration: none;
        padding:  6px 8px;
      }
      .ctrol{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 15%;
        height: 100%;
        .ctrol-left{
          width: 50px;
          height: 30px;
          color:#409eff;
          background-color: #ecf5ff;
          border-color: #b3d8ff;
          text-align: center;
          line-height: 30px;
          padding: 0;
          margin: 0;
        }
        .ctrol-center{
          width: 50px;
          height: 30px;
          color:cyan;
          background-color: #F0FFFF;
          border-color: #b3d8ff;
          text-align: center;
          line-height: 30px;
          padding: 0;
          margin: 0;
          border:none
        }
        .ctrol-right{
          width: 50px;
          height: 30px;
          color:#f56c6c;
          background-color: #fef0f0;
          border-color: #fbc4c4;
          text-align: center;
          line-height: 30px;
          padding: 0;
          margin: 0;
          border:none
        }
        .ctrol-left:hover{
          background: #66b1ff;
          color: #fff;
        }
        .ctrol-center:hover {
          background: cyan;
          color: #fff;
        }
        .ctrol-right:hover {
          background: #f78989;
          color: #fff;
        }
      }
    }
  }
}
</style>>