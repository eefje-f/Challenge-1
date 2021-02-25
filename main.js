
var ctx = document.getElementById('TravelChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ['0', '4', '8', '12', '16', '20', '24'],
        datasets: [{
            label: 'Traveled distance (km) over time (24h)',
            borderColor: '#0D86FF',
            data: [0, 96000, 192000, 288000, 384000, 480000, 576000, 672000]
        }]
    },

    // Configuration options go here
    options: {}
});
