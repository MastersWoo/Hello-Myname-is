// sub__swot 박스안에 들어가게 하는 것
const swotItems = document.querySelector(".swot__item");
swotItems.addEventListener("click", (e) => {
  const targetText = e.target.textContent;
  const items = ["S", "W", "O", "T"];
  if (items.includes(targetText)) {
    showItem(targetText);
  }
});

function showItem(textType) {
  const obj = {
    S: "STRENGTHS(강점): 인내심. 끈기. 성실성",
    W: "WEAKNESSES(약점): 식욕. 가족들(?). 코딩에 대한 지식.시간활용",
    O: "OPPORTUNITIES(기회): 지금. 앞으로의 남은 5개월 기간",
    T: "THREATS(약점): 자바스크립트에 대한 이해력 부족.",
  };

  const box = document.querySelector(".sub__item");
  box.innerHTML = "";

  const span = document.createElement("span");
  const textNode = document.createTextNode(obj[textType]);
  span.appendChild(textNode);
  box.append(span);
}
