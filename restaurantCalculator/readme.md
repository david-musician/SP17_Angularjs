### Restaurant App
1. Restaurant Total Bill Calculator
2. 2/5/2017 - Project created
3. This app takes the bill at a restaurant and calculates the total bill given the state sales tax and tip amount.

### The program
Sample code:
```javasctipt
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
```
The above code logs the changes the user makes in the dropdown menus

### Helpful links
- [ng-bind](https://docs.angularjs.org/api/ng/directive/ngBind)
- [Angularjs 1.6 Important Changes](https://toddmotto.com/angular-1-6-is-here)

### Known issues
1. Critical issues - None
2. Serious issues - None
3. Moderate issues

Problem: Initially I was going to use an API in order to get the tax by state, but couldn't figure out how to get it to work.
Solution - Angular 1.6 did away with .success functions for api calls, which means I need to update my code to meet the new standard.

4. Minor issues - Needs more styles

### Changelog
1. Features added - None
2. Bugs fixed - None documented as of launch