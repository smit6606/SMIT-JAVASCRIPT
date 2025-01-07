// 1) Create a School class and create a student and faculty method. The Student method gives the student name, email and contact number as arguments and prints all details the same as faculty using class & object. (3 marks)

class School {
    student(name, email, contactNumber) {
        console.log("Student Details:- ");
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Contact: ${contactNumber}`);
    }

    faculty(name, email, contactNumber) {
        console.log("Faculty Details:- ");
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Contact: ${contactNumber}`);
    }
}

let schoolInstance = new School();

schoolInstance.student("Smit Garala", "smeetgarala6606@gmail.com", "8320436638");

schoolInstance.faculty("Mr. Jeet Garala", "MrJeet@school.com", "7405807062");

// Output:- 

// Student Details:- 
// Name: Smit Garala
// Email: smeetgarala6606@gmail.com
// Contact: 8320436638
// Faculty Details:- 
// Name: Mr. Jeet Garala
// Email: MrJeet@school.com
// Contact: 7405807062

// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------

// 2) Create a Person class with an argument name and age. create an Employee class through print out details of Person Class. (3 marks)

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Employee extends Person {
    printPersonDetails() {
        console.log(this.displayDetails());
    }
}

const employee = new Employee("Smit Garala", 22);
employee.printPersonDetails();

// Output:-

// Name: Smit Garala, Age: 22

// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------

// 3) Employee class creates a constructor called print a simple message. (1 marks)

class Employee {
    constructor() {
        console.log("This is an Employee class.");
    }
}

const hrEmployee = new Employee();

// Output:-

// This is an Employee class.

// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------

// 4) Create a shape class and create a rectangle and circle method find circle area(3.14*r*r) and rectangle area (width height) using with argument. (3 marks)

class Shape {
    rectangleArea(w, h) {
        return w * h;
    }
    circleArea(r) {
        return 3.14 * r * r;
    }
}

const shape = new Shape();
console.log("Rectangle Area:", shape.rectangleArea(50, 100));
console.log("Circle Area:", shape.circleArea(70));

// Output:-

// Rectangle Area: 5000
// Circle Area: 15386


// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------