<template>
  <div class="firstClass" >
    <div class="contianer">
        <CategoryOne :newMenu="newMenu"/>
        <BannerOne :id="id" />
        <HotOne :hid="id" />
        <Boutique :bid="id" />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import {computed} from 'vue'
import CategoryOne from "@/components/firstClass/categoryOne.vue"
import BannerOne from "@/components/firstClass/bannerOne.vue"
import HotOne from "@/components/firstClass/hotOne.vue"
import Boutique from "@/components/firstClass/boutique.vue"
export default {
    name:"firstClass",
    props:['id'],
    components:{CategoryOne,BannerOne,HotOne,Boutique},
    setup(props){
      let store=useStore();
      //获取一级分类列
      let menu=computed(()=>{
       return store.state.nav.goodList
      })
      let newMenu=computed(()=>{
        console.log(props.id)
        return menu.value.find(item=>item.gid===Number(props.id))
      })
      //请求一级类轮播图图片
      store.dispatch('firstClass/getImg');
      //请求一级类热卖商品信息
      store.dispatch('firstClass/getHot');
      //请求一级类特色商品信息
      store.dispatch('firstClass/getBou');
      return{
        newMenu
      }
    }
}
</script>

<style lang="less" scoped>
.firstClass{
  width: 100%;
  background: rgb(239, 239, 239);
  .contianer{
    position: relative;
    width: 75%;
    min-width: 773px;
    margin: 0 auto;
    // border: 1px solid #000;
  }
}
</style>