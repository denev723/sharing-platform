jQuery(function ($) {
  // link #
  $("a[href='#']").each(function (index, item) {
    item.addEventListener("click", function () {
      alert("준비중입니다.");
    });
  });

  //   right-menu
  $(".btn-dot").each(function (index, item) {
    item.addEventListener("mouseover", function () {
      $(this).prev().css({ display: "inline" });
    });
    item.addEventListener("mouseout", function () {
      $(this).prev().css({ display: "none" });
    });
  });

  //   sitemap
  var sitemapOpen = $(".sitemap-open");
  var sitemapClose = $(".sitemap-close");

  sitemapOpen.on("click", function () {
    $(".site-map").addClass("on");
    $("body").css({ height: "100%", overflow: "hidden" });
  });

  sitemapClose.on("click", function () {
    $(".site-map").removeClass("on");
    $("body").css({ height: "", overflow: "" });
  });

  $(".site-map .bg").on("click", function () {
    $(".site-map").removeClass("on");
    $("body").css({ height: "", overflow: "" });
  });

  //   search-menu
  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= 275) {
      $(".page-main .search-menu")
        .css({
          position: "fixed",
          height: "100%",
          overflow: "scroll",
        })
        .scrollTop(275);
    } else {
      $(".page-main .search-menu").css({
        position: "absolute",
        height: "",
        overflow: "",
      });
    }
  });

  $(window).on("resize", function () {
    if ($(this).width() > 1250) {
      $(".page-main .search-menu").removeClass("on");
      $("body").css({ height: "", overflow: "" });
    }
  });

  $(".search-pop").on("click", function () {
    if ($(".search-menu").hasClass("on")) {
      $(".search-menu").removeClass("on");
      $("body").css({ height: "", overflow: "" });
    } else {
      $(".search-menu").addClass("on");
      $("body").css({ height: "100%", overflow: "hidden" });
    }
  });

  $(".search-menu .bg").on("click", function () {
    $(".search-menu").removeClass("on");
    $("body").css({ height: "", overflow: "" });
  });

  //   category-btn
  $(".btn-category, .category-item").each(function (index, item) {
    item.addEventListener("click", function () {
      if (!item.classList.contains("active")) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });

  // period-range
  $(".period-slider").on("input", function () {
    var val = $(this).val();
    $(".period-slider").css({
      background:
        "linear-gradient(to right, white 0%, white " +
        val +
        "%, #82a4ff " +
        val +
        "%, #82a4ff 100%)",
    });
  });

  // lnb
  $(".lnb .nav").on("mouseover", function () {
    $(".lnb").addClass("over");
    $(".site-header").css({
      "z-index": "9",
      "background-color": "#fff",
      height: "250px",
    });
  });

  $(".lnb .nav").on({
    mouseleave: function () {
      setTimeout(function () {
        $(".lnb").removeClass("over");
        $(".site-header").css({
          "z-index": "0",
          "background-color": "transparent",
          height: "",
        });
      }, 1000);
    },
  });
});
