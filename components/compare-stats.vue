<template>
  <v-container>
    <v-row class="fill-width">
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
      <v-col class="d-flex align-center">
        <v-select
          v-if="selectType==='Sector'"
          v-model="selectSector"
          :items="selectSectorItems"
          color="#E10600"
          label="Sector"
          dense
          outlined
          hide-details
        />
        <v-select
          v-else-if="selectType==='Speed Trap'"
          v-model="selectSpeedTrap"
          :items="selectSpeedTrapItems"
          color="#E10600"
          label="Speed trap"
          dense
          outlined
          hide-details
        />
      </v-col>
    </v-row>
    <v-row class="fill-width">
      <v-col class="d-flex justify-center">
        Chart Lines mode
      </v-col>
    </v-row>
    <v-row class="fill-width">
      <v-col class="d-flex justify-end align-center">
        Smooth
      </v-col>
      <v-col cols="1" class="d-flex justify-center align-center">
        <v-switch
          v-model="chartLinesStepped"
          inset
          color="#E10600"
        />
      </v-col>
      <v-col class="d-flex justify-start align-center">
        Stepped
      </v-col>
    </v-row>
    <v-row class="fill-width">
      <v-col class="d-flex justify-center">
        <div class="btn" @click="showAllDriver()">
          Show all
        </div>
      </v-col>
      <v-col class="d-flex justify-center">
        <div class="btn" @click="hideAllDriver()">
          Hide all
        </div>
      </v-col>
    </v-row>
    <div class="chart-container">
      <apexchart width="100%" type="line" :options="options" :series="series" />
    </div>
  </v-container>
</template>

<script>
import apexchart from 'vue-apexcharts'
import { msToTimeString } from '@/plugins/msToTime'

