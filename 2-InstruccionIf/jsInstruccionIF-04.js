/*
autor: Juan Manuel Rodriguez
ejercicio: Instrucción IF 04
*/
function mostrar()
{
	//tomo la edad  
	var edad;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	/*if(edad<18)
	{
		alert("Es menor");
		if(edad>12)
		{
			alert("Adolescente");
		}
	}*/
	if(edad<18 && edad>12)
	{
		alert("Adolescente");
	}

	

}//FIN DE LA FUNCIÓN