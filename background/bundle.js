var background;
(() => {
  var e = {
      89: (e) => {
        var t = 9007199254740991,
          r = "[object Arguments]",
          n = "[object Function]",
          o = "[object GeneratorFunction]",
          i = /^(?:0|[1-9]\d*)$/;
        function a(e, t, r) {
          switch (r.length) {
            case 0:
              return e.call(t);
            case 1:
              return e.call(t, r[0]);
            case 2:
              return e.call(t, r[0], r[1]);
            case 3:
              return e.call(t, r[0], r[1], r[2]);
          }
          return e.apply(t, r);
        }
        var u = Object.prototype,
          c = u.hasOwnProperty,
          s = u.toString,
          l = u.propertyIsEnumerable,
          f = Math.max;
        function d(e, t) {
          var n =
              g(e) ||
              (function (e) {
                return (
                  (function (e) {
                    return (
                      (function (e) {
                        return !!e && "object" == typeof e;
                      })(e) && b(e)
                    );
                  })(e) &&
                  c.call(e, "callee") &&
                  (!l.call(e, "callee") || s.call(e) == r)
                );
              })(e)
                ? (function (e, t) {
                    for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
                    return n;
                  })(e.length, String)
                : [],
            o = n.length,
            i = !!o;
          for (var a in e)
            (!t && !c.call(e, a)) ||
              (i && ("length" == a || v(a, o))) ||
              n.push(a);
          return n;
        }
        function p(e, t, r) {
          var n = e[t];
          (c.call(e, t) && y(n, r) && (void 0 !== r || t in e)) || (e[t] = r);
        }
        function h(e) {
          if (!m(e))
            return (function (e) {
              var t = [];
              if (null != e) for (var r in Object(e)) t.push(r);
              return t;
            })(e);
          var t,
            r,
            n,
            o =
              ((r = (t = e) && t.constructor),
              (n = ("function" == typeof r && r.prototype) || u),
              t === n),
            i = [];
          for (var a in e)
            ("constructor" != a || (!o && c.call(e, a))) && i.push(a);
          return i;
        }
        function v(e, r) {
          return (
            !!(r = null == r ? t : r) &&
            ("number" == typeof e || i.test(e)) &&
            e > -1 &&
            e % 1 == 0 &&
            e < r
          );
        }
        function y(e, t) {
          return e === t || (e != e && t != t);
        }
        var g = Array.isArray;
        function b(e) {
          return (
            null != e &&
            (function (e) {
              return "number" == typeof e && e > -1 && e % 1 == 0 && e <= t;
            })(e.length) &&
            !(function (e) {
              var t = m(e) ? s.call(e) : "";
              return t == n || t == o;
            })(e)
          );
        }
        function m(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        var w,
          E,
          O,
          S =
            ((w = function (e, t) {
              !(function (e, t, r, n) {
                r || (r = {});
                for (var o = -1, i = t.length; ++o < i; ) {
                  var a = t[o],
                    u = n ? n(r[a], e[a], a, r, e) : void 0;
                  p(r, a, void 0 === u ? e[a] : u);
                }
              })(
                t,
                (function (e) {
                  return b(e) ? d(e, !0) : h(e);
                })(t),
                e
              );
            }),
            (E = function (e, t) {
              var r = -1,
                n = t.length,
                o = n > 1 ? t[n - 1] : void 0,
                i = n > 2 ? t[2] : void 0;
              for (
                o = w.length > 3 && "function" == typeof o ? (n--, o) : void 0,
                  i &&
                    (function (e, t, r) {
                      if (!m(r)) return !1;
                      var n = typeof t;
                      return (
                        !!("number" == n
                          ? b(r) && v(t, r.length)
                          : "string" == n && (t in r)) && y(r[t], e)
                      );
                    })(t[0], t[1], i) &&
                    ((o = n < 3 ? void 0 : o), (n = 1)),
                  e = Object(e);
                ++r < n;

              ) {
                var a = t[r];
                a && w(e, a, r, o);
              }
              return e;
            }),
            (O = f(void 0 === O ? E.length - 1 : O, 0)),
            function () {
              for (
                var e = arguments, t = -1, r = f(e.length - O, 0), n = Array(r);
                ++t < r;

              )
                n[t] = e[O + t];
              t = -1;
              for (var o = Array(O + 1); ++t < O; ) o[t] = e[t];
              return (o[O] = n), a(E, this, o);
            });
        e.exports = S;
      },
      574: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            return function () {
              return function (t) {
                return function (r) {
                  var n = e[r.type];
                  return t(n ? n(r) : r);
                };
              };
            };
          });
      },
      151: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        (t.DISPATCH_TYPE = "chromex.dispatch"),
          (t.STATE_TYPE = "chromex.state"),
          (t.PATCH_STATE_TYPE = "chromex.patch_state");
      },
      968: (e, t, r) => {
        "use strict";
        t.IF = void 0;
        var n = u(r(105)),
          o = u(r(854)),
          i = u(r(945)),
          a = u(r(574));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        n.default, o.default, (t.IF = i.default), a.default;
      },
      468: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          n = (t.noop = function (e) {
            return e;
          }),
          o = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : n;
            return r({}, e, e.payload ? { payload: t(e.payload) } : {});
          },
          i = function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : n,
              r = arguments[2];
            return r
              ? function (n) {
                  for (
                    var i = arguments.length,
                      a = Array(i > 1 ? i - 1 : 0),
                      u = 1;
                    u < i;
                    u++
                  )
                    a[u - 1] = arguments[u];
                  return r.apply(void 0, [n].concat(a))
                    ? e.apply(void 0, [o(n, t)].concat(a))
                    : e.apply(void 0, [n].concat(a));
                }
              : function (r) {
                  for (
                    var n = arguments.length,
                      i = Array(n > 1 ? n - 1 : 0),
                      a = 1;
                    a < n;
                    a++
                  )
                    i[a - 1] = arguments[a];
                  return e.apply(void 0, [o(r, t)].concat(i));
                };
          };
        (t.withDeserializer = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
          return function (t) {
            return function (r, n) {
              return t(i(r, e, n));
            };
          };
        }),
          (t.withSerializer = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : n;
            return function (t) {
              var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              return function () {
                for (var n = arguments.length, i = Array(n), a = 0; a < n; a++)
                  i[a] = arguments[a];
                if (i.length <= r)
                  throw new Error(
                    "Message in request could not be serialized. Expected message in position " +
                      r +
                      " but only received " +
                      i.length +
                      " args."
                  );
                return (i[r] = o(i[r], e)), t.apply(void 0, i);
              };
            };
          });
      },
      105: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = (function () {
            function e(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n);
              }
            }
            return function (t, r, n) {
              return r && e(t.prototype, r), n && e(t, n), t;
            };
          })(),
          o = c(r(89)),
          i = r(151),
          a = r(468),
          u = c(r(373));
        function c(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var s = (function () {
          function e(t) {
            var r = this,
              n = t.portName,
              o = t.state,
              c = void 0 === o ? {} : o,
              s = t.extensionId,
              l = void 0 === s ? null : s,
              f = t.serializer,
              d = void 0 === f ? a.noop : f,
              p = t.deserializer,
              h = void 0 === p ? a.noop : p,
              v = t.patchStrategy,
              y = void 0 === v ? u.default : v;
            if (
              ((function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              !n)
            )
              throw new Error("portName is required in options");
            if ("function" != typeof d)
              throw new Error("serializer must be a function");
            if ("function" != typeof h)
              throw new Error("deserializer must be a function");
            if ("function" != typeof y)
              throw new Error(
                "patchStrategy must be one of the included patching strategies or a custom patching function"
              );
            (this.portName = n),
              (this.readyResolved = !1),
              (this.readyPromise = new Promise(function (e) {
                return (r.readyResolve = e);
              })),
              (this.extensionId = l),
              (this.port = chrome.runtime.connect(this.extensionId, {
                name: n,
              })),
              (this.safetyHandler = this.safetyHandler.bind(this)),
              (this.safetyMessage = chrome.runtime.onMessage.addListener(
                this.safetyHandler
              )),
              (this.serializedPortListener = (0, a.withDeserializer)(h)(
                function () {
                  var e;
                  return (e = r.port.onMessage).addListener.apply(e, arguments);
                }
              )),
              (this.serializedMessageSender = (0, a.withSerializer)(d)(
                function () {
                  var e;
                  return (e = chrome.runtime).sendMessage.apply(e, arguments);
                },
                1
              )),
              (this.listeners = []),
              (this.state = c),
              (this.patchStrategy = y),
              this.serializedPortListener(function (e) {
                switch (e.type) {
                  case i.STATE_TYPE:
                    r.replaceState(e.payload),
                      r.readyResolved ||
                        ((r.readyResolved = !0), r.readyResolve());
                    break;
                  case i.PATCH_STATE_TYPE:
                    r.patchState(e.payload);
                }
              }),
              (this.dispatch = this.dispatch.bind(this));
          }
          return (
            n(e, [
              {
                key: "ready",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : null;
                  return null !== e
                    ? this.readyPromise.then(e)
                    : this.readyPromise;
                },
              },
              {
                key: "subscribe",
                value: function (e) {
                  var t = this;
                  return (
                    this.listeners.push(e),
                    function () {
                      t.listeners = t.listeners.filter(function (t) {
                        return t !== e;
                      });
                    }
                  );
                },
              },
              {
                key: "patchState",
                value: function (e) {
                  (this.state = this.patchStrategy(this.state, e)),
                    this.listeners.forEach(function (e) {
                      return e();
                    });
                },
              },
              {
                key: "replaceState",
                value: function (e) {
                  (this.state = e),
                    this.listeners.forEach(function (e) {
                      return e();
                    });
                },
              },
              {
                key: "getState",
                value: function () {
                  return this.state;
                },
              },
              { key: "replaceReducer", value: function () {} },
              {
                key: "dispatch",
                value: function (e) {
                  var t = this;
                  return new Promise(function (r, n) {
                    t.serializedMessageSender(
                      t.extensionId,
                      {
                        type: i.DISPATCH_TYPE,
                        portName: t.portName,
                        payload: e,
                      },
                      null,
                      function (e) {
                        var t = e.error,
                          i = e.value;
                        if (t) {
                          var a = new Error(
                            "\nLooks like there is an error in the background page. You might want to inspect your background page for more details.\n" +
                              t
                          );
                          n((0, o.default)(a, t));
                        } else r(i && i.payload);
                      }
                    );
                  });
                },
              },
              {
                key: "safetyHandler",
                value: function (e) {
                  "storeReady" === e.action &&
                    (chrome.runtime.onMessage.removeListener(
                      this.safetyHandler
                    ),
                    this.readyResolved ||
                      ((this.readyResolved = !0), this.readyResolve()));
                },
              },
            ]),
            e
          );
        })();
        t.default = s;
      },
      854: (e, t) => {
        "use strict";
        function r(e) {
          if (Array.isArray(e)) {
            for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
            return r;
          }
          return Array.from(e);
        }
        function n() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return 0 === t.length
            ? function (e) {
                return e;
              }
            : 1 === t.length
            ? t[0]
            : t.reduce(function (e, t) {
                return function () {
                  return e(t.apply(void 0, arguments));
                };
              });
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            for (
              var t = arguments.length, o = Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              o[i - 1] = arguments[i];
            var a = function () {
                throw new Error(
                  "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch."
                );
              },
              u = {
                getState: e.getState.bind(e),
                dispatch: function () {
                  return a.apply(void 0, arguments);
                },
              };
            return (
              (o = (o || []).map(function (e) {
                return e(u);
              })),
              (a = n.apply(void 0, r(o))(e.dispatch)),
              (e.dispatch = a),
              e
            );
          });
      },
      406: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        (t.DIFF_STATUS_UPDATED = "updated"),
          (t.DIFF_STATUS_REMOVED = "removed"),
          (t.DIFF_STATUS_KEYS_UPDATED = "updated_keys");
      },
      148: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e, t) {
            var r = [];
            return (
              Object.keys(t).forEach(function (o) {
                e[o] !== t[o] &&
                  r.push({
                    key: o,
                    value: t[o],
                    change: n.DIFF_STATUS_UPDATED,
                  });
              }),
              Object.keys(e).forEach(function (e) {
                t.hasOwnProperty(e) ||
                  r.push({ key: e, change: n.DIFF_STATUS_REMOVED });
              }),
              r
            );
          });
        var n = r(406);
      },
      373: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e, t) {
            var r = Object.assign({}, e);
            return (
              t.forEach(function (e) {
                var t = e.change,
                  o = e.key,
                  i = e.value;
                switch (t) {
                  case n.DIFF_STATUS_UPDATED:
                    r[o] = i;
                    break;
                  case n.DIFF_STATUS_REMOVED:
                    Reflect.deleteProperty(r, o);
                }
              }),
              r
            );
          });
        var n = r(406);
      },
      945: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          o = r(151),
          i = r(468),
          a = r(148),
          u = (n = a) && n.__esModule ? n : { default: n };
        var c = function (e, t) {
          Promise.resolve(e)
            .then(function (e) {
              t({ error: null, value: e });
            })
            .catch(function (e) {
              t({ error: e.message, value: null });
            });
        };
        t.default = function (e, t) {
          var r = t.portName,
            n = t.dispatchResponder,
            a = t.serializer,
            s = void 0 === a ? i.noop : a,
            l = t.deserializer,
            f = void 0 === l ? i.noop : l,
            d = t.diffStrategy,
            p = void 0 === d ? u.default : d;
          if (!r) throw new Error("portName is required in options");
          if ("function" != typeof s)
            throw new Error("serializer must be a function");
          if ("function" != typeof f)
            throw new Error("deserializer must be a function");
          if ("function" != typeof p)
            throw new Error(
              "diffStrategy must be one of the included diffing strategies or a custom diff function"
            );
          n || (n = c);
          var h = function (t, i, a) {
              if (t.type === o.DISPATCH_TYPE && t.portName === r) {
                var u = Object.assign({}, t.payload, { _sender: i }),
                  c = null;
                try {
                  c = e.dispatch(u);
                } catch (e) {
                  c = Promise.reject(e.message);
                }
                return n(c, a), !0;
              }
            },
            v = function (t) {
              if (t.name === r) {
                var n = (0, i.withSerializer)(s)(function () {
                    return t.postMessage.apply(t, arguments);
                  }),
                  a = e.getState(),
                  u = e.subscribe(function () {
                    var t = e.getState(),
                      r = p(a, t);
                    r.length &&
                      ((a = t), n({ type: o.PATCH_STATE_TYPE, payload: r }));
                  });
                t.onDisconnect.addListener(u),
                  n({ type: o.STATE_TYPE, payload: a });
              }
            },
            y = (0, i.withDeserializer)(f),
            g = function (e) {
              return e.type === o.DISPATCH_TYPE && e.portName === r;
            };
          y(function () {
            var e;
            return (e = chrome.runtime.onMessage).addListener.apply(
              e,
              arguments
            );
          })(h, g),
            chrome.runtime.onMessageExternal &&
              y(function () {
                var e;
                return (e = chrome.runtime.onMessageExternal).addListener.apply(
                  e,
                  arguments
                );
              })(h, g),
            chrome.runtime.onConnect.addListener(v),
            chrome.runtime.onConnectExternal &&
              chrome.runtime.onConnectExternal.addListener(v),
            chrome.tabs.query({}, function (e) {
              var t = !0,
                r = !1,
                n = void 0;
              try {
                for (
                  var o, i = e[Symbol.iterator]();
                  !(t = (o = i.next()).done);
                  t = !0
                ) {
                  var a = o.value;
                  chrome.tabs.sendMessage(a.id, { action: "storeReady" });
                }
              } catch (e) {
                (r = !0), (n = e);
              } finally {
                try {
                  !t && i.return && i.return();
                } finally {
                  if (r) throw n;
                }
              }
            });
        };
      },
      500: function (e, t, r) {
        !(function (e) {
          "use strict";
          function t(e, t) {
            (e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }));
          }
          function n(e, t) {
            Object.defineProperty(this, "kind", { value: e, enumerable: !0 }),
              t &&
                t.length &&
                Object.defineProperty(this, "path", {
                  value: t,
                  enumerable: !0,
                });
          }
          function o(e, t, r) {
            o.super_.call(this, "E", e),
              Object.defineProperty(this, "lhs", { value: t, enumerable: !0 }),
              Object.defineProperty(this, "rhs", { value: r, enumerable: !0 });
          }
          function i(e, t) {
            i.super_.call(this, "N", e),
              Object.defineProperty(this, "rhs", { value: t, enumerable: !0 });
          }
          function a(e, t) {
            a.super_.call(this, "D", e),
              Object.defineProperty(this, "lhs", { value: t, enumerable: !0 });
          }
          function u(e, t, r) {
            u.super_.call(this, "A", e),
              Object.defineProperty(this, "index", {
                value: t,
                enumerable: !0,
              }),
              Object.defineProperty(this, "item", { value: r, enumerable: !0 });
          }
          function c(e, t, r) {
            var n = e.slice((r || t) + 1 || e.length);
            return (e.length = t < 0 ? e.length + t : t), e.push.apply(e, n), e;
          }
          function s(e) {
            var t = void 0 === e ? "undefined" : D(e);
            return "object" !== t
              ? t
              : e === Math
              ? "math"
              : null === e
              ? "null"
              : Array.isArray(e)
              ? "array"
              : "[object Date]" === Object.prototype.toString.call(e)
              ? "date"
              : "function" == typeof e.toString && /^\/.*\//.test(e.toString())
              ? "regexp"
              : "object";
          }
          function l(e, t, r, n, f, d, p) {
            p = p || [];
            var h = (f = f || []).slice(0);
            if (void 0 !== d) {
              if (n) {
                if ("function" == typeof n && n(h, d)) return;
                if ("object" === (void 0 === n ? "undefined" : D(n))) {
                  if (n.prefilter && n.prefilter(h, d)) return;
                  if (n.normalize) {
                    var v = n.normalize(h, d, e, t);
                    v && ((e = v[0]), (t = v[1]));
                  }
                }
              }
              h.push(d);
            }
            "regexp" === s(e) &&
              "regexp" === s(t) &&
              ((e = e.toString()), (t = t.toString()));
            var y = void 0 === e ? "undefined" : D(e),
              g = void 0 === t ? "undefined" : D(t),
              b =
                "undefined" !== y ||
                (p &&
                  p[p.length - 1].lhs &&
                  p[p.length - 1].lhs.hasOwnProperty(d)),
              m =
                "undefined" !== g ||
                (p &&
                  p[p.length - 1].rhs &&
                  p[p.length - 1].rhs.hasOwnProperty(d));
            if (!b && m) r(new i(h, t));
            else if (!m && b) r(new a(h, e));
            else if (s(e) !== s(t)) r(new o(h, e, t));
            else if ("date" === s(e) && e - t != 0) r(new o(h, e, t));
            else if ("object" === y && null !== e && null !== t)
              if (
                p.filter(function (t) {
                  return t.lhs === e;
                }).length
              )
                e !== t && r(new o(h, e, t));
              else {
                if ((p.push({ lhs: e, rhs: t }), Array.isArray(e))) {
                  var w;
                  for (e.length, w = 0; w < e.length; w++)
                    w >= t.length
                      ? r(new u(h, w, new a(void 0, e[w])))
                      : l(e[w], t[w], r, n, h, w, p);
                  for (; w < t.length; ) r(new u(h, w, new i(void 0, t[w++])));
                } else {
                  var E = Object.keys(e),
                    O = Object.keys(t);
                  E.forEach(function (o, i) {
                    var a = O.indexOf(o);
                    a >= 0
                      ? (l(e[o], t[o], r, n, h, o, p), (O = c(O, a)))
                      : l(e[o], void 0, r, n, h, o, p);
                  }),
                    O.forEach(function (e) {
                      l(void 0, t[e], r, n, h, e, p);
                    });
                }
                p.length = p.length - 1;
              }
            else
              e !== t &&
                (("number" === y && isNaN(e) && isNaN(t)) || r(new o(h, e, t)));
          }
          function f(e, t, r, n) {
            return (
              (n = n || []),
              l(
                e,
                t,
                function (e) {
                  e && n.push(e);
                },
                r
              ),
              n.length ? n : void 0
            );
          }
          function d(e, t, r) {
            if (r.path && r.path.length) {
              var n,
                o = e[t],
                i = r.path.length - 1;
              for (n = 0; n < i; n++) o = o[r.path[n]];
              switch (r.kind) {
                case "A":
                  d(o[r.path[n]], r.index, r.item);
                  break;
                case "D":
                  delete o[r.path[n]];
                  break;
                case "E":
                case "N":
                  o[r.path[n]] = r.rhs;
              }
            } else
              switch (r.kind) {
                case "A":
                  d(e[t], r.index, r.item);
                  break;
                case "D":
                  e = c(e, t);
                  break;
                case "E":
                case "N":
                  e[t] = r.rhs;
              }
            return e;
          }
          function p(e, t, r) {
            if (e && t && r && r.kind) {
              for (
                var n = e, o = -1, i = r.path ? r.path.length - 1 : 0;
                ++o < i;

              )
                void 0 === n[r.path[o]] &&
                  (n[r.path[o]] = "number" == typeof r.path[o] ? [] : {}),
                  (n = n[r.path[o]]);
              switch (r.kind) {
                case "A":
                  d(r.path ? n[r.path[o]] : n, r.index, r.item);
                  break;
                case "D":
                  delete n[r.path[o]];
                  break;
                case "E":
                case "N":
                  n[r.path[o]] = r.rhs;
              }
            }
          }
          function h(e, t, r) {
            if (r.path && r.path.length) {
              var n,
                o = e[t],
                i = r.path.length - 1;
              for (n = 0; n < i; n++) o = o[r.path[n]];
              switch (r.kind) {
                case "A":
                  h(o[r.path[n]], r.index, r.item);
                  break;
                case "D":
                case "E":
                  o[r.path[n]] = r.lhs;
                  break;
                case "N":
                  delete o[r.path[n]];
              }
            } else
              switch (r.kind) {
                case "A":
                  h(e[t], r.index, r.item);
                  break;
                case "D":
                case "E":
                  e[t] = r.lhs;
                  break;
                case "N":
                  e = c(e, t);
              }
            return e;
          }
          function v(e, t, r) {
            if (e && t && r && r.kind) {
              var n,
                o,
                i = e;
              for (o = r.path.length - 1, n = 0; n < o; n++)
                void 0 === i[r.path[n]] && (i[r.path[n]] = {}),
                  (i = i[r.path[n]]);
              switch (r.kind) {
                case "A":
                  h(i[r.path[n]], r.index, r.item);
                  break;
                case "D":
                case "E":
                  i[r.path[n]] = r.lhs;
                  break;
                case "N":
                  delete i[r.path[n]];
              }
            }
          }
          function y(e, t, r) {
            e &&
              t &&
              l(e, t, function (n) {
                (r && !r(e, t, n)) || p(e, t, n);
              });
          }
          function g(e) {
            return "color: " + N[e].color + "; font-weight: bold";
          }
          function b(e) {
            var t = e.kind,
              r = e.path,
              n = e.lhs,
              o = e.rhs,
              i = e.index,
              a = e.item;
            switch (t) {
              case "E":
                return [r.join("."), n, "\u2192", o];
              case "N":
                return [r.join("."), o];
              case "D":
                return [r.join(".")];
              case "A":
                return [r.join(".") + "[" + i + "]", a];
              default:
                return [];
            }
          }
          function m(e, t, r, n) {
            var o = f(e, t);
            try {
              n ? r.groupCollapsed("diff") : r.group("diff");
            } catch (e) {
              r.log("diff");
            }
            o
              ? o.forEach(function (e) {
                  var t = e.kind,
                    n = b(e);
                  r.log.apply(r, ["%c " + N[t].text, g(t)].concat(I(n)));
                })
              : r.log("\u2014\u2014 no diff \u2014\u2014");
            try {
              r.groupEnd();
            } catch (e) {
              r.log("\u2014\u2014 diff end \u2014\u2014 ");
            }
          }
          function w(e, t, r, n) {
            switch (void 0 === e ? "undefined" : D(e)) {
              case "object":
                return "function" == typeof e[n] ? e[n].apply(e, I(r)) : e[n];
              case "function":
                return e(t);
              default:
                return e;
            }
          }
          function E(e) {
            var t = e.timestamp,
              r = e.duration;
            return function (e, n, o) {
              var i = ["action"];
              return (
                i.push("%c" + String(e.type)),
                t && i.push("%c@ " + n),
                r && i.push("%c(in " + o.toFixed(2) + " ms)"),
                i.join(" ")
              );
            };
          }
          function O(e, t) {
            var r = t.logger,
              n = t.actionTransformer,
              o = t.titleFormatter,
              i = void 0 === o ? E(t) : o,
              a = t.collapsed,
              u = t.colors,
              c = t.level,
              s = t.diff,
              l = void 0 === t.titleFormatter;
            e.forEach(function (o, f) {
              var d = o.started,
                p = o.startedTime,
                h = o.action,
                v = o.prevState,
                y = o.error,
                g = o.took,
                b = o.nextState,
                E = e[f + 1];
              E && ((b = E.prevState), (g = E.started - d));
              var O = n(h),
                S =
                  "function" == typeof a
                    ? a(
                        function () {
                          return b;
                        },
                        h,
                        o
                      )
                    : a,
                T = P(p),
                j = u.title ? "color: " + u.title(O) + ";" : "",
                _ = ["color: gray; font-weight: lighter;"];
              _.push(j),
                t.timestamp && _.push("color: gray; font-weight: lighter;"),
                t.duration && _.push("color: gray; font-weight: lighter;");
              var A = i(O, T, g);
              try {
                S
                  ? u.title && l
                    ? r.groupCollapsed.apply(r, ["%c " + A].concat(_))
                    : r.groupCollapsed(A)
                  : u.title && l
                  ? r.group.apply(r, ["%c " + A].concat(_))
                  : r.group(A);
              } catch (e) {
                r.log(A);
              }
              var x = w(c, O, [v], "prevState"),
                D = w(c, O, [O], "action"),
                I = w(c, O, [y, v], "error"),
                k = w(c, O, [b], "nextState");
              if (x)
                if (u.prevState) {
                  var N = "color: " + u.prevState(v) + "; font-weight: bold";
                  r[x]("%c prev state", N, v);
                } else r[x]("prev state", v);
              if (D)
                if (u.action) {
                  var R = "color: " + u.action(O) + "; font-weight: bold";
                  r[D]("%c action    ", R, O);
                } else r[D]("action    ", O);
              if (y && I)
                if (u.error) {
                  var M = "color: " + u.error(y, v) + "; font-weight: bold;";
                  r[I]("%c error     ", M, y);
                } else r[I]("error     ", y);
              if (k)
                if (u.nextState) {
                  var C = "color: " + u.nextState(b) + "; font-weight: bold";
                  r[k]("%c next state", C, b);
                } else r[k]("next state", b);
              s && m(v, b, r, S);
              try {
                r.groupEnd();
              } catch (e) {
                r.log("\u2014\u2014 log end \u2014\u2014");
              }
            });
          }
          function S() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = Object.assign({}, R, e),
              r = t.logger,
              n = t.stateTransformer,
              o = t.errorTransformer,
              i = t.predicate,
              a = t.logErrors,
              u = t.diffPredicate;
            if (void 0 === r)
              return function () {
                return function (e) {
                  return function (t) {
                    return e(t);
                  };
                };
              };
            if (e.getState && e.dispatch)
              return function () {
                return function (e) {
                  return function (t) {
                    return e(t);
                  };
                };
              };
            var c = [];
            return function (e) {
              var r = e.getState;
              return function (e) {
                return function (s) {
                  if ("function" == typeof i && !i(r, s)) return e(s);
                  var l = {};
                  c.push(l),
                    (l.started = x.now()),
                    (l.startedTime = new Date()),
                    (l.prevState = n(r())),
                    (l.action = s);
                  var f = void 0;
                  if (a)
                    try {
                      f = e(s);
                    } catch (e) {
                      l.error = o(e);
                    }
                  else f = e(s);
                  (l.took = x.now() - l.started), (l.nextState = n(r()));
                  var d = t.diff && "function" == typeof u ? u(r, s) : t.diff;
                  if (
                    (O(c, Object.assign({}, t, { diff: d })),
                    (c.length = 0),
                    l.error)
                  )
                    throw l.error;
                  return f;
                };
              };
            };
          }
          var T,
            j,
            _ = function (e, t) {
              return new Array(t + 1).join(e);
            },
            A = function (e, t) {
              return _("0", t - e.toString().length) + e;
            },
            P = function (e) {
              return (
                A(e.getHours(), 2) +
                ":" +
                A(e.getMinutes(), 2) +
                ":" +
                A(e.getSeconds(), 2) +
                "." +
                A(e.getMilliseconds(), 3)
              );
            },
            x =
              "undefined" != typeof performance &&
              null !== performance &&
              "function" == typeof performance.now
                ? performance
                : Date,
            D =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  },
            I = function (e) {
              if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++)
                  r[t] = e[t];
                return r;
              }
              return Array.from(e);
            },
            k = [];
          (T =
            "object" === (void 0 === r.g ? "undefined" : D(r.g)) && r.g
              ? r.g
              : "undefined" != typeof window
              ? window
              : {}),
            (j = T.DeepDiff) &&
              k.push(function () {
                void 0 !== j &&
                  T.DeepDiff === f &&
                  ((T.DeepDiff = j), (j = void 0));
              }),
            t(o, n),
            t(i, n),
            t(a, n),
            t(u, n),
            Object.defineProperties(f, {
              diff: { value: f, enumerable: !0 },
              observableDiff: { value: l, enumerable: !0 },
              applyDiff: { value: y, enumerable: !0 },
              applyChange: { value: p, enumerable: !0 },
              revertChange: { value: v, enumerable: !0 },
              isConflict: {
                value: function () {
                  return void 0 !== j;
                },
                enumerable: !0,
              },
              noConflict: {
                value: function () {
                  return (
                    k &&
                      (k.forEach(function (e) {
                        e();
                      }),
                      (k = null)),
                    f
                  );
                },
                enumerable: !0,
              },
            });
          var N = {
              E: { color: "#2196F3", text: "CHANGED:" },
              N: { color: "#4CAF50", text: "ADDED:" },
              D: { color: "#F44336", text: "DELETED:" },
              A: { color: "#2196F3", text: "ARRAY:" },
            },
            R = {
              level: "log",
              logger: console,
              logErrors: !0,
              collapsed: void 0,
              predicate: void 0,
              duration: !1,
              timestamp: !0,
              stateTransformer: function (e) {
                return e;
              },
              actionTransformer: function (e) {
                return e;
              },
              errorTransformer: function (e) {
                return e;
              },
              colors: {
                title: function () {
                  return "inherit";
                },
                prevState: function () {
                  return "#9E9E9E";
                },
                action: function () {
                  return "#03A9F4";
                },
                nextState: function () {
                  return "#4CAF50";
                },
                error: function () {
                  return "#F20404";
                },
              },
              diff: !1,
              diffPredicate: void 0,
              transformer: void 0,
            },
            M = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.dispatch,
                r = e.getState;
              return "function" == typeof t || "function" == typeof r
                ? S()({ dispatch: t, getState: r })
                : void 0;
            };
          (e.defaults = R),
            (e.createLogger = S),
            (e.logger = M),
            (e.default = M),
            Object.defineProperty(e, "__esModule", { value: !0 });
        })(t);
      },
      121: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => n }), (e = r.hmd(e));
        const n = (function (e) {
          var t,
            r = e.Symbol;
          return (
            "function" == typeof r
              ? r.observable
                ? (t = r.observable)
                : ((t = r("observable")), (r.observable = t))
              : (t = "@@observable"),
            t
          );
        })(
          "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : void 0 !== r.g
            ? r.g
            : e
        );
      },
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var i = (t[n] = { id: n, loaded: !1, exports: {} });
    return e[n].call(i.exports, i, i.exports, r), (i.loaded = !0), i.exports;
  }
  (r.d = (e, t) => {
    for (var n in t)
      r.o(t, n) &&
        !r.o(e, n) &&
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
  }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
          throw new Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              e.id
          );
        },
      }),
      e
    )),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  var n = {};
  (() => {
    "use strict";
    function e(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    function t(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    function o(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return t(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
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
    function i(e) {
      return function (t) {
        var r = t.dispatch,
          n = t.getState;
        return function (t) {
          return function (o) {
            return "function" == typeof o ? o(r, n, e) : t(o);
          };
        };
      };
    }
    r.r(n), r.d(n, { injectSubstital: () => K });
    var a = i();
    a.withExtraArgument = i;
    const u = a;
    r(500);
    var c = r(121),
      s = function () {
        return Math.random().toString(36).substring(7).split("").join(".");
      },
      l = {
        INIT: "@@redux/INIT" + s(),
        REPLACE: "@@redux/REPLACE" + s(),
        PROBE_UNKNOWN_ACTION: function () {
          return "@@redux/PROBE_UNKNOWN_ACTION" + s();
        },
      };
    function f(e) {
      if ("object" != typeof e || null === e) return !1;
      for (var t = e; null !== Object.getPrototypeOf(t); )
        t = Object.getPrototypeOf(t);
      return Object.getPrototypeOf(e) === t;
    }
    function d(e, t, r) {
      var n;
      if (
        ("function" == typeof t && "function" == typeof r) ||
        ("function" == typeof r && "function" == typeof arguments[3])
      )
        throw new Error(
          "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function."
        );
      if (
        ("function" == typeof t && void 0 === r && ((r = t), (t = void 0)),
        void 0 !== r)
      ) {
        if ("function" != typeof r)
          throw new Error("Expected the enhancer to be a function.");
        return r(d)(e, t);
      }
      if ("function" != typeof e)
        throw new Error("Expected the reducer to be a function.");
      var o = e,
        i = t,
        a = [],
        u = a,
        s = !1;
      function p() {
        u === a && (u = a.slice());
      }
      function h() {
        if (s)
          throw new Error(
            "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store."
          );
        return i;
      }
      function v(e) {
        if ("function" != typeof e)
          throw new Error("Expected the listener to be a function.");
        if (s)
          throw new Error(
            "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details."
          );
        var t = !0;
        return (
          p(),
          u.push(e),
          function () {
            if (t) {
              if (s)
                throw new Error(
                  "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details."
                );
              (t = !1), p();
              var r = u.indexOf(e);
              u.splice(r, 1), (a = null);
            }
          }
        );
      }
      function y(e) {
        if (!f(e))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (void 0 === e.type)
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (s) throw new Error("Reducers may not dispatch actions.");
        try {
          (s = !0), (i = o(i, e));
        } finally {
          s = !1;
        }
        for (var t = (a = u), r = 0; r < t.length; r++) {
          (0, t[r])();
        }
        return e;
      }
      function g(e) {
        if ("function" != typeof e)
          throw new Error("Expected the nextReducer to be a function.");
        (o = e), y({ type: l.REPLACE });
      }
      function b() {
        var e,
          t = v;
        return (
          ((e = {
            subscribe: function (e) {
              if ("object" != typeof e || null === e)
                throw new TypeError("Expected the observer to be an object.");
              function r() {
                e.next && e.next(h());
              }
              return r(), { unsubscribe: t(r) };
            },
          })[c.Z] = function () {
            return this;
          }),
          e
        );
      }
      return (
        y({ type: l.INIT }),
        ((n = { dispatch: y, subscribe: v, getState: h, replaceReducer: g })[
          c.Z
        ] = b),
        n
      );
    }
    function p(e, t) {
      var r = t && t.type;
      return (
        "Given " +
        ((r && 'action "' + String(r) + '"') || "an action") +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
      );
    }
    function h(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    function v(e, t) {
      var r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          r.push.apply(r, Object.getOwnPropertySymbols(e)),
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
        r
      );
    }
    function y(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? v(r, !0).forEach(function (t) {
              h(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : v(r).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function g() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return 0 === t.length
        ? function (e) {
            return e;
          }
        : 1 === t.length
        ? t[0]
        : t.reduce(function (e, t) {
            return function () {
              return e(t.apply(void 0, arguments));
            };
          });
    }
    function b() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (e) {
        return function () {
          var r = e.apply(void 0, arguments),
            n = function () {
              throw new Error(
                "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch."
              );
            },
            o = {
              getState: r.getState,
              dispatch: function () {
                return n.apply(void 0, arguments);
              },
            },
            i = t.map(function (e) {
              return e(o);
            });
          return y({}, r, { dispatch: (n = g.apply(void 0, i)(r.dispatch)) });
        };
      };
    }
    var m = r(968),
      w = "INCR_LOADED_COUNT",
      E = "SET_ASKED_TO_RATE",
      O = "SET_POPUP_TAB",
      S = "SET_IS_DETECTING",
      T = "SET_DETECTION_ERROR",
      j = "SET_DETECTION_ERROR_MESSAGE",
      _ = "RECEIVE_VIDEOS",
      A = "ADD_VIDEOS",
      P = "SELECT_VIDEO",
      x = "CLEAR_VIDEOS",
      D = "RECEIVE_NOTIFICATIONS",
      I = "SET_NOTIFICATIONS_READ",
      k = "SET_PREFERRED_SUBTITLE_LANGUAGE",
      N = "SET_FLASH_MESSAGE",
      R = "SET_FLASH_TYPE",
      M = "SET_SUBTITLES_FONT_SIZE_RATIO",
      C = "SET_SUBTITLES_FONT_COLOR",
      F = "SET_SUBTITLES_BG_COLOR",
      L = "HOME",
      U = "INFO";
    function z() {
      return function (e) {
        return (
          e({ type: "REQUEST_NOTIFICATIONS" }),
          new Promise(function (e) {
            setTimeout(function () {
              e([
                {
                  text: "Update! (Nov 28, 2022) - The issue with HBO Max is fixed. You can now use Subsital on this platform again.",
                  id: 8,
                  sentOn: 1667752134284,
                },
                {
                  text: 'New! Disney+ is now officially supported! Our website also got a new fresh look, including a blog and a FAQ. Visit it here: <a target="_blank" href="https://substital.com">substital.com</a>',
                  id: 7,
                  sentOn: 1638711557233,
                },
                {
                  text: "Update! We fixed the issue with Netflix",
                  id: 6,
                  sentOn: 1631720055858,
                },
                {
                  text: 'We have partnered with Toucan! <a target="_blank" href="https://jointoucan.com/partners/substital">Download the FREE chrome extension</a> to support Substital!',
                  id: 5,
                  sentOn: 1615487122816,
                },
                {
                  text: "Update! (Oct 2020).                    \n             Fixed an issue with Amazon Prime Video.\n             Added a button to choose more conveniently your own subtitles files (instead of drag & drop only).\n             Minor user interface changes.\n             Fixed an issue where the video would sometimes be shifted to the top on Netflix after injecting Substital.\n             Fixed an issue with V LIVE.",
                  id: 4,
                  sentOn: 1603819301685,
                },
                {
                  text: "Update! Substital now supports the new user interface of Netflix.",
                  id: 3,
                  sentOn: 1543773003244,
                },
                {
                  text: "Reminder: Substital v2 supports Amazon Prime Video! (PrimeVideo.com)",
                  id: 2,
                  sentOn: 1510061286949,
                },
                {
                  text: "Welcome to Substital v2! This new major version includes a better video detection, new features, and improvements. You can access the subtitles settings by clicking on the Substital icon in the videos controls.",
                  id: 1,
                  sentOn: 1507637452358,
                },
              ]);
            }, 500);
          }).then(function (t) {
            e(
              (function (e) {
                return { type: D, notifications: e };
              })(t)
            );
          })
        );
      };
    }
    function V(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function H(t) {
      for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? V(Object(n), !0).forEach(function (r) {
              e(t, r, n[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : V(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var Y = L;
    var B = (function (e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        0, "function" == typeof e[o] && (r[o] = e[o]);
      }
      var i,
        a = Object.keys(r);
      try {
        !(function (e) {
          Object.keys(e).forEach(function (t) {
            var r = e[t];
            if (void 0 === r(void 0, { type: l.INIT }))
              throw new Error(
                'Reducer "' +
                  t +
                  "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined."
              );
            if (void 0 === r(void 0, { type: l.PROBE_UNKNOWN_ACTION() }))
              throw new Error(
                'Reducer "' +
                  t +
                  "\" returned undefined when probed with a random type. Don't try to handle " +
                  l.INIT +
                  ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
              );
          });
        })(r);
      } catch (e) {
        i = e;
      }
      return function (e, t) {
        if ((void 0 === e && (e = {}), i)) throw i;
        for (var n = !1, o = {}, u = 0; u < a.length; u++) {
          var c = a[u],
            s = r[c],
            l = e[c],
            f = s(l, t);
          if (void 0 === f) {
            var d = p(c, t);
            throw new Error(d);
          }
          (o[c] = f), (n = n || f !== l);
        }
        return (n = n || a.length !== Object.keys(e).length) ? o : e;
      };
    })({
      loadedCount: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 ? arguments[1] : void 0;
        return t.type === w ? e + 1 : e;
      },
      askedToRate: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = arguments.length > 1 ? arguments[1] : void 0;
        return t.type === E ? t.asked : e;
      },
      popupTab: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y,
          t = arguments.length > 1 ? arguments[1] : void 0;
        return t.type === O ? t.tab : e;
      },
      popupIsDetecting: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = arguments.length > 1 ? arguments[1] : void 0;
        return t.type === S ? t.detecting : e;
      },
      detectionError: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = arguments.length > 1 ? arguments[1] : void 0;
        return t.type === T ? t.error : e;
      },
      detectionErrorMessage: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { id: "detection.error.empty" },
          t = arguments.length > 1 ? arguments[1] : void 0;
        return t.type === j ? t.errorMessage : e;
      },
      videos: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case x:
            return [];
          case A:
            return [].concat(
              o(e),
              o(
                t.videos.map(function (t) {
                  return H(H({}, t), {}, { id: t.id + e.length, selected: !1 });
                })
              )
            );
          case _:
            return t.videos.map(function (e) {
              return {
                title: e.title,
                player: e.player,
                src: e.src,
                quality: e.quality,
                selector: e.selector,
                origin: e.origin,
                selected: !1,
              };
            });
          case P:
            return e.map(function (e) {
              return e.id === t.id
                ? H(H({}, e), {}, { selected: !0 })
                : H(H({}, e), {}, { selected: !1 });
            });
          default:
            return e;
        }
      },
      notifications: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case D:
            return t.notifications
              .map(function (t) {
                var r = e.find(function (e) {
                    return e.id === t.id;
                  }),
                  n = (r && r.isRead) || !1,
                  o = (r && r.isNew) || !1;
                return {
                  text: t.text,
                  id: t.id,
                  sentOn: t.sentOn,
                  isRead: n,
                  isNew: o,
                };
              })
              .sort(function (e, t) {
                return t.sentOn - e.sentOn;
              });
          case I:
            return e.map(function (e) {
              return H(H({}, e), {}, { isRead: !0, isNew: !e.isRead });
            });
          default:
            return e;
        }
      },
      preferredSubtitleLanguage: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "all",
          t = arguments.length > 1 ? arguments[1] : void 0;
        return t.type === k ? t.language : e;
      },
      flashMessage: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { id: "notification.subtitles.noSubLoaded" },
          t = arguments.length > 1 ? arguments[1] : void 0;
        return t.type === N ? t.message : e;
      },
      flashType: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U,
          t = arguments.length > 1 ? arguments[1] : void 0;
        return t.type === R ? t.messageType : e;
      },
      subtitlesFontSizeRatio: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 100,
          t = arguments.length > 1 ? arguments[1] : void 0;
        return t.type === M ? t.ratio : e;
      },
      subtitlesFontColor: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "#ffffff",
          t = arguments.length > 1 ? arguments[1] : void 0;
        return t.type === C ? t.color : e;
      },
      subtitlesBackgroundColor: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "transparent",
          t = arguments.length > 1 ? arguments[1] : void 0;
        return t.type === F ? t.color : e;
      },
    });
    const G = B;
    chrome.i18n.getMessage("@@extension_id");
    function q(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function W(t) {
      for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? q(Object(n), !0).forEach(function (r) {
              e(t, r, n[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : q(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var K = function () {
        return chrome.tabs.executeScript(null, {
          file: "injection/bundle.js",
          allFrames: !0,
        });
      },
      Z = [u];
    chrome.storage.sync.get("state", function (e) {
      var t = d(
        G,
        W(
          W({}, e.state),
          {},
          {
            detectionErrorMessage: { id: "detection.error.empty" },
            popupTab: L,
            videos: [],
          }
        ),
        b.apply(void 0, o(Z))
      );
      function r() {
        chrome.storage.sync.get("newV2shown", function (e) {
          if (e.newV2shown) {
            var r = t.getState().notifications.filter(function (e) {
                return !e.isRead;
              }).length,
              n = r > 0 ? "".concat(r) : "";
            chrome.browserAction.setBadgeText({ text: n });
          } else chrome.browserAction.setBadgeText({ text: "NEW" });
        });
      }
      function n() {
        t.dispatch({ type: S, detecting: !0 }),
          t.dispatch({ type: O, tab: L }),
          t.dispatch({ type: T, error: !1 }),
          t.dispatch({
            type: j,
            errorMessage: { id: "detection.error.empty" },
          });
      }
      (0, m.IF)(t, { portName: "SUBSTITAL" });
      t.subscribe(function () {
        chrome.storage.sync.set({ state: t.getState() }), r();
      });
      t.dispatch(z()),
        chrome.runtime.onConnect.addListener(function (e) {
          "LISTEN_POPUP_CLOSED" === e.name &&
            e.onDisconnect.addListener(function () {
              n();
            });
        }),
        chrome.runtime.onMessage.addListener(function (e) {
          e &&
            "REMOVE_NEW_BADGE" === e.action &&
            (chrome.storage.sync.set({ newV2shown: !0 }), r());
        });
    });
    var Q = document.createElement("script");
    (Q.type = "text/javascript"),
      (Q.async = !0),
      (Q.src = "https://www.google-analytics.com/analytics.js");
    var $ = document.getElementsByTagName("script")[0];
    $.parentNode.insertBefore(Q, $),
      (window.ga =
        window.ga ||
        function () {
          (ga.q = ga.q || []).push(arguments);
        }),
      (ga.l = +new Date()),
      window.ga("create", "UA-76459692-1", "auto"),
      window.ga("set", "checkProtocolTask", null),
      window.ga("send", "pageview", window.location.pathname),
      chrome.runtime.onMessage.addListener(function (e, t, r) {
        e &&
          "GA_EVENT" === e.type &&
          (window.ga("send", {
            hitType: "event",
            eventCategory: e.payload.eventCategory,
            eventAction: e.payload.eventAction,
          }),
          r({ status: !0 })),
          e &&
            "GA_PAGE" === e.type &&
            window.ga("send", "pageview", e.payload.page);
      });
  })(),
    (background = n);
})();
