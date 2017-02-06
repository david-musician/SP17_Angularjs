// We're building an app like this one: http://convert.french-property.co.uk/
// Need an input, maybe two dropdowns, and use $watch to update the values automatically

// Reference this https://github.com/ahuimanu/cidm4385-2016sp-angular-services for dropdowns
// This, specifically: https://github.com/ahuimanu/cidm4385-2016sp-angular-services/blob/master/app.js

// The [] is a dependency list.

//Also, we put angular.module("", []){} in a variable if we do NOT append the .controller
var unitConverter = angular.module("UnitConverter", []);

//test controller
unitConverter.controller('Test', function($scope){
    $scope.items = [
        {name: 'one', age: 30 },
        {name: 'two', age: 27 },
        {name: 'three', age: 50 }
    ];
    
    $scope.selectedItem = $scope.items[0];
});
//*/

unitConverter.controller('UnitConverterController', [
    // This is middleware
    '$scope', function($scope){
        
        var ucc = this;
        
        // What are the attributes and behaviors that I need this to do?
        // Attributes
        
        ucc.metricVolumeValue = 0;
        ucc.metricWeightValue = 0;
        ucc.metricMassValue = 0;
        ucc.metricLengthValue = 0;
        
        ucc.metric_weight_units = [
            {
                id: 0,
                unit: "Milligrams",
                unit_code: "mg",
                type: "metric"
            },
            {
                id: 1,
                unit: "Grams",
                unit_code: "g",
                type: "metric"
            },
            {
                id: 2,
                unit: "Kilograms",
                unit_code: "kg",
                type: "metric"
            },
            {
                id: 3,
                unit: "Tonnes",
                unit_code: "l",
                type: "metric"
            },
        ];
        
        ucc.metric_mass_units = [
            {
                id: 0,
                unit: "Milligrams",
                unit_code: "mg",
                type: "metric"
            },
            {
                id: 1,
                unit: "Grams",
                unit_code: "g",
                type: "metric"
            },
            {
                id: 2,
                unit: "Kilograms",
                unit_code: "kg",
                type: "metric"
            },
            {
                id: 3,
                unit: "Tonnes",
                unit_code: "l",
                type: "metric"
            },
        ];
        
        ucc.metric_volume_units =
        [
            {
                id: 0,
                unit: "Cubic Centimeters",
                unit_code: "cm3",
                type: "metric"
            },
            {
                id: 1,
                unit: "Cubic Decimeters",
                unit_code: "dm3",
                type: "metric"
            },
            {
                id: 2,
                unit: "Cubic Meters",
                unit_code: "m3",
                type: "metric"
            },
            {
                id: 3,
                unit: "Liters",
                unit_code: "l",
                type: "metric"
            },
            {
                id: 4,
                unit: "Hectoliters",
                unit_code: "hl",
                type: "metric"
            }
        ];
        
        ucc.metric_length_units = [
            {
                id: 0,
                unit: "Milligrams",
                unit_code: "mg",
                type: "metric"
            },
            {
                id: 1,
                unit: "Grams",
                unit_code: "g",
                type: "metric"
            },
            {
                id: 2,
                unit: "Kilograms",
                unit_code: "kg",
                type: "metric"
            },
            {
                id: 3,
                unit: "Tonnes",
                unit_code: "l",
                type: "metric"
            },
        ];
        
        // Begin imperial units
        ucc.imperial_weight_units = [
            {
                id: 0,
                unit: "Milligrams",
                unit_code: "mg",
                type: "metric"
            },
            {
                id: 1,
                unit: "Grams",
                unit_code: "g",
                type: "metric"
            },
            {
                id: 2,
                unit: "Kilograms",
                unit_code: "kg",
                type: "metric"
            },
            {
                id: 3,
                unit: "Tonnes",
                unit_code: "l",
                type: "metric"
            },
        ];
        
        ucc.imperial_mass_units = [
            {
                id: 0,
                unit: "Milligrams",
                unit_code: "mg",
                type: "metric"
            },
            {
                id: 1,
                unit: "Grams",
                unit_code: "g",
                type: "metric"
            },
            {
                id: 2,
                unit: "Kilograms",
                unit_code: "kg",
                type: "metric"
            },
            {
                id: 3,
                unit: "Tonnes",
                unit_code: "l",
                type: "metric"
            },
        ];
        
        ucc.imperial_volume_units =
        [
            {
                id: 0,
                unit: "Cubic Centimeters",
                unit_code: "cm3",
                type: "metric"
            },
            {
                id: 1,
                unit: "Cubic Decimeters",
                unit_code: "dm3",
                type: "metric"
            },
            {
                id: 2,
                unit: "Cubic Meters",
                unit_code: "m3",
                type: "metric"
            },
            {
                id: 3,
                unit: "Liters",
                unit_code: "l",
                type: "metric"
            },
            {
                id: 4,
                unit: "Hectoliters",
                unit_code: "hl",
                type: "metric"
            }
        ];
        
        ucc.imperial_length_units = [
            {
                id: 0,
                unit: "Milligrams",
                unit_code: "mg",
                type: "metric"
            },
            {
                id: 1,
                unit: "Grams",
                unit_code: "g",
                type: "metric"
            },
            {
                id: 2,
                unit: "Kilograms",
                unit_code: "kg",
                type: "metric"
            },
            {
                id: 3,
                unit: "Tonnes",
                unit_code: "l",
                type: "metric"
            },
        ];
        
        // Metric
        function metricVolumeUpdate (){
            console.log(ucc.selected_metric_volume_unit);
        }
        
        function metricWeightUpdate (){
            console.log(ucc.selected_metric_volume_unit);
        }
        
        function metricMassUpdate (){
            console.log(ucc.selected_metric_volume_unit);
        }
        
        function metricLengthUpdate (){
            console.log(ucc.selected_metric_volume_unit);
        }
        
        // Imperial
        function imperialVolumeUpdate (){
            console.log(ucc.selected_metric_volume_unit);
        }
        
        function imperialWeightUpdate (){
            console.log(ucc.selected_metric_volume_unit);
        }
        
        function imperialMassUpdate (){
            console.log(ucc.selected_metric_volume_unit);
        }
        
        function imperialLengthUpdate (){
            console.log(ucc.selected_metric_volume_unit);
        }
        
        // Metric
        $scope.$watch('ucc.selected_metric_volume_units', metricVolumeUpdate);
        $scope.$watch('ucc.selected_metric_weight_units', metricWeightUpdate);
        $scope.$watch('ucc.selected_metric_mass_units', metricMassUpdate);
        $scope.$watch('ucc.selected_metric_length_units', metricLengthUpdate);
        // Imperial
        $scope.$watch('ucc.selected_imperial_volume_units', imperialVolumeUpdate);
        $scope.$watch('ucc.selected_imperial_weight_units', imperialWeightUpdate);
        $scope.$watch('ucc.selected_imperial_mass_units', imperialMassUpdate);
        $scope.$watch('ucc.selected_imperial_length_units', imperialLengthUpdate);
        
        // Metric
        ucc.selected_metric_volume_unit = ucc.metric_volume_units[0];
        ucc.selected_metric_weight_unit = ucc.metric_weight_units[0];
        ucc.selected_metric_mass_unit = ucc.metric_mass_units[0];
        ucc.selected_metric_length_unit = ucc.metric_length_units[0];
        // Imperial
        ucc.selected_imperial_volume_unit = ucc.imperial_volume_units[0];
        ucc.selected_imperial_weight_unit = ucc.imperial_weight_units[0];
        ucc.selected_imperial_mass_unit = ucc.imperial_mass_units[0];
        ucc.selected_imperial_length_unit = ucc.imperial_length_units[0];
        
        // Behaviors
        
        // Metric
        ucc.showSelectedMVUnit = function(){
            console.log(ucc.selected_metric_volume_unit.unit_name);
        };
        
        ucc.showSelectedMWUnit = function(){
            console.log(ucc.selected_metric_weight_unit.unit_name);
        };
        
        ucc.showSelectedMMUnit = function(){
            console.log(ucc.selected_metric_mass_unit.unit_name);
        };
        
        ucc.showSelectedMLUnit = function(){
            console.log(ucc.selected_metric_length_unit.unit_name);
        };
        
        // Imperial
        ucc.showSelectedIVUnit = function(){
            console.log(ucc.selected_imperial_volume_unit.unit_name);
        };
        
        ucc.showSelectedIWUnit = function(){
            console.log(ucc.selected_imperial_weight_unit.unit_name);
        };
        
        ucc.showSelectedIMUnit = function(){
            console.log(ucc.selected_imperial_mass_unit.unit_name);
        };
        
        ucc.showSelectedILUnit = function(){
            console.log(ucc.selected_imperial_length_unit.unit_name);
        };
    }
]);