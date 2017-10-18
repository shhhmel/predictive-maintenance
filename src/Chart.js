import {Bar} from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['direction'],
  data() {
      return {
        someData: '',
        averageTorque: [],
        lastTorque: [],
        labels: []
      }
  },
  mounted() {
    this.$http.get('http://wb-predictivemaintenance-api.prsp7vkew2.eu-central-1.elasticbeanstalk.com/api/TorqueValues').then(response => {
        let count = 0;
        response.body.forEach(function(element) {
            if (element.Direction == this.direction && count < 100 && element.AverageTorque && element.LastTorque ) {
                this.labels.push(count);
                this.averageTorque.push(element.AverageTorque);
                this.lastTorque.push(element.LastTorque);
                count++;
            }
        }, this);

        this.someData = {
            labels: this.labels,
            datasets: [
                {
                    label: this.direction + ' Average Torque',
                    backgroundColor: '#f87979',
                    data: this.averageTorque
                },
                {
                    label: this.direction + ' Last Torque',
                    backgroundColor: 'blue',
                    data: this.lastTorque
                },
            ]
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