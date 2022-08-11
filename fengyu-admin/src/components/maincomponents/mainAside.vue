<template>
  <div class="aside-container">
      <ul class="menu">
          <li class="menu-item" v-if="profile.identity==0">
              <router-link  to="/main/user" class="linkstyle">管理员用户管理</router-link>
          </li>
          <li class="menu-item">
              <router-link to="/main/shopuser" class="linkstyle">商城用户管理</router-link>
          </li>
          <li class="menu-item">
              <router-link  to="/main/power" class="linkstyle">权限管理</router-link>
          </li>
          <li class="menu-item">
              <router-link to="/main/order" class="linkstyle">订单管理</router-link>
          </li>
          <li class="menu-item">
              <router-link to="/main/setting" class="linkstyle">系统设置</router-link>
          </li>
          <li class="menu-item">
              <router-link to="/main/help" class="linkstyle">用户帮助</router-link>
          </li>
      </ul>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
    name:"mainAside",
    setup(){
        const store=useStore();
        let profile=computed(()=>{
            return store.state.user.profile;
        })
        return{
            profile
        }
    }
}
</script>

<style lang="less" scoped>
.aside-container{
    width: 20%;
    height: 660px;
    border-right: 1px solid rgb(239,239,239); 
}
.menu{
    padding: 0;
    list-style-type: none;
}
.menu-item{
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 125%;
    border-bottom: 1px solid rgb(239,239,239);
    box-sizing: border-box;
    .router-link-active{
        background: cyan;
    }
}
.menu-item:hover{
    background: rgb(239,239,239);
}
.linkstyle{
    text-decoration: none;
}

</style>