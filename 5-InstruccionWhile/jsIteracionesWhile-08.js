/*
autor: Juan Manuel Rodriguez
ejercicio: iteraciones while 08

Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta=="si")
	{	
		respuesta=prompt("Ingrese un número por favor.");
		respuesta=parseInt(respuesta);
		if(respuesta>0)
		{
			sumaPositivos=sumaPositivos+respuesta;
		} else
			{
				multiplicacionNegativos=multiplicacionNegativos*respuesta;
			}
		contador=contador+1;
		respuesta=prompt("Quiere seguir?");
	}

	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN