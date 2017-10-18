import {Bar} from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['direction'],
  data() {
      return {
        someData: '',
        data: [],
        labels: []
      }
  },
  mounted() {
    this.$http.get('http://wb-predictivemaintenance-api.prsp7vkew2.eu-central-1.elasticbeanstalk.com/api/TorqueValues').then(response => {
        console.log('this.data.length', this.data.length)

        response.body.forEach(function(element, index) {
            if (this.data.length < 100 ) {
                this.labels.push(index);
                this.data.push(element.LastTorque);
            }
        }, this);

        this.someData = {
            labels: this.labels,
            datasets: [{
                label: this.direction,
                backgroundColor: '#f87979',
                data: this.data
            }]
        }

        console.log('this.data.length', this.data.length)

        this.renderChart(this.someData, {responsive: true, maintainAspectRatio: false})

        console.log('someData', this.someData);
    }, response => {
        console.error('Error')
    });

  }
}