$(document).ready(function() {
    //Carousel
        $('.carousel_container').each(function (idx, item) {
            var carouselId = "carousel" + idx;
            this.id = carouselId;
            $(this).slick({
                slide: "#" + carouselId +" .carousel_image",
                appendArrows: "#" + carouselId + " .prev_next",
                prevArrow: '<a>&#8249</a>',
                nextArrow: '<a>&#8250</a>',
                lazyLoad: 'progressive',
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

        function setHeight() {
          windowHeight = $(window).innerHeight();
          $('#aboutcontainer').css('min-height', windowHeight);
        };
        setHeight();
        
        $(window).resize(function() {
            setHeight();
        });
    // END Carousel

    // mobile nav no scroll
    $('.icon').click( function() { 
              $('body').toggleClass("modal-open");
        });
});

//DESKTOP JAVASCRIPT   
if ( $(window).width() > 1024) {

    //Main container and close
        $('#projectlist a').click(function(){
            $('#maincontainer, #ec1').css({
                display: 'block',
            });

                $('#projectlist a').click(function(){
                    $('body').css('overflow','hidden');
                });

        $("#maincontainer").load($(this).attr('href'));
             return false;
        });

        $('#ec1, #abouttrigger a, #contacttrigger a').click(function(){
            $('#maincontainer, #ec1').css({
                display: 'none'
            });
        });

        $('#contacttrigger a').click(function(){
            $('#aboutcontainer, #ec2').css({
                display: 'none'
            });
        });

        $('#abouttrigger a').click(function(){
            $('#contactcontainer, #ec3').css({
                display: 'none'
            });
        });

        $('#cstrigger a').click(function(){
            $('#aboutcontainer, #ec2, #contactcontainer, #ec3').css({
                display: 'none'
            });
        });

     /*body no scroll*/
     $('#projectlist a').click( function() { 
              $('body').addClass("modal-open");
        });

     $('#cstrigger a').click( function() { 
              $('body').addClass("modal-open");
        });

     $('#abouttrigger a').click( function() { 
              $('body').addClass("modal-open");
        });

     $('#contacttrigger a').click( function() { 
              $('body').addClass("modal-open");
        });


    /*nav color change*/
        $('#projectlist a').click( function() { 
              $('#cstrigger span, #abouttrigger span, #contacttrigger span').addClass("navcolor");
        });

        $('#cstrigger a').click( function() { 
              $('#cstrigger span, #abouttrigger span, #contacttrigger span').addClass("navcolor");
        });

        $('#abouttrigger a').click( function() { 
              $('#abouttrigger span, #contacttrigger span').addClass("navcolor");
        });

         $('#contacttrigger a').click( function() { 
              $('#contacttrigger span').addClass("navcolor");
        });

        $('#abouttrigger a').click( function() { 
              $('#cstrigger span').removeClass("navcolor");
        });

        $('#contacttrigger a').click( function() { 
              $('#cstrigger span, #abouttrigger span').removeClass("navcolor");
        });
        

    //project list move to bg
        $('#projectlist a').click(function(){
            $('#projectlist a').css({
                position: 'static' 
            });
        });
        
    //Case studies Main container and close
        $('#cstrigger a').click(function(){
            $('#maincontainer , #ec1').css({
                display: 'block'
            });

            $("#maincontainer").load($(this).attr('href'));
             return false;
        });

        $('.cslist a').click(function(){
            $('#maincontainer , #ec1').css({
                display: 'block'
            });
            $("#maincontainer").load($(this).attr('href'));
             return false;
        });

        $('#cstrigger a').click(function(){
            $('#projectlist a').css({
                position: 'static'
            });
        });

    //About container and close
        $('#abouttrigger a').click(function(){
            $('#aboutcontainer, #ec2').css({
                display: 'block'
            });
            $("#aboutcontainer").load($(this).attr('href'));
             return false;
        });

        $('#ec2').click(function(){
            $('#aboutcontainer, #ec2').css({
                display: 'none'
            });
        });

        $('#abouttrigger a').click(function(){
            $('#projectlist a').css({
                position: 'static'
            });
        });

    //Contact container and close
        $('#contacttrigger a').click(function(){
            $('#contactcontainer, #ec3').css({
                display: 'block'
            });

            $("#contactcontainer").load($(this).attr('href'));
             return false;
        });

        $('#ec3').click(function(){
            $('#contactcontainer, #ec3').css({
                display: 'none'
            });
        });

        $('#contacttrigger a').click(function(){
            $('#projectlist a').css({
                position: 'static'
            });
        });

    /*bodynoscroll
        $("input#showpopup").click(function(){
            $("div#overlay").fadeIn('500');       
            $("div#popup").delay('800');
            $("div#popup").fadeIn('500');         
            $('body').css('overflow','hidden');
       });
    */

//URL load
    var setCurrentPage = function(url) {
    $('#maincontainer').html(url || "/");
    $("#projectlist a[href='" + url + "']").fadeTo(500);
    };

    $('#projectlist a').click(function(e){
        e.preventDefault();
        var targetUrl = $(this).attr('href'),
            targetTitle = $(this).attr('title');
        
        $("#projectlist a[href='" + window.location.pathname + "']").fadeTo(500, 1.0);
        
        window.history.pushState({url: "" + targetUrl + ""}, targetTitle, targetUrl);
        setCurrentPage(targetUrl);
    });

    window.onpopstate = function(e) {
        $("#menu-nav a").fadeTo('fast', 1.0);
            setCurrentPage(e.state ? e.state.url : null);
    };

    
}
//END DESKTOP JAVASCRIPT





