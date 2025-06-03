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

    if (targetEl.closest('.burger-btn')) {
        headerNav.classList.toggle('active');
        body.classList.toggle('lock');
    }

    if (
        headerNav.classList.contains('active') &&
        !targetEl.closest('.header__nav') &&
        !targetEl.closest('.burger-btn')
    ) {
        headerNav.classList.remove('active');
        body.classList.remove('lock');
    }
});

// const navLink = document.querySelectorAll(".go");
// navLink.forEach(
//     elem => elem.addEventListener("click", function(e){
//         e.preventDefault();
        
//         const idPoint = this.dataset.point;
        
//         if(!idPoint) return;

//         document.querySelector("#" + idPoint).scrollIntoView({
//             behavior: "smooth",
//             block: "start"
//         });

//         body.classList.remove('lock');
//         headerNav.classList.remove('active');
//     })
// );

// бургер меню
// const burgerBtn = document.querySelector('.burger-btn');
const headerNav = document.querySelector('.header__nav');
const body = document.body;

document.addEventListener("DOMContentLoaded", function(){
    const goLinks = document.querySelectorAll('.go');

    goLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.dataset.point;

            if (!targetId) {
                return;
            }

            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                const baseUrl = window.location.origin;
                window.location.href = baseUrl + '/#' + targetId;
            }
        });
    });

    if (window.location.hash) {
        const hashId = window.location.hash.substring(1);
        const hashElement = document.getElementById(hashId);

        if (hashElement) {
            hashElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            history.replaceState({}, document.title, window.location.pathname + window.location.search);
        } else {
            history.replaceState({}, document.title, window.location.pathname + window.location.search);
        }
    }
});

// new TypeIt("#mainTitle", {
//     strings: "",
//     speed: 50,
//     waitUntilVisible: true,
// }).go();

// new TypeIt("#howworkTitle", {
//     strings: "",
//     speed: 50,
//     waitUntilVisible: true,
// }).go();

// new TypeIt("#financeTitle", {
//     strings: "",
//     speed: 50,
//     waitUntilVisible: true,
// }).go();

// new TypeIt("#communityTitle", {
//     strings: "",
//     speed: 50,
//     waitUntilVisible: true,
// }).go();

// new TypeIt("#refTitle", {
//     strings: "",
//     speed: 50,
//     waitUntilVisible: true,
// }).go();

// new TypeIt("#howstartTitle", {
//     strings: "",
//     speed: 50,
//     waitUntilVisible: true,
// }).go();

// new TypeIt("#blogTitle", {
//     strings: "",
//     speed: 50,
//     waitUntilVisible: true,
// }).go();

// new TypeIt("#faqTitle", {
//     strings: "",
//     speed: 50,
//     waitUntilVisible: true,
// }).go();
// const wrapper = document.querySelector('.wrapper');