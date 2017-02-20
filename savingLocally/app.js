/* global angular */
var saving = angular.module("LocalStorage", []);

saving.controller('LocalStorageController', ['$scope', 'LocalStorageService', 'NewService',
    function($scope, LocalStorageService, NewService){
        var lsc = this;
    
        lsc.name = "Dude";
        
        lsc.rightOperand = LocalStorageService.rightVariable;
        lsc.leftOperand = LocalStorageService.leftVariable;
        
        lsc.productNumber = LocalStorageService.leftVariable * LocalStorageService.rightVariable;
        
        lsc.meow = NewService.getThing();
        
        lsc.thingList = [];
}]);

saving.controller('LibraryController', ['$scope', 'LocalStorageService', 'NewService',
    function($scope, LocalStorageService, NewService){
        var lc = this;
    
        lc.name = "Bro";
        
        lc.leftOperand = LocalStorageService.leftVariable;
        lc.rightOperand = LocalStorageService.rightVariable;
        
        lc.sumNumber = LocalStorageService.leftVariable + LocalStorageService.rightVariable;
        
        lc.meow = NewService.getThing();
}]);

// Factory (for saving. We use $rootScope in order to make it visible to all other controllers)
// Factories are services. Factories are also singletons.
// First we detect that the browser is there
saving.factory("LocalStorageService", function($window, $rootScope){
    // Notify that we want to store something in the browser
    // We are telling Angular to get a particular element
    // This is saying, When I access the browser, make the browser tell this factory that something has happened
    /* In other words, when the browser saves something, let us know.
    angular.element($window).on('storage', function(event){
        if (event.key == "local-storage"){
            $rootScope.$apply();
        }
    });*/
    
    return {
        // This is a list
        rightVariable: Math.random() * 100,
        leftVariable: 10
    };
});

saving.factory("NewService", function($window, $rootScope){
    
    // These are effectively private variables
    var things = [
        "You got a new thing!",
        "You got an old thing!",
        "You got a blue thing!",
        "You got a borrowed thing!",
        "You got a potato!",
        "You got a pickle!",
        "You got gold!"];
    
    var thing1 = "";
    var thing2 = "";
    var timestamp = null;
    
    // The below code is better.
    return {
        //setThing1: "",
        getThing: function(){
            return things[Math.floor(Math.random() * things.length)];
        },
        getDate: function(){
            return new Date();
        },
        setThing1: function(thingString){
            thing1 = thingString;
        },
        setThing2: function(thingString){
            thing2 = thingString;
        }/*,
        setTimestamp = function(timestampVal){
            timestamp = timestampVal;
        }*/
    };
});