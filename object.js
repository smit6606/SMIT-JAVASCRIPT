/*
Object :- Collection of Multiple datatype.(Physical Entity)
    Syntax :-

    let a = {
        Key : Value,
    }
*/

// let person = {};
// let person = new Object();
// console.log(person);

let data = {
    name: "Smit",
    age: 24,
    email: "smeetgarala6606@.in",
    gender: "male",
}
console.log(data);


/*
1. Dot Operator(.) :-
    Syntax :- 
    
    object.propertyName
*/
console.log(data.name);
console.log(data.age);

/*
2. Square bracket[key] :-
    Syntax :-
    
    object[expression]
*/

console.log(data['name']);
console.log(data['email']);


// 1.Add Some New Property And His Value.
data.address = "Parvat Patiya, Surat"

// 2.Replace Value
data.age = 20

// 3.Delete Property.
delete data.email

console.log(data);


// Object Method :-

/*
1. The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property.
    hasOwnProperty(prop)
*/
console.log(data.hasOwnProperty("name")); // true

/*
2. The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
    Object.keys(obj)
*/
console.log(Object.keys(data));

/*
3. The Object.values() static method returns an array of a given object's own enumerablestring-keyed property values.
    Object.values(obj)
*/
console.log(Object.values(data));