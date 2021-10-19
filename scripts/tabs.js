const findBlockByAlias = (alias) => {
    return $(".reviews__display-inner").filter((ndx, item) => {
        return $(item).attr("data-linked-with") === alias
    })
};

$(".interactive-avatar__link").click((e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const itemToShow = findBlockByAlias(target);
    const curItem = $this.closest(".reviews__switcher-item");

    itemToShow.addClass("reviews__display-inner--active").siblings().removeClass("reviews__display-inner--active")
    curItem.addClass("interactive-avatar--active").siblings().removeClass("interactive-avatar--active");
});