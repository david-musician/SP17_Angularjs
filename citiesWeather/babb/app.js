angular.module("ForecastApp", [])
    .controller("WeatherServiceController", ["$scope", "$http", 
        "GoogleGeolocationService", "DarkSkyWeatherService",
        function($scope, $http,
                 GoogleGeolocationService,
                 DarkSkyWeatherService){
	   
            var wsc = this;
            
            wsc.selected_lat = 0;
            wsc.selected_lon = 0;
        
            //key: sdfgsde5dfgsdfg34tsdfg

            //App name    
            wsc.app_name = "Weather App";
            
            // This can be put in its own service
            wsc.cities = 
            [
                {
                    name: "Canyon",
                    street: "2403 Russell Long Blvd.",
                    url_name: "Canyon",
                    state: "TX",
                    lat: 0,
                    lon: 0
                },            
                {
                    name: "Amarillo",
                    url_name: "Amarillo",
                    state: "TX",
                    lat: 0,
                    lon: 0
                }, 
                {
                    name: "Anchorage",
                    url_name: "Anchorage",
                    state: "AK",
                    lat: 0,
                    lon: 0
                },
                {
                    name: "Denver",
                    url_name: "Denver",
                    state: "CO",
                    lat: 0,
                    lon: 0
                }
            ];
            
            /* The order that the injection occurs up at line 2 - 6 will 
             * determine the order we have to make them here. */
            
            // Begin the first
            wsc.getLatLonForSelected = function(){
                GoogleGeolocationService.geoLocate(wsc.selected_city)
                    .then(function(res){
                        wsc.selected_lat = res.data.results[0].geometry.location.lat;
                        wsc.selected_lon = res.data.results[0].geometry.location.lng;
                        
                        wsc.selected_city.lat = wsc.selected_lat;
                        wsc.selected_city.lon = wsc.selected_lon;
                        
                        //var google_static_maps_key = "AIzaSyAVIugWFEfJlG9Y5HS-kkkoQISjDNWWDtM";
                        var google_static_maps_key = "AIzaSyC4tT_4VUXDbiSLz_AJVuTLDOzewjj7O9A";
                        
                        wsc.google_static_maps_url = "https://maps.googleapis.com/maps/api/staticmap?center=" +
                                                     wsc.selected_lat + "," +
                                                     wsc.selected_lon + 
                                                     "&zoom=10&size=600x300&key=" +
                                                     google_static_maps_key;
                                                     
                        console.log("Google Static Map API URL");
                        console.log(wsc.google_static_maps_url);                        
                            
                        console.log(res);
                    }).
                    catch(function(err){
                        console.log(err);
                    });
                    
                    /* Run this here instead of lines 95-95 because we want to 
                     * make sure that the function runs first */
                    wsc.getCurrentConditions();
            };
            
            // Begin the next _______
            wsc.getCurrentConditions = function(){
                DarkSkyWeatherService.getCurrentConditions(wsc.selected_city)
                    .then(function(res){    // The promise
                        console.log(res);   // Log the response
                    }
                    .catch(function(err){   // Catch errors
                        console.log(err);   // Show the errors
                    }));
            };
            
            wsc.selected_city = wsc.cities[0];
            wsc.getLatLonForSelected();
            
    }])
    .factory('GoogleGeolocationService', ['$sce', '$http', 
        function($sce, $http){
            //https://docs.angularjs.org/api/ng/service/$sce
            
            var geolocationService = {};
            
            //Google Maps Geocoding API key   
            var key = "AIzaSyC4tT_4VUXDbiSLz_AJVuTLDOzewjj7O9A";
            
            geolocationService.geoLocate = function(location){

                var address = "+" + location.street + ",+" + location.name + ",+" + 
                              location.state;
                var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
                          address + "&key=" + key;

                var trustedurl = $sce.trustAsResourceUrl(url);
                return $http.get(trustedurl);
            }
            
            return geolocationService;            
            
        }])

    .service("DarkSkyWeatherService", [, '$sce', '$http',
		function($sce, $http){
		   
		   var darkSkyWeatherService = {};
		   
		   // Darksky API key
		   var key = "6c8b305547beae413df14241f389aea7";
		   
		   darkSkyWeatherService.getCurrentConditions = function(location){
                //https://api.darksky.net/forecast/6c8b305547beae413df14241f389aea7/37.8267,-122.4233
                
                var url = "https://api.darksky.net/forecast/" +
		                 key + "/" + location.lat + "," + location.lon;
		                 
                console.log("DarkSky API URL: " + url);
                
                var trustedurl = $sce.trustAsResourceUrl(url);
                // We are returning the promise here
                return $http.jsonp(trustedurl, {jsonpCallbackParam: 'callback'});
                // We use jsonp because DarkSky is trying to prevent abuse.
		   };
		   
		   // This is where we are returning the object
		   return darkSkyWeatherService;
		   
	   }]);

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    