<template>
<!-- 商品展示模块骨架组件 -->
  <div class="skeleton">
      <div class="item" v-for="i in 4" :key="i" :style="{backgroundColor:bg}">
          <FySkeleton bg="#e4e4e4" width="197px" height="197px" animated />
          <FySkeleton bg="#e4e4e4" width="280px" height="32px" animated style="margin-top:5px"/>
          <FySkeleton bg="#e4e4e4" width="60px" height="16px" animated style="margin-top:5px"/>
      </div>
  </div>
</template>

<script>
export default {
    name:"Skeleton",
    props:{
        bg:{
            type:String,
            default:"#fff"
        }
    }
}
</script>

<style lang="less" scoped>
.skeleton{
    width: 1139px;
    height: 300px;
    display: flex;
    justify-content: space-between;
    .item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 280px;
        .skeleton ~.skeleton{
            display: block;
            margin: 16px auto 0;
        }
    }
}
</style>
