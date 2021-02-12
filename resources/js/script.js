$(document).ready(function() {
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down"){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset : '60px;'
    });

    /* Scroll on button */
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000)
    });

    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000)
    });


    /* Navigation scroll */
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });



    /* Animation on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__animated');
        $('.js--wp-1').addClass('animate__fadeIn');
    },{
        offset: '50%'
    });

     $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__animated');
        $('.js--wp-2').addClass('animate__fadeInUp');
    },{
        offset: '50%'
    });

     $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animate__animated');
        $('.js--wp-3').addClass('animate__fadeIn');
    },{
        offset: '50%'
    });

     $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animate__animated');
        $('.js--wp-4').addClass('animate__pulse');
    },{
        offset: '50%'
    });
});

/* Mobile nav */
$('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    nav.slideToggle(200);
    if (icon.hasClass('ion-navicon-round')){
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
    }else {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
    }
});

// $('.countdown').simplyCountdown({
//     year: 2015, // required
//     month: 6, // required
//     day: 28, // required
    
// });



var d = new Date(new Date().getTime() + 200 * 120 * 120 * 2000);
simplyCountdown('.countdown', {
    year: d.getFullYear(),
    month: d.getMonth() + 1,
    day: d.getDate()
});
$('#simply-countdown-losange').simplyCountdown({
    year: d.getFullYear(),
    month: d.getMonth() + 1,
    day: d.getDate(),
    enableUtc: false
});