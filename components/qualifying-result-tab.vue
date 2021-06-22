<template>
  <div class="container fill-width fill-height">
    <v-row class="fill-width">
      <v-col class="text-uppercase align-center">
        <div class="btn">
          watch live
        </div>
      </v-col>
      <v-col class="text-uppercase align-center">
        <div class="btn" @click="compareClick('timings')">
          compare timings
        </div>
      </v-col>
      <v-col class="text-uppercase align-center">
        <div class="btn" @click="compareClick('carData')">
          compare car data
        </div>
      </v-col>
      <v-col class="d-flex justify-end align-center session-date">
        {{ sessionTimeString }}
      </v-col>
    </v-row>
    <div class="results-container">
      <v-row class="table-header">
        <v-col cols="1" class="text-uppercase d-flex justify-center">
          pos
        </v-col>
        <v-col cols="5" class="text-uppercase d-flex justify-center">
          driver
        </v-col>
        <v-col cols="2" class="text-uppercase d-flex justify-center">
          Q1
        </v-col>
        <v-col cols="2" class="text-uppercase d-flex justify-center">
          Q2
        </v-col>
        <v-col cols="2" class="text-uppercase d-flex justify-center">
          Q3
        </v-col>
      </v-row>

      <!--      Tabble content-->
      <v-row v-for="(res, index) in results" :key="index" class="table-data">
        <v-col cols="1" class="text-uppercase d-flex justify-end">
          {{ res.position }}
        </v-col>
        <v-col cols="5" class="">
          <driver-name
            :number="parseInt(res.driver.number)"
            :name="`${res.driver.given_name} ${res.driver.family_name}`"
            :color-code="res.driver.constructor.color_scheme.primary"
          />
        </v-col>
        <v-col cols="2" class="text-uppercase d-flex justify-center">
          {{ res.qualifying_1 ? res.qualifying_1 : '-' }}
        </v-col>
        <v-col cols="2" class="text-uppercase d-flex justify-center">
          {{ res.qualifying_2 ? res.qualifying_2 : '-' }}
        </v-col>
        <v-col cols="2" class="text-uppercase d-flex justify-center">
          {{ res.qualifying_3 ? res.qualifying_3 : '-' }}
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultTab',
  props: {
    sessionResult: {
      type: Object,
      default () {
        return {}
      }
    },
    sessionDate: {
      type: String,
      default: ''
    }
  },
  computed: {
    results () {
      return this.sessionResult.results
    },
    sessionTimeString () {
      const date = new Date(this.sessionDate)

      let options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }

      if (this.isPractice) {
        options = {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric'
        }
      }

      return date.toLocaleDateString('en-us', options)
    }
  },
  methods: {
    compareClick (value) {
      this.$emit('compareClick', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  color: white;
  font-family: "Formula1 Bold";
  font-size: 1.25em;

  .btn {
    margin: 0;
    padding: 0.25em 0.75em 0.25em 0.25em;
    height: 100%;
    display: inline-block;
    background-color: $F1-red;
    cursor: pointer;
    font-size: 1.25em;

    border-radius: 0px 15px 0px 0px;
    -webkit-border-radius: 0px 15px 0px 0px;
    -moz-border-radius: 0px 15px 0px 0px;

    transition: all 0.2s;

    &:hover {
      font-size: 1.15em !important;
      color: #a0a0a0;
    }
  }

  .results-container {
    margin-top: 2em;
    width: 100%;

    box-shadow: 10px -10px 0px 0px $F1-red;
    -webkit-box-shadow: 10px -10px 0px 0px $F1-red;
    -moz-box-shadow: 10px -10px 0px 0px $F1-red;

    border-radius: 0px 25px 0px 0px;
    -webkit-border-radius: 0px 25px 0px 0px;
    -moz-border-radius: 0px 25px 0px 0px;

    .table-header {
      color: #B0B0B0;
      text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
      font-size: 1.75em;
    }

    .table-data {
      text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
      font-size: 1.4em;
    }
  }
}
</style>
