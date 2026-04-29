const world = document.querySelector("#world");
const weapon = document.querySelector(".weapon");
const enemy = document.querySelector("#enemy");

const healthDisplay = document.querySelector("#health");
const ammoDisplay = document.querySelector("#ammo");
const sectorDisplay = document.querySelector("#sector");
const eventLog = document.querySelector("#eventLog");

const moveForwardButton = document.querySelector("#moveForward");
const turnLeftButton = document.querySelector("#turnLeft");
const turnRightButton = document.querySelector("#turnRight");
const fireButton = document.querySelector("#fire");

let steps = 0;
let rotation = 0;
let ammo = 50;
let health = 100;
let sector = 1;

function updateHud(message) {
  healthDisplay.textContent = health;
  ammoDisplay.textContent = ammo;
  sectorDisplay.textContent = String(sector).padStart(2, "0");
  eventLog.textContent = `Status: ${message}`;
}

function renderWorld() {
  const depth = steps * 26;
  world.style.transform = `translateZ(${depth}px) rotateY(${rotation}deg)`;
}

function moveForward() {
  steps += 1;

  if (steps % 4 === 0) {
    sector += 1;
  }

  if (steps % 5 === 0) {
    health = Math.max(0, health - 5);
  }

  renderWorld();
  updateHud("Moved forward through the CSS-rendered corridor.");
}

function turnLeft() {
  rotation -= 7;
  renderWorld();
  updateHud("Turned left.");
}

function turnRight() {
  rotation += 7;
  renderWorld();
  updateHud("Turned right.");
}

function fireWeapon() {
  if (ammo <= 0) {
    updateHud("No ammo left.");
    return;
  }

  ammo -= 1;

  weapon.classList.add("firing");
  enemy.classList.add("hit");

  updateHud("Fired weapon. CSS enemy hit animation triggered.");

  setTimeout(() => {
    weapon.classList.remove("firing");
    enemy.classList.remove("hit");
  }, 160);
}

moveForwardButton.addEventListener("click", moveForward);
turnLeftButton.addEventListener("click", turnLeft);
turnRightButton.addEventListener("click", turnRight);
fireButton.addEventListener("click", fireWeapon);

window.addEventListener("keydown", (event) => {
  if (event.code === "KeyW") {
    moveForward();
  }

  if (event.code === "KeyA") {
    turnLeft();
  }

  if (event.code === "KeyD") {
    turnRight();
  }

  if (event.code === "Space") {
    event.preventDefault();
    fireWeapon();
  }
});

updateHud("Demo loaded. Use W, A, D, and Space.");