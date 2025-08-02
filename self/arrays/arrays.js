

function avg(n, ...numbers){  //rest operator 
      let sum=0;
   
    for( let number of numbers){
      
        sum += number;
    
    }

    return sum/n;
}

let numbers = [ 1, 2 , 3 , 4 , 5];
let n = numbers.length;
 let result = avg(n , ...numbers); //spread operator 
 console.log(`your average is ${result}`);




