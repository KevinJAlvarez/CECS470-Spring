const statusButton = document.getElementById("status-btn");
const moodButton = document.getElementById("mood-btn");
const statusText = document.getElementById("status-text");
const pickFavoriteButton = document.getElementById("pick-favorite-btn");
const favoriteText = document.getElementById("favorite-text");
const favoriteItems = document.querySelectorAll("#favorites-list li");
const classChecks = document.querySelectorAll(".class-check");
const classProgress = document.getElementById("class-progress");

function updateClassProgress() {
  if (!classProgress) {
    return;
  }

  let checkedCount = 0;
  classChecks.forEach((item) => {
    if (item.checked) {
      checkedCount += 1;
    }
  });

  classProgress.textContent = `${checkedCount} of ${classChecks.length} classes checked.`;
}

function clearActiveFavorites() {
  favoriteItems.forEach((item) => item.classList.remove("active"));
}

if (statusButton && statusText) {
  statusButton.addEventListener("click", function () {
    statusText.textContent = "Thanks for visiting my page!";
  });
}

if (moodButton && statusText) {
  moodButton.addEventListener("click", function () {
    const hour = new Date().getHours();

    if (hour < 12) {
      statusText.textContent = "Morning energy: locked in for class.";
    } else if (hour < 18) {
      statusText.textContent = "Afternoon mode: anime and assignments.";
    } else {
      statusText.textContent = "Night mode: movie time after homework.";
    }
  });
}

if (pickFavoriteButton && favoriteText && favoriteItems.length > 0) {
  pickFavoriteButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * favoriteItems.length);
    const pickedTitle = favoriteItems[randomIndex].dataset.title;

    clearActiveFavorites();
    favoriteItems[randomIndex].classList.add("active");
    favoriteText.textContent = `Today\'s pick: ${pickedTitle}`;
  });

  favoriteItems.forEach((item) => {
    item.addEventListener("click", function () {
      clearActiveFavorites();
      item.classList.add("active");
      favoriteText.textContent = `You selected: ${item.dataset.title}`;
    });
  });
}

if (classChecks.length > 0) {
  classChecks.forEach((item) => {
    item.addEventListener("change", updateClassProgress);
  });
  updateClassProgress();
}
