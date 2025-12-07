//project titles
const titles = ["Bee Game", "Pacifica Quest", "Casino Simulator"];

//project descriptions
const descriptions = [
  "A small game I made where you play as a bee and dodge the attacks of other bees while attempting to sting them.",
  "Final project for CS161 at Portland State. A text-based adventure game with a basic checkpoint-based save and load feature.",
  "A Discord bot made for a friend's server which simulates various casino games.",
];

//github links for the projects section
const github_links = [
  "https://github.com/bbencze/Bee-Game",
  "https://github.com/bbencze/Pacifica-Quest",
  "https://github.com/bbencze/Casino-Bot",
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
