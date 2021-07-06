<template>
  <div class="fill-height fill-width p-0 m-0">
    <v-container class="container">
      <div v-if="$fetchState.pending">
        Fetching data from the server! Please wait...
      </div>
      <div v-else class="fill-width fill-height p-0 m-0">
        <race-banner :circuit="circuit" />

        <result-content v-bind="contentProps" />
      </div>
    </v-container>
  </div>
</template>

<script>
import RaceBanner from '@/components/RaceBanner'

export default {
  name: 'Id',
  components: { RaceBanner },
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
    // console.log(circuit)
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
    top: 0;
  }
}
</style>
