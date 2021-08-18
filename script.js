const progressBar = document.querySelector("#progress");
const navBar = document.querySelector("nav");
const scrollToTopEl = document.querySelector("#scroll-to-top");

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

  /* Sticky Navbar */
  if (progressBarPosition > 0) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }

  /* Scroll To Top */
  if (progressBarPosition > 300) {
    scrollToTopEl.style.display = "grid";
  } else {
    scrollToTopEl.style.display = "none";
  }
};
