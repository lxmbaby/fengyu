<template>
<!-- 小骨架组件 -->
  <div class="FySkeleton" :style="{width,height}" :class="{shan:animated}">
      <div class="block" :style="{backgroundColor:bg}"></div>
  </div>
</template>

<script>
export default {
    name:"FySkeleton",
    props:{
        bg:{
            type:String,
            default:"#efefef"
        },
        width:{
            type:String,
            default:"100px"
        },
        height:{
            type:String,
            default:"100px"
        },
        animated:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style lang="less" scoped>
.FySkeleton{
    display: inline-block;
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    .block{
        width: 100%;
        height: 100%;
        border-radius: 2px;
    }
}
.shan{
    &::after{
        content: "";
        position: absolute;
        top: 0;
        width: 50%;
        height: 100%;
        animation: shan 1.5s ease 0 infinite;
        background: linear-gradient(
            to left,
            rgba(255,255,255,0) 0,
            rgba(255,255,255,0.3) 50%,
            rgba(255,255,255,0) 100%
        );
        transform: skewX(-45deg);
    }
}
@keyframes shan{
    0%{
        left:-100%; 
    }
    100%{
        left: 120%;
    }
}
</style>
