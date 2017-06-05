<template>
  <div class="news-detail">
    <div v-html="body"></div>
  </div>
</template>

<script>
  import { URLs } from 'api/api.js'
  export default {
    name: 'news-detail',
    data () {
      return {
        body: ''
      }
    },
    methods: {
      getNewsDetail () {
        this.$request({
          type: 'get',
          url: URLs.newsDetailURL + this.$route.params.id,
          success: function (res) {
            this.body = res.data.body
          },
          error: function (res) {
            console.log(res)
          }
        })
      }
    },
    mounted () {
      this.getNewsDetail()
    }
  }
</script>

<style>
  @import '/static/css/news_qa.min.css';
</style>
