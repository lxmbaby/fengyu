<template>
 <div class="contain">
   <button class="back" @click="router.go(-1)">&lt;返回</button>
   <div class="kong" v-if="!profile.id">
     <p>此处空空如也哦！</p>
     <p>请先完成账号注册并登录才可以查看购物车哦！！！</p>
   </div>
    <ul class="goodlist" v-else>
      <li>
        <div class="boxtop">
          <div class="t-checkbox">配送地址:
            <input type="text"  v-model="profile.address">
          </div>
          <div class="t-good">商品</div>
          <div class="t-price">单价</div>
          <div class="t-quantity">数量</div>
          <div class="t-num">小计</div>
          <div class="t-action">操作</div>
        </div>
      </li>
      <li v-for="item in list" :key="item.id">
        <div class="box">
          <div class="box-left">
              <input type="checkbox" style="width:20px;height:20px;" v-model="item.ischeck">
            <div class="imgsize">
              <img :src="item.src" alt="">
            </div>
          </div>
          <div class="box-center">
            <span class="name">{{item.name}}</span>
            <span class="b-price">￥{{item.price}}</span>
            <div class="b-quantity">
              <input type="number" v-model="item.count" @blur="changeCount(item.cid,item.count)">
            </div>
          </div>
          <div class="box-right">
            <p class="b-num">￥{{item.count*item.price}}</p>
            <div class="b-action">
              <button type="button" @click="deleteOne(item.cid)">删除</button>
            </div>
          </div>
        </div>
      </li>
  </ul>
  <div class="sumbox" v-if="profile.id">
    <div class="all">
      <input type="checkbox" style="width:20px;height:20px;" v-model="allcheck">
      <span>全选</span>
    </div>
    <div class="del">
      <button type="button" @click="deleteAll">清空购物车</button>
    </div>
    <div class="select">
      <span>已选择{{goodcount}}件商品</span>
    </div>
    <div class="sum">
      <span>合计:</span>
      <span class="sumtext">￥{{sum}}</span>
    </div>
    <div class="jie">
      <button type="button" @click="settlement">去结算</button>
    </div>
  </div>
  <!-- {{list}} -->
 </div>
</template>

<script>
import { useStore } from 'vuex'
import {useRouter} from 'vue-router';
import axios from "axios";
import { ElMessage } from 'element-plus';
import {computed,ref, watch,reactive} from "vue"
export default {
  name:"shopcarTwoList",
  setup(){
    const store=useStore();
    const router=useRouter();
    let profile=computed(()=>{
      return store.state.user.profile;
    })
    if(!profile.value.id){
      ElMessage({
        message: '你还没有登录，请完成登录后再查看购物车！',
        type: 'error',
      })
    }else{
      store.dispatch('goodcar/getCar',{id:profile.value.id});
    }
    //获取到本地存储中gooodcar模块中的用户购物车数据
    let list=computed(()=>{
      return store.state.goodcar.carlist
    })
    let allcheck=ref(false);
    //监听全选框的情况
    watch(allcheck,(newvalue,oldvalue)=>{
      console.log(newvalue,oldvalue)
      if(newvalue==true){
        list.value.map(item=>{
          item.ischeck=true;
        })
      }else{
        list.value.map(item=>{
          item.ischeck=false;
        })
      }
    })
    //用户当前选中的商品数量
    let goodcount=computed(()=>{
      let a=0;
      for(var item of list.value){
        if(item.ischeck==true){
          a++
        }
      }
      return a
     }
    )
    //当前选中商品的合计
    let sum=computed(()=>{
      let pride=0;
      for(var item of list.value){
        if(item.ischeck){
          pride+=item.price*item.count;
        }
      }
      return pride.toFixed(2)
     }
    )
    //用户更改商品数量
    let changeCount=async(id,count)=>{
      let{data:res}=await axios.post("/shopping/changeCount",{id:id,count:count})
      console.log(res)
    }
    //用户删除其中删除一件商品
    let deleteOne=async(id)=>{
      let{data:res}=await axios.post("/shopping/deleteone",{id:id})
      console.log(res)
      router.go(0);
    }
    //用户删除所有商品
    let deleteAll=async()=>{
      let{data:res}=await axios.post("/shopping/deleteall",{id:profile.value.id})
      console.log(res)
      router.go(0);
    }
    let win=ref(1)
    const setOrderID=async()=>{
      let {data:res}=await axios.post("/shopping/setOrderID")
      console.log(res)
      return res.data
    }
    setOrderID().then(data=>{
      console.log(data[0].did);
      win.value=data[0].did
    })
    //商品结算
    let settlement=async()=>{
      let{data:res1}=await axios.post("/shopping/addOrder",{name:profile.value.name,phone:profile.value.phone,address:profile.value.address,num:sum.value})
      console.log(res1)
      let arr=[];
      for(var item of list.value){
        if(item.ischeck){
          arr.push(item.cid)
        }
      }
      console.log(arr)
      for(let i=0;i<arr.length;i++){
        let{data:res}=await axios.post("/shopping/goodState",{did:win.value+1,id:arr[i]})
        console.log(res)
      }
      if(arr.length>=1){
        ElMessage({
          message: `'结算成功,本次结算花费为${sum.value}元'`,
          type: 'success',
        })
      }else{
        ElMessage({
          message: '您还没有选择要结算的商品哟！',
          type: 'error',
        })
      }
      router.go(0);
    }
    return{router,profile,list,allcheck,goodcount,sum,changeCount,deleteOne,deleteAll,settlement,win}
  }
}
</script>

