const burger = $('.nav__button');
const popup = $('.nav__popup');
const cross = $('.cross-btn');
const menu = $('.nav__list').clone();
const contacts = $('.contact__links').clone();

burger.click(function () {

    if (!popup.hasClass('nav__popup--opened')) {
        popup.addClass('nav__popup--opened');
        popup.append(menu).append(contacts);
        menu.addClass('js-header-menu');
        contacts.addClass('js-header-contacts');
    } else {
        return
    }
});

cross.click(function () {
    if (popup.hasClass('nav__popup--opened')) {
        popup.removeClass('nav__popup--opened');
    } else {
        return
    }
});