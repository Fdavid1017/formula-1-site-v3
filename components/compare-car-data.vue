<template>
  <v-container>
    <v-row class="fill-width">
      <v-col class="d-flex justify-end align-center">
        <div class="btn" @click="$emit('compareClick','')">
          Back
        </div>
      </v-col>
      <v-col class="d-flex justify-end align-center">
        Compare
      </v-col>
      <v-col class="d-flex align-center">
        <v-select
          v-model="selectType"
          :items="selectTypeItems"
          color="#E10600"
          label="Compare"
          dense
          outlined
          hide-details
        />
      </v-col>
    </v-row>
    <v-row class="fill-width">
      <v-col class="d-flex justify-center">
        <v-row class="fill-width">
          <v-col class="d-flex justify-end align-center">
            Driver 1
          </v-col>
          <v-col class="d-flex justify-start align-center">
            <v-select
              v-model="driver1"
              :items="getDriver1"
              color="#E10600"
              label="Driver 1"
              dense
              outlined
              hide-details
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col class="d-flex justify-center">
        <div class="btn" @click="compareClick()">
          Compare
        </div>
      </v-col>
      <v-col class="d-flex justify-center">
        <v-row class="fill-width">
          <v-col class="d-flex justify-end align-center">
            Driver 2
          </v-col>
          <v-col class="d-flex justify-start align-center">
            <v-select
              v-model="driver2"
              :items="getDriver2"
              color="#E10600"
              label="Driver 2"
              dense
              outlined
              hide-details
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="fill-width">
      <v-col>
        <v-slider
          v-model="lapNumber"
          step="1"
          label="Lap"
          thumb-label
          ticks
          :min="lapMin"
          :max="lapMax"
          :disabled="lapSliderState"
        />
      </v-col>
    </v-row>
    <v-row class="fill-width">
      <v-col class="note d-flex justify-center">
        Note: Some data may be incorrect depending on the available information!
      </v-col>
    </v-row>
    <div class="chart-container">
      <apexchart width="100%" type="line" :options="options" :series="series" />
    </div>
  </v-container>
</template>

<script>
import apexchart from 'vue-apexcharts'

