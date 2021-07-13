/*
autor: Juan Manuel Rodriguez
ejercicio: Instruccion IF 06
*/
function mostrar()
{
	//tomo la edad  
	var edad;
	
	//var mensaje;
	var mensaje;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	if(edad>17)
	{
		mensaje="Es mayor";
	}
	else
	{
		if(edad<13)
		{
			mensaje="Es un niño";
		} else 
			{
				mensaje="Es un adolescente";
			}
	}

	
	alert(mensaje);


}//FIN DE LA FUNCIÓN