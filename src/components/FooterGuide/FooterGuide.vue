<template>
  <div class="footer_guide">
    <span class="guide_item " :class="{on: '/msite' === $route.path}" @click="changeBg('/msite')">
      <span class="item_icon">
        <i class="iconfont iconshouye"></i>
      </span>
      <span>外卖</span>
    </span>
    <span class="guide_item" :class="{on: '/search' === $route.path}" @click="changeBg('/search')">
      <span class="item_icon">
        <i class="iconfont iconsousuo"></i>
      </span>
      <span>搜索</span>
    </span>
    <span class="guide_item" :class="{on: '/order' === $route.path}" @click="changeBg('/order')">
      <span class="item_icon">
        <i class="iconfont icondingdanpingjia"></i>
      </span>
      <span>订单</span>
    </span>
    <span class="guide_item" :class="{on: '/profile' === $route.path}" @click="changeBg('/profile')">
      <span class="item_icon">
        <i class="iconfont iconfensi"></i>
      </span>
      <span>我的</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'FooterGuide',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    changeBg (url) {
      this.$router.replace(url)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import './../../common/stylus/mixins.styl'
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    left 0
    right 0
    bottom 0
    height 50px
    width 100%
    display flex
    .guide_item
      flex 1
      height 50px
      display flex
      flex-direction column
      justify-content space-evenly
      align-items center
      color #999
      &.on
        color #02a774
      span
        font-size 12px
        .iconfont
          font-size 22px
</style>
