<template>
  <div class="good-item">
      <router-link :to="`/product/${goods.id}`" class="image">
        <img v-lazy="goods.src" alt="">
      </router-link>
      <p class="name ellipsis-2">{{goods.name}}</p>
      <p class="desc ellipsis">{{goods.desc}}</p>
      <p class="price">&yen;{{goods.price}}</p>
      <div class="extra">
          <router-link to="/">
              <span>找相似</span>
              <span>找更多宝贝&gt;</span>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
    name:"Good",
    props:{
        goods:{
            type:Object,
            default:()=>({})
        }
    }  
}
</script>

<style lang="less" scoped>
.good-item{
    width: 100%;
    height: 100%;
    padding: 10px 0;
    position: relative;
    overflow: hidden;
    border: 1px solid transparent;
    text-align: center;
    // box-sizing: border-box;
    transition: all 0.5s;
    .image{
        display: block;
        width: 160px;
        height: 160px;
        margin: 0 auto;
        img{
            width: 100%;
            height: 100%;
        }
    }
    p{
        margin-top: 6px;
        font-size: 16px;
        &.name{
            height: 38px;
            text-overflow: ellipsis;
            overflow: hidden;
            -webkit-line-clamp: 2;
            display: -webkit-box;
            -webkit-box-orient: vertical;
        }
        &.desc{
            color: #666;
            height: 22px;
        }
        &.price{
            margin-top: 10px;
            font-size: 20px;
            color: red;
        }
    }
    .extra{
        position: absolute;
        left: 0;
        bottom: -1px;
        width: 100%;
        height: 86px;
        background: chartreuse;
        text-align: center;
        transform: translate3d(0,100%,0);
        transition: all 0.5s;
        span{
            display: block;
            color: #fff;
            width: 120px;
            margin: 0 auto;
            line-height: 30px;
            &:first-child{
                font-size: 18px;
                border-bottom: 1px solid #fff;
                line-height: 40px;
                margin-top: 5px;
            }
        }
    }
    &:hover{
        border-color:cyan ;
        .extra{
            transform: none;
        }
    }
}
</style>
