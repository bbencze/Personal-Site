const titles = ["Bee Game", "Pacifica Quest", "Casino Simulator"];

const descriptions = [
  "A small game I made where you play as a bee and dodge the attacks of other bees while attempting to sting them.",
  "Final project for CS161 at Portland State. A text-based adventure game with a basic checkpoint-based save and load feature.",
  "A Discord bot made for a friend's server which simulates various casino games.",
];

const title = document.getElementById("project-title");
const desc = document.getElementById("project-description");

const carousel = document.querySelector("#projects-carousel");

carousel.addEventListener("slide.bs.carousel", function (event) {
  const index = event.to;

  title.textContent = titles[index];
  desc.textContent = descriptions[index];
});
