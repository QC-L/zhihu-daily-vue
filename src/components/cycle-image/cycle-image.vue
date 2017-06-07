<template>
  <div class="cycle-image">
    <mt-swipe style="width: 100%; height: 100%">
      <mt-swipe-item v-for="(top, index) in top_stories" :style="{background: 'url(' + top.image + ') no-repeat center center', 'background-size': 'cover'}" :key="index">
        <div class="mask"></div>
        <div class="titleBackground">
          <p>{{top.title}}</p>
        </div>
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
  .mt-swipe-item
    width: 100%
    height: auto
    max-height: 100%
    position: relative
  .mask
    width: 100%
    height: 100%
    background: rgba(0, 0, 0, 0.4)
  .titleBackground
    position: absolute
    bottom: 30px
    height: auto
    padding-left: 10px
    padding-right: -10px
  p
    color: $color-title
    font-size: $font-size-title
</style>
