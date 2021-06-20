<template>
  <div class="fill-height fill-width p-0 m-0">
    <v-container class="container">
      <div v-if="$fetchState.pending">
        Fetching data from the server! Please wait...
      </div>
      <div v-else class="fill-width fill-height p-0 m-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 300" width="100%">
          <defs>
            <style>
              .cls-1 {
                fill: #eaeaea;
              }

              .cls-2 {
                fill: #363636;
              }

              .cls-3 {
                fill: #747474;
              }

              .cls-7 {
                fill: #b3b3b3;
              }

              .cls-8 {
                font-size: 110px;
              }

              .cls-11, .cls-8 {
                font-family: "Formula1 Bold";
                font-weight: 700;
              }

              .cls-11 {
                font-size: 70px;
                letter-spacing: -0.03em;
              }

              .text-country-clipping {
                clip-path: url(#text-country);
              }

              .text-year-clipping {
                clip-path: url(#text-year);
              }
            </style>
            <clipPath id="text-country">
              <text class="cls-8" x="50%" y="139" text-anchor="middle">
                {{ circuit.country }}
              </text>
            </clipPath>
            <clipPath id="text-year">
              <text class="cls-11" x="50%" y="225" text-anchor="middle">
                2021
              </text>
            </clipPath>
          </defs>
          <g id="Layer_2" data-name="Layer 2" width="100%">
            <g id="main" width="100%">
              <rect class="cls-1" y="1.75" width="1920" height="540" />
              <g id="bg-objects">
                <polygon
                  class="cls-2"
                  points="797.85 197.44 786.19 279.14 769.24 397.93 757.02 483.52 748.71 541.75 536.65 541.75 525.21 540.12 455.48 530.17 438.16 527.69 402.1 522.55 384.77 520.08 370.51 518.04 373.57 496.58 376.87 473.48 387.57 398.5 415.43 203.25 418.17 184.09 423.88 144.07 454.07 148.38 485.64 152.88 614.76 171.31 797.85 197.44"
                />
                <polygon
                  class="cls-3"
                  points="696.3 1.75 485.64 152.88 415.43 203.25 356.21 245.74 418.17 184.09 454.07 148.38 601.44 1.75 696.3 1.75"
                />
              </g>
              <g id="large-panels">
                <polygon
                  :fill="circuit.color_scheme.primary"
                  points="1513.25 170.25 1141.75 541.75 244.32 541.75 784.32 1.75 1341.24 1.75 1342.99 0 1344.75 1.75 1363.87 20.88 1472.75 129.76 1513.25 170.25"
                />
                <polygon
                  :fill="circuit.color_scheme.secondary"
                  points="1920 112.7 1920 224.1 1602.35 541.75 698.79 541.75 1238.79 1.75 1341.24 1.75 1342.99 0 1344.75 1.75 1809.05 1.75 1814.98 7.68 1831.13 23.83 1836.25 28.95 1920 112.7"
                />
                <polygon
                  :fill="circuit.color_scheme.tertiary"
                  points="1920 1.75 1920 541.75 1060.76 541.75 1600.76 1.75 1920 1.75"
                />
              </g>
              <g id="tertiary-color">
                <polygon
                  :fill="circuit.color_scheme.tertiary"
                  points="668.25 201.9 373.57 496.58 328.4 541.75 308.6 541.75 658.35 192 661.9 195.55 668.25 201.9"
                />
                <polygon
                  :fill="circuit.color_scheme.tertiary"
                  points="723.08 201.57 402.1 522.55 382.9 541.75 363.1 541.75 713.18 191.67 718.82 197.3 723.08 201.57"
                />
                <polygon
                  :fill="circuit.color_scheme.tertiary"
                  points="648.08 337.57 455.48 530.17 443.9 541.75 424.1 541.75 638.18 327.67 648.08 337.57"
                />
                <polygon
                  :fill="circuit.color_scheme.tertiary"
                  points="1341.24 1.75 1175.82 167.17 1165.92 157.27 1321.44 1.75 1341.24 1.75"
                />
                <polygon
                  :fill="circuit.color_scheme.tertiary"
                  points="1383 1.75 1393.24 1.75 1227.82 167.17 1222.7 162.05 1383 1.75"
                />
              </g>
              <g id="secondary-color">
                <polygon
                  :fill="circuit.color_scheme.primary"
                  points="1274.15 250.27 982.67 541.75 947.33 541.75 1256.48 232.6 1264.52 240.64 1274.15 250.27"
                />
                <polygon
                  :fill="circuit.color_scheme.primary"
                  points="1920 152.74 1920 188.1 1770.86 337.24 1761.02 327.4 1753.18 319.56 1920 152.74"
                />
              </g>
              <g id="primary-color">
                <polygon
                  :fill="circuit.color_scheme.secondary"
                  points="1716.85 1.75 1728.15 1.75 1539.97 189.94 1188.16 541.75 1176.84 541.75 1716.85 1.75"
                />
                <polygon
                  :fill="circuit.color_scheme.secondary"
                  points="1772.43 1.75 1569.22 204.97 1232.43 541.75 1221.12 541.75 1761.12 1.75 1772.43 1.75"
                />
                <polygon
                  :fill="circuit.color_scheme.secondary"
                  points="1820.9 1.75 1814.98 7.68 1610.65 212 1607.76 209.1 1605.53 206.88 1809.86 2.56 1810.66 1.75 1820.9 1.75"
                />
                <polygon
                  :fill="circuit.color_scheme.secondary"
                  points="1863.45 1.75 1836.25 28.95 1653.24 211.96 1648.12 206.84 1831.13 23.83 1853.21 1.75 1863.45 1.75"
                />
                <polygon
                  :fill="circuit.color_scheme.secondary"
                  points="1761.02 212.29 1431.57 541.75 1421.33 541.75 1755.91 207.17 1758.35 209.62 1761.02 212.29"
                />
              </g>
              <g id="other">
                <polygon class="cls-7" points="1165.42 1.75 625.42 541.75 523.58 541.75 1063.58 1.75 1165.42 1.75" />
              </g>
              <g id="text-country" width="100%" class="text-country-clipping">
                <polygon
                  :fill="circuit.color_scheme.tertiary"
                  points="1704.25 170.25 1205.3 541.75 0 541.75 725.25 1.75 1473.23 1.75 1475.58 0 1477.94 1.75 1503.62 20.88 1649.86 129.76 1704.25 170.25"
                />
                <polygon
                  :fill="circuit.color_scheme.primary"
                  points="1920 112.7 1920 224.1 1602.35 541.75 698.79 541.75 1238.79 1.75 1341.24 1.75 1342.99 0 1344.75 1.75 1809.05 1.75 1814.98 7.68 1831.13 23.83 1836.25 28.95 1920 112.7"
                />
                <polygon
                  :fill="circuit.color_scheme.secondary"
                  points="1920 1.75 1920 541.75 1060.76 541.75 1600.76 1.75 1920 1.75"
                />
              </g>
              <g id="text-year" width="100%" class="text-year-clipping">
                <polygon
                  :fill="circuit.color_scheme.tertiary"
                  points="1704.25 170.25 1205.3 541.75 0 541.75 725.25 1.75 1473.23 1.75 1475.58 0 1477.94 1.75 1503.62 20.88 1649.86 129.76 1704.25 170.25"
                />
                <polygon
                  :fill="circuit.color_scheme.primary"
                  points="1920 112.7 1920 224.1 1602.35 541.75 698.79 541.75 1238.79 1.75 1341.24 1.75 1342.99 0 1344.75 1.75 1809.05 1.75 1814.98 7.68 1831.13 23.83 1836.25 28.95 1920 112.7"
                />
                <polygon
                  :fill="circuit.color_scheme.secondary"
                  points="1920 1.75 1920 541.75 1060.76 541.75 1600.76 1.75 1920 1.75"
                />
              </g>
            </g>
          </g>
        </svg>

        <result-content v-bind="contentProps" />
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Id',
  asyncData ({
    params,
    redirect
  }) {
    const round = params.id

    if (round === undefined) {
      console.log('No ID given, redirecting to the Home page')
      redirect('/')
    }

    return {
      round
    }
  },
  data () {
    return {
      race: null,
      qualifying: null,
      practice1: null,
      practice2: null,
      practice3: null,
      circuit: null,
      weekendSchedule: null
    }
  },
  async fetch () {
    const circuit = await fetch(`http://localhost:5000/api/gpCircuit/${this.round}`).then(res => res.json())
    const race = await fetch(`http://localhost:5000/api/races/${this.round}`).then(res => res.json())
    const qualifying = await fetch(`http://localhost:5000/api/qualifying/${this.round}`).then(res => res.json())
    const practice1 = await fetch(`http://localhost:5000/api/practices/${circuit.country}/1`).then(res => res.json())
    const practice2 = await fetch(`http://localhost:5000/api/practices/${circuit.country}/2`).then(res => res.json())
    const practice3 = await fetch(`http://localhost:5000/api/practices/${circuit.country}/3`).then(res => res.json())
    const weekendSchedule = await fetch(`http://localhost:5000/api/weekendSchedules/${this.round}`).then(res => res.json())

    // console.log(practice1)
    // console.log(practice2)
    // console.log(practice3)
    // console.log(qualifying)
    // console.log(race)
    // console.log(weekendSchedule)

    if (!race.error) {
      this.race = race
    }
    if (!qualifying.error) {
      this.qualifying = qualifying
    }
    if (!practice1.error) {
      this.practice1 = practice1
    }
    if (!practice2.error) {
      this.practice2 = practice2
    }
    if (!practice3.error) {
      this.practice3 = practice3
    }
    if (circuit.circuit_id) {
      this.circuit = circuit
    }
    if (weekendSchedule.race) {
      this.weekendSchedule = weekendSchedule
    }
    // ERROR HANDLING
    // else {
    //   if (process.server) {
    //     this.$nuxt.context.res.statusCode = 404
    //   }
    //   // use throw new Error()
    //   throw new Error('Post not found')
    // }
  },
  computed: {
    contentProps () {
      return {
        race: this.race,
        qualifying: this.qualifying,
        practice1: this.practice1,
        practice2: this.practice2,
        practice3: this.practice3,
        circuit: this.circuit,
        weekendSchedule: this.weekendSchedule
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;

  svg {
    padding: 0;
    margin: 0;
  }
}
</style>
