const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const infiniteScroller = scroller.querySelector(".infinite-scroller");
    const infiniteScrollerArray = Array.from(infiniteScroller.children);

    console.log(infiniteScrollerArray);

    infiniteScrollerArray.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      infiniteScroller.appendChild(duplicatedItem);
    });
  });
}