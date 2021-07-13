/*
autor: Juan Manuel Rodriguez
ejercicio: Parcial2019 ejercicio 01
*/
function mostrar()
{
    var ladoUno;
    var ladoDos;
    var ladoTres;
    var perimetro;
    var mensaje;
    
    ladoUno=prompt("Ingrese un valor del primer lado: ");
    ladoUno=parseInt(ladoUno);
    ladoDos=prompt("Ingrese un valor del primer lado: ");
    ladoDos=parseInt(ladoDos);
    ladoTres=prompt("Ingrese un valor del primer lado: ");
    ladoTres=parseInt(ladoTres);

    perimetro=ladoUno+ladoDos+ladoTres;

    mensaje="El perimetro del triangulo es: "+perimetro;

    alert(mensaje);

}
