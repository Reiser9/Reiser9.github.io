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

// бургер меню
const body = document.body;
const headerNav = document.querySelector('.header__nav');
// const wrapper = document.querySelector('.wrapper');

// событие клика
document.addEventListener('click', function (e) {
    const targetEl = e.target;

    if (targetEl.closest('.burger-btn')) {
        body.classList.toggle('lock');
        headerNav.classList.toggle('active');
    }
});

// главный слайдер
const bannerSlider = new Swiper('.banner__slider', {
    slidesPerView: 1,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    }
});

const progressCircle = document.querySelector('.progress');
const slideDuration = bannerSlider.params.autoplay.delay - 1000;

const updateProgress = progress => {
    const dashArray = parseFloat(
        progressCircle.getAttribute('stroke-dasharray')
    );
    const dashOffset = dashArray - (dashArray / 100) * (progress * 100);
    progressCircle.style.strokeDashoffset = dashOffset;
};

let progressInterval;
const startProgress = () => {
    let progress = 0;
    clearInterval(progressInterval);
    progressInterval = setInterval(() => {
        progress += 1 / (slideDuration / 1000);
        updateProgress(progress);
        if (progress > 1) clearInterval(progressInterval);
    }, 1000);
};

bannerSlider.on('slideChangeTransitionStart', () => {
    clearInterval(progressInterval);
    updateProgress(0);
});

bannerSlider.on('slideChangeTransitionEnd', () => {
    startProgress();
});

bannerSlider.on('autoplayStop', () => {
    clearInterval(progressInterval);
    updateProgress(0);
});

startProgress();

let isPaused = false;
const circleIndicator = document.querySelector('.circle__indicator');
if (circleIndicator) {
    circleIndicator.addEventListener('click', () => {
        if (isPaused) {
            bannerSlider.autoplay.start();
            circleIndicator.classList.add('played');
            startProgress();
            isPaused = false;
        } else {
            bannerSlider.autoplay.stop();
            circleIndicator.classList.remove('played');
            clearInterval(progressInterval);
            isPaused = true;
        }
    });
}

const bannerItems = document.querySelectorAll('.banner__item');
bannerItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        bannerItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        bannerSlider.slideTo(index);
    });
});

bannerSlider.on('slideChange', () => {
    const activeIndex = bannerSlider.realIndex;
    bannerItems.forEach(item => item.classList.remove('active'));
    if (bannerItems[activeIndex]) {
        bannerItems[activeIndex].classList.add('active');
    }
});

// слайдеры карточек
document.querySelectorAll('.card-slider').forEach(slider => {
    new Swiper(slider, {
        spaceBetween: 20,
        loop: true,
        // autoplay: true,
        navigation: {
            nextEl: slider
                .closest('.section')
                .querySelector('.slider-btn-next'),
            prevEl: slider.closest('.section').querySelector('.slider-btn-prev')
        },
        breakpoints: {
            0: {
                slidesPerView: 1.1
            },
            576: {
                slidesPerView: 1.5,
                centeredSlides: true
            },
            768: {
                slidesPerView: 2,
                centeredSlides: true
            },
            992: {
                slidesPerView: 2.5,
                centeredSlides: true
            },
            1200: {
                slidesPerView: 2.75,
                centeredSlides: true
            },
            1400: {
                slidesPerView: 3.5,
                centeredSlides: true
            },
            1600: {
                slidesPerView: 4,
                centeredSlides: true
            }
        }
    });
});

// слайдеры больших карточек
document.querySelectorAll('.big-slider').forEach(slider => {
    new Swiper(slider, {
        spaceBetween: 20,
        loop: true,
        autoplay: true,
        navigation: {
            nextEl: slider
                .closest('.section')
                .querySelector('.slider-btn-next'),
            prevEl: slider.closest('.section').querySelector('.slider-btn-prev')
        },
        breakpoints: {
            0: {
                slidesPerView: 1.1
            },
            576: {
                slidesPerView: 1.1,
                centeredSlides: true
            },
            768: {
                slidesPerView: 1.5,
                centeredSlides: true
            },
            922: {
                slidesPerView: 1.75,
                centeredSlides: true
            },
            1200: {
                slidesPerView: 'auto',
                centeredSlides: true
            }
        }
    });
});

// слайдеры видео
document.querySelectorAll('.video-slider').forEach(slider => {
    new Swiper(slider, {
        spaceBetween: 20,
        loop: true,
        autoplay: true,
        navigation: {
            nextEl: slider
                .closest('.section')
                .querySelector('.slider-btn-next'),
            prevEl: slider.closest('.section').querySelector('.slider-btn-prev')
        },
        breakpoints: {
            0: {
                slidesPerView: 1.1
            },
            576: {
                slidesPerView: 1.5,
                centeredSlides: true
            },
            768: {
                slidesPerView: 2,
                centeredSlides: true
            },
            992: {
                slidesPerView: 2.5,
                centeredSlides: true
            },
            1200: {
                slidesPerView: 2.75,
                centeredSlides: true
            }
        }
    });
});

// слайдеры участников
document.querySelectorAll('.member-slider').forEach(slider => {
    new Swiper(slider, {
        spaceBetween: 20,
        pagination: {
            clickable: true,
            el: slider.querySelector('.member-slider__pagination')
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1400: {
                slidesPerView: 4
            }
        }
    });
});
