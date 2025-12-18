/* DARK / LIGHT MODE */
function toggleTheme(){
  document.body.dataset.theme = document.body.dataset.theme === "dark" ? "light":"dark";
}

/* HERO BACKGROUND SLIDER */
const heroImages=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","10.png"];
heroImages.forEach(src=>new Image().src=src);

const bg1=document.querySelector(".bg1");
const bg2=document.querySelector(".bg2");
let heroIndex=0,showBg1=true;

bg1.style.backgroundImage=`url('${heroImages[0]}')`;
bg1.classList.add("active");

setInterval(()=>{
  heroIndex=(heroIndex+1)%heroImages.length;
  if(showBg1){
    bg2.style.backgroundImage=`url('${heroImages[heroIndex]}')`;
    bg2.classList.add("active");
    bg1.classList.remove("active");
  } else{
    bg1.style.backgroundImage=`url('${heroImages[heroIndex]}')`;
    bg1.classList.add("active");
    bg2.classList.remove("active");
  }
  showBg1=!showBg1;
},5000);

/* PROJECT IMAGE SLIDER */
const projectImages=[];
for(let i=1;i<=32;i++){projectImages.push(`img4 (${i}).jpeg`);}
projectImages.forEach(src=>new Image().src=src);

let projectIndex=0,showImg1=true;
const img1=document.getElementById("projectImg1");
const img2=document.getElementById("projectImg2");
img1.src=projectImages[0];
img1.classList.add("active");

function nextSlide(){projectIndex=(projectIndex+1)%projectImages.length;swapProject();}
function prevSlide(){projectIndex=(projectIndex-1+projectImages.length)%projectImages.length;swapProject();}
function swapProject(){
  if(showImg1){img2.src=projectImages[projectIndex];img2.classList.add("active");img1.classList.remove("active");}
  else{img1.src=projectImages[projectIndex];img1.classList.add("active");img2.classList.remove("active");}
  showImg1=!showImg1;
}
