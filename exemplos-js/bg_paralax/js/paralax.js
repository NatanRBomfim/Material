(function () {
  window.addEventListener("scroll", positionImage);

  let dataParalaxContainer = [...document.querySelectorAll("[data-paralax]")];

  function isGettingOut(container) {
    return container.getBoundingClientRect().top <= 0;
  }

  function getNewPosition(c) {
    const v = parseFloat(c.getAttribute("data-p-velocity")) || 0.5;
    return c.getBoundingClientRect().top * v * -1;
  }

  function positionImage() {
    dataParalaxContainer.forEach((c) => {
      let originalX = getComputedStyle(c).backgroundPositionX;
      console.log(originalX);
      if (isGettingOut(c)) {
        c.style.backgroundPosition = `${originalX} ${getNewPosition(c)}px`;
      } else {
        c.style.backgroundPosition = `${originalX} 0px`;
      }
    });
  }
  positionImage();
})();
