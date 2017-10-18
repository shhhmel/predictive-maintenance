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
        let count = 0;
        response.body.forEach(function(element) {
            if (element.Direction == this.direction && count < 100 && element.AverageTorque) {
                this.labels.push(count);
                this.data.push(element.AverageTorque);
                count++;
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

        this.renderChart(this.someData, {
            responsive: true,
            scales: {
            xAxes: [ {
               categoryPercentage: 0.9,
               barPercentage: 0.5
            }]
          }})
    }, response => {
        console.error('Error')
    });

  }
}