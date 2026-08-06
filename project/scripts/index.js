document.addEventListener("DOMContentLoaded", () => {
  
  // Activity Card Navigation Buttons
  const activityButtons = document.querySelectorAll(".card-btn[data-activity]");

  activityButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const activityId = button.getAttribute("data-activity");
      if (activityId) {
        window.location.href = `activities.html#${activityId}`;
      }
    });
  });

  // Visit Counter (localStorage)
  const visitsDisplay = document.querySelector("#visits");

  if (visitsDisplay) {
    let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

    if (numVisits !== 0) {
      visitsDisplay.textContent = numVisits;
    } else {
      visitsDisplay.textContent = `This is your first visit! Welcome!`;
    }

    numVisits++;
    localStorage.setItem("numVisits-ls", numVisits);
  }

});