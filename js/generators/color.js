const colorBtn = document.getElementById("color-generate");
const colorPreview = document.getElementById("color-preview");
const colorHex = document.getElementById("color-hex");
const colorRgb = document.getElementById("color-rgb");
const copyBtn = document.getElementById("copy-color");

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  return { hex, rgb: `rgb(${r}, ${g}, ${b})` };
}

if (colorBtn) {
  colorBtn.addEventListener("click", () => {
    const { hex, rgb } = randomColor();
    colorPreview.style.background = hex;
    colorHex.textContent = hex;
    colorRgb.textContent = rgb;
    document.querySelector(".result").classList.remove("hidden");
  });
}

if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    const text = `${colorHex.textContent} | ${colorRgb.textContent}`;
    navigator.clipboard.writeText(text).then(() => {
      const original = copyBtn.textContent;
      copyBtn.textContent = "✔ Disalin!";
      setTimeout(() => (copyBtn.textContent = original), 1200);
    });
  });
}
