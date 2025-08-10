const myText=document.getElementById("myText");
const myInput=document.getElementById("myInput");
const myBtn=document.getElementById("myBtn");
const myName=document.getElementById("myName");
const errorMsg=document.getElementById("errorMsg")


let userName = myInput.value.trim();
myBtn.onclick = function(){

    let userName = myInput.value.trim(); //removes white spaces before or after not between
    userName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
    // slicing is used to Take the string from index 1 to the end

    while(!/^[a-zA-Z\s]+$/.test(userName)) 
        //  ^ and $ shows start and end of string resp
        //  /___ / are delimiters --- They tell JS: “What’s inside is a pattern.”
        // test ---> Returns true if the string matches the pattern, else false.
        // allws a-z , A-Z , spaces-\s , disallows numbers, symbols, empty string 
     {
        errorMsg.textContent = "Please enter a valid name (letters only).";
         return;
     }
 errorMsg.textContent = "";
  myName.textContent = `Hello, ${userName}! 🌸`;
};