function toggleButtons() {
  const characterSelect = document.getElementById("character");
  const actionInput = document.getElementById("action");
  const cooldownText = document.getElementById("cooldown-text");
  const character = characterSelect.value;
  
  let cooldownValue = "";
  
  if (character === "axton") {
    cooldownValue = 36;
  } else if (character === "gaige") {
    cooldownValue = 60;
  } else if (character === "krieg") {
    cooldownValue = 120;
  } else if (character === "maya") {
    cooldownValue = 13;
  } else if (character === "salvador") {
    cooldownValue = 42;
  } else if (character === "zero") {
    cooldownValue = 15;
  }
  
  if (cooldownValue) {
    actionInput.value = cooldownValue;
    const characterName = character.charAt(0).toUpperCase() + character.slice(1);
    cooldownText.textContent = `Vault Hunter: ${characterName}\nBase Cooldown: ${cooldownValue} seconds`;
  } else {
    actionInput.value = "";
    cooldownText.textContent = "Base Cooldown is";
  }
}
