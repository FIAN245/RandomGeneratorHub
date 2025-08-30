const passBtn = document.querySelector('[data-generator="password"] button');

function generatePassword(length = 10) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

if (passBtn) {
  passBtn.addEventListener("click", () => {
    alert(`🔑 Password acak: ${generatePassword(12)}`);
  });
}
