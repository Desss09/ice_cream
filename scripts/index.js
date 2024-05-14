"use strict"
window.onload = function () {

let iceCreamForm = document.querySelector("#theForm");

iceCreamForm.addEventListener("submit", inceCreamOrder);

}

function inceCreamOrder(event) {

    event.preventDefault();
    
    let theForm = event.target

    let Price = 2.25

    let extraScoop = 0;
    if (theForm.numScoops.value > 1) {

        extraScoop = (theForm. numScoops.value -1) * 1.25;
    }

    iceCreamPrice+= extraScoop
    console.log(iceCreamPrice)

}