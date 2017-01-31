var app = angular.module('employerApp', []);

app.controller('EmployerController', function (){
  //all the logic we want the controller to do is in this function
  //similar to document ready
  console.log('EmployerController loaded');
  //$scope is the alternative

  //controller as syntax
  var employer = this;

  employer.employees = [];
  //set object to a global entity
  employer.totalMonthlySalary = 0;

  employer.addEmployee = function (){
    employer.employees.push(angular.copy(employer.employee));
    console.log(employer.employees);

    var totalMonthlySalary = employer.totalMonthlySalary;
    totalMonthlySalary = Number(totalMonthlySalary);
    totalMonthlySalary += (employer.employee.salary/12);
    //set controller name to change to totalMonthlySalary
    employer.totalMonthlySalary = totalMonthlySalary;
    // toLocaleString("en-US", {style: 'currency', currency: 'USD'});
    //employer.salary = totalMonthlySalary;

    employer.deleteEmployee = function (){
    
    }
  };


});
