/*
autor: Juan Manuel Rodriguez
ejercicio: Instrucción Switch 09
*/
function mostrar()
{

	var estacionIngresada;
	var destinoIngresado;
	var precioBase;
	var porcentaje;
	var ajuste;
	var mensaje;

	estacionIngresada=document.getElementById("txtIdEstacion").value;
	destinoIngresado=document.getElementById("txtIdDestino").value;

	precioBase=15000;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
				porcentaje=20;
				break;
				case "cataratas":
				case "Cordoba":
				porcentaje=-10;
				break;
				case "Mar del plata":
				porcentaje=-20;
				break;
			}
			break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
				porcentaje=-20;
				break;
				case "cataratas":
				case "Cordoba":
				porcentaje=10;
				break;
				case "Mar del plata":
				porcentaje=20;
				break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "cataratas":
				case "Mar del plata":
				porcentaje=10;
				break;
				default:
				porcentaje=0;
				break;
			}
			break;
			
	}
	ajuste=precioBase*-porcentaje/100;
	precioBase=precioBase-ajuste;
	mensaje="El precio final es: "+precioBase;
	
	alert(mensaje);
	

}//FIN DE LA FUNCIÓN
