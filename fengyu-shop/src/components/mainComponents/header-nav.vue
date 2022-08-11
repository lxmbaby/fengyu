<template>
<!-- 商品分类导航组件 -->
  <div class="header-nav">
    <div class="fun">
      <div class="search">
        <input type="text" v-model="str">
        <button class="button go" @click="lookup"><i class="iconfont sou">&#xe622;</i></button>
      </div>
      <div class="car">
        <router-link to="shopcar" class="tie">
          <i class="iconfont">&#xe63f;</i>
          <span>我的购物车</span>
        </router-link>
      </div>
    </div>
    <ul>
      <li><router-link to="/" class="linkstyle">首页</router-link></li>
      <li v-for="item in goodList" :key='item.gid' @mouseenter="show(item)" @mouseleave="hide(item)">
        <router-link @click="hide(item)" :to="`/firstClass/${item.gid}`" class="linkstyle">{{item.gname}}</router-link>
        <div class="layer"  v-show="item.open">
          <ul>
            <li v-for="sub in item.children" :key='sub.sid'>
               <router-link @click="hide(item)" :to="`/secondClass/`+item.gid+sub.sid" class="linkstyle">{{sub.sname}}</router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed,ref } from 'vue';
import {useStore} from 'vuex'
import {useRouter,useRoute} from 'vue-router';
export default {
  name: "headerNav",
  setup(){
    let store=useStore()
    const router=useRouter();
    const route=useRoute();
    //通过dispatch调用vuex中actions的getlist方法
    store.dispatch('nav/getlist');
    let goodList=computed(()=>{
      return store.state.nav.goodList
    })
    let show=(item)=>{
      store.commit('nav/show', item.gid);
    }
    let hide=(item)=>{
      store.commit('nav/hide', item.gid);
    }
    let str=ref(null)
    let lookup=()=>{
      store.dispatch('goodcar/getQuery',{str:str.value});
      router.push("queryResult")
    }
    return{
      show,hide,goodList,str,lookup,route
    }
  }
};
</script>

<style lang="less" scoped>
.header-nav{
  width:68%;
  height: 7.1429rem;
  z-index: 999;
  display: flex;
  flex-direction: column;
  .fun{
    width: 100%;
    height: 50%;
    // background: red;
    display: flex;
    justify-content: space-between;
    .search{
      width: 100%;
      // background: orchid;
      display: flex;
      justify-content: center;
      align-items: center;
      input{
        width: 80%;
        height: 30px;
        border: 1px solid red;
      }
      .go{
        width: 50px;
        height: 34px;
        background: red;
        border: 1px solid red;
        margin-left:1px;
        i{
          font-size: 20px;
          color: #fff;
        }
      }
    }
    .car{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35%;
      height: 50px;
      // background: palegreen;
      .tie{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 34px;
        border: 1px solid #eee;
        &:hover{
          border: 1px solid red;
        }
        i{
          font-size: 20px;
          color: red;
        }
        span{
          color: red;
        }
      }
      
    }
    
  }
  ul{
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    margin: 0;
    padding: 0;
    // background: blue;
    li{
      width: 5rem;
      height: 3.571429rem;
      box-sizing: border-box;
      border-radius: 20%;
      text-align: center;
      line-height: 3.571429rem;
      .linkstyle{
        text-decoration: none;
        &:hover{
          color: red;
        }
      }
    }
  }
}
.layer{
  position: absolute;
  top: 100px;
  left: 0;
  width:100% ;
  height: 4.285714rem;
  border: 2px solid rgb(239,239,239);
  box-sizing: border-box;
  border-radius: .357143rem;
  background: #fff;
}
</style>>
