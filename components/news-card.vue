<template>
  <v-card
    style="margin:10px"
    min-width="135px"
    elevation="6"
    class="mx-auto"
    max-width="300"
  >
    <img class="card-banner" src="~static/news-card-banner.svg">
    <v-card-text>
      <span v-html="tweet.text" />
      <p class="muted mt-1">
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
  //margin-left: 1em;
  color: #828282;
}

.card-banner {
  -webkit-box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.15);
}

.card-footer {
  -webkit-box-shadow: 0px -6px 5px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px -6px 5px 0px rgba(0, 0, 0, 0.15);
}
</style>
