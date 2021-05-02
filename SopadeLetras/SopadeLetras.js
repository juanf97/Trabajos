/*function resaltar(){
   var c1= document.getElementById("c1");
   c1.className ="resaltar";
    
}*/

$(document).ready(function () {
    $(".header").hover(function () {
        $(".header").addClass("resaltar");
    });
    $(document).mouseleave(function () {
        $(".header").removeClass(function () {
            
        });
    });

});

