let bridgeAreaCenterCoordinates = [44.96, -93.2]  // Array of latitude and longitude 
let zoomLevel = 3.5   // 1 = whole world, 10 = large city, 20 = city blocks

// Create the map 
let map = L.map('Bridge-map').setView(bridgeAreaCenterCoordinates, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a> contributors'    
}).addTo(map)

campuses =  [
    {"name": "Verrazano-Narrows Bridge", "City": "New York, NY", "Span": "1298.4", "coordinates": [40.6066, -74.0447] }, 
    {"name": "Golden Gate Bridge",  "City":"San Franciso and Marin CA","Span": "1280.2", "coordinates": [37.8199, -122.4783] }, 
    {"name": "Mackinac Bridge", "City": "Mackinaw and St Ignace, MI","Span": "1158.0", "coordinates":     [45.8174, -84.7278] }, 
    {"name": "George washinton Bridge","City": "New York, NY and New Jersey, NJ","Span": "1067.0", "coordinates": [40.8517, -73.9527] }, 
    {"name": "Tacoma Narrows Bridge", "City": "Tacoma and Kitsap WA","Span": "856.44", "coordinates": [47.2690, -122.5517] }
]

    
campuses.forEach(function(bridgeCampus){
    let markerText =`<b>${bridgeCampus.name}</b><br>${bridgeCampus.City}<br> ${bridgeCampus.Span} Meter`
    L.marker(bridgeCampus.coordinates).bindPopup(markerText).addTo(map)
})

//  chart map 



// let bridgeAreaCircle = L.circle(bridgeAreaCenterCoordinates, {
//     color: 'purple',    // use any CSS color name
//     radius: 30000,
//     fillOpacity: 0.1
// })
// .bindPopup("Longest Bridges")
// .addTo(map)


