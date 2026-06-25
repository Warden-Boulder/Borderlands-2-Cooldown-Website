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

function HealthRegen() {
  let maxHpEl = document.getElementById("maxHp");
  let regenEl = document.getElementById("regen");
  let secondEl = document.getElementById("regenPercent");
  let hpLeftEl = document.getElementById("hpLeft");
  let out = document.getElementById("hpresults");
  let stat = "";
  let cycle = "";

  let maxHp = parseFloat(maxHpEl.value) || 0;
  let regen = parseFloat(regenEl.value) || 0;
  let second = parseFloat(secondEl.value) || 0;
  let remaining = parseFloat(hpLeftEl.value) || 0;

  let Regen = maxHp * (regen / 100);
  let totalRegen = Regen + second;

  let needed = maxHp * ((100 - remaining) / 100);

  let time = totalRegen > 0 ? (needed / totalRegen) : 0;

  cycle = `Total Regen Time from ${remaining}% to 100% is ${time.toFixed(2)} seconds`;

  stat = `Total Health Regen is ${totalRegen.toFixed(2)} points per second`;

  out.innerHTML = `<p>${stat}<br>${cycle}</p>`;
}

function ShieldRegen() {
  let maxShieldEl = document.getElementById("maxDef");
  let rechargeEl = document.getElementById("recharge");
  let addrechargeEl = document.getElementById("addrecharge");
  let shieldLeftEl = document.getElementById("shieldLeft");
  let delayEl = document.getElementById("delay");

  let out = document.getElementById("shieldresults");

  let maxShield = parseFloat(maxShieldEl.value) || 0;
  let recharge = parseFloat(rechargeEl.value) || 0;
  let addRecharge = parseFloat(addrechargeEl.value) || 0;
  let remaining = parseFloat(shieldLeftEl.value) || 0;
  let delay = parseFloat(delayEl.value) || 0;

  remaining = Math.min(100, Math.max(0, remaining));

  let rechargeBonus = recharge * (addRecharge / 100);
  let totalRecharge = recharge + rechargeBonus;

  let needed = maxShield * ((100 - remaining) / 100);

  let rechargeTime = totalRecharge > 0 ? (needed / totalRecharge) : 0;

  let totalTime = delay + rechargeTime;

  let stat = `Total Shield Recharge is ${totalRecharge.toFixed(2)} points per second`;

  let cycle = `Total Recharge Time from ${remaining}% to 100% is ${totalTime.toFixed(2)} seconds`;

  out.innerHTML = `<p>${stat}<br>${cycle}</p>`;
}