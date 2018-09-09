$(document).ready(function () {

    $('.owl-carousel').owlCarousel({

        loop: true,
        autoplay: true,
        // autoplayTimeout: 3000,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 1
            }
        }
    });
});