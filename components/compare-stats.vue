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
    <client-only>
      <v-row>
        <v-col cols="1">
          <v-row
            v-for="(item,index) in drivers"
            :key="index"
            :class="{'drivers-row-primary':index%2===0,'drivers-row-secondary':index%2===1}"
            @click="driversClick(item.code)"
          >
            <v-col cols="1">
              <div class="driver-divider-line" :style="`background-color: ${item.constructor.color_scheme.primary}`" />
            </v-col>
            <v-col>
              <div v-if="driversToExclude.includes(item.code)" class="line-through" />
              <div>
                {{
                  item.code
                }}
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="11">
          <line-chart :chart-data="chartData" :options="chartOptions" />
        </v-col>
      </v-row>
      <v-row class="fill-width">
        <v-col cols="2" class="d-flex justify-end">
          Laps:
        </v-col>
        <v-col>
          <v-range-slider
            v-model="lapRange"
            hide-details
            :min="lapRangeMin"
            :max="lapRangeMax"
          >
            <template #thumb-label="props">
              {{ props.value }}
            </template>
          </v-range-slider>
        </v-col>
      </v-row>
    </client-only>
  </v-container>
</template>

<script>

export default {
  name: 'CompareStats',
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
      chartLinesStepped: false,

      chartData: {
        datasets: []
      },
      chartOptions: {
        responsive: true,
        legend: {
          display: false,
          position: 'left',
          labels: {
            fontColor: 'white',
            fontFamily: 'Formula1 Bold'
          }
        },
        interaction: {
          intersect: false,
          axis: 'y'
        }
      },

      // Others
      lapsData: [],
      drivers: [],
      driversToExclude: []
    }
  },
  async fetch () {
    const laps = await fetch(`http://localhost:5000/api/laps/${this.gpName}/${this.sessionType}`).then(res => res.json())
    const drivers = await fetch('http://localhost:5000/api/drivers').then(res => res.json())

    this.lapsData = this.convertLapData(laps)
    this.drivers = drivers
    this.chartData = this.getChartData(true)

    // const miliseconds = 144310
    // console.log(msToTime(miliseconds))
  },
  watch: {
    selectType (val) {
      this.chartData = this.getChartData()
    },
    selectSector (val) {
      this.chartData = this.getChartData()
    },
    selectSpeedTrap (val) {
      this.chartData = this.getChartData()
    },
    lapRange (val) {
      this.chartData = this.getChartData()
    },
    chartLinesStepped (val) {
      this.chartData = this.getChartData()
    },
    driversToExclude (val) {
      this.chartData = this.getChartData()
    }
  },
  methods: {
    getDriver (driverCode) {
      return this.drivers.filter(d => d.code === driverCode)[0]
    },
    driversClick (driverCode) {
      const indexOfItem = this.driversToExclude.indexOf(driverCode)

      if (indexOfItem > -1) {
        this.driversToExclude.splice(indexOfItem, 1)
      } else {
        this.driversToExclude.push(driverCode)
      }
    },
    showAllDriver () {
      this.driversToExclude = []
    },
    hideAllDriver () {
      for (const driversKey in this.drivers) {
        this.driversToExclude.push(this.drivers[driversKey].code)
      }
    },
    convertLapData (laps) {
      const temp = []
      for (let i = 0; i < Object.keys(laps.Time).length; i++) {
        if (laps.Driver[i.toString()] !== null) {
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
    getChartData (resetRange = false) {
      if (!this.lapsData) {
        return {
          datasets: []
        }
      }

      const data = {
        labels: [],
        datasets: []
      }

      const grouped = this.lapsData
      const constructorsContained = []
      let highestLapNumber = 0

      for (const driverCode in grouped) {
        if (this.driversToExclude.includes(driverCode)) {
          continue
        }

        const row = grouped[driverCode]
        const driver = this.getDriver(driverCode)
        const constructor = driver.constructor

        const dataSet = {
          label: driverCode,
          data: [],
          borderColor: constructor.color_scheme.primary,
          fill: false,
          backgroundColor: constructor.color_scheme.primary,
          borderDash: constructorsContained.includes(constructor.constructor_id) ? [5, 5] : [],
          steppedLine: this.chartLinesStepped ? 'after' : false
        }

        for (const rowIndex in row) {
          const rowItem = row[rowIndex]

          if (highestLapNumber < rowItem.LapNumber) {
            highestLapNumber = rowItem.LapNumber
          }

          if (rowItem.LapNumber >= this.lapRange[0] && rowItem.LapNumber <= this.lapRange[1]) {
            if (this.selectType === 'Lap Time') {
              dataSet.data.push(rowItem.LapTime)
            } else if (this.selectType === 'Sector') {
              if (this.selectSector === 'Sector 1') {
                dataSet.data.push(rowItem.Sector1Time)
              } else if (this.selectSector === 'Sector 2') {
                dataSet.data.push(rowItem.Sector2Time)
              } else if (this.selectSector === 'Sector 3') {
                dataSet.data.push(rowItem.Sector3Time)
              }
            } else if (this.selectType === 'Speed Trap') {
              if (this.selectSector === 'Sector 1 Speed Trap') {
                dataSet.data.push(rowItem.SpeedI1)
              } else if (this.selectSpeedTrap === 'Sector 2 Speed Trap') {
                dataSet.data.push(rowItem.SpeedI2)
              } else if (this.selectSpeedTrap === 'Finish Line') {
                dataSet.data.push(rowItem.SpeedFL)
              } else if (this.selectSpeedTrap === 'Longest Straight Speed Trap') {
                dataSet.data.push(rowItem.SpeedST)
              }
            }
          }
        }

        constructorsContained.push(constructor.constructor_id)
        data.datasets.push(dataSet)
      }

      if (resetRange) {
        this.lapRange = [1, highestLapNumber]
      }

      for (let i = this.lapRange[0]; i <= highestLapNumber && i <= this.lapRange[1]; i++) {
        data.labels.push(i)
      }
      this.lapRangeMax = highestLapNumber

      return data
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
