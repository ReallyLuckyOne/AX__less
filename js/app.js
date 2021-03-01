$(function () {

    let nav = $("#nav");
    let navToggle = $("#navToggle");
    let burgerItem = $(".burger__item");
    
    
    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");
        burgerItem.removeClass("active");
        document.body.classList.remove("no-scroll");
        
        $("html, body").animate({
            scrollTop: elementOffset
        }, 700);
    });


    /* burger */
    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show"); burgerItem.toggleClass("active");
        document.body.classList.add("no-scroll");
    });

});