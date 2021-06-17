<template>
  <div v-if="constructors && drivers" class="fill-height fill-width p-0 m-0">
    <v-container class="container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
      >
        <defs>
          <style>
            .cls-1 {
            fill: none;
            }

            .cls-2 {
            fill: #4b4b4b;
            }

            .cls-4 {
            fill: #fff;
            }

            .cls-6 {
            clip-path: url(#clip-path);
            }

            .cls-7 {
            fill: #ececec;
            }

            .cls-8 {
            font-size: 110px;
            font-weight: 700;
            }

            .cls-9 {
            clip-path: url(#name-path);
            }
          </style>
          <clipPath id="clip-path" transform="translate(-24 -246.33)">
            <polygon class="cls-1" points="185.77 974 1751.48 974 1464.52 409.97 421.87 565.1 185.77 974" />
          </clipPath>
          <clipPath id="name-path" transform="translate(675 375)">
            <text
              class="cls-8"
              font-family="Formula1 Bold"
              v-html="constructorName"
            />
          </clipPath>
        </defs>
        <g id="background-elements">
          <g id="triangle-dark">
            <path class="cls-2" d="M861,398.54l-46.5-43L96,963.54Z" transform="translate(-24 -246.33)" />
          </g>
          <g id="triangle-primary">
            <path
              :fill="currentConstructor.color_scheme.secondary"
              d="M522,449.54l-183-39-76.5,28Z"
              transform="translate(-24 -246.33)"
            />
          </g>
          <g id="triangle-white">
            <path class="cls-4" d="M1614.35,523.51,1789,456.32l48.83-65.21Z" transform="translate(-24 -246.33)" />
          </g>
          <g id="rectangle-dark">
            <polygon
              :fill="currentConstructor.color_scheme.tertiary"
              points="1106.05 166.21 1684.79 337.91 1546.71 701.27 967.97 529.57 1106.05 166.21"
            />
          </g>
        </g>
        <g id="main" class="cls-6">
          <g class="cls-6">
            <polygon
              id="Rectangle_28"
              data-name="Rectangle 28"
              class="cls-4"
              points="395 243.67 1167 149.67 591 789.67 87 766.67 395 243.67"
            />
            <polygon
              id="Rectangle_27"
              data-name="Rectangle 27"
              :fill="currentConstructor.color_scheme.primary"
              points="1224.45 23.12 1780 276.67 1766 868.67 431.4 887.55 1224.45 23.12"
            />
          </g>
          <polygon
            id="Rectangle_31"
            data-name="Rectangle 31"
            class="cls-4 move-diagonal-4"
            points="1732.54 18.09 1733.51 19 1734.78 20.17 1328.17 456.35 1325.94 454.26 1732.54 18.09"
          />
          <polygon
            id="Rectangle_32"
            data-name="Rectangle 32"
            class="cls-4 move-diagonal-3"
            points="1749.9 19.65 1751.06 20.73 1752.14 21.73 1345.54 457.9 1343.31 455.82 1749.9 19.65"
          />
          <polygon
            id="Rectangle_33"
            data-name="Rectangle 33"
            class=" move-diagonal-reverse-5"
            :fill="currentConstructor.color_scheme.secondary"
            points="1725.79 0 1727.14 1.26 1728.02 2.08 1321.42 438.26 1319.19 436.18 1725.79 0"
          />
          <polygon
            id="Rectangle_45"
            data-name="Rectangle 45"
            class=" move-diagonal-6"
            :fill="currentConstructor.color_scheme.primary"
            points="413.36 487 414.45 488.02 415.59 489.08 8.99 925.25 6.75 923.17 413.36 487"
          />
          <polygon
            id="Rectangle_46"
            data-name="Rectangle 46"
            class=" move-diagonal-reverse-5"
            :fill="currentConstructor.color_scheme.primary"
            points="430.72 488.56 431.85 489.61 432.95 490.64 26.35 926.81 24.11 924.73 430.72 488.56"
          />
          <polygon
            id="Rectangle_47"
            data-name="Rectangle 47"
            class=" move-diagonal-4"
            :fill="currentConstructor.color_scheme.primary"
            points="406.6 468.91 407.7 469.93 408.83 470.99 2.23 907.16 0 905.08 406.6 468.91"
          />
          <polygon
            id="Rectangle_48"
            data-name="Rectangle 48"
            class=" move-diagonal-3"
            :fill="currentConstructor.color_scheme.primary"
            points="1077.86 40.42 1081.36 43.68 1083.77 45.92 677.17 482.1 671.26 476.59 1077.86 40.42"
          />
          <polygon
            id="Rectangle_49"
            data-name="Rectangle 49"
            class=" move-diagonal-reverse-2"
            :fill="currentConstructor.color_scheme.primary"
            points="1037.17 110.75 1040.02 113.41 1042.69 115.9 636.09 552.08 630.57 546.93 1037.17 110.75"
          />
          <polygon
            id="Rectangle_50"
            data-name="Rectangle 50"
            :fill="currentConstructor.color_scheme.primary"
            points="1067.17 18.66 1069.63 20.95 1073.34 24.41 666.74 460.58 660.57 454.83 1067.17 18.66"
          />
          <polygon
            id="Rectangle_51"
            data-name="Rectangle 51"
            class="move-diagonal-6"
            :fill="currentConstructor.color_scheme.primary"
            points="493.87 240.66 495.8 242.46 498.04 244.55 277.09 481.57 272.92 477.68 493.87 240.66"
          />
          <polygon
            id="Rectangle_52"
            data-name="Rectangle 52"
            :fill="currentConstructor.color_scheme.secondary"
            points="503.19 251.87 505.58 254.1 507.35 255.75 286.4 492.77 282.24 488.89 503.19 251.87"
          />
          <polygon
            id="Rectangle_53"
            data-name="Rectangle 53"
            class="move-diagonal-reverse-4"
            :fill="currentConstructor.color_scheme.primary"
            points="639.84 130.4 642.4 132.79 644.01 134.29 423.06 371.31 418.89 367.42 639.84 130.4"
          />
          <polygon
            id="Rectangle_54"
            data-name="Rectangle 54"
            :fill="currentConstructor.color_scheme.primary"
            points="621.16 353.06 622.73 354.52 618.6 358.95 567.59 413.66 566.03 412.2 621.16 353.06"
          />
          <polygon
            id="Rectangle_44"
            data-name="Rectangle 44"
            class="cls-4"
            points="1536.97 94.88 1538 95.84 1539.2 96.97 946.29 733 944.06 730.92 1536.97 94.88"
          />
          <polygon
            id="Rectangle_41"
            data-name="Rectangle 41"
            :fill="currentConstructor.color_scheme.secondary"
            class="move-diagonal-4"
            points="1213.59 225.94 1216.02 228.2 1218.28 230.31 1094.34 363.27 1089.65 358.9 1213.59 225.94"
          />
          <polygon
            id="Rectangle_42"
            data-name="Rectangle 42"
            class="cls-4"
            points="1176.48 284.92 1179.28 287.52 1181.17 289.29 1112.2 363.27 1107.52 358.9 1176.48 284.92"
          />
          <polygon
            id="Rectangle_43"
            data-name="Rectangle 43"
            class="cls-4 move-diagonal-reverse-3"
            points="1194.35 284.92 1196.83 287.23 1199.04 289.29 1053.24 445.69 1048.55 441.31 1194.35 284.92"
          />
          <polygon
            id="Rectangle_34"
            data-name="Rectangle 34"
            :fill="currentConstructor.color_scheme.secondary"
            points="1605.21 202.75 1609.52 206.76 1611.98 209.06 1205.38 645.23 1198.61 638.92 1605.21 202.75"
          />
          <polygon
            id="Rectangle_29"
            data-name="Rectangle 29"
            class="cls-7"
            points="1061.82 121.36 1077.81 136.23 1090.86 148.36 515.71 767.09 486.67 740.09 1061.82 121.36"
          />
          <polygon
            id="Rectangle_35"
            data-name="Rectangle 35"
            class="cls-4"
            points="1264.03 596.63 1265.21 597.73 1266.26 598.71 1073.79 805.18 1071.56 803.1 1264.03 596.63"
          />
          <polygon
            id="Rectangle_36"
            data-name="Rectangle 36"
            class="cls-4"
            points="1280.11 596.63 1281.32 597.76 1282.34 598.71 1089.87 805.18 1087.63 803.1 1280.11 596.63"
          />
          <polygon
            id="Rectangle_37"
            data-name="Rectangle 37"
            class="cls-4"
            points="1298.86 596.63 1300.12 597.8 1301.09 598.71 1108.62 805.18 1106.39 803.1 1298.86 596.63"
          />
          <polygon
            id="Rectangle_38"
            data-name="Rectangle 38"
            class="cls-4"
            points="1708.16 443.9 1710.86 446.41 1715.09 450.36 1399.42 789 1392.48 782.53 1708.16 443.9"
          />
          <polygon
            id="Rectangle_39"
            data-name="Rectangle 39"
            class="cls-4"
            points="1720.16 463.78 1722.06 465.55 1723.97 467.33 1408.3 805.97 1404.49 802.42 1720.16 463.78"
          />
          <polygon
            id="Rectangle_40"
            data-name="Rectangle 40"
            class="cls-4"
            points="1694.71 430.5 1697.69 433.28 1701.64 436.96 1385.97 775.6 1379.03 769.14 1694.71 430.5"
          />

          <!--   Elements to clip inside team name  -->
          <g class="cls-9">
            <rect
              id="name_white"
              :fill="currentConstructor.color_scheme.primary"
              x="-143.69"
              y="-70.57"
              width="1611.45"
              height="1087.19"
              transform="translate(-100 1121.74) rotate(-47.01)"
            />
            <rect
              id="name_primary"
              class="cls-4"
              x="-634.04"
              y="-315.09"
              width="1324.12"
              height="983"
              transform="translate(975 756.28) rotate(-47)"
            />
            <polygon
              id="Rectangle_43"
              data-name="Rectangle 43"
              class="move-diagonal-reverse-3"
              :fill="currentConstructor.color_scheme.primary"
              points="1194.35 284.92 1196.83 287.23 1199.04 289.29 1053.24 445.69 1048.55 441.31 1194.35 284.92"
            />
            <polygon
              id="Rectangle_48"
              data-name="Rectangle 48"
              class="cls-4 move-diagonal-3"
              points="1077.86 40.42 1081.36 43.68 1083.77 45.92 677.17 482.1 671.26 476.59 1077.86 40.42"
            />
            <polygon
              id="Rectangle_49"
              data-name="Rectangle 49"
              class="cls-4 move-diagonal-reverse-2"
              points="1037.17 110.75 1040.02 113.41 1042.69 115.9 636.09 552.08 630.57 546.93 1037.17 110.75"
            />
            <polygon
              id="Rectangle_50"
              data-name="Rectangle 50"
              class="cls-4"
              points="1067.17 18.66 1069.63 20.95 1073.34 24.41 666.74 460.58 660.57 454.83 1067.17 18.66"
            />
            <polygon
              id="Rectangle_42"
              data-name="Rectangle 42"
              :fill="currentConstructor.color_scheme.primary"
              points="1176.48 284.92 1179.28 287.52 1181.17 289.29 1112.2 363.27 1107.52 358.9 1176.48 284.92"
            />
          </g>
        </g>
      </svg>

      <div class="infos">
        <v-row class="fill-width">
          <v-col />
          <v-col
            class="info-title text-uppercase d-flex justify-end"
            :style="`color: ${currentConstructor.color_scheme.primary}`"
          >
            Wins
          </v-col>
          <v-col />
          <v-col
            class="info-title text-uppercase d-flex justify-end"
            :style="`color: ${currentConstructor.color_scheme.primary}`"
          >
            Points
          </v-col>
          <v-col />
          <v-col
            class="info-title text-uppercase d-flex justify-end"
            :style="`color: ${currentConstructor.color_scheme.primary}`"
          >
            Standing
          </v-col>
          <v-col />
        </v-row>
        <v-row class="fill-width">
          <v-col />
          <v-col class="data text-uppercase d-flex justify-end">
            {{ currentStanding.wins }}
          </v-col>
          <v-col />
          <v-col class="data text-uppercase d-flex justify-end">
            {{ currentStanding.points }}
          </v-col>
          <v-col />
          <v-col class="data text-uppercase d-flex justify-end">
            {{ currentStanding.position }}
          </v-col>
          <v-col />
        </v-row>
      </div>
      <div class="drivers d-flex justify-space-around align-end">
        <img id="driver-1" :src="getDriverImage(0)">
        <img id="driver-2" :src="getDriverImage(1)">
      </div>
      <div class="floor" />
      <div class="car-container">
        <transition mode="out-in" name="car-animation">
          <div :key="currentCarImage">
            <img id="car" :src="currentCarImage">
          </div>
        </transition>
        <transition mode="out-in" name="car-animation">
          <div :key="currentCarImage">
            <img id="car-reflection" :src="currentCarImage">
          </div>
        </transition>
      </div>
    </v-container>
    <control-arrows @onLeftArrowClick="onLeftArrowClick" @onRightArrowClick="onRightArrowClick" />
  </div>
</template>

<script>
import { clamp } from '@/plugins/clamp'

export default {
  name: 'Constructors',
  data () {
    return {
      constructors: null,
      drivers: null,
      currentConstructorIndex: 0
    }
  },
  head () {
    return {
      title: 'Constructors'
    }
  },
  computed: {
    currentConstructor () {
      if (!this.constructors) {
        return null
      }

      return this.constructors[this.currentConstructorIndex].constructor
    },
    currentStanding () {
      if (!this.constructors) {
        return null
      }

      return this.constructors[this.currentConstructorIndex]
    },
    currentCarImage () {
      if (!this.constructors) {
        return null
      }

      return require(`static/cars/${this.constructors[this.currentConstructorIndex].constructor.constructor_id}.png`)
    },
    constructorDrivers () {
      if (!this.constructors || !this.drivers) {
        return null
      }

      return this.drivers.filter(driver => driver.constructor.constructor_id === this.constructors[this.currentConstructorIndex].constructor.constructor_id)
    },
    constructorName () {
      const name = this.constructors[this.currentConstructorIndex].constructor.name

      if (name.includes(' ') && name.length > 8) {
        const splitted = name.split(' ')

        let returnName = `<tspan x="0">${splitted[0]}</tspan>`
        let nameSecondLine = ''
        for (let i = 1; i < splitted.length; i++) {
          nameSecondLine += splitted[i]

          if (i !== splitted.length - 1) {
            nameSecondLine += ' '
          }
        }
        returnName += `<tspan x="0" y="1em">${nameSecondLine}</tspan>`

        return returnName
      }

      return name
    }
  },
  mounted () {
    this.$axios.$get('/api/constructorStandings').then((response) => {
      this.constructors = response
    })
    this.$axios.$get('/api/drivers').then((response) => {
      this.drivers = response
    })
  },
  methods: {
    onLeftArrowClick () {
      this.currentConstructorIndex = this.currentConstructorIndex <= 0 ? this.constructors.length - 1 : this.currentConstructorIndex - 1
    },
    onRightArrowClick () {
      this.currentConstructorIndex = this.currentConstructorIndex >= this.constructors.length - 1 ? 0 : this.currentConstructorIndex + 1
    },
    getDriverImage (driverNo) {
      if (!this.constructors || !this.drivers) {
        return null
      }
      driverNo = clamp(driverNo, 0, 1)
      const drivers = this.drivers.filter(driver => driver.constructor.constructor_id === this.constructors[this.currentConstructorIndex].constructor.constructor_id)
      return require(`static/drivers/${drivers[driverNo].driver_id}.png`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/constructors-background-animations.scss";

.container {
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  overflow: hidden;

  svg {
    position: absolute;

    $chevron-drop-shadow-x: 1em;
    $chevron-drop-shadow-y: 1em;
    $chevron-drop-shadow-blur: 0em;
    $chevron-drop-shadow-color: rgb(0, 0, 0);

    .shadow {
      filter: drop-shadow($chevron-drop-shadow-x $chevron-drop-shadow-x $chevron-drop-shadow-blur $chevron-drop-shadow-color);
      -webkit-filter: drop-shadow($chevron-drop-shadow-x $chevron-drop-shadow-x $chevron-drop-shadow-blur $chevron-drop-shadow-color);
      -moz-filter: drop-shadow($chevron-drop-shadow-x $chevron-drop-shadow-x $chevron-drop-shadow-blur $chevron-drop-shadow-color);
    }
  }

  $floor-height: 10em;

  .floor {
    width: 100%;
    height: $floor-height;
    background: linear-gradient(0deg, #f5f5f5 0%, #d1d1d1 100%);;
    position: absolute;
    bottom: 0;
    -webkit-box-shadow: 0px -10px 15px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 0px -10px 15px 0px rgba(0, 0, 0, 0.15);
  }

  .car-container {
    position: relative;
    width: 100%;
    max-width: 100%;
    bottom: -50%;

    img {
      width: 75%;
      display: block;
      margin: auto;
    }

    $reflection-start: (rgba(0, 0, 0, 0.15));

    #car-reflection {
      transform: scaleY(-1);
      -webkit-mask-image: -webkit-gradient(linear, left bottom, left top, from $reflection-start, to(rgba(0, 0, 0, 0)));
      mask-image: linear-gradient(to top, $reflection-start, rgba(0, 0, 0, 0));
    }
  }

  .drivers {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: $floor-height;

    img {
      height: 68%;
    }
  }

  .infos {
    position: absolute;
    width: 100%;
    top: 4em;
    text-shadow: 4px 5px 4px rgba(0, 0, 0, 0.26);

    .info-title {
      font-family: "Formula1 Bold";
      font-size: 2.5em;
      line-height: 0.5em;
    }

    .data {
      font-family: "Formula1 Bold";
      font-size: 2em;
      line-height: 0.5em;
      color: white;
    }
  }

  .car-animation-enter-active,
  .car-animation-leave-active {
    transition: all 0.5s ease-out;
  }

  .car-animation-enter {
    transform: translateX(110%);
  }

  .car-animation-leave-to {
    transform: translateX(-110%);
  }
}
</style>
