const statuses = document.querySelectorAll(".status");

statuses.forEach(status => {
  if (status.textContent.trim() === "In work") {
    status.style.backgroundColor = "orange";
    status.style.color = "white";
  } else if (status.textContent.trim() === "Complete") {
    status.style.backgroundColor = "green";
    status.style.color = "white";
  } else if (status.textContent.trim() === "Testing") {
    status.style.backgroundColor = "blue";
    status.style.color = "white";
  } else if (status.textContent.trim() === "In planning") {
    status.style.backgroundColor = "gray";
    status.style.color = "white";
  }
});
