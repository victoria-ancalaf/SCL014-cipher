//const cipher = {
  // ...
//};

//export default cipher;
const cipher = () => {
  var originalMessage = document.getElementById("originalText").value;
  var offsetNumber = document.getElementById("desplazamiento").value;
  var finalOffset = Number(offsetNumber);
  var result = "";
  var textoCifrado = document.getElementById("textoCifrado");

  for (var i = 0; i < originalMessage.length; i++) {
    var asciiCode = originalMessage[i].charCodeAt(0);
    var letter = (((asciiCode - 65 + finalOffset) % 26) + 65); 
    result = result + String.fromCharCode(letter).toUpperCase();
  }
  textoCifrado.value = result;
}

export default cipher;
