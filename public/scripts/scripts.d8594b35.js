(function(){"use strict";angular.module("app",["ngResource","ngRoute","ui.bootstrap","xeditable","angular-loading-bar"]).config(["$routeProvider","cfpLoadingBarProvider",function(a){return a.when("/",{templateUrl:"views/todo.html",controller:"TodoCtrl"}).otherwise({redirectTo:"/"})}]).run(["editableOptions",function(a){return a.theme="bs3"}])}).call(this),function(){"use strict";angular.module("app").service("Todo",["$resource",function(a){return a("/api/todos/:_id",{_id:"@_id"},{update:{method:"PUT"}})}]),angular.module("app").controller("TodoCtrl",["$scope","Todo","cfpLoadingBar",function(a,b,c){return a.todo={},a.todos=b.query({sortby:"description",asc:!0}),a.save=function(d){return c.start(),b.save(d,function(b){var c;return d=angular.extend(d,b),c=_.sortedIndex(a.todos,d,"description"),a.todos.splice(c,0,d),a.todo={}})},a["delete"]=function(d){return c.start(),b["delete"]({_id:d._id},function(){return _.pull(a.todos,d)})},a.update=function(a,d){return c.start(),b.update(_.pick(a,"_id"),_.pick(a,d))},a.creationAt=function(a){return moment(a.creationAt).calendar()},a.checkDescription=function(a){return _.isEmpty(a)?"description can't be empty":void 0}}])}.call(this);