const cipher= {
  encode: () => {

  },
  decode: () => {

  }

}


const cipherEncode = () => {
  var originalMessage = document.getElementById("originalText").value;
  var offsetNumber = document.getElementById("desplazamiento").value;
  var finalOffset = Number(offsetNumber);
  var result = "";
  var textoCifrado = document.getElementById("textoCifrado");

   //Con el length recorremos la palabra
  for (var i = 0; i < originalMessage.length; i++) {
    var asciiCode = originalMessage[i].charCodeAt(0);  //Sacamos el código ASCII de cada letra 
    //var letter = (((asciiCode - 65 + finalOffset) % 26) + 65); //Fórmula para las letras MAYÚSCULAS
    //result = result + String.fromCharCode(letter).toUpperCase(); //Devuelve el resultado del código ASCII a letra
    if (asciiCode >= 65 && asciiCode <= 90) { //Si son letras mayúsculas (ASCII 65-90)
      result = result + String.fromCharCode((asciiCode - 65 + finalOffset) % 26 + 65); 
    } else if (asciiCode >= 97 && asciiCode <= 122) { //Si son minúsculas (ASCII 97-122)
      result = result + String.fromCharCode((asciiCode - 97 + finalOffset) % 26 + 97);
    } else {
      result = result + originalMessage.charAt(i); //Si no es una letra lo tomará igual, sin cambios
    }
    
  }
  textoCifrado.value = result;
}


const cipherDecode = () => {
  var offsetNumber = document.getElementById("desplazamiento").value;
  var textoCifrado = document.getElementById("textoCifrado").value;
  var originalMessage = document.getElementById("originalText");
  var finalOffset = Number(offsetNumber);
  var result = "";
  finalOffset = (26 - offsetNumber) % 26;

  for (var i = 0; i < textoCifrado.length; i++) {
    var asciiCode = textoCifrado[i].charCodeAt(0);
  //  var letter = (((asciiCode - 65 + finalOffset) % 26) + 65); 
  //  result = result + String.fromCharCode(letter).toUpperCase();
    if (asciiCode >= 65 && asciiCode <= 90) { 
    result = result + String.fromCharCode((asciiCode - 65 + finalOffset) % 26 + 65); 
  } else if (asciiCode >= 97 && asciiCode <= 122) { 
    result = result + String.fromCharCode((asciiCode - 97 + finalOffset) % 26 + 97);
  } else {
    result = result + textoCifrado.charAt(i); 
  }

  }
  originalMessage.value = result;   
}

export default cipher;
export {cipherEncode, cipherDecode};