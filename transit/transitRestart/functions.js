all_stations = [{"Line":"blue","Station":"Wonderland","Lat":42.41342,"Lng":-70.991648},
{"Line":"blue","Station":"Revere Beach","Lat":42.40784254,"Lng":-70.99253321},
{"Line":"blue","Station":"Beachmont","Lat":42.39754234,"Lng":-70.99231944},
{"Line":"blue","Station":"Suffolk Downs","Lat":42.39050067,"Lng":-70.99712259},
{"Line":"blue","Station":"Orient Heights","Lat":42.386867,"Lng":-71.004736},
{"Line":"blue","Station":"Wood Island","Lat":42.3796403,"Lng":-71.02286539},
{"Line":"blue","Station":"Airport","Lat":42.374262,"Lng":-71.030395},
{"Line":"blue","Station":"Maverick","Lat":42.36911856,"Lng":-71.03952958},
{"Line":"blue","Station":"Aquarium","Lat":42.359784,"Lng":-71.051652},
{"Line":"blue","Station":"State Street","Lat":42.358978,"Lng":-71.057598},
{"Line":"blue","Station":"Government Center","Lat":42.359705,"Lng":-71.059215},
{"Line":"blue","Station":"Bowdoin","Lat":42.361365,"Lng":-71.062037},
{"Line":"orange","Station":"Back Bay","Lat":42.34735,"Lng":-71.075727},
{"Line":"orange","Station":"Chinatown","Lat":42.352547,"Lng":-71.062752},
{"Line":"orange","Station":"Community College","Lat":42.373622,"Lng":-71.069533},
{"Line":"orange","Station":"Downtown Crossing","Lat":42.355518,"Lng":-71.060225},
{"Line":"orange","Station":"Forest Hills","Lat":42.300523,"Lng":-71.113686},
{"Line":"orange","Station":"Green Street","Lat":42.310525,"Lng":-71.107414},
{"Line":"orange","Station":"Haymarket","Lat":42.363021,"Lng":-71.05829},
{"Line":"orange","Station":"Jackson Square","Lat":42.323132,"Lng":-71.099592},
{"Line":"orange","Station":"Malden Center","Lat":42.426632,"Lng":-71.07411},
{"Line":"orange","Station":"Mass Ave","Lat":42.341512,"Lng":-71.083423},
{"Line":"orange","Station":"North Station","Lat":42.365577,"Lng":-71.06129},
{"Line":"orange","Station":"Oak Grove","Lat":42.43668,"Lng":-71.071097},
{"Line":"orange","Station":"Roxbury Crossing","Lat":42.331397,"Lng":-71.095451},
{"Line":"orange","Station":"Ruggles","Lat":42.336377,"Lng":-71.088961},
{"Line":"orange","Station":"State Street","Lat":42.358978,"Lng":-71.057598},
{"Line":"orange","Station":"Stony Brook","Lat":42.317062,"Lng":-71.104248},
{"Line":"orange","Station":"Sullivan","Lat":42.383975,"Lng":-71.076994},
{"Line":"orange","Station":"Tufts Medical","Lat":42.349662,"Lng":-71.063917},
{"Line":"orange","Station":"Wellington","Lat":42.40237,"Lng":-71.077082},
{"Line":"red","Station":"Alewife","Lat":42.395428,"Lng":-71.142483},
{"Line":"red","Station":"Andrew","Lat":42.330154,"Lng":-71.057655},
{"Line":"red","Station":"Ashmont","Lat":42.284652,"Lng":-71.064489},
{"Line":"red","Station":"Braintree","Lat":42.2078543,"Lng":-71.0011385},
{"Line":"red","Station":"Broadway","Lat":42.342622,"Lng":-71.056967},
{"Line":"red","Station":"Central Square","Lat":42.365486,"Lng":-71.103802},
{"Line":"red","Station":"Charles/MGH","Lat":42.361166,"Lng":-71.070628},
{"Line":"red","Station":"Davis","Lat":42.39674,"Lng":-71.121815},
{"Line":"red","Station":"Downtown Crossing","Lat":42.355518,"Lng":-71.060225},
{"Line":"red","Station":"Fields Corner","Lat":42.300093,"Lng":-71.061667},
{"Line":"red","Station":"Harvard Square","Lat":42.373362,"Lng":-71.118956},
{"Line":"red","Station":"JFK/UMass","Lat":42.320685,"Lng":-71.052391},
{"Line":"red","Station":"Kendall/MIT","Lat":42.36249079,"Lng":-71.08617653},
{"Line":"red","Station":"North Quincy","Lat":42.275275,"Lng":-71.029583},
{"Line":"red","Station":"Park Street","Lat":42.35639457,"Lng":-71.0624242},
{"Line":"red","Station":"Porter Square","Lat":42.3884,"Lng":-71.119149},
{"Line":"red","Station":"Quincy Adams","Lat":42.233391,"Lng":-71.007153},
{"Line":"red","Station":"Quincy Center","Lat":42.251809,"Lng":-71.005409},
{"Line":"red","Station":"Savin Hill","Lat":42.31129,"Lng":-71.053331},
{"Line":"red","Station":"Shawmut","Lat":42.29312583,"Lng":-71.06573796},
{"Line":"red","Station":"South Station","Lat":42.352271,"Lng":-71.055242},
{"Line":"red","Station":"Wollaston","Lat":42.2665139,"Lng":-71.0203369}]

