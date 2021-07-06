<template>
  <v-container fluid class="container grow d-flex flex-column flex-nowrap">
    <div v-if="$fetchState.pending">
      Fetching data from the server! Please wait...
    </div>
    <template v-else>
      <race-banner style="margin: 0; padding: 0" :circuit="circuit" />

      <v-row class="main-container">
        <v-col class="left">
          1
        </v-col>
        <v-col class="right d-flex align-center">
          <v-row class="fill-height">
            <v-col cols="3 d-flex justify-center align-center">
              <div class="m-0 p-0 fill-width drivers-container">
                <div class="text-uppercase">
                  Position
                </div>
                <div class="drivers">
                  <template v-for="(item, index) in drivers">
                    <div
                      :key="index"
                      class="driver-container d-flex align-center"
                      :style="`background-color: ${index%2===0?'#383847':'#4D4D62'}`"
                      @click="onDriverSelect(item.driver)"
                    >
                      <div
                        class="driver-number"
                        :class="activeDriver===item.driver?'driver-number-active':' driver-number-disabled'"
                      >
                        {{ index + 1 }}
                      </div>
                      <div
                        class="driver-divider"
                        :style="`background-color: ${item.driver.constructor.color_scheme.primary}`"
                      />
                      <div class="text-uppercase driver-code">
                        {{ item.driver.code }}
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </v-col>
            <div class="divider" />
            <v-col>
              <v-row>
                <v-col class="d-flex justify-start">
                  <div>
                    <div
                      class="telemetry-driver"
                      :style="`border-left: 0.4em solid ${activeDriver.constructor.color_scheme.primary}`"
                    >
                      <p class="driver-name">
                        {{ activeDriver.family_name }}
                      </p>
                      <p class="team-name">
                        {{ activeDriver.constructor.name }}
                      </p>
                    </div>
                  </div>
                </v-col>
                <v-col class="d-flex justify-end">
                  <div class="top-infos">
                    <p class="lap-time">
                      {{ getLapTime }}
                    </p>
                    <img class="tire" src="~static/tires/soft.svg">
                  </div>
                </v-col>
              </v-row>
              <v-row class="">
                <v-col class="d-flex justify-center chart-container">
                  <vue-svg-gauge
                    :start-angle="-140"
                    :end-angle="140"
                    :value="getSpeed"
                    :separator-step="60"
                    :separator-thickness="0.5"
                    :min="0"
                    :max="360"
                    gauge-color="#0159CD"
                    base-color="#1E1D2A"
                    :scale-interval="0"
                    :inner-radius="75"
                  >
                    <div class="inner-gauge">
                      <vue-svg-gauge
                        :start-angle="-140"
                        :end-angle="45"
                        :value="getThrotle"
                        :separator-step="60"
                        :separator-thickness="0.5"
                        :min="0"
                        :max="100"
                        gauge-color="#11AF02"
                        base-color="#1E1D2A"
                        :scale-interval="0"
                        :inner-radius="75"
                      >
                        <div class="second-inner-gauge">
                          <vue-svg-gauge
                            :start-angle="50"
                            :end-angle="140"
                            :value="getBreak"
                            :separator-step="60"
                            :separator-thickness="0.5"
                            :min="0"
                            :max="100"
                            gauge-color="#E10600"
                            base-color="#1E1D2A"
                            :scale-interval="0"
                            :inner-radius="75"
                          >
                            <div class="inner-values">
                              <div class="speed">
                                <div class="value">
                                  {{ getSpeed }}
                                </div>
                                <div class="unit text-uppercase">
                                  km/h
                                </div>
                              </div>
                              <div class="rpm">
                                <div class="value">
                                  {{ getRpm }}
                                </div>
                                <div class="unit text-uppercase">
                                  rpm
                                </div>
                              </div>
                            </div>
                          </vue-svg-gauge>
                        </div>
                      </vue-svg-gauge>
                    </div>
                  </vue-svg-gauge>

                  <div class="drs text-uppercase" :style="'background-color:'+(hasDrs?'#ffe600':'#1E1D2A')">
                    DRS
                  </div>

                  <div class="gear text-uppercase">
                    gear {{ currentGear }}
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
import RaceBanner from '@/components/RaceBanner'
import { clamp } from '@/plugins/clamp'
import moment from 'moment'

