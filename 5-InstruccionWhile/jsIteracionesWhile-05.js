/*
autor: Juan Manuel Rodriguez
ejercicio: iteraciones while 05

Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;

	sexoIngresado = prompt("ingrese f ó m .");
	// while(!(sexoIngresado=="m" && sexoIngresado=="f")) esto esta bien tambien pero no es recomendable, negamos todo
	while(sexoIngresado!="m" && sexoIngresado!="f")
	{
		
		sexoIngresado = prompt("ingrese f ó m .");

		
		
	}
	document.getElementById('txtIdSexo').value=sexoIngresado;

	

	
}//FIN DE LA FUNCIÓN
