<template>
<!-- 侧边栏导航与弹层组件 -->
  <div class="category">
      <ul class="menu">
          <li v-for="item in menulist" :key="item.gid"  @mouseenter="listen(item.gid)">
              <router-link :to="'/firstClass/'+item.gid">{{item.gname}}</router-link>
              <template v-if="item.children">
                <router-link :to="'/secondClass/'+item.gid+sub.sid" v-for="sub in item.children" :key="sub.sid">{{sub.sname}}</router-link>
              </template>
          </li>
      </ul>
      <div class="layer">
          <h4>{{selectgood && selectgood.gid==='brand'? "品牌":"分类"}}推荐<small>根据浏览记录推荐</small></h4>
          <ul v-if="selectgood && selectgood.good">
              <li v-for="item in selectgood.good" :key='item.fid'>
                  <router-link :to="`/firstpage/homenav/`+item.fid">
                      <img :src="item.fpicture" alt="">
                      <div class="info">
                          <p class="name">{{item.fname}}</p>
                          <p class="price">{{item.fprice}}</p>
                      </div>
                  </router-link>
              </li>
          </ul>
          <!-- 品牌列 -->
          <ul v-if="selectgood && selectgood.brand">
              <li class="brand" v-for="brand in selectgood.brand" :key="brand.bid">
                  <router-link to="/">
                    <img :src="brand.bpicture" alt="">
                      <div class="info">
                          <p class="place">{{brand.bplace}}</p>
                          <p class="name">{{brand.bname}}</p>
                          <p class="desc">{{brand.bdesc}}</p>
                      </div>
                  </router-link>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import { computed, reactive,ref } from 'vue'
import { useStore } from 'vuex'
export default {
    name:"Category",
    setup(){
       let store=useStore();
       let brand=reactive({
           gid:'brand',
           gname:'品牌',
           children:[{sid:'brand-children',sname:'品牌推荐'}],
           brand:[
            {bid:1,bpicture:"http://img20.360buyimg.com/pop/s1180x940_jfs/t1/201763/22/10692/74468/61639fd8E44876874/c65ffb3b62807556.png",bplace:"北京",bname:"DW",bdesc:"DW品牌闪耀"},
            {bid:2,bpicture:"http://img10.360buyimg.com/pop/s1180x940_jfs/t1/161150/31/23716/95484/61555258E85240668/ab31e6935fceee1e.jpg",bplace:"北京",bname:"DW",bdesc:"DW品牌闪耀"},
            {bid:3,bpicture:"http://imgcps.jd.com/ling4/100009077475/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02f9e8/50e7970e/cr/s/q.jpg",bplace:"北京",bname:"DW",bdesc:"DW品牌闪耀"},
            {bid:4,bpicture:"http://img30.360buyimg.com/pop/s1180x940_jfs/t1/94134/4/18136/97793/614d85c6E6888f819/669aebfda7c6abc0.jpg",bplace:"北京",bname:"DW",bdesc:"DW品牌闪耀"},
            {bid:5,bpicture:"http://img14.360buyimg.com/pop/s1180x940_jfs/t1/202038/13/7926/80366/614d6c60E465bc911/a5fe4f28b0c52b2a.jpg",bplace:"北京",bname:"DW",bdesc:"DW品牌闪耀"},
            {bid:6,bpicture:"http://imgcps.jd.com/ling4/100012043978/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02f9d0/c5756eed/cr/s/q.jpg",bplace:"北京",bname:"DW",bdesc:"DW品牌闪耀"},
           ]
       })
       let menulist=computed(()=>{
           let list=store.state.nav.goodList.map(item=>{
               return{
                   gid:item.gid,
                   gname:item.gname,
                   children:item.children && item.children.slice(0,2),
                   good:item.good
               }
           })
           list.push(brand)
           return list
       })
       //获取对应id的分类推荐
       let selectId=ref(null)
       let listen=(id)=>{
           selectId.value=id;
           store.commit("nav/check",id)
       }
       let selectgood=computed(()=>{
           return menulist.value.find(item=>item.gid===selectId.value)
       })
       
        console.log(selectgood)
       return{
           menulist,listen,selectgood
       }
    }
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
              width: 100%;
              flex:1;
              &:hover{
                  background:rgb(73, 219, 170) ;
              }
              a{
                  text-decoration: none;
                  color: #fff;
                  margin-left: 10px;
                  font-size: 12px;
                  &:first-child{
                  font-size: 14px;
                  padding-left: 10px;
                  }
              } 
          } 
      }
    .layer{
        display: none;
        position: absolute;
        top: 0;
        left: 100%;
        width: 400%;
        height: 100%;
        // min-width: 618px;
        background: rgba(255,255,255,.8);
        h4{
            font-size: 20px;
            font-weight: normal;
            margin: 0;
            margin-left: 12px;
            small{
                font-size: 16px;
                color: #666;
                margin-left: 10px;
            }
        }
        ul{
            width: 100%;
            height: 95.4%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            list-style-type: none;
            margin: 0;
            padding: 0;
            li{
                max-width: 283px;
                min-width: 180px;
                width:31%;
                height: 145px;
                // background: orchid;
                margin-bottom: 12px;
                border:1px solid #999;
                border-radius: 4px;
                &:nth-child(3n){
                    margin-bottom: 0;
                }
                a{
                    display: flex;
                    width: 100%;
                    height: 100%;
                    align-items: center;
                    text-decoration: none;
                    &:hover{
                        background: #e3f9f4;
                    }
                    img{
                        flex: 1;
                        height: 87px;
                        min-width: 86px;
                        margin:12px 12px;
                        border: 1px solid #999;
                    }
                    .info{
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        flex: 2;
                        height: 87px;
                        margin: 12px 12px;
                        margin-left: 0;
                        p{
                            margin: 0;
                        }
                        .name{
                            padding: 0 1px;
                            margin: 0;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            -webkit-line-clamp: 3;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            color: #000;
                            font-size: 16px;
                            color: #666;
                        }
                        .price{
                            position: absolute;
                            bottom: 0;
                            color: red;
                        }
                    }
                } 
            }
        }
    }
    &:hover{
        .layer{
            display: block;
        }
    }
}
</style>>

