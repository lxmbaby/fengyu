<template>
  <PanelOne title="热卖商品" subTitle="多人抢购">
      <div>
          <ul class="hotOne">
              <li v-for="item in hot[hid-1]" :key="item.id">
                  <router-link to="/">
                      <img :src="item.src" alt="">
                      <p class="dev">{{item.dev}}</p>
                      <p class="price">{{item.price}}</p>
                      <a class="link" href="/">立即抢购Go</a>
                  </router-link>
              </li>
          </ul>
      </div>
  </PanelOne>
</template>

<script>
import PanelOne from "@/components/firstClass/panelOne.vue"
import { computed } from 'vue';
import { useStore } from 'vuex'
export default {
    name:"hotOne",
    components:{PanelOne},
    props:['hid'],
    setup(){
      let store=useStore();
      let hot=computed(()=>{
        return store.state.firstClass.hotList
      })
      return{
        hot
      }
    }
}
</script>

<style lang="less" scoped>
.hotOne{
    display: flex;
    justify-content: space-between;
    height: 250px;
    li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 25%;
        height: 100%;
        position: relative;
        transition: width 0.2s linear;
        img{
            width: 70%;
        }
        .link{
            display: none;
            position: absolute;
            bottom: 10px;
            left: 30%;
            width: 120px;
            height: 40px;
            background: red;
            border-radius: 10px;
            color:#fff;
            border:2px solid #fff;
            text-align: center;
            line-height: 40px;
        }
        &:hover{
            width: 40%;
            background: cornflowerblue;
            img{
                width: 50%;
                height: 150px;
                position: absolute;
                top: 10px;
                left: 10px;
            }
            .dev{  
                position: absolute;
                right: 10px;
                top: 20px;
                width: 35%;
                -webkit-line-clamp: 8;
                margin: 0;
            }
            .price{
                position: absolute;
                right: 20px;
                bottom: 60px;
                width: 30%;
                height: 20%;
                font-size: 20px;
                margin: 0;
            }
            .link{
                display: block;
            }
        }
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
    }
    .price{
        margin-top: 5px;
        color: red;
    }
}
</style>
