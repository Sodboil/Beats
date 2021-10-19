$(".form").submit(e => {
debugger
    e.preventDefault();

    $.fancybox.open({
        scr: "#modal",
        type: "inline"
    })
});

