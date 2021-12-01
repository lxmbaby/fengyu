<template>
<!-- 包裹轮播图容器组件 -->
  <div class="contian">
    <!-- 轮播图组件 -->
  <Carousel autoPlay :sliders="sliders" />
  </div>
</template>

<script>
import {ref} from 'vue'
import { carouselList } from "@/api/setlist.js";
export default {
    name:"Banner",
    setup(){
      let sliders=ref([])
      carouselList().then(data=>{
        sliders.value=data
      })
      return{
        sliders
      }
    }
}
</script>

<style lang="less" scoped> 
.contian{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:400px;
    // border: 1px solid red;
    z-index: 98;
}
</style>

