
/*-------------------------------------------------*/
/* =  preloader
/*-------------------------------------------------*/

$(window).load(function() { 
  $("#preloader").fadeOut("slow"); 
});




$(document).ready( function () {

  /*-------------------------------------------------*/
  /* =  HTML Nice croll
  /*-------------------------------------------------*/

  // $("html").niceScroll({
  //   autohidemode:false
  // });


  /*-------------------------------------------------*/
  /* =  scroll to top
  /*-------------------------------------------------*/

  var to_top_icon = $('#top');
    $(to_top_icon).hide();
        $(window).scroll(function(){
        if ($(this).scrollTop() > 75 ) {
        to_top_icon.fadeIn();
        } else {
        to_top_icon.fadeOut();
        }
    });

  /*-------------------------------------------------*/
  /* =  function initwatermark
  /*-------------------------------------------------*/


	function initWatermark() {
	    $.watermark.options = {
	        className: 'input--placeholder',
	        useNative: false
	    };

	    $("[placeholder]").each(function() {
	        $(this).watermark($(this).attr("placeholder"));
	    });
	    $("[type=password]").blur();
	}

	$('textarea').autosize();


	/*-------------------------------------------------*/
	/* =  function initwatermark
	/*-------------------------------------------------*/


	var window_height = $(window).height() ;

	$('#subheader, #subheader .rslides li ').css('height', window_height );


  // $('.filters').mouseover(function(){
  //   $('#menu-filter').show();
  //   $('#menu-filter li a').click(function(){
  //     $(this).parent().parent().hide();
  //     var text = $(this).html();
  //     $('.filters button').html(text);
  //     //add <b> element to .filter_wrap
  //     $('.filters button').append('<b></b>');
  //   });
  // });


	/*-------------------------------------------------*/
	/* =  on resize run function
	/*-------------------------------------------------*/


	var tOut = false;
	var milSec = 500;

	  $(window).resize(function(){
	   if(tOut !== false)
	      clearTimeout(tOut);
	   tOut = setTimeout(rsizeItems, milSec);
	});
	function rsizeItems() { 
	      //put code inside this function
	}


	/*-------------------------------------------------*/
	/* =  scroll on link
	/*-------------------------------------------------*/

  if ($(window).width() < 768) {
    var top_ofset = $('header').height() + 40;
  } 
  else {
    var top_ofset = $('header').height() + 91;
  } 

  // $(window).resize(function() {
  //   if($(window).width() < 768)  {
  //     top_ofset = $('header').height() + 40;
  //   }
  //   else {
  //     top_ofset = $('header').height() + 91;
  //   }
  //   $('header nav ul a,.findout-more ,.logo, .scroll-down').smoothScroll({
  //     offset: - top_ofset,
  //     // one of 'top' or 'left'
  //     direction: 'top',
  //     // only use if you want to override default behavior
  //     scrollTarget: null,
  //     // fn(opts) function to be called before scrolling occurs.
  //     // `this` is the element(s) being scrolled
  //     beforeScroll: function() {},
  //     // fn(opts) function to be called after scrolling occurs.
  //     // `this` is the triggering element
  //     afterScroll: function() {},
  //     easing: 'easeInOutExpo',
  //     speed: 1000,
  //     // coefficient for "auto" speed
  //     autoCoefficent: 2,
  //     // $.fn.smoothScroll only: whether to prevent the default click action
  //     preventDefault: true      
  //   });
  // });

	var top_ofset = $('header').height() + 40;


	$('header nav ul a,.findout-more ,.logo, .scroll-down, #top').smoothScroll({
      offset: - top_ofset,
      // one of 'top' or 'left'
      direction: 'top',
      // only use if you want to override default behavior
      scrollTarget: null,
      // fn(opts) function to be called before scrolling occurs.
      // `this` is the element(s) being scrolled
      beforeScroll: function() {},
      // fn(opts) function to be called after scrolling occurs.
      // `this` is the triggering element
      afterScroll: function() {},
      easing: 'easeInOutExpo',
      speed: 1000,
      // coefficient for "auto" speed
      autoCoefficent: 2,
      // $.fn.smoothScroll only: whether to prevent the default click action
      preventDefault: true      
    });


  [].slice.call( document.querySelectorAll( '.rslides_tabs' ) ).forEach( function( nav ) {
    new DotNav( nav, {
      callback : function( idx ) {
        //console.log( idx )
      }
    } );
  } );


  /*-------------------------------------------------*/
  /* =  scroll over 
  /*-------------------------------------------------*/


  var navigation = $('header');
  $(window).scroll(function() {
    if ($(window).scrollTop()>(window_height - 156)) {
      navigation.addClass('change');
      navigation.delay(1000).queue(function(){$(this).addClass('animate')
  });
    }
    else {
      navigation.removeClass('change animate');
    }
  });

  /*-------------------------------------------------*/
  /* =  Close navbar on click
  /*-------------------------------------------------*/

    $(".bars").click(function() {
      $("nav").toggleClass('active');
    });

    $('header nav a').click(function(){
      $(this).parent().parent().parent().removeClass('active');
    });


  /*-------------------------------------------------*/
  /* =  Close navbar on click
  /*-------------------------------------------------*/

  
  if ($(window).width() < 768) {    

      $('.filter').each(function(){
       $(this).attr('data-target', '#bs-example-navbar-collapse-2');
      }); 

    } 

  $(window).resize(function() {
    if($(window).width() < 768)  {
      $('.filter').each(function(){
       $(this).attr('data-target', '#bs-example-navbar-collapse-2');
      }); 
    }
    else {
      $('.filter').each(function(){
       $(this).attr('data-target', '');
      }); 
    }
  });




  /*-------------------------------------------------*/
  /* =  add text in button
  /*-------------------------------------------------*/


  $('#menu-filter .filter').on('click', function(){ 
      var text = $(this).html(); 
      $('.filters button').html(text);
 
  });



  /*-------------------------------------------------*/
  /* =  img to background
  /*-------------------------------------------------*/


  $(".white-popup img , .isotope-item >a >img,#subheader #slider1 img ").each(function(i, elem) {
    var img = $(elem);
    var div = $("<div />").css({
      background: "url(" + img.attr("src") + ") no-repeat",
      width: img.width() + "px",
      height: img.height() + "px"
    });
    img.replaceWith(div);
    $(div).addClass('browse-images')
  });




  /*-------------------------------------------------*/
  /* =  Izotope
  /*-------------------------------------------------*/
  $('#filter_content').isotope({
      filter: '*',
     });

    // cache filter_content
    var $filter_content = $('#filter_content');
    // initialize isotope
    $filter_content.isotope({
        animationOptions: {
          duration: 750,
          easing: 'ease-in',
          queue: true
        }
    });

    // filter items when filter link is clicked
    $('#filters a').click(function(){
      var selector = $(this).attr('data-filter');
      $filter_content.isotope({ filter: selector });
      return true;
    });

  /*-------------------------------------------------*/
  /* =  video 
  /*-------------------------------------------------*/

    jQuery(function(){
      if (self.location.href == top.location.href){
          // var logo=$("<a href='http://pupunzi.com/#mb.components/components.html' style='position:absolute;top:0;z-index:1000'><img id='logo' border='0' src='http://pupunzi.com/images/logo.png' alt='mb.ideas.repository'></a>");
          // $("#wrapper").prepend(logo);
          // $("#logo").fadeIn();
      }
      //debug functions
      jQuery("#bgndVideo").on("YTPStart", function(){
          jQuery("#eventListener").html("YTPStart");
          jQuery("#eventListener").append(" :: (state= "+ jQuery("#bgndVideo").getPlayer().getPlayerState()+")");
          jQuery("#eventListener").append(" :: (quality= "+ jQuery("#bgndVideo").getPlayer().getPlaybackQuality()+")");
      });
      jQuery("#bgndVideo").on("YTPLoop", function(e){
          jQuery("#eventListener").html("YTPLoop");
          jQuery("#eventListener").append(" :: (state= "+ jQuery("#bgndVideo").getPlayer().getPlayerState()+")");
          jQuery("#eventListener").append(" :: "+ e.counter);
      });
      jQuery("#bgndVideo").on("YTPEnd", function(){
          jQuery("#eventListener").html("YTPEnd");
          jQuery("#eventListener").append(" :: (state= "+ jQuery("#bgndVideo").getPlayer().getPlayerState()+")");
          console.debug("YTPEnd")
      });
      jQuery("#bgndVideo").on("YTPPause", function(){
          jQuery("#eventListener").html("YTPPause");
          jQuery("#eventListener").append(" :: (state= "+ jQuery("#bgndVideo").getPlayer().getPlayerState()+")");
      });
      jQuery("#bgndVideo").on("YTPBuffering", function(){
          jQuery("#eventListener").html("YTPBuffering");
          jQuery("#eventListener").append(" :: (state= "+ jQuery("#bgndVideo").getPlayer().getPlayerState()+")");
      });

      jQuery(".player").mb_YTPlayer({
          onReady: function(){
              jQuery("#eventListener").append(" (Player is ready)");
          }
      });
    });

    // var v = false;
    // function changeVideo(){
    //     var vID = v ? "7SnmCUwOsts" : "BsekcY04xvQ";
    //     jQuery('#bgndVideo').changeMovie({videoURL:vID});
    //     $("#vidData").toggle(1000);
    //     v = !v;
    // }




  /*-------------------------------------------------*/
  /* =  magnific popup 
  /*-------------------------------------------------*/


    $('.popup-modal').magnificPopup({
      type:'inline',
      midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });



    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title') + '<small></small>';
        }
      }
    });

    $('.popup-youtube, .popup-vimeo').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: true
    }) ;




  /*-------------------------------------------------*/
	/* =  slider subheader
	/*-------------------------------------------------*/

 
	$("#slider1").responsiveSlides({
    nav: true,
    // random:true,
    prevText: "Previous",
    nextText: "Next", 
    pager: true
  });
  var wraper = '<div><img src="images/22.png" alt=""/></div>';
  var container_wrap = '<div class="container nav-container"></div>';
  // var next = '<span>NEXT SLIDE</span>';
  $('#subheader .rslides_tabs li').append ('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16"preserveAspectRatio="none"><circle cx="8" cy="8" r="6.215"/></svg>');
  $('#subheader .next').wrap('<div class="nav-circleslide"></div>');
  // $('#subheader .next').append(wraper,next,'NEXT SLIDE');
  $('#subheader .rslides_tabs').wrap(container_wrap);
  // $('#subheader .nav-circleslide').append(next);





  /*-------------------------------------------------*/
  /* =  slider follow
  /*-------------------------------------------------*/


  $("#slider3").responsiveSlides({
    nav: true,
    // random:true,
    prevText: "Previous",
    nextText: "Next", 
    pager: true
  });



  /*-------------------------------------------------*/
  /* =  slider team
  /*-------------------------------------------------*/


  $("#owl2").owlCarousel({
 
    // autoPlay: 4000, //Set AutoPlay to 3 seconds
     
    items : 5,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [700,2],
    itemsTablet: [400,1],
    navigation : true

     
  });



	/*-------------------------------------------------*/
	/* =  inview
	/*-------------------------------------------------*/


	// $('').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
 //      if (isInView) {
 //        $(this).addClass('active');
 //      }
 //      // else {
 //      //   $(this).removeClass('active');
 //      // }
 //    });




  /*-------------------------------------------------*/
  /* =  animate numbers
  /*-------------------------------------------------*/


  $('#blog').one('inview', function(event, isInView, visiblePartX, visiblePartY){
    $('#lines1').animateNumber({ number: 226},2000);

    $('#lines2').animateNumber({ number: 356},2000);

    $('#lines3').animateNumber({ number: 195},2000);

    $('#lines4').animateNumber({ number: 583},2000);
  });


  /*-------------------------------------------------*/
  /* =  validation
  /*-------------------------------------------------*/


    var word = ['one', 'two', 'three', 'four', 'five'];
    var rand = (Math.floor(Math.random() * 4));
    var correct = word[rand];
     console.log(correct);
     $('#test p span').html(correct);
     $('input[name=rand]').click(function() {
        $('input[name=rand]').parent().removeClass('active1');
        $('input[name=rand]:checked').parent().addClass('active1');
     });
     $('#btn').click(function() {
         $('.popup-email').fadeOut('fast');
     });
     $('#contact-form').validate({
        errorElement: 'p',
        errorClass: 'notify',
        rules: {
            name: "required",
            subject: "required",
            mail: {
                required: true,
                email: true
            },
            message: "required"
        },
        messages: {
            name: "Please enter your name",
            email: {
                required: "Please enter your email",
                email: "Valid email is required"
            }
        },
        submitHandler: function(form) {
            var user = $('input[name=rand]:checked').val();

            if(user === correct) {
                $.ajax({
                    url: 'form_data.php',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                      name: $('#name').val(),
                      mail: $('#mail').val(),
                      subject: $('#subject').val(),
                      message: $('#message').val()
                    },
                    success: function(response) {
                        if(response.status === true) {
                            $('.element p').remove();
                            $('.element').prepend('<p class="success">' + response.msg + '</p>');
                            $('.popup-email').fadeIn('fast');
                            $('#name').prop('value', '');
                            $('#mail').prop('value', '');
                            $('#subject').prop('value', '');
                            $('#message').prop('value', '');
                            $('input[name=rand]:checked').parent().removeClass('active1');
                            $('input[name=rand]:checked').prop('checked', false);
                        } else {
                            $('.element p').remove();
                            $('.element').prepend('<p class="error">' + response.msg + '</p>');
                            $('.popup-email').fadeIn('fast');
                        }
                    }
                });
            } else {
                $('.popup-email').fadeIn('fast');
                $('.element p').remove();
                $('.element').prepend('<p class="error">Incorrect number selected!</p>');
            }
        }
    }); 


  /*-------------------------------------------------*/
  /* =  map
  /*-------------------------------------------------*/


  function initialize() {
    var loc, map, marker, infobox, styles;
    
    loc = new google.maps.LatLng(51.508606, -0.133789);
    
    map = new google.maps.Map(document.getElementById("map"), {
         zoom: 7,
         center: loc,
         scrollwheel: false,
         navigationControl: false,
         mapTypeControl: false,
         scaleControl: false,
         draggable: false,
         mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    
    // marker = new google.maps.Marker({
    //     map: map,
    //     position: loc,
    //     visible: true
    // });

    marker = new google.maps.Marker({
        position: new google.maps.LatLng(51.508606, -0.133789),
        map: map,
        title: 'Uluru (Ayers Rock)',
        icon: 'images/pin.png' // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
    });
    styles = [
      {
        "featureType": "administrative",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "poi",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "road",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "transit",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "landscape",
        "stylers": [
          { "visibility": "on" },
          { "color": "#c7cad5" }
        ]
      },{
        "featureType": "water",
        "stylers": [
          { "visibility": "on" },
          { "color": "#eaedf3" }
        ]
      },{
      }
    ];

    infobox = new InfoBox({
         content: document.getElementById("infobox"),
         disableAutoPan: false,
         maxWidth: 790,
         pixelOffset: new google.maps.Size(-395, -200),
         zIndex: 999,
         boxStyle: {
            // background: "url('http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/examples/tipbox.gif') no-repeat",
            opacity: 1,
            width: "790px"
        },
        // closeBoxMargin: "12px 4px 2px 2px",
        closeBoxURL: "images/location.png",
        infoBoxClearance: new google.maps.Size(1, 1)
    });
    var styledMap = new google.maps.StyledMapType(styles,
      {name: "Styled Map"});

    map.mapTypes.set('map', styledMap);
    map.setMapTypeId('map'); 

    google.maps.event.addListener(marker, 'click', function() {
        infobox.open(map, this);
        map.panTo(loc);
    });
}
google.maps.event.addDomListener(window, 'load', initialize);


});








 
