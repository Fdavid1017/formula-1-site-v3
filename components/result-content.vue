<template>
  <div class="outer-container fill-width p-0 m-0">
    <!--  Navigation bar  -->
    <div class="nav-container fill-width d-flex justify-center">
      <v-row class="d-flex">
        <v-col class="d-flex justify-center align-middle">
          <div class="nav-item" :class="{highlighted:tabIndex==0}" @click="tabIndex=0">
            FP1
          </div>
        </v-col>
        <v-col class="d-flex justify-center align-middle">
          <div class="nav-item" :class="{highlighted:tabIndex==1}" @click="tabIndex=1">
            FP2
          </div>
        </v-col>
        <v-col class="d-flex justify-center align-middle">
          <div class="nav-item" :class="{highlighted:tabIndex==2}" @click="tabIndex=2">
            FP3
          </div>
        </v-col>
        <v-col class="d-flex justify-center align-middle">
          <div class="nav-item" :class="{highlighted:tabIndex==3}" @click="tabIndex=3">
            Qualify
          </div>
        </v-col>
        <v-col class="d-flex justify-center align-middle">
          <div class="nav-item" :class="{highlighted:tabIndex==4}" @click="tabIndex=4">
            Race
          </div>
        </v-col>
        <v-col class="d-flex justify-center align-middle">
          <div class="nav-item" :class="{highlighted:tabIndex==5}" @click="tabIndex=5">
            Circuit
          </div>
        </v-col>
      </v-row>
    </div>

    <!--    Main content-->
    <div class="main-content">
      <v-container>
        <v-tabs-items v-model="tabIndex">
          <v-tab-item>
            <result-tab
              v-if="practice1 && !compare"
              :session-result="practice1"
              :is-practice="true"
              :session-date="weekendSchedule.fp1"
              @compareClick="onCompareClick"
            />
            <compare-stats
              v-else-if="compare==='timings'"
              :gp-name="circuit.country"
              session-type="FP1"
              @compareClick="onCompareClick"
            />
            <compare-car-data
              v-else-if="compare==='carData'"
              :gp-name="circuit.country"
              session-type="FP1"
              @compareClick="onCompareClick"
            />
            <div v-else class="upcoming-race fill-width fill-height">
              <v-row class="fill-width">
                <v-col class="fill-width d-flex justify-center">
                  {{ sessionTimeString(weekendSchedule.fp1, true) }}
                </v-col>
              </v-row>
              <v-row class="fill-width">
                <v-col class="fill-width d-flex justify-center">
                  Looks like this session is still ahead of us!
                </v-col>
              </v-row>
              <v-row class="fill-width">
                <v-col class="fill-width d-flex justify-center">
                  Come back after the session ends!
                </v-col>
              </v-row>
            </div>
          </v-tab-item>
          <v-tab-item>
            <result-tab
              v-if="practice2 && !compare"
              :session-result="practice2"
              :is-practice="true"
              :session-date="weekendSchedule.fp2"
              @compareClick="onCompareClick"
            />
            <compare-stats
              v-else-if="compare==='timings'"
              :gp-name="circuit.country"
              session-type="FP2"
              @compareClick="onCompareClick"
            />
            <compare-car-data
              v-else-if="compare==='carData'"
              :gp-name="circuit.country"
              session-type="FP2"
              @compareClick="onCompareClick"
            />
            <div v-else class="upcoming-race fill-width fill-height">
              <v-row class="fill-width">
                <v-col class="fill-width d-flex justify-center">
                  {{ sessionTimeString(weekendSchedule.fp2, true) }}
                </v-col>
              </v-row>
              <v-row class="fill-width">
                <v-col class="fill-width d-flex justify-center">
                  Looks like this session is still ahead of us!
                </v-col>
              </v-row>
              <v-row class="fill-width">
                <v-col class="fill-width d-flex justify-center">
                  Come back after the session ends!
                </v-col>
              </v-row>
            </div>
          </v-tab-item>
          <v-tab-item>
            <result-tab
              v-if="practice3 && !compare"
              :session-result="practice3"
              :is-practice="true"
              :session-date="weekendSchedule.fp3"
              @compareClick="onCompareClick"
            />
            <compare-stats
              v-else-if="compare==='timings'"
              :gp-name="circuit.country"
              session-type="FP3"
              @compareClick="onCompareClick"
            />
            <compare-car-data
              v-else-if="compare==='carData'"
              :gp-name="circuit.country"
              session-type="FP3"
              @compareClick="onCompareClick"
            />
            <div v-else class="upcoming-race fill-width fill-height">
              <v-row class="fill-width">
                <v-col class="fill-width d-flex justify-center">
                  {{ sessionTimeString(weekendSchedule.fp3, true) }}
                </v-col>
              </v-row>
              <v-row class="fill-width">
                <v-col class="fill-width d-flex justify-center">
                  Looks like this session is still ahead of us!
                </v-col>
              </v-row>
              <v-row class="fill-width">
                <v-col class="fill-width d-flex justify-center">
                  Come back after the session ends!
                </v-col>
              </v-row>
            </div>
          </v-tab-item>
          <v-tab-item>
            <qualifying-result-tab
              v-if="qualifying && !compare"
              :session-result="qualifying"
              :session-date="weekendSchedule.qualifying"
              @compareClick="onCompareClick"
            />
            <compare-stats
              v-else-if="compare==='timings'"
              :gp-name="circuit.country"
              session-type="Q"
              @compareClick="onCompareClick"
            />
            <compare-car-data
              v-else-if="compare==='carData'"
              :gp-name="circuit.country"
              session-type="Q"
              @compareClick="onCompareClick"
            />
            <div v-else class="upcoming-race fill-width fill-height">
              <v-row class="fill-width">
                <v-col class="fill-width d-flex justify-center">
                  {{ sessionTimeString(weekendSchedule.qualifying, true) }}
                </v-col>
              </v-row>
              <v-row class="fill-width">
                <v-col class="fill-width d-flex justify-center">
                  Looks like this session is still ahead of us!
                </v-col>
              </v-row>
              <v-row class="fill-width">
                <v-col class="fill-width d-flex justify-center">
                  Come back after the session ends!
                </v-col>
              </v-row>
            </div>
          </v-tab-item>
          <v-tab-item>
            <result-tab
              v-if="race && compare===''"
              :session-result="race"
              :session-date="weekendSchedule.race"
              @compareClick="onCompareClick"
            />
            <compare-stats
              v-else-if="compare==='timings'"
              :gp-name="circuit.country"
              session-type="R"
              @compareClick="onCompareClick"
            />
            <compare-car-data
              v-else-if="compare==='carData'"
              :gp-name="circuit.country"
              session-type="R"
              @compareClick="onCompareClick"
            />
            <div v-else class="upcoming-race fill-width fill-height">
              <v-row class="fill-width">
                <v-col class="fill-width d-flex justify-center">
                  {{ sessionTimeString(weekendSchedule.race) }}
                </v-col>
              </v-row>
              <v-row class="fill-width">
                <v-col class="fill-width d-flex justify-center">
                  Looks like this session is still ahead of us!
                </v-col>
              </v-row>
              <v-row class="fill-width">
                <v-col class="fill-width d-flex justify-center">
                  Come back after the session ends!
                </v-col>
              </v-row>
            </div>
          </v-tab-item>
          <v-tab-item class="fill-width fill-height">
            <circuit-infos :circuit="circuit" />
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultContent',
  props: {
    practice1: {
      type: Object,
      default () {
        return {}
      }
    },
    practice2: {
      type: Object,
      default () {
        return {}
      }
    },
    practice3: {
      type: Object,
      default () {
        return {}
      }
    },
    qualifying: {
      type: Object,
      default () {
        return {}
      }
    },
    race: {
      type: Object,
      default () {
        return {}
      }
    },
    circuit: {
      type: Object,
      default () {
        return {}
      }
    },
    weekendSchedule: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      tabIndex: 0,
      compare: ''
    }
  },
  methods: {
    onCompareClick (value) {
      this.compare = value
    },
    sessionTimeString (sessionTime, isPractice = false) {
      const date = new Date(sessionTime)

      let options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }

      if (isPractice) {
        options = {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric'
        }
      }

      return date.toLocaleDateString('en-us', options)
    }
  }
}
</script>

