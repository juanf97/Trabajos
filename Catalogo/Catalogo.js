let products  =[];
let total =0;
function add(product, price){
    console.log(product,  price);
    products.push(product);
    total= total + price;
    document.getElementById("tiendap").innerHTML = `total a pagar  $${total}`;
}
function pay(){
    alert("ACONTINUACION SALDRA LA LISTA DE PRODUCTOS POR GARAR, CLICK EN ACEPTAR PARA CONTINUAR")
    window.alert(products.join(", \n ")); 
}
