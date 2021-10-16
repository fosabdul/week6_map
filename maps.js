let metroAreaCenterCoordinates = [44.96, -93.2]  // Array of latitude and longitude 
let zoomLevel = 5   // 1 = whole world, 10 = large city, 20 = city blocks

// Create the map 
let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a> contributors'    
}).addTo(map)

campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] }, 
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] }, 
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] }, 
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] }, 
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]

    
campuses.forEach(function(collegeCampus){
    let markerText =`<b>${collegeCampus.name}</b><br> <a href="${collegeCampus}" >Website</a>`
    L.marker(collegeCampus.coordinates).bindPopup(markerText).addTo(map)
})



// Add a circle approximately around the Twin Cities metro 
let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
        color: 'purple',    // use any CSS color name
        radius: 30000,
        fillOpacity: 0.1
    })
    .bindPopup("Twin Cities Metro Area")
    .addTo(map)
    let canvas = document.querySelector('#chart')
    let cxt = canvas.getContext('2d')
    

// Tried to do the chart under the map but it didn't work for me. 


    let Charts = new Chart (cxt, {
        type: 'bar',
        date:{
            labels:["Verrazano-Narrows Bridge", "Golden Gate", "Mackinac", "George Washinton", "Tacoma Narrows Bridge"],
            datasets:[{
                label:'Number of votes',
                data: [18, 15, 10, 5, 9],
    
                backgroundColor: ['green', 'blue', 'red', 'yellow','purple']
            }]
        },
    
        options:{
            scales: {
    
                yAxes:[{
                    ticks:{
                        beginAtZero: true
                    }
                }]
            }
        }
    })

    // / keep this code for future practice
// doing each separately , one of each 


// // Add some markers for Minneapolis College and Saint Paul College
// let mctcCoordinates = [44.9724, -93.2844]
// let mctcMarker = L.marker(mctcCoordinates)
//     .bindPopup('Minnepolis College<br><a href="https://minneapolis.edu">Website</a>')
//     .addTo(map)

// let stPaulCoordinates = [44.94839, -93.1099]
// let stpMarker = L.marker(stPaulCoordinates)
//     .bindPopup('Saint Paul College<br><a href="https://saintpaul.edu">Website</a>')
//     .addTo(map)




// let NormandaleCoordinates = [44.8297, -93.3312]
// let normMarker = L.marker(NormandaleCoordinates)
//     .bindPopup('Normandale College<br><a href="https://normandale.edu">Website</a>')
//     .addTo(map)
