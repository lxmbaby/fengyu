<template>
<!-- 商品吸顶组件 -->
  <div class="app-contianer" :class="{show:y>=78}">
    <div class="contianer" v-show="y>=78">
        <div class="pricture">
           <img src="@/assets/image/logo.png" alt="枫遇">
        </div>
        <headerNav />
        <div class="right">|
            <router-link to="/" class="linkstyle">品牌</router-link>
            <router-link to="/" class="linkstyle">专题</router-link>
        </div>
    </div>
  </div>
</template>

<script>
import headerNav from "@/components/mainComponents/header-nav.vue";
// import { onMounted,ref } from 'vue';
import {useWindowScroll} from '@vueuse/core'
export default {
    name:"headerSticknav",
    components:{headerNav},
    // 普通获取屏幕滚动高度

    // setup(){
    //     let y=ref(0)
    //     onMounted(()=>{
    //         window.onscroll=()=>{
    //             let scorll=document.documentElement.scrollTop;
    //             console.log(scorll)
    //             y.value=scorll;
    //         }
    //     })
    //     return{y}
    // }

    // 通过vueuse/core库的useWindowScroll方法获取屏幕滚动高度
    setup(){
        let { y }=useWindowScroll();
        return{ y }
    }
}
</script>

<style lang="less" scoped>
.app-contianer{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  opacity: 0;
  transform: translateY(-100%);
  z-index: 999;
  &.show{
    opacity: 1;
    transform: none;
    transition: all 0.3s linear;
  }
  .contianer{
    position: relative;
    width: 75%;
    min-width: 773px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    .pricture{
        width: 15%;
        height: 5.714286rem;
        img{
          width: 100%;
          height: 100%;
        }
    }
    .right{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 15%;
        height: 5.714286rem;
        .linkstyle{
        text-decoration: none;
      }
    }
  }
}
</style>

