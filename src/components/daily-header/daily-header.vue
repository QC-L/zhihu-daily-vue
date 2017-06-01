<template>
  <div class="daily-header">
    <div class="menu"></div>
    <h1 class="text">{{title}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'daily-header',
    props: ['title']
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .daily-header
    position: relative
    text-align: center
    height: 44px
    background: $color-theme
    color: $color-title
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
    .menu
      position: absolute
      bg-image('daily_menu')
      width: 28px
      height: 28px
      background-size: 28px 28px
      display: inline-block
      vertical-align: top
      margin-top: 8px
      left: 10px
</style>
