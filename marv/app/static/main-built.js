/*!
 * MARV
 * Copyright (C) 2016-2017  Ternaris, Munich, Germany
 *
 * This file is part of MARV
 *
 * MARV is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * MARV is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with MARV.  If not, see <http://www.gnu.org/licenses/>.
 */

function _asyncToGenerator(a) {
    return function() {
        var b = a.apply(this, arguments);
        return new Promise(function(a, c) {
            function d(e, f) {
                try {
                    var g = b[e](f)
                      , h = g.value
                } catch (a) {
                    return void c(a)
                }
                return g.done ? void a(h) : Promise.resolve(h).then(function(a) {
                    d("next", a)
                }, function(a) {
                    d("throw", a)
                })
            }
            return d("next")
        }
        )
    }
}
var _uAMD_m = {}
  , _uAMD_r = {}
  , define = function(a, b, c) {
    _uAMD_m[a] = [b, c]
}
  , require = function(a) {
    if (!_uAMD_m[a])
        throw new Error("Module \"" + a + "\" required, but does not exist.");
    if (!_uAMD_r[a]) {
        _uAMD_r[a] = {
            exports: {}
        };
        var b, c, e, f, d = [];
        for (c = 0,
        b = _uAMD_m[a][0],
        e = b.length; c < e; c++)
            d[c] = "module" === (f = b[c]) ? _uAMD_r[a] : "exports" === (f = b[c]) ? _uAMD_r[a].exports : require(f);
        _uAMD_m[a][1].apply(this.global || this, d)
    }
    return _uAMD_r[a].exports
};
define(0, ["exports", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42], function(a, b, c, d, e, f, g, h, i, j, k, l, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R) {
    "use strict";
    function S(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var T = S(c)
      , U = S(d)
      , V = S(e)
      , W = S(f)
      , X = S(g)
      , Y = S(h)
      , Z = S(i)
      , $ = S(j)
      , _ = S(k)
      , aa = S(l)
      , ba = S(n)
      , ca = S(o)
      , da = S(p)
      , ea = S(q)
      , fa = S(r)
      , ga = S(s)
      , ha = S(t)
      , ia = S(u)
      , ja = S(v)
      , ka = S(w)
      , la = S(x)
      , ma = S(y)
      , na = S(z)
      , oa = S(A)
      , pa = S(B)
      , qa = S(C)
      , ra = S(D)
      , sa = S(E)
      , ta = S(F)
      , ua = S(G)
      , va = S(H)
      , wa = S(I)
      , xa = S(J)
      , ya = S(K)
      , za = S(L)
      , Aa = S(M)
      , Ba = S(N)
      , Ca = S(O)
      , Da = S(P)
      , Ea = S(Q)
      , Fa = S(R);
    const Ga = b.M.create({
        version: "17.11"
    });
    Ga.components["application-route"] = T.default,
    Ga.components["button-confirm"] = U.default,
    Ga.initializers.ce = V.default,
    Ga.components["collection-route"] = W.default,
    Ga.components["compare-route"] = X.default,
    Ga.components["detail-route"] = Y.default,
    Ga.components["field-datetime"] = Z.default,
    Ga.components["field-filesize"] = $.default,
    Ga.components["field-float"] = _.default,
    Ga.components["field-int"] = aa.default,
    Ga.components["field-string"] = ba.default,
    Ga.components["field-subset"] = ca.default,
    Ga.components["field-timedelta"] = da.default,
    Ga.components["glycine-geojson"] = ea.default,
    Ga.components["glycine-surface"] = fa.default,
    Ga.components["glycine-tyler"] = ga.default,
    Ga.components["index-route"] = ha.default,
    Ga.components["input-checkbox"] = ia.default,
    Ga.components["input-control"] = ja.default,
    Ga.components["input-textarea"] = ka.default,
    Ga.components["m-hover"] = la.default,
    Ga.components["m-hscroll"] = ma.default,
    Ga.components["m-select"] = na.default,
    Ga.components["m-tag"] = oa.default,
    Ga.components["notfound-route"] = pa.default,
    Ga.components["widget-clipboard"] = ra.default,
    Ga.components["widget-comment"] = sa.default,
    Ga.components["widget-filter"] = ta.default,
    Ga.components["widget-gallery"] = ua.default,
    Ga.components["widget-image"] = va.default,
    Ga.components["widget-keyval"] = wa.default,
    Ga.components["widget-link"] = xa.default,
    Ga.components["widget-loader"] = ya.default,
    Ga.components["widget-map"] = za.default,
    Ga.components["widget-modal"] = Aa.default,
    Ga.components["widget-pre"] = Ba.default,
    Ga.components["widget-table"] = Ca.default,
    Ga.components["widget-tag"] = Da.default,
    Ga.components["widget-video"] = Ea.default,
    Ga.components["widget-waiting"] = Fa.default,
    Ga.routes = qa.default,
    a.default = Ga
}),
define(1, ["exports", 47, 45, 44, 60], function(a, b, c, d, e) {
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.M = void 0,
    Object.values || (Object.values = function(a) {
        return Object.keys(a).map(function(b) {
            return a[b]
        })
    }
    ),
    Object.entries || (Object.entries = function(a) {
        return Object.keys(a).map(function(b) {
            return [b, a[b]]
        })
    }
    );
    class f extends c.O {
        constructor() {
            super(),
            this.id = 1,
            this.components = d.components,
            this.helpers = b.helpers,
            this.initializers = {},
            this.singletons = {},
            this.rootElement = "body",
            this.actions = {
                id: 0
            },
            this.loops = [],
            this.afterRender = []
        }
        documentReady() {
            const a = document.querySelector(this.rootElement) || document.body;
            for (let a of Object.values(this.initializers))
                a.apply(this);
            return this.router = e.Router.create({
                __owner__: this,
                routes: this.routes
            }),
            this.rootNode = this.lookup("application-route"),
            this.rootNode.__doc__ = document,
            this.rootNode.__parentElement__ = a,
            this.rootNode.__parentNode__ = null,
            this.rootNode.modelHook(),
            this.rootNode.render(),
            window.onpopstate = ()=>this.router.updateFromLocation(),
            this.router.updateFromLocation()
        }
        lookup(a) {
            if (!this.singletons[a]) {
                let b = this.components[a];
                this.singletons[a] = b ? b.create({
                    __name: a,
                    tagName: a,
                    __owner__: this
                }) : d.RoutableComponent.create({
                    __name: a,
                    __owner__: this,
                    template: `Autogenerated routable component ${a} <div class="${a}">{{outlet}}</div>`
                })
            }
            return this.singletons[a]
        }
        init() {
            if (~["interactive", "complete"].indexOf(document.readyState))
                setTimeout(()=>this.documentReady(), 0);
            else {
                const a = document.onreadystatechange;
                document.onreadystatechange = ()=>{
                    a && a(),
                    ~["interactive", "complete"].indexOf(document.readyState) && (document.onreadystatechange = a,
                    this.documentReady())
                }
            }
        }
        asyncEvent(a) {
            const b = this;
            return function(c) {
                a.call(this, c),
                b.loops.length || b.loops.push(setTimeout(()=>{
                    b.update()
                }
                , 0))
            }
        }
        addAfterRender(a) {
            this.afterRender.push(a)
        }
        update() {
            this.loops.pop(),
            this.rootNode.update(),
            this.afterRender.forEach((a)=>a()),
            this.afterRender = []
        }
        ajax(a) {
            return _asyncToGenerator(function*() {
                const b = a.method || "GET"
                  , c = Object.assign({}, a.headers);
                let d = a.url;
                if ("GET" === b && a.data) {
                    const b = [];
                    for (let[c,d] of Object.entries(a.data))
                        b.push(`${c}=${encodeURIComponent(d)}`);
                    d += `?${b.join("&")}`
                }
                let e;
                "GET" !== b && a.data && (c["Content-Type"] = "application/json;charset=UTF-8",
                e = JSON.stringify(a.data));
                let f;
                try {
                    f = yield fetch(d, {
                        method: b,
                        headers: c,
                        body: e
                    })
                } catch (a) {
                    throw {
                        status: 600,
                        error: "Cannot connect to server"
                    }
                }
                if (f.ok)
                    return "arraybuffer" === a.responseType ? yield f.arrayBuffer() : yield f.json();
                else {
                    const a = {
                        status: f.status,
                        error: f.statusText
                    };
                    throw a
                }
            })()
        }
    }
    a.M = f
}),
define(10, ["exports", 44], function(a, b) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.default = class extends b.Component {
        constructor() {
            super(),
            this.template = `PGlucHV0LWNvbnRyb2wgY2xhc3M9ImZvcm0tY29udHJvbCIgdmFsdWU9e3t2YWx1ZX19IGNoYW5nZUFjdGlvbj17eyJmbiIgbUNoYW5nZUFjdGlvbn19IC8+`
        }
        mChangeAction(a) {
            isNaN(+a) ? this.changeErrorAction("Value must be a number") : this.changeErrorAction(null),
            this.changeAction(a)
        }
    }
}),
define(11, ["exports", 44], function(a, b) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.default = class extends b.Component {
        constructor() {
            super(),
            this.template = `PGlucHV0LWNvbnRyb2wgY2xhc3M9ImZvcm0tY29udHJvbCIgdmFsdWU9e3t2YWx1ZX19IGNoYW5nZUFjdGlvbj17eyJmbiIgbUNoYW5nZUFjdGlvbn19IC8+`
        }
        mChangeAction(a) {
            isNaN(+a) ? this.changeErrorAction("Value must be a number") : this.changeErrorAction(null),
            this.changeAction(a)
        }
    }
}),
define(12, ["exports", 44], function(a, b) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    class c extends b.Component {
        constructor() {
            super(),
            this.template = `PGlucHV0LWNvbnRyb2wgY2xhc3M9ImZvcm0tY29udHJvbCIgdmFsdWU9e3t2YWx1ZX19IGNoYW5nZUFjdGlvbj17eyJmbiIgbUNoYW5nZUFjdGlvbn19IC8+`
        }
        mChangeAction(a) {
            this.changeAction(a ? a : a)
        }
    }
    a.default = c
}),
define(13, ["exports", 44, 45], function(a, b, c) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.default = class extends b.Component {
        constructor() {
            super(),
            this.template = `PG0tdGFnIHRhZ3M9e3t2YWx1ZX19IHN1Z2dlc3Rpb25zPXt7Y29uc3RyYWludHN9fSBzdWJzZXQ9dHJ1ZSBhZGRBY3Rpb249e3siZm4iIGFkZH19IHJlbW92ZUFjdGlvbj17eyJmbiIgcmVtb3ZlfX0gLz4=`
        }
        add(a) {
            this.value.push(a),
            this.changeAction(c.A.create(this.value))
        }
        remove(a) {
            this.value.splice(this.value.indexOf(a), 1),
            this.changeAction(c.A.create(this.value))
        }
    }
}),
define(14, ["exports", 44, 45], function(a, b, c) {
    "use strict";
    function d(a) {
        if ("" === a)
            return "";
        else {
            const b = e.exec(a);
            return b ? 3600 * (b[1] || 0) + 60 * (b[2] || 0) + 1 * (b[3] || 0) : NaN
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    const e = /^\s*(?:(\d+)\s*h)?\s*(?:(\d+)\s*m)?\s*(?:(\d+)\s*s?)?\s*$/;
    class f extends b.Component {
        constructor() {
            super(),
            this.template = `PGRpdiBjbGFzcz0icm93Ij4gPGRpdiBjbGFzcz0iY29sLXhzLTkiPiA8aW5wdXQtY29udHJvbCBjbGFzcz0iZm9ybS1jb250cm9sIiB2YWx1ZT17e3ZhbHVlfX0gY2hhbmdlQWN0aW9uPXt7ImZuIiBtQ2hhbmdlQWN0aW9ufX0gLz4gPC9kaXY+IDxkaXYgY2xhc3M9ImNvbC14cy0zIj4gPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHZhbHVlPXt7c2l6ZX19IGRpc2FibGVkPXRydWU+IDwvZGl2PiA8L2Rpdj4=`,
            this.size = (0,
            c.computed)("value", function() {
                const a = d(this.value);
                return a ? `${a} seconds` : ""
            })
        }
        mChangeAction(a) {
            const b = d(a);
            isNaN(b) ? this.changeErrorAction("Value must be a number with optional modifiers (e.g. 1h 30m)") : this.changeErrorAction(null),
            this.changeAction(a)
        }
    }
    a.default = f
}),
define(15, ["exports", 44, 45, 16], function(a, b, c, d) {
    "use strict";
    var e = Math.PI;
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    const f = `I3ZlcnNpb24gMzAwIGVzCiBpbiB2ZWM0IGFfcG9zaXRpb247CiBpbiB2ZWMzIGFfbm9ybWFsOwogaW4gdmVjNCBhX2NvbG9yOwoKIHVuaWZvcm0gbWF0NCB1X21hdHJpeDsKIHVuaWZvcm0gdmVjMiB1X29yaWdpbjsKIHVuaWZvcm0gdmVjNCB1X2NvbG9yOwoKIG91dCB2ZWMzIHZfbm9ybWFsOwogb3V0IHZlYzQgdl9jb2xvcjsKCiB2b2lkIG1haW4oKSB7CiBnbF9Qb3NpdGlvbiA9IHVfbWF0cml4ICogYV9wb3NpdGlvbjsKIGdsX1BvaW50U2l6ZSA9IDMuOwogdl9ub3JtYWwgPSBhX25vcm1hbDsKIGlmICh1X2NvbG9yLncgPT0gMC4pIHsKIHZfY29sb3IgPSBhX2NvbG9yOwogfSBlbHNlIHsKIHZfY29sb3IgPSB1X2NvbG9yOwogfQogfQ==`
      , g = `I3ZlcnNpb24gMzAwIGVzCiBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDsKCiBpbiB2ZWM0IHZfY29sb3I7CiBpbiB2ZWMzIHZfbm9ybWFsOwogb3V0IHZlYzQgb3V0Q29sb3I7CiB2b2lkIG1haW4oKSB7CiAvKnZlYzMgbm9ybWFsID0gbm9ybWFsaXplKHZfbm9ybWFsKTsKIGZsb2F0IGxpZ2h0ID0gZG90KG5vcm1hbCwgbm9ybWFsaXplKHZlYzMoLTEuLCAtMS4sIDEpKSk7Cgogb3V0Q29sb3IgPSB2X2NvbG9yOwogaWYgKGRvdCh2X25vcm1hbCwgdmVjMygxLiwgMS4sIDEuKSkgIT0gMC4pIHsKIG91dENvbG9yLnJnYiAqPSBsaWdodCArIDAuNzsKIH0qLwogb3V0Q29sb3IgPSB2X2NvbG9yOwogfQ==`
      , h = `I3ZlcnNpb24gMzAwIGVzCiBpbiB2ZWM0IGFfcG9zaXRpb247CgogdW5pZm9ybSBtYXQ0IHVfbWF0cml4OwogdW5pZm9ybSB2ZWMyIHVfb3JpZ2luOwogdW5pZm9ybSB2ZWM0IHVfY29sb3I7CiB1bmlmb3JtIGZsb2F0IHVfcm90YXRpb247CiB1bmlmb3JtIG1hdDQgdV9zY2FsZTsKCiBvdXQgdmVjMyB2X25vcm1hbDsKIG91dCB2ZWM0IHZfY29sb3I7CgogbWF0NCByb3QoZmxvYXQgYW5nbGUpCiB7CiBmbG9hdCBzID0gc2luKGFuZ2xlKTsKIGZsb2F0IGMgPSBjb3MoYW5nbGUpOwoKIHJldHVybiBtYXQ0KAogYywgcywgMC4sIDAuLAogLXMsIGMsIDAuLCAwLiwKIDAuLCAwLiwgMS4sIDAuLAogMC4sIDAuLCAwLiwgMS4KICk7CiB9Cgogdm9pZCBtYWluKCkgewogZ2xfUG9zaXRpb24gPSB1X21hdHJpeCAqICh2ZWM0KHVfb3JpZ2luLCAwLCAwKSArIHJvdCh1X3JvdGF0aW9uKSAqIHVfc2NhbGUgKiBhX3Bvc2l0aW9uKTsKIHZfY29sb3IgPSB1X2NvbG9yOwogfQ==`
      , i = new Float32Array([0, 0, -1, 0.3, -1, -0.3]);
    class j extends b.Component {
        constructor() {
            super(),
            this.template = null,
            this.layerWorld = (0,
            c.computed)("timeRange", "features", function() {
                for (let a of this.features)
                    if (a.timecode && a.orientation) {
                        const b = this.timeRange[1];
                        let c = a.num - 1;
                        for (; a.timecode[c] > b && 0 < c; )
                            c--;
                        const f = a.orientation.origins[c].concat([-0.1])
                          , g = a.orientation.rotations[c] / 180 * e
                          , h = [f[0] + Math.cos(g), f[1] + Math.sin(g), f[2]]
                          , {width: i, height: j} = this.gl.canvas;
                        let k = (0,
                        d.identity)();
                        return k = (0,
                        d.multiply)(k, (0,
                        d.perspective)(e / 2, i / j, 1, 1e6)),
                        k = (0,
                        d.multiply)(k, (0,
                        d.lookAt2)(f, h, [0, 0, 1])),
                        k = (0,
                        d.multiply)(k, (0,
                        d.scaling)(1, 1, 100)),
                        k
                    }
                return null
            })
        }
        didInsertElement() {
            this.add(this);
            const a = this.gl
              , b = (0,
            d.createProgram)(a, h, g)
              , c = a.getAttribLocation(b, "a_position")
              , e = a.getUniformLocation(b, "u_matrix")
              , j = a.getUniformLocation(b, "u_origin")
              , k = a.getUniformLocation(b, "u_rotation")
              , l = a.getUniformLocation(b, "u_color")
              , m = a.getUniformLocation(b, "u_scale")
              , n = a.createVertexArray();
            a.bindVertexArray(n);
            const o = a.createBuffer();
            a.bindBuffer(a.ARRAY_BUFFER, o),
            a.bufferData(a.ARRAY_BUFFER, i, a.STATIC_DRAW),
            a.enableVertexAttribArray(c),
            a.vertexAttribPointer(c, 2, a.FLOAT, !1, 0, 0);
            const p = (0,
            d.createProgram)(a, f, g)
              , q = a.getAttribLocation(p, "a_position")
              , r = a.getAttribLocation(p, "a_normal")
              , s = a.getAttribLocation(p, "a_color")
              , t = a.getUniformLocation(p, "u_matrix")
              , u = a.getUniformLocation(p, "u_origin")
              , v = a.getUniformLocation(p, "u_color");
            this.features = this.model.geojson.features.map((c)=>{
                const {geometry: f, properties: g} = c
                  , h = a.createVertexArray()
                  , i = a.createBuffer()
                  , o = a.createBuffer();
                a.bindVertexArray(h);
                let w, x, y;
                if ("LineString" === f.type) {
                    y = f.coordinates[0];
                    const b = new Float32Array(2 * f.coordinates.length);
                    f.coordinates.forEach((a,c)=>b.set([a[0] - y[0], a[1] - y[1]], 2 * c)),
                    a.bindBuffer(a.ARRAY_BUFFER, i),
                    a.bufferData(a.ARRAY_BUFFER, b, a.STATIC_DRAW),
                    a.enableVertexAttribArray(q),
                    a.vertexAttribPointer(q, 2, a.FLOAT, !1, 0, 0),
                    c.properties.colors && (a.bindBuffer(a.ARRAY_BUFFER, o),
                    a.bufferData(a.ARRAY_BUFFER, Uint8Array.from(c.properties.colors.reduce((a,b)=>a.concat([b[0], b[1], b[2], b[3] || 255]), [])), a.STATIC_DRAW),
                    a.enableVertexAttribArray(s),
                    a.vertexAttribPointer(s, 4, a.UNSIGNED_BYTE, !0, 0, 0)),
                    w = a.LINE_STRIP,
                    x = f.coordinates.length
                } else if ("Polygon-Up" === f.type) {
                    let b = f.coordinates[0].slice(0, -1);
                    y = b[0];
                    const e = 12 + 4 * (b.length - 4)
                      , g = new Float32Array(9 * e)
                      , h = a.createBuffer()
                      , j = new Float32Array(9 * e)
                      , k = 0;
                    let l = 0;
                    for (let a = 1; a < b.length - 1; a++) {
                        const c = b[a]
                          , e = b[a + 1];
                        let f;
                        g.set([0, 0, 0], 3 * l),
                        j.set([0, 0, 1], 3 * l),
                        l++,
                        g.set([c[0] - y[0], c[1] - y[1], 0], 3 * l),
                        j.set([0, 0, 1], 3 * l),
                        l++,
                        g.set([e[0] - y[0], e[1] - y[1], 0], 3 * l),
                        j.set([0, 0, 1], 3 * l),
                        l++,
                        g.set([0, 0, k], 3 * l),
                        j.set([0, 0, 1], 3 * l),
                        l++,
                        g.set([c[0] - y[0], c[1] - y[1], k], 3 * l),
                        j.set([0, 0, 1], 3 * l),
                        l++,
                        g.set([e[0] - y[0], e[1] - y[1], k], 3 * l),
                        j.set([0, 0, 1], 3 * l),
                        l++,
                        f = (0,
                        d.cross)([e[0] - c[0], e[1] - c[1], 0], [0, 0, k]),
                        g.set([c[0] - y[0], c[1] - y[1], 0], 3 * l),
                        j.set(f, 3 * l),
                        l++,
                        g.set([e[0] - y[0], e[1] - y[1], 0], 3 * l),
                        j.set(f, 3 * l),
                        l++,
                        g.set([c[0] - y[0], c[1] - y[1], k], 3 * l),
                        j.set(f, 3 * l),
                        l++,
                        g.set([e[0] - y[0], e[1] - y[1], 0], 3 * l),
                        j.set(f, 3 * l),
                        l++,
                        g.set([e[0] - y[0], e[1] - y[1], k], 3 * l),
                        j.set(f, 3 * l),
                        l++,
                        g.set([c[0] - y[0], c[1] - y[1], k], 3 * l),
                        j.set(f, 3 * l),
                        l++,
                        1 === a && (f = (0,
                        d.cross)([c[0], c[1], 0], [0, 0, k]),
                        g.set([0, 0, 0], 3 * l),
                        j.set(f, 3 * l),
                        l++,
                        g.set([c[0] - y[0], c[1] - y[1], 0], 3 * l),
                        j.set(f, 3 * l),
                        l++,
                        g.set([0, 0, k], 3 * l),
                        j.set(f, 3 * l),
                        l++,
                        g.set([c[0] - y[0], c[1] - y[1], 0], 3 * l),
                        j.set(f, 3 * l),
                        l++,
                        g.set([c[0] - y[0], c[1] - y[1], k], 3 * l),
                        j.set(f, 3 * l),
                        l++,
                        g.set([0, 0, k], 3 * l),
                        j.set(f, 3 * l),
                        l++),
                        a === b.length - 2 && (f = (0,
                        d.cross)([-e[0], -e[1], 0], [0, 0, k]),
                        g.set([e[0] - y[0], e[1] - y[1], 0], 3 * l),
                        j.set(f, 3 * l),
                        l++,
                        g.set([0, 0, 0], 3 * l),
                        j.set(f, 3 * l),
                        l++,
                        g.set([e[0] - y[0], e[1] - y[1], k], 3 * l),
                        j.set(f, 3 * l),
                        l++,
                        g.set([0, 0, 0], 3 * l),
                        j.set(f, 3 * l),
                        l++,
                        g.set([0, 0, k], 3 * l),
                        j.set(f, 3 * l),
                        l++,
                        g.set([e[0] - y[0], e[1] - y[1], k], 3 * l),
                        j.set(f, 3 * l),
                        l++)
                    }
                    a.bindBuffer(a.ARRAY_BUFFER, h),
                    a.bufferData(a.ARRAY_BUFFER, j, a.STATIC_DRAW),
                    a.enableVertexAttribArray(r),
                    a.vertexAttribPointer(r, 3, a.FLOAT, !1, 0, 0),
                    a.bindBuffer(a.ARRAY_BUFFER, i),
                    a.bufferData(a.ARRAY_BUFFER, g, a.STATIC_DRAW),
                    a.enableVertexAttribArray(q),
                    a.vertexAttribPointer(q, 3, a.FLOAT, !1, 0, 0),
                    c.properties.colors && (a.bindBuffer(a.ARRAY_BUFFER, o),
                    a.bufferData(a.ARRAY_BUFFER, Uint8Array.from(c.properties.colors.reduce((a,b)=>a.concat([b[0], b[1], b[2], b[3] || 255]), [])), a.STATIC_DRAW),
                    a.enableVertexAttribArray(s),
                    a.vertexAttribPointer(s, 4, a.UNSIGNED_BYTE, !0, 0, 0)),
                    w = a.TRIANGLES,
                    x = 3 * e
                } else if ("Polygon" === f.type) {
                    let b = f.coordinates[0].slice(0, -1);
                    y = b[0];
                    const d = new Float32Array(2 * b.length);
                    b.forEach((a,b)=>d.set([a[0] - y[0], a[1] - y[1]], 2 * b)),
                    a.bindBuffer(a.ARRAY_BUFFER, i),
                    a.bufferData(a.ARRAY_BUFFER, d, a.STATIC_DRAW),
                    a.enableVertexAttribArray(q),
                    a.vertexAttribPointer(q, 2, a.FLOAT, !1, 0, 0),
                    c.properties.colors && (a.bindBuffer(a.ARRAY_BUFFER, o),
                    a.bufferData(a.ARRAY_BUFFER, Uint8Array.from(c.properties.colors.reduce((a,b)=>a.concat([b[0], b[1], b[2], b[3] || 255]), [])), a.STATIC_DRAW),
                    a.enableVertexAttribArray(s),
                    a.vertexAttribPointer(s, 4, a.UNSIGNED_BYTE, !0, 0, 0)),
                    w = a.TRIANGLE_FAN,
                    x = d.length / 2
                } else
                    throw new Error(`GeoJSON type ${f.type} not supported yet`);
                let z, A;
                z = g.color.length ? Float32Array.from(g.color.map((a)=>a / 255)) : Float32Array.from([1, 1, 1, 1]),
                A = g.fillcolor.length ? Float32Array.from(g.fillcolor.map((a)=>a / 255)) : z.map((a,b)=>3 === b ? 0.8 * a : a),
                z = z.map((a,b)=>3 === b ? a : z[3] * a),
                A = A.map((a,b)=>3 === b ? a : A[3] * a);
                let B;
                return g.orientation && (B = {
                    origins: f.coordinates,
                    rotations: g.orientation,
                    program: b,
                    type: a.TRIANGLES,
                    num: 3,
                    vao: n,
                    matloc: e,
                    oriloc: j,
                    ucoloc: l,
                    rotloc: k,
                    scaloc: m,
                    ucoval: z,
                    timecode: g.timecode,
                    transform: (0,
                    d.multiply)([g.markersize || 1, 0, 0, 0, 0, g.markersize || 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], this.model.transform || d.identity),
                    weight: g.weight
                }),
                w === a.TRIANGLE_FAN ? [{
                    program: p,
                    type: w,
                    num: x,
                    vao: h,
                    matloc: t,
                    oriloc: u,
                    ucoloc: v,
                    ucoval: A,
                    c0: y,
                    orientation: B,
                    timecode: g.timecode,
                    transform: this.model.transform || (0,
                    d.identity)(),
                    weight: g.weight
                }, {
                    program: p,
                    type: a.LINE_LOOP,
                    num: x,
                    vao: h,
                    matloc: t,
                    oriloc: u,
                    ucoloc: v,
                    ucoval: z,
                    c0: y,
                    orientation: B,
                    timecode: g.timecode,
                    transform: this.model.transform || (0,
                    d.identity)(),
                    weight: g.weight
                }] : [{
                    program: p,
                    type: w,
                    num: x,
                    vao: h,
                    matloc: t,
                    oriloc: u,
                    ucoloc: v,
                    ucoval: z,
                    c0: y,
                    orientation: B,
                    timecode: g.timecode,
                    transform: this.model.transform || (0,
                    d.identity)(),
                    weight: g.weight
                }]
            }
            ).reduce((a,b)=>a.concat(b))
        }
        willRemoveElement() {
            this.remove(this)
        }
        glRender() {
            if (this.model.hidden)
                return;
            const a = this.gl;
            let b = null;
            this.features.forEach((c,e)=>{
                const [f,g] = c.c0
                  , h = (0,
                d.multiply)((0,
                d.multiply)(this.world, (0,
                d.translation)(f, g, -0.999 + this.index / 16 + e / 65536)), c.transform);
                a.useProgram(c.program),
                a.uniformMatrix4fv(c.matloc, !1, h),
                a.uniform4fv(c.ucoloc, c.ucoval),
                a.bindVertexArray(c.vao),
                a.lineWidth(c.weight);
                let i = 0
                  , j = c.num;
                j && (a.drawArrays(c.type, i, j),
                c.orientation && (b = {
                    vector: c.orientation,
                    start: i,
                    count: j
                }))
            }
            )
        }
    }
    a.default = j
}),
define(16, ["exports", 44, 45], function(a, b, c) {
    "use strict";
    function d() {
        return Array.from({
            length: 16
        }, (a,b)=>1 & 33825 >> b)
    }
    function e(a, b, c) {
        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, a, b, c, 1]
    }
    function f(c, a) {
        const [b,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r] = c
          , [s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H] = a;
        return [s * b + t * g + u * k + v * o, s * d + t * h + u * l + v * p, s * e + t * i + u * m + v * q, s * f + t * j + u * n + v * r, w * b + x * g + y * k + z * o, w * d + x * h + y * l + z * p, w * e + x * i + y * m + z * q, w * f + x * j + y * n + z * r, A * b + B * g + C * k + D * o, A * d + B * h + C * l + D * p, A * e + B * i + C * m + D * q, A * f + B * j + C * n + D * r, E * b + F * g + G * k + H * o, E * d + F * h + G * l + H * p, E * e + F * i + G * m + H * q, E * f + F * j + G * n + H * r]
    }
    function g(c, a) {
        const [b,d,e] = c
          , [f,g,h] = a;
        return [d * h - e * g, e * f - b * h, b * g - d * f]
    }
    function h(c, a) {
        return [c[0] - a[0], c[1] - a[1], c[2] - a[2]]
    }
    function i(a) {
        const [b,c,d] = a;
        var e = m(m(b, 2) + m(c, 2) + m(d, 2), .5);
        return 1e-5 < e ? [b / e, c / e, d / e] : [0, 0, 0]
    }
    function j(a, b, c) {
        /^#/.test(c) || (c = atob(c));
        const d = a.createShader(b);
        a.shaderSource(d, c),
        a.compileShader(d);
        const e = a.getShaderParameter(d, a.COMPILE_STATUS);
        if (!e)
            throw new Error(`Error compiling "${c}" -- "${a.getShaderInfoLog(d)}"`);
        return d
    }
    function k(a, b, c) {
        const d = a.createProgram();
        a.attachShader(d, j(a, a.VERTEX_SHADER, b)),
        a.attachShader(d, j(a, a.FRAGMENT_SHADER, c)),
        a.linkProgram(d);
        const e = a.getProgramParameter(d, a.LINK_STATUS);
        if (!e)
            throw new Error(`Error linking "${b + c}" -- "${a.getProgramInfoLog(d)}"`);
        return d
    }
    function l(a) {
        const b = a.getOwner()
          , c = a.gl.canvas
          , d = b.asyncEvent((d)=>{
            if (0 !== d.button)
                return;
            let e = d.clientX
              , f = d.clientY;
            const g = b.asyncEvent((b)=>{
                const c = b.clientX - e
                  , d = b.clientY - f;
                e = b.clientX,
                f = b.clientY,
                a.panAndZoom(c, -d, 0)
            }
            )
              , h = b.asyncEvent(()=>{
                c.removeEventListener("mousemove", g),
                document.removeEventListener("mouseup", h)
            }
            );
            c.addEventListener("mousemove", g),
            document.addEventListener("mouseup", h),
            d.stopPropagation(),
            d.preventDefault()
        }
        );
        c.addEventListener("mousedown", d);
        const e = b.asyncEvent((b)=>{
            const d = (c.clientWidth >> 1) - b.offsetX
              , e = (c.clientHeight >> 1) - b.offsetY;
            a.panAndZoom(d, -e, 0 > b.deltaY ? -1 : 1),
            b.stopPropagation(),
            b.preventDefault()
        }
        );
        c.addEventListener("wheel", e)
    }
    var m = Math.pow
      , n = Math.sin
      , o = Math.cos;
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.Origin = void 0,
    a.identity = d,
    a.inverse = function(a) {
        const [b,c,e,f,g,h,i,j,k,l,m,n,o,p,q,r] = a
          , s = m * r
          , t = q * n
          , u = i * r
          , v = q * j
          , w = i * n
          , x = m * j
          , y = e * r
          , z = q * f
          , A = e * n
          , B = m * f
          , C = e * j
          , D = i * f
          , E = k * p
          , F = o * l
          , G = g * p
          , H = o * h
          , I = g * l
          , J = k * h
          , K = b * p
          , L = o * c
          , M = b * l
          , N = k * c
          , O = b * h
          , P = g * c
          , Q = s * h + v * l + w * p - (t * h + u * l + x * p)
          , R = t * c + y * l + B * p - (s * c + z * l + A * p)
          , S = u * c + z * h + C * p - (v * c + y * h + D * p)
          , T = x * c + A * h + D * l - (w * c + B * h + C * l)
          , U = 1 / (b * Q + g * R + k * S + o * T);
        return [U * Q, U * R, U * S, U * T, U * (t * g + u * k + x * o - (s * g + v * k + w * o)), U * (s * b + z * k + A * o - (t * b + y * k + B * o)), U * (v * b + y * g + D * o - (u * b + z * g + C * o)), U * (w * b + B * g + C * k - (x * b + A * g + D * k)), U * (E * j + H * n + I * r - (F * j + G * n + J * r)), U * (F * f + K * n + N * r - (E * f + L * n + M * r)), U * (G * f + L * j + O * r - (H * f + K * j + P * r)), U * (J * f + M * j + P * n - (I * f + N * j + O * n)), U * (G * m + J * q + F * i - (I * q + E * i + H * m)), U * (M * q + E * e + L * m - (K * m + N * q + F * e)), U * (K * i + P * q + H * e - (O * q + G * e + L * i)), U * (O * m + I * e + N * i - (M * i + P * m + J * e))]
    }
    ,
    a.perspective = function(a, b, c, d) {
        const e = Math.tan(0.5 * (Math.PI - a))
          , f = 1 / (c - d);
        return [e / b, 0, 0, 0, 0, e, 0, 0, 0, 0, (c + d) * f, -1, 0, 0, 2 * (c * d * f), 0]
    }
    ,
    a.orthographic = function(a, b, c, d) {
        return [2 / a, 0, 0, 0, 0, 2 / b, 0, 0, 0, 0, -2 / (d - c), 0, 0, 0, 0, 1]
    }
    ,
    a.translation = e,
    a.xRotation = function(a) {
        const b = o(a)
          , c = n(a);
        return [1, 0, 0, 0, 0, b, c, 0, 0, -c, b, 0, 0, 0, 0, 1]
    }
    ,
    a.yRotation = function(a) {
        const b = o(a)
          , c = n(a);
        return [b, 0, -c, 0, 0, 1, 0, 0, c, 0, b, 0, 0, 0, 0, 1]
    }
    ,
    a.zRotation = function(a) {
        const b = o(a)
          , c = n(a);
        return [b, c, 0, 0, -c, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }
    ,
    a.scaling = function(a, b, c) {
        return [a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1]
    }
    ,
    a.multiply = f,
    a.cross = g,
    a.minus = h,
    a.normalize = i,
    a.lookAt2 = function(a, b, c) {
        const d = i(h(b, a))
          , j = i(g(d, c))
          , k = i(g(j, d))
          , l = [j[0], k[0], -d[0], 0, j[1], k[1], -d[1], 0, j[2], k[2], -d[2], 0, 0, 0, 0, 1];
        return f(l, e(-a[0], -a[1], -a[2]))
    }
    ,
    a.transformVector = function(a, b) {
        for (var c = [], d = 0; 4 > d; ++d) {
            c[d] = 0;
            for (var e = 0; 4 > e; ++e)
                c[d] += b[e] * a[4 * e + d]
        }
        return c
    }
    ,
    a.loadShader = j,
    a.createProgram = k,
    a.addPanAndZoomEvents = l;
    a.Origin = class {
        constructor(a) {
            this.surface = a;
            const b = a.gl
              , c = `I3ZlcnNpb24gMzAwIGVzCiBpbiB2ZWM0IGFfcG9zaXRpb247CiBpbiB2ZWM0IGFfY29sb3I7CiBvdXQgdmVjNCB2X2NvbG9yOwoKIHVuaWZvcm0gbWF0NCB1X21hdHJpeDsKCiB2b2lkIG1haW4oKSB7CiBnbF9Qb3NpdGlvbiA9IHVfbWF0cml4ICogYV9wb3NpdGlvbjsKIHZfY29sb3IgPSBhX2NvbG9yOwogfQ==`
              , d = `I3ZlcnNpb24gMzAwIGVzCiBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDsKCiBpbiB2ZWM0IHZfY29sb3I7CiBvdXQgdmVjNCBvdXRDb2xvcjsKCiB2b2lkIG1haW4oKSB7CiBvdXRDb2xvciA9IHZfY29sb3I7CiB9`;
            this.program = k(b, c, d);
            const e = b.getAttribLocation(this.program, "a_position")
              , f = b.getAttribLocation(this.program, "a_color");
            this.matloc = b.getUniformLocation(this.program, "u_matrix"),
            this.vao = b.createVertexArray(),
            b.bindVertexArray(this.vao);
            const g = b.createBuffer();
            b.bindBuffer(b.ARRAY_BUFFER, g),
            b.bufferData(b.ARRAY_BUFFER, new Float32Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1]), b.STATIC_DRAW),
            b.enableVertexAttribArray(e),
            b.vertexAttribPointer(e, 3, b.FLOAT, !1, 0, 0);
            const h = b.createBuffer();
            b.bindBuffer(b.ARRAY_BUFFER, h),
            b.bufferData(b.ARRAY_BUFFER, new Uint8Array([1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1]), b.STATIC_DRAW),
            b.enableVertexAttribArray(f),
            b.vertexAttribPointer(f, 3, b.UNSIGNED_BYTE, !1, 0, 0)
        }
        glRender() {
            const {surface: a, program: b, matloc: c, vao: d} = this
              , {gl: e, world: f} = a;
            e.useProgram(b),
            e.uniformMatrix4fv(c, !1, f),
            e.bindVertexArray(d),
            e.drawArrays(e.LINES, 0, 6)
        }
    }
    ;
    class p extends b.Component {
        constructor() {
            super(),
            this.template = "PGNhbnZhcz48eWllbGQtYmxvY2sgcGFyYW1zPXt7Z2wgYWRkIHJlbW92ZSB3b3JsZH19IC8+e3tkaXJ0eX19PC9jYW52YXM+",
            this.children = c.A.create(),
            this.add = (a)=>this.children.push(a),
            this.remove = (a)=>this.children.splice(this.children.indexOf(a), 1),
            this.gl = (0,
            c.computed)(function() {
                const a = this.getElement().querySelector("canvas")
                  , b = {};
                let c = a.getContext("webgl2", b) || a.getContext("experimental-webgl2", b);
                if (!c) {
                    if (c = a.getContext("webgl", b) || a.getContext("experimental-webgl", b),
                    !c) {
                        const b = a.getContext("2d");
                        return a.width = a.clientWidth,
                        a.height = a.clientHeight,
                        b.font = "48px serif",
                        b.fillText("No WebGL 1.0 support detected", 50, 50, a.width - 200),
                        null
                    }
                    c.shaderSource = (a,b)=>(b = b.replace(/#version 300 es/, ""),
                    b = /precision/.test(b) ? b.replace(/in /g, "varying ").replace(/out [^;]*;/g, "").replace(/outColor/g, "gl_FragColor").replace(/texture\(/g, "texture2D(") : b.replace(/in /g, "attribute ").replace(/out /g, "varying "),
                    WebGLRenderingContext.prototype.shaderSource.call(c, a, b));
                    const d = c.getExtension("OES_vertex_array_object");
                    c.bindVertexArray = (...a)=>d.bindVertexArrayOES(...a),
                    c.createVertexArray = (...a)=>d.createVertexArrayOES(...a)
                }
                return c
            }),
            this.dirty = (0,
            c.computed)("world", "children.@each.dirty", function() {
                this.resize(),
                !this.reqid && (this.oldWorld !== this.world || this.children.filter((a)=>a.dirty).length) && (this.oldWorld = this.world,
                this.reqid = requestAnimationFrame(this.animateCb))
            }),
            this.clearColor = (0,
            c.computed)("model.bgcolor", function() {
                const a = this.model && this.model.bgcolor;
                if (a && a.length) {
                    if ("string" == typeof a) {
                        const b = parseInt(a.slice(1), 16);
                        return [(255 & b >> 16) / 255, (255 & b >> 8) / 255, (255 & b) / 255, 1]
                    }
                    return a.map((a)=>a / 255)
                }
                return [0, 0, 0, 1]
            }),
            this.world = d()
        }
        init() {
            super.init(),
            this.animateCb = this.getOwner().asyncEvent(()=>this.animate()),
            this.resizeCb = this.getOwner().asyncEvent(()=>this.resize())
        }
        resize() {
            const a = this.gl.canvas
              , b = window.devicePixelRatio
              , c = a.clientWidth * b
              , d = a.clientHeight * b;
            (a.width !== c || a.height !== d) && (this.width = a.width = c,
            this.height = a.height = d)
        }
        animate() {
            const a = this.gl;
            a.viewport(0, 0, a.canvas.width, a.canvas.height),
            a.clearColor(...this.clearColor),
            a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT),
            a.enable(a.DEPTH_TEST),
            a.enable(a.CULL_FACE),
            a.enable(a.BLEND),
            a.blendFunc(a.ONE, a.ONE_MINUS_SRC_ALPHA),
            this.children.forEach((a)=>{
                a.glRender(),
                a.dirty = !1
            }
            ),
            this.dirty = !1,
            this.reqid = null
        }
        didInsertElement() {
            this.resize(),
            window.addEventListener("resize", this.resizeCb),
            l(this)
        }
        willRemoveElement() {
            window.removeEventListener("resize", this.resizeCb),
            cancelAnimationFrame(this.reqid)
        }
    }
    a.default = p
}),
define(17, ["exports", 44, 45, 16], function(a, b, c, d) {
    "use strict";
    var f = Math.pow;
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    const e = `I3ZlcnNpb24gMzAwIGVzCiBpbiB2ZWM0IGFfcG9zaXRpb247CiBpbiB2ZWMyIGFfdGV4Y29vcmQ7CgogdW5pZm9ybSBtYXQ0IHVfbWF0cml4OwoKIG91dCB2ZWMyIHZfdGV4Y29vcmQ7Cgogdm9pZCBtYWluKCkgewogZ2xfUG9zaXRpb24gPSB1X21hdHJpeCAqIGFfcG9zaXRpb247CiB2X3RleGNvb3JkID0gdmVjMihhX3Bvc2l0aW9uLngsIDEuLWFfcG9zaXRpb24ueSk7CiB9`
      , g = `I3ZlcnNpb24gMzAwIGVzCiBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDsKCiBpbiB2ZWMyIHZfdGV4Y29vcmQ7CiB1bmlmb3JtIHNhbXBsZXIyRCB1X3RleHR1cmU7CiBvdXQgdmVjNCBvdXRDb2xvcjsKCiB2b2lkIG1haW4oKSB7CiBvdXRDb2xvciA9IHRleHR1cmUodV90ZXh0dXJlLCB2X3RleGNvb3JkKTsKIH0=`
      , h = Float32Array.from([0, 0, 1, 0, 0, 1, 1, 1]);
    class i extends b.Component {
        constructor() {
            super(),
            this.template = null,
            this.t = 8,
            this.scale = (0,
            c.computed)("t", "z", "model.tile", function() {
                const [a,b] = this.model.tile.zoom
                  , {t: c, z: d} = this;
                return Math.min(b, Math.max(a, d - c))
            }),
            this.pixelSize = [-1, -1],
            this.tileSize = (0,
            c.computed)("pixelSize", function() {
                const [a,b] = this.pixelSize
                  , c = this.t;
                return [(a >> c) + (0 < a % (1 << c)) + 1, (b >> c) + (0 < b % (1 << c)) + 1]
            }),
            this.tileOffset = (0,
            c.computed)("scale", "pos", "tileSize", function() {
                const {scale: a, pos: b} = this
                  , [c,d] = b
                  , [e,g] = this.tileSize;
                return [0 | c * f(2, a) - (e - 1) / 2, 0 | (1 - d) * f(2, a) - (g - 1) / 2]
            });
            const a = c.A.create();
            this.textures = (0,
            c.computed)("tileSize", function() {
                const [b,d] = this.tileSize
                  , e = b * d
                  , f = a.length
                  , g = this.gl;
                if (f < e) {
                    const b = Array.from({
                        length: e - f
                    }, ()=>{
                        const a = g.createTexture();
                        return g.bindTexture(g.TEXTURE_2D, a),
                        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE),
                        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE),
                        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.NEAREST),
                        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.NEAREST),
                        g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, 1, 1, 0, g.RGBA, g.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 255])),
                        a
                    }
                    );
                    c.A.prototype.splice.apply(a, [f, 0].concat(b))
                } else
                    a.splice(e, f - e).forEach((a)=>{
                        g.deleteTexture(a)
                    }
                    );
                return a
            });
            const b = this.tileStore = c.A.create();
            this.tiles = (0,
            c.computed)("model.tile", "z", "tileOffset", "textures", function() {
                const [d,e] = this.tileOffset
                  , [f,g] = this.tileSize
                  , h = this.gl
                  , k = this.scale
                  , i = this.model.tile.url;
                let l = [];
                /\[abc\]/.test(i) ? (l.push(i.replace("[abc]", "a")),
                l.push(i.replace("[abc]", "b")),
                l.push(i.replace("[abc]", "c"))) : l.push(i);
                const m = [];
                for (let a = 0; a < g; a++)
                    for (let b = 0; b < f; b++) {
                        const c = l[(a * f + b) % l.length];
                        m.push(c.replace("{z}", k).replace("{x}", d + b).replace("{y}", e + a))
                    }
                this.textures;
                const j = b.filter((a)=>!~m.indexOf(a.key))
                  , n = m.map((d,e)=>{
                    const f = b.filter((a)=>a.key === d)[0];
                    if (f)
                        return f;
                    else {
                        const b = j.pop() || c.O.create({
                            texture: e
                        });
                        b.key = d,
                        b.loaded = !1,
                        h.bindTexture(h.TEXTURE_2D, a[b.texture]),
                        h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, 1, 1, 0, h.RGBA, h.UNSIGNED_BYTE, new Uint8Array([0.8, 0.8, 0.8, 1]));
                        const f = new Image;
                        return f.crossOrigin = "",
                        f.addEventListener("load", this.getOwner().asyncEvent(()=>{
                            d === b.key && (h.bindTexture(h.TEXTURE_2D, a[b.texture]),
                            h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, f),
                            b.loaded = !0)
                        }
                        )),
                        f.src = d,
                        b
                    }
                }
                );
                return b.splice.apply(b, [0, b.length].concat(n)),
                n.map((b)=>a[b.texture])
            }),
            this.dirty = (0,
            c.computed)("tiles", "tileStore.@each.loaded", function() {
                return !0
            })
        }
        didInsertElement() {
            this.add(this);
            const a = this.gl
              , b = this.program = (0,
            d.createProgram)(a, e, g)
              , c = a.getAttribLocation(b, "a_position");
            this.matloc = a.getUniformLocation(b, "u_matrix"),
            this.texloc = a.getUniformLocation(b, "u_texture");
            const f = this.vao = a.createVertexArray();
            a.bindVertexArray(f);
            const i = a.createBuffer();
            a.bindBuffer(a.ARRAY_BUFFER, i),
            a.enableVertexAttribArray(c),
            a.vertexAttribPointer(c, 2, a.FLOAT, !1, 0, 0),
            a.bufferData(a.ARRAY_BUFFER, h, a.STATIC_DRAW)
        }
        willRemoveElement() {
            this.remove(this)
        }
        glRender() {
            if (this.model.hidden)
                return;
            const a = this.gl;
            a.useProgram(this.program);
            const b = a.canvas.width
              , c = a.canvas.height
              , [e,g] = this.pixelSize;
            (b !== e || c !== g) && (this.pixelSize = [b, c]),
            a.bindVertexArray(this.vao);
            const i = f(2, -this.scale)
              , j = (0,
            d.multiply)(this.world, (0,
            d.scaling)(i, i, 1))
              , [k,l] = this.tileOffset
              , [m,n] = this.tileSize;
            let h = k
              , o = 1 / i - (l + 1);
            const p = this.tiles;
            for (let b = 0; b < m; b++) {
                for (let c = 0; c < n; c++)
                    a.uniformMatrix4fv(this.matloc, !1, (0,
                    d.multiply)(j, (0,
                    d.translation)(h, o, -0.9999))),
                    a.bindTexture(a.TEXTURE_2D, p[b + c * m]),
                    a.drawArrays(a.TRIANGLE_STRIP, 0, 4),
                    o -= 1;
                o += n,
                h += 1
            }
        }
    }
    a.default = i
}),
define(18, ["exports", 44, 45], function(a, b, c) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    class d extends b.RoutableComponent {
        constructor() {
            super(),
            this.template = `e3sjaWYgYXBwLmFjbC5jb2xsZWN0aW9ufX0ge3tvYnN9fSB7e2Vsc2V9fSA8ZGl2IGNsYXNzPSJqdW1ib3Ryb24iPiA8aDEgY2xhc3M9InRleHQtY2VudGVyIj4gPHNwYW4gY2xhc3M9ImdseXBoaWNvbiBnbHlwaGljb24tbGlzdCI+PC9zcGFuPiA8L2gxPiA8cCBjbGFzcz0idGV4dC1jZW50ZXIiPlNpZ24gaW4gdG8gc2VlIHlvdXIgY29sbGVjdGlvbnM8L3A+IDwvZGl2PiB7ey9pZn19`,
            this.app = (0,
            c.computed)(function() {
                return this.getOwner().lookup("application-route")
            }),
            this.obs = (0,
            c.computed)("app.model", function() {
                this.didEnter()
            })
        }
        didEnter() {
            if (this.app.model.collections) {
                const a = this.app.model.collections.default;
                this.transitionTo({
                    route: "collection",
                    models: [{
                        id: a,
                        fake: !0
                    }]
                })
            }
        }
    }
    a.default = d
}),
define(19, ["exports", 44, 45], function(a, b, c) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    class d extends b.Component {
        constructor() {
            super(),
            this.template = `PGlucHV0IHR5cGU9ImNoZWNrYm94IiBjbGFzcz17e2NsYXNzfX0gZGlzYWJsZWQ9e3siaWYiIGRpc2FibGVkICJkaXNhYmxlZCIgdW5kZWZpbmVkfX0gY2hlY2tlZD17e21WYWx1ZX19IHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgImNoYW5nZSIgb249ImNoYW5nZSIpfX0gPg==`,
            this.mValue = (0,
            c.computed)("value", function() {
                const a = this.getElement();
                return a.checked = this.value,
                this.value
            })
        }
        change() {
            const a = this.getElement()
              , b = a.checked;
            this.changeAction(b)
        }
    }
    a.default = d
}),
define(2, ["exports", 44, 45], function(a, b, c) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    class d extends b.RoutableComponent {
        constructor() {
            super(),
            this.template = `e3sjaWYgaW5zZWN1cmV9fSA8ZGl2IGNsYXNzPSJhbGVydCBhbGVydC1kYW5nZXIganMtZXJyb3IiIHJvbGU9ImFsZXJ0Ij5Zb3VyIE1BUlYgaW5zdGFsbGF0aW9uIGlzIG5vdCBzZWN1cmVkLiBQbGVhc2UgbWFrZSBzdXJlIHlvdXIgd2Vic2VydmVyIHNlcnZlcyBNQVJWIG92ZXIgYW4gZW5jcnlwdGVkIGh0dHBzIGNvbm5lY3Rpb24uPC9kaXY+IHt7ZWxzZX19IDxkaXYgY2xhc3M9ImFwcCI+IDxuYXYgY2xhc3M9ImwtbmF2YmFyIG5hdmJhciBuYXZiYXItZGVmYXVsdCBuYXZiYXItaW52ZXJzZSBuYXZiYXItZml4ZWQtdG9wIj4gPGRpdiBjbGFzcz0iY29udGFpbmVyLWZsdWlkIj4gPGRpdiBjbGFzcz0ibmF2YmFyLWhlYWRlciI+IDxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0ibmF2YmFyLXRvZ2dsZSBjb2xsYXBzZWQiIHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgKCJzZXR0ZXIiICgicGF0aCIgbmF2YmFyT3BlbikgKCJub3QiIG5hdmJhck9wZW4pKSl9fT4gPHNwYW4gY2xhc3M9InNyLW9ubHkiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPiA8c3BhbiBjbGFzcz0iaWNvbi1iYXIiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9Imljb24tYmFyIj48L3NwYW4+IDxzcGFuIGNsYXNzPSJpY29uLWJhciI+PC9zcGFuPiA8L2J1dHRvbj4gPGxpbmstdG8gaHJlZj0iLyI+PGltZyBzcmM9Int7bWFydkxvZ299fSIgYWx0PSJNQVJWIFJvYm90aWNzIiB3aWR0aD0xMDA+PC9saW5rLXRvPiA8L2Rpdj4gPGRpdiBjbGFzcz0iY29sbGFwc2Uge3siaWYiIG5hdmJhck9wZW4gImluIn19IG5hdmJhci1jb2xsYXBzZSI+IDx1bCBjbGFzcz0ibmF2IG5hdmJhci1uYXYiPiB7eyNpZiBhY2wuY29sbGVjdGlvbn19IDxsaSBjbGFzcz0iZHJvcGRvd24ge3siaWYiIGNvbGxlY3Rpb25zT3BlbiAib3BlbiJ9fSI+IDxhIGNsYXNzPSJkcm9wZG93bi10b2dnbGUiIHJvbGU9ImJ1dHRvbiIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAoInNldHRlciIgKCJwYXRoIiBjb2xsZWN0aW9uc09wZW4pICgibm90IiBjb2xsZWN0aW9uc09wZW4pKSl9fT5Db2xsZWN0aW9uIHt7I2lmIGFjdGl2ZUNvbGxlY3Rpb259fSg8Yj57e2FjdGl2ZUNvbGxlY3Rpb259fTwvYj4pe3svaWZ9fTxzcGFuIGNsYXNzPSJjYXJldCI+PC9zcGFuPjwvYT4gPHVsIGNsYXNzPSJkcm9wZG93bi1tZW51Ij4ge3sjZWFjaCBtb2RlbC5jb2xsZWN0aW9ucy5pdGVtcyBhcyB8aXRlbXx9fSA8bGkgY2xhc3M9e3siaWYiICgiaXMtZXF1YWwiIGl0ZW0uaWQgYWN0aXZlQ29sbGVjdGlvbikgImFjdGl2ZSJ9fT4gPGEgaHJlZj0iIy9jb2xsZWN0aW9uL3t7aXRlbS5pZH19IiB7eyJhY3Rpb24iICgibm9leHBhbmQiICJvcGVuQ29sbGVjdGlvbiIgaXRlbS5pZCl9fT57e2l0ZW0udGl0bGV9fTwvYT4gPC9saT4ge3svZWFjaH19IDwvdWw+IDwvbGk+IHt7L2lmfX0gPC91bD4gPGRpdiBjbGFzcz0ibmF2YmFyLXJpZ2h0IGNvbnRhaW5lci1mbHVpZCI+IDx1bCBjbGFzcz0ibmF2IG5hdmJhci1uYXYiPiB7eyNlYWNoIG93bmVyLmhlYWRlcmxpbmtzIGFzIHxyb3V0ZXx9fSA8bGk+IDxsaW5rLXRvIGNsYXNzPSJuYXZiYXItbGluayIgaHJlZj0ie3tyb3V0ZS5yb3V0ZX19Ij57e3JvdXRlLnRleHR9fTwvbGluay10bz4gPC9saT4ge3svZWFjaH19IHt7I2lmIGFjbC5hZG1pbn19IDxsaT4gPGxpbmstdG8gY2xhc3M9Im5hdmJhci1saW5rIiBocmVmPWFkbWluPjxzcGFuIGNsYXNzPSJnbHlwaGljb24gZ2x5cGhpY29uLXdyZW5jaCIgPjwvc3Bhbj48L2xpbmstdG8+IDwvbGk+IHt7L2lmfX0gPC91bD4gPGEgcm9sZT0iYnV0dG9uIiBjbGFzcz0iYnRuIGJ0bi1kZWZhdWx0IG5hdmJhci1idG4iIHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgKCJpZiIgdXNlciAoImZuIiBzZXRTZXNzaW9uaWQgbnVsbCkgIm9wZW5TaWduaW4iKSl9fT4gU2lnbiB7eyNpZiB1c2VyfX1vdXQgPHN0cm9uZz57e3VzZXJ9fTwvc3Ryb25nPnt7ZWxzZX19aW57ey9pZn19IDwvYT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9uYXY+IDwhLS0gPGRpdiBjbGFzcz0icGFjZSBwYWNlLWFjdGl2ZSI+IDxkaXYgY2xhc3M9InBhY2UtcHJvZ3Jlc3MiIGRhdGEtcHJvZ3Jlc3M9Int7b3duZXIueGhyUHJvZ3Jlc3N9fSIgZGF0YS1wcm9ncmVzcy10ZXh0PSJ7e293bmVyLnhoclByb2dyZXNzfX0lIiBzdHlsZT0idHJhbnNmb3JtOiB0cmFuc2xhdGUzZCh7e293bmVyLnhoclByb2dyZXNzfX0lLCAwcHgsIDBweCk7Ij4gPGRpdiBjbGFzcz0icGFjZS1wcm9ncmVzcy1pbm5lciI+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz0icGFjZS1hY3Rpdml0eSI+PC9kaXY+IDwvZGl2PiAtLT4gPGRpdiBjbGFzcz0iY29udGFpbmVyLWZsdWlkIG1haW4iPiB7eyNpZiBvd25lci5hamF4RXJyb3J9fSA8ZGl2IGNsYXNzPSJhbGVydCBhbGVydC1kYW5nZXIiIHJvbGU9ImFsZXJ0Ij4gPHN0cm9uZz5SZXF1ZXN0IGZhaWxlZDo8L3N0cm9uZz4ge3tvd25lci5hamF4RXJyb3J9fSA8L2Rpdj4ge3svaWZ9fSB7eyNpZiAoImFuZCIgcmVsZWFzZXMubGVuZ3RoICgiaXMtZ3JlYXRlciIgcmVsZWFzZXMuMC52ZXJzaW9uIHZlcnNpb24pKX19IDxoMj4gVXBkYXRlIGF2YWlsYWJsZSA8c21hbGw+KDxhIHJvbGU9ImJ1dHRvbiIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAoInNldHRlciIgKCJwYXRoIiBzaG93VXBkYXRlcykgKCJub3QiIHNob3dVcGRhdGVzKSkpfX0+dmVyc2lvbiB7e3JlbGVhc2VzLjAudmVyc2lvbn19PC9hPik8L3NtYWxsPiA8L2gyPiB7eyNpZiBzaG93VXBkYXRlc319IDxkaXYgY2xhc3M9InBhbmVsIHBhbmVsLWRlZmF1bHQiPiA8ZGl2IGNsYXNzPSJwYW5lbC1ib2R5Ij4gPGRpdiBjbGFzcz0icmVsZWFzZXMiPiB7eyNlYWNoIHJlbGVhc2VzIGFzIHxyZWxlYXNlfH19IDxkaXYgY2xhc3M9InJlbGVhc2UiPiA8ZmllbGRzZXQ+IDxsZWdlbmQ+IHt7cmVsZWFzZS52ZXJzaW9ufX0gPHNwYW4gY2xhc3M9ImRhdGUiPi0gPHNwYW4gdGl0bGU9e3tyZWxlYXNlLmRhdGV9fT57e3JlbGVhc2UuZGF0ZX19PC9zcGFuPjwvc3Bhbj4gPHNwYW4gY2xhc3M9InN0YXR1cyI+IDxzcGFuIGNsYXNzPSJsYWJlbCBsYWJlbC1zdWNjZXNzIj57eygiaWYiICgiaXMtZXF1YWwiIHJlbGVhc2UudmVyc2lvbiB2ZXJzaW9uKSAiSW5zdGFsbGVkIil9fTwvc3Bhbj4gPC9zcGFuPiA8L2xlZ2VuZD4ge3sjZWFjaCByZWxlYXNlLmNoYW5nZXMgYXMgfGNoYW5nZXx9fSA8ZGl2IGNsYXNzPSJjaGFuZ2UiPiA8c3BhbiBjbGFzcz0ibGFiZWwgbGFiZWwte3soImlmIiAoImlzLWVxdWFsIiBjaGFuZ2UudHlwZSAiZml4IikgImluZm8iICJzdWNjZXNzIil9fSI+e3tjaGFuZ2UudHlwZX19PC9zcGFuPiB7e2NoYW5nZS50aXRsZX19IDwvZGl2PiB7ey9lYWNofX0gPC9maWVsZHNldD4gPC9kaXY+IHt7L2VhY2h9fSA8L2Rpdj4gPC9kaXY+IDwvZGl2PiB7ey9pZn19IHt7L2lmfX0gPHdpZGdldC13YWl0aW5nIGljb249ImxvY2siIGFjbD10cnVlIHVzZXI9e3t1c2VyfX0gZTQwMT0iU2lnbiBpbiB0byBhY2Nlc3Mgc2l0ZSIgZTQwMz0iVXNlciB7e3VzZXJ9fSBpcyBub3QgcGVybWl0dGVkIHRvIGVudGVyIHRoaXMgc2l0ZSI+IHt7b3V0bGV0fX0gPC93aWRnZXQtd2FpdGluZz4gPC9kaXY+IDx3aWRnZXQtbW9kYWwgb3Blbj17e3NpZ25pbk9wZW59fSBzZXRPcGVuPXt7InNldHRlciIgKCJwYXRoIiBzaWduaW5PcGVuKX19IHRpdGxlPSJTaWduIGluIiBhcz0idGFyZ2V0Ij4ge3sjaWYgKCJpcy1lcXVhbCIgdGFyZ2V0ICJib2R5Iil9fSA8dWwgY2xhc3M9Im5hdiBuYXYtdGFicyIgcm9sZT0idGFibGlzdCI+IDxsaSBjbGFzcz0ie3siaWYiICgiaXMtZXF1YWwiIHJlYWxtICJtYXJ2IikgImFjdGl2ZSJ9fSI+PGEgcm9sZT0iYnV0dG9uIiB7eyJhY3Rpb24iICgibm9leHBhbmQiICgic2V0dGVyIiAoInBhdGgiIHJlYWxtKSAibWFydiIpKX19Pk1BUlY8L2E+PC9saT4ge3sjZWFjaCBtb2RlbC5yZWFsbXMgYXMgfHJ8fX0gPGxpIGNsYXNzPSJ7eyJpZiIgKCJpcy1lcXVhbCIgcmVhbG0gcikgImFjdGl2ZSJ9fSI+PGEgcm9sZT0iYnV0dG9uIiB7eyJhY3Rpb24iICgic2V0dGVyIiAoInBhdGgiIHJlYWxtKSByKX19Pnt7cn19PC9hPjwvbGk+IHt7L2VhY2h9fSA8L3VsPiA8cD4gPC9wPiA8ZGl2IGNsYXNzPSJ0YWItY29udGVudCI+IDxkaXYgcm9sZT0idGFicGFuZWwiIGNsYXNzPSJ0YWItcGFuZSBhY3RpdmUiPiB7eyNpZiAoImlzLWVxdWFsIiByZWFsbSAibWFydiIpfX0gPGZvcm0ge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAic2lnbmluIiBvbj0ic3VibWl0Iil9fT4gPGRpdiBjbGFzcz0iZm9ybS1ncm91cCI+IDxsYWJlbD5Vc2VybmFtZTwvbGFiZWw+IDxpbnB1dC1jb250cm9sIGNsYXNzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSJ1c2VybmFtZSIgdmFsdWU9e3t1c2VybmFtZX19IGNoYW5nZUFjdGlvbj17eyJzZXR0ZXIiICgicGF0aCIgdXNlcm5hbWUpfX0gLz4gPC9kaXY+IDxkaXYgY2xhc3M9ImZvcm0tZ3JvdXAge3siaWYiIHBhc3N3b3JkX2Vycm9yICJoYXMtZXJyb3IifX0iPiA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPiA8aW5wdXQtY29udHJvbCB0eXBlPSJwYXNzd29yZCIgY2xhc3M9ImZvcm0tY29udHJvbCIgcGxhY2Vob2xkZXI9InBhc3N3b3JkIiB2YWx1ZT17e3Bhc3N3b3JkfX0gY2hhbmdlQWN0aW9uPXt7InNldHRlciIgKCJwYXRoIiBwYXNzd29yZCl9fSAvPiA8L2Rpdj4gPGJ1dHRvbiB0eXBlPSJzdWJtaXQiIGNsYXNzPSJidG4gYnRuLWRlZmF1bHQiPlNpZ24gaW48L2J1dHRvbj4gPC9mb3JtPiB7e2Vsc2V9fSA8YXV0aC1vMiByZWFsbT0ie3tyZWFsbX19IiBhdXRoRW5kcG9pbnQ9e3siZm4iIGF1dGhFbmRwb2ludH19IGF1dGhDb21wbGV0ZT17eyJmbiIgYXV0aENvbXBsZXRlfX0gLz4ge3svaWZ9fSA8L2Rpdj4gPC9kaXY+IHt7ZWxzZX19IHt7L2lmfX0gPC93aWRnZXQtbW9kYWw+IDx3aWRnZXQtbW9kYWwgb3Blbj17e2FwaUVycm9yfX0gc2V0T3Blbj17eyJzZXR0ZXIiICgicGF0aCIgYXBpRXJyb3IpfX0gdGl0bGU9Ik9wZXJhdGlvbiBmYWlsZWQiIGFzPSJ0YXJnZXQiPiB7eyNpZiAoImlzLWVxdWFsIiB0YXJnZXQgImJvZHkiKX19IDxkaXY+U3RhdHVzOiA8Yj57e2FwaUVycm9yLnN0YXR1c319PC9iPjwvZGl2PiA8ZGl2PlJlYXNvbjogPGI+e3thcGlFcnJvci5lcnJvcn19PC9iPjwvZGl2PiB7e2Vsc2V9fSA8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biBidG4tZGVmYXVsdCIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAoInNldHRlciIgKCJwYXRoIiBhcGlFcnJvcikgZmFsc2UpKX19PkRpc21pc3M8L2J1dHRvbj4ge3svaWZ9fSA8L3dpZGdldC1tb2RhbD4gPG5hdiBjbGFzcz0ibC1uYXZiYXIgbmF2YmFyIG5hdmJhci1pbnZlcnNlIGZvb3RlciI+IDxkaXYgY2xhc3M9ImNvbnRhaW5lci1mbHVpZCI+IDxkaXYgY2xhc3M9Im5hdmJhci1oZWFkZXIiPiA8YSBjbGFzcz0ibmF2YmFyLWJyYW5kIiBocmVmPSJodHRwczovL3Rlcm5hcmlzLmNvbSIgcmVsPSJub29wZW5lciIgdGFyZ2V0PV9ibGFuaz48aW1nIHNyYz0ie3t0ZXJuYXJpc0xvZ299fSIgYWx0PSJURVJOQVJJUyIgd2lkdGg9MTAwPjwvYT4gPC9kaXY+IDxkaXYgY2xhc3M9Im5hdmJhci1jb2xsYXBzZSI+IDx1bCBjbGFzcz0ibmF2IG5hdmJhci1uYXYiPiA8bGk+IDxhIGNsYXNzPSJuYXZiYXItbGluayIgaHJlZj17e21hcnZDb2RlTGlua319IHJlbD0ibm9vcGVuZXIiIHRhcmdldD1fYmxhbms+Q29kZTwvYT4gPC9saT4gPGxpPiA8YSBjbGFzcz0ibmF2YmFyLWxpbmsiIGhyZWY9e3ttYXJ2SXNzdWVzTGlua319IHJlbD0ibm9vcGVuZXIiIHRhcmdldD1fYmxhbms+SXNzdWVzPC9hPiA8L2xpPiA8bGk+IDxhIGNsYXNzPSJuYXZiYXItbGluayIgaHJlZj0iZG9jcy8iIHJlbD0ibm9vcGVuZXIiIHRhcmdldD1fYmxhbms+RG9jdW1lbnRhdGlvbjwvYT4gPC9saT4ge3sjZWFjaCBvd25lci5mb290ZXJsaW5rcyBhcyB8cm91dGV8fX0gPGxpPiA8bGluay10byBjbGFzcz0ibmF2YmFyLWxpbmsiIGhyZWY9Int7cm91dGUucm91dGV9fSI+e3tyb3V0ZS50ZXh0fX08L2xpbmstdG8+IDwvbGk+IHt7L2VhY2h9fSA8L3VsPiA8cCBjbGFzcz0ibmF2YmFyLXRleHQgbmF2YmFyLXJpZ2h0Ij52ZXJzaW9uIHt7dmVyc2lvbn19IHt7I2lmIG93bmVyLmxpY2Vuc2V9fSAoPHNwYW4gY2xhc3M9ImRyb3B1cCB7eyJpZiIgbGljZW5zZU9wZW4gIm9wZW4ifX0iPiA8YSBjbGFzcz0iZHJvcGRvd24tdG9nZ2xlIG5hdmJhci1saW5rIiByb2xlPSJidXR0b24iIHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgKCJzZXR0ZXIiICgicGF0aCIgbGljZW5zZU9wZW4pICgiaWYiIG93bmVyLmxpY2Vuc2UuZXhwaXJlcyAoIm5vdCIgbGljZW5zZU9wZW4pKSkpfX0+e3tvd25lci5saWNlbnNlLmxpY2Vuc2VlfX0gPHNwYW4gY2xhc3M9ImdseXBoaWNvbiB7eyJpZiIgKCJvciIgKCJpcy1wYXN0IiBvd25lci5saWNlbnNlLmV4cGlyZXMpICgibm90IiAoImNvbnRhaW5zIiBvd25lci5saWNlbnNlLmhvc3RuYW1lcyBob3N0bmFtZSkpKSAiZ2x5cGhpY29uLWV4Y2xhbWF0aW9uLXNpZ24gdGV4dC1kYW5nZXIiICJnbHlwaGljb24taW5mby1zaWduIn19Ij48L3NwYW4+IDwvYT4gPHVsIGNsYXNzPSJkcm9wZG93bi1tZW51Ij4gPGxpIGNsYXNzPSJkcm9wZG93bi1oZWFkZXIiPiBMaWNlbnNlZTogPHN0cm9uZz57e293bmVyLmxpY2Vuc2UubGljZW5zZWV9fTwvc3Ryb25nPiA8L2xpPiA8bGkgY2xhc3M9ImRyb3Bkb3duLWhlYWRlciI+IFR5cGU6IDxzdHJvbmc+e3tvd25lci5saWNlbnNlLnR5cGV9fTwvc3Ryb25nPiA8L2xpPiA8bGkgY2xhc3M9ImRyb3Bkb3duLWhlYWRlciI+IHt7I2lmICgiaXMtcGFzdCIgb3duZXIubGljZW5zZS5leHBpcmVzKX19IEV4cGlyZWQ6IDxzdHJvbmcgY2xhc3M9InRleHQtZGFuZ2VyIj57eygiZm9ybWF0LWRhdGUiIG93bmVyLmxpY2Vuc2UuZXhwaXJlcyl9fTwvc3Ryb25nPiB7e2Vsc2V9fSBFeHBpcmVzOiA8c3Ryb25nPnt7KCJmb3JtYXQtZGF0ZSIgb3duZXIubGljZW5zZS5leHBpcmVzKX19PC9zdHJvbmc+IHt7L2lmfX0gPC9saT4gPGxpIGNsYXNzPSJkcm9wZG93bi1oZWFkZXIiPiB7eyNpZiAoIm5vdCIgKCJjb250YWlucyIgb3duZXIubGljZW5zZS5ob3N0bmFtZXMgaG9zdG5hbWUpKX19IEhvc3RuYW1lczogPHN0cm9uZyBjbGFzcz0idGV4dC1kYW5nZXIiPnt7I2VhY2ggb3duZXIubGljZW5zZS5ob3N0bmFtZXMgYXMgfG5hbWV8fX17e25hbWV9fSB7ey9lYWNofX08L3N0cm9uZz4ge3tlbHNlfX0gSG9zdG5hbWVzOiA8c3Ryb25nPnt7I2VhY2ggb3duZXIubGljZW5zZS5ob3N0bmFtZXMgYXMgfG5hbWV8fX17e25hbWV9fSB7ey9lYWNofX08L3N0cm9uZz4ge3svaWZ9fSA8L2xpPiB7eyNpZiBvd25lci5saWNlbnNlLmRldGFpbHN9fSA8bGkgY2xhc3M9ImRyb3Bkb3duLWhlYWRlciI+IERldGFpbHM6IHt7KCJmb3JtYXQtaHRtbCIgb3duZXIubGljZW5zZS5kZXRhaWxzKX19IDwvbGk+IHt7L2lmfX0gPC91bD4gPC9zcGFuPikge3svaWZ9fSA8L3A+IDwvZGl2PiA8L2Rpdj4gPC9uYXY+IDwvZGl2PiB7ey9pZn19`,
            this.marvCodeLink = "https://github.com/ternaris/marv",
            this.marvIssuesLink = "https://github.com/ternaris/marv/issues",
            this.ternarisLogo = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIwLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjEycHgiIHZpZXdCb3g9IjAgMCA2NCAxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgMTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNC4xLDNIMS4zVjEuMkg5VjNINi4zdjcuOEg0LjFWM3oiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05LjgsMS4yaDYuM1YzaC00djEuOWgzLjR2MS44aC0zLjRWOWg0LjF2MS44SDkuOFYxLjJ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjIuOCwxMC44bC0xLjktMy41aC0xLjJ2My41aC0yLjNWMS4ySDIxYzIuMSwwLDMuOSwwLjcsMy45LDNjMCwxLjQtMC43LDIuMy0xLjgsMi44bDIuMiwzLjlMMjIuOCwxMC44CgkJTDIyLjgsMTAuOHogTTE5LjcsNS42aDEuMWMxLjIsMCwxLjgtMC41LDEuOC0xLjRTMjIsMi45LDIwLjgsMi45aC0xLjFDMTkuNywyLjksMTkuNyw1LjYsMTkuNyw1LjZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjYuMSwxLjJoMi4zTDMxLDZsMSwyLjFsMCwwYy0wLjEtMS0wLjMtMi40LTAuMy0zLjVWMS4yaDIuMXY5LjZoLTIuM0wyOSw2bC0xLTIuMWgtMC4xCgkJQzI4LDUsMjguMiw2LjMsMjguMiw3LjR2My40SDI2VjEuMkgyNi4xeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQwLjEsOC41SDM3bC0wLjYsMi4zaC0yLjNsMy4xLTkuNkg0MGwzLjEsOS42aC0yLjRMNDAuMSw4LjV6IE0zOS43LDYuOGwtMC4yLTAuOWMtMC4zLTEtMC41LTIuMS0wLjgtMy4xCgkJaC0wLjFjLTAuMiwxLTAuNSwyLjEtMC44LDMuMWwtMC4yLDAuOUgzOS43eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ4LjgsMTAuOGwtMS45LTMuNWgtMS4ydjMuNWgtMi4zVjEuMkg0N2MyLjEsMCwzLjksMC43LDMuOSwzYzAsMS40LTAuNywyLjMtMS44LDIuOGwyLjIsMy45TDQ4LjgsMTAuOAoJCUw0OC44LDEwLjh6IE00NS43LDUuNmgxLjFjMS4yLDAsMS44LTAuNSwxLjgtMS40UzQ4LDIuOSw0Ni44LDIuOWgtMS4xVjUuNnoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01Mi4xLDEuMmgyLjN2OS42aC0yLjNWMS4yeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTU2LjUsOC4xYzAuNywwLjYsMS42LDEsMi40LDFjMC45LDAsMS40LTAuNCwxLjQtMC45YzAtMC42LTAuNi0wLjgtMS40LTEuMmwtMS4zLTAuNWMtMS0wLjQtMi0xLjItMi0yLjYKCQljMC0xLjYsMS41LTIuOSwzLjUtMi45YzEuMSwwLDIuNCwwLjQsMy4yLDEuM2wtMS4xLDEuNGMtMC43LTAuNS0xLjMtMC44LTIuMS0wLjhzLTEuMywwLjMtMS4zLDAuOXMwLjcsMC44LDEuNSwxLjFsMS4zLDAuNQoJCWMxLjIsMC41LDIsMS4zLDIsMi42YzAsMS42LTEuNCwzLTMuNywzYy0xLjMsMC0yLjctMC41LTMuNy0xLjRMNTYuNSw4LjF6Ii8+CjwvZz4KPC9zdmc+Cg==",
            this.marvLogo = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIwLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSI3MHB4IiBoZWlnaHQ9IjM1cHgiIHZpZXdCb3g9IjAgMCA3MCAzNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzAgMzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTAuMiw2LjdIMTNsMS42LDQuM2wwLjYsMS43aDAuMWwwLjYtMS43bDEuNi00LjNoMi44djEwLjRoLTIuNlYxNGMwLTEuMSwwLjItMi43LDAuNC0zLjdIMThsLTAuOSwyLjQKCQlsLTEuNCwzLjVoLTFsLTEuNC0zLjVsLTAuOC0yLjRoLTAuMWMwLjEsMSwwLjQsMi43LDAuNCwzLjd2My4xaC0yLjVWNi43SDEwLjJ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjcuNiwxNC45aC0yLjlsLTAuNSwyLjJoLTIuOGwzLjItMTAuNGgzLjNMMzEsMTcuMWgtMi45TDI3LjYsMTQuOXogTTI3LjEsMTIuOGwtMC4yLTAuNwoJCWMtMC4zLTEtMC41LTIuMy0wLjgtMy4zSDI2Yy0wLjIsMS4xLTAuNSwyLjMtMC43LDMuM2wtMC4yLDAuN0gyNy4xeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM3LjcsMTcuMWwtMS44LTMuNWgtMS4xdjMuNUgzMlY2LjdoNGMyLjIsMCw0LjIsMC44LDQuMiwzLjRjMCwxLjUtMC43LDIuNS0xLjcsM2wyLjMsNEgzNy43eiBNMzQuOCwxMS41aDEKCQljMS4xLDAsMS43LTAuNSwxLjctMS40cy0wLjYtMS4yLTEuNy0xLjJoLTFWMTEuNXoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MC42LDYuN2gyLjlsMS4xLDQuNWMwLjMsMS4xLDAuNSwyLjIsMC44LDMuM2gwLjFjMC4zLTEuMSwwLjUtMi4yLDAuOC0zLjNsMS4xLTQuNWgyLjhMNDcsMTcuMWgtMy4zCgkJTDQwLjYsNi43eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE0LjQsMjguMWwtMS45LTMuM2gtMS40djMuM2gtMXYtNy45aDIuNWMxLjYsMCwyLjcsMC42LDIuNywyLjJjMCwxLjItMC43LDItMS44LDIuMmwyLDMuNEwxNC40LDI4LjEKCQlMMTQuNCwyOC4xeiBNMTEuMSwyNGgxLjNjMS4yLDAsMS45LTAuNSwxLjktMS41cy0wLjctMS40LTEuOS0xLjRoLTEuM1YyNHoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNi40LDI0LjJjMC0yLjUsMS40LTQsMy40LTRzMy40LDEuNSwzLjQsNHMtMS40LDQuMS0zLjQsNC4xQzE3LjgsMjguMywxNi40LDI2LjcsMTYuNCwyNC4yeiBNMjIuMSwyNC4yCgkJYzAtMi0wLjktMy4yLTIuMy0zLjJzLTIuMywxLjItMi4zLDMuMnMwLjksMy4yLDIuMywzLjJDMjEuMiwyNy40LDIyLjEsMjYuMSwyMi4xLDI0LjJ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjQuNywyMC4zSDI3YzEuNiwwLDIuNywwLjUsMi43LDEuOWMwLDAuOC0wLjQsMS41LTEuNCwxLjdsMCwwYzEuMiwwLjIsMS44LDAuOCwxLjgsMS45YzAsMS41LTEuMiwyLjMtMywyLjMKCQloLTIuNXYtNy44SDI0Ljd6IE0yNi45LDIzLjZjMS4zLDAsMS45LTAuNSwxLjktMS40UzI4LjIsMjEsMjcsMjFoLTEuMnYyLjZIMjYuOXogTTI3LjEsMjcuM2MxLjMsMCwyLjEtMC41LDIuMS0xLjYKCQljMC0xLTAuOC0xLjQtMi4xLTEuNGgtMS40djNIMjcuMXoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMS4yLDI0LjJjMC0yLjUsMS40LTQsMy40LTRzMy40LDEuNSwzLjQsNHMtMS40LDQuMS0zLjQsNC4xQzMyLjYsMjguMywzMS4yLDI2LjcsMzEuMiwyNC4yeiBNMzYuOSwyNC4yCgkJYzAtMi0wLjktMy4yLTIuMy0zLjJjLTEuNCwwLTIuMywxLjItMi4zLDMuMnMwLjksMy4yLDIuMywzLjJDMzYsMjcuNCwzNi45LDI2LjEsMzYuOSwyNC4yeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQwLjksMjEuMWgtMi40di0wLjhoNS44djAuOGgtMi40djdoLTFDNDAuOSwyOC4xLDQwLjksMjEuMSw0MC45LDIxLjF6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDUuNiwyMC4zaDF2Ny45aC0xVjIwLjN6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTEuNywyMC4xYzAuOSwwLDEuNywwLjUsMi4xLDFsLTAuNiwwLjZjLTAuNC0wLjQtMC45LTAuNy0xLjYtMC43Yy0xLjUsMC0yLjUsMS4yLTIuNSwzLjJzMC45LDMuMiwyLjQsMy4yCgkJYzAuNywwLDEuMy0wLjMsMS44LTAuOWwwLjYsMC42Yy0wLjYsMC43LTEuNCwxLjEtMi40LDEuMWMtMiwwLTMuNS0xLjUtMy41LTQuMUM0OC4yLDIxLjcsNDkuNywyMC4xLDUxLjcsMjAuMXoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01NS4xLDI2LjRjMC42LDAuNiwxLjMsMSwyLjIsMWMxLDAsMS42LTAuNSwxLjYtMS4zcy0wLjYtMS4xLTEuMy0xLjRsLTEuMS0wLjVjLTAuNy0wLjMtMS42LTAuOS0xLjYtMgoJCWMwLTEuMiwxLjEtMi4xLDIuNS0yLjFjMC45LDAsMS44LDAuNCwyLjMsMWwtMC41LDAuNmMtMC41LTAuNS0xLjEtMC43LTEuOC0wLjdjLTAuOSwwLTEuNSwwLjQtMS41LDEuMmMwLDAuOCwwLjcsMSwxLjMsMS4zCgkJbDEuMSwwLjVjMC45LDAuNCwxLjYsMC45LDEuNiwyLjFzLTEsMi4yLTIuNywyLjJjLTEuMSwwLTIuMS0wLjUtMi43LTEuMkw1NS4xLDI2LjR6Ii8+CjwvZz4KPC9zdmc+Cg==",
            this.owner = (0,
            c.computed)("owner", function() {
                return this.getOwner()
            }),
            this.insecure = (0,
            c.computed)(function() {
                return false
            }),
            this.hostname = (0,
            c.computed)(function() {
                return location.hostname
            }),
            this.sessionid = (0,
            c.computed)(function() {
                const a = JSON.parse(localStorage.session || "{}");
                return 1 === a.version ? a.id : (localStorage.session = JSON.stringify({
                    version: 1,
                    id: null
                }),
                null)
            }),
            this.user = (0,
            c.computed)("sessionid", function() {
                return this.sessionid ? JSON.parse(atob(this.sessionid.split(".")[1])).sub : null
            }),
            this.username = "",
            this.password = "",
            this.password_error = (0,
            c.computed)("username", "password", ()=>!1),
            this.model = (0,
            c.computed)("user", _asyncToGenerator(function*() {
                return void this.user,
                yield this.api({
                    url: "meta"
                })
            })),
            this.acl = (0,
            c.computed)("model", function() {
                const a = {};
                return this.model.acl && this.model.acl.forEach((b)=>a[b.replace("-", "_")] = !0),
                a
            }),
            this.apiEndpoint = `${document.querySelector("base").href}marv/api/`,
            this.version = (0,
            c.computed)(function() {
                return this.getOwner().version
            }),
            this.releases = [],
            this.realm = "marv"
        }
        openCollection(a) {
            this.transitionTo({
                route: "collection",
                models: [{
                    id: a,
                    fake: !0
                }]
            }),
            this.collectionsOpen = !1
        }
        openSignin() {
            this.signinOpen = !0,
            this.getOwner().addAfterRender(()=>{
                const a = this.getElement().querySelector("input[placeholder=username]");
                a && a.focus()
            }
            )
        }
        signin(a) {
            const b = {
                url: "auth",
                method: "POST",
                data: {
                    username: this.username,
                    password: this.password
                }
            };
            this.api(b).then((a)=>{
                this.setSessionid(a.access_token),
                this.username = "",
                this.password = "",
                this.signinOpen = !1
            }
            , ()=>{
                this.password = "",
                this.password_error = !0
            }
            ),
            a.preventDefault()
        }
        modelHook() {
            const a = {
                url: "https://ternaris.com/marv-robotics/changes.json",
                headers: {
                    "X-MARV": this.getOwner().et
                }
            };
            this.getOwner().ajax(a).then((a)=>{
                this.releases = a
            }
            )
        }
        setSessionid(a) {
            const b = JSON.parse(localStorage.session || "{}");
            b.id = a,
            localStorage.session = JSON.stringify(b),
            this.sessionid = a
        }
        api(a, b) {
            var c = this;
            return _asyncToGenerator(function*() {
                const d = a.url;
                a.url = `${c.apiEndpoint}${a.url}`,
                c.sessionid && (a.headers = Object.assign({
                    Authorization: `Bearer ${c.sessionid}`
                }, a.headers)),
                c.loading = !0;
                try {
                    const b = yield c.getOwner().ajax(a);
                    return c.loading = !1,
                    c.error = b.error,
                    b
                } catch (e) {
                    if (401 !== e.status)
                        c.error = "The frontend is unable to communicate with the server.";
                    else if (c.setSessionid(null),
                    a.headers && a.headers.Authorization)
                        return delete a.headers.Authorization,
                        a.url = d,
                        c.api(a);
                    throw b && (c.apiError = e),
                    e
                }
            })()
        }
        comment(a) {
            return this.api({
                url: "comment",
                method: "POST",
                data: a
            }, !0)
        }
        tag(a) {
            return this.api({
                url: "tag",
                method: "POST",
                data: a
            }, !0)
        }
        getFilelist(a) {
            return this.api({
                url: "file-list",
                method: "POST",
                data: a
            }, !0)
        }
        delete(a) {
            return this.api({
                url: "dataset",
                method: "DELETE",
                data: a
            }, !0)
        }
        authComplete(a) {
            this.setSessionid(a),
            this.username = "",
            this.password = "",
            this.signinOpen = !1
        }
        authEndpoint(a) {
            return this.api({
                url: "oauth2",
                method: "POST",
                data: a
            })
        }
    }
    a.default = d
}),
define(20, ["exports", 44, 45], function(a, b, c) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    class d extends b.Component {
        constructor() {
            super(),
            this.template = `PGlucHV0IHR5cGU9e3t0eXBlfX0gY2xhc3M9e3tjbGFzc319IG1pbj17e21pbn19IG1heD17e21heH19IGRpc2FibGVkPXt7ImlmIiBkaXNhYmxlZCAiZGlzYWJsZWQiIHVuZGVmaW5lZH19IHBsYWNlaG9sZGVyPXt7cGxhY2Vob2xkZXJ9fSB2YWx1ZT17e21WYWx1ZX19IHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgImNoYW5nZSIgb249ImNoYW5nZSIpfX0ge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAiY2hhbmdlIiBvbj0ia2V5dXAiKX19IHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgImNoYW5nZSIgb249ImlucHV0Iil9fSB7eyJhY3Rpb24iICgibm9leHBhbmQiICJtb3VzZW1vdmUiIG9uPSJtb3VzZW1vdmUiKX19IHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgIm1vdXNlbW92ZSIgb249Im1vdXNlbGVhdmUiKX19IHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgIm1vdXNlZG93biIgb249Im1vdXNlZG93biIpfX0gPg==`,
            this.type = "text",
            this.mValue = (0,
            c.computed)("value", function() {
                const a = this.getElement();
                return a.value === this.value || this.blocked || (a.value = this.value),
                this.value
            })
        }
        change() {
            const a = this.getElement()
              , b = a.value;
            this.changeAction(b)
        }
        mousedown() {
            const a = ()=>{
                this.blocked = !1,
                document.removeEventListener("mouseup", a)
            }
            ;
            this.blocked = !0,
            document.addEventListener("mouseup", a)
        }
        mousemove(a) {
            if (this.overAction)
                if ("mousemove" === a.type) {
                    const {left: b} = a.target.getClientRects()[0]
                      , c = Math.max(0, (a.clientX - b - 8) / (a.target.clientWidth - 18));
                    this.overAction(Math.floor(this.min + c * (this.max - this.min)))
                } else
                    this.overAction(null)
        }
    }
    a.default = d
}),
define(21, ["exports", 44, 45], function(a, b, c) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    class d extends b.Component {
        constructor() {
            super(),
            this.template = `PHRleHRhcmVhIGNsYXNzPXt7Y2xhc3N9fSBkaXNhYmxlZD17eyJpZiIgZGlzYWJsZWQgImRpc2FibGVkIiB1bmRlZmluZWR9fSB2YWx1ZT17e21WYWx1ZX19IHJvd3M9e3tyb3dzfX0gY29scz17e2NvbHN9fSBwbGFjZWhvbGRlcj17e3BsYWNlaG9sZGVyfX0ge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAiY2hhbmdlIiBvbj0iY2hhbmdlIil9fSB7eyJhY3Rpb24iICgibm9leHBhbmQiICJjaGFuZ2UiIG9uPSJrZXl1cCIpfX0gPiA8L3RleHRhcmVhPg==`,
            this.mValue = (0,
            c.computed)("value", function() {
                const a = this.getElement();
                return a.value = this.value,
                this.value
            })
        }
        change() {
            const a = this.getElement()
              , b = a.value;
            this.changeAction(b)
        }
    }
    a.default = d
}),
define(22, ["exports", 44], function(a, b) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    class c extends b.Component {
        constructor() {
            super(),
            this.template = `PHNwYW4gY2xhc3M9Im0taG92ZXIge3siaWYiIGhvdmVyaW5nICJob3ZlcmluZyJ9fSIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAoInNldHRlciIgKCJwYXRoIiBob3ZlcmluZykgdHJ1ZSkgb249Im1vdXNlZW50ZXIiKX19IHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgIm1vdXNlbGVhdmUiIG9uPSJtb3VzZWxlYXZlIil9fT48eWllbGQtYmxvY2sgcGFyYW1zPXt7aG92ZXJpbmd9fSAvPjwvc3Bhbj4=`
        }
        mouseleave(a) {
            a.relatedTarget && (this.hovering = !1)
        }
    }
    a.default = c
}),
define(23, ["exports", 44], function(a, b) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    class c extends b.Component {
        constructor() {
            super(),
            this.template = `PGRpdiBjbGFzcz0ibS1oc2Nyb2xsIiB7eyJhY3Rpb24iICgibm9leHBhbmQiICJzY3JvbGwiIG9uPSJtb3VzZWRvd24iKX19PiA8eWllbGQtYmxvY2sgLz4gPC9kaXY+`,
            this.wheelEvent = (a)=>{
                if (a.deltaX) {
                    const b = this.getElement()
                      , c = b.firstElementChild;
                    c.scrollLeft += a.deltaX,
                    this.updateHscroll(),
                    a.preventDefault(),
                    a.stopPropagation()
                }
            }
        }
        scroll(a) {
            if (0 !== a.button)
                return;
            let b = a.clientX;
            const c = this.getOwner().asyncEvent((a)=>{
                const c = a.clientX - b;
                b = a.clientX;
                const d = this.getElement()
                  , e = d.firstElementChild;
                e.scrollLeft -= c,
                this.updateHscroll()
            }
            )
              , d = this.getOwner().asyncEvent(()=>{
                document.removeEventListener("mousemove", c),
                document.removeEventListener("mouseup", d)
            }
            );
            document.addEventListener("mousemove", c),
            document.addEventListener("mouseup", d)
        }
        updateHscroll() {
            const a = this.getElement()
              , b = a.firstElementChild
              , c = b.scrollLeft;
            if (a.classList.remove("scrolling"),
            a.classList.remove("left"),
            a.classList.remove("right"),
            b.scrollWidth !== b.offsetWidth) {
                a.classList.add("scrolling");
                const d = b.scrollWidth - b.offsetWidth;
                0 !== b.scrollLeft && a.classList.add("left"),
                b.scrollLeft !== d && a.classList.add("right"),
                b.scrollLeft = c
            }
        }
        didInsertElement() {
            this.updateHscroll();
            const a = this.getElement();
            a.addEventListener("wheel", this.wheelEvent)
        }
        willRemoveElement() {
            const a = this.getElement();
            a.removeEventListener("wheel", this.wheelEvent)
        }
    }
    a.default = c
}),
define(24, ["exports", 44, 45], function(a, b, c) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.default = class extends b.Component {
        constructor() {
            super(),
            this.template = `PHNlbGVjdCBjbGFzcz0iZm9ybS1jb250cm9sIiB7eyJhY3Rpb24iICgibm9leHBhbmQiICJjaGFuZ2UiIG9uPSJjaGFuZ2UiKX19IGRpc2FibGVkPXt7ZGlzYWJsZWR9fT4ge3sjZWFjaCBtT3B0aW9ucyBhcyB8aXRlbXx9fSA8b3B0aW9uIHZhbHVlPXt7aXRlbS52YWx1ZX19IHNlbGVjdGVkPXt7ImlmIiAoImlzLWVxdWFsIiBpdGVtLnZhbHVlIG1TZWxlY3RlZCkgInNlbGVjdGVkIn19PiB7e2l0ZW0ubmFtZX19IDwvb3B0aW9uPiB7ey9lYWNofX0gPC9zZWxlY3Q+`,
            this.nameKey = "",
            this.valueKey = "__index__",
            this.mOptions = (0,
            c.computed)("options", function() {
                return this.options.map((a,b)=>({
                    name: this.nameKey ? a[this.nameKey] : a,
                    value: "__index__" === this.valueKey ? b : a[this.valueKey]
                }))
            }),
            this.mSelected = (0,
            c.computed)("options", "selected", function() {
                const a = this.options
                  , b = this.selected
                  , c = a.indexOf(b);
                if (~c)
                    return "__index__" === this.valueKey ? c : b[this.valueKey]
            })
        }
        change() {
            const a = this.getElement()
              , b = a.selectedIndex;
            this.changeAction(this.options[b])
        }
    }
}),
define(25, ["exports", 44, 45], function(a, b, c) {
    "use strict";
    function d(a, b) {
        do {
            if (a === b)
                return !0;
            b = b.parentElement
        } while (b.parentElement);return !1
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    class e extends b.Component {
        constructor() {
            super(),
            this.template = `PGRpdiBjbGFzcz0ibS10YWcgZHJvcGRvd24ge3siaWYiIHJlc3VsdHNWaXNpYmxlICJvcGVuIn19IHNjcm9sbHZlcnQiIHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgImNsaWNrIil9fSB7eyJhY3Rpb24iICgibm9leHBhbmQiICJrZXlkb3duIiBvbj0ia2V5ZG93biIpfX0ge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAiZm9jdXNJbiIgb249ImZvY3VzIiBjYXB0dXJlPXRydWUpfX0ge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAiZm9jdXNPdXQiIG9uPSJibHVyIiBjYXB0dXJlPXRydWUpfX0+IDxkaXYgY2xhc3M9ImZvcm0tY29udHJvbCB7eyJpZiIgZm9jdXNlZCAiZm9jdXMifX0iPiB7eyNlYWNoIHRhZ3MgYXMgfHRhZ3x9fSA8c3BhbiBjbGFzcz0iYmFkZ2UiPiB7e3RhZ319IHt7I2lmIGRpc2FibGVkfX0ge3tlbHNlfX0gPHNwYW4ge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAicmVtb3ZlIiB0YWcpfX0+eDwvc3Bhbj4ge3svaWZ9fSA8L3NwYW4+IHt7L2VhY2h9fSA8aW5wdXQtY29udHJvbCB2YWx1ZT17e3NlYXJjaH19IGRpc2FibGVkPXt7ZGlzYWJsZWR9fSBwbGFjZWhvbGRlcj17e3BsYWNlaG9sZGVyfX0gY2hhbmdlQWN0aW9uPXt7ImZuIiBpbnB1dENoYW5nZUFjdGlvbn19IC8+IDwvZGl2PiA8dWwgY2xhc3M9ImRyb3Bkb3duLW1lbnUiPiB7eyNlYWNoIHJlc3VsdHMgYXMgfHJlc3VsdHx9fSA8bGkgY2xhc3M9e3siaWYiIHJlc3VsdC5hY3RpdmUgImFjdGl2ZSJ9fSB7eyJhY3Rpb24iICgibm9leHBhbmQiICJoaWdobGlnaHQiIHJlc3VsdCBvbj0ibW91c2VlbnRlciIpfX0ge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAiYWRkIiByZXN1bHQpfX0+IDxhIGhyZWY9IiMiIHRhYmluZGV4PS0xIHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgImFkZCIgcmVzdWx0KX19PiB7e3Jlc3VsdC50YWd9fSA8L2E+IDwvbGk+IHt7L2VhY2h9fSA8L3VsPiA8L2Rpdj4=`,
            this.tags = null,
            this.suggestions = null,
            this.search = "",
            this.focused = !1,
            this.disabled = (0,
            c.computed)("subset", "suggestions.@each", function() {
                return this.subset && !this.suggestions.length
            }),
            this.placeholder = (0,
            c.computed)("subset", "suggestions.@each", function() {
                return this.subset && !this.suggestions.length ? "There are no items" : void 0
            }),
            this.results = (0,
            c.computed)("search", "tags.@each", "suggestions.@each", function() {
                const a = this.search
                  , b = this.subset;
                if (!a && !b)
                    return c.A.create();
                const d = this.tags
                  , e = new RegExp(a,"i");
                return c.A.create(this.suggestions.filter((a)=>!~d.indexOf(a)).filter((a)=>e.test(a)).map((a)=>c.O.create({
                    tag: a,
                    active: !1
                })))
            }),
            this.resultsVisible = (0,
            c.computed)("results.@each", "focused", function() {
                return this.results.length && this.focused
            })
        }
        click() {
            this.getElement().querySelector("input").focus()
        }
        focusIn() {
            this.focused = !0
        }
        focusOut(a) {
            if (a.relatedTarget) {
                const b = this.getElement();
                if (d(b, a.relatedTarget))
                    return
            }
            this.focused = !1
        }
        add(a, b) {
            this.addAction(a.tag),
            this.getElement().querySelector("input").focus(),
            this.search = "",
            b.stopPropagation(),
            b.preventDefault()
        }
        remove(a, b) {
            this.removeAction(a),
            b.stopPropagation(),
            b.preventDefault()
        }
        highlight(a) {
            const b = this.results;
            if (b.length) {
                const d = b.filter((a)=>!0 === a.active)[0];
                if (b.forEach((a)=>a.active = !1),
                "number" == typeof a) {
                    let c = b.indexOf(d);
                    c = (c + b.length + a) % b.length,
                    b[c].active = !0
                } else
                    a.active = !0
            }
        }
        keydown(a) {
            const b = a;
            if (38 === b.keyCode)
                this.highlight(-1),
                b.stopPropagation(),
                b.preventDefault();
            else if (40 === b.keyCode)
                this.highlight(1),
                b.stopPropagation(),
                b.preventDefault();
            else if (13 === b.keyCode || 9 === b.keyCode) {
                const a = this.results
                  , d = this.search.trim();
                this.search = "";
                const e = a.filter((a)=>!0 === a.active)[0];
                if (e)
                    this.addAction(e.tag);
                else if (d.length)
                    (!this.subset || a.filter((a)=>a.tag === d)[0]) && this.addAction(d);
                else if (9 === b.keyCode)
                    return;
                b.stopPropagation(),
                b.preventDefault()
            } else if (8 === b.keyCode) {
                if (this.search.length)
                    return;
                this.tags.length && this.remove(this.tags[this.tags.length - 1]),
                b.stopPropagation(),
                b.preventDefault()
            }
        }
        inputChangeAction(a) {
            this.search = a,
            this.subset && a && !this.results.length && (this.search = a.substr(0, a.length - 1))
        }
    }
    a.default = e
}),
define(26, ["exports", 44], function(a, b) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    class c extends b.RoutableComponent {
        constructor() {
            super(),
            this.template = `PGRpdiBjbGFzcz0iYWxlcnQgYWxlcnQtZGFuZ2VyIiByb2xlPSJhbGVydCI+IDxzdHJvbmc+RXJyb3I6PC9zdHJvbmc+IFRoaXMgaXMgbm90IGEgdmFsaWQgbWFydiByb3V0ZS4gPC9kaXY+IDxsaW5rLXRvIGhyZWY9Ii8iPkdvIHRvIG92ZXJ2aWV3PC9saW5rLXRvPg==`
        }
    }
    a.default = c
}),
define(27, ["exports"], function(a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.default = [{
        name: "index",
        path: ""
    }, {
        name: "collection",
        path: "/collection/:id",
        queryParams: {
            filter: {
                refreshModel: !0
            },
            debugfilters: {}
        }
    }, {
        name: "detail",
        path: "/detail/:id"
    }, {
        name: "compare",
        path: "/compare/:id"
    }, {
        name: "admin",
        path: "/admin"
    }, {
        name: "notfound",
        path: "*wildcard"
    }]
}),
define(28, ["exports", 44], function(a, b) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    class c extends b.Component {
        constructor() {
            super(),
            this.template = `PGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi14cyBidG4tZGVmYXVsdCIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAiY29weSIpfX0+Q29weSB7e21vZGVsLnRpdGxlfX0gdG8gY2xpcGJvYXJkIDxzcGFuIGNsYXNzPSJnbHlwaGljb24gZ2x5cGhpY29uLWNvcHkiPjwvc3Bhbj48L2J1dHRvbj4=`
        }
        copy() {
            const a = this.getOwner().rootNode.__doc__.createElement("textarea");
            a.value = this.model.data,
            this.getElement().appendChild(a),
            a.select(),
            this.getOwner().rootNode.__doc__.execCommand("copy"),
            a.remove()
        }
    }
    a.default = c
}),
define(29, ["exports", 44], function(a, b) {
    "use strict";
    function c(a, b) {
        do {
            if (a === b)
                return !0;
            b = b.parentElement
        } while (b.parentElement);return !1
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    class d extends b.Component {
        constructor() {
            super(),
            this.template = `PHNwYW4gY2xhc3M9ImRyb3Bkb3duIHt7ImlmIiBmb2N1c2VkICJvcGVuIn19Ij4gPHNwYW4gY2xhc3M9ImJhY2tkcm9wIiB7eyJhY3Rpb24iICgibm9leHBhbmQiICJmb2N1c0luIil9fT48L3NwYW4+IDxidXR0b24gcm9sZT0iYnV0dG9uIiBjbGFzcz0ie3tjbGFzc319IiBkaXNhYmxlZD17e2Z1bGxkaXNhYmxlZH19IHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgImZvY3VzSW4iKX19PiBjb21tZW50IDxzcGFuIGNsYXNzPSJjYXJldCI+PC9zcGFuPiA8L2J1dHRvbj4gPHVsIGNsYXNzPSJkcm9wZG93bi1tZW51IHt7bWVudUNsYXNzfX0gYnVsay1kcm9wZG93biI+IHt7I2lmIGRpc2FibGVkfX0gPGxpIGNsYXNzPSJ0ZXh0LWNlbnRlciI+U2lnbiBpbiB0byBjb21tZW50PC9saT4ge3tlbHNlfX0gPGxpPiA8YSByb2xlPSJidXR0b24iPiA8aW5wdXQtdGV4dGFyZWEgY2xhc3M9ImZvcm0tY29udHJvbCIgcm93cz0xMCBjb2xzPTgwIHBsYWNlaG9sZGVyPSJDb21tZW50IiB2YWx1ZT17e2NvbW1lbnR9fSBjaGFuZ2VBY3Rpb249e3siY3VycnkiICgibm9leHBhbmQiICgic2V0IiAoIm5vZXhwYW5kIiBjb21tZW50KSkpfX0gLz4gPC9hPiA8L2xpPiA8bGkgcm9sZT0ic2VwYXJhdG9yIiBjbGFzcz0iZGl2aWRlciI+PC9saT4gPGxpIGNsYXNzPSJ0ZXh0LXJpZ2h0Ij4gPGEgcm9sZT0iYnV0dG9uIj4gPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1kZWZhdWx0IGJ0bi14cyIgdHlwZT0iYnV0dG9uIiB7eyJhY3Rpb24iICgibm9leHBhbmQiICJzYXZlIil9fT5Db21tZW50PC9idXR0b24+IDwvYT4gPC9saT4ge3svaWZ9fSA8L3VsPiA8L3NwYW4+`,
            this.comment = "",
            this.focused = !1
        }
        focusIn(a) {
            console.log("in", a.target),
            this.focused = !this.focused
        }
        focusOut(a) {
            if (console.log("out", a.target, a.relatedTarget),
            a.relatedTarget) {
                const b = this.getElement();
                if (c(b, a.relatedTarget))
                    return
            }
            this.focused = !1
        }
        save() {
            this.comment && (this.changeAction(this.comment),
            this.comment = "",
            this.focused = !1)
        }
    }
    a.default = d
}),
define(3, ["exports", 44], function(a, b) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    class c extends b.Component {
        constructor() {
            super(),
            this.template = `e3sjaWYgKCJpcy1lcXVhbCIgbW9kZSAibGluayIpfX0gPGEgY2xhc3M9Int7Y2xhc3N9fSB7e2J1dHRvbkNsYXNzfX0iIHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgImNoZWNrIil9fT4gPHlpZWxkLWJsb2NrIC8+IDwvYT4ge3tlbHNlfX0gPGJ1dHRvbiBjbGFzcz0ie3tjbGFzc319IHt7YnV0dG9uQ2xhc3N9fSIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAiY2hlY2siKX19IGRpc2FibGVkPXt7ZGlzYWJsZWR9fT4gPHlpZWxkLWJsb2NrIC8+IDwvYnV0dG9uPiB7ey9pZn19IDx3aWRnZXQtbW9kYWwgb3Blbj17e21vZGFsT3Blbn19IHNldE9wZW49e3siY3VycnkiICgibm9leHBhbmQiICgic2V0IiAoIm5vZXhwYW5kIiBtb2RhbE9wZW4pKSl9fSB0aXRsZT17e3RpdGxlfX0gYXM9InRhcmdldCI+IHt7I2lmICgiaXMtZXF1YWwiIHRhcmdldCAiYm9keSIpfX0ge3t0ZXh0fX0ge3tlbHNlfX0gPGJ1dHRvbiBjbGFzcz0ie3tjbGFzc319IHt7YWN0aW9uQnV0dG9uQ2xhc3N9fSIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAiZXhlY3V0ZSIpfX0+e3soImlmIiBjb25maXJtVGV4dCBjb25maXJtVGV4dCAiQ29uZmlybSIpfX08L2J1dHRvbj4ge3svaWZ9fSA8L3dpZGdldC1tb2RhbD4=`,
            this.modalOpen = !1
        }
        check() {
            this.modalOpen = !0
        }
        execute() {
            this.action(),
            this.modalOpen = !1
        }
    }
    a.default = c
}),
define(30, ["exports", 44, 45], function(a, b, c) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    class d extends b.Component {
        constructor() {
            super(),
            this.template = `PGRpdiBjbGFzcz0icm93Ij4gPGRpdiBjbGFzcz0iY29sLXhzLTIiPkFkZCBuZXcgZmlsdGVyPC9kaXY+IDxkaXYgY2xhc3M9ImNvbC14cy0xMCI+IDx1bCBjbGFzcz0ibGlzdC1pbmxpbmUiPiB7eyNlYWNoIGZpZWxkcyBhcyB8ZmllbGR8fX0gPGxpPiA8YnV0dG9uIGNsYXNzPSJidG4gYnRuLWRlZmF1bHQgYnRuLXhzIiB0eXBlPSJidXR0b24iIHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgImFkZCIgZmllbGQpfX0gZGlzYWJsZWQ9e3tmaWVsZC5hY3RpdmV9fT57e2ZpZWxkLnRpdGxlfX08L2J1dHRvbj4gPC9saT4ge3svZWFjaH19IDwvdWw+IDwvZGl2PiA8L2Rpdj4gPGZvcm0gY2xhc3M9ImZvcm0taG9yaXpvbnRhbCIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAiYXBwbHlGaWx0ZXIiIG9uPSJzdWJtaXQiKX19PiB7eyNlYWNoIGZpZWxkcyBhcyB8ZmllbGR8fX0ge3sjaWYgZmllbGQuYWN0aXZlfX0gPGRpdiBjbGFzcz0icm93IGZvcm0tZ3JvdXAgZm9ybS1ncm91cC1zbSB7eyJpZiIgZmllbGQuZW50cnkuZXJyb3IgImhhcy1lcnJvciJ9fSI+IDxsYWJlbCBjbGFzcz0iY29sLXhzLTIgY29udHJvbC1sYWJlbCI+IHt7ZmllbGQudGl0bGV9fSA8L2xhYmVsPiB7eyNpZiAoImlzLWdyZWF0ZXIiIGZpZWxkLm9wZXJhdG9ycy5sZW5ndGggMSl9fSA8ZGl2IGNsYXNzPSJjb2wteHMtMiI+IDxtLXNlbGVjdCBvcHRpb25zPXt7ZmllbGQub3BlcmF0b3JzfX0gc2VsZWN0ZWQ9e3tmaWVsZC5lbnRyeS5vcH19IGNoYW5nZUFjdGlvbj17eyJzZXR0ZXIiICgicGF0aCIgZmllbGQuZW50cnkub3ApfX0gZGlzYWJsZWQ9e3siaWYiICgiaXMtZ3JlYXRlciIgZmllbGQub3BlcmF0b3JzLmxlbmd0aCAxKSB1bmRlZmluZWQgdHJ1ZX19IC8+IDwvZGl2PiA8ZGl2IGNsYXNzPSJjb2wteHMtNyI+IDxkZWxlZ2F0ZS1jb21wb25lbnQgY29tcG9uZW50PSJmaWVsZC17e2ZpZWxkLnZhbHVlX3R5cGV9fSIgdmFsdWU9e3tmaWVsZC5lbnRyeS52YWx9fSBjb25zdHJhaW50cz17e2ZpZWxkLmNvbnN0cmFpbnRzfX0gY2hhbmdlQWN0aW9uPXt7InNldHRlciIgKCJwYXRoIiBmaWVsZC5lbnRyeS52YWwpfX0gY2hhbmdlRXJyb3JBY3Rpb249e3sic2V0dGVyIiAoInBhdGgiIGZpZWxkLmVudHJ5LmVycm9yKX19IC8+IHt7I2lmIGZpZWxkLmVudHJ5LmVycm9yfX0gPHNwYW4gY2xhc3M9ImhlbHAtYmxvY2siPnt7ZmllbGQuZW50cnkuZXJyb3J9fTwvc3Bhbj4ge3svaWZ9fSA8L2Rpdj4ge3tlbHNlfX0gPGRpdiBjbGFzcz0iY29sLXhzLTkiPiA8ZGVsZWdhdGUtY29tcG9uZW50IGNvbXBvbmVudD0iZmllbGQte3tmaWVsZC52YWx1ZV90eXBlfX0iIHZhbHVlPXt7ZmllbGQuZW50cnkudmFsfX0gY29uc3RyYWludHM9e3tmaWVsZC5jb25zdHJhaW50c319IGNoYW5nZUFjdGlvbj17eyJzZXR0ZXIiICgicGF0aCIgZmllbGQuZW50cnkudmFsKX19IGNoYW5nZUVycm9yQWN0aW9uPXt7InNldHRlciIgKCJwYXRoIiBmaWVsZC5lbnRyeS5lcnJvcil9fSAvPiB7eyNpZiBmaWVsZC5lbnRyeS5lcnJvcn19IDxzcGFuIGNsYXNzPSJoZWxwLWJsb2NrIj57e2ZpZWxkLmVudHJ5LmVycm9yfX08L3NwYW4+IHt7L2lmfX0gPC9kaXY+IHt7L2lmfX0gPGRpdiBjbGFzcz0iY29sLXhzLTEiPiA8YnV0dG9uIGNsYXNzPSJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIiB0eXBlPSJidXR0b24iIHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgInJlbW92ZSIgZmllbGQpfX0+IDxzcGFuIGNsYXNzPSJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSI+PC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiB7ey9pZn19IHt7L2VhY2h9fSA8ZGl2IGNsYXNzPSJmaWx0ZXItY29udHJvbHMgcm93Ij4ge3sjaWYgZGVidWd9fSA8aDQ+RmlsdGVyIERlYnVnPC9oND4gPHByZT57e2ZpbHRlckpTT059fTwvcHJlPiA8cHJlPnt7ZmlsdGVyQmFzZX19PC9wcmU+IHt7L2lmfX0gPGRpdiBjbGFzcz0iY29sLXhzLTkgY29sLXhzLW9mZnNldC0yIHRleHQtcmlnaHQiPiA8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biBidG4tZGVmYXVsdCBidG4tc20iIGRpc2FibGVkPXt7ImlzLWVxdWFsIiBmaWx0ZXJCYXNlICIifX0ge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAicmVzZXRGaWx0ZXJzIil9fT5yZXNldCBmaWx0ZXJzPC9idXR0b24+IDxidXR0b24gdHlwZT0ic3VibWl0IiBjbGFzcz0iYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSIgZGlzYWJsZWQ9e3siaXMtZXF1YWwiIGZpbHRlclN0ciBmaWx0ZXJCYXNlfX0+YXBwbHkgZmlsdGVyPC9idXR0b24+IDwvZGl2PiA8L2Rpdj4gPC9mb3JtPg==`,
            this.filterStr = (0,
            c.computed)("filter", function() {
                return "undefined" == typeof this.filter ? "" : this.filter
            }),
            this.filterObj = (0,
            c.computed)(function() {
                const a = {};
                if (this.filter) {
                    const b = JSON.parse(atob(this.filter));
                    for (let[d,e] of Object.entries(b))
                        a[d] = c.O.create(e)
                }
                return c.O.create(a)
            }),
            this.filterJSON = (0,
            c.computed)("model", function() {
                const a = this.model.filters.reduce((a,b)=>a.concat([`filterObj.${b.key}.op`, `filterObj.${b.key}.val`]), ["model"]);
                (0,
                c.updateComputed)(this, "filterJSON", a);
                const b = {};
                for (let[a,c] of Object.entries(this.filterObj)) {
                    const {op: d, val: e} = c;
                    e.length && (b[a] = {
                        op: d,
                        val: e
                    })
                }
                return JSON.stringify(b, 0, 1)
            }),
            this.filterBase = (0,
            c.computed)("filterJSON", function() {
                return "{}" === this.filterJSON ? "" : btoa(this.filterJSON)
            }),
            this.fields = (0,
            c.computed)("model", "filterObj", function() {
                const a = this.filterObj
                  , b = this.model.filters;
                return b.map((b,d)=>{
                    const e = a[b.key] || (a[b.key] = c.O.create({}));
                    return e.op = e.op || b.operators[0],
                    e.val = e.val || ("subset" === b.value_type ? c.A.create() : ""),
                    e.error = null,
                    c.O.create({
                        key: b.key,
                        title: b.title,
                        operators: b.operators,
                        value_type: b.value_type,
                        constraints: c.A.create(b.constraints),
                        active: 0 === d || !!e.val.length,
                        entry: e
                    })
                }
                )
            })
        }
        add(a) {
            a.active = !0
        }
        remove(a) {
            a.active = !1,
            a.entry.val = a.entry.val.slice(0, 0)
        }
        applyFilter(a) {
            this.setAction(this.filterBase),
            a.preventDefault()
        }
        resetFilters(a) {
            Object.values(this.filterObj).forEach((a)=>a.val = a.val.slice(0, 0)),
            this.applyFilter(a)
        }
    }
    a.default = d
}),
define(31, ["exports", 44, 45], function(a, b, c) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.default = class extends b.Component {
        constructor() {
            super(),
            this.template = `PGRpdiBjbGFzcz0id2lkZ2V0LWdhbGxlcnkiPiB7eyNpZiBzaG93VGl0bGV9fSA8aDQgY2xhc3M9InRleHQtY2VudGVyIj5JbWFnZSB7eygiaW5jcmVtZW50IiBpbmRleCl9fSBvZiB7e21vZGVsLmltYWdlcy5sZW5ndGh9fSA8c21hbGw+e3tpbWFnZS5hbHR9fTwvc21hbGw+PC9oND4ge3svaWZ9fSA8ZGl2IGNsYXNzPSJyb3ciPiA8ZGl2IGNsYXNzPSJ7eygiaWYiIGhhc0Jsb2NrICJjb2wteHMtOSIgImNvbC14cy0xMiIpfX0iPiA8ZGl2IGNsYXNzPSJjYXJvdXNlbCI+IDxkaXYgY2xhc3M9ImNhcm91c2VsLWlubmVyIiByb2xlPSJsaXN0Ym94Ij4ge3sjZWFjaCBtb2RlbC5pbWFnZXMgYXMgfGltYWdlIGl8fX0gPGRpdiBjbGFzcz0iaXRlbSB7eygiaWYiICgiaXMtZXF1YWwiIGkgaW5kZXgpICJhY3RpdmUiKX19Ij4gPGltZyBjbGFzcz0iaW1nLXJlc3BvbnNpdmUgY2VudGVyLWJsb2NrIiBzcmM9e3tpbWFnZS5zcmN9fSBhbHQ9e3tpbWFnZS5hbHR9fT4gPC9kaXY+IHt7L2VhY2h9fSA8L2Rpdj4gPGEgY2xhc3M9ImxlZnQgY2Fyb3VzZWwtY29udHJvbCIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAic2V0SW5kZXgiICItMSIpfX0+IDxzcGFuIGNsYXNzPSJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tbGVmdCIgYXJpYS1oaWRkZW49InRydWUiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9InNyLW9ubHkiPlByZXZpb3VzPC9zcGFuPiA8L2E+IDxhIGNsYXNzPSJyaWdodCBjYXJvdXNlbC1jb250cm9sIiB7eyJhY3Rpb24iICgibm9leHBhbmQiICJzZXRJbmRleCIgIisxIil9fT4gPHNwYW4gY2xhc3M9ImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1yaWdodCIgYXJpYS1oaWRkZW49InRydWUiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9InNyLW9ubHkiPk5leHQ8L3NwYW4+IDwvYT4gPC9kaXY+IDwvZGl2PiB7eyNpZiBoYXNCbG9ja319PGRpdiBjbGFzcz0iY29sLXhzLTMiPjx5aWVsZC1ibG9jayAvPjwvZGl2Pnt7L2lmfX0gPC9kaXY+IDx1bCBjbGFzcz0iaW1hZ2Utc3RyaXBlIj4ge3sjZWFjaCBtb2RlbC5pbWFnZXMgYXMgfGltYWdlIGl8fX0gPGxpPiA8ZGl2IGNsYXNzPSJpbWctdGh1bWJuYWlsLXdyYXBwZXIge3siaWYiICgiaXMtZXF1YWwiIGkgaW5kZXgpICJhY3RpdmUifX0iIHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgInNldEluZGV4IiBpKX19PiA8aW1nIHNyYz17e2ltYWdlLnNyY319IGFsdD17e2ltYWdlLmFsdH19PiA8L2Rpdj4gPC9saT4ge3svZWFjaH19IDwvdWw+IDwvZGl2Pg==`,
            this.index = 0,
            this.image = (0,
            c.computed)("index", function() {
                return this.model.images[this.index]
            })
        }
        setIndex(a) {
            "-1" === a ? 0 < this.index && this.index-- : "+1" === a ? this.index < this.model.images.length - 1 && this.index++ : this.index = a
        }
    }
}),
define(32, ["exports", 44], function(a, b) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.default = class extends b.Component {
        constructor() {
            super(),
            this.template = "PGltZyBjbGFzcz17e2NsYXNzfX0gc3JjPSJ7e21vZGVsLnNyY319IiBhbHQ9e3ttb2RlbC5hbHR9fSB3aWR0aD17e21vZGVsLndpZHRofX0+",
            this.class = "img-responsive widget-img"
        }
    }
}),
define(33, ["exports", 44], function(a, b) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.default = class extends b.Component {
        constructor() {
            super(),
            this.template = `PGRpdiBjbGFzcz0id2lkZ2V0LWtleXZhbCI+IDx1bCBjbGFzcz0ibGlzdC1pbmxpbmUiPiB7eyNlYWNoIG1vZGVsLml0ZW1zIGFzIHxyb3cgaW5kZXh8fX0gPGxpPiA8ZGl2IGNsYXNzPSJ2YWx1ZSI+IHt7I2lmIHJvdy5saXN0fX0ge3sjZWFjaCByb3cudmFsdWUgYXMgfHZhbHx9fSB7eygoImNvbmNhdCIgImZvcm1hdC0iIHJvdy5mb3JtYXR0ZXIpIHZhbCl9fSB7ey9lYWNofX0ge3tlbHNlfX0ge3soKCJjb25jYXQiICJmb3JtYXQtIiByb3cuZm9ybWF0dGVyKSByb3cudmFsdWUpfX0ge3svaWZ9fSA8L2Rpdj4gPGRpdiBjbGFzcz0idWludCI+IHt7cm93LnRpdGxlfX0gPC9kaXY+IDwvbGk+IHt7L2VhY2h9fSA8L3VsPiA8L2Rpdj4=`
        }
    }
}),
define(34, ["exports", 44], function(a, b) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.default = class extends b.Component {
        constructor() {
            super(),
            this.template = "PGEgaHJlZj17e21vZGVsLmhyZWZ9fT57e21vZGVsLnRpdGxlfX08L2E+"
        }
    }
}),
define(35, ["exports", 44, 45], function(a, b, c) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    const d = /^marv-partial:/;
    a.default = class extends b.Component {
        constructor() {
            super(),
            this.template = `e3sjaWYgcHJvdG99fSB7eyNpZiBkYXRhfX0gPGg1Pnt7bW9kZWwudGl0bGV9fTwvaDU+IDxkZWxlZ2F0ZS1jb21wb25lbnQgY29tcG9uZW50PSJ3aWRnZXQte3ttb2RlbC50eXBlfX0iIG1vZGVsPXt7ZGF0YX19IC8+IHt7ZWxzZX19IDxkaXYgY2xhc3M9ImNzc2xvYWQtbG9hZGVyIj4gPGRpdiBjbGFzcz0iY3NzbG9hZC1pbm5lciBjc3Nsb2FkLW9uZSI+PC9kaXY+IDxkaXYgY2xhc3M9ImNzc2xvYWQtaW5uZXIgY3NzbG9hZC10d28iPjwvZGl2PiA8ZGl2IGNsYXNzPSJjc3Nsb2FkLWlubmVyIGNzc2xvYWQtdGhyZWUiPjwvZGl2PiA8L2Rpdj4ge3svaWZ9fSB7e2Vsc2V9fSBXaWRnZXQgPHN0cm9uZz57e21vZGVsLnR5cGV9fTwvc3Ryb25nPiBub3QgYXZhaWxhYmxlIHt7L2lmfX0=`,
            this.route = (0,
            c.computed)(function() {
                return this.getOwner().lookup("detail-route")
            }),
            this.proto = (0,
            c.computed)("model.type", function() {
                return this.getOwner().components[`widget-${this.model.type}`]
            }),
            this.data = (0,
            c.computed)("model.data", function() {
                const a = this.model.data;
                if (d.test(a)) {
                    const b = `dataset/${this.route.params.id}/${a.replace(d, "")}`;
                    return this.getOwner().lookup("application-route").api({
                        url: b
                    }, !0).then((a)=>{
                        this.model.data = this.data = a
                    }
                    ),
                    null
                }
                return a
            })
        }
    }
}),
define(36, ["exports", 45, 16], function(a, b, c) {
    "use strict";
    function d([a,b]) {
        return a = a * j / 180,
        b = b * j / 180,
        [(1 + a / j) / 2, (1 + Math.log(Math.tan(b) + 1 / Math.cos(b)) / j) / 2]
    }
    var e = Math.min
      , f = Math.max
      , g = Math.pow
      , h = Math.PI;
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var i = function(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }(c);
    const j = h;
    class k extends i.default {
        constructor() {
            super(),
            this.template = `PGRpdiBjbGFzcz0id2lkZ2V0LW1hcCI+IDxjYW52YXM+e3tkaXJ0eX19PC9jYW52YXM+IHt7I2VhY2ggbGF5ZXJzIGFzIHxsYXllciBpbmRleHx9fSB7eyNpZiAoImlzLWVxdWFsIiBsYXllci50eXBlICJ0aWxlcyIpfX0gPGdseWNpbmUtdHlsZXIgbW9kZWw9e3tsYXllcn19IGluZGV4PXt7aW5kZXh9fSB6PXt7en19IHBvcz17e3Bvc319IGdsPXt7Z2x9fSBhZGQ9e3thZGR9fSByZW1vdmU9e3tyZW1vdmV9fSB3b3JsZD17e3dvcmxkfX0gLz4ge3tlbHNlIGlmICgiaXMtZXF1YWwiIGxheWVyLnR5cGUgImdlb2pzb24iKX19IDxnbHljaW5lLWdlb2pzb24gbW9kZWw9e3tsYXllcn19IGluZGV4PXt7aW5kZXh9fSBnbD17e2dsfX0gYWRkPXt7YWRkfX0gcmVtb3ZlPXt7cmVtb3ZlfX0gd29ybGQ9e3t3b3JsZH19IHRpbWVSYW5nZT17e3RpbWVSYW5nZX19IC8+IHt7ZWxzZX19IExheWVyIHt7bGF5ZXIudHlwZX19IG5vdCBzdXBwb3J0ZWQge3svaWZ9fSB7ey9lYWNofX0gPGRpdiBjbGFzcz0ib25kZW1hbmQgY29udHJvbHMgdG9wIGxlZnQgYnRuLWdyb3VwIj4gPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1kZWZhdWx0IiB7eyJhY3Rpb24iICgibm9leHBhbmQiICJ6b29tIiAtMSl9fT4gPHNwYW4gY2xhc3M9ImdseXBoaWNvbiBnbHlwaGljb24tem9vbS1vdXQiPjwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gY2xhc3M9ImJ0biBidG4tZGVmYXVsdCIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAiem9vbSIgMCl9fT4gPHNwYW4gY2xhc3M9ImdseXBoaWNvbiBnbHlwaGljb24tcmVzaXplLWZ1bGwiPjwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gY2xhc3M9ImJ0biBidG4tZGVmYXVsdCIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAiem9vbSIgMSl9fT4gPHNwYW4gY2xhc3M9ImdseXBoaWNvbiBnbHlwaGljb24tem9vbS1pbiI+PC9zcGFuPiA8L2J1dHRvbj4gPCEtLSA8YnV0dG9uIGNsYXNzPSJidG4gYnRuLWRlZmF1bHQiIHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgKCJzZXR0ZXIiICgicGF0aCIgY2FtbW9kZSkgIm5vcm1hbCIpKX19PiBkZWYgPC9idXR0b24+IDxidXR0b24gY2xhc3M9ImJ0biBidG4tZGVmYXVsdCIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAoInNldHRlciIgKCJwYXRoIiBjYW1tb2RlKSAicGVyc3BlY3RpdmUiKSl9fT4gcGVyIDwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPSJidG4gYnRuLWRlZmF1bHQiIHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgKCJzZXR0ZXIiICgicGF0aCIgY2FtbW9kZSkgImNoaWxkIikpfX0+IGZwIDwvYnV0dG9uPiAtLT4gPC9kaXY+IDxkaXYgY2xhc3M9Im9uZGVtYW5kIGNvbnRyb2xzIHRvcCByaWdodCI+IDxtLWhvdmVyIGFzPSJob3ZlcmluZyI+IHt7I2lmICgibm90IiBob3ZlcmluZyl9fSA8YnV0dG9uIGNsYXNzPSJidG4gYnRuLWRlZmF1bHQiPiA8c3BhbiBjbGFzcz0iZ2x5cGhpY29uIGdseXBoaWNvbi1tZW51LWhhbWJ1cmdlciI+PC9zcGFuPiA8L2J1dHRvbj4ge3svaWZ9fSA8Zm9ybSBjbGFzcz0ibGVnZW5kIG9uZGVtYW5kIj4ge3sjZWFjaCBsYXllcnMgYXMgfGxheWVyfH19IHt7I2lmICgiaXMtZXF1YWwiIGxheWVyLnR5cGUgInRpbGVzIil9fSA8bS1zZWxlY3Qgb3B0aW9ucz17e2xheWVyLnRpbGVzfX0gbmFtZUtleT0idGl0bGUiIHZhbHVlS2V5PSJ1cmwiIHNlbGVjdGVkPXt7bGF5ZXIudGlsZX19IGNoYW5nZUFjdGlvbj17eyJzZXR0ZXIiICgicGF0aCIgbGF5ZXIudGlsZSl9fSAvPiB7e2Vsc2V9fSA8ZGl2IGNsYXNzPSJjaGVja2JveCI+IDxsYWJlbD4gPGlucHV0IHR5cGU9ImNoZWNrYm94IiBjaGVja2VkPXt7Im5vdCIgbGF5ZXIuaGlkZGVufX0ge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAidG9nZ2xlTGF5ZXIiIGxheWVyKX19IC8+PHNwYW4gY2xhc3M9ImxheWVyIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjp7e2xheWVyLmNvbG9yfX0iPiZuYnNwOzwvc3Bhbj4ge3tsYXllci50aXRsZX19IDwvbGFiZWw+IDwvZGl2PiB7ey9pZn19IHt7L2VhY2h9fSA8L2Zvcm0+IDwvbS1ob3Zlcj4gPC9kaXY+IDwvZGl2Pg==`,
            this.nextPlaytime = null,
            this.playState = "stopped",
            this.playSpeed = 1,
            this.playLength = 240,
            this.timeRange = (0,
            b.computed)("timebox", "playState", "playTime", "playLength", function() {
                return "stopped" === this.playState ? this.timebox : [this.playTime - 1e3 * this.playLength, this.playTime]
            }),
            this.layers = (0,
            b.computed)("model", function() {
                return this.model.zoom = [-30, 40],
                b.A.from(this.model.layers.map((a)=>{
                    if (a = b.O.create(a),
                    a.color instanceof Array && a.color.length) {
                        const [c,d,e] = a.color;
                        a.color = `#${("000000" + (c << 16 | d << 8 | e).toString(16)).slice(-6)}`
                    }
                    if ("tiles" === a.type)
                        a.tile = a.tiles[0];
                    else if ("geojson" === a.type) {
                        const b = a.geojson.features.reduce((a,b)=>{
                            const c = b.geometry;
                            return "LineString" === c.type ? (b.properties.linear || c.fixed || (c.fixed = !0,
                            c.coordinates = c.coordinates.map((a)=>d(a))),
                            a.concat(c.coordinates)) : "Polygon" === c.type ? (b.properties.linear || c.fixed || (c.fixed = !0,
                            c.coordinates[0] = c.coordinates[0].map((a)=>d(a))),
                            a.concat(c.coordinates[0])) : void console.assert(`${c.type} not supported`)
                        }
                        , []);
                        let c = Infinity
                          , g = -Infinity
                          , h = -Infinity
                          , i = Infinity;
                        b.forEach(([a,b])=>{
                            a < c && (c = a),
                            a > h && (h = a),
                            b < i && (i = b),
                            b > g && (g = b)
                        }
                        ),
                        a.bbox = [c, g, h, i];
                        const j = a.geojson.features.reduce((a,b)=>{
                            const {properties: c} = b;
                            if (c.timecode) {
                                if (!c.timecode_fixed) {
                                    let a = 0;
                                    c.timecode = c.timecode.map((b)=>a += b),
                                    c.timecode_fixed = !0
                                }
                                return [e(a[0], c.timecode[0]), f(a[1], c.timecode.slice(-1)[0])]
                            }
                            return a
                        }
                        , [Infinity, -Infinity]);
                        j[0] !== Infinity && (a.timebox = j)
                    }
                    return a
                }
                ))
            }),
            this.bbox = (0,
            b.computed)("layers", function() {
                const a = this.layers.filter((a)=>a.bbox).map((a)=>a.bbox);
                return [e.apply(null, a.map((a)=>a[0])), f.apply(null, a.map((a)=>a[1])), f.apply(null, a.map((a)=>a[2])), e.apply(null, a.map((a)=>a[3]))]
            }),
            this.timebox = (0,
            b.computed)("layers", function() {
                const a = this.layers.filter((a)=>a.timebox).map((a)=>a.timebox);
                return a.length ? [e.apply(null, a.map((a)=>a[0])), f.apply(null, a.map((a)=>a[1]))] : null
            }),
            this.playTime = (0,
            b.computed)("timebox", function() {
                return this.timebox ? this.timebox[0] : null
            }),
            this.duration = (0,
            b.computed)("timebox", function() {
                const {timebox: a} = this;
                return a[1] - a[0]
            }),
            this.pos = (0,
            b.computed)("bbox", function() {
                return [(this.bbox[0] + this.bbox[2]) / 2, (this.bbox[1] + this.bbox[3]) / 2]
            }),
            this.z = (0,
            b.computed)("bbox", function() {
                const a = this.bbox
                  , b = a[2] - a[0]
                  , c = a[1] - a[3]
                  , [d,e] = this.model.zoom
                  , {width: f, height: h} = this.gl.canvas;
                let i;
                for (i = e; i >= d && !(b * g(2, i) < f && c * g(2, i) < h); i--)
                    ;
                return i
            }),
            this.world = (0,
            b.computed)("pos", "z", "width", "height", "playState", "playTime", "layers.@each.hidden", "children.@each.layerWorld", "cammode", function() {
                const {cammode: a} = this;
                if ("child" === a) {
                    const a = this.children.filter((a)=>a.layerWorld)[0];
                    return a ? a.layerWorld.slice() : (0,
                    c.identity)()
                }
                if ("perspective" === a) {
                    const {width: a, height: b} = this;
                    let d = (0,
                    c.identity)();
                    return d = (0,
                    c.perspective)(h / 2, a / b, 1, 1e3),
                    d = (0,
                    c.multiply)(d, (0,
                    c.lookAt2)([0, -40, 60], [0, 0, 0], [0, 0, 1])),
                    d = (0,
                    c.multiply)(d, (0,
                    c.scaling)(g(2, this.z), g(2, this.z), 1)),
                    d = (0,
                    c.multiply)(d, (0,
                    c.translation)(-this.pos[0], -this.pos[1], 0)),
                    d
                } else {
                    const {width: a, height: b} = this;
                    let d = (0,
                    c.identity)();
                    return d = (0,
                    c.multiply)(d, (0,
                    c.orthographic)(a, b, -1, 1)),
                    d = (0,
                    c.multiply)(d, (0,
                    c.scaling)(g(2, this.z), g(2, this.z), 1)),
                    d = (0,
                    c.multiply)(d, (0,
                    c.translation)(-this.pos[0], -this.pos[1], 0)),
                    d
                }
            }),
            this.pnow = (0,
            b.computed)("playState", function() {
                return this.now
            })
        }
        zoom(a) {
            if (!a)
                this.bbox = this.bbox.slice();
            else {
                const [b,c] = this.model.zoom;
                this.z = e(c, f(b, this.z + a))
            }
        }
        toggleLayer(a) {
            a.hidden = !a.hidden
        }
        panAndZoom(a, b, c) {
            1 === c && (a = -a / 2,
            b = -b / 2),
            c = this.z - c;
            const [d,e] = this.model.zoom;
            d <= c && c <= e && (this.pos = [this.pos[0] - a / g(2, c), this.pos[1] - b / g(2, c)],
            this.z = c)
        }
    }
    a.default = k
}),
define(37, ["exports", 44], function(a, b) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    class c extends b.Component {
        constructor() {
            super(),
            this.template = `PGRpdiBjbGFzcz0ibW9kYWwgZmFkZSB7eyJpZiIgb3BlbiAiaW4ifX0ge3tjbGFzc319IiBzdHlsZT17eyJpZiIgb3BlbiAiZGlzcGxheTpibG9jazsifX0+IDxkaXYgY2xhc3M9Im1vZGFsLWRpYWxvZyI+IDxkaXYgY2xhc3M9Im1vZGFsLWNvbnRlbnQiPiA8ZGl2IGNsYXNzPSJtb2RhbC1oZWFkZXIiPiA8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImNsb3NlIiBkYXRhLWRpc21pc3M9Im1vZGFsIiBhcmlhLWxhYmVsPSJDbG9zZSIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAiY2xvc2UiKX19PiA8c3BhbiBhcmlhLWhpZGRlbj0idHJ1ZSI+JnRpbWVzOzwvc3Bhbj4gPC9idXR0b24+IDxoNCBjbGFzcz0ibW9kYWwtdGl0bGUiPnt7dGl0bGV9fTwvaDQ+IDwvZGl2PiA8ZGl2IGNsYXNzPSJtb2RhbC1ib2R5Ij4gPHlpZWxkLWJsb2NrIHBhcmFtcz17eyJib2R5In19IC8+IDwvZGl2PiA8ZGl2IGNsYXNzPSJtb2RhbC1mb290ZXIiPiA8eWllbGQtYmxvY2sgcGFyYW1zPXt7ImZvb3RlciJ9fSAvPiA8IS0tIDxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIGJ0bi1kZWZhdWx0IiBkYXRhLWRpc21pc3M9Im1vZGFsIiB7eyJhY3Rpb24iICgibm9leHBhbmQiICJjbG9zZSIpfX0+IENsb3NlIDwvYnV0dG9uPiAtLT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+`
        }
        close() {
            this.setOpen(!1)
        }
    }
    a.default = c
}),
define(38, ["exports", 44], function(a, b) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.default = class extends b.Component {
        constructor() {
            super(),
            this.template = "PHByZSBjbGFzcz17e2NsYXNzfX0+e3ttb2RlbC50ZXh0fX08L3ByZT4="
        }
    }
}),
define(39, ["exports", 44, 45, 48], function(a, b, c, d) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    class e extends b.Component {
        constructor() {
            super(),
            this.template = `PGRpdiBjbGFzcz0id2lkZ2V0LXRhYmxlIj4ge3sjaWYgc29ydGVkLmxlbmd0aH19IHt7I2lmIHNlbGVjdGFibGV9fSA8bGFiZWwgc3R5bGU9InBhZGRpbmctbGVmdDogOHB4Ij4gPGlucHV0LWNoZWNrYm94IHZhbHVlPXt7YWxsQ2hlY2tlZH19IGNoYW5nZUFjdGlvbj17eyJmbiIgdG9nZ2xlQWxsfX0gLz4gQWxsIDwvbGFiZWw+ICh7e29tb2RlbC5zZWxlY3RlZC5sZW5ndGh9fSByb3dzIHNlbGVjdGVkKSB7ey9pZn19IDx5aWVsZC1ibG9jayBwYXJhbXM9e3tvbW9kZWwuc2VsZWN0ZWR9fSAvPiB7ey9pZn19IDx0YWJsZSBjbGFzcz0idGFibGUgdGFibGUtc3RyaXBlZCI+IDx0aGVhZD4gPHRyPiB7eyNpZiBzZWxlY3RhYmxlfX08dGg+PC90aD57ey9pZn19IHt7I2VhY2ggb21vZGVsLmNvbHVtbnMgYXMgfGNvbCBpbmRleHx9fSA8dGggY2xhc3M9ImludGVyYWN0aXZlIHRleHQte3tjb2wuYWxpZ259fSIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAic29ydGJ5IiBpbmRleCl9fT4ge3tjb2wudGl0bGV9fSB7eyNpZiAoImlzLWVxdWFsIiBpbmRleCBzb3J0KX19IDxzcGFuIGNsYXNzPSJnbHlwaGljb24gZ2x5cGhpY29uLXNvcnQtYnktYXR0cmlidXRlc3t7ImlmIiBkZXNjZW5kaW5nICItYWx0IiAiIn19Ij48L3NwYW4+IHt7L2lmfX0gPC90aD4ge3svZWFjaH19IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keT4ge3sjZWFjaCBwYWdpbmF0ZWQgYXMgfHJvd3x9fSA8dHI+IHt7I2lmIHNlbGVjdGFibGV9fSA8dGQ+IDxpbnB1dC1jaGVja2JveCB2YWx1ZT17e3Jvdy5zZWxlY3RlZH19IGNoYW5nZUFjdGlvbj17eyJjdXJyeSIgKCJub2V4cGFuZCIgKCJzZXQiICgibm9leHBhbmQiIHJvdy5zZWxlY3RlZCkpKX19IC8+IDwvdGQ+IHt7L2lmfX0ge3sjZWFjaCAoInppcCIgcm93LnZhbHVlcyBvbW9kZWwuY29sdW1ucykgYXMgfGNvbHx9fSA8dGQgY2xhc3M9InRleHQte3tjb2wuMC5hbGlnbn19Ij4ge3sjaWYgY29sLjAubGlzdH19IHt7I2VhY2ggY29sLjEgYXMgfHZhbHx9fSB7eygoImNvbmNhdCIgImZvcm1hdC0iIGNvbC4wLmZvcm1hdHRlcikgdmFsKX19IHt7L2VhY2h9fSB7e2Vsc2V9fSB7eygoImNvbmNhdCIgImZvcm1hdC0iIGNvbC4wLmZvcm1hdHRlcikgY29sLjEpfX0ge3svaWZ9fSA8L3RkPiB7ey9lYWNofX0gPC90cj4ge3svZWFjaH19IDwvdGJvZHk+IDwvdGFibGU+IHt7I2lmICgiaXMtZ3JlYXRlciIgbnVtUGFnZXMgMSl9fSA8bmF2IGNsYXNzPSJ0ZXh0LWNlbnRlciI+IDx1bCBjbGFzcz0icGFnaW5hdGlvbiBwYWdpbmF0aW9uLXNtIj4gPGxpIGNsYXNzPSJ7eyJpZiIgcGFnZXIucHJldi5kaXNhYmxlZCAiZGlzYWJsZWQifX0iPiA8YSByb2xlPSJidXR0b24iIGFyaWEtbGFiZWw9IlByZXZpb3VzIiB7eyJhY3Rpb24iICgibm9leHBhbmQiICJwcmV2UGFnZSIpfX0+IDxzcGFuIGFyaWEtaGlkZGVuPSJ0cnVlIj4mbGFxdW87PC9zcGFuPiA8L2E+IDwvbGk+IHt7I2VhY2ggcGFnZXIucGFnZXMgYXMgfHBhZ2V8fX0gPGxpIGNsYXNzPSJ7eyJpZiIgcGFnZS5hY3RpdmUgImFjdGl2ZSJ9fSB7eyJpZiIgcGFnZS5kaXNhYmxlZCAiZGlzYWJsZWQifX0iPjxhIHJvbGU9ImJ1dHRvbiIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAic2V0cGFnZSIgcGFnZS5udW0pfX0+e3twYWdlLm51bX19PC9hPjwvbGk+IHt7L2VhY2h9fSA8bGkgY2xhc3M9Int7ImlmIiBwYWdlci5uZXh0LmRpc2FibGVkICJkaXNhYmxlZCJ9fSI+IDxhIHJvbGU9ImJ1dHRvbiIgYXJpYS1sYWJlbD0iTmV4dCIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAibmV4dFBhZ2UiKX19PiA8c3BhbiBhcmlhLWhpZGRlbj0idHJ1ZSI+JnJhcXVvOzwvc3Bhbj4gPC9hPiA8L2xpPiA8L3VsPiA8L25hdj4ge3svaWZ9fSA8L2Rpdj4=`,
            this.selectable = (0,
            c.computed)("selectableForce", "model.actions", function() {
                return this.selectableForce || !!(this.model.actions && this.model.actions.length)
            }),
            this.omodel = (0,
            c.computed)("model", function() {
                this.model.selectedIds || (this.model.selectedIds = c.A.create()),
                console.time("selected"),
                this.model.selected = c.A.from(this.model.selectedIds.map((a)=>this.model.rows.filter((b)=>b.id === a)[0]).filter((a)=>a)),
                this.model.selected.forEach((a)=>a.selected = !0),
                console.timeEnd("selected"),
                console.time("modlification");
                const a = c.O.create(this.model);
                return a.rows = c.A.from(a.rows, (a)=>{
                    const b = new c.O;
                    return Object.assign(b, a)
                }
                ),
                console.timeEnd("modlification"),
                a
            }),
            this.sort = (0,
            c.computed)("omodel.sortcolumn", function() {
                return this.omodel.sortcolumn
            }),
            this.descending = (0,
            c.computed)("omodel.sortorder", function() {
                return "descending" === this.omodel.sortorder
            }),
            this.sorted = (0,
            c.computed)("sort", "descending", "omodel.rows", function() {
                const a = this.omodel.rows
                  , b = this.sort
                  , c = this.descending;
                if (console.time("sorted"),
                null === b || !a.length)
                    return a;
                const e = `sort${b}`;
                if (!(e in a[0])) {
                    let c;
                    if (this.model.columns[b].sortkey) {
                        const a = this.model.columns[b].sortkey;
                        c = (b)=>null === b ? "" : b[a]
                    } else
                        c = this.model.columns[b].list ? (a)=>null === a ? "" : a.length : (a)=>null === a ? "" : a;
                    a.forEach((a)=>{
                        a[e] = c(a.values[b])
                    }
                    )
                }
                const f = a.slice();
                return (0,
                d.sort)(f, (a,b)=>(a = a[e],
                b = b[e],
                a === b ? 0 : c ? a < b ? 1 : -1 : a >= b ? 1 : -1)),
                console.timeEnd("sorted"),
                f
            }),
            this.page = 0,
            this.pagesizes = [50, 100],
            this.pagesize = 50,
            this.numPages = (0,
            c.computed)("sorted", "pagesize", function() {
                return this.pagesize ? Math.ceil(this.sorted.length / this.pagesize) : 1
            }),
            this.paginated = (0,
            c.computed)("sorted", "page", "pagesize", function() {
                const a = this.page
                  , b = this.pagesize;
                return -1 === b ? this.sorted : this.sorted.slice(a * b, (a + 1) * b)
            }),
            this.allChecked = (0,
            c.computed)("omodel.rows.@each.selected", function() {
                const a = this.omodel.selected
                  , b = this.omodel.selectedIds;
                return a.splice.apply(a, [0, a.length].concat(this.omodel.rows.filter((a)=>a.selected))),
                b.splice.apply(b, [0, b.length].concat(a.map((a)=>a.id))),
                this.omodel.rows.filter((a)=>a.selected).length === this.omodel.rows.length
            }),
            this.pagersize = 7,
            this.pager = (0,
            c.computed)("page", "pagesize", "sorted", function() {
                if (this.sorted.length < this.pagesize)
                    return [];
                const a = {
                    prev: {
                        disabled: 0 === this.page,
                        page: this.page - 1
                    },
                    next: {
                        disabled: this.page === this.numPages - 1,
                        page: this.page + 1
                    },
                    pages: []
                };
                for (let b = 0, c = this.numPages; b < c; b++)
                    a.pages.push({
                        num: b + 1,
                        active: b === this.page
                    });
                if (a.pages.length > this.pagersize) {
                    const b = {
                        num: "...",
                        disabled: !0
                    }
                      , c = this.pagersize - 1
                      , d = c >> 1
                      , e = (c >> 1) + (1 & c);
                    this.page <= d ? a.pages.splice(c - 1, a.pages.length - c, b) : this.page >= a.pages.length - 1 - e ? a.pages.splice(1, a.pages.length - c, b) : (a.pages.splice(this.page + e - 1, a.pages.length - 1 - (this.page + e - 1), b),
                    a.pages.splice(1, this.page - (d - 1), b))
                }
                return a
            })
        }
        toggleAll() {
            this.allChecked ? this.omodel.rows.forEach((a)=>a.selected = !1) : this.omodel.rows.forEach((a)=>a.selected = !0)
        }
        prevPage() {
            0 < this.page && this.page--
        }
        nextPage() {
            this.page < this.numPages - 1 && this.page++
        }
        setpage(a) {
            "..." === a || (this.page = a - 1)
        }
        sortby(a) {
            var b = this.sort;
            b === a ? this.descending = !this.descending : (this.descending = !0,
            this.sort = a)
        }
    }
    a.default = e
}),
define(4, ["exports", 44, 47], function(a, b, c) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.default = function() {
        const {widgets: a, formats: d} = window.marv_extensions || {};
        this.variant = "MARV_VARIANT";
        for (let[c,[d,e]] of Object.entries(a || {}))
            this.components[`widget-${c}`] = class extends b.Component {
                constructor() {
                    super(),
                    this.template = "PGRpdj48L2Rpdj4="
                }
                didInsertElement() {
                    this.state = d(this.getElement(), JSON.parse(JSON.stringify(this.model)))
                }
                willRemoveElement() {
                    e(this.state)
                }
            }
            ;
        for (let[a,b] of Object.entries(d || {}))
            this.helpers[`format-${a}`] = new c.Helper((a)=>b(...JSON.parse(JSON.stringify(a))));
        "serviceWorker"in navigator && (()=>{
            var a = _asyncToGenerator(function*() {
                try {
                    yield navigator.serviceWorker.register("sw.js")
                } catch (a) {}
            });
            return function() {
                return a.apply(this, arguments)
            }
        }
        )()()
    }
}),
define(40, ["exports", 44, 45], function(a, b, c) {
    "use strict";
    function d(a, b) {
        do {
            if (a === b)
                return !0;
            b = b.parentElement
        } while (b.parentElement);return !1
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    class e extends b.Component {
        constructor() {
            super(),
            this.template = `PGRpdiBjbGFzcz0id2lkZ2V0LXRhZyI+IDxzcGFuIGNsYXNzPSJkcm9wZG93biB7eyJpZiIgZm9jdXNlZCAib3BlbiJ9fSIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAia2V5ZG93biIgb249ImtleWRvd24iKX19IHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgImZvY3VzSW4iIG9uPSJmb2N1c2luWCIpfX0ge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAiZm9jdXNPdXQiIG9uPSJmb2N1c291dFgiKX19PiA8c3BhbiBjbGFzcz0iYmFja2Ryb3AiIHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgImZvY3VzSW4iKX19Pjwvc3Bhbj4gPGJ1dHRvbiByb2xlPSJidXR0b24iIGNsYXNzPSJ7e2NsYXNzfX0iIGRpc2FibGVkPXt7ZnVsbGRpc2FibGVkfX0ge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAiZm9jdXNJbiIpfX0+IHRhZyA8c3BhbiBjbGFzcz0iY2FyZXQiPjwvc3Bhbj4gPC9idXR0b24+IDx1bCBjbGFzcz0iZHJvcGRvd24tbWVudSB7e21lbnVDbGFzc319IGJ1bGstZHJvcGRvd24iPiB7eyNpZiBkaXNhYmxlZH19IDxsaSBjbGFzcz0idGV4dC1jZW50ZXIiPiA8YSByb2xlPSJidXR0b24iIHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgImFsdEFjdGlvbiIpfX0+IFNpZ24gaW4gdG8gdGFnIDwvYT4gPC9saT4ge3tlbHNlfX0gPGxpPiA8YSByb2xlPSJidXR0b24iPiA8aW5wdXQtY29udHJvbCB0eXBlPSJ0ZXh0IiBjbGFzcz0iZm9ybS1jb250cm9sIGlucHV0LXNtIiBwbGFjZWhvbGRlcj0iTGFiZWwiIHZhbHVlPXt7c2VhcmNofX0gY2hhbmdlQWN0aW9uPXt7ImN1cnJ5IiAoIm5vZXhwYW5kIiAoInNldCIgKCJub2V4cGFuZCIgc2VhcmNoKSkpfX0gLz4gPC9hPiA8L2xpPiA8IS0tIDxsaSBjbGFzcz0iZHJvcGRvd24taGVhZGVyIj5UYWdzPC9saT4gLS0+IHt7I2VhY2ggcmVzdWx0cyBhcyB8dGFnfH19IDxsaSBjbGFzcz0ieHRhZyI+IDxhIHJvbGU9ImJ1dHRvbiIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAidG9nZ2xlIiB0YWcpfX0gdGl0bGU9e3t0YWcuaGludH19IHRhYmluZGV4PS0xPiA8c3BhbiBjbGFzcz0iZ2x5cGhpY29uIGdseXBoaWNvbi17e3RhZy5zdGF0ZX19Ij48L3NwYW4+IHt7dGFnLm5hbWV9fSA8L2E+IDwvbGk+IHt7L2VhY2h9fSA8bGkgcm9sZT0ic2VwYXJhdG9yIiBjbGFzcz0iZGl2aWRlciI+PC9saT4gPGxpIGNsYXNzPSJ0ZXh0LXJpZ2h0Ij4gPGEgcm9sZT0iYnV0dG9uIj4gPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1kZWZhdWx0IGJ0bi14cyIgdHlwZT0iYnV0dG9uIiB7eyJhY3Rpb24iICgibm9leHBhbmQiICJjYW5jZWwiKX19PkNhbmNlbDwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPSJidG4gYnRuLWRlZmF1bHQgYnRuLXhzIiB0eXBlPSJidXR0b24iIHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgInNhdmUiKX19IGRpc2FibGVkPXt7dW5zYXZlYWJsZX19PlNhdmUgdGFnczwvYnV0dG9uPiA8L2E+IDwvbGk+IHt7L2lmfX0gPC91bD4gPC9zcGFuPiA8L2Rpdj4=`,
            this.tags = null,
            this.alltags = null,
            this.search = "",
            this.changed = !1,
            this.unsaveable = (0,
            c.computed)("changed", function() {
                return !this.changed
            }),
            this.realtags = (0,
            c.computed)("focused", function() {
                if (!this.tags.length)
                    return c.A.create();
                if ("string" == typeof this.tags[0])
                    return c.A.create(this.tags);
                else {
                    let a = this.tags[0].tags.slice();
                    return this.tags.forEach((b)=>{
                        a = a.filter((a)=>~b.tags.indexOf(a))
                    }
                    ),
                    c.A.create(a)
                }
            }),
            this.mtags = (0,
            c.computed)("realtags", function() {
                return c.A.create(this.realtags)
            }),
            this.malltags = (0,
            c.computed)("focused", function() {
                return c.A.create(this.alltags)
            }),
            this.vtags = (0,
            c.computed)("mtags.@each", "malltags.@each", function() {
                return c.A.create(this.realtags.map((a)=>c.O.create({
                    name: a,
                    state: ~this.mtags.indexOf(a) ? "check" : "unchecked"
                })).concat(this.malltags.filter((a)=>!~this.realtags.indexOf(a)).map((a)=>c.O.create({
                    name: a,
                    state: ~this.mtags.indexOf(a) ? "check" : "unchecked"
                }))))
            }),
            this.results = (0,
            c.computed)("search", "vtags.@each", function() {
                const a = this.search
                  , b = new RegExp(a,"i")
                  , d = c.A.create(this.vtags.filter((a)=>b.test(a.name)));
                return a && !d.filter((b)=>b.name === a).length && d.push(c.O.create({
                    name: `create "${a}"`,
                    action: "create",
                    label: this.search
                })),
                d
            }),
            this.focused = !1
        }
        focusIn(a) {
            console.log("in", a.target),
            this.search = "",
            this.changed = !1,
            this.focused = !this.focused
        }
        focusOut(a) {
            if (console.log("out", a.target, a.relatedTarget),
            a.relatedTarget) {
                const b = this.getElement();
                if (d(b, a.relatedTarget))
                    return
            }
            this.focused = !1
        }
        toggle(a) {
            "create" === a.action ? (this.mtags.push(this.search),
            !~this.malltags.indexOf(this.search) && this.malltags.push(this.search),
            this.search = "") : ~this.mtags.indexOf(a.name) ? this.mtags.splice(this.mtags.indexOf(a.name), 1) : this.mtags.push(a.name),
            this.changed = !0
        }
        keydown(a) {
            const b = a;
            13 === b.keyCode && (this.search && (~this.malltags.indexOf(this.search) ? ~this.mtags.indexOf(this.search) ? this.mtags.splice(this.mtags.indexOf(this.search), 1) : this.mtags.push(this.search) : (this.malltags.push(this.search),
            this.mtags.push(this.search)),
            this.search = ""),
            this.changed = !0,
            b.stopPropagation(),
            b.preventDefault())
        }
        cancel() {
            this.focused = !1
        }
        save() {
            this.changed || this.toggle({
                action: "create"
            });
            const a = this.mtags.filter((a)=>!~this.realtags.indexOf(a))
              , b = this.realtags.filter((a)=>!~this.mtags.indexOf(a));
            this.changeAction({
                added: a,
                removed: b
            }),
            this.focused = !1
        }
    }
    a.default = e
}),
define(41, ["exports", 44], function(a, b) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    class c extends b.Component {
        constructor() {
            super(),
            this.template = "PHZpZGVvIHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgInRvZ2dsZSIpfX1jb250cm9scz17e2NvbnRyb2xzfX0gc3JjPXt7bW9kZWwuc3JjfX0gLz4=",
            this.controls = !0
        }
        toggle() {
            const a = this.getElement();
            a.paused ? a.play() : a.pause()
        }
    }
    a.default = c
}),
define(42, ["exports", 44, 45], function(a, b, c) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.default = class extends b.Component {
        constructor() {
            super(),
            this.template = `e3sjaWYgZXJyb3J9fSA8ZGl2IGNsYXNzPSJqdW1ib3Ryb24iPiA8aDEgY2xhc3M9InRleHQtY2VudGVyIj4gPHNwYW4gY2xhc3M9ImdseXBoaWNvbiBnbHlwaGljb24te3tpY29ufX0iPjwvc3Bhbj4gPC9oMT4gPHAgY2xhc3M9InRleHQtY2VudGVyIj57e2Vycm9yfX08L3A+IDwvZGl2PiB7e2Vsc2UgaWYgKCJpcy1wcm9taXNlIiBtb2RlbCl9fSA8ZGl2IGNsYXNzPSJjc3Nsb2FkLWxvYWRlciI+IDxkaXYgY2xhc3M9ImNzc2xvYWQtaW5uZXIgY3NzbG9hZC1vbmUiPjwvZGl2PiA8ZGl2IGNsYXNzPSJjc3Nsb2FkLWlubmVyIGNzc2xvYWQtdHdvIj48L2Rpdj4gPGRpdiBjbGFzcz0iY3NzbG9hZC1pbm5lciBjc3Nsb2FkLXRocmVlIj48L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9Imp1bWJvdHJvbiI+IDxoMSBjbGFzcz0idGV4dC1jZW50ZXIiPiA8c3BhbiBjbGFzcz0iZ2x5cGhpY29uIGdseXBoaWNvbi17e2ljb259fSI+PC9zcGFuPiA8L2gxPiA8cCBjbGFzcz0idGV4dC1jZW50ZXIiPkxvYWRpbmcgLi4uPC9wPiA8L2Rpdj4ge3tlbHNlfX08eWllbGQtYmxvY2sgLz57ey9pZn19`,
            this.model = (0,
            c.computed)("scope.parent.ctx.model", function() {
                return this.scope.parent.ctx.model
            }),
            this.error = (0,
            c.computed)("acl", "model.error", function() {
                if (!this.acl) {
                    const a = this.user ? 403 : 401;
                    return this[`e${a}`]
                }
                if (this.model && this.model.error) {
                    const a = this.model.error.status;
                    return this[`e${a}`] ? this[`e${a}`] : JSON.stringify(this.model && this.model.error)
                }
            })
        }
    }
}),
define(44, ["exports", 45, 47, 58], function(a, b, c, d) {
    function e(a) {
        return (0,
        d.parse)(/[ <{]/.test(a) ? a : atob(a))
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.components = a.RoutableComponent = a.Component = a.Scope = void 0;
    const f = {};
    class g extends b.O {
        constructor() {
            super()
        }
        subscope(a) {
            return a.parent = this,
            g.create(a)
        }
        getHelper(a) {
            const b = this.ctx.getOwner().helpers[a];
            if (!b)
                throw new Error(`Helper ${a} does not exist.`);
            return b
        }
        getPath(a) {
            if (!f[a]) {
                let b = a.split(".")
                  , c = [];
                if (2 === b.length && "ctx" === b[0])
                    c.push(`return typeof obj.${a} !== 'undefined' ? obj.${a} : undefined;`);
                else {
                    b = b.map((a)=>/^-?[0-9]*$/.test(a) ? `obj[${a}]` : `obj.${a}`);
                    for (let a = 0, d = b.length - 1; a < d; a++)
                        c.push(`if(obj) obj=${b[a]}; else return '';`);
                    c.push(`return obj ? ${b[b.length - 1]} : '';`)
                }
                f[a] = new Function("obj",c.join("\n"))
            }
            return f[a](this)
        }
        setPath(a, b) {
            const c = a.split(".");
            let d = this;
            for (let e = 0, f = c.length - 1; e < f; e++)
                if (d = d[c[e]],
                "object" != typeof d)
                    throw new Error(`Cannot set path ${a} to ${b}`);
            d[c[c.length - 1]] = b
        }
        evaluate(a, b, c, d) {
            if ("Literal" === a.type)
                return ~b.indexOf(a.value) || b.push(a.value),
                `__lit[${b.indexOf(a.value)}]`;
            if ("Identifier" === a.type)
                return ~c.indexOf(a.value) || c.push(a.value),
                `__ide[${c.indexOf(a.value)}]`;
            else {
                if ("path" === a.value[0].value)
                    return b.push(a.value[1].value),
                    `__lit[${b.length - 1}]`;
                if ("noexpand" === a.value[0].value)
                    return b.push(a.value.slice(1)),
                    `__lit[${b.length - 1}]`;
                const e = this.evaluate(a.value[0], b, c, d)
                  , f = `obj.getHelper(${e})`;
                ~d.indexOf(f) || d.push(f);
                const g = `__con${d.indexOf(f)}`
                  , h = a.value.slice(1).map((e)=>this.evaluate(e, b, c, d));
                return `${g}.fn.call(obj, [${h}], triggers)`
            }
        }
        evalExpression(a, b) {
            if ("Literal" === a.type)
                return a.value;
            if ("Identifier" === a.type)
                return b[a.value] = !0,
                this.getPath(a.value);
            if (!a.fn) {
                const b = []
                  , c = []
                  , d = []
                  , e = this.evaluate(a, b, c, d)
                  , f = [];
                for (let a in c)
                    f.push(`triggers["${c[a]}"] = true;`);
                for (let a = 0; a < d.length; a++)
                    f.push(`const __con${a} = ${d[a]};`);
                f.push(`return ${e};`),
                a.fn = new Function("obj","triggers","__lit","__ide",f.join("\n")),
                a.__lit = b,
                a.__ide = c
            }
            return a.fn(this, b, a.__lit, a.__ide.map((b)=>this.getPath(b)))
        }
        createUpdater(a, c, d, e, f) {
            c.updaters.push(d);
            (0,
            b.convertComputed)(this.instance, d, {
                get() {
                    let a = {};
                    const c = this.evalExpression(e, a);
                    f.apply(this, [c]),
                    (0,
                    b.updateComputed)(this, d, Object.keys(a))
                },
                set: null,
                keys: [],
                notify: ()=>{
                    a.__dirty__.push([this, d, c.depth]),
                    a.getOwner().asyncEvent(()=>{}
                    )()
                }
            }),
            this[d]
        }
    }
    a.Scope = g;
    class h {
        constructor(a, b, c, d) {
            this.depth = b.depth + 1,
            this.ast = a[c],
            this.parent = b,
            this.owner = d,
            this.updaters = [],
            this.leafs = [],
            this.prefix = `${b.prefix}-${c}`,
            this.scope = b.childScope ? b.childScope(c) : b.scope
        }
        render() {}
        unrender(a) {
            this.getElements().forEach((a)=>a.remove()),
            a || (this.updaters.forEach((a)=>(0,
            b.deleteComputed)(this.scope.instance, a)),
            this.updaters = []),
            this.component ? (this.component.dispose(),
            this.component = null) : this.outlet ? (this.outlet.unrender(),
            this.outlet = null) : (this.leafs.forEach((a)=>a.unrender()),
            this.leafs = [])
        }
        getElements() {
            return this.elements ? this.elements : this.component ? this.component.tree.leafs.reduce((a,b)=>a.concat(b.getElements()), []) : this.leafs.reduce((a,b)=>a.concat(b.getElements()), [])
        }
    }
    class i extends b.O {
        constructor() {
            super(),
            this.template = "<span>This is the default component template</span>",
            this.__dirty__ = []
        }
        get __parsedTemplate__() {
            return this.__proto__.__parsedTemplate || (this.__proto__.__parsedTemplate = {}),
            this.__proto__.__parsedTemplate[this.template] || (this.__proto__.__parsedTemplate[this.template] = this.template ? e(this.template) : []),
            this.__proto__.__parsedTemplate[this.template]
        }
        init() {
            super.init(),
            this.scope.ctx = this
        }
        unrender() {
            this.tree && (this.willRemoveElement(),
            this.tree.unrender(),
            this.tree = null)
        }
        dispose() {
            console.assert(!this.__component_disposed__, `component ${this.__oid__} was already disposed`),
            this.__component_disposed__ = !0,
            this.unrender(),
            super.dispose()
        }
        didInsertElement() {}
        willRemoveElement() {}
        render() {
            this.__ast__ || (this.__ast__ = this.__parsedTemplate__),
            this.tree = new h([this.__ast__],{
                prefix: "watch",
                scope: this.scope,
                depth: this.__pleaf__ ? this.__pleaf__.depth : 0
            },0,null),
            this.tree.element = this.__parentElement__,
            this.renderLevel(this.__ast__, this.tree),
            this.didInsertElement()
        }
        renderLevel(a, d) {
            const e = this.instance
              , f = e.__doc__
              , k = e.getOwner().rootNode;
            for (let j = 0, i = a.length; j < i; j++) {
                const i = a[j]
                  , l = new h(a,d,j,k);
                if (d.leafs.push(l),
                "Literal" === i.type)
                    l.element = f.createTextNode(i.value),
                    l.elements = [l.element],
                    d.element.appendChild(l.element);
                else if ("Tag" === i.type) {
                    l.element = f.createElement(i.name),
                    l.elements = [l.element],
                    d.element.appendChild(l.element);
                    for (let a = 0, b = i.attributes.length; a < b; a++) {
                        const b = i.attributes[a];
                        if (b.name)
                            "Literal" === b.value.type ? l.element.setAttribute(b.name, b.value.value) : l.scope.createUpdater(k, l, `${l.prefix}-${b.name}`, b.value, (a)=>{
                                "undefined" != typeof a && !1 !== a ? l.element.setAttribute(b.name, a) : l.element.removeAttribute(b.name)
                            }
                            );
                        else {
                            let a = null;
                            l.scope.createUpdater(k, l, `${l.prefix}-${Math.random()}`, b.value, (b)=>{
                                b ? (a = b.name,
                                l.element.setAttribute(a, b.value),
                                b.listener && l.element.addEventListener(...b.listener)) : a && (l.element.removeAttribute(a),
                                a = null)
                            }
                            )
                        }
                    }
                    this.renderLevel(i.content, l)
                } else if ("Identifier" === i.type && "ctx.outlet" === i.value)
                    l.element = d.element,
                    l.scope.createUpdater(k, l, `${l.prefix}-outlet`, i, (a)=>{
                        l.outlet && l.outlet.unrender(),
                        l.outlet = a,
                        a && (Object.assign(a, {
                            __doc__: f,
                            __owner__: e.__owner__,
                            __parentElement__: l.element,
                            __parentNode__: this
                        }),
                        a.render())
                    }
                    );
                else if ("Identifier" === i.type || "Expression" === i.type) {
                    l.elements = [l.element = f.createTextNode("")],
                    d.element.appendChild(l.element);
                    let a = 0;
                    l.scope.createUpdater(k, l, `${l.prefix}-content`, i, (b)=>{
                        const g = l.elements;
                        if (b instanceof c.HTML) {
                            const c = f.createElement("div");
                            c.innerHTML = b.content,
                            l.elements = Array.from(c.children),
                            l.elements.forEach((a)=>d.element.insertBefore(a, g[0])),
                            g.forEach((a)=>a.remove()),
                            a = 0
                        } else
                            "undefined" == typeof b && (b = ""),
                            1 == a ? l.elements[0].textContent = b : (l.elements = [f.createTextNode(b)],
                            d.element.insertBefore(l.elements[0], g[0]),
                            g.forEach((a)=>a.remove()),
                            a = 1)
                    }
                    )
                } else if ("Condition" === i.type)
                    l.element = d.element,
                    l.scope.createUpdater(k, l, `${l.prefix}-condition`, i.conditions, (a)=>{
                        if (l.branch !== a) {
                            l.unrender(!0),
                            l.branch = a;
                            const b = i.branches[l.branch];
                            if (b) {
                                this.renderLevel(b, l);
                                const a = this.getNextElement(l)
                                  , c = l.element;
                                l.getElements().forEach((b)=>c.insertBefore(b, a)),
                                l.render()
                            }
                            delete this.updateFn
                        }
                    }
                    );
                else if ("Loop" === i.type) {
                    const a = i.params[0] || "__itemname__"
                      , b = i.params[1] || "__indexname__";
                    l.element = d.element,
                    i.list.list = !0,
                    l.scope.createUpdater(k, l, `${l.prefix}-loop`, i.list, (c)=>{
                        if (c && c.length) {
                            if (1 === l.leafs.length && i.catchempty)
                                l.unrender(!0);
                            else if (l.leafs.length) {
                                for (let a = c.length * i.content.length, b = l.leafs.length; a < b; a++)
                                    l.leafs[a].unrender();
                                l.leafs.splice(c.length * i.content.length, l.leafs.length - c.length * i.content.length)
                            }
                            for (let b = 0, d = l.leafs.length; b < d; b++)
                                l.leafs[b].scope[a] = c[0 | b / i.content.length];
                            for (let d = l.leafs.length / i.content.length, e = c.length; d < e; d++)
                                l.childScope = ()=>g.create({
                                    parent: l.scope,
                                    [a]: c[d],
                                    [b]: d,
                                    ctx: l.scope.ctx
                                }),
                                this.renderLevel(i.content, l)
                        } else
                            l.childScope && (l.childScope = null,
                            l.unrender(!0)),
                            i.catchempty && !l.leafs.length && this.renderLevel(i.catchempty, l);
                        const d = e.getNextElement(l);
                        l.getElements().forEach((a)=>l.element.insertBefore(a, d)),
                        l.render(),
                        delete this.updateFn
                    }
                    )
                } else {
                    console.assert("Component" === i.type);
                    const a = i.name
                      , g = e.getOwner().components[a];
                    if (!g)
                        throw new Error(`Component ${a} does not exist`);
                    l.element = d.element;
                    const h = l.component = g.create({
                        __doc__: f,
                        __owner__: e.__owner__,
                        __parentElement__: l.element,
                        __parentNode__: this,
                        __past__: l.ast,
                        __pleaf__: l,
                        scope: l.scope.subscope({})
                    });
                    i.attributes.forEach((a)=>{
                        "Literal" === a.value.type ? l.component[a.name] = a.value.value : (0,
                        b.convertComputed)(h.instance, a.name, {
                            get() {
                                const c = {}
                                  , d = l.scope.evalExpression(a.value, c);
                                return (0,
                                b.updateComputed)(h.instance, a.name, Object.keys(c).map((a)=>`scope.parent.${a}`)),
                                d
                            },
                            set: null,
                            keys: []
                        })
                    }
                    ),
                    l.component.render()
                }
            }
        }
        getAst() {
            return this.__past__
        }
        getElement() {
            return this.tree.leafs[0].element
        }
        getNextElement(a) {
            console.assert(a.parent, "Need first element from sibling render node");
            const b = a.parent
              , c = b.leafs.slice(b.leafs.indexOf(a) + 1);
            for (let d = 0, e = c.length; d < e; d++)
                return console.assert(c[d].elements[0].parentElement === b.element),
                c[d].elements[0];
            return null
        }
        update() {
            let a = 0;
            const b = this.__dirty__;
            for (b.sort((c,a)=>c[2] < a[2] ? -1 : 1); a < b.length; )
                b[a][0][b[a][1]],
                a++;
            this.__dirty__ = []
        }
    }
    a.Component = i;
    a.RoutableComponent = class extends i {
        constructor() {
            super(),
            this.scope = g.create()
        }
        modelHook() {}
        redirect() {}
        error() {}
        loading() {}
        didEnter() {
            console.log("didEnter", this.__name)
        }
        didLeave() {
            console.log("didLeave", this.__name)
        }
        willTransition() {
            console.log("willTransition", this.__name)
        }
        transitionTo(a) {
            this.getOwner().router.transitionTo(a)
        }
    }
    ;
    a.components = {
        "link-to": class extends i {
            constructor() {
                super(),
                this.template = "<a href={{chref}} class={{cclass}}><yield-block/></a>",
                this.chref = (0,
                b.computed)("href", "__owner__.router.currentQuery", function() {
                    const a = this.__owner__.router.currentQuery;
                    return `${window.location.pathname}${a ? `?${a}` : ""}#/${this.href}`
                }),
                this.cclass = (0,
                b.computed)("__owner__.router.currentRoute", "href", function() {
                    return `${this.class || ""} ${this.getOwner().router.currentRoute === this.href ? "active" : ""}`.trim()
                })
            }
        }
        ,
        "delegate-component": class extends i {
            render() {
                this.__ast__ = [{
                    type: "Component",
                    name: this.component,
                    attributes: this.getAst().attributes.map((b)=>({
                        name: b.name,
                        value: {
                            type: "Identifier",
                            value: `ctx.${b.name}`
                        }
                    })),
                    params: [],
                    content: [{
                        type: "Component",
                        name: "yield-block",
                        attributes: [],
                        params: [],
                        content: []
                    }]
                }],
                super.render()
            }
        }
        ,
        "yield-block": class extends i {
            init() {
                super.init();
                var a = this.__parentNode__;
                this.__ast__ = a.getAst().content,
                this.scope.ctx = this.scope.parent.parent.ctx;
                let c = []
                  , d = [];
                d = a.getAst().params,
                c = function(a, b, c) {
                    for (let d of a)
                        if (d[b] === c)
                            return d;
                    return null
                }(this.getAst().attributes, "name", "params"),
                c && (c = "Invocation" === c.value.type ? c.value.value : [c.value],
                d.forEach((a,d)=>{
                    if ("Literal" === c[d].type)
                        this.scope[a] = c[d].value;
                    else {
                        const e = c[d].value;
                        (0,
                        b.convertComputed)(this.scope.instance, a, {
                            get: ()=>this.scope.getPath(`parent.${e}`),
                            set: null,
                            keys: [`parent.${e}`]
                        })
                    }
                }
                ))
            }
        }
    }
}),
define(45, ["exports"], function(a) {
    function b(a) {
        return a instanceof p || a instanceof n
    }
    function c(a, f, g, i) {
        const j = a[h.watched]
          , k = j[/^[0-9]+/.test(f) ? "@each" : f];
        if (k)
            for (let[a,j] of Object.entries(k)) {
                j.subtree._hasLeaf && (i || g) && ("@each" === f ? (g.forEach((c)=>{
                    b(c) && e(c.instance, j.origin, j.subtree, a)
                }
                ),
                i.forEach((c)=>{
                    b(c) && d(c.instance, j.origin, j.subtree, a)
                }
                )) : (b(g) && e(g.instance, j.origin, j.subtree, a),
                b(i) && d(i.instance, j.origin, j.subtree, a)));
                const k = j.origin
                  , l = k.target
                  , m = k.property
                  , n = l[h.watchers][m];
                n.cached && (n.cached = !1,
                n.notify && n.notify(l, f, g, i),
                c(l, m))
            }
    }
    function d(a, c, e, f) {
        const g = a[h.watched];
        for (let i in e) {
            const j = e[i]
              , k = `${f}.${i}`;
            if (g[i] || (g[i] = {}),
            g[i][k]) {
                g[i][k].ref++;
                continue
            }
            if (g[i][k] = {
                ref: 1,
                origin: c,
                subtree: j
            },
            !!j._hasLeaf)
                if ("@each" == i)
                    for (let e = 0, f = a.length; e < f; e++) {
                        const f = a[e];
                        b(f) && d(f.instance, c, j, k)
                    }
                else {
                    const e = a[h.watchers][i]
                      , f = e ? e.value : a[i];
                    b(f) && d(f.instance, c, j, k)
                }
        }
    }
    function e(a, c, d, f) {
        const g = a[h.watched];
        for (let i in d) {
            const j = d[i]
              , k = `${f}.${i}`;
            if (!--g[i][k].ref && (delete g[i][k],
            !!j._hasLeaf))
                if ("@each" == i)
                    for (let d = 0, f = a.length; d < f; d++) {
                        const f = a[d];
                        b(f) && e(f.instance, c, j, k)
                    }
                else {
                    const d = a[h.watchers][i]
                      , f = d ? d.value : a[i];
                    b(f) && e(f.instance, c, j, k)
                }
        }
    }
    function f(a) {
        const b = a.join("");
        if (!k[b]) {
            const c = {};
            Object.defineProperty(c, "_hasLeaf", {
                value: !1,
                enumerable: !1,
                writable: !0
            }),
            a.forEach((a)=>{
                const b = a.split(".");
                let d = c;
                for (let c = 0, e = b.length; c < e; c++) {
                    const a = b[c];
                    d._hasLeaf = !0,
                    d[a] || (d[a] = {},
                    Object.defineProperty(d[a], "_hasLeaf", {
                        value: !1,
                        enumerable: !1,
                        writable: !0
                    })),
                    d = d[a]
                }
            }
            ),
            k[b] = c
        }
        return k[b]
    }
    function g(a, b, e) {
        a[h.watchers][b] = {
            keys: e.keys,
            value: null,
            cached: !1,
            notify: e.notify
        };
        const g = a[h.watchers][b];
        Object.defineProperty(a, b, {
            get() {
                if (!g.cached) {
                    const d = g.value;
                    g.value = e.get.apply(a),
                    g.value instanceof Promise && (g.promise = g.value,
                    g.promise.then((d)=>{
                        g.promise === g.value && (g.value = d,
                        c(a, b, g.promise, g.value),
                        g.cached = !0)
                    }
                    , (d)=>{
                        g.promise === g.value && (g.value = {
                            error: d
                        },
                        c(a, b, g.promise, g.value),
                        g.cached = !0)
                    }
                    )),
                    c(a, b, d, g.value),
                    g.cached = !0
                }
                return g.value
            },
            set(a) {
                e.set && e.set.apply(this, arguments);
                const c = this[h.watchers][b];
                c.cached = !0,
                c.value = a
            },
            configurable: !0
        }),
        e.keys.length && d(a, {
            target: a,
            property: b,
            wdesc: g
        }, f(e.keys), `${a[h.uuid]}:${b}`),
        a[h.watched][b] && c(a, b, "", "")
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.computed = function(...a) {
        let b = a.pop()
          , c = null;
        return "object" == typeof b && (c = b.set,
        b = b.get),
        new j(a,b,c)
    }
    ,
    a.convertComputed = g,
    a.updateComputed = function(a, b, c) {
        const g = a[h.watchers][b];
        if (c.length !== g.keys.length || c.some((a)=>!~g.keys.indexOf(a))) {
            const i = {
                target: a,
                property: b,
                wdesc: g
            };
            g.keys.length && e(a, i, f(g.keys), `${a[h.uuid]}:${b}`),
            c.length && d(a, i, f(c), `${a[h.uuid]}:${b}`),
            a[h.watchers][b].keys = c,
            a[h.watchers][b].cached = !1
        }
    }
    ,
    a.deleteComputed = function(a, b) {
        const c = a[h.watchers][b];
        console.assert(c, `${b} is not defined on ${a.__oid__}`);
        c.keys.length && e(a, {
            target: a,
            property: b,
            wdesc: c
        }, f(c.keys), `${a[h.uuid]}:${b}`),
        delete a[h.watchers][b],
        delete a[b]
    }
    ;
    const h = {
        uuid: Symbol("uuid"),
        watchers: Symbol("watcher"),
        watched: Symbol("watched")
    };
    let i = 0;
    class j {
        constructor(a, b, c) {
            this.keys = a,
            this.get = b,
            this.set = c
        }
    }
    a.Computed = j;
    const k = {}
      , l = {
        push(a) {
            return this.splice(this.length, 0, a)
        },
        pop() {
            return this.splice(this.length - 1, 1)
        },
        unshift(a) {
            return this.splice(0, 0, a)
        },
        shift() {
            return this.splice(0, 1)
        }
    }
      , m = {
        set(a, b, d) {
            const e = a[b];
            return !(e !== d) || (c(a, b, e, d),
            a[b] = d,
            !0)
        },
        get(a, b, d) {
            if ("splice" === b)
                return function(b, d, ...e) {
                    const f = a.splice.apply(a, arguments);
                    return c(a, "@each", f, e),
                    e.length !== f.length && c(a, "length"),
                    f
                }
                ;
            if ("string" == typeof b && "-" === b[0]) {
                let c = +b;
                if (0 > c)
                    return b = a.length + c + "",
                    Reflect.get(a, b, d)
            }
            return l[b] || a[b]
        }
    };
    class n extends Array {
        constructor() {
            return super(),
            Object.defineProperties(this, {
                [h.watchers]: {
                    enumerable: !1,
                    value: {}
                },
                [h.watched]: {
                    enumerable: !1,
                    value: {}
                },
                [h.uuid]: {
                    enumerable: !1,
                    value: i++
                },
                instance: {
                    enumerable: !1,
                    value: this
                }
            }),
            new Proxy(this,m)
        }
        static create(a) {
            return a instanceof Array ? n.from(a) : new n
        }
    }
    a.A = n;
    const o = {
        set(a, b, d, e) {
            if (a[h.watched][b]) {
                let f;
                if (a[h.watchers][b] ? (f = a[h.watchers][b].value,
                a[h.watchers][b].cached = !0) : f = a[b],
                f === d)
                    return !0;
                c(e, b, f, d)
            }
            return Reflect.set(a, b, d, e),
            !0
        }
    };
    class p {
        constructor() {
            return Object.defineProperties(this, {
                [h.watchers]: {
                    enumerable: !1,
                    value: {}
                },
                [h.watched]: {
                    enumerable: !1,
                    value: {}
                },
                [h.uuid]: {
                    enumerable: !1,
                    value: i++
                },
                instance: {
                    enumerable: !1,
                    value: this
                }
            }),
            new Proxy(this,o)
        }
        init() {}
        dispose() {}
        static create(a) {
            const b = new this;
            for (let c in Object.assign(b, a),
            b) {
                const a = b[c];
                a instanceof j && g(b, c, a)
            }
            return b.init(),
            b
        }
        getOwner() {
            return this.__owner__
        }
        get __oid__() {
            return `${this.constructor.name}(${this[h.uuid]})`
        }
    }
    a.O = p
}),
define(47, ["exports", 50], function(a, b) {
    function c(a) {
        const b = `action${a.type}`
          , c = a.currentTarget.getAttribute(`data-${b}`);
        console.assert(c, `No action id found for ${a.type} for`, a.currentTarget);
        const {action: d, args: e} = this.actions[`${a.type}-${c}`]
          , f = this.ctx;
        let g = "function" == typeof d ? d : f.scope.evalExpression(d, {});
        const h = "function" == typeof g ? g : f[g];
        console.assert(h, `There is no action ${g} on ${f.__oid__}`),
        h.apply(f, e.map((b)=>this.evalExpression(b, {})).concat([a]))
    }
    var d = Math.pow;
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.helpers = a.HTML = a.Helper = void 0;
    class e {
        constructor(a) {
            this.fn = a
        }
    }
    a.Helper = e;
    class f {
        constructor(a) {
            this.content = a
        }
    }
    a.HTML = f;
    a.helpers = {
        action: new e(function([a]) {
            let b = a
              , d = [];
            "function" != typeof a && ([b,...d] = a);
            const e = d.filter((b)=>"on" === b.name)[0]
              , f = d.filter((b)=>"capture" === b.name)[0]
              , g = e ? e.value : "click";
            d = d.filter((b)=>"on" !== b.name && "capture" !== b.name);
            const h = this.ctx.getOwner().actions.id++
              , i = this.actions || (this.actions = {});
            return i[`${g}-${h}`] = {
                action: b,
                args: d
            },
            this.handleEvent = this.ctx.getOwner().asyncEvent(c),
            {
                name: `data-action${g}`,
                value: h,
                listener: [g, this, !!f]
            }
        }
        ),
        "muc-if": new e(function([a], b) {
            for (let c = 0, d = a.length; c < d; c++) {
                const d = a[c];
                if (!d)
                    return c;
                if (this.evalExpression(d, b))
                    return c
            }
            return -1
        }
        ),
        "muc-loop": new e(function([a], b) {
            for (let c of Object.keys(b))
                delete b[c],
                b[`${c}.@each`] = !0;
            return a
        }
        ),
        curry: new e(function(a) {
            return (...b)=>(b = b.map((a)=>({
                type: "Literal",
                value: a
            })),
            this.evalExpression({
                type: "Expression",
                value: a[0][0].value.concat(b)
            }, {}))
        }
        ),
        set: new e(function(a) {
            return this.setPath(a[0][0].value, a[1])
        }
        ),
        setter: new e(function(a) {
            const b = a[0];
            return (...c)=>{
                this.setPath(b, a.slice(1).concat(c)[0])
            }
        }
        ),
        cast: new e(function(a) {
            const c = {
                string: (a)=>a + "",
                number: (a)=>+a,
                boolean: (a)=>!!a,
                moment: (a)=>new b.Moment(a)
            }
              , d = a[0]
              , e = a[1];
            return (a)=>e(c[d](a))
        }
        ),
        fn: new e(function(a) {
            return (...b)=>a[0].apply(this.ctx, a.slice(1).concat(b))
        }
        ),
        concat: new e((a)=>a.join("")),
        if: new e((a)=>{
            const b = a[0]
              , c = a[1]
              , d = a[2];
            return b ? c : d
        }
        ),
        "is-equal": new e((a)=>a[0] === a[1]),
        "is-greater": new e((a)=>a[0] > a[1]),
        contains: new e((a)=>!!a[0] && -1 !== a[0].indexOf(a[1])),
        upper: new e((b)=>`${b}`.toUpperCase()),
        not: new e((b)=>!b[0]),
        and: new e((b)=>b.every((a)=>a)),
        or: new e((b)=>b.some((a)=>a)),
        increment: new e((b)=>b[0] + (b[1] || 1)),
        "print-relatime": new e((c)=>new b.Moment(c[0]).fromNow()),
        "format-timedelta": new e(([a])=>{
            if (null === a)
                return "";
            a = a / 1e3 >> 0;
            const c = a / 3600 >> 0;
            a %= 3600;
            const d = a / 60 >> 0;
            return a %= 60,
            c ? `${c}h ${(0,
            b.zeropad)(d)}m ${(0,
            b.zeropad)(a)}s` : d ? `${d}m ${(0,
            b.zeropad)(a)}s` : `${a}s`
        }
        ),
        "format-date": new e(([a,c])=>a ? new b.Moment(a).format(c || "YYYY-MM-DD") : ""),
        "format-datetime": new e(([a,c])=>a ? new b.Moment(a).format(c || "YYYY-MM-DD HH:mm:ss") : ""),
        divide: new e(([a,b])=>a / b),
        "format-localestring": new e(([a,b])=>a.toLocaleString(navigator.language, {
            style: b,
            currency: "EUR"
        })),
        "format-float": new e(([a,b])=>{
            b = "number" == typeof b ? b : 2;
            const c = d(10, b);
            return (a * c >> 0) / c
        }
        ),
        "format-html": new e(([a])=>new f(a)),
        "format-icon": new e(([a])=>a ? new f(`<span class="glyphicon glyphicon-${a.icon} ${a.classes}" title="${a.title}"></span>`) : ""),
        "format-link": new e((a)=>{
            a = a[0] || {};
            const b = a.external ? " target=_blank" : ""
              , c = a.href
              , d = a.title;
            return new f(`<a href="${c}" ${b}>${d}</a>`)
        }
        ),
        "format-pill": new e((a)=>new f(`<span class="badge">${a}</span>`)),
        "format-route": new e((a,b)=>{
            a = a[0] || {},
            a.route = a.route || "",
            b["ctx.__owner__.router.currentQuery"] = !0;
            const c = window.location.search;
            return new f(`<a href="${window.location.pathname}${c || ""}#/${a.route.replace(".", "/")}/${a.id}">${a.title}</a>`)
        }
        ),
        "format-filesize": new e((a)=>{
            if (0 === a[0])
                return "0.00 B";
            const b = Math.floor(Math.log(a[0]) / 6.931471805599453);
            return (a[0] / d(1024, b)).toFixed(2) + " " + " KMGTP".charAt(b) + "B"
        }
        ),
        "format-string": new e((b)=>b[0]),
        "format-int": new e((b)=>b[0]),
        stringify: new e((b)=>JSON.stringify(...b)),
        "is-promise": new e(([a])=>a instanceof Promise),
        get: new e(([a,b])=>a[b]),
        zip: new e(([a,b])=>{
            const c = a.constructor;
            return c.from(a.map((d,e)=>c.from([b[e], a[e]])))
        }
        )
    }
}),
define(48, ["exports", 45, 61], function(a, b, c) {
    function d(a) {
        let b = 0;
        for (; a >= q; )
            b |= 1 & a,
            a >>= 1;
        return a + b
    }
    function e(a, b, c) {
        for (c--; b < c; ) {
            const d = a[b];
            a[b++] = a[c],
            a[c--] = d
        }
    }
    function f(a, b, c, d) {
        let f = b + 1;
        if (f === c)
            return 1;
        if (0 > d(a[f++], a[b])) {
            for (; f < c && 0 > d(a[f], a[f - 1]); )
                f++;
            e(a, b, f)
        } else
            for (; f < c && 0 <= d(a[f], a[f - 1]); )
                f++;
        return f - b
    }
    function g(a, b, c, d, e) {
        for (d === b && d++; d < c; d++) {
            let c = a[d]
              , f = b
              , g = d;
            for (; f < g; ) {
                const b = f + g >>> 1;
                0 > e(c, a[b]) ? g = b : f = b + 1
            }
            let h = d - f;
            switch (h) {
            case 4:
                a[f + 4] = a[f + 3];
            case 3:
                a[f + 3] = a[f + 2];
            case 2:
                a[f + 2] = a[f + 1];
            case 1:
                a[f + 1] = a[f];
                break;
            default:
                for (; 0 < h; )
                    a[f + h] = a[f + h - 1],
                    h--;
            }
            a[f] = c
        }
    }
    function h(a, b, c, d, e, f) {
        let g = 0
          , h = 0
          , i = 1;
        if (0 < f(a, b[c + e])) {
            for (h = d - e; i < h && 0 < f(a, b[c + e + i]); )
                g = i,
                i = (i << 1) + 1,
                0 >= i && (i = h);
            i > h && (i = h),
            g += e,
            i += e
        } else {
            for (h = e + 1; i < h && 0 >= f(a, b[c + e - i]); )
                g = i,
                i = (i << 1) + 1,
                0 >= i && (i = h);
            i > h && (i = h);
            const d = g;
            g = e - i,
            i = e - d
        }
        for (g++; g < i; ) {
            const d = g + (i - g >>> 1);
            0 < f(a, b[c + d]) ? g = d + 1 : i = d
        }
        return i
    }
    function j(a, b, c, d, e, f) {
        let g = 0
          , h = 0
          , i = 1;
        if (0 > f(a, b[c + e])) {
            for (h = e + 1; i < h && 0 > f(a, b[c + e - i]); )
                g = i,
                i = (i << 1) + 1,
                0 >= i && (i = h);
            i > h && (i = h);
            const d = g;
            g = e - i,
            i = e - d
        } else {
            for (h = d - e; i < h && 0 <= f(a, b[c + e + i]); )
                g = i,
                i = (i << 1) + 1,
                0 >= i && (i = h);
            i > h && (i = h),
            g += e,
            i += e
        }
        for (g++; g < i; ) {
            const d = g + (i - g >>> 1);
            0 > f(a, b[c + d]) ? i = d : g = d + 1
        }
        return i
    }
    function i(a, b, c, e) {
        c || (c = 0),
        e || (e = a.length);
        let h = e - c;
        if (2 > h)
            return;
        let i = 0;
        if (h < q)
            return i = f(a, c, e, b),
            void g(a, c, e, c + i, b);
        const j = new t(a,b)
          , k = d(h);
        do {
            if (i = f(a, c, e, b),
            i < k) {
                const d = h <= k ? h : k;
                g(a, c, c + d, c + i, b),
                i = d
            }
            j.pushRun(c, i),
            j.mergeRuns(),
            c += i,
            h -= i
        } while (0 != h);j.forceMergeRuns()
    }
    function k(b, a, c, d) {
        for (; c < d; ) {
            const e = c + d >>> 1;
            b[e] < a ? c = e + 1 : d = e
        }
        return c
    }
    function l(b, a, c, d) {
        for (; c < d; ) {
            const e = c + d >>> 1;
            b[e] <= a ? c = e + 1 : d = e
        }
        return c
    }
    function m(a) {
        return function(b) {
            const c = b.length;
            return [k(b, a, 0, c), l(b, a, 0, c)]
        }
    }
    function n(a) {
        const [b,c] = a;
        return function(a) {
            const d = a.length;
            return [k(a, b, 0, d), k(a, c, 0, d)]
        }
    }
    function o(a) {
        return [0, a.length]
    }
    function p(a, b) {
        const c = Array(b.length);
        for (let d = 0, e = b.length; d < e; d++)
            c[d] = a[b[d]];
        return c
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.Crossfilter = void 0,
    a.sort = i;
    const q = 32
      , r = 7
      , s = 256;
    class t {
        constructor(a, b) {
            this.array = a,
            this.compare = b;
            const c = this.length = a.length;
            this.minGallop = r;
            const d = c < 2 * s ? c >>> 1 : s;
            this.tmp = Array(d),
            this.stackSize = 0;
            const e = 120 > this.length ? 5 : 1542 > this.length ? 10 : 119151 > this.length ? 19 : 40;
            this.runStart = Array(e),
            this.runLength = Array(e)
        }
        pushRun(a, b) {
            this.runStart[this.stackSize] = a,
            this.runLength[this.stackSize] = b,
            this.stackSize += 1
        }
        mergeRuns() {
            for (; 1 < this.stackSize; ) {
                let a = this.stackSize - 2;
                if (1 <= a && this.runLength[a - 1] <= this.runLength[a] + this.runLength[a + 1] || 2 <= a && this.runLength[a - 2] <= this.runLength[a] + this.runLength[a - 1])
                    this.runLength[a - 1] < this.runLength[a + 1] && a--;
                else if (this.runLength[a] > this.runLength[a + 1])
                    break;
                this.mergeAt(a)
            }
        }
        forceMergeRuns() {
            for (; 1 < this.stackSize; ) {
                let a = this.stackSize - 2;
                0 < a && this.runLength[a - 1] < this.runLength[a + 1] && a--,
                this.mergeAt(a)
            }
        }
        mergeAt(a) {
            let b = this.compare
              , c = this.array
              , d = this.runStart[a]
              , e = this.runLength[a]
              , f = this.runStart[a + 1]
              , g = this.runLength[a + 1];
            this.runLength[a] = e + g,
            a === this.stackSize - 3 && (this.runStart[a + 1] = this.runStart[a + 2],
            this.runLength[a + 1] = this.runLength[a + 2]),
            this.stackSize--;
            let i = j(c[f], c, d, e, 0, b);
            (d += i,
            e -= i,
            0 !== e) && (g = h(c[d + e - 1], c, f, g, g - 1, b),
            0 === g || (e <= g ? this.mergeLow(d, e, f, g) : this.mergeHigh(d, e, f, g)))
        }
        mergeLow(a, b, c, d) {
            let e = this.compare
              , f = this.array
              , g = this.tmp;
            for (let e = 0; e < b; e++)
                g[e] = f[a + e];
            let k = 0
              , l = c
              , m = a;
            if (f[m++] = f[l++],
            0 == --d) {
                for (let a = 0; a < b; a++)
                    f[m + a] = g[k + a];
                return
            }
            if (1 === b) {
                for (let a = 0; a < d; a++)
                    f[m + a] = f[l + a];
                return void (f[m + d] = g[k])
            }
            let i = this.minGallop;
            for (; ; ) {
                let a = 0
                  , c = 0
                  , n = !1;
                do
                    if (0 > e(f[l], g[k])) {
                        if (f[m++] = f[l++],
                        c++,
                        a = 0,
                        0 == --d) {
                            n = !0;
                            break
                        }
                    } else if (f[m++] = g[k++],
                    a++,
                    c = 0,
                    1 == --b) {
                        n = !0;
                        break
                    }
                while ((a | c) < i);if (n)
                    break;
                do {
                    if (a = j(f[l], g, k, b, 0, e),
                    0 !== a) {
                        for (let b = 0; b < a; b++)
                            f[m + b] = g[k + b];
                        if (m += a,
                        k += a,
                        b -= a,
                        1 >= b) {
                            n = !0;
                            break
                        }
                    }
                    if (f[m++] = f[l++],
                    0 == --d) {
                        n = !0;
                        break
                    }
                    if (c = h(g[k], f, l, d, 0, e),
                    0 !== c) {
                        for (let a = 0; a < c; a++)
                            f[m + a] = f[l + a];
                        if (m += c,
                        l += c,
                        d -= c,
                        0 === d) {
                            n = !0;
                            break
                        }
                    }
                    if (f[m++] = g[k++],
                    1 == --b) {
                        n = !0;
                        break
                    }
                    i--
                } while (a >= r || c >= r);if (n)
                    break;
                0 > i && (i = 0),
                i += 2
            }
            if (this.minGallop = 1 > i ? 1 : i,
            1 === b) {
                for (let a = 0; a < d; a++)
                    f[m + a] = f[l + a];
                f[m + d] = g[k]
            } else if (0 === b)
                throw new Error("Comparison method violates conditions");
            else
                for (let a = 0; a < b; a++)
                    f[m + a] = g[k + a]
        }
        mergeHigh(a, b, c, d) {
            let e = this.compare
              , f = this.array
              , g = this.tmp;
            for (let e = 0; e < d; e++)
                g[e] = f[c + e];
            let i = a + b - 1
              , k = d - 1
              , l = c + d - 1
              , m = 0
              , n = 0;
            if (f[l--] = f[i--],
            0 == --b) {
                m = l - (d - 1);
                for (let a = 0; a < d; a++)
                    f[m + a] = g[a];
                return
            }
            if (1 === d) {
                l -= b,
                i -= b,
                n = l + 1,
                m = i + 1;
                for (let a = b - 1; 0 <= a; a--)
                    f[n + a] = f[m + a];
                return void (f[l] = g[k])
            }
            let o = this.minGallop;
            for (; ; ) {
                let c = 0
                  , p = 0
                  , q = !1;
                do
                    if (0 > e(g[k], f[i])) {
                        if (f[l--] = f[i--],
                        c++,
                        p = 0,
                        0 == --b) {
                            q = !0;
                            break
                        }
                    } else if (f[l--] = g[k--],
                    p++,
                    c = 0,
                    1 == --d) {
                        q = !0;
                        break
                    }
                while ((c | p) < o);if (q)
                    break;
                do {
                    if (c = b - j(g[k], f, a, b, b - 1, e),
                    0 != c) {
                        l -= c,
                        i -= c,
                        b -= c,
                        n = l + 1,
                        m = i + 1;
                        for (let a = c - 1; 0 <= a; a--)
                            f[n + a] = f[m + a];
                        if (0 === b) {
                            q = !0;
                            break
                        }
                    }
                    if (f[l--] = g[k--],
                    1 == --d) {
                        q = !0;
                        break
                    }
                    if (p = d - h(f[i], g, 0, d, d - 1, e),
                    0 != p) {
                        l -= p,
                        k -= p,
                        d -= p,
                        n = l + 1,
                        m = k + 1;
                        for (let a = 0; a < p; a++)
                            f[n + a] = g[m + a];
                        if (1 >= d) {
                            q = !0;
                            break
                        }
                    }
                    if (f[l--] = f[i--],
                    0 == --b) {
                        q = !0;
                        break
                    }
                    o--
                } while (c >= r || p >= r);if (q)
                    break;
                0 > o && (o = 0),
                o += 2
            }
            if (this.minGallop = 1 > o ? 1 : o,
            1 === d) {
                l -= b,
                i -= b,
                n = l + 1,
                m = i + 1;
                for (let a = b - 1; 0 <= a; a--)
                    f[n + a] = f[m + a];
                f[l] = g[k]
            } else if (0 === d)
                throw new Error("Comparison method violates conditions");
            else {
                m = l - (d - 1);
                for (let a = 0; a < d; a++)
                    f[m + a] = g[a]
            }
        }
    }
    class u extends b.O {
        constructor(a, b=32) {
            super(),
            console.assert(32 >= b, "no support for wide matrix"),
            this.data = new Uint32Array(a),
            this.gen = 0
        }
        extend(a) {
            const b = new Uint32Array(this.data.length + a);
            b.set(this.data),
            this.data = b
        }
        clear(a) {
            for (let b = 0, c = this.data.length; b < c; b++)
                this.data[b] &= ~(1 << a);
            this.gen++
        }
        isIn(a, b=-1) {
            return !(this.data[a] & b)
        }
        update(a) {
            this.data = a.update(this.data),
            this.gen++
        }
        subarray(a) {
            const b = 1 << a
              , c = ~b;
            return {
                pos: b,
                neg: c,
                set: (a,d)=>{
                    d ? this.data[a] |= b : this.data[a] &= c,
                    this.gen++
                }
                ,
                isIn: (a)=>this.isIn(a),
                isGIn: (a)=>!(this.data[a] & c)
            }
        }
    }
    class v {
        constructor(a) {
            return new Uint32Array(a || 0)
        }
    }
    const w = [(a)=>a + 1, (a)=>a - 1, ()=>0];
    class x extends b.O {
        constructor() {
            super(),
            this.reduceFn = w,
            this.orderFn = (a)=>a,
            this.linear = b.A.create(),
            this.count = [],
            this.acount = [],
            this.state = [],
            this.pending = new c.Ot,
            (0,
            b.convertComputed)(this.instance, "faux", {
                keys: ["dim.lastUpdate"],
                notify: (a,b,c,d)=>{
                    this.faux,
                    "lastUpdate" === b && (this.pending = this.pending.compose(d))
                }
                ,
                get() {}
            }),
            this.faux,
            this.groups = (0,
            b.computed)("pending", "dim.xf.filters.gen", function() {
                console.time("gcalc");
                const a = this.pending;
                this.pending = new c.Ot().retain(a.olen);
                const d = this.dim.rows
                  , e = this.linear
                  , f = (a,b)=>{
                    const c = this.dim.rowIndex[a]
                      , d = this.state[a]
                      , f = this.state[a] = this.dim.filters.isGIn(c)
                      , g = d << 1 | f
                      , h = e[b];
                    2 == g ? (h.value = this.reduceFn[1](h.value, this.dim.xf.data[c]),
                    this.count[b]--) : 1 == g && (h.value = this.reduceFn[0](h.value, this.dim.xf.data[c]),
                    this.count[b]++)
                }
                  , g = (c,d)=>{
                    const e = typeof c;
                    return e == typeof d ? c < d : c === y || d !== y && ("string" == e || void 0)
                }
                  , h = (c,d)=>"object" == typeof c ? +c != +d : c !== d;
                let k = 0
                  , i = 0;
                console.time("op");
                for (let c of a.ops)
                    if ("n" === c.t)
                        for (let a = 0, b = c.n; a < b; a++) {
                            for (const a = this.mapFn(d[k]); g(e[i].key, a); )
                                i++;
                            f(k++, i)
                        }
                    else if ("i" === c.t) {
                        this.state.splice.apply(this.state, [k, 0].concat(c.i.map(()=>!0)));
                        let a, j, l = e.length;
                        for (let m = 0, n = c.i.length; m < n; m++) {
                            if (h(a, d[k])) {
                                a = d[k];
                                const c = this.mapFn(d[k]);
                                for (; i < l && g(e[i].key, c); )
                                    i++;
                                j = e[i],
                                (!j || h(c, j.key)) && (j = b.O.create({
                                    key: c,
                                    value: this.reduceFn[2]()
                                }),
                                e.splice(i, 0, j),
                                l = e.length,
                                this.count.splice(i, 0, 0),
                                this.acount.splice(i, 0, 0),
                                console.assert(j === e[i], "added group does not match"))
                            }
                            j.value = this.reduceFn[0](j.value, this.dim.xf.data[this.dim.rowIndex[k]], !0),
                            this.count[i]++,
                            this.acount[i]++,
                            f(k++, i)
                        }
                    } else if ("r" === c.t) {
                        i = 0;
                        for (let a = 0; a < c.r.length; a++) {
                            const b = this.mapFn(c.r[a][0]);
                            for (; g(e[i].key, b); )
                                i++;
                            console.assert(!h(b, e[i].key));
                            const d = e[i];
                            this.state[k + a] || (d.value = this.reduceFn[0](d.value, c.r[a][1]),
                            this.count[i]++),
                            d.value = this.reduceFn[1](d.value, c.r[a][1], !0),
                            this.count[i]--,
                            this.acount[i]--,
                            0 === this.acount[i] && (e.splice(i, 1),
                            this.count.splice(i, 1),
                            this.acount.splice(i, 1))
                        }
                        this.state.splice(k, c.r.length)
                    }
                return console.timeEnd("op"),
                console.timeEnd("gcalc"),
                this.linear
            })
        }
        static create(a, b=(a) =>a) {
            const c = super.create({
                dim: a,
                mapFn: b
            });
            return c.pending.insert(a.rows),
            c
        }
        filterRange() {
            return [this.mapFn(this.dim.rows[this.dim.lo]), this.mapFn(this.dim.rows[this.dim.hi])]
        }
        size() {
            return this.groups.length
        }
        reduce(a, b, d) {
            return this.reduceFn = [a, b, d],
            this.linear.splice(0, this.linear.length),
            this.count = [],
            this.acount = [],
            this.state = [],
            this.pending = new c.Ot().insert(this.dim.rows),
            this
        }
        reduceCount() {
            return this.reduce(...w)
        }
        reduceSum(a) {
            return this.reduce((b,c)=>b + a(c), (b,c)=>b - a(c), ()=>0)
        }
        order(a) {
            return this.orderFn = a,
            this
        }
        orderNatural() {
            return this.orderFn = (a)=>a,
            this
        }
        top(a) {
            const b = this.groups
              , c = b.filter((a,b)=>this.count[b]).sort((c,a)=>{
                const b = this.orderFn(c.value)
                  , d = this.orderFn(a.value);
                return b < d ? -1 : b > d ? 1 : c < a ? -1 : 1
            }
            ).reverse()
              , d = b.filter((a,b)=>!this.count[b]).sort((c,a)=>{
                const b = this.orderFn(c.value)
                  , d = this.orderFn(a.value);
                return b < d ? -1 : b > d ? 1 : c < a ? -1 : 1
            }
            );
            return c.concat(d).slice(0, a).map((a)=>({
                key: a.key === y ? null : a.key,
                value: a.value
            }))
        }
        all() {
            return this.groups
        }
        calcGroups() {
            return this.groups
        }
        dispose() {}
    }
    const y = null;
    class z extends b.O {
        constructor() {
            super(),
            this.filterFx = o,
            this.filterFn = ()=>!0,
            this.lo = this.hi = 0,
            this.rowsPerValue = new v,
            this.rows = [],
            this.rowIndex = new v,
            this.rowHidden = new v,
            this.groups = Array(32)
        }
        static create(a, b, e) {
            const d = super.create({
                xf: a,
                filters: b
            });
            return d.accessor = (a)=>{
                const b = "function" == typeof e ? e(a) : new Function("d",`return d.${e};`)(a);
                return "function" == typeof b ? b.apply(a) : b
            }
            ,
            d.update(new c.Ot().insert(a.data)),
            d
        }
        update(a) {
            let b = 0
              , d = new c.Ot().retain(this.rows.length);
            for (let c of a.ops)
                "n" === c.t ? b += c.n : "i" === c.t ? (d = d.compose(this.insert(b, c.i)),
                b += c.i.length) : d = d.compose(this.remove(b, c.r));
            this.lastUpdate = d
        }
        remove(a, b) {
            const d = b.length
              , e = new c.Ot
              , f = new v(this.rowsPerValue.length - d);
            if (f.set(this.rowsPerValue.slice(0, a)),
            f.set(this.rowsPerValue.slice(a + d), a),
            this.rowsPerValue = f,
            !this.rowsPerValue.length)
                return e.remove(this.rows.map((a)=>[a])),
                this.rows = [],
                this.rowIndex = new v(0),
                this.rowHidden = new v(0),
                e;
            let g = 0;
            for (let c = 0, f = this.rows.length; c < f; c++) {
                const f = this.rowIndex[c];
                a <= f && f < a + d ? (g++,
                e.remove([[this.rows[c], b[f - a]]])) : e.retain(1)
            }
            const h = []
              , j = new v(this.rows.length - g)
              , k = new v(this.rows.length - g);
            for (let c = 0, e = 0, f = this.rows.length; c < f; c++) {
                const b = this.rowIndex[c];
                a <= b && b < a + d || (h[e] = this.rows[c],
                j[e] = b >= a + d ? b - d : b,
                k[e] = this.rowHidden[c],
                e++)
            }
            return this.rows = h,
            this.rowIndex = j,
            this.rowHidden = k,
            e
        }
        insert(a, b) {
            const d = new c.Ot
              , e = b.map(this.accessor)
              , f = new v(b.length);
            let g, h, j = [];
            if (e[0]instanceof Array) {
                for (let a = 0, b = e.length; a < b; a++)
                    f[a] = e[a].length || 1;
                const a = f.reduce((a,b)=>a + b, 0);
                g = new v(a);
                let b = 0;
                for (let a = 0, c = e.length; a < c; a++)
                    e[a].length ? e[a].forEach((c)=>{
                        j.push(c),
                        g[b++] = a
                    }
                    ) : (j.push(y),
                    g[b++] = a);
                console.assert(b === a, "should be identical")
            } else
                f.fill(1),
                j.splice.apply(j, [0, 0].concat(e)),
                g = Uint32Array.from(e, (b,a)=>a);
            h = new v(j.length);
            const k = Array.from(g, (a,b)=>b);
            i(k, (c,a,b)=>{
                let d = j[c]
                  , e = j[a];
                return (b && (console.log("cmp", d, e, c, a),
                d === e ? console.log(0) : typeof d == typeof e ? console.log(d < e ? -1 : 1) : d === y ? console.log(-1) : e === y ? console.log(1) : "string" == typeof d && "number" == typeof e ? console.log(-1) : "number" == typeof d && "string" == typeof e && console.log(1)),
                d === e) ? 0 : typeof d == typeof e ? (d.valueOf && (d = d.valueOf(),
                e = e.valueOf()),
                d < e ? -1 : d > e ? 1 : 0) : d === y ? -1 : e === y ? 1 : "string" == typeof d && "number" == typeof e ? -1 : "number" == typeof d && "string" == typeof e ? 1 : void console.assert(!1, "did compare value")
            }
            ),
            j = p(j, k),
            g.set(p(g, k));
            const l = this.rows.length
              , m = j.length
              , n = new v(this.rowsPerValue.length + b.length)
              , o = []
              , q = new v(l + m)
              , r = new v(l + m);
            for (let c = 0; c < l; c++)
                this.rowIndex[c] >= a && (this.rowIndex[c] += b.length);
            for (let c = 0; c < m; c++)
                g[c] += a;
            n.set(this.rowsPerValue.subarray(0, a), 0),
            n.set(f, a),
            n.set(this.rowsPerValue.subarray(a), a + b.length);
            let s = 0
              , t = 0
              , u = 0;
            const [w,x] = this.filterFx(j)
              , z = [];
            for (; t < l && u < m; s++)
                this.rows[t] <= j[u] ? (o[s] = this.rows[t],
                r[s] = this.rowHidden[t],
                q[s] = this.rowIndex[t],
                d.retain(1),
                t++) : (o[s] = j[u],
                r[s] = h[u],
                q[s] = g[u],
                d.insert([j[u]]),
                u < w ? (z.push(s),
                this.lo++,
                this.hi++) : u < x ? (!this.filterFn(j[u]) && z.push(s),
                this.hi++) : z.push(s),
                u++);
            for (d.retain(l - t); t < l; t++,
            s++)
                o[s] = this.rows[t],
                r[s] = this.rowHidden[t],
                q[s] = this.rowIndex[t];
            for (d.insert(j.slice(u)); u < m; u++,
            s++)
                o[s] = j[u],
                r[s] = h[u],
                q[s] = g[u],
                u < w ? (z.push(s),
                this.lo++,
                this.hi++) : u < x ? (!this.filterFn(j[u]) && z.push(s),
                this.hi++) : z.push(s);
            return this.rowsPerValue = n,
            this.rows = o,
            this.rowIndex = q,
            this.rowHidden = r,
            z.forEach((a)=>this.hide(a)),
            d
        }
        setFilter(a, b) {
            this.filters.set(a, b)
        }
        filter(a) {
            return null == a ? this.filterAll() : Array.isArray(a) ? this.filterRange(a) : "function" == typeof a ? this.filterFunction(a) : this.filterExact(a)
        }
        filterExact(a) {
            return this.filterFx = m(a),
            this.filterFn = ()=>!0,
            this.filterFlipper(this.filterFx(this.rows))
        }
        filterRange(a) {
            return this.filterFx = n(a),
            this.filterFn = ()=>!0,
            this.filterFlipper(this.filterFx(this.rows))
        }
        filterAll() {
            return this.filterFx = o,
            this.filterFn = ()=>!0,
            this.filterFlipper(this.filterFx(this.rows))
        }
        filterFunction(a) {
            return this.filterFx = o,
            this.filterFn = a,
            this.filterFlipper(this.filterFx(this.rows))
        }
        hide(a) {
            if (!this.rowHidden[a]) {
                const b = this.rowIndex[a];
                this.rowsPerValue[b]--,
                this.rowsPerValue[b] || this.setFilter(b, !0),
                this.rowHidden[a] = 1
            }
        }
        show(a) {
            if (this.rowHidden[a]) {
                const b = this.rowIndex[a];
                this.rowsPerValue[b]++,
                1 === this.rowsPerValue[b] && this.setFilter(b, !1),
                this.rowHidden[a] = 0
            }
        }
        filterFlipper([a,b]) {
            for (let c = 0; c < a; c++)
                this.hide(c);
            for (let c = a; c < b; c++)
                this.filterFn(this.rows[c]) ? this.show(c) : this.hide(c);
            for (let c = b; c < this.rows.length; c++)
                this.hide(c);
            this.lo = a,
            this.hi = b
        }
        top(a, b=0) {
            if (0 >= a)
                return [];
            const c = Array.from(this.rowIndex.filter((a)=>this.filters.isIn(a))).map((a)=>this.xf.data[a]).reverse();
            return c.slice(b, a + b)
        }
        bottom(a, b=0) {
            if (0 >= a)
                return [];
            const c = Array.from(this.rowIndex.filter((a)=>this.filters.isIn(a))).map((a)=>this.xf.data[a]);
            return c.slice(b, a + b)
        }
        group(a) {
            const b = x.create(this, a);
            return b
        }
        groupAll() {
            const a = x.create(this, ()=>0);
            return {
                g: a,
                value() {
                    const a = this.g.all();
                    return a.length ? a[0].value : this.g.reduceFn[2]()
                },
                reduceCount() {
                    return this.g.reduceCount(),
                    this
                },
                reduceSum(...a) {
                    return this.g.reduceSum(...a),
                    this
                },
                reduce(...a) {
                    return this.g.reduce(...a),
                    this
                },
                dispose() {
                    return this.g.dispose(),
                    this
                }
            }
        }
        dispose() {
            this.xf.disposeDimension(this)
        }
    }
    class A extends b.O {
        constructor(a) {
            super(),
            this.data = a || [],
            this.n = this.data.length,
            this.filters = new u(this.n),
            this.dimmask = 0,
            this.dimensions = Array(32),
            this.allFilteredA = (0,
            b.computed)("filters.gen", function() {
                return b.A.from(this.allFiltered())
            })
        }
        add(a) {
            const b = new c.Ot().retain(this.n).insert(a);
            this.n += a.length,
            b.update(this.data),
            this.filters.extend(a.length);
            for (let c of this.dimensions)
                c && c.update(b);
            return this
        }
        remove() {
            this.removeElements(this.allFiltered())
        }
        removeElements(a) {
            const b = new c.Ot;
            for (let c = 0; c < this.n; c++)
                ~a.indexOf(this.data[c]) ? b.remove([this.data[c]]) : b.retain(1);
            this.n += b.olen - b.ilen,
            b.update(this.data),
            this.filters.update(b);
            for (let c of this.dimensions)
                c && c.update(b)
        }
        clear() {
            const a = new c.Ot;
            a.remove(this.data),
            this.n = 0,
            a.update(this.data),
            this.filters.update(a);
            for (let b of this.dimensions)
                b && b.update(a)
        }
        dimension(a) {
            const b = ~this.dimmask & -~this.dimmask
              , c = 0 | Math.log(b) / 0.6931471805599453;
            return this.dimmask |= b,
            this.dimensions[c] = z.create(this, this.filters.subarray(c), a)
        }
        disposeDimension(a) {
            const b = this.dimensions.indexOf(a);
            this.dimensions[b] = void 0,
            this.dimmask ^= 1 << b,
            this.filters.clear(b)
        }
        groupAll() {
            const a = this.dimension(()=>0)
              , b = a.groupAll();
            return b
        }
        size() {
            return this.n
        }
        all() {
            return this.data
        }
        allFiltered() {
            const a = [];
            for (let b = 0; b < this.data.length; b++)
                this.filters.isIn(b) && a.push(this.data[b]);
            return a
        }
        isElementFiltered(a, b=[]) {
            let c = -1;
            return b.forEach((a)=>{
                c ^= 1 << this.dimensions.indexOf(a)
            }
            ),
            this.filters.isIn(a, c)
        }
    }
    a.Crossfilter = A
}),
define(5, ["exports", 44, 45, 48], function(a, b, c, d) {
    "use strict";
    var e = Math.log;
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    const f = (a)=>a;
    class g extends b.RoutableComponent {
        constructor() {
            function b(a, c) {
                if (Array.isArray(a)) {
                    let[d,...e] = a;
                    return e = e.map((d)=>b(d, c)),
                    g[d].apply(this, e)
                }
                return "object" == typeof a ? c : a
            }
            function a(a, c) {
                const d = {
                    title: a.title,
                    widget: {
                        type: "keyval",
                        data: {}
                    }
                };
                return d.widget.data.items = a.items.map((a)=>({
                    title: a.title,
                    formatter: a.formatter,
                    list: a.islist,
                    value: b(a.function, c)
                })),
                d
            }
            super(),
            this.template = `PHdpZGdldC13YWl0aW5nIGljb249Imxpc3QiIGFjbD17e2FwcC5hY2wuY29sbGVjdGlvbn19IHVzZXI9e3thcHAudXNlcn19IGU0MDE9IlNpZ24gaW4gdG8gYWNjZXNzIGNvbGxlY3Rpb25zIiBlNDAzPSJVc2VyIHt7YXBwLnVzZXJ9fSBpcyBub3QgcGVybWl0dGVkIHRvIGFjY2VzcyBjb2xsZWN0aW9uIHt7cGFyYW1zLmlkfX0iIGU0MDQ9IkNvbGxlY3Rpb24ge3twYXJhbXMuaWR9fSBkb2VzIG5vdCBleGlzdCI+IDxkaXYgY2xhc3M9ImNvbGxlY3Rpb24iPiA8aDI+IHt7Z3N1bW1hcnkudGl0bGV9fSA8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1yaWdodCB7eyJpZiIgZmlsdGVyc09wZW4gImFjdGl2ZSJ9fSIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAoInNldHRlciIgKCJwYXRoIiBmaWx0ZXJzT3BlbikgKCJub3QiIGZpbHRlcnNPcGVuKSkpfX0+IHt7bW9kZWwuZmlsdGVycy50aXRsZX19IDwvYnV0dG9uPiA8L2gyPiA8ZGl2IGNsYXNzPSJwYW5lbCBwYW5lbC1kZWZhdWx0Ij4ge3sjaWYgZmlsdGVyc09wZW4gYW5pbWF0ZU91dD0ibGluZWFyIiBhbmltYXRlSW49ImxpbmVhciJ9fSA8ZGl2PiA8ZGl2IGNsYXNzPSJwYW5lbC1ib2R5Ij4gPHdpZGdldC1maWx0ZXIgbW9kZWw9e3ttb2RlbC5maWx0ZXJzLndpZGdldH19IHNldEFjdGlvbj17eyJmbiIgc2V0RmlsdGVyfX0gZmlsdGVyPXt7ZmlsdGVyfX0gZGVidWc9e3tkZWJ1Z2ZpbHRlcnN9fSAvPiA8L2Rpdj4gPGhyIC8+IDwvZGl2PiB7ey9pZn19IDxkaXYgY2xhc3M9InBhbmVsLWJvZHkiPiA8d2lkZ2V0LWtleXZhbCBtb2RlbD17e2dzdW1tYXJ5LndpZGdldC5kYXRhfX0gLz4gPC9kaXY+IDwvZGl2PiA8aDI+e3ttb2RlbC5saXN0aW5nLnRpdGxlfX08L2gyPiB7eyNpZiB4ZmlsdGVycy5sZW5ndGh9fSA8ZGl2IGNsYXNzPSJwYW5lbCBwYW5lbC1kZWZhdWx0Ij4gPGRpdiBjbGFzcz0icGFuZWwtYm9keSI+IHt7I2VhY2ggeGZpbHRlcnMgYXMgfGZpbHRlcnx9fSB7eyNpZiBmaWx0ZXIuc2VsZWN0ZWR9fSA8ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiA0MDBweDsgdmVydGljYWwtYWxpZ246IHRvcCI+IDxoNj57e2ZpbHRlci50aXRsZX19IHt7I2lmIGZpbHRlci5zZWxlY3RlZC5sZW5ndGh9fTxhIHJvbGU9ImJ1dHRvbiIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAidG9nZ2xlQ250IiBmaWx0ZXIgIiIpfX0+cmVzZXQ8L2E+e3svaWZ9fTwvaDY+IDx1bCBjbGFzcz0ibGlzdC1pbmxpbmUgdGFncyIgc3R5bGU9InBhZGRpbmctbGVmdDogMTZweDsiPiB7eyNlYWNoIGZpbHRlci5ncm91cC5ncm91cHMgYXMgfGdyb3VwfH19IDxsaT4gPHNwYW4gY2xhc3M9ImJhZGdlIHRhZyB7eyJpZiIgKCJjb250YWlucyIgZmlsdGVyLnNlbGVjdGVkIGdyb3VwLmtleSBmaWx0ZXIuc2VsZWN0ZWQubGVuZ3RoKSAiYWN0aXZlIn19IiB7eyJhY3Rpb24iICgibm9leHBhbmQiICJ0b2dnbGVDbnQiIGZpbHRlciBncm91cC5rZXkpfX0+IHt7Z3JvdXAua2V5fX0gPHN0cm9uZz57e2dyb3VwLnZhbHVlfX08L3N0cm9uZz4gPC9zcGFuPiA8L2xpPiB7ey9lYWNofX0gPC91bD4gPC9kaXY+IHt7ZWxzZX19IDx3aWRnZXQtY2hhcnQgZGltPXt7ZmlsdGVyLmRpbX19IGdyb3VwPXt7ZmlsdGVyLmdyb3VwfX0gdGl0bGU9e3tmaWx0ZXIudGl0bGV9fSBmb3JtYXRYdGlja3M9e3tmaWx0ZXIuZm9ybWF0WHRpY2tzfX0geHZhbHVlcz17e2ZpbHRlci54dmFsdWVzfX0gLz4ge3svaWZ9fSB7ey9lYWNofX0gPGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogNDAwcHg7IHZlcnRpY2FsLWFsaWduOiB0b3AiPiA8aDY+QnkgVGFncyB7eyNpZiBzZWxlY3RlZFRhZ3MubGVuZ3RofX08YSByb2xlPSJidXR0b24iIHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgInRvZ2dsZVRhZyIgIiIpfX0+cmVzZXQ8L2E+e3svaWZ9fTwvaDY+IDx1bCBjbGFzcz0ibGlzdC1pbmxpbmUgdGFncyIgc3R5bGU9InBhZGRpbmctbGVmdDogMTZweDsiPiB7eyNlYWNoIHRhZ3NHcm91cC5ncm91cHMgYXMgfGdyb3VwfH19IDxsaT4gPHNwYW4gY2xhc3M9ImJhZGdlIHt7ImlmIiAoImNvbnRhaW5zIiBzZWxlY3RlZFRhZ3MgZ3JvdXAua2V5IHNlbGVjdGVkVGFncy5sZW5ndGgpICJhY3RpdmUifX0ge3siaWYiIGdyb3VwLmtleSAidGFnIiAibm90YWcifX0iIHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgInRvZ2dsZVRhZyIgZ3JvdXAua2V5KX19PiB7eygiaWYiIGdyb3VwLmtleSBncm91cC5rZXkgInVudGFnZ2VkIil9fSA8c3Ryb25nPnt7Z3JvdXAudmFsdWV9fTwvc3Ryb25nPiA8L3NwYW4+IDwvbGk+IHt7L2VhY2h9fSA8L3VsPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPSJwYW5lbCBwYW5lbC1kZWZhdWx0Ij4gPGRpdiBjbGFzcz0icGFuZWwtYm9keSI+IDx3aWRnZXQta2V5dmFsIG1vZGVsPXt7bHN1bW1hcnkud2lkZ2V0LmRhdGF9fSAvPiA8L2Rpdj4gPC9kaXY+IHt7L2lmfX0gPGRpdiBjbGFzcz0icGFuZWwgcGFuZWwtZGVmYXVsdCI+IDxkaXYgY2xhc3M9InBhbmVsLWJvZHkiPiA8d2lkZ2V0LXRhYmxlIG1vZGVsPXt7bGlzdGluZ319IHNlbGVjdGFibGVGb3JjZT10cnVlIGFzPSJzZWxlY3RlZCI+IDx1bCBjbGFzcz0ibGlzdC1pbmxpbmUgaW5saW5lLWJsb2NrIj4ge3sjaWYgYXBwLmFjbC50YWd9fSA8bGk+IDx3aWRnZXQtdGFnIGNsYXNzPSJidG4gYnRuLXhzIGJ0bi1kZWZhdWx0IiBkaXNhYmxlZD17eyJub3QiIGFwcC51c2VyfX0gZnVsbGRpc2FibGVkPXt7Im5vdCIgc2VsZWN0ZWRJZHMubGVuZ3RofX0gdGFncz17e3NlbGVjdGVkfX0gYWxsdGFncz17e2FsbHRhZ3N9fSBhbHRBY3Rpb249e3siZm4iIG9wZW5TaWduaW59fSBjaGFuZ2VBY3Rpb249e3siZm4iIGV4ZWNUYWd9fSAvPiA8L2xpPiB7ey9pZn19IHt7I2lmIGFwcC5hY2wuZmlsZV9saXN0fX0ge3sjaWYgbGlzdEZldGNoZWR9fSA8bGk+IDx3aWRnZXQtY2xpcGJvYXJkIG1vZGVsPXt7Y29weUZpbGVsaXN0fX0gLz4gPC9saT4gPGxpPiA8d2lkZ2V0LWNsaXBib2FyZCBtb2RlbD17e2NvcHlVcmxsaXN0fX0gLz4gPC9saT4ge3tlbHNlfX0gPGxpPiA8YnV0dG9uIGNsYXNzPSJidG4gYnRuLXhzIGJ0bi1kZWZhdWx0IiBkaXNhYmxlZD17eyJub3QiIHNlbGVjdGVkSWRzLmxlbmd0aH19IHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgImdldEZpbGVsaXN0Iil9fT4gZmV0Y2ggZmlsZSBsaXN0cyA8L2J1dHRvbj4gPC9saT4ge3svaWZ9fSB7ey9pZn19IHt7I2lmICgiYW5kIiBtb2RlbC5jb21wYXJlIGFwcC5hY2wuY29tcGFyZSl9fSA8bGk+IDxkaXYgY2xhc3M9IndpZGdldC1jb21wYXJlIj4gPHNwYW4gY2xhc3M9ImRyb3Bkb3duIHt7ImlmIiBjb21wYXJlT3BlbiAib3BlbiJ9fSI+IDxzcGFuIGNsYXNzPSJiYWNrZHJvcCIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAoInNldHRlciIgKCJwYXRoIiBjb21wYXJlT3BlbikgZmFsc2UpKX19Pjwvc3Bhbj4gPGJ1dHRvbiByb2xlPSJidXR0b24iIGNsYXNzPSJidG4gYnRuLXhzIGJ0bi1kZWZhdWx0IiBkaXNhYmxlZD17eyJub3QiIHNlbGVjdGVkSWRzLmxlbmd0aH19IHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgKCJzZXR0ZXIiICgicGF0aCIgY29tcGFyZU9wZW4pKSl9fT4gY29tcGFyZSA8c3BhbiBjbGFzcz0iY2FyZXQiPjwvc3Bhbj4gPC9idXR0b24+IDx1bCBjbGFzcz0iZHJvcGRvd24tbWVudSB7e21lbnVDbGFzc319IGJ1bGstZHJvcGRvd24iPiB7eyNpZiAoIm5vdCIgYXBwLnVzZXIpfX0gPGxpIGNsYXNzPSJ0ZXh0LWNlbnRlciI+IDxhIHJvbGU9ImJ1dHRvbiIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAoImZuIiBvcGVuU2lnbmluKSl9fT4gU2lnbiBpbiB0byBjb21wYXJlIDwvYT4gPC9saT4ge3tlbHNlfX0gPGxpPiA8YSByb2xlPSJidXR0b24iPiA8aW5wdXQtY29udHJvbCB0eXBlPSJ0ZXh0IiBjbGFzcz0iZm9ybS1jb250cm9sIGlucHV0LXNtIiBwbGFjZWhvbGRlcj0iUGFyYW1ldGVyIiB2YWx1ZT17e2NvbXBhcmVQYXJhbX19IGNoYW5nZUFjdGlvbj17eyJzZXR0ZXIiICgicGF0aCIgY29tcGFyZVBhcmFtKX19IC8+IDwvYT4gPC9saT4gPGxpIHJvbGU9InNlcGFyYXRvciIgY2xhc3M9ImRpdmlkZXIiPjwvbGk+IDxsaSBjbGFzcz0idGV4dC1yaWdodCI+IDxhIHJvbGU9ImJ1dHRvbiI+IDxidXR0b24gY2xhc3M9ImJ0biBidG4tZGVmYXVsdCBidG4teHMiIHR5cGU9ImJ1dHRvbiIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAoInNldHRlciIgKCJwYXRoIiBjb21wYXJlT3BlbikgZmFsc2UpKX19PkNhbmNlbDwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPSJidG4gYnRuLWRlZmF1bHQgYnRuLXhzIiB0eXBlPSJidXR0b24iIHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgImNvbXBhcmUiKX19PkNvbXBhcmU8L2J1dHRvbj4gPC9hPiA8L2xpPiB7ey9pZn19IDwvdWw+IDwvc3Bhbj4gPC9kaXY+IDwvbGk+IHt7L2lmfX0ge3sjaWYgYXBwLmFjbC5kZWxldGV9fSA8bGk+IDxidXR0b24tY29uZmlybSBidXR0b25DbGFzcz0iYnRuIGJ0bi14cyBidG4tZGVmYXVsdCIgYWN0aW9uQnV0dG9uQ2xhc3M9ImJ0biBidG4tZGVmYXVsdCIgdGl0bGU9IkRpc2NhcmQgc2VsZWN0ZWQgZGF0YXNldHMiIHRleHQ9IkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBtYXJrIGFsbCBzZWxlY3RlZCBkYXRhc2V0cyBmb3IgZGVsZXRpb24/IElmIHRoZSBjb3JyZXNwb25kaW5nIGZpbGVzIHN0aWxsIGV4aXN0cyBvbiBkaXNrLCB0aGV5IHdvdWxkIGJlIHJlLWFkZGVkIGFzIG5ldyBkYXRhc2V0cyBkdXJpbmcgdGhlIG5leHQgc2Nhbi4gVGhlIGRpc2NhcmRlZCBkYXRhc2V0cyB3b3VsZCBiZSBkZWxldGVkIGR1cmluZyB0aGUgbmV4dCBjbGVhbnVwIGFuZCB0aGVpciB0YWdzIGFuZCBjb21tZW50cyB3b3VsZCBiZSBJUlJFVk9DQUJMWSBnb25lLiIgZGlzYWJsZWQ9e3soIm5vdCIgKCJhbmQiIHNlbGVjdGVkSWRzLmxlbmd0aCBhcHAudXNlcikpfX0gYWN0aW9uPXt7ImZuIiBkZWxldGV9fSBjb25maXJtVGV4dD0iRGlzY2FyZCBzZWxlY3RlZCBkYXRhc2V0cyI+IGRpc2NhcmQgPC9idXR0b24tY29uZmlybT4gPC9saT4ge3svaWZ9fSA8L3VsPiA8L3dpZGdldC10YWJsZT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC93aWRnZXQtd2FpdGluZz4=`,
            this.filter = "",
            this.debugfilters = !1,
            this.filtersOpen = (0,
            c.computed)("filter", function() {
                return !!this.filter
            }),
            this.alltags = (0,
            c.computed)("model.all_known", function() {
                return c.A.create(this.model.all_known.tags)
            }),
            this.attrIdx = (0,
            c.computed)("model", function() {
                const a = {}
                  , b = this.model.listing.widget.data.columns.map((a)=>a.id);
                return b.forEach((b,c)=>a[b] = c),
                a
            }),
            this.prevAttrIdx = null,
            this.prevNdx = null,
            this.ndx = (0,
            c.computed)("attrIdx", function() {
                const {attrIdx: a, prevAttrIdx: b, model: e} = this;
                let f = this.prevNdx;
                return (!b || Object.entries(a || {}).some(([a,c])=>b[a] !== c)) && (f = d.Crossfilter.create(),
                this.allDim = f.dimension(()=>null),
                this.allGroup = this.allDim.group(),
                this.tagsDim = f.dimension((a)=>a.tags),
                this.tagsGroup = this.tagsDim.group(),
                this.selectedTags = c.A.create()),
                this.prevNdx = f,
                this.prevAttrIdx = a,
                f.clear(),
                console.time("ndx"),
                f.add(e.listing.widget.data.rows),
                console.timeEnd("ndx"),
                f
            }),
            this.listing = (0,
            c.computed)("ndx.allFilteredA", function() {
                const {model: a, ndx: b} = this
                  , d = c.O.create(a.listing.widget.data);
                return d.rows = b.allFilteredA,
                d.selectedIds = this.selectedIds,
                d
            });
            const g = {
                len: (a)=>a.length,
                sum: (a)=>a.reduce((a,b)=>a + b, 0),
                map: (a,b,c)=>a.map((a)=>void 0 === a[b] ? c : a[b]),
                idx: (a)=>this.attrIdx[a]
            };
            this.gsummary = (0,
            c.computed)("model.summary_config", function() {
                const b = this.model.summary_config
                  , c = this.model.listing.widget.data.rows.map((a)=>a.values);
                return a(b, c)
            }),
            this.lsummary = (0,
            c.computed)("model.summary_config", "ndx.allFilteredA", function() {
                const b = this.model.summary_config
                  , c = this.ndx.allFilteredA.map((a)=>a.values);
                return a(b, c)
            }),
            this.prevXfilters = null,
            this.xfilters = (0,
            c.computed)("ndx", "attrIdx", function() {
                const a = this.attrIdx
                  , b = this.getOwner().crxfilters || [];
                return b.some((b)=>void 0 === a[b.key]) ? (this.prevXfilters = null,
                []) : this.prevXfilters ? this.prevXfilters : this.prevXfilters = b.map((b)=>{
                    console.time(`calc ${b.key}`);
                    const d = Object.assign(c.O.create({
                        formatXticks: f
                    }), b)
                      , g = a[b.key]
                      , h = (a)=>a.values[g];
                    if (b.dimFn)
                        d.dim = this.ndx.dimension((a)=>b.dimFn(h(a)));
                    else if (b.dimHist) {
                        const c = b.dimHist;
                        let f, g;
                        if ("linear" === c.axis) {
                            const e = Math.ceil(c.max / c.bins) * c.bins;
                            f = (f)=>c.bins * f.values[a[b.key]] / e,
                            g = (a)=>a * e / c.bins
                        } else if ("logarithmic" === c.axis) {
                            const h = e(c.max);
                            f = (f)=>c.bins * e(f.values[a[b.key]]) / h,
                            g = (a)=>0 | Math.exp(a * h / c.bins)
                        } else
                            c.bins = c.axis.length,
                            f = (a)=>{
                                let b = 0;
                                for (; b + 1 < c.axis.length && h(a) > c.axis[b + 1]; )
                                    b++;
                                return b
                            }
                            ,
                            g = (a)=>c.axis[a];
                        d.dim = this.ndx.dimension((a)=>Math.min(c.bins - 1, 0 | f(a))),
                        d.formatXticks = (a)=>b.formatXticks(g(a)),
                        d.xvalues = Array.from({
                            length: c.bins
                        }, (a,b)=>b)
                    } else
                        d.dim = this.ndx.dimension((a)=>h(a)),
                        d.selected = c.A.create();
                    return d.group = d.dim.group(),
                    console.timeEnd(`calc ${b.key}`),
                    d
                }
                )
            }),
            this.selectedIds = c.A.create(),
            this.listFetched = (0,
            c.computed)("selectedIds.@each", function() {
                return !1
            }),
            this.compareParam = "",
            this.scrollEvent = ()=>{
                const a = document.scrollingElement || document.body.parentElement;
                this.state.scroll = a.scrollTop
            }
            ,
            this.state = (0,
            c.computed)(function() {
                const a = JSON.parse(localStorage.state || "{}");
                return 1 === a.version ? a : {
                    version: 1
                }
            }),
            this.model = (0,
            c.computed)("params", "filter", "app.user", _asyncToGenerator(function*() {
                var a = this;
                const b = {
                    url: `collection/${this.params.id}`
                };
                this.filter && (b.data = {
                    filter: atob(this.filter)
                }),
                window.removeEventListener("scroll", this.scrollEvent),
                document.title = `MARV > ${this.params.id}`;
                const c = yield this.app.api(b);
                return this.app.activeCollection = this.params.id,
                console.log("starting foo"),
                console.time("foo"),
                this.getOwner().addAfterRender(function() {
                    console.timeEnd("foo");
                    const b = document.scrollingElement || document.body.parentElement;
                    b.scrollTop = a.state.scroll,
                    window.addEventListener("scroll", a.scrollEvent)
                }),
                c
            })),
            this.app = (0,
            c.computed)(function() {
                return this.getOwner().lookup("application-route")
            })
        }
        getFilelist() {
            this.app.getFilelist(this.selectedIds).then((a)=>{
                this.copyFilelist = {
                    data: a.paths.join("\n"),
                    title: "file paths"
                },
                this.copyUrllist = {
                    data: a.urls.map((a)=>`${this.app.apiEndpoint}${a}`).join("\n"),
                    title: "URLs"
                },
                this.listFetched = !0
            }
            )
        }
        compare() {
            this.compareOpen = !1,
            this.transitionTo({
                route: "compare",
                models: [{
                    id: btoa(JSON.stringify({
                        collection: this.params.id,
                        ids: this.selectedIds,
                        param: this.compareParam
                    })),
                    fake: !0
                }]
            })
        }
        toggleTag(a) {
            if ("" === a)
                this.selectedTags.splice(0, this.selectedTags.length);
            else {
                const b = this.selectedTags.indexOf(a);
                ~b ? this.selectedTags.splice(b, 1) : this.selectedTags.push(a)
            }
            this.tagsDim.filterFunction((a)=>!this.selectedTags.length || ~this.selectedTags.indexOf(a))
        }
        setState(a, b) {
            this.state[a] = b,
            localStorage.state = JSON.stringify(this.state)
        }
        openSignin() {
            this.app.openSignin()
        }
        setFilter(a) {
            this.transitionTo({
                query: {
                    filter: a
                }
            })
        }
        execTag(a) {
            const b = {};
            a.added.forEach((a)=>b[a] = this.selectedIds);
            const c = {};
            a.removed.forEach((a)=>c[a] = this.selectedIds);
            const d = {
                [this.params.id]: {
                    add: b,
                    remove: c
                }
            };
            this.app.tag(d).then(()=>this.reloadModel())
        }
        delete() {
            this.app.delete(this.selectedIds).then(()=>this.reloadModel())
        }
        modelHook(a) {
            this.params = a
        }
        reloadModel() {
            this.params = {
                id: this.params.id
            }
        }
        willRemoveElement() {
            window.removeEventListener("scroll", this.scrollEvent),
            window.removeEventListener("beforeunload", this.beforeunload)
        }
        didInsertElement() {
            this.beforeunload = ()=>{
                const a = document.scrollingElement || document.body.parentElement;
                this.setState("scroll", a.scrollTop)
            }
            ,
            window.addEventListener("beforeunload", this.beforeunload)
        }
        toggleCnt(a, b) {
            if ("" === b)
                a.selected.splice(0, a.selected.length);
            else {
                const c = a.selected.indexOf(b);
                ~c ? a.selected.splice(c, 1) : a.selected.push(b)
            }
            a.dim.filterFunction((b)=>!a.selected.length || ~a.selected.indexOf(b))
        }
    }
    a.default = g
}),
define(50, ["exports"], function(a) {
    function b(a) {
        return 4800 * a / 146097
    }
    function c(b) {
        const c = new h(d(b))
          , e = Math.round
          , f = e(c.as("s"))
          , j = e(c.as("m"))
          , k = e(c.as("h"))
          , l = e(c.as("d"))
          , m = e(c.as("M"))
          , n = e(c.as("y"))
          , o = f < g.s && ["s", f] || 1 >= j && ["m"] || j < g.m && ["mm", j] || 1 >= k && ["h"] || k < g.h && ["hh", k] || 1 >= l && ["d"] || l < g.d && ["dd", l] || 1 >= m && ["M"] || m < g.M && ["MM", m] || 1 >= n && ["y"] || ["yy", n];
        let a = i[o[0]].replace(/%d/i, o[1]);
        return i[0 > b ? "future" : "past"].replace(/%s/i, a)
    }
    var d = Math.abs;
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.daysToMonths = b,
    a.relativeTime = c;
    const e = /(?=^(?:[1-9]\d{3}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[1-9]\d(?:0[48]|[2468][048]|[13579][26])|(?:[2468][048]|[13579][26])00)-02-29)T(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:[,.]\d+)?(?:Z|[+-][01]\d:[0-5]\d)?$)(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:[,.]\d+)?)(.*)/;
    var f = a.zeropad = (a)=>{
        const b = a.toString();
        return 2 > b.length ? `0${b}` : b
    }
    ;
    const g = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    };
    class h {
        constructor(a) {
            this.diff = a
        }
        as(a) {
            switch (a) {
            case "y":
                return b(this.diff / 864e5) / 12;
            case "M":
                return b(this.diff / 864e5);
            case "w":
                return this.diff / 6048e5;
            case "d":
                return this.diff / 864e5;
            case "h":
                return this.diff / 36e5;
            case "m":
                return this.diff / 6e4;
            case "s":
                return this.diff / 1e3;
            case "ms":
                return this.diff;
            default:
                throw new Error("Unknown unit " + a);
            }
        }
    }
    a.Duration = h;
    const i = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    };
    class j {
        constructor(a) {
            if ("number" == typeof a) {
                this.d = new Date(a);
                const b = this.d.getTimezoneOffset()
                  , c = `${0 > b ? "+" : "-"}${d(b) / 60 >> 0}:${d(b) % 60}`;
                this.o = e.exec(`${this.d.toISOString().slice(0, -1)}${c}`)
            } else if ("string" == typeof a)
                this.d = new Date(a),
                this.o = e.exec(a);
            else if (a instanceof j)
                this.d = new Date(a.d);
            else if (!a) {
                this.d = new Date;
                const a = this.d.getTimezoneOffset()
                  , b = `${0 > a ? "+" : "-"}${d(a) / 60 >> 0}:${d(a) % 60}`;
                this.o = e.exec(`${this.d.toISOString().slice(0, -1)}${b}`)
            } else
                console.assert(!1, `Bad moment initialization: ${a}`);
            this.dddd = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            this.ddd = this.dddd.map((a)=>a.slice(0, 3)),
            this.dd = this.dddd.map((a)=>a.slice(0, 2)),
            this.MMMM = ["January", "Februray", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            this.MMM = this.MMMM.map((a)=>a.slice(0, 3))
        }
        clone() {
            return new j(this)
        }
        monthDays(a, b) {
            return new Date(a,b,0).getDate()
        }
        get year() {
            return this.d.getFullYear()
        }
        set year(a) {
            this.d.setFullYear(a)
        }
        get month() {
            return this.d.getMonth() + 1
        }
        set month(a) {
            const b = this.monthDays(this.year, a);
            this.date > b && (this.date = b),
            this.d.setMonth(a - 1)
        }
        get date() {
            return this.d.getDate()
        }
        set date(a) {
            this.d.setDate(a)
        }
        get hour() {
            return this.d.getHours()
        }
        set hour(a) {
            this.d.setHours(a)
        }
        get minute() {
            return this.d.getMinutes()
        }
        set minute(a) {
            this.d.setMinutes(a)
        }
        get second() {
            return this.d.getSeconds()
        }
        set second(a) {
            this.d.setSeconds(a)
        }
        get millisecond() {
            return this.d.getMilliseconds()
        }
        set millisecond(a) {
            this.d.setMilliseconds(a)
        }
        get weekday() {
            return this.d.getDay()
        }
        set weekday(a) {
            const b = a - this.weekday;
            this.date += b
        }
        add(a, b) {
            return "week" === b && (a *= 7,
            b = "date"),
            this[b] += a,
            this
        }
        startOf(a) {
            switch (a) {
            case "year":
                this.month = 1;
            case "month":
                this.date = 1;
            case "week":
            case "date":
                this.hour = 0;
            case "hour":
                this.minute = 0;
            case "minute":
                this.second = 0;
            case "second":
                this.millisecond = 0;
            }
            return "week" === a && (this.weekday = 0),
            this
        }
        endOf(a) {
            return this.startOf(a).add(1, a).add(-1, "millisecond")
        }
        format(a) {
            a = a || "YYYY-MM-DDTHH:mm:ssZ";
            const b = {
                MMMM: ()=>this.MMMM[this.month - 1],
                MMM: ()=>this.MMM[this.month - 1],
                MM: ()=>f(this.month),
                M: ()=>this.month,
                DD: ()=>f(this.date),
                D: ()=>this.date,
                dddd: ()=>this.dddd[this.weekday],
                ddd: ()=>this.ddd[this.weekday],
                dd: ()=>this.dd[this.weekday],
                d: ()=>this.weekday,
                YYYY: ()=>this.year,
                YY: ()=>this.year % 100,
                HH: ()=>f(this.hour),
                H: ()=>this.hour,
                hh: ()=>f(this.hour % 12),
                h: ()=>this.hour % 12,
                mm: ()=>f(this.minute),
                m: ()=>this.minute,
                ss: ()=>f(this.second),
                s: ()=>this.second,
                LL: ()=>`${this.MMMM[this.month - 1]} ${this.date} ${this.year}`,
                LT: ()=>`${f(this.hour)}:${f(this.minute)}`,
                Z: ()=>{
                    const a = this.d.getTimezoneOffset();
                    return `${0 >= a ? "+" : "-"}${f(d(a) / 60 >> 0)}:${f(d(a) % 60)}`
                }
            }
              , c = new RegExp(`${Object.keys(b).join("|")}|.`,"g");
            return a.replace(c, (a)=>b[a] ? b[a]() : a)
        }
        valueOf() {
            return this.d.valueOf()
        }
        fromNow() {
            return c(Date.now() - this.d.valueOf())
        }
        toJSON() {
            return this.format()
        }
        toString() {
            return "" + this.d.valueOf()
        }
    }
    a.Moment = j
}),
define(58, ["exports"], function(a) {
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.parse = function(a) {
        return new m({
            input: a
        }).parse()
    }
    ;
    const b = (a)=>/[0-9A-Za-z]/.test(a)
      , d = (a)=>/[A-Za-z]/.test(a)
      , e = (a)=>/[A-Z]/.test(a)
      , f = (a)=>/[0-9]/.test(a)
      , g = (a)=>/[0-9A-Fa-f]/.test(a)
      , h = (a)=>/[\t\n\f ]/.test(a)
      , i = {
        nbsp: "\xA0",
        times: "\xD7",
        laquo: "\xAB",
        raquo: "\xBB",
        lt: "<",
        gt: ">"
    }
      , c = ["br", "img", "input"]
      , j = "\0"
      , k = -1
      , l = {
        data() {
            const a = this.consume();
            if ("&" === a)
                this.additionalAllowedCharacter = null,
                this.emit({
                    type: "Literal",
                    value: this.characterReference()
                });
            else if ("<" === a)
                this.state = "tagOpen";
            else if (a === j)
                throw new Error("NULL in data state");
            else
                a === k ? this.emit({
                    type: "EOF"
                }) : "{" === a && "{" === this.peek() ? (this.pos++,
                this.returnState = "data",
                this.state = "mustache") : this.emit({
                    type: "Literal",
                    value: a
                })
        },
        tagOpen() {
            const a = this.consume();
            if ("!" === a && "-" === this.peek() && "-" === this.peek(1))
                this.pos += 2,
                this.commentToken = "",
                this.state = "commentStart";
            else if ("/" === a)
                this.state = "endTagOpen";
            else if (e(a))
                this.token = {
                    type: "StartTag",
                    name: a.toLowerCase(),
                    attrs: []
                },
                this.state = "tagName";
            else if (d(a))
                this.token = {
                    type: "StartTag",
                    name: a,
                    attrs: []
                },
                this.state = "tagName";
            else if ("?" === a)
                throw new Error(`Parse error: tagname expected got: '${a}'`);
            else
                throw new Error(`Parse error: tagname expected got: '${a}'`)
        },
        endTagOpen() {
            const a = this.consume();
            if (e(a))
                this.token = {
                    type: "EndTag",
                    name: a.toLowerCase(),
                    attrs: []
                },
                this.state = "tagName";
            else if (d(a))
                this.token = {
                    type: "EndTag",
                    name: a,
                    attrs: []
                },
                this.state = "tagName";
            else if (">" === a)
                throw new Error("Parse error: empty close tag");
            else if (a === k)
                throw new Error("Parse error: end tag not closed before EOF");
            else
                throw new Error(`Parse error: tagname expected got: '${a}'`)
        },
        tagName() {
            const a = this.consume();
            if (h(a))
                this.state = "beforeAttributeName";
            else if ("/" === a)
                this.state = "selfClosingStartTag";
            else if (">" === a)
                this.state = "data",
                this.emit(this.token);
            else if (e(a))
                this.token.name += a.toLowerCase();
            else if (a === j)
                throw new Error("Parse error: NULL in tagname");
            else if (a === k)
                throw new Error("Parse error: EOF in tagname");
            else
                this.token.name += a
        },
        beforeAttributeName() {
            const a = this.consume();
            if (h(a))
                ;
            else if ("/" === a)
                this.state = "selfClosingStartTag";
            else if (">" === a)
                this.state = "data",
                this.emit(this.token);
            else if (e(a))
                this.attr = {
                    name: a,
                    value: []
                },
                this.token.attrs.push(this.attr),
                this.state = "attributeName";
            else if (a === j)
                throw new Error("Parse error: NULL at start of attribute name");
            else if (/["'<=]/.test(a))
                throw new Error(`Parse error: Attribute name cannot start with ${a}`);
            else if (a === k)
                throw new Error("Parse error: EOF in tag");
            else
                "{" === a && "{" === this.peek() ? (this.pos++,
                this.attr = {
                    name: "",
                    value: []
                },
                this.token.attrs.push(this.attr),
                this.returnState = "beforeAttributeName",
                this.state = "mustache") : (this.attr = {
                    name: a,
                    value: []
                },
                this.token.attrs.push(this.attr),
                this.state = "attributeName")
        },
        attributeName() {
            const a = this.consume();
            if (h(a))
                this.state = "afterAttributeName";
            else if ("/" === a)
                this.state = "selfClosingStartTag";
            else if ("=" === a)
                this.state = "beforeAttributeValue";
            else if (">" === a)
                this.state = "data",
                this.emit(this.token);
            else if (e(a))
                this.attr.name += a;
            else if (a === j)
                throw new Error("Parse error: NULL in attribute name");
            else if (/["'<]/.test(a))
                throw new Error(`Parse error: Attribute name cannot contain ${a}`);
            else if (a === k)
                throw new Error("Parse error: EOF in attribute name");
            else
                this.attr.name += a
        },
        afterAttributeName() {
            const a = this.consume();
            if (h(a))
                ;
            else if ("/" === a)
                this.state = "selfClosingStartTag";
            else if ("=" === a)
                this.state = "beforeAttributeValue";
            else if (">" === a)
                this.state = "data",
                this.emit(this.token);
            else if (e(a))
                this.attr = {
                    name: a,
                    value: []
                },
                this.token.attrs.push(this.attr),
                this.state = "attributeName";
            else if (a === j)
                throw new Error("Parse error: NULL after attribute name");
            else if (/["'<]/.test(a))
                throw new Error(`Parse error: Char after attribute name cannot be ${a}`);
            else if (a === k)
                throw new Error("Parse error: EOF in attribute name");
            else
                "{" === a && "{" === this.peek() ? (this.pos++,
                this.attr = {
                    name: "",
                    value: []
                },
                this.token.attrs.push(this.attr),
                this.returnState = "afterAttributeName",
                this.state = "mustache") : (this.attr = {
                    name: a,
                    value: []
                },
                this.token.attrs.push(this.attr),
                this.state = "attributeName")
        },
        beforeAttributeValue() {
            const a = this.consume();
            if (h(a))
                ;
            else if ("\"" === a || "'" === a)
                this.q = a,
                this.state = "attributeValueQ";
            else if ("&" === a)
                this.pos--,
                this.state = "attributeValueU";
            else if (a === j)
                throw new Error("Parse error: NULL before attribute value");
            else if (">" === a)
                throw new Error("Parse error: Expected attribute value");
            else if (/[<=`]/.test(a))
                throw new Error(`Parse error: Char before attribute value cannot be ${a}`);
            else if (a === k)
                throw new Error("Parse error: EOF before attribute value");
            else
                "{" === a ? (this.pos--,
                this.state = "attributeValueU") : (this.attr.value.push({
                    type: "Literal",
                    value: a
                }),
                this.state = "attributeValueU")
        },
        attributeValueQ() {
            const a = this.consume();
            if (a === this.q)
                this.state = "afterAttributeValueQ";
            else if ("&" === a) {
                this.additionalAllowedCharacter = this.q;
                const a = this.attr.value.slice(-1)[0];
                a && "Literal" === a.type ? a.value += this.characterReference() : this.attr.value.push({
                    type: "Literal",
                    value: this.characterReference()
                })
            } else if (a === j)
                throw new Error("Parse error: NULL in attribute value");
            else if (a === k)
                throw new Error("Parse error: EOF in attribute value");
            else if ("{" === a && "{" === this.peek())
                this.pos++,
                this.returnState = "attributeValueQ",
                this.state = "mustache";
            else {
                const b = this.attr.value.slice(-1)[0];
                b && "Literal" === b.type ? b.value += a : this.attr.value.push({
                    type: "Literal",
                    value: a
                })
            }
        },
        attributeValueU() {
            const a = this.consume();
            if (h(a))
                this.state = "beforeAttributeName";
            else if ("&" === a) {
                this.additionalAllowedCharacter = ">";
                const a = this.attr.value.slice(-1)[0];
                a && "Literal" === a.type ? a.value += this.characterReference() : this.attr.value.push({
                    type: "Literal",
                    value: this.characterReference()
                })
            } else if (">" === a)
                this.state = "data",
                this.emit(this.token);
            else if (a === j)
                throw new Error("Parse error: NULL in attribute value");
            else if (/["'<=`]/.test(a))
                throw new Error(`Parse error: Char in attribute value cannot be ${a}`);
            else if (a === k)
                throw new Error("Parse error: EOF in attribute value");
            else if ("{" === a && "{" === this.peek())
                this.pos++,
                this.returnState = "attributeValueU",
                this.state = "mustache";
            else {
                const b = this.attr.value.slice(-1)[0];
                b && "Literal" === b.type ? b.value += a : this.attr.value.push({
                    type: "Literal",
                    value: a
                })
            }
        },
        afterAttributeValueQ() {
            const a = this.consume();
            if (h(a))
                this.state = "beforeAttributeName";
            else if ("/" === a)
                this.state = "selfClosingStartTag";
            else if (">" === a)
                this.state = "data",
                this.emit(this.token);
            else if (a === k)
                throw new Error("Parse error: EOF after attribute value");
            else
                throw new Error(`Parse error: Unexpected token ${a} after attribute`)
        },
        selfClosingStartTag() {
            const a = this.consume();
            if (">" === a)
                this.token.selfClosing = !0,
                this.state = "data",
                this.emit(this.token);
            else if (a === k)
                throw new Error("Parse error: EOF in self closing tag");
            else
                throw new Error("Parse error: Unexpected token / in self closing tag")
        },
        commentStart() {
            const a = this.consume();
            if ("-" === a)
                this.state = "commentStartDash";
            else if (a === j)
                throw new Error("Parse error: NULL at comment start");
            else if (">" === a)
                throw new Error("Parse error: > at comment start");
            else if (a === k)
                throw new Error("Parse error: EOF at comment start");
            else
                this.commentToken += a,
                this.state = "comment"
        },
        commentStartDash() {
            const a = this.consume();
            if ("-" === a)
                this.state = "commentEnd";
            else if (a === j)
                throw new Error("Parse error: NULL at comment start dash");
            else if (">" === a)
                throw new Error("Unexpected token");
            else if (a === k)
                throw new Error("Parse error: EOF at comment start dash");
            else
                this.commentToken += `-${a}`,
                this.state = "comment"
        },
        comment() {
            const a = this.consume();
            if ("-" === a)
                this.state = "commentEndDash";
            else if (a === j)
                throw new Error("Parse error: NULL in comment");
            else if (a === k)
                throw new Error("Parse error: EOF in comment");
            else
                this.commentToken += a
        },
        commentEndDash() {
            const a = this.consume();
            if ("-" === a)
                this.state = "commentEnd";
            else if (a === j)
                throw new Error("Parse error: NULL in comment end dash");
            else if (a === k)
                throw new Error("Parse error: EOF in comment");
            else
                this.commentToken += `-${a}`,
                this.state = "comment"
        },
        commentEnd() {
            const a = this.consume();
            if (">" === a)
                this.state = "data",
                this.emit({
                    type: "comment",
                    value: this.commentToken
                });
            else if (a === j)
                throw new Error("Parse error: NULL in comment end");
            else if ("!" === a)
                throw new Error("Parse error: ! at comment end");
            else if ("-" === a)
                throw new Error("Parse error: - at comment end");
            else if (a === k)
                throw new Error("Parse error: EOF at comment end");
            else
                throw new Error(`Parse error: '${a}' after -- at comment end`)
        },
        mustache() {
            const a = this.consume();
            if ("!" === a)
                this.mtoken = {
                    type: "MustacheComment",
                    value: ""
                },
                this.state = "mustacheComment";
            else if ("}" === a)
                throw new Error("Parse error: empty mustaches not allowed");
            else
                this.mtoken = {
                    type: "MustacheContent",
                    value: []
                },
                this.mstack = [this.mtoken],
                this.mvalue = this.mstack[0].value,
                "#" === a ? (this.mvalue.push({
                    type: "BlockOpen",
                    value: ""
                }),
                this.state = "mustacheBlockOpen") : "/" === a ? (this.mvalue.push({
                    type: "BlockClose",
                    value: ""
                }),
                this.mstack.push(),
                this.state = "mustacheBlockClose") : (this.pos--,
                this.state = "mustacheContent")
        },
        mustacheComment() {
            const a = this.consume();
            if ("}" === a && "}" === this.peek()) {
                if (this.pos++,
                "data" === this.returnState)
                    this.emit(this.mtoken);
                else
                    throw new Error("Cannot emit mustache comment inside tag");
                this.state = this.returnState
            } else
                this.mtoken.value += a
        },
        mustacheBlockOpen() {
            const a = this.consume();
            if (h(a) || "}" === a)
                this.pos--,
                this.state = "mustacheContent";
            else if (d(a))
                this.mvalue[0].value += a;
            else
                throw new Error(`Unexpected token '${a}'`)
        },
        mustacheBlockClose() {
            const a = this.consume();
            if ("}" === a)
                this.pos--,
                this.state = "mustacheContent";
            else if (d(a))
                this.mvalue[0].value += a;
            else
                throw new Error(`Unexpected token '${a}'`)
        },
        mustacheContent() {
            const a = this.consume();
            if ("(" === a) {
                const a = {
                    type: "Expression",
                    value: []
                };
                this.mvalue.push(a),
                this.mvalue = a.value,
                this.mstack.unshift(a)
            } else if (")" === a) {
                if (1 === this.mstack.length)
                    throw new Error("Stray \")\" in mustache found");
                this.mstack.shift(),
                this.mvalue = this.mstack[0].value
            } else if ("\"" === a) {
                const a = {
                    type: "Literal",
                    value: ""
                };
                this.mvalue.push(a),
                this.mstack.unshift(a),
                this.state = "mustacheLiteral"
            } else if (f(a)) {
                const b = {
                    type: "Literal",
                    value: +a
                };
                this.mvalue.push(b),
                this.mstack.unshift(b),
                this.state = "mustacheLiteralNumber"
            } else if ("-" === a) {
                const a = {
                    type: "Literal",
                    value: 0
                };
                this.mvalue.push(a),
                this.mstack.unshift(a),
                this.state = "mustacheLiteralNegativeNumber"
            } else if (d(a)) {
                const b = {
                    type: "Identifier",
                    value: a
                };
                this.mvalue.push(b),
                this.mstack.unshift(b),
                this.state = "mustacheIdentifier"
            } else if ("|" === a) {
                const a = {
                    type: "BlockParams",
                    value: ""
                };
                this.mvalue.push(a),
                this.mstack.unshift(a),
                this.state = "mustacheBlockParams"
            } else if (h(a))
                ;
            else if ("}" === a && "}" === this.peek()) {
                if (this.pos++,
                1 !== this.mstack.length)
                    throw new Error("Not all expressions closed");
                "data" === this.returnState ? this.emit(this.mtoken) : this.attr.value.push(this.mtoken),
                this.state = this.returnState
            } else
                throw new Error(`Mustache content broken "${a}"`);
            this.mname && (this.mstack[0].name = this.mname,
            this.mname = null)
        },
        mustacheBlockParams() {
            const a = this.consume();
            "|" === a ? (this.mstack.shift(),
            this.state = "mustacheContent") : this.mstack[0].value += a
        },
        mustacheLiteral() {
            const a = this.consume();
            "\"" === a ? (this.mstack.shift(),
            this.state = "mustacheContent") : this.mstack[0].value += a
        },
        mustacheLiteralNumber() {
            const a = this.consume();
            if (f(a))
                this.mstack[0].value *= 10,
                this.mstack[0].value += +a;
            else if (h(a) || ")" === a || "}" === a)
                this.pos--,
                this.mstack.shift(),
                this.state = "mustacheContent";
            else
                throw new Error(`Cannot parse digit ${a}`)
        },
        mustacheLiteralNegativeNumber() {
            const a = this.consume();
            if (f(a))
                this.mstack[0].value *= 10,
                this.mstack[0].value += +a;
            else if (h(a) || ")" === a || "}" === a)
                this.mstack[0].value *= -1,
                this.pos--,
                this.mstack.shift(),
                this.state = "mustacheContent";
            else
                throw new Error(`Cannot parse digit ${a}`)
        },
        mustacheIdentifier() {
            const a = this.consume();
            if (h(a) || ")" === a || "}" === a) {
                this.pos--;
                const a = this.mstack[0];
                if (~["undefined", "null", "true", "false"].indexOf(a.value)) {
                    a.type = "Literal";
                    const b = a.value[0];
                    a.value = "u" === b ? void 0 : "n" === b ? null : !("t" !== b)
                }
                this.mstack.shift(),
                this.state = "mustacheContent"
            } else if ("=" === a)
                this.mname = this.mstack[0].value,
                this.mstack.shift(),
                this.mstack[0].value.pop(),
                this.state = "mustacheContent";
            else if (b(a) || "-" === a || "." === a || "_" === a)
                this.mstack[0].value += a;
            else
                throw new Error(`Unexpected token "${a}"`)
        }
    };
    class m {
        constructor({input: a}) {
            this.input = a,
            this.pos = 0,
            this.state = "data"
        }
        consume() {
            return this.pos < this.input.length ? this.input[this.pos++] : k
        }
        peek(a) {
            return a = a || 0,
            this.pos + a < this.input.length ? this.input[this.pos + a] : k
        }
        characterReference() {
            var a = this.peek();
            if (h(a) || "<" === a || "&" === a || a === k || a === this.additionalAllowedCharacter)
                return "&";
            if ("#" === a) {
                let b, c;
                if (this.pos++,
                /[xX]/.test(this.peek()) ? (this.pos++,
                b = g,
                c = 16) : (b = f,
                c = 10),
                !b(this.peek()))
                    throw new Error("Numerical character reference expected");
                let d = 0;
                for (a = this.consume(); a !== k && b(a); )
                    d = d * c + parseInt(a, c),
                    a = this.consume();
                if (";" !== a)
                    throw new Error("Numerical character reference not terminated with ;");
                return String.fromCharCode(d)
            }
            var b = a;
            for (let c = Object.keys(i).filter((b)=>b[0] === a); c.length; )
                b += this.peek(b.length),
                c = c.filter((a)=>a[b.length - 1] === b.slice(-1));
            var c = b.slice(0, -1);
            return c in i ? (this.pos += b.length,
            i[c]) : "&"
        }
        emit(a) {
            if ("EndTag" === a.type)
                if (a.selfClosing)
                    throw new Error("EndTags cannot be self-closing");
                else if (a.attrs.length)
                    throw new Error("EndTags cannot have attrs");
            this.tokens.push(a)
        }
        tokenize() {
            for (this.tokens = []; !this.tokens.length || "EOF" !== this.tokens.slice(-1)[0].type; )
                l[this.state].call(this);
            return this.tokens.pop(),
            this.tokens
        }
        build(a) {
            const b = [{
                name: "root",
                content: [],
                params: []
            }]
              , d = (a)=>{
                const c = a.split(".")[0]
                  , d = [];
                for (let c = b.length - 1; 0 <= c; c--)
                    "loop" === b[c].type ? d.push(b[c].params) : "component" === b[c].type && (d.push(b[c].params),
                    d.push([]));
                for (let b = 0, e = d.length; b < e; b++)
                    if (~d[b].indexOf(c))
                        return `${Array.from({
                            length: b + 1
                        }).join("parent.")}${a}`;
                return `ctx.${a}`
            }
              , e = (a)=>("Identifier" === a.type ? a.value = d(a.value) : "Expression" === a.type || "Invocation" === a.type ? a.value = a.value.map(e) : "Attributes" === a.type && (a.value = a.value.map(e)),
            a);
            for (let d of a)
                if ("Literal" === d.type) {
                    const a = b.slice(-1)[0].content.slice(-1)[0];
                    a && "Literal" === a.type ? a.value += d.value : b.slice(-1)[0].content.push(d)
                } else if ("StartTag" === d.type) {
                    let a = d.attrs.map((a)=>"as" === a.name ? a : (a.value = a.value.map((a)=>("MustacheContent" === a.type && (console.assert(0 < a.value.length),
                    1 < a.value.length ? a.type = "Invocation" : a = a.value[0]),
                    a)),
                    console.assert(0 < a.value.length),
                    a.value = 1 < a.value.length ? e({
                        type: "Expression",
                        value: [{
                            type: "Literal",
                            value: "concat"
                        }].concat(a.value)
                    }) : e(a.value[0]),
                    a));
                    const f = a.filter((b)=>"as" === b.name)
                      , g = {
                        type: /-/.test(d.name) ? "Component" : "Tag",
                        name: d.name,
                        attributes: a.filter((b)=>"as" !== b.name),
                        params: f.length ? f[0].value[0].value.split(" ") : [],
                        content: []
                    };
                    b.slice(-1)[0].content.push(g),
                    ~c.indexOf(d.name) || d.selfClosing || b.push({
                        type: d.name.includes("-") ? "component" : "tag",
                        name: d.name,
                        content: g.content,
                        params: g.params
                    })
                } else if ("EndTag" === d.type) {
                    if (d.name !== b.slice(-1)[0].name)
                        throw new Error(`Unexpected end tag ${d.name}`);
                    else
                        b.pop();
                } else if ("MustacheComment" === d.type || "comment" === d.type)
                    ;
                else if ("MustacheContent" === d.type) {
                    const [a,...c] = d.value;
                    if ("Identifier" === a.type || "Expression" === a.type || "Literal" === a.type) {
                        if ("else" === a.value) {
                            const a = b.slice(-1)[0];
                            if ("each" === a.name) {
                                if (c.length)
                                    throw new Error("Malformed else on each");
                                const d = b.slice(-2)[0].content.slice(-1)[0];
                                d.catchempty = [],
                                a.content = d.catchempty
                            } else if ("if" === a.name) {
                                if (c.length)
                                    if ("if" === c[0].value)
                                        c.shift();
                                    else
                                        throw new Error("else may only be followed by if");
                                const d = b.slice(-2)[0].content.slice(-1)[0]
                                  , f = c[0] ? e(c[0]) : null;
                                d.branches.push([]),
                                d.conditions.value[1].value.push(f),
                                a.content = d.branches.slice(-1)[0]
                            } else
                                throw new Error(`Mustache else out of scope ${a.name}`)
                        } else
                            c.length ? b.slice(-1)[0].content.push(e({
                                type: "Invocation",
                                value: d.value
                            })) : b.slice(-1)[0].content.push(e(a));
                    } else if ("BlockOpen" === a.type) {
                        let d;
                        if ("each" === a.value) {
                            const f = (c.filter((a)=>"BlockParams" === a.type)[0] || {
                                value: ""
                            }).value.split(" ").filter((a)=>a);
                            d = {
                                type: "Loop",
                                list: {
                                    type: "Expression",
                                    value: [{
                                        type: "Literal",
                                        value: "muc-loop"
                                    }, e(c[0])]
                                },
                                params: f,
                                content: []
                            },
                            b.slice(-1)[0].content.push(d),
                            b.push({
                                type: "loop",
                                name: a.value,
                                content: d.content,
                                params: f
                            })
                        } else
                            "if" === a.value ? (d = {
                                type: "Condition",
                                attributes: e({
                                    type: "Attributes",
                                    value: c.slice(1)
                                }).value,
                                branches: [[]],
                                conditions: {
                                    type: "Expression",
                                    value: [{
                                        type: "Literal",
                                        value: "muc-if"
                                    }, {
                                        type: "Expression",
                                        value: [{
                                            type: "Literal",
                                            value: "noexpand"
                                        }, e(c[0])]
                                    }]
                                }
                            },
                            b.slice(-1)[0].content.push(d),
                            b.push({
                                name: a.value,
                                content: d.branches[0]
                            })) : (d = {
                                type: "Block",
                                name: a.value,
                                attributes: c.map(e),
                                content: []
                            },
                            b.slice(-1)[0].content.push(d),
                            b.push({
                                name: a.value,
                                content: d.content
                            }))
                    } else if (!("BlockClose" === a.type))
                        throw new Error(`Do not know ${a.type}`);
                    else if (a.value !== b.slice(-1)[0].name)
                        throw new Error(`Unexpected end tag ${a.value}`);
                    else
                        b.pop()
                } else
                    throw new Error(`Unknown type ${d.type}`);
            if (1 !== b.length)
                throw new Error(`Unclosed element ${b[1].name}`);
            return b[0].content
        }
        parse() {
            try {
                this.tokenize()
            } catch (a) {
                const b = this.input.split("\n");
                let c = this.pos
                  , d = 0;
                for (; c > b[d].length; )
                    c -= b[d].length + 1,
                    d++;
                const e = `Parser error at line: ${d + 1} col: ${c} abs: ${this.pos}`;
                throw new Error(`Line content: ${b[d]}\n${e}\n${a.message}`)
            }
            return this.build(this.tokens)
        }
    }
    a.ASTBuilder = m
}),
define(6, ["exports", 7], function(a, b) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var c = function(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }(b);
    class d extends c.default {
        constructor() {
            super(),
            this.type = "compare"
        }
    }
    a.default = d
}),
define(60, ["exports", 45], function(a, b) {
    var c = Math.pow;
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.Router = void 0;
    class d extends b.O {
        init() {
            super.init(),
            this.stack = [],
            this.currentTransition = null,
            this.currentRoute = null
        }
        locationToPath() {
            if ("object" != typeof window)
                return {
                    query: null,
                    path: null
                };
            const a = {}
              , b = window.location.search.substr(1).split("&").filter((a)=>a);
            for (let c = 0, d = b.length; c < d; c++) {
                const d = b[c]
                  , e = d.substr(0, d.indexOf("="))
                  , f = d.slice(e.length + 1);
                a[e] = f
            }
            let c = window.location.hash;
            return "#" === c[0] && (c = c.slice(1)),
            {
                query: a,
                path: c
            }
        }
        pathToStack({path: a, query: b}) {
            const d = a.split("/").filter((a)=>!!a.length)
              , e = (a,d)=>{
                const f = d.map((d)=>{
                    const f = a.slice(0)
                      , g = ("string" == typeof d.path ? d.path : d.name).split("/")
                      , h = {};
                    let i = 0;
                    for (let e, j = 0, k = g.length; j < k; j++)
                        if (e = g[j],
                        "" !== e) {
                            if (i *= 10,
                            "*" === e[0])
                                return i += 3,
                                i *= c(10, a.length - 1),
                                h[e.slice(1)] = f.join("/"),
                                {
                                    score: i,
                                    stack: [{
                                        route: d,
                                        dynamics: h,
                                        query: b
                                    }]
                                };
                            if (":" === e[0])
                                i += 2,
                                h[e.slice(1)] = f.shift();
                            else if (e === f[0])
                                i += 1,
                                f.shift();
                            else
                                return {
                                    score: Infinity
                                }
                        }
                    const j = e(f, d.routes || []) || {
                        score: Infinity
                    };
                    if (j.score !== Infinity)
                        return i *= c(10, f.length),
                        i += j.score,
                        {
                            score: i,
                            stack: [{
                                route: d,
                                dynamics: h,
                                query: b
                            }].concat(j.stack)
                        };
                    return f.length ? j : {
                        score: i,
                        stack: [{
                            route: d,
                            dynamics: h,
                            query: b
                        }]
                    }
                }
                ).sort((c,a)=>c.score - a.score);
                return f[0]
            }
              , f = e(d, this.routes);
            return f.stack
        }
        performTransition(a) {
            var b = this;
            return _asyncToGenerator(function*() {
                const c = function(c, a) {
                    if (c.route != a.route)
                        return !1;
                    if (c.model && c.model != a.model)
                        return !1;
                    console.assert(Object.keys(c.dynamics).length === Object.keys(a.dynamics).length);
                    for (let[b,d] of Object.entries(c.dynamics))
                        if (d !== a.dynamics[b])
                            return !1;
                    for (let[b,d] of Object.entries(c.route.queryParams || {}))
                        if (d.refreshModel && c.query[b] !== a.query[b])
                            return !1;
                    return !0
                };
                let d = 0;
                for (; a[d] && b.stack[d] && c(a[d], b.stack[d]); )
                    d++;
                const e = function(a) {
                    return `${b.stack.slice(0, a + 1).map(function(a) {
                        return a.route.name
                    }).join("-")}-route`
                }
                  , f = function(b) {
                    return `${a.slice(0, b + 1).map(function(a) {
                        return a.route.name
                    }).join("-")}-route`
                }
                  , g = {
                    aborted: !1,
                    abort() {
                        this.aborted = !0
                    },
                    stack: a
                };
                for (let a = b.stack.length - 1; a >= d; a--) {
                    const c = b.stack[a]
                      , d = b.getOwner().lookup(`${c.route.name}-route`);
                    if (d.willTransition(g),
                    g.aborted)
                        return
                }
                for (let c = 0; c < d; c++) {
                    const d = b.getOwner().lookup(f(c));
                    for (let b of Object.keys(a[c].route.queryParams || {}))
                        d[b] = a[c].query[b]
                }
                for (let c = d; c < a.length; c++) {
                    const d = b.getOwner().lookup(f(c));
                    for (let b of Object.keys(a[c].route.queryParams || {}))
                        d[b] = a[c].query[b];
                    if (!a[c].model || a[c].model.fake) {
                        const b = yield d.modelHook(a[c].dynamics);
                        a[c].model = b
                    }
                }
                for (let a = b.stack.length - 1; a >= d; a--) {
                    const c = b.getOwner().lookup(e(a));
                    b.stack.pop();
                    let f;
                    f = 0 == d ? b.getOwner().lookup("application-route") : b.getOwner().lookup(e(a - 1)),
                    f.outlet = null,
                    f.getOwner().update(),
                    c.didLeave()
                }
                for (; d < a.length; d++) {
                    b.stack[d] = a[d];
                    const c = b.getOwner().lookup(e(d));
                    a[d].model && (c.model = a[d].model);
                    let f;
                    f = 0 == d ? b.getOwner().lookup("application-route") : b.getOwner().lookup(e(d - 1)),
                    f.outlet = c,
                    f.getOwner().update(),
                    c.didEnter()
                }
                b.currentQuery = Object.entries(b.stack[0].query).map(function([a,b]) {
                    return `${a}=${b.replace(/&/, "%26")}`
                }).join("&"),
                b.currentRoute = b.stack.map(function(a) {
                    return a.route.name
                }).join(".")
            })()
        }
        updateFromLocation() {
            return this.performTransition(this.pathToStack(this.locationToPath()))
        }
        stackToLocation(a) {
            const b = [];
            for (let c of Object.entries(a[0].query))
                b.push(`${c[0]}=${c[1].replace(/&/, "%26")}`);
            let c = "";
            return b.length && (c += `?${b.join("&")}`),
            c + "#/" + a.map((a)=>"undefined" == typeof a.route.path ? a.route.name : a.route.path).map((b,c)=>b.split("/").map((b)=>":" === b[0] ? a[c].dynamics[b.slice(1)] : b)).reduce((a,b)=>a.concat(b), []).filter((a)=>a).join("/")
        }
        transitionTo({route: a, models: b, query: c}) {
            var d = this;
            return _asyncToGenerator(function*() {
                a = a || d.currentRoute,
                b = b || [],
                c = Object.assign(d.locationToPath().query, c);
                const e = a.split(".");
                for (; b.length < e.length; )
                    b.unshift(void 0);
                const f = [];
                let g = d.routes;
                for (let a = 0, h = e.length; a < h; a++) {
                    const h = g.filter(function(b) {
                        return b.name === e[a]
                    })[0];
                    g = h.routes;
                    const i = b[a]
                      , j = {};
                    Object.assign(j, d.stack[a].route === h && d.stack[a].dynamics);
                    const k = "undefined" == typeof h.path ? h.name : h.path;
                    k.split("/").forEach(function(a) {
                        i && ":" === a[0] && (j[a.slice(1)] = i[a.slice(1)])
                    }),
                    f.push({
                        route: h,
                        dynamics: j,
                        query: c,
                        model: i
                    })
                }
                d.__ff45__ = yield d.performTransition(f),
                window.history.pushState(null, null, d.stackToLocation(f))
            })()
        }
    }
    a.Router = d
}),
define(61, ["exports", 45], function(a, b) {
    function c(a, b) {
        if (!a)
            throw new Error(b)
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.Ot = void 0;
    class d extends b.O {
        constructor() {
            super(),
            this.ilen = 0,
            this.olen = 0,
            this.ops = b.A.create()
        }
        static fromJSON(a) {
            const b = this.create();
            for (let d of a)
                switch (d.t) {
                case "n":
                    b.retain(d.n);
                    break;
                case "i":
                    b.insert(d.i);
                    break;
                case "r":
                    b.remove(d.r);
                    break;
                default:
                    c(!1, "Unknown operation: " + JSON.stringify(d));
                }
            return b
        }
        toJSON() {
            return this.ops
        }
        isNoop() {
            const a = this.ops.length;
            return 0 === a || 1 === a && "n" === this.ops[0].t
        }
        retain(a) {
            if (c("number" == typeof a && 0 <= a, "Retain expects a positive integer."),
            0 < a) {
                this.ilen += a,
                this.olen += a;
                const b = this.ops
                  , c = b[-1];
                c && "n" === c.t ? c.n += a : b.push({
                    t: "n",
                    n: a
                })
            }
            return this
        }
        insert(a) {
            if (c(a[Symbol.iterator], "Insert expects an iterable"),
            a.length) {
                this.olen += a.length;
                const b = this.ops
                  , c = b[-1];
                if (c && "i" === c.t)
                    c.i = c.i.concat(Array.from(a));
                else if (c && "r" === c.t) {
                    const c = b[-2];
                    c && "i" === c.t ? c.i = c.i.concat(Array.from(a)) : b.splice(b.length - 1, 0, {
                        t: "i",
                        i: Array.from(a)
                    })
                } else
                    b.push({
                        t: "i",
                        i: Array.from(a)
                    })
            }
            return this
        }
        remove(a) {
            if (c(a[Symbol.iterator], "Remove expects an iterable"),
            a.length) {
                this.ilen += a.length;
                var b = this.ops[-1];
                b && "r" === b.t ? b.r = b.r.concat(Array.from(a)) : this.ops.push({
                    t: "r",
                    r: Array.from(a)
                })
            }
            return this
        }
        invert() {
            const a = this.constructor.create();
            for (let b of this.ops)
                "n" === b.t ? a.retain(b.n) : "i" === b.t ? a.remove(b.i) : a.insert(b.r);
            return a
        }
        apply(a) {
            c(a.length === this.ilen, `Apply length mismatch ${a.length} !== ${this.ilen}`);
            let b = Array.from(a)
              , d = []
              , e = 0;
            for (let f of this.ops)
                "n" === f.t ? (c(e + f.n <= b.length, "Input is too short."),
                d = d.concat(b.slice(e, e + f.n)),
                e += f.n) : "i" === f.t ? d = d.concat(f.i) : (c(!0, "Removal does not match content."),
                e += f.r.length);
            return c(e === a.length, `Apply operation did not consume complete input. ${e} ${a.length} ${JSON.stringify(this.ops)}`),
            "string" == typeof a ? d.join("") : a.constructor.from(d)
        }
        update(a) {
            if (c(a.length === this.ilen, `Apply length mismatch ${a.length} !== ${this.ilen}`),
            a instanceof Array) {
                let b = 0;
                for (let d of this.ops)
                    "n" === d.t ? (c(b + d.n <= a.length, "Input is too short."),
                    b += d.n) : "i" === d.t ? (a.splice.apply(a, [b, 0].concat(d.i)),
                    b += d.i.length) : (c(!0, "Removal does not match content."),
                    a.splice(b, d.r.length));
                return c(b === a.length, "Apply operation did not consume complete input."),
                a
            }
            return this.apply(a)
        }
        compose(a) {
            c(this.olen === a.ilen, `Cannot compose due to length mismatch ${this.olen} !== ${a.ilen}.`);
            const b = this.ops
              , d = a.ops;
            let e = 0
              , f = 0
              , g = b[e++]
              , h = d[f++];
            const i = this.constructor.create();
            for (; g || h; )
                g && "r" === g.t ? (i.remove(g.r),
                g = b[e++]) : "i" === h.t ? (i.insert(h.i),
                h = d[f++]) : "n" === g.t ? "n" === h.t ? g.n > h.n ? (i.retain(h.n),
                g = {
                    t: "n",
                    n: g.n - h.n
                },
                h = d[f++]) : g.n < h.n ? (i.retain(g.n),
                h = {
                    t: "n",
                    n: h.n - g.n
                },
                g = b[e++]) : (i.retain(g.n),
                g = b[e++],
                h = d[f++]) : g.n > h.r.length ? (i.remove(h.r),
                g = {
                    t: "n",
                    n: g.n - h.r.length
                },
                h = d[f++]) : g.n < h.r.length ? (i.remove(h.r.slice(0, g.n)),
                h = {
                    t: "r",
                    r: h.r.slice(g.n)
                },
                g = b[e++]) : (i.remove(h.r),
                g = b[e++],
                h = d[f++]) : "n" === h.t ? g.i.length > h.n ? (i.insert(g.i.slice(0, h.n)),
                g = {
                    t: "i",
                    i: g.i.slice(h.n)
                },
                h = d[f++]) : g.i.length < h.n ? (i.insert(g.i),
                h = {
                    t: "n",
                    n: h.n - g.i.length
                },
                g = b[e++]) : (i.insert(g.i),
                g = b[e++],
                h = d[f++]) : g.i.length > h.r.length ? (g = {
                    t: "i",
                    i: g.i.slice(h.r.length)
                },
                h = d[f++]) : g.i.length < h.r.length ? (h = {
                    t: "r",
                    r: h.r.slice(g.i.length)
                },
                g = b[e++]) : (g = b[e++],
                h = d[f++]);
            return i
        }
        transform(a) {
            c(this.ilen === a.ilen, "Both operations have to have the same base length");
            const b = this.ops
              , d = a.ops;
            let e = 0
              , f = 0
              , g = b[e++]
              , h = d[f++];
            const i = this.constructor.create()
              , j = this.constructor.create();
            for (let c; g || h; )
                g && "i" === g.t ? (i.insert(g.i),
                j.retain(g.i.length),
                g = b[e++]) : h && "i" === h.t ? (i.retain(h.i.length),
                j.insert(h.i),
                h = d[f++]) : "n" === g.t ? "n" === h.t ? (g.n > h.n ? (c = h.n,
                g = {
                    t: "n",
                    n: g.n - h.n
                },
                h = d[f++]) : g.n < h.n ? (c = g.n,
                h = {
                    t: "n",
                    n: h.n - g.n
                },
                g = b[e++]) : (c = h.n,
                g = b[e++],
                h = d[f++]),
                i.retain(c),
                j.retain(c)) : (g.n > h.r.length ? (c = h.r,
                g = {
                    t: "n",
                    n: g.n - h.r.length
                },
                h = d[f++]) : g.n < h.r.length ? (c = h.r.slice(0, g.n),
                h = {
                    t: "r",
                    r: h.r.slice(g.n)
                },
                g = b[e++]) : (c = h.r,
                g = b[e++],
                h = d[f++]),
                j.remove(c)) : "r" === h.t ? g.r.length > h.r.length ? (g = {
                    t: "r",
                    r: g.r.slice(h.r.length)
                },
                h = d[f++]) : g.r.length < h.r.length ? (h = {
                    t: "r",
                    r: h.r.slice(g.r.length)
                },
                g = b[e++]) : (g = b[e++],
                h = d[f++]) : (g.r.length > h.n ? (c = g.r.slice(0, h.n),
                g = {
                    t: "r",
                    r: g.r.slice(h.n)
                },
                h = d[f++]) : g.r.length < h.n ? (c = g.r,
                h = {
                    t: "n",
                    n: h.n - g.r.length
                },
                g = b[e++]) : (c = g.r,
                g = b[e++],
                h = d[f++]),
                i.remove(c));
            return [i, j]
        }
    }
    a.Ot = d
}),
define(7, ["exports", 44, 45], function(a, b, c) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    class d extends b.RoutableComponent {
        constructor() {
            super(),
            this.template = `PHdpZGdldC13YWl0aW5nIGljb249ImZvbGRlci1vcGVuIiBhY2w9e3thcHAuYWNsLmRldGFpbH19IHVzZXI9e3thcHAudXNlcn19IGU0MDE9IlNpZ24gaW4gdG8gYWNjZXNzIGRldGFpbHMiIGU0MDM9IlVzZXIge3thcHAudXNlcn19IGlzIG5vdCBwZXJtaXR0ZWQgdG8gYWNjZXNzIGRldGFpbHMgZm9yIGRhdGFzZXQge3twYXJhbXMuaWR9fSIgZTQwND0iRGF0YXNldCB7e3BhcmFtcy5pZH19IGRvZXMgbm90IGV4aXN0Ij4gPGRpdiBjbGFzcz0iZGV0YWlsIj4gPGRpdiBjbGFzcz0iYnJlYWRjcnVtYnMgbGVmdC1yaWdodCB2Y2VudGVyIj4gPG9sIGNsYXNzPSJicmVhZGNydW1iIj4gPGxpPjxsaW5rLXRvIGhyZWY9ImNvbGxlY3Rpb24ve3ttb2RlbC5jb2xsZWN0aW9ufX0iPk92ZXJ2aWV3PC9saW5rLXRvPjwvbGk+IDxsaSBjbGFzcz0iYWN0aXZlIj57e21vZGVsLnRpdGxlfX08L2xpPiA8L29sPiB7eyNpZiAoImlzLWVxdWFsIiB0eXBlICJkYXRhc2V0Iil9fSA8c3Bhbj4ge3sjaWYgYXBwLmFjbC50YWd9fSA8d2lkZ2V0LXRhZyBjbGFzcz0iYnRuIGJ0bi14cyBidG4tZGVmYXVsdCIgZGlzYWJsZWQ9e3sibm90IiBhcHAudXNlcn19IHRhZ3M9e3ttb2RlbC50YWdzfX0gYWxsdGFncz17e21vZGVsLmFsbF9rbm93bl90YWdzfX0gYWx0QWN0aW9uPXt7ImZuIiBvcGVuU2lnbmlufX0gY2hhbmdlQWN0aW9uPXt7ImZuIiByZXRhZ319IG1lbnVDbGFzcz0iZHJvcGRvd24tbWVudS1yaWdodCIgLz4ge3svaWZ9fSB7eyNpZiBhcHAuYWNsLmNvbW1lbnR9fSA8d2lkZ2V0LWNvbW1lbnQgY2xhc3M9ImJ0biBidG4teHMgYnRuLWRlZmF1bHQiIGRpc2FibGVkPXt7Im5vdCIgYXBwLnVzZXJ9fSBjaGFuZ2VBY3Rpb249e3siZm4iIFhjb21tZW50fX0gbWVudUNsYXNzPSJkcm9wZG93bi1tZW51LXJpZ2h0IiAvPiB7ey9pZn19IHt7I2lmIGFwcC5hY2wuZmlsZV9saXN0fX0ge3sjaWYgbGlzdEZldGNoZWR9fSA8d2lkZ2V0LWNsaXBib2FyZCBtb2RlbD17e2NvcHlGaWxlbGlzdH19IC8+IDx3aWRnZXQtY2xpcGJvYXJkIG1vZGVsPXt7Y29weVVybGxpc3R9fSAvPiB7e2Vsc2V9fSA8YnV0dG9uIGNsYXNzPSJidG4gYnRuLXhzIGJ0bi1kZWZhdWx0IiB7eyJhY3Rpb24iICgibm9leHBhbmQiICJnZXRGaWxlbGlzdCIpfX0+IGZldGNoIGZpbGUgbGlzdHMgPC9idXR0b24+IHt7L2lmfX0ge3svaWZ9fSB7eyNpZiBhcHAuYWNsLmRlbGV0ZX19IDxidXR0b24tY29uZmlybSBidXR0b25DbGFzcz0iYnRuIGJ0bi14cyBidG4tZGVmYXVsdCIgYWN0aW9uQnV0dG9uQ2xhc3M9ImJ0biBidG4tZGVmYXVsdCIgdGl0bGU9IkRpc2NhcmQgZGF0YXNldCIgdGV4dD0iQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIG1hcmsgZGF0YXNldCB7e3BhcmFtcy5pZH19IGZvciBkZWxldGlvbj8gSWYgdGhlIGNvcnJlc3BvbmRpbmcgZmlsZXMgc3RpbGwgZXhpc3RzIG9uIGRpc2ssIHRoZXkgd291bGQgYmUgcmUtYWRkZWQgYXMgbmV3IGRhdGFzZXQgZHVyaW5nIHRoZSBuZXh0IHNjYW4uIFRoZSBkaXNjYXJkZWQgZGF0YXNldCB3b3VsZCBiZSBkZWxldGVkIGR1cmluZyB0aGUgbmV4dCBjbGVhbnVwIGFuZCBpdHMgdGFncyBhbmQgY29tbWVudHMgd291bGQgYmUgSVJSRVZPQ0FCTFkgZ29uZS4iIGFjdGlvbj17eyJmbiIgZGVsZXRlfX0gY29uZmlybVRleHQ9IkRpc2NhcmQgZGF0YXNldCI+IERpc2NhcmQgZGF0YXNldCA8L2J1dHRvbi1jb25maXJtPiB7ey9pZn19IDwvc3Bhbj4ge3svaWZ9fSA8L2Rpdj4gPG0taHNjcm9sbD4gPHVsIGNsYXNzPSJuYXYgbmF2LXRhYnMiPiB7eyNpZiBtb2RlbC5zdW1tYXJ5fX0gPGxpIHJvbGU9InByZXNlbnRhdGlvbiIgY2xhc3M9Int7ImlmIiAoImlzLWVxdWFsIiB0YWJpbmRleCAic3VtbWFyeSIpICJhY3RpdmUifX0iPjxhIHJvbGU9ImJ1dHRvbiIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAic2V0dGFiIiAic3VtbWFyeSIpfX0+U3VtbWFyeTwvYT48L2xpPiB7ey9pZn19IHt7I2VhY2ggbW9kZWwuc2VjdGlvbnMgYXMgfHNlY3Rpb24gaW5kZXh8fX0gPGxpIHJvbGU9InByZXNlbnRhdGlvbiIgY2xhc3M9Int7ImlmIiAoImlzLWVxdWFsIiB0YWJpbmRleCBpbmRleCkgImFjdGl2ZSJ9fSI+PGEgcm9sZT0iYnV0dG9uIiB7eyJhY3Rpb24iICgibm9leHBhbmQiICJzZXR0YWIiIGluZGV4KX19Pnt7c2VjdGlvbi50aXRsZX19PC9hPjwvbGk+IHt7L2VhY2h9fSA8L3VsPiA8L20taHNjcm9sbD4gPGRpdiBjbGFzcz0idGFiLWNvbnRlbnQiPiB7eyNpZiBtb2RlbC5zdW1tYXJ5fX0gPGRpdiByb2xlPSJ0YWJwYW5lbCIgY2xhc3M9InRhYi1wYW5lIHt7ImlmIiAoImlzLWVxdWFsIiB0YWJpbmRleCAic3VtbWFyeSIpICJhY3RpdmUifX0iPiA8ZGl2IGNsYXNzPSJwYW5lbCBwYW5lbC1kZWZhdWx0Ij4gPGRpdiBjbGFzcz0icGFuZWwtYm9keSI+IHt7I2VhY2ggbW9kZWwuc3VtbWFyeS53aWRnZXRzIGFzIHx3aWRnZXR8fX0gPGRpdiBjbGFzcz0icGFuZWwgcGFuZWwtZGVmYXVsdCI+IDxkaXYgY2xhc3M9InBhbmVsLWJvZHkiPiA8aDM+e3t3aWRnZXQuY2FwdGlvbn19PC9oMz4gPHdpZGdldC1sb2FkZXIgbW9kZWw9e3t3aWRnZXR9fSAvPiA8L2Rpdj4gPC9kaXY+IHt7L2VhY2h9fSA8aHIgLz4gPGRpdj4gVGFnZ2VkIDx1bCBjbGFzcz0ibGlzdC1pbmxpbmUgdGFnZ2VkIj57eyNlYWNoIG1vZGVsLnRhZ3MgYXMgfHRhZ3x9fTxsaT48c3BhbiBjbGFzcz0iYmFkZ2UiPnt7dGFnfX08L3NwYW4+PC9saT57ey9lYWNofX08L3VsPiB7eyNpZiBhcHAuYWNsLnRhZ319IDx3aWRnZXQtdGFnIGNsYXNzPSJidG4gYnRuLXhzIGJ0bi1kZWZhdWx0IiBkaXNhYmxlZD17eyJub3QiIGFwcC51c2VyfX0gdGFncz17e21vZGVsLnRhZ3N9fSBhbGx0YWdzPXt7bW9kZWwuYWxsX2tub3duX3RhZ3N9fSBhbHRBY3Rpb249e3siZm4iIG9wZW5TaWduaW59fSBjaGFuZ2VBY3Rpb249e3siZm4iIHJldGFnfX0gLz4ge3svaWZ9fSA8L2Rpdj4gPGhyIC8+IHt7I2VhY2ggbW9kZWwuY29tbWVudHMgYXMgfGNvbW1lbnR8fX0gPGRpdiBjbGFzcz0iY29tbWVudCBwYW5lbCBwYW5lbC1kZWZhdWx0Ij4gPGRpdiBjbGFzcz0iY29tbWVudC1oZWFkZXIgcGFuZWwtaGVhZGluZyI+IDxzdHJvbmc+e3tjb21tZW50LmF1dGhvcn19PC9zdHJvbmc+IGNvbW1lbnRlZCA8dGltZSBkYXRldGltZT0ie3tjb21tZW50LnRpbWVBZGRlZH19IiBpcz0icmVsYXRpdmUtdGltZSIgdGl0bGU9Int7Y29tbWVudC50aW1lQWRkZWR9fSIgPnt7KCJwcmludC1yZWxhdGltZSIgY29tbWVudC50aW1lQWRkZWQpfX08L3RpbWU+IDwvZGl2PiA8ZGl2IGNsYXNzPSJjb21tZW50LWNvbnRlbnQgcGFuZWwtYm9keSI+IHt7Y29tbWVudC50ZXh0fX0gPC9kaXY+IDwvZGl2PiB7ey9lYWNofX0ge3sjaWYgYXBwLmFjbC5jb21tZW50fX0gPGRpdiBjbGFzcz0icGFuZWwgcGFuZWwtZGVmYXVsdCI+IDxkaXYgY2xhc3M9InBhbmVsLWJvZHkiPiA8ZGl2IGNsYXNzPSJmb3JtLWdyb3VwIj4ge3sjaWYgYXBwLnVzZXJ9fSA8aW5wdXQtdGV4dGFyZWEgY2xhc3M9ImZvcm0tY29udHJvbCIgcGxhY2Vob2xkZXI9IkxlYXZlIGEgY29tbWVudCIgdmFsdWU9e3tjb21tZW50fX0gcm93cz01IGNoYW5nZUFjdGlvbj17eyJjdXJyeSIgKCJub2V4cGFuZCIgKCJzZXQiICgibm9leHBhbmQiIGNvbW1lbnQpKSl9fSAvPiB7e2Vsc2V9fSA8aW5wdXQtdGV4dGFyZWEgY2xhc3M9ImZvcm0tY29udHJvbCIgcGxhY2Vob2xkZXI9IlNpZ24gaW4gdG8gY29tbWVudCIgdmFsdWU9e3tjb21tZW50fX0gcm93cz01IGNoYW5nZUFjdGlvbj17eyJjdXJyeSIgKCJub2V4cGFuZCIgKCJzZXQiICgibm9leHBhbmQiIGNvbW1lbnQpKSl9fSBkaXNhYmxlZD0iZGlzYWJsZWQiIC8+IHt7L2lmfX0gPC9kaXY+IHt7I2lmIGFwcC51c2VyfX0gPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4gYnRuLWRlZmF1bHQiIHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgInNhdmVDb21tZW50Iil9fT4gQ29tbWVudCA8L2J1dHRvbj4ge3svaWZ9fSA8L2Rpdj4gPC9kaXY+IHt7L2lmfX0gPC9kaXY+IDwvZGl2PiA8L2Rpdj4ge3svaWZ9fSB7eyNlYWNoIG1vZGVsLnNlY3Rpb25zIGFzIHxzZWN0aW9uIGluZGV4fH19IDxkaXYgcm9sZT0idGFicGFuZWwiIGNsYXNzPSJ0YWItcGFuZSB7eyJpZiIgKCJpcy1lcXVhbCIgdGFiaW5kZXggaW5kZXgpICJhY3RpdmUifX0iPiB7eyNpZiAoImlzLWVxdWFsIiB0YWJpbmRleCBpbmRleCl9fSB7eyNlYWNoIHNlY3Rpb24ud2lkZ2V0cyBhcyB8d2lkZ2V0fH19IDxkaXYgY2xhc3M9InBhbmVsIHBhbmVsLWRlZmF1bHQiPiA8ZGl2IGNsYXNzPSJwYW5lbC1ib2R5Ij4gPGgzPnt7d2lkZ2V0LmNhcHRpb259fTwvaDM+IDx3aWRnZXQtbG9hZGVyIG1vZGVsPXt7d2lkZ2V0fX0gLz4gPC9kaXY+IDwvZGl2PiB7ey9lYWNofX0ge3svaWZ9fSA8L2Rpdj4ge3svZWFjaH19IDwvZGl2PiA8L2Rpdj4gPC93aWRnZXQtd2FpdGluZz4=`,
            this.type = "dataset",
            this.app = (0,
            c.computed)(function() {
                return this.getOwner().lookup("application-route")
            }),
            this.comment = "",
            this.modelId = null,
            this.model = (0,
            c.computed)("params", _asyncToGenerator(function*() {
                const {id: a} = this.params;
                document.title = "dataset" === this.type ? `MARV > ${a.slice(0, 10)}` : `MARV > ${this.type}}`;
                const b = yield this.app.api({
                    url: `${this.type}/${a}`
                });
                return this.baseurl = `marv/api/${this.type}/${a}`,
                this.rebaseUrls(b),
                this.app.activeCollection = b.collection,
                this.modelId !== a && (this.tabindex = b.summary ? "summary" : 0,
                this.modelId = a),
                b.comments = c.A.create(b.comments),
                b.tags = c.A.create(b.tags),
                c.O.create(b)
            }))
        }
        getFilelist() {
            this.app.getFilelist([this.model.id]).then((a)=>{
                this.copyFilelist = {
                    data: a.paths.join("\n"),
                    title: "file paths"
                },
                this.copyUrllist = {
                    data: a.urls.map((a)=>`${this.app.apiEndpoint}${a}`).join("\n"),
                    title: "URLs"
                },
                this.listFetched = !0
            }
            )
        }
        toggleControls() {
            this.controlsOpen = !this.controlsOpen
        }
        saveComment() {
            this.comment && (this.app.comment({
                [this.model.id]: {
                    add: [this.comment]
                }
            }).then(()=>this.reloadModel()),
            this.comment = "")
        }
        settab(a) {
            this.tabindex = a
        }
        openSignin() {
            this.app.openSignin()
        }
        retag(a) {
            const b = {}
              , c = {};
            a.added.forEach((a)=>b[a] = [this.model.id]),
            a.removed.forEach((a)=>c[a] = [this.model.id]),
            this.app.tag({
                [this.model.collection]: {
                    add: b,
                    remove: c
                }
            }).then(()=>this.reloadModel())
        }
        Xcomment(a) {
            this.app.comment({
                [this.model.id]: {
                    add: [a]
                }
            }).then(()=>this.reloadModel())
        }
        delete() {
            this.app.delete([this.model.id]).then(()=>{
                this.transitionTo({
                    route: "index"
                })
            }
            )
        }
        rebaseUrls(a) {
            const b = (a.summary ? [a.summary] : []).concat(a.sections)
              , {sessionid: c} = this.app
              , d = c ? `?access_token=${c}` : "";
            b.forEach((a)=>{
                a.widgets.forEach((a)=>{
                    a.data && ("image" === a.type ? a.data.src = `${this.baseurl}/${a.data.src}${d}` : "gallery" === a.type ? a.data.images.forEach((a)=>{
                        a.src = `${this.baseurl}/${a.src}${d}`
                    }
                    ) : "table" === a.type ? a.data.columns.forEach((b,c)=>{
                        "rellink" === b.formatter && (b.formatter = "link",
                        a.data.rows.forEach((a)=>a.values[c].href = `${this.baseurl}/${a.values[c].href}${d}`))
                    }
                    ) : "video" === a.type && (a.data.src = `${this.baseurl}/${a.data.src}${d}`))
                }
                //!ee
                )
            }
            )
        }
        modelHook(a) {
            this.params = a
        }
        reloadModel() {
            this.params = {
                id: this.params.id
            }
        }
    }
    a.default = d
}),
define(8, ["exports", 44, 45, 50], function(a, b, c, d) {
    "use strict";
    function e(a, b) {
        do {
            if (a === b)
                return !0;
            b = b.parentElement
        } while (b.parentElement);return !1
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    class f extends b.Component {
        constructor() {
            super(),
            this.template = `PGRpdiBjbGFzcz0iZmllbGQtZGF0ZXRpbWUgcm93Ij4gPGRpdiBjbGFzcz0iY29sLXhzLTYiPiA8ZGl2IGNsYXNzPSJpbnB1dC1ncm91cCBkYXRlIiB7eyJhY3Rpb24iICgibm9leHBhbmQiICJjYWxlbmRhckZvY3VzSW4iIG9uPSJmb2N1cyIgY2FwdHVyZT10cnVlKX19IHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgImNhbGVuZGFyRm9jdXNPdXQiIG9uPSJibHVyIiBjYXB0dXJlPXRydWUpfX0+IDxzcGFuIGNsYXNzPSJpbnB1dC1ncm91cC1hZGRvbiBkcm9wZG93biB7eyJpZiIgY2FsZW5kYXJPcGVuICJvcGVuIn19Ij4gPHNwYW4gY2xhc3M9ImdseXBoaWNvbiBnbHlwaGljb24tY2FsZW5kYXIiPjwvc3Bhbj4ge3sjaWYgY2FsZW5kYXJPcGVufX0gPGRpdiBjbGFzcz0iZHJvcGRvd24tbWVudSIgdGFiaW5kZXg9Ii0xIj4gPHRhYmxlIGNsYXNzPSJYdGFibGUgdGFibGUtY29uZGVuc2VkIHNtYWxsIHRleHQtY2VudGVyIj4gPHRoZWFkPiA8dHI+IDx0aCBjbGFzcz0idGV4dC1jZW50ZXIiIHN0eWxlPSJYcGFkZGluZy1sZWZ0OjA7IHBhZGRpbmctcmlnaHQ6MCI+IDxidXR0b24gY2xhc3M9ImJ0biBidG4tZGVmYXVsdCBidG4teHMiIHR5cGU9ImJ1dHRvbiIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAicHJldiIpfX0+IDxzcGFuIGNsYXNzPSJzbWFsbCBnbHlwaGljb24gZ2x5cGhpY29uLWJhY2t3YXJkIj48L3NwYW4+IDwvYnV0dG9uPiA8L3RoPiA8dGggY2xhc3M9InRleHQtY2VudGVyIiBjb2xzcGFuPSI1Ij57e2Rpc3BsYXlNb250aHllYXJ9fTwvdGg+IDx0aCBjbGFzcz0idGV4dC1jZW50ZXIiIHN0eWxlPSJwYWRkaW5nLWxlZnQ6MDsgWHBhZGRpbmctcmlnaHQ6MCI+IDxidXR0b24gY2xhc3M9ImJ0biBidG4tZGVmYXVsdCBidG4teHMiIHR5cGU9ImJ1dHRvbiIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAibmV4dCIpfX0+IDxzcGFuIGNsYXNzPSJzbWFsbCBnbHlwaGljb24gZ2x5cGhpY29uLWZvcndhcmQiPjwvc3Bhbj4gPC9idXR0b24+IDwvdGg+IDwvdHI+IDx0cj4ge3shI2dyb3VwfX0ge3sjZWFjaCB3ZWVrZGF5cyBhcyB8d2Vla2RheXx9fSA8dGg+e3t3ZWVrZGF5fX08L3RoPiB7ey9lYWNofX0ge3shL2dyb3VwfX0gPC90cj4gPC90aGVhZD4gPHRib2R5PiB7eyNlYWNoIG1hdHJpeCBhcyB8bGluZXx9fSA8dHI+IHt7I2VhY2ggbGluZSBhcyB8Y29sdW1ufH19IDx0ZCBjbGFzcz17eyJpZiIgY29sdW1uLmlzQ3VycmVudCAiY3VycmVudERheSJ9fT4gPGEgY2xhc3M9ImJ0biBidG4teHMge3siaWYiIGNvbHVtbi5pc01vbnRoICJibGFjayIgImdyYXkifX0iIHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgInNldERhdGUiIGNvbHVtbi55ZWFyIGNvbHVtbi5tb250aCBjb2x1bW4uZGF0ZSl9fT57e2NvbHVtbi5kYXRlfX08L2E+IDwvdGQ+IHt7L2VhY2h9fSA8L3RyPiB7ey9lYWNofX0gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IHt7L2lmfX0gPC9zcGFuPiA8aW5wdXQtY29udHJvbCBjbGFzcz0iZm9ybS1jb250cm9sIiB2YWx1ZT17e2Rpc3BsYXlEYXRlfX0gLz4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPSJjb2wteHMtNiI+IDxkaXYgY2xhc3M9ImlucHV0LWdyb3VwIHRpbWUiIHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgImNsb2NrRm9jdXNJbiIgb249ImZvY3VzIiBjYXB0dXJlPXRydWUpfX0ge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAiY2xvY2tGb2N1c091dCIgb249ImJsdXIiIGNhcHR1cmU9dHJ1ZSl9fT4gPHNwYW4gY2xhc3M9ImlucHV0LWdyb3VwLWFkZG9uIGRyb3Bkb3duIHt7ImlmIiBjbG9ja09wZW4gIm9wZW4ifX0iPiA8c3BhbiBjbGFzcz0iZ2x5cGhpY29uIGdseXBoaWNvbi10aW1lIj48L3NwYW4+IHt7I2lmIGNsb2NrT3Blbn19IDxkaXYgY2xhc3M9ImRyb3Bkb3duLW1lbnUiIHN0eWxlPSJtaW4td2lkdGg6MCIgdGFiaW5kZXg9Ii0xIj4gPHRhYmxlIGNsYXNzPSJYdGFibGUgdGFibGUtY29uZGVuc2VkIHNtYWxsIHRleHQtY2VudGVyIj4gPHRib2R5PiA8dHI+IDx0ZD4gPGJ1dHRvbiBjbGFzcz0iYnRuIGJ0bi1kZWZhdWx0IiB7eyJhY3Rpb24iICgibm9leHBhbmQiICJob3VyVXAiKX19PiA8c3BhbiBjbGFzcz0iZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXVwIj48L3NwYW4+IDwvYnV0dG9uPiA8L3RkPiA8dGQgY2xhc3M9InNlcGFyYXRvciI+Jm5ic3A7PC90ZD4gPHRkPiA8YnV0dG9uIGNsYXNzPSJidG4gYnRuLWRlZmF1bHQiIHt7ImFjdGlvbiIgKCJub2V4cGFuZCIgIm1pbnV0ZVVwIil9fT4gPHNwYW4gY2xhc3M9ImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi11cCI+PC9zcGFuPiA8L2J1dHRvbj4gPC90ZD4gPC90cj4gPHRyPiA8dGQ+e3tob3VyfX08L3RkPiA8dGQgY2xhc3M9InNlcGFyYXRvciI+OjwvdGQ+IDx0ZD57e21pbnV0ZX19PC90ZD4gPC90cj4gPHRyPiA8dGQ+IDxidXR0b24gY2xhc3M9ImJ0biBidG4tZGVmYXVsdCIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAiaG91ckRvd24iKX19PiA8c3BhbiBjbGFzcz0iZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLWRvd24iPjwvc3Bhbj4gPC9idXR0b24+IDwvdGQ+IDx0ZCBjbGFzcz0ic2VwYXJhdG9yIj4mbmJzcDs8L3RkPiA8dGQ+IDxidXR0b24gY2xhc3M9ImJ0biBidG4tZGVmYXVsdCIge3siYWN0aW9uIiAoIm5vZXhwYW5kIiAibWludXRlRG93biIpfX0+IDxzcGFuIGNsYXNzPSJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tZG93biI+PC9zcGFuPiA8L2J1dHRvbj4gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IHt7L2lmfX0gPC9zcGFuPiA8IS0taW5wdXQtY29udHJvbCBjbGFzcz0iZm9ybS1jb250cm9sIiB2YWx1ZT17e2Rpc3BsYXlUaW1lfX0gLy0tPiA8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgdmFsdWU9e3tkaXNwbGF5VGltZX19IGRpc2FibGVkPWRpc2FibGVkID4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4=`,
            this.weekdays = [0, 1, 2, 3, 4, 5, 6].map((a)=>{
                const b = new d.Moment;
                return b.weekday = a,
                b.format("dd")
            }
            ),
            this.val = (0,
            c.computed)("value", function() {
                return this.value ? new d.Moment(this.value) : new d.Moment().startOf("date")
            }),
            this.currentMonth = (0,
            c.computed)("value", function() {
                return this.val.clone().startOf("month")
            }),
            this.displayMonthyear = (0,
            c.computed)("currentMonth", function() {
                return this.currentMonth.format("MMM YYYY")
            }),
            this.displayDate = (0,
            c.computed)("val", function() {
                return this.value ? this.val.format("LL") : ""
            }),
            this.displayTime = (0,
            c.computed)("val", function() {
                return this.val.format("LT")
            }),
            this.hour = (0,
            c.computed)("val", function() {
                return this.val.hours
            }),
            this.minute = (0,
            c.computed)("val", function() {
                return this.val.minutes
            }),
            this.matrix = (0,
            c.computed)("currentMonth", "val", function() {
                const a = this.val
                  , b = this.currentMonth
                  , d = a.year
                  , e = a.month
                  , f = a.date
                  , g = b.month
                  , h = b.clone().startOf("month").startOf("week")
                  , i = b.clone().endOf("month").endOf("week");
                for (var j = c.A.create(); h < i; ) {
                    const a = c.A.create();
                    for (let b = 0; 7 > b; b++)
                        a.push(c.O.create({
                            isCurrent: h.date === f && h.month === e && h.year === d,
                            isMonth: h.month === g,
                            year: h.year,
                            month: h.month,
                            date: h.date
                        })),
                        h.add(1, "date");
                    j.push(a)
                }
                return j
            })
        }
        calendarFocusIn(a) {
            console.log("focusin", a),
            this.calendarOpen = !0
        }
        calendarFocusOut(a) {
            if (console.log("focusout", a),
            a.relatedTarget) {
                const b = this.getElement();
                if (e(b, a.relatedTarget))
                    return
            }
            this.calendarOpen = !1
        }
        clockFocusIn() {
            this.clockOpen = !0
        }
        clockFocusOut(a) {
            if (a.relatedTarget) {
                const b = this.getElement();
                if (e(b, a.relatedTarget))
                    return
            }
            this.clockOpen = !1
        }
        prev() {
            this.currentMonth = this.currentMonth.clone().add(-1, "month")
        }
        next() {
            this.currentMonth = this.currentMonth.clone().add(1, "month")
        }
        setDate(a, b, c) {
            const d = this.val.clone();
            d.year = a,
            d.month = b,
            d.date = c,
            this.changeAction(d.format()),
            console.log("selected", d.format()),
            this.val = d
        }
        hourUp() {
            this.val = this.val.clone().add(1, "hour")
        }
        hourDown() {
            this.val = this.val.clone().add(-1, "hour")
        }
        minuteUp() {
            this.val = this.val.clone().add(1, "minute")
        }
        minuteDown() {
            this.val = this.val.clone().add(-1, "minute")
        }
        mChangeAction(a) {
            this.changeAction(a ? a : a)
        }
    }
    a.default = f
}),
define(9, ["exports", 44, 45], function(a, b, c) {
    "use strict";
    function d(a) {
        if ("" === a)
            return "";
        else {
            const b = e.exec(a);
            return !b || isNaN(b[1]) ? NaN : (a = +b[1],
            b[2] && (a *= Math.pow(2, 10 * f.indexOf(b[2][0].toLowerCase()))),
            Math.floor(a))
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    const e = /^\s*([0-9.]+)\s*([kmgtpezy][b]?)?\s*$/i
      , f = ["b", "k", "m", "g", "t", "p", "e", "z", "y"];
    class g extends b.Component {
        constructor() {
            super(),
            this.template = `PGRpdiBjbGFzcz0icm93Ij4gPGRpdiBjbGFzcz0iY29sLXhzLTkiPiA8aW5wdXQtY29udHJvbCBjbGFzcz0iZm9ybS1jb250cm9sIiB2YWx1ZT17e3ZhbHVlfX0gY2hhbmdlQWN0aW9uPXt7ImZuIiBtQ2hhbmdlQWN0aW9ufX0gLz4gPC9kaXY+IDxkaXYgY2xhc3M9ImNvbC14cy0zIj4gPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIHZhbHVlPXt7c2l6ZX19IGRpc2FibGVkPXRydWU+IDwvZGl2PiA8L2Rpdj4=`,
            this.size = (0,
            c.computed)("value", function() {
                const a = d(this.value);
                return a ? `${a} bytes` : ""
            })
        }
        mChangeAction(a) {
            const b = d(a);
            isNaN(b) ? this.changeErrorAction("Value must be a number and optional unit (e.g. MB)") : this.changeErrorAction(null),
            this.changeAction(a)
        }
    }
    a.default = g
}),
require([0]);
