$('.main-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    lazyLoad: 'progressive',
    responsive: [
        {
            breakpoint: 1410,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            },
        },
        {
            breakpoint: 1220,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            },
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false
            },
        }
    ]
});