export default {
  name: 'CompareStats',
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
      // Lap range slider
      lapRange: [1, 2],
      lapRangeMin: 1,
      lapRangeMax: 2,

      // Select
      selectTypeItems: [
        'Lap Time', 'Sector', 'Speed Trap'
      ],
      selectSectorItems: [
        'Sector 1', 'Sector 2', 'Sector 3'
      ],
      selectSpeedTrapItems: [
        'Sector 1 Speed Trap', 'Sector 2 Speed Trap', 'Finish Line', 'Longest Straight Speed Trap'
      ],
      selectType: 'Lap Time',
      selectSector: 'Sector 1',
      selectSpeedTrap: 'Finish Line',

      // Chart
      options: {
        chart: {
          id: 'results'
        },
        xaxis: {
          labels: {
            formatter (value, timestamp) {
              return 'Lap: ' + value
            }
          }
        },
        yaxis: {
          show: true,
          labels: {
            formatter (value, timestamp) {
              return msToTimeString(value)
            }
          }
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
        }
      },
      series: [],

      // Others
      lapsData: [],
      drivers: [],
      driversToExclude: [],
      chartLinesStepped: false
    }
  },
  async fetch () {
    const laps = await fetch(`http://localhost:5000/api/laps/${this.gpName}/${this.sessionType}`).then(res => res.json())
    const drivers = await fetch('http://localhost:5000/api/drivers').then(res => res.json())

    this.lapsData = this.convertLapData(laps)
    this.drivers = drivers
    this.setChartData()
  },
  watch: {
    selectType (val) {
      if (val === 'Speed Trap') {
        // eslint-disable-next-line no-undef
        ApexCharts.exec('results', 'updateOptions', {
          yaxis: {}
        }, false, true)
      } else {
        // eslint-disable-next-line no-undef
        ApexCharts.exec('results', 'updateOptions', {
          yaxis: {
            labels: {
              formatter (value, timestamp) {
                return msToTimeString(value)
              }
            }
          }
        }, false, true)
      }

      this.setChartData()
    },
    selectSector (val) {
      this.setChartData()
    },
    selectSpeedTrap (val) {
      this.setChartData()
    },
    lapRange (val) {
      this.setChartData()
    },
    chartLinesStepped (val) {
      // eslint-disable-next-line no-undef
      ApexCharts.exec('results', 'updateOptions', {
        stroke: {
          curve: val ? 'stepline' : 'smooth'
        }
      }, false, true)
    }
  },
  methods: {
    getDriver (driverCode) {
      return this.drivers.filter(d => d.code === driverCode)[0]
    },
    showAllDriver () {
      for (const driverCode in this.lapsData) {
        // eslint-disable-next-line no-undef
        ApexCharts.exec('results', 'showSeries', driverCode, false, true)
      }
    },
    hideAllDriver () {
      for (const driverCode in this.lapsData) {
        // eslint-disable-next-line no-undef
        ApexCharts.exec('results', 'hideSeries', driverCode, false, true)
      }
    },
    convertLapData (laps) {
      const temp = []
      for (let i = 0; i < Object.keys(laps.Time).length; i++) {
        if (laps.Driver[i.toString()] !== null && laps.LapTime[i.toString()] != null) {
          const o = {
            Time: laps.Time[i.toString()],
            DriverNumber: laps.DriverNumber[i.toString()],
            LapTime: laps.LapTime[i.toString()],
            LapNumber: laps.LapNumber[i.toString()],
            Sector1Time: laps.Sector1Time[i.toString()],
            Sector2Time: laps.Sector2Time[i.toString()],
            Sector3Time: laps.Sector3Time[i.toString()],
            SpeedI1: laps.SpeedI1[i.toString()],
            SpeedI2: laps.SpeedI2[i.toString()],
            SpeedFL: laps.SpeedFL[i.toString()],
            SpeedST: laps.SpeedST[i.toString()],
            Compound: laps.Compound[i.toString()],
            TyreLife: laps.TyreLife[i.toString()],
            Team: laps.Team[i.toString()],
            Driver: laps.Driver[i.toString()],
            TrackStatus: laps.TrackStatus[i.toString()]
          }
          temp.push(o)
        }
      }

      temp.sort((a, b) => (a.Team > b.Team) ? 1 : ((b.Team > a.Team) ? -1 : 0))
      const grouped = this._.groupBy(temp, 'Driver')
      return grouped
    },
    setChartData () {
      if (!this.lapsData) {
        return {}
      }

      const grouped = this.lapsData
      const series = []
      const newColors = []
      const newDashArray = []
      let highestLapNumber = 0

      const constructorsIncluded = []

      for (const driverCode in grouped) {
        const row = grouped[driverCode]

        newColors.push(this.getDriver(driverCode).constructor.color_scheme.primary)

        const driver = this.getDriver(driverCode)
        if (constructorsIncluded.includes(driver.constructor.constructor_id)) {
          newDashArray.push(5)
        } else {
          newDashArray.push(0)
          constructorsIncluded.push(driver.constructor.constructor_id)
        }

        const seriesItem = {
          name: driverCode,
          data: []
        }

        for (const rowIndex in row) {
          const rowItem = row[rowIndex]

          if (highestLapNumber < rowItem.LapNumber) {
            highestLapNumber = rowItem.LapNumber
          }

          if (this.selectType === 'Lap Time' && rowItem.LapTime !== null) {
            seriesItem.data.push(rowItem.LapTime)
          } else if (this.selectType === 'Sector') {
            if (this.selectSector === 'Sector 1' && rowItem.Sector1Time !== null) {
              seriesItem.data.push(rowItem.Sector1Time)
            } else if (this.selectSector === 'Sector 2' && rowItem.Sector2Time !== null) {
              seriesItem.data.push(rowItem.Sector2Time)
            } else if (this.selectSector === 'Sector 3' && rowItem.Sector3Time !== null) {
              seriesItem.data.push(rowItem.Sector3Time)
            }
          } else if (this.selectType === 'Speed Trap') {
            if (this.selectSector === 'Sector 1 Speed Trap' && rowItem.SpeedI1 !== null) {
              seriesItem.data.push(rowItem.SpeedI1)
            } else if (this.selectSpeedTrap === 'Sector 2 Speed Trap' && rowItem.SpeedI2 !== null) {
              seriesItem.data.push(rowItem.SpeedI2)
            } else if (this.selectSpeedTrap === 'Finish Line' && rowItem.SpeedFL !== null) {
              seriesItem.data.push(rowItem.SpeedFL)
            } else if (this.selectSpeedTrap === 'Longest Straight Speed Trap' && rowItem.SpeedST !== null) {
              seriesItem.data.push(rowItem.SpeedST)
            }
          }
        }

        series.push(seriesItem)
      }

      // eslint-disable-next-line no-undef
      ApexCharts.exec('results', 'updateOptions', {
        colors: newColors
      }, false, true)

      // eslint-disable-next-line no-undef
      ApexCharts.exec('results', 'updateOptions', {
        stroke: {
          // curve: 'smooth',
          dashArray: newDashArray
        }
      }, false, true)

      this.series = series
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
