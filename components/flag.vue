<template>
  <div class="flag">
    <component :is="flagComponent" />
  </div>
</template>

<script>

export default {
  name: 'Flag',
  props: {
    country: {
      type: String,
      default:
        'Hungary'
    }
  },
  computed: {
    flagComponent () {
      let countryComponent = ''

      if (this.country.toLowerCase() === 'australia') {
        countryComponent = 'australia'
      } else if (this.country.toLowerCase() === 'austria') {
        countryComponent = 'austria'
      } else if (this.country.toLowerCase() === 'azerbaijan') {
        countryComponent = 'azerbaijan'
      } else if (this.country.toLowerCase() === 'bahrain') {
        countryComponent = 'bahrain'
      } else if (this.country.toLowerCase() === 'belgium') {
        countryComponent = 'belgium'
      } else if (this.country.toLowerCase() === 'brazil') {
        countryComponent = 'brazil'
      } else if (this.country.toLowerCase() === 'france') {
        countryComponent = 'france'
      } else if (this.country.toLowerCase() === 'hungary') {
        countryComponent = 'hungary'
      } else if (this.country.toLowerCase() === 'italy') {
        countryComponent = 'italy'
      } else if (this.country.toLowerCase() === 'japan') {
        countryComponent = 'japan'
      } else if (this.country.toLowerCase() === 'mexico') {
        countryComponent = 'mexico'
      } else if (this.country.toLowerCase() === 'monaco') {
        countryComponent = 'monaco'
      } else if (this.country.toLowerCase() === 'netherlands') {
        countryComponent = 'netherlands'
      } else if (this.country.toLowerCase() === 'portugal') {
        countryComponent = 'portugal'
      } else if (this.country.toLowerCase() === 'russia') {
        countryComponent = 'russia'
      } else if (this.country.toLowerCase() === 'saudi arabia') {
        countryComponent = 'saudi-arabia'
      } else if (this.country.toLowerCase() === 'singapore') {
        countryComponent = 'singapore'
      } else if (this.country.toLowerCase() === 'spain') {
        countryComponent = 'spain'
      } else if (this.country.toLowerCase() === 'uae') {
        countryComponent = 'uae'
      } else if (this.country.toLowerCase() === 'uk') {
        countryComponent = 'uk'
      } else if (this.country.toLowerCase() === 'usa') {
        countryComponent = 'usa'
      } else {
        return this.country.toLowerCase()
      }

      return () => import('./flags/' + countryComponent + '-flag.vue')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
