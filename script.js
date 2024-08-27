function rollDice() {
  const textBox = document.getElementById("diceRollNum").value;
  const diceResult = document.getElementById("diceResult");
  const diceImage = document.getElementById("diceImages");
  const values = [];
  const images = [];

  for (let i = 0; i < textBox; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="./dice_photo/${value}.png"/>`);
  }

  diceResult.textContent = `dice# : ${values.join(", ")}`;
  diceImage.innerHTML = images.join(" ");
}
