const items = document.querySelectorAll(".accordion__item");

items.forEach((item) => {
  const btn = item.querySelector(".accordion__button");

  btn.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
