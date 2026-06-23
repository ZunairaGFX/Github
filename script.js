alert("JS connected");
console.log("JS chal raha hai");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 2 + 1;
  }

  draw() {
    ctx.fillStyle = "#00ffff";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    this.draw();
  }
}

// ❤️ heart formula
function heartShape(t) {
  return {
    x: 16 * Math.pow(Math.sin(t), 3),
    y: -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))
  };
}

// create heart particles
function init() {
  particlesArray = [];

  for (let i = 0; i < 250; i++) {
    let t = i * 0.1;

    let pos = heartShape(t);

    let x = canvas.width / 2 + pos.x * 15;
    let y = canvas.height / 2 + pos.y * 15;

    particlesArray.push(new Particle(x, y));
  }
}

// animation loop
function animate() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }

  requestAnimationFrame(animate);
}

// resize fix
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

// start
init();
animate();
