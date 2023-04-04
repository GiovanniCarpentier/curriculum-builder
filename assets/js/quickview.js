"use strict";
const parsedPerson = JSON.parse(localStorage.getItem('person'))
let currentEcts = parseInt(0)
let ectsLeft = parseInt(0)
let desiredEcts = 0
let roundedPercentage = 0

let amountS1 = 0
let amountS2 = 0
let amountS3 = 0
let amountS4 = 0
let amountS5 = 0
let amountS6 = 0

function fillQuickview() {
    desiredEcts = parsedPerson.ects
    document.querySelector("#ects-quicview").innerHTML = "0"
    document.querySelector("#ects-left").innerHTML = parsedPerson.ects+" ECTS left"
}

function updateQuickview(e, ects){
    currentEcts = currentEcts + parseInt(ects)
    ectsLeft = parsedPerson.ects - currentEcts
    document.querySelector("#ects-quicview").innerHTML = ""
    document.querySelector("#ects-quicview").innerHTML = currentEcts
    document.querySelector("#ects-left").innerHTML = ectsLeft+" ECTS left"
    progressBar(e, desiredEcts, currentEcts)
}

function progressBar(e, desiredECTS, totalECTS){
    let percentage = 100 * (totalECTS / desiredECTS)
    roundedPercentage = Math.round(percentage)
    if (roundedPercentage > 100){
        alert("You can't take any more classes")
        updateQuickview(e,"-"+e.currentTarget.getAttribute("data-ects"))
        ectsPerSemester(e.currentTarget.getAttribute("data-semester"), -1)
        e.currentTarget.className = "button moduleButton"

    } else {
        document.querySelector("#percentage").innerHTML = roundedPercentage + "% of ects allocated"
    }
}

function ectsPerSemester(semester, amount){

    switch (semester){
        case "S1":
            amountS1 += amount
            document.querySelector("#"+semester).innerHTML = amountS1+" modules in S1"
            if (amountS1 === 0){
                document.querySelector("#"+semester).innerHTML = ""
            }
            break;
        case "S2":
            amountS2 += amount
            document.querySelector("#"+semester).innerHTML = amountS2+" modules in S2"
            if (amountS2 === 0){
                document.querySelector("#"+semester).innerHTML = ""
            }
            break;
        case "S3":
            amountS3 += amount
            document.querySelector("#"+semester).innerHTML = amountS3+" modules in S3"
            if (amountS3 === 0){
                document.querySelector("#"+semester).innerHTML = ""
            }

            break;
        case "S4":
            amountS4 += amount
            document.querySelector("#"+semester).innerHTML = amountS4+" modules in S4"
            if (amountS4 === 0){
                document.querySelector("#"+semester).innerHTML = ""
            }
            break;
        case "S5":
            amountS5 += amount
            document.querySelector("#"+semester).innerHTML = amountS5+" modules in S5"
            if (amountS5 === 0){
                document.querySelector("#"+semester).innerHTML = ""
            }
            break;
        default:
            amountS6 += amount
            document.querySelector("#"+semester).innerHTML = amountS6+" modules in S6"
            if (amountS6 === 0){
                document.querySelector("#"+semester).innerHTML = ""
            }
            break;
    }
}
