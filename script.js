const progressBar = document.querySelector("#progress");
const navBar = document.querySelector("nav");

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
};
