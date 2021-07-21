/*
autor: Juan Manuel Rodriguez
ejercicio: iteraciones while 09

Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un número por favor.");
		if(banderaDelPrimero=="es el primero")
		{
			banderaDelPrimero="otro"; // lo primero que hacemos es cambiar la bandera
			numeroMinimo=numeroIngresado;
			numeroMaximo=numeroIngresado;
			
		} else {
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			} else
			{
				if(numeroIngresado<numeroMinimo) // este if debe ir ya que que no sea el maximo no significa que sea el minimo, ya que puede ser igual
				{
					numeroMinimo=numeroIngresado;
				}
			}
		}
		respuesta=prompt("desea continuar?");
	}

	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}//FIN DE LA FUNCIÓN