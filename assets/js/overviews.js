"use strict";


function delegateModuleAction(e) {
    let buttontext = e.currentTarget.getAttribute("data-button")
    let ects = e.currentTarget.getAttribute("data-ects")
    let semester = e.currentTarget.getAttribute("data-semester")
    let module = e.currentTarget.getAttribute("data-module")

    if (buttontext === "Take this class"){
        if (e.currentTarget.classList.contains("clicked")){
            e.currentTarget.className = "button moduleButton"
            updateQuickview(e,"-"+ects)
            ectsPerSemester(semester, -1)
            removeClasses(module, selectedTaken)
        } else {
            e.currentTarget.className += " clicked"
            updateQuickview(e, ects)
            ectsPerSemester(semester, 1)
            completedClasses(module, ects, semester, selectedTaken)
        }
    } else {
        if (e.currentTarget.classList.contains("clicked")){
            e.currentTarget.className = "button moduleButton"
            removeClasses(module, completedClass)
        } else {
            e.currentTarget.className += " clicked"
            completedClasses(module, ects, semester, completedClass)
        }
    }
}

function fillModules(selector, modules, buttonText) {
    let i = 0
    let color = ""
    let random = 0

    document.querySelector("."+selector).innerHTML = ""


     while (i < modules.length){
            random = Math.round(Math.random() * 7)
            switch (random){
                case 1:
                    color = "green"
                    break;
                case 2:
                    color = "yellow"
                    break;
                case 3:
                    color = "pink"
                    break;
                case 4:
                    color = "orange"
                    break;
                case 5:
                    color = "blue"
                    break;
                case 6:
                    color = "purple"
                    break;
                default:
                    color = "white"
                    break;
            }

            document.querySelector("."+selector).insertAdjacentHTML("beforeend", `<div class="card ${modules[i].semester}">
                <h3 class="title">${modules[i].module}</h3>
                <div class="course ${color}">
                    <h2 class="initials">WD</h2>
                </div>
                <p class="card-ects">${modules[i].ects} ECTS</p>
                <p class="lecturer">${modules[i].lecturer}</p>
                <div class="button moduleButton" data-ects="${modules[i].ects}" data-semester="${modules[i].semester}" data-module="${modules[i].module}" data-button="${buttonText}">
                    <p><a>${buttonText}</a></p>
                </div>
            </div>`)
            i ++
        }
    let counter = 0
    while (counter < document.querySelectorAll(".card").length){
        filteredModules.push(document.querySelectorAll(".card")[counter])
        counter ++
    }
}
