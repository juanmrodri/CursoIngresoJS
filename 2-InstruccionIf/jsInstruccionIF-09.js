/*
autor: Juan Manuel Rodriguez
ejercicio: Instruccion IF 09
*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10
	var numeroRandom;
	var mensaje;
	numeroRandom=Math.floor(Math.random() * 10) + 1;
	mensaje="El número random es: "+numeroRandom;
	alert(mensaje);
}//FIN DE LA FUNCIÓN