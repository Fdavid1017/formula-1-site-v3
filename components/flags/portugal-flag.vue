<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1016.62 880.49">
    <defs>
      <style>.cls-1 {
        fill: none;
        }

        .cls-2 {
        clip-path: url(#clip-path);
        }

        .cls-3 {
        fill: #fd0000;
        }

        .cls-4 {
        fill: #016600;
        }</style>
      <clipPath id="clip-path" transform="translate(0 154.05)">
        <rect class="cls-1" width="1016.62" height="607.37" />
      </clipPath>
    </defs>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Portugal">
        <g class="cls-2">
          <rect class="cls-3" x="386.03" y="153.82" width="630.59" height="607.6" />
          <polygon class="cls-4" points="0 761.19 386.03 761.19 430.93 154.05 0 154.05 0 761.19" />
          <rect
            id="line-1"
            class="cls-4"
            x="809.25"
            y="65.94"
            width="21.3"
            height="403.61"
          />
          <rect
            id="line-2"
            class="cls-4"
            x="773.34"
            y="309.03"
            width="10.65"
            height="403.61"
          />
          <rect
            id="line-3"
            class="cls-4"
            x="851.17"
            y="424.72"
            width="5.32"
            height="403.61"
          />
          <rect id="line-4" class="cls-4" x="472.32" width="5.32" height="403.61" />
          <rect
            id="line-5"
            class="cls-4"
            x="516.82"
            y="222.92"
            width="5.32"
            height="403.61"
          />
          <rect
            id="line-6"
            class="cls-4"
            x="580.09"
            y="476.89"
            width="12.15"
            height="403.61"
          />
          <rect
            id="line-7"
            class="cls-4"
            x="659.18"
            y="266.06"
            width="6.07"
            height="128.32"
          />
          <rect
            id="line-8"
            class="cls-3"
            x="54.8"
            y="128.42"
            width="6.07"
            height="645.36"
          />
          <rect
            id="line-9"
            class="cls-3"
            x="127.05"
            y="134.99"
            width="10.37"
            height="265.52"
          />
          <rect
            id="line-10"
            class="cls-3"
            x="145.31"
            y="185.57"
            width="10.37"
            height="265.52"
          />
          <rect
            id="line-11"
            class="cls-3"
            x="173.31"
            y="403.61"
            width="5.18"
            height="265.52"
          />
          <rect
            id="line-12"
            class="cls-3"
            x="325.42"
            y="476.89"
            width="5.18"
            height="265.52"
          />
          <rect
            id="line-13"
            class="cls-3"
            x="270.66"
            y="197.46"
            width="5.18"
            height="265.52"
          />
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'PortugalFlag'
}
</script>

<style lang="scss" scoped>
@import "flag-animations";

svg {
  #Layer_2 {
    #Portugal {
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
      #line-12,
      #line-13 {
        animation: topToBottom 4s infinite linear;
      }
    }
  }
}
</style>
