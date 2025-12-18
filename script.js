/* DARK / LIGHT MODE */
function toggleTheme() {
  document.body.dataset.theme =
    document.body.dataset.theme === "dark" ? "light" : "dark";
}

/* HERO BACKGROUND AUTO CHANGE */
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "10.png"];

/* PRELOAD HERO IMAGES */
images.forEach(src => {
  const img = new Image();
  img.src = src;
});

let index = 0;
const hero = document.getElementById("hero");

/* INITIAL IMAGE */
hero.style.backgroundImage = `url('${images[0]}')`;

function changeBackground() {
  hero.classList.add("fade-out");

  setTimeout(() => {
    index = (index + 1) % images.length;
    hero.style.backgroundImage = `url('${images[index]}')`;
    hero.classList.remove("fade-out");
  }, 600); // must match CSS transition
}

setInterval(changeBackground, 5000); // every 5 sec

/* PROJECT IMAGE SLIDER – 32 IMAGES */
const projectImages = [];
for (let i = 1; i <= 32; i++) {
  projectImages.push(`img4 (${i}).jpeg`);
}

/* PRELOAD PROJECT IMAGES */
projectImages.forEach(src => {
  const img = new Image();
  img.src = src;
});

let currentProject = 0;
const projectImg = document.getElementById("projectImage");

/* INITIAL PROJECT IMAGE */
projectImg.src = projectImages[0];

function nextSlide() {
  projectImg.classList.add("fade-out");
  setTimeout(() => {
    currentProject = (currentProject + 1) % projectImages.length;
    projectImg.src = projectImages[currentProject];
    projectImg.classList.remove("fade-out");
  }, 300);
}

function prevSlide() {
  projectImg.classList.add("fade-out");
  setTimeout(() => {
    currentProject =
      (currentProject - 1 + projectImages.length) % projectImages.length;
    projectImg.src = projectImages[currentProject];
    projectImg.classList.remove("fade-out");
  }, 300);
}
