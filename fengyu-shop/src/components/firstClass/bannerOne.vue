<template>
<!-- 包裹轮播图容器组件 -->
  <div class="contian">
    <!-- 轮播图组件 -->
  <Carousel autoPlay :sliders="sliders[Number(id)-1]" />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'
export default {
    name:"bannerOne",
    props:['id'],
    setup(){
      let store=useStore();
      let sliders=computed(()=>{
        return store.state.firstClass.imgList
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
    height:500px;
    // border: 1px solid red;
    z-index: 98;
}
</style>

