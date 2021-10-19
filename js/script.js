const searchCategories = document.querySelectorAll(".btn-category");
const rtCategorories = document.querySelectorAll(".category-item");

rtCategorories.forEach((rtCategory) =>
  rtCategory.addEventListener("click", function () {
    if (rtCategory.classList.contains("active")) {
      rtCategory.classList.remove("active");
    } else {
      rtCategory.classList.add("active");
    }
  }),
);

searchCategories.forEach((searchCategory) =>
  searchCategory.addEventListener("click", function () {
    if (searchCategory.classList.contains("active")) {
      searchCategory.classList.remove("active");
    } else {
      searchCategory.classList.add("active");
    }
  }),
);

const links = document.querySelectorAll("a[href='#']");
links.forEach((link) => link.addEventListener("click", alertLink));

function alertLink() {
  alert("준비중입니다.");
}
