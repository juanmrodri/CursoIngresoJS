/*
autor: Juan Manuel Rodriguez
ejercicio: EntradaSalida 06 
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var suma;
	var mensaje;

	primerNumero=document.getElementById('txtIdNumeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	suma=primerNumero+segundoNumero;

	mensaje="La suma es: "+suma;

	alert(mensaje);

}

