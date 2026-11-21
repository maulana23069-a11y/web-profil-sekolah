
// =====================================
// WEBSITE SMK N 1 SIMPANG KIRI
// JAVASCRIPT
// =====================================


// 1. MENU NAVIGASI MOBILE

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Tutup menu" : "Buka menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    // Menutup menu setelah link diklik

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute("aria-label", "Buka menu");

            menuToggle.textContent = "☰";

        });

    });

}


// 2. TAHUN OTOMATIS PADA FOOTER

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 3. EFEK KONSOL

console.log("Website SMK N 1 Simpang Kiri berhasil dimuat!");
