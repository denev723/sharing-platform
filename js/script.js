// const searchCategories = document.querySelectorAll(".btn-category");
// const rtCategorories = document.querySelectorAll(".category-item");

// rtCategorories.forEach((rtCategory) =>
//   rtCategory.addEventListener("click", function () {
//     if (rtCategory.classList.contains("active")) {
//       rtCategory.classList.remove("active");
//     } else {
//       rtCategory.classList.add("active");
//     }
//   }),
// );

// searchCategories.forEach((searchCategory) =>
//   searchCategory.addEventListener("click", function () {
//     if (searchCategory.classList.contains("active")) {
//       searchCategory.classList.remove("active");
//     } else {
//       searchCategory.classList.add("active");
//     }
//   }),
// );

$(function () {
  $("a[href='#']").each(function (index, item) {
    item.addEventListener("click", alertLink);
  });

  function alertLink() {
    alert("준비중입니다.");
  }

  $(".btn-dot").hover(
    function () {
      // over
      $(this).prev().css("display", "inline");
    },
    function () {
      // out
      $(this).prev().css("display", "none");
    },
  );
});
