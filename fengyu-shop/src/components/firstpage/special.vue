<template>
  <Panel title="最新专题">
      <template v-slot:right><More/></template>
      <div class="special-list" ref="target">
          <div class="special-item" v-for="item in special" :key="item.id">
              <router-link to="/">
                  <img :src="item.src" alt="">
                  <div class="meta">
                      <p class="title">
                        <span class="top ellipsis">{{item.top}}</span>
                        <span class="sub ellipsis">{{item.sub}}</span>
                      </p>
                      <span class="price">&yen;{{item.price}}起</span>
                  </div>
              </router-link>
              <div class="foot">
                  <span class="like"><i class="iconfont icon-hart1"></i> {{item.link}}</span>
                  <span class="view"><i class="iconfont icon-see"></i> {{item.view}}</span>
                  <span class="reply"><i class="iconfont icon-message"></i> {{item.reply}}</span>
              </div>
          </div>
      </div>
  </Panel>
</template>

<script>
import Panel from "@/components/firstpage/panel.vue"
import {special} from "@/api/setlist.js"
import {DataLazy} from "@/hooks/index.js"
export default {
    name:"Special",
    components:{Panel},
    setup(){
        const {target,result}=DataLazy(special)
        return{target,special:result}
    }
}
</script>

<style lang="less" scoped>
.panel{
    background: #f5f5f5;
}
.special-list{
    height: 488px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    .special-item{
        width: 30%;
        background: #fff;
        a{
            display: block;
            width: 100%;
            height: 388px;
            position: relative;
            img{
                width: 100%;
                height: 100%;
            }
            .meta{
                background-image:linear-gradient(to top,rgba(0,0,0,0.8), transparent 50%) ;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 388px;
                .title{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    padding-left: 16px;
                    width: 70%;
                    height: 70px;
                    .top{
                        color: #fff;
                        font-size: 22px;
                        display: block;
                    }
                    .sub{
                        color: #999;
                        font-size: 19px;
                        display: block;
                    }
                }
                .price{
                    position: absolute;
                    bottom: 25px;
                    right: 16px;
                    line-height: 1;
                    padding: 4px 8px 4px 7px;
                    color: red;
                    font-size: 17px;
                    background: #fff;
                    border-radius: 2px;
                }
            }
        }
        .foot{
            height: 100px;
            line-height: 100px;
            padding: 0 20px;
            font-size: 16px;
            i{
                display: inline-block;
                width: 15px;
                height: 14px;
                margin-right: 5px;
                color: #999;
            }
            .like,.view{
                float: left;
                margin-right: 25px;
                vertical-align: middle;
            }
            .reply{
                float: right;
                vertical-align: middle;
            }
        }
    }
}
</style>
