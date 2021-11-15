<template>
<!-- 首页组件 -->
  <div class="app-contianer" >
    <div class="contianer">
       <!-- 左侧分类 -->
       <Category />
       <!-- 轮播图容器 -->
       <Banner/>
        <!-- 新鲜好物 -->
       <New/>
        <!-- 人气推荐 -->
       <Hot/>
       <!-- 热门品牌 -->
       <Brand/>
       <!-- 商品区 -->
       <Product/>
       <!-- 最新专题 -->
       <Special/>
    </div>
  </div>
</template>

<script>
import Category from "@/components/firstpage-com/category.vue"
import Banner from "@/components/firstpage-com/banner.vue"
import New from "@/components/firstpage-com/new.vue"
import Hot from "@/components/firstpage-com/hot.vue"
import Brand from "@/components/firstpage-com/brand.vue"
import Product from "@/components/firstpage-com/product.vue"
import Special from "@/components/firstpage-com/special.vue"
export default {
name:"Firstpage",
components:{Category,Banner,New,Hot,Brand,Product,Special}
}
</script>

<style lang="less" scoped>
.app-contianer{
  width: 100%;
  background: rgb(239, 239, 239);
  .contianer{
    position: relative;
    width: 75%;
    min-width: 773px;
    margin: 0 auto;
  }
}
</style>>
