function CalculateTotal() {
  let baseCooldown = parseFloat(document.getElementById("action").value) || 0;
  let skills = parseFloat(document.getElementById("skills").value) || 0;
  let classMod = parseFloat(document.getElementById("class_mod").value) || 0;
  let relic = parseFloat(document.getElementById("relic").value) || 0;

  let total = (skills + classMod + relic) / 100;
  let effective = baseCooldown * (1 - (total / (1 + total)));
  
  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += "<p>Effective Cooldown is " + effective.toFixed(2) + " seconds</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}
