<template>
  <div class="product" ref="target">
      <Panel :title="item.name" v-for="item in good" :key="item.id" class="panel">
          <template v-slot:right>
              <div class="sub">
                  <router-link to="/" v-for="sub in item.children" :key="sub.id">{{sub.name}}</router-link>
              </div>
              <More :path="`/category/${item.id}`"/>
          </template>
          <div class="box">
              <router-link :to="`/category/${item.id}`" class="cover">
                <img :src="item.src" alt="">
                <strong class="label">
                    <span>{{item.name}}馆</span>
                    <span>{{item.saleInfo}}</span>
                </strong>
              </router-link>
              <ul class="good-list">
                  <li v-for="suv in item.goods" :key="suv.id">
                      <Good :goods="suv"/>
                  </li>
              </ul>
          </div>
      </Panel>
  </div>
</template>

<script>
import Panel from "@/components/firstpage-com/panel.vue"
import Good from "@/components/firstpage-com/good.vue"
import {goods} from "@/api/setlist.js"
import {DataLazy} from "@/hooks/index.js"
export default {
    name:"Product",
    components:{Panel,Good},
    setup(){
        let {target,result}=DataLazy(goods)
        return{good:result,target}
    }
}
</script>

<style lang="less" scoped>
.product{
    background: #fff;
    height: 2900px;
    .panel{
        margin-top: 20px;
        &:first-child{
            margin-top: 0;
        }
    }
    .sub{
        margin-bottom: 2px;
        a{
            padding: 2px 12px;
            font-size: 16px;
            border-radius: 4px;
            &:hover{
                background: orangered;
                color: #fff;
            }
            &:last-child{
                margin-right: 80px;
            }
        }
    }
    .box{
        display: flex;
        .cover{
            width: 20%;
            height: 610px;
            margin-right: 10px;
            position: relative;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;//图片平铺
            }
            .label{
                width: 70%;
                height: 66px;
                display: flex;
                font-size: 18px;
                color: #fff;
                line-height: 66px;
                font-weight: normal;
                position: absolute;
                top: 50%;
                left: 0;
                transform: translate3d(0,-50%,0);
                span{
                    text-align: center;
                    &:first-child{
                        width: 76px;
                        background: rgba(0,0,0,.9);
                    }
                    &:last-child{
                        flex: 1;
                        background: rgba(0,0,0,.7);
                    }
                }
            }
        }
    }
    .good-list{
        width: 78%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li{
            width: 23%;
            height: 283px;
            margin-right: 10px;
            &:nth-last-child(-n+4){
                margin-bottom: 0;
            }
            &:nth-child(4n){
                margin-right: 0;
            }
        }
    }
}
</style>
