<template>
<!-- 商品页面头部组件 -->
  <div class="app-contianer">
    <div class="contianer">
        <div class="pricture">
          <img src="@/assets/image/logo.png" alt="枫遇">
        </div>
        <headerNav />
        <div class="find">
          <div class="find-style">
            <input type="text">
            <button>搜索</button>
          </div>
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
  background: #fff;
  .contianer{
    position: relative;
    width: 75%;
    min-width: 773px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
      .pricture{
        width: 15%;
        height: 5.714286rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .find{
        display: flex;
        align-items: center;
        width: 15%;
        height: 5.714286rem;
        .find-style{
          display: flex;
          justify-content: center;
          width: 100%;
          input{
            width: 80%;
            height: 1.071429rem;
          }
          button{
            min-width: 2.142857rem;
            height: 1.5rem;
            font-size: 12px;
            padding: 1px 0;
          }
        }
      }
  }  
}
</style>
