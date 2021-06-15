<template>
  <div v-if="standings" class="fill-height fill-width p-0 m-0">
    <v-container class="container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <clipPath id="main-background">
            <polygon
              points="1981.48 119.76 1981.48 1079.76 61.48 1079.76 61.48 357.76 191.76 341.61 201.13 340.45 224.62 337.54 233.99 336.38 838.54 261.44 843.88 260.77 932.8 249.75 959.54 246.44 998.71 241.58 1025.44 238.27 1242.17 211.4 1302.34 203.95 1426.38 188.57 1435.74 187.41 1468.01 183.41 1477.36 182.25 1575.44 170.09 1584.81 168.93 1615.81 165.09 1671.95 158.13 1749.68 148.49 1851.28 135.9 1931.67 125.93 1981.48 119.76"
            />
          </clipPath>
          <style>
            .cls-1 {
            fill: #262626;
            }

            .cls-3 {
            fill: #626262;
            }

            .cls-4 {
            fill: #f2f2f2;
            }

            .cls-6 {
            font-size: 250px;
            font-weight: 700;
            }

            .cls-8 {
            fill: #fff;
            }
          </style>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="baclground-objects">
            <rect
              class="cls-1"
              x="594.48"
              y="193.76"
              width="127"
              height="224"
              transform="translate(481.52 -398.01) rotate(51)"
            />
            <rect
              :fill="driverConstructor.color_scheme.tertiary"
              x="205.64"
              y="236.25"
              width="470.42"
              height="318.32"
              transform="translate(134.87 -111.61) rotate(17)"
            />
            <polygon class="cls-3" points="759.49 119.76 712.49 165.76 984.49 183.76 759.49 119.76" />
          </g>
          <g id="main" clip-path="url(#main-background)">
            <polygon
              class="cls-4"
              points="1981.48 119.76 1981.48 1079.76 61.48 1079.76 61.48 357.76 191.76 341.61 201.13 340.45 224.62 337.54 233.99 336.38 838.54 261.44 843.88 260.77 932.8 249.75 959.54 246.44 998.71 241.58 1025.44 238.27 1242.17 211.4 1302.34 203.95 1426.38 188.57 1435.74 187.41 1468.01 183.41 1477.36 182.25 1575.44 170.09 1584.81 168.93 1615.81 165.09 1671.95 158.13 1749.68 148.49 1851.28 135.9 1931.67 125.93 1981.48 119.76"
            />
            <polygon
              :fill="driverConstructor.color_scheme.primary"
              points="1981.48 119.76 1981.48 1079.76 1263.8 1079.76 1931.67 125.93 1981.48 119.76"
            />
            <text
              id="driver-number"
              class="cls-6"
              :fill="driverConstructor.color_scheme.tertiary"
              font-family="Formula1 Bold"
              transform="translate(1516.15 754.54)"
            >
              {{ currentDriver.number }}
            </text>
            <polygon
              :fill="driverConstructor.color_scheme.primary"
              points="1851.28 135.9 1190.38 1079.76 1097.61 1079.76 1749.68 148.49 1851.28 135.9"
            />
            <polygon
              :fill="driverConstructor.color_scheme.secondary"
              points="1671.95 158.13 1026.63 1079.76 975.36 1079.76 1615.81 165.09 1671.95 158.13"
            />
            <polygon
              class="move-diagonal-reverse-4"
              :fill="driverConstructor.color_scheme.primary"
              points="393.81 599.64 388.08 595.63 560.15 349.88 563.28 352.07 565.89 353.9 393.81 599.64"
            />
            <polygon
              :fill="driverConstructor.color_scheme.primary"
              points="363.54 599.86 357.8 595.85 529.88 350.1 532.48 351.92 535.61 354.12 363.54 599.86"
            />
            <polygon
              :fill="driverConstructor.color_scheme.primary"
              points="375.54 664.86 369.8 660.85 603.23 327.48 606.52 329.78 608.96 331.5 375.54 664.86"
            />
            <polygon
              class="cls-8 move-diagonal-3"
              points="1820.7 842.01 1814.97 838 1933.71 668.42 1936.44 670.34 1939.44 672.44 1820.7 842.01"
            />
            <g id="Layer_4" data-name="Layer 4">
              <polygon
                class="move-diagonal-reverse-3"
                :fill="driverConstructor.color_scheme.primary"
                points="59.17 932.73 53.44 928.71 338.75 521.25 342.52 523.89 344.48 525.26 59.17 932.73"
              />
              <polygon
                class="move-diagonal-3"
                :fill="driverConstructor.color_scheme.primary"
                points="58.81 967.39 53.08 963.38 356.83 529.58 359.84 531.69 362.56 533.59 58.81 967.39"
              />
              <polygon
                class="move-diagonal-reverse-3"
                :fill="driverConstructor.color_scheme.primary"
                points="5.73 618.94 2.27 616.51 0 614.92 199.04 330.65 204.78 334.67 5.73 618.94"
              />
              <polygon
                :fill="driverConstructor.color_scheme.primary"
                points="51.25 598.2 48.65 596.38 45.52 594.18 287.83 248.13 293.56 252.15 51.25 598.2"
              />
              <rect
                :fill="driverConstructor.color_scheme.primary"
                x="555.02"
                y="142.9"
                width="4.42"
                height="1047.88"
                transform="translate(483.26 -199.02) rotate(35)"
              />
              <polygon
                class="move-diagonal-4"
                :fill="driverConstructor.color_scheme.primary"
                points="287.5 1118.16 271.13 1106.69 626.17 599.64 633.78 604.97 642.54 611.1 287.5 1118.16"
              />
              <polygon
                class="move-diagonal-reverse-2"
                :fill="driverConstructor.color_scheme.primary"
                points="699.04 619.13 690.19 612.93 682.67 607.66 1037.71 100.61 1054.08 112.08 699.04 619.13"
              />
              <polygon
                :fill="driverConstructor.color_scheme.primary"
                points="903.04 411.13 894.83 405.38 886.67 399.67 1091.29 107.43 1107.67 118.89 903.04 411.13"
              />
              <polygon
                class="move-diagonal-6"
                :fill="driverConstructor.color_scheme.primary"
                points="473.37 1097.8 457 1086.33 812.04 579.28 819.33 584.38 822.06 586.29 828.41 590.75 473.37 1097.8"
              />
              <polygon
                class="move-diagonal-6"
                :fill="driverConstructor.color_scheme.primary"
                points="1126.73 629.82 1120.26 625.28 1441.8 166.08 1445.14 168.42 1448.27 170.61 1126.73 629.82"
              />
              <polygon
                class="move-diagonal-reverse-6"
                :fill="driverConstructor.color_scheme.primary"
                points="1148.06 651.97 1141.59 647.43 1488.46 152.04 1491.99 154.51 1494.94 156.58 1148.06 651.97"
              />
              <polygon
                class="move-diagonal-3"
                :fill="driverConstructor.color_scheme.primary"
                points="1263.95 627.94 1257.48 623.41 1604.35 128.02 1607.92 130.52 1610.83 132.56 1263.95 627.94"
              />
              <polygon
                :fill="driverConstructor.color_scheme.primary"
                points="1167.91 396 1146.63 381.1 1130.67 369.92 1389.68 0 1426.93 26.08 1167.91 396"
              />
              <polygon
                class="cls-8"
                points="1701.9 628.59 1699.15 626.66 1696.66 624.92 1994.78 199.17 2000.02 202.83 1701.9 628.59"
              />
              <polygon
                class="cls-8"
                points="1735.82 628.14 1733.37 626.42 1730.59 624.47 2065.45 146.24 2070.69 149.9 1735.82 628.14"
              />
              <polygon
                class="cls-8 move-diagonal-5"
                points="1502.59 1152.04 1497.35 1148.37 1739.15 803.05 1741.89 804.97 1744.38 806.72 1502.59 1152.04"
              />
              <polygon
                class="cls-8 move-diagonal-reverse-3"
                points="1559.93 1113.27 1554.69 1109.61 1765.15 809.05 1767.74 810.87 1770.38 812.72 1559.93 1113.27"
              />
            </g>
          </g>
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
@import "~assets/scss/drivers-background";

.container {
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
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
