<template>
  <div class="head">
      <span class="headname">{{sysName}}</span>
      <span class="user">你好，{{profile.name}}！</span>
      <button type="button" class="userout" @click="outLogin">退出登录</button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import {useRouter} from 'vue-router'
export default {
    name:'mainHead',
    props:['sysName'],
    setup(){
        const store=useStore();
        let router=useRouter();
        let profile=computed(()=>{
            return store.state.user.profile;
        })
        let outLogin=()=>{
            store.commit('user/setData');
            router.push("/")
            localStorage.removeItem('fengyuhoutai')
        }
        return{profile,outLogin}
    }
}
</script>

<style lang="less" scoped>
.head{
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: 60px;
    border-top: 1px solid rgb(239,239,239);
    border-bottom: 1px solid rgb(239,239,239);
}
.headname{
    position: absolute;
    left: 30px;
    width: 350px;
    height: 50px;
    font-size: 30px;
    text-align: center;
    line-height: 50px;
}
.user{
    position: absolute;
    right: 100px;
    width: 140px;
    height: 30px;
    font-size: 14px;
    // background:rgb(239,239,239);
    text-align: center;
    line-height: 30px;
}
.userout{
    position: absolute;
    right: 30px;
    width: 64px;
    height: 30px;
    font-size: 12px;
    border: none;
    background:rgb(239,239,239);
}
</style>>

