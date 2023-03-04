function changeBackgroundColor() {
  console.log('here');
  const colors = ["#CBD0CC", "#ADD8E6", "#90EE90"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const element = document.querySelector("body");
  element.style.backgroundColor = colors[randomIndex];
}

const image = document.getElementById("lucasImage");
image.addEventListener("click", changeBackgroundColor);