


$(".js-button-expander--faq").click(function () {
    const expandParent = $(this).closest(".faq__item");
    const expandTarget = expandParent.find(".js-expand-content--faq");

    if (expandTarget.is(":visible")) {
        expandTarget.stop(true, true).slideUp(300, function () {
            expandTarget.removeClass("expanded");
        });

        $(this).removeClass("active");
    } else {
        expandTarget
            .stop(true, true)
            .slideDown(300)
            .addClass("expanded");

        $(this).addClass("active");
    }
});