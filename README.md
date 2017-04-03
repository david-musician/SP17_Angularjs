# CIDM 4385 Ionic
  These projects will be created using Angular 1

**Github Repo name:** SP17_Angularjs

1/23/2017 - Project Created

[Ionic](https://ionicframework.com/)

[Markdown cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

[Linux cheat sheet](https://files.fosswire.com/2007/08/fwunixref.pdf)

[Github cheat sheet](https://www.git-tower.com/blog/git-cheat-sheet/)

[How to push an existing Cloud9 project to GitHub](http://lepidllama.net/blog/how-to-push-an-existing-cloud9-project-to-github/)

[How to start an Ionic project in c9](https://github.com/ahuimanu/cidm4385-2016sp-ionic-basics)

## readme.md format

### Header
1. Title
2. March 20th, 2017 - Project created
3. Description

### Body
1. Features
```javascript
2. Code snippets
```
3. Explanations of code

### Helpful links
1. Links that help explain the project
2. Links that helped solve problems in the project

### Known issues
1. Critical issues
2. Serious issues
3. Moderate issues
4. Minor issues

### Changelog
1. Features added
2. Bugs fixed
3. 

To start an Ionic app: ionic serve -p $PORT --nolivereload

# This is the header

**_BOLDED_**

```javascript
//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=8080; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
```