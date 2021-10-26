$(function () {
  // 준비중
  $("a[href='#']").each(function (index, item) {
    item.addEventListener("click", alertLink);
  });

  function alertLink() {
    alert("준비중입니다.");
  }

  // right-menu
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

  // site-map
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
      $("body").css({ height: "100vh", overflow: "hidden" });
      $(".search-menu").css({ height: "100%", overflow: "hidden" });
    }
  });

  // seach-menu event
  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= 270) {
      $(".search-menu-main")
        .css({
          position: "fixed",
          height: "100%",
          overflow: "scroll",
        })
        .scrollTop(270);
    } else {
      $(".search-menu-main").css({
        position: "absolute",
        height: "",
        overflow: "",
      });
    }
  });

  if ($(".search-menu-main").css("left") === "-550px") {
    $(".search-menu").removeClass("search-menu-main");
  } else {
    $(".search-menu").addClass("search-menu-main");
  }

  $(window).resize(function () {
    if ($(window).innerWidth() <= 1250) {
      $(".search-menu").removeClass("search-menu-main");
    } else {
      $(".search-menu").addClass("search-menu-main");
      if ($(".search-menu").hasClass("on")) {
        $(".search-menu").removeClass("on");
      }
    }
  });

  $(".search-pop").on("click", function () {
    if ($(".search-menu").hasClass("on")) {
      $(".search-menu").removeClass("on");
      $(".page-other, .page-main").css({ height: "", overflow: "" });
    } else {
      $(".search-menu").addClass("on");
      $(".page-other, .page-main").css({ height: "100%", overflow: "hidden" });
    }
  });

  // category btn event
  $(".btn-category").each(function (index, item) {
    item.addEventListener("click", function () {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
      }
    });
  });

  $(".category-item").each(function (index, item) {
    item.addEventListener("click", function () {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
      }
    });
  });

  // period-range
  $("input[type=range]").on("input", function () {
    var val = $(this).val();
    $(this).css(
      "background",
      "linear-gradient(to right, white 0%, white " +
        val +
        "%, #82a4ff " +
        val +
        "%, #82a4ff 100%)",
    );
  });

  $(".period-slider").on("input", function () {
    if ($(this).val() === "0") {
      $(".short").css({ display: "block" });
      $(".middle").css({ display: "none" });
      $(".long").css({ display: "none" });
    } else if ($(this).val() === "50") {
      $(".short").css({ display: "none" });
      $(".middle").css({ display: "block" });
      $(".long").css({ display: "none" });
    } else {
      $(".short").css({ display: "none" });
      $(".middle").css({ display: "none" });
      $(".long").css({ display: "block" });
    }
  });

  $(".lnb .nav > li").on("mouseover", function () {
    $(".lnb").addClass("over");
  });

  $(".lnb .depth a").on("mouseover", function () {
    $(".lnb").addClass("over");
  });

  $(".lnb .nav").on({
    mouseleave: function () {
      setTimeout(function () {
        $(".lnb").removeClass("over");
      }, 1000);
    },
  });
});
