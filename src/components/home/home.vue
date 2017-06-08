<template>
  <div id="home">
    <daily-header :title="title"></daily-header>
    <cycle-image :top_stories="top_stories"></cycle-image>
    <list-view v-scroll="getHomeBeforeNews"
               :stories="stories"
               :pause-scroll-trigger="pauseScrollTrigger"></list-view>
  </div>
</template>

<script>
  import Dateformat from 'dateformat'
  import DailyHeader from '@/components/daily-header/daily-header'
  import CycleImage from '@/components/cycle-image/cycle-image'
  import ListView from '@/components/list-view/list-view'
  import { URLs } from 'api/api.js'

  export default {
    name: 'home',
    components: {
      DailyHeader,
      CycleImage,
      ListView
    },
    data () {
      return {
        title: '今日要闻',
        stories: [],
        top_stories: [],
        pauseScrollTrigger: false,
        times: 1
      }
    },
    methods: {
      // 请求最新新闻
      getHomeNews: function () {
        this.$request({
          type: 'get',
          url: URLs.newsURL,
          success: function (res) {
            this.top_stories = res.data.top_stories
            this.stories = res.data.stories
          },
          error: function (res) {
            console.log(res)
          }
        })
      },
      // 请求历史新闻
      getHomeBeforeNews: function () {
        this.pauseScrollTrigger = true
        this.$request({
          type: 'get',
          url: URLs.beforeNewsURL + this.getBeforeDate(this.times),
          success: function (res) {
            this.stories = this.stories.concat(res.data.stories)
            this.times++
            this.pauseScrollTrigger = false
          },
          error: function (res) {
            console.log(res)
          }
        })
      },
      // 获取历史时间
      getBeforeDate: function (times) {
        var date = new Date()
        // 根据当前日期生成历史日期
        var time = date.getTime() - 24 * 60 * 60 * 1000 * times
        var finalDate = Dateformat(time, 'yyyymmdd')
        return finalDate
      }
    },
    mounted () {
      this.getHomeNews()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
