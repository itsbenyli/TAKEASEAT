var siteCycle = document.getElementById("siteCycle");
var stagePanel = document.getElementById("stagePanel");
var stageBars = document.querySelectorAll(".stage-bar");

var cycleHeight = 0;
var changingPosition = false;

var locations = [
    "Bench in 402 Albee Square, Brooklyn, NY 11201",
    "Bench in 402 Albee Square, Brooklyn, NY 11201",
    "Bench in 402 Albee Square, Brooklyn, NY 11201",
    "Bench in 402 Albee Square, Brooklyn, NY 11201",
    "Bench in 445 Albee Square, Brooklyn, NY 11201",
    "Bench in 32 Howard St, New York, NY 10013",
    "Bench in 28 Howard St, New York, NY 10013",
    "Bench in 129 Grand St, New York, NY 10013",
    "Bench in 143 Grand St, New York, NY 10013",
    "Bench in 137 Grand St, New York, NY 10013",
    "Bench in 42 Crosby St, New York, NY 10012",
    "Bench in 413 Broome St, New York, NY 10013",
    "Bench in 189 Lafayette St, New York, NY 10013",
    "Bench in 153–163 Grand St, New York, NY 10013",
    "Bench in 229 Centre St, New York, NY 10013",
    "Bench in 106 Mott St, New York, NY 10013",
    "Bench in 82 Elizabeth St, New York, NY 10013",
    "Bench in 93 Elizabeth St, New York, NY 10013",
    "Bench in 225 Grand St, New York, NY 10013",
    "Bench in 129 Bowery, New York, NY 10002",
    "Bench in 129 Bowery, New York, NY 10002",
    "Bench in Dekalb Av 360 Flatbush Ave, Brooklyn, NY 11201",
    "Bench in 2 W 13th St, New York, NY 10011",
    "Bench in 74 5th Ave, New York, NY 10011",
    "Bench in 2 W 13th St, New York, NY 10011",
    "Bench in 334 Flatbush Ave, Brooklyn, NY 11201",
    "Bench in Union Square, New York, NY 10003",
    "Bench in Fleet St, Brooklyn, NY 11201",
    "Bench in Fort Greene Park Plaza, Brooklyn, NY 11201",
    "Bench in Fort Greene Park 155 St, Brooklyn, NY 11201",
    "Bench in Fort Greene Park 100 Washington Park, Brooklyn, NY 11201",
    "Bench in The Brooklyn Hospital Center, Brooklyn, NY 11201",
    "Bench in University Plaza 343 Flatbush Ave, Brooklyn, NY 11201",
    "Bench in University Plaza 343 Flatbush Ave, Brooklyn, NY 11201",
    "Bench in 108 Willoughby St, Brooklyn, NY 11201",
    "Bench in 233 Duffield St, Brooklyn, NY 11201",
    "Bench in Roosevelt Island West Rd, New York, NY 10044",
    "Bench in Roosevelt Island West Rd, New York, NY 10044",
    "Bench in 993 6th Ave, New York, NY 10018",
    "Bench in 1045 6th Ave, New York, NY 10018",
    "Bench in Bryant Park 41 W, New York, NY 10018",
    "Bench in Bryant Park 41 W, New York, NY 10018",
    "Bench in Bryant Park 41 W, New York, NY 10018"
];

var descriptions = [
    "Three narrow seats and fixed metal dividers divide this bench into controlled positions. The structure welcomes brief sitting while making lying down almost impossible.",

    "This playground bench uses armrests to separate each person into an individual space. The divisions appear ordinary, but they prevent anyone from stretching across the full seat.",

    "The second playground bench repeats the same segmented structure. Repetition makes the restriction feel normal and turns control into a consistent part of the park environment.",

    "Outside the hospital, metal dividers regulate how patients and visitors can rest. The bench supports short periods of waiting while discouraging longer stays or sleeping.",

    "At University Plaza, the seat is divided into narrow sections. The rigid boundaries maintain visual order and limit how the shared surface can support different bodies.",

    "This Willoughby Street bench combines hard material with fixed armrests. It provides a temporary pause while making extended rest uncomfortable and physically difficult.",

    "On Roosevelt Island, a central divider interrupts the open surface. The small addition changes a shared bench into controlled positions and prevents someone from lying across it.",

    "Near Roosevelt Island Station, the narrow segmented bench is designed around commuter waiting. It accepts brief sitting while rejecting sleeping, reclining and other longer forms of rest."
];

