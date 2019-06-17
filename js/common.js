$(document).ready(function () {
    if (window.location.pathname === '/'){
        $(".wrapper").onepage_scroll({
            sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
            easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",// "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
            animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
            loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
            keyboard: false,                  // You can activate the keyboard controls
            direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
        });
    }

    $('.header-cam').on('mouseover', function () {
        $(this).addClass('camAnimate');
        $('.header-analytic').addClass('opacity');
    });
    $('.header-cam').on('mouseout', function () {
        $(this).removeClass('camAnimate');
        $('.header-analytic').removeClass('opacity');
    });
    $('.header-analytic').on('mouseover', function () {
        $('.header-cam').addClass('opacity');
    });
    $('.header-analytic').on('mouseout', function () {
        $('.header-cam').removeClass('opacity');
    });
    $(".js-range-slider").ionRangeSlider({
        skin: "round",
        postfix: " мин"
    });


    // YA MAPS
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map',{
            center: [51.525499, 46.031184],
            zoom: 15,
        }),
        myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [51.525499, 46.031184]
            },
            properties: {
                iconContent: 'Мы тут',
            }
        }, {
            preset: 'islands#blackStretchyIcon',
        });
        myMap.geoObjects
            .add(myGeoObject)
    })
});