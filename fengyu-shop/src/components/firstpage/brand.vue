<template>
  <Panel title="热门品牌" subTitle="国际经典 品质保证" class="panel">
      <template #right>
          <a @click="toggle(-1)" :class="{disabled:index===0}"  href="javascript:;" class="iconfont icon-angle-left prev"></a>
          <a @click="toggle(1)" :class="{disabled:index==1}"  href="javascript:;" class="iconfont icon-angle-right next"></a>
      </template>
      <div class="box" ref="target">
          <Transition name="fade">
          <ul v-if="brandgood.length" class="list" :style="{transform: `translateX(${-index*1140}px)`}">
              <li v-for="item in brandgood" :key="item.id">
                  <router-link to="/">
                    <img :src="item.src" alt="">
                  </router-link>
              </li>
          </ul>
          <div v-else class="skeleton">
              <FySkeleton class="item" v-for="i in 5" :key="i" animated bg="#e4e4e4" width="218px" height="270px" />
          </div>
          </Transition>
      </div>
  </Panel>
</template>

<script>
import Panel from "@/components/firstpage/panel.vue"
import {brandList} from "@/api/setlist.js"
import {DataLazy} from "@/hooks/index.js"
import {ref} from 'vue'
export default {
    name:"Brand",
    components:{Panel},
    setup(){
        //获取数据
        let {target,result}=DataLazy(brandList) //DataLazy中必须传一个函数
        //控制左右按钮
        let index=ref(0)
        let toggle=(step)=>{
            let newIndex=index.value+step;
            if(newIndex<0||newIndex>1) return
            index.value=newIndex
        }
        return{brandgood:result,target,toggle,index}
    }
}
</script>

<style lang="less" scoped>

    .iconfont{
        width: 20px;
        height: 20px;
        background: #ccc;
        color: #fff;
        display: inline-block;
        text-align: center;
        margin-left: 5px;
        background: rgb(18, 190, 133);
        &::before{
            font-size: 12px;
            position: relative;
            top: -2px;
        }
        &.disabled{
            background: #ccc;
            cursor: not-allowed;
        }
    }
    .box{
        display: flex;
        width: 100%;
        height: 270px;
        overflow: hidden;
        padding-bottom: 40px;
        .list{
            width: 200%;
            display: flex;
            transition: all 1s ;
            li{
                margin-right: 10px;
                width: 218px;
                // border: 1px solid #000;
                &:nth-child(5n){
                    margin-right: 0;
                }
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .skeleton{
            width: 100%;
            display: flex;
            .item{
                margin-right: 10px;
                 &:nth-child(5n){
                    margin-right: 0;
                }
            }
        }

    }

</style>

