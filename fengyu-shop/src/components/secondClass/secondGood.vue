<template>
  <div class="goodbox">
      <ul class="good">
          <li v-for="item in list" :key="item.id">
                <router-link :to="`/secondClass/`+id+`/`+item.id">
                    <img :src="item.src" alt="">
                    <p class="name ellipsis">{{item.name}}</p>
                    <p class="price">&yen;{{item.price}}</p>
                </router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"secondGood",
    props:['list','id'],
    setup(){

        return{}
    }
}
</script>

<style lang="less" scoped>
.goodbox{
    .good{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li{
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            width: 18%;
            height: 230px;
            border: 1px solid #e1e1ee;
            margin: 10px 0;
            &:hover{
                border: 1px solid red;
                transform: scale(1.05);
            }
            img{
                width: 70%;
            }
            p{  width: 80%;
                padding: 0;
                margin: 0 10%;
                text-overflow: ellipsis;
                overflow: hidden;
                -webkit-line-clamp: 2;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                color: #000;
                line-height: normal;
            }
            .price{
                margin-top: 5px;
                color: red;
            }
        }
    }
}
</style>
