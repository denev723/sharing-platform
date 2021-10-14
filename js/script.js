const btnCategories = document.querySelectorAll(".btn-category");
btnCategories.forEach((btnCategory) =>
  btnCategory.addEventListener("click", function () {
    if (btnCategory.classList.contains("btn-active")) {
      btnCategory.classList.remove("btn-active");
    } else {
      btnCategory.classList.add("btn-active");
    }
  }),
);

const links = document.querySelectorAll("a[href='#']");
links.forEach((link) => link.addEventListener("click", alertLink));

function alertLink() {
  alert("준비중입니다.");
}
