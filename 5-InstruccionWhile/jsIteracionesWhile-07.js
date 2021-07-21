/*
autor: Juan Manuel Rodriguez
ejercicio: iteraciones while 07

Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta=="si")
	{	
		respuesta=prompt("Ingrese un número por favor.");
		respuesta=parseInt(respuesta);
		contador=contador+1;
		acumulador=acumulador+respuesta;
		respuesta=prompt("Quiere seguir?");
	}

document.getElementById("txtIdSuma").value=acumulador;
document.getElementById("txtIdPromedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN