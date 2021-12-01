<template>
<!-- 人气推荐模块组件 -->
  <div>
    <Panel title="人气推荐" subTitle="人气爆款 不容错过">
      <!-- <template #right><More path="/"/></template> -->
      <!-- 面板内容 -->
      <div ref="target">
        <Transition name="fade">
        <ul v-if="hotgoods.length" class="good-list">
          <li v-for="item in hotgoods" :key="item.id">
            <router-link to="/">
              <img :src="item.src" alt="">
              <p class="name ellipsis">{{item.name}}</p>
              <p class="price">&yen;{{item.price}}</p>
            </router-link>
          </li>
        </ul>
        <Skeleton v-else bg="#f0f9f4" />
        </Transition>
      </div>
    </Panel> 
  </div>
    
</template>

<script>
import Panel from "@/components/firstpage/panel.vue"
import {hotList} from "@/api/setlist.js"
import Skeleton from "@/components/firstpage/skeleton.vue"
import {DataLazy} from "@/hooks/index.js"
export default {
    name:"Hot",
    components:{Panel,Skeleton},
    setup(){
      // let hotgoods=ref([])
      // hotList().then(data=>{
      //   hotgoods.value=data
      // })
      // const target=ref(null)
      let {target,result}=DataLazy(hotList)
      return{hotgoods:result,target}
    }
}
</script>

<style lang="less" scoped>
.good-list{
  display: flex;
  justify-content: space-between;
  height: 300px;
  li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 24.8%;
    max-width: 380px;
    min-width: 160px;
    height:300px;
    background: #f0f9f4;
    &:hover{
      box-shadow: 2px 2px  10px #ddd;
    }
    img{
      width: 70%;
    }
  }
  p{
    padding: 0 1px;
    margin: 0;
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

