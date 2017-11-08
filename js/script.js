// wow initialization
$(document).ready(function () {
    new WOW().init();
    $("#nav .navbody a").click(function () {
        $("body, html").animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
    $("#loader").css("display", "none");
    $("#website").css("display", "block");
    // header height
    var headerHeight = $('header').outerHeight();
    // h is the height of the window
    var h = $(window).height();
    // section height  = total height of the window  - height of the header
    var sectionHt = h - headerHeight;
    console.log("header height = ", headerHeight);
    console.log("window height = ", h);
    console.log("section height = ", sectionHt);
    // styling
    $("#image_slider").css("height", h);
    $('.logo img').attr("src", "./images/weblogo2.png").css({
        "height": "65px"
        , "width": "180px"
    });
    $(".navbody li").css({
        "font-size": "16px"
    });
    $(".navbody li").css("color", "white");
    $(window).on("scroll", function () {
        var windowscroll = $(window).scrollTop()
        if (windowscroll >= sectionHt) {
            /*         
                if scroll                
            */
            $('header').addClass('head');
            $(".navbody").addClass("navbody_notscroll");
            $(".navbody li").css({
                "font-size": "14px"
                , "transition": "0.4s"
            });
            $('.logo img').attr("src", "./images/weblogo2.png").css({
                "transition": "0.4s"
                , "height": "60px"
                , "width": "160px"
                , "padding-bottom": "3%"
            });
        }
        else {
            /*
                 if not scroll
            */
            $('header ').removeClass('head');
            $(".navbody li").css({
                "font-size": "16px"
            });
            $('.logo img').attr("src", "./images/weblogo2.png").css({
                "transition": "0.4s"
                , "height": "65px"
                , "width": "180px"
            });
        }
    });
    $(".section").css("height", sectionHt);
});