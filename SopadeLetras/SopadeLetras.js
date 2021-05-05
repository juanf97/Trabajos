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

//Busqueda de elementos
var elementDom = document.querySelectorAll(".caja .head .header")

//Click Resolver
btnResolver.addEventListener('click',function(){
   resolveList(elementHeader)
})

addEventListenerListResaltar(elementHeader)