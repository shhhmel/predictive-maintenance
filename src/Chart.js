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
        console.log('direction', this.direction)
        let count = 0;

        response.body.forEach(function(element) {
            if (element.Direction == this.direction && count < 100 && element.AverageTorque) {
                console.log(element)
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

        console.log('this.data.length', this.data.length)

        this.renderChart(this.someData, {responsive: true})

        console.log('someData', this.someData);
    }, response => {
        console.error('Error')
    });

  }
}