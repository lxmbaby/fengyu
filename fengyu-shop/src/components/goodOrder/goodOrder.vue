<template>
 <div class="contain">
   <button class="back" @click="router.go(-1)">&lt;返回</button>
   <div class="kong" v-if="!profile.id">
     <p>此处空空如也哦！</p>
     <p>请先完成账号注册并登录才可以查看商品订单哦！！！</p>
   </div>
    <ul class="goodlist" >
      <li>
        <div class="boxtop">
          <div class="t-checkbox">订单编号</div>
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
            <span>{{item.did}}</span>
            
          </div>
          <div class="box-center">
            <div class="imgsize">
              <img :src="item.src" alt="">
            </div>
            <span class="name">{{item.name}}</span>
            <span class="b-price">￥{{item.price}}</span>
            <div class="b-quantity">
              <span>{{item.count}}</span>
            </div>
          </div>
          <div class="box-right">
            <p class="b-num">￥{{item.count*item.price}}</p>
            <p class="b-state" v-if="item.state==1">顾客已支付</p>
            <p class="b-state" v-else-if="item.state==2">商家已发货</p>
          </div>
        </div>
      </li>
  </ul>
  <!-- {{list}} -->
 </div>
</template>

<script>
import { useStore } from 'vuex'
import {useRouter} from 'vue-router';
import { ElMessage } from 'element-plus';
import {computed} from "vue"
export default {
  name:"goodOrder",
  setup(){
    const store=useStore();
    const router=useRouter();
    let profile=computed(()=>{
      return store.state.user.profile;
    })
    if(!profile.value.id){
      ElMessage({
        message: '你还没有登录，请完成登录后再查看商品订单！',
        type: 'error',
      })
    }else{
      store.dispatch('goodcar/getOrder',{id:profile.value.id});
    }
    //获取到本地存储中gooodcar模块中的用户购物车数据
    let list=computed(()=>{
      return store.state.goodcar.orderlist
    })
    return{router,profile,list}
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
  .boxtop{
    width: 100%;
    height: 50px;
    display: flex;
    background: #f3f3f3;
    border: 1px solid #e9e9e9;
    .t-checkbox{
      width: 15%;
      height: 100%;
      text-align: right;
      line-height: 50px;
      // background: yellow;
    }
    .t-good{
      width: 60%;
      height: 100%;
      text-align: center;
      line-height: 50px;
      // background: #aaa;
    }
    .t-num,.t-action{
      width: 10%;
      height: 100%;
      text-align: center;
      line-height: 50px;
      // background: cadetblue;
    }
    .t-price{
      width: 10%;
      height: 100%;
      text-align: center;
      line-height: 50px;
      // margin-right: 8px;
      // background: blueviolet;
    }
    .t-quantity{
      width: 10%;
      height: 100%;
      text-align: center;
      line-height: 50px;
      // margin-right: 15px;
      // background: saddlebrown;
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
      width: 15%;
      height: 100%;
      // background: blue;
      span{
        position: absolute;
        top: 40%;
        right: 20%;
        width: 10%;
        height: 15%;
        text-align: center;
        // background: red;
      }
      

    }
    .box-center{
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 80%;
      height: 100%;
      // background: blueviolet;
      .imgsize{
        // position: absolute;
        // top: 10%;
        // right: 0;
        width: 20%;
        height: 80%;
        // background: chartreuse;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .name{
        display: flex;
        align-items: center;
        width: 70%;
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
      .b-state{
        width: 50%;
        height: 50px;
        // border: 1px solid #000;
        text-align: center;
        line-height: 50px;
      }
    }
  }
}
</style>

