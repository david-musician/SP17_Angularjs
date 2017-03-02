/* global angular */

angular.module("QuizzingApp", [])
    .controller("QuizzingController", ["$scope", "$http", "RandomService",
                                       "SavingService",
    function($scope, $http, RandomService){
        
        var qc = this;
        
        qc.homeView = true;
        qc.quizView = false;
        qc.studentView = false;
        qc.questionView = false;
        
        $http.get("students.json")
            .then(function(response){
                qc.student = response.data;
            });
        
        $http.get("questions.json")
            .then(function(response){
                qc.question = response.data;
            });
        
        qc.home = function home(){
            qc.homeView = true;
        	qc.quizView = false;
        	qc.studentView = false;
        	qc.questionView = false;
        };
        
        qc.quizStudents = function quizStudents(){
        	qc.homeView = false;
        	qc.quizView = true;
        	qc.studentView = false;
        	qc.questionView = false;
        };
        
        qc.studentList = function studentList(){
            qc.homeView = false;
        	qc.quizView = false;
        	qc.studentView = true;
        	qc.questionView = false;
        };
        
        qc.questionList = function questionList(){
            qc.homeView = false;
            qc.quizView = false;
        	qc.studentView = false;
        	qc.questionView = true;
        };
        
        qc.meow = RandomService.getThing();
        
        qc.thingList = [];
        
    }])
    
    .factory("SavingService", function($window, $rootScope){
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
    })
    
    .factory("RandomService", function($window, $rootScope){
    
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
        }
    };
    
});
    
/*
.factory("LocalStorageService", function($window, $rootScope){
    // Notify that we want to store something in the browser
    // We are telling Angular to get a particular element
    // This is saying, When I access the browser, make the browser tell this factory that something has happened
    /* In other words, when the browser saves something, let us know.
    angular.element($window).on('storage', function(event){
        if (event.key == "local-storage"){
            $rootScope.$apply();
        }
    });*
    
    return {
        // This is a list
        rightVariable: Math.random() * 100,
        leftVariable: 10
    };
});

.factory("NewService", function($window, $rootScope){
    
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
        }*
    };
});
*/