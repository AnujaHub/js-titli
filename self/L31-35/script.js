// callback = a function that is passed as an argument
//  to another function

// used to handle asynchronous operations:
// 1. Reading a file 
// 2. Network requests
// 3. Interacting with databases 

// hello(leave);
// by adding a parantheses right after goodbye
//  we tend to call function right away . 


// function hello(callback){
//     console.log("Hello!")
//     callback();  
// // this now calls the 
// function passed as an argument in hello
// }

// function wait(){
//     console.log("Wait!");
// }

// function leave(){
//     console.log("Leave!");
// }

// function goodbye(){
//     console.log("Goodbye!")
// }

// const myResult = document.getElementById("myResult")



// sum(displayConsole, 8,9)

// function sum(callback , x,y){
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(result){
//     console.log(result);
//     // myResult.textContent=(`The sum is ${result}`);

//     document.getElementById("myResult").textContent = result ;
// }


//forEach() = method used to iterate over the elements of an array 
// and apply a specified function (callback) to each element
// array.forEach(callback)

// element , index , array are provided 

// let array = [1 , 2 , 3 , 4 , 5];
// array.forEach(double);
// array.forEach(cube);
// array.forEach(display);

// element is a parameter that represents 
// each individual item in the numbers array
// automatically gives three arguments to the callback function
// make sure to maintain the sequence as it is element , index and then array 


// function double(element , index , array){
//     array[index] = element * 2;
// }

// function cube(element , index , array){
//     array[index] = Math.pow(element,3);
// }

// function display(element){
//     console.log(element);
// }


// let sweet = ["dairymilk" , "milkybar" , "caremel" , "truffle"];


// sweet.forEach(toUpper);
// sweet.forEach(display);

// function toUpper(element , index , sweet){
//     sweet[index] = element.toUpperCase();
// }

// function display(element){
//    console.log(element);
// }



// .map() method in javascript
// accepts a callback and applies that function 
// to each element of an array , then return a NEW array 

// const numbers = [ 1 , 2 , 3 , 4 , 5]

// const squares = numbers.map(square);
//    console.log(squares);


// function square(element){
//     return Math.pow(element,2);
// }


const dates = ["12-09-2006" , "21-01-1991"  , "12-04-2056"];

const format =
