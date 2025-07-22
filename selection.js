function toggleCharacter() {
  const characterSelect = document.getElementById("character");
  const actionInput = document.getElementById("action");
  const cooldownText = document.getElementById("cooldown-text");
  const character = characterSelect.value;
  
  let cooldownValue = "";
  let actionskill = "";
  let name = "";
  
  if (character === "amara1") {
    name = "Amara";
    actionskill = "Phasecast";
    cooldownValue = 28;
  } else if (character === "amara2") {
    name = "Amara";
    actionskill = "Phaseflare";
    cooldownValue = 48;
  } else if (character === "amara3") {
    name = "Amara";
    actionskill = "Phasegrasp";
    cooldownValue = 33;
  } else if (character === "amara4") {
    name = "Amara";
    actionskill = "Phaseslam";
    cooldownValue = 36;
  } else if (character === "Athena") {
    name = "Athena";
    actionskill = "Kinetic Aspis";
    cooldownValue = 16;
  } else if (character === "Aurelia") {
    name = "Aurelia";
    actionskill = "Cold As Ice";
    cooldownValue = 35;
  } else if (character === "axton") {
    name = "Axton";
    actionskill = "Sabre Turret";
    cooldownValue = 42;
  } else if (character === "brick") {
    name = "Brick";
    actionskill = "Berserk";
    cooldownValue = 60;
  } else if (character === "Claptrap") {
    name = "Claptrap";
    actionskill = "VaulHunter.EXE";
    cooldownValue = 40;
  } else if (character === "Jack") {
    name = "Jack";
    actionskill = "Expendable Assets";
    cooldownValue = 40;
  } else if (character === "gaige") {
    name = "Gaige";
    actionskill = "Deathtrap";
    cooldownValue = 60;
  } else if (character === "fl4k1") {
    name = "Fl4k";
    actionskill = "Fade Away";
    cooldownValue = 45;
  } else if (character === "fl4k2") {
    name = "Fl4k";
    actionskill = "Gamma Burst";
    cooldownValue = 30;
  } else if (character === "fl4k3") {
    name = "Fl4k";
    actionskill = "Gravity Snare";
    cooldownValue = 36;
  } else if (character === "fl4k4") {
    name = "Fl4k";
    actionskill = "Rakk Attack";
    cooldownValue = 18;
  } else if (character === "krieg") {
    name = "Krieg";
    actionskill = "Buzz Axe Rampage";
    cooldownValue = 120;
  } else if (character === "lilith") {
    name = "Lilith";
    actionskill = "Phasewalk";
    cooldownValue = 36;
  } else if (character === "maya") {
    name = "Maya";
    actionskill = "Phaselock";
    cooldownValue = 13;
  } else if (character === "moze") {
    name = "Moze";
    actionskill = "Iron Bear";
    cooldownValue = 110;
  } else if (character === "mordecai") {
    name = "Mordecai";
    actionskill = "Bloodwing";
    cooldownValue = 28;
  } else if (character === "Nisha") {
    name = "Nisha";
    actionskill = "Showdown";
    cooldownValue = 16;
  } else if (character === "roland") {
    name = "Roland";
    actionskill = "Scorpio Turret";
    cooldownValue = 100;
  } else if (character === "salvador") {
    name = "Salvador";
    actionskill = "Gunzerking";
    cooldownValue = 42;
  } else if (character === "Wilhelm") {
    name = "Wilhelm";
    actionskill = "Wolf and Saint";
    cooldownValue = 42;
  } else if (character === "zero") {
    name = "Zer0";
    actionskill = "Decepti0n";
    cooldownValue = 15;
  } else if (character === "zane1") {
    name = "Zane";
    actionskill = "Barrier";
    cooldownValue = 24;
  } else if (character === "zane2") {
    name = "Zane";
    actionskill = "Digi-Clone";
    cooldownValue = 28;
  } else if (character === "zane3") {
    name = "Zane";
    actionskill = "MNTIS Shoulder Cannon";
    cooldownValue = 12;
  } else if (character === "zane4") {
    name = "Zane";
    actionskill = "SNTNL";
    cooldownValue = 60;
  }
  
  if (cooldownValue) {
    actionInput.value = cooldownValue;
    const characterName = character.charAt(0).toUpperCase() + character.slice(1);
    cooldownText.textContent = `Vault Hunter: ${name}\nAction Skill: ${actionskill}\nBase Cooldown: ${cooldownValue} seconds`;
  } else {
    actionInput.value = "";
    cooldownText.textContent = "Base Cooldown is";
  }
}