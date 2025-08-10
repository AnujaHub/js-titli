function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    
    const values = [];
    const images = [];

    

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="dice ${value}" width="50">`);
        // value = 3, it loads:
        // dice_images/3.png
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');

    // innerHTML is a JavaScript property used to get or set the HTML content inside an element.
    
}
