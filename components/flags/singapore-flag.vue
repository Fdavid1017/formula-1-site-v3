<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1016.62 621.64">
    <defs>
      <style>.singapore-1 {
        fill: #ed2839;
        }

        .singapore-2 {
        fill: #fff;
        }

        .singapore-3 {
        fill: #e6e6e6;
        }

        .singapore-4 {
        fill: #f2f2f2;
        }</style>
    </defs>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Singapore">
        <rect class="singapore-1" width="1016.62" height="621.64" />
        <polygon class="singapore-2" points="1016.62 252.45 0 310.82 0 621.64 1016.62 621.64 1016.62 252.45" />
        <rect
          id="line-1"
          class="singapore-3"
          x="131.34"
          y="180.74"
          width="10.65"
          height="386.06"
        />
        <rect
          id="line-2"
          class="singapore-3"
          x="889.62"
          y="28.63"
          width="5.32"
          height="386.06"
        />
        <rect
          id="line-3"
          class="singapore-3"
          x="508.62"
          y="18.63"
          width="5.32"
          height="386.06"
        />
        <rect
          id="line-4"
          class="singapore-3"
          x="472.83"
          y="108.38"
          width="5.32"
          height="386.06"
        />
        <rect
          id="line-5"
          class="singapore-4"
          x="670.58"
          y="60.18"
          width="11.41"
          height="161.48"
          transform="translate(1352.56 281.84) rotate(180)"
        />
        <rect
          id="line-6"
          class="singapore-1"
          x="929.97"
          y="289.8"
          width="5.7"
          height="259.93"
          transform="translate(1865.65 839.53) rotate(180)"
        />
        <rect
          id="line-7"
          class="singapore-1"
          x="231.2"
          y="307.08"
          width="5.7"
          height="259.93"
          transform="translate(468.11 874.09) rotate(180)"
        />
        <rect
          id="line-8"
          class="singapore-1"
          x="247.32"
          y="211.76"
          width="5.7"
          height="259.93"
          transform="translate(500.35 683.46) rotate(180)"
        />
        <rect
          id="line-9"
          class="singapore-1"
          x="588.65"
          y="243.81"
          width="5.7"
          height="259.93"
          transform="translate(1183 747.55) rotate(180)"
        />
        <rect
          id="line-10"
          class="singapore-1"
          x="353.82"
          y="211.76"
          width="11.77"
          height="259.93"
          transform="translate(719.41 683.46) rotate(180)"
        />
        <g id="Layer_18" data-name="Layer 18">
          <path class="singapore-2" d="M320.22,154.86A115.76,115.76,0,1,1,204.46,39.1,115.76,115.76,0,0,1,320.22,154.86Z" />
          <path class="singapore-1" d="M356.59,154.86A109.4,109.4,0,1,1,247.2,45.47,109.39,109.39,0,0,1,356.59,154.86Z" />
          <path
            id="star"
            class="singapore-2"
            d="M218.79,157.65l-15.73-12.06-15.72,12.07,6-19.45-15.77-12,19.46,0,6-19.48,6,19.47,19.47,0-15.77,12Z"
          />
          <path
            id="star-2"
            data-name="star"
            class="singapore-2"
            d="M342.17,157.65l-15.72-12.06-15.72,12.07,6-19.45-15.78-12,19.47,0,6-19.48,6,19.47,19.46,0-15.77,12Z"
          />
          <path
            id="star-3"
            data-name="star"
            class="singapore-2"
            d="M280.54,111.86,264.82,99.8,249.1,111.87l6.05-19.46-15.78-12,19.47,0,6-19.48,6,19.47,19.46,0-15.77,12Z"
          />
          <path
            id="star-4"
            data-name="star"
            class="singapore-2"
            d="M241.87,230.92l-15.72-12.06-15.72,12.07,6-19.45-15.77-12,19.46.05,6-19.48,6,19.47,19.47,0-15.77,12Z"
          />
          <path
            id="star-5"
            data-name="star"
            class="singapore-2"
            d="M319.09,230.92l-15.73-12.06-15.72,12.07,6.05-19.45-15.77-12,19.46.05,6-19.48,6,19.47,19.47,0-15.77,12Z"
          />
        </g>
        <rect
          id="line-11"
          class="singapore-3"
          x="105.48"
          y="50.98"
          width="10.65"
          height="386.06"
        />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'SingaporeFlag'
}
</script>

<style lang="scss" scoped>
@import "flag-animations";

svg {
  #Layer_2 {
    #Singapore {
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

      #line-10 {
        animation: topToBottom 4s infinite linear;
      }
    }
  }
}
</style>
