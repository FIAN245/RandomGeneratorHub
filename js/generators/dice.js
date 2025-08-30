const diceBtn = document.querySelector('[data-generator="dice"] button');

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

if (diceBtn) {
  diceBtn.addEventListener("click", () => {
    alert(`🎲 Dadu menunjukkan angka: ${rollDice()}`);
  });
}
