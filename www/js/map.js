var show_map ={
    initialize: function()
    {
        var myCenter=new google.maps.LatLng(45.434046,12.340284);

        var mapProp = {
            center:myCenter,
            zoom:18,
            mapTypeId:google.maps.MapTypeId.HYBRID
        };

        var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
        map.setTilt(0);
    
        google.maps.event.addDomListener(window, 'load', initialize);
    }
     


}

$(document).ready(function(){
      var mapProp = {
            center:new google.maps.LatLng(51.508742,-0.120850),
            zoom:5,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
        
        google.maps.event.addDomListener(window, 'load', initialize);

})