<template>
  <!-- 顶部组件 -->
  <div class="topnav">
      <div class="container">
          <ul>
              <template v-if="profile.token">
                    <li><a href="javascript:;"><i class="iconfont icon-user"></i>{{profile.name}}</a></li>
                    <li><a href="javascript:;" @click="outLogin">退出登录</a></li>
              </template>
              <template v-else>
                    <li><a href="login">请先登录</a></li>
                    <li><a href="register">免费注册</a></li>
              </template>
              <li><a href="javascript:;">我的订单</a></li>
              <li><a href="javascript:;">会员中心</a></li>
              <li><a href="javascript:;">帮助中心</a></li>
              <li><a href="javascript:;">关于我们</a></li>
              <li><a href="javascript:;"><i class="iconfont icon-phone"></i>手机版</a></li>
          </ul>
      </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
    name:"Topnav",
    setup(){
        const store=useStore()
        let profile=computed(()=>{
            return store.state.user.profile;
        })
        console.log(profile)
        let outLogin=()=>{
            store.commit('user/setData');
        }
        return{profile,outLogin}
    }
}
</script>

<style lang="less" scoped>
.topnav{
    background: #333;
    ul{
        display: flex;
        height: 53px;
        justify-content: flex-end;
        align-items: center;
        li{
            a{
                padding: 0 15px;
                color: #cdcdcd;
                line-height: 1;
                display: inline-block;
            }
            i{
                    font-size: 14px;
                    margin-right: 2px;
            }
            &:hover{
                color: cyan;
            }
        }
        // ~选择器的作用是选择当前选择器后所有兄弟节点
        ~ li{ 
            a{
                border-left: 2px solid #666;
            }
        }
    }
}
</style>