export default {
  name: 'CompareCarData',
  components: { apexchart },
  props: {
    gpName: {
      type: String,
      default: ''
    },
    sessionType: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      // Select
      selectTypeItems: [
        'Brake', 'Throttle', 'RPM', 'Speed', 'DRS', 'Gear'
      ],
      selectType: 'Speed',

      // Drivers select
      driver1: null,
      driver2: null,
      previousDriver1: null,
      previousDriver2: null,

      driver1LapData: null,
      driver2LapData: null,

      // Chart
      options: {
        chart: {
          id: 'results'
        },
        noData: {
          text: 'Loading...'
        },
        legend: {
          show: true,
          position: 'left',
          fontFamily: 'Formula1 Bold',
          labels: {
            useSeriesColors: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          dashArray: []
        },
        tooltip: {
          x: {}
        }
      },
      series: [],

      // Lap slider
      lapNumber: 1,
      lapMin: 1,
      lapMax: 2,

      // Others
      drivers: []
    }
  },
  async fetch () {
    const drivers = await fetch('http://localhost:5000/api/drivers').then(res => res.json())
    this.drivers = drivers
  },
  computed: {
    getDriver1 () {
      return this.getDriverNames(this.driver2)
    },
    getDriver2 () {
      return this.getDriverNames(this.driver1)
    },
    lapSliderState () {
      return !this.driver1LapData || !this.driver2LapData
    }
  },
  watch: {
    selectType (val) {
      switch (val) {
        case 'Brake':
          // eslint-disable-next-line no-undef
          ApexCharts.exec('results', 'updateOptions', {
            tooltip: {
              y: {
                formatter (value, series) {
                  return `${value} %`
                }
              }
            }
          }, false, true)
          break
        case 'Throttle':
          // eslint-disable-next-line no-undef
          ApexCharts.exec('results', 'updateOptions', {
            tooltip: {
              y: {
                formatter (value, series) {
                  return `${value} %`
                }
              }
            }
          }, false, true)
          break
        case 'RPM':
          // eslint-disable-next-line no-undef
          ApexCharts.exec('results', 'updateOptions', {
            tooltip: {
              y: {
                formatter (value, series) {
                  return `${value}`
                }
              }
            }
          }, false, true)
          break
        case 'Speed':
          // eslint-disable-next-line no-undef
          ApexCharts.exec('results', 'updateOptions', {
            tooltip: {
              y: {
                formatter (value, series) {
                  return `${value} km/h`
                }
              }
            }
          }, false, true)
          break
        case 'DRS':
          // eslint-disable-next-line no-undef
          ApexCharts.exec('results', 'updateOptions', {
            tooltip: {
              y: {
                formatter (value, series) {
                  return value === 8 ? 'Active' : 'Off'
                }
              }
            }
          }, false, true)
          break
        case 'Gear':
          // eslint-disable-next-line no-undef
          ApexCharts.exec('results', 'updateOptions', {
            tooltip: {
              y: {
                formatter (value, series) {
                  return `${value}`
                }
              }
            }
          }, false, true)
          break
        default:
      }
    }
  },
  methods: {
    getDriverName (driver) {
      return `${driver.given_name} ${driver.family_name}`
    },
    getDriverNames (exclude = null) {
      const drivers = this.drivers
      const names = []

      for (let i = 0; i < drivers.length; i++) {
        names.push(this.getDriverName(drivers[i]))
      }

      if (!exclude) {
        return names
      }

      const index = names.indexOf(exclude)
      if (index > -1) {
        names.splice(index, 1)
        return names
      }
      return names
    },
    getDriverByName (name) {
      const drivers = this.drivers

      for (let i = 0; i < drivers.length; i++) {
        if (this.getDriverName(drivers[i]) === name) {
          return drivers[i]
        }
      }
    },
    async compareClick () {
      if (!this.driver1 || !this.driver2) {
        console.log('Select 2 driver')

        this.$store.dispatch('snackbar/setText', 'Select 2 driver to compare!')
        this.$store.dispatch('snackbar/show')

        return
      }

      const d1 = this.getDriverByName(this.driver1)
      const d2 = this.getDriverByName(this.driver2)

      if (this.driver1 !== this.previousDriver1) {
        console.log('Getting data for driver1 ' + d1.code)
        const d1Laps = await this.$axios.$get(`api/carData/${this.gpName}/${this.sessionType}/${d1.code}`)
        this.driver1LapData = d1Laps.carData
      }

      if (this.driver2 !== this.previousDriver2) {
        console.log('Getting data for driver2 ' + d2.code)
        const d2Laps = await this.$axios.$get(`api/carData/${this.gpName}/${this.sessionType}/${d2.code}`)
        this.driver2LapData = d2Laps.carData
      }

      this.previousDriver1 = this.driver1
      this.previousDriver2 = this.driver2

      this.lapMax = Math.max(this.driver1LapData.length, this.driver2LapData.length)

      let data1 = null
      let data2 = null
      switch (this.selectType) {
        case 'Brake':
          data1 = this.driver1LapData[this.lapNumber].Brake
          data2 = this.driver2LapData[this.lapNumber].Brake
          break
        case 'Throttle':
          data1 = this.driver1LapData[this.lapNumber].Throttle
          data2 = this.driver2LapData[this.lapNumber].Throttle
          break
        case 'RPM':
          data1 = this.driver1LapData[this.lapNumber].RPM
          data2 = this.driver2LapData[this.lapNumber].RPM
          break
        case 'Speed':
          data1 = this.driver1LapData[this.lapNumber].Speed
          data2 = this.driver2LapData[this.lapNumber].Speed
          break
        case 'DRS':
          data1 = this.driver1LapData[this.lapNumber].DRS
          data2 = this.driver2LapData[this.lapNumber].DRS
          break
        case 'Gear':
          data1 = this.driver1LapData[this.lapNumber].nGear
          data2 = this.driver2LapData[this.lapNumber].nGear
          break
        default:
      }

      // console.log(data1)
      // console.log(data2)

      // eslint-disable-next-line no-undef
      ApexCharts.exec('results', 'updateOptions', {
        colors: [d1.constructor.color_scheme.primary, d2.constructor.color_scheme.primary]
      }, false, true)

      const dash1 = 0
      const dash2 = d1.constructor.constructor_id === d2.constructor.constructor_id ? 5 : 0

      // eslint-disable-next-line no-undef
      ApexCharts.exec('results', 'updateOptions', {
        stroke: {
          // curve: 'smooth',
          dashArray: [dash1, dash2]
        }
      }, false, true)

      this.series = [
        {
          name: d1.code,
          data: data1
        },
        {
          name: d2.code,
          data: data2
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 100%;
  width: 100%;
  font-family: "Formula1 Bold";
  color: white;

  .note {
    color: $F1-red;
    font-size: 1em;
  }

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

  .chart-container {
    color: #3a3947;
  }

  .driver-divider-line {
    height: 100%;
    width: 0.5em;
  }

  .drivers-row-primary,
  .drivers-row-secondary {
    cursor: pointer;
    position: relative;

    .line-through {
      position: absolute;
      background-color: #cbcbcb;
      width: 50%;
      height: 8%;
      top: 45%;
      left: 25%;
    }
  }

  .drivers-row-primary {
    background-color: #323242;
  }

  .drivers-row-secondary {
    background-color: #4D4D62;
  }

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
}
</style>
