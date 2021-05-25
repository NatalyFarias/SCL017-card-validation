const validator = {
  // Luhn check
  isValid(creditCardNumber) {
    var numSum = 0;
    var value;
    //iteramos en base a la cantidad de numeros de la tarjeta (16)
    for (var i = 0; i < 16; i++) {
      //en este if el residuo entre la posision y el 2 debe ser igual a 0
      if (i % 2 == 0) {
        //en caso de que el if anterior sea verdadero duplicamos el numero 
        value = 2 * creditCardNumber[i];
        //si al duplicar el numero es mayor o igual a 10 se se divide en 10 y se suma el residuo 
        if (value >= 10) {
          value = (Math.floor(value / 10) + value % 10);
        }
        //pasa a numero el string
      } else {
        value = Number(creditCardNumber[i]);

      }
      //aca se guarda en la variable numsun la suma delos digitos
      numSum = numSum + value;

    }
    //aqui validamos si la suma de los digitos dividido 10 tiene un residuo cero
    return (numSum % 10 == 0);
  }
}
export default validator;