function addMainPhoto(number, place) {
    var photo = document.createElement("figure");
    var image = document.createElement("img");
    var caption = document.createElement("figcaption");
    var firstLine = document.createElement("span");
    var secondLine = document.createElement("span");

    var location = locations[number - 1];
    var newYorkPosition = location.indexOf(", New York,");
    var brooklynPosition = location.indexOf(", Brooklyn,");
    var splitPosition;

    if (newYorkPosition !== -1) {
        splitPosition = newYorkPosition;
    } else {
        splitPosition = brooklynPosition;
    }

    photo.className = "main-photo";

    image.className = "main-image";
    image.src = "image" + number + ".jpeg";
    image.alt = location;

    caption.className = "main-caption";

    firstLine.className = "caption-line";
    secondLine.className = "caption-line caption-city";

    if (splitPosition !== -1) {
        firstLine.textContent = location.substring(
            0,
            splitPosition + 1
        );

        secondLine.textContent = location.substring(
            splitPosition + 2
        );
    } else {
        firstLine.textContent = location;
        secondLine.textContent = "";
    }

    caption.appendChild(firstLine);
    caption.appendChild(secondLine);

    photo.appendChild(image);
    photo.appendChild(caption);
    place.appendChild(photo);
}

function makeMainImages() {
    var firstPart = siteCycle.querySelector(".chapter-one-images");
    var secondPart = siteCycle.querySelector(".chapter-two-images");
    var thirdPart = siteCycle.querySelector(".chapter-three-images");
    var i;

    for (i = 1; i <= 15; i++) {
        addMainPhoto(i, firstPart);
    }

    for (i = 16; i <= 29; i++) {
        addMainPhoto(i, secondPart);
    }

    for (i = 30; i <= 43; i++) {
        addMainPhoto(i, thirdPart);
    }
}

function makeIndexImages() {
    var photoColumn = siteCycle.querySelector(".photo-column");

    for (var i = 1; i <= 8; i++) {
        var number = i;
        var item = document.createElement("article");
        var image = document.createElement("img");

        if (number < 10) {
            number = "0" + number;
        }

        item.className = "bench-item";

        image.className = "bench-image";
        image.src = "bench-" + number + ".jpeg";
        image.alt = "Bench study " + i;

        image.setAttribute(
            "data-main",
            "bench-" + number + ".jpeg"
        );

        image.setAttribute(
            "data-detail",
            "bench-" + number + "D.jpeg"
        );

        item.appendChild(image);
        photoColumn.appendChild(item);
    }
}

function removeIds(section) {
    section.removeAttribute("id");

    var items = section.querySelectorAll("[id]");

    for (var i = 0; i < items.length; i++) {
        items[i].removeAttribute("id");
    }
}

function makeEndlessPage() {
    var firstCopy = siteCycle.cloneNode(true);
    var lastCopy = siteCycle.cloneNode(true);

    removeIds(firstCopy);
    removeIds(lastCopy);

    firstCopy.classList.add("first-cycle");
    siteCycle.classList.add("middle-cycle");
    lastCopy.classList.add("last-cycle");

    document.body.insertBefore(firstCopy, siteCycle);
    document.body.insertBefore(lastCopy, stagePanel);

    cycleHeight = siteCycle.offsetHeight;

    window.scrollTo(0, cycleHeight);
}

function findCycle(item) {
    return item.closest(".site-cycle");
}

function getVisibleCycle() {
    var cycles = document.querySelectorAll(".site-cycle");
    var screenCenter = window.innerHeight / 2;
    var closestCycle = cycles[0];
    var closestDistance = 999999;

    for (var i = 0; i < cycles.length; i++) {
        var position = cycles[i].getBoundingClientRect();
        var cycleCenter = position.top + position.height / 2;
        var distance = Math.abs(cycleCenter - screenCenter);

        if (distance < closestDistance) {
            closestDistance = distance;
            closestCycle = cycles[i];
        }
    }

    return closestCycle;
}

