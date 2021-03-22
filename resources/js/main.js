let phrase = "Learning development";
let element = document.getElementById("text");
let text = element.innerHTML;
let cursor = document.createElement("div");
let wrap = document.querySelector(".wrap");
cursor.className = "cursor";
// cursor.innerHTML = "|";

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

let about = document.getElementById("about");
let project = document.getElementById("project");
console.log(about);

function scrollFunction() {
  if (window.scrollY > 500) {
    about.classList.add("slideup");
    project.classList.add("slideup");
  }
}

window.onscroll = scrollFunction;
