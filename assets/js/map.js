jQuery(function ($) {
    var latitudes = [40.753701, 22.303624, 23.124102, 30.544562, 22.545571, 39.908491, 31.231452, 41.814823];
    var longitudes = [-73.972024, 114.160231, 113.323479, 114.335544, 114.055398, 116.447055, 121.477726, 123.435958];
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