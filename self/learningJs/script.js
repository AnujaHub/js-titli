// window.alert("hello!");

// document.getElementById("head").textContent = "hello";

// VARIABLES
// let x;
// x=100;
// console.log(`answer is ${x*30}`);  // only backticks works - no ""
// strings
// let fname = "sunflower";
// console.log(typeof fname);
// console.log(`your firts anme is ${fname}`);
// bool
// let happy = true;
// console.log(typeof happy);
// console.log(`are you happy? ${happy}`);



// Avoid using reserved names like 'name' to prevent conflicts with built-in properties
// let fname = "sunflower";
// let fage = "18";
// let ffemale = true;

// document.getElementById("name").textContent = `you name is ${fname}`;
// document.getElementById("age").textContent = fage ;
// document.getElementById("female").textContent = ffemale ;



// OPERATORS
// Operator Precedence (High → Low):
// 1. ()       // Grouping
// 2. **       // Exponentiation
// 3. *, /, %  // Multiplication, Division, Modulus
// 4. +, -     // Addition, Subtraction
// 5. <<, >>, >>> // Bitwise shifts
// 6. <, <=, >, >= // Comparison
// 7. ==, ===, !=, !== // Equality
// 8. &&       // Logical AND
// 9. ||       // Logical OR
// 10. ?:      // Ternary
// 11. =, +=, -=, etc. // Assignment

// Arithmetic
// let a = 10, b = 3;
// console.log('Addition:', a + b);        // 13
// console.log('Subtraction:', a - b);     // 7
// console.log('Multiplication:', a * b);  // 30
// console.log('Division:', a / b);        // ≈3.33
// console.log('Modulus:', a % b);         // 1
// console.log('Exponent:', a ** b);       // 1000
// console.log('Increment:', ++a, a++);    // 11, then 12
// console.log('Decrement:', --b, b--);    // 2, then 1


// Augmented s
// let x = 5;
// x += 2; console.log('+=', x);  // 7
// x *= 3; console.log('*=', x);  // 21



// ACCEPTING USER INPUT 
// everything that we need will be written within the function so that it will function on clicking
// document.getElementById("submit").onclick = function(){
//    firstname = document.getElementById("username").value;
// //    console.log(firstname);
//    document.getElementById("name").textContent = `Hello ${firstname}`;
// }


// TYPE CONVERSIONS 
//  let age = window.prompt("how old are you?")
//   age = Number(age); // type conversion 
//   age+=1; 
//   console.log(age, typeof age); //would print age1 string if no type conversion used


// CONSTANTS 
// varaibles that cannot be changed 

// a function to calculate circumference
// document.getElementById("submit").onclick=function(){

// let radius;
// radius = document.getElementById("radi").value;
// radius= Number(radius);

// const pi = 3.14; // thhis value cannot be changed throughout once assigned 

// let circum;
// circum = 2*pi*radius;
// // console.log(circum);
// document.getElementById("result").textContent= `Circumference = ${circum}`;

// }


// Math.random()        // gives a decimal between 0 (inclusive) and 1 (exclusive)
// Math.random() * 6    // gives a decimal between 0 and ~5.999...
// Math.floor(...)      // removes decimal → gives 0, 1, 2, 3, 4, or 5
// + 1 includes the maximum number as well
// using math.floor we can avoid getting the unnesaary decimals 


// RANDOM NUMBER
// const min = 50;
// const max = 100;
// let randomNum = Math.floor(Math.random() * max ) + min ; // this gives 0-150 
// let randomNum = Math.floor(Math.random() * (max-min) ) + min ; //hence to get 50-100 we use this 

// console.log(randomNum);





