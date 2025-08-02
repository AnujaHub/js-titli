const minNum = 1;
const maxNum = 100;
answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts=0;
let guess;
let running = true;

while(running){
    
    guess = window.prompt(`guess a number between ${minNum}-${maxNum}`);
    guess = Number(guess);
    console.log(typeof guess , guess);

    // to ensure only nums and in range 

    if(isNaN(guess)){
        window.alert("PLease enter a number!");
    }
    else if(guess<minNum || guess>maxNum){
         window.alert("PLease enter a valid number in range!");
    }
     //  checking for 
    else {
        attempts++;
        if(guess < answer){
            window.alert("Too low , guess again");
        }
        else if(guess > answer){
          window.alert("Too high , guess again");
        }
        else 
          window.alert(`Wohoo ! ${answer} a correct guess , you took ${attempts} attemps :)`);
    }
    running = false; //when we want to stop the game 
   

}