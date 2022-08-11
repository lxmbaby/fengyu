<template>
  <div class="goodbox">
      <ul class="good">
          <li v-for="item in list" :key="item.id">
                <router-link to="">
                    <img :src="item.src||item.fpicture" alt="">
                    <p class="name">{{item.name}}{{item.dev}}{{item.fname}}</p>
                    <p class="price">&yen;{{item.price}}{{item.fprice}}</p>
                </router-link>
          </li>
      </ul>
      <div class="kong" v-if="list<1">
          抱歉，没查找到相关的商品，请重新查找!
      </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import {computed, watch} from "vue"
import {useRouter} from 'vue-router'
export default {
    name:"queryResult",
    setup(){
        const store=useStore();
        const router=useRouter();
        let list=computed(()=>{
            return store.state.goodcar.querylist
        })
        watch(list,(newvalue,oldvalue)=>{
            router.go(0)
        })        
        return{list}
    }
}
</script>

<style lang="less" scoped>
.goodbox{
  width: 75%;
  // height: 600px;
  margin:0 auto;
  background:#fff ;
    .kong{
      width: 100%;
      height: 550px;
      margin:0 auto;
      background:#fff ;
      text-align: center;
      line-height: 550px;
    }
    .good{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li{
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            width: 18%;
            height: 230px;
            border: 1px solid #e1e1ee;
            margin-bottom: 20px;
            &:hover{
                border: 1px solid red;
            }
            img{
                width: 70%;
            }
            p{  width: 80%;
                padding: 0;
                margin: 0 10%;
                text-overflow: ellipsis;
                overflow: hidden;
                -webkit-line-clamp: 2;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                color: #000;
                line-height: normal;
            }
            .price{
                margin-top: 5px;
                color: red;
            }
        }
    }
}
</style>
