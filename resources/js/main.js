let phrase = "Learning development";
let element = document.getElementById("text");
let text = element.innerHTML;
let cursor = document.createElement("div");
let wrap = document.querySelector(".wrap");
cursor.className = "cursor";

const timer = (ms) => new Promise((res) => setTimeout(res, ms));
setTimeout(() => {
  async function removeText() {
    for (let i = text.length; i >= 0; i--) {
      element.innerHTML = text.slice(0, i);
      wrap.appendChild(cursor);
      await timer(200);
    }
  }
  removeText();
}, 3000);

setTimeout(() => {
  async function addText() {
    for (let j = 0; j < phrase.length; j++) {
      wrap.removeChild(cursor);
      element.innerHTML += phrase[j];
      wrap.appendChild(cursor);
      await timer(200);
    }
  }
  addText();
}, 6000);

const container = document.querySelector(".container");

function scrollFunction() {
  if (window.scrollY > 500) {
    container.classList.add("slideup");
  }
}

window.onscroll = scrollFunction;

// show progress bars
let info = document.querySelector(".info");
skill = "";

let Skills = {
  skillName: ["HTML", "CSS", "JS", "Java", "React"],
  skillPercent: ["90%", "80%", "60%", "40%", "30%"],
};

for (let i = 0; i < 5; i++) {
  skill += `
            <span>${Skills.skillName[i]}</span>
              <div class="bar">
                <div class="progressLine" style="width: ${Skills.skillPercent[i]}">
                  <span></span>
                  <div class="balloon"><span>${Skills.skillPercent[i]}</span></div>
                </div>
              </div>`;
}

info.innerHTML = skill;

let aboutSelector = document.getElementById("about");

let skillSelector = document.getElementById("skills");
console.log(skillSelector);

let about = document.querySelector(".about");
console.log(about);
let skills = document.querySelector(".skills");
console.log(skills);

let hidden = document.querySelector(".hidden");
console.log(hidden);

skillSelector.addEventListener("click", () => {
  about.classList.add("hidden");
  aboutSelector.classList.add("text-not-selected");
  skillSelector.classList.remove("text-not-selected");
  skills.classList.remove("hidden");
});

aboutSelector.addEventListener("click", () => {
  skills.classList.add("hidden");
  skillSelector.classList.add("text-not-selected");
  aboutSelector.classList.remove("text-not-selected");
  about.classList.remove("hidden");
});
