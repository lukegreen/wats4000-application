"use strict";angular.module("wats4000ApplicationApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngStorage","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/collection/:username",{templateUrl:"views/collection.html",controller:"CollectionCtrl",controllerAs:"collection"}).when("/userCollection",{templateUrl:"views/usercollection.html",controller:"UsercollectionCtrl",controllerAs:"userCollection"}).otherwise({redirectTo:"/"})}]),angular.module("wats4000ApplicationApp").controller("MainCtrl",["$scope","hotness","$localStorage",function(a,b,c){a.hotness=b.query(),a.storage=c}]),angular.module("wats4000ApplicationApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("wats4000ApplicationApp").factory("hotness",["$resource",function(a){return a("https://bgg-json.azurewebsites.net/hot",{},{query:{method:"GET",params:{},isArray:!0}})}]),angular.module("wats4000ApplicationApp").controller("CollectionCtrl",["$scope","$routeParams","collection","$localStorage",function(a,b,c,d){a.findCollection=function(){a.collection=c.query({username:a.username})},a.saveUser=function(){var b=a.username,c=a.collection;if(c.username=b,console.log(b),console.log(c),d.savedUsers){for(var e=!0,f=0;f<d.savedUsers.length;f++)d.savedUsers[f]===b&&(e=!1);e===!0?(d.savedUsers.push(b),d.savedCollections.push(c)):console.log("this username is already saved")}else d.savedUsers=[b],d.savedCollections=[c]},a.storage=d}]),angular.module("wats4000ApplicationApp").factory("collection",["$resource",function(a){return a("https://bgg-json.azurewebsites.net/collection/:username?grouped=false",{},{query:{method:"GET",params:{username:null},isArray:!0}})}]),angular.module("wats4000ApplicationApp").controller("UsercollectionCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("wats4000ApplicationApp").run(["$templateCache",function(a){a.put("views/about.html",'<h1>About QuickBGG</h1> <div> <p>This is a simple AngularJS application for WATS4000. I made QuickBGG so that users of BoardGameGeek.com could quickly find collections, see "The Hotness" list and perform other simple actions without all the confusion and noise of the main website.</p> </div>'),a.put("views/collection.html",'<div ng-controller="CollectionCtrl"> <h1>Find a game collection</h1> <div> <label>BGG Username: <input type="text" name="username" ng-model="username"> </label> <button class="btn btn-sm btn-primary" ng-click="findCollection()">Find Collection</button> </div> <div ng-if="username"> <ul style="list-style: none"> <li ng-repeat="game in collection">{{game.name}}</li> </ul> </div> <p><button class="btn btn-sm btn-primary" ng-click="saveUser()">Save Collection</button></p> <div ng-if="storage.savedUsers"> <h2>Saved Collections</h2> <ul style="list-style: none"> <li ng-repeat="user in storage.savedUsers"> <button class="btn btn-sm btn-info" ng-click="">{{user}}</button> </li> </ul> </div> </div>'),a.put("views/main.html",'<div class="jumbotron" ng-controller="MainCtrl"> <h1>The Hotness</h1> <p class="lead"> <ol style="list-style-type: none" ng-repeat="title in hotness"> <li>{{title.name}}</li> </ol> <button class="btn btn-sm-btn-primary"><a ng-href="#/collection/username">Find a collection</a></button> </p> </div>'),a.put("views/usercollection.html","<p>This is the userCollection view.</p>")}]);