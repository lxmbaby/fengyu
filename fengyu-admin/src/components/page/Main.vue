<template>
  <div class="main-container">
    <!-- 头部组件 -->
    <mainHead :sysName="systemName"></mainHead>
    <div class="main-box">
      <!-- 左侧导航栏区域 -->
      <mianAside ></mianAside>
      <!-- 右侧主体区域 -->
      <div class="main-body">
        <router-view></router-view>
      </div> 
    </div>
  </div>
</template>

<script>
import mainHead from '../maincomponents/mainHead.vue'
import mianAside from '../maincomponents/mainAside.vue'
export default {
  name:"Main",
  components:{mainHead, mianAside},
  setup(){
    let systemName="枫遇商城后台管理"
    return{
      systemName,
    }
  }

}
</script>

<style lang="less" scoped>
.main-container{
  display: flex;
  height: 100%;
  flex-direction: column;
}
.main-box{
  display: flex;
  height: 660px;
  .main-body{
    flex: 1;
    padding: 15px;
    height: 660px;
  }
}
</style>>


