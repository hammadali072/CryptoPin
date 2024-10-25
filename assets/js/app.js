var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 2,
    spaceBetween: 48,
    mousewheel: {
        invert: false, // Set to true to reverse the scroll direction
    },
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: ".swiper_button_next_1",
        prevEl: ".swiper_button_prev_1",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 48,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1299: {
            spaceBetween: 48,
        },
    }
});