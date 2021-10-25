"use strict";

(function ($, console) {
  if (!console.log) {
    console.log = function () {};
  }

  $.lnb = {};

  $.extend($.lnb, {
    defaults: {
      hoverDelay: 500,
      overBodyClass: "lnb-over",
      overClass: "over",
      overObjs: null,
      onOver: null,
      onOverGetDepth2MaxHeight: null,
    },
    setDefaults: function (options) {
      $.extend($.modalBox.defaults, options);
    },
  });

  $.fn.lnb = function (options) {
    var config = $.extend(true, {}, $.lnb.defaults, options);
    var $body = $("body");

    return this.each(function () {
      var $lnb = $(this);
      var parentsUlCount = $lnb.parents("ul").size();

      $lnb.on("mouseover", "a", function () {
        var $item = $(this).parent();

        clearTimeoutFn();

        if (config.overBodyClass) {
          $body.addClass(config.overBodyClass);
        }

        if (config.overClass) {
          var $parentsAndSelf = $item.parents("li").andSelf();
          var $otherOverItems = $lnb
            .find("li." + config.overClass)
            .not($parentsAndSelf);
          $otherOverItems.removeClass(config.overClass);
          $parentsAndSelf.addClass(config.overClass);
        }

        if (typeof config.onOver === "function") {
          var depth = $item.parents("ul").size() - parentsUlCount;

          config.onOver(depth);
        }

        if (typeof config.onOverGetDepth2MaxHeight === "function") {
          var maxHeight = 0;

          $lnb.find(">ul>li>ul").each(function () {
            var height = $(this).outerHeight();

            if (maxHeight < height) {
              maxHeight = height;
            }
          });

          config.onOverGetDepth2MaxHeight(maxHeight);
        }
      });

      $lnb.on("mouseout", "a", setTimeoutFn);

      if (config.overObjs && config.overObjs.size()) {
        config.overObjs.on("mouseover", clearTimeoutFn);
        config.overObjs.on("mouseout", setTimeoutFn);
      }

      function setTimeoutFn() {
        clearTimeoutFn();

        $lnb.data(
          "timeout",
          setTimeout(function () {
            if (config.overBodyClass) {
              $body.removeClass(config.overBodyClass);
            }

            if (config.overClass) {
              var $otherOverItems = $lnb.find("li." + config.overClass);
              $otherOverItems.removeClass(config.overClass);
            }

            if (typeof config.onOut === "function") {
              config.onOut();
            }
          }, config.hoverDelay),
        );
      }

      function clearTimeoutFn() {
        var timeout = $lnb.data("timeout");

        if (timeout) {
          clearTimeout(timeout);
        }
      }
    });
  };
})(jQuery, window.console);
