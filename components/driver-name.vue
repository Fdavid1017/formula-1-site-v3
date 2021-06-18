<template>
  <v-row>
    <v-col
      id="number"
      cols="3"
      class="fill-width fill-height d-flex justify-center align-middle"
    >
      <div :style="`background-color: ${colorCode}`">
        {{ number }}
      </div>
    </v-col>
    <v-col id="name">
      {{ name }}
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'DriverName',
  props: {
    number: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    },
    colorCode: {
      type: String,
      default: '#b4b4b4'
    }
  }
}
</script>

<style lang="scss" scoped>
#number {
  div {
    width: 100%;
    text-align: center;
    border-radius: 200px 200px 200px 200px;
    -webkit-border-radius: 200px 200px 200px 200px;
    -moz-border-radius: 200px 200px 200px 200px;
  }
}

#name {

}
</style>
