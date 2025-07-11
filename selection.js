function toggleButtons() {
  const characterSelect = document.getElementById("character");
  const actionInput = document.getElementById("action");
  const cooldownText = document.getElementById("cooldown-text");
  const character = characterSelect.value;
  
  let cooldownValue = "";
  let actionskill = "";
  
  if (character === "axton") {
    actionskill = "Sabre Turret";
    cooldownValue = 36;
  } else if (character === "gaige") {
    actionskill = "Deathtrap"
    cooldownValue = 60;
  } else if (character === "krieg") {
    actionskill = "Buzz Axe Rampage";
    cooldownValue = 120;
  } else if (character === "maya") {
    actionskill = "Phaselock";
    cooldownValue = 13;
  } else if (character === "salvador") {
    actionskill = "Gunzerking";
    cooldownValue = 42;
  } else if (character === "zero") {
    actionskill = "Decepti0n";
    cooldownValue = 15;
  }
  
  if (cooldownValue) {
    actionInput.value = cooldownValue;
    const characterName = character.charAt(0).toUpperCase() + character.slice(1);
    cooldownText.textContent = `Vault Hunter: ${characterName}\nAction Skill: ${actionskill}\nBase Cooldown: ${cooldownValue} seconds`;
  } else {
    actionInput.value = "";
    cooldownText.textContent = "Base Cooldown is";
  }
}