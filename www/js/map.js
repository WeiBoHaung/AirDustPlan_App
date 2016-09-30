var show_map ={
    
    load: function(){
            google.maps.event.addDomListener(window, 'load', initialize);
    },
    initialize: function()
    {
        
        var myCenter=new google.maps.LatLng(23.7450704,120.9513153);
        var mapProp = {
        center:myCenter,
        zoom:8,
        mapTypeId:google.maps.MapTypeId.ROADMAP
        };

        var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

        //標籤
        for (var j=0;j<2;j++)
        {
        var marker=new google.maps.Marker({
        
        position:myCenter,
        // icon:'pinkball.png'
        });

        marker.setMap(map);

        this.load();
        }
    }

};
/*
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

function initialize() {
var bangalore = { lat: 12.97, lng: 77.59 };
var map = new google.maps.Map(document.getElementById('googleMap'), {
    zoom: 12,
    center: bangalore
});

// This event listener calls addMarker() when the map is clicked.
google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng, map);
});

// Add a marker at the center of the map.
addMarker(bangalore, map);
}

// Adds a marker to the map.
function addMarker(location, map) {
// Add the marker at the clicked location, and add the next-available label
// from the array of alphabetical characters.
var marker = new google.maps.Marker({
        position: location,
        label: labels[labelIndex++ % labels.length],
        map: map
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
*/
var taipei = new google.maps.LatLng(25.08, 121.45);   
if(window.navigator.geolocation){   
    
    var geolocation=window.navigator.geolocation;   
    geolocation.getCurrentPosition(getPositionSuccess);   
    
}else{   
    alert("你的瀏覽器不支援地理定位");   
    map.setCenter(taipei);   
}   
function getPositionSuccess(position){   
    initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);   
    //定位到目前位置   
    map.setCenter(initialLocation);   
}   
    
