/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {
  var centigrados;
  var valorIngresado;
  var mensaje;

  centigrados = document.getElementById("txtIdTemperatura").value;
  centigrados = parseInt(centigrados);
  valorIngresado = centigrados;
  centigrados = (centigrados-32)*5/9;

  mensaje = valorIngresado + " Fahrenheit son " + centigrados + " centigrados";

  alert(mensaje);
}

function CentigradosFahrenheit() {
  var fahrenheit;
  var valorIngresado;
  var mensaje;

  fahrenheit = document.getElementById("txtIdTemperatura").value;
  fahrenheit = parseInt(fahrenheit);
  valorIngresado = fahrenheit;
  fahrenheit = (fahrenheit*9/5)+32;

  mensaje = valorIngresado + " centigrados son " + fahrenheit + " Fahrenheit";

  alert(mensaje);
}
