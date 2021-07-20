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
 
    switch(cantidadLamparas)
    {
        case 6:
            descuento=50;
            break;
        case 3:
            switch(marcaLampara)
            {
                case "ArgentinaLuz":
                    descuento=15;
                    break;
                case "FelipeLamparas":
                    descuento=10;
                    break;
                default:
                    descuento=5;
            }
            break;
        case 4:
            switch(marcaLampara)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento=25;
                    break;
                default:
                    descuento=20;
            }
            break;
        case 5:
            switch(marcaLampara)
            {
                case "ArgentinaLuz":
                    descuento=40;
                    break;
                default:
                    descuento=30;
            }
            break;
        default:
            descuento=0;
    }
    
 
     
     // con todos los datos hago la operación
     lamparasTotal=cantidadLamparas*precioLampara;
     precioDescuento=lamparasTotal*descuento/100;
     precioFinal=lamparasTotal-precioDescuento;
 
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
 
