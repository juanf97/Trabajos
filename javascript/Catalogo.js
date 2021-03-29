let productos  =[]
let total =0;
function add(producto, precio){
    console.log(producto,  precio);
    productos.push(producto);
    total= total + precio;
    document.getElementById("tiendap").innerHTML ='valor a pagar $${total}'
}
function pay(){
    window.alert(productos.join(", \n")); 
}