// Secton scroll
let currentSection = 1;
const totalSections = $(".section").length;
let isAnimating = false;
let lastScrollTop = $(window).scrollTop();

const smoothScrollToPosition = (position) => {
    $("body").css("overflow", "hidden");
    isAnimating = true;
    $('html, body').animate({scrollTop: position}, 800, () => {
        isAnimating = false;
        lastScrollTop = $(window).scrollTop();
        $("body").css("overflow", "visible");
    });

    $(".section.section__active").removeClass("prev");
    $(".section.section__active").eq(currentSection - 2).addClass("prev");
}

const smoothScrollToSection = (section, direction = 'top') => {
    if(currentSection > totalSections) return;
    
    const targetSection = $(`#section${section}`);
    const sectionTop = targetSection.offset().top;
    const sectionBottom = sectionTop + targetSection.outerHeight();

    const targetPosition = (direction === 'down') ? sectionTop : sectionBottom - $(window).height();

    smoothScrollToPosition(targetPosition);
}

function getScrollPosition() {
    return $(window).scrollTop();
}

function isAtSectionEdge(section) {
    if(currentSection > totalSections) return;

    const targetSection = $(`#section${section}`);
    const sectionTop = targetSection.offset().top;
    const sectionBottom = sectionTop + targetSection.outerHeight();
    const scrollPosition = getScrollPosition();
    const windowHeight = $(window).height();

    if (scrollPosition + windowHeight >= sectionBottom && section < totalSections) {
        return 'bottom';
    }
    if (scrollPosition <= sectionTop && section > 1) {
        return 'top';
    }
    return null;
}

const determineCurrentSection = () => {
    const scrollPosition = getScrollPosition();
    $('.section').each(function(index) {
        const sectionTop = $(this).offset().top;
        const sectionBottom = sectionTop + $(this).outerHeight();
        $(this).addClass("section__active");
        $(this).last().parent(".merge").addClass("active");
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = index + 1;
            return false;
        }
        else if(scrollPosition >= sectionBottom){
            currentSection = totalSections;
        }
    });
    
}

determineCurrentSection();

$(window).on('scroll', function() {
    if (isAnimating) return;

    const scrollPosition = getScrollPosition();
    const edge = isAtSectionEdge(currentSection);

    const delta = scrollPosition - lastScrollTop;

    if (delta > 0 && edge === 'bottom') {
        currentSection++;

        smoothScrollToSection(currentSection, 'down');
        $(`#section${currentSection}`).addClass("section__active");
        $(`#section${currentSection}:last-child`).parent(".merge").addClass("active");
    }
    else if (delta < 0 && edge === 'top') {
        $(`#section${currentSection}`).removeClass("section__active");
        $(`#section${currentSection}:last-child`).parent(".merge").removeClass("active");
        currentSection--;

        smoothScrollToSection(currentSection, 'up');
    }

    lastScrollTop = scrollPosition;
});