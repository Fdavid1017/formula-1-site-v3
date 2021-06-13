<template>
  <div>
    <ul>
      <li v-for="r in rounds" :key="r">
        {{ r }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'CardCarousel',
  setup (props, { slots }) {
    const rounds = ref(slots.default().map(gpCard => gpCard.props.round))
    return {
      rounds
    }
  }
}
</script>

<style scoped>

</style>
