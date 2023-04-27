function capitalize() {
  var inputText = document.getElementById("input").value;
  var words = inputText.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  var capitalizedText = words.join(" ");
  document.getElementById("output").innerHTML = capitalizedText;
}
