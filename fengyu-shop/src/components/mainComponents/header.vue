<template>
<!-- 商品页面头部组件 -->
  <div class="app-contianer">
    <div class="contianer">
        <div class="pricture">
          <img src="@/assets/image/logo.png" alt="枫遇">
        </div>
        <headerNav />
        <div class="ma">
          <img src="@/assets/image/erweima.jpg" alt="了解更多">
        </div>
    </div>
  </div>
</template>

<script>
import headerNav from "@/components/mainComponents/header-nav.vue";
export default {
  name: "appBase",
  components: { headerNav },
};
</script>

<style lang="less" scoped>
.app-contianer{
  width: 100%;
  background: #efefef;
  .contianer{
    position: relative;
    width: 75%;
    min-width: 773px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
      .pricture{
        width: 15%;
        height: 5.7143rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .ma{
        width: 8%;
        height: 5.714286rem;
        background: blue;
        img{
          width: 100%;
          height: 100%;          
        }
      }
  }   
}
</style>
