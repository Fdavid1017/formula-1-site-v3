import Vue from 'vue'
import { Line, mixins } from 'vue-chartjs'

const { reactiveProp } = mixins

Vue.component('LineChart', {
  extends: Line,
  mixins: [reactiveProp],
  props: {
    // data: {
    //   type: Object,
    //   default: null
    // },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
})
