"use strict";angular.module("wats4000ApplicationApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngStorage","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/collection/:username",{templateUrl:"views/collection.html",controller:"CollectionCtrl",controllerAs:"collection"}).when("/userCollection",{templateUrl:"views/usercollection.html",controller:"UsercollectionCtrl",controllerAs:"userCollection"}).otherwise({redirectTo:"/"})}]),angular.module("wats4000ApplicationApp").controller("MainCtrl",["$scope","hotness","$localStorage",function(a,b,c){a.hotness=b.query(),a.storage=c}]),angular.module("wats4000ApplicationApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("wats4000ApplicationApp").factory("hotness",["$resource",function(a){return a("https://bgg-json.azurewebsites.net/hot",{},{query:{method:"GET",params:{},isArray:!0}})}]),angular.module("wats4000ApplicationApp").controller("CollectionCtrl",["$scope","$routeParams","collection","$localStorage",function(a,b,c,d){a.findCollection=function(){a.collection=c.query({username:a.username})},a.saveUser=function(){var b=a.username,c=a.collection,e={user:null,games:[]};e.user=b;var f=e.user;console.log(f);for(var g=0;g<c.length;++g){var h=c[g].name;e.games.push(h)}var i=e.games[0];if(console.log(i),d.savedUsers){for(var j=!0,k=0;k<d.savedUsers.length;k++)d.savedUsers[k]===b&&(j=!1);j===!0?(d.savedUsers.push(b),d.savedCollections.push(e),a.collectionSaved={success:!0}):(console.log("this username is already saved"),a.collectionSaved={duplicate:!0})}else d.savedUsers=[b],d.savedCollections=[e]},a.storage=d,a.displayCollection=function(b){var c=b;console.log(c);for(var d=JSON.parse(localStorage.getItem(localStorage.key(0))),e=0;e<d.length;e++)d[e].user===c?a.thisUserCollection=d[e].games:alert("Couldn't find this collection")}}]),angular.module("wats4000ApplicationApp").factory("collection",["$resource",function(a){return a("https://bgg-json.azurewebsites.net/collection/:username?grouped=false",{},{query:{method:"GET",params:{username:null},isArray:!0}})}]),angular.module("wats4000ApplicationApp").controller("UsercollectionCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("wats4000ApplicationApp").run(["$templateCache",function(a){a.put("views/about.html",'<h1>About QuickBGG</h1> <div> <p>This is a simple AngularJS application for WATS4000. I made QuickBGG so that users of BoardGameGeek.com could quickly find collections, see "The Hotness" list and perform other simple actions without all the confusion and noise of the main website.</p> </div>'),a.put("views/collection.html",'<div ng-controller="CollectionCtrl"> <h1>Find a game collection</h1> <div> <label>BGG Username: <input type="text" name="username" ng-model="username"> </label> <button class="btn btn-sm btn-primary" ng-click="findCollection()">Find Collection</button> </div> <div ng-if="username"> <ul style="list-style: none"> <li ng-repeat="game in collection">{{game.name}}</li> </ul> </div> <p><button class="btn btn-sm btn-primary" ng-click="saveUser()">Save Collection</button></p> <div ng-messages="collectionSaved"> <p class="bg-success text-success" ng-message="success"> This collection has been saved. </p> <p class="bg-warning text-warning" ng-message="duplicate"> This has already been saved to your list of collections. </p> </div> <div ng-if="storage.savedUsers"> <h2>Saved Collections</h2> <ul style="list-style: none"> <li ng-repeat="user in storage.savedUsers"> <button class="btn btn-sm btn-info" ng-click="displayCollection(user)">{{user}}</button> <p ng-if="thisUserCollection">{{thisUserCollection}}</p> </li> </ul> </div> <div> <p ng-model="testItem">{{testItem}}</p> </div> </div>'),a.put("views/main.html",'<div class="jumbotron" ng-controller="MainCtrl"> <h1>The Hotness</h1> <p class="lead"> <ol style="list-style-type: none" ng-repeat="title in hotness"> <li>{{title.name}}</li> </ol> <button class="btn btn-sm-btn-primary"><a ng-href="#/collection/username">Find a collection</a></button> </p> </div>'),a.put("views/usercollection.html","<p>This is the userCollection view.</p>")}]);