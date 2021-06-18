<template>
  <div class="card" @click="goToResult" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div class="card-round">
      Round {{ round }}
    </div>
    <v-row>
      <v-col class="card-date-container">
        <v-row>
          <v-col class="card-month">
            {{ dateTime.toLocaleString('en-us', { month: 'short' }) }}
          </v-col>
        </v-row>
        <v-row class="card-days-container">
          <v-col class="card-days">
            {{ `${dateTime.getDate() - 2}-${dateTime.getDate()}` }}
          </v-col>
        </v-row>
      </v-col>
      <v-col class="text-right card-flag">
        <img :src="getFlagImgUrl(country)" :alt="`${country} Flag`">
      </v-col>
    </v-row>
    <div class="card-divider" />
    <v-row>
      <v-col id="card-country">
        {{ gpCountry }}
      </v-col>
    </v-row>
    <transition name="left">
      <div v-if="isMouseOver" class="hover-container">
        <v-row>
          <v-col id="card-circuit-name">
            {{ gpName }}
          </v-col>
        </v-row>
        <v-row>
          <v-col class="card-circuit-image">
            <img :src="require(`static/circuits/minimal_images/${circuitImgName}`)">
          </v-col>
        </v-row>
      </div>
    </transition>
    <transition name="bottom">
      <div v-if="!isMouseOver" class="card-bottom-flag-container">
        <v-row>
          <v-col class="card-circuit-image">
            <div class="flag-black-square" />
            <div class="polygon-triangle" />
            <flag class="flag" :country="country" />
          </v-col>
        </v-row>
      </div>
    </transition>
  </div>
</template>

<script>
import nationMap from 'assets/nation-map.json'
import nationalityMap from 'assets/nationality-map.json'

