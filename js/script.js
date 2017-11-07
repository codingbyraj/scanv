// wow initialization
$(document).ready(function () {
    new WOW().init();
    $("#nav .navbody a").click(function () {
        $("body, html").animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
});
/*   


xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  

*/
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
$('.logo img').attr("src", "../images/weblogo2.png").css({
    "height": "65px"
    , "width": "180px"
});
$(".navbody li").css({
    "font-size": "16px"
});
$(".navbody").css({
    "margin-top": '2.5%'
    , "transition": "0.4s"
});
$(".navbody li").css("color", "white");
$(".navbody li").append('<style>:before{background-color:white; }</style>');
$(window).on("scroll", function () {
    var windowscroll = $(window).scrollTop()
    if (windowscroll >= sectionHt) {
        /* 
        
        if not scroll
        
        
        */
        $('header').addClass('head');
        $(".navbody").css({
            "margin-top": '2%'
            , "transition": "0.4s"
        });
        $(".navbody li").css({
            "font-size": "14px"
        });
        $(".navbody li").append('<style>:before{ background-color:white; }</style>'), $(".navbody li").css("color", "white");
        $('.logo img').attr("src", "../images/weblogo2.png").css({
            "transition": "0.4s"
            , "height": "60px"
            , "width": "160px"
            , "padding-bottom": "3%"
        });
    }
    else {
        /*
        
         if scroll
        
        */
        $('header').removeClass('head');
        $(".navbody").css({
            "margin-top": '2.5%'
            , "transition": "0.4s"
        });
        $(".navbody li").css({
            "font-size": "16px"
        });
        $(".navbody li").css("color", "white"), $(".navbody li").append('<style>:before{background-color:white; }</style>');
        $('.logo img').attr("src", "../images/weblogo2.png").css({
            "transition": "0.4s"
            , "height": "65px"
            , "width": "180px"
        });
    }
});
$(".section").css("height", sectionHt);