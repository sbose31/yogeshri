/* =============================================
                Preloader
================================================ */
$(window).on('load', function () { //makes sure that whole site is loaded and then performs the function
    $('#status').fadeOut();
    $('#preloader').delay(450).fadeOut('slow'); /*delays fadeout(vanish of element) by 450ms*/
});

/* =============================================
                Team
================================================ */
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 650,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            //breakpoint from 0 up
            0: {
                items: 1
            },
            //breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });
});

/* =============================================
                Progress Bars
================================================ */
$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});


/* =============================================
                Responsive Tabs
================================================ */
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});


/* =============================================
                Portfolio
================================================ */
$(window).on('load', function () {
    
    /* Add & Remove isotope-hidden class to portfolio item, before initializing Isotope: */

     // Remove isotope-hidden class if portfolio item is not hidden
     var itemReveal = Isotope.Item.prototype.reveal;

     Isotope.Item.prototype.reveal = function() {
     itemReveal.apply( this, arguments );
     $( this.element ).find('.portfolio-item').removeClass('isotope-hidden');
     };


     // Add isotope-hidden class if portfolio item is hidden
     var itemHide = Isotope.Item.prototype.hide;

     Isotope.Item.prototype.hide = function() {
     itemHide.apply( this, arguments );
     $( this.element ).find('.portfolio-item').addClass('isotope-hidden'); 
     };

    //initialize isotope
    $("#isotope-container").isotope({});

    //filter items on button click
    $("#isotope-filters").on('click', 'button', function () { //on click of button in div having class isotope-filters perform certain function

        //get filter value
        var filterValue = $(this).attr('data-filter');

        //filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});


/* =============================================
                Magnifier
================================================ */
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: '.portfolio-item:not(.isotope-hidden) a', //child item selctor, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});


/* =============================================
                Testimonial
================================================ */
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 650,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});


/* =============================================
                Stats
================================================ */
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2500
    });
});


/* =============================================
                Clients
================================================ */
$(function () {
    $("#clients-list").owlCarousel({
        items: 5,
        autoplay: true,
        smartSpeed: 650,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            //breakpoint from 0 up
            0: {
                items: 2
            },
            //breakpoint from 480 up
            480: {
                items: 3
            },
            //breakpoint from 768 up
            768: {
                items: 6
            }
        }
    });
});


/* =============================================
                Google Maps
================================================ */
/*
$(window).on('load', function () {
    
    //Map Variables
    var mapAdrs = 'My home Vihanga,Gachibowli 500032, hyderabad';
    var latLng = {lat: 17.433848, lng: 78.332214};
    
    //render map
    var map= new google.maps.Map(document.getElementById('map'), {           //creates new object of google map
        zoom: 11,
        center: latLng
    });            

}); */


/* =============================================
                Navigation bar
================================================ */
$(function () {
    
    
    //on page load
    showHideNav();
    
    $(window).scroll(function(){
        
        //On Window's scroll
        showHideNav();
        
    });
    
    function showHideNav() {
        if( $(window).scrollTop() > 100 ) {
            //show white nav
            $("nav").addClass("white-nav-top");
            
            //show dark logo 
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
            
            //show back to top button
            $("#back-to-top").fadeIn();
            
            
        } else {
            //hide white nav
            $("nav").removeClass("white-nav-top");
            
            //show logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
            
            //hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});


/* smooth scrolling */
$(function () {
    $("a.smooth-scroll").click(function(event) {
        event.preventDefault();                  //prevents default link clicking behavior
        
        //get section id like #home etc
        var section_id = $(this).attr("href");
        
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64        //assigns top offset of section tab clicked, in pixels to scrolltop attribute 
        }, 1250, "easeInOutExpo");
    });
});


/* =============================================
                Mobile nav 
================================================ */
$(function () {
    
    /* show nav on click */
    $("#mobile-nav-open-btn").click(function() {
        $("#mobile-nav").css("height", "100%");
    });
    
    /* hide nav on click */
    $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
        $("#mobile-nav").css("height", "0%");
    });
});


/* =============================================
                Animation  
================================================ */
/* to reveal animation on scroll */
$(function () {
    new WOW().init();
});

$(window).on('load', function () {
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeftBig");
    $("#home-text p").addClass("animated fadeInRightBig");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
});