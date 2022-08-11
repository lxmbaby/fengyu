<template>
  <div class="secondClass" >
    <div class="contianer">
        <SecondGood :list="list" :id="id" />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, toRef } from 'vue'
import SecondGood from "@/components/secondClass/secondGood.vue"
export default {
    name:"secondClass",
    props:['id'],
    components:{SecondGood},
    setup(props){
      let store=useStore();
      store.dispatch('secondClass/getSecond');
      let l=toRef(props,"id")
      let list=computed(()=>{
        //获取路由传递的id，并进行拆分，拿到十位数和个位数
        let n=parseInt(l.value/10)%10;
        let s=l.value%10
        return  store.state.secondClass.secondList[n-1].find(item=>{
          if(s==item.id){
            return item
          }
        }).good
      })
      return{
        l,list
      }
    }
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
    border: 1px solid #eee;
  }
}
</style>