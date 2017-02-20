/// Much of this code was adapted from Dr. Babb's President List example

/* global angular */
var toppingList = angular.module("PizzaToppings", []);

// Dependnecy injection list
toppingList.controller("ToppingListController", ['$scope',
    'ToppingStorageService', function($scope, ToppingStorageService) {
        var tlc = this;
        
        tlc.toppingName = "";
        tlc.toppingType = "";
        tlc.background = "emphasis";
        tlc.orders = [];
        
        tlc.topping = [
            {
                name: "Cheese",
                value: 0
            },
            {
                name: "Pepperoni",
                value: 1.99
            },
            {
                name: "Vegetables",
                value: 2.25
            },
            {
                name: "Anchovies",
                value: 20
            }
        ];
        
        tlc.toppingType = tlc.topping[0];
        
        tlc.totalCost = function(){
            tlc.totalCost = (parseFloat(tlc.toppingCost) + tlc.pizzaCost);
            console.log(tlc.totalCost);
        };
        
        tlc.emphasis = function(status, $event){
            //var el = $event.target.id;
            
            if(status){
                //console.log("enter: " + el);
                tlc.background = "emphasis";
                //console.log(tlc.background);
            } else {
                //console.log("exit: " + el);
                tlc.background = "deemphasis";
                //console.log(tlc.background);
            }
        };
        
        tlc.remove = function($index){
            tlc.orders = tlc.latestData();
            tlc.orders.splice($index, 1);
            return ToppingStorageService.setData('my-storage', angular.toJson(tlc.orders));
        };
        
        tlc.latestData = function(){
            return ToppingStorageService.getData('my-storage');
        };
        
        //tlc.create = function(tnumber, tname, topping, tcost)
        tlc.create = function(tname, topping){
            if (tname != null && tname != "" && topping != null){
                tlc.error = false;
                tlc.orders = tlc.latestData();
                //tlc.number = Math.random() * 1000000;
                console.log(tlc.number);
                if(tlc.orders == null){
                    tlc.orders = [];
                }
                // Mapping values
                var order = {name: tname, topping: topping};
                //var order = {number: tnumber, name: tname, topping: topping, cost: tcost};
                console.log(angular.toJson(order));
                tlc.orders.push(order);
                return ToppingStorageService.setData('my-storage', angular.toJson(tlc.orders));
            } else {
                tlc.error = true;
            }
        };
        
        // Check to see if null
        if(tlc.orders != null){
            tlc.orders = tlc.latestData();
        } else {
            console.log("crikey");
        }
}]);

toppingList.factory("ToppingStorageService", function($window, $rootScope){
    angular.element($window).on('storage', function(event){
        if (event.key === 'my-storage'){
            $rootScope.$apply();
        }
    });
    
    return {
        setData: function(key, val){
            $window.localStorage && $window.localStorage.setItem(key, val);
            return this;
        },
        getData: function(key){
            var val = $window.localStorage && $window.localStorage.getItem(key);
            
            var data = angular.fromJson(val);
            
            return data;
        }
    };
});