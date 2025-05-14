// Tampilkan popup saat halaman selesai dimuat
window.onload = function() {
    document.getElementById("popupModal").style.display = "block";
};

// Fungsi untuk menutup popup
function closePopup() {
    document.getElementById("popupModal").style.display = "none";
}