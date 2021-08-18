const progressBar = document.querySelector("#progress");

window.onscroll = () => {
  let progressBarPosition = document.documentElement.scrollTop;
  let _scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let progressBarWidth = (progressBarPosition * 100) / _scrollHeight;
  progressBar.style.width = `${progressBarWidth}%`;
};
