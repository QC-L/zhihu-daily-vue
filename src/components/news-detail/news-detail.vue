<template>
  <div class="news-detail">
    <div v-html="finalBody"></div>
  </div>
</template>

<script>
  import { URLs } from 'api/api.js'
  export default {
    name: 'news-detail',
    data () {
      return {
        body: '',
        image: '',
        title: ''
      }
    },
    computed: {
      finalBody () {
        if (this.body === '') return ''
        var body = this.parseDom(this.body)
        var p = this.createP()
        var imgPlaceholder = this.getImgPlaceHolder(body)
        imgPlaceholder.appendChild(p)
        var div = this.getBackgroundDiv()
        imgPlaceholder.appendChild(div)
        return body.innerHTML
      }
    },
    methods: {
      parseDom (arg) {
        var objE = document.createElement('div')
        objE.innerHTML = arg
        return objE
      },
      getImgPlaceHolder (body) {
        var imgPlaceholder = body.getElementsByClassName('img-place-holder')
        imgPlaceholder[0].style.background = `url('${this.image}') center center`
        imgPlaceholder[0].style.backgroundSize = 'cover'
        imgPlaceholder[0].style.position = 'relative'
        return imgPlaceholder[0]
      },
      getBackgroundDiv () {
        var div = document.createElement('div')
        div.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
        div.style.width = '100%'
        div.style.height = '100%'
        return div
      },
      createP () {
        var div = document.createElement('div')
        div.style.position = 'absolute'
        div.style.bottom = '10px'
        div.style.paddingLeft = '10px'
        div.style.paddingRight = '10px'
        var p = document.createElement('p')
        p.textContent = this.title
        p.style.color = '#fff'
        p.style.fontSize = '22px'
        div.appendChild(p)
        return div
      },
      getNewsDetail () {
        this.$request({
          type: 'get',
          url: URLs.newsDetailURL + this.$route.params.id,
          success: function (res) {
            this.body = res.data.body
            this.image = res.data.image
            this.title = res.data.title
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

<style scoped>
  @import '/static/css/news_qa.min.css';
</style>
