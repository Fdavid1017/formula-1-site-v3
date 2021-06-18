<template>
  <div class="container">
    <v-row>
      <v-col id="title">
        {{ title }}
      </v-col>
    </v-row>
    <v-row>
      <v-col id="data">
        <v-row>
          <v-col class="d-flex align-end">{{ data }}</v-col>
          <v-col v-if="unit" class="unit d-flex align-end">
            {{ unit }}
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'InfoPanel',
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: String,
      default: ''
    },
    unit: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  -webkit-box-shadow: 5px -5px 0px 0px $F1-red;
  box-shadow: 5px -5px 0px 0px $F1-red;

  -webkit-border-radius: 0px 15px 0px 0px;
  -moz-border-radius: 0px 15px 0px 0px;
  border-radius: 0px 15px 0px 0px;

  font-family: "Formula1 Bold";

  #title {
    color: #A0A0A0;
    font-size: 1.5em;
    padding: 0;
  }

  #data {
    color: white;
    font-size: 2em;
    padding: 0;

    .unit {
      padding-left: 0;
      margin-left: 0;
      font-size: 0.75em !important;
    }
  }
}
</style>
