/*
autor: Juan Manuel Rodriguez
ejercicio: Instrucción Switch 07
*/
function mostrar()
{
	var destinoIngresado;
	var mensaje;
	destinoIngresado=document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje="El destino esta al este";
			break;
		case "Cataratas":
			mensaje="El destino esta al norte";
			break;
		case "Mar del plata":
			mensaje="El destino esta al este";
			break;
		case "Ushuaia":
			mensaje="El destino esta al sur";
			break;
	} 
	alert(mensaje);

}//FIN DE LA FUNCIÓN
