function initMap() {
    console.log("HOLA MAPA");
    var map = new google.maps.Map(document.getElementById('gmap'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}