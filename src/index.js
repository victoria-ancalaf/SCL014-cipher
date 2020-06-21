import cipher from './cipher.js';

    //console.log(cipher);

    //let txtInt = document.getElementById("originalText").value;
    //let offNum = document.getElementById("desplazamiento").value;
    // let txtCipher = document.getElementById("textoCifrado");

    // <----- separación de las variables del cipher---------> 

    let enter = document.getElementById("buttonEnter");
    let fisrtScreen = document.getElementById("firstScreen");
    let secondScreen = document.getElementById("secondScreen");
    let nextBtn = document.getElementById("buttonNext");
    let newcontactScreen = document.getElementById("newcontactScreen");
    let contactScreen = document.getElementById("contactScreen");
    let botonListo = document.getElementById("buttonListo");
    let addContact = document.getElementById("buttonadd");


    // funcion de cifrar
    document.getElementById("cifrarTexto").addEventListener('click', () =>{
      let offNum = document.getElementById("desplazamiento").value;
      let txtInt = document.getElementById("originalText").value;

      document.getElementById("textoCifrado").innerHTML = cipher.encode(offNum,txtInt);
    });
    
   // funcion de descifrado
    document.getElementById("descifrarTexto").addEventListener('click', () =>{
      let offNum = document.getElementById("desplazamiento").value;
      let txtInt = document.getElementById("originalText").value;
      document.getElementById("textoCifrado").innerHTML = cipher.decode(offNum,txtInt);
    });
    
    document.getElementById("copy").addEventListener('click', () => {  
      const mensajeCodificado = document.getElementById('textoCifrado');
      mensajeCodificado.select();
      mensajeCodificado.setSelectionRange(0, 99999);
      document.execCommand("copy");
      //console.log(mensajeCodificado);
    })
    
    enter.addEventListener("click", function(){
        fisrtScreen.className = "hideMe";
        secondScreen.className = "welcomeTo"; 
      });
    
    nextBtn.addEventListener("click", function(){
      secondScreen.className = "hideMe";
      newcontactScreen.className = "welcomeTo";
    });
    
    botonListo.addEventListener("click", function(){
        newcontactScreen.className ="hideMe";
        contactScreen.className = "welcomeTo";
        let userName = document.getElementById("userName").value;
        let firstContact = document.getElementById("contactName").value;
        document.getElementById("allContacts").innerHTML = "Hola " + userName + ", en caso de emergencia enviaremos el mensaje a tus contactos favoritos"; 
        document.getElementById("ContactOne").innerText = firstContact;
    });
    
    addContact.addEventListener("click", function(){
          newcontactScreen.className ="welcomeTo";
      }
    )


                //Funciones del Popup
//Botón al abrir las instrucciones
let instructionsBtn = document.getElementById("btnInstructions");
instructionsBtn.addEventListener("click", function(){
  document.getElementById("instructions").style.display = "block";
});
//Botón para cerrar las instrucciones
let exitBtn = document.getElementById("btnClose");
exitBtn.addEventListener("click", function(){
  document.getElementById("instructions").style.display = "none";
});


