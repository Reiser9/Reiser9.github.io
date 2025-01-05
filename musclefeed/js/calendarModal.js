// Календарь
$(".modal__calendar").MEC({
    from_monday: true,
});

const getDateFromString = (day, monthYear) => {
    const fullDateString = `${monthYear} ${day}`;
    const date = new Date(fullDateString);

    if (!isNaN(date)) {
        return date;
    }

    throw new Error('Invalid date string');
}

$(".modal__calendar").on("click", ".a-date:not(.blurred)", function(){
    const day = $(this).text();
    const year = $("#monthYear").text();
    const date = getDateFromString(day, year); // Выбранная дата
});

const disabledDates = ['2025-03-15', '2025-04-01', '2025-04-15']; // Даты, которые не будут активны

const isDateDisabled = (day, monthYear) => {
    const fullDate = new Date(`${monthYear} ${day}`);

    if (!isNaN(fullDate)) {
        const dateString = `${fullDate.getFullYear()}-${String(fullDate.getMonth() + 1).padStart(2, '0')}-${String(fullDate.getDate()).padStart(2, '0')}`;
        return disabledDates.includes(dateString);
    }

    return false;
}

const observer = new MutationObserver(() => {
    $('.a-date').each(function () {
        const day = $(this).text();
        const monthYear = $("#monthYear").text();

        if (day && monthYear && isDateDisabled(day, monthYear)) {
            $(this).addClass('blurred');
        }
    });
});

const calendar = document.querySelector('.modal__calendar');

if(calendar){
    observer.observe(calendar, {
        childList: true,
        subtree: true
    });
}