<style lang="less" scoped>
.contain{
  position: relative;
  width: 75%;
  // height: 600px;
  margin:0 auto;
  background:#fff ;
  .back{
    position: absolute;
    top: 10px;
    left: 0;
    width: 60px;
    height: 35px;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
  .kong{
    width: 100%;
    height: 600px;
    margin:0 auto;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sumbox{
    position: fixed;
    bottom: 0;
    width: 75%;
    height: 50px;
    background: #f3f3f3;
    z-index: 150;
    display: flex;
    justify-content:space-between;
    .all{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 10%;
      height: 100%;
      // background: red;
    }
    .del{
      width: 12%;
      height: 100%;
      text-align: center;
      line-height: 50px;
      button{
        width: 100%;
        height: 30px;
        cursor: pointer;
      }
    }
    .select{
      width: 10%;
      height: 100%;
      text-align: center;
      line-height: 50px;
      // background: cyan;
    }
    .sum{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20%;
      height: 100%;
      // background: chartreuse;
      .sumtext{
        font-size: 18px;
        font-weight: bold;
        color: red;
      }
    }
    .jie{
      width: 10%;
      height: 100%;
      // background: yellowgreen;
      text-align: center;
      line-height: 50px;
      button{
        width: 100%;
        height: 100%;
        background: red;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        border: 1px solid red;
        cursor: pointer;
        &:hover{
          color: #000;
        }
      }
    }
  }
  .boxtop{
    width: 100%;
    height: 50px;
    display: flex;
    background: #f3f3f3;
    border: 1px solid #e9e9e9;
    .t-checkbox{
      width: 25%;
      height: 100%;
      transform: translateX(50px);
      text-align: center;
      line-height: 50px;
    }
    .t-good{
      width: 35%;
      height: 100%;
      text-align: center;
      line-height: 50px;
    }
    .t-num,.t-action{
      width: 10%;
      height: 100%;
      text-align: center;
      line-height: 50px;
    }
    .t-price{
      width: 10%;
      height: 100%;
      text-align: center;
      line-height: 50px;
      margin-right: 8px;
    }
    .t-quantity{
      width: 10%;
      height: 100%;
      text-align: center;
      line-height: 50px;
      margin-right: 15px;
    }
  }
  .box{
    display: flex;
    width: 100%;
    height: 130px;
    border: 1px solid #f1f1f1;
    border-top: 2px solid #aaa;
    .box-left{
      position: relative;
      width: 20%;
      height: 100%;
      input{
        position: absolute;
        top: 40%;
        left: 20%;
      }
      .imgsize{
        position: absolute;
        top: 10%;
        right: 10%;
        width: 50%;
        height: 80%;
        // background: chartreuse;
        img{
          width: 100%;
          height: 100%;
        }
      }

    }
    .box-center{
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 60%;
      height: 100%;
      // background: blueviolet;
      .name{
        display: flex;
        align-items: center;
        width: 60%;
        height: 80%;
        // border:1px solid #000;
      }
      .b-price{
        width: 15%;
        height: 50px;
        // border:1px solid #000;
        text-align: center;
        line-height: 50px;  
      }
      .b-quantity{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15%;
        height: 50px;
        // border:1px solid #000;
        input{
          width: 50px;
          height: 20px;
          text-align: center;
          line-height: 20px;     
        }
      }
    }
    .box-right{
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 20%;
      height: 100%;
      // background: cadetblue;
      .b-num{
        width: 50%;
        height: 50px;
        // border: 1px solid #000;
        text-align: center;
        line-height: 50px;
        font-weight: bold;
      }
      .b-action{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 50px;
        // border: 1px solid #000;
        button{
          width: 50px;
          height: 30px;
          cursor: pointer;
          &:hover{
            background: red;
            color:#fff;
          }
        }
      }
    }
  }
}
</style>

