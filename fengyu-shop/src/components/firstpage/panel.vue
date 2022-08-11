<template>
<!-- 展示商品模块面板组件 -->
    <div class="panel">
        <div class="container">
            <div class="head">
                <h3>{{title}}<small>{{subTitle}}</small></h3>
                <slot name="right"/>
            </div>
            <!-- 面板内容插槽 -->
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    name:"Panel",
    props:{
        // 标题
        title:{
            type:String,
            default:''
        },
        // 副标题
        subTitle:{
            type:String,
            default:''
        }
    }
}
</script>

<style lang="less" scoped>
.panel{
    background: #fff;
    .head{
        display: flex;
        align-items: flex-end;
        padding: 20px 0;
        h3{
            flex: 1;
            font-size: 32px;
            font-weight: normal;
            height: 35px;
            line-height: 35px;
            margin: 0 10px;
            padding: 0;
            small{
                font-size: 16px;
                color: #999;
                margin-left: 20px;
            }
        }
    }
}
</style>