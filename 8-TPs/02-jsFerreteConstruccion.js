/*
autor: Juan Manuel Rodriguez
ejercicio: Tp2
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;
    var alambre;
    var mensaje;

    largo=document.getElementById('txtIdLargo').value;
    largo=parseInt(largo);
    
    ancho=document.getElementById('txtIdAncho').value;
    ancho=parseInt(ancho);
    
    perimetro=(largo*largo)+(ancho*ancho);

    alambre=perimetro*3;

    mensaje="Se deben comprar "+alambre+"m";
    
    alert(mensaje);


}
function Circulo () 
{
	var radio;
    var pi;
    var resultado;
    var alambre;
    var mensaje;

    radio=document.getElementById('txtIdRadio').value;
    radio=parseInt(radio);

    radio=radio*radio;

    pi=3.14;

    resultado=pi*radio
    
    alambre=resultado*3;

    mensaje="Se deben comprar "+alambre+"m";
    
    alert(mensaje);

}
function Materiales () 
{

    var cemento;
    var cal;
    var largo;
    var ancho;
    var perimetro;

    largo=document.getElementById('txtIdLargo').value;
    largo=parseInt(largo);
    
    ancho=document.getElementById('txtIdAncho').value;
    ancho=parseInt(ancho);

    perimetro=(largo*largo)+(ancho*ancho);

    cemento= perimetro*2;
    cal= perimetro*3;

    mensaje="Se deben comprar "+cemento+" bolsas de cemento y "+cal+" bolsas de cal";

    alert(mensaje);


	
}