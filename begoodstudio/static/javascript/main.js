
	$(document).ready(function() {

    $('.carousel_container').each(function (idx, item) {
        var carouselId = "carousel" + idx;
        this.id = carouselId;
        $(this).slick({
            slide: "#" + carouselId +" .carousel_image",
            appendArrows: "#" + carouselId + " .prev_next",
            prevArrow: '<a>Previous</a>',
            nextArrow: '<a>Next</a>',
        });
    });

    function setHeight() {
      windowHeight = $(window).innerHeight();
      $('#maincontainer').css('min-height', windowHeight);
    };
    setHeight();
    
    $(window).resize(function() {
        setHeight();
    });

     $('#projectlist a').click(function(){
        $('#maincontainer').css({
            display: 'block'
        });
        $("#maincontainer").load($(this).attr('href'));
         return false;
    });
  });