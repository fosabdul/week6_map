// let canvas = document.querySelector('#bidge_chart')
// let context = canvas.getContext('2d')
let ctx = document.getElementById('bridge_chart').getContext('2d');

let chart = new Chart (context, {
    type: 'bar',
    data: {
         labels: ["Verrazano-Narrows Bridge", "Golden Gate", "Mackinac", "George Washinton", "Tacoma Narrows Bridge"],
        datasets:[ {
            label: 'Number of votes',
            data: [18, 15, 10, 5, 9],

            backgroundColor: ['green', 'blue', 'red', 'yellow','purple']
        } ]
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
})