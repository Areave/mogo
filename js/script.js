'use strict'

document.addEventListener('DOMContentLoaded', () => {


    // accordeon

    const activeClass = 'item_active';
    const acc_items = document.querySelectorAll('.acc_item');



    acc_items.forEach(item => {
        item.addEventListener('click', () => {

            if (item.classList.contains(activeClass)) {
                item.classList.remove(activeClass);
            }

            else {
                acc_items.forEach(item => {
                    item.classList.remove(activeClass);
                });
                item.classList.add(activeClass);
            }
        });
    });


    // burger menu

    const toggle_menu = document.querySelector('.toggle_menu');
    const header_nav = document.querySelector('.header_nav');

    toggle_menu.addEventListener('click', () => {
        toggle_menu.classList.toggle('active');
        header_nav.classList.toggle('active');


    });


    // scroll by menu

    const links = document.querySelectorAll('.header_menu_item a');

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            toggle_menu.classList.remove('active');
            header_nav.classList.remove('active');  


            let elId = link.getAttribute('data-scroll');

            let offsetTarget = document.querySelector(elId).offsetTop;

            window.scrollTo(0, offsetTarget - 90);

        });
    });


    // fixed header

    let header = document.querySelector('#header');
    console.log(header);

    window.addEventListener('scroll', () => {
        console.log(window.pageYOffset);

        if (window.pageYOffset > 0) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    });

});


