const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});

// BODY COLOR //
scroll.on("scroll", () => {
  if (document.querySelector("#color.is-inview")) {
    document.body.style.background = "#c684b5";
    document.body.style.color = "#D2D2EB";
  } else {
    document.body.style.background = "#D2D2EB";
    document.body.style.color = "#c684b5";
  }
});
