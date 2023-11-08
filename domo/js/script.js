const closeMenu = () => {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('lock');
}

// изменение ширины экрана
window.addEventListener('resize', function (e) {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});

// событие клика
document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.closest('.header__menu-btn')) {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('lock');
    }

    if (!targetEl.closest('.header__menu-btn')
        && !targetEl.closest('.header__nav.active')
        && !targetEl.closest('.header__btn')) {
            closeMenu();
    }

    if (targetEl.hasAttribute('data-goto')) {
        const gotoBlock = document.querySelector(`.${targetEl.dataset.goto}`);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top;

        window.scrollTo({
            behavior: "smooth",
            top: gotoBlockValue,
        });

        if (menu.classList.contains('active')) {
            closeMenu();
        }
    }

    if (targetEl.closest('.tokenomics__btn')) {
        const textToCopy = address.innerHTML;

        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);

        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);

        document.execCommand('copy');

        document.body.removeChild(textarea);

        copyText.textContent = 'Copied';

        setTimeout(function () {
            copyText.textContent = 'Copy address';
        }, 2000);
    }
});

const menuBtn = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.header__nav');
const body = document.body;
const copyText = document.querySelector('.tokenomics__copy-text');
const address = document.querySelector('.tokenomics__address');
