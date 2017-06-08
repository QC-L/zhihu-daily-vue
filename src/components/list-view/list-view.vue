<template>
  <div class="list-view">
    <div class="section" v-for="(obj, index) in allStories">
      <div class="section-title" v-if="index !== 0">
        <p>{{obj.title}}</p>
      </div>
      <mt-cell v-for="story in obj.array"
               :title="story.title"
               :key="story.id"
               :to="'/news/' + story.id">
        <div class="image"
             :style="{background: 'url(' + story.images[0] + ') no-repeat center center', 'background-size': 'cover'}"></div>
      </mt-cell>
    </div>
  </div>
</template>

<script>
  import MtCell from '../../../node_modules/mint-ui/packages/cell/src/cell'
  export default {
    components: {MtCell},
    name: 'list-view',
    props: ['stories', 'allStories']
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .section-title
    text-align: center
    height: 25px
    padding-top: 9px
    background-color: $color-theme
    color: $color-title
  .section-title p
    width: 100%
  .mint-cell
    width: 100%
    height: 90px
  .image
    margin-top: 15px
    width: 80px
    height: 60px
</style>
