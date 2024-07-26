let rightArrowBtn = document.querySelector(".right-arrow");
let home = document.querySelector("#home");

let currentImageIndex = 1;
const totalImages = 4;

rightArrowBtn.addEventListener("click", () => {
  currentImageIndex++;
  if (currentImageIndex > totalImages) {
    currentImageIndex = 1;
  }
  home.style.backgroundImage = `url('images/banner-${currentImageIndex}.jpg')`;
});

// home.style.backgroundImage = "url('images/banner-3.jpg')";
