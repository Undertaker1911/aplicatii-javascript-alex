function multiply() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var result = num1 * num2;
  document.getElementById("result").innerHTML = result.toFixed(2);
}

function divide() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var result = num1 / num2;
  document.getElementById("result").innerHTML = result.toFixed(2);
}
