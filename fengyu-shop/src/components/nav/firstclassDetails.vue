<template>
  <div class="shopbox">
    <button class="back" @click="router.go(-1)">&lt;返回</button>
    <div class="leftbox">
      <div class="picture">
        <img :src="list.src" alt="">
      </div>
      <!-- <ul class="imglist">
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul> -->
    </div>
    <div class="rightbox">
      <div class="title">
        <p>
          {{list.dev}}
        </p>
        </div>
      <div class="priceTie">
        <p>商品价格&nbsp;:</p>
        <p class="price">{{list.price}}</p>
      </div>
      <!-- <div class="edition">
        <p>选择套餐&nbsp;:</p>
        <ul>
          <li>黑色+红色</li>
          <li>黑色+白色</li>
          <li>2个黑色</li>
          <li>2个白色</li>
        </ul>
      </div>
      <div class="color">
        <p>选择颜色&nbsp;:</p>
        <ul>
          <li>红色</li>
          <li>白色</li>
          <li>蓝色</li>
          <li>黑色</li>
        </ul>
      </div>
      <div class="size">
        <p>选择码数&nbsp;:</p>
        <ul>
          <li>36</li>
          <li>37</li>
          <li>38</li>
          <li>39</li>
          <li>40</li>
          <li>41</li>
          <li>42</li>
          <li>43</li>
          <li>44</li>
          <li>45</li>
        </ul>
      </div> -->
      <div class="number">
        <p>购买数量&nbsp;:</p>
        <input type="number" min="1"  v-model="sum">
      </div>
      <div class="buy">立即购买</div>
      <div class="addcar" @click="submit">加入购物车</div>
      <p class="tie">温馨提示 : 支持7天无理由退货</p>
    </div>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
import { ref, computed,toRefs} from 'vue';
import {useStore} from 'vuex'
import axios from "axios";
import { ElMessage } from 'element-plus';
export default {
  name:"firstclassDetails",
  props:['id','name','num'],
  setup(props){
    let store=useStore();
    const router=useRouter();
    let {id,name,num}=toRefs(props)
    
    let list=computed(()=>{
      let a;
      if(name.value=='hotOne') {
         a=store.state.firstClass.hotList[id.value-1]
        .find(item=>{
          if(num.value==item.id){
            return item
          }
        })
      } 
      if(name.value=='boutique') {
        let n=parseInt(num.value/10)%10;
        let s=num.value%10
        let b=store.state.firstClass.bouList[id.value-1].find(item=>{
          if(n==item.id){
            return item
          }
        })
        a=b.src.find(item=>{
            if(s==item.id){
                return item
            }
        })
      } 
      return a
    })
    let sum=ref(1)
    let profile=computed(()=>{
        return store.state.user.profile;
    })
    let submit=async()=>{
      //用户没有登录，跳转到登录页
      if(!profile.value.id){
        router.push("/login")
      }else{
        //用户已经登录，发起添加商品到购物车的请求
          const { data: res } = await axios.post("/shopping/addshopcar",
        {
          src:list.value.src,
          name:list.value.dev,
          count:sum.value,
          price:list.value.price,
          id:profile.value.id
        });
        console.log(res)
        if(res.code==200){
          ElMessage({
            message: '商品已经成功加入购物车！',
            type: 'success',
          })
        }else{
          ElMessage.error('商品加入购物车失败！')
        }
      }  
  }
  return{router,list,sum,submit}
  }
}
</script>

<style lang="less" scoped>
.shopbox{
  position: relative;
  display: flex;
  width: 80%;
  height: 600px;
  margin: 0 auto;
  .back{
    position: absolute;
    top: 5px;
    left: 0;
    width: 60px;
    height: 35px;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
  .leftbox{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    // border: 1px solid #999;
    .picture{
      display: flex;
      justify-content: center;
      align-items: center;
      width:90%;
      height: 400px;
      border: 1px solid #999;
      img{
        width: 80%;
        height: 80%;
      }
    }
    .imglist{
      display: flex;
      width: 70%;
      margin: 10px 0;
      li{
        width: 20%;
        height: 50px;
        border: 1px solid #999;
      }
    }
  }
  .rightbox{
    position: relative;
    top: 10%;
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 80%;
    border: 1px solid #000;
    .title{
      display: flex;
      justify-content: space-around;
      width: 100%;
      height: 80px;
      margin-top: 5%;
      // background: orange;
      p{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 95%;
        height: 100%;
        margin: 0;
        font-size: 20px;
        font-weight: bold;
        // background: #df3033;
      }
    }
    .priceTie{
      display: flex;
      width: 100%;
      height: 80px;
      // background: darkkhaki;
      p{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        width: 20%;
        height:80px;
        color: #999;
      }
      .price{
          color: red;
          font-size: 20px;
      }
    }
    .edition{
      position: relative;
      width: 100%;
      height: 80px;
      // background: chartreuse;
      p{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        width: 20%;
        height: 80px;
        color: #999;
      }
      ul{
        display: flex;
        position: absolute;
        align-items: center;
        top: 0;
        right: 0;
        width: 80%;
        height: 100%;
        li{
          width:15%;
          height: 30px;
          border: 1px solid #000;
          margin-right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          &:hover{
            background: #df3033;
          }
        }
      }
    }
    .color{
      position: relative;
      width: 100%;
      height: 80px;
      // background: cyan;
      p{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        width: 20%;
        height: 80px;
        color: #999;
      }
      ul{
        display: flex;
        position: absolute;
        align-items: center;
        top: 0;
        right: 0;
        width: 80%;
        height: 100%;
        li{
          width:15%;
          height: 30px;
          border: 1px solid #000;
          margin-right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          &:hover{
            background: #df3033;
          }
        }
      }
    }
    .size{
      position: relative;
      width:100%;
      height: 80px;
      // background: blue;
      p{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        width: 20%;
        height: 80px;
        color: #999;
      }
      ul{
        display: flex;
        position: absolute;
        align-items: center;
        top: 0;
        right: 0;
        width: 80%;
        height: 100%;
        li{
          width:15%;
          height: 30px;
          border: 1px solid #000;
          margin-right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          &:hover{
            background: #df3033;
          }
        }
      }
    }
    .number{
      position: relative;
      width: 100%;
      height: 80px;
      // background: brown;
      p{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        width: 20%;
        height: 80px;
        color: #999;
      }
      input{
        position: absolute;
        left: 25%;
        top: 20px;
        width: 60px;
        height: 40px;
        margin: 0;
        padding: 0;
        text-align: center;
      }
    }
    .addcar{
      position: absolute;
      bottom: 15%;
      right: 20%;
      width: 20%;
      height: 60px;
      background: #df3033;
      text-align: center;
      line-height: 60px;
      font-size: 20px;
      font-weight: bold;
      color:#fff;
      cursor: pointer;
    }
    .buy{
      position: absolute;
      bottom: 15%;
      left: 20%;
      width: 20%;
      height: 60px;
      background: #df3033;
      text-align: center;
      line-height: 60px;
      font-size: 20px;
      font-weight: bold;
      color:#fff;
      cursor: pointer;      
    }
    .tie{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 50px;
      position: absolute;
      bottom: 0;
      margin: 0;
      color: #999;
    }
  }
}
</style>

