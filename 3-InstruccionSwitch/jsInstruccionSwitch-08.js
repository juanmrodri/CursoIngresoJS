/*
autor: Juan Manuel Rodriguez
ejercicio: Instrucción Switch 08
*/
function mostrar()
{
	var destinoIngresado;
	var mensaje;
	destinoIngresado=document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje="En el destino hace frío";
			break;
		case "Mar del plata":
		case "Cataratas":
			mensaje="En el destino hace calor";
			break;
	} 
	alert(mensaje);

}//FIN DE LA FUNCIÓN
