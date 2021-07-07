/*
autor: Juan Manuel Rodriguez
ejercicio: Tp1
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    
	var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var resultado;

    primerPrecio=document.getElementById('txtIdPrecioUno').value;
    primerPrecio=parseInt(primerPrecio);

    segundoPrecio=document.getElementById('txtIdPrecioDos').value;
    segundoPrecio=parseInt(segundoPrecio);

    tercerPrecio=document.getElementById('txtIdPrecioTres').value;
    tercerPrecio=parseInt(tercerPrecio);

    resultado=primerPrecio+segundoPrecio+tercerPrecio;

    alert(resultado);

}
function Promedio () 
{
	var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var promedio;
    var resultado;

    primerPrecio=document.getElementById('txtIdPrecioUno').value;
    primerPrecio=parseInt(primerPrecio);

    segundoPrecio=document.getElementById('txtIdPrecioDos').value;
    segundoPrecio=parseInt(segundoPrecio);

    tercerPrecio=document.getElementById('txtIdPrecioTres').value;
    tercerPrecio=parseInt(tercerPrecio);

    suma=primerPrecio+segundoPrecio+tercerPrecio;

    promedio=suma/3;

    resultado=promedio;

    alert(resultado);
}
function PrecioFinal () 
{
	var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var iva;
    var suma;
    var precioFinal;

    primerPrecio=document.getElementById('txtIdPrecioUno').value;
    primerPrecio=parseInt(primerPrecio);

    segundoPrecio=document.getElementById('txtIdPrecioDos').value;
    segundoPrecio=parseInt(segundoPrecio);

    tercerPrecio=document.getElementById('txtIdPrecioTres').value;
    tercerPrecio=parseInt(tercerPrecio);

    iva=21;
    
    suma=primerPrecio+segundoPrecio+tercerPrecio;

    precioFinal=suma;

    suma=suma*iva/100;

    precioFinal=precioFinal+suma;

    alert(precioFinal);
}