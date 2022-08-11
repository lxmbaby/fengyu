<template>
  <div class="content">
    <div class="left">
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" :id="id" :checked="checked" @change="checkboxChange">
        <label class="custom-control-label" :for="id"><img :src="tump" alt=""></label>
      </div>
    </div>
    <div class="right">
      <span class="spantitle">{{title}}</span>
      <span class="spanprice">￥{{price}}</span>
      <div class="count">
        <Count :num="count" :price="price"  @numChange="getNumber"></Count>
      </div>
    </div>
  </div>
</template>

<script>
import Count from './count.vue'
export default {
  emits:['boxchange','countChange'],
    components:{
      Count
    },
    props:{
      //商品的id
      id:{
        type:[Number,String],
        require:true,
      },
      //商品的图片
      tump:{
        type:String,
        require:true,
      },
      //商品的勾选状态
      checked:{
        type:Boolean,
        require:true,
      },
      //商品的数量
      count:{
        type:Number,
        require:true,
      },
      //商品的价格
      price:{
        type:Number,
        require:true,
      },
      //商品的描述
      title:{
        type:String,
        require:true,
      },
    },
    methods:{
      //给app组件返回新的checked值
      checkboxChange(e){
        this.$emit('boxchange', {id:this.id,value:e.target.checked});
      },
      //接收count组件返回的新的商品数量
      getNumber(num){
        this.$emit('countChange', {
          id:this.id,
          value:num
        });
      }
    }
}
</script>

<style lang="less" scoped>
  .content{
    display: flex;
    width: 100%;
    height: 120px;
    border-bottom:1px solid rgb(217, 227, 236); 
}
.left{
  position: relative;
  flex: 1;
}
.custom-checkbox{
  position: absolute;
  top: 52.5px;
  left: 0;
}
.custom-control-input{
  width: 15px;
  height: 15px;
}
.custom-control-label img{
  position: absolute;
  top: -43.5px;
  left: 15px;
  width: 100px;
  height: 100px;
  background: #999;
}
.right{
  position: relative;
  flex: 2;
}
.spantitle{
  position: absolute;
  top: 9px;
  left: 0;
}
.spanprice{
  position: absolute;
  bottom: 9px;
  left: 0;
  color: red;
}
.count{
  position: absolute;
  bottom: 9px;
  right: 10px;
}
</style>>

