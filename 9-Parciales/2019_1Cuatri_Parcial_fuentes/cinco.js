/*
autor: Juan Manuel Rodriguez
ejercicio: Parcial 2019 ej. 05
*/
function mostrar()

/* 

metodos de pago:
    débito
    mercadoPago
    otro

*/
{
    var continente;
    // cantidad de días elegidos, tomado por prompt
    var cantidadDias;
    // método de pago elegido, tomado por prompt
    var metodoDepago;
    // precio total por cantidad de días
    var precioDiabase;
    // descuento por continente
    var descuento;
    // descuento por método de pago
    var descuentoAdicional;
    // precio con descuento por continente
    var precioCondescuento;
    // precio con descuento con resultado de continente y descuento por método de pago
    var precioCondescuentofinal;
    // recargo por los paises que no tienen descuento
    var recargo;
    var precioConrecargo;
    // mensaje con el precio final con todos los descuentos
    var mensaje;
    
    // precio cobrado por cada día
    precioDiabase=100;

    continente=document.getElementById("Marca").value;

    cantidadDias=prompt("Por favor igrese la cantidad de días que le gustaría visitar: ");
    cantidadDias=parseInt(cantidadDias);

    if(continente=="Asia" || continente=="Oceania")
        {
            recargo=20;
            precioDiabase=precioDiabase*cantidadDias;
            precioConrecargo=precioDiabase*recargo/100;
            precioDiabase=precioDiabase+precioConrecargo;
            mensaje="El precio final es de: $"+precioDiabase;
            
        } else 
            {
                metodoDepago=prompt("Elija por favor un método de pago entre (débito; mercadoPago; efectivo; otro):  ");
                if(continente=="América" && metodoDepago=="débito")

                    {   
                        
                        // descuento por continente
                        descuento=50;
                        // descuento por método de pago
                        descuentoAdicional=10;
                        precioDiabase=precioDiabase*cantidadDias;
                        // descuento por continente
                        precioCondescuento=precioDiabase*descuento/100;
                        // resto el descuento por continente al precio
                        precioDiabase=precioDiabase-precioCondescuento;
                        // descuento por método de pago
                        precioCondescuentofinal=precioDiabase*descuentoAdicional/100;
                        // resto el descuento por método de pago al precio
                        precioDiabase=precioDiabase-precioCondescuentofinal;
                        mensaje="El precio final es de: $"+precioDiabase;
                        
                    } else
                        {
                            if(continente=="América")
                                {
                                    // descuento por continente
                                    descuento=50;
                                    precioDiabase=precioDiabase*cantidadDias;
                                    // descuento por continente
                                    precioCondescuento=precioDiabase*descuento/100;
                                    // resto el descuento por continente al precio
                                    precioDiabase=precioDiabase-precioCondescuento;
                                    mensaje="El precio final es de: $"+precioDiabase;
                                    
                                } else
                                    {
                                        if(continente=="África" && metodoDepago=="mercadoPago" || metodoDepago=="efectivo")
                                            {
                                                        // descuento por continente
                                                        descuento=60;
                                                        // descuento por método de pago
                                                        descuentoAdicional=15;
                                                        precioDiabase=precioDiabase*cantidadDias;
                                                        // descuento por continente
                                                        precioCondescuento=precioDiabase*descuento/100;
                                                        // resto el descuento por continente al precio
                                                        precioDiabase=precioDiabase-precioCondescuento;
                                                        // descuento por método de pago
                                                        precioCondescuentofinal=precioDiabase*descuentoAdicional/100;
                                                        // resto el descuento por método de pago al precio
                                                        precioDiabase=precioDiabase-precioCondescuentofinal;
                                                        mensaje="El precio final es de: $"+precioDiabase;
                                                        
                                            } else 
                                                {
                                                    if(continente=="Europa" && metodoDepago=="débito")
                                                        {
                                                            // descuento por continente
                                                            descuento=20;
                                                            // descuento por método de pago
                                                            descuentoAdicional=15;
                                                            precioDiabase=precioDiabase*cantidadDias;
                                                            // descuento por continente
                                                            precioCondescuento=precioDiabase*descuento/100;
                                                            // resto el descuento por continente al precio
                                                            precioDiabase=precioDiabase-precioCondescuento;
                                                            // descuento por método de pago
                                                            precioCondescuentofinal=precioDiabase*descuentoAdicional/100;
                                                            // resto el descuento por método de pago al precio
                                                            precioDiabase=precioDiabase-precioCondescuentofinal;
                                                            mensaje="El precio final es de: $"+precioDiabase;
                                                            
                                                        } else
                                                            {
                                                                if(continente=="Europa" && metodoDepago=="mercadoPago")
                                                                    {
                                                                        // descuento por continente
                                                                        descuento=20;
                                                                        // descuento por método de pago
                                                                        descuentoAdicional=10;
                                                                        precioDiabase=precioDiabase*cantidadDias;
                                                                        // descuento por continente
                                                                        precioCondescuento=precioDiabase*descuento/100;
                                                                        // resto el descuento por continente al precio
                                                                        precioDiabase=precioDiabase-precioCondescuento;
                                                                        // descuento por método de pago
                                                                        precioCondescuentofinal=precioDiabase*descuentoAdicional/100;
                                                                        // resto el descuento por método de pago al precio
                                                                        precioDiabase=precioDiabase-precioCondescuentofinal;
                                                                        mensaje="El precio final es de: $"+precioDiabase;
                                                                        
                                                                    } else
                                                                        {
                                                                            if(continente=="Europa")
                                                                                {
                                                                                    // descuento por continente
                                                                                    descuento=20;
                                                                                    // descuento por método de pago
                                                                                    descuentoAdicional=5;
                                                                                    precioDiabase=precioDiabase*cantidadDias;
                                                                                    // descuento por continente
                                                                                    precioCondescuento=precioDiabase*descuento/100;
                                                                                    // resto el descuento por continente al precio
                                                                                    precioDiabase=precioDiabase-precioCondescuento;
                                                                                    // descuento por método de pago
                                                                                    precioCondescuentofinal=precioDiabase*descuentoAdicional/100;
                                                                                    // resto el descuento por método de pago al precio
                                                                                    precioDiabase=precioDiabase-precioCondescuentofinal;
                                                                                    mensaje="El precio final es de: $"+precioDiabase;
                                                                                    
                                                                                } else 
                                                                                     {
                                                                                        // acá caería si no se cumple ningún tipo de descuento
                                                                                        precioDiabase=precioDiabase*cantidadDias;
                                                                                        mensaje="El precio final es de: $"+precioDiabase;
                                                                                        
                                                                                     }
                                                                         }
                                                             }
                                                 }
                                     }
                        }
             }

             alert(mensaje);

}
