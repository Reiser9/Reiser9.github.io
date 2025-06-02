// Локализация
const supportedLanguages = ['en', 'ru', 'es'];

const loadLanguage = (lang) => {
    $.getJSON(`localization/${lang}.json`, (data) => {
        $('[data-translate]').each(function() {
            var key = $(this).attr('data-translate');
            $(this).text(data[key]);
        });
    });
}

const getBrowserLanguage = () => {
    const lang = navigator.language || navigator.userLanguage;
    return lang.split('-')[0];
}

const setLanguage = (lang) => {
    if (supportedLanguages.includes(lang)) {
        localStorage.setItem('language', lang);
    }
    else {
        lang = 'en';
        localStorage.setItem('language', lang);
    }

    $('.lang__select').val(lang);
    loadLanguage(lang);
}

const init = () => {
    let lang = localStorage.getItem('language');

    if (!lang) {
        lang = getBrowserLanguage();
        setLanguage(lang);
    }
    else {
        loadLanguage(lang);
        $('.lang__select').val(lang);
    }
}

$('.lang__select').change(function() {
    var selectedLang = $(this).val();
    setLanguage(selectedLang);
});

init();