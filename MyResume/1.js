function initMap() { 
    var area= {lat: 13.0418, lng: 80.2341}; 
    var map = new google.maps.Map(document.getElementById('map'), { 
      zoom: 13, 
      center: area 
    }); 
    var marker = new google.maps.Marker({ 
      position: area, 
      map: map 
    }); 
  } 