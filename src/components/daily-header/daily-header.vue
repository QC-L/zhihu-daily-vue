<template>
  <div class="daily-header">
    <div class="menu">
      <button @click="clickedMenu"></button>
    </div>
    <span class="text">{{title}}</span>
  </div>
</template>

<script>
  export default {
    name: 'daily-header',
    props: ['title'],
    methods: {
      clickedMenu: function () {
        this.$emit('click')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .daily-header
    z-index: 99
    position: fixed
    left: 0
    top: 0
    bottom: 0
    right: 0
    text-align: center
    width: 100%
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
