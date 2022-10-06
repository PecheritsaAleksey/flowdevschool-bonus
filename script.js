let profileElement = document.querySelector(".profile");
let buttomThemeChange = document.querySelector("#js-change-theme-button");

buttomThemeChange.addEventListener("click", function () {
  profileElement.classList.toggle("dark-mode");
  buttomThemeChange.innerHTML === "☀️"
    ? (buttomThemeChange.innerHTML = "🌙")
    : (buttomThemeChange.innerHTML = "☀️");
});
