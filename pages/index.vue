<template>
<!--    <v-container class="fill-width fill-height">-->
<!--      <v-row-->
<!--        no-gutters-->
<!--        justify="center"-->
<!--        class="fill-width fill-height"-->
<!--      >-->
<!--        <v-col-->
<!--          class="justify-center align-center d-flex fill-height"-->
<!--        >-->
<!--          <gp-card />-->
<!--        </v-col>-->
<!--        <v-col class="justify-center align-center d-flex fill-height">-->
<!--          <gp-card />-->
<!--        </v-col>-->
<!--        <v-col class="justify-center align-center d-flex fill-height">-->
<!--          <gp-card />-->
<!--        </v-col>-->
<!--      </v-row>-->
<!--    </v-container>-->

  <!--  <card-carousel>-->
  <!--    <gp-card />-->
  <!--    <gp-card />-->
  <!--    <gp-card />-->
  <!--  </card-carousel>-->

  <hungary-flag style="width: 50%"/>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      schedule: []
    }
  },
  mounted () {
    this.getSchedule()
  },
  methods: {
    getSchedule () {
      this.$axios.$get('/api/get_schedule').then((response) => {
        this.schedule = response
      })
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 50%;
}
</style>
