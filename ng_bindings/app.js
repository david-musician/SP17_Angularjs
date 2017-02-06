// We're building an app like this one: http://convert.french-property.co.uk/
// Need an input, maybe two dropdowns, and use $watch to update the values automatically

// Reference this https://github.com/ahuimanu/cidm4385-2016sp-angular-services for dropdowns
// This, specifically: https://github.com/ahuimanu/cidm4385-2016sp-angular-services/blob/master/app.js

// The [] is a dependency list.

//Also, we put angular.module("", []){} in a variable if we do NOT append the .controller
/* global angular */
var unitConverter = angular.module("UnitConverter", []);

unitConverter.controller('UnitConverterController', [
    // This is middleware
    '$scope', function($scope){
        
        var ucc = this;
        
        // What are the attributes and behaviors that I need this to do?
        // Attributes
        
        ucc.volumeValue = 0;
        ucc.massValue = 0;
        ucc.lengthValue = 0;
        // Answer variables
        ucc.volumeAnswerValue = 0;
        ucc.massAnswerValue = 0;
        ucc.lengthAnswerValue = 0;
        
        ucc.mass_units = [
            {
                id: 0,
                unit: "Milligrams",
                unit_code: "mg",
                type: "Metric"
            },
            {
                id: 1,
                unit: "Grams",
                unit_code: "g",
                type: "Metric"
            },
            {
                id: 2,
                unit: "Kilograms",
                unit_code: "kg",
                type: "Metric"
            },
            {
                id: 3,
                unit: "Metric Tons",
                unit_code: "l",
                type: "Metric"
            },
            // Begin Imperial mass units
            {
                id: 4,
                unit: "Ounces",
                unit_code: "oz",
                type: "Imperial"
            },
            {
                id: 5,
                unit: "Pounds",
                unit_code: "lb",
                type: "Imperial"
            },
            {
                id: 6,
                unit: "Stone",
                unit_code: "stone",
                type: "Imperial"
            },
            {
                id: 7,
                unit: "HundredWeights",
                unit_code: "cwt",
                type: "Imperial"
            },
            {
                id: 8,
                unit: "Long Tons",
                unit_code: "uk",
                type: "Imperial"
            }
        ];
        
        ucc.volume_units =
        [
            {
                id: 0,
                unit: "Cubic Centimeters",
                unit_code: "cm3",
                type: "Metric"
            },
            {
                id: 1,
                unit: "Cubic Decimeters",
                unit_code: "dm3",
                type: "Metric"
            },
            {
                id: 2,
                unit: "Cubic Meters",
                unit_code: "m3",
                type: "Metric"
            },
            {
                id: 3,
                unit: "Liters",
                unit_code: "l",
                type: "Metric"
            },
            {
                id: 4,
                unit: "Hectoliters",
                unit_code: "hl",
                type: "Metric"
            },
            // Begin Imperial volume Units
            {
                id: 5,
                unit: "Cubic Inches",
                unit_code: "in3",
                type: "Imperial"
            },
            {
                id: 6,
                unit: "Cubic Feet",
                unit_code: "ft3",
                type: "Imperial"
            },
            {
                id: 7,
                unit: "Fluid Ounces",
                unit_code: "fl oz",
                type: "Imperial"
            },
            {
                id: 8,
                unit: "Pints",
                unit_code: "pt",
                type: "Imperial"
            },
            {
                id: 9,
                unit: "Gallon",
                unit_code: "gal",
                type: "Imperial"
            }
        ];
        
        ucc.length_units = [
            {
                id: 0,
                unit: "Millimeters",
                unit_code: "mm",
                type: "Metric"
            },
            {
                id: 1,
                unit: "Centimeters",
                unit_code: "cm",
                type: "Metric"
            },
            {
                id: 2,
                unit: "Meters",
                unit_code: "m",
                type: "Metric"
            },
            {
                id: 3,
                unit: "Kilometers",
                unit_code: "km",
                type: "Metric"
            },
            // Begin Imperial length units
            {
                id: 4,
                unit: "Inch",
                unit_code: "in",
                type: "Imperial"
            },
            {
                id: 5,
                unit: "Feet",
                unit_code: "ft",
                type: "Imperial"
            },
            {
                id: 6,
                unit: "Yard",
                unit_code: "yd",
                type: "Imperial"
            },
            {
                id: 7,
                unit: "Mile",
                unit_code: "mi",
                type: "Imperial"
            }
        ];
        
        // Log the original unit selections
        function volumeOriginalUpdate (){
            console.log("Original unit:" + ucc.selected_original_volume_unit);
        }
        
        function massOriginalUpdate (){
            console.log("Original unit:" + ucc.selected_original_volume_unit);
        }
        
        function lengthOriginalUpdate (){
            console.log("Original unit:" + ucc.selected_original_volume_unit);
        }
        
        // Log the convert unit selections
        function volumeConvertUpdate (){
            console.log("Original unit:" + ucc.selected_original_volume_unit);
        }
        
        function massConvertUpdate (){
            console.log("Original unit:" + ucc.selected_original_volume_unit);
        }
        
        function lengthConvertUpdate (){
            console.log("Original unit:" + ucc.selected_original_volume_unit);
        }
        
        // Watch for changes
        $scope.$watch('ucc.selected_original_volume_units', volumeOriginalUpdate);
        $scope.$watch('ucc.selected_original_mass_units', massOriginalUpdate);
        $scope.$watch('ucc.selected_original_length_units', lengthOriginalUpdate);
        
        $scope.$watch('ucc.selected_convert_volume_units', volumeConvertUpdate);
        $scope.$watch('ucc.selected_convert_mass_units', massConvertUpdate);
        $scope.$watch('ucc.selected_convert_length_units', lengthConvertUpdate);
        
        // Selected Units: Original
        ucc.selected_original_volume_units = ucc.volume_units[0];
        ucc.selected_original_mass_units = ucc.mass_units[0];
        ucc.selected_original_length_units = ucc.length_units[0];
        
        /* Selected Units: Convert
        ucc.selected_convert_volume_units = ucc.volume_units[0];
        ucc.selected_convert_mass_units = ucc.mass_units[0];
        ucc.selected_convert_length_units = ucc.length_units[0];
        */
        
        // Behaviors
        
        // Original values
        ucc.showSelectedOriginalVolumeUnit = function(){
            console.log("Original unit:" + ucc.selected_original_volume_unit.unit_name);
        };
        
        ucc.showSelectedOriginalMassUnit = function(){
            console.log("Original unit:" + ucc.selected_original_mass_unit.unit_name);
        };
        
        ucc.showSelectedOriginalLengthUnit = function(){
            console.log("Original unit:" + ucc.selected_original_length_unit.unit_name);
        };
        
        // Convert values
        ucc.showSelectedConvertVolumeUnit = function(){
            console.log("Original unit:" + ucc.selected_convert_volume_unit.unit_name);
        };
        
        ucc.showSelectedConvertMassUnit = function(){
            console.log("Original unit:" + ucc.selected_convert_mass_unit.unit_name);
        };
        
        ucc.showSelectedConvertLengthUnit = function(){
            console.log("Original unit:" + ucc.selected_convert_length_unit.unit_name);
        };
    }
]);