<template>
<!-- 侧边栏导航 -->
  <div class="category">
      <ul class="menu">
          <li><p class="title">{{newMenu.gname}}专区</p></li>
          <li v-for="item in newMenu.children" :key="item.sid">
                <router-link :to="'/secondClass/'+id+item.sid">{{item.sname}}</router-link>   
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"CategoryOne",
    props:['newMenu','id'] 
}
</script>

<style lang="less" scoped>
.category{
    position: relative;
    width: 20%;
    height: 500px;
    z-index: 99;
      .menu{
          width: 100%;
          height: 100%;
          min-width: 155px;
          max-width: 228px;
          display: flex;
          flex-direction: column;
          list-style-type: none;
          margin: 0;
          padding: 0;
          background: rgba(0,0,0,.8);
          li{ 
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              flex:1;
              .title{
                  font-size: 25px;
                  margin: 5px 0;
                  color: #fff;
              }
              &:nth-child(n+2) {
                  &:hover{
                      background:rgb(73, 219, 170) ;
                  }  
              }
              a{
                  text-decoration: none;
                  color: #fff;
                //   margin-left: 4px;
                  font-size: 12px;
                  &:first-child{
                  font-size: 14px;
                //   padding-left: 10px;
                  }
              } 
          } 
      }
}
</style>>

