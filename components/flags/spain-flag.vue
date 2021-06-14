<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1016.62 607.6">
    <defs>
      <style>.spain-1 {
        fill: #ffc400;
        }

        .spain-2 {
        fill: #c60b1e;
        }

        .spain-3 {
        fill: #b50b24;
        }

        .spain-4 {
        fill: #efb000;
        }</style>
    </defs>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Spain">
        <rect class="spain-1" width="1016.62" height="607.6" />
        <polygon class="spain-2" points="1016.62 150.38 0 195 0 0 1016.62 0 1016.62 150.38" />
        <polygon class="spain-2" points="1016.62 607.6 0 607.6 0 457.22 1016.62 411 1016.62 607.6" />
        <rect
          id="line-1"
          class="spain-2"
          x="136.92"
          y="199.56"
          width="7.1"
          height="211.44"
        />
        <rect
          id="line-2"
          class="spain-2"
          x="160.24"
          y="219.16"
          width="7.1"
          height="98.58"
        />
        <rect
          id="line-3"
          class="spain-3"
          x="314.13"
          y="68.74"
          width="7.73"
          height="175.54"
        />
        <rect
          id="line-4"
          class="spain-3"
          x="713.62"
          y="7.91"
          width="14.56"
          height="307.17"
        />
        <rect
          id="line-5"
          class="spain-3"
          x="692.55"
          y="205.74"
          width="7.28"
          height="307.17"
        />
        <rect
          id="line-6"
          class="spain-3"
          x="905.41"
          y="289.22"
          width="7.28"
          height="220.48"
        />
        <rect
          id="line-7"
          class="spain-3"
          x="528.69"
          y="55.56"
          width="7.28"
          height="445.83"
        />
        <rect
          id="line-8"
          class="spain-4"
          x="59.21"
          y="24.02"
          width="7.73"
          height="175.54"
        />
        <rect
          id="line-9"
          class="spain-4"
          x="217.41"
          y="295.04"
          width="7.73"
          height="261.98"
        />
        <rect
          id="line-10"
          class="spain-4"
          x="236.87"
          y="228.34"
          width="7.73"
          height="261.98"
        />
        <rect
          id="line-11"
          class="spain-4"
          x="454.18"
          y="59.35"
          width="7.73"
          height="261.98"
        />
        <rect id="line-12" class="spain-4" x="856.28" width="7.73" height="261.98" />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'SpainFlag'
}
</script>

<style lang="scss" scoped>
@import "flag-animations";

svg {
  #Layer_2 {
    #Spain {
      #line-1 {
        animation: topToBottom 3.5s infinite linear;
      }

      #line-2 {
        animation: topToBottom 2.5s infinite linear;
      }

      #line-3,
      #line-4,
      #line-8 {
        animation: topToBottom 2s infinite linear;
      }

      #line-5 {
        animation: topToBottom 4s infinite linear;
      }

      #line-6,
      #line-7 {
        animation: bottomToTop 3s infinite linear;
      }

      #line-9,
      #line-11 {
        animation: bottomToTop 5s infinite linear;
      }

      #line-10,
      #line-12 {
        animation: topToBottom 4s infinite linear;
      }
    }
  }
}
</style>
