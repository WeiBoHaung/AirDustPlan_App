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

}
//  var myCenter=new google.maps.LatLng(a2dv[i][7],a2dv[i][6]);