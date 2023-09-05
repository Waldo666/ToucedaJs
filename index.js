while (true) {
    let nombre = prompt("Hola!, cómo es tu nombre?")
    alert ("ok " + nombre + " vamos a sumar!")
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
  
    if (isNaN(num1) || isNaN(num2)) {
      alert("Por favor" + nombre + ", ingresa números válidos.");
      continue;
    }
  
    function sumar(num1,num2){
        return num1 + num2;     
        }
  var res = sumar(num1,num2)
  alert(nombre + ", La suma de "+ num1 + " y " + num2 + " es: " + res);
    let respuesta = prompt("Escribe 'esc' para salir, o cualquier otra cosa para continuar:");
  
    if (respuesta === 'esc') {
      break;
    }
  }
 /*https://github.com/Waldo666/ToucedaJs.git*/
 