<style lang="scss" scoped>
.outer-container {
  transform: translateY(-0.8em);
  overflow: hidden;
  height: 100%;
  max-height: 100%;
}

.nav-container {
  padding: 0;
  margin: 0;
  height: auto;
  background-color: #454558;
  -webkit-box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.35);
  transform: translateY(-0.6em);
  position: relative;
  z-index: 10;

  .row {
    padding-top: 1em;
    padding-bottom: 0.5em;
    margin: 0;
    width: 50%;
    max-width: 50%;
    font-family: "Formula1 Bold";
    font-size: 1.5em;
    color: white;

    .col {
      margin: 0;
      padding: 0;

      .nav-item {
        cursor: pointer;
        transition: color 0.25s;
        padding-right: 0.3em;

        &:hover {
          color: #7f7f7f;
        }
      }

      .highlighted {
        box-shadow: 7px -7px 0px 0px $F1-red;
        -webkit-box-shadow: 7px -7px 0px 0px $F1-red;
        -moz-box-shadow: 7px -7px 0px 0px $F1-red;

        border-radius: 0px 10px 0px 0px;
        -webkit-border-radius: 0px 10px 0px 0px;
        -moz-border-radius: 0px 10px 0px 0px;
      }
    }
  }

}

.main-content {
  margin: 0;
  padding: 1em 0 0;
  width: 100%;
  height: 100%;
  transform: translateY(-0.7em);
  background-color: #393948;

  .container {

    .v-tabs-items {
      background-color: transparent !important;

      .upcoming-race {
        color: white;
        font-family: "Formula1 Bold";
        font-size: 2em;
      }
    }
  }
}

</style>
