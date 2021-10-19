const slider = $('.shops').bxSlider({
    pager: false,
    controls: false
});

$('.shop__slider-arrow--prev').click(e =>{
    e.preventDefault();
    slider.goToPrevSlide();
})

$('.shop__slider-arrow--next').click(e =>{
    e.preventDefault();
    slider.goToNextSlide();
})