export default {
  name: 'Session',
  components: {
    RaceBanner
  },
  asyncData ({
    params,
    redirect
  }) {
    const round = params.id
    const session = params.session

    if (round === undefined) {
      console.log('No ID given, redirecting to the Home page')
      redirect('/')
    }

    if (session === undefined) {
      console.log('No Session given, redirecting to the Home page')
      redirect('/')
    }

    return {
      round,
      session
    }
  },
  data () {
    return {
      pageStartValue: 0,
      pageSize: 5,
      drivers: [],
      carData: null,
      carPos: null,
      circuit: null,
      longestCarPositionStream: {
        code: '',
        lapIndex: 0
      },
      activeDriver: {
        code: 'VER',
        constructor: {
          color_scheme: {
            primary: '#12142d',
            secondary: '#CEB735',
            tertiary: '#ff0126'
          },
          constructor_id: 'red_bull',
          name: 'Red Bull'
        },
        driver_id: 'max_verstappen',
        family_name: 'Verstappen',
        given_name: 'Max',
        number: '33'
      },
      driverIndexTable: {}
    }
  },
  async fetch () {
    const circuit = await fetch(`http://localhost:5000/api/gpCircuit/${this.round}`).then(res => res.json())
    if (circuit.circuit_id) {
      this.circuit = circuit
    }

    const drivers = await fetch('http://localhost:5000/api/driverStandings?order=constructor').then(res => res.json())
    if (drivers) {
      this.drivers = drivers
    }
    const pageSize = this.pageStartValue + this.pageSize
    const carPosition = await fetch(`http://localhost:5000/api/allCarPosition/${this.round}/${this.session}?from=${this.pageStartValue}&till=${pageSize}`).then(res => res.json())

    if (!carPosition.error) {
      this.carData = carPosition.carsData

      let longestDataStream = 0
      for (const carDataKey in this.carData) {
        this.carData[carDataKey].splice(0, 1)
        for (let i = 0; i < this.carData[carDataKey].length; i++) {
          if (this.carData[carDataKey][i].SessionTime.length > longestDataStream) {
            longestDataStream = this.carData[carDataKey][i].SessionTime.length
            this.longestCarPositionStream = {
              code: carDataKey,
              lapIndex: i
            }
          }
        }
      }
      //
      //   console.log(`Longest car data: ${this.longestCarPositionStream.code} in lap ${this.longestCarPositionStream.lapIndex}`)
      // const s = '0 days 00:47:53.078000'.split(' ')[2]
      // console.log(s)
      // const d1 = moment.duration('00:47:54.008000')
      // const d2 = moment.duration('00:47:53.078000')
      // console.log(Math.abs(d1 - d2))
    }
  },
  computed: {
    getLapTime () {
      return '0:0.000'
    },
    getSpeed () {
      return clamp(246 * this.temp, 0, 360)
    },
    getThrotle () {
      return clamp(42 * this.temp, 0, 100)
    },
    getBreak () {
      return clamp(14 * this.temp, 0, 100)
    },
    getRpm () {
      return clamp(12471 * this.temp, 10000, 18000)
    },
    hasDrs () {
      return this.temp % 2 === 0
    },
    currentGear () {
      return clamp(2 * this.temp, 0, 8)
    }
  },
  methods: {
    onDriverSelect (driver) {
      this.activeDriver = driver
    },
    valueToPercent (value, max = 360) {
      return (value * 100) / max
    },
    getDurationStringFromTime (time) {
      return time.split(' ')[2]
    },
    getClosestTimes (time, driverCode, startIndex = 0) {
      time = moment.duration(this.getDurationStringFromTime(time))
      // const d1 = moment.duration('00:47:56.838000')
      // const d2 = moment.duration('00:47:53.078000')
      let closestTime = Math.abs(time - moment.duration(this.getDurationStringFromTime(this.carData[driverCode].SessionTime[startIndex])))
      let closestIndex = startIndex

      for (let i = startIndex; i < this.carData[driverCode].SessionTime.length && closestTime > Math.abs(time - moment.duration(this.getDurationStringFromTime(this.carData[driverCode].SessionTime[startIndex]))); i++) {
        closestTime = Math.abs(time - moment.duration(this.getDurationStringFromTime(this.carData[driverCode].SessionTime[startIndex])))
        closestIndex = i
      }

      return closestIndex
      // for (let i = startIndex + 1; i < this.carData[driverCode].SessionTime.length && (closestTime > moment.duration(time - this.carData[driverCode].SessionTime[i])); i++) {
      //   if (closestTime > moment.duration(time - this.carData[driverCode].SessionTime[i])) {
      //     closestTime = moment.duration(time - this.carData[driverCode].SessionTime[i])
      //     closestIndex = i
      //   }
      // }
      //
      // return closestIndex
    },
    async loopThroughTime () {
      for (let i = 0; i < this.carData[this.longestCarPositionStream].SessionTime.length; i++) {
        console.log(this.getClosestTimes(this.carData[this.longestCarPositionStream].SessionTime[i], 'VER'))
        const d1 = moment.duration(this.getDurationStringFromTime(this.carData[this.longestCarPositionStream].SessionTime[i]))
        const d2 = moment.duration(this.getDurationStringFromTime(this.carData[this.longestCarPositionStream].SessionTime[i + 1]))
        await this.sleep(Math.abs(d1 - d2))
      }
    },
    sleep (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0;
  margin: 0;
  color: white;

  svg {
    padding: 0;
    margin: 0;
  }

  .main-container {
    padding: 0;
    margin: 0;
    overflow: hidden;

    .left {
      background-color: #383847;
    }

    .right {
      background-color: #414153;
      -webkit-box-shadow: -10px 0px 15px 5px rgba(0, 0, 0, 0.2);
      box-shadow: -10px 0px 15px 5px rgba(0, 0, 0, 0.2);

      font-size: 1.5em;

      .drivers-container {
        .drivers {
          width: 100%;
          height: 15em;
          overflow: auto;
          cursor: pointer;

          .driver-container {
            padding-top: 0.15em;
            padding-bottom: 0.15em;

            .driver-number,
            .driver-divider,
            .driver-code {
              float: left;
            }

            .driver-number {
              margin-right: 0.5em;
              border-radius: 0 15px 0 0;
              padding: 0.3em;
              font-size: 0.8em;
              min-width: 2.5em;
              text-align: center;
            }

            .driver-number-active {
              background-color: $F1-red;
              border: $F1-red solid;
            }

            .driver-number-disabled {
              background-color: transparent;
              border: transparent solid;
            }

            .driver-divider {
              height: 1em;
              width: 0.3em;
              margin-right: 0.5em;
            }

            .driver-code {
            }
          }

          /* width */
          &::-webkit-scrollbar {
            width: 10px;
          }

          /* Track */
          &::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0);
          }

          /* Handle */
          &::-webkit-scrollbar-thumb {
            background: #383847;
            border-radius: 25px;
          }

          /* Handle on hover */
          &::-webkit-scrollbar-thumb:hover {
            background: #292934;
          }
        }
      }

      .telemetry-driver {
        padding-left: 0.35em;

        p {
          padding: 0;
          margin: 0;
          line-height: 1.1em;
          text-transform: capitalize;

          &.driver-name {
            font-size: 1.3em;
          }

          &.team-name {
            font-size: 1.1em;
            color: #c3c3c9;
          }
        }
      }

      .top-infos {
        padding-right: 1em;

        .lap-time {
          padding: 0;
          margin: 0;
          line-height: 2em;
        }

        .tire {
          height: 3em;
          float: right;
        }
      }

      .chart-container {
        margin: 0;
        padding-top: 0;
        padding-left: 2em;
        padding-right: 2em;
        overflow: visible;

        .inner-gauge {
          height: 70%;
          width: 70%;
          margin: auto;
          margin-top: 1.25em;
          overflow: visible;

          .second-inner-gauge {
            height: 100%;
            width: 100%;
            margin: auto;

            .inner-values {
              height: 100%;
              width: 100%;
              margin-top: 2em;
              text-align: center;

              .speed,
              .rpm {
                line-height: 1em;

                .value {
                  font-size: 1.25em;
                }

                .unit {
                  font-size: 0.65em;
                  color: #c3c3c9;
                }
              }

              .rpm {
                margin-top: 0.5em;
              }
            }
          }
        }

        .drs {
          position: absolute;
          bottom: 7.5%;
          padding: 0.15em 0.75em 0.3em;
          -webkit-border-radius: 25px 25px 75px 75px;
          -moz-border-radius: 25px 25px 75px 75px;
          border-radius: 25px 25px 75px 75px;
        }

        .gear {
          position: absolute;
          bottom: 3%;
        }
      }
    }

    .divider {
      background-color: #383847;
      width: 0.4em;
      height: 85%;
      margin-top: auto;
      margin-bottom: auto;
    }
  }
}
</style>
