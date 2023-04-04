"use strict";

/* Declare any global variables below this line, but before the first function call */
document.addEventListener("DOMContentLoaded", init);

function init() {
    // Fillings
    fillModules("card-select",modules,"Completed")
    fillModules("card-configure",modules,"Take this class")
    // Bindings
    document.querySelectorAll(".nav").forEach((input) => { input.addEventListener("click",handleNavigation)});
    document.querySelectorAll(".moduleButton").forEach((input) => { input.addEventListener("click",delegateModuleAction)});
    document.querySelector("form").addEventListener("submit",processPersonalData)
    document.querySelector(".sort").addEventListener("change",filterAndSortModules)
    document.querySelectorAll(".selected-semester").forEach((p) => { p.addEventListener("click",startFilter)});
    // Delegates

    // Other initialisations
    localStorage.clear()
}

function startFilter(e){
    let sem = e.currentTarget.getAttribute("data-semester")
    if (e.currentTarget.classList.contains("selected")){
        e.currentTarget.className = "selected-semester"
        changeFilter(e,sem, 0)
    } else {
        e.currentTarget.className += " selected"
        changeFilter(e,sem, 1)
    }
}

function handleNavigation(e) {
    let pre = e.currentTarget.getAttribute("data-previouspage");
    let next = e.currentTarget.getAttribute("data-nextpage");
    if (pre === "configure" && next === "overview"){
        if (roundedPercentage === 100){
            switchPage(pre,next);
        } else {
            alert("You have to allocate 100% of all ects")
        }
    } else {
        switchPage(pre,next);
    }
}

function switchPage(previousPage,nextPage){
    document.querySelector("."+previousPage).className += " toggle";
    document.querySelector("."+nextPage).className = nextPage;
}
