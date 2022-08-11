<template>
  <div class="footer">
    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="electall" :checked='isfull' @change="checkboxChange" >
        <label class="custom-control-label" for="electall">全选</label>
    </div>
    <!-- 勾选商品的总价格 -->
    <div>
        <span>总计:</span>
        <span class="countnumber">￥{{count.toFixed(2) }}</span>
    </div>
    <!-- 勾选商品的数量 -->
    <button type="button" class="btn btn-primary" :disabled='total===0'>结算({{total}})</button>
  </div>
</template>

<script>
export default {
    emits:['fullChange'],
    props:{
        count:{
            type:Number,
            required:true,
            default:0
        },
        total:{
            type:Number,
            required:true,
            default:0
        },
        isfull:{
            type:Boolean,
            default:false
        }
    },
    methods:{
       checkboxChange(e){
            this.$emit('fullChange', e.target.checked);
        }
    }
}
</script>

<style lang="less" scoped>
.footer{
    position: fixed;
    bottom: 0;
    width: 68.5%;
    height: 45px;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #efefef;
    padding: 0 10px;
    box-sizing: border-box;
    background: #fff;
}
.custom-control-input{
    width: 15px;
    height: 15px;
}
.countnumber{
    color:red;
}
.btn{
    min-width: 90px;
    height: 38px;
    border-radius: 19px;
}
</style>