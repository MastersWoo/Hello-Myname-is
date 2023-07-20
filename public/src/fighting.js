// 응원한마디..
const fightingUl = document.querySelector(".main > .main__fighting > ul");
const fightingInput = document.querySelector(
  ".main > .main__fighting > form > input"
);
const fightingForm = document.querySelector(".main > .main__fighting > form");

let fightingList = JSON.parse(localStorage.getItem("fighting")) || [];

function updatefightingList() {
  fightingUl.innerHTML = "";
  fightingList.forEach((data) => {
    const li = document.createElement("li");
    li.innerText = data;
    fightingUl.appendChild(li);
  });
}

updatefightingList();

fightingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (fightingList.length === 9) {
    fightingList.splice(0, 1);
  }

  fightingList.push(fightingInput.value);
  fightingInput.value = "";
  localStorage.setItem("fighting", JSON.stringify(fightingList));
  updatefightingList();
});
