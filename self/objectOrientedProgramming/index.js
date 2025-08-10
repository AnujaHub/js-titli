// object = A collection of related properties and/or methods
// Can represent real world objects (people, products, places)
// objects : { key:value,
// function()}



// this = reference to the object where THIS is used
//           (the object depends on the immediate context)
// here used to access the elements within the objects 

// this doesn't work within an arrow function

const person ={
    firstName: "sunflower" , 
    lastName: "sunshine" ,
    age: 19,
    isHappy: true,
    sayHello: function(){console.log(`suprabhat ${this.firstName}`)} ,
}


console.log(person.firstName);
console.log(person.age);
console.log(person.isHappy);
console.log(person.lastName);
person.sayHello();


