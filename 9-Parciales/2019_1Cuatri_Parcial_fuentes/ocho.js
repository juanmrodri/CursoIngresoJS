/*
autor: Juan Manuel Rodriguez
ejercicio: Parcial 2019 - 08
*/
function mostrar()
{
    var letraIngresada;
    var numeroIngresado;
    var seguirIngresando;
    var primerIngreso;
    var cantidadPares;
    var cantidadImpares;
    var cantidadCeros;
    var numerosPositivos;
    var numerosNegativos;
    var acumuladorPositivos;
    var acumuladorNegativos;
    var promedioPositivos;
    var numeroMinimo;
    var numeroMaximo;
    var mensajeMinimo;
    var mensajeMaximo;

    // contadores y validadur de vueltas
    seguirIngresando=true;
    primerIngreso=true;
    cantidadPares=0;
    cantidadImpares=0;
    cantidadCeros=0;
    numerosPositivos=0;
    numerosNegativos=0;
    acumuladorPositivos=0;
    acumuladorNegativos=0;
    numeroMinimo=0;
    numeroMaximo=0;

    while(seguirIngresando)
    {   
        letraIngresada=prompt("Por favor ingrese una letra: ");
        
        numeroIngresado=prompt("por favor ingrese un número");
        while(isNaN(numeroIngresado))
        {
            numeroIngresado=prompt("por favor ingrese un número");
        }
        numeroIngresado=parseInt(numeroIngresado);
    if(numeroIngresado==0)
    {
        cantidadCeros=cantidadCeros+1;
    } else
    {
        if(numeroIngresado>0)
        {
            //numero positivo
            numerosPositivos=numerosPositivos+1;
            acumuladorPositivos=acumuladorPositivos+numeroIngresado;
        } else
        {
            //numero negativo
            if(numeroIngresado<0)
            {
                numerosNegativos=numerosNegativos+1;
                acumuladorNegativos=acumuladorNegativos+numeroIngresado;
            }
        }

    }
    // numeros pares
    if(numeroIngresado%2==0)
    {
        cantidadPares=cantidadPares+1;
        numerosPositivos=numerosPositivos+numeroIngresado;
    } else
    {
        cantidadImpares=cantidadImpares+1;
    }
    // numero minimo y maximo
    if(primerIngreso==true)
    {
        primerIngreso=false;
        numeroMinimo=numeroIngresado;
        numeroMaximo=numeroIngresado;
    } else
    {
        if(numeroIngresado<numeroMinimo)
        {
            numeroMinimo=numeroIngresado;
        } else 
        {
            if(numeroIngresado>numeroMaximo)
            {
                numeroMaximo=numeroIngresado;
            }
        }
    }
    mensajeMinimo=numeroMinimo+" , "+letraIngresada;
    mensajeMaximo=numeroMaximo+" , "+letraIngresada;

        seguirIngresando=confirm("Desea ingresar otros valores?");
    }

    // promedio de todos los numeros positivos
    promedioPositivos=acumuladorPositivos/numerosPositivos;

    document.write("a) La cantidad de números pares es: "+cantidadPares+"<br>");
    document.write("b) La cantidad de números impares es: "+cantidadImpares+"<br>");
    document.write("c) La cantidad de ceros es: "+cantidadCeros+"<br>");
    document.write("d) El promedio de todos los números positivos es: "+promedioPositivos+"<br>");
    document.write("e) La suma de todos los números negativos es: "+acumuladorNegativos+"<br>");
    document.write("f) El número máximo y su letra: "+mensajeMaximo+" y el número mínimo y su letra "+mensajeMinimo);
}
