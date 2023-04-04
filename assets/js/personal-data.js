"use strict";

function processPersonalData(e) {
    e.preventDefault();
    const person = {
            name: document.querySelector("#name").value,
            email: document.querySelector("#email").value,
            ects: document.querySelector("#ects").value
        };
    validateData(person);
}

function validateData(person){
    if (person.name.length > 2 && person.ects >= 3 && person.ects <= 60){
        savePersonalData(person);
        switchPage("personal","select");
    } else{
        alert("Your name must be longer than 2 characters");
        switchPage("curriculum","personal");
    }
}

function savePersonalData(person){
    const stringifyPerson = JSON.stringify(person)
    localStorage.clear()
    localStorage.setItem("person", stringifyPerson)
    fillQuickview()
}
