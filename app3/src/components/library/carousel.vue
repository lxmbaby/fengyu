<template>
<!-- 轮播图组件 -->
  <div class="carousel"  @mouseenter="stop()" @mouseleave="start()">
      <ul class="carousel-body">
          <li class="carousel-item" v-for="item in sliders" :key="item.id" :class="{fade:index===item.id}">
              <router-link to="/">
                <img :src="item.src" alt="">
              </router-link>
          </li>
      </ul>
      <a href="javascript:;" class="carousel-btn prev" @click="toggle(-1)"><i class="iconfont icon-angle-left"></i></a>
      <a href="javascript:;" class="carousel-btn next" @click="toggle(1)"><i class="iconfont icon-angle-right"></i></a>
      <div class="carousel-indicator">
          <span @click="index=item.id" v-for="item in sliders" :key="item.id" :class="{active:index===item.id}"></span>
      </div>
  </div>
</template>

<script>
import {onUnmounted, ref,watch} from "vue"
export default {
    name:"Carousel",
    props:{
        sliders:{
            type:Array,
            default:()=>[]
        },
        autoPlay:{
            type:Boolean,
            default:false
        },
        time:{
            type:Number,
            default:3000
        }
    },
    setup(props){
        const index=ref(1);
        let timer=null;
        let autoPlayFn=()=>{
            clearInterval(timer);
            timer=setInterval(()=>{
                index.value++;
                if(index.value>=props.sliders.length+1){
                    index.value=1
                }
            },props.time)
        }
        watch(()=>props.sliders,(newVal)=>{
            if(newVal.length && props.autoPlay){
                autoPlayFn()
            }
        },{immediate:true})
        // 鼠标进入轮播图停止
        let stop=()=>{
            if(timer) clearInterval(timer)
        }
        // 鼠标离开轮播图播放
        let start=()=>{
             if(props.sliders.length && props.autoPlay){
                autoPlayFn()
            }
        }
        //鼠标点击左右按钮切换上一张或下一张
        let toggle=(step)=>{
            let newValue=index.value+step;
            if(newValue>props.sliders.length){
                index.value=1;
                return
            }
            if(newValue<1){
                index.value=props.sliders.length;
                return
            }
            index.value=newValue;
        }
        // 组件卸载时，清除定时器
        onUnmounted(()=>{
            clearInterval(timer)
        })
        return{
            index,start,stop,toggle
        }
    }  
}
</script>

<style lang="less" scoped>
.carousel{
    width: 100%;
    height: 100%;
    // background: chartreuse;
    position: relative;
    .carousel-body{
        width: 100%;
        height: 100%;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    &-item{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 0.5s linear;
        &.fade{
            opacity: 1;
            z-index: 1;
        }
        img{
            width: 100%;
            height: 100%;
        }
    }
    &-indicator{
        position: absolute;
        left: 100px;
        bottom: 20px;
        z-index: 2;
        width: 100%;
        text-align: center;
        span{
            display: inline-block;
            width: 12px;
            height: 12px;
            background: rgba(0, 0,0, 0.2);
            border-radius: 50%;
            cursor: pointer;
            ~span{
                margin-left: 12px;
            }
            &.active{
                background: #fff;
            }
        }
    }
    &-btn{
        width: 44px;
        height: 44px;
        background: rgba(0, 0,0, 0.2);
        color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 180px;
        z-index: 2;
        text-align: center;
        line-height: 44px;
        opacity: 0;
        transition: all 0.5s;
        text-decoration: none;
        &.prev{
            left: 240px;
        }
        &.next{
            right: 15px;
        }
    }
    &:hover{
        .carousel-btn{
            opacity: 1;
        }
    }
}
</style>