export default {
  name: 'GpCard',
  components: { },
  props: {
    round: {
      type: Number,
      default: 1
    },
    dateTime: {
      type: Date,
      default () {
        return new Date()
      }
    },
    country: {
      type: String,
      default: 'Hungary'
    },
    gpName: {
      type: String,
      default: 'Hungarian Grand Prix'
    },
    circuitImgName: {
      type: String,
      default: 'hungaroring.png'
    }
  },
  data () {
    return {
      isMouseOver: false
    }
  },
  computed: {
    gpCountry () {
      if (this.country === 'UK') {
        return 'United Kingdom'
      } else if (this.country === 'USA') {
        return 'United States'
      } else if (this.country === 'UAE') {
        return 'United Arab Emirates'
      }

      return this.country
    }
  },
  mounted () {
  },
  methods: {
    getFlagImgUrl (n) {
      if (nationMap[n]) {
        n = nationMap[n]
      }

      if (nationalityMap[n]) {
        return `https://flagcdn.com/${nationalityMap[n].code}.svg`
      } else {
        console.error(`No nation found with ${n}`)
        return ''
      }
    },
    mouseEnter () {
      this.isMouseOver = true
    },
    mouseLeave () {
      this.isMouseOver = false
    },
    goToResult () {
      this.$router.push(`/result/${this.round}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/variables";

.card {
  cursor: pointer;
  position: relative;
  background-color: $card-bg-color;
  border-radius: 0px 50px 0px 0px;

  $inner-shadow-vertical-inset: -1.2em;
  $inner-shadow-horizontal-inset: 1.2em;
  $red-line-width: 0.7;
  $red-line-padding-left: 9em;
  $red-line-padding-bottom: -2em;

  box-shadow: $red-line-padding-left $red-line-padding-bottom 0 $card-bg-color inset,
    ($inner-shadow-vertical-inset + $red-line-width) ($inner-shadow-horizontal-inset - $red-line-width) 0 $card-bg-color inset,
  $inner-shadow-vertical-inset $inner-shadow-horizontal-inset 0 $F1-red inset;

  -webkit-box-shadow: $red-line-padding-left $red-line-padding-bottom 0 $card-bg-color inset,
    ($inner-shadow-vertical-inset + $red-line-width) ($inner-shadow-horizontal-inset - $red-line-width) 0 $card-bg-color inset,
  $inner-shadow-vertical-inset $inner-shadow-horizontal-inset 0 $F1-red inset;

  -moz-box-shadow: $red-line-padding-left $red-line-padding-bottom 0 $card-bg-color inset,
    ($inner-shadow-vertical-inset + $red-line-width) ($inner-shadow-horizontal-inset - $red-line-width) 0 $card-bg-color inset,
  $inner-shadow-vertical-inset $inner-shadow-horizontal-inset 0 $F1-red inset;

  $height: 70%;
  $width: 22em;

  min-height: $height;
  max-height: $height;
  min-width: $width;
  max-width: $width;

  font-family: 'Formula1 Bold';
  color: white;
  padding-left: 1em;
  padding-right: $inner-shadow-horizontal-inset + 1em;

  transition: box-shadow 0.4s;

  &:hover {

    box-shadow: $red-line-padding-left $red-line-padding-bottom 0 $card-bg-color inset,
      ($inner-shadow-vertical-inset + $red-line-width) ($inner-shadow-horizontal-inset - $red-line-width) 0 $card-bg-color inset,
    $inner-shadow-vertical-inset $inner-shadow-horizontal-inset 0 $F1-red inset,
    5px 5px 25px 0px rgba(0, 0, 0, 1);

    -webkit-box-shadow: $red-line-padding-left $red-line-padding-bottom 0 $card-bg-color inset,
      ($inner-shadow-vertical-inset + $red-line-width) ($inner-shadow-horizontal-inset - $red-line-width) 0 $card-bg-color inset,
    $inner-shadow-vertical-inset $inner-shadow-horizontal-inset 0 $F1-red inset,
    5px 5px 25px 0px rgba(0, 0, 0, 1);

    -moz-box-shadow: $red-line-padding-left $red-line-padding-bottom 0 $card-bg-color inset,
      ($inner-shadow-vertical-inset + $red-line-width) ($inner-shadow-horizontal-inset - $red-line-width) 0 $card-bg-color inset,
    $inner-shadow-vertical-inset $inner-shadow-horizontal-inset 0 $F1-red inset,
    5px 5px 25px 0px rgba(0, 0, 0, 1);
  }

  .card-round {
    color: $F1-red;
    font-size: 1.5em;
    margin: 0;
  }

  .card-date-container {
    padding-top: 0.4em;
    padding-bottom: 0;

    .card-month {
      padding-top: 0;
      padding-bottom: 0;
      margin: 0;
      font-size: 2em;
    }

    .card-days-container {
      margin-top: 0;

      .card-days {
        margin: 0;
        padding-top: 0;
        font-size: 1.5em;
      }
    }
  }

  .card-divider {
    background-color: white;
    width: 100%;
    height: 0.2em;
    margin-top: 3em;
    margin-bottom: 1.5em;
  }

  #card-country {
    font-size: 2em;
  }

  .card-flag {
    img {
      max-width: 50%;
    }
  }

  .card-circuit-image {
    padding: 1em;

    img {
      width: 100%;
      bottom: 1em;
    }
  }

  overflow: hidden;

  .card-bottom-flag-container {
    padding: 0;
    margin: 0;
    bottom: 0;

    .flag-black-square {
      background-color: #2a2a2a;

      $size: 8em;
      min-width: $size;
      max-width: $size;
      min-height: $size;
      max-height: $size;

      position: absolute;
      bottom: 3.5em;
      left: 7em;
      transform: rotateZ(50deg);
    }

    .polygon-triangle {
      -webkit-clip-path: polygon(50% 0%, 49% 100%, 71% 85%);
      clip-path: polygon(50% 0%, 49% 100%, 71% 85%);

      background-color: white;

      $width: 10em;
      $height: 10em;

      min-width: $width;
      max-width: $width;
      min-height: $height;
      max-height: $height;

      padding: 0;
      margin: 0;

      position: absolute;
      bottom: 9em;
      left: 1em;
      transform: rotateZ(-45deg);
    }

    .flag {
      width: 95%;
      position: absolute;
      bottom: -3em;
      left: -4em;
      transform: rotateZ(25deg);
    }
  }

  .hover-container {
    position: relative;
    left: 0;
  }

  .left-enter-active {
    animation: left-in 0.5s ease-out;
  }

  .left-leave-active {
    animation: left-in 0.4s ease-in reverse;
  }

  @keyframes left-in {
    0% {
      left: -100%;
    }
    75% {
      left: 2em;
    }
    90% {
      left: -0.5em;
    }
    100% {
      left: 0;
    }
  }

  .bottom-enter-active,
  .bottom-leave-active {
    transition: opacity .4s;
  }

  .bottom-enter,
  .bottom-leave-to {
    opacity: 0%;
  }
}
</style>
