(function () {
  const links = Array.from(document.querySelectorAll(".writing-photo a"));
  if (!links.length) return;

  const viewer = document.createElement("div");
  viewer.className = "writing-lightbox";
  viewer.setAttribute("role", "dialog");
  viewer.setAttribute("aria-modal", "true");
  viewer.setAttribute("aria-label", "图片浏览器");
  viewer.innerHTML = [
    '<button class="writing-lightbox__button writing-lightbox__close" type="button" aria-label="关闭">×</button>',
    '<button class="writing-lightbox__button writing-lightbox__previous" type="button" aria-label="上一张">‹</button>',
    '<img class="writing-lightbox__image" alt="">',
    '<button class="writing-lightbox__button writing-lightbox__next" type="button" aria-label="下一张">›</button>',
    '<div class="writing-lightbox__counter" aria-live="polite"></div>'
  ].join("");
  document.body.appendChild(viewer);

  const image = viewer.querySelector("img");
  const counter = viewer.querySelector(".writing-lightbox__counter");
  let current = 0;

  function show(index) {
    current = (index + links.length) % links.length;
    const thumbnail = links[current].querySelector("img");
    image.src = links[current].href;
    image.alt = thumbnail ? thumbnail.alt : "";
    counter.textContent = (current + 1) + " / " + links.length;
  }

  function close() {
    viewer.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  links.forEach(function (link, index) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      show(index);
      viewer.classList.add("is-open");
      document.body.style.overflow = "hidden";
      viewer.querySelector(".writing-lightbox__close").focus();
    });
  });

  viewer.querySelector(".writing-lightbox__close").addEventListener("click", close);
  viewer.querySelector(".writing-lightbox__previous").addEventListener("click", function () { show(current - 1); });
  viewer.querySelector(".writing-lightbox__next").addEventListener("click", function () { show(current + 1); });
  viewer.addEventListener("click", function (event) {
    if (event.target === viewer) close();
  });
  document.addEventListener("keydown", function (event) {
    if (!viewer.classList.contains("is-open")) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") show(current - 1);
    if (event.key === "ArrowRight") show(current + 1);
  });
})();
