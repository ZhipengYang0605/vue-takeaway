<template>
  <div>
    <!-- 头部 -->
    <HeaderTop>
      <span class="header_search" slot="left">
        <i class="iconfont iconsousuo1"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">
          登录|注册
        </span>
      </span>
    </HeaderTop>
    <div class="msite-content-wrapper">
      <div class="msite-content">
        <!-- 首页导航 -->
        <nav class="msite_nav">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <!-- 第一张 -->
              <div class="swiper-slide" v-for="(categorys, index) in categoryArr" :key="index">
                <div class="nav_item" v-for="(category, index) in categorys" :key="index">
                  <img :src="`${baseImageUrl}${category.image_url}`" />
                  <span>{{category.title}}</span>
                </div>
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </nav>
        <!-- 首页附近商家 -->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont iconjianlijiankong"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <ShopList />
          <ShopList />
          <ShopList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import { mapState } from 'vuex'
import 'swiper/css/swiper.min.css'
import HeaderTop from './../../components/HeaderTop/HeaderTop'
import ShopList from './../../components/ShopList/ShopList'
export default {
  name: 'MSite',
  data () {
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com'
    }
  },
  computed: {
    ...mapState(['address', 'categorys']),
    categoryArr () {
      let arrList = []
      let arrItem = []
      let pages = Math.ceil(this.categorys.length / 8)
      console.log(pages)
      for (let i = 0; i < pages; i++) {
        for (let j = i * 8; j < i * 8 + 8; j++) {
          if (this.categorys[j]) {
            arrItem.push(this.categorys[j])
          }
        }
        arrList.push(arrItem)
        arrItem = []
      }
      console.log(arrList)
      return arrList
    }
  },
  methods: {},
  components: {
    HeaderTop,
    ShopList
  },
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      loop: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
    // 获取商品分类数据
    this.$store.dispatch('getCategorys')
    // console.log(this.categorys)
  }
}
</script>

<style scoped lang="stylus">
@import "../../common/stylus/mixins.styl"
.msite-content-wrapper
  padding-top 45px
  width 100%
  .swiper-slide
    bottom-border-1px(#e4e4e4)
    background #fff
    display flex
    flex-wrap wrap
    .nav_item
      display flex
      flex-direction column
      justify-content space-between
      align-content space-between
      align-items flex-start
      padding 20px
      img
        display inline-block
        width 50px
        height 50px
      span
        text-align center
        font-size 13px
        color #666
  .msite_shop_list
    top-border-1px(#e4e4e4)
    margin-top 10px
    background #ffffff
    .shop_header
      padding 10px 10px 0
      .iconjianlijiankong
        margin-left 5px
        color #999999
      .shop_header_title
        color #999999
        font-size 14px
        line-height 20px
</style>
