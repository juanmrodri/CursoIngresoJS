/*
autor: Juan Manuel Rodriguez
ejercicio: Instruccion IF 07
*/
function mostrar()
{
	//tomo la edad  
	var edad;
	var estadoCivil;
	var mensaje;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	estadoCivil=document.getElementById("estadoCivil").value;

	if(edad<18 && estadoCivil=="Soltero")
	{
		mensaje="Es muy pequeño para NO ser soltero.";
	}
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN