//Funciones
function addEventListenerListResaltar(list) {
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener('mouseover', function(){list.forEach(function(e){e.className = "caja resaltar"})}, false);
        list[i].addEventListener('mouseleave', function(){list.forEach(function(e){e.className = "caja"})}, false);
    }
}

function resolveList(list){
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].className = "caja resaltar"
        list[i].removeEventListener('mouseover',function(){console.log("Removed")})
        list[i].removeEventListener('mouseleave',function(){console.log("Removed")})
    }
}
var btnResolver = document.getElementById("btnResolver");

btnResolver.addEventListener('click',function(){
    resolveList(elementHeader)
    resolveList(elementHead)
    resolveList(elementDiv)
    resolveList(elementNav)
    resolveList(elementAddress)
    resolveList(elementNoscript)
    resolveList(elementTitle)
    resolveList(elementMain)
    resolveList(elementHr)
    resolveList(elementSection)
    resolveList(elementScript)
    resolveList(elementStyle)
    resolveList(elementHr)
    resolveList(elementHr)
   
})

//Busqueda de elementos
var elementHeader = document.querySelectorAll(".header")
var elementHead = document.querySelectorAll(".head")
var elementDiv = document.querySelectorAll(".div")
var elementNav = document.querySelectorAll(".nav")
var elementAddress = document.querySelectorAll(".address")
var elementNoscript = document.querySelectorAll(".noscript")
var elementTitle = document.querySelectorAll(".title")
var elementMain = document.querySelectorAll(".main")
var elementHr = document.querySelectorAll(".hr")
var elementSection = document.querySelectorAll(".section")
var elementScript = document.querySelectorAll(".script")
var elementStyle = document.querySelectorAll(".style")
var elementScript = document.querySelectorAll(".script")




//Eventos para Resaltar

addEventListenerListResaltar(elementHeader)
addEventListenerListResaltar(elementHead)
addEventListenerListResaltar(elementDiv)
addEventListenerListResaltar(elementNav)
addEventListenerListResaltar(elementAddress)
addEventListenerListResaltar(elementNoscript)
addEventListenerListResaltar(elementTitle)
addEventListenerListResaltar(elementMain)
addEventListenerListResaltar(elementHr)
addEventListenerListResaltar(elementSection)
addEventListenerListResaltar(elementScript)
addEventListenerListResaltar(elementStyle)
addEventListenerListResaltar(elementHead)
addEventListenerListResaltar(elementHead)
