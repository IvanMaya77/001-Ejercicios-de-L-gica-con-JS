let n1, n2;
n1 = prompt('Ingresa un numero ');
n2 = prompt('Ingresa otro numero ');
if(n1 > n2){
    console.log('el numero ' + n1 + ' es mayor que el numero ' + n2);
}
else if(n1 < n2){
    console.log('el numero ' + n2 + ' es mayor que el numero ' + n1);
}
else{
    console.log('el numero ' + n1 + ' es igual al numero' + n2);
}