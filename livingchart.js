var ctx = document.getElementById('LivingChart').getContext('2d');
var myDoughnutChart = new Chart(ctx, {
  // The type of chart we want to create
  type:'doughnut',
  // The data for our dataset
  data:{

    datasets: [{
        label: 'living conditions',
        borderColor: '#FFF',
        borderColor: ['#074381', '#0D86FF', '#75BAFF'],
        backgroundColor: ['#074381', '#0D86FF', '#75BAFF'],
        data: [40, 20, 20]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Sleep',
        'Sport',
        'Entertainment'
    ]
},

  // Configuration options go here
  options: {}
});
