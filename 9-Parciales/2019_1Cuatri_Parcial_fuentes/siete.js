/*
autor: Juan Manuel Rodriguez
ejercicio: Parcial 2019 - 07
*/
function mostrar()
{

	var alturaIngresada;
	var sexo;
	var contador;
	var mujeresCantidad;
	var acumuladorAlturas;
	var promedioAlturasTotales;
	var banderaDeAltura;
	var AlturaMasBaja;
	var AlturaMasAlta;
	var AlturaMasBajaMensaje;
	var mujeresMensaje;
	var mensaje;

	contador=0;
	acumuladorAlturas=0;
	mujeresCantidad=1;
	banderaDeAltura=true;

	while (contador<5) {

		alturaIngresada=prompt("ingrese su altura en centímetros");
		alturaIngresada=parseInt(alturaIngresada);
		if(alturaIngresada<250 && alturaIngresada>0)
		{
			sexo=prompt("Ingrese el sexo 'f' o 'm' ");
			while (sexo!="f" && sexo!="m") {
				sexo=prompt("Ingrese el sexo 'f' o 'm' ");
			}

			// altura mas baja
			if(banderaDeAltura==true)
			{
				banderaDeAltura=false;
				AlturaMasBaja=alturaIngresada;
			} else
			{
				if(alturaIngresada<AlturaMasBaja)
				{
					AlturaMasBaja=alturaIngresada;
					AlturaMasBajaMensaje=" La altura más baja es "+AlturaMasBaja+" y el sexo de esa persona es "+sexo;
				} else
				{
					if(alturaIngresada>AlturaMasBaja)
					{
						AlturaMasAlta=alturaIngresada;

					}
				}
			}
			// total de edad
			acumuladorAlturas=acumuladorAlturas+alturaIngresada;

			if(sexo=="f" && alturaIngresada>190)
			{	// cantidad de mujeres que superen los 190 cm
				mujeresCantidad=mujeresCantidad+1;
				mujeresMensaje=" La cantidad de mujeres que que su altura supere los 190 centimetros es "+mujeresCantidad;
			} else
			{	// mensaje de inexistencia de mujeres que supern los 190 cm
				mujeresMensaje=" No hay mujeres que superen los 190 centimetros";
			}
			// contador de vueltas
			contador=contador+1;
		}

	}

	// promedio
	promedioAlturasTotales=acumuladorAlturas/5;
	
	mensaje="El promedio de las alturas es: "+promedioAlturasTotales+AlturaMasBajaMensaje+mujeresMensaje;

	alert(mensaje);
}
