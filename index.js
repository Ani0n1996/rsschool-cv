document.addEventListener("DOMContentLoaded", () => {
    let button_top_btn = document.querySelector(".button-up");

    window.onscroll = function () {
        if (window.pageYOffset > 300) {
            button_top_btn.style.display = "flex"
        } else {
            button_top_btn.style.display = "none"
        }
    }

    button_top_btn.addEventListener("click", function () {
        window.scrollBy({
            top: -document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    });
});