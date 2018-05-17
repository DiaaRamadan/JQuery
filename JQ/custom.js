/*global $ , alert ,console*/

$(function () {
    'use strict';
    //adjust header height
    
    var myheader = $(".header"),
        myslider = $(".bxslider");
    myheader.height(($(window).height()));
    
    $(window).resize(function () {
        myheader.height(($(window).height()));
        
    });
    
    //links add active class
    
    $(".links li a").click(function () {
        $(this).parent().addClass("active").siblings().removeClass("active");
    });
    
    //adjust bx slider in the center
    myslider.each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
    });
    
    //Trigger bix slider
    myslider.bxSlider({
        pager: false
    });
    
    //smoth scroll important--------------
    $('.links li a').click(function () {
        $('html, body').animate({
            scrollTop : $('#' + $(this).data("value")).offset().top
        }, 1000);
       
    });
    
    //auto slider code
    (function autoslier() {
        $(".slider .active").each(function () {
            if (!$(this).is(':last-child')) {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass("active").next().addClass("active").fadeIn();
                    autoslier();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass("active");
                    $(".slider div").eq(0).addClass("active");
                    autoslier();
                });
            }
        });
        
    }());
    
    $('#container').mixItUp();
    
    //adjust shuffle links
    $(".shuffle li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    });
    
    //Trriger nice scroll
    $("html").niceScroll({
        cursorcolor: '#1abc9c',
        cursorwidth: '8px',
        cursorborder: '#1abc9c'
    });
   
});
