var app = angular.module('employeeApp', []);

app.controller('EmployeeController', function (){
  //all the logic we want the controller to do is in this function
  //similar to document ready
  console.log('EmployeeController loaded');
  //$scope is the alternative
  
  //controller as syntax
  var intro = this;
