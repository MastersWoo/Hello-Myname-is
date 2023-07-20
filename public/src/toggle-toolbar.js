// 화면 size줄어들을때 toggle button활성화 메뉴 숨기기.
const toggleBtn = document.querySelector(".navbar > .navbar__toggleBtn");
const menu = document.querySelector(".navbar > .navbar__menu");
const icons = document.querySelector(".navbar > .navbar__icons");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
