<template>
<!-- 商品分类导航组件 -->
  <div class="header-nav">
    <ul>
      <li><router-link to="/" class="linkstyle">首页</router-link></li>
      <li v-for="item in $store.state.goodList" :key='item.gid' @mouseenter="show(item)" @mouseleave="hide(item)">
        <router-link @click="hide(item)" :to="'/firstClass/'+item.gid" class="linkstyle">{{item.gname}}</router-link>
        <div class="layer"  v-show="item.open">
          <ul>
            <li v-for="sub in item.children" :key='sub.sid'>
               <router-link @click="hide(item)" :to="'/secondClass/'+sub.sid" class="linkstyle">{{sub.sname}}</router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {useStore} from 'vuex'
export default {
  name: "headerNav",
  setup(){
    let store=useStore()
    //通过dispatch调用vuex中actions的getlist方法
    store.dispatch('getlist');
    let show=(item)=>{
      store.commit('show', item.gid);
    }
    let hide=(item)=>{
      store.commit('hide', item.gid);
    }
    return{
      show,hide
    }
  }
};
</script>

<style lang="less" scoped>
.header-nav{
  width:68%;
  height: 5.714286rem;
  z-index: 999;
  ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    margin: 0;
    padding: 0;
    li{
      width: 5rem;
      height: 5.714286rem;
      box-sizing: border-box;
      border-radius: 20%;
      text-align: center;
      line-height: 5.714286rem;
      .linkstyle{
        text-decoration: none;
      }
    }
  }
}
.layer{
  position: absolute;
  top: 4.142857rem;
  left: 0;
  width:100% ;
  height: 5.714286rem;
  border: 2px solid rgb(239,239,239);
  box-sizing: border-box;
  border-radius: .357143rem;
  background: #fff;
}
</style>>
