"use strict";
const filteredModules = [{}]

function changeFilter(e, semester, hide) {
    let i = 0
    while (i < document.querySelectorAll("."+semester).length){
        if (hide === 0){
            document.querySelectorAll("."+semester)[i].className += " toggle"
        } else {
            document.querySelectorAll("."+semester)[i].className = " card "+semester
        }
        i ++
    }
    let counter = 0
    while (counter < document.querySelectorAll(".card").length){
        filteredModules.push((document.querySelectorAll(".card")[counter]).toString())
        counter ++
    }
}

function filterAndSortModules(e) {
    e.preventDefault()
    filteredModules.reverse()
    sortModules(filteredModules,"card-select")
    sortModules(filteredModules,"card-configure")
}

function sortModules(filteredModules, selector) {
    let i = 0
    document.querySelector("."+selector).innerHTML = ""
    while (i < (filteredModules.length) / 2){
            // niet gevonden
        i ++
    }
}
