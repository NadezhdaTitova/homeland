!function (g, u) {
    "function" == typeof define && define.amd ? define(u) : "object" == typeof exports ? module.exports = u() : g.ScrollMagic = u()
}(this, function () {
    var g = function () {
    };
    g.version = "2.0.5";
    window.addEventListener("mousewheel", function () {
    });
    g.Controller = function (k) {
        var B, C, N = u.defaults, z = this, b = v.extend({}, N, k), y = [], q = !1, I = 0, J = "PAUSED", H = !0, a = 0, c = !0, r = function () {
                0 < b.refreshInterval && (C = window.setTimeout(qa, b.refreshInterval))
            }, U = function () {
                return b.vertical ? v.get.scrollTop(b.container) : v.get.scrollLeft(b.container)
            },
            n = function () {
                return b.vertical ? v.get.height(b.container) : v.get.width(b.container)
            }, x = this._setScrollPos = function (a) {
                b.vertical ? H ? window.scrollTo(v.get.scrollLeft(), a) : b.container.scrollTop = a : H ? window.scrollTo(a, v.get.scrollTop()) : b.container.scrollLeft = a
            }, oa = function () {
                if (c && q) {
                    var a = v.type.Array(q) ? q : y.slice(0);
                    q = !1;
                    var b = I;
                    I = z.scrollPos();
                    b = I - b;
                    0 !== b && (J = 0 < b ? "FORWARD" : "REVERSE");
                    "REVERSE" === J && a.reverse();
                    a.forEach(function (a) {
                        a.update(!0)
                    })
                }
            }, na = function (b) {
                "resize" == b.type && (a = n(), J = "PAUSED");
                !0 !== q && (q = !0, B = v.rAF(oa))
            }, qa = function () {
                if (!H && a != n()) {
                    try {
                        var c = new Event("resize", {bubbles: !1, cancelable: !1})
                    } catch (R) {
                        c = document.createEvent("Event"), c.initEvent("resize", !1, !1)
                    }
                    b.container.dispatchEvent(c)
                }
                y.forEach(function (a) {
                    a.refresh()
                });
                r()
            };
        this._options = b;
        var xa = function (a) {
            if (1 >= a.length)return a;
            a = a.slice(0);
            return a.sort(function (a, b) {
                return a.scrollOffset() > b.scrollOffset() ? 1 : -1
            }), a
        };
        return this.addScene = function (a) {
            if (v.type.Array(a))a.forEach(function (a) {
                z.addScene(a)
            }); else if (a instanceof
                g.Scene)if (a.controller() !== z)a.addTo(z); else if (0 > y.indexOf(a)) {
                y.push(a);
                y = xa(y);
                a.on("shift.controller_sort", function () {
                    y = xa(y)
                });
                for (var c in b.globalSceneOptions)a[c] && a[c].call(a, b.globalSceneOptions[c])
            }
            return z
        }, this.removeScene = function (a) {
            if (v.type.Array(a))a.forEach(function (a) {
                z.removeScene(a)
            }); else {
                var b = y.indexOf(a);
                -1 < b && (a.off("shift.controller_sort"), y.splice(b, 1), a.remove())
            }
            return z
        }, this.updateScene = function (a, b) {
            v.type.Array(a) ? a.forEach(function (a) {
                z.updateScene(a, b)
            }) : b ? a.update(!0) :
            !0 !== q && a instanceof g.Scene && (q = q || [], -1 == q.indexOf(a) && q.push(a), q = xa(q), B = v.rAF(oa));
            return z
        }, this.update = function (a) {
            return na({type: "resize"}), a && oa(), z
        }, this.scrollTo = function (a, c) {
            if (v.type.Number(a))x.call(b.container, a, c); else if (a instanceof g.Scene)a.controller() === z && z.scrollTo(a.scrollOffset(), c); else if (v.type.Function(a))x = a; else {
                var n = v.get.elements(a)[0];
                if (n) {
                    for (; n.parentNode.hasAttribute("data-scrollmagic-pin-spacer");)n = n.parentNode;
                    var k = b.vertical ? "top" : "left", q = v.get.offset(b.container);
                    n = v.get.offset(n);
                    H || (q[k] -= z.scrollPos());
                    z.scrollTo(n[k] - q[k], c)
                }
            }
            return z
        }, this.scrollPos = function (a) {
            return arguments.length ? (v.type.Function(a) && (U = a), z) : U.call(z)
        }, this.info = function (c) {
            var g = {
                size: a,
                vertical: b.vertical,
                scrollPos: I,
                scrollDirection: J,
                container: b.container,
                isDocument: H
            };
            return arguments.length ? void 0 !== g[c] ? g[c] : void 0 : g
        }, this.loglevel = function () {
            return z
        }, this.enabled = function (a) {
            return arguments.length ? (c != a && (c = !!a, z.updateScene(y, !0)), z) : c
        }, this.destroy = function (a) {
            window.clearTimeout(C);
            for (var c = y.length; c--;)y[c].destroy(a);
            return b.container.removeEventListener("resize", na), b.container.removeEventListener("scroll", na), v.cAF(B), null
        }, function () {
            for (var c in b)N.hasOwnProperty(c) || delete b[c];
            if (b.container = v.get.elements(b.container)[0], !b.container)throw"ScrollMagic.Controller init failed.";
            (H = b.container === window || b.container === document.body || !document.body.contains(b.container)) && (b.container = window);
            a = n();
            b.container.addEventListener("resize", na);
            b.container.addEventListener("scroll",
                na);
            b.refreshInterval = parseInt(b.refreshInterval) || N.refreshInterval;
            r()
        }(), z
    };
    var u = {defaults: {container: window, vertical: !0, globalSceneOptions: {}, loglevel: 2, refreshInterval: 100}};
    g.Controller.addOption = function (g, B) {
        u.defaults[g] = B
    };
    g.Controller.extend = function (k) {
        var u = this;
        g.Controller = function () {
            return u.apply(this, arguments), this.$super = v.extend({}, this), k.apply(this, arguments) || this
        };
        v.extend(g.Controller, u);
        g.Controller.prototype = u.prototype;
        g.Controller.prototype.constructor = g.Controller
    };
    g.Scene = function (k) {
        var u, D, N = C.defaults, z = this, b = v.extend({}, N, k), y = "BEFORE", q = 0, I = 0, J = 0, H = 0, a = !0, c = {};
        this.on = function (a, b) {
            return v.type.Function(b) && (a = a.trim().split(" "), a.forEach(function (a) {
                var g = a.split(".");
                a = g[0];
                g = g[1];
                "*" != a && (c[a] || (c[a] = []), c[a].push({namespace: g || "", callback: b}))
            })), z
        };
        this.off = function (a, b) {
            return a ? (a = a.trim().split(" "), a.forEach(function (a) {
                a = a.split(".");
                var g = a[0], n = a[1] || "";
                ("*" === g ? Object.keys(c) : [g]).forEach(function (a) {
                    for (var g = c[a] || [], k = g.length; k--;) {
                        var q =
                            g[k];
                        !q || n !== q.namespace && "*" !== n || b && b != q.callback || g.splice(k, 1)
                    }
                    g.length || delete c[a]
                })
            }), z) : z
        };
        this.trigger = function (a, b) {
            if (a) {
                var n = a.trim().split("."), k = n[0], q = n[1];
                (n = c[k]) && n.forEach(function (a) {
                    q && q !== a.namespace || a.callback.call(z, new g.Event(k, a.namespace, z, b))
                })
            }
            return z
        };
        z.on("change.internal", function (a) {
            "loglevel" !== a.what && "tweenChanges" !== a.what && ("triggerElement" === a.what ? n() : "reverse" === a.what && z.update())
        }).on("shift.internal", function () {
            r();
            z.update()
        });
        this.addTo = function (a) {
            return a instanceof
            g.Controller && D != a && (D && D.removeScene(z), D = a, na(), U(!0), n(!0), r(), D.info("container").addEventListener("resize", x), a.addScene(z), z.trigger("add", {controller: D}), z.update()), z
        };
        this.enabled = function (b) {
            return arguments.length ? (a != b && (a = !!b, z.update(!0)), z) : a
        };
        this.remove = function () {
            if (D) {
                D.info("container").removeEventListener("resize", x);
                var a = D;
                D = void 0;
                a.removeScene(z);
                z.trigger("remove")
            }
            return z
        };
        this.destroy = function (a) {
            return z.trigger("destroy", {reset: a}), z.remove(), z.off("*.*"), null
        };
        this.update =
            function (c) {
                if (D)if (c)if (D.enabled() && a) {
                    var g = D.info("scrollPos");
                    c = 0 < b.duration ? (g - I) / (J - I) : g >= I ? 1 : 0;
                    z.trigger("update", {startPos: I, endPos: J, scrollPos: g});
                    z.progress(c)
                } else E && "DURING" === y && Q(!0); else D.updateScene(z, !1);
                return z
            };
        this.refresh = function () {
            return U(), n(), z
        };
        this.progress = function (a) {
            if (arguments.length) {
                var c = !1, g = y, n = D ? D.info("scrollDirection") : "PAUSED", k = b.reverse || a >= q;
                if (0 === b.duration ? (c = q != a, q = 1 > a && k ? 0 : 1, y = 0 === q ? "BEFORE" : "DURING") : 0 > a && "BEFORE" !== y && k ? (q = 0, y = "BEFORE", c = !0) :
                        0 <= a && 1 > a && k ? (q = a, y = "DURING", c = !0) : 1 <= a && "AFTER" !== y ? (q = 1, y = "AFTER", c = !0) : "DURING" !== y || k || Q(), c) {
                    var r = {progress: q, state: y, scrollDirection: n};
                    c = y != g;
                    n = function (a) {
                        z.trigger(a, r)
                    };
                    c && "DURING" !== g && (n("enter"), n("BEFORE" === g ? "start" : "end"));
                    n("progress");
                    c && "DURING" !== y && (n("BEFORE" === y ? "start" : "end"), n("leave"))
                }
                return z
            }
            return q
        };
        var r = function () {
            I = H + b.offset;
            J = void 0;
            D && b.triggerElement && (I -= D.info("size") * b.triggerHook);
            J = I + b.duration
        }, U = function (a) {
            u && qa("duration", u.call(z)) && !a && (z.trigger("change",
                {what: "duration", newval: b.duration}), z.trigger("shift", {reason: "duration"}))
        }, n = function (a) {
            var c = 0, g = b.triggerElement;
            if (D && g) {
                c = D.info();
                for (var n = v.get.offset(c.container), k = c.vertical ? "top" : "left"; g.parentNode.hasAttribute("data-scrollmagic-pin-spacer");)g = g.parentNode;
                g = v.get.offset(g);
                c.isDocument || (n[k] -= D.scrollPos());
                c = g[k] - n[k]
            }
            g = c != H;
            H = c;
            g && !a && z.trigger("shift", {reason: "triggerElementPosition"})
        }, x = function () {
            0 < b.triggerHook && z.trigger("shift", {reason: "containerResize"})
        }, oa = v.extend(C.validate,
            {
                duration: function (a) {
                    if (v.type.String(a) && a.match(/^(\.|\d)*\d+%$/)) {
                        var b = parseFloat(a) / 100;
                        a = function () {
                            return D ? D.info("size") * b : 0
                        }
                    }
                    if (v.type.Function(a)) {
                        u = a;
                        try {
                            a = parseFloat(u())
                        } catch (la) {
                            a = -1
                        }
                    }
                    if (a = parseFloat(a), !v.type.Number(a) || 0 > a)throw u ? (u = void 0, 0) : 0;
                    return a
                }
            }), na = function (a) {
            a = arguments.length ? [a] : Object.keys(oa);
            a.forEach(function (a) {
                if (oa[a])try {
                    var c = oa[a](b[a])
                } catch (ha) {
                    c = N[a]
                } finally {
                    b[a] = c
                }
            })
        }, qa = function (a, c) {
            var g = !1, n = b[a];
            return b[a] != c && (b[a] = c, na(a), g = n != b[a]), g
        }, xa =
            function (a) {
                z[a] || (z[a] = function (c) {
                    return arguments.length ? ("duration" === a && (u = void 0), qa(a, c) && (z.trigger("change", {
                        what: a,
                        newval: b[a]
                    }), -1 < C.shifts.indexOf(a) && z.trigger("shift", {reason: a})), z) : b[a]
                })
            };
        this.controller = function () {
            return D
        };
        this.state = function () {
            return y
        };
        this.scrollOffset = function () {
            return I
        };
        this.triggerPosition = function () {
            var a = b.offset;
            return D && (a += b.triggerElement ? H : D.info("size") * z.triggerHook()), a
        };
        var E, R;
        z.on("shift.internal", function (a) {
            a = "duration" === a.reason;
            ("AFTER" ===
            y && a || "DURING" === y && 0 === b.duration) && Q();
            a && da()
        }).on("progress.internal", function () {
            Q()
        }).on("add.internal", function () {
            da()
        }).on("destroy.internal", function (a) {
            z.removePin(a.reset)
        });
        var Q = function (a) {
            if (E && D) {
                var c = D.info(), g = R.spacer.firstChild;
                if (a || "DURING" !== y) {
                    a = {position: R.inFlow ? "relative" : "absolute", top: 0, left: 0};
                    var n = v.css(g, "position") != a.position;
                    R.pushFollowers ? 0 < b.duration && ("AFTER" === y && 0 === parseFloat(v.css(R.spacer, "padding-top")) ? n = !0 : "BEFORE" === y && 0 === parseFloat(v.css(R.spacer,
                        "padding-bottom")) && (n = !0)) : a[c.vertical ? "top" : "left"] = b.duration * q;
                    v.css(g, a);
                    n && da()
                } else"fixed" != v.css(g, "position") && (v.css(g, {position: "fixed"}), da()), g = v.get.offset(R.spacer, !0), g[c.vertical ? "top" : "left"] += b.reverse || 0 === b.duration ? c.scrollPos - I : Math.round(q * b.duration * 10) / 10, v.css(R.spacer.firstChild, {
                    top: g.top,
                    left: g.left
                })
            }
        }, da = function () {
            if (E && D && R.inFlow) {
                var a = "DURING" === y, c = D.info("vertical"), g = R.spacer.firstChild, n = v.isMarginCollapseType(v.css(R.spacer, "display")), k = {};
                R.relSize.width ||
                R.relSize.autoFullWidth ? a ? v.css(E, {width: v.get.width(R.spacer)}) : v.css(E, {width: "100%"}) : (k["min-width"] = v.get.width(c ? E : g, !0, !0), k.width = a ? k["min-width"] : "auto");
                R.relSize.height ? a ? v.css(E, {height: v.get.height(R.spacer) - (R.pushFollowers ? b.duration : 0)}) : v.css(E, {height: "100%"}) : (k["min-height"] = v.get.height(c ? g : E, !0, !n), k.height = a ? k["min-height"] : "auto");
                R.pushFollowers && (k["padding" + (c ? "Top" : "Left")] = b.duration * q, k["padding" + (c ? "Bottom" : "Right")] = b.duration * (1 - q));
                v.css(R.spacer, k)
            }
        }, M = function () {
            D &&
            E && "DURING" === y && !D.info("isDocument") && Q()
        }, ea = function () {
            D && E && "DURING" === y && ((R.relSize.width || R.relSize.autoFullWidth) && v.get.width(window) != v.get.width(R.spacer.parentNode) || R.relSize.height && v.get.height(window) != v.get.height(R.spacer.parentNode)) && da()
        }, S = function (a) {
            D && E && "DURING" === y && !D.info("isDocument") && (a.preventDefault(), D._setScrollPos(D.info("scrollPos") - ((a.wheelDelta || a[D.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -a.detail)))
        };
        this.setPin = function (a, b) {
            if ((b = v.extend({},
                    {
                        pushFollowers: !0,
                        spacerClass: "scrollmagic-pin-spacer"
                    }, b), a = v.get.elements(a)[0], !a) || "fixed" === v.css(a, "position"))return z;
            if (E) {
                if (E === a)return z;
                z.removePin()
            }
            E = a;
            var c = E.parentNode.style.display, g = "top left bottom right margin marginLeft marginRight marginTop marginBottom".split(" ");
            E.parentNode.style.display = "none";
            var n = "absolute" != v.css(E, "position"), k = v.css(E, g.concat(["display"])), q = v.css(E, ["width", "height"]);
            E.parentNode.style.display = c;
            !n && b.pushFollowers && (b.pushFollowers = !1);
            c = E.parentNode.insertBefore(document.createElement("div"),
                E);
            var r = v.extend(k, {
                position: n ? "relative" : "absolute",
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
            });
            if (n || v.extend(r, v.css(E, ["width", "height"])), v.css(c, r), c.setAttribute("data-scrollmagic-pin-spacer", ""), v.addClass(c, b.spacerClass), R = {
                    spacer: c,
                    relSize: {
                        width: "%" === q.width.slice(-1),
                        height: "%" === q.height.slice(-1),
                        autoFullWidth: "auto" === q.width && n && v.isMarginCollapseType(k.display)
                    },
                    pushFollowers: b.pushFollowers,
                    inFlow: n
                }, !E.___origStyle) {
                E.___origStyle = {};
                var x =
                    E.style;
                g.concat("width height position boxSizing mozBoxSizing webkitBoxSizing".split(" ")).forEach(function (a) {
                    E.___origStyle[a] = x[a] || ""
                })
            }
            return R.relSize.width && v.css(c, {width: q.width}), R.relSize.height && v.css(c, {height: q.height}), c.appendChild(E), v.css(E, {
                position: n ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }), (R.relSize.width || R.relSize.autoFullWidth) && v.css(E, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }), window.addEventListener("scroll",
                M), window.addEventListener("resize", M), window.addEventListener("resize", ea), E.addEventListener("mousewheel", S), E.addEventListener("DOMMouseScroll", S), Q(), z
        };
        this.removePin = function (a) {
            if (E) {
                if ("DURING" === y && Q(!0), a || !D) {
                    a = R.spacer.firstChild;
                    if (a.hasAttribute("data-scrollmagic-pin-spacer")) {
                        var b = R.spacer.style;
                        margins = {};
                        ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach(function (a) {
                            margins[a] = b[a] || ""
                        });
                        v.css(a, margins)
                    }
                    R.spacer.parentNode.insertBefore(a, R.spacer);
                    R.spacer.parentNode.removeChild(R.spacer);
                    E.parentNode.hasAttribute("data-scrollmagic-pin-spacer") || (v.css(E, E.___origStyle), delete E.___origStyle)
                }
                window.removeEventListener("scroll", M);
                window.removeEventListener("resize", M);
                window.removeEventListener("resize", ea);
                E.removeEventListener("mousewheel", S);
                E.removeEventListener("DOMMouseScroll", S);
                E = void 0
            }
            return z
        };
        var ta, ua = [];
        return z.on("destroy.internal", function (a) {
            z.removeClassToggle(a.reset)
        }), this.setClassToggle = function (a, b) {
            var c = v.get.elements(a);
            return 0 !== c.length && v.type.String(b) ?
                (0 < ua.length && z.removeClassToggle(), ta = b, ua = c, z.on("enter.internal_class leave.internal_class", function (a) {
                    var b = "enter" === a.type ? v.addClass : v.removeClass;
                    ua.forEach(function (a) {
                        b(a, ta)
                    })
                }), z) : z
        }, this.removeClassToggle = function (a) {
            return a && ua.forEach(function (a) {
                v.removeClass(a, ta)
            }), z.off("start.internal_class end.internal_class"), ta = void 0, ua = [], z
        }, function () {
            for (var a in b)N.hasOwnProperty(a) || delete b[a];
            for (var c in N)xa(c);
            na()
        }(), z
    };
    var C = {
        defaults: {
            duration: 0, offset: 0, triggerElement: void 0,
            triggerHook: .5, reverse: !0, loglevel: 2
        }, validate: {
            offset: function (g) {
                if (g = parseFloat(g), !v.type.Number(g))throw 0;
                return g
            }, triggerElement: function (g) {
                if (g = g || void 0)if (g = v.get.elements(g)[0], !g)throw 0;
                return g
            }, triggerHook: function (g) {
                var k = {onCenter: .5, onEnter: 1, onLeave: 0};
                if (v.type.Number(g))g = Math.max(0, Math.min(parseFloat(g), 1)); else {
                    if (!(g in k))throw 0;
                    g = k[g]
                }
                return g
            }, reverse: function (g) {
                return !!g
            }
        }, shifts: ["duration", "offset", "triggerHook"]
    };
    g.Scene.addOption = function (g, u, v, N) {
        g in C.defaults ||
        (C.defaults[g] = u, C.validate[g] = v, N && C.shifts.push(g))
    };
    g.Scene.extend = function (k) {
        var u = this;
        g.Scene = function () {
            return u.apply(this, arguments), this.$super = v.extend({}, this), k.apply(this, arguments) || this
        };
        v.extend(g.Scene, u);
        g.Scene.prototype = u.prototype;
        g.Scene.prototype.constructor = g.Scene
    };
    g.Event = function (g, u, v, C) {
        C = C || {};
        for (var k in C)this[k] = C[k];
        return this.type = g, this.target = this.currentTarget = v, this.namespace = u || "", this.timeStamp = this.timestamp = Date.now(), this
    };
    var v = g._util = function (g) {
        var k,
            u = {}, v = function (a, b, k, q) {
                if (b = b === document ? g : b, b === g)q = !1; else if (!J.DomElement(b))return 0;
                a = a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
                var c = (k ? b["offset" + a] || b["outer" + a] : b["client" + a] || b["inner" + a]) || 0;
                k && q && (b = b.currentStyle ? b.currentStyle : g.getComputedStyle(b), c += "Height" === a ? (parseFloat(b.marginTop) || 0) + (parseFloat(b.marginBottom) || 0) : (parseFloat(b.marginLeft) || 0) + (parseFloat(b.marginRight) || 0));
                return c
            }, z = function (a) {
                return a.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g,
                    function (a) {
                        return a[1].toUpperCase()
                    })
            };
        u.extend = function (a) {
            a = a || {};
            for (k = 1; k < arguments.length; k++)if (arguments[k])for (var b in arguments[k])arguments[k].hasOwnProperty(b) && (a[b] = arguments[k][b]);
            return a
        };
        u.isMarginCollapseType = function (a) {
            return -1 < ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(a)
        };
        var b = 0, y = ["ms", "moz", "webkit", "o"], q = g.requestAnimationFrame, C = g.cancelAnimationFrame;
        for (k = 0; !q && k < y.length; ++k)q = g[y[k] + "RequestAnimationFrame"], C = g[y[k] + "CancelAnimationFrame"] || g[y[k] +
            "CancelRequestAnimationFrame"];
        q || (q = function (a) {
            var c = (new Date).getTime(), k = Math.max(0, 16 - (c - b)), q = g.setTimeout(function () {
                a(c + k)
            }, k);
            return b = c + k, q
        });
        C || (C = function (a) {
            g.clearTimeout(a)
        });
        u.rAF = q.bind(g);
        u.cAF = C.bind(g);
        var J = u.type = function (a) {
            return Object.prototype.toString.call(a).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        };
        J.String = function (a) {
            return "string" === J(a)
        };
        J.Function = function (a) {
            return "function" === J(a)
        };
        J.Array = function (a) {
            return Array.isArray(a)
        };
        J.Number = function (a) {
            return !J.Array(a) &&
                0 <= a - parseFloat(a) + 1
        };
        J.DomElement = function (a) {
            return "object" == typeof HTMLElement ? a instanceof HTMLElement : a && "object" == typeof a && null !== a && 1 === a.nodeType && "string" == typeof a.nodeName
        };
        var H = u.get = {};
        return H.elements = function (a) {
            var b = [];
            if (J.String(a))try {
                a = document.querySelectorAll(a)
            } catch (x) {
                return b
            }
            if ("nodelist" === J(a) || J.Array(a))for (var k = 0, q = b.length = a.length; q > k; k++) {
                var n = a[k];
                b[k] = J.DomElement(n) ? n : H.elements(n)
            } else(J.DomElement(a) || a === document || a === g) && (b = [a]);
            return b
        }, H.scrollTop =
            function (a) {
                return a && "number" == typeof a.scrollTop ? a.scrollTop : g.pageYOffset || 0
            }, H.scrollLeft = function (a) {
            return a && "number" == typeof a.scrollLeft ? a.scrollLeft : g.pageXOffset || 0
        }, H.width = function (a, b, g) {
            return v("width", a, b, g)
        }, H.height = function (a, b, g) {
            return v("height", a, b, g)
        }, H.offset = function (a, b) {
            var c = {top: 0, left: 0};
            if (a && a.getBoundingClientRect) {
                var g = a.getBoundingClientRect();
                c.top = g.top;
                c.left = g.left;
                b || (c.top += H.scrollTop(), c.left += H.scrollLeft())
            }
            return c
        }, u.addClass = function (a, b) {
            b && (a.classList ?
                a.classList.add(b) : a.className += " " + b)
        }, u.removeClass = function (a, b) {
            b && (a.classList ? a.classList.remove(b) : a.className = a.className.replace(RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        }, u.css = function (a, b) {
            if (J.String(b))return (a.currentStyle ? a.currentStyle : g.getComputedStyle(a))[z(b)];
            if (J.Array(b)) {
                var c = {}, k = a.currentStyle ? a.currentStyle : g.getComputedStyle(a);
                return b.forEach(function (a) {
                    c[a] = k[z(a)]
                }), c
            }
            for (var n in b) {
                var q = b[n];
                q == parseFloat(q) && (q += "px");
                a.style[z(n)] = q
            }
        }, u
    }(window ||
        {});
    return g
});
(function (g, u) {