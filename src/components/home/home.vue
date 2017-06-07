<template>
  <div id="home">
    <daily-header :title="title"></daily-header>
    <cycle-image :top_stories="top_stories"></cycle-image>
    <list-view :stories="stories"></list-view>
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
        times: 1
      }
    },
    methods: {
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
      getHomeBeforeNews: function () {
        this.$request({
          type: 'get',
          url: URLs.beforeNewsURL + this.getBeforeDate(this.times),
          success: function (res) {
            this.stories = this.stories.concat(res.data.stories)
            this.times++
          },
          error: function (res) {
            console.log(res)
          }
        })
      },
      getBeforeDate: function (times) {
        var date = new Date()
        console.log(date.getTime())
        var time = date.getTime() - 24 * 60 * 60 * 1000 * times
        console.log(time)
        var finalDate = Dateformat(time, 'yyyymmdd')
        return finalDate
      }
    },
    mounted () {
      this.getHomeNews()
      console.log(this.getBeforeDate(1))
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
