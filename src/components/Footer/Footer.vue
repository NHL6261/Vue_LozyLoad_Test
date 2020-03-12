<template>
  <div id="FooterContainer">
      <div class="FooterList"> 
          <div class="FooterItem" :class="{active: $route.path === '/mister'}" @click="isShowRouter('/mister')" >
             <i class="iconfont icon-caidan06"></i>
             <span>首页</span>
          </div>
          <div class="FooterItem" :class="{active: $route.path === '/classer'}" @click="isShowRouter('/classer')">
             <i class="iconfont icon-fenlei1"></i>
             <span>分类</span>
          </div>
          <div class="FooterItem" :class="{active: $route.path === '/shopping'}" @click="isShowRouter('/shopping')">
             <i class="iconfont icon-icon-gouwuche1"></i>
             <span>购物车</span>
          </div>
          <div class="FooterItem" :class="{active: $route.path === '/login'}"  @click="isShowRouter('/login')">
             <i class="iconfont icon-geren"></i>
             <span>登录</span>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      isShowRouter(path){
        path !== this.$route.path && this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus">
#FooterContainer
  width 100%
  .FooterList
    width 100%
    height 50px
    background-color #FFF
    position fixed
    left 0
    bottom 0
    display flex
    z-index 2
    .FooterItem
      width 100%
      height 50px
      display flex
      flex-direction column
      text-align center
      line-height 20px
      &.active
        color  gold 
       .iconfont
          font-size 20px
</style>
