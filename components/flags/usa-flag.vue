<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1016.62 621.64">
    <defs>
      <style>.usa-1 {
        fill: #b32134;
        }

        .usa-2 {
        fill: #fff;
        }

        .usa-3 {
        fill: #3b3b6d;
        }

        .usa-4 {
        fill: #e5e5e5;
        }

        .usa-5 {
        fill: #aa243b;
        }</style>
    </defs>
    <g id="Layer_2" data-name="Layer 2">
      <g id="USA">
        <g id="base_flag" data-name="base flag">
          <rect class="usa-1" width="1016.62" height="69.07" />
          <rect class="usa-2" y="69.07" width="1016.62" height="69.07" />
          <rect class="usa-1" y="138.14" width="1016.62" height="69.07" />
          <rect class="usa-2" y="207.21" width="1016.62" height="69.07" />
          <rect class="usa-1" y="276.29" width="1016.62" height="69.07" />
          <rect class="usa-2" y="345.36" width="1016.62" height="69.07" />
          <rect class="usa-1" y="414.43" width="1016.62" height="69.07" />
          <rect class="usa-2" y="483.5" width="1016.62" height="69.07" />
          <rect class="usa-1" y="552.57" width="1016.62" height="69.07" />
          <rect class="usa-3" width="458.28" height="345.36" />
          <rect
            id="line-9"
            class="usa-4"
            x="204.95"
            y="379.41"
            width="10.67"
            height="207.69"
          />
          <rect
            id="line-10"
            class="usa-4"
            x="532.06"
            y="27.86"
            width="8"
            height="386.57"
          />
          <rect
            id="line-11"
            class="usa-5"
            x="300.95"
            y="34.54"
            width="8.89"
            height="186.61"
          />
          <rect
            id="line-12"
            class="usa-5"
            x="65.39"
            y="129.87"
            width="7.11"
            height="194.88"
          />
          <rect
            id="line-13"
            class="usa-5"
            x="630.73"
            y="49.19"
            width="10.67"
            height="261.63"
          />
          <rect
            id="line-14"
            class="usa-5"
            x="333.84"
            y="329.19"
            width="5.33"
            height="243.56"
          />
          <rect
            id="line-15"
            class="usa-5"
            x="851.17"
            y="373.64"
            width="5.33"
            height="213.47"
          />
        </g>
        <rect
          id="line-1"
          class="usa-4"
          x="88.51"
          y="45.64"
          width="5.33"
          height="217.78"
        />
        <rect
          id="line-2"
          class="usa-4"
          x="110.73"
          y="21.64"
          width="9.78"
          height="194.67"
        />
        <rect
          id="line-3"
          class="usa-4"
          x="409.39"
          y="79.41"
          width="11.56"
          height="214.22"
        />
        <rect
          id="line-4"
          class="usa-4"
          x="229.14"
          y="180.75"
          width="9.59"
          height="134.22"
        />
        <rect
          id="line-5"
          class="usa-4"
          x="929.39"
          y="27.86"
          width="7.56"
          height="341.33"
        />
        <rect
          id="line-6"
          class="usa-4"
          x="770.28"
          y="41.19"
          width="10.67"
          height="338.7"
        />
        <rect
          id="line-7"
          class="usa-4"
          x="799.62"
          y="49.19"
          width="7.11"
          height="161.35"
        />
        <rect
          id="line-8"
          class="usa-4"
          x="748.95"
          y="293.64"
          width="11.56"
          height="171.56"
        />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'UsaFlag'
}
</script>

<style lang="scss" scoped>
@import "flag-animations";

svg {
  #Layer_2 {
    #USA {
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

      #line-14,
      #line-15 {
        animation: topToBottom 2.75s infinite linear;
      }
    }
  }
}
</style>
