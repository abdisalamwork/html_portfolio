const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


// OPEN / CLOSE MENU
menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuBtn.textContent = "✕";

    } else {

        menuBtn.textContent = "☰";

    }

});


// CLOSE MENU WHEN CLICKING A LINK
document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});