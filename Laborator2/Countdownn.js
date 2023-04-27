function startTimer() {
  var duration = parseInt(document.getElementById("duration").value);
  var countdownElement = document.getElementById("countdown");
  var timer = setInterval(function() {
    duration--;
    var minutes = Math.floor(duration / 60);
    var seconds = duration % 60;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    countdownElement.innerHTML = minutes + ":" + seconds;
    if (duration <= 0) {
      clearInterval(timer);
      countdownElement.innerHTML = "Cronometru expirat!";
    }
  }, 1000);
}
