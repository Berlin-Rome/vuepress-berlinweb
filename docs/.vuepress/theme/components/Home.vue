<template>
  <main>
    <main class="home" aria-labelledby="main-title">
      <div class="box">
        <div class="nav">
          <div class="logo"><img v-if="data.logo" :src="$withBase(data.logo)" :alt="data.heroAlt || 'hero'"> <span>berlin</span></div>
          <div class="nav_list" v-if="data.navList && data.navList.length">
            <div class="nav_item" :class="{'nav_active':navNum==index}" v-for="(item,index) in data.navList" :key="index" @click="handToPage(item)">{{item.title}}</div>
          </div>
        </div>
        <div class="user">
          <div class="des_box">
            <div class="name">{{data.name}}</div>
            <div class="des">{{data.description}}</div>
          </div>
          <div class="user_img"><img :src="data.userImg" alt=""></div>
        </div>
        <div class="time_box">
          <div class="time">{{time}}</div>
        </div>
      </div>
    </main>
  </main>
</template>
<script>
import { time } from '../util'
export default {
  name: 'Home',
  data () {
    return {
      navNum: 0,
      time: null
    }
  },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  },
  methods: {
    handToPage (item) {
      console.log(item)
      location.href = item.link
    }
  },
  mounted () {
    this.time = time()
  }
}
</script>
<style lang="stylus">
.home
  background #fff
  padding 3rem 4.5rem
  .box
    overflow hidden
    background #e4e4e4
    padding 1rem 2rem 2rem 1rem
    position relative
    .nav
      margin-right 30%
      display flex
      align-items center
      justify-content space-between
      margin-bottom 3rem
      .logo
        display flex
        align-items center
        img
          width 1.25rem
          margin-right 0.5rem
      .nav_list
        display flex
        align-items center
        .nav_item
          margin-right 5rem
          font-size 0.875rem
          color #000
        .nav_item:hover
          color #f99212
        .nav_active
          color #f99212
    .user
      display flex
      align-items center
      margin-left 12%
      margin-right 6%
      justify-content space-between
      .des_box
        .name
          font-size 3rem
          letter-spacing 1rem
          font-weight 600
        .des
          font-size 0.75rem
          margin-top 2rem
      .user_img
        width 16rem
        height 16rem
        border-radius 50%
        overflow hidden
        img
          width 100%
    .time_box
      display flex
      margin-top 7rem
      .time
        flex 1
        text-align right
        font-size 0.75rem
        font-weight 600
  .box:after
    content ''
    width 7rem
    height 7rem
    background #5b5b5b
    position absolute
    right -0.6rem
    top -10%
    border-radius 50%
    box-shadow -1px 1px 5px #5b5b5b
@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem
@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>