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
  document.getElementById("coolresults").innerHTML = resultsHTML;
}

function calculateHealthRegen() {
  let maxHp = parseFloat(document.getElementById("maxHp").value) || 0;
  let regen = parseFloat(document.getElementById("regen").value) || 0;
  let second = parseFloat(document.getElementById("regen%").value) || 0;
  let needed = parseFloat(document.getElementById("hpLeft").value) || 0;
  
  let Regen = maxHp*(regen/100);
  let totalRegen = Regen+second;
  let health = (100-needed)/totalRegen;
  let stat = "<p>Total Health Regen is " + totalRegen.toFixed(2) + " points per second";
  
  if (totalRegen.toFixed(2).endsWith('.00')) {
      stat = "<p>Total Health Regen is " + totalRegen.toFixed(0) + " per second";
    } else if (totalRegen.toFixed(2).endsWith('0')) {
      stat = "<p>Total Health Regen is " + totalRegen.toFixed(1) + " per second";
    } else {
     stat = "<p>Total Health Regen is " + totalRegen.toFixed(2) + " per second";
    } 
    
  document.getElementById("statresults").innerHTML = stat;
}
function calculateShieldRegen() {
 let maxDef = parseFloat(document.getElementById("maxDef").value) || 0;
  let recharge = parseFloat(document.getElementById("recharge").value) || 0;
  let second = parseFloat(document.getElementById("addrecharge").value) || 0;
  let missing = parseFloat(document.getElementById("shieldLeft").value) || 0;
  let delay = parseFloat(document.getElementById("delay").value) || 0;

  let Recharge = maxDef*(second/100);
  let totalRecharge = Recharge+recharge;
  let needed = maxDef * (missing/100);
  let time = delay / (needed/totalRecharge);
  let stat = "<p>Total Recharge Rate is " + totalRecharge.toFixed(2) + " points per second<br>";
  let cycle = "<p>Total Recharge Time from " + missing +"% to 100% is " + time.toFixed(2) + " seconds";
  if (totalRecharge.toFixed(2).endsWith('.00')) {
      stat = "<p>Total Recharge Rate is " + totalRecharge.toFixed(0) + " points per second<br>";
      if (time.toFixed(2).endsWith('.00')) {
        cycle = "<p>Total Recharge Time from " + missing +"% to 100% is " + time.toFixed(0) + " seconds";
      } else if (time.toFixed(2).endsWith('0')) {
        cycle = "<p>Total Recharge Time from " + missing +"% to 100% is " + time.toFixed(1) + " seconds";
      } else {
        cycle = "<p>Total Recharge Time from " + missing +"%  to 100% is " + time.toFixed(2) + " seconds";
      }
    } else if (totalRecharge.toFixed(2).endsWith('0')) {
      stat = "<p>Total Recharge Rate is " + totalRecharge.toFixed(1) + " points per second<br>";
      if (time.toFixed(2).endsWith('.00')) {
        cycle = "<p>Total Recharge Time from " + missing +"% to 100% is " + time.toFixed(0) + " seconds";
      } else if (time.toFixed(2).endsWith('0')) {
        cycle = "<p>Total Recharge Time from " + missing +"% to 100% is " + time.toFixed(1) + " seconds";
      } else {
        cycle = "<p>Total Recharge Time from " + missing +"% to 100% is " + time.toFixed(2) + " seconds";
      }
    } else {
     stat = "<p>Total Recharge Rate is " + totalRecharge.toFixed(2) + " points per second<br>";
      if (time.toFixed(2).endsWith('.00')) {
        cycle = "<p>Total Recharge Time from " + missing +"% to 100% is " + time.toFixed(0) + " seconds";
      } else if (time.toFixed(2).endsWith('0')) {
        cycle = "<p>Total Recharge Time from " + missing +"% to 100% is " + time.toFixed(1) + " seconds";
      } else {
        cycle = "<p>Total Recharge Time from " + missing +"% is " + time.toFixed(2) + " seconds";
      }
    } 

  document.getElementById("statresults").innerHTML = stat+cycle;
}
