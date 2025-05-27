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

// событие клика
document.addEventListener('click', function (e) {
    const targetEl = e.target;

    if (targetEl.closest('.faq-item__btn')) {
        const parent = targetEl.closest('.faq-item');
        parent.classList.toggle('active');
    }
});

// бургер меню
// const burgerBtn = document.querySelector('.burger-btn');
// const body = document.body;
// const wrapper = document.querySelector('.wrapper');
