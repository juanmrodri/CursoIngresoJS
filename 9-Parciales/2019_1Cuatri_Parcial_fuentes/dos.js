/*
autor: Juan Manuel Rodriguez
ejercicio: Parcial2019 ejercicio 02
*/
function mostrar()
{
    var nombreUno;
    var nombreDos;
    var pesoUno;
    var pesoDos;
    var pesosSumados;
    var promedio;
    var mensaje;

    nombreUno=prompt("Por favor ingrese el primer nombre: ");
    nombreDos=prompt("Por favor ahora ingrese el nombre de su pareja: ");
    pesoUno=prompt("Ingrese por favor el peso de "+nombreUno);
    pesoUno=parseInt(pesoUno);
    pesoDos=prompt("Ingrese por favor el peso de "+nombreDos);
    pesoDos=parseInt(pesoDos);
    pesosSumados=pesoUno+pesoDos;
    promedio=pesosSumados/2;

    mensaje="Ustedes se llaman "+nombreUno+" y "+nombreDos+" y pesan "+pesoUno+" kilos "+pesoDos+" kilos, que sumados son "+pesosSumados+" kilos y el promedio de peso "+promedio;
  
    alert(mensaje);
}
