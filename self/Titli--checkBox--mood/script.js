const cramps = document.getElementById("cramps");
const sad = document.getElementById("sad");
const irritated = document.getElementById("irritated");
const energetic = document.getElementById("energetic");
const calm = document.getElementById("calm");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");

submitBtn.onclick = function(){

    if (cramps.checked) {
  result.textContent = "💥 Cramps: Try using a heating pad, gentle stretching, or sipping warm water.";
} else if (sad.checked) {
  result.textContent = "😔 Sad: Watch something light, journal your thoughts, or take a short walk.";
} else if (irritated.checked) {
  result.textContent = "😠 Irritated: Deep breaths. Try calming music or light movement.";
} else if (energetic.checked) {
  result.textContent = "⚡ Energetic: Great time to be productive or get in a workout!";
} else if (calm.checked) {
  result.textContent = "🌿 Calm: Perfect time to reflect, meditate, or simply enjoy the peace.";
} else {
  result.textContent = "Please select how you're feeling :)";
}

}

//eomjis bhi use kar sakte hai just like text - wowiee


// writing same functionality using switch cases didn't like this one but anyways

// submitBtn.onclick = function(){

//     let mood="";
//   if (cramps.checked) mood = "cramps";
//   else if (sad.checked) mood = "sad";
//   else if (irritated.checked) mood = "irritated";
//   else if (energetic.checked) mood = "energetic";
//   else if (calm.checked) mood = "calm";


// switch (mood) {
//   case "cramps":
//     result.textContent = "💥 Cramps: Try a heating pad or warm water.";
//     break;
//   case "sad":
//     result.textContent = "😔 Sad: Journal or take a gentle walk.";
//     break;
//   case "irritated":
//     result.textContent = "😠 Irritated: Try deep breaths or calming music.";
//     break;
//   case "energetic":
//     result.textContent = "⚡ Energetic: Great time to get things done!";
//     break;
//   case "calm":
//     result.textContent = "🌿 Calm: Reflect or just enjoy the peace.";
//     break;
//   default:
//     result.textContent = "Please select how you're feeling.";
// }
// }