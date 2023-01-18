var mymap = L.map('mapid').setView([45.5, -120], 10);
//https://a.tile.openstreetmap.org/{z}/{x}/{y}.png
//'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png'
//https://wiki.openstreetmap.org/wiki/Tile_servers
L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by Stamen Design, under CC BY 3.0.',
        maxZoom: 18
}).addTo(mymap);

var marker = L.marker([39.97080543542897, -105.11993408203126]).addTo(mymap);

var circle = L.circle([39.97080543542897, -105.11993408203126], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50
}).addTo(mymap);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");
