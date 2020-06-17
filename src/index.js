import { cipherEncode, cipherDecode } from './cipher.js';

//console.log(cipher);

var enter = document.getElementById("buttonEnter");
var fisrtScreen = document.getElementById("firstScreen");
var secondScreen = document.getElementById("secondScreen");

enter.addEventListener("click", function(){
    fisrtScreen.className = "hideMe";
    secondScreen.className = "welcomeTo"; 
  });


var siguiente = document.getElementById("buttonNext");
var newcontactScreen = document.getElementById("newcontactScreen");

siguiente.addEventListener("click", function(){
  secondScreen.className = "hideMe";
  newcontactScreen.className = "welcomeTo";
});



var contactScreen = document.getElementById("contactScreen");
var botonListo = document.getElementById("buttonListo");

botonListo.addEventListener("click", function(){

newcontactScreen.className ="hideMe";
contactScreen.className = "welcomeTo";

  var userName = document.getElementById("userName").value;
  var firstContact = document.getElementById("contactName").value;
 document.getElementById("allContacts").innerHTML = "Hola " + userName + ", en caso de emergencia enviaremos el mensaje a tus contactos favoritos"; 
document.getElementById("ContactOne").innerText = firstContact;
});


var addContact = document.getElementById("buttonadd");
addContact.addEventListener("click", function(){
  newcontactScreen.className ="welcomeTo";
}
)

var buttonCifrarTexto = document.getElementById("cifrarTexto");
buttonCifrarTexto.addEventListener("click", cipherEncode);


var buttonDescifrarTexto = document.getElementById("descifrarTexto");
buttonDescifrarTexto.addEventListener("click", cipherDecode);