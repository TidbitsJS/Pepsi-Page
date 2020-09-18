const pepsi001 = document.querySelector(".pepsi001");
const pepsi002 = document.querySelector(".pepsi002");
const pepsi003 = document.querySelector(".pepsi003");

const toggleMenu = document.querySelector(".toggleMenu");
const navigation = document.querySelector(".navigation");

function imgSlider(item) {
  document.querySelector(".pepsi").src = `images/${item}.png`;
}

toggleMenu.addEventListener("click", () => {
  menuToggle();
});

pepsi001.addEventListener("click", () => {
  console.log("pepsi001");
  imgSlider("pepsi001");
  changeBgColor("#0062be");
});
pepsi002.addEventListener("click", () => {
  console.log("pepsi002");
  imgSlider("pepsi002");
  changeBgColor("#e60c2c");
});
pepsi003.addEventListener("click", () => {
  console.log("pepsi003");
  imgSlider("pepsi003");
  changeBgColor("#1e1e1e");
});

function changeBgColor(color) {
  const sec = document.querySelector(".sec");
  sec.style.background = color;
}

function menuToggle() {
  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");
}
