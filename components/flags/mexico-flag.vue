<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1016.62 607.6">
    <defs>
      <style>.mexico-1 {
        fill: #f2f2f2;
        }

        .mexico-2 {
        fill: #ce1127;
        }

        .mexico-3 {
        fill: #006847;
        }</style>
    </defs>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Mexico">
        <rect class="mexico-1" width="1016.62" height="607.6" />
        <polygon class="mexico-2" points="1016.62 607.6 683.99 607.6 619.28 0 1016.62 0 1016.62 607.6" />
        <polygon class="mexico-3" points="332.63 607.6 0 607.6 0 0 352.24 0 332.63 607.6" />
        <rect
          id="line-1"
          class="mexico-2"
          x="56.8"
          y="42.28"
          width="13.18"
          height="565.31"
        />
        <rect id="line-2" class="mexico-2" x="81.14" width="6.08" height="231.92" />
        <rect id="line-3" class="mexico-2" x="101.42" width="5.07" height="411.41" />
        <rect
          id="line-4"
          class="mexico-2"
          x="217.03"
          y="243.07"
          width="6.08"
          height="216"
        />
        <rect
          id="line-5"
          class="mexico-2"
          x="639.9"
          y="115.96"
          width="6.08"
          height="392.8"
        />
        <rect
          id="line-6"
          class="mexico-2"
          x="458.38"
          y="140.65"
          width="3.04"
          height="399.55"
        />
        <rect id="line-7" class="mexico-2" x="529.37" width="10.14" height="222.79" />
        <rect
          id="line-8"
          class="mexico-2"
          x="503"
          y="9.83"
          width="5.31"
          height="238.31"
        />
        <rect id="line-9" class="mexico-2" x="486.77" width="4.06" height="248.14" />
        <rect
          id="line-10"
          class="mexico-3"
          x="582.1"
          y="210.62"
          width="6.08"
          height="396.97"
        />
        <rect id="line-11" class="mexico-3" x="614.55" width="10.14" height="210.62" />
        <rect
          id="line-12"
          class="mexico-3"
          x="402.61"
          y="42.28"
          width="3.04"
          height="242.37"
        />
        <rect
          id="line-13"
          class="mexico-3"
          x="515.17"
          y="248.14"
          width="4.06"
          height="210.93"
        />
        <rect id="line-14" class="mexico-3" x="873.14" width="8.11" height="459.07" />
        <rect
          id="line-15"
          class="mexico-3"
          x="753.48"
          y="100.09"
          width="3.04"
          height="317.41"
        />
        <rect
          id="line-16"
          class="mexico-3"
          x="860.97"
          y="105.31"
          width="5.07"
          height="353.76"
        />
        <rect
          id="line-17"
          class="mexico-3"
          x="894.44"
          y="346.51"
          width="5.07"
          height="261.09"
        />
        <rect id="line-18" class="mexico-1" x="990.77" width="5.07" height="312.36" />
        <rect id="line-19" class="mexico-1" x="966.44" width="8.11" height="340.42" />
        <rect
          id="line-20"
          class="mexico-1"
          x="797.08"
          y="73.72"
          width="13.18"
          height="161.24"
        />
        <rect
          id="line-21"
          class="mexico-1"
          x="686.55"
          y="35.18"
          width="5.07"
          height="111.55"
        />
        <rect
          id="line-22"
          class="mexico-1"
          x="281.93"
          y="29.1"
          width="4.06"
          height="343.77"
        />
        <rect
          id="line-23"
          class="mexico-1"
          x="140.97"
          y="265.38"
          width="5.07"
          height="342.21"
        />
        <rect id="line-24" class="mexico-1" x="176.12" width="8.46" height="231.92" />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'MexicoFlag'
}
</script>

<style lang="scss" scoped>
@import "flag-animations";

svg {
  #Layer_2 {
    #Mexico {
      #line-1,
      #line-21,
      #line-22 {
        animation: topToBottom 3.5s infinite linear;
      }

      #line-2,
      #line-19,
      #line-20 {
        animation: topToBottom 2.5s infinite linear;
      }

      #line-3,
      #line-4,
      #line-8 {
        animation: topToBottom 2s infinite linear;
      }

      #line-5,
      #line-17,
      #line-18,
      #line-23 {
        animation: topToBottom 4s infinite linear;
      }

      #line-6,
      #line-7 {
        animation: bottomToTop 3s infinite linear;
      }

      #line-9,
      #line-11,
      #line-24 {
        animation: bottomToTop 5s infinite linear;
      }

      #line-10,
      #line-11,
      #line-12,
      #line-13 {
        animation: topToBottom 4s infinite linear;
      }

      #line-14,
      #line-15,
      #line-16 {
        animation: topToBottom 2.75s infinite linear;
      }
    }
  }
}
</style>
