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

  $(".search-pop").on("click", function () {
    if ($(".search-menu").hasClass("on")) {
      $(".search-menu").removeClass("on");
    } else {
      $(".search-menu").addClass("on");
    }
  });

  $(".sitemap-open").on("click", function () {
    $(".site-map").addClass("on");
  });

  $(".sitemap-close").on("click", function () {
    $(".site-map").removeClass("on");
    $("body > #wrap").css({ height: "", overflow: "" });
    $(".search-menu").css({ height: "", overflow: "" });
  });

  $(".site-map > .wrapper").on("scroll", function () {
    var top = $(this).scrollTop();
    if (top === 368) {
      $("body > #wrap").css({ height: "100vh", overflow: "hidden" });
      $(".search-menu").css({ height: "100%", overflow: "hidden" });
    }
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= 270) {
      $(".search-menu")
        .css({
          position: "fixed",
          height: "100%",
          overflow: "scroll",
        })
        .scrollTop(270);
    } else {
      $(".search-menu").css({
        position: "absolute",
        height: "",
        overflow: "",
      });
    }
  });

  $(".btn-category").each(function (index, item) {
    item.addEventListener("click", function () {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
      }
    });
  });
});
