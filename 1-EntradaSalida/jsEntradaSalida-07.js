/*
autor: Juan Manuel Rodriguez
ejercicio: EntradaSalida 07 
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var sumar;
	var mensaje;
	
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroUno=parseInt(numeroUno);

	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroDos=parseInt(numeroDos);

	sumar=numeroUno+numeroDos;


	mensaje="La suma es: "+sumar;


	alert(mensaje);


}

function restar()
{
	var numeroUno;
	var numeroDos;
	var restar;
	var mensaje;
	
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroUno=parseInt(numeroUno);

	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroDos=parseInt(numeroDos);

	restar=numeroUno-numeroDos;


	mensaje="La resta es: "+restar;
	

	alert(mensaje);

	
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplicar;
	var mensaje;
	
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroUno=parseInt(numeroUno);

	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroDos=parseInt(numeroDos);

	multiplicar=numeroUno*numeroDos;


	mensaje="La multiplicación es: "+multiplicar;
	

	alert(mensaje);

}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var division;
	var mensaje;
	
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroUno=parseInt(numeroUno);

	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroDos=parseInt(numeroDos);

	division=numeroUno/numeroDos;


	mensaje="La división es: "+division;
	

	alert(mensaje);
}

