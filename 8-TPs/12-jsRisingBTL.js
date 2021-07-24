/*
autor: Juan Manuel Rodriguez
ejercicio: TP 12

RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
 	var sueldoBruto;
 	var numeroLegajo;
 	var nacionalidad;

 	edadIngresada=prompt("Por favor ingrese su edad (entre 18 y 90 años)");
 	edadIngresada=parseInt(edadIngresada);

 	// validamos que la edad sea entre 18 y 90
 	while(edadIngresada<18 || edadIngresada>90)
 	{
 		edadIngresada=prompt("Por favor ingrese su edad correcta");
 		edadIngresada=parseInt(edadIngresada); 	
 	}

	// validar sexo
	sexoIngresado=prompt("Ingrese 'M' para masculino y 'F' para femenino");
	while(sexoIngresado!="M" && sexoIngresado!="F")
	{
		sexoIngresado=prompt("Por favor ingrese correctamente: 'M' para masculino y 'F' para femenino");
	}

	if(sexoIngresado=="F")
	{
		 sexoIngresado="Femenino";
	}else
	{
		 sexoIngresado="Masculino";
	}

	 // estado civil
 	estadoCivilIngresado=prompt("Por favor ingrese su estado civil:\n1-para soltero\n2-para casados\n3-para divorciados\n4-para viudos");
	estadoCivilIngresado=parseInt(estadoCivilIngresado);
	while(estadoCivilIngresado>4)
	{
		estadoCivilIngresado=prompt("Por favor debe ingresar solo el número correspondiente:\n1-para soltero\n2-para casados\n3-para divorciados\n4-para viudos");
		estadoCivilIngresado=parseInt(estadoCivilIngresado);
	}
	switch(estadoCivilIngresado)
	{
		case 1:
			if(sexoIngresado=="Femenino")
			{
				estadoCivilIngresado="Soltera";
			} else
			{
				estadoCivilIngresado="Soltero";
			}
			 break;
		case 2:
			if(sexoIngresado=="Femenino")
			{
				estadoCivilIngresado="Casada";
			} else
			{
				estadoCivilIngresado="Casado";
			}
			 break;
		case 3:
			if(sexoIngresado=="Femenino")
			{
				estadoCivilIngresado="Divorciada";
			} else
			{
				estadoCivilIngresado="Divorciado";
			}
			 break;
		case 4:
			if(sexoIngresado=="Femenino")
			{
				estadoCivilIngresado="Viuda";
			} else
			{
				estadoCivilIngresado="Viudo";
			}
			 break;
	}

	// Sueldo bruto
	sueldoBruto=prompt("Por favor ingrese su sueldo bruto");
	sueldoBruto=parseInt(sueldoBruto);
	while(sueldoBruto<8000)
	{
		sueldoBruto=prompt("Por favor ingrese su sueldo bruto");
		sueldoBruto=parseInt(sueldoBruto);
	}

	// legajo
	numeroLegajo=prompt("Por favor ingrese su numero de legajo");
	numeroLegajo=parseInt(numeroLegajo);
	while(numeroLegajo<1000 || numeroLegajo>9999)
	{
		numeroLegajo=prompt("Por favor ingrese su numero de legajo");
		numeroLegajo=parseInt(numeroLegajo);
	}
	// nacionalidad
	nacionalidad=prompt("Por favor ingrese su nacionalidad:\n“A” para argentinos\n“E” para extranjeros\n“N” para nacionalizados");
	
	while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
	{
		nacionalidad=prompt("Por favor ingrese su nacionalidad correcta:\n“A” para argentinos\n“E” para extranjeros\n“N” para nacionalizados");
	}

	switch(nacionalidad)
	{
		case "A":
			if(sexoIngresado=="Femenino")
			{
				nacionalidad="Argentina";
			} else
			{
				nacionalidad="Argentino";
			}
			break;
		case "E":
			if(sexoIngresado=="Femenino")
			{
				nacionalidad="Extranjera";
			} else
			{
				nacionalidad="Extranjero";
			}
			break;
		case "N":
			if(sexoIngresado=="Femenino")
			{
				nacionalidad="Nacionalizada";
			} else
			{
				nacionalidad="Nacionalizado";
			}
			break;
	}
 	
 // aca vienen los output
 document.getElementById("txtIdEdad").value=edadIngresada;
 document.getElementById("txtIdSexo").value=sexoIngresado;
 document.getElementById("txtIdEstadoCivil").value=estadoCivilIngresado;
 document.getElementById("txtIdSueldo").value=sueldoBruto;
 document.getElementById("txtIdLegajo").value=numeroLegajo;
 document.getElementById("txtIdNacionalidad").value=nacionalidad;
}
