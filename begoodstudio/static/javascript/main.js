$(document).ready(function() {

    $('.carousel_container').each(function (idx, item) {
        var carouselId = "carousel" + idx;
        this.id = carouselId;
        $(this).slick({
            slide: "#" + carouselId +" .carousel_image",
            appendArrows: "#" + carouselId + " .prev_next",
            prevArrow: '<a>&#8249</a>',
            nextArrow: '<a>&#8250</a>',
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
//Main container and close
    $('#projectlist a').click(function(){
        $('#maincontainer, #ec1').css({
            display: 'block'
        });
        $("#maincontainer").load($(this).attr('href'));
         return false;
    });

    $('#ec1').click(function(){
        $('#maincontainer, #ec1').css({
            display: 'none'
        });
    });

    $('.headercontainer a').click( function() { 
          $('#cstrigger, #abouttrigger, #contacttrigger').css("color", "black");
          $(this).css("color", "white");
    });

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

// URL load
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
  });