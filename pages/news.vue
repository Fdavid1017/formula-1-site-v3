<template>
  <v-container style="width:85%; margin-top: 2em;">
    <v-layout row wrap>
      <v-flex
        v-for="newsItem in news"
        :key="newsItem.id"
      >
        <news-card :tweet="newsItem" />
      </v-flex>
    </v-layout>
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
    const news = await fetch('http://localhost:5000/api/tweets').then(res => res.json())

    // news.push({
    //   id: 'test',
    //   text: '"This race was the epitome of F1 – we saw the human side and the strategy side of the sport in all its glory" \n\nRoss Brawn shares his thoughts on our exciting weekend in France 👇\n\n#FrenchGP 🇫🇷 #F1 \n\nhttps://t.co/1bkqoJgj3V'
    //     .replace(/(https?:\/\/[^\s]+)/g, 'asd')
    // })

    // const text = '"This race was the epitome of F1 – we saw the human side and the strategy side of the sport in all its glory" \n\nRoss Brawn shares his thoughts on our exciting weekend in France 👇\n\n#FrenchGP 🇫🇷 #F1 \n\nhttps://t.co/1bkqoJgj3V'
    // const res = text.match(/(https?:\/\/[^\s]+)/g)
    // for (const resKey in res) {
    //   console.log(res[resKey])
    // }

    // https://twitter.com/
    for (let i = 0; i < news.length; i++) {
      // if (news[i].entities !== undefined) {
      //   const entities = news[i].entities
      //
      //   if (entities.mentions !== undefined) {
      //     const mentions = entities.mentions
      //
      //     for (let j = 0; j < mentions.length; j++) {
      //       news[i].text = this.replaceBetweenString(news[i], mentions[i].start, mentions[i].end, 'end')
      //     }
      //   }
      // }
      this.formatTweet(news[i])
      // news[i].text = news[i].text.replace(/(?:\r\n|\r|\n)/g, '<br />')
      //   .replace(/#(\S*)/g, '<a href="http://twitter.com/#!/search/$1" target="_blank">#$1</a>')
      // const res = news[i].text.match(/(https?:\/\/[^\s]+)/g)
      // for (let j = 0; j < res.length; j++) {
      // const preview = fetch(`https://api.linkpreview.net/?key=e21218cbb2ced616afe65ebce1207b4f&q=${res[j]}`).then(res => res.json())
      // news[i].text = news[i].text.replace(res[j], `<img src="${preview.image}" alt="${res[j]}"/>`)
      // }
    }

    if (!news.error) {
      this.news = news
      // console.log(this.news)
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
    }
  }
}
</script>

<style lang="scss" scoped>
.media {
  border-radius: 3%;
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
