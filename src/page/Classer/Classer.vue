<template>
  <div id="ClasserContainer">
      <!-- 分类头部 -->
      <div class="ClasserNav">
        <div class="Classertenter" >
          <i class="iconfont icon-caidan06"></i>
          <span class="Classertext">分类</span>
          <i class="iconfont icon-sousuo1"></i>
        </div>
      </div>
      <div class="Classertest"></div>
      <!-- 分类列表页 -->
      <div class="ClasserList"> 
        <!-- 左侧列表 -->
        <ClasserLeft/>
        <!-- 右侧列表 -->
        <ClaaserRight/>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import ClasserLeft from '../../components/ClasserLeft/ClasserLeft'
import ClaaserRight from '../../components/ClasserRight/ClasserRight'
  export default {
    components:{
      ClasserLeft,
      ClaaserRight
    }
  }
</script>

<style lang="stylus">
#ClasserContainer
  width 100%
  height calc(100vh - 50px)
  .ClasserNav
    width 100%
    height 50px
    background-color #FFF
    position fixed 
    left 0
    top 0
    .Classertenter
      width 100%
      height 100%
      display flex
      justify-content space-between
      line-height 50px
      .Classertext
        font-size 26px
        font-family:"黑体"
      .iconfont
        font-size 26px
  .Classertest
    width 100%
    height 50px
  .ClasserList
    width 100%
    display  flex
</style>
