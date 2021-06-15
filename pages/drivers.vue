<template>
  <div v-if="standings" class="fill-height fill-width p-0 m-0">
    <v-container class="container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <!--        viewBox="0 0 1920 960"-->
        <defs>
          <style>
            .cls-1 {
            fill: #262626;
            }

            /*.cls-2, .cls-6 {*/
            /*fill: #8e1b20;*/
            /*}*/

            .cls-3 {
            fill: #626262;
            }

            .cls-4 {
            fill: #f2f2f2;
            }

            .cls-5 {
            fill: #102d65;
            }

            .cls-6 {
            font-size: 250px;
            font-weight: 700;
            }

            .cls-7 {
            fill: #ceb735;
            }

            .cls-8 {
            fill: #fff;
            }
          </style>
        </defs>
        <g id="baclground-objects">
          <rect
            class="cls-1"
            x="533"
            y="194"
            width="127"
            height="224"
            transform="translate(458.92 -470.14) rotate(51)"
          />
          <rect
            :fill="driverConstructor.color_scheme.tertiary"
            x="144.15"
            y="236.49"
            width="470.42"
            height="318.32"
            transform="translate(132.25 -213.63) rotate(17)"
          />
          <polygon class="cls-3" points="698 0 651 46 923 64 698 0" />
        </g>
        <g id="main">
          <polygon
            class="cls-4"
            points="1920 0 1920 960 0 960 0 238 130.28 221.85 139.65 220.69 163.13 217.78 172.5 216.62 777.06 141.68 782.4 141.01 871.32 129.99 898.06 126.68 937.22 121.82 963.96 118.51 1180.69 91.64 1240.85 84.19 1364.9 68.81 1374.26 67.65 1406.52 63.65 1415.87 62.49 1513.96 50.33 1523.32 49.17 1554.32 45.33 1610.47 38.37 1688.2 28.73 1789.79 16.14 1870.19 6.17 1920 0"
          />
          <polygon
            :fill="driverConstructor.color_scheme.primary"
            points="1920 0 1920 960 1202.31 960 1870.19 6.17 1920 0"
          />
          <text
            id="driver-number"
            class="cls-6"
            font-family="Formula1 Bold"
            :fill="driverConstructor.color_scheme.tertiary"
            transform="translate(1454.67 634.78)"
          >
            {{ currentDriver.number }}
          </text>
          <polygon
            :fill="driverConstructor.color_scheme.primary"
            points="1789.79 16.14 1128.89 960 1036.12 960 1688.2 28.73 1789.79 16.14"
          />
          <polygon
            :fill="driverConstructor.color_scheme.secondary"
            points="1610.47 38.37 965.15 960 913.87 960 1554.32 45.33 1610.47 38.37"
          />
          <polygon
            :fill="driverConstructor.color_scheme.primary"
            points="1523.32 49.17 1201.92 508.18 1196.19 504.16 1513.96 50.33 1523.32 49.17"
          />
          <polygon
            :fill="driverConstructor.color_scheme.primary"
            points="1415.87 62.49 1103.64 508.4 1097.91 504.39 1406.52 63.65 1415.87 62.49"
          />
          <polygon
            :fill="driverConstructor.color_scheme.primary"
            points="1374.26 67.65 1065.64 508.4 1059.91 504.39 1364.9 68.81 1374.26 67.65"
          />
          <polygon
            :fill="driverConstructor.color_scheme.primary"
            points="1240.85 84.19 1106.48 276.08 1069.62 250.27 1180.69 91.64 1240.85 84.19"
          />
          <polygon
            :fill="driverConstructor.color_scheme.primary"
            points="963.96 118.51 846.74 285.91 830.36 274.44 937.22 121.82 963.96 118.51"
          />
          <polygon
            :fill="driverConstructor.color_scheme.primary"
            points="766.86 470.79 424.31 960 399.89 960 750.48 459.31 766.86 470.79"
          />
          <polygon
            :fill="driverConstructor.color_scheme.primary"
            points="898.06 126.68 637.97 498.13 621.58 486.66 871.32 129.99 898.06 126.68"
          />
          <polygon
            :fill="driverConstructor.color_scheme.primary"
            points="580.86 491.79 253.02 960 228.6 960 564.48 480.31 580.86 491.79"
          />
          <polygon
            :fill="driverConstructor.color_scheme.primary"
            points="782.4 141.01 208.95 960 204.07 960 777.06 141.68 782.4 141.01"
          />
          <rect
            :fill="driverConstructor.color_scheme.primary"
            x="412"
            y="325"
            width="7"
            height="300"
            transform="translate(347.59 -272.42) rotate(35)"
          />
          <rect
            :fill="driverConstructor.color_scheme.primary"
            x="381.72"
            y="325.22"
            width="7"
            height="300"
            transform="translate(342.24 -255.01) rotate(35)"
          />
          <rect
            :fill="driverConstructor.color_scheme.primary"
            x="424.4"
            y="292.93"
            width="7"
            height="406.97"
            transform="translate(362.11 -275.66) rotate(35)"
          />
          <rect
            :fill="driverConstructor.color_scheme.primary"
            x="147.26"
            y="484.69"
            width="7"
            height="515.21"
            transform="translate(453.03 -72.23) rotate(35)"
          />
          <polygon
            :fill="driverConstructor.color_scheme.primary"
            points="282.96 404.99 0 809.09 0 796.89 277.22 400.97 282.96 404.99"
          />
          <polygon
            :fill="driverConstructor.color_scheme.primary"
            points="172.5 216.62 0 462.97 0 450.76 163.13 217.78 172.5 216.62"
          />
          <polygon
            :fill="driverConstructor.color_scheme.primary"
            points="139.65 220.69 0 420.12 0 407.92 130.28 221.85 139.65 220.69"
          />
          <polygon class="cls-8" points="1920 98.08 1920 110.29 1641.22 508.42 1635.48 504.41 1920 98.08" />
          <polygon class="cls-8" points="1920 146.99 1920 159.19 1675.39 508.53 1669.65 504.52 1920 146.99" />
          <polygon class="cls-8" points="1682.68 687.7 1492.02 960 1483.47 960 1676.95 683.69 1682.68 687.7" />
          <polygon class="cls-8" points="1712.68 688.7 1522.72 960 1514.17 960 1706.95 684.69 1712.68 688.7" />
          <rect
            class="cls-8"
            x="1812.22"
            y="651.95"
            width="7"
            height="207.01"
            transform="translate(761.68 -1024.83) rotate(35)"
          />
        </g>
      </svg>

      <div class="content-container">
        <v-row class="fill-height">
          <v-col>
            <v-row>
              <v-col md="6" />
              <v-col
                md="6"
                class="driver-name text-uppercase"
                :style="`color: ${driverConstructor.color_scheme.secondary}`"
              >
                <div>
                  {{ currentDriver.given_name }}
                </div>
                <div>
                  {{ currentDriver.family_name }}
                </div>
              </v-col>
            </v-row>
            <v-row class="infos-row" align="center" justify="center">
              <v-col class="text-right">
                <v-row>
                  <v-col
                    class="infos infos-title text-uppercase"
                    :style="`color: ${driverConstructor.color_scheme.primary}`"
                  >
                    wins
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="infos text-uppercase" :style="`color: ${driverConstructor.color_scheme.secondary}`">
                    {{ currentStanding.wins }}
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    class="infos infos-title text-uppercase"
                    :style="`color: ${driverConstructor.color_scheme.primary}`"
                  >
                    points
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="infos text-uppercase" :style="`color: ${driverConstructor.color_scheme.secondary}`">
                    {{ currentStanding.points }}
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    class="infos infos-title text-uppercase"
                    :style="`color: ${driverConstructor.color_scheme.primary}`"
                  >
                    standing
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="infos text-uppercase" :style="`color: ${driverConstructor.color_scheme.secondary}`">
                    {{ currentStanding.position }}
                  </v-col>
                </v-row>
              </v-col>
              <v-col />
            </v-row>
          </v-col>
          <v-col>
            <v-row class="fill-height">
              <v-col>
                <transition mode="out-in" name="bottom">
                  <div :key="currentDriverImage">
                    <img class="driver-image" :src="currentDriverImage">
                  </div>
                </transition>
              </v-col>
              <v-col />
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <div class="control-buttons-container">
      <v-row class="fill-width" align="center" justify="center">
        <v-col>
          <img class="left-button" src="~static/chevron.svg" @click="onLeftArrowClick">
        </v-col>
        <v-col class="text-right">
          <img class="right-button" src="~static/chevron.svg" @click="onRightArrowClick">
        </v-col>
      </v-row>
    </div>
  </div>
  <div v-else>
    Please wait
  </div>
