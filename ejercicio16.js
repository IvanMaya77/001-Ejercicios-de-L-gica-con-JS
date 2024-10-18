const palabra = prompt('Por favor, ingresa una palabra:');

if (palabra === null) {
    console.log('No se ingreso ningun valor');
} else {
    const palabraSinEspacios = palabra.replace(/\s+/g, '').toLowerCase();
    const palabraReversa = palabraSinEspacios.split('').reverse().join('');
    
    if (palabraSinEspacios === palabraReversa) {
        console.log('La palabra' + palabra + 'es un palíndromo.');
    } else {
        console.log('La palabra' + palabra + 'no un palíndromo.');
    }
}
