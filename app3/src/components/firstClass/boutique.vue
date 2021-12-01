<template>
  <PanelOne title="特色精品" subTitle="质量保证">
      <div class="boutique">
          <ul class="textClass">
            <li v-for="item in bou" :key="item.id" @click="change(item.id)" :class="{show:index===item.id}">{{item.name}}
              <div v-show="item.open">
                <ul class="textGood">
                    <li v-for="sub in item.src" :key="sub.id">
                      <router-link to="/">
                        <img :src="sub.src" alt="">
                        <p class="dev">{{sub.dev}}</p>
                        <p class="price">{{sub.price}}</p>
                      </router-link>
                    </li>
                </ul>
              </div>
            </li>
          </ul>
      </div>
  </PanelOne>
</template>

<script>
import PanelOne from "@/components/firstClass/panelOne.vue"
import { useStore } from 'vuex'
import {computed,ref,toRef, watch} from "vue"
export default {
    name:"boutique",
    components:{PanelOne},
    props:['bid'],
    setup(props){
      let store=useStore();
      //拿到传过来的一级类的id
      let l=toRef(props,"bid")
      let bou=computed(()=>{
        return store.state.firstClass.bouList[l.value-1]
      })
      let index=ref(1)
      //接收用户点击精品区类传过来的对应id，进行对应类的展示
      let change=(id)=>{
        index.value=id;
        let show=bou.value.find(item=>item.id===index.value)
        show.open=true;
      }
      //监控用户点击精品区的类，改变则隐藏上一个打开的类
      watch(index,(newValue,oldValue)=>{
        let hidedown=bou.value.find(item=>item.id===oldValue)
        hidedown.open=false;
      })
      //监控用户点击的一级类，重置精品区选择的类
      watch(l,(newValue,oldValue)=>{
        index.value=1
      })
      //获取到当前一级类下精品区的数据
      let select=computed(()=>{
       return bou.value.find(item=>item.id===index.value)
      })
      
      return{
        bou,change,l,select,index
      }
    }
}
</script>
<style lang="less" scoped>
.boutique{
  height: 320px;
   .textClass{
      display: flex;
      justify-content: space-between;
      height: 50px;
      li{
        width: 25%;
        text-align: center;
        line-height: 50px;
        // border: 1px solid #000;
        cursor: pointer;
        color: red;
      }
      .show{
          background: red;
          color: #fff;
      }
   }
   .textGood{
      position: absolute;
      left: 0;
      display: flex;
      justify-content: space-between;
      height: 250px;
      margin-top: 20px;
      li{
        width: 25%;
        height: 100%;
        // border: 1px solid #000;
        img{
          width: 70%;
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
          line-height: normal;
      }
      .price{
          margin-top: 5px;
          color: red;
      }
   }
}
</style>