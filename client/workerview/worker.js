/**
 * Created by ddeisadze on 9/25/16.
 */

Template.mapPostsList.rendered = function() {



};

drawMap = function(){
    var mapOptions = {
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);

    var curLocation = Session.get('location');


    map.setCenter(new google.maps.LatLng(curLocation.lat, curLocation.lng));

    // Add circle overlay and bind to marker
    var circle = new google.maps.Circle({
        map: map,
        radius: 2000,    // 10 miles in metres
        fillColor: '#AA0000'
    });


    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(curLocation.lat, curLocation.lng),
        title: "You are here",
        icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    });

    marker.setMap(map);

    circle.bindTo('center', marker, 'position');

    var jobs_nearby = Jobs.find({location: {$near:[curLocation.lat,curLocation.lng]}});

    if( jobs_nearby ){
        count = 0;
        jobs_nearby.forEach(function(obj){
            count += 0.5;
            if( obj.location){
                console.log(obj);
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(obj.location.lat, obj.location.long + count),
                    title: obj.title,
                    icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                });
                marker.setMap(map);

            }
        });
    }else{
        alert("No jobs could be found.")
    }

    // get nearby jobs
    // console.log(jobs_nearby.count());



    Session.set('map', true);
}