function goToSection(button, sectionName) {
    var cycle = findCycle(button);
    var target;

    if (sectionName === "landing") {
        target = cycle.querySelector(".landing-section");
    }

    if (sectionName === "main") {
        target = cycle.querySelector(".main-page");
    }

    if (sectionName === "index") {
        target = cycle.querySelector(".index-page");
    }

    if (target) {
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

function goToStage(stageNumber) {
    var cycle = getVisibleCycle();
    var target;
    var chapters = cycle.querySelectorAll(".chapter");

    if (stageNumber === 0) {
        target = cycle.querySelector(".landing-section");
    }

    if (stageNumber === 1) {
        target = chapters[0];
    }

    if (stageNumber === 2) {
        target = chapters[1];
    }

    if (stageNumber === 3) {
        target = chapters[2];
    }

    if (stageNumber === 4) {
        target = cycle.querySelector(".index-section");
    }

    if (stageNumber === 5) {
        target = cycle.querySelector(".about-section");
    }

    if (target) {
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

function changeMode() {
    document.body.classList.toggle("reverse-mode");
    checkStage();
}

function checkIndexPage() {
    var indexPages = document.querySelectorAll(".index-page");

    for (var pageNumber = 0; pageNumber < indexPages.length; pageNumber++) {
        var indexPage = indexPages[pageNumber];
        var pagePosition = indexPage.getBoundingClientRect();

        if (
            pagePosition.top < window.innerHeight &&
            pagePosition.bottom > 0
        ) {
            updateIndexInformation(indexPage);
        }
    }
}

function updateIndexInformation(indexPage) {
    var benchItems = indexPage.querySelectorAll(".bench-item");
    var titles = indexPage.querySelectorAll(".location-title");
    var description = indexPage.querySelector(
        ".location-description"
    );

    var newNumber = 0;

    for (var i = 0; i < benchItems.length; i++) {
        var imagePosition = benchItems[i].getBoundingClientRect();

        if (imagePosition.top < window.innerHeight * 0.48) {
            newNumber = i;
        }
    }

    for (var j = 0; j < titles.length; j++) {
        titles[j].classList.remove("active");

        if (j <= newNumber) {
            titles[j].classList.add("reached");
        } else {
            titles[j].classList.remove("reached");
        }
    }

    if (titles[newNumber]) {
        titles[newNumber].classList.add("active");
    }

    if (description) {
        description.textContent = descriptions[newNumber];
    }
}

function checkStage() {
    var cycles = document.querySelectorAll(".site-cycle");
    var screenCenter = window.innerHeight / 2;
    var currentStage = 0;

    for (var cycleNumber = 0; cycleNumber < cycles.length; cycleNumber++) {
        var cycle = cycles[cycleNumber];
        var cyclePosition = cycle.getBoundingClientRect();

        if (
            cyclePosition.top <= screenCenter &&
            cyclePosition.bottom > screenCenter
        ) {
            var landingPage = cycle.querySelector(".landing-section");
            var indexPage = cycle.querySelector(".index-section");
            var aboutPage = cycle.querySelector(".about-section");
            var chapters = cycle.querySelectorAll(".chapter");

            var landingPosition = landingPage.getBoundingClientRect();
            var indexPosition = indexPage.getBoundingClientRect();
            var aboutPosition = aboutPage.getBoundingClientRect();

            if (
                landingPosition.top <= screenCenter &&
                landingPosition.bottom > screenCenter
            ) {
                currentStage = 0;
            }

            for (var i = 0; i < chapters.length; i++) {
                var chapterPosition = chapters[i].getBoundingClientRect();

                if (
                    chapterPosition.top <= screenCenter &&
                    chapterPosition.bottom > screenCenter
                ) {
                    currentStage = i + 1;
                }
            }

            if (
                indexPosition.top <= screenCenter &&
                indexPosition.bottom > screenCenter
            ) {
                currentStage = 4;
            }

            if (
                aboutPosition.top <= screenCenter &&
                aboutPosition.bottom > screenCenter
            ) {
                currentStage = 5;
            }
        }
    }

    for (var j = 0; j < stageBars.length; j++) {
        stageBars[j].classList.remove("active");
    }

    if (stageBars[currentStage]) {
        stageBars[currentStage].classList.add("active");
    }

    var reverseMode = document.body.classList.contains("reverse-mode");
    var lightBackground;

    if (reverseMode === false) {
        lightBackground = currentStage === 0 || currentStage === 4;
    } else {
        lightBackground =
            currentStage === 1 ||
            currentStage === 2 ||
            currentStage === 3 ||
            currentStage === 5;
    }

    if (lightBackground === true) {
        stagePanel.classList.add("dark-panel");
    } else {
        stagePanel.classList.remove("dark-panel");
    }
}

function checkEndlessScroll() {
    if (cycleHeight === 0 || changingPosition === true) {
        return;
    }

    var currentPosition = window.scrollY;
    var bottomPoint = cycleHeight * 2 + window.innerHeight * 0.5;
    var topPoint = cycleHeight - window.innerHeight * 0.5;

    if (currentPosition >= bottomPoint) {
        changingPosition = true;

        window.scrollTo(
            0,
            currentPosition - cycleHeight
        );

        setTimeout(function () {
            changingPosition = false;
        }, 50);
    }

    if (currentPosition <= topPoint) {
        changingPosition = true;

        window.scrollTo(
            0,
            currentPosition + cycleHeight
        );

        setTimeout(function () {
            changingPosition = false;
        }, 50);
    }
}

document.onclick = function (event) {
    var stageButton = event.target.closest("[data-stage]");

    if (stageButton) {
        var stageNumber = Number(
            stageButton.getAttribute("data-stage")
        );

        goToStage(stageNumber);
        return;
    }

    var button = event.target.closest("[data-go]");

    if (!button) {
        return;
    }

    var action = button.getAttribute("data-go");

    if (action === "mode") {
        changeMode();
        return;
    }

    goToSection(button, action);
};

document.onmouseover = function (event) {
    if (event.target.classList.contains("bench-image")) {
        event.target.src = event.target.getAttribute("data-detail");
    }
};

document.onmouseout = function (event) {
    if (event.target.classList.contains("bench-image")) {
        event.target.src = event.target.getAttribute("data-main");
    }
};

makeMainImages();
makeIndexImages();

window.onload = function () {
    makeEndlessPage();
    checkIndexPage();
    checkStage();
};

window.onscroll = function () {
    checkIndexPage();
    checkStage();
    checkEndlessScroll();
};

window.onresize = function () {
    cycleHeight = siteCycle.offsetHeight;
    checkStage();
};