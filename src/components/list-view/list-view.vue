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
  export default {
    name: 'list-view',
    props: ['stories', 'allStories'],
    data () {
      return {
        scroll: '',
        sectionTitleArray: [],
        title: ''
      }
    },
    methods: {
      menu () {
        this.scroll = document.body.scrollTop
        console.log(this.scroll)
        if (this.sectionTitleArray.length !== 0) {
          var domDivTitle = this.sectionTitleArray[this.sectionTitleArray.length - 1]
          console.log(domDivTitle.offsetTop)
          if (this.scroll >= domDivTitle.offsetTop) {
            var textContent = domDivTitle.textContent
            this.title = textContent
            this.$emit('change-title', this.title)
          } else {
            if (this.title.length === 0) this.title = '今日要闻'
            this.$emit('change-title', this.title)
          }
        }
      }
    },
    mounted () {
      console.log(this.$el)
      window.addEventListener('scroll', this.menu)
    },
    updated () {
      this.sectionTitleArray = this.$el.getElementsByClassName('section-title')
    }
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
