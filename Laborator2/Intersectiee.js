function calculateIntersection() {
  var set1 = document.getElementById("set1").value.split(",");
  var set2 = document.getElementById("set2").value.split(",");
  var intersection = [];
  for (var i = 0; i < set1.length; i++) {
    if (set2.includes(set1[i]) && !intersection.includes(set1[i])) {
      intersection.push(set1[i]);
    }
  }
  var intersectionElement = document.getElementById("intersection");
  if (intersection.length > 0) {
    intersectionElement.innerHTML = "Elementele comune sunt: " + intersection.join(", ");
  } else {
    intersectionElement.innerHTML = "Nu există elemente comune!";
  }
}
