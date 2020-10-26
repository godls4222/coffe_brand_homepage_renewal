// sub.js

// 2단계 메뉴 
$(function(){
    $('.depth1 > li').hover(
        function(){
            $('.depth2').stop().slideDown(200);
        },
        function(){
            $('.depth2').stop().slideUp(200);
        }
    );
})