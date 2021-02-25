var ctx = document.getElementById('StockChart').getContext('2d');
var myBarChart = new Chart(ctx, {
  // The type of chart we want to create
  type:'bar',
  // The data for our dataset
  data: {
        labels: ['','Water', 'Fruit', 'Veg', 'Bread',''],
        datasets: [{
            label: 'Foodstock in percentage',
            data: [0, 90, 80, 85, 60, 0],
            backgroundColor: [
              '#000',
              '#074381',
              '#0D86FF',
              '#75BAFF',
              '#0D86FF',
              '#0D86FF'
            ],
            borderColor: [
                '#0D86FF',
                '#074381',
                '#0D86FF',
                '#75BAFF',
                '#0D86FF',
                '#0D86FF'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
