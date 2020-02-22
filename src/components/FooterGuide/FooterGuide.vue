<template>
  <div id="footerGuideContainer">
    <div class="guideItem" :class="{active: $route.path === '/msite'}" @click="goPath('/msite')">
      <span>
        <i class="iconfont icon-shouye2"></i>
      </span>
      <span>{{$t('footer_home')}}</span>
    </div>
    <div class="guideItem" :class="{active: $route.path === '/search'}" @click="goPath('/search')">
      <span>
        <i class="iconfont icon-sousuo1"></i>
      </span>
      <span>{{$t('footer_search')}}</span>

    </div>
    <div class="guideItem" :class="{active: $route.path === '/order'}" @click="goPath('/order')">
       <span>
        <i class="iconfont icon-nav-order"></i>
      </span>
      <span>{{$t('footer_order')}}</span>

    </div>
    <div class="guideItem" :class="{active: $route.path === '/profile'}" @click="goPath('/profile')">
      <span>
        <i class="iconfont icon-wode1"></i>
      </span>
      <span>{{$t('footer_own')}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goPath(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #footerGuideContainer
    position fixed
    width 100%
    height 50px
    border-top 1px solid #eee
    left 0
    bottom 0
    box-sizing border-box
    display flex
    background #fff
    .guideItem
      width 25%
      height 100%
      text-align center
      display flex
      flex-direction column
      &.active
        color $green
      span:first-child
        margin 5px 0
        i
          font-size 22px
</style>
