$(document).ready(function () {
    $("header .overlay .menu").click(function () {
        var sideh = $(window).height;
        $("aside").animate({
            width: '250px',
            height: 'sideh'
        });
    });
    $("aside i").click(function () {
        $("aside").animate({
            width: '0px'
        });
    });
    $(".timer").countTo();

    //testmonial slider

    (function autoSlider() {
        $(".slide .showslide").each(function () {
            if (!$(this).is(":last-child")) {
                $(this).delay(3000).fadeOut(2000, function () {
                    $(this).removeClass("showslide").next().addClass("showslide").fadeIn(50);
                    autoSlider();
                });
            } else {

                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass("showslide");
                    $(".slide div").eq(0).addClass("showslide").fadeIn(50);
                    autoSlider();
                });

            }

        });
    }());
    //our team 

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 15,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    //nice scroll
    $("body").niceScroll();

    $("body").getNiceScroll().resize();
    //fit text
    $(".mybody").fitText(1.4, {
        minFontSize: '5px',
        maxFontSize: '50px'
    });
    //head text resize

    $(".headtext").css("paddingTop", ($(window).height() - $(".headtext").height()) / 2.5);
    $(window).resize(function () {
        $(".headtext").css("paddingTop", ($(window).height() - $(".headtext").height()) / 2);
    });
    //scroll to top
    
    $(window).on("scroll", function () {
        var buttonToTop = $("#totop");
        if ($(window).scrollTop() > 670) {
            buttonToTop.show(850);
        } else {
            buttonToTop.hide(500);
        }
        buttonToTop.click(function () {
            $("html,body").animate({
                scrollTop: 0
            }, 550);
        });
    });

});
//preloading screen
$(window).on("load", function () {


    $(".loading").fadeOut(1600, function () {
        $("body").css("overflow", "auto");
        $(".loading").remove();



    });
});
