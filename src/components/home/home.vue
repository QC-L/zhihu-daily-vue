<template>
  <div id="home">
    <daily-header :title="title"></daily-header>
    <p>我是轮播图</p>
    <p>我是一条条数据</p>
  </div>
</template>

<script>
  import DailyHeader from '@/components/daily-header/daily-header'
  export default {
    name: 'home',
    components: {
      DailyHeader
    },
    data () {
      return {
        title: '今日要闻'
      }
    }
  }
</script>

<style scoped>

</style>
