/*
autor: Juan Manuel Rodriguez
ejercicio: Instrucción IF 05
*/
function mostrar()
{
	//tomo la edad  
	var edad;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	// este es mas performante, ya que trabaja por "cortocircuito", si la primer opcion es verdadera, entra en el if, sin verificar la segunda, usa menos procesador
	if(edad>17 || edad<13)
	{
		alert("No es adolescente");
	}

	/* esta es otra forma de resolverlo, menos practica, porque son 3 pasos, el primero, segundo y despues la negacion
	if(!(edad<18 || edad>12))
	{
		alert("No es adolescente");
	}
	*/

}//FIN DE LA FUNCIÓN