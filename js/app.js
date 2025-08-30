import { generateRandomColor } from "./generators/color.js";

// Tahun dinamis di footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Random Color
const colorBtn = document.getElementById("color-generate");
const colorResult = document.getElementById("color-result");
const colorPreview = document.getElementById("color-preview");
const colorHex = document.getElementById("color-hex");
const colorRgb = document.getElementById("color-rgb");
const copyBtn = document.getElementById("copy-color");

if (colorBtn) {
  colorBtn.addEventListener("click", () => {
    const { rgb, hex } = generateRandomColor();
    colorPreview.style.background = rgb;
    colorHex.textContent = hex;
    colorRgb.textContent = rgb;
    colorResult.classList.remove("hidden");
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

// Placeholder untuk generator lain (belum aktif)
function notReady(name) {
  alert(`${name} belum diaktifkan. Lanjut ke bab berikutnya untuk fitur penuh.`);
}

document.querySelectorAll('[data-generator]').forEach(card => {
  const key = card.getAttribute('data-generator');
  if (key !== 'color') {
    const btn = card.querySelector('button');
    (btn || card).addEventListener('click', () => notReady(key));
  }
});
.dice-result {
  font-size: 3rem;
  font-weight: bold;
  margin: 10px 0;
  transition: transform 0.3s ease;
}

.dice-rolling {
  transform: rotate(360deg) scale(1.2);
}


