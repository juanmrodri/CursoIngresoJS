/*
autor: Juan Manuel Rodriguez
ejercicio: iteraciones while 09

OTRA FORMA PARA ACOTAR EL Y OPTIMIZAR EL CODIGO

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
        numeroIngresado=parseInt(numeroIngresado);

        // es necesario preguntar por separado
        if(numeroIngresado<numeroMinimo || respuesta=="si")
        {
            numeroMinimo=numeroIngresado;
        }

        if(numeroIngresado>numeroMaximo || respuesta=="si")
        {
            numeroMaximo=numeroIngresado;
            respuesta="no";
        }

        respuesta=prompt("Desea continuar?");

	}

	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}//FIN DE LA FUNCIÓN