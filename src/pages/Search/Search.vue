<template>
  <section class="search">
    <!-- 头部搜索栏 -->
    <HeaderTop title="搜索"></HeaderTop>
    <!-- 搜索框 -->
    <form class="search_form">
      <input type="search" placeholder="请输入商家名称" class="search_input">
      <input type="submit" class="search_submit">
    </form>
  </section>
</template>

<script>
import HeaderTop from './../../components/HeaderTop/HeaderTop'
export default {
  name: 'Search',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {},
  components: {
    HeaderTop
  }

}
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .search
    width 100%
    height 100%
    overflow hidden
    .search_form
      clearFix()
      margin-top 45px
      background-color #ffffff
      padding 12px 8px
      input
        height 35px
        padding 0 4px
        border-radius 2px
        font-weight 700
        outline none
        &.search_input
          float left
          width 79%
          background-color #f2f2f2
          padding-left 5px
        &.search_submit
          float right
          width 18%
          border 4px solid #02a774
          font-size 16px
          color #ffffff
          background-color #02a774
</style>
