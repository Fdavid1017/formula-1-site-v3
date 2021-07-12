<template>
  <v-container style="width:85%; margin-top: 2em;">
    <v-layout row wrap>
      <v-flex
        v-for="newsItem in news"
        :key="newsItem.id"
      >
        <news-card data-aos="fade-up" :tweet="newsItem" @show-overlay="showOverlay" />
      </v-flex>
    </v-layout>
    <v-row class="fill-width mt-10">
      <v-col class="d-flex justify-center">
        <v-btn class="show-more-btn" @click="getMoreTweet()">
          Show More
        </v-btn>
      </v-col>
    </v-row>
    <v-overlay :value="imageOverlay">
      <v-card
        class="mx-auto"
        max-width="75%"
        max-height="75%"
      >
        <v-icon class="close-icon" @click="imageOverlay=false">
          mdi-close
        </v-icon>
        <v-img
          width="100%"
          :src="imageOverlayUrl"
        />
      </v-card>
    </v-overlay>
  </v-container>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
      news: [],
      next_token: null,
      imageOverlay: false,
      imageOverlayUrl: ''
    }
  },
  async fetch () {
    const news = await fetch('http://localhost:5000/api/tweets?max_results=15').then(res => res.json())

    if (!news.error) {
      for (let i = 0; i < news.data.length; i++) {
        this.formatTweet(news.data[i])

        this.news = news.data
        this.next_token = news.next_token
      }
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
      for (let i = 0; i < tweet.entities?.urls?.length; i++) {
        const url = tweet.entities.urls[i]
        if (url.display_url?.startsWith('pic.twitter.com') || url.unwound_url) {
          tweet.text = tweet.text.replace(url.url, '')
        }
      }

      tweet.text = this.setUrl(tweet.text)
      tweet.text = this.setMentions(tweet.text)
      tweet.text = this.setHash(tweet.text)

      return tweet
    },
    // Setup format method for Tweet Mentions
    setMentions (string) {
      const re = /@[A-Z0-9_]+/gi
      return string.replace(re, function (match) {
        return '<a style="text-decoration: none" href="https://twitter.com/' + match + '" target="_blank">' + match + '</a>'
      })
    },
    // Setup format method for Tweet Hashtags
    setHash (string) {
      const re = /#[A-Z0-9_]+/gi
      return string.replace(re, function (match) {
        return '<a style="text-decoration: none" href="https://twitter.com/search?q=' + encodeURIComponent(match) + '" target="_blank">' + match + '</a>'
      })
    },
    // Setup format method for Tweet links
    setUrl (string) {
      // eslint-disable-next-line
      const re = /(((f|ht){1}(tp|tps):\/\/)[-a-zA-Z0-9@:%_\+\.~#?&\/\/=]+)/gi
      return string.replace(re, function (match) {
        return '<a href="' + match + '" target="_blank" class="link">' + match + '</a>'
      })
    },
    getMoreTweet () {
      let url = '/api/tweets?max_results=15'

      if (this.next_token !== null) {
        url += `&pagination_token=${this.next_token}`
      }

      this.$axios.$get(url).then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          const formatedTweet = this.formatTweet(response.data[i])
          this.news.push(formatedTweet)
        }
        this.next_token = response.next_token
      })
    },
    showOverlay (imageUrl) {
      this.imageOverlayUrl = imageUrl
      this.imageOverlay = true
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

.close-icon {
  float: right;
  cursor: pointer;
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
