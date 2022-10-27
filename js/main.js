"use strict";

//creazione array di img da aggiungere nel carosello
const imgArray=['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg']
//variabili
const itemContainer= document.querySelector("div.items");

//for statement per concatenare le img nei div
for (let i = 0; i < imgArray.length; i++) {
    const item= `<div class="item">
                 <img src="${imgArray[i]}" alt="">
                 </div>`
    itemContainer.innerHTML += item //aggiungo i div descritti sopra all'interno del div container definito a inizio documento
}

//aggiungo la classe active al primo elemento
document.querySelector(".item").classList.add("active")

//azione on click per scorrere le img
const btnNext= document.getElementsByClassName("next");
const btnPrev= document.getElementsByClassName("previous");

for (let active = 0; active < imgArray.length; active++) {
    btnNext[0].addEventListener("click", function(){
        let active = 0 //variabile di supporto per lo scorrimento del carosello
        active+= 1;
        document.querySelectorAll(".item")[active].classList.add("active")
        document.querySelectorAll(".item")[active-1].classList.remove("active")
    })
    btnPrev[0].addEventListener("click", function(){
            let active = 1 //variabile di supporto per lo scorrimento del carosello
            active= active - 1 ;
            document.querySelectorAll(".item")[active].classList.add("active")
            document.querySelectorAll(".item")[active+1].classList.remove("active")
    })
    
}

  
