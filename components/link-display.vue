<template>
  <a :href="url.unwound_url" target="_blank">
    <v-card
      class="mx-auto"
      max-width="100%"
      max-height="25em"
      elevation="5"
      shaped
    >
      <v-img
        v-if="largestImg"
        width="100%"
        :src="largestImg.url"
        elevation="3"
      />

      <div class="title" :title="url.title">
        {{ url.title }}
      </div>

      <div class="text" :title="url.description">
        {{ url.description }}
      </div>
    </v-card>
  </a>
</template>

<script>
export default {
  name: 'LinkDisplay',
  props: {
    url: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    largestImg () {
      if (!this.url.images) {
        return null
      }

      let largestIndex = 0
      for (let i = 1; i < this.url.images.length; i++) {
        if (this.url.images[i].width > this.url.images[largestIndex].width) {
          largestIndex = i
        }
      }

      if (largestIndex < 0) {
        return null
      }

      return this.url.images[largestIndex]
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;

  .title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    padding-left: 1em;
    padding-right: 1em;
    font-weight: bold;
  }

  .text {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    padding-left: 1em;
    padding-right: 1em;
    padding-bottom: 1em;

    color: rgba(0, 0, 0, 0.6);
  }
}
</style>