var myLat = 0;
var myLng = 0;
var request = new XMLHttpRequest();
var me; 
var myOptions
var map;
var marker;
var infowindows = []; 
var places;
var xhr;
var markers = [];
var color;  
var IAmHere;

function startTheMap()
{
	init();
	getSched();
	//draw_polyLines();

	alert(markers[0]['title']);

}

function init()
{
	getMyLocation();
	myOptions = {
		zoom: 13, // The larger the zoom number, the bigger the zoom
		center: me,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	//infowindow = new google.maps.InfoWindow();
}

function getMyLocation()
{
	if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
		navigator.geolocation.getCurrentPosition(function(position) {
			myLat = 42.3736;//position.coords.latitude;
			myLng = -71.1189;//position.coords.longitude;
			renderMap();
		}); 
			
	}
	else {
		alert("Geolocation is not supported by your web browser. Upgrade or use a different browser!");
	}
}

function renderMap()
{
	me = new google.maps.LatLng(myLat, myLng);
	map.panTo(me);

	marker = new google.maps.Marker({
		position: me,
		title: "Here I Am!"
	});
	marker.setMap(map);

	// Open info window on click of marker

	IAmHere = new google.maps.InfoWindow();

	google.maps.event.addListener(marker, 'click', function() {
		IAmHere.setContent(marker.title);
		IAmHere.open(map, marker);
	});
}

function getSched() 
{
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4 && xhr.status == 200) {
			var scheduleData = JSON.parse(xhr.responseText);
			color = scheduleData['line'];

			markers = [];
			for (i = 0; i < all_stations.length; i++) {
					
				if (all_stations[i]['Line'] == color) {
					var marker1 = new google.maps.Marker({
						position:  new google.maps.LatLng(all_stations[i]['Lat'],all_stations[i]['Lng']),
						//icon:'./T_marker.png',
						title: all_stations[i]['Station']
					});
					markers.push(marker1);
					marker1.setMap(map);
					markers.push(marker1);

					//add listener

					infowindows[i] = new google.maps.InfoWindow();
					if (infowindows[i] == NULL) {
						console.log(infowindows is NULLL);
					}

					google.maps.event.addListener(marker1, 'click', function() {
						infowindows[i].setContent(marker1.title);
						infowindows[i].open(map, marker1);
					});
				}
							
				else if (xhr.readyState == 4 && xhr.status == 500) {
					scheduleDom = document.getElementById("schedule");
					scheduleDom.innerHTML = alert("Error retrieving data, please refresh the page.")
				}
			}
		}
	};
	xhr.open("get", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true); // this is possible because of cross-origin resource sharing (CORS) enabled for web application
	xhr.send(null); // Go! Execute!
}


function draw_polyLines()
{
	for (i = 0; i < all_stations.length; i++) {
		console.log(color);
		if (((i + 1) < all_stations.length) && (all_stations[i]['Line'] == color) && (all_stations[i+1]['Line'] == color)) {
			var pathcoords = [
				new google.maps.LatLng(all_stations[i]['Lat'], all_stations[i]['Lng'] ),
				new google.maps.LatLng(all_stations[i+1]['lat1'], all_stations[i+1]['lng1'] ),];
   			var T_path = new google.maps.Polyline({
   				path: pathcoords,
				strokeColor: "#FF0000",
		   	 	strokeOpacity: 1.0,
    			strokeWeight: 2
   		 	});
    		T_Path.setMap(map); 
		}
	}
}

			
