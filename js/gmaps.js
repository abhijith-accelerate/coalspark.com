function initialize() {
  	var mapCanvas = document.getElementById('map');

    var mapOptions = {
      center: new google.maps.LatLng(25.237163, 55.306873),
      disableDefaultUI: true,
      scrollwheel: false,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    //Create map
    var map = new google.maps.Map(mapCanvas, mapOptions);

    //Create marker
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(25.237163, 55.306873),
      map: map,
      title: 'Tum Tum Asia',
      icon: 'images/map-marker.png'
 	});

    //Map marker info
    var contentString = '<div id="map-info">'+
      '<h2><span class="remarked">Tum Tum Asia</span> Dubai</h2>'+
      '<p style="text-align:left; margin:10px 0 0 0;">The Progressive <strong>Pan Asian Cuisine</strong> now in Dubai!</p>'+
      '</div>';

    //Add info to marker 
	var infowindow = new google.maps.InfoWindow({
	  content: contentString
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});

    //Keep map centered
    google.maps.event.addDomListener(window, 'resize', function() {
    	var center = map.getCenter();
    	google.maps.event.trigger(map, "resize");
    	map.setCenter(center); 
	});
  }
  google.maps.event.addDomListener(window, 'load', initialize);