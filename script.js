const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const navList = document.querySelector(".nav__list");

menuBtn.onclick = () => {
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  cancelBtn.style.opacity = "1";
  cancelBtn.style.pointerEvents = "auto";
  navList.classList.add("active");
};

cancelBtn.onclick = () => {
  cancelBtn.style.opacity = "0";
  cancelBtn.style.pointerEvents = "none";
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  navList.classList.remove("active");
};
