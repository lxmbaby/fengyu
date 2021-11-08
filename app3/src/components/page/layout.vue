<template>
        <!-- 商品页面组件 -->
    <!-- 顶部通栏组件 -->   
    <Topnav/>
    <!-- 头部通栏组件 -->
    <Header/>
    <!-- 吸顶组件 -->
    <HeaderSticknav/>
    <div class="main">
        <router-view></router-view>
    </div>
    <Footer/>
</template>

<script>
import Topnav from "@/components/firstpage-com/topnav.vue"
import Header from "@/components/mainComponents/header.vue"
import Footer from "@/components/mainComponents/footer.vue"
import HeaderSticknav from "@/components/mainComponents/header-sticknav.vue"
export default {
    components:{Topnav,Header,Footer,HeaderSticknav},
    name:'Layout',
}
</script>

<style lang="less" scoped>
.main{
    width: 100%;
    height: 100%;
    background: rgb(239, 239, 239);
    z-index: -50;
}
</style>>
