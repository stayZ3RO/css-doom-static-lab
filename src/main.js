const launchButton = document.querySelector("#launchButton");
const statusMessage = document.querySelector("#statusMessage");

launchButton.addEventListener("click", () => {
  statusMessage.textContent =
    "Status: Static demo launched. Replace this scaffold with the CSS DOOM renderer when ready.";

  launchButton.textContent = "Demo Loaded";
});
