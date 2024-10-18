let he = 0;
let c = '';

let i=1;
for (i==1; i == Infinity; i++){
    he = prompt ('Ingresa las horas estacionadas, ejemplo: 1:30 = 1.30, 2:27 = 2.27');
    if (isNaN(he)){
        console.log('No es un numero de hora valido');
    }
    else{
        if (he <= 0.5){
            console.log('Su tiempo fue de: ' + he + ', por lo que no se le cobrara');
        }
        else if(he > 0.5 && he < 2){
            c = he * 10;
            console.log('Su tiempo fue de: ' + he + ', por lo que se le cobrara: ' + c)
        }
        else if(he > 2 && he < 3){
            c = he * 25;
            console.log('Su tiempo fue de: ' + he + ', por lo que se le cobrara: ' + c)
        }
        else if(he > 3){
            c = he * 30;
            console.log('Su tiempo fue de: ' + he + ', por lo que se le cobrara: ' + c)
        }
    }
}
