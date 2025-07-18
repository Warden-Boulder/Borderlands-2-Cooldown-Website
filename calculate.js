function CalculateTotal() {
  let baseCooldown = parseFloat(document.getElementById("action").value) || 0;
  let skills = parseFloat(document.getElementById("skills").value) || 0;
  let classMod = parseFloat(document.getElementById("class_mod").value) || 0;
  let relic = parseFloat(document.getElementById("relic").value) || 0;
  let flat = parseFloat(document.getElementById("additional").value) || 0;

  let total = (skills + classMod + relic) / 100;
  let effective = baseCooldown * (1 - (total / (1 + total)));
  let additional = effective-flat;
  
  let resultsHTML = "<p>Effective Cooldown:<br>" + effective.toFixed(2) + " seconds (staticly)<br> ~ 0.0 seconds to " + effective.toFixed(2) + " seconds (pending skill use)</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}