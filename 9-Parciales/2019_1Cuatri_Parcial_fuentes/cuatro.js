/*
autor: Juan Manuel Rodriguez
ejercicio: Parcial 2019 ej. 04
*/
function mostrar()
{
    var numeroUno;
    var numeroDos;
    var resultado;
    var mensaje;

    numeroUno=prompt("Por favor ingrese un número");
    numeroDos=prompt("Por favor ingrese otro número");
    if(numeroUno==numeroDos)
    {
        resultado=numeroUno+numeroDos;
    } else
        {
            numeroUno=parseInt(numeroUno);
            numeroDos=parseInt(numeroDos);
            if(numeroUno>numeroDos)
                {   
                    resultado=numeroUno-numeroDos;
                } else 
                    {
                        if(numeroUno<numeroDos)
                            {
                                resultado=numeroUno+numeroDos;
                            }
                    }
        }

    mensaje=resultado;

    if(resultado>10)
    {
        mensaje="la resta es "+resultado+" y superó el 10";
    }

    alert(mensaje);

}
