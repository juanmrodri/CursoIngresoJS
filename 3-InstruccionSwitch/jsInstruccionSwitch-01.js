/*
autor: Juan Manuel Rodriguez
ejercicio: Instrucción Switch 01
*/
function mostrar()
{
	//tomo el mes
	var mesDelAño;
	var mensaje;
	mesDelAño = document.getElementById('txtIdMes').value;
	
	switch(mesDelAño)
	{
		case "Enero":
			mensaje="que comiences bien el año!!!.";
			break;
		case "Marzo":
			mensaje="a clases!!!.";
			break;
		case "Julio":
			mensaje="se vienen las vacaciones!!!.";
			break;
		case "Diciembre":
			mensaje="Felices fiesta!!!.";
			break;
		default:
			mensaje="Niguna información para mostrar";
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN