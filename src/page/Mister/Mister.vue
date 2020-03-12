<template>
  <div id="MisterContaine">
    <!-- 头部 -->
    <div class="MisterHeader">
      <i class="iconfont icon-caidan06" @click="ShowRouter('/login')"></i>
      <span class="MisterText">首页</span>
      <i class="iconfont icon-sousuo1" @click="ShowRouter('/Search')"></i>
    </div>
    <div class="MisterTest"></div>
    <!-- 懒加载 -->
    <div class="MisterImagesListContainer">
      <ul class="ImgWrapper">
        <li v-for="(Imgitem, index) in ImgListItem" :key="index">
          <img v-lazy="Imgitem.imgUrl" alt=""  lazy="error"/>
          <span>{{Imgitem.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
export default {
  data(){
    return{
      ImgList:[]
    }
  },
 async mounted(){
   this.$store.dispatch('getImgListActions')
  },
  computed:{
    ...mapState({
      ImgListItem: state => state.imglist
    })
  },
  methods:{
    ShowRouter(path){
      if(path !==  this.$route.path){
        this.$router.push(path)
      }
    }
  }
}
</script>

<style lang="stylus">
#MisterContaine
  width 100%
  height 6948px
  background-color #eee
  .MisterHeader
    width 100%
    height 50px
    display flex
    justify-content space-between
    background-color #fff
    line-height 50px
    position fixed
    border-bottom 1px solid black
    box-sizing border-box
    left 0
    top 0
    .iconfont
      font-size 26px
    .MisterText
      font-size 24px
      font-family '黑体'
  .MisterTest
    width 100%
    height 50px
    background-color #eee
  .MisterImagesListContainer
    width 100%
    background-color #eee

    .ImgWrapper
      width 100%
      display flex
      justify-content space-between
      flex-direction: row
      flex-wrap: wrap
      > li:nth-child(1)
        margin-top 0
      > li:nth-child(2)
        margin-top 0
      li
        width 49%
        height 200px
        margin-top 20px
        img
          width 100%
          height 100%
</style>
