document.addEventListener("DOMContentLoaded", function () {
    const ctaButton = document.querySelector(".cta-button");

    ctaButton.addEventListener("click", function () {
        ctaButton.style.transform = "scale(0.95)";
        setTimeout(() => {
            ctaButton.style.transform = "scale(1)";
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            });
        }, 150);
    });
});
