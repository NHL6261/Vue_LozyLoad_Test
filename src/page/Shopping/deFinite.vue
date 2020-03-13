<template>
  <div id="ShoopingContaienr">
     <!-- 死亡率 -->
    <div class="deFiesContainer">
      <div class="CureContainer">
        <span class="TextContainer">累计确诊</span>
        <span class="TextContainer">治愈</span>
        <span class="TextContainer">死亡</span>
      </div>
    </div>
     <!-- 省市信息 -->
    <div class="ProvinceContainer">
      <span class="ProvinceText">省市</span>
      <span class="ProvinceText">累计确诊</span>
      <span class="ProvinceText">现有确诊</span>
      <span class="ProvinceText">治愈人数</span>
      <span class="ProvinceText">死亡人数</span>
    </div>
    <!-- 详细信息 -->
    <div class="deTailContainer">

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
}
</script>

<style lang="stylus">
#ShoopingContaienr
  width 100%
  height 300px
  background-color #eee
  padding  0 10px
  box-sizing border-box
  .deFiesContainer
    width 100%
    background-color #fff
    .CureContainer
      width 100%
      height 100%
      display flex
      justify-content space-between
      text-align center
      padding 10px 10px 20px 10px
      box-sizing border-box
      .TextContainer
        width 90px
        height 30px
        border-radius 5px
        background-color #eee 
        text-align center
        line-height 30px
        font-size 14px
  .ProvinceContainer
    width 100%     
    height 40px
    display flex
    justify-content space-between
    text-align center
    line-height 40px
    padding 0 10px 0 20px
    box-sizing border-box
    .ProvinceText
      font-size 14px
  .deTailContainer
    width 100%
    height 200px
    background-color #fff
</style>
