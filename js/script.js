document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    ScrollReveal().reveal('.landing-text, .avatar, .contact-section', { delay: 500, distance: '100px', origin: 'bottom', duration: 1500 });

    const backToTopBtn = document.getElementById("back-to-top");

    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    window.scrollToTop = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    document.querySelector('.discord').addEventListener('click', () => {
        window.open("https://discord.com")
    });

    document.querySelector('.github').addEventListener('click', () => {
        window.open("https://github.com")
    });

    document.querySelector('.twitter').addEventListener('click', () => {
        window.open("https://x.com")
    });
});