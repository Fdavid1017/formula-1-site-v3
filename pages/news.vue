<template>
  <v-container style="width:85%; margin-top: 2em;">
    <v-layout row wrap>
      <v-flex
        v-for="newsItem in news"
        :key="newsItem.id"
      >
        <news-card data-aos="fade-up" :tweet="newsItem" />
      </v-flex>
    </v-layout>
    <v-row class="fill-width mt-10">
      <v-col class="d-flex justify-center">
        <v-btn class="show-more-btn" @click="getMoreTweet()">
          Show More
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
      news: []
    }
  },
  async fetch () {
    const news = await fetch('http://localhost:5000/api/tweets?max_results=15').then(res => res.json())

    for (let i = 0; i < news.length; i++) {
      this.formatTweet(news[i])
    }

    if (!news.error) {
      this.news = news
    }
  },
  methods: {
    replaceBetweenString (string, start, end, what) {
      end++
      if (end < start) {
        start = end
      }

      return string.substring(0, start) + what + string.substring(end)
    },
    formatTweet (tweet) {
      tweet.text = tweet.text.replace(/(?:\r\n|\r|\n)/g, '<br />')
        .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>')
        .replace(/#(\S*)/g, '<a href="https://twitter.com/#!/search/$1" target="_blank">#$1</a>')

      let offset = 0
      for (let i = 0; i < tweet.entities?.mentions?.length; i++) {
        const ment = tweet.entities.mentions[i]
        tweet.text = this.replaceBetweenString(tweet.text, ment.start + offset, ment.end + offset, `<a href="https://twitter.com/${ment.username}" target="_blank"> @${ment.username} </a>`)
        offset += `<a href="https://twitter.com/${ment.username}" target="_blank"> @${ment.username} </a>`.length - `@${ment.username}`.length
      }
    },
    getMoreTweet () {
      this.$axios.$get('/api/next_tweets?max_results=15').then((response) => {
        for (let i = 0; i < response.length; i++) {
          this.news.push(response[i])
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.media {
  border-radius: 3%;
}

.show-more-btn {
  background-color: $F1-red !important;
  color: white;

  &:hover {
    background-color: darken($F1-red, 5) !important;
    color: darken(white, 10);
  }
}

.media:hover {
  box-shadow: 0 0 3pt 2pt #ff5555;
  border-radius: 3%;
  cursor: pointer;
}

.text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;
  width: 100%;
  position: absolute;
}

.block {
  display: block !important;
  height: 24px;
}

</style>
