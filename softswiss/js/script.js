// проверка на мобильное устройство
// const isMobile = {
//     Android: function () {
//         return navigator.userAgent.match(/Android/i);
//     },
//     BlackBerry: function () {
//         return navigator.userAgent.match(/BlackBerry/i);
//     },
//     iOS: function () {
//         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//     },
//     Opera: function () {
//         return navigator.userAgent.match(/Opera Mini/i);
//     },
//     Windows: function () {
//         return navigator.userAgent.match(/IEMobile/i);
//     },
//     any: function () {
//         return (isMobile.Android() ||
//             isMobile.BlackBerry() ||
//             isMobile.iOS() ||
//             isMobile.Opera() ||
//             isMobile.Windows());
//     }
// };

// для попапов
// перед body.lock вставить:
// const scrollWidth = window.innerWidth - wrapper.offsetWidth;
// setPadding(scrollWidth);

// const setPadding = (padding) => {
//     wrapper.style.paddingRight = padding + 'px';
// }

// изменение ширины экрана
window.addEventListener('resize', function (e) {
    // if (window.innerWidth > 768) {
    //     burgerBtn.classList.remove('active');
    //     body.classList.remove('lock');
    // }
});

// swiper
new Swiper('.swiper', {
    navigation: {
        nextEl: '.speakers__btn_next',
        prevEl: '.speakers__btn_prev'
    },

    slidesPerView: 3,
    spaceBetween: 20,

    breakpoints: {
        0: {
            slidesPerView: 1.05
        },
        576: {
            slidesPerView: 1.5
        },
        768: {
            slidesPerView: 2.5
        },
        992: {
            slidesPerView: 2.75
        },
        1260: {
            slidesPerView: 3
        }
    }
});

// событие клика
document.addEventListener('click', function (e) {
    const targetEl = e.target;

    // if (targetEl.closest('.burger-btn')) {
    //     burgerBtn.classList.toggle('active');
    //     body.classList.toggle('lock');
    // }

    if (targetEl.closest('.faq-item__head')) {
        targetEl.closest('.faq-item').classList.toggle('active');
    }

    if (targetEl.closest('.up-btn')) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    if (targetEl.closest('.up-btn')) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    if (targetEl.closest('.map-popup-btn')) {
        body.classList.add('lock');
        mapPopup.classList.add('active');
    }

    if (
        targetEl.closest('.map-popup') &&
        mapPopup.classList.contains('active') &&
        !targetEl.closest('.map-popup__content')
    ) {
        body.classList.remove('lock');
        mapPopup.classList.remove('active');
    }

    if (targetEl.closest('.burger-btn')) {
        headerNav.classList.toggle('active');
    }
});

// const wrapper = document.querySelector('.wrapper');
const burgerBtn = document.querySelector('.burger-btn');
const headerNav = document.querySelector('.header__nav');
const body = document.body;
const mapPopup = document.querySelector('.map-popup');

document.addEventListener("DOMContentLoaded", function(){
    const goLinks = document.querySelectorAll('.go');

    goLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.dataset.point;

            if (!targetId) return;

            const targetElement = document.getElementById(targetId);

            if (!targetElement) return;

            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
