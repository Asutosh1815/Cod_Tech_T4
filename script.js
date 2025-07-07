function updateProgress() {
  const progressBar = document.getElementById("progressBar");
  const progressPercent = document.getElementById("progressPercent");
  let value = parseInt(progressBar.value);
  if (value < 100) {
    value += 20;
    progressBar.value = value;
    progressPercent.textContent = `${value}%`;
  } else {
    alert("You've completed the course!");
  }
}
