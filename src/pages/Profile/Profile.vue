<template>
  <section class="profile">
    <HeaderTop title="我的"/>
    <section class="profile-number">
      <router-link to="/login" class="profile-link">
        <div class="profile_image">
          <i class="iconfont iconyonghu"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">登录/注册</p>
          <p class="phone">
            <span class="user-icon">
              <i class="iconfont iconmobile-phone"></i>
            </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont iconicon-test"></i>
        </span>
      </router-link>
    </section>
    <section class="profile_info_data border-1px">
      <ul class="info_data_list">
        <a href="javascript:;" class="info_data_link">
          <span class="info_data_top"><span>0.00</span>元</span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="javascript:;" class="info_data_link">
          <span class="info_data_top"><span>0</span>个</span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
        <a href="javascript:;" class="info_data_link">
          <span class="info_data_top"><span>0</span>分</span>
          <span class="info_data_bottom">我的积分</span>
        </a>
      </ul>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 我的订单 -->
      <a href="javascript:;" class="my_order">
        <span>
          <i class="iconfont icondingdanpingjia"></i>
        </span>
        <div class="my_order_div">
          <span>我的订单</span>
          <span class="my_order_icon">
            <i class="iconfont iconicon-test"></i>
          </span>
        </div>
      </a>
      <!-- 积分商城 -->
      <a href="javascript:;" class="my_order">
        <span>
          <i class="iconfont iconjewelry"></i>
        </span>
        <div class="my_order_div">
          <span>积分商城</span>
          <span class="my_order_icon">
            <i class="iconfont iconicon-test"></i>
          </span>
        </div>
      </a>
      <!-- 会员卡 -->
      <a href="javascript:;" class="my_order">
        <span>
          <i class="iconfont iconrmb"></i>
        </span>
        <div class="my_order_div">
          <span>我的外卖会员卡</span>
          <span class="my_order_icon">
            <i class="iconfont iconicon-test"></i>
          </span>
        </div>
      </a>
      <!-- 服务中心 -->
      <a href="javascript:;" class="my_order">
        <span>
          <i class="iconfont iconshouye"></i>
        </span>
        <div class="my_order_div">
          <span>服务中心</span>
          <span class="my_order_icon">
            <i class="iconfont iconicon-test"></i>
          </span>
        </div>
      </a>
    </section>
  </section>
</template>

<script>
import HeaderTop from './../../components/HeaderTop/HeaderTop'
export default {
  name: 'Profile',
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

<style lang="stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .profile
    width 100%
    overflow hidden
    .profile-number
      top-border-1px(#fff)
      margin-top 45px
      .profile-link
        clearFix()
        position relative
        display block
        background #02a774
        padding 20px 10px
        .profile_image
          float left
          width 60px
          height 60px
          border-radius 50%
          overflow hidden
          .iconyonghu
            background #e4e4e4
            font-size 62px
        .user-info
          float left
          margin-top 8px
          margin-left 15px
          p
            font-weight 700
            font-size 18px
            color #ffffff
            &.user-info-top
              padding-bottom 8px
            &.phone
              display inline-block
              padding-left 10px
              .user-icon
                display inline-block
                margin-left -15px
                margin-right 5px
                width 20px
                height 20px
                .iconmobile-phone
                  font-size 25px
                  vertical-align text-top
              .icon-mobile-number
                display inline-block
                margin-left -5px
                font-size 14px
                color #ffffff
        .arrow
          width 20px
          height 20px
          position absolute
          right 15px
          top 40%
          .iconicon-test
            color #ffffff
            font-size 25px
    .profile_info_data
      bottom-border-1px(#e4e4e4)
      width 100%
      background-color #ffffff
      overflow hidden
      .info_data_list
        clearFix()
        .info_data_link
          float left
          width 33%
          text-align center
          border-right 1px solid #f1f1f1
          .info_data_top
            display block
            width 100%
            font-size 14px
            color #333333
            padding 15px 5px 10px
            span
              display inline-block
              font-size 30px
              color #f90
              font-weight 700
              line-height 30px
          .info_data_bottom
            display inline-block
            font-size 14px
            color #666666
            font-weight 400
            padding-bottom 10px
        .info_data_link:nth-of-type(2)
          .info_data_top
            span
              color #ff5f3e
        .info_data_link:nth-of-type(3)
          border 0
          .info_data_top
            span
              color #6ac20b
    .profile_my_order
      top-border-1px(#e4e4e4)
      margin-top 10px
      background-color #ffffff
      .my_order
        display flex
        align-items center
        padding-left 15px
        >span
          display flex
          align-items center
          width 20px
          height 20px
          >.iconfont
            margin-left -10px
            font-size 25px
          .icondingdanpingjia
            color #02a774
          .iconjewelry
            color #ff5f3e
          .iconrmb
            color #f90
          .iconshouye
            color #02a774
        .my_order_div
          width 100%
          border-bottom 1px solid #f1f1f1
          padding 18px 10px 18px 0
          font-size 16px
          color #333333
          display flex
          justify-content space-between
          span
            display block
            margin-right 10px
          .my_order_icon
            width 10px
            height 10px
            .iconicon-test
              color #bbbbbb
              font-size 20px
</style>
