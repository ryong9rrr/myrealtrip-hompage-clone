import "./scss/index.scss";

console.log("상윤리얼트립");

document
  .querySelectorAll(".card-module-wrapper")
  .forEach((wrapperContainer) => {
    const container = wrapperContainer.querySelector(".card-slider-container");
    const prevBtn = wrapperContainer.querySelector(".card-slider-prev");
    const nextBtn = wrapperContainer.querySelector(".card-slider-next");

    let isInit = false;

    function transformContainer(selectedBtn) {
      if (isInit) return;
      container.removeAttribute("style");

      selectedBtn === "prev"
        ? container.insertBefore(
            container.lastElementChild,
            container.firstElementChild
          )
        : container.appendChild(container.firstElementChild);
      isInit = true;
    }

    const slideContainer = (direction) => {
      container.style.overflow = "visible";
      const selectedBtn = direction === 1 ? "prev" : "next";
      container.style.transitionDuration = "500ms";
      container.style.transform = `translateX(${direction * 100}%)`;
      isInit = false;
      container.ontransitionend = () => transformContainer(selectedBtn);
    };

    nextBtn.addEventListener("click", slideContainer.bind(this, -1));
    prevBtn.addEventListener("click", slideContainer.bind(this, 1));
  });
