/*
autor: Juan Manuel Rodriguez
ejercicio: iteraciones while 06

*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	
	while(contador<5)
	{
		numeroIngresado=prompt("Ingrese un número por favor");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		contador++;
		console.log(acumulador);
	}
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN