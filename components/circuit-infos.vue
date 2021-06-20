<template>
  <div class="container fill-height fill-width">
    <v-row>
      <v-col><img class="circuit-image" :src="circuitImage"></v-col>
      <v-col>
        <v-row class="fill-width">
          <v-col class="d-flex justify-center">
            <info-panel title="" :data="circuit.name" />
          </v-col>
        </v-row>
        <v-row class="fill-width">
          <v-col class="d-flex justify-center">
            <info-panel title="First GP" :data="circuit.first_gp.toString()" />
          </v-col>
          <v-col class="d-flex justify-center">
            <info-panel title="Number of laps" :data="circuit.number_of_laps.toString()" />
          </v-col>
        </v-row>
        <v-row class="fill-width">
          <v-col class="d-flex justify-center">
            <info-panel title="Circuit length" :data="circuit.length.toString()" unit="km" />
          </v-col>
          <v-col class="d-flex justify-center">
            <info-panel title="Race distance" :data="circuit.race_distance.toString()" unit="km" />
          </v-col>
        </v-row>
        <v-row class="fill-width">
          <v-col class="d-flex justify-center">
            <geo-map :geo-json-name="circuit.gjson_map" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'CircuitInfos',
  props: {
    circuit: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    circuitImage () {
      return require(`static/circuits/detailed_images/${this.circuit.image_location}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  font-family: "Formula1 Bold";
  color: white;

  .circuit-image {
    width: 100%;
  }
}
</style>
