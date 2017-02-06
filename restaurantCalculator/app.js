/* global angular $sce */
var restaurantCalculatorController = function($scope, $http){
    var rcc = this;
    
    rcc.states = [
        {
            name: "Alabama",
            abbreviation: "AL",
            tax: 0.04
        },
        {
            name: "Alaska",
            abbreviation: "AK",
            tax: 0
        },
        {
            name: "Arizona",
            abbreviation: "AZ",
            tax: 0.056
        },
        {
            name: "Arkansas",
            abbreviation: "AR",
            tax: 0.065
        },
        {
            name: "California",
            abbreviation: "CA",
            tax: 0.075
        },
        {
            name: "Colorado",
            abbreviation: "CO",
            tax: 0.029
        },
        {
            name: "Connecticut",
            abbreviation: "CT",
            tax: 0.0635
        },
        {
            name: "Delaware",
            abbreviation: "DE",
            tax: 0
        },
        {
            name: "District of Columbia",
            abbreviation: "DC",
            tax: 0.0575
        },
        {
            name: "Florida",
            abbreviation: "FL",
            tax: 0.06
        },
        {
            name: "Georgia",
            abbreviation: "GA",
            tax: 0.04
        },
        {
            name: "Hawaii",
            abbreviation: "HI",
            tax: 0.04
        },
        {
            name: "Idaho",
            abbreviation: "ID",
            tax: 0.06
        },
        {
            name: "Illinois",
            abbreviation: "IL",
            tax: 0.0625
        },
        {
            name: "Indiana",
            abbreviation: "IN",
            tax: 0.07
        },
        {
            name: "Iowa",
            abbreviation: "IA",
            tax: 0.06
        },
        {
            name: "Kansas",
            abbreviation: "KS",
            tax: 0.065
        },
        {
            name: "Kentucky",
            abbreviation: "KY",
            tax: 0.06
        },
        {
            name: "Louisiana",
            abbreviation: "LA",
            tax: 0.04
        },
        {
            name: "Maine",
            abbreviation: "ME",
            tax: 0.055
        },
        {
            name: "Maryland",
            abbreviation: "MD",
            tax: 0.06
        },
        {
            name: "Massachusetts",
            abbreviation: "MA",
            tax: 0.0625
        },
        {
            name: "Michigan",
            abbreviation: "MI",
            tax: 0.06
        },
        {
            name: "Minnesota",
            abbreviation: "MN",
            tax: 0.06875
        },
        {
            name: "Mississippi",
            abbreviation: "MS",
            tax: 0.07
        },
        {
            name: "Missouri",
            abbreviation: "MO",
            tax: 0.04225
        },
        {
            name: "Montana",
            abbreviation: "MT",
            tax: 0
        },
        {
            name: "Nebraska",
            abbreviation: "NE",
            tax: 0.055
        },
        {
            name: "Nevada",
            abbreviation: "NV",
            tax: 0.0685
        },
        {
            name: "New Hampshire",
            abbreviation: "NH",
            tax: 0
        },
        {
            name: "New Jersey",
            abbreviation: "NJ",
            tax: 0.07
        },
        {
            name: "New Mexico",
            abbreviation: "NM",
            tax: 0.05125
        },
        {
            name: "New York",
            abbreviation: "NY",
            tax: 0.04
        },
        {
            name: "North Carolina",
            abbreviation: "NC",
            tax: 0.0475
        },
        {
            name: "North Dakota",
            abbreviation: "ND",
            tax: 0.05
        },
        {
            name: "Ohio",
            abbreviation: "OH",
            tax: 0.0575
        },
        {
            name: "Oklahoma",
            abbreviation: "OK",
            tax: 0.045
        },
        {
            name: "Oregon",
            abbreviation: "OR",
            tax: 0
        },
        {
            name: "Pennsylvania",
            abbreviation: "PA",
            tax: 0.06
        },
        {
            name: "Rhode Island",
            abbreviation: "RI",
            tax: 0.07
        },
        {
            name: "South Carolina",
            abbreviation: "SC",
            tax: 0.06
        },
        {
            name: "South Dakota",
            abbreviation: "SD",
            tax: 0.04
        },
        {
            name: "Tennessee",
            abbreviation: "TN",
            tax: 0.07
        },
        {
            name: "Texas",
            abbreviation: "TX",
            tax: 0.0625
        },
        {
            name: "Utah",
            abbreviation: "UT",
            tax: 0.0595
        },
        {
            name: "Vermont",
            abbreviation: "VT",
            tax: 0.06
        },
        {
            name: "Virginia",
            abbreviation: "VA",
            tax: 0.053
        },
        {
            name: "Washington",
            abbreviation: "WA",
            tax: 0.065
        },
        {
            name: "West Virginia",
            abbreviation: "WV",
            tax: 0.06
        },
        {
            name: "Wisconsin",
            abbreviation: "WI",
            tax: 0.05
        },
        {
            name: "Wyoming",
            abbreviation: "WY",
            tax: 0.04
        }
    ];
    
    rcc.tipAmount = [
        {
            name: "10%",
            value: 0.1
        },
        {
            name: "15%",
            value: 0.15
        },
        {
            name: "20%",
            value: 0.2
        }
    ];
    
    rcc.bill = 0;
    rcc.selectedState = rcc.states[0];
    rcc.selectedTipAmount = rcc.tipAmount[1];
    rcc.totalBill = 0;
    
    $scope.$watch('rcc.selectedState', calculateReadableStateTax);
    //$scope.$watch('rcc.selectedTipAmount', calculateTotalBill);
    
    function calculateReadableStateTax (){
        rcc.readableStateTax = rcc.selectedState.tax * 100;
    }
    
    rcc.calculateTotalBill = function(){
        rcc.totalBill = (parseFloat(rcc.bill) + (rcc.selectedState.tax * rcc.bill) + (rcc.selectedTipAmount.value * rcc.bill));
    };
    
    /*
    $scope.$watch('rcc.selectedState', rcc.selectedState);
    
    function showState (){
        rcc.selectedState = "Alabama";
    }
    
    function showTip (){
        
    }
    */
};

var darkskyTestController = function($scope, $http){
    $http.jsonp($sce.trustAsResourceUrl('https://api.darksky.net/forecast/6c8b305547beae413df14241f389aea7/34.9836398,-101.9306303' + '?callback=JSON_CALLBACK',
        {jsonpCallbackParam: 'callback'}))
        .success(function(response){
            console.log(response);
            $scope.forecast = response.currently;
        })

        .error(function(){
            console.log("Oops, there's an error!");
    });
};

angular.module("RestaurantCalculator", [])
    .controller('darkskyTestController', darkskyTestController)
    .controller('RestaurantCalculatorController', restaurantCalculatorController);