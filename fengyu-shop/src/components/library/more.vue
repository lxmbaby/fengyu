<template>
<!-- 查看全部组件 -->
  <router-link :to="path" class="more">
      <span>查看全部</span>
      <i class="iconfont icon-angle-right"></i>
  </router-link>
</template>

<script>

export default {
    name:"More",
    props:{
      path:{
        type:String,
        default:"/"
      }
    }
}
</script>

<style lang="less" scoped>
.more{
  margin-bottom: 2px;
  text-decoration: none;
  span{
    font-size: 16px;
    vertical-align: middle;
    margin-right: 4px;
    color: #999;
  }
  i{
    font-size: 14px;
    vertical-align: middle;
    position: relative;
    top: 2px;
    color: #ccc;
  }
  &:hover{
    span,i{
      color: greenyellow;
    }
  }
}
</style>

