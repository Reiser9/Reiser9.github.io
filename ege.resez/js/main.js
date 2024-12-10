document.addEventListener("DOMContentLoaded", () => {
    // Изменение предмета
    const tasksData = {
        math: [
            { number: 12, title: "Планиметрия" },
            { number: 14, title: "Вычисления" },
        ],
        russian: [
            { number: 4, title: "Ударения" },
            { number: 5, title: "Паронимы" },
        ],
        informatics: [
            { number: 8, title: "Комбинаторика" },
            { number: 19, title: "Теория игр" },
        ],
        history: [
            { number: 1, title: "Даты" },
            { number: 5, title: "Личности" },
        ],
    };

    document.querySelector(".howuse__variant--subjects").addEventListener("click", (event) => {
        const subject = event.target.dataset.subject;

        if (tasksData[subject]) {
            document.querySelectorAll(".howuse__variant--subjects button").forEach((btn) => {
                btn.classList.remove("active");
            });
            event.target.classList.add("active");
            
            const taskElements = document.querySelectorAll(".howuse__task");

            tasksData[subject].forEach((task, index) => {
                taskElements[index].querySelector(".howuse__task--number").textContent = task.number;
                taskElements[index].querySelector(".howuse__task--name").textContent = task.title;
                
            });
        }
    });

    // Изменение количества заданий
    const updateCounter = (container, delta) => {
        const counterText = container.querySelector(".task__count");
        const decrementBtn = container.querySelector(".count__minus");
        const incrementBtn = container.querySelector(".count__plus");

        let currentValue = parseInt(counterText.textContent || "1", 10);

        if (isNaN(currentValue)) {
            currentValue = 1;
        }

        const newValue = Math.min(99, Math.max(1, currentValue + delta));
        counterText.textContent = newValue;

        decrementBtn.classList.toggle("disabled", newValue <= 1);
        incrementBtn.classList.toggle("disabled", newValue >= 99);
    };

    document
        .querySelectorAll(".task__count--container")
        .forEach((container) => {
            container
                .querySelector(".count__plus")
                .addEventListener("click", () => {
                    updateCounter(container, 1);
                });

            container
                .querySelector(".count__minus")
                .addEventListener("click", () => {
                    updateCounter(container, -1);
                });
        });

    // Изменение сложности заданий
    const difficulties = ["Легкая", "Средняя", "Сложная"];

    const updateDifficulty = (container, delta) => {
        const textElement = container.querySelector(".task__difficult");
        const decrementBtn = container.querySelector(".difficult__minus");
        const incrementBtn = container.querySelector(".difficult__plus");

        let currentIndex = difficulties.indexOf(textElement.textContent);

        if (currentIndex === -1) {
            currentIndex = 0;
        }

        const newIndex = Math.min(
            difficulties.length - 1,
            Math.max(0, currentIndex + delta)
        );

        textElement.textContent = difficulties[newIndex];

        decrementBtn.classList.toggle("disabled", newIndex === 0);
        incrementBtn.classList.toggle(
            "disabled",
            newIndex === difficulties.length - 1
        );
    };

    document
        .querySelectorAll(".task__difficult--container")
        .forEach((container) => {
            container
                .querySelector(".difficult__plus")
                .addEventListener("click", () => {
                    updateDifficulty(container, 1);
                });

            container
                .querySelector(".difficult__minus")
                .addEventListener("click", () => {
                    updateDifficulty(container, -1);
                });
        });

    // Блок с рекламой
    const adsSwitch = document.querySelector(".noads__switch");
    const adsSwitchInner = document.querySelector(".noads__switch--inner");
    const adsBlock = document.querySelector(".noads");

    adsSwitch.addEventListener("click", function(){
        if(adsSwitchInner.classList.contains("active")){
            adsSwitchInner.classList.remove("active");
            adsBlock.classList.remove("active");
        }
        else{
            adsSwitchInner.classList.add("active");
            adsBlock.classList.add("active");
        }
    });

    // FAQ
    document.querySelectorAll(".faq__item").forEach((button) => {
        button.addEventListener("click", () => {
            if (button.classList.contains("active")) {
                button.classList.remove("active");
            } else {
                button.classList.add("active");
            }
        });
    });

    // Слайдеры
    const subjects = new Swiper(".subjects__slider", {
        spaceBetween: 24,
        slidesPerView: 7,
        loop: true,
        centerMode: true,
        autoplay: {
            delay: 4000,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.6,
                spaceBetween: 12,
            },
            500: {
                slidesPerView: 2.4,
                spaceBetween: 12,
            },
            700: {
                slidesPerView: 3,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 12,
            },
            900: {
                slidesPerView: 5,
                spaceBetween: 16,
            },
            1340: {
                slidesPerView: 6,
                spaceBetween: 20,
            },
            1600: {
                slidesPerView: 7,
            }
        }
    });
});
