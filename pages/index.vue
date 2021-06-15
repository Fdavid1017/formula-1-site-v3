<template>
  <div class="fill-height fill-width">
    <v-container v-if="schedule" fluid class="fill-width fill-height container">
      <div class="grid-col-1">
        <img class="chevron-left" src="~static/chevron.svg" @click="leftClick">
      </div>

      <div class="grid-col-2">
        <gp-card v-bind="getCardProps(0)" />
      </div>

      <div class="grid-col-3">
        <gp-card v-bind="getCardProps(1)" />
      </div>

      <div class="grid-col-4">
        <gp-card v-bind="getCardProps(2)" />
      </div>

      <div class="grid-col-5">
        <img class="chevron-right" src="~static/chevron.svg" @click="rightClick">
      </div>
    </v-container>
    <div v-else>
      Please wait
    </div>
  </div>
</template>

<script>

import { clamp } from '@/plugins/clamp'

export default {
  components: {},
  data () {
    return {
      schedule: [],
      firstCardIndex: 0
    }
  },
  mounted () {
    this.getSchedule()
  },
  methods: {
    getSchedule () {
      this.$axios.$get('/api/get_schedule').then((response) => {
        this.schedule = response
        this.firstCardIndex = clamp(this.getClosestUpcomingRaceIndex() - 1, 0, this.schedule.length)
      })
    },
    getCardProps (cardNumber) {
      if (this.schedule.length === 0) {
        return {}
      }

      const index = this.firstCardIndex + cardNumber > this.schedule.length - 1 ? (this.firstCardIndex + cardNumber) - this.schedule.length : this.firstCardIndex + cardNumber
      const data = this.schedule[index]

      const props = {
        round: parseInt(data.race_round),
        dateTime: new Date(data.date_time),
        country: data.circuit.country,
        gpName: data.circuit.name,
        circuitImgName: data.circuit.image_location
      }

      return props
    },
    leftClick () {
      this.firstCardIndex = this.firstCardIndex === 0 ? this.schedule.length - 1 : this.firstCardIndex - 1
    },
    rightClick () {
      this.firstCardIndex = this.firstCardIndex === this.schedule.length - 1 ? 0 : this.firstCardIndex + 1
    },
    getClosestUpcomingRaceIndex () {
      const today = new Date()
      console.log(this.schedule.length)
      const afterDates = this.schedule.filter(function (s) {
        return new Date(s.date_time) - today > 0
      })

      if (afterDates.length === 0) {
        console.log('No more upcoming race')
        return -1
      }

      return this.schedule.indexOf(afterDates[0])
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 90%;
  display: grid;
  grid-template-columns: 0.25fr repeat(3, 1fr) 0.25fr;
  grid-template-rows: 1fr;
  grid-column-gap: 1em;
  padding: 0;
}

$chevron-hover-time: 0.25s;
.chevron-right,
.chevron-left {
  width: 75%;
  cursor: pointer;
  transition: width $chevron-hover-time;

  &:hover {
    width: 60%;
  }
}

$chevron-drop-shadow-x: 0.25em;
$chevron-drop-shadow-y: 0.25em;
$chevron-drop-shadow-blur: 0.4em;
$chevron-drop-shadow-color: rgba(0, 0, 0, 0.5);

@function neg($value) {
  @return $value * -1
}

.chevron-left {
  transform: rotateZ(180deg);
  filter: drop-shadow(neg($chevron-drop-shadow-x) neg($chevron-drop-shadow-x) $chevron-drop-shadow-blur $chevron-drop-shadow-color);
  -webkit-filter: drop-shadow(neg($chevron-drop-shadow-x) neg($chevron-drop-shadow-x) $chevron-drop-shadow-blur $chevron-drop-shadow-color);
  -moz-filter: drop-shadow(neg($chevron-drop-shadow-x) neg($chevron-drop-shadow-x) $chevron-drop-shadow-blur $chevron-drop-shadow-color);
}

.chevron-right {
  filter: drop-shadow($chevron-drop-shadow-x $chevron-drop-shadow-x $chevron-drop-shadow-blur $chevron-drop-shadow-color);
  -webkit-filter: drop-shadow($chevron-drop-shadow-x $chevron-drop-shadow-x $chevron-drop-shadow-blur $chevron-drop-shadow-color);
  -moz-filter: drop-shadow($chevron-drop-shadow-x $chevron-drop-shadow-x $chevron-drop-shadow-blur $chevron-drop-shadow-color);
}

.grid-col-1,
.grid-col-2,
.grid-col-3,
.grid-col-4,
.grid-col-5 {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid-col-1 {
  grid-area: 1 / 1 / 2 / 2;
}

.grid-col-2 {
  grid-area: 1 / 2 / 2 / 3;
}

.grid-col-3 {
  grid-area: 1 / 3 / 2 / 4;
}

.grid-col-4 {
  grid-area: 1 / 4 / 2 / 5;
}

.grid-col-5 {
  grid-area: 1 / 5 / 2 / 6;
}
</style>
