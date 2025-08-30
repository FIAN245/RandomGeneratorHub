const quoteBtn = document.querySelector('[data-generator="quote"] button');

const quotes = [
  "Hidup adalah seni menggambar tanpa penghapus.",
  "Kesuksesan adalah hasil dari persiapan, kerja keras, dan belajar dari kegagalan.",
  "Jangan takut gagal, takutlah kalau kamu tidak mencoba.",
  "Setiap hari adalah kesempatan baru untuk belajar."
];

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

if (quoteBtn) {
  quoteBtn.addEventListener("click", () => {
    alert(`💡 Quote: "${randomQuote()}"`);
  });
}
