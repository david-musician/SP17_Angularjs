### Pizza Toppings App
#### 3/13/2017 - Project Created
Description - This app will allow the user to select toppings on a pizza.

### Objectives
1. This app will use services and factory methods
2. This app will also use local storage
3. This app will use Bootstrap

The following code is the factory service that is used to store the pizza orders.
``` JavaScript
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
```

### Helpful links
1. [Styling idea](http://bootsnipp.com/snippets/featured/table-row-count-and-sortable)
3. [How to change a class on mouseover](http://stackoverflow.com/questions/16923111/change-class-on-mouseover-in-directive)
4. [How to add multiple classes to ng-class](http://stackoverflow.com/questions/18871277/adding-multiple-class-using-ng-class)

### Known issues
1. Critical issues - None
2. Serious issues - None
3. Moderate issues - None
4. Minor issues - None

### Changelog
1. Features added - None
2. Bugs fixed - None

### TODO
1. Create an AngularJS 1 application that lets you take Pizza orders and save an array of these pizza orders in Local Storage.
2. Create an Array of JavaScript objects containing each of the required properties
3. Populate each object using the appropriate built-in Angular directives
4. Serialize and Deserialize the Array of JavaScript objects on each page visit
5. Present the ability to Create, Read, Update, and Delete objects in this array