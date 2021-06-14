<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1016.62 607.6">
    <defs>
      <style>.uae-1 {
        fill: #00732e;
        }

        .uae-2 {
        fill: #fff;
        }

        .uae-3 {
        fill: #fe0000;
        }

        .uae-4 {
        fill: #ddd;
        }

        .uae-5 {
        fill: #005b25;
        }

        .uae-6 {
        fill: #1a1a1a;
        }</style>
    </defs>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Abu_Dhabi">
        <g id="flag">
          <rect class="uae-1" width="1016.62" height="202.53" />
          <rect class="uae-2" y="202.53" width="1016.62" height="202.53" />
          <rect y="405.06" width="1016.62" height="202.53" />
          <rect class="uae-3" width="316.63" height="607.6" />
        </g>
        <rect
          id="line-1"
          class="uae-1"
          x="231.61"
          y="34.81"
          width="7.73"
          height="320"
        />
        <rect
          id="line-2"
          class="uae-1"
          x="199.17"
          y="121.47"
          width="9.33"
          height="228"
        />
        <rect id="line-3" x="43.17" y="164.73" width="9.33" height="382.07" />
        <rect id="line-4" x="13.84" y="11.08" width="8" height="134.39" />
        <rect
          id="line-5"
          class="uae-2"
          x="139.17"
          y="53.56"
          width="19.14"
          height="434.58"
        />
        <rect
          id="line-6"
          class="uae-4"
          x="395.73"
          y="34.81"
          width="4.46"
          height="149.33"
        />
        <rect
          id="line-7"
          class="uae-4"
          x="561.84"
          y="66.81"
          width="6.67"
          height="209.1"
        />
        <rect
          id="line-8"
          class="uae-4"
          x="532.51"
          y="184.14"
          width="8"
          height="244"
        />
        <rect
          id="line-9"
          class="uae-5"
          x="933.84"
          y="53.56"
          width="6.67"
          height="445.5"
        />
        <rect
          id="line-10"
          class="uae-5"
          x="738.95"
          y="66.81"
          width="10.89"
          height="288.96"
        />
        <rect
          id="line-11"
          class="uae-5"
          x="444.51"
          y="66.81"
          width="8"
          height="204.04"
        />
        <rect
          id="line-12"
          class="uae-6"
          x="621.84"
          y="184.14"
          width="9.33"
          height="314.92"
        />
        <rect
          id="line-13"
          class="uae-6"
          x="823.17"
          y="128.14"
          width="10.27"
          height="226.67"
        />
        <rect
          id="line-14"
          class="uae-6"
          x="341.84"
          y="373.47"
          width="8"
          height="200"
        />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'UaeFlag'
}
</script>

<style lang="scss" scoped>
@import "flag-animations";

svg {
  #Layer_2 {
    #Abu_Dhabi {
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

      #line-14 {
        animation: topToBottom 2.75s infinite linear;
      }
    }
  }
}
</style>