</template>

<script>
export default {
  name: 'Drivers',
  data () {
    return {
      standings: null,
      currentStandingIndex: 0
    }
  },
  head () {
    return {
      title: 'Drivers'
    }
  },
  computed: {
    currentDriver () {
      if (!this.standings) {
        return null
      }

      return this.standings[this.currentStandingIndex].driver
    },
    driverConstructor () {
      if (!this.standings) {
        return null
      }

      return this.standings[this.currentStandingIndex].driver.constructor
    },
    currentStanding () {
      if (!this.standings) {
        return null
      }

      return this.standings[this.currentStandingIndex]
    },
    currentDriverImage () {
      if (!this.standings) {
        return null
      }

      return require(`static/drivers/${this.standings[this.currentStandingIndex].driver.driver_id}.png`)
    }
  },
  mounted () {
    this.$axios.$get('/api/get_drivers_standing/constructor').then((response) => {
      this.standings = response
    })
  },
  methods: {
    onLeftArrowClick () {
      this.currentStandingIndex = this.currentStandingIndex <= 0 ? this.standings.length - 1 : this.currentStandingIndex - 1
    },
    onRightArrowClick () {
      this.currentStandingIndex = this.currentStandingIndex >= this.standings.length - 1 ? 0 : this.currentStandingIndex + 1
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  position: relative;

  svg {
    position: absolute;
  }
}

.content-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  max-height: 100%;
  width: 100%;
  max-width: 100%;
  z-index: 1;

  .col,
  .row {
    margin: 0;
    padding: 0;
  }

  .driver-image {
    position: absolute;
    left: 40%;
    max-height: 100%;
    max-width: 100%;
    pointer-events: none;
  }

  .bottom-enter-active,
  .bottom-leave-active {
    transition: all 0.2s ease-out;
  }

  .bottom-enter,
  .bottom-leave-to {
    opacity: 0;
  }

  .driver-name {
    font-family: "Formula1 Bold";
    font-size: 5em;
    line-height: 1em;
  }

  .infos-row {
    padding-top: 5em;
    max-height: 100%;
  }

  .infos,
  .infos-title {
    font-family: "Formula1 Bold";
  }

  .infos {
    font-family: "Formula1 Bold";
    font-size: 3.5em;
    line-height: 1em;
  }

  .infos-title {
    font-size: 4em;
  }
}

.control-buttons-container {
  position: absolute;
  top: 10%;
  width: 100%;
  z-index: 3;

  $chevron-hover-time: 0.25s;

  .left-button,
  .right-button {
    width: 6em;
    cursor: pointer;
    transition: width $chevron-hover-time;

    &:hover {
      width: 5em;
    }
  }

  $chevron-drop-shadow-x: 0.25em;
  $chevron-drop-shadow-y: 0.25em;
  $chevron-drop-shadow-blur: 0.4em;
  $chevron-drop-shadow-color: rgba(0, 0, 0, 0.5);

  @function neg($value) {
    @return $value * -1
  }

  .left-button {
    transform: rotateZ(180deg);
    filter: drop-shadow(neg($chevron-drop-shadow-x) neg($chevron-drop-shadow-x) $chevron-drop-shadow-blur $chevron-drop-shadow-color);
    -webkit-filter: drop-shadow(neg($chevron-drop-shadow-x) neg($chevron-drop-shadow-x) $chevron-drop-shadow-blur $chevron-drop-shadow-color);
    -moz-filter: drop-shadow(neg($chevron-drop-shadow-x) neg($chevron-drop-shadow-x) $chevron-drop-shadow-blur $chevron-drop-shadow-color);
  }

  .right-button {
    filter: drop-shadow($chevron-drop-shadow-x $chevron-drop-shadow-x $chevron-drop-shadow-blur $chevron-drop-shadow-color);
    -webkit-filter: drop-shadow($chevron-drop-shadow-x $chevron-drop-shadow-x $chevron-drop-shadow-blur $chevron-drop-shadow-color);
    -moz-filter: drop-shadow($chevron-drop-shadow-x $chevron-drop-shadow-x $chevron-drop-shadow-blur $chevron-drop-shadow-color);
  }
}
</style>
