$('.sliders').owlCarousel({
    loop:true,
    items:1,
    margin:0,
    nav:false,
})

$('.products').owlCarousel({
    loop:true,
    items:4,
    margin:10,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})

function postsCarousel() {
        var checkWidth = jQuery(window).width();

        if (checkWidth < 767) {
            jQuery('.offer').owlCarousel({
                items:1,
                dots: true,
                nav: false,
            })
        }
    }
    postsCarousel();
    jQuery(window).resize(postsCarousel);
