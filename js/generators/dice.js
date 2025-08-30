export function initDiceGenerator() {
  const diceResult = document.getElementById("dice-result");
  const rollBtn = document.getElementById("roll-dice");

  rollBtn.addEventListener("click", () => {
    diceResult.classList.add("dice-rolling");

    // delay animasi lalu hasil muncul
    setTimeout(() => {
      const roll = Math.floor(Math.random() * 6) + 1;
      diceResult.textContent = roll;
      diceResult.classList.remove("dice-rolling");
    }, 500);
  });
}
