//project titles
const titles = ["Tarasaur", "Shamrock Contestant Manager"];

//project descriptions
const descriptions = [
  "A versatile file archiver written in C. Written for cs333 at Portland State University",
  "A contestant manager for motorcycle races, storing riders in a Binary Search Tree. Written for cs302 at Portland State University",
];

//github links for the projects section
const github_links = [
  "https://github.com/bbencze/Tarasaur",
  "https://github.com/bbencze/Shamrock-Contestant-Manager",
];

//fetch the elements associated with project titles, descriptions, github links, and the acarousel itself
const title = document.getElementById("project-title");
const desc = document.getElementById("project-description");
const carousel = document.querySelector("#projects-carousel");
const link = document.getElementById("github-link");

//to be done when the carousel moves
carousel.addEventListener("slide.bs.carousel", function (event) {
  //listens for AFTER the carousel slides
  const index = event.to;

  title.textContent = titles[index]; //change the title
  desc.textContent = descriptions[index]; //change the description
  link.href = github_links[index]; //change the github link
});
//nav bar code

const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY; //stores the current y position of the window

//listens for a scroll from the user
window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    //if a downward scroll, hide the navbar
    nav.classList.add("nav--hidden");
  } else {
    //if an upward scroll, show the navbar
    nav.classList.remove("nav--hidden");
  }

  lastScrollY = window.scrollY; //set the new y value of the window

  //bug fix for certain mobile browsers, pulled from tutorial comments
  if (window.scrollY <= 0) {
    nav.classList.remove("nav--hidden");
  }
});
