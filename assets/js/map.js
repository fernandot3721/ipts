jQuery(function ($) {
    var latitudes = [38.885516, 38.898537, 38.8507126, 38.84753, 39, 40, 41, 29.119783];
    var longitudes = [-77.09327200000001, -77.13208299999997, -77.09903600000001, -77.06577290000001, 1, 2, 3, -113.350771];
    function init_map(index) {
        var myLocation = new google.maps.LatLng(latitudes[index-1], longitudes[index-1]);
        var mapOptions = {
            center: myLocation,
            zoom: 16
        };
        var marker = new google.maps.Marker({
            position: myLocation,
            title: "Property Location"
        });
        var map = new google.maps.Map(document.getElementById("map"+index),
            mapOptions);
        marker.setMap(map);
    }
   
    init_map(1);
    init_map(2);
    init_map(3);
    init_map(4);
    init_map(5);
    init_map(6);
    init_map(7);
    init_map(8);
});