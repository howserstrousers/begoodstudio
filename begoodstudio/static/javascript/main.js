
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

	});

  $(document).ready(function() {
    function setHeight() {
      windowHeight = $(window).innerHeight();
      $('#maincontainer').css('min-height', windowHeight);
    };
    setHeight();
    
    $(window).resize(function() {
      setHeight();
    });

    $("#maincontainer").load("/assettest");
  });