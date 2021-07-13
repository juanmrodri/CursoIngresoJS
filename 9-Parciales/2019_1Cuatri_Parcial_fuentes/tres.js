/*
autor: Juan Manuel Rodriguez
ejercicio: Parcial2019 ejercicio 03
*/
function mostrar()
    // id elPrecioFinal
{
    var precio;
    var porcentaje;
    var descuento;
    var precioFinal;

    precio=prompt("Por favor ingrese el precio: ");
    precio=parseInt(precio);
    porcentaje=prompt("Por favor ingrese el porcentaje de descuento: ");
    porcentaje=parseInt(porcentaje);
    descuento=precio*porcentaje/100;

    precioFinal=precio-descuento;
    
    document.getElementById('elPrecioFinal').value=precioFinal;

}
