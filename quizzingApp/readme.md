# Quizzing App
* Date Created - 2/27/2017
* This app will have an array of students and an array of questions and allow a
student and question to be paired randomly. The user will then be able to
save a student's score and the app will calculate the student grades.

### Features
1. AngularJS view
2. AngularJS controllers
3. Service to access questions from a JSON file
4. Service to store student answers in LocalStorage (you will read back scores from this)

#### Code snippets
Code for the Saving Service factory
``` javascript
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
```

### Helpful links
1. [Difference between MouseEnter and MouseOver:](http://jsfiddle.net/ZCWvJ/7/)
2. [Building a collapsible navigation bar using Bootstrap](https://www.w3schools.com/bootstrap/bootstrap_navbar.asp)

### Known issues
1. Critical issues - none
2. Serious issues - none
3. Moderate issues - none
4. Minor issues - none

### Changelog
1. Features added - none
2. Bugs fixed - none
