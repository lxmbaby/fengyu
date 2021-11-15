<template>
  <div class="secondClass" >
    <div class="contianer">
       <h3>二级类商品组件{{id}}</h3>
       <h1>等待开发中，尽情期待！！！</h1>
    </div>
  </div>
</template>

<script>
export default {
    name:"secondClass",
    props:['id']
}
</script>

<style lang="less" scoped>
.secondClass{
  width: 100%;
  background: rgb(239, 239, 239);
  .contianer{
    position: relative;
    width: 75%;
    min-width: 773px;
    margin: 0 auto;
    border: 1px solid #000;
  }
}
</style>