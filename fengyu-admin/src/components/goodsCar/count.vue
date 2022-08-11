<template>
  <div class="count-control">
          <button @click="numberdelete">-</button>
          <input type="text" class="putnumber" v-model.number.lazy="number">
          <button  @click="numberadd">+</button>
  </div>
</template>

<script>
export default {
    emits:['numChange'],
    props:{
        num:{
            type:Number,
            default:0,
        },
       
    },
    data(){
        return{
            number:this.num
        }
    },
    methods:{
        numberdelete(){
            if(this.number==1) {this.number=1}else{this.number--}
        },
        numberadd(){
            this.number++
        }
    },
    watch:{
        //监测number值的变化
        number(newval){
            const parseResult=parseInt(newval);
            if(isNaN(parseResult)||parseResult<1){
                this.number=1
                return
            }
            if(String(newval).indexOf('.')!==-1){
                this.number=parseResult
                return
            }
            this.$emit('numChange', this.number);
        },
    }
}
</script>

<style lang="less" scoped>
.count-control{
    display: flex;
    justify-content: space-between;
    width: 85px;
    height: 25px;
}
.putnumber{
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 25px;
}
button{
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    background: rgb(223, 219, 219);
    border: none;
}
</style>