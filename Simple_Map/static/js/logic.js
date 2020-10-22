// Add console.log to check to see if our code is working.
console.log("working");

var map = L.map("mapid").setView([51.505, -0.09], 13);
// let map = L.map("mapid", {
    // center: [
        // 51.505, -0.09],
    // zoom:4
    //});

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
streets.addTo(map);    
console.log("Did it work?")