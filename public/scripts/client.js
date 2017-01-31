var app = angular.module('employerApp', []);

app.controller('EmployerController', function (){
  //all the logic we want the controller to do is in this function
  //similar to document ready
  console.log('EmployerController loaded');
  //$scope is the alternative

  //controller as syntax
  var employer = this;

  employer.employees = [];

  employer.addEmployee = function (){
    employer.employees.push(angular.copy(employer.employee));
    console.log(employer.employees);
  };


});
