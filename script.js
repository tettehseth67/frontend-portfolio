const toggleMenu = document.querySelector(".menu-toggle");

const mainNavigation = document.querySelector(".main-navigation");

if (toggleMenu && mainNavigation) {

    toggleMenu.addEventListener("click", function () {

        toggleMenu.classList.toggle("active");

        mainNavigation.classList.toggle("open");

    });

    const navigationLinks = mainNavigation.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            toggleMenu.classList.remove("active");

            mainNavigation.classList.remove("open");

        });

    });

}