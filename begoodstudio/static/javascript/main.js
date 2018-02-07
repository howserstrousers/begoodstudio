window.onload = function() {
	$(document).ready(function() {
			$('.carousel_container').slick({
              arrows:false,
              adaptiveHeight:true,
            });

            $('.previous').click(function(){
              $('.carousel_container').slick('slickPrev');
            });

            $('.next').click(function(){
              $('.carousel_container').slick('slickNext');
            });
	}
}