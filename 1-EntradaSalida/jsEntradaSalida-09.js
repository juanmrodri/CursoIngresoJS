/*
autor: Juan Manuel Rodriguez
ejercicio: EntradaSalida 09 
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	var aumento;
	var porcentaje;

	porcentaje=prompt("Ingrese el porcentaje");
	porcentaje=parseInt(porcentaje);

	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseInt(sueldo);
	aumento=sueldo*porcentaje/100;

	
	resultado=aumento+sueldo;
	document.getElementById('txtIdResultado').value = resultado;
}
