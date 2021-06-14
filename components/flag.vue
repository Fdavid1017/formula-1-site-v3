<template>
  <div class="flag">
    <!--    <lazy-flags-australia-flag v-if="country==='australia'" />-->
    <!--    <lazy-flags-austria-flag v-else-if="country==='austria'" />-->
    <!--    <lazy-flags-azerbaijan-flag v-else-if="country==='azerbaijan'" />-->
    <!--    <lazy-flags-bahrain-flag v-else-if="country==='bahrain'" />-->
    <!--    <lazy-flags-belgium-flag v-else-if="country==='belgium'" />-->
    <!--    <lazy-flags-brazil-flag v-else-if="country==='brazil'" />-->
    <!--    <lazy-flags-france-flag v-else-if="country==='france'" />-->
    <!--    <lazy-flags-hungary-flag v-else-if="country==='hungary'" />-->
    <!--    <lazy-flags-italy-flag v-else-if="country==='italy'" />-->
    <!--    <lazy-flags-japan-flag v-else-if="country==='japan'" />-->
    <!--    <lazy-flags-mexico-flag v-else-if="country==='mexico'" />-->
    <!--    <lazy-flags-monaco-flag v-else-if="country==='monaco'" />-->
    <!--    <lazy-flags-netherlands-flag v-else-if="country==='netherlands'" />-->
    <!--    <lazy-flags-portugal-flag v-else-if="country==='portugal'" />-->
    <!--    <lazy-flags-russia-flag v-else-if="country==='russia'" />-->
    <!--    <lazy-flags-saud-arabia-flag v-else-if="country==='saudi arabia'" />-->
    <!--    <lazy-flags-singapore-flag v-else-if="country==='singapore'" />-->
    <!--    <lazy-flags-spain-flag v-else-if="country==='spain'" />-->
    <!--    <lazy-flags-uae-flag v-else-if="country==='uae'" />-->
    <!--    <lazy-flags-uk-flag v-else-if="country==='uk'" />-->
    <!--    <lazy-flags-usa-flag v-else-if="country==='usa'" />-->
    <!--    <div v-else>-->
    <!--      {{ country }}-->
    <!--    </div>-->
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
        countryComponent = 'saudi arabia'
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

      // return `~components/flags/${countryComponent}-flag.vue`

      // console.log(`/flags/${countryComponent}-flag.vue`)
      return () => import('./flags/' + countryComponent + '-flag.vue')
    }
  }
}
</script>

<style lang="scss" scoped>
.flag {
  margin: 0;
  padding: 0;
}
</style>
