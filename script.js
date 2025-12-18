/* DARK / LIGHT MODE */
function toggleTheme() {
  document.body.dataset.theme =
    document.body.dataset.theme === "dark" ? "light" : "dark";
}

/* HERO BACKGROUND AUTO CHANGE */
const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "10.png"
];

/* PROJECT IMAGE SLIDER – 32 IMAGES */
const projectImages = [];

// Auto-generate image list without folder
for (let i = 1; i <= 32; i++) {
  projectImages.push(`img4 (${i}).jpeg`);
}

let currentProject = 0;
const projectImg = document.getElementById("projectImage");

function showProject(index) {
  projectImg.src = projectImages[index];
}

function nextSlide() {
  currentProject = (currentProject + 1) % projectImages.length;
  showProject(currentProject);
}

function prevSlide() {
  currentProject =
    (currentProject - 1 + projectImages.length) % projectImages.length;
  showProject(currentProject);
}

let index = 0;
const hero = document.getElementById("hero");

function changeBackground() {
  hero.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}

changeBackground();
setInterval(changeBackground, 5000);
