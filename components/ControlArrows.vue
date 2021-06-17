<template>
  <div class="control-buttons-container">
    <v-row class="fill-width" align="center" justify="center">
      <v-col>
        <img class="left-button" src="~static/chevron.svg" @click="$emit('onLeftArrowClick')">
      </v-col>
      <v-col class="text-right">
        <img class="right-button" src="~static/chevron.svg" @click="$emit('onRightArrowClick')">
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'ControlArrows',
  methods: {
    onLeftArrowClick () {
      this.$emit('onLeftArrowClick')
    },
    onRightArrowClick () {
      this.$emit('onRightArrowClick')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~assets/scss/drivers-background-animations.scss";

.control-buttons-container {
  position: absolute;
  top: 10%;
  width: 100%;
  z-index: 3;

  $chevron-hover-time: 0.25s;

  .left-button,
  .right-button {
    width: 6em;
    cursor: pointer;
    transition: width $chevron-hover-time;

    &:hover {
      width: 5em;
    }
  }

  $chevron-drop-shadow-x: 0.25em;
  $chevron-drop-shadow-y: 0.25em;
  $chevron-drop-shadow-blur: 0.4em;
  $chevron-drop-shadow-color: rgba(0, 0, 0, 0.5);

  @function neg($value) {
    @return $value * -1
  }

  .left-button {
    transform: rotateZ(180deg);
    filter: drop-shadow(neg($chevron-drop-shadow-x) neg($chevron-drop-shadow-x) $chevron-drop-shadow-blur $chevron-drop-shadow-color);
    -webkit-filter: drop-shadow(neg($chevron-drop-shadow-x) neg($chevron-drop-shadow-x) $chevron-drop-shadow-blur $chevron-drop-shadow-color);
    -moz-filter: drop-shadow(neg($chevron-drop-shadow-x) neg($chevron-drop-shadow-x) $chevron-drop-shadow-blur $chevron-drop-shadow-color);
  }

  .right-button {
    filter: drop-shadow($chevron-drop-shadow-x $chevron-drop-shadow-x $chevron-drop-shadow-blur $chevron-drop-shadow-color);
    -webkit-filter: drop-shadow($chevron-drop-shadow-x $chevron-drop-shadow-x $chevron-drop-shadow-blur $chevron-drop-shadow-color);
    -moz-filter: drop-shadow($chevron-drop-shadow-x $chevron-drop-shadow-x $chevron-drop-shadow-blur $chevron-drop-shadow-color);
  }
}
</style>
