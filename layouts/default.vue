<template>
  <v-app>
    <nav-bar />
    <nuxt />
    <div class="snackbar-container">
      <v-snackbar
        v-model="snackbarShow"
        absolute
        shaped
        :timeout="4000"
        @input="hide"
      >
        {{ snackbarText }}
        <template #action="{ attrs }">
          <v-btn
            color="red"
            text
            v-bind="attrs"
            @click="hide"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </v-app>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    snackbarShow () {
      return this.$store.getters['snackbar/getShow']
    },
    snackbarText () {
      return this.$store.getters['snackbar/getText']
    }
  },
  methods: {
    hide () {
      console.log('snackbar hide')
      this.$store.dispatch('snackbar/hide')
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: 'Formula1 Bold';
}

.theme--light.v-application {
  background-color: #EAEAEA !important;
}

.snackbar-container {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>
