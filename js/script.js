$(document).ready(function(){
    $(".menu__item").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});



$(document).ready(function(){
 
        var $menu = $(".header__menu");
 
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 80 && $menu.hasClass("header__menu") ){
                $menu.removeClass("header__menu").addClass("fixed");
            } else if($(this).scrollTop() <= 80 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("header__menu");
            }
        });//scroll
    });


$(document).ready(function($){
	if ($(window).width() <= '1024'){
		$('header nav').hide();
		$('.menu__title').click(function(){$(this).next().toggle()});	
	}
});