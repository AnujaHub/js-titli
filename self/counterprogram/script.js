// declraing all the constants by their id first since we will not re-asign these
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

// initiatising count
let count = 0; //we'll be reseting this value thus --> let

increaseBtn.onclick = function(){
    count++; 
    countLabel.textContent=count; // we are assignning the latest value of count 
}

decreaseBtn.onclick = function(){
    count--; 
    countLabel.textContent=count; // we are assignning the latest value of count 
}

resetBtn.onclick = function(){
     count = 0; 
    countLabel.textContent=count; // we are assignning the latest value of count 
}


// please pay attention at your spellings dude :)