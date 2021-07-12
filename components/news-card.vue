<template>
  <v-card
    style="margin:10px"
    min-width="135px"
    elevation="6"
    class="mx-auto"
    max-width="300"
  >
    <a href="https://twitter.com/F1" target="_blank">
      <img class="card-banner" src="~static/news-card-banner.svg">
    </a>
    <v-card-text class="pb-1">
      <span v-html="tweet.text" />

      <v-card
        v-if="getImageUrl"
        class="mx-auto tweet-image-card"
        max-width="100%"
        max-height="25em"
        elevation="5"
        shaped
        @click="$emit('show-overlay', getImageUrl)"
      >
        <img class="tweet-image" :src="getImageUrl">
      </v-card>

      <template v-if="tweet.entities && tweet.entities.urls && tweet.entities.urls[0].title">
        <link-display
          :url="tweet.entities.urls[0]"
        />
      </template>
      <p class="muted">
        {{ formatDate(new Date(tweet.created_at)) }}
      </p>
    </v-card-text>

    <v-card-actions class="card-footer">
      <v-btn
        text
        :href="`https://twitter.com/intent/tweet?in_reply_to=${tweet.id}`"
        target="_blank"
      >
        <v-icon
          dark
        >
          mdi-comment-outline
        </v-icon>
      </v-btn>
      <v-spacer />
      <v-btn
        text
        :href="`https://twitter.com/intent/retweet?tweet_id=${tweet.id}`"
        target="_blank"
      >
        <v-icon
          dark
        >
          mdi-repeat
        </v-icon>
      </v-btn>
      <v-spacer />
      <v-btn
        text
        :href="`https://twitter.com/intent/favorite?tweet_id=${tweet.id}`"
        target="_blank"
      >
        <v-icon
          dark
        >
          mdi-heart-outline
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    tweet: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    getImageUrl () {
      if (this.tweet.entities && this.tweet.entities.urls) {
        for (let i = 0; i < this.tweet.entities.urls.length; i++) {
          if (this.tweet.entities.urls[i].image_url) {
            return this.tweet.entities.urls[i].image_url
          }
        }
      }

      return null
    }
  },
  methods: {
    formatDate (dt) {
      return `${
        (dt.getMonth() + 1).toString().padStart(2, '0')}/${
        dt.getDate().toString().padStart(2, '0')}/${
        dt.getFullYear().toString().padStart(4, '0')} ${
        dt.getHours().toString().padStart(2, '0')}:${
        dt.getMinutes().toString().padStart(2, '0')}:${
        dt.getSeconds().toString().padStart(2, '0')}`
    }
  }
}
</script>

<style lang="scss" scoped>
.muted {
  font-size: 0.75em;
  color: #828282;
  margin-top: 0.5em;
  margin-bottom: 0;
  padding: 0;
}

.tweet-image-card {
  cursor: pointer;
  padding: 0;
}

.tweet-image {
  max-width: 100%;
  margin: 0;
  padding: 0;
}

.card-banner {
  -webkit-box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.15);

  cursor: pointer;
}

.card-footer {
  -webkit-box-shadow: 0px -6px 5px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px -6px 5px 0px rgba(0, 0, 0, 0.15);
}
</style>
