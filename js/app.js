// Fungsi placeholder (jaga-jaga untuk generator belum aktif)
function notReady(name) {
  alert(`${name} belum diaktifkan.`);
}

// Pasang listener ke setiap card
document.querySelectorAll('[data-generator]').forEach(card => {
  const key = card.getAttribute('data-generator');
  if (["color", "dice", "password", "quote"].includes(key)) {
    return; // Sudah ditangani di file masing-masing
  }
  const btn = card.querySelector('button');
  (btn || card).addEventListener('click', () => notReady(key));
});
