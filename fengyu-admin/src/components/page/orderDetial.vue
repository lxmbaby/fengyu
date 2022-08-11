<template>

  <ul class="goodlist">
      <button class="back" @click="router.go(-1)">&lt;返回</button>
      <li>
        <div class="boxtop">
          <div class="t-good">商品</div>
          <div class="t-name">描述</div>
          <div class="t-price">单价</div>
          <div class="t-quantity">数量</div>
          <div class="t-num">小计</div>
          <!-- <div class="t-action">操作</div> -->
        </div>
      </li>
      <li v-for="item in List" :key="item.id">
        <div class="box">
          <div class="box-left">
              <!-- <input type="checkbox" style="width:20px;height:20px;" v-model="item.ischeck"> -->
            <div class="imgsize">
              <img :src="item.src" alt="">
            </div>
          </div>
          <div class="box-center">
            <span class="name">{{item.name}}</span>
            <span class="b-price">￥{{item.price}}</span>
            <span class="b-quantity">{{item.count}}</span>
          </div>
          <div class="box-right">
            <p class="b-num">￥{{item.count*item.price}}</p>
            <!-- <div class="b-action">
              <button type="button" @click="deleteOne(item.cid)">删除</button>
            </div> -->
          </div>
        </div>
      </li>
  </ul>
</template>

<script>
import {useStore} from 'vuex'
import {computed, toRef} from "vue"
import {useRouter} from 'vue-router';
export default {
    name:"orderDetial",
    props:["id"],
    setup(props){
        let sid=toRef(props,"id")
        let store=useStore();
        const router=useRouter();
        //通过dispatch调用vuex中actions的getordergood方法
        store.dispatch('orderGood/getordergood',sid.value);
        let List=computed(()=>{
            return store.state.orderGood.orderGoods
        })
        return{router,List}
    }
}
</script>

<style lang="less" scoped>

.goodlist{
    position: relative;
    list-style-type: none;
    margin: 0;
    padding: 0;
    .back{
        position: absolute;
        top: 8px;
        left: 10px;
        width: 60px;
        height: 35px;
        margin: 0;
        padding: 0;
        border:none;
        cursor: pointer;
        background:rgb(239,239,239);
        &:hover{
            background: #aaa;
        }
    }
    .boxtop{
    width: 100%;
    height: 50px;
    display: flex;
    background: #f3f3f3;
    border: 1px solid #e9e9e9;
    // .t-checkbox{
    //   width: 25%;
    //   height: 100%;
    //   transform: translateX(50px);
    //   text-align: center;
    //   line-height: 50px;
    // }
    .t-good{
      width: 20%;
      height: 100%;
      text-align: center;
      line-height: 50px;
    //   border:1px solid #000;
    }
    .t-name{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40%;
        height: 100%;
        // border:1px solid #000;
    }
    .t-num,.t-action{
      width: 15%;
      height: 100%;
      text-align: center;
      line-height: 50px;
    //   border:1px solid #000;
    }
    .t-price{
      width: 12.5%;
      height: 100%;
      text-align: center;
      line-height: 50px;
      margin-left: 40px;
    //   border:1px solid #000;
    }
    .t-quantity{
      width: 12.5%;
      height: 100%;
      text-align: center;
      line-height: 50px;
    //   margin-right: 15px;
    //   border:1px solid #000;
    }
  }
  .box{
    display: flex;
    width: 100%;
    height: 130px;
    border: 1px solid #f1f1f1;
    border-top: 2px solid #aaa;
    .box-left{
    //   position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20%;
      height: 100%;
      input{
        position: absolute;
        top: 40%;
        left: 20%;
      }
      .imgsize{
        // position: absolute;
        // top: 10%;
        // right: 10%;
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
      width: 70%;
      height: 100%;
    //   background: blueviolet;
      .name{
        display: flex;
        align-items: center;
        justify-content: center;
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
      width: 15%;
      height: 100%;
    //   background: cadetblue;
      .b-num{
        width: 50%;
        height: 50px;
        // border: 1px solid #000;
        text-align: center;
        line-height: 50px;
        font-weight: bold;
      }
    //   .b-action{
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     width: 50%;
    //     height: 50px;
    //     // border: 1px solid #000;
    //     button{
    //       width: 50px;
    //       height: 30px;
    //       cursor: pointer;
    //       &:hover{
    //         background: red;
    //       }
    //     }
    //   }
    }
  }
}
</style>

