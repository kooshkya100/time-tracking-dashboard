const changeContent = function (timeOption) {
    const dailyStats = [
        { type: "work", present: 5, previous: 7 },
        { type: "play", present: 1, previous: 2 },
        { type: "study", present: 0, previous: 1 },
        { type: "exercise", present: 1, previous: 1 },
        { type: "social", present: 1, previous: 3 },
        { type: "self-care", present: 0, previous: 1 }
    ];
    const weeklyStats = [
        { type: "work", present: 32, previous: 36 },
        { type: "play", present: 10, previous: 8 },
        { type: "study", present: 4, previous: 7 },
        { type: "exercise", present: 4, previous: 5 },
        { type: "social", present: 5, previous: 10 },
        { type: "self-care", present: 2, previous: 2 }
    ];
    const monthlyStats = [
        { type: "work", present: 103, previous: 128 },
        { type: "play", present: 23, previous: 29 },
        { type: "study", present: 13, previous: 19 },
        { type: "exercise", present: 11, previous: 18 },
        { type: "social", present: 21, previous: 23 },
        { type: "self-care", present: 7, previous: 11 }
    ];
    switch (timeOption) {
        case 'daily':
            dailyStats.forEach((stat) => {
                const card =[... cards].find((cardSample) => cardSample.getAttribute("data-subject") === stat.type);
                const presentDisplay = card.querySelector("strong");
                const previousDisplay = card.querySelector("p");
                presentDisplay.textContent = `${stat.present}hrs`;
                previousDisplay.textContent = `Yesterday - ${stat.previous}hrs`
            });
            break;
        case 'weekly':
            weeklyStats.forEach((stat) => {
                const card = [...cards].find((cardSample) => cardSample.getAttribute("data-subject") === stat.type);
                const presentDisplay = card.querySelector("strong");
                const previousDisplay = card.querySelector("p");
                presentDisplay.textContent = `${stat.present}hrs`;
                previousDisplay.textContent = `Last Week - ${stat.previous}hrs`
            });
            break;
        case 'monthly':
            monthlyStats.forEach((stat) => {
                const card = [...cards].find((cardSample) => cardSample.getAttribute("data-subject") === stat.type);
                const presentDisplay = card.querySelector("strong");
                const previousDisplay = card.querySelector("p");
                presentDisplay.textContent = `${stat.present}hrs`;
                previousDisplay.textContent = `Last Month - ${stat.previous}hrs`
            });
            break;
    }
}


const timeOptions = document.querySelectorAll(".time-option");
const dailyOption = document.querySelector("li[data-value='daily']");
const weeklyOption = document.querySelector("li[data-value='weekly']");
const monthlyOption = document.querySelector("li[data-value='monthly']");

const cards = document.querySelectorAll(".card");

timeOptions.forEach((option) => {
    option.addEventListener("click", (e) => {
        timeOptions.forEach((timeOption) => {
            timeOption.classList.remove("selected-time-option");
        });
        option.classList.add("selected-time-option");
        changeContent(option.getAttribute("data-value"));
    });
})