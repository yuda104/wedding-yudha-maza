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



//var d = new Date(new Date().getTime() + 200 * 120 * 120 * 2000);
// simplyCountdown('.countdown', {
//     year: 2021,
//     month: 2,
//     day: 20
// });

// var d = new Date(),
// countUpDate = new Date();
// d.setDate(d.getDate() + 450);

// default example

  

simplyCountdown('.simply-countdown-one', {
    year: 2021,
    month: 2,
    day: 20,
    enableUtc: true
});

var mymap = L.map('mapid').setView([-6.25, 106.87], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoieXVkaGFrIiwiYSI6ImNrbDJnY2YxcDE0eGYybmxiNGRlcWF4bzQifQ.gmXI526ChIJ0mIYeX2PMqQ'
}).addTo(mymap);

var marker = L.marker([-6.253752827177549, 106.8704594978605]).addTo(mymap);

// var popup = L.popup()
//     .setLatLng([-6.253752827177549, 106.8704594978605])
//     .setContent("Disini acaranya")
//     .openOn(mymap);

    //-6.253752827177549, 106.8704594978605


const button = document.querySelector("#button");
const icon = document.querySelector("#button > i");
const audio = document.querySelector("audio");

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 0.2;
    audio.play();
    icon.classList.remove('fa-volume-up');
    icon.classList.add('fa-volume-off');
    
  } else {
    audio.pause();
    icon.classList.remove('fa-volume-off');
    icon.classList.add('fa-volume-up');
  }
  button.classList.add("fade");
});