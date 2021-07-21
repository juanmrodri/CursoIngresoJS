/*
autor: Juan Manuel Rodriguez
ejercicio: iteraciones while 10

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
adentro del while
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.

fuera del while
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positivos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadPares;
	var cantidadCeros;
	var positivosTotal;
	var negativosTotal;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;

	// asignacion
	cantidadPositivos=0;
	cantidadNegativos=0;
	cantidadPares=0;
	cantidadCeros=0;
	positivosTotal=0;
	negativosTotal=0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese número");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado>0)
		{
			// el numero es positivo
			cantidadPositivos=cantidadPositivos+1;
			positivosTotal=positivosTotal+numeroIngresado;
		} else
			{
				if(numeroIngresado<0)
				{
					// el numero es negativo
					cantidadNegativos=cantidadNegativos+1;
					negativosTotal=negativosTotal+numeroIngresado;
				}
			}
		if(numeroIngresado%2==0)
		{
			// el numero seria par
			cantidadPares=cantidadPares+1;
		}
		if(numeroIngresado==0){
			cantidadCeros=cantidadCeros+1;
		}

		respuesta=prompt("desea continuar?");
	}//fin del while

	// promedio de positivos
	if(positivosTotal!=0)
	{
		promedioPositivos=positivosTotal/cantidadPositivos;
	} else
	{
		promedioPositivos=0;
	}

	// promedio de negativos
	if(negativosTotal!=0)
	{
		promedioNegativos=negativosTotal/cantidadNegativos;
	} else
	{
		promedioNegativos=0;
	}

	// diferencia entre positivos y negativos
	if(positivosTotal!=0 || negativosTotal!=0){
		diferenciaPositivosNegativos=positivosTotal-(-negativosTotal);
	} else {
		diferenciaPositivosNegativos=0;
	}
	
	document.write("1) la suma de negativos es :"+negativosTotal+"<br>");
	document.write("2) la suma de positivos es :"+positivosTotal+"<br>");
	document.write("3) la cantidad de positivos es :"+cantidadPositivos+"<br>");
	document.write("4) la cantidad de negativos es :"+cantidadNegativos+"<br>");
	document.write("5) la cantidad de ceros es :"+cantidadCeros+"<br>");
	document.write("6) la cantidad de pares es :"+cantidadPares+"<br>");
	document.write("7) el promedio de los positivos es :"+promedioPositivos+"<br>");
	document.write("8) el promedio de los negativos es :"+promedioPositivos+"<br>");
	document.write("9) La diferencia entre positivos y negativos es :"+diferenciaPositivosNegativos+"<br>");

}//FIN DE LA FUNCIÓN