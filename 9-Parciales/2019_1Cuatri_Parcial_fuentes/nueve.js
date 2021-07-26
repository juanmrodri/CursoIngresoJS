/*
autor: Juan Manuel Rodriguez
ejercicio: Parcial 2019 - 09
*/

function mostrar()
{
    var nombrePais;
    var cantidadHabitantes;
    var habitantesMinimo;
    var habitantesMaximo;
    var banderaHabitantes;
    var mensajeHabitantes;
    var promedioHabitantes;
    var contadorVueltas;
    var temperaturaIngresada;
    var temperaturaMinima;
    var temperaturaMaxima;
    var temperaturasPares;
    var mensajeTemperatura;
    var paisesMasDeCuarentaGrados;
    var banderaTemperatura;
    var consulta;

    banderaHabitantes=true;
    banderaTemperatura=true;
    consulta=true;
    contadorVueltas=0;
    promedioHabitantes=0;
    temperaturasPares=0;
    temperaturaMinima=0;
    temperaturaMaxima=0;
    paisesMasDeCuarentaGrados=0;

    while(consulta)
    {
        nombrePais=prompt("Por favor ingrese el nombre del país");
        while(!(isNaN(nombrePais)))
        {
            nombrePais=prompt("Por favor ingrese el nombre del país");
        }
        
        cantidadHabitantes=prompt("Ingrese la cantidad de habitantes en millones(entre 1 y 7000)");
        cantidadHabitantes=parseInt(cantidadHabitantes);
        while(cantidadHabitantes<1 || cantidadHabitantes>7000)
        {
            cantidadHabitantes=prompt("Por favor ingrese un valor correcto (entre 1 y 7000)");
        }

        // acumulador para promedio

        promedioHabitantes=promedioHabitantes+cantidadHabitantes;

        temperaturaIngresada=prompt("Cuál es la temperatura mínima que se registra en su territorio (entre -50° y 50°)")
        temperaturaIngresada=parseInt(temperaturaIngresada);
        while(temperaturaIngresada<-50 || temperaturaIngresada>50)
        {
            temperaturaIngresada=prompt("Por favor ingrese una temperatura válida (entre -50° y 50°)");
        }

        // temperaturas pares a)

        if(temperaturaIngresada%2==0)
        {
            temperaturasPares++;
        } else
        {
            if(temperaturasPares==0)
            {
                temperaturasPares="No se registran temperaturas pares";
            }
        }

        // paises con mas de 40 grados c)

        if(temperaturaIngresada>40)
        {
            paisesMasDeCuarentaGrados++;
        } else
        {
            if(paisesMasDeCuarentaGrados==0)
            {
                paisesMasDeCuarentaGrados="No se registran paises con mas de 40°";
            }
        }


        // temperatura mínima y máxima
        if(banderaTemperatura==true)
        {
            banderaTemperatura==false;
            temperaturaMinima=temperaturaIngresada;
            temperaturaMaxima=temperaturaIngresada;
            mensajeTemperatura="La temperatura mínima registrada es "+temperaturaMinima+" y el pais donde se registró es "+nombrePais; //f)
        } else
        {
            if(temperaturaIngresada<temperaturaMinima)
            {
                temperaturaMinima=temperaturaIngresada;
                mensajeTemperatura="La temperatura mínima registrada es "+temperaturaMinima+" y el pais donde se registró es "+nombrePais; //f)
            } else
            {
                if(temperaturaIngresada>temperaturaMaxima)
                {
                    temperaturaMaxima=temperaturaIngresada;
                }
            }
        }



        // cantidad habitantes
        if(banderaHabitantes==true)
        {
            banderaHabitantes=false;
            habitantesMinimo=cantidadHabitantes;
            habitantesMaximo=cantidadHabitantes;
            mensajeHabitantes=nombrePais;
        } else
        {
            if(cantidadHabitantes<habitantesMinimo)
            {
                habitantesMinimo=cantidadHabitantes;
                mensajeHabitantes=nombrePais; // b)
            } else
            {
                if(cantidadHabitantes>habitantesMaximo)
                {
                    habitantesMaximo=cantidadHabitantes;
                }
            }
        }

        

        contadorVueltas++;
        // pregunta para continuar
        consulta=confirm("Desea continuar?");
    }

    // promedio de habitantes d)

    promedioHabitantes=promedioHabitantes/contadorVueltas;

    document.write("La cantidad de temperaturas pares es: "+temperaturasPares+"<br>");
    document.write("El nombre del pais con menos habitantes: "+mensajeHabitantes+"<br>");
    document.write("La cantidad de paises que superan los 40 grados: "+paisesMasDeCuarentaGrados+"<br>");
    document.write("El promedio de habitantes entre los paises ingresados: "+promedioHabitantes+"<br>");
    document.write("La temperatura mínima ingresada, y nombre del pais que registro esa temperatura: "+mensajeTemperatura);
}
