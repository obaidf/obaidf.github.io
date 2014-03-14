all_stations = [{"Line":"Blue","Station":"Airport","Lat":42.374262,"Lng":-71.030395},
{"Line":"Blue","Station":"Aquarium","Lat":42.359784,"Lng":-71.051652},
{"Line":"Blue","Station":"Beachmont","Lat":42.39754234,"Lng":-70.99231944},
{"Line":"Blue","Station":"Bowdoin","Lat":42.361365,"Lng":-71.062037},
{"Line":"Blue","Station":"Government Center","Lat":42.359705,"Lng":-71.059215},
{"Line":"Blue","Station":"Maverick","Lat":42.36911856,"Lng":-71.03952958},
{"Line":"Blue","Station":"Orient Heights","Lat":42.386867,"Lng":-71.004736},
{"Line":"Blue","Station":"Revere Beach","Lat":42.40784254,"Lng":-70.99253321},
{"Line":"Blue","Station":"State Street","Lat":42.358978,"Lng":-71.057598},
{"Line":"Blue","Station":"Suffolk Downs","Lat":42.39050067,"Lng":-70.99712259},
{"Line":"Blue","Station":"Wonderland","Lat":42.41342,"Lng":-70.991648},
{"Line":"Blue","Station":"Wood Island","Lat":42.3796403,"Lng":-71.02286539},
{"Line":"Orange","Station":"Back Bay","Lat":42.34735,"Lng":-71.075727},
{"Line":"Orange","Station":"Chinatown","Lat":42.352547,"Lng":-71.062752},
{"Line":"Orange","Station":"Community College","Lat":42.373622,"Lng":-71.069533},
{"Line":"Orange","Station":"Downtown Crossing","Lat":42.355518,"Lng":-71.060225},
{"Line":"Orange","Station":"Forest Hills","Lat":42.300523,"Lng":-71.113686},
{"Line":"Orange","Station":"Green Street","Lat":42.310525,"Lng":-71.107414},
{"Line":"Orange","Station":"Haymarket","Lat":42.363021,"Lng":-71.05829},
{"Line":"Orange","Station":"Jackson Square","Lat":42.323132,"Lng":-71.099592},
{"Line":"Orange","Station":"Malden Center","Lat":42.426632,"Lng":-71.07411},
{"Line":"Orange","Station":"Mass Ave","Lat":42.341512,"Lng":-71.083423},
{"Line":"Orange","Station":"North Station","Lat":42.365577,"Lng":-71.06129},
{"Line":"Orange","Station":"Oak Grove","Lat":42.43668,"Lng":-71.071097},
{"Line":"Orange","Station":"Roxbury Crossing","Lat":42.331397,"Lng":-71.095451},
{"Line":"Orange","Station":"Ruggles","Lat":42.336377,"Lng":-71.088961},
{"Line":"Orange","Station":"State Street","Lat":42.358978,"Lng":-71.057598},
{"Line":"Orange","Station":"Stony Brook","Lat":42.317062,"Lng":-71.104248},
{"Line":"Orange","Station":"Sullivan","Lat":42.383975,"Lng":-71.076994},
{"Line":"Orange","Station":"Tufts Medical","Lat":42.349662,"Lng":-71.063917},
{"Line":"Orange","Station":"Wellington","Lat":42.40237,"Lng":-71.077082},
{"Line":"Red","Station":"Alewife","Lat":42.395428,"Lng":-71.142483},
{"Line":"Red","Station":"Andrew","Lat":42.330154,"Lng":-71.057655},
{"Line":"Red","Station":"Ashmont","Lat":42.284652,"Lng":-71.064489},
{"Line":"Red","Station":"Braintree","Lat":42.2078543,"Lng":-71.0011385},
{"Line":"Red","Station":"Broadway","Lat":42.342622,"Lng":-71.056967},
{"Line":"Red","Station":"Central Square","Lat":42.365486,"Lng":-71.103802},
{"Line":"Red","Station":"Charles/MGH","Lat":42.361166,"Lng":-71.070628},
{"Line":"Red","Station":"Davis","Lat":42.39674,"Lng":-71.121815},
{"Line":"Red","Station":"Downtown Crossing","Lat":42.355518,"Lng":-71.060225},
{"Line":"Red","Station":"Fields Corner","Lat":42.300093,"Lng":-71.061667},
{"Line":"Red","Station":"Harvard Square","Lat":42.373362,"Lng":-71.118956},
{"Line":"Red","Station":"JFK/UMass","Lat":42.320685,"Lng":-71.052391},
{"Line":"Red","Station":"Kendall/MIT","Lat":42.36249079,"Lng":-71.08617653},
{"Line":"Red","Station":"North Quincy","Lat":42.275275,"Lng":-71.029583},
{"Line":"Red","Station":"Park Street","Lat":42.35639457,"Lng":-71.0624242},
{"Line":"Red","Station":"Porter Square","Lat":42.3884,"Lng":-71.119149},
{"Line":"Red","Station":"Quincy Adams","Lat":42.233391,"Lng":-71.007153},
{"Line":"Red","Station":"Quincy Center","Lat":42.251809,"Lng":-71.005409},
{"Line":"Red","Station":"Savin Hill","Lat":42.31129,"Lng":-71.053331},
{"Line":"Red","Station":"Shawmut","Lat":42.29312583,"Lng":-71.06573796},
{"Line":"Red","Station":"South Station","Lat":42.352271,"Lng":-71.055242},
{"Line":"Red","Station":"Wollaston","Lat":42.2665139,"Lng":-71.0203369}]

