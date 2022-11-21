const burger = $('.nav__button');
const popup = $('.nav__popup');
const cross = $('.cross-btn');
const menu = $('.nav__list').clone();
const contacts = $('.contact__links').clone();

burger.click(function () {

    if (popup.hasClass('nav__popup--hidden')) {
        popup.removeClass('nav__popup--hidden');
        popup.append(menu).append(contacts);
        menu.addClass('js-header-menu');
        contacts.addClass('js-header-contacts');
    } else {
        return
    }
});

cross.click(function () {
    if (popup.hasClass('nav__popup--hidden')) {
        return
        } else {
        popup.addClass('nav__popup--hidden');
        }

});
if (window.screen.width >= 1410) {
    $('.perf-slider').slick({
        
    });

    $('.header__slider').children('.slick-next').text('След \u27F6');
    $('.header__slider').children('.slick-prev').text('\u27F5 Пред');
}

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

$('.production__slider').children('.slick-next').text('След \u27F6');
$('.production__slider').children('.slick-prev').text('\u27F5 Пред');
