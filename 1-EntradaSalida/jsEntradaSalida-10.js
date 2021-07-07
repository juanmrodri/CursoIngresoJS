/*
autor: Juan Manuel Rodriguez
ejercicio: EntradaSalida 10 
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var porcentaje;
	var descuento;
	var resultado;

	porcentaje=prompt("Ingrese el porcentaje");
	porcentaje=parseInt(porcentaje);

	importe=document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);
	descuento=importe*porcentaje/100;
	
	resultado=importe-descuento;
	document.getElementById('txtIdResultado').value=resultado;
	
}
