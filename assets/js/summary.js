"use strict";
function fillSummary(e) {
    document.querySelector(".blue-table").innerHTML = ""
    document.querySelector(".pink-table").innerHTML = ""
    fillTheader(".blue-table")
    fillTheader(".pink-table")
}

function fillTheader(parent){
    let title = ""
    if (parent === ".blue-table"){
        title = "completed courses"
    } else {
        title = "desired courses"
    }
    document.querySelector(parent).insertAdjacentHTML("beforeend", `<thead>
                    <tr>
                        <th></th>
                        <th>${title}</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>semester</th>
                        <th>module</th>
                        <th># SP</th>
                    </tr>
                    </thead>`)
    fillTbody(parent)
}

function fillTbody(parent) {
    let table = ""
    let totalEcts = 0
    let color = ""

    if (parent === ".blue-table"){
        table = completedClass
    }else {
        table = selectedTaken
    }

    let i = 0
    while (i < table.length){
        if (i % 2 == 0){
            color = "color1"
        } else {
            color = "color2"
        }
        document.querySelector(parent).insertAdjacentHTML("beforeend", `<tr class=${color}>
                        <td>${table[i].semester}</td>
                        <td>${table[i].module}</td>
                        <td>${table[i].ects} ECTS</td>
                    </tr>`)
        totalEcts = totalEcts + parseInt(table[i].ects)
        i ++
    }
    filltfoot(parent,totalEcts)
}

function filltfoot(parent, totalEcts) {
    if (parent === ".blue-table"){
        document.querySelector(".completed").innerHTML = totalEcts
    } else {
        document.querySelector(".desired").innerHTML = totalEcts
    }

    document.querySelector(parent).insertAdjacentHTML("beforeend", `<tfoot>
                    <tr>
                        <td></td>
                        <td>Totaal aantal SP</td>
                        <td>${totalEcts} ECTS</td>
                    </tr>
                    </tfoot>`)
}
