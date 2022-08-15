"use strict"

class Employee {
    constructor(firstName, lastname, age, jobPosition, salary){
        this.firstName = firstName,
        this.lastname = lastname,
        this.age = age,
        this.jobPosition = jobPosition,
        this.salary = salary
    }
    get fullName(){
        return `${this.firstName} ${this.lastname}`;
    }
    static vacationDaysInAYear = 18;
    countYearSalary(){
        console.log(this.salary * 12);
    }
}

const employee1 = new Employee('Musia', 'Musienko', 20, 'Manager', '20000');
console.log(employee1);
console.log(employee1.fullName);
employee1.countYearSalary();
const employee2 = new Employee('Kuzia', 'Kuzmenko', 30, 'Manager', '18000');
console.log(employee2);
console.log(employee2.fullName);
employee2.countYearSalary();
console.log(Employee.vacationDaysInAYear);