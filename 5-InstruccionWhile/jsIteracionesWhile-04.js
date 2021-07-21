/*
autor: Juan Manuel Rodriguez
ejercicio: iteraciones while 04

al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	numeroIngresado=parseInt(numeroIngresado);

	while(numeroIngresado<0 || numeroIngresado>10) // tener en cuenta la doble validacion entre 0 y 9 ENTRE
	{
		numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	}

	document.getElementById("txtIdNumero").value=numeroIngresado;
	
}//FIN DE LA FUNCIÓN
