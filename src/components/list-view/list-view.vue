<template>
  <div class="list-view">
    <mt-cell v-for="story in stories" :title="story.title" :key="story.id">
      <!--<img :src="story.images[0]"/>-->
      <div class="image" :style="{background: 'url(' + story.images[0] + ') no-repeat center center', 'background-size': 'cover'}"></div>
    </mt-cell>
  </div>
</template>

<script>
  export default {
    name: 'list-view',
    props: ['stories']
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .mint-cell
    width: 100%
    height: 90px
  .image
    margin-top: 15px
    width: 80px
    height: 60px
</style>
