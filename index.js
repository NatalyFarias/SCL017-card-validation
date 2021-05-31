import validator from './validator.js';
//declaro constante comprar
const comprar = document.getElementById("toBuy");
//aca oculto div de la pagin2
document.getElementById("page2").style.display = "none";

//aqui damos un evento clic al boton comprar
comprar.addEventListener("click", () => {
//al momento de cliquear el boton comprar muestro la pagina 2 y oculto la pagina 1
  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "block";

 //declaro constante validar
  const validar = document.getElementById("validacion");
  //le asigno el evento clic al boton y cuando se cliquee el boton se ejecuta la funcion especificada
  validar.addEventListener("click", function (event) {
    //evitamos redireccion de la pagina
    event.preventDefault();
    //declaro la constante creditCardNumber y extraigo el imput del id nuTarjeta
    const creditCardNumber = document.getElementById("nuTarjeta");
    //verifico la validez de la tarjeta extrayendo el value
    if  (validator.isValid(creditCardNumber.value) ){
      //aca enmascaro los caracteres
        const creditCardMask= validator.maskify(creditCardNumber.value)
        //aca se mujestra el mensaje en caso de ser valida la tarjeta
        alert("Tu tarjeta" + creditCardMask + "es valida para realizar la compra" )
      }else{
        //en caso de no ser valida la tarjeta mustra alert "tarjeta no valida"
        alert("Tarjeta no valida") 
      }
      
  
      });
  });

 

//console.log(validator);
