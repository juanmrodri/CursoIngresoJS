/*
autor: Juan Manuel Rodriguez
ejercicio: Instruccion IF 10
*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaRandom;
	var mensaje;
	notaRandom=Math.floor(Math.random() * 10) + 1;
	if(notaRandom>3)
	{
		if(notaRandom>8)
		{
			mensaje="EXCELENTE";
		} else {
			mensaje="APROBÓ";
		}
	} else {
		mensaje="Vamos, la proxima se puede";
	}
	alert("La nota es: "+notaRandom+" "+mensaje);

}//FIN DE LA FUNCIÓN