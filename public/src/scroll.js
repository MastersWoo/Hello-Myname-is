// 맨위로 스크롤 생성
const topButton = document.querySelector(".top-button");

topButton.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
