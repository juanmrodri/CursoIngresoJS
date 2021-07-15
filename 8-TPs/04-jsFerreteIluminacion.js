/*4.	
autor: Juan Manuel Rodriguez
ejercicio: Ferrete iluminación 04
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    // lampara unidad
    var precioLampara;
    // lamparas seleccionadas
    var cantidadLamparas;
    // precio de la cantidad de lamparas seleccionadas
    var lamparasTotal;
    // descuentos
     var descuento;
    // marca lampara
    var marcaLampara;
    // marca descuento
    var precioDescuento;
    //precio final con descuento
    var precioFinal;
    // ingreso bruto
    var ingresoBruto;
    // precio con IIBB
    var precioIibb;
    // ultimo precio
    var ultimoPrecio;
    // mensaje final
    var mensaje;

    // por ahora valen 35
    precioLampara=35;

    // ingreso bruto valor

    ingresoBruto=10;

    // cantidad de lamparas
    cantidadLamparas=document.getElementById("txtIdCantidad").value;
    cantidadLamparas=parseInt(cantidadLamparas);

    //guardo la marca
    marcaLampara=document.getElementById("Marca").value;

    
    if(cantidadLamparas>5)
    { 
      // situación A
      descuento=50;
      lamparasTotal=cantidadLamparas*precioLampara;
      precioDescuento=lamparasTotal*descuento/100;
      precioFinal=lamparasTotal-precioDescuento;
    } else 
        {   
            if(cantidadLamparas==3){
                    if(marcaLampara=="ArgentinaLuz") {
                        // situación D op. 1
                        descuento=15;
                        lamparasTotal=cantidadLamparas*precioLampara;
                        precioDescuento=lamparasTotal*descuento/100;
                        precioFinal=lamparasTotal-precioDescuento;
                    } else 
                        {
                            if(marcaLampara=="FelipeLamparas") {
                                // situación D op. 2
                                descuento=10;
                                lamparasTotal=cantidadLamparas*precioLampara;
                                precioDescuento=lamparasTotal*descuento/100;
                                precioFinal=lamparasTotal-precioDescuento;
                            } else 
                                {
                                    // situación D op. 3
                                    descuento=5;
                                    lamparasTotal=cantidadLamparas*precioLampara;
                                    precioDescuento=lamparasTotal*descuento/100;
                                    precioFinal=lamparasTotal-precioDescuento;
                                }
                        }
            } 
            else 
                {
                    if(cantidadLamparas==4)
                                    {
                                        if(marcaLampara=="ArgentinaLuz" || marcaLampara=="FelipeLamparas")
                                        {   // situación C
                                            descuento=25;
                                            lamparasTotal=cantidadLamparas*precioLampara;
                                            precioDescuento=lamparasTotal*descuento/100;
                                            precioFinal=lamparasTotal-precioDescuento;
                                        } else
                                            {   // situación C
                                                descuento=20;
                                                lamparasTotal=cantidadLamparas*precioLampara;
                                                precioDescuento=lamparasTotal*descuento/100;
                                                precioFinal=lamparasTotal-precioDescuento;
                                            }
                                    } else 
                                        {
                                            if(cantidadLamparas==5 && marcaLampara=="ArgentinaLuz")
                                                {   // situación B op. 1
                                                    descuento=40;
                                                    lamparasTotal=cantidadLamparas*precioLampara;
                                                    precioDescuento=lamparasTotal*descuento/100;
                                                    precioFinal=lamparasTotal-precioDescuento;
                                                } else
                                                    {   // situación B op. 2
                                                        descuento=30;
                                                        lamparasTotal=cantidadLamparas*precioLampara;
                                                        precioDescuento=lamparasTotal*descuento/100;
                                                        precioFinal=lamparasTotal-precioDescuento;
                                                    }
                                        }
                }
        }



    // precio con IIBB
    if(precioFinal>119)
    {
        precioIibb=precioFinal*ingresoBruto/100;
        ultimoPrecio=precioFinal+precioIibb;
        mensaje="IIBB Usted pago: "+precioIibb+" siendo el precio final: "+ultimoPrecio;
    } else
        {
            mensaje="El precio con descuento es: "+precioFinal;
        }

    

    // campo para mostrar resultado
    document.getElementById("txtIdprecioDescuento").value=mensaje;


}
