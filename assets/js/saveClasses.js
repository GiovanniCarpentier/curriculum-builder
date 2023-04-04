"use strict";
const completedClass = []
const selectedTaken = []

function completedClasses(module, ects, semester, array){
    array.push({module: module, ects: ects, semester: semester})
    fillSummary()
}

function removeClasses(module, array){
    let i = 0
    while(i < array.length){
        if (array[i].module === module){
            array.splice(i, 1)
        }
        i ++
    }
    fillSummary()
}
