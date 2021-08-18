const progressBar = document.querySelector("#progress");
const navbar = document.querySelector("nav");
const navBarUl = document.querySelector("#nav-bar");
const navBarLinks = navBarUl.querySelectorAll("li");
const hamBurgerMenu = document.querySelector("#hamburger");
const scrollToTopEl = document.querySelector("#scroll-to-top");

/* HamBurger Menu for Smaller Devices */
hamBurgerMenu.addEventListener("click", () => {
  navBarUl.classList.toggle("active");
});

navBarLinks.forEach((navBarLink) => {
  navBarLink.addEventListener("click", () => {
    navBarUl.classList.remove("active");
  });
});

scrollToTopEl.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

window.onscroll = () => {
  /* Scroll Indicator */
  let progressBarPosition = document.documentElement.scrollTop;
  let _scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let progressBarWidth = (progressBarPosition * 100) / _scrollHeight;
  progressBar.style.width = `${progressBarWidth}%`;

  /* Stickynavbar */
  if (progressBarPosition > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  /* Scroll To Top */
  if (progressBarPosition > 300) {
    scrollToTopEl.style.display = "grid";
  } else {
    scrollToTopEl.style.display = "none";
  }
};
