<template>
  <div id="SearchContainer">
      <div class="SearchHeader">
          <i class="iconfont icon-caidan06"></i>
          <span>搜索</span>
          <i class="iconfont icon-sousuo1" @click="$router.push('/mister')"></i>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus">
#SearchContainer
    width 100%
    height calc(100vh - 50px)
    background-color #eeeeee
    .SearchHeader
        width 100%
        height 50px
        background-color red
        display flex
        justify-content space-between
        text-align center
        line-height 50px
        border-bottom 1px solid black 
        box-sizing border-box
        .iconfont 
            font-size 26px
        >span 
            font-size 20px

    
</style>
