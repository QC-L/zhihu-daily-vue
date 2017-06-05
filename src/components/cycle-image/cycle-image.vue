<template>
  <div class="cycle-image">
    <mt-swipe style="width: 100%; height: 100%">
      <mt-swipe-item v-for="(top, index) in top_stories" :style="{background: 'url(' + top.image + ') no-repeat center center', 'background-size': 'cover'}" :key="index">
        <div class="mask"></div>
        <h1>{{top.title}}</h1>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: 'cycle-image',
    props: ['top_stories']
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .cycle-image
    width: 100%
    height: 240px
    text-align: center
  .mt-swipe-item
    width: 100%
    height: auto
    max-height: 100%
  .mask
    width: 100%
    height: 100%
    background: rgba(0, 0, 0, 0.4)
  h1
    color: $color-title
    bottom: 30px
    position: absolute
    width: 100%
    height: auto
    font-size: $font-size-title
</style>
