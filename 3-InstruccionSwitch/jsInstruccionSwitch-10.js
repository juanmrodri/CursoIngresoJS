/*
autor: Juan Manuel Rodriguez
ejercicio: Instrucción Switch 10
*/
function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var mensaje;

	estacionIngresada=document.getElementById('txtIdEstacion').value;
	destinoIngresado=document.getElementById('txtIdDestino').value;

	switch(estacionIngresada)
	{
		case "Invierno":
				switch(destinoIngresado)
				{
					case "Bariloche":
						mensaje="se viaja";
						break;
					default:
						mensaje="No se viaja";
				}
			break;
		case "Verano":
				switch(destinoIngresado)
				{
					case "Mar del plata":
					case "Cataratas":
						mensaje="se viaja";
						break;
					default:
						mensaje="No se viaja";
				}
			break;
		case "Primavera":
				switch(destinoIngresado)
					{
						case "Bariloche":
							mensaje="No se viaja";
							break;
						default:
							mensaje="se viaja";
					}
			break;
		case "Otoño":
			mensaje="se viaja";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
