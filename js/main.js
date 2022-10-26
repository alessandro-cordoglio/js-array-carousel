//creazione array di img da aggiungere nel carosello
const imgArray=[ '/img/01.jpg', '/img/02.jpg', '/img/03.jpg', '/img/04.jpg', '/img/05.jpg']
//variabili
const itemContainer= document.querySelector("div.items")

//for statement per concatenare le img nei div
for (let i = 0; i < imgArray.length; i++) {
    const item= `<div class="item">
                 <img src="${imgArray[i]}" alt="">
                 </div>`
    itemContainer.innerHTML += item //aggiungo i div descritti sopra all'interno del div container definito a inizio documento
}

//aggiungo la classe active al primo elemento
const itemDiv = document.querySelector(".item")
itemDiv.classList.add("active")
