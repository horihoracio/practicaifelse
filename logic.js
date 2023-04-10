/*un cliente que desea alquilar una cancha de futbol solicita que se le realice un sistema 
que le permita al usuario reservar la cancha, crear 4 casos con sus respectivas variables
numero de cancha, si la cancha se encuentra alquilada, si la cancha es techada y el precio, clima
evaluar en un if si la cancha esta alquilada, el clima y si es techada o no en caso de 
cumplir las condiciones 
imprima "felicidades su cancha fue resrrvada con exito"
condiciones 
la cancha si o si debe estar libre 
clim
condiciones 
la cancha si o si debe estar libre 
clima lluvioso la cancha debe ser techada
clima soleado la cancha puede ser techada o no.*/

/*let numero_cancha = 1;
let precio_cancha= 4000;
let esta_alquilada = false;
let clima= lluvioso;
let es_techada = false;*/

let numero_cancha=1;
let precio_cancha=4000;
let esta_alquilada=false;
let clima_lluvioso=false;
let es_techada=false;

console.log("caso 1");
if(esta_alquilada===false){
    if(clima_lluvioso===true || es_techada===true){
        console.log("La cancha solicitada no es posible alquilarla debido al clima");
    }
    else{
        console.log("Felicidades! Su reserva se hizo con exito, su costo es: $"+precio_cancha)
    }
}

console.log("caso 2");
if(esta_alquilada!=false){
    if(clima_lluvioso===true || es_techada===true){
        console.log("La cancha solicitada no es posible alquilarla debido al clima");
    }
    else{
        console.log("Felicidades! Su reserva se hizo con exito, su costo es: $"+precio_cancha)
    }
}