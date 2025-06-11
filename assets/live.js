(function() {
        var f = this;
        function g(a, b) {
            a = a.split(".");
            b = b || f;
            for (var c; c = a.shift(); )
                if (null != b[c])
                    b = b[c];
                else
                    return null;
            return b
        }
        function h(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        }
        ;var yt = {};
        function k(a, b, c, d, e) {
            b ? (b = p(a, c),
            b.setAttribute("src", e),
            a.body.appendChild(b)) : c ? a.write('<script src="' + e + '" nonce="' + c + '">\x3c/script>') : a.write('<script src="' + e + '">\x3c/script>');
            d()
        }
        function q(a, b, c, d, e) {
            b ? (a = p(a, c),
            a.innerHTML = e,
            d.push(a)) : c ? a.write('<script nonce="' + c + '">' + e + "\x3c/script>") : a.write("<script>" + e + "\x3c/script>")
        }
        function p(a, b) {
            a = a.createElement("script");
            b && a.setAttribute("nonce", b);
            return a
        }
        function r(a, b) {
            var c = a.createElement("link");
            c.setAttribute("rel", "stylesheet");
            c.setAttribute("type", "text/css");
            c.setAttribute("href", b);
            a.head.appendChild(c)
        }
        ;f.CLOSURE_UNCOMPILED_DEFINES = {
            "bedrock.DEV_JS": !0
        };
        function t(a, b) {
            b = void 0 === b ? f : b;
            var c = b.loadParams;
            b.label = function(b, a) {
                return a ? a : b && b["default"] ? b["default"] : "unknown"
            }(b.labels, c.label_requested);
            var d = c.scs_path + b.label, e, l = !1, v = [], m = h(k, document, c.is_cobalt, c.csp_nonce, function() {
                c.use_reset_logic && w("resetTimeout();")
            }), w = h(q, document, c.is_cobalt, c.csp_nonce, v), C = h(r, document);
            b.resetTimeout = function() {
                b.clearTimeout(e);
                l || (e = b.setTimeout(function() {
                    var a = "local:///web.archive.org/web/20170707163722/https://network_failure.html";
                    c.is_cobalt && (a = "h5vcc://network-failure?retry-url=" + encodeURIComponent(b.location.href.split("#")[0]));
                    b.location.replace(a)
                }, 4E4))
            }
            ;
            c.use_reset_logic && (b.resetTimeout(),
            b.applicationLoaded = function() {
                l = !0;
                b.clearTimeout(e)
            }
            );
            b.initializeOrRedirect = function(c) {
                var d = g("ytcsi.tick", b);
                d && d("js_r");
                (d = g(a.initializerPath)) ? d(c) : b.location = "https://web.archive.org/web/20170707163722/http://www.youtube.com/error?src=404"
            }
            ;
            c.load_steel_api && m(d + "/api-compiled.js");
            var n = a.prodCssOverride || c.tv_css;
            c.debugjs ? (b.CLOSURE_NO_DEPS = !0,
            n && C(d + n),
            m(d + a.debugJsInitializer)) : c.devjs || (n && C(d + n),
            m(d + (a.prodJsOverride || c.tv_binary)));
            c.load_player && m(c.player_url);
            b.checkBrokenLabel = function() {
                "undefined" == typeof yt && c.label_requested && (b.location.href = b.location.href.replace(/([?&])label=[^&]+&?/, "$1stick=0&"))
            }
            ;
            w("checkBrokenLabel()");
            w("initializeOrRedirect('" + d + "');");
            c.is_cobalt && (b.onload = function() {
                for (var a = 0, b = v.length; a < b; ++a)
                    document.body.appendChild(v[a])
            }
            )
        }
        ;var u = /^\?/
          , x = /^-?(?:|0|[1-9][0-9]*)(?:\.[0-9]*)?$/;
        function y(a) {
            if ("number" === typeof a)
                return a;
            if (a && "string" === typeof a && x.test(a))
                return Number(a);
            if ("string" === typeof a && "" === a.trim())
                return a;
            var b = String(a).toLowerCase();
            return "true" === b || 1 == a ? !0 : "false" === b || 0 == a ? !1 : a
        }
        function z(a) {
            var b = {};
            if (a) {
                a = a.replace(u, "");
                a = a.split("&");
                for (var c, d = 0, e = a.length; d < e; ++d) {
                    c = a[d].split("=");
                    var l = c.shift();
                    c = y(c.join("="));
                    c = "string" == typeof c ? decodeURIComponent(c) : c;
                    b[l] = c
                }
            }
            return b
        }
        ;var A = z(f.location.hash.replace(/#[^?]*\??/, ""));
        if (A.theme && "cl" != A.theme) {
            var B = (f.location.search || "") + "&" + (f.location.hash || "").replace(/#[^?]*\??/, "")
              , D = "/tv"
              , E = z(B)
              , F = void 0;
            F = void 0 === F ? !1 : F;
            var G;
            a: {
                for (var H in E) {
                    G = !1;
                    break a
                }
                G = !0
            }
            if (!G) {
                var I = -1 == D.indexOf("?") ? "?" : "&"
                  , J = D
                  , K = void 0 === F ? !1 : F
                  , L = []
                  , M = void 0 === K ? !1 : K;
                M = void 0 === M ? !1 : M;
                var N = {}, O;
                for (O in E) {
                    var P = E[O];
                    "undefined" !== typeof P && null !== P && (M ? N[O] = y(P) : "" !== P && (N[O] = y(P || 0)))
                }
                for (var Q in N)
                    L.push(encodeURIComponent(Q) + "=" + encodeURIComponent(N[Q]));
                D = J + (I + L.join("&"))
            }
            f.location.assign(D)
        } else {
            var R = {
                initializerPath: "yt.tv.initialize"
            };
            "Google" == f.environment.brand && "Eureka" == f.environment.model ? (R.devJsInitializerModule = "yt.tv.cast.initializeChromeless",
            R.debugJsInitializer = "/chromecast-concat-bundle.js") : (R.devJsInitializerModule = "yt.tv.initializeKabuki",
            R.debugJsInitializer = "/app-concat-bundle.js");
            t(R, f)
        }
        ;
    }
    ).call(this);
