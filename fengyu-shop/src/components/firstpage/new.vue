<template>
<!-- 新鲜好物模块组件 -->
  <div>
    <Panel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
      <template #right><More path="/"/></template>
      <!-- 面板内容 -->
      <div ref="target">
        <Transition name="fade">
        <ul v-if="newgoods.length" class="good-list">
          <li v-for="item in newgoods" :key="item.id">
            <router-link :to="'/firstpage/new/'+item.id">
              <img :src="item.src" :alt="item.name">
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
import {newList} from "@/api/setlist.js"
import Skeleton from "@/components/firstpage/skeleton.vue"
import {DataLazy} from "@/hooks/index.js"
export default {
    name:"New",
    components:{Panel,Skeleton},
    setup(){
      // let newgoods=ref([])
      // newList().then(data=>{
      //   newgoods.value=data
      // })
      // const target=ref(null)
      let {target,result}=DataLazy(newList)
      return{newgoods:result,target}
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
    max-width: 280px;
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
    text-align: center;
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
