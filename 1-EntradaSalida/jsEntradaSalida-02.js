/*
autor: Juan Manuel Rodriguez
ejercicio: EntradaSalida 02
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;

	var mensaje;

	// ingreso de datos
	nombre = prompt("Ingrese su nombre", "Nombre...");

	// proceso
	mensaje = "Bienvenido " + nombre;

	// salida
	alert(mensaje);

}

