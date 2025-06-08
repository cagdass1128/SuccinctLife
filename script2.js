window.addEventListener('wheel', function(e) {
  if (e.ctrlKey) {
    e.preventDefault();
  }
}, { passive: false });

window.addEventListener('keydown', function(e) {
  if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '=')) {
    e.preventDefault();
  }
});

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("info-modal");
    const closeBtn = document.getElementById("close-modal");

    // Daha önce kapatıldıysa gösterme
    if (sessionStorage.getItem("modalClosed")) {
      modal.style.display = "none";
    } else {
      // Modal açıkken sayfa scroll ve etkileşimi devre dışı bırak
      document.body.style.overflow = "hidden";
    }

    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
      document.body.style.overflow = ""; // Scroll yeniden aktif olsun dayı
      sessionStorage.setItem("modalClosed", "true");
    });
  });
