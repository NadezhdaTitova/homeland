/*
 ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io  ScrollMagic v2.0.5 (2015-04-29)
 The javascript library for magical scroll interactions.
 (c) 2015 Jan Paepke (@janpaepke)
 Project Website: http://scrollmagic.io

 @version 2.0.5
 @license Dual licensed under MIT license and GPL.
 @author Jan Paepke - e-mail@janpaepke.de

 @file ScrollMagic GSAP Animation Plugin.

 requires: GSAP ~1.14
 Powered by the Greensock Animation Platform (GSAP): http://www.greensock.com/js
 Greensock License info at http://www.greensock.com/licensing/
 Hammer.JS - v2.0.8 - 2016-04-23
 http://hammerjs.github.io/

 Copyright (c) 2016 Jorik Tangelder;
 Licensed under the MIT license */
!function (g, u) {
    "";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = g.document ? u(g, !0) : function (g) {
        if (!g.document)throw Error("jQuery requires a window with a document");
        return u(g)
    } : u(g)
}("undefined" != typeof window ? window : this, function (g, u) {
    function C(d, t) {
        t = t || Z;
        var a = t.createElement("script");
        a.text = d;
        t.head.appendChild(a).parentNode.removeChild(a)
    }

    function v(d) {
        var t = !!d && "length"in d && d.length, a = f.type(d);
        return "function" !== a && !f.isWindow(d) && ("array" === a || 0 === t || "number" == typeof t && 0 < t && t - 1 in d)
    }

    function k(d, t) {
        return d.nodeName && d.nodeName.toLowerCase() === t.toLowerCase()
    }

    function B(d, t, a) {
        return f.isFunction(t) ? f.grep(d, function (d, f) {
            return !!t.call(d, f, d) !== a
        }) : t.nodeType ? f.grep(d, function (d) {
            return d === t !== a
        }) : "string" != typeof t ? f.grep(d, function (d) {
            return -1 < K.call(t, d) !== a
        }) : za.test(t) ? f.filter(t, d, a) : (t = f.filter(t, d), f.grep(d, function (d) {
            return -1 < K.call(t, d) !== a && 1 === d.nodeType
        }))
    }

    function D(d, t) {
        for (; (d = d[t]) && 1 !== d.nodeType;);
        return d
    }

    function N(d) {
        var t = {};
        return f.each(d.match(T) || [], function (d, a) {
            t[a] = !0
        }), t
    }

    function z(d) {
        return d
    }

    function b(d) {
        throw d;
    }

    function y(d, t, a, e) {
        var G;
        try {
            d && f.isFunction(G = d.promise) ? G.call(d).done(t).fail(a) : d && f.isFunction(G = d.then) ? G.call(d, t, a) : t.apply(void 0, [d].slice(e))
        } catch (Jb) {
            a.apply(void 0, [Jb])
        }
    }

    function q() {
        Z.removeEventListener("DOMContentLoaded", q);
        g.removeEventListener("load", q);
        f.ready()
    }

    function I() {
        this.expando = f.expando + I.uid++
    }

    function J(d, t, a) {
        var f;
        if (void 0 === a && 1 === d.nodeType)if (f = "data-" + t.replace(jb,
                    "-$&").toLowerCase(), a = d.getAttribute(f), "string" == typeof a) {
            try {
                f = a, a = "true" === f || "false" !== f && ("null" === f ? null : f === +f + "" ? +f : Qa.test(f) ? JSON.parse(f) : f)
            } catch (gc) {
            }
            Fa.set(d, t, a)
        } else a = void 0;
        return a
    }

    function H(d, t, a, e) {
        var G, m = 1, l = 20, sa = e ? function () {
            return e.cur()
        } : function () {
            return f.css(d, t, "")
        }, c = sa(), p = a && a[3] || (f.cssNumber[t] ? "" : "px"), F = (f.cssNumber[t] || "px" !== p && +c) && ab.exec(f.css(d, t));
        if (F && F[3] !== p) {
            p = p || F[3];
            a = a || [];
            F = +c || 1;
            do m = m || ".5", F /= m, f.style(d, t, F + p); while (m !== (m = sa() / c) && 1 !==
            m && --l)
        }
        return a && (F = +F || +c || 0, G = a[1] ? F + (a[1] + 1) * a[2] : +a[2], e && (e.unit = p, e.start = F, e.end = G)), G
    }

    function a(d, t) {
        for (var a, e, m = [], l = 0, c = d.length; l < c; l++)if (e = d[l], e.style)if (a = e.style.display, t) {
            if ("none" === a && (m[l] = Y.get(e, "display") || null, m[l] || (e.style.display = "")), "" === e.style.display && kb(e)) {
                a = l;
                var F = void 0;
                var p = e.ownerDocument;
                var n = e.nodeName;
                p = (e = tb[n]) ? e : (F = p.body.appendChild(p.createElement(n)), e = f.css(F, "display"), F.parentNode.removeChild(F), "none" === e && (e = "block"), tb[n] = e, e);
                m[a] = p
            }
        } else"none" !==
        a && (m[l] = "none", Y.set(e, "display", a));
        for (l = 0; l < c; l++)null != m[l] && (d[l].style.display = m[l]);
        return d
    }

    function c(d, t) {
        var a;
        return a = "undefined" != typeof d.getElementsByTagName ? d.getElementsByTagName(t || "*") : "undefined" != typeof d.querySelectorAll ? d.querySelectorAll(t || "*") : [], void 0 === t || t && k(d, t) ? f.merge([d], a) : a
    }

    function r(d, t) {
        for (var a = 0, f = d.length; a < f; a++)Y.set(d[a], "globalEval", !t || Y.get(t[a], "globalEval"))
    }

    function U(d, t, a, e, m) {
        for (var G, l, sa, F, p = t.createDocumentFragment(), n = [], A = 0, b = d.length; A <
        b; A++)if (G = d[A], G || 0 === G)if ("object" === f.type(G))f.merge(n, G.nodeType ? [G] : G); else if (xb.test(G)) {
            l = l || p.appendChild(t.createElement("div"));
            sa = (lb.exec(G) || ["", ""])[1].toLowerCase();
            sa = Ha[sa] || Ha._default;
            l.innerHTML = sa[1] + f.htmlPrefilter(G) + sa[2];
            for (sa = sa[0]; sa--;)l = l.lastChild;
            f.merge(n, l.childNodes);
            l = p.firstChild;
            l.textContent = ""
        } else n.push(t.createTextNode(G));
        p.textContent = "";
        for (A = 0; G = n[A++];)if (e && -1 < f.inArray(G, e))m && m.push(G); else if (F = f.contains(G.ownerDocument, G), l = c(p.appendChild(G),
                "script"), F && r(l), a)for (sa = 0; G = l[sa++];)mb.test(G.type || "") && a.push(G);
        return p
    }

    function n() {
        return !0
    }

    function x() {
        return !1
    }

    function oa() {
        try {
            return Z.activeElement
        } catch (d) {
        }
    }

    function na(d, t, a, e, m, l) {
        var G, c;
        if ("object" == typeof t) {
            "string" != typeof a && (e = e || a, a = void 0);
            for (c in t)na(d, c, a, e, t[c], l);
            return d
        }
        if (null == e && null == m ? (m = a, e = a = void 0) : null == m && ("string" == typeof a ? (m = e, e = void 0) : (m = e, e = a, a = void 0)), !1 === m)m = x; else if (!m)return d;
        return 1 === l && (G = m, m = function (d) {
            return f().off(d), G.apply(this,
                arguments)
        }, m.guid = G.guid || (G.guid = f.guid++)), d.each(function () {
            f.event.add(this, t, m, e, a)
        })
    }

    function qa(d, t) {
        return k(d, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") ? f(">tbody", d)[0] || d : d
    }

    function xa(d) {
        return d.type = (null !== d.getAttribute("type")) + "/" + d.type, d
    }

    function E(d) {
        var t = l.exec(d.type);
        return t ? d.type = t[1] : d.removeAttribute("type"), d
    }

    function R(d, t) {
        var a, e, m, l, c, p;
        if (1 === t.nodeType) {
            if (Y.hasData(d) && (a = Y.access(d), e = Y.set(t, a), p = a.events))for (m in delete e.handle, e.events = {}, p)for (a =
                                                                                                                                      0, e = p[m].length; a < e; a++)f.event.add(t, m, p[m][a]);
            Fa.hasData(d) && (l = Fa.access(d), c = f.extend({}, l), Fa.set(t, c))
        }
    }

    function Q(d, t, a, e) {
        t = aa.apply([], t);
        var m, G, l, p = 0, F = d.length, sa = F - 1, n = t[0], b = f.isFunction(n);
        if (b || 1 < F && "string" == typeof n && !W.checkClone && bb.test(n))return d.each(function (f) {
            var m = d.eq(f);
            b && (t[0] = n.call(this, f, m.html()));
            Q(m, t, a, e)
        });
        if (F && (m = U(t, d[0].ownerDocument, !1, d, e), G = m.firstChild, 1 === m.childNodes.length && (m = G), G || e)) {
            G = f.map(c(m, "script"), xa);
            for (l = G.length; p < F; p++) {
                var r = m;
                p !==
                sa && (r = f.clone(r, !0, !0), l && f.merge(G, c(r, "script")));
                a.call(d[p], r, p)
            }
            if (l)for (m = G[G.length - 1].ownerDocument, f.map(G, E), p = 0; p < l; p++)r = G[p], mb.test(r.type || "") && !Y.access(r, "globalEval") && f.contains(m, r) && (r.src ? f._evalUrl && f._evalUrl(r.src) : C(r.textContent.replace(A, ""), m))
        }
        return d
    }

    function da(d, t, a) {
        for (var e = t ? f.filter(t, d) : d, m = 0; null != (t = e[m]); m++)a || 1 !== t.nodeType || f.cleanData(c(t)), t.parentNode && (a && f.contains(t.ownerDocument, t) && r(c(t, "script")), t.parentNode.removeChild(t));
        return d
    }

    function M(d,
               t, a) {
        var e, m, G, l, p = d.style;
        return a = a || V(d), a && (l = a.getPropertyValue(t) || a[t], "" !== l || f.contains(d.ownerDocument, d) || (l = f.style(d, t)), !W.pixelMarginRight() && L.test(l) && X.test(t) && (e = p.width, m = p.minWidth, G = p.maxWidth, p.minWidth = p.maxWidth = p.width = l, l = a.width, p.width = e, p.minWidth = m, p.maxWidth = G)), void 0 !== l ? l + "" : l
    }

    function ea(d, a) {
        return {
            get: function () {
                return d() ? void delete this.get : (this.get = a).apply(this, arguments)
            }
        }
    }

    function S(d) {
        var a = f.cssProps[d];
        if (!a) {
            a = f.cssProps;
            a:{
                var e = d;
                if (!(e in fa)) {
                    for (var m =
                        e[0].toUpperCase() + e.slice(1), l = ba.length; l--;)if (e = ba[l] + m, e in fa)break a;
                    e = void 0
                }
            }
            a = a[d] = e || d
        }
        return a
    }

    function ta(d, a, e) {
        return (d = ab.exec(a)) ? Math.max(0, d[2] - (e || 0)) + (d[3] || "px") : a
    }

    function ua(d, a, e, m, l) {
        var t = 0;
        for (a = e === (m ? "border" : "content") ? 4 : "width" === a ? 1 : 0; 4 > a; a += 2)"margin" === e && (t += f.css(d, e + Oa[a], !0, l)), m ? ("content" === e && (t -= f.css(d, "padding" + Oa[a], !0, l)), "margin" !== e && (t -= f.css(d, "border" + Oa[a] + "Width", !0, l))) : (t += f.css(d, "padding" + Oa[a], !0, l), "padding" !== e && (t += f.css(d, "border" + Oa[a] +
            "Width", !0, l)));
        return t
    }

    function ca(d, a, e) {
        var t, m = V(d), G = M(d, a, m), l = "border-box" === f.css(d, "boxSizing", !1, m);
        return L.test(G) ? G : (t = l && (W.boxSizingReliable() || G === d.style[a]), "auto" === G && (G = d["offset" + a[0].toUpperCase() + a.slice(1)]), G = parseFloat(G) || 0, G + ua(d, a, e || (l ? "border" : "content"), t, m) + "px")
    }

    function ka(d, a, e, f, m) {
        return new ka.prototype.init(d, a, e, f, m)
    }

    function la() {
        gb && (!1 === Z.hidden && g.requestAnimationFrame ? g.requestAnimationFrame(la) : g.setTimeout(la, f.fx.interval), f.fx.tick())
    }

    function ha() {
        return g.setTimeout(function () {
            nb = void 0
        }), nb = f.now()
    }

    function ia(d, a) {
        var t = 0, e = {height: d};
        for (a = a ? 1 : 0; 4 > t; t += 2 - a) {
            var f = Oa[t];
            e["margin" + f] = e["padding" + f] = d
        }
        return a && (e.opacity = e.width = d), e
    }

    function Ia(d, a, e) {
        for (var t, f = (pa.tweeners[a] || []).concat(pa.tweeners["*"]), m = 0, G = f.length; m < G; m++)if (t = f[m].call(e, a, d))return t
    }

    function La(d, a) {
        var t, e, m, l, p;
        for (t in d)if (e = f.camelCase(t), m = a[e], l = d[t], Array.isArray(l) && (m = l[1], l = d[t] = l[0]), t !== e && (d[e] = l, delete d[t]), p = f.cssHooks[e], p && "expand"in p)for (t in l = p.expand(l), delete d[e], l)t in
        d || (d[t] = l[t], a[t] = m); else a[e] = m
    }

    function pa(d, a, e) {
        var t, m = 0, l = pa.prefilters.length, G = f.Deferred().always(function () {
            delete p.elem
        }), p = function () {
            if (t)return !1;
            var a = nb || ha();
            a = Math.max(0, c.startTime + c.duration - a);
            for (var e = 1 - (a / c.duration || 0), f = 0, m = c.tweens.length; f < m; f++)c.tweens[f].run(e);
            return G.notifyWith(d, [c, e, a]), 1 > e && m ? a : (m || G.notifyWith(d, [c, 1, 0]), G.resolveWith(d, [c]), !1)
        }, c = G.promise({
            elem: d,
            props: f.extend({}, a),
            opts: f.extend(!0, {specialEasing: {}, easing: f.easing._default}, e),
            originalProperties: a,
            originalOptions: e,
            startTime: nb || ha(),
            duration: e.duration,
            tweens: [],
            createTween: function (a, t) {
                var e = f.Tween(d, c.opts, a, t, c.opts.specialEasing[a] || c.opts.easing);
                return c.tweens.push(e), e
            },
            stop: function (a) {
                var e = 0, f = a ? c.tweens.length : 0;
                if (t)return this;
                for (t = !0; e < f; e++)c.tweens[e].run(1);
                return a ? (G.notifyWith(d, [c, 1, 0]), G.resolveWith(d, [c, a])) : G.rejectWith(d, [c, a]), this
            }
        });
        e = c.props;
        for (La(e, c.opts.specialEasing); m < l; m++)if (a = pa.prefilters[m].call(c, d, e, c.opts))return f.isFunction(a.stop) && (f._queueHooks(c.elem,
            c.opts.queue).stop = f.proxy(a.stop, a)), a;
        return f.map(e, Ia, c), f.isFunction(c.opts.start) && c.opts.start.call(d, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), f.fx.timer(f.extend(p, {
            elem: d,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    function Aa(d) {
        return (d.match(T) || []).join(" ")
    }

    function Da(d) {
        return d.getAttribute && d.getAttribute("class") || ""
    }

    function va(d, a, e, m) {
        var t;
        if (Array.isArray(a))f.each(a, function (a, t) {
            e || Sb.test(d) ? m(d, t) : va(d + "[" + ("object" == typeof t &&
                null != t ? a : "") + "]", t, e, m)
        }); else if (e || "object" !== f.type(a))m(d, a); else for (t in a)va(d + "[" + t + "]", a[t], e, m)
    }

    function Ma(d) {
        return function (a, e) {
            "string" != typeof a && (e = a, a = "*");
            var t, m = 0, l = a.toLowerCase().match(T) || [];
            if (f.isFunction(e))for (; t = l[m++];)"+" === t[0] ? (t = t.slice(1) || "*", (d[t] = d[t] || []).unshift(e)) : (d[t] = d[t] || []).push(e)
        }
    }

    function Ja(d, a, e, m) {
        function t(c) {
            var p;
            return l[c] = !0, f.each(d[c] || [], function (d, f) {
                var c = f(a, e, m);
                return "string" != typeof c || G || l[c] ? G ? !(p = c) : void 0 : (a.dataTypes.unshift(c),
                    t(c), !1)
            }), p
        }

        var l = {}, G = d === Cb;
        return t(a.dataTypes[0]) || !l["*"] && t("*")
    }

    function Pa(d, a) {
        var t, e, m = f.ajaxSettings.flatOptions || {};
        for (t in a)void 0 !== a[t] && ((m[t] ? d : e || (e = {}))[t] = a[t]);
        return e && f.extend(!0, d, e), d
    }

    var Ea = [], Z = g.document, Wa = Object.getPrototypeOf, ra = Ea.slice, aa = Ea.concat, p = Ea.push, K = Ea.indexOf, O = {}, P = O.toString, Ga = O.hasOwnProperty, ja = Ga.toString, Ua = ja.call(Object), W = {}, f = function (d, a) {
        return new f.fn.init(d, a)
    }, cb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Na = /^-ms-/, ub = /-([a-z])/g, ob = function (d,
                                                                                                 a) {
        return a.toUpperCase()
    };
    f.fn = f.prototype = {
        jquery: "3.2.1", constructor: f, length: 0, toArray: function () {
            return ra.call(this)
        }, get: function (d) {
            return null == d ? ra.call(this) : 0 > d ? this[d + this.length] : this[d]
        }, pushStack: function (d) {
            d = f.merge(this.constructor(), d);
            return d.prevObject = this, d
        }, each: function (d) {
            return f.each(this, d)
        }, map: function (d) {
            return this.pushStack(f.map(this, function (a, e) {
                return d.call(a, e, a)
            }))
        }, slice: function () {
            return this.pushStack(ra.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        }, eq: function (d) {
            var a = this.length;
            d = +d + (0 > d ? a : 0);
            return this.pushStack(0 <= d && d < a ? [this[d]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: p, sort: Ea.sort, splice: Ea.splice
    };
    f.extend = f.fn.extend = function () {
        var d, a, e, m, l = arguments[0] || {}, c = 1, p = arguments.length, F = !1;
        "boolean" == typeof l && (F = l, l = arguments[c] || {}, c++);
        "object" == typeof l || f.isFunction(l) || (l = {});
        for (c === p && (l = this, c--); c < p; c++)if (null != (d = arguments[c]))for (a in d) {
            var n = l[a];
            var A = d[a];
            l !== A && (F && A && (f.isPlainObject(A) || (e = Array.isArray(A))) ? (e ? (e = !1, m = n && Array.isArray(n) ? n : []) : m = n && f.isPlainObject(n) ? n : {}, l[a] = f.extend(F, m, A)) : void 0 !== A && (l[a] = A))
        }
        return l
    };
    f.extend({
        expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (d) {
            throw Error(d);
        }, noop: function () {
        }, isFunction: function (d) {
            return "function" === f.type(d)
        }, isWindow: function (d) {
            return null != d && d === d.window
        }, isNumeric: function (d) {
            var a = f.type(d);
            return ("number" === a || "string" === a) && !isNaN(d - parseFloat(d))
        },
        isPlainObject: function (d) {
            var a, e;
            return !(!d || "[object Object]" !== P.call(d)) && (!(a = Wa(d)) || (e = Ga.call(a, "constructor") && a.constructor, "function" == typeof e && ja.call(e) === Ua))
        }, isEmptyObject: function (d) {
            for (var a in d)return !1;
            return !0
        }, type: function (d) {
            return null == d ? d + "" : "object" == typeof d || "function" == typeof d ? O[P.call(d)] || "object" : typeof d
        }, globalEval: function (d) {
            C(d)
        }, camelCase: function (d) {
            return d.replace(Na, "ms-").replace(ub, ob)
        }, each: function (d, a) {
            var t, e = 0;
            if (v(d))for (t = d.length; e < t && !1 !==
            a.call(d[e], e, d[e]); e++); else for (e in d)if (!1 === a.call(d[e], e, d[e]))break;
            return d
        }, trim: function (d) {
            return null == d ? "" : (d + "").replace(cb, "")
        }, makeArray: function (d, a) {
            var t = a || [];
            return null != d && (v(Object(d)) ? f.merge(t, "string" == typeof d ? [d] : d) : p.call(t, d)), t
        }, inArray: function (d, a, e) {
            return null == a ? -1 : K.call(a, d, e)
        }, merge: function (d, a) {
            for (var t = +a.length, e = 0, f = d.length; e < t; e++)d[f++] = a[e];
            return d.length = f, d
        }, grep: function (d, a, e) {
            for (var t = [], f = 0, m = d.length, l = !e; f < m; f++)e = !a(d[f], f), e !== l && t.push(d[f]);
            return t
        }, map: function (d, a, e) {
            var t, f = 0, m = [];
            if (v(d))for (t = d.length; f < t; f++) {
                var l = a(d[f], f, e);
                null != l && m.push(l)
            } else for (f in d)l = a(d[f], f, e), null != l && m.push(l);
            return aa.apply([], m)
        }, guid: 1, proxy: function (d, a) {
            var t, e, m;
            if ("string" == typeof a && (t = d[a], a = d, d = t), f.isFunction(d))return e = ra.call(arguments, 2), m = function () {
                return d.apply(a || this, e.concat(ra.call(arguments)))
            }, m.guid = d.guid = d.guid || f.guid++, m
        }, now: Date.now, support: W
    });
    "function" == typeof Symbol && (f.fn[Symbol.iterator] = Ea[Symbol.iterator]);
    f.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (d, a) {
        O["[object " + a + "]"] = a.toLowerCase()
    });
    var Za = function (d) {
        function a(d, a, e, t) {
            var f, m, l, c, p = a && a.ownerDocument, G = a ? a.nodeType : 9;
            if (e = e || [], "string" != typeof d || !d || 1 !== G && 9 !== G && 11 !== G)return e;
            if (!t && ((a ? a.ownerDocument || a : oa) !== ba && Ya(a), a = a || ba, E)) {
                if (11 !== G && (c = cb.exec(d)))if (f = c[1])if (9 === G) {
                    if (!(m = a.getElementById(f)))return e;
                    if (m.id === f)return e.push(m), e
                } else {
                    if (p && (m = p.getElementById(f)) &&
                        u(a, m) && m.id === f)return e.push(m), e
                } else {
                    if (c[2])return qa.apply(e, a.getElementsByTagName(d)), e;
                    if ((f = c[3]) && T.getElementsByClassName && a.getElementsByClassName)return qa.apply(e, a.getElementsByClassName(f)), e
                }
                if (!(!T.qsa || gb[d + " "] || z && z.test(d))) {
                    if (1 !== G) {
                        p = a;
                        var F = d
                    } else if ("object" !== a.nodeName.toLowerCase()) {
                        (l = a.getAttribute("id")) ? l = l.replace(Ab, da) : a.setAttribute("id", l = fa);
                        m = aa(d);
                        for (f = m.length; f--;)m[f] = "#" + l + " " + L(m[f]);
                        F = m.join(",");
                        p = ia.test(d) && b(a.parentNode) || a
                    }
                    if (F)try {
                        return qa.apply(e,
                            p.querySelectorAll(F)), e
                    } catch (kc) {
                    } finally {
                        l === fa && a.removeAttribute("id")
                    }
                }
            }
            return K(d.replace(xa, "$1"), a, e, t)
        }

        function e() {
            function d(e, t) {
                return a.push(e + " ") > S.cacheLength && delete d[a.shift()], d[e + " "] = t
            }

            var a = [];
            return d
        }

        function f(d) {
            return d[fa] = !0, d
        }

        function m(d) {
            var a = ba.createElement("fieldset");
            try {
                return !!d(a)
            } catch (ic) {
                return !1
            } finally {
                a.parentNode && a.parentNode.removeChild(a)
            }
        }

        function l(d, a) {
            for (var e = d.split("|"), t = e.length; t--;)S.attrHandle[e[t]] = a
        }

        function c(d, a) {
            var e = a && d, t = e &&
                1 === d.nodeType && 1 === a.nodeType && d.sourceIndex - a.sourceIndex;
            if (t)return t;
            if (e)for (; e = e.nextSibling;)if (e === a)return -1;
            return d ? 1 : -1
        }

        function p(d) {
            return function (a) {
                return "input" === a.nodeName.toLowerCase() && a.type === d
            }
        }

        function F(d) {
            return function (a) {
                var e = a.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && a.type === d
            }
        }

        function n(d) {
            return function (a) {
                return "form"in a ? a.parentNode && !1 === a.disabled ? "label"in a ? "label"in a.parentNode ? a.parentNode.disabled === d : a.disabled === d : a.isDisabled ===
                d || a.isDisabled !== !d && ea(a) === d : a.disabled === d : "label"in a && a.disabled === d
            }
        }

        function A(d) {
            return f(function (a) {
                return a = +a, f(function (e, t) {
                    for (var f, m = d([], e.length, a), l = m.length; l--;)e[f = m[l]] && (e[f] = !(t[f] = e[f]))
                })
            })
        }

        function b(d) {
            return d && "undefined" != typeof d.getElementsByTagName && d
        }

        function r() {
        }

        function L(d) {
            for (var a = 0, e = d.length, t = ""; a < e; a++)t += d[a].value;
            return t
        }

        function V(d, a, e) {
            var t = a.dir, f = a.next, m = f || t, l = e && "parentNode" === m, c = C++;
            return a.first ? function (a, e, f) {
                for (; a = a[t];)if (1 ===
                    a.nodeType || l)return d(a, e, f);
                return !1
            } : function (a, e, p) {
                var G, F, n, A = [J, c];
                if (p)for (; a = a[t];) {
                    if ((1 === a.nodeType || l) && d(a, e, p))return !0
                } else for (; a = a[t];)if (1 === a.nodeType || l)if (n = a[fa] || (a[fa] = {}), F = n[a.uniqueID] || (n[a.uniqueID] = {}), f && f === a.nodeName.toLowerCase())a = a[t] || a; else {
                    if ((G = F[m]) && G[0] === J && G[1] === c)return A[2] = G[2];
                    if (F[m] = A, A[2] = d(a, e, p))return !0
                }
                return !1
            }
        }

        function g(d) {
            return 1 < d.length ? function (a, e, t) {
                for (var f = d.length; f--;)if (!d[f](a, e, t))return !1;
                return !0
            } : d[0]
        }

        function X(d, a, e,
                   t, f) {
            for (var m, l = [], c = 0, p = d.length, G = null != a; c < p; c++)(m = d[c]) && (e && !e(m, t, f) || (l.push(m), G && a.push(c)));
            return l
        }

        function U(d, e, t, m, l, c) {
            return m && !m[fa] && (m = U(m)), l && !l[fa] && (l = U(l, c)), f(function (f, c, p, G) {
                var F, n = [], A = [], b = c.length, r;
                if (!(r = f)) {
                    r = e || "*";
                    for (var L = p.nodeType ? [p] : p, sa = [], V = 0, g = L.length; V < g; V++)a(r, L[V], sa);
                    r = sa
                }
                r = !d || !f && e ? r : X(r, n, d, p, G);
                L = t ? l || (f ? d : b || m) ? [] : c : r;
                if (t && t(r, L, p, G), m) {
                    var U = X(L, A);
                    m(U, [], p, G);
                    for (p = U.length; p--;)(F = U[p]) && (L[A[p]] = !(r[A[p]] = F))
                }
                if (f) {
                    if (l || d) {
                        if (l) {
                            U =
                                [];
                            for (p = L.length; p--;)(F = L[p]) && U.push(r[p] = F);
                            l(null, L = [], U, G)
                        }
                        for (p = L.length; p--;)(F = L[p]) && -1 < (U = l ? ja(f, F) : n[p]) && (f[U] = !(c[U] = F))
                    }
                } else L = X(L === c ? L.splice(b, L.length) : L), l ? l(null, c, L, G) : qa.apply(c, L)
            })
        }

        function Ca(d) {
            var a, e, t = d.length, f = S.relative[d[0].type];
            var m = f || S.relative[" "];
            for (var l = f ? 1 : 0, c = V(function (d) {
                return d === a
            }, m, !0), p = V(function (d) {
                return -1 < ja(a, d)
            }, m, !0), G = [function (d, e, t) {
                d = !f && (t || e !== I) || ((a = e).nodeType ? c(d, e, t) : p(d, e, t));
                return a = null, d
            }]; l < t; l++)if (m = S.relative[d[l].type])G =
                [V(g(G), m)]; else {
                if (m = S.filter[d[l].type].apply(null, d[l].matches), m[fa]) {
                    for (e = ++l; e < t && !S.relative[d[e].type]; e++);
                    return U(1 < l && g(G), 1 < l && L(d.slice(0, l - 1).concat({value: " " === d[l - 2].type ? "*" : ""})).replace(xa, "$1"), m, l < e && Ca(d.slice(l, e)), e < t && Ca(d = d.slice(e)), e < t && L(d))
                }
                G.push(m)
            }
            return g(G)
        }

        function H(d, e) {
            var t = 0 < e.length, m = 0 < d.length, l = function (f, l, c, p, G) {
                var F, n, A = 0, r = "0", b = f && [], L = [], sa = I, V = f || m && S.find.TAG("*", G), g = J += null == sa ? 1 : Math.random() || .1, U = V.length;
                for (G && (I = l === ba || l || G); r !== U &&
                null != (F = V[r]); r++) {
                    if (m && F) {
                        var Ca = 0;
                        for (l || F.ownerDocument === ba || (Ya(F), c = !E); n = d[Ca++];)if (n(F, l || ba, c)) {
                            p.push(F);
                            break
                        }
                        G && (J = g)
                    }
                    t && ((F = !n && F) && A--, f && b.push(F))
                }
                if (A += r, t && r !== A) {
                    for (Ca = 0; n = e[Ca++];)n(b, L, l, c);
                    if (f) {
                        if (0 < A)for (; r--;)b[r] || L[r] || (L[r] = ca.call(p));
                        L = X(L)
                    }
                    qa.apply(p, L);
                    G && !f && 0 < L.length && 1 < A + e.length && a.uniqueSort(p)
                }
                return G && (J = g, I = sa), b
            };
            return t ? f(l) : l
        }

        var x, q, K, I, O, k, ba, y, E, z, P, v, u, fa = "sizzle" + 1 * new Date, oa = d.document, J = 0, C = 0, B = e(), D = e(), gb = e(), R = function (d, a) {
                return d === a &&
                (k = !0), 0
            }, W = {}.hasOwnProperty, na = [], ca = na.pop, nb = na.push, qa = na.push, Ga = na.slice, ja = function (d, a) {
                for (var e = 0, t = d.length; e < t; e++)if (d[e] === a)return e;
                return -1
            }, Q = RegExp("[\\x20\\t\\r\\n\\f]+", "g"), xa = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), M = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, Eb = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, Ua = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"), Fb = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
            la = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/, ka = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
                ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
                PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            }, N = /^(?:input|select|textarea|button)$/i, Bb = /^h\d$/i, wb = /^[^{]+\{\s*\[native \w/,
            cb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ia = /[+~]/, Na = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"), ha = function (d, a, e) {
                d = "0x" + a - 65536;
                return d !== d || e ? a : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }, Ab = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, da = function (d, a) {
                return a ? "\x00" === d ? "\ufffd" : d.slice(0, -1) + "\\" + d.charCodeAt(d.length - 1).toString(16) + " " : "\\" + d
            }, sb = function () {
                Ya()
            }, ea = V(function (d) {
                return !0 === d.disabled && ("form"in
                    d || "label"in d)
            }, {dir: "parentNode", next: "legend"});
        try {
            qa.apply(na = Ga.call(oa.childNodes), oa.childNodes), na[oa.childNodes.length].nodeType
        } catch (hc) {
            qa = {
                apply: na.length ? function (d, a) {
                    nb.apply(d, Ga.call(a))
                } : function (d, a) {
                    for (var e = d.length, t = 0; d[e++] = a[t++];);
                    d.length = e - 1
                }
            }
        }
        var T = a.support = {};
        var Y = a.isXML = function (d) {
            d = d && (d.ownerDocument || d).documentElement;
            return !!d && "HTML" !== d.nodeName
        };
        var Ya = a.setDocument = function (d) {
            var a, e;
            d = d ? d.ownerDocument || d : oa;
            return d !== ba && 9 === d.nodeType && d.documentElement ?
                (ba = d, y = ba.documentElement, E = !Y(ba), oa !== ba && (e = ba.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", sb, !1) : e.attachEvent && e.attachEvent("onunload", sb)), T.attributes = m(function (d) {
                    return d.className = "i", !d.getAttribute("className")
                }), T.getElementsByTagName = m(function (d) {
                    return d.appendChild(ba.createComment("")), !d.getElementsByTagName("*").length
                }), T.getElementsByClassName = wb.test(ba.getElementsByClassName), T.getById = m(function (d) {
                    return y.appendChild(d).id = fa, !ba.getElementsByName || !ba.getElementsByName(fa).length
                }), T.getById ? (S.filter.ID = function (d) {
                    var a = d.replace(Na, ha);
                    return function (d) {
                        return d.getAttribute("id") === a
                    }
                }, S.find.ID = function (d, a) {
                    if ("undefined" != typeof a.getElementById && E) {
                        var e = a.getElementById(d);
                        return e ? [e] : []
                    }
                }) : (S.filter.ID = function (d) {
                    var a = d.replace(Na, ha);
                    return function (d) {
                        return (d = "undefined" != typeof d.getAttributeNode && d.getAttributeNode("id")) && d.value === a
                    }
                }, S.find.ID = function (d, a) {
                    if ("undefined" != typeof a.getElementById && E) {
                        var e, t, f = a.getElementById(d);
                        if (f) {
                            if (e = f.getAttributeNode("id"), e && e.value === d)return [f];
                            var m = a.getElementsByName(d);
                            for (t = 0; f = m[t++];)if (e = f.getAttributeNode("id"), e && e.value === d)return [f]
                        }
                        return []
                    }
                }), S.find.TAG = T.getElementsByTagName ? function (d, a) {
                    return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(d) : T.qsa ? a.querySelectorAll(d) : void 0
                } : function (d, a) {
                    var e, t = [], f = 0, m = a.getElementsByTagName(d);
                    if ("*" === d) {
                        for (; e = m[f++];)1 === e.nodeType && t.push(e);
                        return t
                    }
                    return m
                }, S.find.CLASS = T.getElementsByClassName &&
                    function (d, a) {
                        if ("undefined" != typeof a.getElementsByClassName && E)return a.getElementsByClassName(d)
                    }, P = [], z = [], (T.qsa = wb.test(ba.querySelectorAll)) && (m(function (d) {
                    y.appendChild(d).innerHTML = "<a id='" + fa + "'></a><select id='" + fa + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                    d.querySelectorAll("[msallowcapture^='']").length && z.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                    d.querySelectorAll("[selected]").length || z.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                    d.querySelectorAll("[id~=" + fa + "-]").length || z.push("~=");
                    d.querySelectorAll(":checked").length || z.push(":checked");
                    d.querySelectorAll("a#" + fa + "+*").length || z.push(".#.+[+~]")
                }), m(function (d) {
                    d.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var a = ba.createElement("input");
                    a.setAttribute("type", "hidden");
                    d.appendChild(a).setAttribute("name", "D");
                    d.querySelectorAll("[name=d]").length && z.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                    2 !== d.querySelectorAll(":enabled").length &&
                    z.push(":enabled", ":disabled");
                    y.appendChild(d).disabled = !0;
                    2 !== d.querySelectorAll(":disabled").length && z.push(":enabled", ":disabled");
                    d.querySelectorAll("*,:x");
                    z.push(",.*:")
                })), (T.matchesSelector = wb.test(v = y.matches || y.webkitMatchesSelector || y.mozMatchesSelector || y.oMatchesSelector || y.msMatchesSelector)) && m(function (d) {
                    T.disconnectedMatch = v.call(d, "*");
                    v.call(d, "[s!='']:x");
                    P.push("!=", ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
                }),
                    z = z.length && new RegExp(z.join("|")), P = P.length && new RegExp(P.join("|")), a = wb.test(y.compareDocumentPosition), u = a || wb.test(y.contains) ? function (d, a) {
                    var e = 9 === d.nodeType ? d.documentElement : d, t = a && a.parentNode;
                    return d === t || !(!t || 1 !== t.nodeType || !(e.contains ? e.contains(t) : d.compareDocumentPosition && 16 & d.compareDocumentPosition(t)))
                } : function (d, a) {
                    if (a)for (; a = a.parentNode;)if (a === d)return !0;
                    return !1
                }, R = a ? function (d, a) {
                    if (d === a)return k = !0, 0;
                    var e = !d.compareDocumentPosition - !a.compareDocumentPosition;
                    return e ? e : (e = (d.ownerDocument || d) === (a.ownerDocument || a) ? d.compareDocumentPosition(a) : 1, 1 & e || !T.sortDetached && a.compareDocumentPosition(d) === e ? d === ba || d.ownerDocument === oa && u(oa, d) ? -1 : a === ba || a.ownerDocument === oa && u(oa, a) ? 1 : O ? ja(O, d) - ja(O, a) : 0 : 4 & e ? -1 : 1)
                } : function (d, a) {
                    if (d === a)return k = !0, 0;
                    var e = 0;
                    var t = d.parentNode;
                    var f = a.parentNode, m = [d], l = [a];
                    if (!t || !f)return d === ba ? -1 : a === ba ? 1 : t ? -1 : f ? 1 : O ? ja(O, d) - ja(O, a) : 0;
                    if (t === f)return c(d, a);
                    for (t = d; t = t.parentNode;)m.unshift(t);
                    for (t = a; t = t.parentNode;)l.unshift(t);
                    for (; m[e] === l[e];)e++;
                    return e ? c(m[e], l[e]) : m[e] === oa ? -1 : l[e] === oa ? 1 : 0
                }, ba) : ba
        };
        a.matches = function (d, e) {
            return a(d, null, null, e)
        };
        a.matchesSelector = function (d, e) {
            if ((d.ownerDocument || d) !== ba && Ya(d), e = e.replace(Ua, "='$1']"), !(!T.matchesSelector || !E || gb[e + " "] || P && P.test(e) || z && z.test(e)))try {
                var t = v.call(d, e);
                if (t || T.disconnectedMatch || d.document && 11 !== d.document.nodeType)return t
            } catch (jc) {
            }
            return 0 < a(e, ba, null, [d]).length
        };
        a.contains = function (d, a) {
            return (d.ownerDocument || d) !== ba && Ya(d), u(d, a)
        };
        a.attr =
            function (d, a) {
                (d.ownerDocument || d) !== ba && Ya(d);
                var e = S.attrHandle[a.toLowerCase()];
                e = e && W.call(S.attrHandle, a.toLowerCase()) ? e(d, a, !E) : void 0;
                return void 0 !== e ? e : T.attributes || !E ? d.getAttribute(a) : (e = d.getAttributeNode(a)) && e.specified ? e.value : null
            };
        a.escape = function (d) {
            return (d + "").replace(Ab, da)
        };
        a.error = function (d) {
            throw Error("Syntax error, unrecognized expression: " + d);
        };
        a.uniqueSort = function (d) {
            var a, e = [], t = 0, f = 0;
            if (k = !T.detectDuplicates, O = !T.sortStable && d.slice(0), d.sort(R), k) {
                for (; a = d[f++];)a ===
                d[f] && (t = e.push(f));
                for (; t--;)d.splice(e[t], 1)
            }
            return O = null, d
        };
        var Z = a.getText = function (d) {
            var a, e = "", t = 0;
            if (a = d.nodeType)if (1 === a || 9 === a || 11 === a) {
                if ("string" == typeof d.textContent)return d.textContent;
                for (d = d.firstChild; d; d = d.nextSibling)e += Z(d)
            } else {
                if (3 === a || 4 === a)return d.nodeValue
            } else for (; a = d[t++];)e += Z(a);
            return e
        };
        var S = a.selectors = {
            cacheLength: 50, createPseudo: f, match: ka, attrHandle: {}, find: {}, relative: {
                ">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            }, preFilter: {
                ATTR: function (d) {
                    return d[1] = d[1].replace(Na, ha), d[3] = (d[3] || d[4] || d[5] || "").replace(Na, ha), "~=" === d[2] && (d[3] = " " + d[3] + " "), d.slice(0, 4)
                }, CHILD: function (d) {
                    return d[1] = d[1].toLowerCase(), "nth" === d[1].slice(0, 3) ? (d[3] || a.error(d[0]), d[4] = +(d[4] ? d[5] + (d[6] || 1) : 2 * ("even" === d[3] || "odd" === d[3])), d[5] = +(d[7] + d[8] || "odd" === d[3])) : d[3] && a.error(d[0]), d
                }, PSEUDO: function (d) {
                    var a, e = !d[6] && d[2];
                    return ka.CHILD.test(d[0]) ? null : (d[3] ? d[2] = d[4] || d[5] || "" : e && Fb.test(e) &&
                    (a = aa(e, !0)) && (a = e.indexOf(")", e.length - a) - e.length) && (d[0] = d[0].slice(0, a), d[2] = e.slice(0, a)), d.slice(0, 3))
                }
            }, filter: {
                TAG: function (d) {
                    var a = d.replace(Na, ha).toLowerCase();
                    return "*" === d ? function () {
                        return !0
                    } : function (d) {
                        return d.nodeName && d.nodeName.toLowerCase() === a
                    }
                }, CLASS: function (d) {
                    var a = B[d + " "];
                    return a || (a = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + d + "([\\x20\\t\\r\\n\\f]|$)"), B(d, function (d) {
                            return a.test("string" == typeof d.className && d.className || "undefined" != typeof d.getAttribute && d.getAttribute("class") ||
                                "")
                        }))
                }, ATTR: function (d, e, t) {
                    return function (f) {
                        f = a.attr(f, d);
                        return null == f ? "!=" === e : !e || (f += "", "=" === e ? f === t : "!=" === e ? f !== t : "^=" === e ? t && 0 === f.indexOf(t) : "*=" === e ? t && -1 < f.indexOf(t) : "$=" === e ? t && f.slice(-t.length) === t : "~=" === e ? -1 < (" " + f.replace(Q, " ") + " ").indexOf(t) : "|=" === e && (f === t || f.slice(0, t.length + 1) === t + "-"))
                    }
                }, CHILD: function (d, a, e, t, f) {
                    var m = "nth" !== d.slice(0, 3), l = "last" !== d.slice(-4), c = "of-type" === a;
                    return 1 === t && 0 === f ? function (d) {
                        return !!d.parentNode
                    } : function (a, e, p) {
                        var G, F;
                        e = m !== l ? "nextSibling" :
                            "previousSibling";
                        var n = a.parentNode, A = c && a.nodeName.toLowerCase();
                        p = !p && !c;
                        var r = !1;
                        if (n) {
                            if (m) {
                                for (; e;) {
                                    for (G = a; G = G[e];)if (c ? G.nodeName.toLowerCase() === A : 1 === G.nodeType)return !1;
                                    var L = e = "only" === d && !L && "nextSibling"
                                }
                                return !0
                            }
                            if (L = [l ? n.firstChild : n.lastChild], l && p) {
                                G = n;
                                var b = G[fa] || (G[fa] = {});
                                var sa = b[G.uniqueID] || (b[G.uniqueID] = {});
                                var V = sa[d] || [];
                                r = (F = V[0] === J && V[1]) && V[2];
                                for (G = F && n.childNodes[F]; G = ++F && G && G[e] || (r = F = 0) || L.pop();)if (1 === G.nodeType && ++r && G === a) {
                                    sa[d] = [J, F, r];
                                    break
                                }
                            } else if (p &&
                                (G = a, b = G[fa] || (G[fa] = {}), sa = b[G.uniqueID] || (b[G.uniqueID] = {}), V = sa[d] || [], F = V[0] === J && V[1], r = F), !1 === r)for (; (G = ++F && G && G[e] || (r = F = 0) || L.pop()) && ((c ? G.nodeName.toLowerCase() !== A : 1 !== G.nodeType) || !++r || (p && (b = G[fa] || (G[fa] = {}), sa = b[G.uniqueID] || (b[G.uniqueID] = {}), sa[d] = [J, r]), G !== a)););
                            return r -= f, r === t || 0 === r % t && 0 <= r / t
                        }
                    }
                }, PSEUDO: function (d, e) {
                    var t, m = S.pseudos[d] || S.setFilters[d.toLowerCase()] || a.error("unsupported pseudo: " + d);
                    return m[fa] ? m(e) : 1 < m.length ? (t = [d, d, "", e], S.setFilters.hasOwnProperty(d.toLowerCase()) ?
                        f(function (d, a) {
                            for (var t, f = m(d, e), l = f.length; l--;)t = ja(d, f[l]), d[t] = !(a[t] = f[l])
                        }) : function (d) {
                        return m(d, 0, t)
                    }) : m
                }
            }, pseudos: {
                not: f(function (d) {
                    var a = [], e = [], t = q(d.replace(xa, "$1"));
                    return t[fa] ? f(function (d, a, e, f) {
                        var m;
                        e = t(d, null, f, []);
                        for (f = d.length; f--;)(m = e[f]) && (d[f] = !(a[f] = m))
                    }) : function (d, f, m) {
                        return a[0] = d, t(a, null, m, e), a[0] = null, !e.pop()
                    }
                }), has: f(function (d) {
                    return function (e) {
                        return 0 < a(d, e).length
                    }
                }), contains: f(function (d) {
                    return d = d.replace(Na, ha), function (a) {
                        return -1 < (a.textContent ||
                            a.innerText || Z(a)).indexOf(d)
                    }
                }), lang: f(function (d) {
                    return la.test(d || "") || a.error("unsupported lang: " + d), d = d.replace(Na, ha).toLowerCase(), function (a) {
                        var e;
                        do if (e = E ? a.lang : a.getAttribute("xml:lang") || a.getAttribute("lang"))return e = e.toLowerCase(), e === d || 0 === e.indexOf(d + "-"); while ((a = a.parentNode) && 1 === a.nodeType);
                        return !1
                    }
                }), target: function (a) {
                    var e = d.location && d.location.hash;
                    return e && e.slice(1) === a.id
                }, root: function (d) {
                    return d === y
                }, focus: function (d) {
                    return d === ba.activeElement && (!ba.hasFocus ||
                        ba.hasFocus()) && !!(d.type || d.href || ~d.tabIndex)
                }, enabled: n(!1), disabled: n(!0), checked: function (d) {
                    var a = d.nodeName.toLowerCase();
                    return "input" === a && !!d.checked || "option" === a && !!d.selected
                }, selected: function (d) {
                    return d.parentNode && d.parentNode.selectedIndex, !0 === d.selected
                }, empty: function (d) {
                    for (d = d.firstChild; d; d = d.nextSibling)if (6 > d.nodeType)return !1;
                    return !0
                }, parent: function (d) {
                    return !S.pseudos.empty(d)
                }, header: function (d) {
                    return Bb.test(d.nodeName)
                }, input: function (d) {
                    return N.test(d.nodeName)
                },
                button: function (d) {
                    var a = d.nodeName.toLowerCase();
                    return "input" === a && "button" === d.type || "button" === a
                }, text: function (d) {
                    var a;
                    return "input" === d.nodeName.toLowerCase() && "text" === d.type && (null == (a = d.getAttribute("type")) || "text" === a.toLowerCase())
                }, first: A(function () {
                    return [0]
                }), last: A(function (d, a) {
                    return [a - 1]
                }), eq: A(function (d, a, e) {
                    return [0 > e ? e + a : e]
                }), even: A(function (d, a) {
                    for (var e = 0; e < a; e += 2)d.push(e);
                    return d
                }), odd: A(function (d, a) {
                    for (var e = 1; e < a; e += 2)d.push(e);
                    return d
                }), lt: A(function (d, a, e) {
                    for (a =
                             0 > e ? e + a : e; 0 <= --a;)d.push(a);
                    return d
                }), gt: A(function (d, a, e) {
                    for (e = 0 > e ? e + a : e; ++e < a;)d.push(e);
                    return d
                })
            }
        };
        S.pseudos.nth = S.pseudos.eq;
        for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})S.pseudos[x] = p(x);
        for (x in{submit: !0, reset: !0})S.pseudos[x] = F(x);
        r.prototype = S.filters = S.pseudos;
        S.setFilters = new r;
        var aa = a.tokenize = function (d, e) {
            var t, f, m, l, c;
            if (l = D[d + " "])return e ? 0 : l.slice(0);
            l = d;
            var G = [];
            for (c = S.preFilter; l;) {
                p && !(t = M.exec(l)) || (t && (l = l.slice(t[0].length) || l), G.push(f = []));
                var p = !1;
                (t =
                    Eb.exec(l)) && (p = t.shift(), f.push({
                    value: p,
                    type: t[0].replace(xa, " ")
                }), l = l.slice(p.length));
                for (m in S.filter)!(t = ka[m].exec(l)) || c[m] && !(t = c[m](t)) || (p = t.shift(), f.push({
                    value: p,
                    type: m,
                    matches: t
                }), l = l.slice(p.length));
                if (!p)break
            }
            return e ? l.length : l ? a.error(d) : D(d, G).slice(0)
        };
        return q = a.compile = function (d, a) {
            var e, t = [], f = [], m = gb[d + " "];
            if (!m) {
                a || (a = aa(d));
                for (e = a.length; e--;)m = Ca(a[e]), m[fa] ? t.push(m) : f.push(m);
                m = gb(d, H(f, t));
                m.selector = d
            }
            return m
        }, K = a.select = function (d, a, e, t) {
            var f, m, l, c, p, G = "function" == typeof d && d, F = !t && aa(d = G.selector || d);
            if (e = e || [], 1 === F.length) {
                if (m = F[0] = F[0].slice(0), 2 < m.length && "ID" === (l = m[0]).type && 9 === a.nodeType && E && S.relative[m[1].type]) {
                    if (a = (S.find.ID(l.matches[0].replace(Na, ha), a) || [])[0], !a)return e;
                    G && (a = a.parentNode);
                    d = d.slice(m.shift().value.length)
                }
                for (f = ka.needsContext.test(d) ? 0 : m.length; f-- && (l = m[f], !S.relative[c = l.type]);)if ((p = S.find[c]) && (t = p(l.matches[0].replace(Na, ha), ia.test(m[0].type) && b(a.parentNode) || a))) {
                    if (m.splice(f, 1), d = t.length && L(m), !d)return qa.apply(e,
                        t), e;
                    break
                }
            }
            return (G || q(d, F))(t, a, !E, e, !a || ia.test(d) && b(a.parentNode) || a), e
        }, T.sortStable = fa.split("").sort(R).join("") === fa, T.detectDuplicates = !!k, Ya(), T.sortDetached = m(function (d) {
            return 1 & d.compareDocumentPosition(ba.createElement("fieldset"))
        }), m(function (d) {
            return d.innerHTML = "<a href='#'></a>", "#" === d.firstChild.getAttribute("href")
        }) || l("type|href|height|width", function (d, a, e) {
            if (!e)return d.getAttribute(a, "type" === a.toLowerCase() ? 1 : 2)
        }), T.attributes && m(function (d) {
            return d.innerHTML = "<input/>",
                d.firstChild.setAttribute("value", ""), "" === d.firstChild.getAttribute("value")
        }) || l("value", function (d, a, e) {
            if (!e && "input" === d.nodeName.toLowerCase())return d.defaultValue
        }), m(function (d) {
            return null == d.getAttribute("disabled")
        }) || l("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (d, a, e) {
            var t;
            if (!e)return !0 === d[a] ? a.toLowerCase() : (t = d.getAttributeNode(a)) && t.specified ? t.value : null
        }), a
    }(g);
    f.find = Za;
    f.expr = Za.selectors;
    f.expr[":"] = f.expr.pseudos;
    f.uniqueSort = f.unique = Za.uniqueSort;
    f.text = Za.getText;
    f.isXMLDoc = Za.isXML;
    f.contains = Za.contains;
    f.escapeSelector = Za.escape;
    var ma = function (d, a, e) {
        for (var t = [], m = void 0 !== e; (d = d[a]) && 9 !== d.nodeType;)if (1 === d.nodeType) {
            if (m && f(d).is(e))break;
            t.push(d)
        }
        return t
    }, Va = function (d, a) {
        for (var e = []; d; d = d.nextSibling)1 === d.nodeType && d !== a && e.push(d);
        return e
    }, ya = f.expr.match.needsContext, Ka = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, za = /^.[^:#\[\.,]*$/;
    f.filter =
        function (d, a, e) {
            var t = a[0];
            return e && (d = ":not(" + d + ")"), 1 === a.length && 1 === t.nodeType ? f.find.matchesSelector(t, d) ? [t] : [] : f.find.matches(d, f.grep(a, function (d) {
                return 1 === d.nodeType
            }))
        };
    f.fn.extend({
        find: function (d) {
            var a, e = this.length, m = this;
            if ("string" != typeof d)return this.pushStack(f(d).filter(function () {
                for (a = 0; a < e; a++)if (f.contains(m[a], this))return !0
            }));
            var l = this.pushStack([]);
            for (a = 0; a < e; a++)f.find(d, m[a], l);
            return 1 < e ? f.uniqueSort(l) : l
        }, filter: function (d) {
            return this.pushStack(B(this, d || [],
                !1))
        }, not: function (d) {
            return this.pushStack(B(this, d || [], !0))
        }, is: function (d) {
            return !!B(this, "string" == typeof d && ya.test(d) ? f(d) : d || [], !1).length
        }
    });
    var $a = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (f.fn.init = function (d, a, e) {
        var t, m;
        if (!d)return this;
        if (e = e || Xa, "string" == typeof d) {
            if (t = "<" === d[0] && ">" === d[d.length - 1] && 3 <= d.length ? [null, d, null] : $a.exec(d), !t || !t[1] && a)return !a || a.jquery ? (a || e).find(d) : this.constructor(a).find(d);
            if (t[1]) {
                if (a = a instanceof f ? a[0] : a, f.merge(this, f.parseHTML(t[1], a && a.nodeType ?
                    a.ownerDocument || a : Z, !0)), Ka.test(t[1]) && f.isPlainObject(a))for (t in a)f.isFunction(this[t]) ? this[t](a[t]) : this.attr(t, a[t]);
                return this
            }
            return m = Z.getElementById(t[2]), m && (this[0] = m, this.length = 1), this
        }
        return d.nodeType ? (this[0] = d, this.length = 1, this) : f.isFunction(d) ? void 0 !== e.ready ? e.ready(d) : d(f) : f.makeArray(d, this)
    }).prototype = f.fn;
    var Xa = f(Z);
    var Ba = /^(?:parents|prev(?:Until|All))/, eb = {children: !0, contents: !0, next: !0, prev: !0};
    f.fn.extend({
        has: function (d) {
            var a = f(d, this), e = a.length;
            return this.filter(function () {
                for (var d =
                    0; d < e; d++)if (f.contains(this, a[d]))return !0
            })
        }, closest: function (d, a) {
            var e, t = 0, m = this.length, l = [], c = "string" != typeof d && f(d);
            if (!ya.test(d))for (; t < m; t++)for (e = this[t]; e && e !== a; e = e.parentNode)if (11 > e.nodeType && (c ? -1 < c.index(e) : 1 === e.nodeType && f.find.matchesSelector(e, d))) {
                l.push(e);
                break
            }
            return this.pushStack(1 < l.length ? f.uniqueSort(l) : l)
        }, index: function (d) {
            return d ? "string" == typeof d ? K.call(f(d), this[0]) : K.call(this, d.jquery ? d[0] : d) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (d,
                          a) {
            return this.pushStack(f.uniqueSort(f.merge(this.get(), f(d, a))))
        }, addBack: function (d) {
            return this.add(null == d ? this.prevObject : this.prevObject.filter(d))
        }
    });
    f.each({
        parent: function (d) {
            return (d = d.parentNode) && 11 !== d.nodeType ? d : null
        }, parents: function (d) {
            return ma(d, "parentNode")
        }, parentsUntil: function (d, a, e) {
            return ma(d, "parentNode", e)
        }, next: function (d) {
            return D(d, "nextSibling")
        }, prev: function (d) {
            return D(d, "previousSibling")
        }, nextAll: function (d) {
            return ma(d, "nextSibling")
        }, prevAll: function (d) {
            return ma(d,
                "previousSibling")
        }, nextUntil: function (d, a, e) {
            return ma(d, "nextSibling", e)
        }, prevUntil: function (d, a, e) {
            return ma(d, "previousSibling", e)
        }, siblings: function (d) {
            return Va((d.parentNode || {}).firstChild, d)
        }, children: function (d) {
            return Va(d.firstChild)
        }, contents: function (d) {
            return k(d, "iframe") ? d.contentDocument : (k(d, "template") && (d = d.content || d), f.merge([], d.childNodes))
        }
    }, function (d, a) {
        f.fn[d] = function (e, t) {
            var m = f.map(this, a, e);
            return "Until" !== d.slice(-5) && (t = e), t && "string" == typeof t && (m = f.filter(t, m)),
            1 < this.length && (eb[d] || f.uniqueSort(m), Ba.test(d) && m.reverse()), this.pushStack(m)
        }
    });
    var T = /[^\x20\t\r\n\f]+/g;
    f.Callbacks = function (d) {
        d = "string" == typeof d ? N(d) : f.extend({}, d);
        var a, e, m, l, c = [], p = [], F = -1, n = function () {
            l = l || d.once;
            for (m = a = !0; p.length; F = -1)for (e = p.shift(); ++F < c.length;)!1 === c[F].apply(e[0], e[1]) && d.stopOnFalse && (F = c.length, e = !1);
            d.memory || (e = !1);
            a = !1;
            l && (c = e ? [] : "")
        }, A = {
            add: function () {
                return c && (e && !a && (F = c.length - 1, p.push(e)), function Rb(a) {
                    f.each(a, function (a, e) {
                        f.isFunction(e) ? d.unique &&
                        A.has(e) || c.push(e) : e && e.length && "string" !== f.type(e) && Rb(e)
                    })
                }(arguments), e && !a && n()), this
            }, remove: function () {
                return f.each(arguments, function (d, a) {
                    for (var e; -1 < (e = f.inArray(a, c, e));)c.splice(e, 1), e <= F && F--
                }), this
            }, has: function (d) {
                return d ? -1 < f.inArray(d, c) : 0 < c.length
            }, empty: function () {
                return c && (c = []), this
            }, disable: function () {
                return l = p = [], c = e = "", this
            }, disabled: function () {
                return !c
            }, lock: function () {
                return l = p = [], e || a || (c = e = ""), this
            }, locked: function () {
                return !!l
            }, fireWith: function (d, e) {
                return l || (e =
                    e || [], e = [d, e.slice ? e.slice() : e], p.push(e), a || n()), this
            }, fire: function () {
                return A.fireWith(this, arguments), this
            }, fired: function () {
                return !!m
            }
        };
        return A
    };
    f.extend({
        Deferred: function (d) {
            var a = [["notify", "progress", f.Callbacks("memory"), f.Callbacks("memory"), 2], ["resolve", "done", f.Callbacks("once memory"), f.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", f.Callbacks("once memory"), f.Callbacks("once memory"), 1, "rejected"]], e = "pending", m = {
                state: function () {
                    return e
                }, always: function () {
                    return l.done(arguments).fail(arguments),
                        this
                }, "catch": function (d) {
                    return m.then(null, d)
                }, pipe: function () {
                    var d = arguments;
                    return f.Deferred(function (e) {
                        f.each(a, function (a, t) {
                            var m = f.isFunction(d[t[4]]) && d[t[4]];
                            l[t[1]](function () {
                                var d = m && m.apply(this, arguments);
                                d && f.isFunction(d.promise) ? d.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[t[0] + "With"](this, m ? [d] : arguments)
                            })
                        });
                        d = null
                    }).promise()
                }, then: function (d, e, t) {
                    function m(d, a, e, t) {
                        return function () {
                            var c = this, p = arguments, F = function () {
                                var F;
                                if (!(d < l)) {
                                    if (F = e.apply(c, p),
                                        F === a.promise())throw new TypeError("Thenable self-resolution");
                                    var G = F && ("object" == typeof F || "function" == typeof F) && F.then;
                                    f.isFunction(G) ? t ? G.call(F, m(l, a, z, t), m(l, a, b, t)) : (l++, G.call(F, m(l, a, z, t), m(l, a, b, t), m(l, a, z, a.notifyWith))) : (e !== z && (c = void 0, p = [F]), (t || a.resolveWith)(c, p))
                                }
                            }, G = t ? F : function () {
                                try {
                                    F()
                                } catch (Kb) {
                                    f.Deferred.exceptionHook && f.Deferred.exceptionHook(Kb, G.stackTrace), d + 1 >= l && (e !== b && (c = void 0, p = [Kb]), a.rejectWith(c, p))
                                }
                            };
                            d ? G() : (f.Deferred.getStackHook && (G.stackTrace = f.Deferred.getStackHook()),
                                g.setTimeout(G))
                        }
                    }

                    var l = 0;
                    return f.Deferred(function (l) {
                        a[0][3].add(m(0, l, f.isFunction(t) ? t : z, l.notifyWith));
                        a[1][3].add(m(0, l, f.isFunction(d) ? d : z));
                        a[2][3].add(m(0, l, f.isFunction(e) ? e : b))
                    }).promise()
                }, promise: function (d) {
                    return null != d ? f.extend(d, m) : m
                }
            }, l = {};
            return f.each(a, function (d, t) {
                var f = t[2], c = t[5];
                m[t[1]] = f.add;
                c && f.add(function () {
                    e = c
                }, a[3 - d][2].disable, a[0][2].lock);
                f.add(t[3].fire);
                l[t[0]] = function () {
                    return l[t[0] + "With"](this === l ? void 0 : this, arguments), this
                };
                l[t[0] + "With"] = f.fireWith
            }),
                m.promise(l), d && d.call(l, l), l
        }, when: function (d) {
            var a = arguments.length, e = a, m = Array(e), l = ra.call(arguments), c = f.Deferred(), p = function (d) {
                return function (e) {
                    m[d] = this;
                    l[d] = 1 < arguments.length ? ra.call(arguments) : e;
                    --a || c.resolveWith(m, l)
                }
            };
            if (1 >= a && (y(d, c.done(p(e)).resolve, c.reject, !a), "pending" === c.state() || f.isFunction(l[e] && l[e].then)))return c.then();
            for (; e--;)y(l[e], p(e), c.reject);
            return c.promise()
        }
    });
    var db = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    f.Deferred.exceptionHook = function (d,
                                         a) {
        g.console && g.console.warn && d && db.test(d.name) && g.console.warn("jQuery.Deferred exception: " + d.message, d.stack, a)
    };
    f.readyException = function (d) {
        g.setTimeout(function () {
            throw d;
        })
    };
    var Ra = f.Deferred();
    f.fn.ready = function (d) {
        return Ra.then(d)["catch"](function (d) {
            f.readyException(d)
        }), this
    };
    f.extend({
        isReady: !1, readyWait: 1, ready: function (d) {
            (!0 === d ? --f.readyWait : f.isReady) || (f.isReady = !0, !0 !== d && 0 < --f.readyWait || Ra.resolveWith(Z, [f]))
        }
    });
    f.ready.then = Ra.then;
    "complete" === Z.readyState || "loading" !==
    Z.readyState && !Z.documentElement.doScroll ? g.setTimeout(f.ready) : (Z.addEventListener("DOMContentLoaded", q), g.addEventListener("load", q));
    var Sa = function (d, a, e, m, l, c, p) {
        var t = 0, F = d.length, G = null == e;
        if ("object" === f.type(e))for (t in l = !0, e)Sa(d, a, t, e[t], !0, c, p); else if (void 0 !== m && (l = !0, f.isFunction(m) || (p = !0), G && (p ? (a.call(d, m), a = null) : (G = a, a = function (d, a, e) {
                return G.call(f(d), e)
            })), a))for (; t < F; t++)a(d[t], e, p ? m : m.call(d[t], t, a(d[t], e)));
        return l ? d : G ? a.call(d) : F ? a(d[0], e) : c
    }, wa = function (d) {
        return 1 ===
            d.nodeType || 9 === d.nodeType || !+d.nodeType
    };
    I.uid = 1;
    I.prototype = {
        cache: function (d) {
            var a = d[this.expando];
            return a || (a = {}, wa(d) && (d.nodeType ? d[this.expando] = a : Object.defineProperty(d, this.expando, {
                value: a,
                configurable: !0
            }))), a
        }, set: function (d, a, e) {
            var t;
            d = this.cache(d);
            if ("string" == typeof a)d[f.camelCase(a)] = e; else for (t in a)d[f.camelCase(t)] = a[t];
            return d
        }, get: function (d, a) {
            return void 0 === a ? this.cache(d) : d[this.expando] && d[this.expando][f.camelCase(a)]
        }, access: function (d, a, e) {
            return void 0 === a || a &&
            "string" == typeof a && void 0 === e ? this.get(d, a) : (this.set(d, a, e), void 0 !== e ? e : a)
        }, remove: function (d, a) {
            var e, m = d[this.expando];
            if (void 0 !== m) {
                if (void 0 !== a)for (Array.isArray(a) ? a = a.map(f.camelCase) : (a = f.camelCase(a), a = a in m ? [a] : a.match(T) || []), e = a.length; e--;)delete m[a[e]];
                (void 0 === a || f.isEmptyObject(m)) && (d.nodeType ? d[this.expando] = void 0 : delete d[this.expando])
            }
        }, hasData: function (d) {
            d = d[this.expando];
            return void 0 !== d && !f.isEmptyObject(d)
        }
    };
    var Y = new I, Fa = new I, Qa = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        jb = /[A-Z]/g;
    f.extend({
        hasData: function (d) {
            return Fa.hasData(d) || Y.hasData(d)
        }, data: function (d, a, e) {
            return Fa.access(d, a, e)
        }, removeData: function (d, a) {
            Fa.remove(d, a)
        }, _data: function (d, a, e) {
            return Y.access(d, a, e)
        }, _removeData: function (d, a) {
            Y.remove(d, a)
        }
    });
    f.fn.extend({
        data: function (d, a) {
            var e, m, t, l = this[0], c = l && l.attributes;
            if (void 0 === d) {
                if (this.length && (t = Fa.get(l), 1 === l.nodeType && !Y.get(l, "hasDataAttrs"))) {
                    for (e = c.length; e--;)c[e] && (m = c[e].name, 0 === m.indexOf("data-") && (m = f.camelCase(m.slice(5)),
                        J(l, m, t[m])));
                    Y.set(l, "hasDataAttrs", !0)
                }
                return t
            }
            return "object" == typeof d ? this.each(function () {
                Fa.set(this, d)
            }) : Sa(this, function (a) {
                var e;
                if (l && void 0 === a) {
                    if ((e = Fa.get(l, d), void 0 !== e) || (e = J(l, d), void 0 !== e))return e
                } else this.each(function () {
                    Fa.set(this, d, a)
                })
            }, null, a, 1 < arguments.length, null, !0)
        }, removeData: function (d) {
            return this.each(function () {
                Fa.remove(this, d)
            })
        }
    });
    f.extend({
        queue: function (d, a, e) {
            var m;
            if (d)return a = (a || "fx") + "queue", m = Y.get(d, a), e && (!m || Array.isArray(e) ? m = Y.access(d, a, f.makeArray(e)) :
                m.push(e)), m || []
        }, dequeue: function (d, a) {
            a = a || "fx";
            var e = f.queue(d, a), m = e.length, t = e.shift(), l = f._queueHooks(d, a), c = function () {
                f.dequeue(d, a)
            };
            "inprogress" === t && (t = e.shift(), m--);
            t && ("fx" === a && e.unshift("inprogress"), delete l.stop, t.call(d, c, l));
            !m && l && l.empty.fire()
        }, _queueHooks: function (d, a) {
            var e = a + "queueHooks";
            return Y.get(d, e) || Y.access(d, e, {
                    empty: f.Callbacks("once memory").add(function () {
                        Y.remove(d, [a + "queue", e])
                    })
                })
        }
    });
    f.fn.extend({
        queue: function (d, a) {
            var e = 2;
            return "string" != typeof d && (a = d,
                d = "fx", e--), arguments.length < e ? f.queue(this[0], d) : void 0 === a ? this : this.each(function () {
                var e = f.queue(this, d, a);
                f._queueHooks(this, d);
                "fx" === d && "inprogress" !== e[0] && f.dequeue(this, d)
            })
        }, dequeue: function (d) {
            return this.each(function () {
                f.dequeue(this, d)
            })
        }, clearQueue: function (d) {
            return this.queue(d || "fx", [])
        }, promise: function (d, a) {
            var e, m = 1, t = f.Deferred(), l = this, c = this.length, p = function () {
                --m || t.resolveWith(l, [l])
            };
            "string" != typeof d && (a = d, d = void 0);
            for (d = d || "fx"; c--;)(e = Y.get(l[c], d + "queueHooks")) &&
            e.empty && (m++, e.empty.add(p));
            return p(), t.promise(a)
        }
    });
    var yb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ab = new RegExp("^(?:([+-])=|)(" + yb + ")([a-z%]*)$", "i"), Oa = ["Top", "Right", "Bottom", "Left"], kb = function (d, a) {
        return d = a || d, "none" === d.style.display || "" === d.style.display && f.contains(d.ownerDocument, d) && "none" === f.css(d, "display")
    }, pb = function (d, a, e, m) {
        var f, t = {};
        for (f in a)t[f] = d.style[f], d.style[f] = a[f];
        e = e.apply(d, m || []);
        for (f in a)d.style[f] = t[f];
        return e
    }, tb = {};
    f.fn.extend({
        show: function () {
            return a(this,
                !0)
        }, hide: function () {
            return a(this)
        }, toggle: function (d) {
            return "boolean" == typeof d ? d ? this.show() : this.hide() : this.each(function () {
                kb(this) ? f(this).show() : f(this).hide()
            })
        }
    });
    var qb = /^(?:checkbox|radio)$/i, lb = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, mb = /^$|\/(?:java|ecma)script/i, Ha = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Ha.optgroup = Ha.option;
    Ha.tbody = Ha.tfoot = Ha.colgroup = Ha.caption = Ha.thead;
    Ha.th = Ha.td;
    var xb = /<|&#?\w+;/;
    !function () {
        var d = Z.createDocumentFragment().appendChild(Z.createElement("div")), a = Z.createElement("input");
        a.setAttribute("type", "radio");
        a.setAttribute("checked", "checked");
        a.setAttribute("name", "t");
        d.appendChild(a);
        W.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked;
        d.innerHTML = "<textarea>x</textarea>";
        W.noCloneChecked = !!d.cloneNode(!0).lastChild.defaultValue
    }();
    var hb = Z.documentElement, vb = /^key/, Ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, fb = /^([^.]*)(?:\.(.+)|)/;
    f.event = {
        global: {}, add: function (d, a, e, m, l) {
            var t, c, p, F, n, G, A, r;
            if (F = Y.get(d))for (e.handler && (t = e, e = t.handler, l = t.selector), l && f.find.matchesSelector(hb, l), e.guid || (e.guid = f.guid++), (p = F.events) || (p = F.events = {}), (c = F.handle) || (c = F.handle = function (a) {
                return "undefined" != typeof f && f.event.triggered !== a.type ? f.event.dispatch.apply(d, arguments) : void 0
            }), a = (a || "").match(T) || [""], F = a.length; F--;) {
                var b =
                    fb.exec(a[F]) || [];
                var L = r = b[1];
                b = (b[2] || "").split(".").sort();
                L && (G = f.event.special[L] || {}, L = (l ? G.delegateType : G.bindType) || L, G = f.event.special[L] || {}, n = f.extend({
                    type: L,
                    origType: r,
                    data: m,
                    handler: e,
                    guid: e.guid,
                    selector: l,
                    needsContext: l && f.expr.match.needsContext.test(l),
                    namespace: b.join(".")
                }, t), (A = p[L]) || (A = p[L] = [], A.delegateCount = 0, G.setup && !1 !== G.setup.call(d, m, b, c) || d.addEventListener && d.addEventListener(L, c)), G.add && (G.add.call(d, n), n.handler.guid || (n.handler.guid = e.guid)), l ? A.splice(A.delegateCount++,
                    0, n) : A.push(n), f.event.global[L] = !0)
            }
        }, remove: function (d, a, e, m, l) {
            var t, c, p, F, n, A, G, r, L = Y.hasData(d) && Y.get(d);
            if (L && (F = L.events)) {
                a = (a || "").match(T) || [""];
                for (n = a.length; n--;)if (p = fb.exec(a[n]) || [], A = r = p[1], G = (p[2] || "").split(".").sort(), A) {
                    var b = f.event.special[A] || {};
                    A = (m ? b.delegateType : b.bindType) || A;
                    var V = F[A] || [];
                    p = p[2] && new RegExp("(^|\\.)" + G.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    for (c = t = V.length; t--;) {
                        var g = V[t];
                        !l && r !== g.origType || e && e.guid !== g.guid || p && !p.test(g.namespace) || m && m !== g.selector &&
                        ("**" !== m || !g.selector) || (V.splice(t, 1), g.selector && V.delegateCount--, b.remove && b.remove.call(d, g))
                    }
                    c && !V.length && (b.teardown && !1 !== b.teardown.call(d, G, L.handle) || f.removeEvent(d, A, L.handle), delete F[A])
                } else for (A in F)f.event.remove(d, A + a[n], e, m, !0);
                f.isEmptyObject(F) && Y.remove(d, "handle events")
            }
        }, dispatch: function (d) {
            var a = f.event.fix(d), e, m, l, c, p = Array(arguments.length);
            var F = (Y.get(this, "events") || {})[a.type] || [];
            var n = f.event.special[a.type] || {};
            p[0] = a;
            for (e = 1; e < arguments.length; e++)p[e] = arguments[e];
            if (a.delegateTarget = this, !n.preDispatch || !1 !== n.preDispatch.call(this, a)) {
                var A = f.event.handlers.call(this, a, F);
                for (e = 0; (l = A[e++]) && !a.isPropagationStopped();)for (a.currentTarget = l.elem, F = 0; (c = l.handlers[F++]) && !a.isImmediatePropagationStopped();)a.rnamespace && !a.rnamespace.test(c.namespace) || (a.handleObj = c, a.data = c.data, m = ((f.event.special[c.origType] || {}).handle || c.handler).apply(l.elem, p), void 0 !== m && !1 === (a.result = m) && (a.preventDefault(), a.stopPropagation()));
                return n.postDispatch && n.postDispatch.call(this,
                    a), a.result
            }
        }, handlers: function (d, a) {
            var e, m = [], t = a.delegateCount, l = d.target;
            if (t && l.nodeType && !("click" === d.type && 1 <= d.button))for (; l !== this; l = l.parentNode || this)if (1 === l.nodeType && ("click" !== d.type || !0 !== l.disabled)) {
                var c = [];
                var p = {};
                for (e = 0; e < t; e++) {
                    var F = a[e];
                    var n = F.selector + " ";
                    void 0 === p[n] && (p[n] = F.needsContext ? -1 < f(n, this).index(l) : f.find(n, this, null, [l]).length);
                    p[n] && c.push(F)
                }
                c.length && m.push({elem: l, handlers: c})
            }
            return l = this, t < a.length && m.push({elem: l, handlers: a.slice(t)}), m
        }, addProp: function (d,
                              a) {
            Object.defineProperty(f.Event.prototype, d, {
                enumerable: !0,
                configurable: !0,
                get: f.isFunction(a) ? function () {
                    if (this.originalEvent)return a(this.originalEvent)
                } : function () {
                    if (this.originalEvent)return this.originalEvent[d]
                },
                set: function (a) {
                    Object.defineProperty(this, d, {enumerable: !0, configurable: !0, writable: !0, value: a})
                }
            })
        }, fix: function (d) {
            return d[f.expando] ? d : new f.Event(d)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== oa() && this.focus)return this.focus(), !1
                }, delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === oa() && this.blur)return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && k(this, "input"))return this.click(), !1
                }, _default: function (d) {
                    return k(d.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (d) {
                    void 0 !== d.result && d.originalEvent && (d.originalEvent.returnValue = d.result)
                }
            }
        }
    };
    f.removeEvent = function (d, a, e) {
        d.removeEventListener && d.removeEventListener(a, e)
    };
    f.Event = function (d, a) {
        return this instanceof f.Event ?
            (d && d.type ? (this.originalEvent = d, this.type = d.type, this.isDefaultPrevented = d.defaultPrevented || void 0 === d.defaultPrevented && !1 === d.returnValue ? n : x, this.target = d.target && 3 === d.target.nodeType ? d.target.parentNode : d.target, this.currentTarget = d.currentTarget, this.relatedTarget = d.relatedTarget) : this.type = d, a && f.extend(this, a), this.timeStamp = d && d.timeStamp || f.now(), void(this[f.expando] = !0)) : new f.Event(d, a)
    };
    f.Event.prototype = {
        constructor: f.Event, isDefaultPrevented: x, isPropagationStopped: x, isImmediatePropagationStopped: x,
        isSimulated: !1, preventDefault: function () {
            var d = this.originalEvent;
            this.isDefaultPrevented = n;
            d && !this.isSimulated && d.preventDefault()
        }, stopPropagation: function () {
            var d = this.originalEvent;
            this.isPropagationStopped = n;
            d && !this.isSimulated && d.stopPropagation()
        }, stopImmediatePropagation: function () {
            var d = this.originalEvent;
            this.isImmediatePropagationStopped = n;
            d && !this.isSimulated && d.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    f.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (d) {
            var a = d.button;
            return null == d.which && vb.test(d.type) ? null != d.charCode ? d.charCode : d.keyCode : !d.which && void 0 !== a && Ta.test(d.type) ? 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0 : d.which
        }
    }, f.event.addProp);
    f.each({
        mouseenter: "mouseover", mouseleave: "mouseout",
        pointerenter: "pointerover", pointerleave: "pointerout"
    }, function (d, a) {
        f.event.special[d] = {
            delegateType: a, bindType: a, handle: function (d) {
                var e, m = d.relatedTarget, l = d.handleObj;
                return m && (m === this || f.contains(this, m)) || (d.type = l.origType, e = l.handler.apply(this, arguments), d.type = a), e
            }
        }
    });
    f.fn.extend({
        on: function (d, a, e, m) {
            return na(this, d, a, e, m)
        }, one: function (d, a, e, m) {
            return na(this, d, a, e, m, 1)
        }, off: function (d, a, e) {
            var m, l;
            if (d && d.preventDefault && d.handleObj)return m = d.handleObj, f(d.delegateTarget).off(m.namespace ?
            m.origType + "." + m.namespace : m.origType, m.selector, m.handler), this;
            if ("object" == typeof d) {
                for (l in d)this.off(l, a, d[l]);
                return this
            }
            return !1 !== a && "function" != typeof a || (e = a, a = void 0), !1 === e && (e = x), this.each(function () {
                f.event.remove(this, d, e, a)
            })
        }
    });
    var ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, rb = /<script|<style|<link/i, bb = /checked\s*(?:[^=]|=\s*.checked.)/i, l = /^true\/(.*)/, A = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    f.extend({
        htmlPrefilter: function (d) {
            return d.replace(ib,
                "<$1></$2>")
        }, clone: function (d, a, e) {
            var m, l = d.cloneNode(!0), t = f.contains(d.ownerDocument, d);
            if (!(W.noCloneChecked || 1 !== d.nodeType && 11 !== d.nodeType || f.isXMLDoc(d))) {
                var p = c(l);
                var F = c(d);
                var n = 0;
                for (m = F.length; n < m; n++) {
                    var A = F[n], b = p[n], L = b.nodeName.toLowerCase();
                    "input" === L && qb.test(A.type) ? b.checked = A.checked : "input" !== L && "textarea" !== L || (b.defaultValue = A.defaultValue)
                }
            }
            if (a)if (e)for (F = F || c(d), p = p || c(l), n = 0, m = F.length; n < m; n++)R(F[n], p[n]); else R(d, l);
            return p = c(l, "script"), 0 < p.length && r(p, !t && c(d,
                    "script")), l
        }, cleanData: function (d) {
            for (var a, e, m, l = f.event.special, c = 0; void 0 !== (e = d[c]); c++)if (wa(e)) {
                if (a = e[Y.expando]) {
                    if (a.events)for (m in a.events)l[m] ? f.event.remove(e, m) : f.removeEvent(e, m, a.handle);
                    e[Y.expando] = void 0
                }
                e[Fa.expando] && (e[Fa.expando] = void 0)
            }
        }
    });
    f.fn.extend({
        detach: function (d) {
            return da(this, d, !0)
        }, remove: function (d) {
            return da(this, d)
        }, text: function (d) {
            return Sa(this, function (d) {
                return void 0 === d ? f.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType &&
                    9 !== this.nodeType || (this.textContent = d)
                })
            }, null, d, arguments.length)
        }, append: function () {
            return Q(this, arguments, function (d) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qa(this, d).appendChild(d)
            })
        }, prepend: function () {
            return Q(this, arguments, function (d) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var a = qa(this, d);
                    a.insertBefore(d, a.firstChild)
                }
            })
        }, before: function () {
            return Q(this, arguments, function (d) {
                this.parentNode && this.parentNode.insertBefore(d, this)
            })
        }, after: function () {
            return Q(this,
                arguments, function (d) {
                    this.parentNode && this.parentNode.insertBefore(d, this.nextSibling)
                })
        }, empty: function () {
            for (var d, a = 0; null != (d = this[a]); a++)1 === d.nodeType && (f.cleanData(c(d, !1)), d.textContent = "");
            return this
        }, clone: function (d, a) {
            return d = null != d && d, a = null == a ? d : a, this.map(function () {
                return f.clone(this, d, a)
            })
        }, html: function (d) {
            return Sa(this, function (d) {
                var a = this[0] || {}, e = 0, m = this.length;
                if (void 0 === d && 1 === a.nodeType)return a.innerHTML;
                if ("string" == typeof d && !rb.test(d) && !Ha[(lb.exec(d) || ["",
                        ""])[1].toLowerCase()]) {
                    d = f.htmlPrefilter(d);
                    try {
                        for (; e < m; e++)a = this[e] || {}, 1 === a.nodeType && (f.cleanData(c(a, !1)), a.innerHTML = d);
                        a = 0
                    } catch (Jb) {
                    }
                }
                a && this.empty().append(d)
            }, null, d, arguments.length)
        }, replaceWith: function () {
            var d = [];
            return Q(this, arguments, function (a) {
                var e = this.parentNode;
                0 > f.inArray(this, d) && (f.cleanData(c(this)), e && e.replaceChild(a, this))
            }, d)
        }
    });
    f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (d, a) {
        f.fn[d] =
            function (d) {
                for (var e = [], m = f(d), l = m.length - 1, t = 0; t <= l; t++)d = t === l ? this : this.clone(!0), f(m[t])[a](d), p.apply(e, d.get());
                return this.pushStack(e)
            }
    });
    var X = /^margin/, L = new RegExp("^(" + yb + ")(?!px)[a-z%]+$", "i"), V = function (d) {
        var a = d.ownerDocument.defaultView;
        return a && a.opener || (a = g), a.getComputedStyle(d)
    };
    !function () {
        function d() {
            if (p) {
                p.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                p.innerHTML = "";
                hb.appendChild(c);
                var d = g.getComputedStyle(p);
                a = "1%" !== d.top;
                l = "2px" === d.marginLeft;
                e = "4px" === d.width;
                p.style.marginRight = "50%";
                m = "4px" === d.marginRight;
                hb.removeChild(c);
                p = null
            }
        }

        var a, e, m, l, c = Z.createElement("div"), p = Z.createElement("div");
        p.style && (p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", W.clearCloneStyle = "content-box" === p.style.backgroundClip, c.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.appendChild(p), f.extend(W, {
            pixelPosition: function () {
                return d(),
                    a
            }, boxSizingReliable: function () {
                return d(), e
            }, pixelMarginRight: function () {
                return d(), m
            }, reliableMarginLeft: function () {
                return d(), l
            }
        }))
    }();
    var m = /^(none|table(?!-c[ea]).+)/, e = /^--/, F = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ca = {letterSpacing: "0", fontWeight: "400"}, ba = ["Webkit", "Moz", "ms"], fa = Z.createElement("div").style;
    f.extend({
        cssHooks: {
            opacity: {
                get: function (d, a) {
                    if (a) {
                        var e = M(d, "opacity");
                        return "" === e ? "1" : e
                    }
                }
            }
        }, cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        }, cssProps: {"float": "cssFloat"}, style: function (d, a, m, l) {
            if (d && 3 !== d.nodeType && 8 !== d.nodeType && d.style) {
                var t, c, p, F = f.camelCase(a), n = e.test(a), A = d.style;
                return n || (a = S(F)), p = f.cssHooks[a] || f.cssHooks[F], void 0 === m ? p && "get"in p && void 0 !== (t = p.get(d, !1, l)) ? t : A[a] : (c = typeof m, "string" === c && (t = ab.exec(m)) && t[1] && (m = H(d, a, t), c = "number"), null != m && m === m && ("number" === c && (m += t && t[3] || (f.cssNumber[F] ?
                        "" : "px")), W.clearCloneStyle || "" !== m || 0 !== a.indexOf("background") || (A[a] = "inherit"), p && "set"in p && void 0 === (m = p.set(d, m, l)) || (n ? A.setProperty(a, m) : A[a] = m)), void 0)
            }
        }, css: function (d, a, m, l) {
            var t, c, p, F = f.camelCase(a);
            return e.test(a) || (a = S(F)), p = f.cssHooks[a] || f.cssHooks[F], p && "get"in p && (t = p.get(d, !0, m)), void 0 === t && (t = M(d, a, l)), "normal" === t && a in Ca && (t = Ca[a]), "" === m || m ? (c = parseFloat(t), !0 === m || isFinite(c) ? c || 0 : t) : t
        }
    });
    f.each(["height", "width"], function (d, a) {
        f.cssHooks[a] = {
            get: function (d, e, l) {
                if (e)return !m.test(f.css(d,
                    "display")) || d.getClientRects().length && d.getBoundingClientRect().width ? ca(d, a, l) : pb(d, F, function () {
                    return ca(d, a, l)
                })
            }, set: function (d, e, m) {
                var l, t = m && V(d);
                m = m && ua(d, a, m, "border-box" === f.css(d, "boxSizing", !1, t), t);
                return m && (l = ab.exec(e)) && "px" !== (l[3] || "px") && (d.style[a] = e, e = f.css(d, a)), ta(d, e, m)
            }
        }
    });
    f.cssHooks.marginLeft = ea(W.reliableMarginLeft, function (d, a) {
        if (a)return (parseFloat(M(d, "marginLeft")) || d.getBoundingClientRect().left - pb(d, {marginLeft: 0}, function () {
                return d.getBoundingClientRect().left
            })) +
            "px"
    });
    f.each({margin: "", padding: "", border: "Width"}, function (d, a) {
        f.cssHooks[d + a] = {
            expand: function (e) {
                var m = 0, f = {};
                for (e = "string" == typeof e ? e.split(" ") : [e]; 4 > m; m++)f[d + Oa[m] + a] = e[m] || e[m - 2] || e[0];
                return f
            }
        };
        X.test(d) || (f.cssHooks[d + a].set = ta)
    });
    f.fn.extend({
        css: function (d, a) {
            return Sa(this, function (d, a, e) {
                var m, l = {}, t = 0;
                if (Array.isArray(a)) {
                    e = V(d);
                    for (m = a.length; t < m; t++)l[a[t]] = f.css(d, a[t], !1, e);
                    return l
                }
                return void 0 !== e ? f.style(d, a, e) : f.css(d, a)
            }, d, a, 1 < arguments.length)
        }
    });
    f.Tween = ka;
    ka.prototype =
    {
        constructor: ka, init: function (d, a, e, m, l, c) {
        this.elem = d;
        this.prop = e;
        this.easing = l || f.easing._default;
        this.options = a;
        this.start = this.now = this.cur();
        this.end = m;
        this.unit = c || (f.cssNumber[e] ? "" : "px")
    }, cur: function () {
        var d = ka.propHooks[this.prop];
        return d && d.get ? d.get(this) : ka.propHooks._default.get(this)
    }, run: function (d) {
        var a, e = ka.propHooks[this.prop];
        return this.options.duration ? this.pos = a = f.easing[this.easing](d, this.options.duration * d, 0, 1, this.options.duration) : this.pos = a = d, this.now = (this.end - this.start) *
            a + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), e && e.set ? e.set(this) : ka.propHooks._default.set(this), this
    }
    };
    ka.prototype.init.prototype = ka.prototype;
    ka.propHooks = {
        _default: {
            get: function (d) {
                var a;
                return 1 !== d.elem.nodeType || null != d.elem[d.prop] && null == d.elem.style[d.prop] ? d.elem[d.prop] : (a = f.css(d.elem, d.prop, ""), a && "auto" !== a ? a : 0)
            }, set: function (d) {
                f.fx.step[d.prop] ? f.fx.step[d.prop](d) : 1 !== d.elem.nodeType || null == d.elem.style[f.cssProps[d.prop]] && !f.cssHooks[d.prop] ?
                    d.elem[d.prop] = d.now : f.style(d.elem, d.prop, d.now + d.unit)
            }
        }
    };
    ka.propHooks.scrollTop = ka.propHooks.scrollLeft = {
        set: function (d) {
            d.elem.nodeType && d.elem.parentNode && (d.elem[d.prop] = d.now)
        }
    };
    f.easing = {
        linear: function (d) {
            return d
        }, swing: function (d) {
            return .5 - Math.cos(d * Math.PI) / 2
        }, _default: "swing"
    };
    f.fx = ka.prototype.init;
    f.fx.step = {};
    var nb, gb, wb = /^(?:toggle|show|hide)$/, Eb = /queueHooks$/;
    f.Animation = f.extend(pa, {
        tweeners: {
            "*": [function (d, a) {
                var e = this.createTween(d, a);
                return H(e.elem, d, ab.exec(a), e), e
            }]
        },
        tweener: function (d, a) {
            f.isFunction(d) ? (a = d, d = ["*"]) : d = d.match(T);
            for (var e, m = 0, l = d.length; m < l; m++)e = d[m], pa.tweeners[e] = pa.tweeners[e] || [], pa.tweeners[e].unshift(a)
        }, prefilters: [function (d, e, m) {
            var l, t, c, p, F, n, A, r, b = "width"in e || "height"in e, L = this, V = {}, g = d.style, U = d.nodeType && kb(d), X = Y.get(d, "fxshow");
            m.queue || (p = f._queueHooks(d, "fx"), null == p.unqueued && (p.unqueued = 0, F = p.empty.fire, p.empty.fire = function () {
                p.unqueued || F()
            }), p.unqueued++, L.always(function () {
                L.always(function () {
                    p.unqueued--;
                    f.queue(d,
                        "fx").length || p.empty.fire()
                })
            }));
            for (l in e)if (t = e[l], wb.test(t)) {
                if (delete e[l], c = c || "toggle" === t, t === (U ? "hide" : "show")) {
                    if ("show" !== t || !X || void 0 === X[l])continue;
                    U = !0
                }
                V[l] = X && X[l] || f.style(d, l)
            }
            if (n = !f.isEmptyObject(e), n || !f.isEmptyObject(V))for (l in b && 1 === d.nodeType && (m.overflow = [g.overflow, g.overflowX, g.overflowY], A = X && X.display, null == A && (A = Y.get(d, "display")), r = f.css(d, "display"), "none" === r && (A ? r = A : (a([d], !0), A = d.style.display || A, r = f.css(d, "display"), a([d]))), ("inline" === r || "inline-block" ===
            r && null != A) && "none" === f.css(d, "float") && (n || (L.done(function () {
                g.display = A
            }), null == A && (r = g.display, A = "none" === r ? "" : r)), g.display = "inline-block")), m.overflow && (g.overflow = "hidden", L.always(function () {
                g.overflow = m.overflow[0];
                g.overflowX = m.overflow[1];
                g.overflowY = m.overflow[2]
            })), n = !1, V)n || (X ? "hidden"in X && (U = X.hidden) : X = Y.access(d, "fxshow", {display: A}), c && (X.hidden = !U), U && a([d], !0), L.done(function () {
                U || a([d]);
                Y.remove(d, "fxshow");
                for (l in V)f.style(d, l, V[l])
            })), n = Ia(U ? X[l] : 0, l, L), l in X || (X[l] = n.start,
            U && (n.end = n.start, n.start = 0))
        }], prefilter: function (d, a) {
            a ? pa.prefilters.unshift(d) : pa.prefilters.push(d)
        }
    });
    f.speed = function (d, a, e) {
        var m = d && "object" == typeof d ? f.extend({}, d) : {
            complete: e || !e && a || f.isFunction(d) && d,
            duration: d,
            easing: e && a || a && !f.isFunction(a) && a
        };
        return f.fx.off ? m.duration = 0 : "number" != typeof m.duration && (m.duration in f.fx.speeds ? m.duration = f.fx.speeds[m.duration] : m.duration = f.fx.speeds._default), null != m.queue && !0 !== m.queue || (m.queue = "fx"), m.old = m.complete, m.complete = function () {
            f.isFunction(m.old) &&
            m.old.call(this);
            m.queue && f.dequeue(this, m.queue)
        }, m
    };
    f.fn.extend({
        fadeTo: function (d, a, e, m) {
            return this.filter(kb).css("opacity", 0).show().end().animate({opacity: a}, d, e, m)
        }, animate: function (d, a, e, m) {
            var l = f.isEmptyObject(d), c = f.speed(a, e, m);
            a = function () {
                var a = pa(this, f.extend({}, d), c);
                (l || Y.get(this, "finish")) && a.stop(!0)
            };
            return a.finish = a, l || !1 === c.queue ? this.each(a) : this.queue(c.queue, a)
        }, stop: function (d, a, e) {
            var m = function (d) {
                var a = d.stop;
                delete d.stop;
                a(e)
            };
            return "string" != typeof d && (e = a, a = d,
                d = void 0), a && !1 !== d && this.queue(d || "fx", []), this.each(function () {
                var a = !0, l = null != d && d + "queueHooks", c = f.timers, t = Y.get(this);
                if (l)t[l] && t[l].stop && m(t[l]); else for (l in t)t[l] && t[l].stop && Eb.test(l) && m(t[l]);
                for (l = c.length; l--;)c[l].elem !== this || null != d && c[l].queue !== d || (c[l].anim.stop(e), a = !1, c.splice(l, 1));
                !a && e || f.dequeue(this, d)
            })
        }, finish: function (d) {
            return !1 !== d && (d = d || "fx"), this.each(function () {
                var a = Y.get(this), e = a[d + "queue"];
                var m = a[d + "queueHooks"];
                var l = f.timers, c = e ? e.length : 0;
                a.finish = !0;
                f.queue(this, d, []);
                m && m.stop && m.stop.call(this, !0);
                for (m = l.length; m--;)l[m].elem === this && l[m].queue === d && (l[m].anim.stop(!0), l.splice(m, 1));
                for (m = 0; m < c; m++)e[m] && e[m].finish && e[m].finish.call(this);
                delete a.finish
            })
        }
    });
    f.each(["toggle", "show", "hide"], function (d, a) {
        var e = f.fn[a];
        f.fn[a] = function (d, m, l) {
            return null == d || "boolean" == typeof d ? e.apply(this, arguments) : this.animate(ia(a, !0), d, m, l)
        }
    });
    f.each({
        slideDown: ia("show"),
        slideUp: ia("hide"),
        slideToggle: ia("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (d, a) {
        f.fn[d] = function (d, e, m) {
            return this.animate(a, d, e, m)
        }
    });
    f.timers = [];
    f.fx.tick = function () {
        var d = 0, a = f.timers;
        for (nb = f.now(); d < a.length; d++) {
            var e = a[d];
            e() || a[d] !== e || a.splice(d--, 1)
        }
        a.length || f.fx.stop();
        nb = void 0
    };
    f.fx.timer = function (d) {
        f.timers.push(d);
        f.fx.start()
    };
    f.fx.interval = 13;
    f.fx.start = function () {
        gb || (gb = !0, la())
    };
    f.fx.stop = function () {
        gb = null
    };
    f.fx.speeds = {slow: 600, fast: 200, _default: 400};
    f.fn.delay = function (d, a) {
        return d = f.fx ? f.fx.speeds[d] || d :
            d, a = a || "fx", this.queue(a, function (a, e) {
            var m = g.setTimeout(a, d);
            e.stop = function () {
                g.clearTimeout(m)
            }
        })
    };
    (function () {
        var d = Z.createElement("input"), a = Z.createElement("select").appendChild(Z.createElement("option"));
        d.type = "checkbox";
        W.checkOn = "" !== d.value;
        W.optSelected = a.selected;
        d = Z.createElement("input");
        d.value = "t";
        d.type = "radio";
        W.radioValue = "t" === d.value
    })();
    var sb = f.expr.attrHandle;
    f.fn.extend({
        attr: function (d, a) {
            return Sa(this, f.attr, d, a, 1 < arguments.length)
        }, removeAttr: function (d) {
            return this.each(function () {
                f.removeAttr(this,
                    d)
            })
        }
    });
    f.extend({
        attr: function (d, a, e) {
            var m, l, c = d.nodeType;
            if (3 !== c && 8 !== c && 2 !== c)return "undefined" == typeof d.getAttribute ? f.prop(d, a, e) : (1 === c && f.isXMLDoc(d) || (l = f.attrHooks[a.toLowerCase()] || (f.expr.match.bool.test(a) ? Ub : void 0)), void 0 !== e ? null === e ? void f.removeAttr(d, a) : l && "set"in l && void 0 !== (m = l.set(d, e, a)) ? m : (d.setAttribute(a, e + ""), e) : l && "get"in l && null !== (m = l.get(d, a)) ? m : (m = f.find.attr(d, a), null == m ? void 0 : m))
        }, attrHooks: {
            type: {
                set: function (d, a) {
                    if (!W.radioValue && "radio" === a && k(d, "input")) {
                        var e =
                            d.value;
                        return d.setAttribute("type", a), e && (d.value = e), a
                    }
                }
            }
        }, removeAttr: function (d, a) {
            var e, m = 0, l = a && a.match(T);
            if (l && 1 === d.nodeType)for (; e = l[m++];)d.removeAttribute(e)
        }
    });
    var Ub = {
        set: function (d, a, e) {
            return !1 === a ? f.removeAttr(d, e) : d.setAttribute(e, e), e
        }
    };
    f.each(f.expr.match.bool.source.match(/\w+/g), function (d, a) {
        var e = sb[a] || f.find.attr;
        sb[a] = function (d, a, m) {
            var l, f, c = a.toLowerCase();
            return m || (f = sb[c], sb[c] = l, l = null != e(d, a, m) ? c : null, sb[c] = f), l
        }
    });
    var Fb = /^(?:input|select|textarea|button)$/i, Ab =
        /^(?:a|area)$/i;
    f.fn.extend({
        prop: function (d, a) {
            return Sa(this, f.prop, d, a, 1 < arguments.length)
        }, removeProp: function (d) {
            return this.each(function () {
                delete this[f.propFix[d] || d]
            })
        }
    });
    f.extend({
        prop: function (d, a, e) {
            var m, l, c = d.nodeType;
            if (3 !== c && 8 !== c && 2 !== c)return 1 === c && f.isXMLDoc(d) || (a = f.propFix[a] || a, l = f.propHooks[a]), void 0 !== e ? l && "set"in l && void 0 !== (m = l.set(d, e, a)) ? m : d[a] = e : l && "get"in l && null !== (m = l.get(d, a)) ? m : d[a]
        }, propHooks: {
            tabIndex: {
                get: function (d) {
                    var a = f.find.attr(d, "tabindex");
                    return a ?
                        parseInt(a, 10) : Fb.test(d.nodeName) || Ab.test(d.nodeName) && d.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    });
    W.optSelected || (f.propHooks.selected = {
        get: function (d) {
            d = d.parentNode;
            return d && d.parentNode && d.parentNode.selectedIndex, null
        }, set: function (d) {
            d = d.parentNode;
            d && (d.selectedIndex, d.parentNode && d.parentNode.selectedIndex)
        }
    });
    f.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () {
        f.propFix[this.toLowerCase()] =
            this
    });
    f.fn.extend({
        addClass: function (d) {
            var a, e, m, l, c, p, F = 0;
            if (f.isFunction(d))return this.each(function (a) {
                f(this).addClass(d.call(this, a, Da(this)))
            });
            if ("string" == typeof d && d)for (a = d.match(T) || []; e = this[F++];)if (l = Da(e), m = 1 === e.nodeType && " " + Aa(l) + " ") {
                for (p = 0; c = a[p++];)0 > m.indexOf(" " + c + " ") && (m += c + " ");
                m = Aa(m);
                l !== m && e.setAttribute("class", m)
            }
            return this
        }, removeClass: function (d) {
            var a, e, m, l, c, p, F = 0;
            if (f.isFunction(d))return this.each(function (a) {
                f(this).removeClass(d.call(this, a, Da(this)))
            });
            if (!arguments.length)return this.attr("class", "");
            if ("string" == typeof d && d)for (a = d.match(T) || []; e = this[F++];)if (l = Da(e), m = 1 === e.nodeType && " " + Aa(l) + " ") {
                for (p = 0; c = a[p++];)for (; -1 < m.indexOf(" " + c + " ");)m = m.replace(" " + c + " ", " ");
                m = Aa(m);
                l !== m && e.setAttribute("class", m)
            }
            return this
        }, toggleClass: function (d, a) {
            var e = typeof d;
            return "boolean" == typeof a && "string" === e ? a ? this.addClass(d) : this.removeClass(d) : f.isFunction(d) ? this.each(function (e) {
                f(this).toggleClass(d.call(this, e, Da(this), a), a)
            }) : this.each(function () {
                var a,
                    m;
                if ("string" === e) {
                    var l = 0;
                    var c = f(this);
                    for (m = d.match(T) || []; a = m[l++];)c.hasClass(a) ? c.removeClass(a) : c.addClass(a)
                } else void 0 !== d && "boolean" !== e || (a = Da(this), a && Y.set(this, "__className__", a), this.setAttribute && this.setAttribute("class", a || !1 === d ? "" : Y.get(this, "__className__") || ""))
            })
        }, hasClass: function (a) {
            var d, e = 0;
            for (a = " " + a + " "; d = this[e++];)if (1 === d.nodeType && -1 < (" " + Aa(Da(d)) + " ").indexOf(a))return !0;
            return !1
        }
    });
    var Vb = /\r/g;
    f.fn.extend({
        val: function (a) {
            var d, e, m, l = this[0];
            if (arguments.length)return m =
                f.isFunction(a), this.each(function (e) {
                var l;
                1 === this.nodeType && (l = m ? a.call(this, e, f(this).val()) : a, null == l ? l = "" : "number" == typeof l ? l += "" : Array.isArray(l) && (l = f.map(l, function (a) {
                    return null == a ? "" : a + ""
                })), d = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()], d && "set"in d && void 0 !== d.set(this, l, "value") || (this.value = l))
            });
            if (l)return d = f.valHooks[l.type] || f.valHooks[l.nodeName.toLowerCase()], d && "get"in d && void 0 !== (e = d.get(l, "value")) ? e : (e = l.value, "string" == typeof e ? e.replace(Vb, "") : null ==
            e ? "" : e)
        }
    });
    f.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var d = f.find.attr(a, "value");
                    return null != d ? d : Aa(f.text(a))
                }
            }, select: {
                get: function (a) {
                    var d, e, m = a.options, l = a.selectedIndex, c = "select-one" === a.type, p = c ? null : [], F = c ? l + 1 : m.length;
                    for (e = 0 > l ? F : c ? l : 0; e < F; e++)if (d = m[e], !(!d.selected && e !== l || d.disabled || d.parentNode.disabled && k(d.parentNode, "optgroup"))) {
                        if (a = f(d).val(), c)return a;
                        p.push(a)
                    }
                    return p
                }, set: function (a, e) {
                    for (var d, m, l = a.options, c = f.makeArray(e), p = l.length; p--;)m = l[p], (m.selected = -1 < f.inArray(f.valHooks.option.get(m),
                            c)) && (d = !0);
                    return d || (a.selectedIndex = -1), c
                }
            }
        }
    });
    f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {
            set: function (a, e) {
                if (Array.isArray(e))return a.checked = -1 < f.inArray(f(a).val(), e)
            }
        };
        W.checkOn || (f.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var Bb = /^(?:focusinfocus|focusoutblur)$/;
    f.extend(f.event, {
        trigger: function (a, e, m, l) {
            var d, c, p, F, t, n = [m || Z], A = Ga.call(a, "type") ? a.type : a;
            var r = Ga.call(a, "namespace") ? a.namespace.split(".") : [];
            if (d = c = m = m || Z, 3 !==
                m.nodeType && 8 !== m.nodeType && !Bb.test(A + f.event.triggered) && (-1 < A.indexOf(".") && (r = A.split("."), A = r.shift(), r.sort()), p = 0 > A.indexOf(":") && "on" + A, a = a[f.expando] ? a : new f.Event(A, "object" == typeof a && a), a.isTrigger = l ? 2 : 3, a.namespace = r.join("."), a.rnamespace = a.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = m), e = null == e ? [a] : f.makeArray(e, [a]), t = f.event.special[A] || {}, l || !t.trigger || !1 !== t.trigger.apply(m, e))) {
                if (!l && !t.noBubble && !f.isWindow(m)) {
                    var L =
                        t.delegateType || A;
                    for (Bb.test(L + A) || (d = d.parentNode); d; d = d.parentNode)n.push(d), c = d;
                    c === (m.ownerDocument || Z) && n.push(c.defaultView || c.parentWindow || g)
                }
                for (r = 0; (d = n[r++]) && !a.isPropagationStopped();)a.type = 1 < r ? L : t.bindType || A, (F = (Y.get(d, "events") || {})[a.type] && Y.get(d, "handle")) && F.apply(d, e), (F = p && d[p]) && F.apply && wa(d) && (a.result = F.apply(d, e), !1 === a.result && a.preventDefault());
                return a.type = A, l || a.isDefaultPrevented() || t._default && !1 !== t._default.apply(n.pop(), e) || !wa(m) || p && f.isFunction(m[A]) && !f.isWindow(m) && (c = m[p], c && (m[p] = null), f.event.triggered = A, m[A](), f.event.triggered = void 0, c && (m[p] = c)), a.result
            }
        }, simulate: function (a, e, m) {
            a = f.extend(new f.Event, m, {type: a, isSimulated: !0});
            f.event.trigger(a, null, e)
        }
    });
    f.fn.extend({
        trigger: function (a, e) {
            return this.each(function () {
                f.event.trigger(a, e, this)
            })
        }, triggerHandler: function (a, e) {
            var d = this[0];
            if (d)return f.event.trigger(a, e, d, !0)
        }
    });
    f.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
        function (a, e) {
            f.fn[e] = function (a, d) {
                return 0 < arguments.length ? this.on(e, null, a, d) : this.trigger(e)
            }
        });
    f.fn.extend({
        hover: function (a, e) {
            return this.mouseenter(a).mouseleave(e || a)
        }
    });
    W.focusin = "onfocusin"in g;
    W.focusin || f.each({focus: "focusin", blur: "focusout"}, function (a, e) {
        var d = function (a) {
            f.event.simulate(e, a.target, f.event.fix(a))
        };
        f.event.special[e] = {
            setup: function () {
                var m = this.ownerDocument || this, l = Y.access(m, e);
                l || m.addEventListener(a, d, !0);
                Y.access(m, e, (l || 0) + 1)
            }, teardown: function () {
                var m = this.ownerDocument ||
                    this, l = Y.access(m, e) - 1;
                l ? Y.access(m, e, l) : (m.removeEventListener(a, d, !0), Y.remove(m, e))
            }
        }
    });
    var Ya = g.location, Lb = f.now(), Gb = /\?/;
    f.parseXML = function (a) {
        if (!a || "string" != typeof a)return null;
        try {
            var d = (new g.DOMParser).parseFromString(a, "text/xml")
        } catch (G) {
            d = void 0
        }
        return d && !d.getElementsByTagName("parsererror").length || f.error("Invalid XML: " + a), d
    };
    var Sb = /\[\]$/, Mb = /\r?\n/g, Wb = /^(?:submit|button|image|reset|file)$/i, Xb = /^(?:input|select|textarea|keygen)/i;
    f.param = function (a, e) {
        var d, m = [], l = function (a,
                                     d) {
            var e = f.isFunction(d) ? d() : d;
            m[m.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == e ? "" : e)
        };
        if (Array.isArray(a) || a.jquery && !f.isPlainObject(a))f.each(a, function () {
            l(this.name, this.value)
        }); else for (d in a)va(d, a[d], e, l);
        return m.join("&")
    };
    f.fn.extend({
        serialize: function () {
            return f.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = f.prop(this, "elements");
                return a ? f.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !f(this).is(":disabled") &&
                    Xb.test(this.nodeName) && !Wb.test(a) && (this.checked || !qb.test(a))
            }).map(function (a, e) {
                var d = f(this).val();
                return null == d ? null : Array.isArray(d) ? f.map(d, function (a) {
                    return {name: e.name, value: a.replace(Mb, "\r\n")}
                }) : {name: e.name, value: d.replace(Mb, "\r\n")}
            }).get()
        }
    });
    var Yb = /%20/g, Zb = /#.*$/, $b = /([?&])_=[^&]*/, ac = /^(.*?):[ \t]*([^\r\n]*)$/gm, bc = /^(?:GET|HEAD)$/, cc = /^\/\//, Nb = {}, Cb = {}, Ob = "*/".concat("*"), Hb = Z.createElement("a");
    Hb.href = Ya.href;
    f.extend({
        active: 0, lastModified: {}, etag: {}, ajaxSettings: {
            url: Ya.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ya.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ob,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {
                "* text": String, "text html": !0, "text json": JSON.parse,
                "text xml": f.parseXML
            },
            flatOptions: {url: !0, context: !0}
        }, ajaxSetup: function (a, e) {
            return e ? Pa(Pa(a, f.ajaxSettings), e) : Pa(f.ajaxSettings, a)
        }, ajaxPrefilter: Ma(Nb), ajaxTransport: Ma(Cb), ajax: function (a, e) {
            function d(a, d, e, c) {
                var n, t, X, Ca = d;
                if (!ba) {
                    ba = !0;
                    p && g.clearTimeout(p);
                    m = void 0;
                    l = c || "";
                    x.readyState = 0 < a ? 4 : 0;
                    c = 200 <= a && 300 > a || 304 === a;
                    if (e) {
                        var H = A;
                        for (var q = x, I, O, k, y, E = H.contents, z = H.dataTypes; "*" === z[0];)z.shift(), void 0 === I && (I = H.mimeType || q.getResponseHeader("Content-Type"));
                        if (I)for (O in E)if (E[O] &&
                            E[O].test(I)) {
                            z.unshift(O);
                            break
                        }
                        if (z[0]in e)k = z[0]; else {
                            for (O in e) {
                                if (!z[0] || H.converters[O + " " + z[0]]) {
                                    k = O;
                                    break
                                }
                                y || (y = O)
                            }
                            k = k || y
                        }
                        e = k ? (k !== z[0] && z.unshift(k), e[k]) : void 0;
                        H = e
                    }
                    a:{
                        e = A;
                        I = H;
                        O = x;
                        k = c;
                        var fa, P, v;
                        H = {};
                        q = e.dataTypes.slice();
                        if (q[1])for (fa in e.converters)H[fa.toLowerCase()] = e.converters[fa];
                        for (y = q.shift(); y;)if (e.responseFields[y] && (O[e.responseFields[y]] = I), !v && k && e.dataFilter && (I = e.dataFilter(I, e.dataType)), v = y, y = q.shift())if ("*" === y)y = v; else if ("*" !== v && v !== y) {
                            if (fa = H[v + " " + y] || H["* " +
                                    y], !fa)for (G in H)if (P = G.split(" "), P[1] === y && (fa = H[v + " " + P[0]] || H["* " + P[0]])) {
                                !0 === fa ? fa = H[G] : !0 !== H[G] && (y = P[0], q.unshift(P[1]));
                                break
                            }
                            if (!0 !== fa)if (fa && e["throws"])I = fa(I); else try {
                                I = fa(I)
                            } catch (Tb) {
                                var G = {state: "parsererror", error: fa ? Tb : "No conversion from " + v + " to " + y};
                                break a
                            }
                        }
                        G = {state: "success", data: I}
                    }
                    H = G;
                    c ? (A.ifModified && (X = x.getResponseHeader("Last-Modified"), X && (f.lastModified[K] = X), X = x.getResponseHeader("etag"), X && (f.etag[K] = X)), 204 === a || "HEAD" === A.type ? Ca = "nocontent" : 304 === a ? Ca = "notmodified" :
                        (Ca = H.state, n = H.data, t = H.error, c = !t)) : (t = Ca, !a && Ca || (Ca = "error", 0 > a && (a = 0)));
                    x.status = a;
                    x.statusText = (d || Ca) + "";
                    c ? b.resolveWith(r, [n, Ca, x]) : b.rejectWith(r, [x, Ca, t]);
                    x.statusCode(U);
                    U = void 0;
                    F && L.trigger(c ? "ajaxSuccess" : "ajaxError", [x, A, c ? n : t]);
                    V.fireWith(r, [x, Ca]);
                    F && (L.trigger("ajaxComplete", [x, A]), --f.active || f.event.trigger("ajaxStop"))
                }
            }

            "object" == typeof a && (e = a, a = void 0);
            e = e || {};
            var m, l, c, p, F, n, t, A = f.ajaxSetup({}, e), r = A.context || A, L = A.context && (r.nodeType || r.jquery) ? f(r) : f.event, b = f.Deferred(),
                V = f.Callbacks("once memory"), U = A.statusCode || {}, X = {}, Ca = {}, H = "canceled", x = {
                    readyState: 0, getResponseHeader: function (a) {
                        var d;
                        if (ba) {
                            if (!c)for (c = {}; d = ac.exec(l);)c[d[1].toLowerCase()] = d[2];
                            d = c[a.toLowerCase()]
                        }
                        return null == d ? null : d
                    }, getAllResponseHeaders: function () {
                        return ba ? l : null
                    }, setRequestHeader: function (a, d) {
                        return null == ba && (a = Ca[a.toLowerCase()] = Ca[a.toLowerCase()] || a, X[a] = d), this
                    }, overrideMimeType: function (a) {
                        return null == ba && (A.mimeType = a), this
                    }, statusCode: function (a) {
                        var d;
                        if (a)if (ba)x.always(a[x.status]);
                        else for (d in a)U[d] = [U[d], a[d]];
                        return this
                    }, abort: function (a) {
                        a = a || H;
                        return m && m.abort(a), d(0, a), this
                    }
                };
            if (b.promise(x), A.url = ((a || A.url || Ya.href) + "").replace(cc, Ya.protocol + "//"), A.type = e.method || e.type || A.method || A.type, A.dataTypes = (A.dataType || "*").toLowerCase().match(T) || [""], null == A.crossDomain) {
                var q = Z.createElement("a");
                try {
                    q.href = A.url, q.href = q.href, A.crossDomain = Hb.protocol + "//" + Hb.host != q.protocol + "//" + q.host
                } catch (Db) {
                    A.crossDomain = !0
                }
            }
            if (A.data && A.processData && "string" != typeof A.data &&
                (A.data = f.param(A.data, A.traditional)), Ja(Nb, A, e, x), ba)return x;
            (F = f.event && A.global) && 0 === f.active++ && f.event.trigger("ajaxStart");
            A.type = A.type.toUpperCase();
            A.hasContent = !bc.test(A.type);
            var K = A.url.replace(Zb, "");
            A.hasContent ? A.data && A.processData && 0 === (A.contentType || "").indexOf("application/x-www-form-urlencoded") && (A.data = A.data.replace(Yb, "+")) : (t = A.url.slice(K.length), A.data && (K += (Gb.test(K) ? "&" : "?") + A.data, delete A.data), !1 === A.cache && (K = K.replace($b, "$1"), t = (Gb.test(K) ? "&" : "?") + "_=" + Lb++ +
                t), A.url = K + t);
            A.ifModified && (f.lastModified[K] && x.setRequestHeader("If-Modified-Since", f.lastModified[K]), f.etag[K] && x.setRequestHeader("If-None-Match", f.etag[K]));
            (A.data && A.hasContent && !1 !== A.contentType || e.contentType) && x.setRequestHeader("Content-Type", A.contentType);
            x.setRequestHeader("Accept", A.dataTypes[0] && A.accepts[A.dataTypes[0]] ? A.accepts[A.dataTypes[0]] + ("*" !== A.dataTypes[0] ? ", " + Ob + "; q=0.01" : "") : A.accepts["*"]);
            for (n in A.headers)x.setRequestHeader(n, A.headers[n]);
            if (A.beforeSend && (!1 ===
                A.beforeSend.call(r, x, A) || ba))return x.abort();
            if (H = "abort", V.add(A.complete), x.done(A.success), x.fail(A.error), m = Ja(Cb, A, e, x)) {
                if (x.readyState = 1, F && L.trigger("ajaxSend", [x, A]), ba)return x;
                A.async && 0 < A.timeout && (p = g.setTimeout(function () {
                    x.abort("timeout")
                }, A.timeout));
                try {
                    var ba = !1;
                    m.send(X, d)
                } catch (Db) {
                    if (ba)throw Db;
                    d(-1, Db)
                }
            } else d(-1, "No Transport");
            return x
        }, getJSON: function (a, e, m) {
            return f.get(a, e, m, "json")
        }, getScript: function (a, e) {
            return f.get(a, void 0, e, "script")
        }
    });
    f.each(["get", "post"],
        function (a, e) {
            f[e] = function (a, d, m, l) {
                return f.isFunction(d) && (l = l || m, m = d, d = void 0), f.ajax(f.extend({
                    url: a,
                    type: e,
                    dataType: l,
                    data: d,
                    success: m
                }, f.isPlainObject(a) && a))
            }
        });
    f._evalUrl = function (a) {
        return f.ajax({url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
    };
    f.fn.extend({
        wrapAll: function (a) {
            var d;
            return this[0] && (f.isFunction(a) && (a = a.call(this[0])), d = f(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && d.insertBefore(this[0]), d.map(function () {
                for (var a = this; a.firstElementChild;)a =
                    a.firstElementChild;
                return a
            }).append(this)), this
        }, wrapInner: function (a) {
            return f.isFunction(a) ? this.each(function (d) {
                f(this).wrapInner(a.call(this, d))
            }) : this.each(function () {
                var d = f(this), e = d.contents();
                e.length ? e.wrapAll(a) : d.append(a)
            })
        }, wrap: function (a) {
            var d = f.isFunction(a);
            return this.each(function (e) {
                f(this).wrapAll(d ? a.call(this, e) : a)
            })
        }, unwrap: function (a) {
            return this.parent(a).not("body").each(function () {
                f(this).replaceWith(this.childNodes)
            }), this
        }
    });
    f.expr.pseudos.hidden = function (a) {
        return !f.expr.pseudos.visible(a)
    };
    f.expr.pseudos.visible = function (a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    };
    f.ajaxSettings.xhr = function () {
        try {
            return new g.XMLHttpRequest
        } catch (d) {
        }
    };
    var dc = {0: 200, 1223: 204}, zb = f.ajaxSettings.xhr();
    W.cors = !!zb && "withCredentials"in zb;
    W.ajax = zb = !!zb;
    f.ajaxTransport(function (a) {
        var d, e;
        if (W.cors || zb && !a.crossDomain)return {
            send: function (m, l) {
                var f, c = a.xhr();
                if (c.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (f in a.xhrFields)c[f] = a.xhrFields[f];
                a.mimeType &&
                c.overrideMimeType && c.overrideMimeType(a.mimeType);
                a.crossDomain || m["X-Requested-With"] || (m["X-Requested-With"] = "XMLHttpRequest");
                for (f in m)c.setRequestHeader(f, m[f]);
                d = function (a) {
                    return function () {
                        d && (d = e = c.onload = c.onerror = c.onabort = c.onreadystatechange = null, "abort" === a ? c.abort() : "error" === a ? "number" != typeof c.status ? l(0, "error") : l(c.status, c.statusText) : l(dc[c.status] || c.status, c.statusText, "text" !== (c.responseType || "text") || "string" != typeof c.responseText ? {binary: c.response} : {text: c.responseText},
                            c.getAllResponseHeaders()))
                    }
                };
                c.onload = d();
                e = c.onerror = d("error");
                void 0 !== c.onabort ? c.onabort = e : c.onreadystatechange = function () {
                    4 === c.readyState && g.setTimeout(function () {
                        d && e()
                    })
                };
                d = d("abort");
                try {
                    c.send(a.hasContent && a.data || null)
                } catch (Qb) {
                    if (d)throw Qb;
                }
            }, abort: function () {
                d && d()
            }
        }
    });
    f.ajaxPrefilter(function (a) {
        a.crossDomain && (a.contents.script = !1)
    });
    f.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (a) {
                return f.globalEval(a), a
            }
        }
    });
    f.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET")
    });
    f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e;
            return {
                send: function (m, l) {
                    d = f("<script>").prop({charset: a.scriptCharset, src: a.url}).on("load error", e = function (a) {
                        d.remove();
                        e = null;
                        a && l("error" === a.type ? 404 : 200, a.type)
                    });
                    Z.head.appendChild(d[0])
                }, abort: function () {
                    e && e()
                }
            }
        }
    });
    var Pb = [], Ib = /(=)\?(?=&|$)|\?\?/;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = Pb.pop() || f.expando + "_" + Lb++;
            return this[a] = !0, a
        }
    });
    f.ajaxPrefilter("json jsonp", function (a, e, m) {
        var d, l, c, p = !1 !== a.jsonp && (Ib.test(a.url) ? "url" : "string" == typeof a.data && 0 === (a.contentType || "").indexOf("application/x-www-form-urlencoded") && Ib.test(a.data) && "data");
        if (p || "jsonp" === a.dataTypes[0])return d = a.jsonpCallback = f.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, p ? a[p] = a[p].replace(Ib, "$1" + d) : !1 !== a.jsonp && (a.url += (Gb.test(a.url) ? "&" : "?") + a.jsonp +
            "=" + d), a.converters["script json"] = function () {
            return c || f.error(d + " was not called"), c[0]
        }, a.dataTypes[0] = "json", l = g[d], g[d] = function () {
            c = arguments
        }, m.always(function () {
            void 0 === l ? f(g).removeProp(d) : g[d] = l;
            a[d] && (a.jsonpCallback = e.jsonpCallback, Pb.push(d));
            c && f.isFunction(l) && l(c[0]);
            c = l = void 0
        }), "script"
    });
    W.createHTMLDocument = function () {
        var a = Z.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }();
    f.parseHTML = function (a, e, m) {
        if ("string" != typeof a)return [];
        "boolean" == typeof e && (m = e, e = !1);
        var d, l, c;
        return e || (W.createHTMLDocument ? (e = Z.implementation.createHTMLDocument(""), d = e.createElement("base"), d.href = Z.location.href, e.head.appendChild(d)) : e = Z), l = Ka.exec(a), c = !m && [], l ? [e.createElement(l[1])] : (l = U([a], e, c), c && c.length && f(c).remove(), f.merge([], l.childNodes))
    };
    f.fn.load = function (a, e, m) {
        var d, l, c, p = this, F = a.indexOf(" ");
        return -1 < F && (d = Aa(a.slice(F)), a = a.slice(0, F)), f.isFunction(e) ? (m = e, e = void 0) : e && "object" == typeof e && (l = "POST"), 0 <
        p.length && f.ajax({url: a, type: l || "GET", dataType: "html", data: e}).done(function (a) {
            c = arguments;
            p.html(d ? f("<div>").append(f.parseHTML(a)).find(d) : a)
        }).always(m && function (a, d) {
                p.each(function () {
                    m.apply(this, c || [a.responseText, d, a])
                })
            }), this
    };
    f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, e) {
        f.fn[e] = function (a) {
            return this.on(e, a)
        }
    });
    f.expr.pseudos.animated = function (a) {
        return f.grep(f.timers, function (d) {
            return a === d.elem
        }).length
    };
    f.offset = {
        setOffset: function (a,
                             e, m) {
            var d, l, c, p = f.css(a, "position"), F = f(a), A = {};
            "static" === p && (a.style.position = "relative");
            var n = F.offset();
            var r = f.css(a, "top");
            var t = f.css(a, "left");
            ("absolute" === p || "fixed" === p) && -1 < (r + t).indexOf("auto") ? (d = F.position(), c = d.top, l = d.left) : (c = parseFloat(r) || 0, l = parseFloat(t) || 0);
            f.isFunction(e) && (e = e.call(a, m, f.extend({}, n)));
            null != e.top && (A.top = e.top - n.top + c);
            null != e.left && (A.left = e.left - n.left + l);
            "using"in e ? e.using.call(a, A) : F.css(A)
        }
    };
    f.fn.extend({
        offset: function (a) {
            if (arguments.length)return void 0 ===
            a ? this : this.each(function (d) {
                f.offset.setOffset(this, a, d)
            });
            var d, e, m, l, c = this[0];
            if (c)return c.getClientRects().length ? (m = c.getBoundingClientRect(), d = c.ownerDocument, e = d.documentElement, l = d.defaultView, {
                top: m.top + l.pageYOffset - e.clientTop,
                left: m.left + l.pageXOffset - e.clientLeft
            }) : {top: 0, left: 0}
        }, position: function () {
            if (this[0]) {
                var a, e, m = this[0], l = {top: 0, left: 0};
                return "fixed" === f.css(m, "position") ? e = m.getBoundingClientRect() : (a = this.offsetParent(), e = this.offset(), k(a[0], "html") || (l = a.offset()), l = {
                    top: l.top +
                    f.css(a[0], "borderTopWidth", !0), left: l.left + f.css(a[0], "borderLeftWidth", !0)
                }), {top: e.top - l.top - f.css(m, "marginTop", !0), left: e.left - l.left - f.css(m, "marginLeft", !0)}
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent; a && "static" === f.css(a, "position");)a = a.offsetParent;
                return a || hb
            })
        }
    });
    f.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, e) {
        var d = "pageYOffset" === e;
        f.fn[a] = function (m) {
            return Sa(this, function (a, m, l) {
                var c;
                return f.isWindow(a) ? c = a : 9 === a.nodeType &&
                (c = a.defaultView), void 0 === l ? c ? c[e] : a[m] : void(c ? c.scrollTo(d ? c.pageXOffset : l, d ? l : c.pageYOffset) : a[m] = l)
            }, a, m, arguments.length)
        }
    });
    f.each(["top", "left"], function (a, e) {
        f.cssHooks[e] = ea(W.pixelPosition, function (a, d) {
            if (d)return d = M(a, e), L.test(d) ? f(a).position()[e] + "px" : d
        })
    });
    f.each({Height: "height", Width: "width"}, function (a, e) {
        f.each({padding: "inner" + a, content: e, "": "outer" + a}, function (d, m) {
            f.fn[m] = function (l, c) {
                var p = arguments.length && (d || "boolean" != typeof l), F = d || (!0 === l || !0 === c ? "margin" : "border");
                return Sa(this, function (d, e, l) {
                    var c;
                    return f.isWindow(d) ? 0 === m.indexOf("outer") ? d["inner" + a] : d.document.documentElement["client" + a] : 9 === d.nodeType ? (c = d.documentElement, Math.max(d.body["scroll" + a], c["scroll" + a], d.body["offset" + a], c["offset" + a], c["client" + a])) : void 0 === l ? f.css(d, e, F) : f.style(d, e, l, F)
                }, e, p ? l : void 0, p)
            }
        })
    });
    f.fn.extend({
        bind: function (a, e, m) {
            return this.on(a, null, e, m)
        }, unbind: function (a, e) {
            return this.off(a, null, e)
        }, delegate: function (a, e, m, l) {
            return this.on(e, a, m, l)
        }, undelegate: function (a,
                                 e, m) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(e, a || "**", m)
        }
    });
    f.holdReady = function (a) {
        a ? f.readyWait++ : f.ready(!0)
    };
    f.isArray = Array.isArray;
    f.parseJSON = JSON.parse;
    f.nodeName = k;
    "function" == typeof define && define.amd && define("jquery", [], function () {
        return f
    });
    var ec = g.jQuery, fc = g.$;
    return f.noConflict = function (a) {
        return g.$ === f && (g.$ = fc), a && g.jQuery === f && (g.jQuery = ec), f
    }, u || (g.jQuery = g.$ = f), f
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (g, u, C) {
        var v = function (b) {
            var a, c = [], r = b.length;
            for (a = 0; a !== r; c.push(b[a++]));
            return c
        }, k = function (b, a, c) {
            var r, g = b.cycle;
            for (r in g) {
                var n = g[r];
                b[r] = "function" == typeof n ? n(c, a[c]) : n[c % n.length]
            }
            delete b.cycle
        }, B = function (b, a, c) {
            C.call(this, b, a, c);
            this._cycle = 0;
            this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase;
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay =
                this.vars.repeatDelay || 0;
            this._dirty = !0;
            this.render = B.prototype.render
        }, D = C._internals, N = D.isSelector, z = D.isArray, b = B.prototype = C.to({}, .1, {}), y = [];
        B.version = "1.20.2";
        b.constructor = B;
        b.kill()._gc = !1;
        B.killTweensOf = B.killDelayedCallsTo = C.killTweensOf;
        B.getTweensOf = C.getTweensOf;
        B.lagSmoothing = C.lagSmoothing;
        B.ticker = C.ticker;
        B.render = C.render;
        b.invalidate = function () {
            return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay ||
                0, this._yoyoEase = null, this._uncache(!0), C.prototype.invalidate.call(this)
        };
        b.updateTo = function (b, a) {
            var c = this.ratio, r = this.vars.immediateRender || b.immediateRender;
            a && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (g in b)this.vars[g] = b[g];
            if (this._initted || r)if (a)this._initted = !1, r && this.render(0, !0, !0); else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled &&
                this._firstPT && C._onPluginEvent("_onDisable", this), .998 < this._time / this._duration) {
                var g = this._totalTime;
                this.render(0, !0, !1);
                this._initted = !1;
                this.render(g, !0, !1)
            } else if (this._initted = !1, this._init(), 0 < this._time || r)for (c = 1 / (1 - c), r = this._firstPT; r;)g = r.s + r.c, r.c *= c, r.s = g - r.c, r = r._next;
            return this
        };
        b.render = function (b, a, c) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var r, g, n, x, H, q, I, k, y = this._dirty ? this.totalDuration() : this._totalDuration, z = this._time, v = this._totalTime,
                u = this._cycle, J = this._duration, B = this._rawPrevTime;
            if (b >= y - 1E-7 && 0 <= b ? (this._totalTime = y, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = J, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, g = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === J && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (b = 0), (0 > B || 0 >= b && -1E-7 <= b || 1E-10 === B && "isPause" !==
                this.data) && B !== b && (c = !0, 1E-10 < B && (g = "onReverseComplete")), this._rawPrevTime = I = !a || b || B === b ? b : 1E-10)) : 1E-7 > b ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== v || 0 === J && 0 < B) && (g = "onReverseComplete", r = this._reversed), 0 > b && (this._active = !1, 0 === J && (this._initted || !this.vars.lazy || c) && (0 <= B && (c = !0), this._rawPrevTime = I = !a || b || B === b ? b : 1E-10)), this._initted || (c = !0)) : (this._totalTime = this._time = b, 0 !== this._repeat && (n = J + this._repeatDelay, this._cycle = this._totalTime /
                    n >> 0, 0 !== this._cycle && this._cycle === this._totalTime / n && b >= v && this._cycle--, this._time = this._totalTime - this._cycle * n, this._yoyo && 0 !== (1 & this._cycle) && (this._time = J - this._time, k = this._yoyoEase || this.vars.yoyoEase, k && (this._yoyoEase || (!0 !== k || this._initted ? this._yoyoEase = k = !0 === k ? this._ease : k instanceof Ease ? k : Ease.map[k] : (k = this.vars.ease, this._yoyoEase = k = k ? k instanceof Ease ? k : "function" == typeof k ? new Ease(k, this.vars.easeParams) : Ease.map[k] || C.defaultEase : C.defaultEase)), this.ratio = k ? 1 - k.getRatio((J -
                    this._time) / J) : 0)), this._time > J ? this._time = J : 0 > this._time && (this._time = 0)), this._easeType && !k ? (x = this._time / J, H = this._easeType, q = this._easePower, (1 === H || 3 === H && .5 <= x) && (x = 1 - x), 3 === H && (x *= 2), 1 === q ? x *= x : 2 === q ? x *= x * x : 3 === q ? x *= x * x * x : 4 === q && (x *= x * x * x * x), 1 === H ? this.ratio = 1 - x : 2 === H ? this.ratio = x : .5 > this._time / J ? this.ratio = x / 2 : this.ratio = 1 - x / 2) : k || (this.ratio = this._ease.getRatio(this._time / J))), z === this._time && !c && u === this._cycle)return void(v !== this._totalTime && this._onUpdate && (a || this._callback("onUpdate")));
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc)return;
                if (!c && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))return this._time = z, this._totalTime = v, this._rawPrevTime = B, this._cycle = u, D.lazyTweens.push(this), void(this._lazy = [b, a]);
                !this._time || r || k ? r && this._ease._calcEnd && !k && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / J)
            }
            !1 !== this._lazy && (this._lazy = !1);
            this._active || !this._paused && this._time !== z &&
            0 <= b && (this._active = !0);
            0 !== v || (2 === this._initted && 0 < b && this._init(), this._startAt && (0 <= b ? this._startAt.render(b, a, c) : g || (g = "_dummyGS")), !this.vars.onStart || 0 === this._totalTime && 0 !== J || !a && this._callback("onStart"));
            for (n = this._firstPT; n;)n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
            this._onUpdate && (0 > b && this._startAt && this._startTime && this._startAt.render(b, a, c), a || (this._totalTime !== v || g) && this._callback("onUpdate"));
            this._cycle !== u && (a || this._gc || this.vars.onRepeat && this._callback("onRepeat"));
            g && (!this._gc || c) && (0 > b && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(b, a, c), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !a && this.vars[g] && this._callback(g), 0 === J && 1E-10 === this._rawPrevTime && 1E-10 !== I && (this._rawPrevTime = 0))
        };
        B.to = function (b, a, c) {
            return new B(b, a, c)
        };
        B.from = function (b, a, c) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new B(b, a, c)
        };
        B.fromTo = function (b, a, c, r) {
            return r.startAt = c, r.immediateRender = 0 != r.immediateRender &&
                0 != c.immediateRender, new B(b, a, r)
        };
        B.staggerTo = B.allTo = function (b, a, c, r, g, n, x) {
            r = r || 0;
            var U, q, I = 0, H = [], E = function () {
                c.onComplete && c.onComplete.apply(c.onCompleteScope || this, arguments);
                g.apply(x || c.callbackScope || this, n || y)
            }, J = c.cycle, u = c.startAt && c.startAt.cycle;
            z(b) || ("string" == typeof b && (b = C.selector(b) || b), N(b) && (b = v(b)));
            b = b || [];
            0 > r && (b = v(b), b.reverse(), r *= -1);
            var D = b.length - 1;
            for (U = 0; D >= U; U++) {
                var M = {};
                for (q in c)M[q] = c[q];
                if (J && (k(M, b, U), null != M.duration && (a = M.duration, delete M.duration)), u) {
                    u =
                        M.startAt = {};
                    for (q in c.startAt)u[q] = c.startAt[q];
                    k(M.startAt, b, U)
                }
                M.delay = I + (M.delay || 0);
                U === D && g && (M.onComplete = E);
                H[U] = new B(b[U], a, M);
                I += r
            }
            return H
        };
        B.staggerFrom = B.allFrom = function (b, a, c, r, g, n, x) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, B.staggerTo(b, a, c, r, g, n, x)
        };
        B.staggerFromTo = B.allFromTo = function (b, a, c, r, g, n, x, q) {
            return r.startAt = c, r.immediateRender = 0 != r.immediateRender && 0 != c.immediateRender, B.staggerTo(b, a, r, g, n, x, q)
        };
        B.delayedCall = function (b, a, c, r, g) {
            return new B(a,
                0, {
                    delay: b,
                    onComplete: a,
                    onCompleteParams: c,
                    callbackScope: r,
                    onReverseComplete: a,
                    onReverseCompleteParams: c,
                    immediateRender: !1,
                    useFrames: g,
                    overwrite: 0
                })
        };
        B.set = function (b, a) {
            return new B(b, 0, a)
        };
        B.isTweening = function (b) {
            return 0 < C.getTweensOf(b, !0).length
        };
        var q = function (b, a) {
            for (var c = [], r = 0, g = b._first; g;)g instanceof C ? c[r++] = g : (a && (c[r++] = g), c = c.concat(q(g, a)), r = c.length), g = g._next;
            return c
        }, I = B.getAllTweens = function (b) {
            return q(g._rootTimeline, b).concat(q(g._rootFramesTimeline, b))
        };
        B.killAll = function (b,
                              a, c, r) {
            null == a && (a = !0);
            null == c && (c = !0);
            var g, n, x = I(0 != r), q = x.length, k = a && c && r;
            for (n = 0; q > n; n++)r = x[n], (k || r instanceof u || (g = r.target === r.vars.onComplete) && c || a && !g) && (b ? r.totalTime(r._reversed ? 0 : r.totalDuration()) : r._enabled(!1, !1))
        };
        B.killChildTweensOf = function (b, a) {
            if (null != b) {
                var c, r = D.tweenLookup;
                if ("string" == typeof b && (b = C.selector(b) || b), N(b) && (b = v(b)), z(b))for (c = b.length; -1 < --c;)B.killChildTweensOf(b[c], a); else {
                    var g = [];
                    for (n in r)for (c = r[n].target.parentNode; c;)c === b && (g = g.concat(r[n].tweens)),
                        c = c.parentNode;
                    var n = g.length;
                    for (c = 0; n > c; c++)a && g[c].totalTime(g[c].totalDuration()), g[c]._enabled(!1, !1)
                }
            }
        };
        var J = function (b, a, c, r) {
            a = !1 !== a;
            c = !1 !== c;
            r = !1 !== r;
            for (var g, n = I(r), x = a && c && r, q = n.length; -1 < --q;)r = n[q], (x || r instanceof u || (g = r.target === r.vars.onComplete) && c || a && !g) && r.paused(b)
        };
        return B.pauseAll = function (b, a, c) {
            J(!0, b, a, c)
        }, B.resumeAll = function (b, a, c) {
            J(!1, b, a, c)
        }, B.globalTimeScale = function (b) {
            var a = g._rootTimeline, c = C.ticker.time;
            return arguments.length ? (b = b || 1E-10, a._startTime = c - (c -
                a._startTime) * a._timeScale / b, a = g._rootFramesTimeline, c = C.ticker.frame, a._startTime = c - (c - a._startTime) * a._timeScale / b, a._timeScale = g._rootTimeline._timeScale = b, b) : a._timeScale
        }, b.progress = function (b, a) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - b : b) + this._cycle * (this._duration + this._repeatDelay), a) : this._time / this.duration()
        }, b.totalProgress = function (b, a) {
            return arguments.length ? this.totalTime(this.totalDuration() * b, a) : this._totalTime / this.totalDuration()
        },
            b.time = function (b, a) {
                return arguments.length ? (this._dirty && this.totalDuration(), b > this._duration && (b = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? b = this._duration - b + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (b += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(b, a)) : this._time
            }, b.duration = function (b) {
            return arguments.length ? g.prototype.duration.call(this, b) : this._duration
        }, b.totalDuration = function (b) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((b -
                this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, b.repeat = function (b) {
            return arguments.length ? (this._repeat = b, this._uncache(!0)) : this._repeat
        }, b.repeatDelay = function (b) {
            return arguments.length ? (this._repeatDelay = b, this._uncache(!0)) : this._repeatDelay
        }, b.yoyo = function (b) {
            return arguments.length ? (this._yoyo = b, this) : this._yoyo
        }, B
    }, !0);
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (g, u, C) {
        var v = function (a) {
            u.call(this, a);
            this._labels = {};
            this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren;
            this.smoothChildTiming = !0 === this.vars.smoothChildTiming;
            this._sortChildren = !0;
            this._onUpdate = this.vars.onUpdate;
            var c, b = this.vars;
            for (c in b)a = b[c], N(a) && -1 !== a.join("").indexOf("{self}") && (b[c] = this._swapSelfInParams(a));
            N(b.tweens) && this.add(b.tweens, 0, b.align, b.stagger)
        }, k = C._internals, B =
            v._internals = {}, D = k.isSelector, N = k.isArray, z = k.lazyTweens, b = k.lazyRender, y = _gsScope._gsDefine.globals, q = function (a) {
            var c, b = {};
            for (c in a)b[c] = a[c];
            return b
        }, I = function (a, c, b) {
            var r, n = a.cycle;
            for (r in n) {
                var g = n[r];
                a[r] = "function" == typeof g ? g(b, c[b]) : g[b % g.length]
            }
            delete a.cycle
        }, J = B.pauseCallback = function () {
        }, H = function (a) {
            var c, b = [], g = a.length;
            for (c = 0; c !== g; b.push(a[c++]));
            return b
        };
        k = v.prototype = new u;
        return v.version = "1.20.2", k.constructor = v, k.kill()._gc = k._forcingPlayhead = k._hasPause = !1, k.to =
            function (a, c, b, g) {
                var n = b.repeat && y.TweenMax || C;
                return c ? this.add(new n(a, c, b), g) : this.set(a, b, g)
            }, k.from = function (a, c, b, g) {
            return this.add((b.repeat && y.TweenMax || C).from(a, c, b), g)
        }, k.fromTo = function (a, c, b, g, n) {
            var r = g.repeat && y.TweenMax || C;
            return c ? this.add(r.fromTo(a, c, b, g), n) : this.set(a, g, n)
        }, k.staggerTo = function (a, c, b, g, n, x, k, y) {
            y = new v({
                onComplete: x,
                onCompleteParams: k,
                callbackScope: y,
                smoothChildTiming: this.smoothChildTiming
            });
            var r = b.cycle;
            "string" == typeof a && (a = C.selector(a) || a);
            a = a || [];
            D(a) &&
            (a = H(a));
            g = g || 0;
            0 > g && (a = H(a), a.reverse(), g *= -1);
            for (k = 0; k < a.length; k++)x = q(b), x.startAt && (x.startAt = q(x.startAt), x.startAt.cycle && I(x.startAt, a, k)), r && (I(x, a, k), null != x.duration && (c = x.duration, delete x.duration)), y.to(a[k], c, x, k * g);
            return this.add(y, n)
        }, k.staggerFrom = function (a, c, b, g, n, x, q, k) {
            return b.immediateRender = 0 != b.immediateRender, b.runBackwards = !0, this.staggerTo(a, c, b, g, n, x, q, k)
        }, k.staggerFromTo = function (a, c, b, g, n, x, q, k, I) {
            return g.startAt = b, g.immediateRender = 0 != g.immediateRender && 0 != b.immediateRender,
                this.staggerTo(a, c, g, n, x, q, k, I)
        }, k.call = function (a, c, b, g) {
            return this.add(C.delayedCall(0, a, c, b), g)
        }, k.set = function (a, c, b) {
            return b = this._parseTimeOrLabel(b, 0, !0), null == c.immediateRender && (c.immediateRender = b === this._time && !this._paused), this.add(new C(a, 0, c), b)
        }, v.exportRoot = function (a, c) {
            a = a || {};
            null == a.smoothChildTiming && (a.smoothChildTiming = !0);
            var b, g = new v(a), n = g._timeline;
            null == c && (c = !0);
            n._remove(g, !0);
            g._startTime = 0;
            g._rawPrevTime = g._time = g._totalTime = n._time;
            for (b = n._first; b;) {
                var x = b._next;
                c && b instanceof C && b.target === b.vars.onComplete || g.add(b, b._startTime - b._delay);
                b = x
            }
            return n.add(g, 0), g
        }, k.add = function (a, c, b, q) {
            var n, r;
            if ("number" != typeof c && (c = this._parseTimeOrLabel(c, 0, !0, a)), !(a instanceof g)) {
                if (a instanceof Array || a && a.push && N(a)) {
                    b = b || "normal";
                    q = q || 0;
                    var k = a.length;
                    for (n = 0; k > n; n++)N(r = a[n]) && (r = new v({tweens: r})), this.add(r, c), "string" != typeof r && "function" != typeof r && ("sequence" === b ? c = r._startTime + r.totalDuration() / r._timeScale : "start" === b && (r._startTime -= r.delay())), c +=
                        q;
                    return this._uncache(!0)
                }
                if ("string" == typeof a)return this.addLabel(a, c);
                if ("function" != typeof a)throw"Cannot add " + a + " into the timeline; it is not a tween, timeline, function, or string.";
                a = C.delayedCall(0, a)
            }
            if (u.prototype.add.call(this, a, c), a._time && a.render((this.rawTime() - a._startTime) * a._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())for (b = this, a = b.rawTime() > a._startTime; b._timeline;)a && b._timeline.smoothChildTiming ? b.totalTime(b._totalTime,
                !0) : b._gc && b._enabled(!0, !1), b = b._timeline;
            return this
        }, k.remove = function (a) {
            if (a instanceof g) {
                this._remove(a, !1);
                var c = a._timeline = a.vars.useFrames ? g._rootFramesTimeline : g._rootTimeline;
                return a._startTime = (a._paused ? a._pauseTime : c._time) - (a._reversed ? a.totalDuration() - a._totalTime : a._totalTime) / a._timeScale, this
            }
            if (a instanceof Array || a && a.push && N(a)) {
                for (c = a.length; -1 < --c;)this.remove(a[c]);
                return this
            }
            return "string" == typeof a ? this.removeLabel(a) : this.kill(null, a)
        }, k._remove = function (a, c) {
            u.prototype._remove.call(this,
                a, c);
            return this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, k.append = function (a, c) {
            return this.add(a, this._parseTimeOrLabel(null, c, !0, a))
        }, k.insert = k.insertMultiple = function (a, c, b, g) {
            return this.add(a, c || 0, b, g)
        }, k.appendMultiple = function (a, c, b, g) {
            return this.add(a, this._parseTimeOrLabel(null, c, !0, a), b, g)
        }, k.addLabel = function (a, c) {
            return this._labels[a] = this._parseTimeOrLabel(c),
                this
        }, k.addPause = function (a, c, b, g) {
            b = C.delayedCall(0, J, b, g || this);
            return b.vars.onComplete = b.vars.onReverseComplete = c, b.data = "isPause", this._hasPause = !0, this.add(b, a)
        }, k.removeLabel = function (a) {
            return delete this._labels[a], this
        }, k.getLabelTime = function (a) {
            return null != this._labels[a] ? this._labels[a] : -1
        }, k._parseTimeOrLabel = function (a, c, b, q) {
            var n;
            if (q instanceof g && q.timeline === this)this.remove(q); else if (q && (q instanceof Array || q.push && N(q)))for (n = q.length; -1 < --n;)q[n]instanceof g && q[n].timeline ===
            this && this.remove(q[n]);
            if (q = 99999999999 < this.duration() ? this.recent().endTime(!1) : this._duration, "string" == typeof c)return this._parseTimeOrLabel(c, b && "number" == typeof a && null == this._labels[c] ? a - q : 0, b);
            if (c = c || 0, "string" != typeof a || !isNaN(a) && null == this._labels[a])null == a && (a = q); else {
                if (n = a.indexOf("="), -1 === n)return null == this._labels[a] ? b ? this._labels[a] = q + c : c : this._labels[a] + c;
                c = parseInt(a.charAt(n - 1) + "1", 10) * Number(a.substr(n + 1));
                a = 1 < n ? this._parseTimeOrLabel(a.substr(0, n - 1), 0, b) : q
            }
            return Number(a) +
                c
        }, k.seek = function (a, c) {
            return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), !1 !== c)
        }, k.stop = function () {
            return this.paused(!0)
        }, k.gotoAndPlay = function (a, c) {
            return this.play(a, c)
        }, k.gotoAndStop = function (a, c) {
            return this.pause(a, c)
        }, k.render = function (a, c, g) {
            this._gc && this._enabled(!0, !1);
            var r, n, q, k, I, y, v, E = this._dirty ? this.totalDuration() : this._totalDuration, H = this._time, J = this._startTime, u = this._timeScale, B = this._paused;
            if (a >= E - 1E-7 && 0 <= a)this._totalTime = this._time = E, this._reversed ||
            this._hasPausedChild() || (n = !0, k = "onComplete", I = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && -1E-7 <= a || 0 > this._rawPrevTime || 1E-10 === this._rawPrevTime) && this._rawPrevTime !== a && this._first && (I = !0, 1E-10 < this._rawPrevTime && (k = "onReverseComplete"))), this._rawPrevTime = this._duration || !c || a || this._rawPrevTime === a ? a : 1E-10, a = E + 1E-4; else if (1E-7 > a)if (this._totalTime = this._time = 0, (0 !== H || 0 === this._duration && 1E-10 !== this._rawPrevTime && (0 < this._rawPrevTime || 0 > a && 0 <= this._rawPrevTime)) && (k = "onReverseComplete",
                    n = this._reversed), 0 > a)this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (I = n = !0, k = "onReverseComplete") : 0 <= this._rawPrevTime && this._first && (I = !0), this._rawPrevTime = a; else {
                if (this._rawPrevTime = this._duration || !c || a || this._rawPrevTime === a ? a : 1E-10, 0 === a && n)for (r = this._first; r && 0 === r._startTime;)r._duration || (n = !1), r = r._next;
                a = 0;
                this._initted || (I = !0)
            } else {
                if (this._hasPause && !this._forcingPlayhead && !c) {
                    if (a >= H)for (r = this._first; r && r._startTime <= a && !y;)r._duration || "isPause" !== r.data || r.ratio ||
                    0 === r._startTime && 0 === this._rawPrevTime || (y = r), r = r._next; else for (r = this._last; r && r._startTime >= a && !y;)r._duration || "isPause" === r.data && 0 < r._rawPrevTime && (y = r), r = r._prev;
                    y && (this._time = a = y._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = a
            }
            if (this._time !== H && this._first || g || I || y) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== H && 0 < a && (this._active = !0), 0 === H && this.vars.onStart && (0 === this._time &&
                    this._duration || c || this._callback("onStart")), v = this._time, v >= H)for (r = this._first; r && (q = r._next, v === this._time && (!this._paused || B));)(r._active || r._startTime <= v && !r._paused && !r._gc) && (y === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (a - r._startTime) * r._timeScale, c, g) : r.render((a - r._startTime) * r._timeScale, c, g)), r = q; else for (r = this._last; r && (q = r._prev, v === this._time && (!this._paused || B));) {
                    if (r._active || r._startTime <= H && !r._paused && !r._gc) {
                        if (y === r) {
                            for (y = r._prev; y &&
                            y.endTime() > this._time;)y.render(y._reversed ? y.totalDuration() - (a - y._startTime) * y._timeScale : (a - y._startTime) * y._timeScale, c, g), y = y._prev;
                            y = null;
                            this.pause()
                        }
                        r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (a - r._startTime) * r._timeScale, c, g) : r.render((a - r._startTime) * r._timeScale, c, g)
                    }
                    r = q
                }
                this._onUpdate && (c || (z.length && b(), this._callback("onUpdate")));
                k && (this._gc || (J === this._startTime || u !== this._timeScale) && (0 === this._time || E >= this.totalDuration()) && (n && (z.length && b(), this._timeline.autoRemoveChildren &&
                this._enabled(!1, !1), this._active = !1), !c && this.vars[k] && this._callback(k)))
            }
        }, k._hasPausedChild = function () {
            for (var a = this._first; a;) {
                if (a._paused || a instanceof v && a._hasPausedChild())return !0;
                a = a._next
            }
            return !1
        }, k.getChildren = function (a, c, b, g) {
            g = g || -9999999999;
            for (var n = [], r = this._first, q = 0; r;)r._startTime < g || (r instanceof C ? !1 !== c && (n[q++] = r) : (!1 !== b && (n[q++] = r), !1 !== a && (n = n.concat(r.getChildren(!0, c, b)), q = n.length))), r = r._next;
            return n
        }, k.getTweensOf = function (a, c) {
            var b, g = this._gc, n = [], q = 0;
            g && this._enabled(!0,
                !0);
            var k = C.getTweensOf(a);
            for (b = k.length; -1 < --b;)(k[b].timeline === this || c && this._contains(k[b])) && (n[q++] = k[b]);
            return g && this._enabled(!1, !0), n
        }, k.recent = function () {
            return this._recent
        }, k._contains = function (a) {
            for (a = a.timeline; a;) {
                if (a === this)return !0;
                a = a.timeline
            }
            return !1
        }, k.shiftChildren = function (a, c, b) {
            b = b || 0;
            for (var g, n = this._first, r = this._labels; n;)n._startTime >= b && (n._startTime += a), n = n._next;
            if (c)for (g in r)r[g] >= b && (r[g] += a);
            return this._uncache(!0)
        }, k._kill = function (a, c) {
            if (!a && !c)return this._enabled(!1,
                !1);
            for (var b = c ? this.getTweensOf(c) : this.getChildren(!0, !0, !1), g = b.length, n = !1; -1 < --g;)b[g]._kill(a, c) && (n = !0);
            return n
        }, k.clear = function (a) {
            var c = this.getChildren(!1, !0, !0), b = c.length;
            for (this._time = this._totalTime = 0; -1 < --b;)c[b]._enabled(!1, !1);
            return !1 !== a && (this._labels = {}), this._uncache(!0)
        }, k.invalidate = function () {
            for (var a = this._first; a;)a.invalidate(), a = a._next;
            return g.prototype.invalidate.call(this)
        }, k._enabled = function (a, c) {
            if (a === this._gc)for (var b = this._first; b;)b._enabled(a, !0), b = b._next;
            return u.prototype._enabled.call(this, a, c)
        }, k.totalTime = function (a, c, b) {
            this._forcingPlayhead = !0;
            var r = g.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, r
        }, k.duration = function (a) {
            return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration)
        }, k.totalDuration = function (a) {
            if (!arguments.length) {
                if (this._dirty) {
                    var c = 0;
                    var b = this._last;
                    for (var g = 999999999999; b;) {
                        var n = b._prev;
                        b._dirty && b.totalDuration();
                        b._startTime > g && this._sortChildren && !b._paused ? this.add(b, b._startTime - b._delay) : g = b._startTime;
                        0 > b._startTime && !b._paused && (c -= b._startTime, this._timeline.smoothChildTiming && (this._startTime += b._startTime / this._timeScale), this.shiftChildren(-b._startTime, !1, -9999999999), g = 0);
                        b = b._startTime + b._totalDuration / b._timeScale;
                        b > c && (c = b);
                        b = n
                    }
                    this._duration = this._totalDuration = c;
                    this._dirty = !1
                }
                return this._totalDuration
            }
            return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this
        }, k.paused = function (a) {
            if (!a)for (var c =
                this._first, b = this._time; c;)c._startTime === b && "isPause" === c.data && (c._rawPrevTime = 0), c = c._next;
            return g.prototype.paused.apply(this, arguments)
        }, k.usesFrames = function () {
            for (var a = this._timeline; a._timeline;)a = a._timeline;
            return a === g._rootFramesTimeline
        }, k.rawTime = function (a) {
            return a && (this._paused || this._repeat && 0 < this.time() && 1 > this.totalProgress()) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(a) - this._startTime) * this._timeScale
        }, v
    }, !0);
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (g, u, C) {
        var v = function (b) {
            g.call(this, b);
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._cycle = 0;
            this._yoyo = !0 === this.vars.yoyo;
            this._dirty = !0
        }, k = u._internals, B = k.lazyTweens, D = k.lazyRender, N = _gsScope._gsDefine.globals, z = new C(null, null, 1, 0);
        C = v.prototype = new g;
        return C.constructor = v, C.kill()._gc = !1, v.version = "1.20.2", C.invalidate = function () {
            return this._yoyo = !0 === this.vars.yoyo, this._repeat =
                this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), g.prototype.invalidate.call(this)
        }, C.addCallback = function (b, g, q, k) {
            return this.add(u.delayedCall(0, b, q, k), g)
        }, C.removeCallback = function (b, g) {
            if (b)if (null == g)this._kill(null, b); else for (var q = this.getTweensOf(b, !1), k = q.length, y = this._parseTimeOrLabel(g); -1 < --k;)q[k]._startTime === y && q[k]._enabled(!1, !1);
            return this
        }, C.removePause = function (b) {
            return this.removeCallback(g._internals.pauseCallback, b)
        }, C.tweenTo = function (b,
                                 g) {
            g = g || {};
            var q, k, y, v = {
                ease: z,
                useFrames: this.usesFrames(),
                immediateRender: !1
            }, a = g.repeat && N.TweenMax || u;
            for (k in g)v[k] = g[k];
            return v.time = this._parseTimeOrLabel(b), q = Math.abs(Number(v.time) - this._time) / this._timeScale || .001, y = new a(this, q, v), v.onStart = function () {
                y.target.paused(!0);
                y.vars.time !== y.target.time() && q === y.duration() && y.duration(Math.abs(y.vars.time - y.target.time()) / y.target._timeScale);
                g.onStart && g.onStart.apply(g.onStartScope || g.callbackScope || y, g.onStartParams || [])
            }, y
        }, C.tweenFromTo =
            function (b, g, q) {
                q = q || {};
                b = this._parseTimeOrLabel(b);
                q.startAt = {onComplete: this.seek, onCompleteParams: [b], callbackScope: this};
                q.immediateRender = !1 !== q.immediateRender;
                g = this.tweenTo(g, q);
                return g.duration(Math.abs(g.vars.time - b) / this._timeScale || .001)
            }, C.render = function (b, g, q) {
            this._gc && this._enabled(!0, !1);
            var k, y, z, a, c, r, v, n = this._dirty ? this.totalDuration() : this._totalDuration, x = this._duration, u = this._time, C = this._totalTime, qa = this._startTime, xa = this._timeScale, E = this._rawPrevTime, R = this._paused,
                Q = this._cycle;
            if (b >= n - 1E-7 && 0 <= b)this._locked || (this._totalTime = n, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (y = !0, a = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= b && -1E-7 <= b || 0 > E || 1E-10 === E) && E !== b && this._first && (c = !0, 1E-10 < E && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !g || b || this._rawPrevTime === b ? b : 1E-10, this._yoyo && 0 !== (1 & this._cycle) ? this._time = b = 0 : (this._time = x, b = x + 1E-4); else if (1E-7 > b)if (this._locked || (this._totalTime = this._cycle =
                    0), this._time = 0, (0 !== u || 0 === x && 1E-10 !== E && (0 < E || 0 > b && 0 <= E) && !this._locked) && (a = "onReverseComplete", y = this._reversed), 0 > b)this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = y = !0, a = "onReverseComplete") : 0 <= E && this._first && (c = !0), this._rawPrevTime = b; else {
                if (this._rawPrevTime = x || !g || b || this._rawPrevTime === b ? b : 1E-10, 0 === b && y)for (k = this._first; k && 0 === k._startTime;)k._duration || (y = !1), k = k._next;
                b = 0;
                this._initted || (c = !0)
            } else if (0 === x && 0 > E && (c = !0), this._time = this._rawPrevTime = b, this._locked ||
                (this._totalTime = b, 0 !== this._repeat && (k = x + this._repeatDelay, this._cycle = this._totalTime / k >> 0, 0 !== this._cycle && this._cycle === this._totalTime / k && b >= C && this._cycle--, this._time = this._totalTime - this._cycle * k, this._yoyo && 0 !== (1 & this._cycle) && (this._time = x - this._time), this._time > x ? (this._time = x, b = x + 1E-4) : 0 > this._time ? this._time = b = 0 : b = this._time)), this._hasPause && !this._forcingPlayhead && !g) {
                if (b = this._time, b >= u || this._repeat && Q !== this._cycle)for (k = this._first; k && k._startTime <= b && !r;)k._duration || "isPause" !==
                k.data || k.ratio || 0 === k._startTime && 0 === this._rawPrevTime || (r = k), k = k._next; else for (k = this._last; k && k._startTime >= b && !r;)k._duration || "isPause" === k.data && 0 < k._rawPrevTime && (r = k), k = k._prev;
                r && r._startTime < x && (this._time = b = r._startTime, this._totalTime = b + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== Q && !this._locked) {
                k = this._yoyo && 0 !== (1 & Q);
                var N = k === (this._yoyo && 0 !== (1 & this._cycle)), M = this._totalTime, ea = this._cycle, S = this._rawPrevTime, ta = this._time;
                if ((this._totalTime = Q * x, this._cycle <
                    Q ? k = !k : this._totalTime += x, this._time = u, this._rawPrevTime = 0 === x ? E - 1E-4 : E, this._cycle = Q, this._locked = !0, u = k ? 0 : x, this.render(u, g, 0 === x), g || this._gc || this.vars.onRepeat && (this._cycle = ea, this._locked = !1, this._callback("onRepeat")), u !== this._time) || (N && (this._cycle = Q, this._locked = !0, u = k ? x + 1E-4 : -1E-4, this.render(u, !0, !1)), this._locked = !1, this._paused && !R))return;
                this._time = ta;
                this._totalTime = M;
                this._cycle = ea;
                this._rawPrevTime = S
            }
            if (!(this._time !== u && this._first || q || c || r))return void(C !== this._totalTime &&
            this._onUpdate && (g || this._callback("onUpdate")));
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== C && 0 < b && (this._active = !0), 0 === C && this.vars.onStart && (0 === this._totalTime && this._totalDuration || g || this._callback("onStart")), v = this._time, v >= u)for (k = this._first; k && (z = k._next, v === this._time && (!this._paused || R));)(k._active || k._startTime <= this._time && !k._paused && !k._gc) && (r === k && this.pause(), k._reversed ? k.render((k._dirty ? k.totalDuration() : k._totalDuration) - (b - k._startTime) *
                k._timeScale, g, q) : k.render((b - k._startTime) * k._timeScale, g, q)), k = z; else for (k = this._last; k && (z = k._prev, v === this._time && (!this._paused || R));) {
                if (k._active || k._startTime <= u && !k._paused && !k._gc) {
                    if (r === k) {
                        for (r = k._prev; r && r.endTime() > this._time;)r.render(r._reversed ? r.totalDuration() - (b - r._startTime) * r._timeScale : (b - r._startTime) * r._timeScale, g, q), r = r._prev;
                        r = null;
                        this.pause()
                    }
                    k._reversed ? k.render((k._dirty ? k.totalDuration() : k._totalDuration) - (b - k._startTime) * k._timeScale, g, q) : k.render((b - k._startTime) *
                        k._timeScale, g, q)
                }
                k = z
            }
            this._onUpdate && (g || (B.length && D(), this._callback("onUpdate")));
            a && (this._locked || this._gc || (qa === this._startTime || xa !== this._timeScale) && (0 === this._time || n >= this.totalDuration()) && (y && (B.length && D(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !g && this.vars[a] && this._callback(a)))
        }, C.getActive = function (b, g, k) {
            null == b && (b = !0);
            null == g && (g = !0);
            null == k && (k = !1);
            var q = [];
            k = this.getChildren(b, g, k);
            var y = 0, z = k.length;
            for (b = 0; z > b; b++)g = k[b], g.isActive() &&
            (q[y++] = g);
            return q
        }, C.getLabelAfter = function (b) {
            b || 0 !== b && (b = this._time);
            var g, k = this.getLabelsArray(), z = k.length;
            for (g = 0; z > g; g++)if (k[g].time > b)return k[g].name;
            return null
        }, C.getLabelBefore = function (b) {
            null == b && (b = this._time);
            for (var g = this.getLabelsArray(), k = g.length; -1 < --k;)if (g[k].time < b)return g[k].name;
            return null
        }, C.getLabelsArray = function () {
            var b, g = [], k = 0;
            for (b in this._labels)g[k++] = {time: this._labels[b], name: b};
            return g.sort(function (b, g) {
                return b.time - g.time
            }), g
        }, C.invalidate = function () {
            return this._locked = !1, g.prototype.invalidate.call(this)
        }, C.progress = function (b, g) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - b : b) + this._cycle * (this._duration + this._repeatDelay), g) : this._time / this.duration() || 0
        }, C.totalProgress = function (b, g) {
            return arguments.length ? this.totalTime(this.totalDuration() * b, g) : this._totalTime / this.totalDuration() || 0
        }, C.totalDuration = function (b) {
            return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty &&
            (g.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, C.time = function (b, g) {
            return arguments.length ? (this._dirty && this.totalDuration(), b > this._duration && (b = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? b = this._duration - b + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (b += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(b, g)) : this._time
        }, C.repeat =
            function (b) {
                return arguments.length ? (this._repeat = b, this._uncache(!0)) : this._repeat
            }, C.repeatDelay = function (b) {
            return arguments.length ? (this._repeatDelay = b, this._uncache(!0)) : this._repeatDelay
        }, C.yoyo = function (b) {
            return arguments.length ? (this._yoyo = b, this) : this._yoyo
        }, C.currentLabel = function (b) {
            return arguments.length ? this.seek(b, !0) : this.getLabelBefore(this._time + 1E-8)
        }, v
    }, !0);
    (function () {
        var g = 180 / Math.PI, u = [], C = [], v = [], k = {}, B = _gsScope._gsDefine.globals, D = function (b, g, k, z) {
            k === z && (k = z - (z - g) / 1E6);
            b === g && (g = b + (k - b) / 1E6);
            this.a = b;
            this.b = g;
            this.c = k;
            this.d = z;
            this.da = z - b;
            this.ca = k - b;
            this.ba = g - b
        }, N = function (b, g, k, z) {
            var a = {a: b}, c = {}, r = {}, q = {c: z}, n = (b + g) / 2, x = (g + k) / 2;
            k = (k + z) / 2;
            g = (n + x) / 2;
            x = (x + k) / 2;
            var y = (x - g) / 8;
            return a.b = n + (b - n) / 4, c.b = g + y, a.c = c.a = (a.b + c.b) / 2, c.c = r.a = (g + x) / 2, r.b = x - y, q.b = k + (z - k) / 4, r.c = q.a = (r.b + q.b) / 2, [a, c, r, q]
        }, z = function (b, g, z, y, a, c) {
            var r, q, n = {}, x = [], H = c || b[0];
            a = "string" == typeof a ? "," + a + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,";
            null == g && (g = 1);
            for (q in b[0])x.push(q);
            if (1 < b.length) {
                var B = b[b.length - 1];
                var I = !0;
                for (r = x.length; -1 < --r;)if (q = x[r], .05 < Math.abs(H[q] - B[q])) {
                    I = !1;
                    break
                }
                I && (b = b.concat(), c && b.unshift(c), b.push(b[1]), c = b[b.length - 3])
            }
            u.length = C.length = v.length = 0;
            for (r = x.length; -1 < --r;) {
                q = x[r];
                k[q] = -1 !== a.indexOf("," + q + ",");
                B = q;
                var J = void 0;
                H = void 0;
                var E, R = void 0, Q = b, da = q, M = k[q];
                var ea = c;
                var S = [];
                if (ea)for (Q = [ea].concat(Q), E = Q.length; -1 < --E;)"string" == typeof(J = Q[E][da]) && "=" === J.charAt(1) && (Q[E][da] = ea[da] + Number(J.charAt(0) +
                        J.substr(2)));
                if (R = Q.length - 2, 0 > R)H = (S[0] = new D(Q[0][da], 0, 0, Q[0][da]), S); else {
                    for (E = 0; R > E; E++)ea = Q[E][da], J = Q[E + 1][da], S[E] = new D(ea, 0, 0, J), M && (H = Q[E + 2][da], u[E] = (u[E] || 0) + (J - ea) * (J - ea), C[E] = (C[E] || 0) + (H - J) * (H - J));
                    H = (S[E] = new D(Q[E][da], 0, 0, Q[E + 1][da]), S)
                }
                n[B] = H
            }
            for (r = u.length; -1 < --r;)u[r] = Math.sqrt(u[r]), C[r] = Math.sqrt(C[r]);
            if (!y) {
                for (r = x.length; -1 < --r;)if (k[q])for (b = n[x[r]], B = b.length - 1, a = 0; B > a; a++)c = b[a + 1].da / C[a] + b[a].da / u[a] || 0, v[a] = (v[a] || 0) + c * c;
                for (r = v.length; -1 < --r;)v[r] = Math.sqrt(v[r])
            }
            r =
                x.length;
            for (a = z ? 4 : 1; -1 < --r;) {
                q = x[r];
                b = n[q];
                E = H = B = c = void 0;
                da = Q = R = void 0;
                var ta;
                M = b;
                S = g;
                J = z;
                ea = y;
                var ua = k[q], ca = M.length - 1, ka = 0, la = M[0].a;
                for (ta = 0; ca > ta; ta++) {
                    q = M[ka];
                    var ha = q.a;
                    var ia = q.d;
                    var Ia = M[ka + 1].d;
                    ua ? (H = u[ta], B = C[ta], c = (B + H) * S * .25 / (ea ? .5 : v[ta] || .5), da = ia - (ia - ha) * (ea ? .5 * S : 0 !== H ? c / H : 0), Q = ia + (Ia - ia) * (ea ? .5 * S : 0 !== B ? c / B : 0), R = ia - (da + ((Q - da) * (3 * H / (H + B) + .5) / 4 || 0))) : (da = ia - (ia - ha) * S * .5, Q = ia + (Ia - ia) * S * .5, R = ia - (da + Q) / 2);
                    da += R;
                    Q += R;
                    q.c = Ia = da;
                    0 !== ta ? q.b = la : q.b = la = q.a + .6 * (q.c - q.a);
                    q.da = ia - ha;
                    q.ca = Ia - ha;
                    q.ba = la - ha;
                    J ? (E = N(ha, la, Ia, ia), M.splice(ka, 1, E[0], E[1], E[2], E[3]), ka += 4) : ka++;
                    la = Q
                }
                q = M[ka];
                q.b = la;
                q.c = la + .4 * (q.d - la);
                q.da = q.d - q.a;
                q.ca = q.c - q.a;
                q.ba = la - q.a;
                J && (E = N(q.a, la, q.c, q.d), M.splice(ka, 1, E[0], E[1], E[2], E[3]));
                I && (b.splice(0, a), b.splice(b.length - a, a))
            }
            return n
        }, b = _gsScope._gsDefine.plugin({
            propName: "bezier", priority: -1, version: "1.3.8", API: 2, global: !0, init: function (b, g, k) {
                this._target = b;
                g instanceof Array && (g = {values: g});
                this._func = {};
                this._mod = {};
                this._props = [];
                this._timeRes = null == g.timeResolution ?
                    6 : parseInt(g.timeResolution, 10);
                var q, a, c, r = g.values || [], y = {};
                var n = r[0];
                this._autoRotate = (q = g.autoRotate || k.vars.orientToBezier) ? q instanceof Array ? q : [["x", "y", "rotation", !0 === q ? 0 : Number(q) || 0]] : null;
                for (x in n)this._props.push(x);
                for (n = this._props.length; -1 < --n;) {
                    var x = this._props[n];
                    this._overwriteProps.push(x);
                    q = this._func[x] = "function" == typeof b[x];
                    y[x] = q ? b[x.indexOf("set") || "function" != typeof b["get" + x.substr(3)] ? x : "get" + x.substr(3)]() : parseFloat(b[x]);
                    c || y[x] !== r[0][x] && (c = y)
                }
                if ("cubic" !==
                    g.type && "quadratic" !== g.type && "soft" !== g.type)y = z(r, isNaN(g.curviness) ? 1 : g.curviness, !1, "thruBasic" === g.type, g.correlate, c); else {
                    n = r;
                    r = (r = g.type) || "soft";
                    var v, u, B;
                    g = {};
                    c = "cubic" === r ? 3 : 2;
                    var C = "soft" === r, E = [];
                    if (C && y && (n = [y].concat(n)), null == n || n.length < c + 1)throw"invalid Bezier data";
                    for (J in n[0])E.push(J);
                    for (u = E.length; -1 < --u;) {
                        var J = E[u];
                        g[J] = q = [];
                        var I = 0;
                        var N = n.length;
                        for (B = 0; N > B; B++)r = null == y ? n[B][J] : "string" == typeof(v = n[B][J]) && "=" === v.charAt(1) ? y[J] + Number(v.charAt(0) + v.substr(2)) : Number(v),
                        C && 1 < B && N - 1 > B && (q[I++] = (r + q[I - 2]) / 2), q[I++] = r;
                        N = I - c + 1;
                        for (B = I = 0; N > B; B += c) {
                            r = q[B];
                            J = q[B + 1];
                            v = q[B + 2];
                            var M = 2 === c ? 0 : q[B + 3];
                            q[I++] = v = 3 === c ? new D(r, J, v, M) : new D(r, (2 * J + r) / 3, (2 * J + v) / 3, v)
                        }
                        q.length = I
                    }
                    y = g
                }
                if (this._beziers = y, this._segCount = this._beziers[x].length, this._timeRes) {
                    q = this._beziers;
                    x = this._timeRes;
                    x = x >> 0 || 6;
                    y = [];
                    J = [];
                    n = v = 0;
                    g = x - 1;
                    c = [];
                    r = [];
                    for (a in q)for (N = q[a], I = y, C = x, E = 1 / C, M = N.length; -1 < --M;) {
                        var ea = N[M];
                        var S = ea.a;
                        B = ea.d - S;
                        u = ea.c - S;
                        S = ea.b - S;
                        var ta = 0;
                        for (ea = 1; C >= ea; ea++) {
                            var ua = E * ea;
                            var ca = 1 - ua;
                            ua = ta - (ta = (ua * ua * B + 3 * ca * (ua * u + ca * S)) * ua);
                            ca = M * C + ea - 1;
                            I[ca] = (I[ca] || 0) + ua * ua
                        }
                    }
                    q = y.length;
                    for (a = 0; q > a; a++)v += Math.sqrt(y[a]), u = a % x, r[u] = v, u === g && (n += v, u = a / x >> 0, c[u] = r, J[u] = n, v = 0, r = []);
                    this._length = n;
                    this._lengths = J;
                    this._segments = c;
                    this._l1 = this._li = this._s1 = this._si = 0;
                    this._l2 = this._lengths[0];
                    this._curSeg = this._segments[0];
                    this._s2 = this._curSeg[0];
                    this._prec = 1 / this._curSeg.length
                }
                if (q = this._autoRotate)for (this._initialRotations = [], q[0]instanceof Array || (this._autoRotate = q = [q]), n = q.length; -1 < --n;) {
                    for (a =
                             0; 3 > a; a++)x = q[n][a], this._func[x] = "function" == typeof b[x] ? b[x.indexOf("set") || "function" != typeof b["get" + x.substr(3)] ? x : "get" + x.substr(3)] : !1;
                    x = q[n][2];
                    this._initialRotations[n] = (this._func[x] ? this._func[x].call(this._target) : this._target[x]) || 0;
                    this._overwriteProps.push(x)
                }
                return this._startRatio = k.vars.runBackwards ? 1 : 0, !0
            }, set: function (b) {
                var k, q, y;
                var a = this._segCount;
                var c = this._func, r = this._target, z = b !== this._startRatio;
                if (this._timeRes) {
                    if (k = this._lengths, y = this._curSeg, b *= this._length, q = this._li,
                        b > this._l2 && a - 1 > q) {
                        for (--a; a > q && (this._l2 = k[++q]) <= b;);
                        this._l1 = k[q - 1];
                        this._li = q;
                        this._curSeg = y = this._segments[q];
                        this._s2 = y[this._s1 = this._si = 0]
                    } else if (b < this._l1 && 0 < q) {
                        for (; 0 < q && (this._l1 = k[--q]) >= b;);
                        0 === q && b < this._l1 ? this._l1 = 0 : q++;
                        this._l2 = k[q];
                        this._li = q;
                        this._curSeg = y = this._segments[q];
                        this._s1 = y[(this._si = y.length - 1) - 1] || 0;
                        this._s2 = y[this._si]
                    }
                    if (k = q, b -= this._l1, q = this._si, b > this._s2 && q < y.length - 1) {
                        for (a = y.length - 1; a > q && (this._s2 = y[++q]) <= b;);
                        this._s1 = y[q - 1];
                        this._si = q
                    } else if (b < this._s1 &&
                        0 < q) {
                        for (; 0 < q && (this._s1 = y[--q]) >= b;);
                        0 === q && b < this._s1 ? this._s1 = 0 : q++;
                        this._s2 = y[q];
                        this._si = q
                    }
                    a = (q + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                } else k = 0 > b ? 0 : 1 <= b ? a - 1 : a * b >> 0, a *= b - 1 / a * k;
                var n = 1 - a;
                for (q = this._props.length; -1 < --q;) {
                    b = this._props[q];
                    y = this._beziers[b][k];
                    var x = (a * a * y.da + 3 * n * (a * y.ca + n * y.ba)) * a + y.a;
                    this._mod[b] && (x = this._mod[b](x, r));
                    c[b] ? r[b](x) : r[b] = x
                }
                if (this._autoRotate) {
                    var v, u, B, C, E = this._autoRotate;
                    for (q = E.length; -1 < --q;) {
                        b = E[q][2];
                        var D = E[q][3] || 0;
                        var Q = !0 === E[q][4] ? 1 : g;
                        y = this._beziers[E[q][0]];
                        n = this._beziers[E[q][1]];
                        y && n && (y = y[k], n = n[k], v = y.a + (y.b - y.a) * a, B = y.b + (y.c - y.b) * a, v += (B - v) * a, B += (y.c + (y.d - y.c) * a - B) * a, u = n.a + (n.b - n.a) * a, C = n.b + (n.c - n.b) * a, u += (C - u) * a, C += (n.c + (n.d - n.c) * a - C) * a, x = z ? Math.atan2(C - u, B - v) * Q + D : this._initialRotations[q], this._mod[b] && (x = this._mod[b](x, r)), c[b] ? r[b](x) : r[b] = x)
                    }
                }
            }
        }), y = b.prototype;
        b.bezierThrough = z;
        b.cubicToQuadratic = N;
        b._autoCSS = !0;
        b.quadraticToCubic = function (b, g, k) {
            return new D(b, (2 * g + b) / 3, (2 * g + k) / 3, k)
        };
        b._cssRegister = function () {
            var g = B.CSSPlugin;
            if (g) {
                g = g._internals;
                var k = g._parseToProxy, y = g._setPluginRatio, z = g.CSSPropTween;
                g._registerComplexSpecialProp("bezier", {
                    parser: function (a, c, g, q, n, x) {
                        c instanceof Array && (c = {values: c});
                        x = new b;
                        var r, v = c.values, u = v.length - 1, B = [], E = {};
                        if (0 > u)return n;
                        for (g = 0; u >= g; g++) {
                            var C = k(a, v[g], q, n, x, u !== g);
                            B[g] = C.end
                        }
                        for (r in c)E[r] = c[r];
                        return E.values = B, n = new z(a, "bezier", 0, 0, C.pt, 2), n.data = C, n.plugin = x, n.setRatio = y, 0 === E.autoRotate && (E.autoRotate = !0), !E.autoRotate || E.autoRotate instanceof Array || (g = !0 === E.autoRotate ? 0 : Number(E.autoRotate),
                            E.autoRotate = null != C.end.left ? [["left", "top", "rotation", g, !1]] : null != C.end.x ? [["x", "y", "rotation", g, !1]] : !1), E.autoRotate && (q._transform || q._enableTransforms(!1), C.autoRotate = q._target._gsTransform, C.proxy.rotation = C.autoRotate.rotation || 0, q._overwriteProps.push("rotation")), x._onInitTween(C.proxy, E, q._tween), n
                    }
                })
            }
        };
        y._mod = function (b) {
            for (var g, k = this._overwriteProps, q = k.length; -1 < --q;)(g = b[k[q]]) && "function" == typeof g && (this._mod[k[q]] = g)
        };
        y._kill = function (b) {
            var g, k, q = this._props;
            for (g in this._beziers)if (g in
                b)for (delete this._beziers[g], delete this._func[g], k = q.length; -1 < --k;)q[k] === g && q.splice(k, 1);
            if (q = this._autoRotate)for (k = q.length; -1 < --k;)b[q[k][2]] && q.splice(k, 1);
            return this._super._kill.call(this, b)
        }
    })();
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (g, u) {
        var C, v, k, B, D = function () {
            g.call(this, "css");
            this._overwriteProps.length = 0;
            this.setRatio = D.prototype.setRatio
        }, N = _gsScope._gsDefine.globals, z = {}, b = D.prototype = new g("css");
        b.constructor = D;
        D.version = "1.20.0";
        D.API = 2;
        D.defaultTransformPerspective = 0;
        D.defaultSkewType = "compensated";
        D.defaultSmoothOrigin = !0;
        b = "px";
        D.suffixMap = {
            top: b,
            right: b,
            bottom: b,
            left: b,
            width: b,
            height: b,
            fontSize: b,
            padding: b,
            margin: b,
            perspective: b,
            lineHeight: ""
        };
        var y, q, I, J, H, a, c, r, U = /(?:\-|\.|\b)(\d|\.|e\-)+/g, n = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, oa = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, na = /(?:\d|\-|\+|=|#|\.)*/g, qa = /opacity *= *([^)]*)/i, xa = /opacity:([^;]*)/i,
            E = /alpha\(opacity *=.+?\)/i, R = /^(rgb|hsl)/, Q = /([A-Z])/g, da = /-([a-z])/gi, M = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, ea = function (a, f) {
                return f.toUpperCase()
            }, S = /(?:Left|Right|Width)/i, ta = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, ua = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, ca = /,(?=[^\)]*(?:\(|$))/gi, ka = /[\s,\(]/i, la = Math.PI / 180, ha = 180 / Math.PI, ia = {}, Ia = {style: {}}, La = _gsScope.document || {
                    createElement: function () {
                        return Ia
                    }
                }, pa = function (a, f) {
                return La.createElementNS ? La.createElementNS(f || "http://www.w3.org/1999/xhtml",
                    a) : La.createElement(a)
            }, Aa = pa("div"), Da = pa("img"), va = D._internals = {_specialProps: z}, Ma = (_gsScope.navigator || {}).userAgent || "", Ja = function () {
                var l = Ma.indexOf("Android"), f = pa("a");
                return I = -1 !== Ma.indexOf("Safari") && -1 === Ma.indexOf("Chrome") && (-1 === l || 3 < parseFloat(Ma.substr(l + 8, 2))), H = I && 6 > parseFloat(Ma.substr(Ma.indexOf("Version/") + 8, 2)), J = -1 !== Ma.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Ma) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Ma)) && (a = parseFloat(RegExp.$1)), f ? (f.style.cssText =
                    "top:1px;opacity:.55;", /^0.55/.test(f.style.opacity)) : !1
            }(), Pa = function (a) {
                return qa.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }, Ea = "", Z = "", Wa = function (a, f) {
                f = f || Aa;
                var l, c = f.style;
                if (void 0 !== c[a])return a;
                a = a.charAt(0).toUpperCase() + a.substr(1);
                var b = ["O", "Moz", "ms", "Ms", "Webkit"];
                for (l = 5; -1 < --l && void 0 === c[b[l] + a];);
                return 0 <= l ? (Z = 3 === l ? "ms" : b[l], Ea = "-" + Z.toLowerCase() + "-", Z + a) : null
            }, ra = La.defaultView ? La.defaultView.getComputedStyle :
                function () {
                }, aa = D.getStyle = function (a, f, c, b, p) {
                var m;
                return Ja || "opacity" !== f ? (!b && a.style[f] ? m = a.style[f] : (c = c || ra(a)) ? m = c[f] || c.getPropertyValue(f) || c.getPropertyValue(f.replace(Q, "-$1").toLowerCase()) : a.currentStyle && (m = a.currentStyle[f]), null == p || m && "none" !== m && "auto" !== m && "auto auto" !== m ? m : p) : Pa(a)
            }, p = va.convertToPixels = function (a, f, c, b, g) {
                if ("px" === b || !b && "lineHeight" !== f)return c;
                if ("auto" === b || !c)return 0;
                var m, e, l = S.test(f), A = a;
                var n = Aa.style;
                var k = 0 > c, L = 1 === c;
                if (k && (c = -c), L && (c *= 100), "lineHeight" !==
                    f || b)if ("%" === b && -1 !== f.indexOf("border"))n = c / 100 * (l ? a.clientWidth : a.clientHeight); else {
                    if (n.cssText = "border:0 solid red;position:" + aa(a, "position") + ";line-height:0;", "%" !== b && A.appendChild && "v" !== b.charAt(0) && "rem" !== b)n[l ? "borderLeftWidth" : "borderTopWidth"] = c + b; else {
                        if (A = a.parentNode || La.body, -1 !== aa(A, "display").indexOf("flex") && (n.position = "absolute"), m = A._gsCache, e = u.ticker.frame, m && l && m.time === e)return m.width * c / 100;
                        n[l ? "width" : "height"] = c + b
                    }
                    A.appendChild(Aa);
                    n = parseFloat(Aa[l ? "offsetWidth" :
                        "offsetHeight"]);
                    A.removeChild(Aa);
                    l && "%" === b && !1 !== D.cacheWidths && (m = A._gsCache = A._gsCache || {}, m.time = e, m.width = n / c * 100);
                    0 !== n || g || (n = p(a, f, c, b, !0))
                } else m = ra(a).lineHeight, a.style.lineHeight = c, n = parseFloat(ra(a).lineHeight), a.style.lineHeight = m;
                return L && (n /= 100), k ? -n : n
            }, K = va.calculateOffset = function (a, f, c) {
                if ("absolute" !== aa(a, "position", c))return 0;
                var l = "left" === f ? "Left" : "Top";
                c = aa(a, "margin" + l, c);
                return a["offset" + l] - (p(a, f, parseFloat(c), c.replace(na, "")) || 0)
            }, O = function (a, f) {
                var l, c, b = {};
                if (f =
                        f || ra(a, null))if (l = f.length)for (; -1 < --l;) {
                    var m = f[l];
                    -1 !== m.indexOf("-transform") && Y !== m || (b[m.replace(da, ea)] = f.getPropertyValue(m))
                } else for (l in f)-1 !== l.indexOf("Transform") && wa !== l || (b[l] = f[l]); else if (f = a.currentStyle || a.style)for (l in f)"string" == typeof l && void 0 === b[l] && (b[l.replace(da, ea)] = f[l]);
                return Ja || (b.opacity = Pa(a)), c = Ha(a, f, !1), b.rotation = c.rotation, b.skewX = c.skewX, b.scaleX = c.scaleX, b.scaleY = c.scaleY, b.x = c.x, b.y = c.y, Qa && (b.z = c.z, b.rotationX = c.rotationX, b.rotationY = c.rotationY, b.scaleZ =
                    c.scaleZ), b.filters && delete b.filters, b
            }, P = function (a, f, c, b, p) {
                var m, e, l, g = {}, n = a.style;
                for (e in c)"cssText" !== e && "length" !== e && isNaN(e) && (f[e] !== (m = c[e]) || p && p[e]) && -1 === e.indexOf("Origin") && ("number" == typeof m || "string" == typeof m) && (g[e] = "auto" !== m || "left" !== e && "top" !== e ? "" !== m && "auto" !== m && "none" !== m || "string" != typeof f[e] || "" === f[e].replace(oa, "") ? m : 0 : K(a, e), void 0 !== n[e] && (l = new Ka(n, e, n[e], l)));
                if (b)for (e in b)"className" !== e && (g[e] = b[e]);
                return {difs: g, firstMPT: l}
            }, Ga = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            }, ja = ["marginLeft", "marginRight", "marginTop", "marginBottom"], Ua = function (a, f) {
                if ("contain" === a || "auto" === a || "auto auto" === a)return a + " ";
                null != a && "" !== a || (a = "0 0");
                var l = a.split(" ");
                var c = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : l[0];
                var b = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : l[1];
                if (3 < l.length && !f) {
                    l = a.split(", ").join(",").split(",");
                    a = [];
                    for (c = 0; c < l.length; c++)a.push(Ua(l[c]));
                    return a.join(",")
                }
                return null == b ? b = "center" === c ? "50%" :
                    "0" : "center" === b && (b = "50%"), ("center" === c || isNaN(parseFloat(c)) && -1 === (c + "").indexOf("=")) && (c = "50%"), a = c + " " + b + (2 < l.length ? " " + l[2] : ""), f && (f.oxp = -1 !== c.indexOf("%"), f.oyp = -1 !== b.indexOf("%"), f.oxr = "=" === c.charAt(1), f.oyr = "=" === b.charAt(1), f.ox = parseFloat(c.replace(oa, "")), f.oy = parseFloat(b.replace(oa, "")), f.v = a), f || a
            }, W = function (a, f) {
                return "function" == typeof a && (a = a(r, c)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(f) || 0
            }, f =
                function (a, f) {
                    return "function" == typeof a && (a = a(r, c)), null == a ? f : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + f : parseFloat(a) || 0
                }, cb = function (a, f, b, p) {
                var l, m, e, g;
                return "function" == typeof a && (a = a(r, c)), null == a ? e = f : "number" == typeof a ? e = a : (l = a.split("_"), g = "=" === a.charAt(1), m = (g ? parseInt(a.charAt(0) + "1", 10) * parseFloat(l[0].substr(2)) : parseFloat(l[0])) * (-1 === a.indexOf("rad") ? 1 : ha) - (g ? 0 : f), l.length && (p && (p[b] = f + m), -1 !== a.indexOf("short") && (m %= 360, m !== m % 180 &&
                (m = 0 > m ? m + 360 : m - 360)), -1 !== a.indexOf("_cw") && 0 > m ? m = (m + 3599999999640) % 360 - 360 * (m / 360 | 0) : -1 !== a.indexOf("ccw") && 0 < m && (m = (m - 3599999999640) % 360 - 360 * (m / 360 | 0))), e = f + m), 1E-6 > e && -1E-6 < e && (e = 0), e
            }, Na = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192,
                    203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            }, ub = function (a, f, c) {
                return a = 0 > a ? a + 1 : 1 < a ? a - 1 : a, 255 * (1 > 6 * a ? f + (c - f) * a * 6 : .5 > a ? c : 2 > 3 * a ? f + (c - f) * (2 / 3 - a) * 6 : f) + .5 | 0
            }, ob = D.parseColor = function (a, f) {
                var l, c, b, m, e, p, g;
                if (a)if ("number" == typeof a)var A = [a >> 16, a >> 8 & 255, 255 & a]; else {
                    if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), Na[a])A = Na[a]; else if ("#" === a.charAt(0))4 === a.length && (l = a.charAt(1), c = a.charAt(2), b = a.charAt(3), a = "#" + l + l + c + c + b + b), a = parseInt(a.substr(1), 16), A = [a >> 16, a >> 8 & 255, 255 & a]; else if ("hsl" ===
                        a.substr(0, 3))if (A = g = a.match(U), f) {
                        if (-1 !== a.indexOf("="))return a.match(n)
                    } else {
                        var k = Number(A[0]) % 360 / 360;
                        var r = Number(A[1]) / 100;
                        var q = Number(A[2]) / 100;
                        c = .5 >= q ? q * (r + 1) : q + r - q * r;
                        l = 2 * q - c;
                        3 < A.length && (A[3] = Number(a[3]));
                        A[0] = ub(k + 1 / 3, l, c);
                        A[1] = ub(k, l, c);
                        A[2] = ub(k - 1 / 3, l, c)
                    } else A = a.match(U) || Na.transparent;
                    A[0] = Number(A[0]);
                    A[1] = Number(A[1]);
                    A[2] = Number(A[2]);
                    3 < A.length && (A[3] = Number(A[3]))
                } else A = Na.black;
                return f && !g && (l = A[0] / 255, c = A[1] / 255, b = A[2] / 255, m = Math.max(l, c, b), e = Math.min(l, c, b), q = (m + e) / 2,
                    m === e ? k = r = 0 : (p = m - e, r = .5 < q ? p / (2 - m - e) : p / (m + e), k = m === l ? (c - b) / p + (b > c ? 6 : 0) : m === c ? (b - l) / p + 2 : (l - c) / p + 4, k *= 60), A[0] = k + .5 | 0, A[1] = 100 * r + .5 | 0, A[2] = 100 * q + .5 | 0), A
            }, Za = function (a, f) {
                var l, c = a.match(ma) || [], b = 0, m = "";
                if (!c.length)return a;
                for (l = 0; l < c.length; l++) {
                    var e = c[l];
                    var p = a.substr(b, a.indexOf(e, b) - b);
                    b += p.length + e.length;
                    e = ob(e, f);
                    3 === e.length && e.push(1);
                    m += p + (f ? "hsla(" + e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : "rgba(" + e.join(",")) + ")"
                }
                return m + a.substr(b)
            }, ma = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (b in Na)ma += "|" + b + "\\b";
        ma = new RegExp(ma + ")", "gi");
        D.colorStringFilter = function (a) {
            var f, l = a[0] + " " + a[1];
            ma.test(l) && (f = -1 !== l.indexOf("hsl(") || -1 !== l.indexOf("hsla("), a[0] = Za(a[0], f), a[1] = Za(a[1], f));
            ma.lastIndex = 0
        };
        u.defaultStringFilter || (u.defaultStringFilter = D.colorStringFilter);
        var Va = function (a, f, c, b) {
            if (null == a)return function (a) {
                return a
            };
            var l, m = f ? (a.match(ma) || [""])[0] : "", e = a.split(m).join("").match(x) || [], p = a.substr(0, a.indexOf(e[0])), g = ")" === a.charAt(a.length - 1) ? ")" : "", n = -1 !== a.indexOf(" ") ?
                " " : ",", A = e.length, k = 0 < A ? e[0].replace(U, "") : "";
            return A ? l = f ? function (a) {
                var f, F, r;
                if ("number" == typeof a)a += k; else if (b && ca.test(a)) {
                    a = a.replace(ca, "|").split("|");
                    for (r = 0; r < a.length; r++)a[r] = l(a[r]);
                    return a.join(",")
                }
                if (f = (a.match(ma) || [m])[0], F = a.split(f).join("").match(x) || [], r = F.length, A > r--)for (; ++r < A;)F[r] = c ? F[(r - 1) / 2 | 0] : e[r];
                return p + F.join(n) + n + f + g + (-1 !== a.indexOf("inset") ? " inset" : "")
            } : function (a) {
                var m, f;
                if ("number" == typeof a)a += k; else if (b && ca.test(a)) {
                    a = a.replace(ca, "|").split("|");
                    for (f =
                             0; f < a.length; f++)a[f] = l(a[f]);
                    return a.join(",")
                }
                if (m = a.match(x) || [], f = m.length, A > f--)for (; ++f < A;)m[f] = c ? m[(f - 1) / 2 | 0] : e[f];
                return p + m.join(n) + g
            } : function (a) {
                return a
            }
        }, ya = function (a) {
            return a = a.split(","), function (f, l, c, b, m, e, p) {
                c = (l + "").split(" ");
                p = {};
                for (l = 0; 4 > l; l++)p[a[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                return b.parse(f, p, m, e)
            }
        }, Ka = (va._setPluginRatio = function (a) {
            this.plugin.setRatio(a);
            var f;
            var c = this.data;
            for (var l = c.proxy, b = c.firstMPT; b;) {
                var m = l[b.v];
                b.r ? m = Math.round(m) : 1E-6 > m && -1E-6 < m && (m = 0);
                b.t[b.p] = m;
                b = b._next
            }
            if (c.autoRotate && (c.autoRotate.rotation = c.mod ? c.mod(l.rotation, this.t) : l.rotation), 1 === a || 0 === a)for (b = c.firstMPT, c = 1 === a ? "e" : "b"; b;) {
                if (f = b.t, f.type) {
                    if (1 === f.type) {
                        m = f.xs0 + f.s + f.xs1;
                        for (a = 1; a < f.l; a++)m += f["xn" + a] + f["xs" + (a + 1)];
                        f[c] = m
                    }
                } else f[c] = f.s + f.xs0;
                b = b._next
            }
        }, function (a, f, c, b, p) {
            this.t = a;
            this.p = f;
            this.v = c;
            this.r = p;
            b && (b._prev = this, this._next = b)
        }), za = (va._parseToProxy = function (a, f, c, b, p, m) {
            var e, l, g = b, n = {}, A = {};
            var k = c._transform;
            var r = ia;
            c._transform = null;
            ia = f;
            b = a = c.parse(a,
                f, b, p);
            ia = r;
            for (m && (c._transform = k, g && (g._prev = null, g._prev && (g._prev._next = null))); b && b !== g;) {
                if (1 >= b.type && (e = b.p, A[e] = b.s + b.c, n[e] = b.s, m || (l = new Ka(b, "s", e, l, b.r), b.c = 0), 1 === b.type))for (c = b.l; 0 < --c;)k = "xn" + c, e = b.p + "_" + k, A[e] = b.data[k], n[e] = b[k], m || (l = new Ka(b, k, e, l, b.rxp[k]));
                b = b._next
            }
            return {proxy: n, end: A, firstMPT: l, pt: a}
        }, va.CSSPropTween = function (a, f, c, b, p, m, e, g, n, k, r) {
            this.t = a;
            this.p = f;
            this.s = c;
            this.c = b;
            this.n = e || f;
            a instanceof za || B.push(this.n);
            this.r = g;
            this.type = m || 0;
            n && (this.pr = n, C = !0);
            this.b = void 0 === k ? c : k;
            this.e = void 0 === r ? c + b : r;
            p && (this._next = p, p._prev = this)
        }), $a = function (a, f, c, b, p, m) {
            a = new za(a, f, c, b - c, p, -1, m);
            return a.b = c, a.e = a.xs0 = b, a
        }, Xa = D.parseComplex = function (a, f, b, p, g, m, e, F, k, q) {
            b = b || m || "";
            "function" == typeof p && (p = p(r, c));
            e = new za(a, f, 0, 0, e, q ? 2 : 1, null, !1, F, b, p);
            p += "";
            g && ma.test(p + b) && (p = [b, p], D.colorStringFilter(p), b = p[0], p = p[1]);
            var l, A, L;
            a = b.split(", ").join(",").split(" ");
            f = p.split(", ").join(",").split(" ");
            F = a.length;
            var x = !1 !== y;
            (-1 !== p.indexOf(",") || -1 !== b.indexOf(",")) &&
            (a = a.join(" ").replace(ca, ", ").split(" "), f = f.join(" ").replace(ca, ", ").split(" "), F = a.length);
            F !== f.length && (a = (m || "").split(" "), F = a.length);
            e.plugin = k;
            e.setRatio = q;
            for (b = ma.lastIndex = 0; F > b; b++)if (l = a[b], k = f[b], L = parseFloat(l), L || 0 === L)e.appendXtra("", L, W(k, L), k.replace(n, ""), x && -1 !== k.indexOf("px"), !0); else if (g && ma.test(l)) {
                var K = k.indexOf(")") + 1;
                K = ")" + (K ? k.substr(K) : "");
                var V = -1 !== k.indexOf("hsl") && Ja;
                m = k;
                l = ob(l, V);
                k = ob(k, V);
                (q = 6 < l.length + k.length) && !Ja && 0 === k[3] ? (e["xs" + e.l] += e.l ? " transparent" :
                    "transparent", e.e = e.e.split(f[b]).join("transparent")) : (Ja || (q = !1), V ? e.appendXtra(m.substr(0, m.indexOf("hsl")) + (q ? "hsla(" : "hsl("), l[0], W(k[0], l[0]), ",", !1, !0).appendXtra("", l[1], W(k[1], l[1]), "%,", !1).appendXtra("", l[2], W(k[2], l[2]), q ? "%," : "%" + K, !1) : e.appendXtra(m.substr(0, m.indexOf("rgb")) + (q ? "rgba(" : "rgb("), l[0], k[0] - l[0], ",", !0, !0).appendXtra("", l[1], k[1] - l[1], ",", !0).appendXtra("", l[2], k[2] - l[2], q ? "," : K, !0), q && (l = 4 > l.length ? 1 : l[3], e.appendXtra("", l, (4 > k.length ? 1 : k[3]) - l, K, !1)));
                ma.lastIndex = 0
            } else if (q =
                    l.match(U)) {
                if (A = k.match(n), !A || A.length !== q.length)return e;
                for (k = K = 0; k < q.length; k++)V = q[k], m = l.indexOf(V, K), e.appendXtra(l.substr(K, m - K), Number(V), W(A[k], V), "", x && "px" === l.substr(m + V.length, 2), 0 === k), K = m + V.length;
                e["xs" + e.l] += l.substr(K)
            } else e["xs" + e.l] += e.l || e["xs" + e.l] ? " " + k : k;
            if (-1 !== p.indexOf("=") && e.data) {
                K = e.xs0 + e.data.s;
                for (b = 1; b < e.l; b++)K += e["xs" + b] + e.data["xn" + b];
                e.e = K + e["xs" + b]
            }
            return e.l || (e.type = -1, e.xs0 = e.e), e.xfirst || e
        }, Ba = 9;
        b = za.prototype;
        for (b.l = b.pr = 0; 0 < --Ba;)b["xn" + Ba] = 0, b["xs" +
        Ba] = "";
        b.xs0 = "";
        b._next = b._prev = b.xfirst = b.data = b.plugin = b.setRatio = b.rxp = null;
        b.appendXtra = function (a, f, b, c, p, m) {
            var e = this.l;
            return this["xs" + e] += m && (e || this["xs" + e]) ? " " + a : a || "", b || 0 === e || this.plugin ? (this.l++, this.type = this.setRatio ? 2 : 1, this["xs" + this.l] = c || "", 0 < e ? (this.data["xn" + e] = f + b, this.rxp["xn" + e] = p, this["xn" + e] = f, this.plugin || (this.xfirst = new za(this, "xn" + e, f, b, this.xfirst || this, 0, this.n, p, this.pr), this.xfirst.xs0 = 0), this) : (this.data = {s: f + b}, this.rxp = {}, this.s = f, this.c = b, this.r = p, this)) :
                (this["xs" + e] += f + (c || ""), this)
        };
        var eb = function (a, f) {
            f = f || {};
            this.p = f.prefix ? Wa(a) || a : a;
            z[a] = z[this.p] = this;
            this.format = f.formatter || Va(f.defaultValue, f.color, f.collapsible, f.multi);
            f.parser && (this.parse = f.parser);
            this.clrs = f.color;
            this.multi = f.multi;
            this.keyword = f.keyword;
            this.dflt = f.defaultValue;
            this.pr = f.priority || 0
        }, T = va._registerComplexSpecialProp = function (a, f, b) {
            "object" != typeof f && (f = {parser: b});
            var c = a.split(","), l = f.defaultValue;
            b = b || [l];
            for (a = 0; a < c.length; a++)f.prefix = 0 === a && f.prefix, f.defaultValue =
                b[a] || l, new eb(c[a], f)
        }, db = va._registerPluginProp = function (a) {
            if (!z[a]) {
                var f = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                T(a, {
                    parser: function (a, b, c, m, e, l, p) {
                        var g = N.com.greensock.plugins[f];
                        g ? a = (g._cssRegister(), z[c].parse(a, b, c, m, e, l, p)) : (_gsScope.console && console.log("Error: " + f + " js file not loaded."), a = e);
                        return a
                    }
                })
            }
        };
        b = eb.prototype;
        b.parseComplex = function (a, f, b, c, p, m) {
            var e, l, g, n, k, A = this.keyword;
            if (this.multi && (ca.test(b) || ca.test(f) ? (l = f.replace(ca, "|").split("|"), g = b.replace(ca, "|").split("|")) :
                A && (l = [f], g = [b])), g) {
                var r = g.length > l.length ? g.length : l.length;
                for (e = 0; r > e; e++)f = l[e] = l[e] || this.dflt, b = g[e] = g[e] || this.dflt, A && (n = f.indexOf(A), k = b.indexOf(A), n !== k && (-1 === k ? l[e] = l[e].split(A).join("") : -1 === n && (l[e] += " " + A)));
                f = l.join(", ");
                b = g.join(", ")
            }
            return Xa(a, this.p, f, b, this.clrs, this.dflt, c, this.pr, p, m)
        };
        b.parse = function (a, f, b, c, p, m, e) {
            return this.parseComplex(a.style, this.format(aa(a, this.p, k, !1, this.dflt)), this.format(f), p, m)
        };
        D.registerSpecialProp = function (a, f, b) {
            T(a, {
                parser: function (a,
                                  c, m, e, l, p, g) {
                    l = new za(a, m, 0, 0, l, 2, m, !1, b);
                    return l.plugin = p, l.setRatio = f(a, c, e._tween, m), l
                }, priority: b
            })
        };
        D.useSVGTransformAttr = !0;
        var Ra, Sa = "scaleX scaleY scaleZ x y z skewX skewY rotation rotationX rotationY perspective xPercent yPercent".split(" "), wa = Wa("transform"), Y = Ea + "transform", Fa = Wa("transformOrigin"), Qa = null !== Wa("perspective"), jb = va.Transform = function () {
            this.perspective = parseFloat(D.defaultTransformPerspective) || 0;
            this.force3D = !1 !== D.defaultForce3D && Qa ? D.defaultForce3D || "auto" : !1
        }, yb =
            _gsScope.SVGElement, ab = function (a, f, b) {
            var c;
            a = La.createElementNS("http://www.w3.org/2000/svg", a);
            var l = /([a-z])([A-Z])/g;
            for (c in b)a.setAttributeNS(null, c.replace(l, "$1-$2").toLowerCase(), b[c]);
            return f.appendChild(a), a
        }, Oa = La.documentElement || {}, kb = function () {
            var f, b, c, p = a || /Android/i.test(Ma) && !_gsScope.chrome;
            return La.createElementNS && !p && (f = ab("svg", Oa), b = ab("rect", f, {
                width: 100,
                height: 50,
                x: 100
            }), c = b.getBoundingClientRect().width, b.style[Fa] = "50% 50%", b.style[wa] = "scaleX(0.5)", p = c === b.getBoundingClientRect().width && !(J && Qa), Oa.removeChild(f)), p
        }(), pb = function (a, f, b, c, p, m) {
            var e, l, g, n, k, A, r, q, L, x, K, y, V, z = a._gsTransform, O = mb(a, !0);
            z && (y = z.xOrigin, V = z.yOrigin);
            (!c || 2 > (e = c.split(" ")).length) && (A = a.getBBox(), 0 === A.x && 0 === A.y && 0 === A.width + A.height && (A = {
                x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0,
                y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0,
                width: 0,
                height: 0
            }), f = Ua(f).split(" "), e = [(-1 !== f[0].indexOf("%") ?
            parseFloat(f[0]) / 100 * A.width : parseFloat(f[0])) + A.x, (-1 !== f[1].indexOf("%") ? parseFloat(f[1]) / 100 * A.height : parseFloat(f[1])) + A.y]);
            b.xOrigin = f = parseFloat(e[0]);
            b.yOrigin = n = parseFloat(e[1]);
            c && O !== lb && (k = O[0], A = O[1], r = O[2], q = O[3], L = O[4], x = O[5], K = k * q - A * r, K && (l = q / K * f + -r / K * n + (r * x - q * L) / K, g = -A / K * f + k / K * n - (k * x - A * L) / K, f = b.xOrigin = e[0] = l, n = b.yOrigin = e[1] = g));
            z && (m && (b.xOffset = z.xOffset, b.yOffset = z.yOffset, z = b), p || !1 !== p && !1 !== D.defaultSmoothOrigin ? (l = f - y, g = n - V, z.xOffset += l * O[0] + g * O[2] - l, z.yOffset += l * O[1] + g * O[3] -
                g) : z.xOffset = z.yOffset = 0);
            m || a.setAttribute("data-svg-origin", e.join(" "))
        }, tb = function (a) {
            var f = pa("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), b = this.parentNode, c = this.nextSibling, l = this.style.cssText;
            if (Oa.appendChild(f), f.appendChild(this), this.style.display = "block", a)try {
                var m = this.getBBox();
                this._originalGetBBox = this.getBBox;
                this.getBBox = tb
            } catch (e) {
            } else this._originalGetBBox && (m = this._originalGetBBox());
            return c ? b.insertBefore(this, c) : b.appendChild(this),
                Oa.removeChild(f), this.style.cssText = l, m
        }, qb = function (a) {
            var f;
            if (f = yb && a.getCTM)try {
                f = a.getBBox()
            } catch (X) {
                f = tb.call(a, !0)
            }
            return !(!f || a.parentNode && !a.ownerSVGElement)
        }, lb = [1, 0, 0, 1, 0, 0], mb = function (a, f) {
            var b, c, l, m, e, p, g = a._gsTransform || new jb, n = a.style;
            if (wa ? c = aa(a, Y, null, !0) : a.currentStyle && (c = a.currentStyle.filter.match(ta), c = c && 4 === c.length ? [c[0].substr(4), Number(c[2].substr(4)), Number(c[1].substr(4)), c[3].substr(4), g.x || 0, g.y || 0].join() : ""), b = !c || "none" === c || "matrix(1, 0, 0, 1, 0, 0)" === c,
                !wa || !(p = "none" === ra(a).display) && a.parentNode || (p && (m = n.display, n.display = "block"), a.parentNode || (e = 1, Oa.appendChild(a)), c = aa(a, Y, null, !0), b = !c || "none" === c || "matrix(1, 0, 0, 1, 0, 0)" === c, m ? n.display = m : p && Ta(n, "display"), e && Oa.removeChild(a)), (g.svg || a.getCTM && qb(a)) && (b && -1 !== (n[wa] + "").indexOf("matrix") && (c = n[wa], b = 0), l = a.getAttribute("transform"), b && l && (-1 !== l.indexOf("matrix") ? (c = l, b = 0) : -1 !== l.indexOf("translate") && (c = "matrix(1,0,0,1," + l.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", b = 0))),
                    b)return lb;
            l = (c || "").match(U) || [];
            for (Ba = l.length; -1 < --Ba;)m = Number(l[Ba]), l[Ba] = (e = m - (m |= 0)) ? (1E5 * e + (0 > e ? -.5 : .5) | 0) / 1E5 + m : m;
            return f && 6 < l.length ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l
        }, Ha = va.getTransform = function (a, f, b, c) {
            if (a._gsTransform && b && !c)return a._gsTransform;
            var l, m, e, p = b ? a._gsTransform || new jb : new jb, g = 0 > p.scaleX, n = Qa ? parseFloat(aa(a, Fa, f, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0, k = parseFloat(D.defaultTransformPerspective) || 0;
            if (p.svg = !(!a.getCTM || !qb(a)), p.svg && (pb(a, aa(a, Fa, f, !1, "50% 50%") +
                    "", p, a.getAttribute("data-svg-origin")), Ra = D.useSVGTransformAttr || kb), l = mb(a), l !== lb) {
                if (16 === l.length) {
                    var r, A, q, K;
                    k = l[0];
                    f = l[1];
                    c = l[2];
                    var x = l[3], y = l[4], z = l[5], O = l[6], L = l[7], v = l[8], E = l[9], B = l[10], P = l[12], C = l[13], I = l[14], X = l[11], H = Math.atan2(O, B);
                    p.zOrigin && (I = -p.zOrigin, P = v * I - l[12], C = E * I - l[13], I = B * I + p.zOrigin - l[14]);
                    p.rotationX = H * ha;
                    H && (K = Math.cos(-H), e = Math.sin(-H), r = y * K + v * e, A = z * K + E * e, q = O * K + B * e, v = y * -e + v * K, E = z * -e + E * K, B = O * -e + B * K, X = L * -e + X * K, y = r, z = A, O = q);
                    H = Math.atan2(-c, B);
                    p.rotationY = H * ha;
                    H && (K = Math.cos(-H),
                        e = Math.sin(-H), r = k * K - v * e, A = f * K - E * e, q = c * K - B * e, E = f * e + E * K, B = c * e + B * K, X = x * e + X * K, k = r, f = A, c = q);
                    H = Math.atan2(f, k);
                    p.rotation = H * ha;
                    H && (K = Math.cos(H), e = Math.sin(H), r = k * K + f * e, A = y * K + z * e, q = v * K + E * e, f = f * K - k * e, z = z * K - y * e, E = E * K - v * e, k = r, y = A, v = q);
                    p.rotationX && 359.9 < Math.abs(p.rotationX) + Math.abs(p.rotation) && (p.rotationX = p.rotation = 0, p.rotationY = 180 - p.rotationY);
                    H = Math.atan2(y, z);
                    p.scaleX = (1E5 * Math.sqrt(k * k + f * f + c * c) + .5 | 0) / 1E5;
                    p.scaleY = (1E5 * Math.sqrt(z * z + O * O) + .5 | 0) / 1E5;
                    p.scaleZ = (1E5 * Math.sqrt(v * v + E * E + B * B) + .5 | 0) / 1E5;
                    k /=
                        p.scaleX;
                    y /= p.scaleY;
                    f /= p.scaleX;
                    z /= p.scaleY;
                    2E-5 < Math.abs(H) ? (p.skewX = H * ha, y = 0, "simple" !== p.skewType && (p.scaleY *= 1 / Math.cos(H))) : p.skewX = 0;
                    p.perspective = X ? 1 / (0 > X ? -X : X) : 0;
                    p.x = P;
                    p.y = C;
                    p.z = I;
                    p.svg && (p.x -= p.xOrigin - (p.xOrigin * k - p.yOrigin * y), p.y -= p.yOrigin - (p.yOrigin * f - p.xOrigin * z))
                } else Qa && !c && l.length && p.x === l[4] && p.y === l[5] && (p.rotationX || p.rotationY) || (r = (K = 6 <= l.length) ? l[0] : 1, A = l[1] || 0, q = l[2] || 0, K = K ? l[3] : 1, p.x = l[4] || 0, p.y = l[5] || 0, l = Math.sqrt(r * r + A * A), e = Math.sqrt(K * K + q * q), f = r || A ? Math.atan2(A, r) *
                ha : p.rotation || 0, c = q || K ? Math.atan2(q, K) * ha + f : p.skewX || 0, p.scaleX = l, p.scaleY = e, p.rotation = f, p.skewX = c, Qa && (p.rotationX = p.rotationY = p.z = 0, p.perspective = k, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * r + p.yOrigin * q), p.y -= p.yOrigin - (p.xOrigin * A + p.yOrigin * K)));
                90 < Math.abs(p.skewX) && 270 > Math.abs(p.skewX) && (g ? (p.scaleX *= -1, p.skewX += 0 >= p.rotation ? 180 : -180, p.rotation += 0 >= p.rotation ? 180 : -180) : (p.scaleY *= -1, p.skewX += 0 >= p.skewX ? 180 : -180));
                p.zOrigin = n;
                for (m in p)2E-5 > p[m] && -2E-5 < p[m] && (p[m] = 0)
            }
            return b && (a._gsTransform =
                p, p.svg && (Ra && a.style[wa] ? u.delayedCall(.001, function () {
                Ta(a.style, wa)
            }) : !Ra && a.getAttribute("transform") && u.delayedCall(.001, function () {
                a.removeAttribute("transform")
            }))), p
        }, xb = function (f) {
            var b = this.data, c = -b.rotation * la, l = c + b.skewX * la, g = (Math.cos(c) * b.scaleX * 1E5 | 0) / 1E5, m = (Math.sin(c) * b.scaleX * 1E5 | 0) / 1E5, e = (Math.sin(l) * -b.scaleY * 1E5 | 0) / 1E5, n = (Math.cos(l) * b.scaleY * 1E5 | 0) / 1E5;
            l = this.t.style;
            if (c = this.t.currentStyle) {
                var k = m;
                m = -e;
                e = -k;
                var r = c.filter;
                l.filter = "";
                var q, K;
                k = this.t.offsetWidth;
                var y = this.t.offsetHeight,
                    x = "absolute" !== c.position, z = "progid:DXImageTransform.Microsoft.Matrix(M11=" + g + ", M12=" + m + ", M21=" + e + ", M22=" + n, O = b.x + k * b.xPercent / 100, v = b.y + y * b.yPercent / 100;
                if (null != b.ox && (q = (b.oxp ? k * b.ox * .01 : b.ox) - k / 2, K = (b.oyp ? y * b.oy * .01 : b.oy) - y / 2, O += q - (q * g + K * m), v += K - (q * e + K * n)), x ? (q = k / 2, K = y / 2, z += ", Dx=" + (q - (q * g + K * m) + O) + ", Dy=" + (K - (q * e + K * n) + v) + ")") : z += ", sizingMethod='auto expand')", -1 !== r.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = r.replace(ua, z) : l.filter = z + " " + r, (0 === f || 1 === f) && 1 === g && 0 === m && 0 === e &&
                    1 === n && (x && -1 === z.indexOf("Dx=0, Dy=0") || qa.test(r) && 100 !== parseFloat(RegExp.$1) || -1 === r.indexOf(r.indexOf("Alpha")) && l.removeAttribute("filter")), !x)for (f = 8 > a ? 1 : -1, q = b.ieOffsetX || 0, K = b.ieOffsetY || 0, b.ieOffsetX = Math.round((k - ((0 > g ? -g : g) * k + (0 > m ? -m : m) * y)) / 2 + O), b.ieOffsetY = Math.round((y - ((0 > n ? -n : n) * y + (0 > e ? -e : e) * k)) / 2 + v), Ba = 0; 4 > Ba; Ba++)g = ja[Ba], m = c[g], k = -1 !== m.indexOf("px") ? parseFloat(m) : p(this.t, g, parseFloat(m), m.replace(na, "")) || 0, m = k !== b[g] ? 2 > Ba ? -b.ieOffsetX : -b.ieOffsetY : 2 > Ba ? q - b.ieOffsetX : K - b.ieOffsetY,
                    l[g] = (b[g] = Math.round(k - m * (0 === Ba || 2 === Ba ? 1 : f))) + "px"
            }
        }, hb = va.set3DTransformRatio = va.setTransformRatio = function (a) {
            var f, b, c, l, m, e, p, g, n, k, r, q = this.data, K = this.t.style, y = q.rotation, x = q.rotationX, z = q.rotationY, O = q.scaleX, v = q.scaleY, E = q.scaleZ, u = q.x, B = q.y, P = q.z, C = q.svg, D = q.perspective;
            var I = q.force3D;
            var H = q.skewY;
            var W = q.skewX;
            if (H && (W += H, y += H), !((1 !== a && 0 !== a || "auto" !== I || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && I || P || D || z || x) && 1 === E || Ra && C || !Qa)return void(y || W ||
            C ? (y *= la, e = W * la, b = Math.cos(y) * O, l = Math.sin(y) * O, c = Math.sin(y - e) * -v, m = Math.cos(y - e) * v, e && "simple" === q.skewType && (f = Math.tan(e - H * la), f = Math.sqrt(1 + f * f), c *= f, m *= f, H && (f = Math.tan(H * la), f = Math.sqrt(1 + f * f), b *= f, l *= f)), C && (u += q.xOrigin - (q.xOrigin * b + q.yOrigin * c) + q.xOffset, B += q.yOrigin - (q.xOrigin * l + q.yOrigin * m) + q.yOffset, Ra && (q.xPercent || q.yPercent) && (k = this.t.getBBox(), u += .01 * q.xPercent * k.width, B += .01 * q.yPercent * k.height), k = 1E-6, k > u && u > -k && (u = 0), k > B && B > -k && (B = 0)), n = (1E5 * b | 0) / 1E5 + "," + (1E5 * l | 0) / 1E5 + "," + (1E5 *
                c | 0) / 1E5 + "," + (1E5 * m | 0) / 1E5 + "," + u + "," + B + ")", C && Ra ? this.t.setAttribute("transform", "matrix(" + n) : K[wa] = (q.xPercent || q.yPercent ? "translate(" + q.xPercent + "%," + q.yPercent + "%) matrix(" : "matrix(") + n) : K[wa] = (q.xPercent || q.yPercent ? "translate(" + q.xPercent + "%," + q.yPercent + "%) matrix(" : "matrix(") + O + ",0,0," + v + "," + u + "," + B + ")");
            if (J && (k = 1E-4, k > O && O > -k && (O = E = 2E-5), k > v && v > -k && (v = E = 2E-5), !D || q.z || q.rotationX || q.rotationY || (D = 0)), y || W) {
                y *= la;
                var ca = b = Math.cos(y);
                var ja = l = Math.sin(y);
                W && (y -= W * la, ca = Math.cos(y), ja = Math.sin(y),
                "simple" === q.skewType && (f = Math.tan((W - H) * la), f = Math.sqrt(1 + f * f), ca *= f, ja *= f, q.skewY && (f = Math.tan(H * la), f = Math.sqrt(1 + f * f), b *= f, l *= f)));
                c = -ja;
                m = ca
            } else {
                if (!(z || x || 1 !== E || D || C))return void(K[wa] = (q.xPercent || q.yPercent ? "translate(" + q.xPercent + "%," + q.yPercent + "%) translate3d(" : "translate3d(") + u + "px," + B + "px," + P + "px)" + (1 !== O || 1 !== v ? " scale(" + O + "," + v + ")" : ""));
                b = m = 1;
                c = l = 0
            }
            W = 1;
            a = e = I = H = p = g = 0;
            var Ga = D ? -1 / D : 0;
            n = q.zOrigin;
            k = 1E-6;
            (y = z * la) && (ca = Math.cos(y), ja = Math.sin(y), I = -ja, p = Ga * -ja, a = b * ja, e = l * ja, W = ca, Ga *= ca,
                b *= ca, l *= ca);
            (y = x * la) && (ca = Math.cos(y), ja = Math.sin(y), f = c * ca + a * ja, r = m * ca + e * ja, H = W * ja, g = Ga * ja, a = c * -ja + a * ca, e = m * -ja + e * ca, W *= ca, Ga *= ca, c = f, m = r);
            1 !== E && (a *= E, e *= E, W *= E, Ga *= E);
            1 !== v && (c *= v, m *= v, H *= v, g *= v);
            1 !== O && (b *= O, l *= O, I *= O, p *= O);
            (n || C) && (n && (u += a * -n, B += e * -n, P += W * -n + n), C && (u += q.xOrigin - (q.xOrigin * b + q.yOrigin * c) + q.xOffset, B += q.yOrigin - (q.xOrigin * l + q.yOrigin * m) + q.yOffset), k > u && u > -k && (u = "0"), k > B && B > -k && (B = "0"), k > P && P > -k && (P = 0));
            n = q.xPercent || q.yPercent ? "translate(" + q.xPercent + "%," + q.yPercent + "%) matrix3d(" :
                "matrix3d(";
            n = n + ((k > b && b > -k ? "0" : b) + "," + (k > l && l > -k ? "0" : l) + "," + (k > I && I > -k ? "0" : I)) + ("," + (k > p && p > -k ? "0" : p) + "," + (k > c && c > -k ? "0" : c) + "," + (k > m && m > -k ? "0" : m));
            x || z || 1 !== E ? (n += "," + (k > H && H > -k ? "0" : H) + "," + (k > g && g > -k ? "0" : g) + "," + (k > a && a > -k ? "0" : a), n += "," + (k > e && e > -k ? "0" : e) + "," + (k > W && W > -k ? "0" : W) + "," + (k > Ga && Ga > -k ? "0" : Ga) + ",") : n += ",0,0,0,0,1,0,";
            n += u + "," + B + "," + P + "," + (D ? 1 + -P / D : 1) + ")";
            K[wa] = n
        };
        b = jb.prototype;
        b.x = b.y = b.z = b.skewX = b.skewY = b.rotation = b.rotationX = b.rotationY = b.zOrigin = b.xPercent = b.yPercent = b.xOffset = b.yOffset =
            0;
        b.scaleX = b.scaleY = b.scaleZ = 1;
        T("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function (a, b, p, g, n, m, e) {
                if (g._lastParsedTransform === e)return n;
                g._lastParsedTransform = e;
                var l, q = e.scale && "function" == typeof e.scale ? e.scale : 0;
                "function" == typeof e[p] && (l = e[p],
                    e[p] = b);
                q && (e.scale = q(r, a));
                var A, K, y, x, z;
                b = a._gsTransform;
                var O = a.style, v = Sa.length, E = {}, u = Ha(a, k, !0, e.parseTransform), B = e.transform && ("function" == typeof e.transform ? e.transform(r, c) : e.transform);
                if (u.skewType = e.skewType || u.skewType || D.defaultSkewType, g._transform = u, B && "string" == typeof B && wa) {
                    var L = Aa.style;
                    L[wa] = B;
                    L.display = "block";
                    L.position = "absolute";
                    La.body.appendChild(Aa);
                    var P = Ha(Aa, null, !1);
                    "simple" === u.skewType && (P.scaleY *= Math.cos(P.skewX * la));
                    u.svg && (y = u.xOrigin, x = u.yOrigin, P.x -= u.xOffset,
                        P.y -= u.yOffset, (e.transformOrigin || e.svgOrigin) && (B = {}, pb(a, Ua(e.transformOrigin), B, e.svgOrigin, e.smoothOrigin, !0), y = B.xOrigin, x = B.yOrigin, P.x -= B.xOffset - u.xOffset, P.y -= B.yOffset - u.yOffset), (y || x) && (z = mb(Aa, !0), P.x -= y - (y * z[0] + x * z[2]), P.y -= x - (y * z[1] + x * z[3])));
                    La.body.removeChild(Aa);
                    P.perspective || (P.perspective = u.perspective);
                    null != e.xPercent && (P.xPercent = f(e.xPercent, u.xPercent));
                    null != e.yPercent && (P.yPercent = f(e.yPercent, u.yPercent))
                } else if ("object" == typeof e) {
                    if (P = {
                            scaleX: f(null != e.scaleX ? e.scaleX :
                                e.scale, u.scaleX),
                            scaleY: f(null != e.scaleY ? e.scaleY : e.scale, u.scaleY),
                            scaleZ: f(e.scaleZ, u.scaleZ),
                            x: f(e.x, u.x),
                            y: f(e.y, u.y),
                            z: f(e.z, u.z),
                            xPercent: f(e.xPercent, u.xPercent),
                            yPercent: f(e.yPercent, u.yPercent),
                            perspective: f(e.transformPerspective, u.perspective)
                        }, A = e.directionalRotation, null != A)if ("object" == typeof A)for (L in A)e[L] = A[L]; else e.rotation = A;
                    "string" == typeof e.x && -1 !== e.x.indexOf("%") && (P.x = 0, P.xPercent = f(e.x, u.xPercent));
                    "string" == typeof e.y && -1 !== e.y.indexOf("%") && (P.y = 0, P.yPercent = f(e.y,
                        u.yPercent));
                    P.rotation = cb("rotation"in e ? e.rotation : "shortRotation"in e ? e.shortRotation + "_short" : "rotationZ"in e ? e.rotationZ : u.rotation, u.rotation, "rotation", E);
                    Qa && (P.rotationX = cb("rotationX"in e ? e.rotationX : "shortRotationX"in e ? e.shortRotationX + "_short" : u.rotationX || 0, u.rotationX, "rotationX", E), P.rotationY = cb("rotationY"in e ? e.rotationY : "shortRotationY"in e ? e.shortRotationY + "_short" : u.rotationY || 0, u.rotationY, "rotationY", E));
                    P.skewX = cb(e.skewX, u.skewX);
                    P.skewY = cb(e.skewY, u.skewY)
                }
                Qa && null != e.force3D &&
                (u.force3D = e.force3D, K = !0);
                for ((A = u.force3D || u.z || u.rotationX || u.rotationY || P.z || P.rotationX || P.rotationY || P.perspective) || null == e.scale || (P.scaleZ = 1); -1 < --v;) {
                    var C = Sa[v];
                    B = P[C] - u[C];
                    (1E-6 < B || -1E-6 > B || null != e[C] || null != ia[C]) && (K = !0, n = new za(u, C, u[C], B, n), C in E && (n.e = E[C]), n.xs0 = 0, n.plugin = m, g._overwriteProps.push(n.n))
                }
                return B = e.transformOrigin, u.svg && (B || e.svgOrigin) && (y = u.xOffset, x = u.yOffset, pb(a, Ua(B), P, e.svgOrigin, e.smoothOrigin), n = $a(u, "xOrigin", (b ? u : P).xOrigin, P.xOrigin, n, "transformOrigin"),
                    n = $a(u, "yOrigin", (b ? u : P).yOrigin, P.yOrigin, n, "transformOrigin"), (y !== u.xOffset || x !== u.yOffset) && (n = $a(u, "xOffset", b ? y : u.xOffset, u.xOffset, n, "transformOrigin"), n = $a(u, "yOffset", b ? x : u.yOffset, u.yOffset, n, "transformOrigin")), B = "0px 0px"), (B || Qa && A && u.zOrigin) && (wa ? (K = !0, C = Fa, B = (B || aa(a, C, k, !1, "50% 50%")) + "", n = new za(O, C, 0, 0, n, -1, "transformOrigin"), n.b = O[C], n.plugin = m, Qa ? (L = u.zOrigin, B = B.split(" "), u.zOrigin = (2 < B.length && (0 === L || "0px" !== B[2]) ? parseFloat(B[2]) : L) || 0, n.xs0 = n.e = B[0] + " " + (B[1] || "50%") + " 0px",
                    n = new za(u, "zOrigin", 0, 0, n, -1, n.n), n.b = L, n.xs0 = n.e = u.zOrigin) : n.xs0 = n.e = B) : Ua(B + "", u)), K && (g._transformType = u.svg && Ra || !A && 3 !== this._transformType ? 2 : 3), l && (e[p] = l), q && (e.scale = q), n
            }, prefix: !0
        });
        T("boxShadow", {defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset"});
        T("borderRadius", {
            defaultValue: "0px", parser: function (a, f, b, c, g, m) {
                f = this.format(f);
                var e, l, n, q, r, A, K, y, x, u = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], z = a.style;
                c = parseFloat(a.offsetWidth);
                m = parseFloat(a.offsetHeight);
                f = f.split(" ");
                for (e = 0; e < u.length; e++) {
                    this.p.indexOf("border") && (u[e] = Wa(u[e]));
                    var O = n = aa(a, u[e], k, !1, "0px");
                    -1 !== O.indexOf(" ") && (n = O.split(" "), O = n[0], n = n[1]);
                    var B = l = f[e];
                    var P = parseFloat(O);
                    var E = O.substr((P + "").length);
                    (A = "=" === B.charAt(1)) ? (q = parseInt(B.charAt(0) + "1", 10), B = B.substr(2), q *= parseFloat(B), r = B.substr((q + "").length - (0 > q ? 1 : 0)) || "") : (q = parseFloat(B), r = B.substr((q + "").length));
                    "" === r && (r = v[b] || E);
                    r !== E && (K = p(a, "borderLeft", P,
                        E), y = p(a, "borderTop", P, E), "%" === r ? (O = K / c * 100 + "%", n = y / m * 100 + "%") : "em" === r ? (x = p(a, "borderLeft", 1, "em"), O = K / x + "em", n = y / x + "em") : (O = K + "px", n = y + "px"), A && (B = parseFloat(O) + q + r, l = parseFloat(n) + q + r));
                    g = Xa(z, u[e], O + " " + n, B + " " + l, !1, "0px", g)
                }
                return g
            }, prefix: !0, formatter: Va("0px 0px 0px 0px", !1, !0)
        });
        T("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px", parser: function (a, f, b, c, p, m) {
                return Xa(a.style, b, this.format(aa(a, b, k, !1, "0px 0px")), this.format(f),
                    !1, "0px", p)
            }, prefix: !0, formatter: Va("0px 0px", !1, !0)
        });
        T("backgroundPosition", {
            defaultValue: "0 0", parser: function (f, b, c, p, g, m) {
                var e, l;
                c = k || ra(f, null);
                c = this.format((c ? a ? c.getPropertyValue("background-position-x") + " " + c.getPropertyValue("background-position-y") : c.getPropertyValue("background-position") : f.currentStyle.backgroundPositionX + " " + f.currentStyle.backgroundPositionY) || "0 0");
                var n = this.format(b);
                if (-1 !== c.indexOf("%") != (-1 !== n.indexOf("%")) && 2 > n.split(",").length && (e = aa(f, "backgroundImage").replace(M,
                        ""), e && "none" !== e)) {
                    b = c.split(" ");
                    p = n.split(" ");
                    Da.setAttribute("src", e);
                    for (e = 2; -1 < --e;) {
                        c = b[e];
                        var q = -1 !== c.indexOf("%");
                        q !== (-1 !== p[e].indexOf("%")) && (l = 0 === e ? f.offsetWidth - Da.width : f.offsetHeight - Da.height, b[e] = q ? parseFloat(c) / 100 * l + "px" : parseFloat(c) / l * 100 + "%")
                    }
                    c = b.join(" ")
                }
                return this.parseComplex(f.style, c, n, g, m)
            }, formatter: Ua
        });
        T("backgroundSize", {
            defaultValue: "0 0", formatter: function (a) {
                return a += "", Ua(-1 === a.indexOf(" ") ? a + " " + a : a)
            }
        });
        T("perspective", {defaultValue: "0px", prefix: !0});
        T("perspectiveOrigin",
            {defaultValue: "50% 50%", prefix: !0});
        T("transformStyle", {prefix: !0});
        T("backfaceVisibility", {prefix: !0});
        T("userSelect", {prefix: !0});
        T("margin", {parser: ya("marginTop,marginRight,marginBottom,marginLeft")});
        T("padding", {parser: ya("paddingTop,paddingRight,paddingBottom,paddingLeft")});
        T("clip", {
            defaultValue: "rect(0px,0px,0px,0px)", parser: function (f, b, c, p, g, m) {
                var e, l, n;
                return 9 > a ? (l = f.currentStyle, n = 8 > a ? " " : ",", e = "rect(" + l.clipTop + n + l.clipRight + n + l.clipBottom + n + l.clipLeft + ")", b = this.format(b).split(",").join(n)) :
                    (e = this.format(aa(f, this.p, k, !1, this.dflt)), b = this.format(b)), this.parseComplex(f.style, e, b, g, m)
            }
        });
        T("textShadow", {defaultValue: "0px 0px 0px #999", color: !0, multi: !0});
        T("autoRound,strictUnits", {
            parser: function (a, f, b, c, p) {
                return p
            }
        });
        T("border", {
            defaultValue: "0px solid #000", parser: function (a, f, b, c, g, m) {
                b = aa(a, "borderTopWidth", k, !1, "0px");
                f = this.format(f).split(" ");
                c = f[0].replace(na, "");
                return "px" !== c && (b = parseFloat(b) / p(a, "borderTopWidth", 1, c) + c), this.parseComplex(a.style, this.format(b + " " + aa(a,
                        "borderTopStyle", k, !1, "solid") + " " + aa(a, "borderTopColor", k, !1, "#000")), f.join(" "), g, m)
            }, color: !0, formatter: function (a) {
                var f = a.split(" ");
                return f[0] + " " + (f[1] || "solid") + " " + (a.match(ma) || ["#000"])[0]
            }
        });
        T("borderWidth", {parser: ya("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")});
        T("float,cssFloat,styleFloat", {
            parser: function (a, f, b, c, p, m) {
                a = a.style;
                c = "cssFloat"in a ? "cssFloat" : "styleFloat";
                return new za(a, c, 0, 0, p, -1, b, !1, 0, a[c], f)
            }
        });
        var vb = function (a) {
            var f, b = this.t, c = b.filter ||
                aa(this.data, "filter") || "";
            a = this.s + this.c * a | 0;
            100 === a && (-1 === c.indexOf("atrix(") && -1 === c.indexOf("radient(") && -1 === c.indexOf("oader(") ? (b.removeAttribute("filter"), f = !aa(this.data, "filter")) : (b.filter = c.replace(E, ""), f = !0));
            f || (this.xn1 && (b.filter = c = c || "alpha(opacity=" + a + ")"), -1 === c.indexOf("pacity") ? 0 === a && this.xn1 || (b.filter = c + " alpha(opacity=" + a + ")") : b.filter = c.replace(qa, "opacity=" + a))
        };
        T("opacity,alpha,autoAlpha", {
            defaultValue: "1", parser: function (a, f, b, c, p, m) {
                var e = parseFloat(aa(a, "opacity",
                    k, !1, "1")), l = a.style, g = "autoAlpha" === b;
                return "string" == typeof f && "=" === f.charAt(1) && (f = ("-" === f.charAt(0) ? -1 : 1) * parseFloat(f.substr(2)) + e), g && 1 === e && "hidden" === aa(a, "visibility", k) && 0 !== f && (e = 0), Ja ? p = new za(l, "opacity", e, f - e, p) : (p = new za(l, "opacity", 100 * e, 100 * (f - e), p), p.xn1 = g ? 1 : 0, l.zoom = 1, p.type = 2, p.b = "alpha(opacity=" + p.s + ")", p.e = "alpha(opacity=" + (p.s + p.c) + ")", p.data = a, p.plugin = m, p.setRatio = vb), g && (p = new za(l, "visibility", 0, 0, p, -1, null, !1, 0, 0 !== e ? "inherit" : "hidden", 0 === f ? "hidden" : "inherit"), p.xs0 =
                    "inherit", c._overwriteProps.push(p.n), c._overwriteProps.push(b)), p
            }
        });
        var Ta = function (a, f) {
            f && (a.removeProperty ? (("ms" === f.substr(0, 2) || "webkit" === f.substr(0, 6)) && (f = "-" + f), a.removeProperty(f.replace(Q, "-$1").toLowerCase())) : a.removeAttribute(f))
        }, fb = function (a) {
            if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                this.t.setAttribute("class", 0 === a ? this.b : this.e);
                for (var f = this.data, b = this.t.style; f;)f.v ? b[f.p] = f.v : Ta(b, f.p), f = f._next;
                1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.getAttribute("class") !==
            this.e && this.t.setAttribute("class", this.e)
        };
        T("className", {
            parser: function (a, f, b, c, p, m, e) {
                var l, g, n, q = a.getAttribute("class") || "", r = a.style.cssText;
                if (p = c._classNamePT = new za(a, b, 0, 0, p, 2), p.setRatio = fb, p.pr = -11, C = !0, p.b = q, b = O(a, k), g = a._gsClassPT) {
                    var K = {};
                    for (n = g.data; n;)K[n.p] = 1, n = n._next;
                    g.setRatio(1)
                }
                return a._gsClassPT = p, p.e = "=" !== f.charAt(1) ? f : q.replace(new RegExp("(?:\\s|^)" + f.substr(2) + "(?![\\w-])"), "") + ("+" === f.charAt(0) ? " " + f.substr(2) : ""), a.setAttribute("class", p.e), l = P(a, b, O(a), e, K), a.setAttribute("class",
                    q), p.data = l.firstMPT, a.style.cssText = r, p.xfirst = c.parse(a, l.difs, p, m)
            }
        });
        var ib = function (a) {
            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var f, b, c = this.t.style, p = z.transform.parse;
                if ("all" === this.e) {
                    c.cssText = "";
                    var m = !0
                } else for (a = this.e.split(" ").join("").split(","), f = a.length; -1 < --f;) {
                    var e = a[f];
                    z[e] && (z[e].parse === p ? m = !0 : e = "transformOrigin" === e ? Fa : z[e].p);
                    Ta(c, e)
                }
                m && (Ta(c, wa), b = this.t._gsTransform, b && (b.svg && (this.t.removeAttribute("data-svg-origin"),
                    this.t.removeAttribute("transform")), delete this.t._gsTransform))
            }
        };
        T("clearProps", {
            parser: function (a, f, b, c, p) {
                return p = new za(a, b, 0, 0, p, 2), p.setRatio = ib, p.e = f, p.pr = -10, p.data = c._tween, C = !0, p
            }
        });
        b = ["bezier", "throwProps", "physicsProps", "physics2D"];
        for (Ba = b.length; Ba--;)db(b[Ba]);
        b = D.prototype;
        b._firstPT = b._lastParsedTransform = b._transform = null;
        b._onInitTween = function (a, f, b, p) {
            if (!a.nodeType)return !1;
            this._target = c = a;
            this._tween = b;
            this._vars = f;
            r = p;
            y = f.autoRound;
            C = !1;
            v = f.suffixMap || D.suffixMap;
            k = ra(a,
                "");
            B = this._overwriteProps;
            var l, m, e, g, n;
            p = a.style;
            if (q && "" === p.zIndex && (l = aa(a, "zIndex", k), ("auto" === l || "" === l) && this._addLazySet(p, "zIndex", 0)), "string" == typeof f && (g = p.cssText, l = O(a, k), p.cssText = g + ";" + f, l = P(a, l, O(a)).difs, !Ja && xa.test(f) && (l.opacity = parseFloat(RegExp.$1)), f = l, p.cssText = g), f.className ? this._firstPT = m = z.className.parse(a, f.className, "className", this, null, null, f) : this._firstPT = m = this.parse(a, f, null), this._transformType) {
                f = 3 === this._transformType;
                wa ? I && (q = !0, "" === p.zIndex && (e = aa(a,
                    "zIndex", k), ("auto" === e || "" === e) && this._addLazySet(p, "zIndex", 0)), H && this._addLazySet(p, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (f ? "visible" : "hidden"))) : p.zoom = 1;
                for (e = m; e && e._next;)e = e._next;
                f = new za(a, "transform", 0, 0, null, 2);
                this._linkCSSP(f, null, e);
                f.setRatio = wa ? hb : xb;
                f.data = this._transform || Ha(a, k, !0);
                f.tween = b;
                f.pr = -1;
                B.pop()
            }
            if (C) {
                for (; m;) {
                    a = m._next;
                    for (e = g; e && e.pr > m.pr;)e = e._next;
                    (m._prev = e ? e._prev : n) ? m._prev._next = m : g = m;
                    (m._next = e) ? e._prev = m : n = m;
                    m = a
                }
                this._firstPT = g
            }
            return !0
        };
        b.parse = function (a, f, b, g) {
            var l, m, e, n, q, x, u = a.style;
            for (l in f) {
                if (q = f[l], "function" == typeof q && (q = q(r, c)), m = z[l])b = m.parse(a, q, l, this, b, g, f); else {
                    if ("--" === l.substr(0, 2)) {
                        this._tween._propLookup[l] = this._addTween.call(this._tween, a.style, "setProperty", ra(a).getPropertyValue(l) + "", q + "", l, !1, l);
                        continue
                    }
                    m = aa(a, l, k) + "";
                    var O = "string" == typeof q;
                    if ("color" === l || "fill" === l || "stroke" === l || -1 !== l.indexOf("Color") || O && R.test(q))O || (q = ob(q), q = (3 < q.length ? "rgba(" : "rgb(") + q.join(",") + ")"), b = Xa(u, l, m, q, !0, "transparent",
                        b, 0, g); else if (O && ka.test(q))b = Xa(u, l, m, q, !0, null, b, 0, g); else {
                        var A = (e = parseFloat(m)) || 0 === e ? m.substr((e + "").length) : "";
                        if ("" === m || "auto" === m)if ("width" === l || "height" === l) {
                            e = a;
                            var B = l;
                            A = k;
                            if ("svg" === (e.nodeName + "").toLowerCase())e = (A || ra(e))[B] || 0; else if (e.getCTM && qb(e))e = e.getBBox()[B] || 0; else {
                                var P = parseFloat("width" === B ? e.offsetWidth : e.offsetHeight);
                                B = Ga[B];
                                var E = B.length;
                                for (A = A || ra(e, null); -1 < --E;)P -= parseFloat(aa(e, "padding" + B[E], A, !0)) || 0, P -= parseFloat(aa(e, "border" + B[E] + "Width", A, !0)) || 0;
                                e = P
                            }
                            A = "px"
                        } else"left" === l || "top" === l ? (e = K(a, l, k), A = "px") : (e = "opacity" !== l ? 0 : 1, A = "");
                        (P = O && "=" === q.charAt(1)) ? (n = parseInt(q.charAt(0) + "1", 10), q = q.substr(2), n *= parseFloat(q), x = q.replace(na, "")) : (n = parseFloat(q), x = O ? q.replace(na, "") : "");
                        "" === x && (x = l in v ? v[l] : A);
                        q = n || 0 === n ? (P ? n + e : n) + x : f[l];
                        A === x || "" === x && "lineHeight" !== l || !n && 0 !== n || !e || (e = p(a, l, e, A), "%" === x ? (e /= p(a, l, 100, "%") / 100, !0 !== f.strictUnits && (m = e + "%")) : "em" === x || "rem" === x || "vw" === x || "vh" === x ? e /= p(a, l, 1, x) : "px" !== x && (n = p(a, l, n, x), x = "px"), !P ||
                        !n && 0 !== n || (q = n + e + x));
                        P && (n += e);
                        !e && 0 !== e || !n && 0 !== n ? void 0 !== u[l] && (q || "NaN" != q + "" && null != q) ? (b = new za(u, l, n || e || 0, 0, b, -1, l, !1, 0, m, q), b.xs0 = "none" !== q || "display" !== l && -1 === l.indexOf("Style") ? q : m) : _gsScope.console && console.log("invalid " + l + " tween value: " + f[l]) : (b = new za(u, l, e, n - e, b, 0, l, !1 !== y && ("px" === x || "zIndex" === l), 0, m, q), b.xs0 = x)
                    }
                }
                g && b && !b.plugin && (b.plugin = g)
            }
            return b
        };
        b.setRatio = function (a) {
            var f, b, c = this._firstPT;
            if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)if (a ||
                this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1E-6 === this._tween._rawPrevTime)for (; c;) {
                if (f = c.c * a + c.s, c.r ? f = Math.round(f) : 1E-6 > f && -1E-6 < f && (f = 0), c.type)if (1 === c.type)if (b = c.l, 2 === b)c.t[c.p] = c.xs0 + f + c.xs1 + c.xn1 + c.xs2; else if (3 === b)c.t[c.p] = c.xs0 + f + c.xs1 + c.xn1 + c.xs2 + c.xn2 + c.xs3; else if (4 === b)c.t[c.p] = c.xs0 + f + c.xs1 + c.xn1 + c.xs2 + c.xn2 + c.xs3 + c.xn3 + c.xs4; else if (5 === b)c.t[c.p] = c.xs0 + f + c.xs1 + c.xn1 + c.xs2 + c.xn2 + c.xs3 + c.xn3 + c.xs4 + c.xn4 + c.xs5; else {
                    var p = c.xs0 + f + c.xs1;
                    for (b = 1; b < c.l; b++)p +=
                        c["xn" + b] + c["xs" + (b + 1)];
                    c.t[c.p] = p
                } else-1 === c.type ? c.t[c.p] = c.xs0 : c.setRatio && c.setRatio(a); else c.t[c.p] = f + c.xs0;
                c = c._next
            } else for (; c;)2 !== c.type ? c.t[c.p] = c.b : c.setRatio(a), c = c._next; else for (; c;) {
                if (2 !== c.type)if (c.r && -1 !== c.type)if (f = Math.round(c.s + c.c), c.type) {
                    if (1 === c.type) {
                        p = c.xs0 + f + c.xs1;
                        for (b = 1; b < c.l; b++)p += c["xn" + b] + c["xs" + (b + 1)];
                        c.t[c.p] = p
                    }
                } else c.t[c.p] = f + c.xs0; else c.t[c.p] = c.e; else c.setRatio(a);
                c = c._next
            }
        };
        b._enableTransforms = function (a) {
            this._transform = this._transform || Ha(this._target,
                    k, !0);
            this._transformType = this._transform.svg && Ra || !a && 3 !== this._transformType ? 2 : 3
        };
        var rb = function (a) {
            this.t[this.p] = this.e;
            this.data._linkCSSP(this, this._next, null, !0)
        };
        b._addLazySet = function (a, f, c) {
            a = this._firstPT = new za(a, f, 0, 0, this._firstPT, 2);
            a.e = c;
            a.setRatio = rb;
            a.data = this
        };
        b._linkCSSP = function (a, f, c, b) {
            return a && (f && (f._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, b = !0), c ? c._next = a : b || null !== this._firstPT || (this._firstPT =
                a), a._next = f, a._prev = c), a
        };
        b._mod = function (a) {
            for (var f = this._firstPT; f;)"function" == typeof a[f.p] && a[f.p] === Math.round && (f.r = 1), f = f._next
        };
        b._kill = function (a) {
            var f, c, b, p = a;
            if (a.autoAlpha || a.alpha) {
                p = {};
                for (c in a)p[c] = a[c];
                p.opacity = 1;
                p.autoAlpha && (p.visibility = 1)
            }
            a.className && (f = this._classNamePT) && (b = f.xfirst, b && b._prev ? this._linkCSSP(b._prev, f._next, b._prev._prev) : b === this._firstPT && (this._firstPT = f._next), f._next && this._linkCSSP(f._next, f._next._next, b._prev), this._classNamePT = null);
            for (f = this._firstPT; f;)f.plugin &&
            f.plugin !== c && f.plugin._kill && (f.plugin._kill(a), c = f.plugin), f = f._next;
            return g.prototype._kill.call(this, p)
        };
        var bb = function (a, f, c) {
            var b;
            if (a.slice)for (b = a.length; -1 < --b;)bb(a[b], f, c); else for (a = a.childNodes, b = a.length; -1 < --b;) {
                var p = a[b];
                var m = p.type;
                p.style && (f.push(O(p)), c && c.push(p));
                1 !== m && 9 !== m && 11 !== m || !p.childNodes.length || bb(p, f, c)
            }
        };
        return D.cascadeTo = function (a, f, c) {
            var b, p;
            var m = u.to(a, f, c);
            var e = [m], l = [], g = [], n = [], k = u._internals.reservedProps;
            a = m._targets || m.target;
            bb(a, l, n);
            m.render(f,
                !0, !0);
            bb(a, g);
            m.render(0, !0, !0);
            m._enabled(!0);
            for (a = n.length; -1 < --a;)if (b = P(n[a], l[a], g[a]), b.firstMPT) {
                b = b.difs;
                for (p in c)k[p] && (b[p] = c[p]);
                m = {};
                for (p in b)m[p] = l[a][p];
                e.push(u.fromTo(n[a], f, m, b))
            }
            return e
        }, g.activate([D]), D
    }, !0);
    (function () {
        var g = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.6.0",
            priority: -1,
            API: 2,
            init: function (g, C, v) {
                return this._tween = v, !0
            }
        }).prototype;
        g._onInitAllProps = function () {
            for (var g, C, v, k = this._tween, B = k.vars.roundProps.join ? k.vars.roundProps : k.vars.roundProps.split(","),
                     D = B.length, N = {}, z = k._propLookup.roundProps; -1 < --D;)N[B[D]] = Math.round;
            for (D = B.length; -1 < --D;)for (g = B[D], C = k._firstPT; C;) {
                v = C._next;
                if (C.pg)C.t._mod(N); else if (C.n === g)if (2 === C.f && C.t)for (C = C.t._firstPT; C;)C.f || C.blob || (C.m = Math.round), C = C._next; else this._add(C.t, g, C.s, C.c), v && (v._prev = C._prev), C._prev ? C._prev._next = v : k._firstPT === C && (k._firstPT = v), C._next = C._prev = null, k._propLookup[g] = z;
                C = v
            }
            return !1
        };
        g._add = function (g, C, v, k) {
            this._addTween(g, C, v, v + k, C, Math.round);
            this._overwriteProps.push(C)
        }
    })();
    (function () {
        _gsScope._gsDefine.plugin({
            propName: "attr", API: 2, version: "0.6.1", init: function (g, u, C, v) {
                var k;
                if ("function" != typeof g.setAttribute)return !1;
                for (k in u)C = u[k], "function" == typeof C && (C = C(v, g)), this._addTween(g, "setAttribute", g.getAttribute(k) + "", C + "", k, !1, k), this._overwriteProps.push(k);
                return !0
            }
        })
    })();
    _gsScope._gsDefine.plugin({
        propName: "directionalRotation", version: "0.3.1", API: 2, init: function (g, u, C, v) {
            "object" != typeof u && (u = {rotation: u});
            this.finals = {};
            var k, B, D, N, z, b;
            C = !0 === u.useRadians ?
            2 * Math.PI : 360;
            for (k in u)"useRadians" !== k && (N = u[k], "function" == typeof N && (N = N(v, g)), b = (N + "").split("_"), B = b[0], D = parseFloat("function" != typeof g[k] ? g[k] : g[k.indexOf("set") || "function" != typeof g["get" + k.substr(3)] ? k : "get" + k.substr(3)]()), N = this.finals[k] = "string" == typeof B && "=" === B.charAt(1) ? D + parseInt(B.charAt(0) + "1", 10) * Number(B.substr(2)) : Number(B) || 0, z = N - D, b.length && (B = b.join("_"), -1 !== B.indexOf("short") && (z %= C, z !== z % (C / 2) && (z = 0 > z ? z + C : z - C)), -1 !== B.indexOf("_cw") && 0 > z ? z = (z + 9999999999 * C) % C - (z / C |
                0) * C : -1 !== B.indexOf("ccw") && 0 < z && (z = (z - 9999999999 * C) % C - (z / C | 0) * C)), (1E-6 < z || -1E-6 > z) && (this._addTween(g, k, D, D + z, k), this._overwriteProps.push(k)));
            return !0
        }, set: function (g) {
            if (1 !== g)this._super.setRatio.call(this, g); else for (g = this._firstPT; g;)g.f ? g.t[g.p](this.finals[g.p]) : g.t[g.p] = this.finals[g.p], g = g._next
        }
    })._autoCSS = !0;
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (g) {
        var u, C, v, k = _gsScope.GreenSockGlobals || _gsScope, B = 2 * Math.PI, D = Math.PI / 2, N = k.com.greensock._class, z = function (a, c) {
            var b =
                N("easing." + a, function () {
                }, !0), k = b.prototype = new g;
            return k.constructor = b, k.getRatio = c, b
        }, b = g.register || function () {
            }, y = function (a, c, g, k, n) {
            c = N("easing." + a, {easeOut: new c, easeIn: new g, easeInOut: new k}, !0);
            return b(c, a), c
        }, q = function (a, c, b) {
            this.t = a;
            this.v = c;
            b && (this.next = b, b.prev = this, this.c = b.v - c, this.gap = b.t - a)
        }, I = function (a, c) {
            var b = N("easing." + a, function (a) {
                this._p1 = a || 0 === a ? a : 1.70158;
                this._p2 = 1.525 * this._p1
            }, !0), k = b.prototype = new g;
            return k.constructor = b, k.getRatio = c, k.config = function (a) {
                return new b(a)
            },
                b
        };
        I = y("Back", I("BackOut", function (a) {
            return --a * a * ((this._p1 + 1) * a + this._p1) + 1
        }), I("BackIn", function (a) {
            return a * a * ((this._p1 + 1) * a - this._p1)
        }), I("BackInOut", function (a) {
            return 1 > (a *= 2) ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
        }));
        var J = N("easing.SlowMo", function (a, c, b) {
            null == a ? a = .7 : 1 < a && (a = 1);
            this._p = 1 !== a ? c || 0 === c ? c : .7 : 0;
            this._p1 = (1 - a) / 2;
            this._p2 = a;
            this._p3 = this._p1 + this._p2;
            this._calcEnd = !0 === b
        }, !0), H = J.prototype = new g;
        return H.constructor = J, H.getRatio = function (a) {
            var c =
                a + (.5 - a) * this._p;
            return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : c - (a = 1 - a / this._p1) * a * a * a * c : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : c + (a - c) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : c
        }, J.ease = new J(.7, .7), H.config = J.config = function (a, c, b) {
            return new J(a, c, b)
        }, u = N("easing.SteppedEase", function (a, c) {
            a = a || 1;
            this._p1 = 1 / a;
            this._p2 = a + (c ? 0 : 1);
            this._p3 = c ? 1 : 0
        }, !0), H = u.prototype = new g, H.constructor = u, H.getRatio = function (a) {
            return 0 > a ? a = 0 : 1 <= a && (a = .999999999), ((this._p2 * a | 0) + this._p3) *
            this._p1
        }, H.config = u.config = function (a, c) {
            return new u(a, c)
        }, C = N("easing.RoughEase", function (a) {
            a = a || {};
            for (var c, b, k, n, y = a.taper || "none", u = [], z = 0, B = n = 0 | (a.points || 20), v = !1 !== a.randomize, E = !0 === a.clamp, C = a.template instanceof g ? a.template : null, D = "number" == typeof a.strength ? .4 * a.strength : .4; -1 < --B;)a = v ? Math.random() : 1 / n * B, c = C ? C.getRatio(a) : a, "none" === y ? b = D : "out" === y ? (k = 1 - a, b = k * k * D) : "in" === y ? b = a * a * D : .5 > a ? (k = 2 * a, b = k * k * .5 * D) : (k = 2 * (1 - a), b = k * k * .5 * D), v ? c += Math.random() * b - .5 * b : B % 2 ? c += .5 * b : c -= .5 * b, E && (1 < c ?
                c = 1 : 0 > c && (c = 0)), u[z++] = {x: a, y: c};
            u.sort(function (a, b) {
                return a.x - b.x
            });
            b = new q(1, 1, null);
            for (B = n; -1 < --B;)n = u[B], b = new q(n.x, n.y, b);
            this._prev = new q(0, 0, 0 !== b.t ? b : b.next)
        }, !0), H = C.prototype = new g, H.constructor = C, H.getRatio = function (a) {
            var b = this._prev;
            if (a > b.t) {
                for (; b.next && a >= b.t;)b = b.next;
                b = b.prev
            } else for (; b.prev && a <= b.t;)b = b.prev;
            return this._prev = b, b.v + (a - b.t) / b.gap * b.c
        }, H.config = function (a) {
            return new C(a)
        }, C.ease = new C, y("Bounce", z("BounceOut", function (a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ?
            7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        }), z("BounceIn", function (a) {
            return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
        }), z("BounceInOut", function (a) {
            var b = .5 > a;
            return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
        })),
            y("Circ", z("CircOut", function (a) {
                return Math.sqrt(1 - --a * a)
            }), z("CircIn", function (a) {
                return -(Math.sqrt(1 - a * a) - 1)
            }), z("CircInOut", function (a) {
                return 1 > (a *= 2) ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
            })), v = function (a, b, k) {
            var c = N("easing." + a, function (a, b) {
                this._p1 = 1 <= a ? a : 1;
                this._p2 = (b || k) / (1 > a ? a : 1);
                this._p3 = this._p2 / B * (Math.asin(1 / this._p1) || 0);
                this._p2 = B / this._p2
            }, !0);
            a = c.prototype = new g;
            return a.constructor = c, a.getRatio = b, a.config = function (a, b) {
                return new c(a, b)
            }, c
        }, y("Elastic", v("ElasticOut",
            function (a) {
                return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1
            }, .3), v("ElasticIn", function (a) {
            return -(this._p1 * Math.pow(2, 10 * --a) * Math.sin((a - this._p3) * this._p2))
        }, .3), v("ElasticInOut", function (a) {
            return 1 > (a *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * --a) * Math.sin((a - this._p3) * this._p2) : this._p1 * Math.pow(2, -10 * --a) * Math.sin((a - this._p3) * this._p2) * .5 + 1
        }, .45)), y("Expo", z("ExpoOut", function (a) {
            return 1 - Math.pow(2, -10 * a)
        }), z("ExpoIn", function (a) {
            return Math.pow(2, 10 * (a - 1)) - .001
        }), z("ExpoInOut",
            function (a) {
                return 1 > (a *= 2) ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
            })), y("Sine", z("SineOut", function (a) {
            return Math.sin(a * D)
        }), z("SineIn", function (a) {
            return -Math.cos(a * D) + 1
        }), z("SineInOut", function (a) {
            return -.5 * (Math.cos(Math.PI * a) - 1)
        })), N("easing.EaseLookup", {
            find: function (a) {
                return g.map[a]
            }
        }, !0), b(k.SlowMo, "SlowMo", "ease,"), b(C, "RoughEase", "ease,"), b(u, "SteppedEase", "ease,"), I
    }, !0)
});
_gsScope._gsDefine && _gsScope._gsQueue.pop()();
(function (g, u) {
    var C = {}, v = g.document, k = g.GreenSockGlobals = g.GreenSockGlobals || g;
    if (!k.TweenLite) {
        var B, D = function (a) {
            var b = a.split("."), c = k;
            for (a = 0; a < b.length; a++)c[b[a]] = c = c[b[a]] || {};
            return c
        }, N = D("com.greensock"), z = function (a) {
            var b, c = [], p = a.length;
            for (b = 0; b !== p; c.push(a[b++]));
            return c
        }, b = function () {
        }, y = function () {
            var a = Object.prototype.toString, b = a.call([]);
            return function (c) {
                return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
            }
        }(), q = {}, I = function (a, b, c, n) {
            this.sc =
                q[a] ? q[a].sc : [];
            q[a] = this;
            this.gsClass = null;
            this.func = c;
            var p = [];
            this.check = function (r) {
                for (var y, K, f, x, z = b.length, B = z; -1 < --z;)(y = q[b[z]] || new I(b[z], [])).gsClass ? (p[z] = y.gsClass, B--) : r && y.sc.push(this);
                if (0 === B && c) {
                    if (K = ("com.greensock." + a).split("."), f = K.pop(), x = D(K.join("."))[f] = this.gsClass = c.apply(c, p), n)if (k[f] = C[f] = x, "undefined" != typeof module && module.exports)if (a === u)for (z in module.exports = C[u] = x, C)x[z] = C[z]; else C[u] && (C[u][f] = x); else"function" == typeof define && define.amd && define((g.GreenSockAMDPath ?
                        g.GreenSockAMDPath + "/" : "") + a.split(".").pop(), [], function () {
                        return x
                    });
                    for (z = 0; z < this.sc.length; z++)this.sc[z].check()
                }
            };
            this.check(!0)
        }, J = g._gsDefine = function (a, b, c, g) {
            return new I(a, b, c, g)
        }, H = N._class = function (a, b, c) {
            return b = b || function () {
                }, J(a, [], function () {
                return b
            }, c), b
        };
        J.globals = k;
        var a = [0, 0, 1, 1], c = H("easing.Ease", function (b, c, g, n) {
            this._func = b;
            this._type = g || 0;
            this._power = n || 0;
            this._params = c ? a.concat(c) : a
        }, !0), r = c.map = {}, U = c.register = function (a, b, c, g) {
            var p;
            b = b.split(",");
            for (var n = b.length,
                     k = (c || "easeIn,easeOut,easeInOut").split(","); -1 < --n;) {
                var q = b[n];
                c = g ? H("easing." + q, null, !0) : N.easing[q] || {};
                for (p = k.length; -1 < --p;) {
                    var f = k[p];
                    r[q + "." + f] = r[f + q] = c[f] = a.getRatio ? a : a[f] || new a
                }
            }
        };
        var n = c.prototype;
        n._calcEnd = !1;
        n.getRatio = function (a) {
            if (this._func)return this._params[0] = a, this._func.apply(null, this._params);
            var b = this._type, c = this._power, p = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
            return 1 === c ? p *= p : 2 === c ? p *= p * p : 3 === c ? p *= p * p * p : 4 === c && (p *= p * p * p * p), 1 === b ? 1 - p : 2 === b ? p : .5 > a ? p / 2 : 1 - p / 2
        };
        var x = ["Linear",
            "Quad", "Cubic", "Quart", "Quint,Strong"];
        for (B = x.length; -1 < --B;)n = x[B] + ",Power" + B, U(new c(null, null, 1, B), n, "easeOut", !0), U(new c(null, null, 2, B), n, "easeIn" + (0 === B ? ",easeNone" : "")), U(new c(null, null, 3, B), n, "easeInOut");
        r.linear = N.easing.Linear.easeIn;
        r.swing = N.easing.Quad.easeInOut;
        var oa = H("events.EventDispatcher", function (a) {
            this._listeners = {};
            this._eventTarget = a || this
        });
        n = oa.prototype;
        n.addEventListener = function (a, b, c, g, n) {
            n = n || 0;
            var p, k = this._listeners[a], q = 0;
            this !== Q || aa || Q.wake();
            null == k && (this._listeners[a] =
                k = []);
            for (p = k.length; -1 < --p;)a = k[p], a.c === b && a.s === c ? k.splice(p, 1) : 0 === q && a.pr < n && (q = p + 1);
            k.splice(q, 0, {c: b, s: c, up: g, pr: n})
        };
        n.removeEventListener = function (a, b) {
            var c, p = this._listeners[a];
            if (p)for (c = p.length; -1 < --c;)if (p[c].c === b)return void p.splice(c, 1)
        };
        n.dispatchEvent = function (a) {
            var b, c, p = this._listeners[a];
            if (p) {
                var g = p.length;
                1 < g && (p = p.slice(0));
                for (b = this._eventTarget; -1 < --g;)(c = p[g]) && (c.up ? c.c.call(c.s || b, {
                    type: a,
                    target: b
                }) : c.c.call(c.s || b))
            }
        };
        var na = g.requestAnimationFrame, qa = g.cancelAnimationFrame,
            xa = Date.now || function () {
                    return (new Date).getTime()
                }, E = xa();
        x = ["ms", "moz", "webkit", "o"];
        for (B = x.length; -1 < --B && !na;)na = g[x[B] + "RequestAnimationFrame"], qa = g[x[B] + "CancelAnimationFrame"] || g[x[B] + "CancelRequestAnimationFrame"];
        H("Ticker", function (a, c) {
            var p, g, n, k, q, r = this, f = xa(), y = !1 !== c && na ? "auto" : !1, x = 500, K = 33, u = function (a) {
                var b;
                var c = xa() - E;
                c > x && (f += c - K);
                E += c;
                r.time = (E - f) / 1E3;
                c = r.time - q;
                (!p || 0 < c || !0 === a) && (r.frame++, q += c + (c >= k ? .004 : k - c), b = !0);
                !0 !== a && (n = g(u));
                b && r.dispatchEvent("tick")
            };
            oa.call(r);
            r.time = r.frame = 0;
            r.tick = function () {
                u(!0)
            };
            r.lagSmoothing = function (a, b) {
                x = a || 1E10;
                K = Math.min(b, x, 0)
            };
            r.sleep = function () {
                null != n && (y && qa ? qa(n) : clearTimeout(n), g = b, n = null, r === Q && (aa = !1))
            };
            r.wake = function (a) {
                null !== n ? r.sleep() : a ? f += -E + (E = xa()) : 10 < r.frame && (E = xa() - x + 5);
                g = 0 === p ? b : y && na ? na : function (a) {
                    return setTimeout(a, 1E3 * (q - r.time) + 1 | 0)
                };
                r === Q && (aa = !0);
                u(2)
            };
            r.fps = function (a) {
                return arguments.length ? (p = a, k = 1 / (p || 60), q = this.time + k, void r.wake()) : p
            };
            r.useRAF = function (a) {
                return arguments.length ? (r.sleep(),
                    y = a, void r.fps(p)) : y
            };
            r.fps(a);
            setTimeout(function () {
                "auto" === y && 5 > r.frame && "hidden" !== v.visibilityState && r.useRAF(!1)
            }, 1500)
        });
        n = N.Ticker.prototype = new N.events.EventDispatcher;
        n.constructor = N.Ticker;
        var R = H("core.Animation", function (a, b) {
            if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = !0 === b.immediateRender, this.data = b.data, this._reversed = !0 === b.reversed, va) {
                aa || Q.wake();
                var c = this.vars.useFrames ? Da : va;
                c.add(this, c._time);
                this.vars.paused && this.paused(!0)
            }
        });
        var Q = R.ticker = new N.Ticker;
        n = R.prototype;
        n._dirty = n._gc = n._initted = n._paused = !1;
        n._totalTime = n._time = 0;
        n._rawPrevTime = -1;
        n._next = n._last = n._onUpdate = n._timeline = n.timeline = null;
        n._paused = !1;
        var da = function () {
            aa && 2E3 < xa() - E && "hidden" !== v.visibilityState && Q.wake();
            var a = setTimeout(da, 2E3);
            a.unref && a.unref()
        };
        da();
        n.play = function (a, b) {
            return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
        };
        n.pause = function (a, b) {
            return null != a && this.seek(a, b), this.paused(!0)
        };
        n.resume = function (a, b) {
            return null != a && this.seek(a, b), this.paused(!1)
        };
        n.seek = function (a, b) {
            return this.totalTime(Number(a), !1 !== b)
        };
        n.restart = function (a, b) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, !1 !== b, !0)
        };
        n.reverse = function (a, b) {
            return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
        };
        n.render = function (a, b, c) {
        };
        n.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) &&
            this._enabled(!0), this
        };
        n.isActive = function () {
            var a, b = this._timeline, c = this._startTime;
            return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - 1E-7
        };
        n._enabled = function (a, b) {
            return aa || Q.wake(), this._gc = !a, this._active = this.isActive(), !0 !== b && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
        };
        n._kill = function (a, b) {
            return this._enabled(!1, !1)
        };
        n.kill = function (a, b) {
            return this._kill(a,
                b), this
        };
        n._uncache = function (a) {
            for (a = a ? this : this.timeline; a;)a._dirty = !0, a = a.timeline;
            return this
        };
        n._swapSelfInParams = function (a) {
            for (var b = a.length, c = a.concat(); -1 < --b;)"{self}" === a[b] && (c[b] = this);
            return c
        };
        n._callback = function (a) {
            var b = this.vars, c = b[a], p = b[a + "Params"];
            a = b[a + "Scope"] || b.callbackScope || this;
            switch (p ? p.length : 0) {
                case 0:
                    c.call(a);
                    break;
                case 1:
                    c.call(a, p[0]);
                    break;
                case 2:
                    c.call(a, p[0], p[1]);
                    break;
                default:
                    c.apply(a, p)
            }
        };
        n.eventCallback = function (a, b, c, g) {
            if ("on" === (a || "").substr(0,
                    2)) {
                var p = this.vars;
                if (1 === arguments.length)return p[a];
                null == b ? delete p[a] : (p[a] = b, p[a + "Params"] = y(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, p[a + "Scope"] = g);
                "onUpdate" === a && (this._onUpdate = b)
            }
            return this
        };
        n.delay = function (a) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
        };
        n.duration = function (a) {
            return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming &&
            0 < this._time && this._time < this._duration && 0 !== a && this.totalTime(a / this._duration * this._totalTime, !0), this) : (this._dirty = !1, this._duration)
        };
        n.totalDuration = function (a) {
            return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
        };
        n.time = function (a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
        };
        n.totalTime = function (a, b, c) {
            if (aa || Q.wake(), !arguments.length)return this._totalTime;
            if (this._timeline) {
                if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var p = this._totalDuration, g = this._timeline;
                    if (a > p && !c && (a = p), this._startTime = (this._paused ? this._pauseTime : g._time) - (this._reversed ? p - a : a) / this._timeScale, g._dirty || this._uncache(!1), g._timeline)for (; g._timeline;)g._timeline._time !== (g._startTime + g._totalTime) / g._timeScale && g.totalTime(g._totalTime, !0), g = g._timeline
                }
                this._gc && this._enabled(!0, !1);
                (this._totalTime !== a || 0 === this._duration) && (S.length &&
                Ja(), this.render(a, b, !1), S.length && Ja())
            }
            return this
        };
        n.progress = n.totalProgress = function (a, b) {
            var c = this.duration();
            return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio
        };
        n.startTime = function (a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
        };
        n.endTime = function (a) {
            return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
        };
        n.timeScale =
            function (a) {
                if (!arguments.length)return this._timeScale;
                if (a = a || 1E-10, this._timeline && this._timeline.smoothChildTiming) {
                    var b = this._pauseTime;
                    b = b || 0 === b ? b : this._timeline.totalTime();
                    this._startTime = b - (b - this._startTime) * this._timeScale / a
                }
                return this._timeScale = a, this._uncache(!1)
            };
        n.reversed = function (a) {
            return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        };
        n.paused = function (a) {
            if (!arguments.length)return this._paused;
            var b, c, p = this._timeline;
            return a != this._paused && p && (aa || a || Q.wake(), b = p.rawTime(), c = b - this._pauseTime, !a && p.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = p.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
        };
        x = H("core.SimpleTimeline",
            function (a) {
                R.call(this, 0, a);
                this.autoRemoveChildren = this.smoothChildTiming = !0
            });
        n = x.prototype = new R;
        n.constructor = x;
        n.kill()._gc = !1;
        n._first = n._last = n._recent = null;
        n._sortChildren = !1;
        n.add = n.insert = function (a, b, c, g) {
            if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), b = this._last, this._sortChildren)for (c = a._startTime; b &&
            b._startTime > c;)b = b._prev;
            return b ? (a._next = b._next, b._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = b, this._recent = a, this._timeline && this._uncache(!0), this
        };
        n._remove = function (a, b) {
            return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline &&
            this._uncache(!0)), this
        };
        n.render = function (a, b, c) {
            var p = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = a; p;) {
                var g = p._next;
                (p._active || a >= p._startTime && !p._paused && !p._gc) && (p._reversed ? p.render((p._dirty ? p.totalDuration() : p._totalDuration) - (a - p._startTime) * p._timeScale, b, c) : p.render((a - p._startTime) * p._timeScale, b, c));
                p = g
            }
        };
        n.rawTime = function () {
            return aa || Q.wake(), this._totalTime
        };
        var M = H("TweenLite", function (a, b, c) {
            if (R.call(this, b, c), this.render = M.prototype.render, null == a)throw"Cannot tween a null target.";
            this.target = a = "string" != typeof a ? a : M.selector(a) || a;
            var p;
            var n = a.jquery || a.length && a !== g && a[0] && (a[0] === g || a[0].nodeType && a[0].style && !a.nodeType);
            c = this.vars.overwrite;
            if (this._overwrite = c = null == c ? Aa[M.defaultOverwrite] : "number" == typeof c ? c >> 0 : Aa[c], (n || a instanceof Array || a.push && y(a)) && "number" != typeof a[0])for (this._targets = p = z(a), this._propLookup = [], this._siblings = [], a = 0; a < p.length; a++)(n = p[a]) ? "string" != typeof n ? n.length && n !== g && n[0] && (n[0] === g || n[0].nodeType && n[0].style && !n.nodeType) ? (p.splice(a--,
                1), this._targets = p = p.concat(z(n))) : (this._siblings[a] = Pa(n, this, !1), 1 === c && 1 < this._siblings[a].length && Z(n, this, null, 1, this._siblings[a])) : (n = p[a--] = M.selector(n), "string" == typeof n && p.splice(a + 1, 1)) : p.splice(a--, 1); else this._propLookup = {}, this._siblings = Pa(a, this, !1), 1 === c && 1 < this._siblings.length && Z(a, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === b && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1E-10, this.render(Math.min(0, -this._delay)))
        }, !0), ea = function (a) {
            return a &&
                a.length && a !== g && a[0] && (a[0] === g || a[0].nodeType && a[0].style && !a.nodeType)
        };
        n = M.prototype = new R;
        n.constructor = M;
        n.kill()._gc = !1;
        n.ratio = 0;
        n._firstPT = n._targets = n._overwrittenProps = n._startAt = null;
        n._notifyPluginsOfEnabled = n._lazy = !1;
        M.version = "1.20.2";
        M.defaultEase = n._ease = new c(null, null, 1, 1);
        M.defaultOverwrite = "auto";
        M.ticker = Q;
        M.autoSleep = 120;
        M.lagSmoothing = function (a, b) {
            Q.lagSmoothing(a, b)
        };
        M.selector = g.$ || g.jQuery || function (a) {
                var b = g.$ || g.jQuery;
                return b ? (M.selector = b, b(a)) : "undefined" == typeof v ?
                    a : v.querySelectorAll ? v.querySelectorAll(a) : v.getElementById("#" === a.charAt(0) ? a.substr(1) : a)
            };
        var S = [], ta = {}, ua = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, ca = /[\+-]=-?[\.\d]/, ka = function (a) {
            for (var b, c = this._firstPT; c;)b = c.blob ? 1 === a && this.end ? this.end : a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m(b, this._target || c.t) : 1E-6 > b && -1E-6 < b && !c.blob && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next
        }, la = function (a, b, c, g) {
            var p, n = [], k = 0, q = "", f = 0;
            n.start = a;
            n.end = b;
            a = n[0] = a + "";
            b = n[1] =
                b + "";
            c && (c(n), a = n[0], b = n[1]);
            n.length = 0;
            a = a.match(ua) || [];
            c = b.match(ua) || [];
            g && (g._next = null, g.blob = 1, n._firstPT = n._applyPT = g);
            var r = c.length;
            for (g = 0; r > g; g++) {
                var y = c[g];
                var x = b.substr(k, b.indexOf(y, k) - k);
                q += x || !g ? x : ",";
                k += x.length;
                f ? f = (f + 1) % 5 : "rgba(" === x.substr(-5) && (f = 1);
                y === a[g] || a.length <= g ? q += y : (q && (n.push(q), q = ""), p = parseFloat(a[g]), n.push(p), n._firstPT = {
                    _next: n._firstPT,
                    t: n,
                    p: n.length - 1,
                    s: p,
                    c: ("=" === y.charAt(1) ? parseInt(y.charAt(0) + "1", 10) * parseFloat(y.substr(2)) : parseFloat(y) - p) || 0,
                    f: 0,
                    m: f &&
                    4 > f ? Math.round : 0
                });
                k += y.length
            }
            return q += b.substr(k), q && n.push(q), n.setRatio = ka, ca.test(b) && (n.end = 0), n
        }, ha = function (a, b, c, g, n, k, q, r, f) {
            "function" == typeof g && (g = g(f || 0, a));
            var p;
            f = typeof a[b];
            var y = "function" !== f ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3);
            c = "get" !== c ? c : y ? q ? a[y](q) : a[y]() : a[b];
            y = "string" == typeof g && "=" === g.charAt(1);
            a = {
                t: a,
                p: b,
                s: c,
                f: "function" === f,
                pg: 0,
                n: n || b,
                m: k ? "function" == typeof k ? k : Math.round : 0,
                pr: 0,
                c: y ? parseInt(g.charAt(0) + "1", 10) * parseFloat(g.substr(2)) :
                parseFloat(g) - c || 0
            };
            return ("number" != typeof c || "number" != typeof g && !y) && (q || isNaN(c) || !y && isNaN(g) || "boolean" == typeof c || "boolean" == typeof g ? (a.fp = q, p = la(c, y ? parseFloat(a.s) + a.c : g, r || M.defaultStringFilter, a), a = {
                t: p,
                p: "setRatio",
                s: 0,
                c: 1,
                f: 2,
                pg: 0,
                n: n || b,
                pr: 0,
                m: 0
            }) : (a.s = parseFloat(c), y || (a.c = parseFloat(g) - a.s || 0))), a.c ? ((a._next = this._firstPT) && (a._next._prev = a), this._firstPT = a, a) : void 0
        };
        B = M._internals = {isArray: y, isSelector: ea, lazyTweens: S, blobDif: la};
        var ia = M._plugins = {}, Ia = B.tweenLookup = {}, La = 0, pa =
            B.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1,
                yoyoEase: 1
            }, Aa =
        {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        }, Da = R._rootFramesTimeline = new x, va = R._rootTimeline = new x, Ma = 30, Ja = B.lazyRender = function () {
            var a, b = S.length;
            for (ta = {}; -1 < --b;)(a = S[b]) && !1 !== a._lazy && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
            S.length = 0
        };
        va._startTime = Q.time;
        Da._startTime = Q.frame;
        va._active = Da._active = !0;
        setTimeout(Ja, 1);
        R._updateRoot = M.render = function () {
            var a, b;
            if (S.length && Ja(), va.render((Q.time - va._startTime) * va._timeScale, !1, !1), Da.render((Q.frame -
                    Da._startTime) * Da._timeScale, !1, !1), S.length && Ja(), Q.frame >= Ma) {
                Ma = Q.frame + (parseInt(M.autoSleep, 10) || 120);
                for (b in Ia) {
                    var c = Ia[b].tweens;
                    for (a = c.length; -1 < --a;)c[a]._gc && c.splice(a, 1);
                    0 === c.length && delete Ia[b]
                }
                if (b = va._first, (!b || b._paused) && M.autoSleep && !Da._first && 1 === Q._listeners.tick.length) {
                    for (; b && b._paused;)b = b._next;
                    b || Q.sleep()
                }
            }
        };
        Q.addEventListener("tick", R._updateRoot);
        var Pa = function (a, b, c) {
            var g, p, n = a._gsTweenID;
            if (Ia[n || (a._gsTweenID = n = "t" + La++)] || (Ia[n] = {target: a, tweens: []}), b &&
                (g = Ia[n].tweens, g[p = g.length] = b, c))for (; -1 < --p;)g[p] === b && g.splice(p, 1);
            return Ia[n].tweens
        }, Ea = function (a, b, c, g) {
            var p, n, k = a.vars.onOverwrite;
            return k && (p = k(a, b, c, g)), k = M.onOverwrite, k && (n = k(a, b, c, g)), !1 !== p && !1 !== n
        }, Z = function (a, b, c, g, n) {
            var p, k, q;
            if (1 === g || 4 <= g) {
                c = n.length;
                for (p = 0; c > p; p++)if ((q = n[p]) !== b)q._gc || q._kill(null, a, b) && (k = !0); else if (5 === g)break;
                return k
            }
            var f, r = b._startTime + 1E-10, y = [], x = 0, u = 0 === b._duration;
            for (p = n.length; -1 < --p;)(q = n[p]) === b || q._gc || q._paused || (q._timeline !== b._timeline ?
                (f = f || Wa(b, 0, u), 0 === Wa(q, f, u) && (y[x++] = q)) : q._startTime <= r && q._startTime + q.totalDuration() / q._timeScale > r && ((u || !q._initted) && 2E-10 >= r - q._startTime || (y[x++] = q)));
            for (p = x; -1 < --p;)(q = y[p], 2 === g && q._kill(c, a, b) && (k = !0), 2 !== g || !q._firstPT && q._initted) && (2 === g || Ea(q, b)) && q._enabled(!1, !1) && (k = !0);
            return k
        }, Wa = function (a, b, c) {
            for (var g = a._timeline, n = g._timeScale, p = a._startTime; g._timeline;) {
                if (p += g._startTime, n *= g._timeScale, g._paused)return -100;
                g = g._timeline
            }
            return p /= n, p > b ? p - b : c && p === b || !a._initted &&
            2E-10 > p - b ? 1E-10 : (p += a.totalDuration() / a._timeScale / n) > b + 1E-10 ? 0 : p - b - 1E-10
        };
        n._init = function () {
            var a, b, g = this.vars, n = this._overwrittenProps, k = this._duration;
            var q = !!g.immediateRender;
            var y = g.ease;
            if (g.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill());
                var x = {};
                for (a in g.startAt)x[a] = g.startAt[a];
                if (x.overwrite = !1, x.immediateRender = !0, x.lazy = q && !1 !== g.lazy, x.startAt = x.delay = null, x.onUpdate = g.onUpdate, x.onUpdateScope = g.onUpdateScope || g.callbackScope || this, this._startAt = M.to(this.target,
                        0, x), q)if (0 < this._time)this._startAt = null; else if (0 !== k)return
            } else if (g.runBackwards && 0 !== k)if (this._startAt)this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else {
                0 !== this._time && (q = !1);
                x = {};
                for (a in g)pa[a] && "autoCSS" !== a || (x[a] = g[a]);
                if (x.overwrite = 0, x.data = "isFromStart", x.lazy = q && !1 !== g.lazy, x.immediateRender = q, this._startAt = M.to(this.target, 0, x), q) {
                    if (0 === this._time)return
                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
            }
            if (this._ease =
                    y = y ? y instanceof c ? y : "function" == typeof y ? new c(y, g.easeParams) : r[y] || M.defaultEase : M.defaultEase, g.easeParams instanceof Array && y.config && (this._ease = y.config.apply(y, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)for (q = this._targets.length, a = 0; q > a; a++)this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], n ? n[a] : null, a) && (b = !0); else b = this._initProps(this.target, this._propLookup, this._siblings, n, 0);
            if (b && M._onPluginEvent("_onInitAllProps",
                    this), n && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards)for (x = this._firstPT; x;)x.s += x.c, x.c = -x.c, x = x._next;
            this._onUpdate = g.onUpdate;
            this._initted = !0
        };
        n._initProps = function (a, b, c, n, k) {
            var p, q, r, f;
            if (null == a)return !1;
            ta[a._gsTweenID] && Ja();
            if (!this.vars.css && a.style && a !== g && a.nodeType && ia.css && !1 !== this.vars.autoCSS) {
                var x = this.vars;
                var u = {};
                for (f in x)pa[f] || f in a && "transform" !== f && "x" !== f && "y" !== f && "width" !== f && "height" !== f && "className" !== f && "border" !== f || !(!ia[f] ||
                ia[f] && ia[f]._autoCSS) || (u[f] = x[f], delete x[f]);
                x.css = u
            }
            for (p in this.vars)if (x = this.vars[p], pa[p])x && (x instanceof Array || x.push && y(x)) && -1 !== x.join("").indexOf("{self}") && (this.vars[p] = this._swapSelfInParams(x, this)); else if (ia[p] && (r = new ia[p])._onInitTween(a, this.vars[p], this, k)) {
                this._firstPT = f = {
                    _next: this._firstPT,
                    t: r,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: p,
                    pg: 1,
                    pr: r._priority,
                    m: 0
                };
                for (x = r._overwriteProps.length; -1 < --x;)b[r._overwriteProps[x]] = this._firstPT;
                (r._priority || r._onInitAllProps) && (q = !0);
                (r._onDisable ||
                r._onEnable) && (this._notifyPluginsOfEnabled = !0);
                f._next && (f._next._prev = f)
            } else b[p] = ha.call(this, a, p, "get", x, p, 0, null, this.vars.stringFilter, k);
            return n && this._kill(n, a) ? this._initProps(a, b, c, n, k) : 1 < this._overwrite && this._firstPT && 1 < c.length && Z(a, this, b, this._overwrite, c) ? (this._kill(b, a), this._initProps(a, b, c, n, k)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (ta[a._gsTweenID] = !0), q)
        };
        n.render = function (a, b, c) {
            var g, n, p, k = this._time, q = this._duration;
            var f =
                this._rawPrevTime;
            if (a >= q - 1E-7 && 0 <= a)this._totalTime = this._time = q, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (g = !0, n = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === q && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > f || 0 >= a && -1E-7 <= a || 1E-10 === f && "isPause" !== this.data) && f !== a && (c = !0, 1E-10 < f && (n = "onReverseComplete")), this._rawPrevTime = p = !b || a || f === a ? a : 1E-10); else if (1E-7 > a)this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ?
                this._ease.getRatio(0) : 0, (0 !== k || 0 === q && 0 < f) && (n = "onReverseComplete", g = this._reversed), 0 > a && (this._active = !1, 0 === q && (this._initted || !this.vars.lazy || c) && (0 <= f && (1E-10 !== f || "isPause" !== this.data) && (c = !0), this._rawPrevTime = p = !b || a || f === a ? a : 1E-10)), (!this._initted || this._startAt && this._startAt.progress()) && (c = !0); else if (this._totalTime = this._time = a, this._easeType) {
                var r = a / q, x = this._easeType, y = this._easePower;
                (1 === x || 3 === x && .5 <= r) && (r = 1 - r);
                3 === x && (r *= 2);
                1 === y ? r *= r : 2 === y ? r *= r * r : 3 === y ? r *= r * r * r : 4 === y &&
                (r *= r * r * r * r);
                1 === x ? this.ratio = 1 - r : 2 === x ? this.ratio = r : .5 > a / q ? this.ratio = r / 2 : this.ratio = 1 - r / 2
            } else this.ratio = this._ease.getRatio(a / q);
            if (this._time !== k || c) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc)return;
                    if (!c && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))return this._time = this._totalTime = k, this._rawPrevTime = f, S.push(this), void(this._lazy = [a, b]);
                    this._time && !g ? this.ratio = this._ease.getRatio(this._time / q) : g && this._ease._calcEnd && (this.ratio =
                        this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                !1 !== this._lazy && (this._lazy = !1);
                this._active || !this._paused && this._time !== k && 0 <= a && (this._active = !0);
                0 !== k || (this._startAt && (0 <= a ? this._startAt.render(a, b, c) : n || (n = "_dummyGS")), !this.vars.onStart || 0 === this._time && 0 !== q || !b && this._callback("onStart"));
                for (f = this._firstPT; f;)f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                this._onUpdate && (0 > a && this._startAt && -1E-4 !== a && this._startAt.render(a, b, c), b || (this._time !== k || g || c) && this._callback("onUpdate"));
                n && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && -1E-4 !== a && this._startAt.render(a, b, c), g && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[n] && this._callback(n), 0 === q && 1E-10 === this._rawPrevTime && 1E-10 !== p && (this._rawPrevTime = 0))
            }
        };
        n._kill = function (a, b, c) {
            if ("all" === a && (a = null), null == a && (null == b || b === this.target))return this._lazy = !1, this._enabled(!1, !1);
            b = "string" != typeof b ? b || this._targets || this.target : M.selector(b) || b;
            var g, n, p, k, q, f, r = c && this._time &&
                c._startTime === this._startTime && this._timeline === c._timeline;
            if ((y(b) || ea(b)) && "number" != typeof b[0])for (g = b.length; -1 < --g;)this._kill(a, b[g], c) && (k = !0); else {
                if (this._targets)for (g = this._targets.length; -1 < --g;) {
                    if (b === this._targets[g]) {
                        var x = this._propLookup[g] || {};
                        this._overwrittenProps = this._overwrittenProps || [];
                        var u = this._overwrittenProps[g] = a ? this._overwrittenProps[g] || {} : "all";
                        break
                    }
                } else {
                    if (b !== this.target)return !1;
                    x = this._propLookup;
                    u = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                }
                if (x) {
                    if (g =
                            a || x, q = a !== u && "all" !== u && a !== x && ("object" != typeof a || !a._tempKill), c && (M.onOverwrite || this.vars.onOverwrite)) {
                        for (n in g)x[n] && (f || (f = []), f.push(n));
                        if ((f || !a) && !Ea(this, c, b, f))return !1
                    }
                    for (n in g)(p = x[n]) && (r && (p.f ? p.t[p.p](p.s) : p.t[p.p] = p.s, k = !0), p.pg && p.t._kill(g) && (k = !0), p.pg && 0 !== p.t._overwriteProps.length || (p._prev ? p._prev._next = p._next : p === this._firstPT && (this._firstPT = p._next), p._next && (p._next._prev = p._prev), p._next = p._prev = null), delete x[n]), q && (u[n] = 1);
                    !this._firstPT && this._initted && this._enabled(!1,
                        !1)
                }
            }
            return k
        };
        n.invalidate = function () {
            return this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], R.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1E-10, this.render(Math.min(0, -this._delay))), this
        };
        n._enabled = function (a, b) {
            if (aa || Q.wake(), a && this._gc) {
                var c, g = this._targets;
                if (g)for (c = g.length; -1 < --c;)this._siblings[c] =
                    Pa(g[c], this, !0); else this._siblings = Pa(this.target, this, !0)
            }
            return R.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? M._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
        };
        M.to = function (a, b, c) {
            return new M(a, b, c)
        };
        M.from = function (a, b, c) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new M(a, b, c)
        };
        M.fromTo = function (a, b, c, g) {
            return g.startAt = c, g.immediateRender = 0 != g.immediateRender && 0 != c.immediateRender, new M(a, b, g)
        };
        M.delayedCall = function (a, b, c, g, n) {
            return new M(b,
                0, {
                    delay: a,
                    onComplete: b,
                    onCompleteParams: c,
                    callbackScope: g,
                    onReverseComplete: b,
                    onReverseCompleteParams: c,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: n,
                    overwrite: 0
                })
        };
        M.set = function (a, b) {
            return new M(a, 0, b)
        };
        M.getTweensOf = function (a, b) {
            if (null == a)return [];
            a = "string" != typeof a ? a : M.selector(a) || a;
            var c, g;
            if ((y(a) || ea(a)) && "number" != typeof a[0]) {
                var n = a.length;
                for (c = []; -1 < --n;)c = c.concat(M.getTweensOf(a[n], b));
                for (n = c.length; -1 < --n;) {
                    var p = c[n];
                    for (g = n; -1 < --g;)p === c[g] && c.splice(n, 1)
                }
            } else if (a._gsTweenID)for (c =
                                             Pa(a).concat(), n = c.length; -1 < --n;)(c[n]._gc || b && !c[n].isActive()) && c.splice(n, 1);
            return c || []
        };
        M.killTweensOf = M.killDelayedCallsTo = function (a, b, c) {
            "object" == typeof b && (c = b, b = !1);
            b = M.getTweensOf(a, b);
            for (var g = b.length; -1 < --g;)b[g]._kill(c, a)
        };
        var ra = H("plugins.TweenPlugin", function (a, b) {
            this._overwriteProps = (a || "").split(",");
            this._propName = this._overwriteProps[0];
            this._priority = b || 0;
            this._super = ra.prototype
        }, !0);
        if (n = ra.prototype, ra.version = "1.19.0", ra.API = 2, n._firstPT = null, n._addTween = ha, n.setRatio =
                ka, n._kill = function (a) {
                var b, c = this._overwriteProps, g = this._firstPT;
                if (null != a[this._propName])this._overwriteProps = []; else for (b = c.length; -1 < --b;)null != a[c[b]] && c.splice(b, 1);
                for (; g;)null != a[g.n] && (g._next && (g._next._prev = g._prev), g._prev ? (g._prev._next = g._next, g._prev = null) : this._firstPT === g && (this._firstPT = g._next)), g = g._next;
                return !1
            }, n._mod = n._roundProps = function (a) {
                for (var b, c = this._firstPT; c;)(b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && "function" == typeof b &&
                (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next
            }, M._onPluginEvent = function (a, b) {
                var c, g, n, p, k = b._firstPT;
                if ("_onInitAllProps" === a) {
                    for (; k;) {
                        var q = k._next;
                        for (g = n; g && g.pr > k.pr;)g = g._next;
                        (k._prev = g ? g._prev : p) ? k._prev._next = k : n = k;
                        (k._next = g) ? g._prev = k : p = k;
                        k = q
                    }
                    k = b._firstPT = n
                }
                for (; k;)k.pg && "function" == typeof k.t[a] && k.t[a]() && (c = !0), k = k._next;
                return c
            }, ra.activate = function (a) {
                for (var b = a.length; -1 < --b;)a[b].API === ra.API && (ia[(new a[b])._propName] = a[b]);
                return !0
            }, J.plugin = function (a) {
                if (!(a && a.propName && a.init &&
                    a.API))throw"illegal plugin definition.";
                var b, c = a.propName, g = a.priority || 0, n = a.overwriteProps, k = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_mod",
                    mod: "_mod",
                    initAll: "_onInitAllProps"
                }, p = H("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function () {
                    ra.call(this, c, g);
                    this._overwriteProps = n || []
                }, !0 === a.global), q = p.prototype = new ra(c);
                q.constructor = p;
                p.API = a.API;
                for (b in k)"function" == typeof a[b] && (q[k[b]] = a[b]);
                return p.version = a.version, ra.activate([p]), p
            }, x = g._gsQueue) {
            for (B =
                     0; B < x.length; B++)x[B]();
            for (n in q)q[n].func || g.console.log("GSAP encountered missing dependency: " + n)
        }
        var aa = !1
    }
})("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
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
    "function" === typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], u) : "object" === typeof exports ? (require("gsap"), u(require("scrollmagic"), TweenMax, TimelineMax)) : u(g.ScrollMagic || g.jQuery && g.jQuery.ScrollMagic, g.TweenMax || g.TweenLite, g.TimelineMax || g.TimelineLite)
})(this, function (g, u, C) {
    var v = window.console || {};
    v = Function.prototype.bind.call(v.error || v.log || function () {
        }, v);
    g || v("(animation.gsap) -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
    u ||
    v("(animation.gsap) -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs.");
    g.Scene.addOption("tweenChanges", !1, function (g) {
        return !!g
    });
    g.Scene.extend(function () {
        var g = this, v, D = function () {
            g._log && (Array.prototype.splice.call(arguments, 1, 0, "(animation.gsap)", "->"), g._log.apply(this, arguments))
        };
        g.on("progress.plugin_gsap", function () {
            N()
        });
        g.on("destroy.plugin_gsap", function (k) {
            g.removeTween(k.reset)
        });
        var N =
            function () {
                if (v) {
                    var k = g.progress(), b = g.state();
                    v.repeat && -1 === v.repeat() ? "DURING" === b && v.paused() ? v.play() : "DURING" === b || v.paused() || v.pause() : k != v.progress() && (0 === g.duration() ? 0 < k ? v.play() : v.reverse() : g.tweenChanges() && v.tweenTo ? v.tweenTo(k * v.duration()) : v.progress(k).pause())
                }
            };
        g.setTween = function (k, b, y) {
            1 < arguments.length && (3 > arguments.length && (y = b, b = 1), k = u.to(k, b, y));
            try {
                var q = C ? (new C({smoothChildTiming: !0})).add(k) : k;
                q.pause()
            } catch (r) {
                return D(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"),
                    g
            }
            v && g.removeTween();
            v = q;
            k.repeat && -1 === k.repeat() && (v.repeat(-1), v.yoyo(k.yoyo()));
            g.tweenChanges() && !v.tweenTo && D(2, "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic.");
            if (v && g.controller() && g.triggerElement() && 2 <= g.loglevel()) {
                q = u.getTweensOf(g.triggerElement());
                var z = g.controller().info("vertical");
                q.forEach(function (a, b) {
                    var c = a.vars.css || a.vars;
                    if (z ? void 0 !== c.top || void 0 !== c.bottom : void 0 !== c.left || void 0 !== c.right)return D(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"),
                        !1
                })
            }
            if (1.14 <= parseFloat(TweenLite.version)) {
                q = v.getChildren ? v.getChildren(!0, !0, !1) : [v];
                for (var B = function () {
                    D(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another")
                }, H = 0, a, c; H < q.length; H++)a = q[H], c !== B && (c = a.vars.onOverwrite, a.vars.onOverwrite = function () {
                    c && c.apply(this, arguments);
                    B.apply(this, arguments)
                })
            }
            D(3, "added tween");
            N();
            return g
        };
        g.removeTween = function (k) {
            v && (k && v.progress(0).pause(),
                v.kill(), v = void 0, D(3, "removed tween (reset: " + (k ? "true" : "false") + ")"));
            return g
        }
    })
});