function startTheMap()
{
			var myLat = 0;
			var myLng = 0;
			var request = new XMLHttpRequest();
			var me; 
			var myOptions = {
						zoom: 13, // The larger the zoom number, the bigger the zoom
						center: me,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					};
			var map;
			var marker;
			var infowindow = new google.maps.InfoWindow();
			var places;
			var xhr;
			var markers = [];


			init();
			getSched();
			

		function getSched() {

			getMyLocation();
			xhr = new XMLHttpRequest();

			// onreadystatechange has to be set to a...
			// ...function when request is completed, to...
			// ...handle the response
			//xhr.onreadystatechange = dataReady;
			xhr.onreadystatechange = function(){
			if (xhr.readyState == 4 && xhr.status == 200) {
				scheduleData = JSON.parse(xhr.responseText);
				//scheduleDom = document.getElementById("schedule");
				//scheduleDom.innerHTML = scheduleData["line"];

				//alert(scheduleData['schedule'][0]['Destination']);
				//draw_stations(scheduleData['line']);

for (i = 0; i < all_stations.length; i++) {
			if (all_stations[i]['Line'] == scheduleData['line']) {
				//draw_station(all_stations[i]);
				var station_loc = new google.maps.LatLng(all_stations[i]['Lat'],all_stations[i]['Lng']);
				var marker = new google.maps.Marker({
					//map: map,
					position: station_loc
					//icon:'./T_marker.png'
				});
				marker.setMap(map);

			}
		}

				console.log("Should have drawn stations");
			}
			else if (xhr.readyState == 4 && xhr.status == 500) {
				scheduleDom = document.getElementById("schedule");
				scheduleDom.innerHTML = alert("Error retrieving data, please refresh the page.")

			}
			}
			xhr.open("get", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true); // this is possible because of cross-origin resource sharing (CORS) enabled for web application

			xhr.send(null); // Go! Execute!


		}



	function draw_stations(color)
	{
		for (i = 0; i < all_stations.length; i++) {
			if (all_stations[i]['Line'] == color) {
				draw_station(all_stations[i]);
			}
		}
	}

		function draw_station(station)
		{
				var station_loc = new google.maps.LatLng(station['Lat'],station['Lng']);
				var marker = new google.maps.Marker({
					map: map,
					position: station_loc,
					//icon:'./T_marker.png'
				});

				//markers.push(marker);

				google.maps.event.addListener(marker, 'click', function() {
					infowindow.close();
					infowindow.setContent(place.name);
					infowindow.open(map, this);
				});
      
		}
			function init()
			{
				//getMyLocation();
				map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
			}

			function getMyLocation()
			{
				if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
					navigator.geolocation.getCurrentPosition(function(position) {
						myLat = position.coords.latitude;
						myLng = position.coords.longitude;
						//renderMap();
						me = new google.maps.LatLng(myLat, myLng);

						// Update map and go there...
						map.panTo(me);

						// Create a marker
						marker = new google.maps.Marker({
						position: me,
						title: "Here I Am!"
						});
						marker.setMap(map);

						// Open info window on click of marker
						google.maps.event.addListener(marker, 'click', function() {
							infowindow.setContent(marker.title);
							infowindow.open(map, marker);
						});
					});
				}
				else {
					alert("Geolocation is not supported by your web browser. Upgrade or use a different browser!");
				}
			}

			function renderMap()
			{
				me = new google.maps.LatLng(myLat, myLng);

				// Update map and go there...
				map.panTo(me);

				// Create a marker
				marker = new google.maps.Marker({
					position: me,
					title: "Here I Am!"
				});
				marker.setMap(map);


				// Open info window on click of marker
				google.maps.event.addListener(marker, 'click', function() {
					infowindow.setContent(marker.title);
					infowindow.open(map, marker);
				});

			}

			

//src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=TRUE";
/*function initialize(){
	var mapOptions = {
		zoom: 8
	};
	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);*/

	

	function dataReady(){
		if (xhr.readystate==4 && xhr.status == 200){
			console.log("DONE!")
			scheduleData = JSON.parse(xhr.responseText);
			console.log(schedule);
			scheduleDom = document.getElementbyId("map-canvas");
			scheduleDom.innerHTML = scheduleData["line"];}
		//for the assigment can get away with 500 status code else do an "else statement" to catch this error}
	}

}

/*

//parsing the mbta json:
stop_of_interest = "Davis"
data = JSON.parse(response.text);
//to print out the line, console.log(schedule.line);

//step 1: go through each train
for (i = 0; i < data["schedule"].length; i++) {
	destination = data["schedule"][i];
	//step 2: get list of stops
	stops = destination["Predictions"];
	for (j = 0; j < stops.length; j++) {
		s = stops[j];
		if (s==stop_of_interest) {
			console.log(s["Seconds"]);
			console.log(destination["Destination"]);//what does this line do?
		}
	}

}

*/



