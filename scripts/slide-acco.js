const list = $(".slider__menu");
list.on("click", ".slider__menu__item", function(e) {
    e.preventDefault();
    if (e.target.classList.contains("slider__content")) return;
    $(this).siblings("li").removeClass("slider__menu__item--active");
    $(this).toggleClass("slider__menu__item--active");
});