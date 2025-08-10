const myText = document.getElementById("myText");
const myInput= document.getElementById("myInput");
const myBtn = document.getElementById("myBtn");
const myStatus = document.getElementById("myStatus");
let days=0;

myBtn.onclick = function(){

    days = Number(myInput.value); //accepting from user 

  if (days <= 7) {
  myStatus.textContent = "You're probably on your period.";
} else if (days > 7 && days <= 21) {
  myStatus.textContent = "You're in the mid-cycle or ovulation phase.";
} else if (days > 21 && days <= 35) {
  myStatus.textContent = "Period might be coming soon.";
} else {
  myStatus.textContent = "You might have missed your period. Consider checking.";
}

}