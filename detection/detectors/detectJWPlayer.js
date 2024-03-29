(() => {
  "use strict";
  function t(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n;
  }
  function e(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return t(e);
      })(e) ||
      (function (t) {
        if (
          ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      })(e) ||
      (function (e, r) {
        if (e) {
          if ("string" == typeof e) return t(e, r);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? t(e, r)
              : void 0
          );
        }
      })(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  var r = function () {
    var t = [],
      r = new CustomEvent("detect_fromscript_result", {
        detail: { videos: t },
      });
    if (
      "function" == typeof window.jwplayer &&
      "function" == typeof window.jwplayer().getContainer
    ) {
      window.jwplayer().getContainer().classList.add("substital-vplayer");
      var n = document.querySelectorAll(".jw-title-primary"),
        o = ".substital-vplayer";
      if (window !== window.top) {
        var i = window.location.href,
          a = i.indexOf("embed"),
          l = i.substring(a);
        (o = 'iframe[src*="'.concat(l, '"]')),
          document.location.href.includes("vidoza.net") &&
            (o = 'iframe[src$="'.concat(l, '"]'));
      }
      window
        .jwplayer()
        .getPlaylist()
        .forEach(function (r, i) {
          var a = "";
          n[i] && (a = n[i].textContent),
            r.allSources
              ? r.allSources.forEach(function (r) {
                  "hls" !== r.type &&
                    "mpegURL" !== r.type &&
                    (t = [].concat(e(t), [
                      {
                        title: r.title || document.title || a,
                        player: "JWPlayer",
                        src: r.file.startsWith("//")
                          ? document.location.protocol + r.file
                          : r.file,
                        quality: r.label,
                        selector: o,
                        origin: window.location.href,
                      },
                    ]));
                })
              : r.file &&
                (t = [].concat(e(t), [
                  {
                    title: r.title || document.title || a,
                    player: "JWPlayer",
                    src: r.file.startsWith("//")
                      ? document.location.protocol + r.file
                      : r.file,
                    quality: "",
                    selector: o,
                    origin: window.location.href,
                  },
                ]));
        }),
        (r = new CustomEvent("detect_fromscript_result", {
          detail: { videos: t },
        })),
        document.dispatchEvent(r);
    } else document.dispatchEvent(r);
  };
  r(),
    document.addEventListener("detect_fromscript", function () {
      r();
    });
})();
