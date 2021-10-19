// const mesureWidth = () => {
//     return 500;
// }

// const openItem = item => {
//     const hiddenContent = item.find(".slider__content");
//     const reqWidth = mesureWidth();

//     hiddenContent.width(reqWidth);

// }

// $(".slider__menu__title").on("click", e => {
//     e.preventDefault();

//     const $this = $(e.currentTarget);
//     const item = $this.closest(".slider__menu__item");

//     openItem(item);
// });

const list = $('.slider__menu');
list.on('click', '.slider__menu__item', function (e) {
  e.preventDefault()
  if (e.target.classList.contains('slider__content')) return
  $(this).siblings('li').removeClass('slider__menu__item--active')
  $(this).toggleClass('slider__menu__item--active')
})