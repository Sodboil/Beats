$(".form").submit(e => {
    e.preventDefault();

    $.fancybox.open({
        scr: "#modal",
        type: "inline"
    })
});

