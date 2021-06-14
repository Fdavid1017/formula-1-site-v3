<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1016.62 621.64">
    <defs>
      <style>.monaco-1 {
        fill: #ce1126;
        }

        .monaco-2 {
        fill: #fff;
        }

        .monaco-3 {
        fill: #e6e6e6;
        }

        .monaco-4 {
        fill: #f2f2f2;
        }

        .monaco-5 {
        fill: #b2041d;
        }

        .monaco-6 {
        fill: #ad021b;
        }</style>
    </defs>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Monaco">
        <rect class="monaco-1" width="1016.62" height="621.64" />
        <polygon class="monaco-2" points="1016.62 252.45 0 310.82 0 621.64 1016.62 621.64 1016.62 252.45" />
        <rect
          id="line-1"
          class="monaco-3"
          x="105.48"
          y="50.98"
          width="10.65"
          height="386.06"
        />
        <rect
          id="line-2"
          class="monaco-3"
          x="131.34"
          y="180.74"
          width="10.65"
          height="386.06"
        />
        <rect
          id="line-3"
          class="monaco-3"
          x="889.62"
          y="28.63"
          width="5.32"
          height="386.06"
        />
        <rect
          id="line-4"
          class="monaco-3"
          x="508.62"
          y="18.63"
          width="5.32"
          height="386.06"
        />
        <rect
          id="line-5"
          class="monaco-3"
          x="472.83"
          y="108.38"
          width="5.32"
          height="386.06"
        />
        <rect
          id="line-6"
          class="monaco-4"
          x="670.58"
          y="60.18"
          width="11.41"
          height="161.48"
          transform="translate(1352.56 281.84) rotate(180)"
        />
        <rect
          id="line-7"
          class="monaco-4"
          x="222.65"
          y="9.49"
          width="11.41"
          height="161.48"
          transform="translate(456.7 180.46) rotate(180)"
        />
        <rect
          id="line-8"
          class="monaco-1"
          x="929.97"
          y="289.8"
          width="5.7"
          height="259.93"
          transform="translate(1865.65 839.53) rotate(180)"
        />
        <rect
          id="line-9"
          class="monaco-1"
          x="231.2"
          y="307.08"
          width="5.7"
          height="259.93"
          transform="translate(468.11 874.09) rotate(180)"
        />
        <rect
          id="line-10"
          class="monaco-1"
          x="247.32"
          y="211.76"
          width="5.7"
          height="259.93"
          transform="translate(500.35 683.46) rotate(180)"
        />
        <rect
          id="line-11"
          class="monaco-5"
          x="588.65"
          y="243.81"
          width="5.7"
          height="259.93"
          transform="translate(1183 747.55) rotate(180)"
        />
        <rect
          id="line-12"
          class="monaco-6"
          x="353.82"
          y="211.76"
          width="11.77"
          height="259.93"
          transform="translate(719.41 683.46) rotate(180)"
        />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'MonacoFlag'
}
</script>

<style lang="scss" scoped>
@import "flag-animations";

svg {
  #Layer_2 {
    #Monaco {
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
