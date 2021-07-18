/*
autor: Juan Manuel Rodriguez
ejercicio: Instrucción Switch 04
*/
function mostrar()
{
	//tomo el mes
	var mesDelAño;
	var mensaje;
	mesDelAño = document.getElementById('txtIdMes').value;

	switch(mesDelAño)
	{	
		case "Febrero":
			mensaje="Este mes tiene 28 días";
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje="Este mes tiene 30 días";
			break;
		default:
			mensaje="Este mes tiene 31 días";
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN