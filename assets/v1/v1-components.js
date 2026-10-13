//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), s = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, c = (n, r, o) => (o = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), l = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.activity"), p = Symbol.for("react.view_transition"), m = Symbol.iterator;
	function h(e) {
		return typeof e != "object" || !e ? null : (e = m && e[m] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var g = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, _ = Object.assign, v = {};
	function y(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
		if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, y.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	};
	function b() {}
	b.prototype = y.prototype;
	function x(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	var S = x.prototype = new b();
	S.constructor = x, _(S, y.prototype), S.isPureReactComponent = !0;
	var C = Array.isArray;
	function w() {}
	var T = {
		H: null,
		A: null,
		T: null,
		S: null
	}, E = Object.prototype.hasOwnProperty;
	function D(e, n, r) {
		var i = r.ref;
		return {
			$$typeof: t,
			type: e,
			key: n,
			ref: i === void 0 ? null : i,
			props: r
		};
	}
	function O(e, t) {
		return D(e.type, t, e.props);
	}
	function k(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function A(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var j = /\/+/g;
	function M(e, t) {
		return typeof e == "object" && e && e.key != null ? A("" + e.key) : t.toString(36);
	}
	function ee(e) {
		switch (e.status) {
			case "fulfilled": return e.value;
			case "rejected": throw e.reason;
			default: switch (typeof e.status == "string" ? e.then(w, w) : (e.status = "pending", e.then(function(t) {
				e.status === "pending" && (e.status = "fulfilled", e.value = t);
			}, function(t) {
				e.status === "pending" && (e.status = "rejected", e.reason = t);
			})), e.status) {
				case "fulfilled": return e.value;
				case "rejected": throw e.reason;
			}
		}
		throw e;
	}
	function N(e, r, i, a, o) {
		var s = typeof e;
		(s === "undefined" || s === "boolean") && (e = null);
		var c = !1;
		if (e === null) c = !0;
		else switch (s) {
			case "bigint":
			case "string":
			case "number":
				c = !0;
				break;
			case "object": switch (e.$$typeof) {
				case t:
				case n:
					c = !0;
					break;
				case d: return c = e._init, N(c(e._payload), r, i, a, o);
			}
		}
		if (c) return o = o(e), c = a === "" ? "." + M(e, 0) : a, C(o) ? (i = "", c != null && (i = c.replace(j, "$&/") + "/"), N(o, r, i, "", function(e) {
			return e;
		})) : o != null && (k(o) && (o = O(o, i + (o.key == null || e && e.key === o.key ? "" : ("" + o.key).replace(j, "$&/") + "/") + c)), r.push(o)), 1;
		c = 0;
		var l = a === "" ? "." : a + ":";
		if (C(e)) for (var u = 0; u < e.length; u++) a = e[u], s = l + M(a, u), c += N(a, r, i, s, o);
		else if (u = h(e), typeof u == "function") for (e = u.call(e), u = 0; !(a = e.next()).done;) a = a.value, s = l + M(a, u++), c += N(a, r, i, s, o);
		else if (s === "object") {
			if (typeof e.then == "function") return N(ee(e), r, i, a, o);
			throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		}
		return c;
	}
	function P(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return N(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function te(e) {
		if (e._status === -1) {
			var t = e._result, n = t();
			n.then(function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 1, e._result = t, n.status === void 0 && (n.status = "fulfilled", n.value = t));
			}, function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 2, e._result = t, n.status === void 0 && (n.status = "rejected", n.reason = t));
			}), e._status === -1 && (e._status = 0, e._result = n);
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var ne = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	};
	function re(e) {
		var t = T.T, n = {};
		n.types = t === null ? null : t.types, T.T = n;
		try {
			var r = e(), i = T.S;
			i !== null && i(n, r), typeof r == "object" && r && typeof r.then == "function" && r.then(w, ne);
		} catch (e) {
			ne(e);
		} finally {
			t !== null && n.types !== null && (t.types = n.types), T.T = t;
		}
	}
	function ie(e) {
		var t = T.T;
		if (t !== null) {
			var n = t.types;
			n === null ? t.types = [e] : n.indexOf(e) === -1 && n.push(e);
		} else re(ie.bind(null, e));
	}
	var ae = {
		map: P,
		forEach: function(e, t, n) {
			P(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return P(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return P(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!k(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	};
	e.Activity = f, e.Children = ae, e.Component = y, e.Fragment = r, e.Profiler = a, e.PureComponent = x, e.StrictMode = i, e.Suspense = l, e.ViewTransition = p, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, e.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(e) {
			return T.H.useMemoCache(e);
		}
	}, e.addTransitionType = ie, e.cache = function(e) {
		return function() {
			return e.apply(null, arguments);
		};
	}, e.cacheSignal = function() {
		return null;
	}, e.cloneElement = function(e, t, n) {
		if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
		var r = _({}, e.props), i = e.key;
		if (t != null) for (a in t.key !== void 0 && (i = "" + t.key), t) !E.call(t, a) || a === "key" || a === "__self" || a === "__source" || a === "ref" && t.ref === void 0 || (r[a] = t[a]);
		var a = arguments.length - 2;
		if (a === 1) r.children = n;
		else if (1 < a) {
			for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
			r.children = o;
		}
		return D(e.type, i, r);
	}, e.createContext = function(e) {
		return e = {
			$$typeof: s,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}, e.Provider = e, e.Consumer = {
			$$typeof: o,
			_context: e
		}, e;
	}, e.createElement = function(e, t, n) {
		var r, i = {}, a = null;
		if (t != null) for (r in t.key !== void 0 && (a = "" + t.key), t) E.call(t, r) && r !== "key" && r !== "__self" && r !== "__source" && (i[r] = t[r]);
		var o = arguments.length - 2;
		if (o === 1) i.children = n;
		else if (1 < o) {
			for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
			i.children = s;
		}
		if (e && e.defaultProps) for (r in o = e.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
		return D(e, a, i);
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: c,
			render: e
		};
	}, e.isValidElement = k, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: te
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = re, e.unstable_useCacheRefresh = function() {
		return T.H.useCacheRefresh();
	}, e.use = function(e) {
		return T.H.use(e);
	}, e.useActionState = function(e, t, n) {
		return T.H.useActionState(e, t, n);
	}, e.useCallback = function(e, t) {
		return T.H.useCallback(e, t);
	}, e.useContext = function(e) {
		return T.H.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e, t) {
		return T.H.useDeferredValue(e, t);
	}, e.useEffect = function(e, t) {
		return T.H.useEffect(e, t);
	}, e.useEffectEvent = function(e) {
		return T.H.useEffectEvent(e);
	}, e.useId = function() {
		return T.H.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return T.H.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return T.H.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return T.H.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return T.H.useMemo(e, t);
	}, e.useOptimistic = function(e, t) {
		return T.H.useOptimistic(e, t);
	}, e.useReducer = function(e, t, n) {
		return T.H.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return T.H.useRef(e);
	}, e.useState = function(e) {
		return T.H.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return T.H.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return T.H.useTransition();
	}, e.version = "19.3.0";
})), u = /* @__PURE__ */ o(((e, t) => {
	t.exports = l();
})), d = /* @__PURE__ */ o(((e) => {
	function t(e, t) {
		var n = e.length;
		e.push(t);
		a: for (; 0 < n;) {
			var r = n - 1 >>> 1, a = e[r];
			if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
			else break a;
		}
	}
	function n(e) {
		return e.length === 0 ? null : e[0];
	}
	function r(e) {
		if (e.length === 0) return null;
		var t = e[0], n = e.pop();
		if (n !== t) {
			e[0] = n;
			a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
				var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
				if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
				else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
				else break a;
			}
		}
		return t;
	}
	function i(e, t) {
		var n = e.sortIndex - t.sortIndex;
		return n === 0 ? e.id - t.id : n;
	}
	if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
		var a = performance;
		e.unstable_now = function() {
			return a.now();
		};
	} else {
		var o = Date, s = o.now();
		e.unstable_now = function() {
			return o.now() - s;
		};
	}
	var c = [], l = [], u = 1, d = null, f = 3, p = !1, m = !1, h = !1, g = !1, _ = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
	function b(e) {
		for (var i = n(l); i !== null;) {
			if (i.callback === null) r(l);
			else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
			else break;
			i = n(l);
		}
	}
	function x(e) {
		if (h = !1, b(e), !m) {
			if (n(c) !== null) m = !0, S || (S = !0, O());
			else {
				var t = n(l);
				t !== null && j(x, t.startTime - e);
			}
		}
	}
	var S = !1, C = -1, w = 5, T = -1;
	function E() {
		return g ? !0 : !(e.unstable_now() - T < w);
	}
	function D() {
		if (g = !1, S) {
			var t = e.unstable_now();
			T = t;
			var i = !0;
			try {
				a: {
					m = !1, h && (h = !1, v(C), C = -1), p = !0;
					var a = f;
					try {
						b: {
							for (b(t), d = n(c); d !== null && !(d.expirationTime > t && E());) {
								var o = d.callback;
								if (typeof o == "function") {
									d.callback = null, f = d.priorityLevel;
									var s = o(d.expirationTime <= t);
									if (t = e.unstable_now(), typeof s == "function") {
										d.callback = s, b(t), i = !0;
										break b;
									}
									d === n(c) && r(c), b(t);
								} else r(c);
								d = n(c);
							}
							if (d !== null) i = !0;
							else {
								var u = n(l);
								u !== null && j(x, u.startTime - t), i = !1;
							}
						}
						break a;
					} finally {
						d = null, f = a, p = !1;
					}
					i = void 0;
				}
			} finally {
				i ? O() : S = !1;
			}
		}
	}
	var O;
	if (typeof y == "function") O = function() {
		y(D);
	};
	else if (typeof MessageChannel < "u") {
		var k = new MessageChannel(), A = k.port2;
		k.port1.onmessage = D, O = function() {
			A.postMessage(null);
		};
	} else O = function() {
		_(D, 0);
	};
	function j(t, n) {
		C = _(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : w = 0 < e ? Math.floor(1e3 / e) : 5;
	}, e.unstable_getCurrentPriorityLevel = function() {
		return f;
	}, e.unstable_next = function(e) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default: t = f;
		}
		var n = f;
		f = t;
		try {
			return e();
		} finally {
			f = n;
		}
	}, e.unstable_requestPaint = function() {
		g = !0;
	}, e.unstable_runWithPriority = function(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: e = 3;
		}
		var n = f;
		f = e;
		try {
			return t();
		} finally {
			f = n;
		}
	}, e.unstable_scheduleCallback = function(r, i, a) {
		var o = e.unstable_now();
		switch (typeof a == "object" && a ? (a = a.delay, a = typeof a == "number" && 0 < a ? o + a : o) : a = o, r) {
			case 1:
				var s = -1;
				break;
			case 2:
				s = 250;
				break;
			case 5:
				s = 1073741823;
				break;
			case 4:
				s = 1e4;
				break;
			default: s = 5e3;
		}
		return s = a + s, r = {
			id: u++,
			callback: i,
			priorityLevel: r,
			startTime: a,
			expirationTime: s,
			sortIndex: -1
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(C), C = -1) : h = !0, j(x, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, S || (S = !0, O()))), r;
	}, e.unstable_shouldYield = E, e.unstable_wrapCallback = function(e) {
		var t = f;
		return function() {
			var n = f;
			f = t;
			try {
				return e.apply(this, arguments);
			} finally {
				f = n;
			}
		};
	};
})), f = /* @__PURE__ */ o(((e, t) => {
	t.exports = d();
})), p = /* @__PURE__ */ o(((e) => {
	var t = u();
	function n(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function r() {}
	var i = {
		d: {
			f: r,
			r: function() {
				throw Error(n(522));
			},
			D: r,
			C: r,
			L: r,
			m: r,
			X: r,
			S: r,
			M: r
		},
		p: 0,
		findDOMNode: null
	}, a = Symbol.for("react.portal"), o = Symbol.for("react.recoverable"), s = Symbol.for("react.optimistic_key");
	function c(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: a,
			key: r == null ? null : r === s ? s : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	var l = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function d(e, t) {
		if (e === "font") return "";
		if (typeof t == "string") return t === "use-credentials" ? t : "";
	}
	e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, e.browser = function(e) {
		return {
			$$typeof: o,
			_reason: e
		};
	}, e.createPortal = function(e, t) {
		var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(n(299));
		return c(e, t, null, r);
	}, e.flushSync = function(e) {
		var t = l.T, n = i.p;
		try {
			if (l.T = null, i.p = 2, e) return e();
		} finally {
			l.T = t, i.p = n, i.d.f();
		}
	}, e.preconnect = function(e, t) {
		typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, i.d.C(e, t));
	}, e.prefetchDNS = function(e) {
		typeof e == "string" && i.d.D(e);
	}, e.preinit = function(e, t) {
		if (typeof e == "string" && t && typeof t.as == "string") {
			var n = t.as, r = d(n, t.crossOrigin), a = typeof t.integrity == "string" ? t.integrity : void 0, o = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
			n === "style" ? i.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o
			}) : n === "script" && i.d.X(e, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0
			});
		}
	}, e.preinitModule = function(e, t) {
		if (typeof e == "string") {
			if (typeof t == "object" && t) {
				if (t.as == null || t.as === "script") {
					var n = d(t.as, t.crossOrigin);
					i.d.M(e, {
						crossOrigin: n,
						integrity: typeof t.integrity == "string" ? t.integrity : void 0,
						nonce: typeof t.nonce == "string" ? t.nonce : void 0,
						fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
					});
				}
			} else t ?? i.d.M(e);
		}
	}, e.preload = function(e, t) {
		if (typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
			var n = t.as, r = d(n, t.crossOrigin);
			i.d.L(e, n, {
				crossOrigin: r,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0,
				type: typeof t.type == "string" ? t.type : void 0,
				fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
				referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
				imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
				imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
				media: typeof t.media == "string" ? t.media : void 0
			});
		}
	}, e.preloadModule = function(e, t) {
		if (typeof e == "string") {
			if (t) {
				var n = d(t.as, t.crossOrigin);
				i.d.m(e, {
					as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
					crossOrigin: n,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0,
					fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
				});
			} else i.d.m(e);
		}
	}, e.requestFormReset = function(e) {
		i.d.r(e);
	}, e.unstable_batchedUpdates = function(e, t) {
		return e(t);
	}, e.useFormState = function(e, t, n) {
		return l.H.useFormState(e, t, n);
	}, e.useFormStatus = function() {
		return l.H.useHostTransitionStatus();
	}, e.version = "19.3.0";
})), m = /* @__PURE__ */ o(((e, t) => {
	function n() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = p();
})), h = /* @__PURE__ */ o(((e) => {
	var t = f(), n = u(), r = m();
	function i(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function a(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function o(e) {
		for (var t = e, n = t; n && !n.alternate;) t = n, t.flags & 4098 && (e = t.return), n = t.return;
		for (; t.return;) t = t.return;
		return t.tag === 3 ? e : null;
	}
	function s(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function c(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function l(e) {
		if (o(e) !== e) throw Error(i(188));
	}
	function d(e) {
		var t = e.alternate;
		if (!t) {
			if (t = o(e), t === null) throw Error(i(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var a = n.return;
			if (a === null) break;
			var s = a.alternate;
			if (s === null) {
				if (r = a.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (a.child === s.child) {
				for (s = a.child; s;) {
					if (s === n) return l(a), e;
					if (s === r) return l(a), t;
					s = s.sibling;
				}
				throw Error(i(188));
			}
			if (n.return !== r.return) n = a, r = s;
			else {
				for (var c = !1, u = a.child; u;) {
					if (u === n) {
						c = !0, n = a, r = s;
						break;
					}
					if (u === r) {
						c = !0, r = a, n = s;
						break;
					}
					u = u.sibling;
				}
				if (!c) {
					for (u = s.child; u;) {
						if (u === n) {
							c = !0, n = s, r = a;
							break;
						}
						if (u === r) {
							c = !0, r = s, n = a;
							break;
						}
						u = u.sibling;
					}
					if (!c) throw Error(i(189));
				}
			}
			if (n.alternate !== r) throw Error(i(190));
		}
		if (n.tag !== 3) throw Error(i(188));
		return n.stateNode.current === n ? e : t;
	}
	function p(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = p(e), t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	function h(e, t, n, r, i, a) {
		for (; e !== null;) {
			if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && h(e.child, t, n, r, i, a)) return !0;
			e = e.sibling;
		}
		return !1;
	}
	function g(e) {
		for (e = e.return; e !== null;) {
			if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
			e = e.return;
		}
		return null;
	}
	function _(e) {
		var t = !1;
		for (e = e.return; e !== null && (e.tag === 4 && (t = !0), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);) e = e.return;
		return t;
	}
	function v(e) {
		var t = [null, null], n = g(e);
		return n === null || y(t, e, n.child, { foundSelf: !1 }), t;
	}
	function y(e, t, n, r) {
		for (; n !== null;) {
			if (n === t) r.foundSelf = !0;
			else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
				if (r.foundSelf) return e[1] = n, !0;
				e[0] = n;
			} else if ((n.tag !== 22 || n.memoizedState === null) && y(e, t, n.child, r)) return !0;
			n = n.sibling;
		}
		return !1;
	}
	function b(e) {
		switch (e.tag) {
			case 5:
			case 27:
			case 6: return e.stateNode;
			case 3: return e.stateNode.containerInfo;
			default: throw Error(i(559));
		}
	}
	var x = null, S = null;
	function C(e, t, n) {
		return e === n || e === t && (x = e, !0);
	}
	function w(e, t, n) {
		return e === n ? (S = e, !1) : e === t && (S !== null && (x = e), !0);
	}
	function T(e) {
		if (e === null) return null;
		do
			e = e === null ? null : e.return;
		while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
		return e || null;
	}
	function E(e, t, n) {
		for (var r = 0, i = e; i; i = n(i)) r++;
		i = 0;
		for (var a = t; a; a = n(a)) i++;
		for (; 0 < r - i;) e = n(e), r--;
		for (; 0 < i - r;) t = n(t), i--;
		for (; r--;) {
			if (e === t || t !== null && e === t.alternate) return e;
			e = n(e), t = n(t);
		}
		return null;
	}
	var D = Object.assign, O = Symbol.for("react.element"), k = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), ee = Symbol.for("react.profiler"), N = Symbol.for("react.consumer"), P = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), oe = Symbol.for("react.activity"), se = Symbol.for("react.legacy_hidden"), ce = Symbol.for("react.memo_cache_sentinel"), le = Symbol.for("react.view_transition"), ue = Symbol.for("react.recoverable"), de = Symbol.iterator;
	function F(e) {
		return typeof e != "object" || !e ? null : (e = de && e[de] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var fe = Symbol.for("react.client.reference");
	function pe(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === fe ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case j: return "Fragment";
			case ee: return "Profiler";
			case M: return "StrictMode";
			case ne: return "Suspense";
			case re: return "SuspenseList";
			case oe: return "Activity";
			case le: return "ViewTransition";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case A: return "Portal";
			case P: return e.displayName || "Context";
			case N: return (e._context.displayName || "Context") + ".Consumer";
			case te:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case ie: return t = e.displayName || null, t === null ? pe(e.type) || "Memo" : t;
			case ae:
				t = e._payload, e = e._init;
				try {
					return pe(e(t));
				} catch {}
		}
		return null;
	}
	var I = Array.isArray, L = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, R = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, B = [], me = -1;
	function he(e) {
		return { current: e };
	}
	function ge(e) {
		0 > me || (e.current = B[me], B[me] = null, me--);
	}
	function _e(e, t) {
		me++, B[me] = e.current, e.current = t;
	}
	var ve = he(null), V = he(null), ye = he(null), H = he(null);
	function be(e, t) {
		switch (_e(ye, t), _e(V, e), _e(ve, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? up(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = up(t), e = dp(t, e);
			else switch (e) {
				case "svg":
					e = 1;
					break;
				case "math":
					e = 2;
					break;
				default: e = 0;
			}
		}
		ge(ve), _e(ve, e);
	}
	function xe() {
		ge(ve), ge(V), ge(ye);
	}
	function Se(e) {
		var t = e.memoizedState;
		t !== null && (sh._currentValue = t.memoizedState, _e(H, e)), t = ve.current;
		var n = dp(t, e.type);
		t !== n && (_e(V, e), _e(ve, n));
	}
	function Ce(e) {
		V.current === e && (ge(ve), ge(V)), H.current === e && (ge(H), sh._currentValue = z);
	}
	var we, Te;
	function Ee(e) {
		if (we === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			we = t && t[1] || "", Te = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + we + e + Te;
	}
	var De = !1;
	function Oe(e, t) {
		if (!e || De) return "";
		De = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							n = !1;
							try {
								var i = Object.getOwnPropertyDescriptor(e.prototype, "props");
								Object.defineProperty(e.prototype, "props", {
									configurable: !0,
									set: function() {
										throw Error();
									}
								}), n = !0, new e();
							} finally {
								n && (i === void 0 ? delete e.prototype.props : Object.defineProperty(e.prototype, "props", i));
							}
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split("\n"), l = s.split("\n");
				for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
				for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = "\n" + c[r].replace(" at new ", " at ");
							return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			De = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? Ee(n) : "";
	}
	function ke(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return Ee(e.type);
			case 16: return Ee("Lazy");
			case 13: return e.child !== t && t !== null ? Ee("Suspense Fallback") : Ee("Suspense");
			case 19: return Ee("SuspenseList");
			case 0:
			case 15: return Oe(e.type, !1);
			case 11: return Oe(e.type.render, !1);
			case 1: return Oe(e.type, !0);
			case 31: return Ee("Activity");
			case 30: return Ee("ViewTransition");
			default: return "";
		}
	}
	function U(e) {
		try {
			var t = "", n = null;
			do
				t += ke(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var Ae = Object.prototype.hasOwnProperty, je = t.unstable_scheduleCallback, Me = t.unstable_cancelCallback, Ne = t.unstable_shouldYield, Pe = t.unstable_requestPaint, Fe = t.unstable_now, Ie = t.unstable_getCurrentPriorityLevel, Le = t.unstable_ImmediatePriority, Re = t.unstable_UserBlockingPriority, ze = t.unstable_NormalPriority, Be = t.unstable_LowPriority, Ve = t.unstable_IdlePriority, He = t.log, Ue = t.unstable_setDisableYieldValue, We = null, Ge = null;
	function Ke(e) {
		if (typeof He == "function" && Ue(e), Ge && typeof Ge.setStrictMode == "function") try {
			Ge.setStrictMode(We, e);
		} catch {}
	}
	var qe = Math.clz32 ? Math.clz32 : Xe, Je = Math.log, Ye = Math.LN2;
	function Xe(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (Je(e) / Ye | 0) | 0;
	}
	var Ze = 256, Qe = 262144, $e = 4194304;
	function et(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return e & -e;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return e & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return e;
		}
	}
	function tt(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = et(n))) : i = et(o) : i = et(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = et(n))) : i = et(o)) : i = et(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function nt(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function rt(e, t) {
		t & 8 && (t |= t & 32);
		var n = e.entangledLanes;
		if (n !== 0) for (e = e.entanglements, n &= t; 0 < n;) {
			var r = 31 - qe(n), i = 1 << r;
			t |= e[r], n &= ~i;
		}
		return t;
	}
	function it(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function at() {
		var e = $e;
		return $e <<= 1, !($e & 62914560) && ($e = 4194304), e;
	}
	function ot(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function st(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function ct(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - qe(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && lt(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function lt(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - qe(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function ut(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - qe(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function dt(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : ft(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function ft(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default: e = 0;
		}
		return e;
	}
	function pt(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function mt() {
		var e = R.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : Ch(e.type)) : e;
	}
	function ht(e, t) {
		var n = R.p;
		try {
			return R.p = e, t();
		} finally {
			R.p = n;
		}
	}
	var gt = Math.random().toString(36).slice(2), _t = "__reactFiber$" + gt, vt = "__reactProps$" + gt, yt = "__reactContainer$" + gt, bt = "__reactEvents$" + gt, xt = "__reactListeners$" + gt, St = "__reactHandles$" + gt, Ct = "__reactResources$" + gt, wt = "__reactMarker$" + gt, Tt = "__reactLoad$" + gt;
	function Et(e) {
		delete e[_t], delete e[vt], delete e[xt], delete e[St];
	}
	function Dt(e) {
		var t;
		if (t = e[_t]) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[yt] || n[_t]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = fm(e); e !== null;) {
					if (n = e[_t]) return n;
					e = fm(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function Ot(e) {
		if (e = e[_t] || e[yt]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function kt(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(i(33));
	}
	function At(e) {
		var t = e[Ct];
		return t ||= e[Ct] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function jt(e) {
		e[wt] = !0;
	}
	function Mt(e) {
		e[Tt] = void 0;
	}
	var Nt = /* @__PURE__ */ new Set(), Pt = {};
	function Ft(e, t) {
		It(e, t), It(e + "Capture", t);
	}
	function It(e, t) {
		for (Pt[e] = t, e = 0; e < t.length; e++) Nt.add(t[e]);
	}
	var Lt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Rt = {}, zt = {};
	function Bt(e) {
		return Ae.call(zt, e) ? !0 : Ae.call(Rt, e) ? !1 : Lt.test(e) ? zt[e] = !0 : (Rt[e] = !0, !1);
	}
	var Vt = !1;
	function Ht() {
		var e = Vt;
		return Vt = !1, e;
	}
	function Ut(e, t, n) {
		if (Bt(t)) {
			if (n === null) e.removeAttribute(t);
			else {
				switch (typeof n) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean":
						var r = t.toLowerCase().slice(0, 5);
						if (r !== "data-" && r !== "aria-") {
							e.removeAttribute(t);
							return;
						}
				}
				e.setAttribute(t, n);
			}
		}
	}
	function Wt(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, n);
		}
	}
	function Gt(e, t, n, r) {
		if (r === null) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(n);
					return;
			}
			e.setAttributeNS(t, n, r);
		}
	}
	function Kt(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function qt(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function Jt(e, t, n) {
		var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
			var i = r.get, a = r.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					n = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
				getValue: function() {
					return n;
				},
				setValue: function(e) {
					n = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function Yt(e) {
		if (!e._valueTracker) {
			var t = qt(e) ? "checked" : "value";
			e._valueTracker = Jt(e, t, "" + e[t]);
		}
	}
	function Xt(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = qt(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0);
	}
	var Zt = /[\n"\\]/g;
	function Qt(e) {
		return e.replace(Zt, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function $t(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Kt(t)) : e.value !== "" + Kt(t) && (e.value = "" + Kt(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : tn(e, Kt(n)) : o === "number" && e.value == t ? tn(e, Kt(e.value)) : tn(e, Kt(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + Kt(s) : e.removeAttribute("name");
	}
	function en(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				Yt(e);
				return;
			}
			n = n == null ? "" : "" + Kt(n), t = t == null ? n : "" + Kt(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), Yt(e);
	}
	function tn(e, t) {
		e.defaultValue !== "" + t && (e.defaultValue = "" + t);
	}
	function nn(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + Kt(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function rn(e, t, n) {
		t != null && (t = "" + Kt(t), t !== e.value && (e.value = t), n == null) ? e.defaultValue !== t && (e.defaultValue = t) : e.defaultValue = n == null ? "" : "" + Kt(n);
	}
	function an(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(i(92));
				if (I(r)) {
					if (1 < r.length) throw Error(i(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = Kt(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), Yt(e);
	}
	function on(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var sn = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function cn(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || sn.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function ln(e, t, n) {
		if (t != null && typeof t != "object") throw Error(i(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "", Vt = !0);
			for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && (cn(e, a, r), Vt = !0);
		} else for (var o in t) t.hasOwnProperty(o) && cn(e, o, t[o]);
	}
	function un(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var dn = /* @__PURE__ */ new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["maskType", "mask-type"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), fn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function pn(e) {
		return fn.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function mn() {}
	var hn = null;
	function gn(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var _n = null, vn = null;
	function yn(e) {
		var t = Ot(e);
		if (t && (e = t.stateNode)) {
			var n = e[vt] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if ($t(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + Qt("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var a = r[vt] || null;
								if (!a) throw Error(i(90));
								$t(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && Xt(r);
					}
					break a;
				case "textarea":
					rn(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && nn(e, !!n.multiple, t, !1);
			}
		}
	}
	var bn = !1;
	function xn(e, t, n) {
		if (bn) return e(t, n);
		bn = !0;
		try {
			return e(t);
		} finally {
			if (bn = !1, (_n !== null || vn !== null) && (Ld(), _n && (t = _n, e = vn, vn = _n = null, yn(t), e))) for (t = 0; t < e.length; t++) yn(e[t]);
		}
	}
	function Sn(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[vt] || null;
		if (r === null) return null;
		n = r[t];
		a: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(r = !r.disabled) || (e = e.type, r = e !== "button" && e !== "input" && e !== "select" && e !== "textarea"), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(i(231, t, typeof n));
		return n;
	}
	var Cn = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, wn = !1;
	if (Cn) try {
		var Tn = {};
		Object.defineProperty(Tn, "passive", { get: function() {
			wn = !0;
		} }), window.addEventListener("test", Tn, Tn), window.removeEventListener("test", Tn, Tn);
	} catch {
		wn = !1;
	}
	var En = null, Dn = null, On = null;
	function kn() {
		if (On) return On;
		var e, t = Dn, n = t.length, r, i = "value" in En ? En.value : En.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return On = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function An(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function jn() {
		return !0;
	}
	function Mn() {
		return !1;
	}
	function Nn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? jn : Mn, this.isPropagationStopped = Mn, this;
		}
		return D(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = jn);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = jn);
			},
			persist: function() {},
			isPersistent: jn
		}), t;
	}
	var Pn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, Fn = Nn(Pn), In = D({}, Pn, {
		view: 0,
		detail: 0
	}), Ln = Nn(In), Rn, W, zn, Bn = D({}, In, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Zn,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== zn && (zn && e.type === "mousemove" ? (Rn = e.screenX - zn.screenX, W = e.screenY - zn.screenY) : W = Rn = 0, zn = e), Rn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : W;
		}
	}), Vn = Nn(Bn), Hn = Nn(D({}, Bn, { dataTransfer: 0 })), Un = Nn(D({}, In, { relatedTarget: 0 })), Wn = Nn(D({}, Pn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Gn = Nn(D({}, Pn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), Kn = Nn(D({}, Pn, { data: 0 })), qn = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, Jn = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, Yn = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Xn(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = Yn[e]) ? !!t[e] : !1;
	}
	function Zn() {
		return Xn;
	}
	var Qn = Nn(D({}, In, {
		key: function(e) {
			if (e.key) {
				var t = qn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = An(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Jn[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Zn,
		charCode: function(e) {
			return e.type === "keypress" ? An(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? An(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), $n = Nn(D({}, Bn, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), er = Nn(D({}, Pn, { submitter: 0 })), tr = Nn(D({}, In, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Zn
	})), nr = Nn(D({}, Pn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), rr = Nn(D({}, Bn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), ir = Nn(D({}, Pn, {
		newState: 0,
		oldState: 0,
		source: 0
	})), ar = [
		9,
		13,
		27,
		32
	], or = Cn && "CompositionEvent" in window, sr = null;
	Cn && "documentMode" in document && (sr = document.documentMode);
	var cr = Cn && "TextEvent" in window && !sr, lr = Cn && (!or || sr && 8 < sr && 11 >= sr), ur = " ", dr = !1;
	function fr(e, t) {
		switch (e) {
			case "keyup": return ar.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function pr(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var mr = !1;
	function hr(e, t) {
		switch (e) {
			case "compositionend": return pr(t);
			case "keypress": return t.which === 32 ? (dr = !0, ur) : null;
			case "textInput": return e = t.data, e === ur && dr ? null : e;
			default: return null;
		}
	}
	function gr(e, t) {
		if (mr) return e === "compositionend" || !or && fr(e, t) ? (e = kn(), On = Dn = En = null, mr = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return lr && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var _r = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function vr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!_r[e.type] : t === "textarea";
	}
	function yr(e, t, n, r) {
		_n ? vn ? vn.push(r) : vn = [r] : _n = r, t = qf(t, "onChange"), 0 < t.length && (n = new Fn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var br = null, xr = null;
	function Sr(e) {
		Bf(e, 0);
	}
	function Cr(e) {
		if (Xt(kt(e))) return e;
	}
	function wr(e, t) {
		if (e === "change") return t;
	}
	var Tr = !1;
	if (Cn) {
		var Er;
		if (Cn) {
			var Dr = "oninput" in document;
			if (!Dr) {
				var Or = document.createElement("div");
				Or.setAttribute("oninput", "return;"), Dr = typeof Or.oninput == "function";
			}
			Er = Dr;
		} else Er = !1;
		Tr = Er && (!document.documentMode || 9 < document.documentMode);
	}
	function kr() {
		br && (br.detachEvent("onpropertychange", Ar), xr = br = null);
	}
	function Ar(e) {
		if (e.propertyName === "value" && Cr(xr)) {
			var t = [];
			yr(t, xr, e, gn(e)), xn(Sr, t);
		}
	}
	function jr(e, t, n) {
		e === "focusin" ? (kr(), br = t, xr = n, br.attachEvent("onpropertychange", Ar)) : e === "focusout" && kr();
	}
	function Mr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return Cr(xr);
	}
	function Nr(e, t) {
		if (e === "click") return Cr(t);
	}
	function Pr(e, t) {
		if (e === "input" || e === "change") return Cr(t);
	}
	function Fr(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Ir = typeof Object.is == "function" ? Object.is : Fr;
	function Lr(e, t) {
		if (Ir(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!Ae.call(t, i) || !Ir(e[i], t[i])) return !1;
		}
		return !0;
	}
	function Rr(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function zr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Br(e, t) {
		var n = zr(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = zr(n);
		}
	}
	function Vr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Vr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Hr(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = Rr(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = Rr(e.document);
		}
		return t;
	}
	function Ur(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var Wr = Cn && "documentMode" in document && 11 >= document.documentMode, Gr = null, Kr = null, qr = null, Jr = !1;
	function Yr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Jr || Gr == null || Gr !== Rr(r) || (r = Gr, "selectionStart" in r && Ur(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), qr && Lr(qr, r) || (qr = r, r = qf(Kr, "onSelect"), 0 < r.length && (t = new Fn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Gr)));
	}
	function Xr(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var Zr = {
		animationend: Xr("Animation", "AnimationEnd"),
		animationiteration: Xr("Animation", "AnimationIteration"),
		animationstart: Xr("Animation", "AnimationStart"),
		transitionrun: Xr("Transition", "TransitionRun"),
		transitionstart: Xr("Transition", "TransitionStart"),
		transitioncancel: Xr("Transition", "TransitionCancel"),
		transitionend: Xr("Transition", "TransitionEnd")
	}, Qr = {}, $r = {};
	Cn && ($r = document.createElement("div").style, "AnimationEvent" in window || (delete Zr.animationend.animation, delete Zr.animationiteration.animation, delete Zr.animationstart.animation), "TransitionEvent" in window || delete Zr.transitionend.transition);
	function ei(e) {
		if (Qr[e]) return Qr[e];
		if (!Zr[e]) return e;
		var t = Zr[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in $r) return Qr[e] = t[n];
		return e;
	}
	var ti = ei("animationend"), ni = ei("animationiteration"), ri = ei("animationstart"), ii = ei("transitionrun"), ai = ei("transitionstart"), oi = ei("transitioncancel"), si = ei("transitionend"), ci = /* @__PURE__ */ new Map(), li = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	li.push("scrollEnd");
	function ui(e, t) {
		ci.set(e, t), Ft(t, [e]);
	}
	var di = 0;
	function fi(e, t) {
		if (e.name != null && e.name !== "auto") return e.name;
		if (t.autoName !== null) return t.autoName;
		e = vd.identifierPrefix;
		var n = di++;
		return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
	}
	function pi(e) {
		if (e == null || typeof e == "string") return e;
		var t = null, n = Ed;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = e[n[r]];
			if (i != null) {
				if (i === "none") return "none";
				t = t == null ? i : t + (" " + i);
			}
		}
		return t ?? e.default;
	}
	function mi(e, t) {
		return e = pi(e), t = pi(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
	}
	var hi = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, gi = [], _i = 0, vi = 0;
	function yi() {
		for (var e = _i, t = vi = _i = 0; t < e;) {
			var n = gi[t];
			gi[t++] = null;
			var r = gi[t];
			gi[t++] = null;
			var i = gi[t];
			gi[t++] = null;
			var a = gi[t];
			if (gi[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && Ci(n, i, a);
		}
	}
	function bi(e, t, n, r) {
		gi[_i++] = e, gi[_i++] = t, gi[_i++] = n, gi[_i++] = r, vi |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function xi(e, t, n, r) {
		return bi(e, t, n, r), wi(e);
	}
	function Si(e, t) {
		return bi(e, null, null, t), wi(e);
	}
	function Ci(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - qe(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function wi(e) {
		if (50 < Dd) throw Dd = 0, Od = null, Error(i(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var Ti = {};
	function Ei(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function Di(e, t, n, r) {
		return new Ei(e, t, n, r);
	}
	function Oi(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function ki(e, t) {
		var n = e.alternate;
		return n === null ? (n = Di(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function Ai(e, t) {
		e.flags &= 1206910978;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function ji(e, t, n, r, a, o) {
		var s = 0;
		if (r = e, typeof r == "function") Oi(r) && (s = 1);
		else if (typeof r == "string") s = qm(e, n, ve.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (r) {
			case oe: return e = Di(31, n, t, a), e.elementType = oe, e.lanes = o, e;
			case j: return Mi(n.children, a, o, t);
			case M:
				s = 8, a |= 24;
				break;
			case ee: return e = Di(12, n, t, a | 2), e.elementType = ee, e.lanes = o, e;
			case ne: return e = Di(13, n, t, a), e.elementType = ne, e.lanes = o, e;
			case re: return e = Di(19, n, t, a), e.elementType = re, e.lanes = o, e;
			case se:
			case le: return e = a | 32, e = Di(30, n, t, e), e.elementType = le, e.lanes = o, e.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}, e;
			default:
				if (typeof r == "object" && r) switch (r.$$typeof) {
					case P:
						s = 10;
						break a;
					case N:
						s = 9;
						break a;
					case te:
						s = 11;
						break a;
					case ie:
						s = 14;
						break a;
					case ae:
						s = 16, r = null;
						break a;
				}
				s = 29, n = Error(i(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = Di(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
	}
	function Mi(e, t, n, r) {
		return e = Di(7, e, r, t), e.lanes = n, e;
	}
	function Ni(e, t, n) {
		return e = Di(6, e, null, t), e.lanes = n, e;
	}
	function Pi(e) {
		var t = Di(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function Fi(e, t, n) {
		return t = Di(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var Ii = /* @__PURE__ */ new WeakMap();
	function Li(e, t) {
		if (typeof e == "object" && e) {
			var n = Ii.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: U(t)
			}, Ii.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: U(t)
		};
	}
	var Ri = [], zi = 0, Bi = null, Vi = 0, Hi = [], Ui = 0, Wi = null, Gi = 1, Ki = "";
	function qi(e, t) {
		Ri[zi++] = Vi, Ri[zi++] = Bi, Bi = e, Vi = t;
	}
	function Ji(e, t, n) {
		Hi[Ui++] = Gi, Hi[Ui++] = Ki, Hi[Ui++] = Wi, Wi = e;
		var r = Gi;
		e = Ki;
		var i = 32 - qe(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - qe(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Gi = 1 << 32 - qe(t) + i | n << i | r, Ki = a + e;
		} else Gi = 1 << a | n << i | r, Ki = e;
	}
	function Yi(e) {
		e.return !== null && (qi(e, 1), Ji(e, 1, 0));
	}
	function Xi(e) {
		for (; e === Bi;) Bi = Ri[--zi], Ri[zi] = null, Vi = Ri[--zi], Ri[zi] = null;
		for (; e === Wi;) Wi = Hi[--Ui], Hi[Ui] = null, Ki = Hi[--Ui], Hi[Ui] = null, Gi = Hi[--Ui], Hi[Ui] = null;
	}
	function Zi(e, t) {
		Hi[Ui++] = Gi, Hi[Ui++] = Ki, Hi[Ui++] = Wi, Gi = t.id, Ki = t.overflow, Wi = e;
	}
	var Qi = null, $i = null, G = !1, ea = null, ta = !1, na = Error(i(519));
	function ra(e) {
		throw la(Li(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), na;
	}
	function ia(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[_t] = e, t[vt] = r, n) {
			case "dialog":
				$("cancel", t), $("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				$("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < Rf.length; n++) $(Rf[n], t);
				break;
			case "source":
				$("error", t);
				break;
			case "img":
			case "image":
			case "link":
				$("error", t), $("load", t);
				break;
			case "details":
				$("toggle", t);
				break;
			case "input":
				$("invalid", t), en(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				$("invalid", t);
				break;
			case "textarea": $("invalid", t), an(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || $f(t.textContent, n) ? (r.popover != null && ($("beforetoggle", t), $("toggle", t)), r.onScroll != null && $("scroll", t), r.onScrollEnd != null && $("scrollend", t), r.onClick != null && (t.onclick = mn), t = !0) : t = !1, t || ra(e, !0);
	}
	function aa(e) {
		for (Qi = e.return; Qi;) switch (Qi.tag) {
			case 5:
			case 31:
			case 13:
				ta = !1;
				return;
			case 27:
			case 3:
				ta = !0;
				return;
			default: Qi = Qi.return;
		}
	}
	function oa(e) {
		if (e !== Qi) return !1;
		if (!G) return aa(e), G = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = n === "form" || n === "button" || pp(e.type, e.memoizedProps)), n = !n), n && $i && ra(e), aa(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			$i = dm(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			$i = dm(e);
		} else t === 27 ? (t = $i, Sp(e.type) ? (e = um, um = null, $i = e) : $i = t) : $i = Qi ? lm(e.stateNode.nextSibling) : null;
		return !0;
	}
	function sa() {
		$i = Qi = null, G = !1;
	}
	function ca() {
		var e = ea;
		return e !== null && (ud === null ? ud = e : ud.push.apply(ud, e), ea = null), e;
	}
	function la(e) {
		ea === null ? ea = [e] : ea.push(e);
	}
	var ua = he(null), da = null, fa = null;
	function pa(e, t, n) {
		_e(ua, t._currentValue), t._currentValue = n;
	}
	function ma(e) {
		e._currentValue = ua.current, ge(ua);
	}
	function ha(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function ga(e, t, n, r) {
		var a = e.child;
		for (a !== null && (a.return = e); a !== null;) {
			var o = a.dependencies;
			if (o !== null) {
				var s = a.child;
				o = o.firstContext;
				a: for (; o !== null;) {
					var c = o;
					o = a;
					for (var l = 0; l < t.length; l++) if (c.context === t[l]) {
						o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), ha(o.return, n, e), r || (s = null);
						break a;
					}
					o = c.next;
				}
			} else if (a.tag === 18) {
				if (s = a.return, s === null) throw Error(i(341));
				s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), ha(s, n, e), s = null;
			} else a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), ha(a.return, n, e), s = a.child, s = s === null ? null : s.sibling) : s = a.child;
			if (s !== null) s.return = a;
			else for (s = a; s !== null;) {
				if (s === e) {
					s = null;
					break;
				}
				if (a = s.sibling, a !== null) {
					a.return = s.return, s = a;
					break;
				}
				s = s.return;
			}
			a = s;
		}
	}
	function _a(e, t, n, r) {
		e = null;
		for (var a = t, o = !1; a !== null;) {
			if (!o) {
				if (a.flags & 524288) o = !0;
				else if (a.flags & 262144) break;
			}
			if (a.tag === 10) {
				var s = a.alternate;
				if (s === null) throw Error(i(387));
				if (s = s.memoizedProps, s !== null) {
					var c = a.type;
					Ir(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
				}
			} else if (a === H.current) {
				if (s = a.alternate, s === null) throw Error(i(387));
				s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [sh] : e.push(sh));
			}
			a = a.return;
		}
		return e !== null && ga(t, e, n, r), t.flags |= 262144, e !== null;
	}
	function va(e) {
		for (e = e.firstContext; e !== null;) {
			if (!Ir(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function ya(e) {
		da = e, fa = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function ba(e) {
		return Sa(da, e);
	}
	function xa(e, t) {
		return da === null && ya(e), Sa(e, t);
	}
	function Sa(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, fa === null) {
			if (e === null) throw Error(i(308));
			fa = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else fa = fa.next = t;
		return n;
	}
	var Ca = typeof AbortController < "u" ? AbortController : function() {
		var e = [], t = this.signal = {
			aborted: !1,
			addEventListener: function(t, n) {
				e.push(n);
			}
		};
		this.abort = function() {
			t.aborted = !0, e.forEach(function(e) {
				return e();
			});
		};
	}, wa = t.unstable_scheduleCallback, Ta = t.unstable_NormalPriority, Ea = {
		$$typeof: P,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function Da() {
		return {
			controller: new Ca(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function K(e) {
		e.refCount--, e.refCount === 0 && wa(Ta, function() {
			e.controller.abort();
		});
	}
	function Oa(e, t) {
		if (e.pendingLanes & 4194048) {
			var n = e.transitionTypes;
			for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
				var r = t[e];
				n.indexOf(r) === -1 && n.push(r);
			}
		}
	}
	var ka = null;
	function Aa(e) {
		var t = e.transitionTypes;
		return e.transitionTypes = null, t;
	}
	var ja = null, Ma = 0, Na = 0, Pa = null;
	function Fa(e, t) {
		if (ja === null) {
			var n = ja = [];
			Ma = 0, Na = Nf(), Pa = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return Ma++, t.then(Ia, Ia), t;
	}
	function Ia() {
		if (--Ma === 0 && (ka = null, ja !== null)) {
			Pa !== null && (Pa.status = "fulfilled");
			var e = ja;
			ja = null, Na = 0, Pa = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function La(e, t) {
		var n = [], r = {
			status: "pending",
			value: null,
			reason: null,
			then: function(e) {
				n.push(e);
			}
		};
		return e.then(function() {
			r.status = "fulfilled", r.value = t;
			for (var e = 0; e < n.length; e++) (0, n[e])(t);
		}, function(e) {
			for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
		}), r;
	}
	var Ra = L.S;
	L.S = function(e, t) {
		if (pd = Fe(), typeof t == "object" && t && typeof t.then == "function" && Fa(e, t), ka !== null) for (var n = yf; n !== null;) Oa(n, ka), n = n.next;
		if (n = e.types, n !== null) {
			for (var r = yf; r !== null;) Oa(r, n), r = r.next;
			if (Na !== 0) {
				r = ka, r === null && (r = ka = []);
				for (var i = 0; i < n.length; i++) {
					var a = n[i];
					r.indexOf(a) === -1 && r.push(a);
				}
			}
		}
		Ra !== null && Ra(e, t);
	};
	var za = he(null);
	function Ba() {
		var e = za.current;
		return e === null ? Ju.pooledCache : e;
	}
	function Va(e, t) {
		t === null ? _e(za, za.current) : _e(za, t.pool);
	}
	function Ha() {
		var e = Ba();
		return e === null ? null : {
			parent: Ea._currentValue,
			pool: e
		};
	}
	var Ua = Error(i(460)), Wa = Error(i(474)), Ga = Error(i(542)), Ka = { then: function() {} };
	function qa(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function Ja(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(mn, mn), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, Za(e), e === void 0 && !("reason" in t) ? Error(i(600)) : e;
			default:
				if (typeof t.status == "string") t.then(mn, mn);
				else {
					if (e = Ju, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
					e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					});
				}
				switch (t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw e = t.reason, Za(e), e;
				}
				throw Xa = t, Ua;
		}
	}
	function Ya(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == "object" && e && typeof e.then == "function" ? (Xa = e, Ua) : e;
		}
	}
	var Xa = null;
	function q() {
		if (Xa === null) throw Error(i(459));
		var e = Xa;
		return Xa = null, e;
	}
	function Za(e) {
		if (e === Ua || e === Ga) throw Error(i(483));
	}
	var J = null, Qa = 0;
	function $a(e) {
		var t = Qa;
		return Qa += 1, J === null && (J = []), Ja(J, e, t);
	}
	function Y(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function eo(e, t) {
		throw t.$$typeof === O ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
	}
	function to(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e) {
			for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
			return t;
		}
		function a(e, t) {
			return e = ki(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 134217730, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 134217730), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = Ni(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var i = n.type;
			return i === j ? (e = d(e, t, n.props.children, r, n.key), Y(e, n), e) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === ae && Ya(i) === t.type) ? (t = a(t, n.props), Y(t, n), t.return = e, t) : (t = ji(n.type, n.key, n.props, null, e.mode, r), Y(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Fi(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = Mi(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = Ni("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case k: return n = ji(t.type, t.key, t.props, null, e.mode, n), Y(n, t), n.return = e, n;
					case A: return t = Fi(t, e.mode, n), t.return = e, t;
					case ae: return t = Ya(t), f(e, t, n);
				}
				if (I(t) || F(t)) return t = Mi(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, $a(t), n);
				if (t.$$typeof === P) return f(e, xa(e, t), n);
				eo(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case k: return n.key === i ? l(e, t, n, r) : null;
					case A: return n.key === i ? u(e, t, n, r) : null;
					case ae: return n = Ya(n), p(e, t, n, r);
				}
				if (I(n) || F(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, $a(n), r);
				if (n.$$typeof === P) return p(e, t, xa(e, n), r);
				eo(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case k: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case A: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case ae: return r = Ya(r), m(e, t, n, r, i);
				}
				if (I(r) || F(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, $a(r), i);
				if (r.$$typeof === P) return m(e, t, n, xa(t, r), i);
				eo(t, r);
			}
			return null;
		}
		function h(i, a, s, c) {
			for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), G && qi(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return G && qi(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && (_ = g.alternate, _ !== null && d.delete(_.key === null ? h : _.key)), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), G && qi(i, h), l;
		}
		function g(a, s, c, l) {
			if (c == null) throw Error(i(151));
			for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(a, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(a, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(a, h), G && qi(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return G && qi(a, g), u;
			}
			for (h = r(h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && (_ = v.alternate, _ !== null && h.delete(_.key === null ? g : _.key)), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), G && qi(a, g), u;
		}
		function _(e, r, o, c) {
			if (typeof o == "object" && o && o.type === j && o.key === null && o.props.ref === void 0 && (o = o.props.children), typeof o == "object" && o) {
				switch (o.$$typeof) {
					case k:
						a: {
							for (var l = o.key; r !== null;) {
								if (r.key === l) {
									if (l = o.type, l === j) {
										if (r.tag === 7) {
											n(e, r.sibling), c = a(r, o.props.children), Y(c, o), c.return = e, e = c;
											break a;
										}
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === ae && Ya(l) === r.type) {
										n(e, r.sibling), c = a(r, o.props), Y(c, o), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							o.type === j ? (c = Mi(o.props.children, e.mode, c, o.key), Y(c, o), c.return = e, e = c) : (c = ji(o.type, o.key, o.props, null, e.mode, c), Y(c, o), c.return = e, e = c);
						}
						return s(e);
					case A:
						a: {
							for (l = o.key; r !== null;) {
								if (r.key === l) {
									if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
										n(e, r.sibling), c = a(r, o.children || []), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							c = Fi(o, e.mode, c), c.return = e, e = c;
						}
						return s(e);
					case ae: return o = Ya(o), _(e, r, o, c);
				}
				if (I(o)) return h(e, r, o, c);
				if (F(o)) {
					if (l = F(o), typeof l != "function") throw Error(i(150));
					return o = l.call(o), g(e, r, o, c);
				}
				if (typeof o.then == "function") return _(e, r, $a(o), c);
				if (o.$$typeof === P) return _(e, r, xa(e, o), c);
				eo(e, o);
			}
			return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = a(r, o), c.return = e, e = c) : (n(e, r), c = Ni(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				Qa = 0;
				var i = _(e, t, n, r);
				return J = null, i;
			} catch (t) {
				if (t === Ua || t === Ga) throw t;
				var a = Di(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var no = to(!0), ro = to(!1), io = !1;
	function ao(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		};
	}
	function oo(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function so(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function co(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, qu & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = wi(e), Ci(e, null, n), t;
		}
		return bi(e, r, t, n), wi(e);
	}
	function lo(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, ut(e, n);
		}
	}
	function uo(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				callbacks: r.callbacks
			}, e.updateQueue = n;
		} else e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	var fo = !1;
	function po() {
		if (fo) {
			var e = Pa;
			if (e !== null) throw e;
		}
	}
	function mo(e, t, n, r) {
		fo = !1;
		var i = e.updateQueue;
		io = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane & -536870913, p = f !== s.lane;
				if (p ? (Xu & f) === f : (r & f) === f) {
					f !== 0 && f === Na && (fo = !0), u !== null && (u = u.next = {
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: null,
						next: null
					});
					a: {
						var m = e, h = s;
						f = t;
						var g = n;
						switch (h.tag) {
							case 1:
								if (m = h.payload, typeof m == "function") {
									d = m.call(g, d, f);
									break a;
								}
								d = m;
								break a;
							case 3: m.flags = m.flags & -65537 | 128;
							case 0:
								if (m = h.payload, f = typeof m == "function" ? m.call(g, d, f) : m, f == null) break a;
								d = D({}, d, f);
								break a;
							case 2: io = !0;
						}
					}
					f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
				} else p = {
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
				}
			} while (1);
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), id |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function ho(e, t) {
		if (typeof e != "function") throw Error(i(191, e));
		e.call(t);
	}
	function go(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) ho(n[e], t);
	}
	var _o = he(null), vo = he(0);
	function yo(e, t) {
		e = nd, _e(vo, e), _e(_o, t), nd = e | t.baseLanes;
	}
	function bo() {
		_e(vo, nd), _e(_o, _o.current);
	}
	function xo() {
		nd = vo.current, ge(_o), ge(vo);
	}
	var So = he(null), Co = null;
	function wo(e) {
		var t = e.alternate;
		_e(ko, ko.current & 1), _e(So, e), Co === null && (t === null || _o.current !== null || t.memoizedState !== null) && (Co = e);
	}
	function To(e) {
		_e(ko, ko.current), _e(So, e), Co === null && (Co = e);
	}
	function Eo(e) {
		e.tag === 22 ? (_e(ko, ko.current), _e(So, e), Co === null && (Co = e)) : Do();
	}
	function Do() {
		_e(ko, ko.current), _e(So, So.current);
	}
	function Oo(e) {
		ge(So), Co === e && (Co = null), ge(ko);
	}
	var ko = he(0);
	function Ao(e, t) {
		_e(So, So.current), _e(ko, t);
	}
	function jo(e) {
		ge(ko), ge(So), Co === e && (Co = null);
	}
	function Mo(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || om(n) || sm(n))) return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var No = 0, X = null, Po = null, Fo = null, Io = !1, Lo = !1, Ro = !1, zo = 0, Bo = 0, Vo = null, Ho = 0;
	function Uo() {
		throw Error(i(321));
	}
	function Wo(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Ir(e[n], t[n])) return !1;
		return !0;
	}
	function Go(e, t, n, r, i, a) {
		return No = a, X = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, L.H = e === null || e.memoizedState === null ? sc : cc, Ro = !1, a = n(r, i), Ro = !1, Lo && (a = qo(t, n, r, i)), Ko(e), a;
	}
	function Ko(e) {
		L.H = oc;
		var t = Po !== null && Po.next !== null;
		if (No = 0, Fo = Po = X = null, Io = !1, Bo = 0, Vo = null, t) throw Error(i(300));
		e === null || wc || (e = e.dependencies, e !== null && va(e) && (wc = !0));
	}
	function qo(e, t, n, r) {
		X = e;
		var a = 0;
		do {
			if (Lo && (Vo = null), Bo = 0, Lo = !1, 25 <= a) throw Error(i(301));
			if (a += 1, Fo = Po = null, e.updateQueue != null) {
				var o = e.updateQueue;
				o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
			}
			L.H = lc, o = t(n, r);
		} while (Lo);
		return o;
	}
	function Jo() {
		var e = L.H, t = e.useState()[0];
		return t = typeof t.then == "function" ? ts(t) : t, e = e.useState()[0], (Po === null ? null : Po.memoizedState) !== e && (X.flags |= 1024), t;
	}
	function Yo() {
		var e = zo !== 0;
		return zo = 0, e;
	}
	function Xo(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function Zo(e) {
		if (Io) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			Io = !1;
		}
		No = 0, Fo = Po = X = null, Lo = !1, Bo = zo = 0, Vo = null;
	}
	function Qo() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return Fo === null ? X.memoizedState = Fo = e : Fo = Fo.next = e, Fo;
	}
	function $o() {
		if (Po === null) {
			var e = X.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = Po.next;
		var t = Fo === null ? X.memoizedState : Fo.next;
		if (t !== null) Fo = t, Po = e;
		else {
			if (e === null) throw X.alternate === null ? Error(i(467)) : Error(i(310));
			Po = e, e = {
				memoizedState: Po.memoizedState,
				baseState: Po.baseState,
				baseQueue: Po.baseQueue,
				queue: Po.queue,
				next: null
			}, Fo === null ? X.memoizedState = Fo = e : Fo = Fo.next = e;
		}
		return Fo;
	}
	function es() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function ts(e) {
		var t = Bo;
		return Bo += 1, Vo === null && (Vo = []), e = Ja(Vo, e, t), t = X, (Fo === null ? t.memoizedState : Fo.next) === null && (t = t.alternate, L.H = t === null || t.memoizedState === null ? sc : cc), e;
	}
	function ns(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return ts(e);
			if (e.$$typeof === ue) return;
			if (e.$$typeof === P) return ba(e);
		}
		throw Error(i(438, String(e)));
	}
	function rs(e) {
		var t = null, n = X.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = X.alternate;
			r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
				data: r.data.map(function(e) {
					return e.slice();
				}),
				index: 0
			})));
		}
		if (t ??= {
			data: [],
			index: 0
		}, n === null && (n = es(), X.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ce;
		return t.index++, n;
	}
	function is(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function as(e) {
		return os($o(), Po, e);
	}
	function os(e, t, n) {
		var r = e.queue;
		if (r === null) throw Error(i(311));
		r.lastRenderedReducer = n;
		var a = e.baseQueue, o = r.pending;
		if (o !== null) {
			if (a !== null) {
				var s = a.next;
				a.next = o.next, o.next = s;
			}
			t.baseQueue = a = o, r.pending = null;
		}
		if (o = e.baseState, a === null) e.memoizedState = o;
		else {
			t = a.next;
			var c = s = null, l = null, u = t, d = !1;
			do {
				var f = u.lane & -536870913;
				if (f === u.lane ? (No & f) === f : (Xu & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === Na && (d = !0);
					else if ((No & p) === p) {
						u = u.next, p === Na && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (c = l = f, s = o) : l = l.next = f, X.lanes |= p, id |= p;
					f = u.action, Ro && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (c = l = p, s = o) : l = l.next = p, X.lanes |= f, id |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? s = o : l.next = c, !Ir(o, e.memoizedState) && (wc = !0, d && (n = Pa, n !== null))) throw n;
			e.memoizedState = o, e.baseState = s, e.baseQueue = l, r.lastRenderedState = o;
		}
		return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function ss(e) {
		var t = $o(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			Ir(o, t.memoizedState) || (wc = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function cs(e, t, n) {
		var r = X, a = $o(), o = G;
		if (o) {
			if (n === void 0) throw Error(i(407));
			n = n();
		} else n = t();
		var s = !Ir((Po || a).memoizedState, n);
		if (s && (a.memoizedState = n, wc = !0), a = a.queue, Ns(ds.bind(null, r, a, e), [e]), e = a.getSnapshot !== t || s || Fo !== null && !!(Fo.memoizedState.tag & 1), Os(e ? 9 : 8, { destroy: void 0 }, us.bind(null, r, a, n, t), null), e) {
			if (r.flags |= 2048, Ju === null) throw Error(i(349));
			o || No & 127 || ls(r, t, n);
		}
		return n;
	}
	function ls(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = X.updateQueue, t === null ? (t = es(), X.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function us(e, t, n, r) {
		t.value = n, t.getSnapshot = r, fs(t) && ps(e);
	}
	function ds(e, t, n) {
		return n(function() {
			fs(t) && ps(e);
		});
	}
	function fs(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Ir(e, n);
		} catch {
			return !0;
		}
	}
	function ps(e) {
		var t = Si(e, 2);
		t !== null && Md(t, e, 2);
	}
	function ms(e) {
		var t = Qo();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), Ro) {
				Ke(!0);
				try {
					n();
				} finally {
					Ke(!1);
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: is,
			lastRenderedState: e
		}, t;
	}
	function hs(e, t, n, r) {
		return e.baseState = n, os(e, Po, typeof r == "function" ? r : is);
	}
	function gs(e, t, n, r, a) {
		if (rc(e)) throw Error(i(485));
		if (e = t.action, e !== null) {
			var o = {
				payload: a,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(e) {
					o.listeners.push(e);
				}
			};
			L.T === null ? o.isTransition = !1 : n(!0), r(o), n = t.pending, n === null ? (o.next = t.pending = o, _s(t, o)) : (o.next = n.next, t.pending = n.next = o);
		}
	}
	function _s(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = L.T, o = {};
			o.types = a === null ? null : a.types, L.T = o;
			try {
				var s = n(i, r), c = L.S;
				c !== null && c(o, s), vs(e, t, s);
			} catch (n) {
				bs(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), L.T = a;
			}
		} else try {
			a = n(i, r), vs(e, t, a);
		} catch (n) {
			bs(e, t, n);
		}
	}
	function vs(e, t, n) {
		typeof n == "object" && n && typeof n.then == "function" ? n.then(function(n) {
			ys(e, t, n);
		}, function(n) {
			return bs(e, t, n);
		}) : ys(e, t, n);
	}
	function ys(e, t, n) {
		t.status = "fulfilled", t.value = n, xs(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, _s(e, n)));
	}
	function bs(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do
				t.status = "rejected", t.reason = n, xs(t), t = t.next;
			while (t !== r);
		}
		e.action = null;
	}
	function xs(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function Ss(e, t) {
		return t;
	}
	function Cs(e, t) {
		if (G) {
			var n = Ju.formState;
			if (n !== null) {
				a: {
					var r = X;
					if (G) {
						if ($i) {
							b: {
								for (var i = $i, a = ta; i.nodeType !== 8;) if (!a || (i = lm(i.nextSibling), i === null)) {
									i = null;
									break b;
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								$i = lm(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						ra(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return n = Qo(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Ss,
			lastRenderedState: t
		}, n.queue = r, n = ec.bind(null, X, r), r.dispatch = n, r = ms(!1), a = nc.bind(null, X, !1, r.queue), r = Qo(), i = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = i, n = gs.bind(null, X, i, a, n), i.dispatch = n, r.memoizedState = e, [
			t,
			n,
			!1
		];
	}
	function ws(e) {
		return Ts($o(), Po, e);
	}
	function Ts(e, t, n) {
		if (t = os(e, t, Ss)[0], e = as(is)[0], typeof t == "object" && t && typeof t.then == "function") try {
			var r = ts(t);
		} catch (e) {
			throw e === Ua ? Ga : e;
		}
		else r = t;
		t = $o();
		var i = t.queue, a = i.dispatch;
		return n !== t.memoizedState && (X.flags |= 2048, Os(9, { destroy: void 0 }, Es.bind(null, i, n), null)), [
			r,
			a,
			e
		];
	}
	function Es(e, t) {
		e.action = t;
	}
	function Ds(e) {
		var t = $o(), n = Po;
		if (n !== null) return Ts(t, n, e);
		$o(), t = t.memoizedState, n = $o();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [
			t,
			r,
			!1
		];
	}
	function Os(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = X.updateQueue, t === null && (t = es(), X.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
	}
	function ks() {
		return $o().memoizedState;
	}
	function As(e, t, n, r) {
		var i = Qo();
		X.flags |= e, i.memoizedState = Os(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
	}
	function js(e, t, n, r) {
		var i = $o();
		r = r === void 0 ? null : r;
		var a = i.memoizedState.inst;
		Po !== null && r !== null && Wo(r, Po.memoizedState.deps) ? i.memoizedState = Os(t, a, n, r) : (X.flags |= e, i.memoizedState = Os(1 | t, a, n, r));
	}
	function Ms(e, t) {
		As(8390656, 8, e, t);
	}
	function Ns(e, t) {
		js(2048, 8, e, t);
	}
	function Ps(e) {
		X.flags |= 4;
		var t = X.updateQueue;
		if (t === null) t = es(), X.updateQueue = t, t.events = [e];
		else {
			var n = t.events;
			n === null ? t.events = [e] : n.push(e);
		}
	}
	function Fs(e) {
		var t = $o().memoizedState;
		return Ps({
			ref: t,
			nextImpl: e
		}), function() {
			if (qu & 2) throw Error(i(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function Z(e, t) {
		return js(4, 2, e, t);
	}
	function Is(e, t) {
		return js(4, 4, e, t);
	}
	function Ls(e, t) {
		if (typeof t == "function") {
			e = e();
			var n = t(e);
			return function() {
				typeof n == "function" ? n() : t(null);
			};
		}
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function Rs(e, t, n) {
		n = n == null ? null : n.concat([e]), js(4, 4, Ls.bind(null, t, e), n);
	}
	function zs() {}
	function Bs(e, t) {
		var n = $o();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && Wo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function Vs(e, t) {
		var n = $o();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && Wo(t, r[1])) return r[0];
		if (r = e(), Ro) {
			Ke(!0);
			try {
				e();
			} finally {
				Ke(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function Hs(e, t, n) {
		return n === void 0 || No & 1073741824 && !(Xu & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = Ad(), X.lanes |= e, id |= e, n);
	}
	function Us(e, t, n, r) {
		return Ir(n, t) ? n : _o.current === null ? !(No & 106) || No & 1073741824 && !(Xu & 261930) ? (wc = !0, e.memoizedState = n) : (e = Ad(), X.lanes |= e, id |= e, t) : (e = Hs(e, n, r), Ir(e, t) || (wc = !0), e);
	}
	function Ws(e, t, n, r, i) {
		var a = R.p;
		R.p = a !== 0 && 8 > a ? a : 8;
		var o = L.T, s = {};
		s.types = o === null ? null : o.types, L.T = s, nc(e, !1, t, n);
		try {
			var c = i(), l = L.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? tc(e, t, La(c, r), kd(e)) : tc(e, t, r, kd(e));
		} catch (n) {
			tc(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, kd());
		} finally {
			R.p = a, o !== null && s.types !== null && (o.types = s.types), L.T = o;
		}
	}
	function Gs() {}
	function Ks(e, t, n, r) {
		if (e.tag !== 5) throw Error(i(476));
		var a = qs(e).queue;
		Ws(e, a, t, z, n === null ? Gs : function() {
			return Js(e), n(r);
		});
	}
	function qs(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: z,
			baseState: z,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: is,
				lastRenderedState: z
			},
			next: null
		};
		var n = {};
		return t.next = {
			memoizedState: n,
			baseState: n,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: is,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
	}
	function Js(e) {
		var t = qs(e);
		t.next === null && (t = e.alternate.memoizedState), tc(e, t.next.queue, {}, kd());
	}
	function Ys() {
		return ba(sh);
	}
	function Xs() {
		return $o().memoizedState;
	}
	function Zs() {
		return $o().memoizedState;
	}
	function Qs(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = kd();
					e = so(n);
					var r = co(t, e, n);
					r !== null && (Md(r, t, n), lo(r, t, n)), t = { cache: Da() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function $s(e, t, n) {
		var r = kd();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, rc(e) ? ic(t, n) : (n = xi(e, t, n, r), n !== null && (Md(n, e, r), ac(n, t, r)));
	}
	function ec(e, t, n) {
		tc(e, t, n, kd());
	}
	function tc(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (rc(e)) ic(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, Ir(s, o)) return bi(e, t, i, 0), Ju === null && yi(), !1;
			} catch {}
			if (n = xi(e, t, i, r), n !== null) return Md(n, e, r), ac(n, t, r), !0;
		}
		return !1;
	}
	function nc(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: Nf(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, rc(e)) {
			if (t) throw Error(i(479));
		} else t = xi(e, n, r, 2), t !== null && Md(t, e, 2);
	}
	function rc(e) {
		var t = e.alternate;
		return e === X || t !== null && t === X;
	}
	function ic(e, t) {
		Lo = Io = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function ac(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, ut(e, n);
		}
	}
	var oc = {
		readContext: ba,
		use: ns,
		useCallback: Uo,
		useContext: Uo,
		useEffect: Uo,
		useImperativeHandle: Uo,
		useLayoutEffect: Uo,
		useInsertionEffect: Uo,
		useMemo: Uo,
		useReducer: Uo,
		useRef: Uo,
		useState: Uo,
		useDebugValue: Uo,
		useDeferredValue: Uo,
		useTransition: Uo,
		useSyncExternalStore: Uo,
		useId: Uo,
		useHostTransitionStatus: Uo,
		useFormState: Uo,
		useActionState: Uo,
		useOptimistic: Uo,
		useMemoCache: Uo,
		useCacheRefresh: Uo,
		useEffectEvent: Uo
	}, sc = {
		readContext: ba,
		use: ns,
		useCallback: function(e, t) {
			return Qo().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: ba,
		useEffect: Ms,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), As(4194308, 4, Ls.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return As(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			As(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = Qo();
			t = t === void 0 ? null : t;
			var r = e();
			if (Ro) {
				Ke(!0);
				try {
					e();
				} finally {
					Ke(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = Qo();
			if (n !== void 0) {
				var i = n(t);
				if (Ro) {
					Ke(!0);
					try {
						n(t);
					} finally {
						Ke(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = $s.bind(null, X, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = Qo();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = ms(e);
			var t = e.queue, n = ec.bind(null, X, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: zs,
		useDeferredValue: function(e, t) {
			return Hs(Qo(), e, t);
		},
		useTransition: function() {
			var e = ms(!1);
			return e = Ws.bind(null, X, e.queue, !0, !1), Qo().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = X, a = Qo();
			if (G) {
				if (n === void 0) throw Error(i(407));
				n = n();
			} else {
				if (n = t(), Ju === null) throw Error(i(349));
				Xu & 127 || ls(r, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, Ms(ds.bind(null, r, o, e), [e]), r.flags |= 2048, Os(9, { destroy: void 0 }, us.bind(null, r, o, n, t), null), n;
		},
		useId: function() {
			var e = Qo(), t = Ju.identifierPrefix;
			if (G) {
				var n = Ki, r = Gi;
				n = (r & ~(1 << 32 - qe(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = zo++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = Ho++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: Ys,
		useFormState: Cs,
		useActionState: Cs,
		useOptimistic: function(e) {
			var t = Qo();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = nc.bind(null, X, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: rs,
		useCacheRefresh: function() {
			return Qo().memoizedState = Qs.bind(null, X);
		},
		useEffectEvent: function(e) {
			var t = Qo(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (qu & 2) throw Error(i(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, cc = {
		readContext: ba,
		use: ns,
		useCallback: Bs,
		useContext: ba,
		useEffect: Ns,
		useImperativeHandle: Rs,
		useInsertionEffect: Z,
		useLayoutEffect: Is,
		useMemo: Vs,
		useReducer: as,
		useRef: ks,
		useState: function() {
			return as(is);
		},
		useDebugValue: zs,
		useDeferredValue: function(e, t) {
			return Us($o(), Po.memoizedState, e, t);
		},
		useTransition: function() {
			var e = as(is)[0], t = $o().memoizedState;
			return [typeof e == "boolean" ? e : ts(e), t];
		},
		useSyncExternalStore: cs,
		useId: Xs,
		useHostTransitionStatus: Ys,
		useFormState: ws,
		useActionState: ws,
		useOptimistic: function(e, t) {
			return hs($o(), Po, e, t);
		},
		useMemoCache: rs,
		useCacheRefresh: Zs,
		useEffectEvent: Fs
	}, lc = {
		readContext: ba,
		use: ns,
		useCallback: Bs,
		useContext: ba,
		useEffect: Ns,
		useImperativeHandle: Rs,
		useInsertionEffect: Z,
		useLayoutEffect: Is,
		useMemo: Vs,
		useReducer: ss,
		useRef: ks,
		useState: function() {
			return ss(is);
		},
		useDebugValue: zs,
		useDeferredValue: function(e, t) {
			var n = $o();
			return Po === null ? Hs(n, e, t) : Us(n, Po.memoizedState, e, t);
		},
		useTransition: function() {
			var e = ss(is)[0], t = $o().memoizedState;
			return [typeof e == "boolean" ? e : ts(e), t];
		},
		useSyncExternalStore: cs,
		useId: Xs,
		useHostTransitionStatus: Ys,
		useFormState: Ds,
		useActionState: Ds,
		useOptimistic: function(e, t) {
			var n = $o();
			return Po === null ? (n.baseState = e, [e, n.queue.dispatch]) : hs(n, Po, e, t);
		},
		useMemoCache: rs,
		useCacheRefresh: Zs,
		useEffectEvent: Fs
	};
	function uc(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : D({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var dc = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = kd(), i = so(r);
			i.payload = t, n != null && (i.callback = n), t = co(e, i, r), t !== null && (Md(t, e, r), lo(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = kd(), i = so(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = co(e, i, r), t !== null && (Md(t, e, r), lo(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = kd(), r = so(n);
			r.tag = 2, t != null && (r.callback = t), t = co(e, r, n), t !== null && (Md(t, e, n), lo(t, e, n));
		}
	};
	function fc(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Lr(n, r) || !Lr(i, a) : !0;
	}
	function pc(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && dc.enqueueReplaceState(t, t.state, null);
	}
	function mc(e, t) {
		var n = t;
		if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = D({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function hc(e) {
		hi(e);
	}
	function gc(e) {
		console.error(e);
	}
	function _c(e) {
		hi(e);
	}
	function vc(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function yc(e, t, n) {
		try {
			var r = e.onCaughtError;
			r(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			});
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function bc(e, t, n) {
		return n = so(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			vc(e, t);
		}, n;
	}
	function xc(e) {
		return e = so(e), e.tag = 3, e;
	}
	function Sc(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				yc(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
			yc(t, n, r), typeof i != "function" && (gd === null ? gd = /* @__PURE__ */ new Set([this]) : gd.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function Q(e, t, n, r, a) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && _a(t, n, a, !0), n = So.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13:
					case 19: return Co === null ? Wd() : n.alternate === null && rd === 0 && (rd = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === Ka ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), pf(e, r, a)), !1;
					case 22: return n.flags |= 65536, r === Ka ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: /* @__PURE__ */ new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), pf(e, r, a)), !1;
				}
				throw Error(i(435, n.tag));
			}
			return pf(e, r, a), Wd(), !1;
		}
		if (G) return t = So.current, t === null ? (r !== na && (t = Error(i(423), { cause: r }), la(Li(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = Li(r, n), a = bc(e.stateNode, r, a), uo(e, a), rd !== 4 && (rd = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== na && (e = Error(i(422), { cause: r }), la(Li(e, n)))), !1;
		var o = Error(i(520), { cause: r });
		if (o = Li(o, n), ld === null ? ld = [o] : ld.push(o), rd !== 4 && (rd = 2), t === null) return !0;
		r = Li(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = a & -a, n.lanes |= e, e = bc(n.stateNode, r, e), uo(n, e), !1;
				case 1:
					if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (gd === null || !gd.has(o)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = xc(a), Sc(a, e, n, r), uo(n, a), !1;
					break;
				case 22: if (n.memoizedState !== null) return n.flags |= 65536, !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var Cc = Error(i(461)), wc = !1;
	function Tc(e, t, n, r) {
		t.child = e === null ? ro(t, null, n, r) : no(t, e.child, n, r);
	}
	function Ec(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return ya(t), r = Go(e, t, n, o, a, i), s = Yo(), e !== null && !wc ? (Xo(e, t, i), el(e, t, i)) : (G && s && Yi(t), t.flags |= 1, Tc(e, t, r, i), t.child);
	}
	function Dc(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !Oi(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, Oc(e, t, a, r, i)) : (e = ji(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !tl(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Lr : n, n(o, r) && e.ref === t.ref) return el(e, t, i);
		}
		return t.flags |= 1, e = ki(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function Oc(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Lr(a, r) && e.ref === t.ref) {
				if (wc = !1, t.pendingProps = r = a, tl(e, i)) e.flags & 131072 && (wc = !0);
				else return t.lanes = e.lanes, el(e, t, i);
			}
		}
		return Ic(e, t, n, r, i);
	}
	function kc(e, t, n, r) {
		var i = r.children, a = e === null ? null : e.memoizedState;
		if (e === null && t.stateNode === null && (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), r.mode === "hidden") {
			if (t.flags & 128) {
				if (a = a === null ? n : a.baseLanes | n, e !== null) {
					for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
					r = i & ~a;
				} else r = 0, t.child = null;
				return jc(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && Va(t, a === null ? null : a.cachePool), a === null ? bo() : yo(t, a), Eo(t);
			else return r = t.lanes = 536870912, jc(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && Va(t, null), bo(), Do()) : (Va(t, a.cachePool), yo(t, a), Do(), t.memoizedState = null);
		return Tc(e, t, i, n), t.child;
	}
	function Ac(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function jc(e, t, n, r, i) {
		var a = Ba();
		return a = a === null ? null : {
			parent: Ea._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && Va(t, null), bo(), Eo(t), e !== null && _a(e, t, r, !0), t.childLanes = i, null;
	}
	function Mc(e, t) {
		return t = Gc({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function Nc(e, t, n) {
		return no(t, e.child, null, n), e = Mc(t, t.pendingProps), e.flags |= 2, Oo(t), t.memoizedState = null, e;
	}
	function Pc(e, t, n) {
		var r = t.pendingProps, a = !!(t.flags & 128);
		if (t.flags &= -129, e === null) {
			if (G) {
				if (r.mode === "hidden") return e = Mc(t, r), t.lanes = 536870912, e.memoizedState = {
					baseLanes: 0,
					cachePool: null
				}, Ac(null, e);
				if (To(t), (e = $i) ? (e = am(e, ta), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Wi === null ? null : {
						id: Gi,
						overflow: Ki
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Pi(e), n.return = t, t.child = n, Qi = t, $i = null)) : e = null, e === null) throw ra(t);
				return t.lanes = 536870912, null;
			}
			return Mc(t, r);
		}
		var o = e.memoizedState;
		if (o !== null) {
			var s = o.dehydrated;
			if (To(t), a) {
				if (t.flags & 256) t.flags &= -257, t = Nc(e, t, n);
				else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
				else throw Error(i(558));
			} else if (wc || _a(e, t, n, !1), a = (n & e.childLanes) !== 0, wc || a) {
				if (_o.current === null) {
					if (r = Ju, r !== null && (s = dt(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, Si(e, s), Md(r, e, s), Cc;
					Wd();
				}
				t = Nc(e, t, n);
			} else e = o.treeContext, $i = lm(s.nextSibling), Qi = t, G = !0, ea = null, ta = !1, e !== null && Zi(t, e), t = Mc(t, r), t.flags |= 134221824;
			return t;
		}
		return e = ki(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function Fc(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(i(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function Ic(e, t, n, r, i) {
		return ya(t), n = Go(e, t, n, r, void 0, i), r = Yo(), e !== null && !wc ? (Xo(e, t, i), el(e, t, i)) : (G && r && Yi(t), t.flags |= 1, Tc(e, t, n, i), t.child);
	}
	function Lc(e, t, n, r, i, a) {
		return ya(t), t.updateQueue = null, n = qo(t, r, n, i), Ko(e), r = Yo(), e !== null && !wc ? (Xo(e, t, a), el(e, t, a)) : (G && r && Yi(t), t.flags |= 1, Tc(e, t, n, a), t.child);
	}
	function Rc(e, t, n, r, i) {
		if (ya(t), t.stateNode === null) {
			var a = Ti, o = n.contextType;
			typeof o == "object" && o && (a = ba(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = dc, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, ao(t), o = n.contextType, a.context = typeof o == "object" && o ? ba(o) : Ti, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (uc(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && dc.enqueueReplaceState(a, a.state, null), mo(t, r, a, i), po(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = mc(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = Ti, typeof u == "object" && u && (o = ba(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && pc(t, a, r, o), io = !1;
			var f = t.memoizedState;
			a.state = f, mo(t, r, a, i), po(), l = t.memoizedState, s || f !== l || io ? (typeof d == "function" && (uc(t, n, d, r), l = t.memoizedState), (c = io || fc(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, oo(e, t), o = t.memoizedProps, u = mc(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = Ti, typeof l == "object" && l && (c = ba(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && pc(t, a, r, c), io = !1, f = t.memoizedState, a.state = f, mo(t, r, a, i), po();
			var p = t.memoizedState;
			o !== d || f !== p || io || e !== null && e.dependencies !== null && va(e.dependencies) ? (typeof s == "function" && (uc(t, n, s, r), p = t.memoizedState), (u = io || fc(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && va(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, Fc(e, t), r = !!(t.flags & 128), a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = no(t, e.child, null, i), t.child = no(t, null, n, i)) : Tc(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = el(e, t, i), e;
	}
	function zc(e, t, n, r) {
		return sa(), t.flags |= 256, Tc(e, t, n, r), t.child;
	}
	var Bc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function Vc(e) {
		return {
			baseLanes: e,
			cachePool: Ha()
		};
	}
	function Hc(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= sd), e;
	}
	function Uc(e, t, n) {
		var r = t.pendingProps, i = !1, a = !!(t.flags & 128), o;
		if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : !!(ko.current & 2)), o && (i = !0, t.flags &= -129), o = !!(t.flags & 32), t.flags &= -33, e === null) {
			if (G) {
				if (i ? wo(t) : Do(), (e = $i) ? (e = am(e, ta), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Wi === null ? null : {
						id: Gi,
						overflow: Ki
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Pi(e), n.return = t, t.child = n, Qi = t, $i = null)) : e = null, e === null) throw ra(t);
				return t.lanes = sm(e) ? 32 : 536870912, null;
			}
			return a = r.children, r = r.fallback, i ? (Do(), i = t.mode, a = Gc({
				mode: "hidden",
				children: a
			}, i), r = Mi(r, i, n, null), a.return = t, r.return = t, a.sibling = r, t.child = a, r = t.child, r.memoizedState = Vc(n), r.childLanes = Hc(e, o, n), t.memoizedState = Bc, Ac(null, r)) : (wo(t), Wc(t, a));
		}
		var s = e.memoizedState;
		if (s !== null) {
			var c = s.dehydrated;
			if (c !== null) return qc(e, t, a, o, r, c, s, n);
		}
		return i ? (Do(), i = r.fallback, a = t.mode, s = e.child, c = s.sibling, r = ki(s, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = s.subtreeFlags & 1206910976, c === null ? (i = Mi(i, a, n, null), i.flags |= 2) : i = ki(c, i), i.return = t, r.return = t, r.sibling = i, t.child = r, Ac(null, r), r = t.child, i = e.child.memoizedState, i === null ? i = Vc(n) : (a = i.cachePool, a === null ? a = Ha() : (s = Ea._currentValue, a = a.parent === s ? a : {
			parent: s,
			pool: s
		}), i = {
			baseLanes: i.baseLanes | n,
			cachePool: a
		}), r.memoizedState = i, r.childLanes = Hc(e, o, n), t.memoizedState = Bc, Ac(e.child, r)) : (wo(t), n = e.child, e = n.sibling, n = ki(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function Wc(e, t) {
		return t = Gc({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function Gc(e, t) {
		return e = Di(22, e, null, t), e.lanes = 0, e;
	}
	function Kc(e, t, n) {
		return no(t, e.child, null, n), e = Wc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function qc(e, t, n, r, a, o, s, c) {
		if (n) return t.flags & 256 ? (wo(t), t.flags &= -257, Kc(e, t, c)) : t.memoizedState === null ? (Do(), o = a.fallback, s = t.mode, a = Gc({
			mode: "visible",
			children: a.children
		}, s), o = Mi(o, s, c, null), o.flags |= 2, a.return = t, o.return = t, a.sibling = o, t.child = a, no(t, e.child, null, c), a = t.child, a.memoizedState = Vc(c), a.childLanes = Hc(e, r, c), t.memoizedState = Bc, Ac(null, a)) : (Do(), t.child = e.child, t.flags |= 128, null);
		if (wo(t), sm(o)) {
			if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
			return r = l, r !== "" && (a = Error(i(419)), a.stack = "", a.digest = r, la({
				value: a,
				source: null,
				stack: null
			})), Kc(e, t, c);
		}
		if (wc || _a(e, t, c, !1), r = (c & e.childLanes) !== 0, wc || r) {
			if (_o.current !== null) return Kc(e, t, c);
			if (r = Ju, r !== null && (a = dt(r, c), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, Si(e, a), Md(r, e, a), Cc;
			return om(o) || Wd(), Kc(e, t, c);
		}
		return om(o) ? (t.flags |= 192, t.child = e.child, null) : (e = s.treeContext, $i = lm(o.nextSibling), Qi = t, G = !0, ea = null, ta = !1, e !== null && Zi(t, e), t = Wc(t, a.children), t.flags |= 134221824, t);
	}
	function Jc(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), ha(e.return, t, n);
	}
	function Yc(e) {
		for (var t = null; e !== null;) {
			var n = e.alternate;
			n !== null && Mo(n) === null && (t = e), e = e.sibling;
		}
		return t;
	}
	function Xc(e, t, n, r, i, a) {
		var o = e.memoizedState;
		o === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i,
			treeForkCount: a
		} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
	}
	function Zc(e) {
		var t = e.child;
		for (e.child = null; t !== null;) {
			var n = t.sibling;
			t.sibling = e.child, e.child = t, t = n;
		}
	}
	function Qc(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = ko.current;
		if (t.flags & 128) return Ao(t, o), null;
		var s = !!(o & 2);
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, Ao(t, o), i === "backwards" && e !== null ? (Zc(e), Tc(e, t, r, n), Zc(e)) : Tc(e, t, r, n), r = G ? Vi : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && Jc(e, n, t);
			else if (e.tag === 19) Jc(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue;
			}
			if (e === t) break a;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break a;
				e = e.return;
			}
			e.sibling.return = e.return, e = e.sibling;
		}
		switch (i) {
			case "backwards":
				n = Yc(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null, Zc(t)), Xc(t, !0, i, null, a, r);
				break;
			case "unstable_legacy-backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && Mo(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				Xc(t, !0, n, null, a, r);
				break;
			case "together":
				Xc(t, !1, null, null, void 0, r);
				break;
			case "independent":
				t.memoizedState = null;
				break;
			default: n = Yc(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Xc(t, !1, i, n, a, r);
		}
		return t.child;
	}
	function $c(e, t, n) {
		var r = t.pendingProps;
		return pa(t, t.type, r.value), Tc(e, t, r.children, n), t.child;
	}
	function el(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), id |= t.lanes, (n & t.childLanes) === 0) {
			if (e !== null) {
				if (_a(e, t, n, !1), (n & t.childLanes) === 0) return null;
			} else return null;
		}
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (e = t.child, n = ki(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = ki(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function tl(e, t) {
		return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && va(e)));
	}
	function nl(e, t, n) {
		switch (t.tag) {
			case 3:
				be(t, t.stateNode.containerInfo), pa(t, Ea, e.memoizedState.cache), sa();
				break;
			case 27:
			case 5:
				Se(t);
				break;
			case 4:
				be(t, t.stateNode.containerInfo);
				break;
			case 10:
				pa(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, To(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) {
					if (r.dehydrated !== null) return wo(t), t.flags |= 128, null;
					r = _a(e, t, n, !1);
					var i = t.child.childLanes;
					return r || (n & i) !== 0 ? Uc(e, t, n) : (wo(t), e = el(e, t, n), e === null ? null : e.sibling);
				}
				wo(t);
				break;
			case 19:
				if (t.flags & 128) return Qc(e, t, n);
				if (i = !!(e.flags & 128), r = (n & t.childLanes) !== 0, r ||= (_a(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return Qc(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Ao(t, ko.current), r) break;
				return null;
			case 22: return t.lanes = 0, kc(e, t, n, t.pendingProps);
			case 24: pa(t, Ea, e.memoizedState.cache);
		}
		return el(e, t, n);
	}
	function rl(e, t, n) {
		if (e !== null) {
			if (e.memoizedProps !== t.pendingProps) wc = !0;
			else {
				if (!tl(e, n) && !(t.flags & 128)) return wc = !1, nl(e, t, n);
				wc = !!(e.flags & 131072);
			}
		} else wc = !1, G && t.flags & 1048576 && Ji(t, Vi, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = Ya(t.elementType), t.type = e, typeof e == "function") Oi(e) ? (r = mc(e, r), t.tag = 1, t = Rc(null, t, e, r, n)) : (t.tag = 0, t = Ic(null, t, e, r, n));
					else {
						if (e != null) {
							var a = e.$$typeof;
							if (a === te) {
								t.tag = 11, t = Ec(null, t, e, r, n);
								break a;
							}
							if (a === ie) {
								t.tag = 14, t = Dc(null, t, e, r, n);
								break a;
							}
							if (a === P) {
								t.tag = 10, t.type = e, t = $c(null, t, n);
								break a;
							}
						}
						throw t = pe(e) || e, Error(i(306, t, ""));
					}
				}
				return t;
			case 0: return Ic(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, a = mc(r, t.pendingProps), Rc(e, t, r, a, n);
			case 3:
				a: {
					if (be(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
					r = t.pendingProps;
					var o = t.memoizedState;
					a = o.element, oo(e, t), mo(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.cache, pa(t, Ea, r), r !== o.cache && ga(t, [Ea], n, !0), po(), r = s.element, o.isDehydrated) {
						if (o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache
						}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
							t = zc(e, t, r, n);
							break a;
						}
						if (r !== a) {
							a = Li(Error(i(424)), t), la(a), t = zc(e, t, r, n);
							break a;
						}
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for ($i = lm(e.firstChild), Qi = t, G = !0, ea = null, ta = !0, n = ro(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 134221824, n = n.sibling;
					} else {
						if (sa(), r === a) {
							t = el(e, t, n);
							break a;
						}
						Tc(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return Fc(e, t), e === null ? (n = Nm(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : G || (t.stateNode = fp(t.type, t.pendingProps, ye.current, t)) : t.memoizedState = Nm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return Se(t), e === null && G && (r = t.stateNode = hm(t.type, t.pendingProps, ye.current), Qi = t, ta = !0, a = $i, Sp(t.type) ? (um = a, $i = lm(r.firstChild)) : $i = a), Tc(e, t, t.pendingProps.children, n), Fc(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && G && ((a = r = $i) && (r = rm(r, t.type, t.pendingProps, ta), r === null ? a = !1 : (t.stateNode = r, Qi = t, $i = lm(r.firstChild), ta = !1, a = !0)), a || ra(t)), Se(t), a = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, pp(a, o) ? r = null : s !== null && pp(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = Go(e, t, Jo, null, null, n), sh._currentValue = a), Fc(e, t), Tc(e, t, r, n), t.child;
			case 6: return e === null && G && ((e = n = $i) && (n = im(n, t.pendingProps, ta), n === null ? e = !1 : (t.stateNode = n, Qi = t, $i = null, e = !0)), e || ra(t)), null;
			case 13: return Uc(e, t, n);
			case 4: return be(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = no(t, null, r, n) : Tc(e, t, r, n), t.child;
			case 11: return Ec(e, t, t.type, t.pendingProps, n);
			case 7: return r = t.pendingProps, Fc(e, t), Tc(e, t, r, n), t.child;
			case 8: return Tc(e, t, t.pendingProps.children, n), t.child;
			case 12: return Tc(e, t, t.pendingProps.children, n), t.child;
			case 10: return $c(e, t, n);
			case 9: return a = t.type._context, r = t.pendingProps.children, ya(t), a = ba(a), r = r(a), t.flags |= 1, Tc(e, t, r, n), t.child;
			case 14: return Dc(e, t, t.type, t.pendingProps, n);
			case 15: return Oc(e, t, t.type, t.pendingProps, n);
			case 19: return Qc(e, t, n);
			case 31: return Pc(e, t, n);
			case 22: return kc(e, t, n, t.pendingProps);
			case 24: return ya(t), r = ba(Ea), e === null ? (a = Ba(), a === null && (a = Ju, o = Da(), a.pooledCache = o, o.refCount++, o !== null && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
				parent: r,
				cache: a
			}, ao(t), pa(t, Ea, a)) : ((e.lanes & n) !== 0 && (oo(e, t), mo(t, null, null, n), po()), a = e.memoizedState, o = t.memoizedState, a.parent === r ? (r = o.cache, pa(t, Ea, r), r !== a.cache && ga(t, [Ea], n, !0)) : (a = {
				parent: r,
				cache: r
			}, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), pa(t, Ea, r))), Tc(e, t, t.pendingProps.children, n), t.child;
			case 30: return t.stateNode === null && (t.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}), r = t.pendingProps, r.name != null && r.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : G && Yi(t), e !== null && e.memoizedProps.name !== r.name ? t.flags |= 4194816 : Fc(e, t), Tc(e, t, r.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(i(156, t.tag));
	}
	function il(e) {
		e.flags |= 4;
	}
	function al(e, t, n, r, i) {
		var a;
		if ((a = !!(e.mode & 32)) && (a = n === null ? Jm(t, r) : Jm(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)), a) {
			if (e.flags |= 16777216, (i & 335544128) === i) {
				if (e.stateNode.complete) e.flags |= 8192;
				else if (Vd()) e.flags |= 8192;
				else throw Xa = Ka, Wa;
			}
		} else e.flags &= -16777217;
	}
	function ol(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !Ym(t)) {
			if (Vd()) e.flags |= 8192;
			else throw Xa = Ka, Wa;
		}
	}
	function sl(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : at(), e.lanes |= t, cd |= t);
	}
	function cl(e, t) {
		if (!G) switch (e.tailMode) {
			case "visible": break;
			case "collapsed":
				for (var n = e.tail, r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
				break;
			default:
				for (t = e.tail, n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
		}
	}
	function ll(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 1206910976, r |= i.flags & 1206910976, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function ul(e, t, n) {
		var r = t.pendingProps;
		switch (Xi(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return ll(t), null;
			case 1: return ll(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), ma(Ea), xe(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (oa(t) ? il(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ca())), ll(t), null;
			case 26:
				var a = t.type, o = t.memoizedState;
				return e === null ? (il(t), o === null ? (ll(t), al(t, a, null, r, n)) : (ll(t), ol(t, o))) : o ? o === e.memoizedState ? (ll(t), t.flags &= -16777217) : (il(t), ll(t), ol(t, o)) : (e = e.memoizedProps, e !== r && il(t), ll(t), al(t, a, e, r, n)), null;
			case 27:
				if (Ce(t), n = ye.current, a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && il(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return ll(t), t.subtreeFlags &= -33554433, null;
					}
					e = ve.current, oa(t) ? ia(t, e) : (e = hm(a, r, n), t.stateNode = e, il(t));
				}
				return ll(t), t.subtreeFlags &= -33554433, null;
			case 5:
				if (Ce(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && il(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return ll(t), t.subtreeFlags &= -33554433, null;
					}
					if (o = ve.current, oa(t)) ia(t, o);
					else {
						var s = lp(ye.current);
						switch (o) {
							case 1:
								o = s.createElementNS("http://www.w3.org/2000/svg", a);
								break;
							case 2:
								o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
								break;
							default: switch (a) {
								case "svg":
									o = s.createElementNS("http://www.w3.org/2000/svg", a);
									break;
								case "math":
									o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
									break;
								case "script":
									o = s.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(o.firstChild);
									break;
								case "select":
									o = typeof r.is == "string" ? s.createElement("select", { is: r.is }) : s.createElement("select"), r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
									break;
								default: o = typeof r.is == "string" ? s.createElement(a, { is: r.is }) : s.createElement(a);
							}
						}
						o[_t] = t, o[vt] = r;
						a: for (s = t.child; s !== null;) {
							if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
							else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
								s.child.return = s, s = s.child;
								continue;
							}
							if (s === t) break a;
							for (; s.sibling === null;) {
								if (s.return === null || s.return === t) break a;
								s = s.return;
							}
							s.sibling.return = s.return, s = s.sibling;
						}
						t.stateNode = o;
						a: switch (np(o, a, r), a) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break a;
							case "img":
								r = !0;
								break a;
							default: r = !1;
						}
						r && il(t);
					}
				}
				return ll(t), t.subtreeFlags &= -33554433, al(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && il(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
					if (e = ye.current, oa(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, a = Qi, a !== null) switch (a.tag) {
							case 27:
							case 5: r = a.memoizedProps;
						}
						e[_t] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || $f(e.nodeValue, n)), e || ra(t, !0);
					} else e = lp(e).createTextNode(r), e[_t] = t, t.stateNode = e;
				}
				return ll(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = oa(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(i(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(557));
							e[_t] = t;
						} else sa(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						ll(t), e = !1;
					} else n = ca(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (Oo(t), t) : (Oo(t), null);
					if (t.flags & 128) throw Error(i(558));
				}
				return ll(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (a = oa(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!a) throw Error(i(318));
							if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error(i(317));
							a[_t] = t;
						} else sa(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						ll(t), a = !1;
					} else a = ca(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
					if (!a) return t.flags & 256 ? (Oo(t), t) : (Oo(t), null);
				}
				return Oo(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, a = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), sl(t, t.updateQueue), ll(t), null);
			case 4: return xe(), e === null && Uf(t.stateNode.containerInfo), t.flags |= 67108864, ll(t), null;
			case 10: return ma(t.type), ll(t), null;
			case 19:
				if (jo(t), r = t.memoizedState, r === null) return ll(t), null;
				if (a = !!(t.flags & 128), o = r.rendering, o === null) {
					if (a) cl(r, !1);
					else {
						if (rd !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (o = Mo(e), o !== null) {
								for (t.flags |= 128, cl(r, !1), e = o.updateQueue, t.updateQueue = e, sl(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) Ai(n, e), n = n.sibling;
								return Ao(t, ko.current & 1 | 2), G && qi(t, r.treeForkCount), t.child;
							}
							e = e.sibling;
						}
						r.tail !== null && Fe() > md && (t.flags |= 128, a = !0, cl(r, !1), t.lanes = 4194304);
					}
				} else {
					if (!a) {
						if (e = Mo(o), e !== null) {
							if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, sl(t, e), cl(r, !0), r.tail === null && r.tailMode !== "collapsed" && r.tailMode !== "visible" && !o.alternate && !G) return ll(t), null;
						} else 2 * Fe() - r.renderingStartTime > md && n !== 536870912 && (t.flags |= 128, a = !0, cl(r, !1), t.lanes = 4194304);
					}
					r.isBackwards ? (o.sibling = t.child, t.child = o) : (e = r.last, e === null ? t.child = o : e.sibling = o, r.last = o);
				}
				if (r.tail !== null) {
					e = r.tail;
					a: {
						for (n = e; n !== null;) {
							if (n.alternate !== null) {
								n = !1;
								break a;
							}
							n = n.sibling;
						}
						n = !0;
					}
					return r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Fe(), e.sibling = null, o = ko.current, o = a ? o & 1 | 2 : o & 1, r.tailMode === "visible" || r.tailMode === "collapsed" || !n || G ? Ao(t, o) : (n = o, _e(So, t), _e(ko, n), Co === null && (Co = t)), G && qi(t, r.treeForkCount), e;
				}
				return ll(t), null;
			case 22:
			case 23: return Oo(t), xo(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (ll(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ll(t), n = t.updateQueue, n !== null && sl(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && ge(za), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ma(Ea), ll(t), null;
			case 25: return null;
			case 30: return t.flags |= 33554432, ll(t), null;
		}
		throw Error(i(156, t.tag));
	}
	function dl(e, t) {
		switch (Xi(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return ma(Ea), xe(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return Ce(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (Oo(t), t.alternate === null) throw Error(i(340));
					sa();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (Oo(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(i(340));
					sa();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return jo(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
			case 4: return xe(), null;
			case 10: return ma(t.type), null;
			case 22:
			case 23: return Oo(t), xo(), e !== null && ge(za), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return ma(Ea), null;
			case 25: return null;
			default: return null;
		}
	}
	function fl(e, t) {
		switch (Xi(t), t.tag) {
			case 3:
				ma(Ea), xe();
				break;
			case 26:
			case 27:
			case 5:
				Ce(t);
				break;
			case 4:
				xe();
				break;
			case 31:
				t.memoizedState !== null && Oo(t);
				break;
			case 13:
				Oo(t);
				break;
			case 19:
				jo(t);
				break;
			case 10:
				ma(t.type);
				break;
			case 22:
			case 23:
				Oo(t), xo(), e !== null && ge(za);
				break;
			case 24: ma(Ea);
		}
	}
	function pl(e, t) {
		try {
			var n = t.updateQueue, r = n === null ? null : n.lastEffect;
			if (r !== null) {
				var i = r.next;
				n = i;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var a = n.create, o = n.inst;
						r = a(), o.destroy = r;
					}
					n = n.next;
				} while (n !== i);
			}
		} catch (e) {
			ff(t, t.return, e);
		}
	}
	function ml(e, t, n) {
		try {
			var r = t.updateQueue, i = r === null ? null : r.lastEffect;
			if (i !== null) {
				var a = i.next;
				r = a;
				do {
					if ((r.tag & e) === e) {
						var o = r.inst, s = o.destroy;
						if (s !== void 0) {
							o.destroy = void 0, i = t;
							var c = n, l = s;
							try {
								l();
							} catch (e) {
								ff(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			ff(t, t.return, e);
		}
	}
	function hl(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				go(t, n);
			} catch (t) {
				ff(e, e.return, t);
			}
		}
	}
	function gl(e, t, n) {
		n.props = mc(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			ff(e, t, n);
		}
	}
	function _l(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						var i = e.stateNode, a = fi(e.memoizedProps, i);
						(i.ref === null || i.ref.name !== a) && (i.ref = Pp(a)), r = i.ref;
						break;
					case 7:
						if (e.stateNode === null) {
							var o = new Fp(e);
							h(e.child, !1, Qp, o, void 0, void 0), e.stateNode = o;
						}
						r = e.stateNode;
						break;
					default: r = e.stateNode;
				}
				typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
			}
		} catch (n) {
			ff(e, t, n);
		}
	}
	function vl(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) {
			if (typeof r == "function") try {
				r();
			} catch (n) {
				ff(e, t, n);
			} finally {
				e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
			}
			else if (typeof n == "function") try {
				n(null);
			} catch (n) {
				ff(e, t, n);
			}
			else n.current = null;
		}
	}
	function yl(e, t) {
		if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null) for (var n = 0; n < t.length; n++) em(e.stateNode, t[n]);
	}
	function bl(e) {
		for (var t = e.return; t !== null && (Cl(t) && em(e.stateNode, t.stateNode), !Sl(t));) t = t.return;
	}
	function xl(e) {
		for (var t = e.return; t !== null && (Cl(t) && tm(e.stateNode, t.stateNode), !Sl(t));) t = t.return;
	}
	function Sl(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 27;
	}
	function Cl(e) {
		return e && e.tag === 7 && e.stateNode !== null;
	}
	function wl(e) {
		var t = e.type, n = e.memoizedProps, r = e.stateNode;
		try {
			a: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && r.focus();
					break a;
				case "img": n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
			}
		} catch (t) {
			ff(e, e.return, t);
		}
	}
	function Tl(e, t, n) {
		try {
			var r = e.stateNode;
			ip(r, e.type, n, t), r[vt] = t;
		} catch (t) {
			ff(e, e.return, t);
		}
	}
	function El(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Sp(e.type) || e.tag === 4;
	}
	function Dl(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || El(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && Sp(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Ol(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(i, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(i), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = mn)), yl(e, r), Vt = !0;
		else if (i !== 4 && (i === 27 && (yl(e, r), r = null, Sp(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null)) for (Ol(e, t, n, r), e = e.sibling; e !== null;) Ol(e, t, n, r), e = e.sibling;
	}
	function kl(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? n.insertBefore(i, t) : n.appendChild(i), yl(e, r), Vt = !0;
		else if (i !== 4 && (i === 27 && (yl(e, r), r = null, Sp(e.type) && (n = e.stateNode)), e = e.child, e !== null)) for (kl(e, t, n, r), e = e.sibling; e !== null;) kl(e, t, n, r), e = e.sibling;
	}
	function Al(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			np(t, r, n), t[_t] = e, t[vt] = n;
		} catch (t) {
			ff(e, e.return, t);
		}
	}
	var jl = !1, Ml = null;
	function Nl(e) {
		(e.tag === 30 || e.subtreeFlags & 33554432) && (jl = !0);
	}
	var Pl = null;
	function Fl() {
		var e = Pl;
		return Pl = null, e;
	}
	var Il = 0;
	function Ll(e, t, n, r, i) {
		return Il = 0, Rl(e.child, t, n, r, i);
	}
	function Rl(e, t, n, r, i) {
		for (var a = !1; e !== null;) {
			if (e.tag === 5) {
				var o = e.stateNode;
				if (r !== null) {
					var s = Op(o);
					r.push(s), s.view && (a = !0);
				} else a || Op(o).view && (a = !0);
				jl = !0, Tp(o, Il === 0 ? t : t + "_" + Il, n), Il++;
			} else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && i || Rl(e.child, t, n, r, i) && (a = !0));
			e = e.sibling;
		}
		return a;
	}
	function zl(e, t) {
		for (; e !== null;) e.tag === 5 ? Ep(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || zl(e.child, t)), e = e.sibling;
	}
	function Bl(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if ((e.tag !== 22 || e.memoizedState === null) && (Bl(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)) {
				var t = e.memoizedProps;
				if (t.name == null || t.name === "auto") throw Error(i(544));
				var n = t.name;
				t = mi(t.default, t.share), t !== "none" && (Ll(e, n, t, null, !1) || zl(e.child, !1));
			}
			e = e.sibling;
		}
	}
	function Vl(e, t) {
		if (e.tag === 30) {
			var n = e.stateNode, r = e.memoizedProps, i = fi(r, n), a = mi(r.default, n.paired ? r.share : r.enter);
			a === "none" ? Bl(e) : Ll(e, i, a, null, !1) ? (Bl(e), n.paired || t || jd(e, r.onEnter)) : zl(e.child, !1);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Vl(e, t), e = e.sibling;
		else Bl(e);
	}
	function Hl(e) {
		if (Ml !== null && Ml.size !== 0) {
			var t = Ml;
			if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
				if (e.tag !== 22 || e.memoizedState === null) {
					if (e.tag === 30 && e.flags & 18874368) {
						var n = e.memoizedProps, r = n.name;
						if (r != null && r !== "auto") {
							var i = t.get(r);
							if (i !== void 0) {
								var a = mi(n.default, n.share);
								if (a !== "none" && (Ll(e, r, a, null, !1) ? (a = e.stateNode, i.paired = a, a.paired = i, jd(e, n.onShare)) : zl(e.child, !1)), t.delete(r), t.size === 0) break;
							}
						}
					}
					Hl(e);
				}
				e = e.sibling;
			}
		}
	}
	function Ul(e) {
		if (e.tag === 30) {
			var t = e.memoizedProps, n = fi(t, e.stateNode), r = Ml === null ? void 0 : Ml.get(n), i = mi(t.default, r === void 0 ? t.exit : t.share);
			i !== "none" && (Ll(e, n, i, null, !1) ? r === void 0 ? jd(e, t.onExit) : (i = e.stateNode, r.paired = i, i.paired = r, Ml.delete(n), jd(e, t.onShare)) : zl(e.child, !1)), Ml !== null && Hl(e);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Ul(e), e = e.sibling;
		else Ml !== null && Hl(e);
	}
	function Wl(e) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var t = e.memoizedProps, n = fi(t, e.stateNode);
				t = mi(t.default, t.update), e.flags &= -5, t !== "none" && Ll(e, n, t, e.memoizedState = [], !1);
			} else e.subtreeFlags & 33554432 && Wl(e);
			e = e.sibling;
		}
	}
	function Gl(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if (e.tag !== 22 || e.memoizedState === null) {
				if (e.tag === 30 && e.flags & 18874368) {
					var t = e.stateNode;
					t.paired !== null && (t.paired = null, zl(e.child, !1));
				}
				Gl(e);
			}
			e = e.sibling;
		}
	}
	function Kl(e) {
		if (e.tag === 30) e.stateNode.paired = null, zl(e.child, !1), Gl(e);
		else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Kl(e), e = e.sibling;
		else Gl(e);
	}
	function ql(e) {
		for (e = e.child; e !== null;) e.tag === 30 ? zl(e.child, !1) : e.subtreeFlags & 33554432 && ql(e), e = e.sibling;
	}
	function Jl(e, t, n, r, i, a, o) {
		for (var s = !1; t !== null;) {
			if (t.tag === 5) {
				var c = t.stateNode;
				if (a !== null && Il < a.length) {
					var l = a[Il], u = Op(c);
					(l.view || u.view) && (s = !0);
					var d;
					if (d = !(e.flags & 4)) {
						if (u.clip) d = !0;
						else {
							d = l.rect;
							var f = u.rect;
							d = d.y !== f.y || d.x !== f.x || d.height !== f.height || d.width !== f.width;
						}
					}
					d && (e.flags |= 4), u.abs ? u = !l.abs : (l = l.rect, u = u.rect, u = l.height !== u.height || l.width !== u.width), u && (e.flags |= 32);
				} else e.flags |= 32;
				e.flags & 4 && Tp(c, Il === 0 ? n : n + "_" + Il, i), s && e.flags & 4 || (Pl === null && (Pl = []), Pl.push(c, Il === 0 ? r : r + "_" + Il, t.memoizedProps)), Il++;
			} else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && o ? e.flags |= t.flags & 32 : Jl(e, t.child, n, r, i, a, o) && (s = !0));
			t = t.sibling;
		}
		return s;
	}
	function Yl(e, t) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var n = e.memoizedProps, r = e.stateNode, i = fi(n, r), a = mi(n.default, n.update);
				if (t) {
					r = r.clones;
					var o = r === null ? null : r.map(kp);
				} else o = e.memoizedState, e.memoizedState = null;
				r = e;
				var s = e.child;
				Il = 0, i = Jl(r, s, i, i, a, o, !1), e.flags & 4 && i && (t || jd(e, n.onUpdate));
			} else e.subtreeFlags & 33554432 && Yl(e, t);
			e = e.sibling;
		}
	}
	var Xl = !1, Zl = !1, Ql = !1, $l = !1, eu = typeof WeakSet == "function" ? WeakSet : Set, tu = null, nu = !1, ru = !1, iu = !1, au = !1;
	function ou(e, t, n) {
		if (e = e.containerInfo, sp = gh, e = Hr(e), Ur(e)) {
			if ("selectionStart" in e) var r = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				r = (r = e.ownerDocument) && r.defaultView || window;
				var i = r.getSelection && r.getSelection();
				if (i && i.rangeCount !== 0) {
					r = i.anchorNode;
					var a = i.anchorOffset, o = i.focusNode;
					i = i.focusOffset;
					try {
						r.nodeType, o.nodeType;
					} catch {
						r = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== r || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || i !== 0 && f.nodeType !== 3 || (l = s + i), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === r && ++u === a && (c = s), p === o && ++d === i && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					r = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else r = null;
			}
			r ||= {
				start: 0,
				end: 0
			};
		} else r = null;
		for (cp = {
			focusedElem: e,
			selectionRange: r
		}, gh = !1, n = (n & 335544064) === n, tu = t, t = n ? 9270 : 1024; tu !== null;) {
			if (e = tu, n && (r = e.deletions, r !== null)) for (a = 0; a < r.length; a++) n && Ul(r[a]);
			if (e.alternate === null && e.flags & 2) n && Nl(e), su(n);
			else {
				if (e.tag === 22) {
					if (r = e.alternate, e.memoizedState !== null) {
						r !== null && r.memoizedState === null && n && Ul(r), su(n);
						continue;
					}
					if (r !== null && r.memoizedState !== null) {
						n && Nl(e), su(n);
						continue;
					}
				}
				r = e.child, (e.subtreeFlags & t) !== 0 && r !== null ? (r.return = e, tu = r) : (n && Wl(e), su(n));
			}
		}
		Ml = null;
	}
	function su(e) {
		for (; tu !== null;) {
			var t = tu, n = e, r = t.alternate, a = t.flags;
			switch (t.tag) {
				case 0:
				case 11:
				case 15: break;
				case 1:
					if (a & 1024 && r !== null) {
						n = void 0, a = r.memoizedProps, r = r.memoizedState;
						var o = t.stateNode;
						try {
							var s = mc(t.type, a);
							n = o.getSnapshotBeforeUpdate(s, r), o.__reactInternalSnapshotBeforeUpdate = n;
						} catch (e) {
							ff(t, t.return, e);
						}
					}
					break;
				case 3:
					if (a & 1024) {
						if (r = t.stateNode.containerInfo, n = r.nodeType, n === 9) nm(r);
						else if (n === 1) switch (r.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								nm(r);
								break;
							default: r.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				case 30:
					n && r !== null && (n = fi(r.memoizedProps, r.stateNode), a = t.memoizedProps, a = mi(a.default, a.update), a !== "none" && Ll(r, n, a, r.memoizedState = [], !0));
					break;
				default: if (a & 1024) throw Error(i(163));
			}
			if (r = t.sibling, r !== null) {
				r.return = t.return, tu = r;
				break;
			}
			tu = t.return;
		}
	}
	function cu(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				Ou(e, n), r & 4 && pl(5, n);
				break;
			case 1:
				if (Ou(e, n), r & 4) {
					if (e = n.stateNode, t === null) try {
						e.componentDidMount();
					} catch (e) {
						ff(n, n.return, e);
					}
					else {
						var i = mc(n.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
						} catch (e) {
							ff(n, n.return, e);
						}
					}
				}
				r & 64 && hl(n), r & 512 && _l(n, n.return);
				break;
			case 3:
				if (Ou(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1: t = n.child.stateNode;
					}
					try {
						go(e, t);
					} catch (e) {
						ff(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && Al(n);
			case 26:
			case 5:
				Ou(e, n), t === null && r & 4 && wl(n), r & 512 && _l(n, n.return);
				break;
			case 12:
				Ou(e, n);
				break;
			case 31:
				Ou(e, n), r & 4 && _u(e, n);
				break;
			case 13:
				Ou(e, n), r & 4 && vu(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = gf.bind(null, n), cm(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || Xl, !r) {
					var a = t !== null && t.memoizedState !== null || Zl;
					t = Xl, i = Zl, Xl = r, (Zl = a) && !i ? (r = 2, n.subtreeFlags & 8772 && (r |= 1), Au(e, n, r)) : Ou(e, n), Xl = t, Zl = i;
				}
				break;
			case 30:
				Ou(e, n), r & 512 && _l(n, n.return);
				break;
			case 7: r & 512 && _l(n, n.return);
			default: Ou(e, n);
		}
	}
	function lu(e, t) {
		for (e = e.child; e !== null;) uu(e, t), e = e.sibling;
	}
	function uu(e, t) {
		switch (e.tag) {
			case 5:
			case 26:
				try {
					var n = e.stateNode;
					if (t) {
						var r = n.style;
						typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
					} else {
						var i = e.stateNode, a = e.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null;
						i.style.display = o == null || typeof o == "boolean" ? "" : ("" + o).trim();
					}
				} catch (t) {
					ff(e, e.return, t);
				}
				du(e, t);
				break;
			case 6:
				try {
					e.stateNode.nodeValue = t ? "" : e.memoizedProps, Vt = !0;
				} catch (t) {
					ff(e, e.return, t);
				}
				break;
			case 18:
				try {
					var s = e.stateNode;
					t ? wp(s, !0) : wp(e.stateNode, !1);
				} catch (t) {
					ff(e, e.return, t);
				}
				break;
			case 22:
			case 23:
				e.memoizedState === null && lu(e, t);
				break;
			default: lu(e, t);
		}
	}
	function du(e, t) {
		if (e.subtreeFlags & 67108864) for (e = e.child; e !== null;) {
			a: {
				var n = e, r = t;
				switch (n.tag) {
					case 4:
						uu(n, r);
						break a;
					case 22:
						n.memoizedState === null && du(n, r);
						break a;
					default: du(n, r);
				}
			}
			e = e.sibling;
		}
	}
	function fu(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, fu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Et(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var pu = null, mu = !1;
	function hu(e, t, n) {
		for (n = n.child; n !== null;) gu(e, t, n), n = n.sibling;
	}
	function gu(e, t, n) {
		if (Ge && typeof Ge.onCommitFiberUnmount == "function") try {
			Ge.onCommitFiberUnmount(We, n);
		} catch {}
		switch (n.tag) {
			case 26:
				Zl || vl(n, t), hu(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !Zl && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				Zl || vl(n, t), xl(n);
				var r = pu, i = mu;
				Sp(n.type) && (pu = n.stateNode, mu = !1), hu(e, t, n), gm(n.stateNode, n.type, n.memoizedProps), pu = r, mu = i;
				break;
			case 5: Zl || vl(n, t), xl(n);
			case 6:
				if (n.tag === 6 && xl(n), r = pu, i = mu, pu = null, hu(e, t, n), pu = r, mu = i, pu !== null) {
					if (mu) try {
						(pu.nodeType === 9 ? pu.body : pu.nodeName === "HTML" ? pu.ownerDocument.body : pu).removeChild(n.stateNode), Vt = !0;
					} catch (e) {
						ff(n, t, e);
					}
					else try {
						pu.removeChild(n.stateNode), Vt = !0;
					} catch (e) {
						ff(n, t, e);
					}
				}
				break;
			case 18:
				pu !== null && (mu ? (e = pu, Cp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Hh(e)) : Cp(pu, n.stateNode));
				break;
			case 4:
				r = pu, i = mu, pu = n.stateNode.containerInfo, mu = !0, hu(e, t, n), pu = r, mu = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				ml(2, n, t), Zl || ml(4, n, t), hu(e, t, n);
				break;
			case 1:
				Zl || (vl(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && gl(n, t, r)), hu(e, t, n);
				break;
			case 21:
				hu(e, t, n);
				break;
			case 22:
				Zl = (r = Zl) || n.memoizedState !== null, hu(e, t, n), Zl = r;
				break;
			case 30:
				vl(n, t), hu(e, t, n);
				break;
			case 7:
				Zl || vl(n, t), hu(e, t, n);
				break;
			default: hu(e, t, n);
		}
	}
	function _u(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Hh(e);
			} catch (e) {
				ff(t, t.return, e);
			}
		}
	}
	function vu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Hh(e);
		} catch (e) {
			ff(t, t.return, e);
		}
	}
	function yu(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new eu()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new eu()), t;
			default: throw Error(i(435, e.tag));
		}
	}
	function bu(e, t) {
		var n = yu(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = _f.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function xu(e, t, n) {
		var r = t.deletions;
		if (r !== null) for (var a = 0; a < r.length; a++) {
			var o = r[a], s = e, c = t, l = c;
			a: for (; l !== null;) {
				switch (l.tag) {
					case 27:
						if (Sp(l.type)) {
							pu = l.stateNode, mu = !1;
							break a;
						}
						break;
					case 5:
						pu = l.stateNode, mu = !1;
						break a;
					case 3:
					case 4:
						pu = l.stateNode.containerInfo, mu = !0;
						break a;
				}
				l = l.return;
			}
			if (pu === null) throw Error(i(160));
			gu(s, c, o), pu = null, mu = !1, s = o.alternate, s !== null && (s.return = null), o.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) Cu(t, e, n), t = t.sibling;
	}
	var Su = null;
	function Cu(e, t, n) {
		var r = e.alternate, a = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (a & 4 && (r = e.updateQueue, r = r === null ? null : r.events, r !== null)) for (var o = 0; o < r.length; o++) {
					var s = r[o];
					s.ref.impl = s.nextImpl;
				}
				xu(t, e, n), wu(e), a & 4 && (ml(3, e, e.return), pl(3, e), ml(5, e, e.return));
				break;
			case 1:
				xu(t, e, n), wu(e), a & 512 && (Zl || r === null || vl(r, r.return)), a & 64 && Xl && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
				break;
			case 26:
				if (o = Su, xu(t, e, n), wu(e), a & 512 && (Zl || r === null || vl(r, r.return)), a & 4) {
					if (a = r === null ? null : r.memoizedState, n = e.memoizedState, r === null) {
						if (n === null) {
							if (e.stateNode === null) {
								if (Xl) e.stateNode = fp(e.type, e.memoizedProps, t.containerInfo, e);
								else {
									a: {
										t = e.type, n = e.memoizedProps, a = o.ownerDocument || o;
										b: switch (t) {
											case "title":
												r = a.getElementsByTagName("title")[0], (!r || r[wt] || r[_t] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = a.createElement(t), a.head.insertBefore(r, a.querySelector("head > title"))), np(r, t, n), r[_t] = e, jt(r), t = r;
												break a;
											case "link":
												if (o = Gm("link", "href", a).get(t + (n.href || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), np(r, t, n), a.head.appendChild(r);
												break;
											case "meta":
												if (o = Gm("meta", "content", a).get(t + (n.content || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), np(r, t, n), a.head.appendChild(r);
												break;
											default: throw Error(i(468, t));
										}
										r[_t] = e, jt(r), t = r;
									}
									e.stateNode = t;
								}
							} else Xl || Km(o, e.type, e.stateNode);
						} else e.stateNode = Bm(o, n, e.memoizedProps);
					} else a === n ? n === null && e.stateNode !== null && Tl(e, e.memoizedProps, r.memoizedProps) : (a === null ? (t = r.stateNode, t === null || Zl || t.parentNode.removeChild(t)) : a.count--, n === null ? Xl || Km(o, e.type, e.stateNode) : Bm(o, n, e.memoizedProps));
				}
				break;
			case 27:
				xu(t, e, n), wu(e), a & 512 && (Zl || r === null || vl(r, r.return)), r !== null && a & 4 && Tl(e, e.memoizedProps, r.memoizedProps);
				break;
			case 5:
				if (o = Ql, Ql = !1, xu(t, e, n), Ql = o, wu(e), a & 512 && (Zl || r === null || vl(r, r.return)), e.flags & 32) {
					t = e.stateNode;
					try {
						on(t, ""), Vt = !0;
					} catch (t) {
						ff(e, e.return, t);
					}
				}
				a & 4 && e.stateNode != null && (t = e.memoizedProps, Tl(e, t, r === null ? t : r.memoizedProps)), a & 1024 && ($l = !0);
				break;
			case 6:
				if (xu(t, e, n), wu(e), a & 4) {
					if (e.stateNode === null) throw Error(i(162));
					t = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = t, Vt = !0;
					} catch (t) {
						ff(e, e.return, t);
					}
				}
				break;
			case 3:
				if (Vt = !1, Wm = null, o = Su, Su = bm(t.containerInfo), xu(t, e, n), Su = o, wu(e), a & 4 && r !== null && r.memoizedState.isDehydrated) try {
					Hh(t.containerInfo);
				} catch (t) {
					ff(e, e.return, t);
				}
				$l && ($l = !1, Tu(e)), Vt = !1;
				break;
			case 4:
				a = Ql, Ql = Xl, r = Ht(), o = Su, Su = bm(e.stateNode.containerInfo), xu(t, e, n), wu(e), Su = o, Vt && ru && (iu = !0), Vt = r, Ql = a;
				break;
			case 12:
				xu(t, e, n), wu(e);
				break;
			case 31:
				xu(t, e, n), wu(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, bu(e, t)));
				break;
			case 13:
				xu(t, e, n), wu(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (fd = Fe()), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, bu(e, t)));
				break;
			case 22:
				o = e.memoizedState !== null, s = r !== null && r.memoizedState !== null;
				var c = Xl, l = Zl, u = Ql;
				Xl = c || o, Ql = u || o, Zl = l || s, xu(t, e, n), Zl = l, Ql = u, Xl = c, wu(e), a & 8192 && (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, !o || r === null || s || Xl || Zl || (t = s || Zl, n = Xl, r = Zl, Xl = o || Xl, Zl = t, ku(e, 2), Xl = n, Zl = r), !o && Ql || lu(e, o)), a & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, bu(e, n))));
				break;
			case 19:
				xu(t, e, n), wu(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, bu(e, t)));
				break;
			case 30:
				a & 512 && (Zl || r === null || vl(r, r.return)), a = Ht(), o = ru, s = (n & 335544064) === n, c = e.memoizedProps, ru = s && mi(c.default, c.update) !== "none", xu(t, e, n), wu(e), s && r !== null && Vt && (e.flags |= 4), ru = o, Vt = a;
				break;
			case 21: break;
			case 7: a & 512 && (Zl || r === null || vl(r, r.return)), r && r.stateNode !== null && (r.stateNode._fragmentFiber = e);
			default: xu(t, e, n), wu(e);
		}
	}
	function wu(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (El(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				r = null;
				for (var a = e.return; a !== null;) {
					if (Cl(a)) {
						var o = a.stateNode;
						r === null ? r = [o] : r.push(o);
					}
					if (Sl(a)) break;
					a = a.return;
				}
				var s = r;
				if (n == null) throw Error(i(160));
				switch (n.tag) {
					case 27:
						var c = n.stateNode;
						kl(e, Dl(e), c, s);
						break;
					case 5:
						var l = n.stateNode;
						n.flags & 32 && (on(l, ""), n.flags &= -33), kl(e, Dl(e), l, s);
						break;
					case 3:
					case 4:
						var u = n.stateNode.containerInfo;
						Ol(e, Dl(e), u, s);
						break;
					default: throw Error(i(161));
				}
			} catch (t) {
				ff(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function Tu(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			Tu(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, gh = !0, t.reset(), gh = !1), e = e.sibling;
		}
	}
	function Eu(e, t) {
		if (t.subtreeFlags & 9270) for (t = t.child; t !== null;) Du(t, e), t = t.sibling;
		else Yl(t, !1);
	}
	function Du(e, t) {
		var n = e.alternate;
		if (n === null) Vl(e, !1);
		else switch (e.tag) {
			case 3:
				if (au = nu = !1, Fl(), Eu(t, e), !nu && !iu) {
					if (e = Pl, e !== null) for (var r = 0; r < e.length; r += 3) {
						n = e[r];
						var i = e[r + 1];
						Ep(n, e[r + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate({
							opacity: [0, 0],
							pointerEvents: ["none", "none"]
						}, {
							duration: 0,
							fill: "forwards",
							pseudoElement: "::view-transition-group(" + i + ")"
						});
					}
					e = t.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate({
						opacity: [0, 0],
						pointerEvents: ["none", "none"]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition-group(root)"
					}), e.animate({
						width: [0, 0],
						height: [0, 0]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition"
					})), au = !0;
				}
				Pl = null;
				break;
			case 5:
				Eu(t, e);
				break;
			case 4:
				r = nu, nu = !1, Eu(t, e), nu && (iu = !0), nu = r;
				break;
			case 22:
				e.memoizedState === null && (n.memoizedState === null ? Eu(t, e) : Vl(e, !1));
				break;
			case 30:
				r = nu, i = Fl(), nu = !1, Eu(t, e), nu && (e.flags |= 4);
				var a = e.memoizedProps, o = e.stateNode;
				t = fi(a, o), o = fi(n.memoizedProps, o);
				var s = mi(a.default, a.update);
				s === "none" ? t = !1 : (a = n.memoizedState, n.memoizedState = null, n = e.child, Il = 0, t = Jl(e, n, t, o, s, a, !0), Il !== (a === null ? 0 : a.length) && (e.flags |= 32)), e.flags & 4 && t ? (jd(e, e.memoizedProps.onUpdate), Pl = i) : i !== null && (i.push.apply(i, Pl), Pl = i), nu = e.flags & 32 ? !0 : r;
				break;
			default: Eu(t, e);
		}
	}
	function Ou(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) cu(e, t.alternate, t), t = t.sibling;
	}
	function ku(e, t) {
		for (e = e.child; e !== null;) {
			var n = e, r = t;
			switch (n.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					ml(4, n, n.return), ku(n, r);
					break;
				case 1:
					vl(n, n.return);
					var i = n.stateNode;
					typeof i.componentWillUnmount == "function" && gl(n, n.return, i), ku(n, r);
					break;
				case 27: r & 2 && gm(n.stateNode, n.type, n.memoizedProps);
				case 5:
					vl(n, n.return), n.tag !== 5 && n.tag !== 27 || xl(n), ku(n, r);
					break;
				case 6:
					xl(n);
					break;
				case 26:
					vl(n, n.return), i = n.stateNode, n.memoizedState !== null || i === null || Zl || i.parentNode.removeChild(i), ku(n, r);
					break;
				case 22:
					n.memoizedState === null && ku(n, r);
					break;
				case 30:
					vl(n, n.return), ku(n, r);
					break;
				case 7: vl(n, n.return);
				default: ku(n, r);
			}
			e = e.sibling;
		}
	}
	function Au(e, t, n) {
		for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags, s = !!(n & 1);
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					Au(i, a, n), pl(4, a);
					break;
				case 1:
					if (Au(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
						i.componentDidMount();
					} catch (e) {
						ff(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var c = r.stateNode;
						try {
							var l = i.shared.hiddenCallbacks;
							if (l !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) ho(l[i], c);
						} catch (e) {
							ff(r, r.return, e);
						}
					}
					s && o & 64 && hl(a), _l(a, a.return);
					break;
				case 27: n & 2 && Al(a);
				case 5:
					a.tag !== 5 && a.tag !== 27 || bl(a), Au(i, a, n), s && r === null && o & 4 && wl(a), _l(a, a.return);
					break;
				case 6:
					bl(a);
					break;
				case 26:
					c = a.stateNode, a.memoizedState !== null || c === null || Xl || Km(bm(c.ownerDocument), a.type, c), Au(i, a, n), s && r === null && o & 4 && wl(a), _l(a, a.return);
					break;
				case 12:
					Au(i, a, n);
					break;
				case 31:
					Au(i, a, n), s && o & 4 && _u(i, a);
					break;
				case 13:
					Au(i, a, n), s && o & 4 && vu(i, a);
					break;
				case 22:
					a.memoizedState === null && Au(i, a, n), _l(a, a.return);
					break;
				case 30:
					Au(i, a, n), _l(a, a.return);
					break;
				case 7: _l(a, a.return);
				default: Au(i, a, n);
			}
			t = t.sibling;
		}
	}
	function ju(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && K(n));
	}
	function Mu(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && K(e));
	}
	function Nu(e, t, n, r) {
		var i = (n & 335544064) === n;
		if (t.subtreeFlags & (i ? 10262 : 10256)) for (t = t.child; t !== null;) Pu(e, t, n, r), t = t.sibling;
		else i && ql(t);
	}
	function Pu(e, t, n, r) {
		var i = (n & 335544064) === n;
		i && t.alternate === null && t.return !== null && t.return.alternate !== null && Kl(t);
		var a = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Nu(e, t, n, r), a & 2048 && pl(9, t);
				break;
			case 1:
				Nu(e, t, n, r);
				break;
			case 3:
				Nu(e, t, n, r), i && au && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), a & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (t.refCount++, a != null && K(a)));
				break;
			case 12:
				if (a & 2048) {
					Nu(e, t, n, r), a = t.stateNode;
					try {
						var o = t.memoizedProps, s = o.id, c = o.onPostCommit;
						typeof c == "function" && c(s, t.alternate === null ? "mount" : "update", a.passiveEffectDuration, -0);
					} catch (e) {
						ff(t, t.return, e);
					}
				} else Nu(e, t, n, r);
				break;
			case 31:
				Nu(e, t, n, r);
				break;
			case 13:
				Nu(e, t, n, r);
				break;
			case 23: break;
			case 22:
				o = t.stateNode, s = t.alternate, t.memoizedState === null ? (i && s !== null && s.memoizedState !== null && Kl(t), o._visibility & 2 ? Nu(e, t, n, r) : (o._visibility |= 2, Fu(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))) : (i && s !== null && s.memoizedState === null && Kl(s), o._visibility & 2 ? Nu(e, t, n, r) : Iu(e, t)), a & 2048 && ju(s, t);
				break;
			case 24:
				Nu(e, t, n, r), a & 2048 && Mu(t.alternate, t);
				break;
			case 30:
				i && (a = t.alternate, a !== null && (zl(a.child, !0), zl(t.child, !0))), Nu(e, t, n, r);
				break;
			default: Nu(e, t, n, r);
		}
	}
	function Fu(e, t, n, r, i) {
		for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					Fu(a, o, s, c, i), pl(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, Fu(a, o, s, c, i)) : u._visibility & 2 ? Fu(a, o, s, c, i) : Iu(a, o), i && l & 2048 && ju(o.alternate, o);
					break;
				case 24:
					Fu(a, o, s, c, i), i && l & 2048 && Mu(o.alternate, o);
					break;
				default: Fu(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function Iu(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					Iu(n, r), i & 2048 && ju(r.alternate, r);
					break;
				case 24:
					Iu(n, r), i & 2048 && Mu(r.alternate, r);
					break;
				default: Iu(n, r);
			}
			t = t.sibling;
		}
	}
	var Lu = 8192;
	function Ru(e, t, n) {
		if (e.subtreeFlags & Lu) for (e = e.child; e !== null;) zu(e, t, n), e = e.sibling;
	}
	function zu(e, t, n) {
		switch (e.tag) {
			case 26:
				Ru(e, t, n), e.flags & Lu && (e.memoizedState === null ? (e = e.stateNode, (t & 335544128) === t && Zm(n, e)) : Qm(n, Su, e.memoizedState, e.memoizedProps));
				break;
			case 5:
				Ru(e, t, n), e.flags & Lu && (e = e.stateNode, (t & 335544128) === t && Zm(n, e));
				break;
			case 3:
			case 4:
				var r = Su;
				Su = bm(e.stateNode.containerInfo), Ru(e, t, n), Su = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Lu, Lu = 16777216, Ru(e, t, n), Lu = r) : Ru(e, t, n));
				break;
			case 30:
				if ((e.flags & Lu) !== 0 && (r = e.memoizedProps.name, r != null && r !== "auto")) {
					var i = e.stateNode;
					i.paired = null, Ml === null && (Ml = /* @__PURE__ */ new Map()), Ml.set(r, i);
				}
				Ru(e, t, n);
				break;
			default: Ru(e, t, n);
		}
	}
	function Bu(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function Vu(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				tu = r, Wu(r, e);
			}
			Bu(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) Hu(e), e = e.sibling;
	}
	function Hu(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Vu(e), e.flags & 2048 && ml(9, e, e.return);
				break;
			case 3:
				Vu(e);
				break;
			case 12:
				Vu(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Uu(e)) : Vu(e);
				break;
			default: Vu(e);
		}
	}
	function Uu(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				tu = r, Wu(r, e);
			}
			Bu(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					ml(8, t, t.return), Uu(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Uu(t));
					break;
				default: Uu(t);
			}
			e = e.sibling;
		}
	}
	function Wu(e, t) {
		for (; tu !== null;) {
			var n = tu;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					ml(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: K(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, tu = r;
			else a: for (n = e; tu !== null;) {
				r = tu;
				var i = r.sibling, a = r.return;
				if (fu(r), r === n) {
					tu = null;
					break a;
				}
				if (i !== null) {
					i.return = a, tu = i;
					break a;
				}
				tu = a;
			}
		}
	}
	var Gu = {
		getCacheForType: function(e) {
			var t = ba(Ea), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return ba(Ea).controller.signal;
		}
	}, Ku = typeof WeakMap == "function" ? WeakMap : Map, qu = 0, Ju = null, Yu = null, Xu = 0, Zu = 0, Qu = null, $u = !1, ed = !1, td = !1, nd = 0, rd = 0, id = 0, ad = 0, od = 0, sd = 0, cd = 0, ld = null, ud = null, dd = !1, fd = 0, pd = 0, md = Infinity, hd = null, gd = null, _d = 0, vd = null, yd = null, bd = 0, xd = 0, Sd = null, Cd = null, wd = null, Td = null, Ed = null, Dd = 0, Od = null;
	function kd() {
		return qu & 2 && Xu !== 0 ? Xu & -Xu : L.T === null ? mt() : Nf();
	}
	function Ad() {
		if (sd === 0) {
			if (!(Xu & 536870912) || G) {
				var e = Qe;
				Qe <<= 1, !(Qe & 3932160) && (Qe = 262144), sd = e;
			} else sd = 536870912;
		}
		return e = So.current, e !== null && (e.flags |= 32), sd;
	}
	function jd(e, t) {
		if (t != null) {
			var n = e.stateNode, r = n.ref;
			r === null && (r = n.ref = Pp(fi(e.memoizedProps, n))), Td === null && (Td = []), Td.push(t.bind(null, r));
		}
	}
	function Md(e, t, n) {
		(e === Ju && (Zu === 2 || Zu === 9) || e.cancelPendingCommit !== null) && (zd(e, 0), Id(e, Xu, sd, !1)), st(e, n), (!(qu & 2) || e !== Ju) && (e === Ju && (!(qu & 2) && (ad |= n), rd === 4 && Id(e, Xu, sd, !1)), Tf(e));
	}
	function Nd(e, t, n) {
		if (qu & 6) throw Error(i(327));
		var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || nt(e, t), a = r ? qd(e, t) : Gd(e, t, !0), o = r;
		do {
			if (a === 0) {
				ed && !r && Id(e, t, 0, !1);
				break;
			}
			if (n = e.current.alternate, o && !Fd(n)) a = Gd(e, t, !1), o = !1;
			else {
				if (a === 2) {
					if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
					else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
					if (s !== 0) {
						t = s;
						a: {
							var c = e;
							a = ld;
							var l = c.current.memoizedState.isDehydrated;
							if (l && (zd(c, s).flags |= 256), s = Gd(c, s, !1), s !== 2 && s !== 6) {
								if (td && !l) {
									c.errorRecoveryDisabledLanes |= o, ad |= o, a = 4;
									break a;
								}
								o = ud, ud = a, o !== null && (ud === null ? ud = o : ud.push.apply(ud, o));
							}
							a = s;
						}
						if (o = !1, a !== 2) continue;
					}
				}
				if (a === 1) {
					zd(e, 0), Id(e, t, 0, !0);
					break;
				}
				a: {
					switch (r = e, o = a, o) {
						case 0:
						case 1: throw Error(i(345));
						case 4: if ((t & 4194048) !== t && (t & 62914560) !== t) break;
						case 6:
							Id(r, t, sd, !$u);
							break a;
						case 2:
							ud = null;
							break;
						case 3:
						case 5: break;
						default: throw Error(i(329));
					}
					if ((t & 62914560) === t && (a = fd + 300 - Fe(), 10 < a)) {
						if (Id(r, t, sd, !$u), tt(r, 0, !0) !== 0) break a;
						bd = t, r.timeoutHandle = gp(Pd.bind(null, r, n, ud, hd, dd, t, sd, ad, cd, $u, o, "Throttled", -0, 0), a);
						break a;
					}
					Pd(r, n, ud, hd, dd, t, sd, ad, cd, $u, o, null, -0, 0);
				}
				break;
			}
		} while (1);
		Tf(e);
	}
	function Pd(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		e.timeoutHandle = -1;
		var m = t.subtreeFlags, h = (a & 335544064) === a;
		d = null, (h || m & 8192 || (m & 16785408) == 16785408) && (d = {
			stylesheets: null,
			count: 0,
			imgCount: 0,
			imgBytes: 0,
			suspenseyImages: [],
			waitingForImages: !0,
			waitingForViewTransition: !1,
			unsuspend: mn
		}, Ml = null, zu(t, a, d), h && (m = d, h = e.containerInfo, h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition, h != null && (m.count++, m.waitingForViewTransition = !0, m = nh.bind(m), h.finished.then(m, m))), m = (a & 62914560) === a ? fd - Fe() : (a & 4194048) === a ? pd - Fe() : 0, m = eh(d, m), m !== null) ? (bd = a, e.cancelPendingCommit = m(ef.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p)), Id(e, a, o, !l)) : ef(e, t, a, n, r, i, o, s, c, l, u, d);
	}
	function Fd(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!Ir(a(), i)) return !1;
				} catch {
					return !1;
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function Id(e, t, n, r) {
		t = rt(e, t), t &= ~od, t &= ~ad, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - qe(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && lt(e, n, t);
	}
	function Ld() {
		return qu & 6 ? !0 : (Ef(0, !1), !1);
	}
	function Rd() {
		if (Yu !== null) {
			if (Zu === 0) var e = Yu.return;
			else e = Yu, fa = da = null, Zo(e), J = null, Qa = 0, e = Yu;
			for (; e !== null;) fl(e.alternate, e), e = e.return;
			Yu = null;
		}
	}
	function zd(e, t) {
		var n = e.timeoutHandle;
		return n !== -1 && (e.timeoutHandle = -1, _p(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), bd = 0, Rd(), Ju = e, Yu = n = ki(e.current, null), Xu = t, Zu = 0, Qu = null, $u = !1, ed = nt(e, t), td = !1, cd = sd = od = ad = id = rd = 0, ud = ld = null, dd = !1, nd = rt(e, t), yi(), n;
	}
	function Bd(e, t) {
		X = null, L.H = oc, t === Ua || t === Ga ? (t = q(), Zu = 3) : t === Wa ? (t = q(), Zu = 4) : Zu = t === Cc ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, Qu = t, Yu === null && (rd = 1, vc(e, Li(t, e.current)));
	}
	function Vd() {
		var e = So.current;
		return e === null ? !0 : (Xu & 4194048) === Xu ? Co === null : (Xu & 62914560) === Xu || Xu & 536870912 ? e === Co : !1;
	}
	function Hd() {
		var e = L.H;
		return L.H = oc, e === null ? oc : e;
	}
	function Ud() {
		var e = L.A;
		return L.A = Gu, e;
	}
	function Wd() {
		rd = 4, $u || (Xu & 4194048) !== Xu && So.current !== null || (ed = !0), !(id & 134217727) && !(ad & 134217727) || Ju === null || Id(Ju, Xu, sd, !1);
	}
	function Gd(e, t, n) {
		var r = qu;
		qu |= 2;
		var i = Hd(), a = Ud();
		(Ju !== e || Xu !== t) && (hd = null, zd(e, t)), t = !1;
		var o = rd;
		a: do
			try {
				if (Zu !== 0 && Yu !== null) {
					var s = Yu, c = Qu;
					switch (Zu) {
						case 8:
							Rd(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							So.current === null && (t = !0);
							var l = Zu;
							if (Zu = 0, Qu = null, Zd(e, s, c, l), n && ed) {
								o = 0;
								break a;
							}
							break;
						default: l = Zu, Zu = 0, Qu = null, Zd(e, s, c, l);
					}
				}
				Kd(), o = rd;
				break;
			} catch (t) {
				Bd(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, fa = da = null, qu = r, L.H = i, L.A = a, Yu === null && (Ju = null, Xu = 0, yi()), o;
	}
	function Kd() {
		for (; Yu !== null;) Yd(Yu);
	}
	function qd(e, t) {
		var n = qu;
		qu |= 2;
		var r = Hd(), a = Ud();
		Ju !== e || Xu !== t ? (hd = null, md = Fe() + 500, zd(e, t)) : ed = nt(e, t);
		a: do
			try {
				if (Zu !== 0 && Yu !== null) {
					t = Yu;
					var o = Qu;
					b: switch (Zu) {
						case 1:
							Zu = 0, Qu = null, Zd(e, t, o, 1);
							break;
						case 2:
						case 9:
							if (qa(o)) {
								Zu = 0, Qu = null, Xd(t);
								break;
							}
							t = function() {
								Zu !== 2 && Zu !== 9 || Ju !== e || (Zu = 7), Tf(e);
							}, o.then(t, t);
							break a;
						case 3:
							Zu = 7;
							break a;
						case 4:
							Zu = 5;
							break a;
						case 7:
							qa(o) ? (Zu = 0, Qu = null, Xd(t)) : (Zu = 0, Qu = null, Zd(e, t, o, 7));
							break;
						case 5:
							var s = null;
							switch (Yu.tag) {
								case 26: s = Yu.memoizedState;
								case 5:
								case 27:
									var c = Yu;
									if (s ? Ym(s) : c.stateNode.complete) {
										Zu = 0, Qu = null;
										var l = c.sibling;
										if (l !== null) Yu = l;
										else {
											var u = c.return;
											u === null ? Yu = null : (Yu = u, Qd(u));
										}
										break b;
									}
							}
							Zu = 0, Qu = null, Zd(e, t, o, 5);
							break;
						case 6:
							Zu = 0, Qu = null, Zd(e, t, o, 6);
							break;
						case 8:
							Rd(), rd = 6;
							break a;
						default: throw Error(i(462));
					}
				}
				Jd();
				break;
			} catch (t) {
				Bd(e, t);
			}
		while (1);
		return fa = da = null, L.H = r, L.A = a, qu = n, Yu === null ? (Ju = null, Xu = 0, yi(), rd) : 0;
	}
	function Jd() {
		for (; Yu !== null && !Ne();) Yd(Yu);
	}
	function Yd(e) {
		var t = rl(e.alternate, e, nd);
		e.memoizedProps = e.pendingProps, t === null ? Qd(e) : Yu = t;
	}
	function Xd(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = Lc(n, t, t.pendingProps, t.type, void 0, Xu);
				break;
			case 11:
				t = Lc(n, t, t.pendingProps, t.type.render, t.ref, Xu);
				break;
			case 5:
				Zo(t);
				var r = t;
				r === Qi && (G ? (aa(r), r.tag === 5 && r.stateNode != null && ($i = r.stateNode)) : (aa(r), G = !0));
			default: fl(n, t), t = Yu = Ai(t, nd), t = rl(n, t, nd);
		}
		e.memoizedProps = e.pendingProps, t === null ? Qd(e) : Yu = t;
	}
	function Zd(e, t, n, r) {
		fa = da = null, Zo(t), J = null, Qa = 0;
		var i = t.return;
		try {
			if (Q(e, i, t, n, Xu)) {
				rd = 1, vc(e, Li(n, e.current)), Yu = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw Yu = i, t;
			rd = 1, vc(e, Li(n, e.current)), Yu = null;
			return;
		}
		t.flags & 32768 ? (G || r === 1 ? e = !0 : ed || Xu & 536870912 ? e = !1 : ($u = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = So.current, r !== null && r.tag === 13 && (r.flags |= 16384))), $d(t, e)) : Qd(t);
	}
	function Qd(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				$d(t, $u);
				return;
			}
			e = t.return;
			var n = ul(t.alternate, t, nd);
			if (n !== null) {
				Yu = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				Yu = t;
				return;
			}
			Yu = t = e;
		} while (t !== null);
		rd === 0 && (rd = 5);
	}
	function $d(e, t) {
		do {
			var n = dl(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, Yu = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				Yu = e;
				return;
			}
			Yu = e = n;
		} while (e !== null);
		rd = 6, Yu = null;
	}
	function ef(e, t, n, r, a, o, s, c, l, u, d, f) {
		e.cancelPendingCommit = null;
		do
			lf();
		while (_d !== 0);
		if (qu & 6) throw Error(i(327));
		if (t !== null) {
			if (t === e.current) throw Error(i(177));
			e === Ju && (Yu = Ju = null, Xu = 0), yd = t, vd = e, bd = n, Sd = a, Cd = r, tf(e, t, n, s, c, l, f);
		}
	}
	function tf(e, t, n, r, i, a, o) {
		var s = t.lanes | t.childLanes;
		if (xd = s, s |= vi, ct(e, n, s, r, i, a), Td = null, (n & 335544064) === n ? (Ed = Aa(e), r = 10262) : (Ed = null, r = 10256), (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, vf(ze, function() {
			return uf(), null;
		})) : (e.callbackNode = null, e.callbackPriority = 0), jl = !1, r = !!(t.flags & 13878), t.subtreeFlags & 13878 || r) {
			r = L.T, L.T = null, i = R.p, R.p = 2, a = qu, qu |= 4;
			try {
				ou(e, t, n);
			} finally {
				qu = a, R.p = i, L.T = r;
			}
		}
		_d = 1, jl ? wd = Mp(o, e.containerInfo, Ed, af, of, rf, sf, uf, nf, null, null) : (af(), of(), sf());
	}
	function nf(e) {
		if (_d !== 0) {
			var t = vd.onRecoverableError;
			t(e, { componentStack: null });
		}
	}
	function rf() {
		_d === 3 && (_d = 0, Du(yd, vd), _d = 4);
	}
	function af() {
		if (_d === 1) {
			_d = 0;
			var e = vd, t = yd, n = bd, r = !!(t.flags & 13878);
			if (t.subtreeFlags & 13878 || r) {
				r = L.T, L.T = null;
				var i = R.p;
				R.p = 2;
				var a = qu;
				qu |= 4;
				try {
					ru = iu = !1, Cu(t, e, n), n = cp;
					var o = Hr(e.containerInfo), s = n.focusedElem, c = n.selectionRange;
					if (o !== s && s && s.ownerDocument && Vr(s.ownerDocument.documentElement, s)) {
						if (c !== null && Ur(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = Br(s, h), v = Br(s, g);
									if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
										var y = d.createRange();
										y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
									}
								}
							}
						}
						for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
							element: p,
							left: p.scrollLeft,
							top: p.scrollTop
						});
						for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
							var b = d[s];
							b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
						}
					}
					gh = !!sp, cp = sp = null;
				} finally {
					qu = a, R.p = i, L.T = r;
				}
			}
			e.current = t, _d = 2;
		}
	}
	function of() {
		if (_d === 2) {
			_d = 0;
			var e = vd, t = yd, n = !!(t.flags & 8772);
			if (t.subtreeFlags & 8772 || n) {
				n = L.T, L.T = null;
				var r = R.p;
				R.p = 2;
				var i = qu;
				qu |= 4;
				try {
					cu(e, t.alternate, t);
				} finally {
					qu = i, R.p = r, L.T = n;
				}
			}
			_d = 3;
		}
	}
	function sf() {
		if (_d === 4 || _d === 3) {
			_d = 0;
			var e = wd;
			wd = null, Pe();
			var t = vd, n = yd, r = bd, i = Cd, a = (r & 335544064) === r ? 10262 : 10256;
			if ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0 ? _d = 5 : (_d = 0, yd = vd = null, cf(t, t.pendingLanes)), a = t.pendingLanes, a === 0 && (gd = null), pt(r), n = n.stateNode, Ge && typeof Ge.onCommitFiberRoot == "function") try {
				Ge.onCommitFiberRoot(We, n, void 0, (n.current.flags & 128) == 128);
			} catch {}
			if (i !== null) {
				n = L.T, a = R.p, R.p = 2, L.T = null;
				try {
					for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
						var c = i[s];
						o(c.value, { componentStack: c.stack });
					}
				} finally {
					L.T = n, R.p = a;
				}
			}
			if (i = Td, o = Ed, Ed = null, i !== null && (Td = null, o === null && (o = []), e !== null)) for (c = 0; c < i.length; c++) n = (0, i[c])(o), n !== void 0 && e.finished.finally(n);
			bd & 3 && lf(), Tf(t), a = t.pendingLanes, r & 261930 && a & 42 ? t === Od ? Dd++ : (Dd = 0, Od = t) : (Dd = 0, Od = null), Ef(0, !1);
		}
	}
	function cf(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, K(t)));
	}
	function lf() {
		return wd !== null && (wd.skipTransition(), wd = null), af(), of(), sf(), uf();
	}
	function uf() {
		if (_d !== 5) return !1;
		var e = vd, t = xd;
		xd = 0;
		var n = pt(bd), r = L.T, a = R.p;
		try {
			R.p = 32 > n ? 32 : n, L.T = null, n = Sd, Sd = null;
			var o = vd, s = bd;
			if (_d = 0, yd = vd = null, bd = 0, qu & 6) throw Error(i(331));
			var c = qu;
			if (qu |= 4, Hu(o.current), Pu(o, o.current, s, n), qu = c, Ef(0, !1), Ge && typeof Ge.onPostCommitFiberRoot == "function") try {
				Ge.onPostCommitFiberRoot(We, o);
			} catch {}
			return !0;
		} finally {
			R.p = a, L.T = r, cf(e, t);
		}
	}
	function df(e, t, n) {
		t = Li(n, t), t = bc(e.stateNode, t, 2), e = co(e, t, 2), e !== null && (st(e, 2), Tf(e));
	}
	function ff(e, t, n) {
		if (e.tag === 3) df(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				df(t, e, n);
				break;
			}
			if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (gd === null || !gd.has(r))) {
					e = Li(n, e), n = xc(2), r = co(t, n, 2), r !== null && (Sc(n, r, t, e), st(r, 2), Tf(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function pf(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new Ku();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (td = !0, i.add(n), e = mf.bind(null, e, t, n), t.then(e, e));
	}
	function mf(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ju === e && (Xu & n) === n && (rd === 4 || rd === 3 && (Xu & 62914560) === Xu && 300 > Fe() - fd ? qu & 2 ? od |= n : zd(e, 0) : od |= n, cd === Xu && (cd = 0)), Tf(e);
	}
	function hf(e, t) {
		t === 0 && (t = at()), e = Si(e, t), e !== null && (st(e, t), Tf(e));
	}
	function gf(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), hf(e, n);
	}
	function _f(e, t) {
		var n = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var r = e.stateNode, a = e.memoizedState;
				a !== null && (n = a.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default: throw Error(i(314));
		}
		r !== null && r.delete(t), hf(e, n);
	}
	function vf(e, t) {
		return je(e, t);
	}
	var yf = null, bf = null, xf = !1, Sf = !1, Cf = !1, wf = 0;
	function Tf(e) {
		e !== bf && e.next === null && (bf === null ? yf = bf = e : bf = bf.next = e), Sf = !0, xf || (xf = !0, Mf());
	}
	function Ef(e, t) {
		if (!Cf && Sf) {
			Cf = !0;
			do
				for (var n = !1, r = yf; r !== null;) {
					if (!t) {
						if (e !== 0) {
							var i = r.pendingLanes;
							if (i === 0) var a = 0;
							else {
								var o = r.suspendedLanes, s = r.pingedLanes;
								a = (1 << 31 - qe(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
							}
							a !== 0 && (n = !0, jf(r, a));
						} else a = Xu, a = tt(r, r === Ju ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || nt(r, a) || (n = !0, jf(r, a));
					}
					r = r.next;
				}
			while (n);
			Cf = !1;
		}
	}
	function Df() {
		Of();
	}
	function Of() {
		Sf = xf = !1;
		var e = 0;
		wf !== 0 && hp() && (e = wf);
		for (var t = Fe(), n = null, r = yf; r !== null;) {
			var i = r.next, a = kf(r, t);
			a === 0 ? (r.next = null, n === null ? yf = i : n.next = i, i === null && (bf = n)) : (n = r, (e !== 0 || a & 3) && (Sf = !0)), r = i;
		}
		_d !== 0 && _d !== 5 || Ef(e, !1), wf !== 0 && (wf = 0);
	}
	function kf(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - qe(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = it(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = Ju, n = Xu, n = tt(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (Zu === 2 || Zu === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && Me(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || nt(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && Me(r), pt(n)) {
				case 2:
				case 8:
					n = Re;
					break;
				case 32:
					n = ze;
					break;
				case 268435456:
					n = Ve;
					break;
				default: n = ze;
			}
			return r = Af.bind(null, e), n = je(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && Me(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function Af(e, t) {
		if (_d !== 0 && _d !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (lf() && e.callbackNode !== n) return null;
		var r = Xu;
		return r = tt(e, e === Ju ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Nd(e, r, t), kf(e, Fe()), e.callbackNode != null && e.callbackNode === n ? Af.bind(null, e) : null);
	}
	function jf(e, t) {
		if (lf()) return null;
		Nd(e, t, !0);
	}
	function Mf() {
		bp(function() {
			qu & 6 ? je(Le, Df) : Of();
		});
	}
	function Nf() {
		if (wf === 0) {
			var e = Na;
			e === 0 && (e = Ze, Ze <<= 1, !(Ze & 261888) && (Ze = 256)), wf = e;
		}
		return wf;
	}
	function Pf(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : pn(e);
	}
	function Ff(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = Pf((i[vt] || null).action), o = r.submitter;
			o && (t = (t = o[vt] || null) ? Pf(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new Fn("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (wf !== 0) {
								var e = new FormData(i, o);
								Ks(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = new FormData(i, o), Ks(n, {
							pending: !0,
							data: e,
							method: i.method,
							action: a
						}, a, e));
					},
					currentTarget: i
				}]
			});
		}
	}
	for (var If = 0; If < li.length; If++) {
		var Lf = li[If];
		ui(Lf.toLowerCase(), "on" + (Lf[0].toUpperCase() + Lf.slice(1)));
	}
	ui(ti, "onAnimationEnd"), ui(ni, "onAnimationIteration"), ui(ri, "onAnimationStart"), ui("dblclick", "onDoubleClick"), ui("focusin", "onFocus"), ui("focusout", "onBlur"), ui(ii, "onTransitionRun"), ui(ai, "onTransitionStart"), ui(oi, "onTransitionCancel"), ui(si, "onTransitionEnd"), It("onMouseEnter", ["mouseout", "mouseover"]), It("onMouseLeave", ["mouseout", "mouseover"]), It("onPointerEnter", ["pointerout", "pointerover"]), It("onPointerLeave", ["pointerout", "pointerover"]), Ft("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ft("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ft("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), Ft("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ft("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ft("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var Rf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), zf = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rf));
	function Bf(e, t) {
		t = !!(t & 4);
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						hi(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						hi(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function $(e, t) {
		var n = t[bt];
		n === void 0 && (n = t[bt] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (Wf(t, e, 2, !1), n.add(r));
	}
	function Vf(e, t, n) {
		var r = 0;
		t && (r |= 4), Wf(n, e, r, t);
	}
	var Hf = "_reactListening" + Math.random().toString(36).slice(2);
	function Uf(e) {
		if (!e[Hf]) {
			e[Hf] = !0, Nt.forEach(function(t) {
				t !== "selectionchange" && (zf.has(t) || Vf(t, !1, e), Vf(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[Hf] || (t[Hf] = !0, Vf("selectionchange", !1, t));
		}
	}
	function Wf(e, t, n, r) {
		switch (Ch(t)) {
			case 2:
				var i = _h;
				break;
			case 8:
				i = vh;
				break;
			default: i = yh;
		}
		n = i.bind(null, t, n, e), i = void 0, !wn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function Gf(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var c = r.stateNode.containerInfo;
				if (c === i) break;
				if (s === 4) for (s = r.return; s !== null;) {
					var l = s.tag;
					if ((l === 3 || l === 4) && s.stateNode.containerInfo === i) return;
					s = s.return;
				}
				for (; c !== null;) {
					if (s = Dt(c), s === null) return;
					if (l = s.tag, l === 5 || l === 6 || l === 26 || l === 27) {
						r = a = s;
						continue a;
					}
					c = c.parentNode;
				}
			}
			r = r.return;
		}
		xn(function() {
			var r = a, i = gn(n), s = [];
			a: {
				var c = ci.get(e);
				if (c !== void 0) {
					var l = Fn, u = e;
					switch (e) {
						case "keypress": if (An(n) === 0) break a;
						case "keydown":
						case "keyup":
							l = Qn;
							break;
						case "focusin":
							u = "focus", l = Un;
							break;
						case "focusout":
							u = "blur", l = Un;
							break;
						case "beforeblur":
						case "afterblur":
							l = Un;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							l = Vn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							l = Hn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							l = tr;
							break;
						case ti:
						case ni:
						case ri:
							l = Wn;
							break;
						case si:
							l = nr;
							break;
						case "scroll":
						case "scrollend":
							l = Ln;
							break;
						case "wheel":
							l = rr;
							break;
						case "copy":
						case "cut":
						case "paste":
							l = Gn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							l = $n;
							break;
						case "submit":
							l = er;
							break;
						case "toggle":
						case "beforetoggle": l = ir;
					}
					var d = !!(t & 4), f = !d && (e === "scroll" || e === "scrollend"), p = d ? c === null ? null : c + "Capture" : c;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = Sn(m, p), g != null && d.push(Kf(m, g, h))), f) break;
						m = m.return;
					}
					0 < d.length && (c = new l(c, u, null, n, i), s.push({
						event: c,
						listeners: d
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (l = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", l && n !== hn && (u = n.relatedTarget || n.fromElement) && (Dt(u) || u[yt])) break a;
					(c || l) && (u = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? Dt(l) : null, l !== null && (f = o(l), d = l.tag, l !== f || d !== 5 && d !== 27 && d !== 6) && (l = null)) : (c = null, l = r), c !== l && (d = Vn, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (d = $n, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = c == null ? u : kt(c), h = l == null ? u : kt(l), u = new d(g, m + "leave", c, n, i), u.target = f, u.relatedTarget = h, g = null, Dt(i) === r && (d = new d(p, m + "enter", l, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, d = c && l ? E(c, l, Jf) : null, c !== null && Yf(s, u, c, d, !1), l !== null && f !== null && Yf(s, f, l, d, !0)));
				}
				a: {
					if (c = r ? kt(r) : window, l = c.nodeName && c.nodeName.toLowerCase(), l === "select" || l === "input" && c.type === "file") var _ = wr;
					else if (vr(c)) {
						if (Tr) _ = Pr;
						else {
							_ = Mr;
							var v = jr;
						}
					} else l = c.nodeName, !l || l.toLowerCase() !== "input" || c.type !== "checkbox" && c.type !== "radio" ? r && un(r.elementType) && (_ = wr) : _ = Nr;
					if (_ &&= _(e, r)) {
						yr(s, _, n, i);
						break a;
					}
					v && v(e, c, r);
				}
				switch (v = r ? kt(r) : window, e) {
					case "focusin":
						(vr(v) || v.contentEditable === "true") && (Gr = v, Kr = r, qr = null);
						break;
					case "focusout":
						qr = Kr = Gr = null;
						break;
					case "mousedown":
						Jr = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Jr = !1, Yr(s, n, i);
						break;
					case "selectionchange": if (Wr) break;
					case "keydown":
					case "keyup": Yr(s, n, i);
				}
				var y;
				if (or) b: {
					switch (e) {
						case "compositionstart":
							var b = "onCompositionStart";
							break b;
						case "compositionend":
							b = "onCompositionEnd";
							break b;
						case "compositionupdate":
							b = "onCompositionUpdate";
							break b;
					}
					b = void 0;
				}
				else mr ? fr(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
				b && (lr && n.locale !== "ko" && (mr || b !== "onCompositionStart" ? b === "onCompositionEnd" && mr && (y = kn()) : (En = i, Dn = "value" in En ? En.value : En.textContent, mr = !0)), v = qf(r, b), 0 < v.length && (b = new Kn(b, e, null, n, i), s.push({
					event: b,
					listeners: v
				}), y ? b.data = y : (y = pr(n), y !== null && (b.data = y)))), (y = cr ? hr(e, n) : gr(e, n)) && (b = qf(r, "onBeforeInput"), 0 < b.length && (v = new Kn("onBeforeInput", "beforeinput", null, n, i), s.push({
					event: v,
					listeners: b
				}), v.data = y)), Ff(s, e, r, n, i);
			}
			Bf(s, t);
		});
	}
	function Kf(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function qf(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = Sn(e, n), i != null && r.unshift(Kf(e, i, a)), i = Sn(e, t), i != null && r.push(Kf(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function Jf(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Yf(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = Sn(n, a), l != null && o.unshift(Kf(n, l, c))) : i || (l = Sn(n, a), l != null && o.push(Kf(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var Xf = /\r\n?/g, Zf = /\u0000|\uFFFD/g;
	function Qf(e) {
		return (typeof e == "string" ? e : "" + e).replace(Xf, "\n").replace(Zf, "");
	}
	function $f(e, t) {
		return t = Qf(t), Qf(e) === t;
	}
	function ep(e, t, n, r, a, o) {
		switch (n) {
			case "children":
				if (typeof r == "string") t === "body" || t === "textarea" && r === "" || on(e, r);
				else if (typeof r == "number" || typeof r == "bigint") t !== "body" && on(e, "" + r);
				else return;
				break;
			case "className":
				Wt(e, "class", r);
				break;
			case "tabIndex":
				Wt(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Wt(e, n, r);
				break;
			case "style":
				ln(e, r, o);
				return;
			case "data": if (t !== "object") {
				Wt(e, "data", r);
				break;
			}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || n !== "href") || r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = pn(r), e.setAttribute(n, r);
				break;
			case "action":
			case "formAction":
				if (typeof r == "function") {
					e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				}
				if (typeof o == "function" && (n === "formAction" ? (t !== "input" && ep(e, t, "name", a.name, a, null), ep(e, t, "formEncType", a.formEncType, a, null), ep(e, t, "formMethod", a.formMethod, a, null), ep(e, t, "formTarget", a.formTarget, a, null)) : (ep(e, t, "encType", a.encType, a, null), ep(e, t, "method", a.method, a, null), ep(e, t, "target", a.target, a, null))), r == null || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = pn(r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = mn);
				return;
			case "onScroll":
				r != null && $("scroll", e);
				return;
			case "onScrollEnd":
				r != null && $("scrollend", e);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						o?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "multiple":
				e.multiple = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "muted":
				e.muted = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
					e.removeAttribute("xlink:href");
					break;
				}
				n = pn(r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "credentialless":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
				break;
			case "capture":
			case "download":
				!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "rowSpan":
			case "start":
				r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
				break;
			case "popover":
				$("beforetoggle", e), $("toggle", e), Ut(e, "popover", r);
				break;
			case "xlinkActuate":
				Gt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				Gt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				Gt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				Gt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				Gt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				Gt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				Gt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				Gt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				Gt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				Ut(e, "is", r);
				break;
			case "innerText":
			case "textContent": return;
			default: if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") n = dn.get(n) || n, Ut(e, n, r);
			else return;
		}
		Vt = !0;
	}
	function tp(e, t, n, r, a, o) {
		switch (n) {
			case "style":
				ln(e, r, o);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						o?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "children":
				if (typeof r == "string") on(e, r);
				else if (typeof r == "number" || typeof r == "bigint") on(e, "" + r);
				else return;
				break;
			case "onScroll":
				r != null && $("scroll", e);
				return;
			case "onScrollEnd":
				r != null && $("scrollend", e);
				return;
			case "onClick":
				r != null && (e.onclick = mn);
				return;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": return;
			case "innerText":
			case "textContent": return;
			default:
				if (!Pt.hasOwnProperty(n)) a: {
					if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), o = n.slice(2, a ? n.length - 7 : void 0), t = e[vt] || null, t = t == null ? null : t[n], typeof t == "function" && e.removeEventListener(o, t, a), typeof r == "function")) {
						typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(o, r, a);
						break a;
					}
					Vt = !0, n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : Ut(e, n, r);
				}
				return;
		}
		Vt = !0;
	}
	function np(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				$("error", e), $("load", e);
				var r = !1, a = !1, o;
				for (o in n) if (n.hasOwnProperty(o)) {
					var s = n[o];
					if (s != null) switch (o) {
						case "src":
							r = !0;
							break;
						case "srcSet":
							a = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(i(137, t));
						default: ep(e, t, o, s, n, null);
					}
				}
				a && ep(e, t, "srcSet", n.srcSet, n, null), r && ep(e, t, "src", n.src, n, null);
				return;
			case "input":
				$("invalid", e);
				var c = o = s = a = null, l = null, u = null;
				for (r in n) if (n.hasOwnProperty(r)) {
					var d = n[r];
					if (d != null) switch (r) {
						case "name":
							a = d;
							break;
						case "type":
							s = d;
							break;
						case "checked":
							l = d;
							break;
						case "defaultChecked":
							u = d;
							break;
						case "value":
							o = d;
							break;
						case "defaultValue":
							c = d;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (d != null) throw Error(i(137, t));
							break;
						default: ep(e, t, r, d, n, null);
					}
				}
				en(e, o, c, l, u, s, a, !1);
				return;
			case "select":
				for (a in $("invalid", e), r = s = o = null, n) if (n.hasOwnProperty(a) && (c = n[a], c != null)) switch (a) {
					case "value":
						o = c;
						break;
					case "defaultValue":
						s = c;
						break;
					case "multiple": r = c;
					default: ep(e, t, a, c, n, null);
				}
				t = o, n = s, e.multiple = !!r, t == null ? n != null && nn(e, !!r, n, !0) : nn(e, !!r, t, !1);
				return;
			case "textarea":
				for (s in $("invalid", e), o = a = r = null, n) if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
					case "value":
						r = c;
						break;
					case "defaultValue":
						a = c;
						break;
					case "children":
						o = c;
						break;
					case "dangerouslySetInnerHTML":
						if (c != null) throw Error(i(91));
						break;
					default: ep(e, t, s, c, n, null);
				}
				an(e, r, a, o);
				return;
			case "option":
				for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
					case "selected":
						e.selected = r && typeof r != "function" && typeof r != "symbol";
						break;
					default: ep(e, t, l, r, n, null);
				}
				return;
			case "dialog":
				$("beforetoggle", e), $("toggle", e), $("cancel", e), $("close", e);
				break;
			case "iframe":
			case "object":
				$("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < Rf.length; r++) $(Rf[r], e);
				break;
			case "image":
				$("error", e), $("load", e);
				break;
			case "details":
				$("toggle", e);
				break;
			case "embed":
			case "source":
			case "link": $("error", e), $("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (u in n) if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(i(137, t));
					default: ep(e, t, u, r, n, null);
				}
				return;
			default: if (un(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && tp(e, t, d, r, n, void 0));
				return;
			}
		}
		for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && ep(e, t, c, r, n, null));
	}
	var rp = {};
	function ip(e, t, n, r) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var a = null, o = null, s = null, c = null, l = null, u = null, d = null;
				for (m in n) {
					var f = n[m];
					if (n.hasOwnProperty(m) && f != null) switch (m) {
						case "checked": break;
						case "value": break;
						case "defaultValue": l = f;
						default: r.hasOwnProperty(m) || ep(e, t, m, null, r, f);
					}
				}
				for (var p in r) {
					var m = r[p];
					if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
						case "type":
							m !== f && (Vt = !0), o = m;
							break;
						case "name":
							m !== f && (Vt = !0), a = m;
							break;
						case "checked":
							m !== f && (Vt = !0), u = m;
							break;
						case "defaultChecked":
							m !== f && (Vt = !0), d = m;
							break;
						case "value":
							m !== f && (Vt = !0), s = m;
							break;
						case "defaultValue":
							m !== f && (Vt = !0), c = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(i(137, t));
							break;
						default: m !== f && ep(e, t, p, m, r, f);
					}
				}
				$t(e, s, c, l, u, d, o, a);
				return;
			case "select":
				for (o in m = s = c = p = null, n) if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(o) || ep(e, t, o, null, r, l);
				}
				for (a in r) if (o = r[a], l = n[a], r.hasOwnProperty(a) && (o != null || l != null)) switch (a) {
					case "value":
						o !== l && (Vt = !0), p = o;
						break;
					case "defaultValue":
						o !== l && (Vt = !0), c = o;
						break;
					case "multiple": o !== l && (Vt = !0), s = o;
					default: o !== l && ep(e, t, a, o, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? nn(e, !!n, n ? [] : "", !1) : nn(e, !!n, t, !0)) : nn(e, !!n, p, !1);
				return;
			case "textarea":
				for (c in m = p = null, n) if (a = n[c], n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)) switch (c) {
					case "value": break;
					case "children": break;
					default: ep(e, t, c, null, r, a);
				}
				for (s in r) if (a = r[s], o = n[s], r.hasOwnProperty(s) && (a != null || o != null)) switch (s) {
					case "value":
						a !== o && (Vt = !0), p = a;
						break;
					case "defaultValue":
						a !== o && (Vt = !0), m = a;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (a != null) throw Error(i(91));
						break;
					default: a !== o && ep(e, t, s, a, r, o);
				}
				rn(e, p, m);
				return;
			case "option":
				for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
					case "selected":
						e.selected = !1;
						break;
					default: ep(e, t, h, null, r, p);
				}
				for (l in r) if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
					case "selected":
						p !== m && (Vt = !0), e.selected = p && typeof p != "function" && typeof p != "symbol";
						break;
					default: ep(e, t, l, p, r, m);
				}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && ep(e, t, g, null, r, p);
				for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (p != null) throw Error(i(137, t));
						break;
					default: ep(e, t, u, p, r, m);
				}
				return;
			default: if (un(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && tp(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || tp(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && ep(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || ep(e, t, f, p, r, m);
	}
	function ap(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function op() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && ap(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && ap(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
	}
	var sp = null, cp = null;
	function lp(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function up(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function dp(e, t) {
		if (e === 0) switch (t) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function fp(e, t, n, r) {
		return n = lp(n).createElement(e), n[_t] = r, n[vt] = t, np(n, e, t), jt(n), n;
	}
	function pp(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var mp = null;
	function hp() {
		var e = window.event;
		return e && e.type === "popstate" ? e !== mp && (mp = e, !0) : (mp = null, !1);
	}
	var gp = typeof setTimeout == "function" ? setTimeout : void 0, _p = typeof clearTimeout == "function" ? clearTimeout : void 0, vp = typeof Promise == "function" ? Promise : void 0, yp = typeof requestAnimationFrame == "function" ? requestAnimationFrame : gp, bp = typeof queueMicrotask == "function" ? queueMicrotask : vp === void 0 ? gp : function(e) {
		return vp.resolve(null).then(e).catch(xp);
	};
	function xp(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Sp(e) {
		return e === "head";
	}
	function Cp(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) {
				if (n = i.data, n === "/$" || n === "/&") {
					if (r === 0) {
						e.removeChild(i), Hh(t);
						return;
					}
					r--;
				} else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") r++;
				else if (n === "html") _m(e.ownerDocument.documentElement);
				else if (n === "head") {
					n = e.ownerDocument.head, _m(n);
					for (var a = n.firstChild; a;) {
						var o = a.nextSibling, s = a.nodeName;
						a[wt] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
					}
				} else n === "body" && _m(e.ownerDocument.body);
			}
			n = i;
		} while (n);
		Hh(t);
	}
	function wp(e, t) {
		var n = e;
		e = 0;
		do {
			var r = n.nextSibling;
			if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) {
				if (n = r.data, n === "/$") {
					if (e === 0) break;
					e--;
				} else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
			}
			n = r;
		} while (n);
	}
	function Tp(e, t, n) {
		if (t = CSS.escape(t) === t ? t : "r-" + btoa(t).replace(/=/g, ""), e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === "inline") {
			if (t = e.getClientRects(), t.length === 1) var r = 1;
			else for (var i = r = 0; i < t.length; i++) {
				var a = t[i];
				0 < a.width && 0 < a.height && r++;
			}
			r === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom);
		}
	}
	function Ep(e, t) {
		e = e.style, t = t.style;
		var n = t == null ? null : t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null;
		e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t == null ? null : t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n == null ? (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t) : e.margin = n));
	}
	function Dp(e, t, n) {
		return n = n.ownerDocument.defaultView, {
			rect: e,
			abs: t.position === "absolute" || t.position === "fixed",
			clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
			view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
		};
	}
	function Op(e) {
		return Dp(e.getBoundingClientRect(), getComputedStyle(e), e);
	}
	function kp(e) {
		var t = e.getBoundingClientRect();
		t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
		var n = getComputedStyle(e);
		return Dp(t, n, e);
	}
	function Ap(e) {
		return e.documentElement.clientHeight;
	}
	function jp(e) {
		this.addEventListener("load", e), this.addEventListener("error", e);
	}
	function Mp(e, t, n, r, i, a, o, s, c) {
		var l = t.nodeType === 9 ? t : t.ownerDocument;
		try {
			var u = l.startViewTransition({
				update: function() {
					var t = l.defaultView, n = t.navigation && t.navigation.transition, o = l.fonts.status;
					r();
					var s = [];
					if (o === "loaded" && (Ap(l), l.fonts.status === "loading" && s.push(l.fonts.ready)), o = s.length, e !== null) for (var c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
						var f = c[d];
						if (!f.complete) {
							var p = f.getBoundingClientRect();
							if (0 < p.bottom && 0 < p.right && p.top < t.innerHeight && p.left < t.innerWidth) {
								if (u += Xm(f), u > $m) {
									s.length = o;
									break;
								}
								f = new Promise(jp.bind(f)), s.push(f);
							}
						}
					}
					if (0 < s.length) return t = Promise.race([Promise.all(s), new Promise(function(e) {
						return setTimeout(e, 500);
					})]).then(i, i), (n ? Promise.allSettled([n.finished, t]) : t).then(a, a);
					if (i(), n) return n.finished.then(a, a);
					a();
				},
				types: n
			});
			l.__reactViewTransition = u;
			var d = [];
			return u.ready.then(function() {
				for (var e = l.documentElement.getAnimations({ subtree: !0 }), t = 0; t < e.length; t++) {
					var n = e[t], r = n.effect, i = r.pseudoElement;
					if (i != null && i.startsWith("::view-transition")) {
						d.push(n), n = r.getKeyframes();
						for (var a = i = void 0, s = !0, c = 0; c < n.length; c++) {
							var u = n[c], f = u.width;
							if (i === void 0) i = f;
							else if (i !== f) {
								s = !1;
								break;
							}
							if (f = u.height, a === void 0) a = f;
							else if (a !== f) {
								s = !1;
								break;
							}
							delete u.width, delete u.height, u.transform === "none" && delete u.transform;
						}
						s && i !== void 0 && a !== void 0 && (r.setKeyframes(n), s = getComputedStyle(r.target, r.pseudoElement), s.width !== i || s.height !== a) && (s = n[0], s.width = i, s.height = a, s = n[n.length - 1], s.width = i, s.height = a, r.setKeyframes(n));
					}
				}
				o();
			}, function(e) {
				l.__reactViewTransition === u && (l.__reactViewTransition = null);
				try {
					if (typeof e == "object" && e) switch (e.name) {
						case "InvalidStateError": (e.message === "View transition was skipped because document visibility state is hidden." || e.message === "Skipping view transition because document visibility state has become hidden." || e.message === "Skipping view transition because viewport size changed." || e.message === "Transition was aborted because of invalid state") && (e = null);
					}
					e !== null && c(e);
				} finally {
					r(), i(), o();
				}
			}), u.finished.finally(function() {
				for (var e = 0; e < d.length; e++) d[e].cancel();
				l.__reactViewTransition === u && (l.__reactViewTransition = null), s();
			}), u;
		} catch {
			return r(), i(), o(), null;
		}
	}
	function Np(e, t) {
		this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
	}
	Np.prototype.animate = function(e, t) {
		return t = typeof t == "number" ? { duration: t } : D({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
	}, Np.prototype.getAnimations = function() {
		for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), r = [], i = 0; i < n.length; i++) {
			var a = n[i].effect;
			a !== null && a.target === e && a.pseudoElement === t && r.push(n[i]);
		}
		return r;
	}, Np.prototype.getComputedStyle = function() {
		return getComputedStyle(this._scope, this._selector);
	};
	function Pp(e) {
		return {
			name: e,
			group: new Np("group", e),
			imagePair: new Np("image-pair", e),
			old: new Np("old", e),
			new: new Np("new", e)
		};
	}
	function Fp(e) {
		this._fragmentFiber = e, this._observers = this._eventListeners = null;
	}
	Fp.prototype.addEventListener = function(e, t, n) {
		var r = null, i = null;
		if (!(n != null && typeof n != "boolean" && (r = n.signal || null, r !== null && r.aborted))) {
			this._eventListeners === null && (this._eventListeners = []);
			var a = this._eventListeners;
			if (Bp(a, e, t, n) === -1) {
				var o = this, s = t;
				n != null && typeof n != "boolean" && !0 === n.once && (s = function(r) {
					o.removeEventListener(e, t, n), typeof t == "function" ? t.call(this, r) : t.handleEvent(r);
				}), r !== null && (i = o.removeEventListener.bind(o, e, t, n), r.addEventListener("abort", i, { once: !0 }), i = r.removeEventListener.bind(r, "abort", i)), r = Rp(n), a.push({
					type: e,
					listener: t,
					optionsOrUseCapture: n,
					attachedListener: s,
					cleanup: i
				}), h(this._fragmentFiber.child, !1, Ip, e, s, r);
			}
			this._eventListeners = a;
		}
	};
	function Ip(e, t, n, r) {
		return b(e).addEventListener(t, n, r), !1;
	}
	Fp.prototype.removeEventListener = function(e, t, n) {
		var r = this._eventListeners;
		if (r !== null && (t = Bp(r, e, t, n), t !== -1)) {
			var i = r[t];
			n = i.attachedListener;
			var a = i.cleanup;
			i = Rp(i.optionsOrUseCapture), h(this._fragmentFiber.child, !1, Lp, e, n, i), r.splice(t, 1), a !== null && a();
		}
	};
	function Lp(e, t, n, r) {
		return b(e).removeEventListener(t, n, r), !1;
	}
	function Rp(e) {
		return e != null && typeof e != "boolean" && (!0 === e.once || e.signal instanceof AbortSignal) ? {
			capture: e.capture,
			passive: e.passive
		} : e;
	}
	function zp(e) {
		return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
	}
	function Bp(e, t, n, r) {
		if (e.length === 0) return -1;
		r = zp(r);
		for (var i = 0; i < e.length; i++) {
			var a = e[i];
			if (a.type === t && a.listener === n && zp(a.optionsOrUseCapture) === r) return i;
		}
		return -1;
	}
	Fp.prototype.dispatchEvent = function(e) {
		var t = g(this._fragmentFiber);
		if (t === null) return !0;
		t = b(t);
		var n = this._eventListeners;
		if (n !== null && 0 < n.length || !e.bubbles) {
			var r = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
			if (n) for (var i = 0; i < n.length; i++) {
				var a = n[i];
				r.addEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
			}
			if (t.appendChild(r), e = r.dispatchEvent(e), n) for (i = 0; i < n.length; i++) a = n[i], r.removeEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
			return t.removeChild(r), e;
		}
		return t.dispatchEvent(e);
	}, Fp.prototype.focus = function(e) {
		h(this._fragmentFiber.child, !0, Vp, e, void 0, void 0);
	};
	function Vp(e, t) {
		return e.tag !== 6 && (e = b(e), pm(e, t));
	}
	Fp.prototype.focusLast = function(e) {
		var t = [];
		h(this._fragmentFiber.child, !0, Hp, t, void 0, void 0);
		for (var n = t.length - 1; 0 <= n && !Vp(t[n], e); n--);
	};
	function Hp(e, t) {
		return t.push(e), !1;
	}
	Fp.prototype.blur = function() {
		var e = g(this._fragmentFiber);
		e !== null && (e = b(e), e = lp(e).activeElement, e !== null && h(this._fragmentFiber.child, !1, Up, e, void 0, void 0));
	};
	function Up(e, t) {
		return e.tag !== 6 && (e = b(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
	}
	Fp.prototype.observeUsing = function(e) {
		this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), h(this._fragmentFiber.child, !1, Wp, e, void 0, void 0);
	};
	function Wp(e, t) {
		return e.tag === 6 || (e = b(e), t.observe(e)), !1;
	}
	Fp.prototype.unobserveUsing = function(e) {
		var t = this._observers;
		if (t !== null && t.has(e)) {
			t.delete(e), h(this._fragmentFiber.child, !1, Gp, e, void 0, void 0);
			for (var n = t = 0; n < Kp.length; n++) {
				var r = Kp[n];
				r.fragmentInstance === this && r.observer === e ? e.unobserve(r.instance) : Kp[t++] = r;
			}
			Kp.length = t;
		}
	};
	function Gp(e, t) {
		return e.tag === 6 || (e = b(e), t.unobserve(e)), !1;
	}
	var Kp = [], qp = !1;
	function Jp(e, t, n) {
		Kp.push({
			fragmentInstance: e,
			observer: t,
			instance: n
		}), qp || (qp = !0, mm(function() {
			qp = !1;
			var e = Kp;
			Kp = [];
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				n.observer.unobserve(n.instance);
			}
		}));
	}
	Fp.prototype.getClientRects = function() {
		var e = [];
		return h(this._fragmentFiber.child, !1, Yp, e, void 0, void 0), e;
	};
	function Yp(e, t) {
		if (e.tag === 6) {
			e = e.stateNode;
			var n = e.ownerDocument.createRange();
			n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
		} else e = b(e), t.push.apply(t, e.getClientRects());
		return !1;
	}
	Fp.prototype.getRootNode = function(e) {
		var t = g(this._fragmentFiber);
		return t === null ? this : b(t).getRootNode(e);
	}, Fp.prototype.compareDocumentPosition = function(e) {
		var t = g(this._fragmentFiber);
		if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		var n = [];
		h(this._fragmentFiber.child, !1, Hp, n, void 0, void 0);
		var r = b(t);
		if (n.length === 0) {
			if (n = r, _(this._fragmentFiber)) {
				a: {
					for (t = this._fragmentFiber.return; t !== null;) {
						if (t.tag === 4) {
							t = t.stateNode.containerInfo;
							break a;
						}
						if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
						t = t.return;
					}
					t = null;
				}
				t != null && (n = t);
			}
			t = this._fragmentFiber;
			var i = r = n.compareDocumentPosition(e);
			return n === e ? i = Node.DOCUMENT_POSITION_CONTAINS : r & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = v(t)[1], n === null ? i = Node.DOCUMENT_POSITION_PRECEDING : (e = b(n).compareDocumentPosition(e), i = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
		}
		t = b(n[0]), i = b(n[n.length - 1]);
		var a = _(this._fragmentFiber) ? t.parentElement : r;
		if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		r = a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, a = a.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY;
		var o = t.compareDocumentPosition(e), s = i.compareDocumentPosition(e), c = o & Node.DOCUMENT_POSITION_CONTAINED_BY || s & Node.DOCUMENT_POSITION_CONTAINED_BY;
		return s = r && a && o & Node.DOCUMENT_POSITION_FOLLOWING && s & Node.DOCUMENT_POSITION_PRECEDING, t = r && t === e || a && i === e || c || s ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r && t === e || !a && i === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Xp(t, this._fragmentFiber, n[0], n[n.length - 1], e) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
	};
	function Xp(e, t, n, r, i) {
		var a = Dt(i);
		if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
			if (n = !!a) a: {
				for (; a !== null;) {
					if (a.tag === 7 && (a === t || a.alternate === t)) {
						n = !0;
						break a;
					}
					a = a.return;
				}
				n = !1;
			}
			return n;
		}
		if (e & Node.DOCUMENT_POSITION_CONTAINS) {
			if (a === null) return a = i.ownerDocument, i === a || i === a.documentElement || i === a.body;
			a: {
				for (a = t, t = g(t); a !== null;) {
					if (!(a.tag !== 5 && a.tag !== 3 && a.tag !== 27 || a !== t && a.alternate !== t)) {
						a = !0;
						break a;
					}
					a = a.return;
				}
				a = !1;
			}
			return a;
		}
		return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!a) && !(t = a === n) && (t = E(n, a, T), t === null ? t = !1 : (h(t, !0, C, a, n), a = x, x = null, t = a !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!a) && !(t = a === r) && (t = E(r, a, T), t === null ? t = !1 : (h(t, !0, w, a, r), a = x, S = x = null, t = a !== null)), t) : !1;
	}
	function Zp(e, t) {
		var n = e.ownerDocument.createRange();
		n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(window.scrollX + e.left, t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight);
	}
	Fp.prototype.scrollIntoView = function(e) {
		if (typeof e == "object") throw Error(i(566));
		var t = [];
		h(this._fragmentFiber.child, !1, Hp, t, void 0, void 0);
		var n = !1 !== e;
		if (t.length === 0) {
			var r = v(this._fragmentFiber);
			if (r = n ? r[1] || r[0] || g(this._fragmentFiber) : r[0] || r[1], r === null) return;
			if (r.tag === 6) {
				e = b(r), Zp(e, n);
				return;
			}
			if (r = b(r), r.nodeType !== 9) {
				if (r.nodeType === 11) {
					n = "host" in r ? r.host : null, n !== null && n.scrollIntoView(e);
					return;
				}
				r.scrollIntoView(e);
			}
		}
		for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
			var a = t[r];
			a.tag === 6 ? (a = b(a), Zp(a, n)) : b(a).scrollIntoView(e), r += n ? -1 : 1;
		}
	};
	function Qp(e, t) {
		return e = b(e), $p(e, t), !1;
	}
	function $p(e, t) {
		e.reactFragments ??= /* @__PURE__ */ new Set(), e.reactFragments.add(t);
	}
	function em(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.addEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			for (var r = 0, i = 0; i < Kp.length; i++) {
				var a = Kp[i];
				(a.fragmentInstance !== t || a.observer !== n || a.instance !== e) && (Kp[r++] = a);
			}
			Kp.length = r, n.observe(e);
		}), $p(e, t));
	}
	function tm(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.removeEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			typeof n.rootMargin == "string" ? Jp(t, n, e) : n.unobserve(e);
		}), e.reactFragments != null && e.reactFragments.delete(t));
	}
	function nm(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					nm(n), Et(n);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(n);
		}
	}
	function rm(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var i = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (!r) {
				if (t === "input" && e.type === "hidden") {
					var a = i.name == null ? null : "" + i.name;
					if (i.type === "hidden" && e.getAttribute("name") === a) return e;
				} else return e;
			} else if (!e[wt]) switch (t) {
				case "meta":
					if (!e.hasAttribute("itemprop")) break;
					return e;
				case "link":
					if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
					return e;
				case "style":
					if (e.hasAttribute("data-precedence")) break;
					return e;
				case "script":
					if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
					return e;
				default: return e;
			}
			if (e = lm(e.nextSibling), e === null) break;
		}
		return null;
	}
	function im(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = lm(e.nextSibling), e === null)) return null;
		return e;
	}
	function am(e, t) {
		for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = lm(e.nextSibling), e === null)) return null;
		return e;
	}
	function om(e) {
		return e.data === "$?" || e.data === "$~";
	}
	function sm(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
	}
	function cm(e, t) {
		var n = e.ownerDocument;
		if (e.data === "$~") e._reactRetry = t;
		else if (e.data !== "$?" || n.readyState !== "loading") t();
		else {
			var r = function() {
				t(), n.removeEventListener("DOMContentLoaded", r);
			};
			n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
		}
	}
	function lm(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
				if (t === "/$" || t === "/&") return null;
			}
		}
		return e;
	}
	var um = null;
	function dm(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "/$" || n === "/&") {
					if (t === 0) return lm(e.nextSibling);
					t--;
				} else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function fm(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
					if (t === 0) return e;
					t--;
				} else n !== "/$" && n !== "/&" || t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function pm(e, t) {
		function n() {
			r = !0;
		}
		if (e.ownerDocument.activeElement === e) return !0;
		var r = !1;
		try {
			e.ownerDocument.addEventListener("focus", n, !0), (e.focus || HTMLElement.prototype.focus).call(e, t);
		} finally {
			e.ownerDocument.removeEventListener("focus", n, !0);
		}
		return r;
	}
	function mm(e) {
		yp(function() {
			yp(function(t) {
				return e(t);
			});
		});
	}
	function hm(e, t, n) {
		switch (t = lp(n), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(i(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(i(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(i(454));
				return e;
			default: throw Error(i(451));
		}
	}
	function gm(e, t, n) {
		for (var r in n) {
			var i = n[r];
			n.hasOwnProperty(r) && i != null && ep(e, t, r, null, rp, i);
		}
		n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === mn && (e.onclick = null), Et(e);
	}
	function _m(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		Et(e);
	}
	var vm = /* @__PURE__ */ new Map(), ym = /* @__PURE__ */ new Set();
	function bm(e) {
		if (typeof e.getRootNode == "function") {
			var t = e.getRootNode();
			if (t.nodeType === 9 || t.nodeType === 11) return t;
		}
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	var xm = R.d;
	R.d = {
		f: Sm,
		r: Cm,
		D: Em,
		C: Dm,
		L: Om,
		m: km,
		X: jm,
		S: Am,
		M: Mm
	};
	function Sm() {
		var e = xm.f(), t = Ld();
		return e || t;
	}
	function Cm(e) {
		var t = Ot(e);
		t !== null && t.tag === 5 && t.type === "form" ? Js(t) : xm.r(e);
	}
	var wm = typeof document > "u" ? null : document;
	function Tm(e, t, n) {
		var r = wm;
		if (r && typeof t == "string" && t) {
			var i = Qt(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), ym.has(i) || (ym.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), np(t, "link", e), jt(t), r.head.appendChild(t)));
		}
	}
	function Em(e) {
		xm.D(e), Tm("dns-prefetch", e, null);
	}
	function Dm(e, t) {
		xm.C(e, t), Tm("preconnect", e, t);
	}
	function Om(e, t, n) {
		xm.L(e, t, n);
		var r = wm;
		if (r && e && t) {
			var i = "link[rel=\"preload\"][as=\"" + Qt(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + Qt(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + Qt(n.imageSizes) + "\"]")) : i += "[href=\"" + Qt(e) + "\"]";
			var a = i;
			switch (t) {
				case "style":
					a = Pm(e);
					break;
				case "script": a = Rm(e);
			}
			if (!(vm.has(a) || (e = D({
				rel: "preload",
				href: t === "image" && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), vm.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(Fm(a)) || t === "script" && r.querySelector(zm(a))))) {
				var o = r.createElement("link");
				np(o, "link", e), t === "style" && (o[Tt] = !0, o.onload = o.onerror = function() {
					Mt(o);
				}), jt(o), r.head.appendChild(o);
			}
		}
	}
	function km(e, t) {
		xm.m(e, t);
		var n = wm;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + Qt(r) + "\"][href=\"" + Qt(e) + "\"]", a = i;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": a = Rm(e);
			}
			if (!vm.has(a) && (e = D({
				rel: "modulepreload",
				href: e
			}, t), vm.set(a, e), n.querySelector(i) === null)) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (n.querySelector(zm(a))) return;
				}
				r = n.createElement("link"), np(r, "link", e), jt(r), n.head.appendChild(r);
			}
		}
	}
	function Am(e, t, n) {
		xm.S(e, t, n);
		var r = wm;
		if (r && e) {
			var i = At(r).hoistableStyles, a = Pm(e);
			t ||= "default";
			var o = i.get(a);
			if (!o) {
				var s = {
					loading: 0,
					preload: null
				};
				if (o = r.querySelector(Fm(a))) s.loading = 5;
				else {
					e = D({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n), (n = vm.get(a)) && Hm(e, n);
					var c = o = r.createElement("link");
					jt(c), np(c, "link", e), c._p = new Promise(function(e, t) {
						c.onload = e, c.onerror = t;
					}), c.addEventListener("load", function() {
						s.loading |= 1;
					}), c.addEventListener("error", function() {
						s.loading |= 2;
					}), s.loading |= 4, Vm(o, t, r);
				}
				o = {
					type: "stylesheet",
					instance: o,
					count: 1,
					state: s
				}, i.set(a, o);
			}
		}
	}
	function jm(e, t) {
		xm.X(e, t);
		var n = wm;
		if (n && e) {
			var r = At(n).hoistableScripts, i = Rm(e), a = r.get(i);
			a || (a = n.querySelector(zm(i)), a || (e = D({
				src: e,
				async: !0
			}, t), (t = vm.get(i)) && Um(e, t), a = n.createElement("script"), jt(a), np(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Mm(e, t) {
		xm.M(e, t);
		var n = wm;
		if (n && e) {
			var r = At(n).hoistableScripts, i = Rm(e), a = r.get(i);
			a || (a = n.querySelector(zm(i)), a || (e = D({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = vm.get(i)) && Um(e, t), a = n.createElement("script"), jt(a), np(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Nm(e, t, n, r) {
		var a = (a = ye.current) ? bm(a) : null;
		if (!a) throw Error(i(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Pm(n.href), t = At(a).hoistableStyles, r = t.get(n), r || (r = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
					e = Pm(n.href);
					var o = At(a).hoistableStyles, s = o.get(e);
					if (s || (a = a.ownerDocument || a, s = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, o.set(e, s), (o = a.querySelector(Fm(e))) ? o._p || (s.instance = o, s.state.loading = 5) : (o = vm.get(e), o || (o = {
						rel: "preload",
						as: "style",
						href: n.href,
						crossOrigin: n.crossOrigin,
						integrity: n.integrity,
						media: n.media,
						hrefLang: n.hrefLang,
						referrerPolicy: n.referrerPolicy
					}, vm.set(e, o)), Lm(a, e, o, s.state))), t && r === null) throw Error(i(528, ""));
					return s;
				}
				if (t && r !== null) throw Error(i(529, ""));
				return null;
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Rm(n), t = At(a).hoistableScripts, r = t.get(n), r || (r = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(i(444, e));
		}
	}
	function Pm(e) {
		return "href=\"" + Qt(e) + "\"";
	}
	function Fm(e) {
		return "link[rel=\"stylesheet\"][" + e + "]";
	}
	function Im(e) {
		return D({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		});
	}
	function Lm(e, t, n, r) {
		if (t = e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]")) {
			if (!0 !== t[Tt]) {
				r.loading = 1;
				return;
			}
		} else t = e.createElement("link"), t[Tt] = !0, t.onload = t.onerror = Mt.bind(null, t), np(t, "link", n), jt(t), e.head.appendChild(t);
		r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		});
	}
	function Rm(e) {
		return "[src=\"" + Qt(e) + "\"]";
	}
	function zm(e) {
		return "script[async]" + e;
	}
	function Bm(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + Qt(n.href) + "\"]");
				if (r) return t.instance = r, jt(r), r;
				var a = D({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), jt(r), np(r, "style", a), Vm(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				a = Pm(n.href);
				var o = e.querySelector(Fm(a));
				if (o) return t.state.loading |= 4, t.instance = o, jt(o), o;
				r = Im(n), (a = vm.get(a)) && Hm(r, a), o = (e.ownerDocument || e).createElement("link"), jt(o);
				var s = o;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), np(o, "link", r), t.state.loading |= 4, Vm(o, n.precedence, e), t.instance = o;
			case "script": return o = Rm(n.src), (a = e.querySelector(zm(o))) ? (t.instance = a, jt(a), a) : (r = n, (a = vm.get(o)) && (r = D({}, n), Um(r, a)), e = e.ownerDocument || e, a = e.createElement("script"), jt(a), np(a, "link", r), e.head.appendChild(a), t.instance = a);
			case "void": return null;
			default: throw Error(i(443, t.type));
		}
		else t.type === "stylesheet" && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Vm(r, n.precedence, e));
		return t.instance;
	}
	function Vm(e, t, n) {
		for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
			var s = r[o];
			if (s.dataset.precedence === t) a = s;
			else if (a !== i) break;
		}
		a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
	}
	function Hm(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function Um(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var Wm = null;
	function Gm(e, t, n) {
		if (Wm === null) {
			var r = /* @__PURE__ */ new Map(), i = Wm = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = Wm, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[wt] || a[_t] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
				var o = a.getAttribute(t) || "";
				o = e + o;
				var s = r.get(o);
				s ? s.push(a) : r.set(o, [a]);
			}
		}
		return r;
	}
	function Km(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
	}
	function qm(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title": return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				switch (t.rel) {
					case "stylesheet": return e = t.disabled, typeof t.precedence == "string" && e == null;
					default: return !0;
				}
			case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
		}
		return !1;
	}
	function Jm(e, t) {
		return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
	}
	function Ym(e) {
		return !(e.type === "stylesheet" && !(e.state.loading & 3));
	}
	function Xm(e) {
		return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * .25;
	}
	function Zm(e, t) {
		typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Xm(t), e.suspenseyImages.push(t)), e = rh.bind(e), t.decode().then(e, e));
	}
	function Qm(e, t, n, r) {
		if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
			if (n.instance === null) {
				var i = Pm(r.href), a = t.querySelector(Fm(i));
				if (a) {
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = nh.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, jt(a);
					return;
				}
				a = t.ownerDocument || t, r = Im(r), (i = vm.get(i)) && Hm(r, i), a = a.createElement("link"), jt(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), np(a, "link", r), n.instance = a;
			}
			e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = nh.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
		}
	}
	var $m = 0;
	function eh(e, t) {
		return e.stylesheets && e.count === 0 && ah(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
			var r = setTimeout(function() {
				if (e.stylesheets && ah(e, e.stylesheets), e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, 6e4 + t);
			0 < e.imgBytes && $m === 0 && ($m = 62500 * op());
			var i = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ah(e, e.stylesheets), e.unsuspend)) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, (e.imgBytes > $m ? 50 : 800) + t);
			return e.unsuspend = n, function() {
				e.unsuspend = null, clearTimeout(r), clearTimeout(i);
			};
		} : null;
	}
	function th(e) {
		if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
			if (e.stylesheets) ah(e, e.stylesheets);
			else if (e.unsuspend) {
				var t = e.unsuspend;
				e.unsuspend = null, t();
			}
		}
	}
	function nh() {
		this.count--, th(this);
	}
	function rh() {
		this.imgCount--, th(this);
	}
	var ih = null;
	function ah(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, ih = /* @__PURE__ */ new Map(), t.forEach(oh, e), ih = null, nh.call(e));
	}
	function oh(e, t) {
		if (!(t.state.loading & 4)) {
			var n = ih.get(e);
			if (n) var r = n.get(null);
			else {
				n = /* @__PURE__ */ new Map(), ih.set(e, n);
				for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
					var o = i[a];
					(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
				}
				r && n.set(null, r);
			}
			i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = nh.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
		}
	}
	var sh = {
		$$typeof: P,
		Provider: null,
		Consumer: null,
		_currentValue: z,
		_currentValue2: z,
		_threadCount: 0
	};
	function ch(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ot(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ot(0), this.hiddenUpdates = ot(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function lh(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new ch(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = Di(3, null, null, t), e.current = a, a.stateNode = e, t = Da(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, ao(a), e;
	}
	function uh(e) {
		return e ? (e = Ti, e) : Ti;
	}
	function dh(e, t, n, r, i, a) {
		i = uh(i), r.context === null ? r.context = i : r.pendingContext = i, r = so(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = co(e, r, t), n !== null && (Md(n, e, t), lo(n, e, t));
	}
	function fh(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function ph(e, t) {
		fh(e, t), (e = e.alternate) && fh(e, t);
	}
	function mh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = Si(e, 67108864);
			t !== null && Md(t, e, 67108864), ph(e, 67108864);
		}
	}
	function hh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = kd();
			t = ft(t);
			var n = Si(e, t);
			n !== null && Md(n, e, t), ph(e, t);
		}
	}
	var gh = !0;
	function _h(e, t, n, r) {
		var i = L.T;
		L.T = null;
		var a = R.p;
		try {
			R.p = 2, yh(e, t, n, r);
		} finally {
			R.p = a, L.T = i;
		}
	}
	function vh(e, t, n, r) {
		var i = L.T;
		L.T = null;
		var a = R.p;
		try {
			R.p = 8, yh(e, t, n, r);
		} finally {
			R.p = a, L.T = i;
		}
	}
	function yh(e, t, n, r) {
		if (gh) {
			var i = bh(r);
			if (i === null) Gf(e, t, r, xh, n), Mh(e, r);
			else if (Ph(i, e, t, n, r)) r.stopPropagation();
			else if (Mh(e, r), t & 4 && -1 < jh.indexOf(e)) {
				for (; i !== null;) {
					var a = Ot(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = et(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - qe(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									Tf(a), !(qu & 6) && (md = Fe() + 500, Ef(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = Si(a, 2), s !== null && Md(s, a, 2), Ld(), ph(a, 2);
					}
					if (a = bh(r), a === null && Gf(e, t, r, xh, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else Gf(e, t, r, null, n);
		}
	}
	function bh(e) {
		return e = gn(e), Sh(e);
	}
	var xh = null;
	function Sh(e) {
		if (xh = null, e = Dt(e), e !== null) {
			var t = o(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (e = s(t), e !== null) return e;
					e = null;
				} else if (n === 31) {
					if (e = c(t), e !== null) return e;
					e = null;
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return xh = e, null;
	}
	function Ch(e) {
		switch (e) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "fullscreenerror":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "resize":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 8;
			case "message": switch (Ie()) {
				case Le: return 2;
				case Re: return 8;
				case ze:
				case Be: return 32;
				case Ve: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var wh = !1, Th = null, Eh = null, Dh = null, Oh = /* @__PURE__ */ new Map(), kh = /* @__PURE__ */ new Map(), Ah = [], jh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function Mh(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				Th = null;
				break;
			case "dragenter":
			case "dragleave":
				Eh = null;
				break;
			case "mouseover":
			case "mouseout":
				Dh = null;
				break;
			case "pointerover":
			case "pointerout":
				Oh.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": kh.delete(t.pointerId);
		}
	}
	function Nh(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = Ot(t), t !== null && mh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Ph(e, t, n, r, i) {
		switch (t) {
			case "focusin": return Th = Nh(Th, e, t, n, r, i), !0;
			case "dragenter": return Eh = Nh(Eh, e, t, n, r, i), !0;
			case "mouseover": return Dh = Nh(Dh, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return Oh.set(a, Nh(Oh.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, kh.set(a, Nh(kh.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function Fh(e) {
		var t = Dt(e.target);
		if (t !== null) {
			var n = o(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = s(n), t !== null) {
						e.blockedOn = t, ht(e.priority, function() {
							hh(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = c(n), t !== null) {
						e.blockedOn = t, ht(e.priority, function() {
							hh(n);
						});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function Ih(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = bh(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				hn = r, n.target.dispatchEvent(r), hn = null;
			} else return t = Ot(n), t !== null && mh(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function Lh(e, t, n) {
		Ih(e) && n.delete(t);
	}
	function Rh() {
		wh = !1, Th !== null && Ih(Th) && (Th = null), Eh !== null && Ih(Eh) && (Eh = null), Dh !== null && Ih(Dh) && (Dh = null), Oh.forEach(Lh), kh.forEach(Lh);
	}
	function zh(e, n) {
		e.blockedOn === n && (e.blockedOn = null, wh || (wh = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, Rh)));
	}
	var Bh = null;
	function Vh(e) {
		Bh !== e && (Bh = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
			Bh === e && (Bh = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t], r = e[t + 1], i = e[t + 2];
				if (typeof r != "function") {
					if (Sh(r || n) === null) continue;
					break;
				}
				var a = Ot(n);
				a !== null && (e.splice(t, 3), t -= 3, Ks(a, {
					pending: !0,
					data: i,
					method: n.method,
					action: r
				}, r, i));
			}
		}));
	}
	function Hh(e) {
		function t(t) {
			return zh(t, e);
		}
		Th !== null && zh(Th, e), Eh !== null && zh(Eh, e), Dh !== null && zh(Dh, e), Oh.forEach(t), kh.forEach(t);
		for (var n = 0; n < Ah.length; n++) {
			var r = Ah[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < Ah.length && (n = Ah[0], n.blockedOn === null);) Fh(n), n.blockedOn === null && Ah.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
			var i = n[r], a = n[r + 1], o = i[vt] || null;
			if (typeof a == "function") o || Vh(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[vt] || null) s = o.formAction;
					else if (Sh(i) !== null) continue;
				} else s = o.action;
				typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Vh(n);
			}
		}
	}
	function Uh() {
		function e(e) {
			e.canIntercept && e.info === "react-transition" && e.intercept({
				handler: function() {
					return new Promise(function(e) {
						return i = e;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function t() {
			i !== null && (i(), i = null), r || setTimeout(n, 20);
		}
		function n() {
			if (!r && !navigation.transition) {
				var e = navigation.currentEntry;
				e && e.url != null && navigation.navigate(e.url, {
					state: e.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if (typeof navigation == "object") {
			var r = !1, i = null;
			return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
				r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
			};
		}
	}
	function Wh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.render = Wh.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(i(409));
		var n = t.current;
		dh(n, kd(), e, t, null, null);
	}, Gh.prototype.unmount = Wh.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			dh(e.current, 2, null, e, null, null), Ld(), t[yt] = null;
		}
	};
	function Gh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = mt();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < Ah.length && t !== 0 && t < Ah[n].priority; n++);
			Ah.splice(n, 0, e), n === 0 && Fh(e);
		}
	};
	var Kh = n.version;
	if (Kh !== "19.3.0") throw Error(i(527, Kh, "19.3.0"));
	R.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
		return e = d(t), e = e === null ? null : p(e), e = e === null ? null : e.stateNode, e;
	};
	var qh = {
		bundleType: 0,
		version: "19.3.0",
		rendererPackageName: "react-dom",
		currentDispatcherRef: L,
		reconcilerVersion: "19.3.0"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Jh.isDisabled && Jh.supportsFiber) try {
			We = Jh.inject(qh), Ge = Jh;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!a(e)) throw Error(i(299));
		var n = !1, r = "", o = hc, s = gc, c = _c;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = lh(e, 1, !1, null, null, n, r, null, o, s, c, Uh), e[yt] = t.current, Uf(e), new Wh(t);
	};
})), g = /* @__PURE__ */ o(((e, t) => {
	function n() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = h();
})), _ = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), v = /* @__PURE__ */ o(((e, t) => {
	t.exports = _();
})), y = g(), b = /* @__PURE__ */ c(u(), 1), x = v(), S = {
	aurora: {
		style: "streak",
		colors: [
			"#f4efe9",
			"#e9c2b8",
			"#c2433f",
			"#2a1e2a",
			"#22395e",
			"#6f97c2",
			"#e5edf4"
		],
		scale: .7,
		warp: 1.4,
		angle: -.62,
		gloss: .18,
		veins: 0
	},
	ember: {
		style: "marble",
		colors: [
			"#07090c",
			"#16252c",
			"#3d5f68",
			"#1a1416",
			"#a3201a",
			"#ef4a2b",
			"#ff8a5c"
		],
		scale: .62,
		warp: 3.2,
		angle: -.5,
		gloss: .55,
		veins: .6
	},
	dusk: {
		style: "marble",
		colors: [
			"#120c18",
			"#3e2850",
			"#8f6c9c",
			"#2b1a24",
			"#b3502f",
			"#eab08a",
			"#fbe7d2"
		],
		scale: .75,
		warp: 3.6,
		angle: .8,
		gloss: .5,
		veins: .5
	},
	glacier: {
		style: "streak",
		colors: [
			"#f7f8fa",
			"#d9e2ea",
			"#9fb4c7",
			"#e8edf2",
			"#bccbd8",
			"#ffffff"
		],
		scale: .7,
		warp: 1.6,
		angle: .35,
		gloss: .25,
		veins: 0
	},
	verdant: {
		style: "marble",
		colors: [
			"#070b08",
			"#173024",
			"#4f7a5a",
			"#141812",
			"#a7843a",
			"#e9cf87",
			"#fbf3d6"
		],
		scale: .7,
		warp: 3.4,
		angle: 2.1,
		gloss: .5,
		veins: .5
	}
};
function C(e) {
	let t = e.trim().replace(/^#/, "");
	t.length === 3 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
	let n = /^[0-9a-f]{6}$/i.test(t) ? parseInt(t, 16) : 8421504;
	return [
		n >> 16 & 255,
		n >> 8 & 255,
		n & 255
	];
}
function w(e) {
	let t = e >>> 0;
	return () => {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function T(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n++) t = Math.imul(t ^ e.charCodeAt(n), 16777619);
	return t >>> 0;
}
function E(e) {
	let t = w(e), n = /* @__PURE__ */ new Uint8Array(512), r = /* @__PURE__ */ new Float32Array(512), i = [];
	for (let e = 0; e < 256; e++) i.push(e);
	for (let e = 255; e > 0; e--) {
		let n = Math.floor(t() * (e + 1)), r = i[e];
		i[e] = i[n], i[n] = r;
	}
	for (let e = 0; e < 512; e++) n[e] = i[e & 255];
	for (let e = 0; e < 256; e++) {
		let n = t() * Math.PI * 2;
		r[e * 2] = Math.cos(n), r[e * 2 + 1] = Math.sin(n);
	}
	let a = (e, t) => {
		let i = Math.floor(e), a = Math.floor(t), o = e - i, s = t - a, c = i & 255, l = a & 255, u = n[c + n[l]] * 2, d = n[c + 1 + n[l]] * 2, f = n[c + n[l + 1]] * 2, p = n[c + 1 + n[l + 1]] * 2, m = r[u] * o + r[u + 1] * s, h = r[d] * (o - 1) + r[d + 1] * s, g = r[f] * o + r[f + 1] * (s - 1), _ = r[p] * (o - 1) + r[p + 1] * (s - 1), v = o * o * o * (o * (o * 6 - 15) + 10), y = s * s * s * (s * (s * 6 - 15) + 10);
		return m + v * (h - m) + y * (g - m + v * (_ - g - h + m));
	};
	return (e, t, n) => {
		let r = 0, i = .5;
		for (let o = 0; o < n; o++) {
			r += i * a(e, t);
			let n = 1.6 * e + 1.2 * t + 7.1;
			t = -1.2 * e + 1.6 * t + 3.3, e = n, i *= .5;
		}
		return r;
	};
}
function D(e, t, n, r) {
	let i = Math.max(1, Math.round(e)), a = Math.max(1, Math.round(t)), o = n.colors.length >= 2 ? n.colors : ["#111111", "#eeeeee"], s = o.map((e, t) => ({
		t: t / (o.length - 1),
		c: C(e)
	})), c = n.scale ?? .7, l = n.warp ?? 3, u = n.gloss ?? .4, d = n.veins ?? 0, f = n.style === "streak", p = E(r * 977 + 13), m = w(r + 1), h = m() * 50, g = m() * 50, _ = (n.angle ?? 0) + (m() - .5) * .5, v = Math.cos(_), y = Math.sin(_), b = Math.min(i, a), x = Math.ceil(i / 2) + 3, S = Math.ceil(a / 2) + 3, T = new Float32Array(x * S), D = new Float32Array(x * S), O = new Float32Array(i * a), k = new Float32Array(i * a), A = new Uint8ClampedArray(i * a * 4), j = 0, M = (e) => {
		for (let t = 0; t < x; t++) {
			let n = ((t - 1) * 2 - i / 2) / b, r = ((e - 1) * 2 - a / 2) / b, o = (n * v - r * y) * c, s = (n * y + r * v) * c;
			f && (o *= .14, s *= 2.2), o += h, s += g;
			let u = p(o, s, 3), d = p(o + 5.2, s + 1.3, 3), m = p(o + l * u + 1.7, s + l * d + 9.2, 3), _ = p(o + l * u + 8.3, s + l * d + 2.8, 3);
			T[e * x + t] = p(o + l * m, s + l * _, 4), D[e * x + t] = Math.sqrt(u * u + d * d);
		}
	}, ee = () => {
		let e = (e, t, n, r) => (-e + 9 * t + 9 * n - r) / 16, t = new Float32Array(i * S);
		for (let n = 0; n < S; n++) {
			let r = n * x;
			for (let a = 0; a < i; a++) {
				let o = (a >> 1) + 1;
				t[n * i + a] = a & 1 ? e(T[r + o - 1], T[r + o], T[r + o + 1], T[r + o + 2]) : T[r + o];
			}
		}
		for (let n = 0; n < a; n++) {
			let r = (n >> 1) + 1;
			for (let a = 0; a < i; a++) {
				O[n * i + a] = n & 1 ? e(t[(r - 1) * i + a], t[r * i + a], t[(r + 1) * i + a], t[(r + 2) * i + a]) : t[r * i + a];
				let o = (a >> 1) + 1, s = D[r * x + o], c = a & 1 ? (s + D[r * x + o + 1]) / 2 : s, l = n & 1 ? a & 1 ? (D[(r + 1) * x + o] + D[(r + 1) * x + o + 1]) / 2 : D[(r + 1) * x + o] : c;
				k[n * i + a] = (c + l) / 2;
			}
		}
	}, N = () => {
		let e = [], t = Math.max(1, Math.floor(O.length / 4096));
		for (let n = 0; n < O.length; n += t) e.push(O[n]);
		e.sort((e, t) => e - t);
		let n = e[Math.floor(e.length * .02)], r = 1 / (e[Math.floor(e.length * .98)] - n || 1), o = r * b * .012;
		for (let e = 0; e < a; e++) for (let t = 0; t < i; t++) {
			let c = e * i + t, l = (O[c] - n) * r;
			l = l < 0 ? 0 : l > 1 ? 1 : l;
			let f = 1;
			for (; f < s.length - 1 && s[f].t < l;) f++;
			let p = s[f - 1], m = s[f], h = (l - p.t) / (m.t - p.t || 1);
			h = h < 0 ? 0 : h > 1 ? 1 : h, h = h * h * (3 - 2 * h);
			let g = (O[t < i - 1 ? c + 1 : c] - O[t > 0 ? c - 1 : c]) * o, _ = (O[e < a - 1 ? c + i : c] - O[e > 0 ? c - i : c]) * o, v = (-g * -.55 - _ * -.65 + .52) / Math.sqrt(g * g + _ * _ + 1), y = (v > 0 ? v : 0) ** 24 * u * 255, b = 1 + .035 * Math.sin(l * 150 + k[c] * 24), x = d * Math.max(0, 1 - Math.abs(k[c] - .42) * 14) * .6, S = (.82 + .28 * v) * b * (1 - x);
			A[c * 4] = (p.c[0] + (m.c[0] - p.c[0]) * h) * S + y, A[c * 4 + 1] = (p.c[1] + (m.c[1] - p.c[1]) * h) * S + y, A[c * 4 + 2] = (p.c[2] + (m.c[2] - p.c[2]) * h) * S + y, A[c * 4 + 3] = 255;
		}
	};
	return {
		width: i,
		height: a,
		pixels: A,
		step: (e) => {
			if (j >= S) return !0;
			let t = Math.min(S, j + Math.max(1, e));
			for (; j < t;) M(j++);
			return j < S ? !1 : (ee(), N(), !0);
		}
	};
}
function O(e, t) {
	return t <= 1 ? 0 : e / (t - 1) * 2 - 1;
}
var k = (e) => typeof e == "string" ? S[e] : e, A = /* @__PURE__ */ new Map(), j = [], M = !1;
function ee() {
	if (M) return;
	M = !0;
	let e = () => {
		let t = performance.now() + 7;
		for (; j.length && performance.now() < t;) {
			let e = j[0];
			if (e.job.step(4)) {
				j.shift();
				let t = document.createElement("canvas");
				t.width = e.job.width, t.height = e.job.height, t.getContext("2d")?.putImageData(new ImageData(e.job.pixels, t.width, t.height), 0, 0), e.done(t);
			}
		}
		j.length ? requestAnimationFrame(e) : M = !1;
	};
	requestAnimationFrame(e);
}
function N(e, t, n, r, i) {
	let a = JSON.stringify([
		e,
		t,
		n,
		r
	]), o = A.get(a);
	return o || (o = new Promise((a) => {
		let o = j.length;
		for (; o > 1 && j[o - 1].priority > i;) o--;
		j.splice(o, 0, {
			job: D(n, r, e, t),
			priority: i,
			done: a
		}), ee();
	}), A.set(a, o)), o;
}
function P({ art: e, seed: t, w: n, h: r, density: i, priority: a, className: o }) {
	let s = b.useRef(null), [c, l] = b.useState(!1), u = k(e), d = JSON.stringify(u), f = Math.round(n * i), p = Math.round(r * i);
	return b.useEffect(() => {
		let e = !0;
		return l(!1), N(JSON.parse(d), t, f, p, a).then((t) => {
			let n = s.current;
			e && n && (n.width = t.width, n.height = t.height, n.getContext("2d")?.drawImage(t, 0, 0), l(!0));
		}), () => {
			e = !1;
		};
	}, [
		d,
		t,
		f,
		p,
		a
	]), /* @__PURE__ */ (0, x.jsx)("canvas", {
		ref: s,
		"aria-hidden": "true",
		className: o,
		"data-ready": c || void 0,
		style: {
			width: n,
			height: r,
			maxWidth: "none"
		}
	});
}
var te = 340, ne = 100, re = 272, ie = 184, ae = "M0 56A22 22 0 0 1 22 34L146 34C170 34 172 0 198 0L318 0A22 22 0 0 1 340 22L340 250A22 22 0 0 1 318 272L22 272A22 22 0 0 1 0 250Z", oe = "M0 22A22 22 0 0 1 22 0L118 0C144 0 146 32 172 32L318 32A22 22 0 0 1 340 54L340 176A22 22 0 0 1 318 198L22 198A22 22 0 0 1 0 176Z", se = 4, ce = [
	{
		name: "Cover — final",
		meta: "PNG · 4.8 MB",
		art: "ember"
	},
	{
		name: "Moodboard",
		meta: "24 images",
		art: "dusk"
	},
	{
		name: "Brief.pdf",
		meta: "PDF · 1.2 MB"
	}
];
function le({ label: e = "My Files", meta: t, tone: n = "light", art: r = "aurora", seed: i = 3, image: a, files: o = ce, action: s = "add", onAdd: c, onFilesChange: l, menu: u = [], labelPlacement: d = "bottom-left", open: f, defaultOpen: p = !1, onOpenChange: m, onFileSelect: h, width: g = 340, appear: _ = !0, appearDelay: v = 0, className: y, style: S }) {
	let C = b.useId().replace(/:/g, ""), E = b.useRef(null), D = b.useRef(null), k = b.useRef(null), A = b.useRef(null), j = b.useRef(null), [M, ee] = b.useState(o), N = b.useRef(o.map((e, t) => t)), le = b.useRef(o.length), [de, F] = b.useState(null), [fe, pe] = b.useState(0), [I, L] = b.useState(p), R = f ?? I, z = b.useCallback((e) => {
		f === void 0 && L(e), m?.(e);
	}, [f, m]), [B, me] = b.useState(!1), [he, ge] = b.useState(!_), _e = g / te, ve = Math.min(1.5, Math.max(1, typeof window > "u" ? 1 : window.devicePixelRatio || 1)) * _e;
	b.useEffect(() => {
		if (!_) return;
		let e = E.current;
		if (!e || typeof IntersectionObserver > "u") {
			ge(!0);
			return;
		}
		let t = 0, n = new IntersectionObserver((e) => {
			e.some((e) => e.isIntersecting) && (n.disconnect(), t = window.setTimeout(() => ge(!0), v));
		}, { threshold: .25 });
		return n.observe(e), () => {
			n.disconnect(), window.clearTimeout(t);
		};
	}, [_, v]), b.useEffect(() => {
		let e = E.current;
		if (!e) return;
		let t = 0, n = 0, r = 0, i = () => {
			t = 0, e.style.setProperty("--gf-px", n.toFixed(3)), e.style.setProperty("--gf-py", r.toFixed(3));
		}, a = (a) => {
			if (a.pointerType === "touch") return;
			let o = e.getBoundingClientRect();
			n = (a.clientX - o.left) / o.width * 2 - 1, r = (a.clientY - o.top) / o.height * 2 - 1, t ||= requestAnimationFrame(i);
		}, o = () => {
			n = 0, r = 0, t ||= requestAnimationFrame(i);
		};
		return e.addEventListener("pointermove", a), e.addEventListener("pointerleave", o), () => {
			e.removeEventListener("pointermove", a), e.removeEventListener("pointerleave", o), cancelAnimationFrame(t);
		};
	}, []), b.useEffect(() => {
		D.current?.toggleAttribute("inert", !R);
	}, [R]), b.useEffect(() => {
		if (!R && !B) return;
		let e = (e) => {
			e.key !== "Escape" || document.querySelector("dialog[open]") || (B ? (me(!1), A.current?.focus()) : (z(!1), k.current?.focus()));
		}, t = (e) => {
			if (document.querySelector("dialog[open]")) return;
			let t = e.target;
			B && !j.current?.contains(t) && !A.current?.contains(t) && me(!1), R && !B && !E.current?.contains(t) && z(!1);
		};
		return document.addEventListener("keydown", e), document.addEventListener("pointerdown", t), () => {
			document.removeEventListener("keydown", e), document.removeEventListener("pointerdown", t);
		};
	}, [
		R,
		B,
		z
	]), b.useEffect(() => {
		B && j.current?.querySelector("[role=menuitem]")?.focus();
	}, [B]);
	let V = () => {
		let e = c?.(M) || {
			name: "Untitled " + (M.length + 1),
			meta: "Just now"
		}, t = [...M, e], n = le.current++;
		N.current = [...N.current, n], ee(t), F(n), pe((e) => e + 1), l?.(t);
	}, ye = [{
		label: R ? "Close folder" : "Open folder",
		onSelect: () => z(!R)
	}, ...u], H = (e) => {
		let t = Array.from(j.current?.querySelectorAll("[role=menuitem]") ?? []), n = t.indexOf(document.activeElement), r = (n) => {
			e.preventDefault(), t[(n + t.length) % t.length]?.focus();
		};
		e.key === "ArrowDown" ? r(n + 1) : e.key === "ArrowUp" ? r(n - 1) : e.key === "Home" ? r(0) : e.key === "End" ? r(t.length - 1) : e.key === "Tab" && me(!1);
	}, be = Math.max(0, M.length - se), xe = M.slice(be), Se = M.length, Ce = t ?? Se + (Se === 1 ? " item" : " items");
	return /* @__PURE__ */ (0, x.jsxs)("div", {
		ref: E,
		className: "gf-root" + (y ? " " + y : ""),
		"data-tone": n,
		"data-open": R || void 0,
		"data-entered": he || void 0,
		"data-place": d,
		style: {
			width: g,
			height: 372 * _e,
			...S
		},
		children: [/* @__PURE__ */ (0, x.jsx)("style", { children: ue }), /* @__PURE__ */ (0, x.jsx)("div", {
			className: "gf-stage",
			style: { transform: "translateY(" + ne * _e + "px) scale(" + _e + ")" },
			children: /* @__PURE__ */ (0, x.jsxs)("div", {
				className: "gf-tilt",
				children: [
					/* @__PURE__ */ (0, x.jsx)("div", {
						className: "gf-shadow",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, x.jsxs)("div", {
						className: "gf-back",
						style: { clipPath: "path('" + ae + "')" },
						"aria-hidden": "true",
						children: [a ? /* @__PURE__ */ (0, x.jsx)("img", {
							className: "gf-art",
							src: a,
							alt: "",
							width: 364,
							height: 296,
							draggable: !1
						}) : r === "none" ? null : /* @__PURE__ */ (0, x.jsx)(P, {
							className: "gf-art",
							art: r,
							seed: i,
							w: 364,
							h: 296,
							density: ve,
							priority: 0
						}), /* @__PURE__ */ (0, x.jsx)("div", { className: "gf-back-sheen" })]
					}),
					/* @__PURE__ */ (0, x.jsx)("svg", {
						className: "gf-rim gf-back-rim",
						viewBox: "0 0 340 272",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, x.jsx)("path", { d: ae })
					}),
					/* @__PURE__ */ (0, x.jsxs)("div", {
						className: "gf-front" + (fe ? " gf-front--bump" : ""),
						style: { clipPath: "path('" + oe + "')" },
						children: [
							/* @__PURE__ */ (0, x.jsx)("div", {
								className: "gf-tint",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, x.jsx)("div", {
								className: "gf-spec",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, x.jsxs)("svg", {
								className: "gf-rim gf-front-rim",
								viewBox: "0 0 340 198",
								"aria-hidden": "true",
								children: [/* @__PURE__ */ (0, x.jsx)("defs", { children: /* @__PURE__ */ (0, x.jsxs)("linearGradient", {
									id: "gf-rim-" + C,
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [
										/* @__PURE__ */ (0, x.jsx)("stop", {
											offset: "0",
											stopColor: "#fff",
											stopOpacity: "0.95"
										}),
										/* @__PURE__ */ (0, x.jsx)("stop", {
											offset: "0.35",
											stopColor: "#fff",
											stopOpacity: "0.35"
										}),
										/* @__PURE__ */ (0, x.jsx)("stop", {
											offset: "1",
											stopColor: "#fff",
											stopOpacity: "0.12"
										})
									]
								}) }), /* @__PURE__ */ (0, x.jsx)("path", {
									d: oe,
									stroke: "url(#gf-rim-" + C + ")"
								})]
							}),
							/* @__PURE__ */ (0, x.jsx)("button", {
								ref: k,
								type: "button",
								className: "gf-hit",
								"aria-expanded": R,
								"aria-label": (R ? "Close " : "Open ") + e + ", " + Se + (Se === 1 ? " item" : " items"),
								onClick: () => {
									me(!1), z(!R);
								}
							}),
							/* @__PURE__ */ (0, x.jsxs)("div", {
								className: "gf-label",
								children: [/* @__PURE__ */ (0, x.jsx)("span", {
									className: "gf-title",
									children: e
								}), /* @__PURE__ */ (0, x.jsx)("span", {
									className: "gf-meta",
									children: Ce
								}, Ce)]
							})
						]
					}, fe),
					/* @__PURE__ */ (0, x.jsx)("div", {
						ref: D,
						className: "gf-files",
						role: "list",
						"aria-label": e + " contents",
						children: xe.map((e, t) => {
							let n = N.current[be + t], r = O(t, xe.length), i = w(T(e.name) + n), a = !!(e.art || e.image), o = /* @__PURE__ */ (0, x.jsxs)(x.Fragment, { children: [a ? e.image ? /* @__PURE__ */ (0, x.jsx)("img", {
								className: "gf-sheet-art",
								src: e.image,
								alt: "",
								width: re,
								height: ie,
								draggable: !1
							}) : /* @__PURE__ */ (0, x.jsx)(P, {
								className: "gf-sheet-art",
								art: e.art,
								seed: T(e.name) % 997,
								w: re,
								h: ie,
								density: Math.min(ve, 1.25),
								priority: 1
							}) : /* @__PURE__ */ (0, x.jsxs)("span", {
								className: "gf-lines",
								"aria-hidden": "true",
								children: [
									/* @__PURE__ */ (0, x.jsx)("i", { style: { width: "86%" } }),
									/* @__PURE__ */ (0, x.jsx)("i", { style: { width: "92%" } }),
									/* @__PURE__ */ (0, x.jsx)("i", { style: { width: "64%" } }),
									/* @__PURE__ */ (0, x.jsx)("i", { style: { width: "88%" } }),
									/* @__PURE__ */ (0, x.jsx)("i", { style: { width: "42%" } })
								]
							}), /* @__PURE__ */ (0, x.jsxs)("span", {
								className: "gf-sheet-head",
								children: [/* @__PURE__ */ (0, x.jsx)("span", {
									className: "gf-sheet-name",
									children: e.name
								}), e.meta ? /* @__PURE__ */ (0, x.jsx)("span", {
									className: "gf-sheet-meta",
									children: e.meta
								}) : null]
							})] }), s = {
								className: "gf-sheet" + (a ? " gf-sheet--art" : "") + (n === de ? " gf-sheet--drop" : ""),
								style: {
									"--gf-slot": r,
									"--gf-depth": xe.length - 1 - t,
									"--gf-jx": ((i() - .5) * 10).toFixed(2) + "px",
									"--gf-jr": ((i() - .5) * 3.2).toFixed(2) + "deg",
									zIndex: t + 1
								},
								onAnimationEnd: n === de ? () => F(null) : void 0
							};
							return /* @__PURE__ */ (0, x.jsx)("div", {
								role: "listitem",
								className: "gf-sheet-slot",
								children: e.href ? /* @__PURE__ */ (0, x.jsx)("a", {
									...s,
									href: e.href,
									target: "_blank",
									rel: "noopener",
									onClick: () => h?.(e, be + t),
									children: o
								}) : /* @__PURE__ */ (0, x.jsx)("button", {
									...s,
									type: "button",
									onClick: () => h?.(e, be + t),
									children: o
								})
							}, n);
						})
					}),
					s === "none" ? null : /* @__PURE__ */ (0, x.jsx)("button", {
						ref: A,
						type: "button",
						className: "gf-key gf-key--" + s,
						"aria-label": s === "add" ? "Add a file to " + e : "More options for " + e,
						"aria-haspopup": s === "more" ? "menu" : void 0,
						"aria-expanded": s === "more" ? B : void 0,
						"aria-controls": s === "more" ? "gf-menu-" + C : void 0,
						onClick: () => s === "add" ? V() : me((e) => !e),
						children: s === "add" ? /* @__PURE__ */ (0, x.jsx)("svg", {
							className: "gf-glyph gf-glyph--plus",
							viewBox: "0 0 24 24",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, x.jsx)("path", { d: "M12 4.5v15M4.5 12h15" })
						}, fe) : /* @__PURE__ */ (0, x.jsxs)("svg", {
							className: "gf-glyph gf-glyph--more",
							viewBox: "0 0 30 12",
							"aria-hidden": "true",
							children: [
								/* @__PURE__ */ (0, x.jsx)("rect", {
									x: "1",
									y: "1.5",
									width: "8",
									height: "9",
									rx: "3.4"
								}),
								/* @__PURE__ */ (0, x.jsx)("rect", {
									x: "11",
									y: "1.5",
									width: "8",
									height: "9",
									rx: "3.4"
								}),
								/* @__PURE__ */ (0, x.jsx)("rect", {
									x: "21",
									y: "1.5",
									width: "8",
									height: "9",
									rx: "3.4"
								})
							]
						})
					}),
					s === "more" ? /* @__PURE__ */ (0, x.jsx)("div", {
						ref: j,
						id: "gf-menu-" + C,
						role: "menu",
						"aria-label": e + " options",
						className: "gf-menu",
						"data-open": B || void 0,
						onKeyDown: H,
						children: ye.map((e, t) => /* @__PURE__ */ (0, x.jsx)("button", {
							type: "button",
							role: "menuitem",
							tabIndex: B ? -1 : void 0,
							disabled: !B,
							className: "gf-menu-item" + (e.danger ? " gf-menu-item--danger" : ""),
							onClick: () => {
								me(!1), A.current?.focus(), e.onSelect?.();
							},
							children: e.label
						}, e.label + t))
					}) : null
				]
			})
		})]
	});
}
var ue = "\n.gf-root {\n  --gf-px: 0;\n  --gf-py: 0;\n  --gf-ease: cubic-bezier(.2, .8, .2, 1);\n  --gf-spring: cubic-bezier(.34, 1.36, .5, 1);\n  --gf-hinge: 0deg;\n  --gf-lift: 42px;\n  --gf-spread: 0px;\n  --gf-fan: 0deg;\n  --gf-stack: 15px;\n  --gf-ink: #141416;\n  --gf-ink-soft: rgba(20, 20, 22, .55);\n  position: relative;\n  display: inline-block;\n  flex: none;\n  vertical-align: top;\n  font-family: ui-sans-serif, system-ui, -apple-system, \"SF Pro Text\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -webkit-tap-highlight-color: transparent;\n  isolation: isolate;\n}\n.gf-root[data-tone=\"dark\"] { --gf-ink: #f5f5f7; --gf-ink-soft: rgba(245, 245, 247, .58); }\n.gf-root:hover, .gf-root:focus-within { --gf-hinge: -11deg; --gf-lift: var(--gf-hover-lift, -34px); --gf-spread: 8px; --gf-fan: 1.4deg; --gf-stack: 10px; }\n.gf-root[data-open] { --gf-hinge: -24deg; --gf-lift: var(--gf-open-lift, -96px); --gf-spread: var(--gf-open-spread, 40px); --gf-fan: 5deg; --gf-stack: var(--gf-open-stack, 30px); }\n\n.gf-stage {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 340px;\n  height: 272px;\n  transform-origin: 0 0;\n}\n.gf-tilt {\n  position: absolute;\n  inset: 0;\n  transform: perspective(1400px) rotateX(calc(var(--gf-py) * -3deg)) rotateY(calc(var(--gf-px) * 4deg));\n  transition: transform .9s var(--gf-ease);\n}\n\n.gf-shadow {\n  position: absolute;\n  left: 18px;\n  right: 18px;\n  bottom: -6px;\n  height: 60px;\n  border-radius: 40px;\n  background: rgba(16, 18, 24, .34);\n  filter: blur(22px);\n  transform: translateX(calc(var(--gf-px) * -8px));\n  transition: transform .9s var(--gf-ease), opacity .9s var(--gf-ease);\n}\n.gf-root[data-tone=\"dark\"] .gf-shadow { background: rgba(0, 0, 0, .62); }\n\n.gf-back {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n  background: linear-gradient(180deg, #f3f3f4 0%, #e3e3e6 100%);\n}\n.gf-root[data-tone=\"dark\"] .gf-back { background: linear-gradient(180deg, #2a2a2e 0%, #121214 100%); }\n.gf-art {\n  position: absolute;\n  left: -12px;\n  top: -12px;\n  max-width: none;\n  object-fit: cover;\n  transform: translate(calc(var(--gf-px) * -7px), calc(var(--gf-py) * -6px)) scale(1.02);\n  transition: transform 1.1s var(--gf-ease), opacity 1.2s var(--gf-ease), filter 1.2s var(--gf-ease);\n}\ncanvas.gf-art { opacity: 0; filter: blur(14px) saturate(.6); }\ncanvas.gf-art[data-ready] { opacity: 1; filter: none; }\n.gf-back-sheen {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(180deg, rgba(255, 255, 255, .22) 0%, rgba(255, 255, 255, 0) 22%),\n    radial-gradient(120% 80% at 80% 0%, rgba(255, 255, 255, .16), rgba(255, 255, 255, 0) 60%);\n  pointer-events: none;\n}\n\n.gf-rim {\n  position: absolute;\n  left: 0;\n  top: 0;\n  max-width: none;\n  overflow: visible;\n  pointer-events: none;\n  fill: none;\n}\n.gf-back-rim { width: 340px; height: 272px; }\n.gf-back-rim path { stroke: rgba(255, 255, 255, .45); stroke-width: 1; }\n.gf-root[data-tone=\"dark\"] .gf-back-rim path { stroke: rgba(255, 255, 255, .16); }\n\n/* ---- files ---------------------------------------------------------------- */\n.gf-files {\n  position: absolute;\n  inset: 0;\n  z-index: 5;\n  pointer-events: none;\n  /* nothing hangs out of the bottom of the pocket, however tall the stack */\n  clip-path: inset(-400px -400px 10px -400px);\n}\n.gf-sheet-slot { display: contents; }\n.gf-sheet {\n  all: unset;\n  box-sizing: border-box;\n  position: absolute;\n  left: 34px;\n  top: 96px;\n  width: 272px;\n  height: 184px;\n  border-radius: 16px;\n  overflow: hidden;\n  cursor: pointer;\n  pointer-events: auto;\n  background: linear-gradient(180deg, #ffffff 0%, #f2f2f0 100%);\n  box-shadow:\n    inset 0 1px 0 rgba(255, 255, 255, .9),\n    0 0 0 .5px rgba(0, 0, 0, .1),\n    0 10px 26px -8px rgba(10, 12, 20, .28);\n  transform-origin: 50% 100%;\n  transform:\n    translate(calc(var(--gf-jx) + var(--gf-slot) * var(--gf-spread)), calc(var(--gf-lift) + var(--gf-depth) * var(--gf-stack) * -1))\n    rotate(calc(var(--gf-jr) + var(--gf-slot) * var(--gf-fan)));\n  transition:\n    transform .75s var(--gf-spring) calc(var(--gf-depth) * 40ms),\n    box-shadow .4s var(--gf-ease),\n    translate .9s var(--gf-ease),\n    opacity .9s var(--gf-ease);\n}\n.gf-root[data-tone=\"dark\"] .gf-sheet { background: linear-gradient(180deg, #2c2c30 0%, #1c1c1f 100%); box-shadow: inset 0 1px 0 rgba(255, 255, 255, .14), 0 0 0 .5px rgba(255, 255, 255, .08), 0 12px 28px -8px rgba(0, 0, 0, .7); }\n.gf-sheet--art { background: #1a1a1d; }\n.gf-root[data-open] .gf-sheet:hover,\n.gf-root[data-open] .gf-sheet:focus-visible {\n  transform:\n    translate(calc(var(--gf-jx) + var(--gf-slot) * var(--gf-spread)), calc(var(--gf-lift) + var(--gf-depth) * var(--gf-stack) * -1 - 18px))\n    rotate(calc(var(--gf-slot) * var(--gf-fan) * .6));\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .9), 0 0 0 .5px rgba(0, 0, 0, .1), 0 22px 40px -12px rgba(10, 12, 20, .42);\n  transition-delay: 0s;\n}\n.gf-sheet:focus-visible { outline: 2px solid #4c8dff; outline-offset: 2px; }\n.gf-sheet-art {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 272px;\n  height: 184px;\n  max-width: none;\n  object-fit: cover;\n  transition: opacity .9s var(--gf-ease), filter .9s var(--gf-ease);\n}\ncanvas.gf-sheet-art { opacity: 0; filter: blur(10px); }\ncanvas.gf-sheet-art[data-ready] { opacity: 1; filter: none; }\n.gf-sheet--art::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  border-radius: inherit;\n  background: linear-gradient(180deg, rgba(0, 0, 0, .42) 0%, rgba(0, 0, 0, 0) 34%);\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .2);\n  pointer-events: none;\n}\n.gf-sheet-head {\n  position: absolute;\n  left: 14px;\n  right: 14px;\n  top: 11px;\n  z-index: 1;\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 10px;\n  white-space: nowrap;\n}\n.gf-sheet-name {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12.5px;\n  font-weight: 560;\n  letter-spacing: -.005em;\n  color: #18181b;\n}\n.gf-sheet-meta {\n  flex: none;\n  font-family: ui-monospace, \"SF Mono\", SFMono-Regular, Menlo, Consolas, monospace;\n  font-size: 10px;\n  letter-spacing: .02em;\n  color: rgba(24, 24, 27, .5);\n}\n.gf-root[data-tone=\"dark\"] .gf-sheet-name, .gf-sheet--art .gf-sheet-name { color: #fafafa; }\n.gf-root[data-tone=\"dark\"] .gf-sheet-meta, .gf-sheet--art .gf-sheet-meta { color: rgba(250, 250, 250, .66); }\n.gf-lines {\n  position: absolute;\n  left: 14px;\n  right: 14px;\n  top: 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n}\n.gf-lines i {\n  display: block;\n  height: 5px;\n  border-radius: 3px;\n  background: rgba(24, 24, 27, .08);\n}\n.gf-lines i:first-child { height: 9px; margin-bottom: 4px; background: rgba(24, 24, 27, .14); }\n.gf-root[data-tone=\"dark\"] .gf-lines i { background: rgba(255, 255, 255, .08); }\n.gf-root[data-tone=\"dark\"] .gf-lines i:first-child { background: rgba(255, 255, 255, .16); }\n\n.gf-sheet--drop { animation: gf-drop .85s var(--gf-ease) both; }\n@keyframes gf-drop {\n  0% { translate: 0 -190px; rotate: -9deg; opacity: 0; }\n  35% { opacity: 1; }\n  72% { translate: 0 10px; rotate: 1deg; }\n  100% { translate: 0 0; rotate: 0deg; opacity: 1; }\n}\n\n/* ---- front glass ----------------------------------------------------------- */\n.gf-front {\n  position: absolute;\n  left: 0;\n  top: 74px;\n  width: 340px;\n  height: 198px;\n  z-index: 10;\n  -webkit-backdrop-filter: blur(22px) saturate(1.5);\n  backdrop-filter: blur(22px) saturate(1.5);\n  transform-origin: 50% 100%;\n  transform: perspective(760px) rotateX(var(--gf-hinge));\n  transition: transform .8s var(--gf-spring), translate 1s var(--gf-ease), opacity 1s var(--gf-ease);\n}\n.gf-front--bump { animation: gf-bump .7s var(--gf-ease) .38s both; }\n@keyframes gf-bump {\n  0% { scale: 1; }\n  35% { scale: 1.018 .975; }\n  70% { scale: .996 1.006; }\n  100% { scale: 1; }\n}\n.gf-tint {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(180deg, rgba(255, 255, 255, .16) 0%, rgba(255, 255, 255, .5) 42%, rgba(252, 252, 252, .93) 100%);\n}\n.gf-root[data-tone=\"dark\"] .gf-tint {\n  background: linear-gradient(180deg, rgba(18, 18, 20, .18) 0%, rgba(14, 14, 16, .62) 46%, rgba(8, 8, 10, .94) 100%);\n}\n.gf-spec {\n  position: absolute;\n  inset: 0;\n  background: radial-gradient(260px 200px at calc(50% + var(--gf-px) * 46%) calc(30% + var(--gf-py) * 40%), rgba(255, 255, 255, .5), rgba(255, 255, 255, 0) 70%);\n  mix-blend-mode: soft-light;\n  opacity: .9;\n  transition: background-position .6s var(--gf-ease);\n  pointer-events: none;\n}\n.gf-root[data-tone=\"dark\"] .gf-spec { mix-blend-mode: screen; opacity: .16; }\n.gf-front-rim { width: 340px; height: 198px; }\n.gf-front-rim path { stroke-width: 2.4; transition: stroke-width .3s var(--gf-ease); }\n.gf-root[data-tone=\"dark\"] .gf-front-rim { opacity: .55; }\n\n.gf-hit {\n  all: unset;\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  cursor: pointer;\n}\n.gf-hit:focus-visible ~ .gf-label .gf-title { text-decoration: underline; text-decoration-thickness: 1.5px; text-underline-offset: 4px; }\n.gf-front:has(.gf-hit:focus-visible) .gf-front-rim path { stroke-width: 5; }\n\n.gf-label {\n  position: absolute;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  max-width: 200px;\n  pointer-events: none;\n  color: var(--gf-ink);\n}\n.gf-root[data-place=\"bottom-left\"] .gf-label { left: 28px; bottom: 32px; }\n.gf-root[data-place=\"top-left\"] .gf-label { left: 28px; top: 34px; }\n.gf-root[data-place=\"top-right\"] .gf-label { right: 32px; top: 52px; align-items: flex-start; }\n.gf-title {\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.15;\n  letter-spacing: -.012em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.gf-meta {\n  font-family: ui-monospace, \"SF Mono\", SFMono-Regular, Menlo, Consolas, monospace;\n  font-size: 12px;\n  letter-spacing: .03em;\n  color: var(--gf-ink-soft);\n  white-space: nowrap;\n  animation: gf-roll .5s var(--gf-ease) both;\n}\n@keyframes gf-roll {\n  from { opacity: 0; translate: 0 7px; filter: blur(3px); }\n  to { opacity: 1; translate: 0 0; filter: blur(0); }\n}\n\n/* ---- the key: + or ··· ------------------------------------------------------ */\n.gf-key {\n  all: unset;\n  box-sizing: border-box;\n  position: absolute;\n  right: 22px;\n  bottom: 22px;\n  z-index: 12;\n  width: 58px;\n  height: 58px;\n  border-radius: 18px;\n  display: grid;\n  place-items: center;\n  cursor: pointer;\n  transition: transform .35s var(--gf-spring), box-shadow .35s var(--gf-ease), background .35s var(--gf-ease);\n}\n.gf-key:hover { transform: translateY(-2px); }\n.gf-key:active { transform: translateY(0) scale(.93); transition-duration: .12s; }\n.gf-key:focus-visible { outline: 2px solid #4c8dff; outline-offset: 3px; }\n.gf-key--add {\n  color: #fff;\n  background: radial-gradient(120% 90% at 50% 0%, #3a3a3f 0%, #121214 55%, #050506 100%);\n  box-shadow:\n    inset 0 1px 0 rgba(255, 255, 255, .22),\n    inset 0 -3px 8px rgba(0, 0, 0, .7),\n    0 0 0 1px rgba(0, 0, 0, .75),\n    0 14px 22px -8px rgba(0, 0, 0, .55),\n    0 3px 6px -2px rgba(0, 0, 0, .35);\n}\n.gf-root[data-tone=\"dark\"] .gf-key--add {\n  color: #111113;\n  background: radial-gradient(120% 90% at 50% 0%, #ffffff 0%, #ececee 55%, #d2d2d6 100%);\n  box-shadow: inset 0 1px 0 #fff, inset 0 -3px 8px rgba(0, 0, 0, .14), 0 0 0 1px rgba(0, 0, 0, .4), 0 14px 22px -8px rgba(0, 0, 0, .7);\n}\n.gf-key--more {\n  color: #111113;\n  background: linear-gradient(180deg, rgba(255, 255, 255, .92) 0%, rgba(226, 226, 230, .82) 100%);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow:\n    inset 0 1px 0 #fff,\n    inset 0 -2px 4px rgba(0, 0, 0, .06),\n    0 0 0 1px rgba(0, 0, 0, .16),\n    0 10px 18px -8px rgba(0, 0, 0, .3);\n}\n.gf-root[data-tone=\"dark\"] .gf-key--more {\n  color: #f5f5f7;\n  background: linear-gradient(180deg, rgba(255, 255, 255, .16) 0%, rgba(255, 255, 255, .06) 100%);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .22), 0 0 0 1px rgba(255, 255, 255, .1), 0 10px 18px -8px rgba(0, 0, 0, .6);\n}\n.gf-key--more[aria-expanded=\"true\"] { transform: scale(.96); }\n.gf-glyph { display: block; max-width: none; fill: none; stroke: currentColor; stroke-linecap: round; }\n.gf-glyph--plus { width: 26px; height: 26px; stroke-width: 1.6; animation: gf-turn .6s var(--gf-spring); }\n.gf-glyph--more { width: 30px; height: 12px; stroke-width: 1.7; }\n@keyframes gf-turn { from { rotate: -90deg; } to { rotate: 0deg; } }\n\n/* ---- menu ------------------------------------------------------------------- */\n.gf-menu {\n  position: absolute;\n  right: 22px;\n  bottom: 90px;\n  z-index: 20;\n  min-width: 176px;\n  padding: 6px;\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  background: rgba(252, 252, 253, .72);\n  -webkit-backdrop-filter: blur(24px) saturate(1.6);\n  backdrop-filter: blur(24px) saturate(1.6);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .9), 0 0 0 .5px rgba(0, 0, 0, .14), 0 24px 48px -16px rgba(10, 12, 20, .4);\n  transform-origin: 100% 100%;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(6px) scale(.94);\n  transition: opacity .2s var(--gf-ease), transform .32s var(--gf-spring), visibility 0s .32s;\n}\n.gf-menu[data-open] { opacity: 1; visibility: visible; transform: none; transition-delay: 0s; }\n.gf-root[data-tone=\"dark\"] .gf-menu { background: rgba(30, 30, 34, .72); box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 0 0 .5px rgba(255, 255, 255, .1), 0 24px 48px -16px rgba(0, 0, 0, .8); }\n.gf-menu-item {\n  all: unset;\n  box-sizing: border-box;\n  padding: 9px 12px;\n  border-radius: 10px;\n  font-size: 13.5px;\n  font-weight: 450;\n  color: #18181b;\n  cursor: pointer;\n}\n.gf-root[data-tone=\"dark\"] .gf-menu-item { color: #f4f4f5; }\n.gf-menu-item:hover, .gf-menu-item:focus-visible { background: rgba(24, 24, 27, .07); }\n.gf-root[data-tone=\"dark\"] .gf-menu-item:hover, .gf-root[data-tone=\"dark\"] .gf-menu-item:focus-visible { background: rgba(255, 255, 255, .09); }\n.gf-menu-item--danger { color: #d92d20; }\n.gf-root[data-tone=\"dark\"] .gf-menu-item--danger { color: #ff6b5e; }\n\n/* ---- entrance: the folder assembles itself ---------------------------------- */\n.gf-root:not([data-entered]) .gf-back,\n.gf-root:not([data-entered]) .gf-back-rim { translate: 0 22px; opacity: 0; }\n.gf-root:not([data-entered]) .gf-sheet { translate: 0 -120px; opacity: 0; }\n.gf-root:not([data-entered]) .gf-front { translate: 0 46px; opacity: 0; }\n.gf-root:not([data-entered]) .gf-key { opacity: 0; scale: .6; }\n.gf-root:not([data-entered]) .gf-shadow { opacity: 0; }\n.gf-back, .gf-back-rim { transition: translate 1s var(--gf-ease), opacity .9s var(--gf-ease); }\n.gf-root[data-entered] .gf-sheet { transition-delay: calc(var(--gf-depth) * 40ms), 0s, calc(.18s + var(--gf-depth) * 90ms), calc(.18s + var(--gf-depth) * 90ms); }\n.gf-root[data-entered] .gf-front { transition-delay: 0s, .42s, .42s; }\n.gf-key { transition: transform .35s var(--gf-spring), box-shadow .35s var(--gf-ease), opacity .6s var(--gf-ease) .7s, scale .7s var(--gf-spring) .7s; }\n\n@media (prefers-reduced-motion: reduce) {\n  .gf-root *, .gf-root *::before, .gf-root *::after {\n    transition-duration: 0s !important;\n    transition-delay: 0s !important;\n    animation: none !important;\n  }\n  .gf-tilt { transform: none; }\n}\n";
//#endregion
//#region ../../../../Downloads/Portfolio-component-lab/node_modules/gsap/gsap-core.js
function de(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function F(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
var fe = {
	autoSleep: 120,
	force3D: "auto",
	nullTargetWarn: 1,
	units: { lineHeight: "" }
}, pe = {
	duration: .5,
	overwrite: !1,
	delay: 0
}, I, L, R, z = 1e8, B = 1 / z, me = Math.PI * 2, he = me / 4, ge = 0, _e = Math.sqrt, ve = Math.cos, V = Math.sin, ye = function(e) {
	return typeof e == "string";
}, H = function(e) {
	return typeof e == "function";
}, be = function(e) {
	return typeof e == "number";
}, xe = function(e) {
	return e === void 0;
}, Se = function(e) {
	return typeof e == "object";
}, Ce = function(e) {
	return e !== !1;
}, we = function() {
	return typeof window < "u";
}, Te = function(e) {
	return H(e) || ye(e);
}, Ee = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}, De = Array.isArray, Oe = /random\([^)]+\)/g, ke = /,\s*/g, U = /(?:-?\.?\d|\.)+/gi, Ae = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, je = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Me = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Ne = /[+-]=-?[.\d]+/, Pe = /[^,'"\[\]\s]+/gi, Fe = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Ie, Le, Re, ze, Be = {}, Ve = {}, He, Ue = function(e) {
	return (Ve = xt(e, Be)) && Br;
}, We = function(e, t) {
	return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, Ge = function(e, t) {
	return !t && console.warn(e);
}, Ke = function(e, t) {
	return e && (Be[e] = t) && Ve && (Ve[e] = t) || Be;
}, qe = function() {
	return 0;
}, Je = {
	suppressEvents: !0,
	isStart: !0,
	kill: !1
}, Ye = {
	suppressEvents: !0,
	kill: !1
}, Xe = { suppressEvents: !0 }, Ze = {}, Qe = [], $e = {}, et, tt = {}, nt = {}, rt = 30, it = [], at = "", ot = function(e) {
	var t = e[0], n, r;
	if (Se(t) || H(t) || (e = [e]), !(n = (t._gsap || {}).harness)) {
		for (r = it.length; r-- && !it[r].targetTest(t););
		n = it[r];
	}
	for (r = e.length; r--;) e[r] && (e[r]._gsap || (e[r]._gsap = new Xn(e[r], n))) || e.splice(r, 1);
	return e;
}, st = function(e) {
	return e._gsap || ot(an(e))[0]._gsap;
}, ct = function(e, t, n) {
	return (n = e[t]) && H(n) ? e[t]() : xe(n) && e.getAttribute && e.getAttribute(t) || n;
}, lt = function(e, t) {
	return (e = e.split(",")).forEach(t) || e;
}, ut = function(e) {
	return Math.round(e * 1e5) / 1e5 || 0;
}, dt = function(e) {
	return Math.round(e * 1e7) / 1e7 || 0;
}, ft = function(e, t) {
	var n = t.charAt(0), r = parseFloat(t.substr(2));
	return e = parseFloat(e), n === "+" ? e + r : n === "-" ? e - r : n === "*" ? e * r : e / r;
}, pt = function(e, t) {
	for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n;);
	return r < n;
}, mt = function() {
	var e = Qe.length, t = Qe.slice(0), n, r;
	for ($e = {}, Qe.length = 0, n = 0; n < e; n++) r = t[n], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, ht = function(e) {
	return !!(e._initted || e._startAt || e.add);
}, gt = function(e, t, n, r) {
	Qe.length && !L && mt(), e.render(t, n, r || !!(L && t < 0 && ht(e))), Qe.length && !L && mt();
}, _t = function(e) {
	var t = parseFloat(e);
	return (t || t === 0) && (e + "").match(Pe).length < 2 ? t : ye(e) ? e.trim() : e;
}, vt = function(e) {
	return e;
}, yt = function(e, t) {
	for (var n in t) n in e || (e[n] = t[n]);
	return e;
}, bt = function(e) {
	return function(t, n) {
		for (var r in n) r in t || r === "duration" && e || r === "ease" || (t[r] = n[r]);
	};
}, xt = function(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}, St = function e(t, n) {
	for (var r in n) r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = Se(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
	return t;
}, Ct = function(e, t) {
	var n = {}, r;
	for (r in e) r in t || (n[r] = e[r]);
	return n;
}, wt = function(e) {
	var t = e.parent || Ie, n = e.keyframes ? bt(De(e.keyframes)) : yt;
	if (Ce(e.inherit)) for (; t;) n(e, t.vars.defaults), t = t.parent || t._dp;
	return e;
}, Tt = function(e, t) {
	for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n];);
	return n < 0;
}, Et = function(e, t, n, r, i) {
	n === void 0 && (n = "_first"), r === void 0 && (r = "_last");
	var a = e[r], o;
	if (i) for (o = t[i]; a && a[i] > o;) a = a._prev;
	return a ? (t._next = a._next, a._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[r] = t, t._prev = a, t.parent = t._dp = e, t;
}, Dt = function(e, t, n, r) {
	n === void 0 && (n = "_first"), r === void 0 && (r = "_last");
	var i = t._prev, a = t._next;
	i ? i._next = a : e[n] === t && (e[n] = a), a ? a._prev = i : e[r] === t && (e[r] = i), t._next = t._prev = t.parent = null;
}, Ot = function(e, t) {
	e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, kt = function(e, t) {
	if (e && (!t || t._end > e._dur || t._start < 0)) for (var n = e; n;) n._dirty = 1, n = n.parent;
	return e;
}, At = function(e) {
	for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
	return e;
}, jt = function(e, t, n, r) {
	return e._startAt && (L ? e._startAt.revert(Ye) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, r));
}, Mt = function e(t) {
	return !t || t._ts && e(t.parent);
}, Nt = function(e) {
	return e._repeat ? Pt(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, Pt = function(e, t) {
	var n = Math.floor(e = dt(e / t));
	return e && n === e ? n - 1 : n;
}, Ft = function(e, t) {
	return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, It = function(e) {
	return e._end = dt(e._start + (e._tDur / Math.abs(e._ts || e._rts || B) || 0));
}, Lt = function(e, t) {
	var n = e._dp;
	return n && n.smoothChildTiming && e._ts && (e._start = dt(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), It(e), n._dirty || kt(n, e)), e;
}, Rt = function(e, t) {
	var n;
	if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = Ft(e.rawTime(), t), (!t._dur || Qt(0, t.totalDuration(), n) - t._tTime > B) && t.render(n, !0)), kt(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
		if (e._dur < e.duration()) for (n = e; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
		e._zTime = -B;
	}
}, zt = function(e, t, n, r) {
	return t.parent && Ot(t), t._start = dt((be(n) ? n : n || e !== Ie ? Yt(e, n, t) : e._time) + t._delay), t._end = dt(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Et(e, t, "_first", "_last", e._sort ? "_start" : 0), Ut(t) || (e._recent = t), r || Rt(e, t), e._ts < 0 && Lt(e, e._tTime), e;
}, Bt = function(e, t) {
	return (Be.ScrollTrigger || We("scrollTrigger", t)) && Be.ScrollTrigger.create(t, e);
}, Vt = function(e, t, n, r, i) {
	if (ar(e, t, i), !e._initted) return 1;
	if (!n && e._pt && !L && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && et !== Ln.frame) return Qe.push(e), e._lazy = [i, r], 1;
}, Ht = function e(t) {
	var n = t.parent;
	return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
}, Ut = function(e) {
	var t = e.data;
	return t === "isFromStart" || t === "isStart";
}, Wt = function(e, t, n, r) {
	var i = e.ratio, a = t < 0 || !t && (!e._start && Ht(e) && (e._initted || !Ut(e)) || (e._ts < 0 || e._dp._ts < 0) && !Ut(e)) ? 0 : 1, o = e._rDelay, s = 0, c, l, u;
	if (o && e._repeat && (s = Qt(0, e._tDur, t), l = Pt(s, o), e._yoyo && l & 1 && (a = 1 - a), l !== Pt(e._tTime, o) && (i = 1 - a, e.vars.repeatRefresh && e._initted && e.invalidate())), a !== i || L || r || e._zTime === B || !t && e._zTime) {
		if (!e._initted && Vt(e, t, r, n, s)) return;
		for (u = e._zTime, e._zTime = t || (n ? B : 0), n ||= t && !u, e.ratio = a, e._from && (a = 1 - a), e._time = 0, e._tTime = s, c = e._pt; c;) c.r(a, c.d), c = c._next;
		t < 0 && jt(e, t, n, !0), e._onUpdate && !n && Sn(e, "onUpdate"), s && e._repeat && !n && e.parent && Sn(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === a && (a && Ot(e, 1), !n && !L && (Sn(e, a ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
	} else e._zTime ||= t;
}, Gt = function(e, t, n) {
	var r;
	if (n > t) for (r = e._first; r && r._start <= n;) {
		if (r.data === "isPause" && r._start > t) return r;
		r = r._next;
	}
	else for (r = e._last; r && r._start >= n;) {
		if (r.data === "isPause" && r._start < t) return r;
		r = r._prev;
	}
}, Kt = function(e, t, n, r) {
	var i = e._repeat, a = dt(t) || 0, o = e._tTime / e._tDur;
	return o && !r && (e._time *= a / e._dur), e._dur = a, e._tDur = i ? i < 0 ? 1e10 : dt(a * (i + 1) + e._rDelay * i) : a, o > 0 && !r && Lt(e, e._tTime = e._tDur * o), e.parent && It(e), n || kt(e.parent, e), e;
}, qt = function(e) {
	return e instanceof Qn ? kt(e) : Kt(e, e._dur);
}, Jt = {
	_start: 0,
	endTime: qe,
	totalDuration: qe
}, Yt = function e(t, n, r) {
	var i = t.labels, a = t._recent || Jt, o = t.duration() >= z ? a.endTime(!1) : t._dur, s, c, l;
	return ye(n) && (isNaN(n) || n in i) ? (c = n.charAt(0), l = n.substr(-1) === "%", s = n.indexOf("="), c === "<" || c === ">" ? (s >= 0 && (n = n.replace(/=/, "")), (c === "<" ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (l ? (s < 0 ? a : r).totalDuration() / 100 : 1)) : s < 0 ? (n in i || (i[n] = o), i[n]) : (c = parseFloat(n.charAt(s - 1) + n.substr(s + 1)), l && r && (c = c / 100 * (De(r) ? r[0] : r).totalDuration()), s > 1 ? e(t, n.substr(0, s - 1), r) + c : o + c)) : n == null ? o : +n;
}, Xt = function(e, t, n) {
	var r = be(t[1]), i = (r ? 2 : 1) + (e < 2 ? 0 : 1), a = t[i], o, s;
	if (r && (a.duration = t[1]), a.parent = n, e) {
		for (o = a, s = n; s && !("immediateRender" in o);) o = s.vars.defaults || {}, s = Ce(s.vars.inherit) && s.parent;
		a.immediateRender = Ce(o.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[i - 1];
	}
	return new fr(t[0], a, t[i + 1]);
}, Zt = function(e, t) {
	return e || e === 0 ? t(e) : t;
}, Qt = function(e, t, n) {
	return n < e ? e : n > t ? t : n;
}, $t = function(e, t) {
	return !ye(e) || !(t = Fe.exec(e)) ? "" : t[1];
}, en = function(e, t, n) {
	return Zt(n, function(n) {
		return Qt(e, t, n);
	});
}, tn = [].slice, nn = function(e, t) {
	return e && Se(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Se(e[0])) && !e.nodeType && e !== Le;
}, rn = function(e, t, n) {
	return n === void 0 && (n = []), e.forEach(function(e) {
		var r;
		return ye(e) && !t || nn(e, 1) ? (r = n).push.apply(r, an(e)) : n.push(e);
	}) || n;
}, an = function(e, t, n) {
	return R && !t && R.selector ? R.selector(e) : ye(e) && !n && (Re || !Rn()) ? tn.call((t || ze).querySelectorAll(e), 0) : De(e) ? rn(e, n) : nn(e) ? tn.call(e, 0) : e ? [e] : [];
}, on = function(e) {
	return e = an(e)[0] || Ge("Invalid scope") || {}, function(t) {
		var n = e.current || e.nativeElement || e;
		return an(t, n.querySelectorAll ? n : n === e ? Ge("Invalid scope") || ze.createElement("div") : e);
	};
}, sn = function(e) {
	return e.sort(function() {
		return .5 - Math.random();
	});
}, cn = function(e) {
	if (H(e)) return e;
	var t = Se(e) ? e : { each: e }, n = Gn(t.ease), r = t.from || 0, i = parseFloat(t.base) || 0, a = {}, o = r > 0 && r < 1, s = isNaN(r) || o, c = t.axis, l = r, u = r;
	return ye(r) ? l = u = {
		center: .5,
		edges: .5,
		end: 1
	}[r] || 0 : !o && s && (l = r[0], u = r[1]), function(e, o, d) {
		var f = (d || t).length, p = a[f], m, h, g, _, v, y, b, x, S;
		if (!p) {
			if (S = t.grid === "auto" ? 0 : (t.grid || [1, z])[1], !S) {
				for (b = -z; b < (b = d[S++].getBoundingClientRect().left) && S < f;);
				S < f && S--;
			}
			for (p = a[f] = [], m = s ? Math.min(S, f) * l - .5 : r % S, h = S === z ? 0 : s ? f * u / S - .5 : r / S | 0, b = 0, x = z, y = 0; y < f; y++) g = y % S - m, _ = h - (y / S | 0), p[y] = v = c ? Math.abs(c === "y" ? _ : g) : _e(g * g + _ * _), v > b && (b = v), v < x && (x = v);
			r === "random" && sn(p), p.max = b - x, p.min = x, p.v = f = (parseFloat(t.amount) || parseFloat(t.each) * (S > f ? f - 1 : c ? c === "y" ? f / S : S : Math.max(S, f / S)) || 0) * (r === "edges" ? -1 : 1), p.b = f < 0 ? i - f : i, p.u = $t(t.amount || t.each) || 0, n = n && f < 0 ? Wn(n) : n;
		}
		return f = (p[e] - p.min) / p.max || 0, dt(p.b + (n ? n(f) : f) * p.v) + p.u;
	};
}, ln = function(e) {
	var t = 10 ** ((e + "").split(".")[1] || "").length;
	return function(n) {
		var r = dt(Math.round(parseFloat(n) / e) * e * t);
		return (r - r % 1) / t + (be(n) ? 0 : $t(n));
	};
}, un = function(e, t) {
	var n = De(e), r, i;
	return !n && Se(e) && (r = n = e.radius || z, e.values ? (e = an(e.values), (i = !be(e[0])) && (r *= r)) : e = ln(e.increment)), Zt(t, n ? H(e) ? function(t) {
		return i = e(t), Math.abs(i - t) <= r ? i : t;
	} : function(t) {
		for (var n = parseFloat(i ? t.x : t), a = parseFloat(i ? t.y : 0), o = z, s = 0, c = e.length, l, u; c--;) i ? (l = e[c].x - n, u = e[c].y - a, l = l * l + u * u) : l = Math.abs(e[c] - n), l < o && (o = l, s = c);
		return s = !r || o <= r ? e[s] : t, i || s === t || be(t) ? s : s + $t(t);
	} : ln(e));
}, dn = function(e, t, n, r) {
	return Zt(De(e) ? !t : n === !0 ? !!(n = 0) : !r, function() {
		return De(e) ? e[~~(Math.random() * e.length)] : (n ||= 1e-5) && (r = n < 1 ? 10 ** ((n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * .99)) / n) * n * r) / r;
	});
}, fn = function() {
	var e = [...arguments];
	return function(t) {
		return e.reduce(function(e, t) {
			return t(e);
		}, t);
	};
}, pn = function(e, t) {
	return function(n) {
		return e(parseFloat(n)) + (t || $t(n));
	};
}, mn = function(e, t, n) {
	return yn(e, t, 0, 1, n);
}, hn = function(e, t, n) {
	return Zt(n, function(n) {
		return e[~~t(n)];
	});
}, gn = function e(t, n, r) {
	var i = n - t;
	return De(t) ? hn(t, e(0, t.length), n) : Zt(r, function(e) {
		return (i + (e - t) % i) % i + t;
	});
}, _n = function e(t, n, r) {
	var i = n - t, a = i * 2;
	return De(t) ? hn(t, e(0, t.length - 1), n) : Zt(r, function(e) {
		return e = (a + (e - t) % a) % a || 0, t + (e > i ? a - e : e);
	});
}, vn = function(e) {
	return e.replace(Oe, function(e) {
		var t = e.indexOf("[") + 1, n = e.substring(t || 7, t ? e.indexOf("]") : e.length - 1).split(ke);
		return dn(t ? n : +n[0], t ? 0 : +n[1], +n[2] || 1e-5);
	});
}, yn = function(e, t, n, r, i) {
	var a = t - e, o = r - n;
	return Zt(i, function(t) {
		return n + ((t - e) / a * o || 0);
	});
}, bn = function e(t, n, r, i) {
	var a = isNaN(t + n) ? 0 : function(e) {
		return (1 - e) * t + e * n;
	};
	if (!a) {
		var o = ye(t), s = {}, c, l, u, d, f;
		if (r === !0 && (i = 1) && (r = null), o) t = { p: t }, n = { p: n };
		else if (De(t) && !De(n)) {
			for (u = [], d = t.length, f = d - 2, l = 1; l < d; l++) u.push(e(t[l - 1], t[l]));
			d--, a = function(e) {
				e *= d;
				var t = Math.min(f, ~~e);
				return u[t](e - t);
			}, r = n;
		} else i || (t = xt(De(t) ? [] : {}, t));
		if (!u) {
			for (c in n) er.call(s, t, c, "get", n[c]);
			a = function(e) {
				return xr(e, s) || (o ? t.p : t);
			};
		}
	}
	return Zt(r, a);
}, xn = function(e, t, n) {
	var r = e.labels, i = z, a, o, s;
	for (a in r) o = r[a] - t, o < 0 == !!n && o && i > (o = Math.abs(o)) && (s = a, i = o);
	return s;
}, Sn = function(e, t, n) {
	var r = e.vars, i = r[t], a = R, o = e._ctx, s, c, l;
	if (i) return s = r[t + "Params"], c = r.callbackScope || e, n && Qe.length && mt(), o && (R = o), l = s ? i.apply(c, s) : i.call(c), R = a, l;
}, Cn = function(e) {
	return Ot(e), e.scrollTrigger && e.scrollTrigger.kill(!!L), e.progress() < 1 && Sn(e, "onInterrupt"), e;
}, wn, Tn = [], En = function(e) {
	if (e) {
		if (e = !e.name && e.default || e, we() || e.headless) {
			var t = e.name, n = H(e), r = t && !n && e.init ? function() {
				this._props = [];
			} : e, i = {
				init: qe,
				render: xr,
				add: er,
				kill: Cr,
				modifier: Sr,
				rawVars: 0
			}, a = {
				targetTest: 0,
				get: 0,
				getSetter: _r,
				aliases: {},
				register: 0
			};
			if (Rn(), e !== r) {
				if (tt[t]) return;
				yt(r, yt(Ct(e, i), a)), xt(r.prototype, xt(i, Ct(e, a))), tt[r.prop = t] = r, e.targetTest && (it.push(r), Ze[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
			}
			Ke(t, r), e.register && e.register(Br, r, Er);
		} else Tn.push(e);
	}
}, Dn = 255, On = {
	aqua: [
		0,
		Dn,
		Dn
	],
	lime: [
		0,
		Dn,
		0
	],
	silver: [
		192,
		192,
		192
	],
	black: [
		0,
		0,
		0
	],
	maroon: [
		128,
		0,
		0
	],
	teal: [
		0,
		128,
		128
	],
	blue: [
		0,
		0,
		Dn
	],
	navy: [
		0,
		0,
		128
	],
	white: [
		Dn,
		Dn,
		Dn
	],
	olive: [
		128,
		128,
		0
	],
	yellow: [
		Dn,
		Dn,
		0
	],
	orange: [
		Dn,
		165,
		0
	],
	gray: [
		128,
		128,
		128
	],
	purple: [
		128,
		0,
		128
	],
	green: [
		0,
		128,
		0
	],
	red: [
		Dn,
		0,
		0
	],
	pink: [
		Dn,
		192,
		203
	],
	cyan: [
		0,
		Dn,
		Dn
	],
	transparent: [
		Dn,
		Dn,
		Dn,
		0
	]
}, kn = function(e, t, n) {
	return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (n - t) * e * 6 : e < .5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * Dn + .5 | 0;
}, An = function(e, t, n) {
	var r = e ? be(e) ? [
		e >> 16,
		e >> 8 & Dn,
		e & Dn
	] : 0 : On.black, i, a, o, s, c, l, u, d, f, p;
	if (!r) {
		if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), On[e]) r = On[e];
		else if (e.charAt(0) === "#") {
			if (e.length < 6 && (i = e.charAt(1), a = e.charAt(2), o = e.charAt(3), e = "#" + i + i + a + a + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return r = parseInt(e.substr(1, 6), 16), [
				r >> 16,
				r >> 8 & Dn,
				r & Dn,
				parseInt(e.substr(7), 16) / 255
			];
			e = parseInt(e.substr(1), 16), r = [
				e >> 16,
				e >> 8 & Dn,
				e & Dn
			];
		} else if (e.substr(0, 3) === "hsl") {
			if (r = p = e.match(U), !t) s = r[0] % 360 / 360, c = r[1] / 100, l = r[2] / 100, a = l <= .5 ? l * (c + 1) : l + c - l * c, i = l * 2 - a, r.length > 3 && (r[3] *= 1), r[0] = kn(s + 1 / 3, i, a), r[1] = kn(s, i, a), r[2] = kn(s - 1 / 3, i, a);
			else if (~e.indexOf("=")) return r = e.match(Ae), n && r.length < 4 && (r[3] = 1), r;
		} else r = e.match(U) || On.transparent;
		r = r.map(Number);
	}
	return t && !p && (i = r[0] / Dn, a = r[1] / Dn, o = r[2] / Dn, u = Math.max(i, a, o), d = Math.min(i, a, o), l = (u + d) / 2, u === d ? s = c = 0 : (f = u - d, c = l > .5 ? f / (2 - u - d) : f / (u + d), s = u === i ? (a - o) / f + (a < o ? 6 : 0) : u === a ? (o - i) / f + 2 : (i - a) / f + 4, s *= 60), r[0] = ~~(s + .5), r[1] = ~~(c * 100 + .5), r[2] = ~~(l * 100 + .5)), n && r.length < 4 && (r[3] = 1), r;
}, jn = function(e) {
	var t = [], n = [], r = -1;
	return e.split(Nn).forEach(function(e) {
		var i = e.match(je) || [];
		t.push.apply(t, i), n.push(r += i.length + 1);
	}), t.c = n, t;
}, Mn = function(e, t, n) {
	var r = "", i = (e + r).match(Nn), a = t ? "hsla(" : "rgba(", o = 0, s, c, l, u;
	if (!i) return e;
	if (i = i.map(function(e) {
		return (e = An(e, t, 1)) && a + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")";
	}), n && (l = jn(e), s = n.c, s.join(r) !== l.c.join(r))) for (c = e.replace(Nn, "1").split(je), u = c.length - 1; o < u; o++) r += c[o] + (~s.indexOf(o) ? i.shift() || a + "0,0,0,0)" : (l.length ? l : i.length ? i : n).shift());
	if (!c) for (c = e.split(Nn), u = c.length - 1; o < u; o++) r += c[o] + i[o];
	return r + c[u];
}, Nn = function() {
	var e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
	for (t in On) e += "|" + t + "\\b";
	return RegExp(e + ")", "gi");
}(), Pn = /hsl[a]?\(/, Fn = function(e) {
	var t = e.join(" "), n;
	if (Nn.lastIndex = 0, Nn.test(t)) return n = Pn.test(t), e[1] = Mn(e[1], n), e[0] = Mn(e[0], n, jn(e[1])), !0;
}, In, Ln = function() {
	var e = Date.now, t = 500, n = 33, r = e(), i = r, a = 1e3 / 240, o = a, s = [], c, l, u, d, f, p, m = function u(m) {
		var h = e() - i, g = m === !0, _, v, y, b;
		if ((h > t || h < 0) && (r += h - n), i += h, y = i - r, _ = y - o, (_ > 0 || g) && (b = ++d.frame, f = y - d.time * 1e3, d.time = y /= 1e3, o += _ + (_ >= a ? 4 : a - _), v = 1), g || (c = l(u)), v) for (p = 0; p < s.length; p++) s[p](y, f, b, m);
	};
	return d = {
		time: 0,
		frame: 0,
		tick: function() {
			m(!0);
		},
		deltaRatio: function(e) {
			return f / (1e3 / (e || 60));
		},
		wake: function() {
			He && (!Re && we() && (Le = Re = window, ze = Le.document || {}, Be.gsap = Br, (Le.gsapVersions || (Le.gsapVersions = [])).push(Br.version), Ue(Ve || Le.GreenSockGlobals || !Le.gsap && Le || {}), Tn.forEach(En)), u = typeof requestAnimationFrame < "u" && requestAnimationFrame, c && d.sleep(), l = u || function(e) {
				return setTimeout(e, o - d.time * 1e3 + 1 | 0);
			}, In = 1, m(2));
		},
		sleep: function() {
			(u ? cancelAnimationFrame : clearTimeout)(c), In = 0, l = qe;
		},
		lagSmoothing: function(e, r) {
			t = e || Infinity, n = Math.min(r || 33, t);
		},
		fps: function(e) {
			a = 1e3 / (e || 240), o = d.time * 1e3 + a;
		},
		add: function(e, t, n) {
			var r = t ? function(t, n, i, a) {
				e(t, n, i, a), d.remove(r);
			} : e;
			return d.remove(e), s[n ? "unshift" : "push"](r), Rn(), r;
		},
		remove: function(e, t) {
			~(t = s.indexOf(e)) && s.splice(t, 1) && p >= t && p--;
		},
		_listeners: s
	}, d;
}(), Rn = function() {
	return !In && Ln.wake();
}, W = {}, zn = /^[\d.\-M][\d.\-,\s]/, Bn = /["']/g, Vn = function(e) {
	for (var t = {}, n = e.substr(1, e.length - 3).split(":"), r = n[0], i = 1, a = n.length, o, s, c; i < a; i++) s = n[i], o = i === a - 1 ? s.length : s.lastIndexOf(","), c = s.substr(0, o), t[r] = isNaN(c) ? c.replace(Bn, "").trim() : +c, r = s.substr(o + 1).trim();
	return t;
}, Hn = function(e) {
	var t = e.indexOf("(") + 1, n = e.indexOf(")"), r = e.indexOf("(", t);
	return e.substring(t, ~r && r < n ? e.indexOf(")", n + 1) : n);
}, Un = function(e) {
	var t = (e + "").split("("), n = W[t[0]];
	return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [Vn(t[1])] : Hn(e).split(",").map(_t)) : W._CE && zn.test(e) ? W._CE("", e) : n;
}, Wn = function(e) {
	return function(t) {
		return 1 - e(1 - t);
	};
}, Gn = function(e, t) {
	return e && (H(e) ? e : W[e] || Un(e)) || t;
}, Kn = function(e, t, n, r) {
	n === void 0 && (n = function(e) {
		return 1 - t(1 - e);
	}), r === void 0 && (r = function(e) {
		return e < .5 ? t(e * 2) / 2 : 1 - t((1 - e) * 2) / 2;
	});
	var i = {
		easeIn: t,
		easeOut: n,
		easeInOut: r
	}, a;
	return lt(e, function(e) {
		for (var t in W[e] = Be[e] = i, W[a = e.toLowerCase()] = n, i) W[a + (t === "easeIn" ? ".in" : t === "easeOut" ? ".out" : ".inOut")] = W[e + "." + t] = i[t];
	}), i;
}, qn = function(e) {
	return function(t) {
		return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2;
	};
}, Jn = function e(t, n, r) {
	var i = n >= 1 ? n : 1, a = (r || (t ? .3 : .45)) / (n < 1 ? n : 1), o = a / me * (Math.asin(1 / i) || 0), s = function(e) {
		return e === 1 ? 1 : i * 2 ** (-10 * e) * V((e - o) * a) + 1;
	}, c = t === "out" ? s : t === "in" ? function(e) {
		return 1 - s(1 - e);
	} : qn(s);
	return a = me / a, c.config = function(n, r) {
		return e(t, n, r);
	}, c;
}, Yn = function e(t, n) {
	n === void 0 && (n = 1.70158);
	var r = function(e) {
		return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
	}, i = t === "out" ? r : t === "in" ? function(e) {
		return 1 - r(1 - e);
	} : qn(r);
	return i.config = function(n) {
		return e(t, n);
	}, i;
};
lt("Linear,Quad,Cubic,Quart,Quint,Strong", function(e, t) {
	var n = t < 5 ? t + 1 : t;
	Kn(e + ",Power" + (n - 1), t ? function(e) {
		return e ** +n;
	} : function(e) {
		return e;
	}, function(e) {
		return 1 - (1 - e) ** n;
	}, function(e) {
		return e < .5 ? (e * 2) ** n / 2 : 1 - ((1 - e) * 2) ** n / 2;
	});
}), W.Linear.easeNone = W.none = W.Linear.easeIn, Kn("Elastic", Jn("in"), Jn("out"), Jn()), (function(e, t) {
	var n = 1 / t, r = 2 * n, i = 2.5 * n, a = function(a) {
		return a < n ? e * a * a : a < r ? e * (a - 1.5 / t) ** 2 + .75 : a < i ? e * (a -= 2.25 / t) * a + .9375 : e * (a - 2.625 / t) ** 2 + .984375;
	};
	Kn("Bounce", function(e) {
		return 1 - a(1 - e);
	}, a);
})(7.5625, 2.75), Kn("Expo", function(e) {
	return 2 ** (10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e);
}), Kn("Circ", function(e) {
	return -(_e(1 - e * e) - 1);
}), Kn("Sine", function(e) {
	return e === 1 ? 1 : -ve(e * he) + 1;
}), Kn("Back", Yn("in"), Yn("out"), Yn()), W.SteppedEase = W.steps = Be.SteppedEase = { config: function(e, t) {
	e === void 0 && (e = 1);
	var n = 1 / e, r = e + +!t, i = +!!t, a = 1 - B;
	return function(e) {
		return ((r * Qt(0, a, e) | 0) + i) * n;
	};
} }, pe.ease = W["quad.out"], lt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e) {
	return at += e + "," + e + "Params,";
});
var Xn = function(e, t) {
	this.id = ge++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : ct, this.set = t ? t.getSetter : _r;
}, Zn = /*#__PURE__*/ function() {
	function e(e) {
		this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === Infinity ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Kt(this, +e.duration, 1, 1), this.data = e.data, R && (this._ctx = R, R.data.push(this)), In || Ln.wake();
	}
	var t = e.prototype;
	return t.delay = function(e) {
		return e || e === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay;
	}, t.duration = function(e) {
		return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur;
	}, t.totalDuration = function(e) {
		return arguments.length ? (this._dirty = 0, Kt(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
	}, t.totalTime = function(e, t) {
		if (Rn(), !arguments.length) return this._tTime;
		var n = this._dp;
		if (n && n.smoothChildTiming && this._ts) {
			for (Lt(this, e), !n._dp || n.parent || Rt(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
			!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && zt(this._dp, this, this._start - this._delay);
		}
		return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === B || !this._initted && this._dur && e || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), gt(this, e, t)), this;
	}, t.time = function(e, t) {
		return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + Nt(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time;
	}, t.totalProgress = function(e, t) {
		return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
	}, t.progress = function(e, t) {
		return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) + Nt(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : +(this.rawTime() > 0);
	}, t.iteration = function(e, t) {
		var n = this.duration() + this._rDelay;
		return arguments.length ? this.totalTime(this._time + (e - 1) * n, t) : this._repeat ? Pt(this._tTime, n) + 1 : 1;
	}, t.timeScale = function(e, t) {
		if (!arguments.length) return this._rts === -B ? 0 : this._rts;
		if (this._rts === e) return this;
		var n = this.parent && this._ts ? Ft(this.parent._time, this) : this._tTime;
		return this._rts = +e || 0, this._ts = this._ps || e === -B ? 0 : this._rts, this.totalTime(Qt(-Math.abs(this._delay), this.totalDuration(), n), t !== !1), It(this), At(this);
	}, t.paused = function(e) {
		return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Rn(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== B && (this._tTime -= B)))), this) : this._ps;
	}, t.startTime = function(e) {
		if (arguments.length) {
			this._start = dt(e);
			var t = this.parent || this._dp;
			return t && (t._sort || !this.parent) && zt(t, this, this._start - this._delay), this;
		}
		return this._start;
	}, t.endTime = function(e) {
		return this._start + (Ce(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
	}, t.rawTime = function(e) {
		var t = this.parent || this._dp;
		return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ft(t.rawTime(e), this) : this._tTime : this._tTime;
	}, t.revert = function(e) {
		e === void 0 && (e = Xe);
		var t = L;
		return L = e, ht(this) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), this.data !== "nested" && e.kill !== !1 && this.kill(), L = t, this;
	}, t.globalTime = function(e) {
		for (var t = this, n = arguments.length ? e : t.rawTime(); t;) n = t._start + n / (Math.abs(t._ts) || 1), t = t._dp;
		return !this.parent && this._sat ? this._sat.globalTime(e) : n;
	}, t.repeat = function(e) {
		return arguments.length ? (this._repeat = e === Infinity ? -2 : e, qt(this)) : this._repeat === -2 ? Infinity : this._repeat;
	}, t.repeatDelay = function(e) {
		if (arguments.length) {
			var t = this._time;
			return this._rDelay = e, qt(this), t ? this.time(t) : this;
		}
		return this._rDelay;
	}, t.yoyo = function(e) {
		return arguments.length ? (this._yoyo = e, this) : this._yoyo;
	}, t.seek = function(e, t) {
		return this.totalTime(Yt(this, e), Ce(t));
	}, t.restart = function(e, t) {
		return this.play().totalTime(e ? -this._delay : 0, Ce(t)), this._dur || (this._zTime = -B), this;
	}, t.play = function(e, t) {
		return e != null && this.seek(e, t), this.reversed(!1).paused(!1);
	}, t.reverse = function(e, t) {
		return e != null && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1);
	}, t.pause = function(e, t) {
		return e != null && this.seek(e, t), this.paused(!0);
	}, t.resume = function() {
		return this.paused(!1);
	}, t.reversed = function(e) {
		return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -B : 0)), this) : this._rts < 0;
	}, t.invalidate = function() {
		return this._initted = this._act = 0, this._zTime = -B, this;
	}, t.isActive = function() {
		var e = this.parent || this._dp, t = this._start, n;
		return !!(!e || this._ts && this._initted && e.isActive() && (n = e.rawTime(!0)) >= t && n < this.endTime(!0) - B);
	}, t.eventCallback = function(e, t, n) {
		var r = this.vars;
		return arguments.length > 1 ? (t ? (r[e] = t, n && (r[e + "Params"] = n), e === "onUpdate" && (this._onUpdate = t)) : delete r[e], this) : r[e];
	}, t.then = function(e) {
		var t = this, n = t._prom;
		return new Promise(function(r) {
			var i = H(e) ? e : vt, a = function() {
				var e = t.then;
				t.then = null, n && n(), H(i) && (i = i(t)) && (i.then || i === t) && (t.then = e), r(i), t.then = e;
			};
			t._initted && t.totalProgress() === 1 && t._ts >= 0 || !t._tTime && t._ts < 0 ? a() : t._prom = a;
		});
	}, t.kill = function() {
		Cn(this);
	}, e;
}();
yt(Zn.prototype, {
	_time: 0,
	_start: 0,
	_end: 0,
	_tTime: 0,
	_tDur: 0,
	_dirty: 0,
	_repeat: 0,
	_yoyo: !1,
	parent: null,
	_initted: !1,
	_rDelay: 0,
	_ts: 1,
	_dp: 0,
	ratio: 0,
	_zTime: -B,
	_prom: 0,
	_ps: !1,
	_rts: 1
});
var Qn = /*#__PURE__*/ function(e) {
	F(t, e);
	function t(t, n) {
		var r;
		return t === void 0 && (t = {}), r = e.call(this, t) || this, r.labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = Ce(t.sortChildren), Ie && zt(t.parent || Ie, de(r), n), t.reversed && r.reverse(), t.paused && r.paused(!0), t.scrollTrigger && Bt(de(r), t.scrollTrigger), r;
	}
	var n = t.prototype;
	return n.to = function(e, t, n) {
		return Xt(0, arguments, this), this;
	}, n.from = function(e, t, n) {
		return Xt(1, arguments, this), this;
	}, n.fromTo = function(e, t, n, r) {
		return Xt(2, arguments, this), this;
	}, n.set = function(e, t, n) {
		return t.duration = 0, t.parent = this, wt(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new fr(e, t, Yt(this, n), 1), this;
	}, n.call = function(e, t, n) {
		return zt(this, fr.delayedCall(0, e, t), n);
	}, n.staggerTo = function(e, t, n, r, i, a, o) {
		return n.duration = t, n.stagger = n.stagger || r, n.onComplete = a, n.onCompleteParams = o, n.parent = this, new fr(e, n, Yt(this, i)), this;
	}, n.staggerFrom = function(e, t, n, r, i, a, o) {
		return n.runBackwards = 1, wt(n).immediateRender = Ce(n.immediateRender), this.staggerTo(e, t, n, r, i, a, o);
	}, n.staggerFromTo = function(e, t, n, r, i, a, o, s) {
		return r.startAt = n, wt(r).immediateRender = Ce(r.immediateRender), this.staggerTo(e, t, r, i, a, o, s);
	}, n.render = function(e, t, n) {
		var r = this._time, i = this._dirty ? this.totalDuration() : this._tDur, a = this._dur, o = e <= 0 ? 0 : dt(e), s = this._zTime < 0 != e < 0 && (this._initted || !a), c, l, u, d, f, p, m, h, g, _, v, y;
		if (this !== Ie && o > i && e >= 0 && (o = i), o !== this._tTime || n || s) {
			if (r !== this._time && a && (o += this._time - r, e += this._time - r), c = o, g = this._start, h = this._ts, p = !h, s && (a || (r = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
				if (v = this._yoyo, f = a + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(f * 100 + e, t, n);
				if (c = dt(o % f), o === i ? (d = this._repeat, c = a) : (_ = dt(o / f), d = ~~_, d && d === _ && (c = a, d--), c > a && (c = a)), _ = Pt(this._tTime, f), !r && this._tTime && _ !== d && this._tTime - _ * f - this._dur <= 0 && (_ = d), v && d & 1 && (c = a - c, y = 1), d !== _ && !this._lock) {
					var b = v && _ & 1, x = b === (v && d & 1);
					if (d < _ && (b = !b), r = b ? 0 : o % a ? a : o, this._lock = 1, this.render(r || (y ? 0 : dt(d * f)), t, !a)._lock = 0, this._tTime = o, !t && this.parent && Sn(this, "onRepeat"), this.vars.repeatRefresh && !y && (this.invalidate()._lock = 1, _ = d), r && r !== this._time || p !== !this._ts || this.vars.onRepeat && !this.parent && !this._act || (a = this._dur, i = this._tDur, x && (this._lock = 2, r = b ? a : -1e-4, this.render(r, !0), this.vars.repeatRefresh && !y && this.invalidate()), this._lock = 0, !this._ts && !p)) return this;
				}
			}
			if (this._hasPause && !this._forcing && this._lock < 2 && (m = Gt(this, dt(r), dt(c)), m && (o -= c - (c = m._start))), this._tTime = o, this._time = c, this._act = !!h, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, r = 0), !r && o && a && !t && !_ && (Sn(this, "onStart"), this._tTime !== o)) return this;
			if (c >= r && e >= 0) for (l = this._first; l;) {
				if (u = l._next, (l._act || c >= l._start) && l._ts && m !== l) {
					if (l.parent !== this) return this.render(e, t, n);
					if (l.render(l._ts > 0 ? (c - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (c - l._start) * l._ts, t, n), c !== this._time || !this._ts && !p) {
						m = 0, u && (o += this._zTime = -B);
						break;
					}
				}
				l = u;
			}
			else {
				l = this._last;
				for (var S = e < 0 ? e : c; l;) {
					if (u = l._prev, (l._act || S <= l._end) && l._ts && m !== l) {
						if (l.parent !== this) return this.render(e, t, n);
						if (l.render(l._ts > 0 ? (S - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (S - l._start) * l._ts, t, n || L && ht(l)), c !== this._time || !this._ts && !p) {
							m = 0, u && (o += this._zTime = S ? -B : B);
							break;
						}
					}
					l = u;
				}
			}
			if (m && !t && (this.pause(), m.render(c >= r ? 0 : -B)._zTime = c >= r ? 1 : -1, this._ts)) return this._start = g, It(this), this.render(e, t, n);
			this._onUpdate && !t && Sn(this, "onUpdate", !0), (o === i && this._tTime >= this.totalDuration() || !o && r) && (g === this._start || Math.abs(h) !== Math.abs(this._ts)) && (this._lock || ((e || !a) && (o === i && this._ts > 0 || !o && this._ts < 0) && Ot(this, 1), !t && !(e < 0 && !r) && (o || r || !i) && (Sn(this, o === i && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(o < i && this.timeScale() > 0) && this._prom())));
		}
		return this;
	}, n.add = function(e, t) {
		var n = this;
		if (be(t) || (t = Yt(this, t, e)), !(e instanceof Zn)) {
			if (De(e)) return e.forEach(function(e) {
				return n.add(e, t);
			}), this;
			if (ye(e)) return this.addLabel(e, t);
			if (H(e)) e = fr.delayedCall(0, e);
			else return this;
		}
		return this === e ? this : zt(this, e, t);
	}, n.getChildren = function(e, t, n, r) {
		e === void 0 && (e = !0), t === void 0 && (t = !0), n === void 0 && (n = !0), r === void 0 && (r = -z);
		for (var i = [], a = this._first; a;) a._start >= r && (a instanceof fr ? t && i.push(a) : (n && i.push(a), e && i.push.apply(i, a.getChildren(!0, t, n)))), a = a._next;
		return i;
	}, n.getById = function(e) {
		for (var t = this.getChildren(1, 1, 1), n = t.length; n--;) if (t[n].vars.id === e) return t[n];
	}, n.remove = function(e) {
		return ye(e) ? this.removeLabel(e) : H(e) ? this.killTweensOf(e) : (e.parent === this && Dt(this, e), e === this._recent && (this._recent = this._last), kt(this));
	}, n.totalTime = function(t, n) {
		return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = dt(Ln.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), e.prototype.totalTime.call(this, t, n), this._forcing = 0, this) : this._tTime;
	}, n.addLabel = function(e, t) {
		return this.labels[e] = Yt(this, t), this;
	}, n.removeLabel = function(e) {
		return delete this.labels[e], this;
	}, n.addPause = function(e, t, n) {
		var r = fr.delayedCall(0, t || qe, n);
		return r.data = "isPause", this._hasPause = 1, zt(this, r, Yt(this, e));
	}, n.removePause = function(e) {
		var t = this._first;
		for (e = Yt(this, e); t;) t._start === e && t.data === "isPause" && Ot(t), t = t._next;
	}, n.killTweensOf = function(e, t, n) {
		for (var r = this.getTweensOf(e, n), i = r.length; i--;) rr !== r[i] && r[i].kill(e, t);
		return this;
	}, n.getTweensOf = function(e, t) {
		for (var n = [], r = an(e), i = this._first, a = be(t), o; i;) i instanceof fr ? pt(i._targets, r) && (a ? (!rr || i._initted && i._ts) && i.globalTime(0) <= t && i.globalTime(i.totalDuration()) > t : !t || i.isActive()) && n.push(i) : (o = i.getTweensOf(r, t)).length && n.push.apply(n, o), i = i._next;
		return n;
	}, n.tweenTo = function(e, t) {
		t ||= {};
		var n = this, r = Yt(n, e), i = t, a = i.startAt, o = i.onStart, s = i.onStartParams, c = i.immediateRender, l, u = fr.to(n, yt({
			ease: t.ease || "none",
			lazy: !1,
			immediateRender: !1,
			time: r,
			overwrite: "auto",
			duration: t.duration || Math.abs((r - (a && "time" in a ? a.time : n._time)) / n.timeScale()) || B,
			onStart: function() {
				if (n.pause(), !l) {
					var e = t.duration || Math.abs((r - (a && "time" in a ? a.time : n._time)) / n.timeScale());
					u._dur !== e && Kt(u, e, 0, 1).render(u._time, !0, !0), l = 1;
				}
				o && o.apply(u, s || []);
			}
		}, t));
		return c ? u.render(0) : u;
	}, n.tweenFromTo = function(e, t, n) {
		return this.tweenTo(t, yt({ startAt: { time: Yt(this, e) } }, n));
	}, n.recent = function() {
		return this._recent;
	}, n.nextLabel = function(e) {
		return e === void 0 && (e = this._time), xn(this, Yt(this, e));
	}, n.previousLabel = function(e) {
		return e === void 0 && (e = this._time), xn(this, Yt(this, e), 1);
	}, n.currentLabel = function(e) {
		return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + B);
	}, n.shiftChildren = function(e, t, n) {
		n === void 0 && (n = 0);
		var r = this._first, i = this.labels, a;
		for (e = dt(e); r;) r._start >= n && (r._start += e, r._end += e), r = r._next;
		if (t) for (a in i) i[a] >= n && (i[a] += e);
		return kt(this);
	}, n.invalidate = function(t) {
		var n = this._first;
		for (this._lock = 0; n;) n.invalidate(t), n = n._next;
		return e.prototype.invalidate.call(this, t);
	}, n.clear = function(e) {
		e === void 0 && (e = !0);
		for (var t = this._first, n; t;) n = t._next, this.remove(t), t = n;
		return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), kt(this);
	}, n.totalDuration = function(e) {
		var t = 0, n = this, r = n._last, i = z, a, o, s;
		if (arguments.length) return n.timeScale((n._repeat < 0 ? n.duration() : n.totalDuration()) / (n.reversed() ? -e : e));
		if (n._dirty) {
			for (s = n.parent; r;) a = r._prev, r._dirty && r.totalDuration(), o = r._start, o > i && n._sort && r._ts && !n._lock ? (n._lock = 1, zt(n, r, o - r._delay, 1)._lock = 0) : i = o, o < 0 && r._ts && (t -= o, (!s && !n._dp || s && s.smoothChildTiming) && (n._start += dt(o / n._ts), n._time -= o, n._tTime -= o), n.shiftChildren(-o, !1, -Infinity), i = 0), r._end > t && r._ts && (t = r._end), r = a;
			Kt(n, n === Ie && n._time > t ? n._time : t, 1, 1), n._dirty = 0;
		}
		return n._tDur;
	}, t.updateRoot = function(e) {
		if (Ie._ts && (gt(Ie, Ft(e, Ie)), et = Ln.frame), Ln.frame >= rt) {
			rt += fe.autoSleep || 120;
			var t = Ie._first;
			if ((!t || !t._ts) && fe.autoSleep && Ln._listeners.length < 2) {
				for (; t && !t._ts;) t = t._next;
				t || Ln.sleep();
			}
		}
	}, t;
}(Zn);
yt(Qn.prototype, {
	_lock: 0,
	_hasPause: 0,
	_forcing: 0
});
var $n = function(e, t, n, r, i, a, o) {
	var s = new Er(this._pt, e, t, 0, 1, br, null, i), c = 0, l = 0, u, d, f, p, m, h, g, _;
	for (s.b = n, s.e = r, n += "", r += "", (g = ~r.indexOf("random(")) && (r = vn(r)), a && (_ = [n, r], a(_, e, t), n = _[0], r = _[1]), d = n.match(Me) || []; u = Me.exec(r);) p = u[0], m = r.substring(c, u.index), f ? f = (f + 1) % 5 : m.substr(-5) === "rgba(" && (f = 1), p !== d[l++] && (h = parseFloat(d[l - 1]) || 0, s._pt = {
		_next: s._pt,
		p: m || l === 1 ? m : ",",
		s: h,
		c: p.charAt(1) === "=" ? ft(h, p) - h : parseFloat(p) - h,
		m: f && f < 4 ? Math.round : 0
	}, c = Me.lastIndex);
	return s.c = c < r.length ? r.substring(c, r.length) : "", s.fp = o, (Ne.test(r) || g) && (s.e = 0), this._pt = s, s;
}, er = function(e, t, n, r, i, a, o, s, c, l) {
	H(r) && (r = r(i || 0, e, a));
	var u = e[t], d = n === "get" ? H(u) ? c ? e[t.indexOf("set") || !H(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : u : n, f = H(u) ? c ? hr : mr : pr, p;
	if (ye(r) && (~r.indexOf("random(") && (r = vn(r)), r.charAt(1) === "=" && (p = ft(d, r) + ($t(d) || 0), (p || p === 0) && (r = p))), !l || d !== r || ir) return !isNaN(d * r) && r !== "" ? (p = new Er(this._pt, e, t, +d || 0, r - (d || 0), typeof u == "boolean" ? yr : vr, 0, f), c && (p.fp = c), o && p.modifier(o, this, e), this._pt = p) : (!u && !(t in e) && We(t, r), $n.call(this, e, t, d, r, f, s || fe.stringFilter, c));
}, tr = function(e, t, n, r, i) {
	if (H(e) && (e = lr(e, i, t, n, r)), !Se(e) || e.style && e.nodeType || De(e) || Ee(e)) return ye(e) ? lr(e, i, t, n, r) : e;
	var a = {}, o;
	for (o in e) a[o] = lr(e[o], i, t, n, r);
	return a;
}, nr = function(e, t, n, r, i, a) {
	var o, s, c, l;
	if (tt[e] && (o = new tt[e]()).init(i, o.rawVars ? t[e] : tr(t[e], r, i, a, n), n, r, a) !== !1 && (n._pt = s = new Er(n._pt, i, e, 0, 1, o.render, o, 0, o.priority), n !== wn)) for (c = n._ptLookup[n._targets.indexOf(i)], l = o._props.length; l--;) c[o._props[l]] = s;
	return o;
}, rr, ir, ar = function e(t, n, r) {
	var i = t.vars, a = i.ease, o = i.startAt, s = i.immediateRender, c = i.lazy, l = i.onUpdate, u = i.runBackwards, d = i.yoyoEase, f = i.keyframes, p = i.autoRevert, m = t._dur, h = t._startAt, g = t._targets, _ = t.parent, v = _ && _.data === "nested" ? _.vars.targets : g, y = t._overwrite === "auto" && !I, b = t.timeline, x = i.easeReverse || d, S, C, w, T, E, D, O, k, A, j, M, ee, N;
	if (b && (!f || !a) && (a = "none"), t._ease = Gn(a, pe.ease), t._rEase = x && (Gn(x) || t._ease), t._from = !b && !!i.runBackwards, t._from && (t.ratio = 1), !b || f && !i.stagger) {
		if (k = g[0] ? st(g[0]).harness : 0, ee = k && i[k.prop], S = Ct(i, Ze), h && (h._zTime < 0 && h.progress(1), n < 0 && u && s && !p ? h.render(-1, !0) : h.revert(u && m ? Ye : Je), h._lazy = 0), o) {
			if (Ot(t._startAt = fr.set(g, yt({
				data: "isStart",
				overwrite: !1,
				parent: _,
				immediateRender: !0,
				lazy: !h && Ce(c),
				startAt: null,
				delay: 0,
				onUpdate: l && function() {
					return Sn(t, "onUpdate");
				},
				stagger: 0
			}, o))), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (L || !s && !p) && t._startAt.revert(Ye), s && m && n <= 0 && r <= 0) {
				n && (t._zTime = n);
				return;
			}
		} else if (u && m && !h) {
			if (n && (s = !1), w = yt({
				overwrite: !1,
				data: "isFromStart",
				lazy: s && !h && Ce(c),
				immediateRender: s,
				stagger: 0,
				parent: _
			}, S), ee && (w[k.prop] = ee), Ot(t._startAt = fr.set(g, w)), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (L ? t._startAt.revert(Ye) : t._startAt.render(-1, !0)), t._zTime = n, !s) e(t._startAt, B, B);
			else if (!n) return;
		}
		for (t._pt = t._ptCache = 0, c = m && Ce(c) || c && !m, C = 0; C < g.length; C++) {
			if (E = g[C], O = E._gsap || ot(g)[C]._gsap, t._ptLookup[C] = j = {}, $e[O.id] && Qe.length && mt(), M = v === g ? C : v.indexOf(E), k && (A = new k()).init(E, ee || S, t, M, v) !== !1 && (t._pt = T = new Er(t._pt, E, A.name, 0, 1, A.render, A, 0, A.priority), A._props.forEach(function(e) {
				j[e] = T;
			}), A.priority && (D = 1)), !k || ee) for (w in S) tt[w] && (A = nr(w, S, t, M, E, v)) ? A.priority && (D = 1) : j[w] = T = er.call(t, E, w, "get", S[w], M, v, 0, i.stringFilter);
			t._op && t._op[C] && t.kill(E, t._op[C]), y && t._pt && (rr = t, Ie.killTweensOf(E, j, t.globalTime(n)), N = !t.parent, rr = 0), t._pt && c && ($e[O.id] = 1);
		}
		D && Tr(t), t._onInit && t._onInit(t);
	}
	t._onUpdate = l, t._initted = (!t._op || t._pt) && !N, f && n <= 0 && b.render(z, !0, !0);
}, or = function(e, t, n, r, i, a, o, s) {
	var c = (e._pt && e._ptCache || (e._ptCache = {}))[t], l, u, d, f;
	if (!c) for (c = e._ptCache[t] = [], d = e._ptLookup, f = e._targets.length; f--;) {
		if (l = d[f][t], l && l.d && l.d._pt) for (l = l.d._pt; l && l.p !== t && l.fp !== t;) l = l._next;
		if (!l) return ir = 1, e.vars[t] = "+=0", ar(e, o), ir = 0, s ? Ge(t + " not eligible for reset. Try splitting into individual properties") : 1;
		c.push(l);
	}
	for (f = c.length; f--;) u = c[f], l = u._pt || u, l.s = (r || r === 0) && !i ? r : l.s + (r || 0) + a * l.c, l.c = n - l.s, u.e && (u.e = ut(n) + $t(u.e)), u.b && (u.b = l.s + $t(u.b));
}, sr = function(e, t) {
	var n = e[0] ? st(e[0]).harness : 0, r = n && n.aliases, i, a, o, s;
	if (!r) return t;
	for (a in i = xt({}, t), r) if (a in i) for (s = r[a].split(","), o = s.length; o--;) i[s[o]] = i[a];
	return i;
}, cr = function(e, t, n, r) {
	var i = t.ease || r || "power1.inOut", a, o;
	if (De(t)) o = n[e] || (n[e] = []), t.forEach(function(e, n) {
		return o.push({
			t: n / (t.length - 1) * 100,
			v: e,
			e: i
		});
	});
	else for (a in t) o = n[a] || (n[a] = []), a === "ease" || o.push({
		t: parseFloat(e),
		v: t[a],
		e: i
	});
}, lr = function(e, t, n, r, i) {
	return H(e) ? e.call(t, n, r, i) : ye(e) && ~e.indexOf("random(") ? vn(e) : e;
}, ur = at + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", dr = {};
lt(ur + ",id,stagger,delay,duration,paused,scrollTrigger", function(e) {
	return dr[e] = 1;
});
var fr = /*#__PURE__*/ function(e) {
	F(t, e);
	function t(t, n, r, i) {
		var a;
		typeof n == "number" && (r.duration = n, n = r, r = null), a = e.call(this, i ? n : wt(n)) || this;
		var o = a.vars, s = o.duration, c = o.delay, l = o.immediateRender, u = o.stagger, d = o.overwrite, f = o.keyframes, p = o.defaults, m = o.scrollTrigger, h = n.parent || Ie, g = (De(t) || Ee(t) ? be(t[0]) : "length" in n) ? [t] : an(t), _, v, y, b, x, S, C, w;
		if (a._targets = g.length ? ot(g) : Ge("GSAP target " + t + " not found. https://gsap.com", !fe.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d, f || u || Te(s) || Te(c)) {
			n = a.vars;
			var T = n.easeReverse || n.yoyoEase;
			if (_ = a.timeline = new Qn({
				data: "nested",
				defaults: p || {},
				targets: h && h.data === "nested" ? h.vars.targets : g
			}), _.kill(), _.parent = _._dp = de(a), _._start = 0, u || Te(s) || Te(c)) {
				if (b = g.length, C = u && cn(u), Se(u)) for (x in u) ~ur.indexOf(x) && (w ||= {}, w[x] = u[x]);
				for (v = 0; v < b; v++) y = Ct(n, dr), y.stagger = 0, T && (y.easeReverse = T), w && xt(y, w), S = g[v], y.duration = +lr(s, de(a), v, S, g), y.delay = (+lr(c, de(a), v, S, g) || 0) - a._delay, !u && b === 1 && y.delay && (a._delay = c = y.delay, a._start += c, y.delay = 0), _.to(S, y, C ? C(v, S, g) : 0), _._ease = W.none;
				_.duration() ? s = c = 0 : a.timeline = 0;
			} else if (f) {
				wt(yt(_.vars.defaults, { ease: "none" })), _._ease = Gn(f.ease || n.ease || "none");
				var E = 0, D, O, k;
				if (De(f)) f.forEach(function(e) {
					return _.to(g, e, ">");
				}), _.duration();
				else {
					for (x in y = {}, f) x === "ease" || x === "easeEach" || cr(x, f[x], y, f.easeEach);
					for (x in y) for (D = y[x].sort(function(e, t) {
						return e.t - t.t;
					}), E = 0, v = 0; v < D.length; v++) O = D[v], k = {
						ease: O.e,
						duration: (O.t - (v ? D[v - 1].t : 0)) / 100 * s
					}, k[x] = O.v, _.to(g, k, E), E += k.duration;
					_.duration() < s && _.to({}, { duration: s - _.duration() });
				}
			}
			s || a.duration(s = _.duration());
		} else a.timeline = 0;
		return d === !0 && !I && (rr = de(a), Ie.killTweensOf(g), rr = 0), zt(h, de(a), r), n.reversed && a.reverse(), n.paused && a.paused(!0), (l || !s && !f && a._start === dt(h._time) && Ce(l) && Mt(de(a)) && h.data !== "nested") && (a._tTime = -B, a.render(Math.max(0, -c) || 0)), m && Bt(de(a), m), a;
	}
	var n = t.prototype;
	return n.render = function(e, t, n) {
		var r = this._time, i = this._tDur, a = this._dur, o = e < 0, s = e > i - B && !o ? i : e < B ? 0 : e, c, l, u, d, f, p, m, h;
		if (!a) Wt(this, e, t, n);
		else if (s !== this._tTime || !e || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== o || this._lazy) {
			if (c = s, h = this.timeline, this._repeat) {
				if (d = a + this._rDelay, this._repeat < -1 && o) return this.totalTime(d * 100 + e, t, n);
				if (c = dt(s % d), s === i ? (u = this._repeat, c = a) : (f = dt(s / d), u = ~~f, u && u === f ? (c = a, u--) : c > a && (c = a)), p = this._yoyo && u & 1, p && (c = a - c), f = Pt(this._tTime, d), c === r && !n && this._initted && u === f) return this._tTime = s, this;
				u !== f && this.vars.repeatRefresh && !p && !this._lock && c !== d && this._initted && (this._lock = n = 1, this.render(dt(d * u), !0).invalidate()._lock = 0);
			}
			if (!this._initted) {
				if (Vt(this, o ? e : c, n, t, s)) return this._tTime = 0, this;
				if (r !== this._time && !(n && this.vars.repeatRefresh && u !== f)) return this;
				if (a !== this._dur) return this.render(e, t, n);
			}
			if (this._rEase) {
				var g = c < r;
				if (g !== this._inv) {
					var _ = g ? r : a - r;
					this._inv = g, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = r, this._invRecip = _ ? (g ? -1 : 1) / _ : 0, this._invScale = g ? -this.ratio : 1 - this.ratio, this._invEase = g ? this._rEase : this._ease;
				}
				this.ratio = m = this._invRatio + this._invScale * this._invEase((c - this._invTime) * this._invRecip);
			} else this.ratio = m = this._ease(c / a);
			if (this._from && (this.ratio = m = 1 - m), this._tTime = s, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), !r && s && !t && !f && (Sn(this, "onStart"), this._tTime !== s)) return this;
			for (l = this._pt; l;) l.r(m, l.d), l = l._next;
			h && h.render(e < 0 ? e : h._dur * h._ease(c / this._dur), t, n) || this._startAt && (this._zTime = e), this._onUpdate && !t && (o && jt(this, e, t, n), Sn(this, "onUpdate")), this._repeat && u !== f && this.vars.onRepeat && !t && this.parent && Sn(this, "onRepeat"), (s === this._tDur || !s) && this._tTime === s && (o && !this._onUpdate && jt(this, e, !0, !0), (e || !a) && (s === this._tDur && this._ts > 0 || !s && this._ts < 0) && Ot(this, 1), !t && (!o || r) && (s || r || p) && (Sn(this, s === i ? "onComplete" : "onReverseComplete", !0), this._prom && !(s < i && this.timeScale() > 0) && this._prom()));
		}
		return this;
	}, n.targets = function() {
		return this._targets;
	}, n.invalidate = function(t) {
		return (!t || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), e.prototype.invalidate.call(this, t);
	}, n.resetTo = function(e, t, n, r, i) {
		In || Ln.wake(), this._ts || this.play();
		var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts), o;
		return this._initted || ar(this, a), o = this._ease(a / this._dur), or(this, e, t, n, r, o, a, i) ? this.resetTo(e, t, n, r, 1) : (Lt(this, 0), this.parent || Et(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
	}, n.kill = function(e, t) {
		if (t === void 0 && (t = "all"), !e && (!t || t === "all")) return this._lazy = this._pt = 0, this.parent ? Cn(this) : this.scrollTrigger && this.scrollTrigger.kill(!!L), this;
		if (this.timeline) {
			var n = this.timeline.totalDuration();
			return this.timeline.killTweensOf(e, t, rr && rr.vars.overwrite !== !0)._first || Cn(this), this.parent && n !== this.timeline.totalDuration() && Kt(this, this._dur * this.timeline._tDur / n, 0, 1), this;
		}
		var r = this._targets, i = e ? an(e) : r, a = this._ptLookup, o = this._pt, s, c, l, u, d, f, p;
		if ((!t || t === "all") && Tt(r, i)) return t === "all" && (this._pt = 0), Cn(this);
		for (s = this._op = this._op || [], t !== "all" && (ye(t) && (d = {}, lt(t, function(e) {
			return d[e] = 1;
		}), t = d), t = sr(r, t)), p = r.length; p--;) if (~i.indexOf(r[p])) for (d in c = a[p], t === "all" ? (s[p] = t, u = c, l = {}) : (l = s[p] = s[p] || {}, u = t), u) f = c && c[d], f && ((!("kill" in f.d) || f.d.kill(d) === !0) && Dt(this, f, "_pt"), delete c[d]), l !== "all" && (l[d] = 1);
		return this._initted && !this._pt && o && Cn(this), this;
	}, t.to = function(e, n) {
		return new t(e, n, arguments[2]);
	}, t.from = function(e, t) {
		return Xt(1, arguments);
	}, t.delayedCall = function(e, n, r, i) {
		return new t(n, 0, {
			immediateRender: !1,
			lazy: !1,
			overwrite: !1,
			delay: e,
			onComplete: n,
			onReverseComplete: n,
			onCompleteParams: r,
			onReverseCompleteParams: r,
			callbackScope: i
		});
	}, t.fromTo = function(e, t, n) {
		return Xt(2, arguments);
	}, t.set = function(e, n) {
		return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(e, n);
	}, t.killTweensOf = function(e, t, n) {
		return Ie.killTweensOf(e, t, n);
	}, t;
}(Zn);
yt(fr.prototype, {
	_targets: [],
	_lazy: 0,
	_startAt: 0,
	_op: 0,
	_onInit: 0
}), lt("staggerTo,staggerFrom,staggerFromTo", function(e) {
	fr[e] = function() {
		var t = new Qn(), n = tn.call(arguments, 0);
		return n.splice(e === "staggerFromTo" ? 5 : 4, 0, 0), t[e].apply(t, n);
	};
});
var pr = function(e, t, n) {
	return e[t] = n;
}, mr = function(e, t, n) {
	return e[t](n);
}, hr = function(e, t, n, r) {
	return e[t](r.fp, n);
}, gr = function(e, t, n) {
	return e.setAttribute(t, n);
}, _r = function(e, t) {
	return H(e[t]) ? mr : xe(e[t]) && e.setAttribute ? gr : pr;
}, vr = function(e, t) {
	return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, yr = function(e, t) {
	return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, br = function(e, t) {
	var n = t._pt, r = "";
	if (!e && t.b) r = t.b;
	else if (e === 1 && t.e) r = t.e;
	else {
		for (; n;) r = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + r, n = n._next;
		r += t.c;
	}
	t.set(t.t, t.p, r, t);
}, xr = function(e, t) {
	for (var n = t._pt; n;) n.r(e, n.d), n = n._next;
}, Sr = function(e, t, n, r) {
	for (var i = this._pt, a; i;) a = i._next, i.p === r && i.modifier(e, t, n), i = a;
}, Cr = function(e) {
	for (var t = this._pt, n, r; t;) r = t._next, t.p === e && !t.op || t.op === e ? Dt(this, t, "_pt") : t.dep || (n = 1), t = r;
	return !n;
}, wr = function(e, t, n, r) {
	r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
}, Tr = function(e) {
	for (var t = e._pt, n, r, i, a; t;) {
		for (n = t._next, r = i; r && r.pr > t.pr;) r = r._next;
		(t._prev = r ? r._prev : a) ? t._prev._next = t : i = t, (t._next = r) ? r._prev = t : a = t, t = n;
	}
	e._pt = i;
}, Er = /*#__PURE__*/ function() {
	function e(e, t, n, r, i, a, o, s, c) {
		this.t = t, this.s = r, this.c = i, this.p = n, this.r = a || vr, this.d = o || this, this.set = s || pr, this.pr = c || 0, this._next = e, e && (e._prev = this);
	}
	var t = e.prototype;
	return t.modifier = function(e, t, n) {
		this.mSet = this.mSet || this.set, this.set = wr, this.m = e, this.mt = n, this.tween = t;
	}, e;
}();
lt(at + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(e) {
	return Ze[e] = 1;
}), Be.TweenMax = Be.TweenLite = fr, Be.TimelineLite = Be.TimelineMax = Qn, Ie = new Qn({
	sortChildren: !1,
	defaults: pe,
	autoRemoveChildren: !0,
	id: "root",
	smoothChildTiming: !0
}), fe.stringFilter = Fn;
var Dr = [], Or = {}, kr = [], Ar = 0, jr = 0, Mr = function(e) {
	return (Or[e] || kr).map(function(e) {
		return e();
	});
}, Nr = function() {
	var e = Date.now(), t = [];
	e - Ar > 2 && (Mr("matchMediaInit"), Dr.forEach(function(e) {
		var n = e.queries, r = e.conditions, i, a, o, s;
		for (a in n) i = Le.matchMedia(n[a]).matches, i && (o = 1), i !== r[a] && (r[a] = i, s = 1);
		s && (e.revert(), o && t.push(e));
	}), Mr("matchMediaRevert"), t.forEach(function(e) {
		return e.onMatch(e, function(t) {
			return e.add(null, t);
		});
	}), Ar = e, Mr("matchMedia"));
}, Pr = /*#__PURE__*/ function() {
	function e(e, t) {
		this.selector = t && on(t), this.data = [], this._r = [], this.isReverted = !1, this.id = jr++, e && this.add(e);
	}
	var t = e.prototype;
	return t.add = function(e, t, n) {
		H(e) && (n = t, t = e, e = H);
		var r = this, i = function() {
			var e = R, i = r.selector, a;
			return e && e !== r && e.data.push(r), n && (r.selector = on(n)), R = r, a = t.apply(r, arguments), H(a) && r._r.push(a), R = e, r.selector = i, r.isReverted = !1, a;
		};
		return r.last = i, e === H ? i(r, function(e) {
			return r.add(null, e);
		}) : e ? r[e] = i : i;
	}, t.ignore = function(e) {
		var t = R;
		R = null, e(this), R = t;
	}, t.getTweens = function() {
		var t = [];
		return this.data.forEach(function(n) {
			return n instanceof e ? t.push.apply(t, n.getTweens()) : n instanceof fr && !(n.parent && n.parent.data === "nested") && t.push(n);
		}), t;
	}, t.clear = function() {
		this._r.length = this.data.length = 0;
	}, t.kill = function(e, t) {
		var n = this;
		if (e ? (function() {
			for (var t = n.getTweens(), r = n.data.length, i; r--;) i = n.data[r], i.data === "isFlip" && (i.revert(), i.getChildren(!0, !0, !1).forEach(function(e) {
				return t.splice(t.indexOf(e), 1);
			}));
			for (t.map(function(e) {
				return {
					g: e._dur || e._delay || e._sat && !e._sat.vars.immediateRender ? e.globalTime(0) : -Infinity,
					t: e
				};
			}).sort(function(e, t) {
				return t.g - e.g || -Infinity;
			}).forEach(function(t) {
				return t.t.revert(e);
			}), r = n.data.length; r--;) i = n.data[r], i instanceof Qn ? i.data !== "nested" && (i.scrollTrigger && i.scrollTrigger.revert(), i.kill()) : !(i instanceof fr) && i.revert && i.revert(e);
			n._r.forEach(function(t) {
				return t(e, n);
			}), n.isReverted = !0;
		})() : this.data.forEach(function(e) {
			return e.kill && e.kill();
		}), this.clear(), t) for (var r = Dr.length; r--;) Dr[r].id === this.id && Dr.splice(r, 1);
	}, t.revert = function(e) {
		this.kill(e || {});
	}, e;
}(), Fr = /*#__PURE__*/ function() {
	function e(e) {
		this.contexts = [], this.scope = e, R && R.data.push(this);
	}
	var t = e.prototype;
	return t.add = function(e, t, n) {
		Se(e) || (e = { matches: e });
		var r = new Pr(0, n || this.scope), i = r.conditions = {}, a, o, s;
		for (o in R && !r.selector && (r.selector = R.selector), this.contexts.push(r), t = r.add("onMatch", t), r.queries = e, e) o === "all" ? s = 1 : (a = Le.matchMedia(e[o]), a && (Dr.indexOf(r) < 0 && Dr.push(r), (i[o] = a.matches) && (s = 1), a.addListener ? a.addListener(Nr) : a.addEventListener("change", Nr)));
		return s && t(r, function(e) {
			return r.add(null, e);
		}), this;
	}, t.revert = function(e) {
		this.kill(e || {});
	}, t.kill = function(e) {
		this.contexts.forEach(function(t) {
			return t.kill(e, !0);
		});
	}, e;
}(), Ir = {
	registerPlugin: function() {
		[...arguments].forEach(function(e) {
			return En(e);
		});
	},
	timeline: function(e) {
		return new Qn(e);
	},
	getTweensOf: function(e, t) {
		return Ie.getTweensOf(e, t);
	},
	getProperty: function(e, t, n, r) {
		ye(e) && (e = an(e)[0]);
		var i = st(e || {}).get, a = n ? vt : _t;
		return n === "native" && (n = ""), e && (t ? a((tt[t] && tt[t].get || i)(e, t, n, r)) : function(t, n, r) {
			return a((tt[t] && tt[t].get || i)(e, t, n, r));
		});
	},
	quickSetter: function(e, t, n) {
		if (e = an(e), e.length > 1) {
			var r = e.map(function(e) {
				return Br.quickSetter(e, t, n);
			}), i = r.length;
			return function(e) {
				for (var t = i; t--;) r[t](e);
			};
		}
		e = e[0] || {};
		var a = tt[t], o = st(e), s = o.harness && (o.harness.aliases || {})[t] || t, c = a ? function(t) {
			var r = new a();
			wn._pt = 0, r.init(e, n ? t + n : t, wn, 0, [e]), r.render(1, r), wn._pt && xr(1, wn);
		} : o.set(e, s);
		return a ? c : function(t) {
			return c(e, s, n ? t + n : t, o, 1);
		};
	},
	quickTo: function(e, t, n) {
		var r, i = Br.to(e, yt((r = {}, r[t] = "+=0.1", r.paused = !0, r.stagger = 0, r), n || {})), a = function(e, n, r) {
			return i.resetTo(t, e, n, r);
		};
		return a.tween = i, a;
	},
	isTweening: function(e) {
		return Ie.getTweensOf(e, !0).length > 0;
	},
	defaults: function(e) {
		return e && e.ease && (e.ease = Gn(e.ease, pe.ease)), St(pe, e || {});
	},
	config: function(e) {
		return St(fe, e || {});
	},
	registerEffect: function(e) {
		var t = e.name, n = e.effect, r = e.plugins, i = e.defaults, a = e.extendTimeline;
		(r || "").split(",").forEach(function(e) {
			return e && !tt[e] && !Be[e] && Ge(t + " effect requires " + e + " plugin.");
		}), nt[t] = function(e, t, r) {
			return n(an(e), yt(t || {}, i), r);
		}, a && (Qn.prototype[t] = function(e, n, r) {
			return this.add(nt[t](e, Se(n) ? n : (r = n) && {}, this), r);
		});
	},
	registerEase: function(e, t) {
		W[e] = Gn(t);
	},
	parseEase: function(e, t) {
		return arguments.length ? Gn(e, t) : W;
	},
	getById: function(e) {
		return Ie.getById(e);
	},
	exportRoot: function(e, t) {
		e === void 0 && (e = {});
		var n = new Qn(e), r, i;
		for (n.smoothChildTiming = Ce(e.smoothChildTiming), Ie.remove(n), n._dp = 0, n._time = n._tTime = Ie._time, r = Ie._first; r;) i = r._next, (t || !(!r._dur && r instanceof fr && r.vars.onComplete === r._targets[0])) && zt(n, r, r._start - r._delay), r = i;
		return zt(Ie, n, 0), n;
	},
	context: function(e, t) {
		return e ? new Pr(e, t) : R;
	},
	matchMedia: function(e) {
		return new Fr(e);
	},
	matchMediaRefresh: function() {
		return Dr.forEach(function(e) {
			var t = e.conditions, n, r;
			for (r in t) t[r] && (t[r] = !1, n = 1);
			n && e.revert();
		}) || Nr();
	},
	addEventListener: function(e, t) {
		var n = Or[e] || (Or[e] = []);
		~n.indexOf(t) || n.push(t);
	},
	removeEventListener: function(e, t) {
		var n = Or[e], r = n && n.indexOf(t);
		r >= 0 && n.splice(r, 1);
	},
	utils: {
		wrap: gn,
		wrapYoyo: _n,
		distribute: cn,
		random: dn,
		snap: un,
		normalize: mn,
		getUnit: $t,
		clamp: en,
		splitColor: An,
		toArray: an,
		selector: on,
		mapRange: yn,
		pipe: fn,
		unitize: pn,
		interpolate: bn,
		shuffle: sn
	},
	install: Ue,
	effects: nt,
	ticker: Ln,
	updateRoot: Qn.updateRoot,
	plugins: tt,
	globalTimeline: Ie,
	core: {
		PropTween: Er,
		globals: Ke,
		Tween: fr,
		Timeline: Qn,
		Animation: Zn,
		getCache: st,
		_removeLinkedListItem: Dt,
		reverting: function() {
			return L;
		},
		context: function(e) {
			return e && R && (R.data.push(e), e._ctx = R), R;
		},
		suppressOverwrites: function(e) {
			return I = e;
		}
	}
};
lt("to,from,fromTo,delayedCall,set,killTweensOf", function(e) {
	return Ir[e] = fr[e];
}), Ln.add(Qn.updateRoot), wn = Ir.to({}, { duration: 0 });
var Lr = function(e, t) {
	for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;) n = n._next;
	return n;
}, Rr = function(e, t) {
	var n = e._targets, r, i, a;
	for (r in t) for (i = n.length; i--;) a = e._ptLookup[i][r], (a &&= a.d) && (a._pt && (a = Lr(a, r)), a && a.modifier && a.modifier(t[r], e, n[i], r));
}, zr = function(e, t) {
	return {
		name: e,
		headless: 1,
		rawVars: 1,
		init: function(e, n, r) {
			r._onInit = function(e) {
				var r, i;
				if (ye(n) && (r = {}, lt(n, function(e) {
					return r[e] = 1;
				}), n = r), t) {
					for (i in r = {}, n) r[i] = t(n[i]);
					n = r;
				}
				Rr(e, n);
			};
		}
	};
}, Br = Ir.registerPlugin({
	name: "attr",
	init: function(e, t, n, r, i) {
		var a, o, s;
		for (a in this.tween = n, t) s = e.getAttribute(a) || "", o = this.add(e, "setAttribute", (s || 0) + "", t[a], r, i, 0, 0, a), o.op = a, o.b = s, this._props.push(a);
	},
	render: function(e, t) {
		for (var n = t._pt; n;) L ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next;
	}
}, {
	name: "endArray",
	headless: 1,
	init: function(e, t) {
		for (var n = t.length; n--;) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
	}
}, zr("roundProps", ln), zr("modifiers"), zr("snap", un)) || Ir;
fr.version = Qn.version = Br.version = "3.15.0", He = 1, we() && Rn(), W.Power0, W.Power1, W.Power2, W.Power3, W.Power4, W.Linear, W.Quad, W.Cubic, W.Quart, W.Quint, W.Strong, W.Elastic, W.Back, W.SteppedEase, W.Bounce, W.Sine, W.Expo, W.Circ;
//#endregion
//#region ../../../../Downloads/Portfolio-component-lab/node_modules/gsap/CSSPlugin.js
var Vr, Hr, Ur, Wr, Gr, Kr, qr, Jr = function() {
	return typeof window < "u";
}, Yr = {}, Xr = 180 / Math.PI, Zr = Math.PI / 180, Qr = Math.atan2, $r = 1e8, ei = /([A-Z])/g, ti = /(left|right|width|margin|padding|x)/i, ni = /[\s,\(]\S/, ri = {
	autoAlpha: "opacity,visibility",
	scale: "scaleX,scaleY",
	alpha: "opacity"
}, ii = function(e, t) {
	return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, ai = function(e, t) {
	return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, oi = function(e, t) {
	return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, si = function(e, t) {
	return t.set(t.t, t.p, e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, ci = function(e, t) {
	var n = t.s + t.c * e;
	t.set(t.t, t.p, ~~(n + (n < 0 ? -.5 : .5)) + t.u, t);
}, li = function(e, t) {
	return t.set(t.t, t.p, e ? t.e : t.b, t);
}, ui = function(e, t) {
	return t.set(t.t, t.p, e === 1 ? t.e : t.b, t);
}, di = function(e, t, n) {
	return e.style[t] = n;
}, fi = function(e, t, n) {
	return e.style.setProperty(t, n);
}, pi = function(e, t, n) {
	return e._gsap[t] = n;
}, mi = function(e, t, n) {
	return e._gsap.scaleX = e._gsap.scaleY = n;
}, hi = function(e, t, n, r, i) {
	var a = e._gsap;
	a.scaleX = a.scaleY = n, a.renderTransform(i, a);
}, gi = function(e, t, n, r, i) {
	var a = e._gsap;
	a[t] = n, a.renderTransform(i, a);
}, _i = "transform", vi = _i + "Origin", yi = function e(t, n) {
	var r = this, i = this.target, a = i.style, o = i._gsap;
	if (t in Yr && a) {
		if (this.tfm = this.tfm || {}, t !== "transform") t = ri[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(e) {
			return r.tfm[e] = Ri(i, e);
		}) : this.tfm[t] = o.x ? o[t] : Ri(i, t), t === vi && (this.tfm.zOrigin = o.zOrigin);
		else return ri.transform.split(",").forEach(function(t) {
			return e.call(r, t, n);
		});
		if (this.props.indexOf(_i) >= 0) return;
		o.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(vi, n, "")), t = _i;
	}
	(a || n) && this.props.push(t, n, a[t]);
}, bi = function(e) {
	e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, xi = function() {
	for (var e = this.props, t = this.target, n = t.style, r = t._gsap, i = 0, a; i < e.length; i += 3) e[i + 1] ? e[i + 1] === 2 ? t[e[i]](e[i + 2]) : t[e[i]] = e[i + 2] : e[i + 2] ? n[e[i]] = e[i + 2] : n.removeProperty(e[i].substr(0, 2) === "--" ? e[i] : e[i].replace(ei, "-$1").toLowerCase());
	if (this.tfm) {
		for (a in this.tfm) r[a] = this.tfm[a];
		r.svg && (r.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), i = qr(), (!i || !i.isStart) && !n[_i] && (bi(n), r.zOrigin && n[vi] && (n[vi] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
	}
}, Si = function(e, t) {
	var n = {
		target: e,
		props: [],
		revert: xi,
		save: yi
	};
	return e._gsap || Br.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(e) {
		return n.save(e);
	}), n;
}, Ci, wi = function(e, t) {
	var n = Hr.createElementNS ? Hr.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Hr.createElement(e);
	return n && n.style ? n : Hr.createElement(e);
}, Ti = function e(t, n, r) {
	var i = getComputedStyle(t);
	return i[n] || i.getPropertyValue(n.replace(ei, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && e(t, Di(n) || n, 1) || "";
}, Ei = "O,Moz,ms,Ms,Webkit".split(","), Di = function(e, t, n) {
	var r = (t || Gr).style, i = 5;
	if (e in r && !n) return e;
	for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(Ei[i] + e in r););
	return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? Ei[i] : "") + e;
}, Oi = function() {
	Jr() && window.document && (Vr = window, Hr = Vr.document, Ur = Hr.documentElement, Gr = wi("div") || { style: {} }, wi("div"), _i = Di(_i), vi = _i + "Origin", Gr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ci = !!Di("perspective"), qr = Br.core.reverting, Wr = 1);
}, ki = function(e) {
	var t = e.ownerSVGElement, n = wi("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = e.cloneNode(!0), i;
	r.style.display = "block", n.appendChild(r), Ur.appendChild(n);
	try {
		i = r.getBBox();
	} catch {}
	return n.removeChild(r), Ur.removeChild(n), i;
}, Ai = function(e, t) {
	for (var n = t.length; n--;) if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
}, ji = function(e) {
	var t, n;
	try {
		t = e.getBBox();
	} catch {
		t = ki(e), n = 1;
	}
	return t && (t.width || t.height) || n || (t = ki(e)), t && !t.width && !t.x && !t.y ? {
		x: +Ai(e, [
			"x",
			"cx",
			"x1"
		]) || 0,
		y: +Ai(e, [
			"y",
			"cy",
			"y1"
		]) || 0,
		width: 0,
		height: 0
	} : t;
}, Mi = function(e) {
	return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !ji(e));
}, Ni = function(e, t) {
	if (t) {
		var n = e.style, r;
		t in Yr && t !== vi && (t = _i), n.removeProperty ? (r = t.substr(0, 2), (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), n.removeProperty(r === "--" ? t : t.replace(ei, "-$1").toLowerCase())) : n.removeAttribute(t);
	}
}, Pi = function(e, t, n, r, i, a) {
	var o = new Er(e._pt, t, n, 0, 1, a ? ui : li);
	return e._pt = o, o.b = r, o.e = i, e._props.push(n), o;
}, Fi = {
	deg: 1,
	rad: 1,
	turn: 1
}, Ii = {
	grid: 1,
	flex: 1
}, Li = function e(t, n, r, i) {
	var a = parseFloat(r) || 0, o = (r + "").trim().substr((a + "").length) || "px", s = Gr.style, c = ti.test(n), l = t.tagName.toLowerCase() === "svg", u = (l ? "client" : "offset") + (c ? "Width" : "Height"), d = 100, f = i === "px", p = i === "%", m, h, g, _;
	if (i === o || !a || Fi[i] || Fi[o]) return a;
	if (o !== "px" && !f && (a = e(t, n, r, "px")), _ = t.getCTM && Mi(t), (p || o === "%") && (Yr[n] || ~n.indexOf("adius"))) return m = _ ? t.getBBox()[c ? "width" : "height"] : t[u], ut(p ? a / m * d : a / 100 * m);
	if (s[c ? "width" : "height"] = d + (f ? o : i), h = i !== "rem" && ~n.indexOf("adius") || i === "em" && t.appendChild && !l ? t : t.parentNode, _ && (h = (t.ownerSVGElement || {}).parentNode), (!h || h === Hr || !h.appendChild) && (h = Hr.body), g = h._gsap, g && p && g.width && c && g.time === Ln.time && !g.uncache) return ut(a / g.width * d);
	if (p && (n === "height" || n === "width")) {
		var v = t.style[n];
		t.style[n] = d + i, m = t[u], v ? t.style[n] = v : Ni(t, n);
	} else (p || o === "%") && !Ii[Ti(h, "display")] && (s.position = Ti(t, "position")), h === t && (s.position = "static"), h.appendChild(Gr), m = Gr[u], h.removeChild(Gr), s.position = "absolute";
	return c && p && (g = st(h), g.time = Ln.time, g.width = h[u]), ut(f ? m * a / d : m && a ? d / m * a : 0);
}, Ri = function(e, t, n, r) {
	var i;
	return Wr || Oi(), t in ri && t !== "transform" && (t = ri[t], ~t.indexOf(",") && (t = t.split(",")[0])), Yr[t] && t !== "transform" ? (i = Xi(e, r), i = t === "transformOrigin" ? i.svg ? i.origin : Zi(Ti(e, vi)) + " " + i.zOrigin + "px" : i[t]) : (i = e.style[t], (!i || i === "auto" || r || ~(i + "").indexOf("calc(")) && (i = Ui[t] && Ui[t](e, t, n) || Ti(e, t) || ct(e, t) || +(t === "opacity"))), n && !~(i + "").trim().indexOf(" ") ? Li(e, t, i, n) + n : i;
}, zi = function(e, t, n, r) {
	if (!n || n === "none") {
		var i = Di(t, e, 1), a = i && Ti(e, i, 1);
		a && a !== n ? (t = i, n = a) : t === "borderColor" && (n = Ti(e, "borderTopColor"));
	}
	var o = new Er(this._pt, e.style, t, 0, 1, br), s = 0, c = 0, l, u, d, f, p, m, h, g, _, v, y, b;
	if (o.b = n, o.e = r, n += "", r += "", r.substring(0, 6) === "var(--" && (r = Ti(e, r.substring(4, r.indexOf(")")))), r === "auto" && (m = e.style[t], e.style[t] = r, r = Ti(e, t) || r, m ? e.style[t] = m : Ni(e, t)), l = [n, r], Fn(l), n = l[0], r = l[1], d = n.match(je) || [], b = r.match(je) || [], b.length) {
		for (; u = je.exec(r);) h = u[0], _ = r.substring(s, u.index), p ? p = (p + 1) % 5 : (_.substr(-5) === "rgba(" || _.substr(-5) === "hsla(") && (p = 1), h !== (m = d[c++] || "") && (f = parseFloat(m) || 0, y = m.substr((f + "").length), h.charAt(1) === "=" && (h = ft(f, h) + y), g = parseFloat(h), v = h.substr((g + "").length), s = je.lastIndex - v.length, v || (v = v || fe.units[t] || y, s === r.length && (r += v, o.e += v)), y !== v && (f = Li(e, t, m, v) || 0), o._pt = {
			_next: o._pt,
			p: _ || c === 1 ? _ : ",",
			s: f,
			c: g - f,
			m: p && p < 4 || t === "zIndex" ? Math.round : 0
		});
		o.c = s < r.length ? r.substring(s, r.length) : "";
	} else o.r = t === "display" && r === "none" ? ui : li;
	return Ne.test(r) && (o.e = 0), this._pt = o, o;
}, Bi = {
	top: "0%",
	bottom: "100%",
	left: "0%",
	right: "100%",
	center: "50%"
}, Vi = function(e) {
	var t = e.split(" "), n = t[0], r = t[1] || "50%";
	return (n === "top" || n === "bottom" || r === "left" || r === "right") && (e = n, n = r, r = e), t[0] = Bi[n] || n, t[1] = Bi[r] || r, t.join(" ");
}, Hi = function(e, t) {
	if (t.tween && t.tween._time === t.tween._dur) {
		var n = t.t, r = n.style, i = t.u, a = n._gsap, o, s, c;
		if (i === "all" || i === !0) r.cssText = "", s = 1;
		else for (i = i.split(","), c = i.length; --c > -1;) o = i[c], Yr[o] && (s = 1, o = o === "transformOrigin" ? vi : _i), Ni(n, o);
		s && (Ni(n, _i), a && (a.svg && n.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", Xi(n, 1), a.uncache = 1, bi(r)));
	}
}, Ui = { clearProps: function(e, t, n, r, i) {
	if (i.data !== "isFromStart") {
		var a = e._pt = new Er(e._pt, t, n, 0, 0, Hi);
		return a.u = r, a.pr = -10, a.tween = i, e._props.push(n), 1;
	}
} }, Wi = [
	1,
	0,
	0,
	1,
	0,
	0
], Gi = {}, Ki = function(e) {
	return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, qi = function(e) {
	var t = Ti(e, _i);
	return Ki(t) ? Wi : t.substr(7).match(Ae).map(ut);
}, Ji = function(e, t) {
	var n = e._gsap || st(e), r = e.style, i = qi(e), a, o, s, c;
	return n.svg && e.getAttribute("transform") ? (s = e.transform.baseVal.consolidate().matrix, i = [
		s.a,
		s.b,
		s.c,
		s.d,
		s.e,
		s.f
	], i.join(",") === "1,0,0,1,0,0" ? Wi : i) : (i === Wi && !e.offsetParent && e !== Ur && !n.svg && (s = r.display, r.display = "block", a = e.parentNode, (!a || !e.offsetParent && !e.getBoundingClientRect().width) && (c = 1, o = e.nextElementSibling, Ur.appendChild(e)), i = qi(e), s ? r.display = s : Ni(e, "display"), c && (o ? a.insertBefore(e, o) : a ? a.appendChild(e) : Ur.removeChild(e))), t && i.length > 6 ? [
		i[0],
		i[1],
		i[4],
		i[5],
		i[12],
		i[13]
	] : i);
}, Yi = function(e, t, n, r, i, a) {
	var o = e._gsap, s = i || Ji(e, !0), c = o.xOrigin || 0, l = o.yOrigin || 0, u = o.xOffset || 0, d = o.yOffset || 0, f = s[0], p = s[1], m = s[2], h = s[3], g = s[4], _ = s[5], v = t.split(" "), y = parseFloat(v[0]) || 0, b = parseFloat(v[1]) || 0, x, S, C, w;
	n ? s !== Wi && (S = f * h - p * m) && (C = h / S * y + b * (-m / S) + (m * _ - h * g) / S, w = y * (-p / S) + f / S * b - (f * _ - p * g) / S, y = C, b = w) : (x = ji(e), y = x.x + (~v[0].indexOf("%") ? y / 100 * x.width : y), b = x.y + (~(v[1] || v[0]).indexOf("%") ? b / 100 * x.height : b)), r || r !== !1 && o.smooth ? (g = y - c, _ = b - l, o.xOffset = u + (g * f + _ * m) - g, o.yOffset = d + (g * p + _ * h) - _) : o.xOffset = o.yOffset = 0, o.xOrigin = y, o.yOrigin = b, o.smooth = !!r, o.origin = t, o.originIsAbsolute = !!n, e.style[vi] = "0px 0px", a && (Pi(a, o, "xOrigin", c, y), Pi(a, o, "yOrigin", l, b), Pi(a, o, "xOffset", u, o.xOffset), Pi(a, o, "yOffset", d, o.yOffset)), e.setAttribute("data-svg-origin", y + " " + b);
}, Xi = function(e, t) {
	var n = e._gsap || new Xn(e);
	if ("x" in n && !t && !n.uncache) return n;
	var r = e.style, i = n.scaleX < 0, a = "px", o = "deg", s = getComputedStyle(e), c = Ti(e, vi) || "0", l = u = d = m = h = g = _ = v = y = 0, u, d, f = p = 1, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A, j, M, ee, N, P, te, ne, re, ie, ae;
	return n.svg = !!(e.getCTM && Mi(e)), s.translate && ((s.translate !== "none" || s.scale !== "none" || s.rotate !== "none") && (r[_i] = (s.translate === "none" ? "" : "translate3d(" + (s.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") ") + (s.rotate === "none" ? "" : "rotate(" + s.rotate + ") ") + (s.scale === "none" ? "" : "scale(" + s.scale.split(" ").join(",") + ") ") + (s[_i] === "none" ? "" : s[_i])), r.scale = r.rotate = r.translate = "none"), S = Ji(e, n.svg), n.svg && (n.uncache ? (ee = e.getBBox(), c = n.xOrigin - ee.x + "px " + (n.yOrigin - ee.y) + "px", M = "") : M = !t && e.getAttribute("data-svg-origin"), Yi(e, M || c, !!M || n.originIsAbsolute, n.smooth !== !1, S)), b = n.xOrigin || 0, x = n.yOrigin || 0, S !== Wi && (E = S[0], D = S[1], O = S[2], k = S[3], l = A = S[4], u = j = S[5], S.length === 6 ? (f = Math.sqrt(E * E + D * D), p = Math.sqrt(k * k + O * O), m = E || D ? Qr(D, E) * Xr : 0, _ = O || k ? Qr(O, k) * Xr + m : 0, _ && (p *= Math.abs(Math.cos(_ * Zr))), n.svg && (l -= b - (b * E + x * O), u -= x - (b * D + x * k))) : (ae = S[6], re = S[7], P = S[8], te = S[9], ne = S[10], ie = S[11], l = S[12], u = S[13], d = S[14], C = Qr(ae, ne), h = C * Xr, C && (w = Math.cos(-C), T = Math.sin(-C), M = A * w + P * T, ee = j * w + te * T, N = ae * w + ne * T, P = A * -T + P * w, te = j * -T + te * w, ne = ae * -T + ne * w, ie = re * -T + ie * w, A = M, j = ee, ae = N), C = Qr(-O, ne), g = C * Xr, C && (w = Math.cos(-C), T = Math.sin(-C), M = E * w - P * T, ee = D * w - te * T, N = O * w - ne * T, ie = k * T + ie * w, E = M, D = ee, O = N), C = Qr(D, E), m = C * Xr, C && (w = Math.cos(C), T = Math.sin(C), M = E * w + D * T, ee = A * w + j * T, D = D * w - E * T, j = j * w - A * T, E = M, A = ee), h && Math.abs(h) + Math.abs(m) > 359.9 && (h = m = 0, g = 180 - g), f = ut(Math.sqrt(E * E + D * D + O * O)), p = ut(Math.sqrt(j * j + ae * ae)), C = Qr(A, j), _ = Math.abs(C) > 2e-4 ? C * Xr : 0, y = ie ? 1 / (ie < 0 ? -ie : ie) : 0), n.svg && (M = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !Ki(Ti(e, _i)), M && e.setAttribute("transform", M))), Math.abs(_) > 90 && Math.abs(_) < 270 && (i ? (f *= -1, _ += m <= 0 ? 180 : -180, m += m <= 0 ? 180 : -180) : (p *= -1, _ += _ <= 0 ? 180 : -180)), t ||= n.uncache, n.x = l - ((n.xPercent = l && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-l) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + a, n.y = u - ((n.yPercent = u && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + a, n.z = d + a, n.scaleX = ut(f), n.scaleY = ut(p), n.rotation = ut(m) + o, n.rotationX = ut(h) + o, n.rotationY = ut(g) + o, n.skewX = _ + o, n.skewY = v + o, n.transformPerspective = y + a, (n.zOrigin = parseFloat(c.split(" ")[2]) || !t && n.zOrigin || 0) && (r[vi] = Zi(c)), n.xOffset = n.yOffset = 0, n.force3D = fe.force3D, n.renderTransform = n.svg ? ra : Ci ? na : $i, n.uncache = 0, n;
}, Zi = function(e) {
	return (e = e.split(" "))[0] + " " + e[1];
}, Qi = function(e, t, n) {
	var r = $t(t);
	return ut(parseFloat(t) + parseFloat(Li(e, "x", n + "px", r))) + r;
}, $i = function(e, t) {
	t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, na(e, t);
}, G = "0deg", ea = "0px", ta = ") ", na = function(e, t) {
	var n = t || this, r = n.xPercent, i = n.yPercent, a = n.x, o = n.y, s = n.z, c = n.rotation, l = n.rotationY, u = n.rotationX, d = n.skewX, f = n.skewY, p = n.scaleX, m = n.scaleY, h = n.transformPerspective, g = n.force3D, _ = n.target, v = n.zOrigin, y = "", b = g === "auto" && e && e !== 1 || g === !0;
	if (v && (u !== G || l !== G)) {
		var x = parseFloat(l) * Zr, S = Math.sin(x), C = Math.cos(x), w;
		x = parseFloat(u) * Zr, w = Math.cos(x), a = Qi(_, a, S * w * -v), o = Qi(_, o, -Math.sin(x) * -v), s = Qi(_, s, C * w * -v + v);
	}
	h !== ea && (y += "perspective(" + h + ta), (r || i) && (y += "translate(" + r + "%, " + i + "%) "), (b || a !== ea || o !== ea || s !== ea) && (y += s !== ea || b ? "translate3d(" + a + ", " + o + ", " + s + ") " : "translate(" + a + ", " + o + ta), c !== G && (y += "rotate(" + c + ta), l !== G && (y += "rotateY(" + l + ta), u !== G && (y += "rotateX(" + u + ta), (d !== G || f !== G) && (y += "skew(" + d + ", " + f + ta), (p !== 1 || m !== 1) && (y += "scale(" + p + ", " + m + ta), _.style[_i] = y || "translate(0, 0)";
}, ra = function(e, t) {
	var n = t || this, r = n.xPercent, i = n.yPercent, a = n.x, o = n.y, s = n.rotation, c = n.skewX, l = n.skewY, u = n.scaleX, d = n.scaleY, f = n.target, p = n.xOrigin, m = n.yOrigin, h = n.xOffset, g = n.yOffset, _ = n.forceCSS, v = parseFloat(a), y = parseFloat(o), b, x, S, C, w;
	s = parseFloat(s), c = parseFloat(c), l = parseFloat(l), l && (l = parseFloat(l), c += l, s += l), s || c ? (s *= Zr, c *= Zr, b = Math.cos(s) * u, x = Math.sin(s) * u, S = Math.sin(s - c) * -d, C = Math.cos(s - c) * d, c && (l *= Zr, w = Math.tan(c - l), w = Math.sqrt(1 + w * w), S *= w, C *= w, l && (w = Math.tan(l), w = Math.sqrt(1 + w * w), b *= w, x *= w)), b = ut(b), x = ut(x), S = ut(S), C = ut(C)) : (b = u, C = d, x = S = 0), (v && !~(a + "").indexOf("px") || y && !~(o + "").indexOf("px")) && (v = Li(f, "x", a, "px"), y = Li(f, "y", o, "px")), (p || m || h || g) && (v = ut(v + p - (p * b + m * S) + h), y = ut(y + m - (p * x + m * C) + g)), (r || i) && (w = f.getBBox(), v = ut(v + r / 100 * w.width), y = ut(y + i / 100 * w.height)), w = "matrix(" + b + "," + x + "," + S + "," + C + "," + v + "," + y + ")", f.setAttribute("transform", w), _ && (f.style[_i] = w);
}, ia = function(e, t, n, r, i) {
	var a = 360, o = ye(i), s = parseFloat(i) * (o && ~i.indexOf("rad") ? Xr : 1) - r, c = r + s + "deg", l, u;
	return o && (l = i.split("_")[1], l === "short" && (s %= a, s !== s % (a / 2) && (s += s < 0 ? a : -a)), l === "cw" && s < 0 ? s = (s + a * $r) % a - ~~(s / a) * a : l === "ccw" && s > 0 && (s = (s - a * $r) % a - ~~(s / a) * a)), e._pt = u = new Er(e._pt, t, n, r, s, ai), u.e = c, u.u = "deg", e._props.push(n), u;
}, aa = function(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}, oa = function(e, t, n) {
	var r = aa({}, n._gsap), i = "perspective,force3D,transformOrigin,svgOrigin", a = n.style, o, s, c, l, u, d, f, p;
	for (s in r.svg ? (c = n.getAttribute("transform"), n.setAttribute("transform", ""), a[_i] = t, o = Xi(n, 1), Ni(n, _i), n.setAttribute("transform", c)) : (c = getComputedStyle(n)[_i], a[_i] = t, o = Xi(n, 1), a[_i] = c), Yr) c = r[s], l = o[s], c !== l && i.indexOf(s) < 0 && (f = $t(c), p = $t(l), u = f === p ? parseFloat(c) : Li(n, s, c, p), d = parseFloat(l), e._pt = new Er(e._pt, o, s, u, d - u, ii), e._pt.u = p || 0, e._props.push(s));
	aa(o, r);
};
lt("padding,margin,Width,Radius", function(e, t) {
	var n = "Top", r = "Right", i = "Bottom", a = "Left", o = (t < 3 ? [
		n,
		r,
		i,
		a
	] : [
		n + a,
		n + r,
		i + r,
		i + a
	]).map(function(n) {
		return t < 2 ? e + n : "border" + n + e;
	});
	Ui[t > 1 ? "border" + e : e] = function(e, t, n, r, i) {
		var a, s;
		if (arguments.length < 4) return a = o.map(function(t) {
			return Ri(e, t, n);
		}), s = a.join(" "), s.split(a[0]).length === 5 ? a[0] : s;
		a = (r + "").split(" "), s = {}, o.forEach(function(e, t) {
			return s[e] = a[t] = a[t] || a[(t - 1) / 2 | 0];
		}), e.init(t, s, i);
	};
});
var sa = {
	name: "css",
	register: Oi,
	targetTest: function(e) {
		return e.style && e.nodeType;
	},
	init: function(e, t, n, r, i) {
		var a = this._props, o = e.style, s = n.vars.startAt, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w;
		for (m in Wr || Oi(), this.styles = this.styles || Si(e), C = this.styles.props, this.tween = n, t) if (m !== "autoRound" && (l = t[m], !(tt[m] && nr(m, t, n, r, e, i)))) {
			if (f = typeof l, p = Ui[m], f === "function" && (l = l.call(n, r, e, i), f = typeof l), f === "string" && ~l.indexOf("random(") && (l = vn(l)), p) p(this, e, m, l, n) && (S = 1);
			else if (m.substr(0, 2) === "--") c = (getComputedStyle(e).getPropertyValue(m) + "").trim(), l += "", Nn.lastIndex = 0, Nn.test(c) || (h = $t(c), g = $t(l), g ? h !== g && (c = Li(e, m, c, g) + g) : h && (l += h)), this.add(o, "setProperty", c, l, r, i, 0, 0, m), a.push(m), C.push(m, 0, o[m]);
			else if (f !== "undefined") {
				if (s && m in s ? (c = typeof s[m] == "function" ? s[m].call(n, r, e, i) : s[m], ye(c) && ~c.indexOf("random(") && (c = vn(c)), $t(c + "") || c === "auto" || (c += fe.units[m] || $t(Ri(e, m)) || ""), (c + "").charAt(1) === "=" && (c = Ri(e, m))) : c = Ri(e, m), d = parseFloat(c), _ = f === "string" && l.charAt(1) === "=" && l.substr(0, 2), _ && (l = l.substr(2)), u = parseFloat(l), m in ri && (m === "autoAlpha" && (d === 1 && Ri(e, "visibility") === "hidden" && u && (d = 0), C.push("visibility", 0, o.visibility), Pi(this, o, "visibility", d ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), m !== "scale" && m !== "transform" && (m = ri[m], ~m.indexOf(",") && (m = m.split(",")[0]))), v = m in Yr, v) {
					if (this.styles.save(m), w = l, f === "string" && l.substring(0, 6) === "var(--") {
						if (l = Ti(e, l.substring(4, l.indexOf(")"))), l.substring(0, 5) === "calc(") {
							var T = e.style.perspective;
							e.style.perspective = l, l = Ti(e, "perspective"), T ? e.style.perspective = T : Ni(e, "perspective");
						}
						u = parseFloat(l);
					}
					if (y || (b = e._gsap, b.renderTransform && !t.parseTransform || Xi(e, t.parseTransform), x = t.smoothOrigin !== !1 && b.smooth, y = this._pt = new Er(this._pt, o, _i, 0, 1, b.renderTransform, b, 0, -1), y.dep = 1), m === "scale") this._pt = new Er(this._pt, b, "scaleY", b.scaleY, (_ ? ft(b.scaleY, _ + u) : u) - b.scaleY || 0, ii), this._pt.u = 0, a.push("scaleY", m), m += "X";
					else if (m === "transformOrigin") {
						C.push(vi, 0, o[vi]), l = Vi(l), b.svg ? Yi(e, l, 0, x, 0, this) : (g = parseFloat(l.split(" ")[2]) || 0, g !== b.zOrigin && Pi(this, b, "zOrigin", b.zOrigin, g), Pi(this, o, m, Zi(c), Zi(l)));
						continue;
					} else if (m === "svgOrigin") {
						Yi(e, l, 1, x, 0, this);
						continue;
					} else if (m in Gi) {
						ia(this, b, m, d, _ ? ft(d, _ + l) : l);
						continue;
					} else if (m === "smoothOrigin") {
						Pi(this, b, "smooth", b.smooth, l);
						continue;
					} else if (m === "force3D") {
						b[m] = l;
						continue;
					} else if (m === "transform") {
						oa(this, l, e);
						continue;
					}
				} else m in o || (m = Di(m) || m);
				if (v || (u || u === 0) && (d || d === 0) && !ni.test(l) && m in o) h = (c + "").substr((d + "").length), u ||= 0, g = $t(l) || (m in fe.units ? fe.units[m] : h), h !== g && (d = Li(e, m, c, g)), this._pt = new Er(this._pt, v ? b : o, m, d, (_ ? ft(d, _ + u) : u) - d, !v && (g === "px" || m === "zIndex") && t.autoRound !== !1 ? ci : ii), this._pt.u = g || 0, v && w !== l ? (this._pt.b = c, this._pt.e = w, this._pt.r = si) : h !== g && g !== "%" && (this._pt.b = c, this._pt.r = oi);
				else if (m in o) zi.call(this, e, m, c, _ ? _ + l : l);
				else if (m in e) this.add(e, m, c || e[m], _ ? _ + l : l, r, i);
				else if (m !== "parseTransform") {
					We(m, l);
					continue;
				}
				v || (m in o ? C.push(m, 0, o[m]) : typeof e[m] == "function" ? C.push(m, 2, e[m]()) : C.push(m, 1, c || e[m])), a.push(m);
			}
		}
		S && Tr(this);
	},
	render: function(e, t) {
		if (t.tween._time || !qr()) for (var n = t._pt; n;) n.r(e, n.d), n = n._next;
		else t.styles.revert();
	},
	get: Ri,
	aliases: ri,
	getSetter: function(e, t, n) {
		var r = ri[t];
		return r && r.indexOf(",") < 0 && (t = r), t in Yr && t !== vi && (e._gsap.x || Ri(e, "x")) ? n && Kr === n ? t === "scale" ? mi : pi : (Kr = n || {}) && (t === "scale" ? hi : gi) : e.style && !xe(e.style[t]) ? di : ~t.indexOf("-") ? fi : _r(e, t);
	},
	core: {
		_removeProperty: Ni,
		_getMatrix: Ji
	}
};
Br.utils.checkPrefix = Di, Br.core.getStyleSaver = Si, (function(e, t, n, r) {
	var i = lt(e + "," + t + "," + n, function(e) {
		Yr[e] = 1;
	});
	lt(t, function(e) {
		fe.units[e] = "deg", Gi[e] = 1;
	}), ri[i[13]] = e + "," + t, lt(r, function(e) {
		var t = e.split(":");
		ri[t[1]] = i[t[0]];
	});
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"), lt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
	fe.units[e] = "px";
}), Br.registerPlugin(sa);
//#endregion
//#region ../../../../Downloads/Portfolio-component-lab/node_modules/gsap/index.js
var ca = Br.registerPlugin(sa) || Br;
ca.core.Tween;
//#endregion
//#region ../../../../Downloads/Portfolio-Elena-Preview/component-src/CinematicLandingIntro.tsx
function la({ reduced: e }) {
	let t = b.useRef(null);
	return b.useLayoutEffect(() => {
		let n = t.current;
		if (!n || e) return;
		let r = ca.context(() => {
			let e = n.querySelector(".cinematic-first"), t = n.querySelector(".cinematic-last"), r = n.querySelectorAll(".hero-portrait img"), i = n.querySelectorAll(".cinematic-card-copy>p");
			ca.set(e, {
				autoAlpha: 0,
				y: 60,
				scale: .85,
				filter: "blur(20px)",
				rotationX: -20
			}), ca.set(t, { clipPath: "inset(0 100% 0 0)" }), ca.set(r, {
				autoAlpha: 0,
				y: 35,
				scale: 1.035,
				clipPath: "inset(0 0 100% 0)"
			}), ca.set(i, {
				autoAlpha: 0,
				y: 20
			}), ca.timeline({ delay: .1 }).to(e, {
				duration: 1.1,
				autoAlpha: 1,
				y: 0,
				scale: 1,
				filter: "blur(0px)",
				rotationX: 0,
				ease: "expo.out"
			}).to(t, {
				duration: .95,
				clipPath: "inset(0 0% 0 0)",
				ease: "power4.inOut"
			}, .3).to(i, {
				autoAlpha: 1,
				y: 0,
				duration: .8,
				stagger: .1,
				ease: "power3.out"
			}, .65).to(r, {
				autoAlpha: 1,
				y: 0,
				scale: 1,
				clipPath: "inset(0 0 0% 0)",
				duration: 1.25,
				ease: "power3.out"
			}, .7);
		}, n);
		return () => r.revert();
	}, [e]), /* @__PURE__ */ (0, x.jsxs)("div", {
		ref: t,
		className: "cinematic-intro" + (e ? " cinematic-static" : ""),
		children: [
			/* @__PURE__ */ (0, x.jsx)("div", {
				className: "cinematic-grid",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, x.jsxs)("div", {
				className: "cinematic-photo-card",
				children: [
					/* @__PURE__ */ (0, x.jsxs)("div", {
						className: "hero-portrait",
						"aria-hidden": "true",
						children: [/* @__PURE__ */ (0, x.jsx)("img", {
							className: "portrait-base",
							src: "assets/portrait.webp",
							alt: "",
							width: "1254",
							height: "1254",
							fetchPriority: "high"
						}), /* @__PURE__ */ (0, x.jsx)("img", {
							className: "portrait-natural",
							src: "assets/portrait.webp",
							alt: "",
							width: "1254",
							height: "1254",
							fetchPriority: "high"
						})]
					}),
					/* @__PURE__ */ (0, x.jsx)("div", {
						className: "cinematic-photo-shade",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, x.jsxs)("div", {
						className: "cinematic-card-copy",
						children: [/* @__PURE__ */ (0, x.jsxs)("h1", {
							className: "cinematic-name",
							children: [/* @__PURE__ */ (0, x.jsx)("span", {
								className: "cinematic-first",
								children: "Anshul"
							}), /* @__PURE__ */ (0, x.jsx)("span", {
								className: "cinematic-last",
								children: "Raman"
							})]
						}), /* @__PURE__ */ (0, x.jsx)("p", { children: "writes software with an adversarial lens — studying how systems break." })]
					})
				]
			}),
			/* @__PURE__ */ (0, x.jsxs)("div", {
				className: "hero-bottom",
				children: [/* @__PURE__ */ (0, x.jsxs)("a", {
					className: "hero-browse",
					href: "#work",
					children: ["Browse the projects ", /* @__PURE__ */ (0, x.jsx)("span", {
						"aria-hidden": "true",
						children: "↘"
					})]
				}), /* @__PURE__ */ (0, x.jsx)("span", {
					className: "hero-caption",
					children: "Cincinnati · OH"
				})]
			})
		]
	});
}
//#endregion
//#region ../../../../Downloads/Portfolio-component-lab/node_modules/gsap/Observer.js
function ua(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function da(e, t, n) {
	return t && ua(e.prototype, t), n && ua(e, n), e;
}
var fa, pa, ma, ha, ga, _a, va, ya, ba, xa, Sa, Ca, wa, Ta = function() {
	return fa || typeof window < "u" && (fa = window.gsap) && fa.registerPlugin && fa;
}, Ea = 1, Da = [], K = [], Oa = [], ka = Date.now, Aa = function(e, t) {
	return t;
}, ja = function() {
	var e = ba.core, t = e.bridge || {}, n = e._scrollers, r = e._proxies;
	n.push.apply(n, K), r.push.apply(r, Oa), K = n, Oa = r, Aa = function(e, n) {
		return t[e](n);
	};
}, Ma = function(e, t) {
	return ~Oa.indexOf(e) && Oa[Oa.indexOf(e) + 1][t];
}, Na = function(e) {
	return !!~xa.indexOf(e);
}, Pa = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: r !== !1,
		capture: !!i
	});
}, Fa = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, Ia = "scrollLeft", La = "scrollTop", Ra = function() {
	return Sa && Sa.isPressed || K.cache++;
}, za = function(e, t) {
	var n = function n(r) {
		if (r || r === 0) {
			Ea && (ma.history.scrollRestoration = "manual");
			var i = Sa && Sa.isPressed;
			r = n.v = Math.round(r) || (Sa && Sa.iOS ? 1 : 0), e(r), n.cacheID = K.cache, i && Aa("ss", r);
		} else (t || K.cache !== n.cacheID || Aa("ref")) && (n.cacheID = K.cache, n.v = e());
		return n.v + n.offset;
	};
	return n.offset = 0, e && n;
}, Ba = {
	s: Ia,
	p: "left",
	p2: "Left",
	os: "right",
	os2: "Right",
	d: "width",
	d2: "Width",
	a: "x",
	sc: za(function(e) {
		return arguments.length ? ma.scrollTo(e, Va.sc()) : ma.pageXOffset || ha[Ia] || ga[Ia] || _a[Ia] || 0;
	})
}, Va = {
	s: La,
	p: "top",
	p2: "Top",
	os: "bottom",
	os2: "Bottom",
	d: "height",
	d2: "Height",
	a: "y",
	op: Ba,
	sc: za(function(e) {
		return arguments.length ? ma.scrollTo(Ba.sc(), e) : ma.pageYOffset || ha[La] || ga[La] || _a[La] || 0;
	})
}, Ha = function(e, t) {
	return (t && t._ctx && t._ctx.selector || fa.utils.toArray)(e)[0] || (typeof e == "string" && fa.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, Ua = function(e, t) {
	for (var n = t.length; n--;) if (t[n] === e || t[n].contains(e)) return !0;
	return !1;
}, Wa = function(e, t) {
	var n = t.s, r = t.sc;
	Na(e) && (e = ha.scrollingElement || ga);
	var i = K.indexOf(e), a = r === Va.sc ? 1 : 2;
	!~i && (i = K.push(e) - 1), K[i + a] || Pa(e, "scroll", Ra);
	var o = K[i + a], s = o || (K[i + a] = za(Ma(e, n), !0) || (Na(e) ? r : za(function(t) {
		return arguments.length ? e[n] = t : e[n];
	})));
	return s.target = e, o || (s.smooth = fa.getProperty(e, "scrollBehavior") === "smooth"), s;
}, Ga = function(e, t, n) {
	var r = e, i = e, a = ka(), o = a, s = t || 50, c = Math.max(500, s * 3), l = function(e, t) {
		var c = ka();
		t || c - a > s ? (i = r, r = e, o = a, a = c) : n ? r += e : r = i + (e - i) / (c - o) * (a - o);
	};
	return {
		update: l,
		reset: function() {
			i = r = n ? 0 : r, o = a = 0;
		},
		getVelocity: function(e) {
			var t = o, s = i, u = ka();
			return (e || e === 0) && e !== r && l(e), a === o || u - o > c ? 0 : (r + (n ? s : -s)) / ((n ? u : a) - t) * 1e3;
		}
	};
}, Ka = function(e, t) {
	return t && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, qa = function(e) {
	var t = Math.max.apply(Math, e), n = Math.min.apply(Math, e);
	return Math.abs(t) >= Math.abs(n) ? t : n;
}, Ja = function() {
	ba = fa.core.globals().ScrollTrigger, ba && ba.core && ja();
}, Ya = function(e) {
	return fa = e || Ta(), !pa && fa && typeof document < "u" && document.body && (ma = window, ha = document, ga = ha.documentElement, _a = ha.body, xa = [
		ma,
		ha,
		ga,
		_a
	], fa.utils.clamp, wa = fa.core.context || function() {}, ya = "onpointerenter" in _a ? "pointer" : "mouse", va = Xa.isTouch = ma.matchMedia && ma.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in ma || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Ca = Xa.eventTypes = ("ontouchstart" in ga ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in ga ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
		return Ea = 0;
	}, 500), pa = 1), ba || Ja(), pa;
};
Ba.op = Va, K.cache = 0;
var Xa = /*#__PURE__*/ function() {
	function e(e) {
		this.init(e);
	}
	var t = e.prototype;
	return t.init = function(e) {
		pa || Ya(fa) || console.warn("Please gsap.registerPlugin(Observer)"), ba || Ja();
		var t = e.tolerance, n = e.dragMinimum, r = e.type, i = e.target, a = e.lineHeight, o = e.debounce, s = e.preventDefault, c = e.onStop, l = e.onStopDelay, u = e.ignore, d = e.wheelSpeed, f = e.event, p = e.onDragStart, m = e.onDragEnd, h = e.onDrag, g = e.onPress, _ = e.onRelease, v = e.onRight, y = e.onLeft, b = e.onUp, x = e.onDown, S = e.onChangeX, C = e.onChangeY, w = e.onChange, T = e.onToggleX, E = e.onToggleY, D = e.onHover, O = e.onHoverEnd, k = e.onMove, A = e.ignoreCheck, j = e.isNormalizer, M = e.onGestureStart, ee = e.onGestureEnd, N = e.onWheel, P = e.onEnable, te = e.onDisable, ne = e.onClick, re = e.scrollSpeed, ie = e.capture, ae = e.allowClicks, oe = e.lockAxis, se = e.onLockAxis;
		this.target = i = Ha(i) || ga, this.vars = e, u &&= fa.utils.toArray(u), t ||= 1e-9, n ||= 0, d ||= 1, re ||= 1, r ||= "wheel,touch,pointer", o = o !== !1, a ||= parseFloat(ma.getComputedStyle(_a).lineHeight) || 22;
		var ce, le, ue, de, F, fe, pe, I = this, L = 0, R = 0, z = e.passive || !s && e.passive !== !1, B = Wa(i, Ba), me = Wa(i, Va), he = B(), ge = me(), _e = ~r.indexOf("touch") && !~r.indexOf("pointer") && Ca[0] === "pointerdown", ve = Na(i), V = i.ownerDocument || ha, ye = [
			0,
			0,
			0
		], H = [
			0,
			0,
			0
		], be = 0, xe = function() {
			return be = ka();
		}, Se = function(e, t) {
			return (I.event = e) && u && Ua(e.target, u) || t && _e && e.pointerType !== "touch" || A && A(e, t);
		}, Ce = function() {
			I._vx.reset(), I._vy.reset(), le.pause(), c && c(I);
		}, we = function() {
			var e = I.deltaX = qa(ye), n = I.deltaY = qa(H), r = Math.abs(e) >= t, i = Math.abs(n) >= t;
			w && (r || i) && w(I, e, n, ye, H), r && (v && I.deltaX > 0 && v(I), y && I.deltaX < 0 && y(I), S && S(I), T && I.deltaX < 0 != L < 0 && T(I), L = I.deltaX, ye[0] = ye[1] = ye[2] = 0), i && (x && I.deltaY > 0 && x(I), b && I.deltaY < 0 && b(I), C && C(I), E && I.deltaY < 0 != R < 0 && E(I), R = I.deltaY, H[0] = H[1] = H[2] = 0), (de || ue) && (k && k(I), ue &&= (p && ue === 1 && p(I), h && h(I), 0), de = !1), fe && !(fe = !1) && se && se(I), F &&= (N(I), !1), ce = 0;
		}, Te = function(e, t, n) {
			ye[n] += e, H[n] += t, I._vx.update(e), I._vy.update(t), o ? ce ||= requestAnimationFrame(we) : we();
		}, Ee = function(e, t) {
			oe && !pe && (I.axis = pe = Math.abs(e) > Math.abs(t) ? "x" : "y", fe = !0), pe !== "y" && (ye[2] += e, I._vx.update(e, !0)), pe !== "x" && (H[2] += t, I._vy.update(t, !0)), o ? ce ||= requestAnimationFrame(we) : we();
		}, De = function(e) {
			if (!Se(e, 1)) {
				e = Ka(e, s);
				var t = e.clientX, r = e.clientY, i = t - I.x, a = r - I.y, o = I.isDragging;
				I.x = t, I.y = r, (o || (i || a) && (Math.abs(I.startX - t) >= n || Math.abs(I.startY - r) >= n)) && (ue ||= o ? 2 : 1, o || (I.isDragging = !0), Ee(i, a));
			}
		}, Oe = I.onPress = function(e) {
			Se(e, 1) || e && e.button || (I.axis = pe = null, le.pause(), I.isPressed = !0, e = Ka(e), L = R = 0, I.startX = I.x = e.clientX, I.startY = I.y = e.clientY, I._vx.reset(), I._vy.reset(), Pa(j ? i : V, Ca[1], De, z, !0), I.deltaX = I.deltaY = 0, g && g(I));
		}, ke = I.onRelease = function(e) {
			if (!Se(e, 1)) {
				Fa(j ? i : V, Ca[1], De, !0);
				var t = !isNaN(I.y - I.startY), n = I.isDragging, r = n && (Math.abs(I.x - I.startX) > 3 || Math.abs(I.y - I.startY) > 3), a = Ka(e);
				!r && t && (I._vx.reset(), I._vy.reset(), s && ae && fa.delayedCall(.08, function() {
					if (ka() - be > 300 && !e.defaultPrevented) {
						if (e.target.click) e.target.click();
						else if (V.createEvent) {
							var t = V.createEvent("MouseEvents");
							t.initMouseEvent("click", !0, !0, ma, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t);
						}
					}
				})), I.isDragging = I.isGesturing = I.isPressed = !1, c && n && !j && le.restart(!0), ue && we(), m && n && m(I), _ && _(I, r);
			}
		}, U = function(e) {
			return e.touches && e.touches.length > 1 && (I.isGesturing = !0) && M(e, I.isDragging);
		}, Ae = function() {
			return (I.isGesturing = !1) || ee(I);
		}, je = function(e) {
			if (!Se(e)) {
				var t = B(), n = me();
				Te((t - he) * re, (n - ge) * re, 1), he = t, ge = n, c && le.restart(!0);
			}
		}, Me = function(e) {
			if (!Se(e)) {
				e = Ka(e, s), N && (F = !0);
				var t = (e.deltaMode === 1 ? a : e.deltaMode === 2 ? ma.innerHeight : 1) * d;
				Te(e.deltaX * t, e.deltaY * t, 0), c && !j && le.restart(!0);
			}
		}, Ne = function(e) {
			if (!Se(e)) {
				var t = e.clientX, n = e.clientY, r = t - I.x, i = n - I.y;
				I.x = t, I.y = n, de = !0, c && le.restart(!0), (r || i) && Ee(r, i);
			}
		}, Pe = function(e) {
			I.event = e, D(I);
		}, Fe = function(e) {
			I.event = e, O(I);
		}, Ie = function(e) {
			return Se(e) || Ka(e, s) && ne(I);
		};
		le = I._dc = fa.delayedCall(l || .25, Ce).pause(), I.deltaX = I.deltaY = 0, I._vx = Ga(0, 50, !0), I._vy = Ga(0, 50, !0), I.scrollX = B, I.scrollY = me, I.isDragging = I.isGesturing = I.isPressed = !1, wa(this), I.enable = function(e) {
			return I.isEnabled || (Pa(ve ? V : i, "scroll", Ra), r.indexOf("scroll") >= 0 && Pa(ve ? V : i, "scroll", je, z, ie), r.indexOf("wheel") >= 0 && Pa(i, "wheel", Me, z, ie), (r.indexOf("touch") >= 0 && va || r.indexOf("pointer") >= 0) && (Pa(i, Ca[0], Oe, z, ie), Pa(V, Ca[2], ke), Pa(V, Ca[3], ke), ae && Pa(i, "click", xe, !0, !0), ne && Pa(i, "click", Ie), M && Pa(V, "gesturestart", U), ee && Pa(V, "gestureend", Ae), D && Pa(i, ya + "enter", Pe), O && Pa(i, ya + "leave", Fe), k && Pa(i, ya + "move", Ne)), I.isEnabled = !0, I.isDragging = I.isGesturing = I.isPressed = de = ue = !1, I._vx.reset(), I._vy.reset(), he = B(), ge = me(), e && e.type && Oe(e), P && P(I)), I;
		}, I.disable = function() {
			I.isEnabled && (Da.filter(function(e) {
				return e !== I && Na(e.target);
			}).length || Fa(ve ? V : i, "scroll", Ra), I.isPressed && (I._vx.reset(), I._vy.reset(), Fa(j ? i : V, Ca[1], De, !0)), Fa(ve ? V : i, "scroll", je, ie), Fa(i, "wheel", Me, ie), Fa(i, Ca[0], Oe, ie), Fa(V, Ca[2], ke), Fa(V, Ca[3], ke), Fa(i, "click", xe, !0), Fa(i, "click", Ie), Fa(V, "gesturestart", U), Fa(V, "gestureend", Ae), Fa(i, ya + "enter", Pe), Fa(i, ya + "leave", Fe), Fa(i, ya + "move", Ne), I.isEnabled = I.isPressed = I.isDragging = !1, te && te(I));
		}, I.kill = I.revert = function() {
			I.disable();
			var e = Da.indexOf(I);
			e >= 0 && Da.splice(e, 1), Sa === I && (Sa = 0);
		}, Da.push(I), j && Na(i) && (Sa = I), I.enable(f);
	}, da(e, [{
		key: "velocityX",
		get: function() {
			return this._vx.getVelocity();
		}
	}, {
		key: "velocityY",
		get: function() {
			return this._vy.getVelocity();
		}
	}]), e;
}();
Xa.version = "3.15.0", Xa.create = function(e) {
	return new Xa(e);
}, Xa.register = Ya, Xa.getAll = function() {
	return Da.slice();
}, Xa.getById = function(e) {
	return Da.filter(function(t) {
		return t.vars.id === e;
	})[0];
}, Ta() && fa.registerPlugin(Xa);
//#endregion
//#region ../../../../Downloads/Portfolio-component-lab/node_modules/gsap/ScrollTrigger.js
var q, Za, J, Qa, $a, Y, eo, to, no, ro, io, ao, oo, so, co, lo, uo, fo, po, mo, ho, go, _o, vo, yo, bo, xo, So, Co, wo, To, Eo, Do, Oo, ko = 1, Ao = Date.now, jo = Ao(), Mo = 0, No = 0, X = function(e, t, n) {
	var r = Yo(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
	return n["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e;
}, Po = function(e, t) {
	return t && (!Yo(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
}, Fo = function e() {
	return No && requestAnimationFrame(e);
}, Io = function() {
	return so = 1;
}, Lo = function() {
	return so = 0;
}, Ro = function(e) {
	return e;
}, zo = function(e) {
	return Math.round(e * 1e5) / 1e5 || 0;
}, Bo = function() {
	return typeof window < "u";
}, Vo = function() {
	return q || Bo() && (q = window.gsap) && q.registerPlugin && q;
}, Ho = function(e) {
	return !!~eo.indexOf(e);
}, Uo = function(e) {
	return (e === "Height" ? To : J["inner" + e]) || $a["client" + e] || Y["client" + e];
}, Wo = function(e) {
	return Ma(e, "getBoundingClientRect") || (Ho(e) ? function() {
		return gc.width = J.innerWidth, gc.height = To, gc;
	} : function() {
		return bs(e);
	});
}, Go = function(e, t, n) {
	var r = n.d, i = n.d2, a = n.a;
	return (a = Ma(e, "getBoundingClientRect")) ? function() {
		return a()[r];
	} : function() {
		return (t ? Uo(i) : e["client" + i]) || 0;
	};
}, Ko = function(e, t) {
	return !t || ~Oa.indexOf(e) ? Wo(e) : function() {
		return gc;
	};
}, qo = function(e, t) {
	var n = t.s, r = t.d2, i = t.d, a = t.a;
	return Math.max(0, (n = "scroll" + r) && (a = Ma(e, n)) ? a() - Wo(e)()[i] : Ho(e) ? ($a[n] || Y[n]) - Uo(r) : e[n] - e["offset" + r]);
}, Jo = function(e, t) {
	for (var n = 0; n < po.length; n += 3) (!t || ~t.indexOf(po[n + 1])) && e(po[n], po[n + 1], po[n + 2]);
}, Yo = function(e) {
	return typeof e == "string";
}, Xo = function(e) {
	return typeof e == "function";
}, Zo = function(e) {
	return typeof e == "number";
}, Qo = function(e) {
	return typeof e == "object";
}, $o = function(e, t, n) {
	return e && e.progress(+!t) && n && e.pause();
}, es = function(e, t, n) {
	if (e.enabled) {
		var r = e._ctx ? e._ctx.add(function() {
			return t(e, n);
		}) : t(e, n);
		r && r.totalTime && (e.callbackAnimation = r);
	}
}, ts = Math.abs, ns = "left", rs = "top", is = "right", as = "bottom", os = "width", ss = "height", cs = "Right", ls = "Left", us = "Top", ds = "Bottom", fs = "padding", ps = "margin", ms = "Width", hs = "Height", gs = "px", _s = function(e) {
	return J.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e);
}, vs = function(e) {
	var t = _s(e).position;
	e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
}, ys = function(e, t) {
	for (var n in t) n in e || (e[n] = t[n]);
	return e;
}, bs = function(e, t) {
	var n = t && _s(e)[co] !== "matrix(1, 0, 0, 1, 0, 0)" && q.to(e, {
		x: 0,
		y: 0,
		xPercent: 0,
		yPercent: 0,
		rotation: 0,
		rotationX: 0,
		rotationY: 0,
		scale: 1,
		skewX: 0,
		skewY: 0
	}).progress(1), r = e.getBoundingClientRect ? e.getBoundingClientRect() : e.scrollingElement.getBoundingClientRect();
	return n && n.progress(0).kill(), r;
}, xs = function(e, t) {
	var n = t.d2;
	return e["offset" + n] || e["client" + n] || 0;
}, Ss = function(e) {
	var t = [], n = e.labels, r = e.duration(), i;
	for (i in n) t.push(n[i] / r);
	return t;
}, Cs = function(e) {
	return function(t) {
		return q.utils.snap(Ss(e), t);
	};
}, ws = function(e) {
	var t = q.utils.snap(e), n = Array.isArray(e) && e.slice(0).sort(function(e, t) {
		return e - t;
	});
	return n ? function(e, r, i) {
		i === void 0 && (i = .001);
		var a;
		if (!r) return t(e);
		if (r > 0) {
			for (e -= i, a = 0; a < n.length; a++) if (n[a] >= e) return n[a];
			return n[a - 1];
		}
		for (a = n.length, e += i; a--;) if (n[a] <= e) return n[a];
		return n[0];
	} : function(n, r, i) {
		i === void 0 && (i = .001);
		var a = t(n);
		return !r || Math.abs(a - n) < i || a - n < 0 == r < 0 ? a : t(r < 0 ? n - e : n + e);
	};
}, Ts = function(e) {
	return function(t, n) {
		return ws(Ss(e))(t, n.direction);
	};
}, Es = function(e, t, n, r) {
	return n.split(",").forEach(function(n) {
		return e(t, n, r);
	});
}, Ds = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: !r,
		capture: !!i
	});
}, Os = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, ks = function(e, t, n) {
	n &&= n.wheelHandler, n && (e(t, "wheel", n), e(t, "touchmove", n));
}, As = {
	startColor: "green",
	endColor: "red",
	indent: 0,
	fontSize: "16px",
	fontWeight: "normal"
}, js = {
	toggleActions: "play",
	anticipatePin: 0
}, Ms = {
	top: 0,
	left: 0,
	center: .5,
	bottom: 1,
	right: 1
}, Ns = function(e, t) {
	if (Yo(e)) {
		var n = e.indexOf("="), r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
		~n && (e.indexOf("%") > n && (r *= t / 100), e = e.substr(0, n - 1)), e = r + (e in Ms ? Ms[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
	}
	return e;
}, Ps = function(e, t, n, r, i, a, o, s) {
	var c = i.startColor, l = i.endColor, u = i.fontSize, d = i.indent, f = i.fontWeight, p = Qa.createElement("div"), m = Ho(n) || Ma(n, "pinType") === "fixed", h = e.indexOf("scroller") !== -1, g = m ? Y : n.tagName === "IFRAME" ? n.contentDocument.body : n, _ = e.indexOf("start") !== -1, v = _ ? c : l, y = "border-color:" + v + ";font-size:" + u + ";color:" + v + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
	return y += "position:" + ((h || s) && m ? "fixed;" : "absolute;"), (h || s || !m) && (y += (r === Va ? is : as) + ":" + (a + parseFloat(d)) + "px;"), o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), p._isStart = _, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = y, p.innerText = t || t === 0 ? e + "-" + t : e, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + r.op.d2], Fs(p, 0, r, _), p;
}, Fs = function(e, t, n, r) {
	var i = { display: "block" }, a = n[r ? "os2" : "p2"], o = n[r ? "p2" : "os2"];
	e._isFlipped = r, i[n.a + "Percent"] = r ? -100 : 0, i[n.a] = r ? "1px" : 0, i["border" + a + ms] = 1, i["border" + o + ms] = 0, i[n.p] = t + "px", q.set(e, i);
}, Z = [], Is = {}, Ls, Rs = function() {
	return Ao() - Mo > 34 && (Ls ||= requestAnimationFrame(sc));
}, zs = function() {
	(!_o || !_o.isPressed || _o.startX > Y.clientWidth) && (K.cache++, _o ? Ls ||= requestAnimationFrame(sc) : sc(), Mo || Gs("scrollStart"), Mo = Ao());
}, Bs = function() {
	bo = J.innerWidth, yo = J.innerHeight;
}, Vs = function(e) {
	K.cache++, (e === !0 || !oo && !go && !Qa.fullscreenElement && !Qa.webkitFullscreenElement && (!vo || bo !== J.innerWidth || Math.abs(J.innerHeight - yo) > J.innerHeight * .25)) && to.restart(!0);
}, Hs = {}, Us = [], Ws = function e() {
	return Os(Q, "scrollEnd", e) || rc(!0);
}, Gs = function(e) {
	return Hs[e] && Hs[e].map(function(e) {
		return e();
	}) || Us;
}, Ks = [], qs = function(e) {
	for (var t = 0; t < Ks.length; t += 5) (!e || Ks[t + 4] && Ks[t + 4].query === e) && (Ks[t].style.cssText = Ks[t + 1], Ks[t].getBBox && Ks[t].setAttribute("transform", Ks[t + 2] || ""), Ks[t + 3].uncache = 1);
}, Js = function() {
	return K.forEach(function(e) {
		return Xo(e) && ++e.cacheID && (e.rec = e());
	});
}, Ys = function(e, t) {
	var n;
	for (lo = 0; lo < Z.length; lo++) n = Z[lo], n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
	Eo = !0, t && qs(t), t || Gs("revert");
}, Xs = function(e, t) {
	K.cache++, (t || !Zs) && K.forEach(function(e) {
		return Xo(e) && e.cacheID++ && (e.rec = 0);
	}), Yo(e) && (J.history.scrollRestoration = Co = e);
}, Zs, Qs = 0, $s, ec = function() {
	if ($s !== Qs) {
		var e = $s = Qs;
		requestAnimationFrame(function() {
			return e === Qs && rc(!0);
		});
	}
}, tc = function() {
	Y.appendChild(wo), To = !_o && wo.offsetHeight || J.innerHeight, Y.removeChild(wo);
}, nc = function(e) {
	return no(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
		return t.style.display = e ? "none" : "block";
	});
}, rc = function(e, t) {
	if ($a = Qa.documentElement, Y = Qa.body, eo = [
		J,
		Qa,
		$a,
		Y
	], Mo && !e && !Eo) Ds(Q, "scrollEnd", Ws);
	else {
		tc(), Zs = Q.isRefreshing = !0, Eo || Js();
		var n = Gs("refreshInit");
		mo && Q.sort(), t || Ys(), K.forEach(function(e) {
			Xo(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
		}), Z.slice(0).forEach(function(e) {
			return e.refresh();
		}), Eo = !1, Z.forEach(function(e) {
			if (e._subPinOffset && e.pin) {
				var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight", n = e.pin[t];
				e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh();
			}
		}), Do = 1, nc(!0), Z.forEach(function(e) {
			var t = qo(e.scroller, e._dir), n = e.vars.end === "max" || e._endClamp && e.end > t, r = e._startClamp && e.start >= t;
			(n || r) && e.setPositions(r ? t - 1 : e.start, n ? Math.max(r ? t : e.start + 1, t) : e.end, !0);
		}), nc(!1), Do = 0, n.forEach(function(e) {
			return e && e.render && e.render(-1);
		}), K.forEach(function(e) {
			Xo(e) && (e.smooth && requestAnimationFrame(function() {
				return e.target.style.scrollBehavior = "smooth";
			}), e.rec && e(e.rec));
		}), Xs(Co, 1), to.pause(), Qs++, Zs = 2, sc(2), Z.forEach(function(e) {
			return Xo(e.vars.onRefresh) && e.vars.onRefresh(e);
		}), Zs = Q.isRefreshing = !1, Gs("refresh");
	}
}, ic = 0, ac = 1, oc, sc = function(e) {
	if (e === 2 || !Zs && !Eo) {
		Q.isUpdating = !0, oc && oc.update(0);
		var t = Z.length, n = Ao(), r = n - jo >= 50, i = t && Z[0].scroll();
		if (ac = ic > i ? -1 : 1, Zs || (ic = i), r && (Mo && !so && n - Mo > 200 && (Mo = 0, Gs("scrollEnd")), io = jo, jo = n), ac < 0) {
			for (lo = t; lo-- > 0;) Z[lo] && Z[lo].update(0, r);
			ac = 1;
		} else for (lo = 0; lo < t; lo++) Z[lo] && Z[lo].update(0, r);
		Q.isUpdating = !1;
	}
	Ls = 0;
}, cc = [
	ns,
	rs,
	as,
	is,
	ps + ds,
	ps + cs,
	ps + us,
	ps + ls,
	"display",
	"flexShrink",
	"float",
	"zIndex",
	"gridColumnStart",
	"gridColumnEnd",
	"gridRowStart",
	"gridRowEnd",
	"gridArea",
	"justifySelf",
	"alignSelf",
	"placeSelf",
	"order"
], lc = cc.concat([
	os,
	ss,
	"boxSizing",
	"max" + ms,
	"max" + hs,
	"position",
	ps,
	fs,
	fs + us,
	fs + cs,
	fs + ds,
	fs + ls
]), uc = function(e, t, n) {
	pc(n);
	var r = e._gsap;
	if (r.spacerIsNative) pc(r.spacerState);
	else if (e._gsap.swappedIn) {
		var i = t.parentNode;
		i && (i.insertBefore(e, t), i.removeChild(t));
	}
	e._gsap.swappedIn = !1;
}, dc = function(e, t, n, r) {
	if (!e._gsap.swappedIn) {
		for (var i = cc.length, a = t.style, o = e.style, s; i--;) s = cc[i], a[s] = n[s];
		a.position = n.position === "absolute" ? "absolute" : "relative", n.display === "inline" && (a.display = "inline-block"), o[as] = o[is] = "auto", a.flexBasis = n.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[os] = xs(e, Ba) + gs, a[ss] = xs(e, Va) + gs, a[fs] = o[ps] = o[rs] = o[ns] = "0", pc(r), o[os] = o["max" + ms] = n[os], o[ss] = o["max" + hs] = n[ss], o[fs] = n[fs], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0;
	}
}, fc = /([A-Z])/g, pc = function(e) {
	if (e) {
		var t = e.t.style, n = e.length, r = 0, i, a;
		for ((e.t._gsap || q.core.getCache(e.t)).uncache = 1; r < n; r += 2) a = e[r + 1], i = e[r], a ? t[i] = a : t[i] && t.removeProperty(i.replace(fc, "-$1").toLowerCase());
	}
}, mc = function(e) {
	for (var t = lc.length, n = e.style, r = [], i = 0; i < t; i++) r.push(lc[i], n[lc[i]]);
	return r.t = e, r;
}, hc = function(e, t, n) {
	for (var r = [], i = e.length, a = n ? 8 : 0, o; a < i; a += 2) o = e[a], r.push(o, o in t ? t[o] : e[a + 1]);
	return r.t = e.t, r;
}, gc = {
	left: 0,
	top: 0
}, _c = function(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
	Xo(e) && (e = e(s)), Yo(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? Ns("0" + e.substr(3), n) : 0));
	var m = f ? f.time() : 0, h, g, _;
	if (f && f.seek(0), isNaN(e) || (e = +e), Zo(e)) f && (e = q.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, d, e)), o && Fs(o, n, r, !0);
	else {
		Xo(t) && (t = t(s));
		var v = (e || "0").split(" "), y, b, x, S;
		_ = Ha(t, s) || Y, y = bs(_) || {}, (!y || !y.left && !y.top) && _s(_).display === "none" && (S = _.style.display, _.style.display = "block", y = bs(_), S ? _.style.display = S : _.style.removeProperty("display")), b = Ns(v[0], y[r.d]), x = Ns(v[1] || "0", n), e = y[r.p] - c[r.p] - l + b + i - x, o && Fs(o, x, r, n - x < 20 || o._isStart && x > 20), n -= n - x;
	}
	if (p && (s[p] = e || -.001, e < 0 && (e = 0)), a) {
		var C = e + n, w = a._isStart;
		h = "scroll" + r.d2, Fs(a, C, r, w && C > 20 || !w && (u ? Math.max(Y[h], $a[h]) : a.parentNode[h]) <= C + 1), u && (c = bs(o), u && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + gs));
	}
	return f && _ && (h = bs(_), f.seek(d), g = bs(_), f._caScrollDist = h[r.p] - g[r.p], e = e / f._caScrollDist * d), f && f.seek(m), f ? e : Math.round(e);
}, vc = /(webkit|moz|length|cssText|inset)/i, yc = function(e, t, n, r) {
	if (e.parentNode !== t) {
		var i = e.style, a, o;
		if (t === Y) {
			for (a in e._stOrig = i.cssText, o = _s(e), o) !+a && !vc.test(a) && o[a] && typeof i[a] == "string" && a !== "0" && (i[a] = o[a]);
			i.top = n, i.left = r;
		} else i.cssText = e._stOrig;
		q.core.getCache(e).uncache = 1, t.appendChild(e);
	}
}, bc = function(e, t, n) {
	var r = t, i = r;
	return function(t) {
		var a = Math.round(e());
		return a !== r && a !== i && Math.abs(a - r) > 3 && Math.abs(a - i) > 3 && (t = a, n && n()), i = r, r = Math.round(t), r;
	};
}, xc = function(e, t, n) {
	var r = {};
	r[t.p] = "+=" + n, q.set(e, r);
}, Sc = function(e, t) {
	var n = Wa(e, t), r = "_scroll" + t.p2, i = function t(i, a, o, s, c) {
		var l = t.tween, u = a.onComplete, d = {};
		o ||= n();
		var f = bc(n, o, function() {
			l.kill(), t.tween = 0;
		});
		return c = s && c || 0, s ||= i - o, l && l.kill(), a[r] = i, a.inherit = !1, a.modifiers = d, d[r] = function() {
			return f(o + s * l.ratio + c * l.ratio * l.ratio);
		}, a.onUpdate = function() {
			K.cache++, t.tween && sc();
		}, a.onComplete = function() {
			t.tween = 0, u && u.call(l);
		}, l = t.tween = q.to(e, a), l;
	};
	return e[r] = n, n.wheelHandler = function() {
		return i.tween && i.tween.kill() && (i.tween = 0);
	}, Ds(e, "wheel", n.wheelHandler), Q.isTouch && Ds(e, "touchmove", n.wheelHandler), i;
}, Q = /*#__PURE__*/ function() {
	function e(t, n) {
		Za || e.register(q) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), So(this), this.init(t, n);
	}
	var t = e.prototype;
	return t.init = function(t, n) {
		if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !No) this.update = this.refresh = this.kill = Ro;
		else {
			t = ys(Yo(t) || Zo(t) || t.nodeType ? { trigger: t } : t, js);
			var r = t, i = r.onUpdate, a = r.toggleClass, o = r.id, s = r.onToggle, c = r.onRefresh, l = r.scrub, u = r.trigger, d = r.pin, f = r.pinSpacing, p = r.invalidateOnRefresh, m = r.anticipatePin, h = r.onScrubComplete, g = r.onSnapComplete, _ = r.once, v = r.snap, y = r.pinReparent, b = r.pinSpacer, x = r.containerAnimation, S = r.fastScrollEnd, C = r.preventOverlaps, w = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? Ba : Va, T = !l && l !== 0, E = Ha(t.scroller || J), D = q.core.getCache(E), O = Ho(E), k = ("pinType" in t ? t.pinType : Ma(E, "pinType") || O && "fixed") === "fixed", A = [
				t.onEnter,
				t.onLeave,
				t.onEnterBack,
				t.onLeaveBack
			], j = T && t.toggleActions.split(" "), M = "markers" in t ? t.markers : js.markers, ee = O ? 0 : parseFloat(_s(E)["border" + w.p2 + ms]) || 0, N = this, P = t.onRefreshInit && function() {
				return t.onRefreshInit(N);
			}, te = Go(E, O, w), ne = Ko(E, O), re = 0, ie = 0, ae = 0, oe = Wa(E, w), se, ce, le, ue, de, F, fe, pe, I, L, R, z, B, me, he, ge, _e, ve, V, ye, H, be, xe, Se, Ce, we, Te, Ee, De, Oe, ke, U, Ae, je, Me, Ne, Pe, Fe, Ie;
			if (N._startClamp = N._endClamp = !1, N._dir = w, m *= 45, N.scroller = E, N.scroll = x ? x.time.bind(x) : oe, ue = oe(), N.vars = t, n ||= t.animation, "refreshPriority" in t && (mo = 1, t.refreshPriority === -9999 && (oc = N)), D.tweenScroll = D.tweenScroll || {
				top: Sc(E, Va),
				left: Sc(E, Ba)
			}, N.tweenTo = se = D.tweenScroll[w.p], N.scrubDuration = function(e) {
				Ae = Zo(e) && e, Ae ? U ? U.duration(e) : U = q.to(n, {
					ease: "expo",
					totalProgress: "+=0",
					inherit: !1,
					duration: Ae,
					paused: !0,
					onComplete: function() {
						return h && h(N);
					}
				}) : (U && U.progress(1).kill(), U = 0);
			}, n && (n.vars.lazy = !1, n._initted && !N.isReverted || n.vars.immediateRender !== !1 && t.immediateRender !== !1 && n.duration() && n.render(0, !0, !0), N.animation = n.pause(), n.scrollTrigger = N, N.scrubDuration(l), Oe = 0, o ||= n.vars.id), v && ((!Qo(v) || v.push) && (v = { snapTo: v }), "scrollBehavior" in Y.style && q.set(O ? [Y, $a] : E, { scrollBehavior: "auto" }), K.forEach(function(e) {
				return Xo(e) && e.target === (O ? Qa.scrollingElement || $a : E) && (e.smooth = !1);
			}), le = Xo(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? Cs(n) : v.snapTo === "labelsDirectional" ? Ts(n) : v.directional === !1 ? q.utils.snap(v.snapTo) : function(e, t) {
				return ws(v.snapTo)(e, Ao() - ie < 500 ? 0 : t.direction);
			}, je = v.duration || {
				min: .1,
				max: 2
			}, je = Qo(je) ? ro(je.min, je.max) : ro(je, je), Me = q.delayedCall(v.delay || Ae / 2 || .1, function() {
				var e = oe(), t = Ao() - ie < 500, r = se.tween;
				if ((t || Math.abs(N.getVelocity()) < 10) && !r && !so && re !== e) {
					var i = (e - F) / me, a = n && !T ? n.totalProgress() : i, o = t ? 0 : (a - ke) / (Ao() - io) * 1e3 || 0, s = q.utils.clamp(-i, 1 - i, ts(o / 2) * o / .185), c = i + (v.inertia === !1 ? 0 : s), l, u, d = v, f = d.onStart, p = d.onInterrupt, m = d.onComplete;
					if (l = le(c, N), Zo(l) || (l = c), u = Math.max(0, Math.round(F + l * me)), e <= fe && e >= F && u !== e) {
						if (r && !r._initted && r.data <= ts(u - e)) return;
						v.inertia === !1 && (s = l - i), se(u, {
							duration: je(ts(Math.max(ts(c - a), ts(l - a)) * .185 / o / .05 || 0)),
							ease: v.ease || "power3",
							data: ts(u - e),
							onInterrupt: function() {
								return Me.restart(!0) && p && es(N, p);
							},
							onComplete: function() {
								N.update(), re = oe(), n && !T && (U ? U.resetTo("totalProgress", l, n._tTime / n._tDur) : n.progress(l)), Oe = ke = n && !T ? n.totalProgress() : N.progress, g && g(N), m && es(N, m);
							}
						}, e, s * me, u - e - s * me), f && es(N, f, se.tween);
					}
				} else N.isActive && re !== e && Me.restart(!0);
			}).pause()), o && (Is[o] = N), u = N.trigger = Ha(u || d !== !0 && d), Ie = u && u._gsap && u._gsap.stRevert, Ie &&= Ie(N), d = d === !0 ? u : Ha(d), Yo(a) && (a = {
				targets: u,
				className: a
			}), d && (f === !1 || f === ps || (f = !f && d.parentNode && d.parentNode.style && _s(d.parentNode).display === "flex" ? !1 : fs), N.pin = d, ce = q.core.getCache(d), ce.spacer ? he = ce.pinState : (b && (b = Ha(b), b && !b.nodeType && (b = b.current || b.nativeElement), ce.spacerIsNative = !!b, b && (ce.spacerState = mc(b))), ce.spacer = ve = b || Qa.createElement("div"), ve.classList.add("pin-spacer"), o && ve.classList.add("pin-spacer-" + o), ce.pinState = he = mc(d)), t.force3D !== !1 && q.set(d, { force3D: !0 }), N.spacer = ve = ce.spacer, De = _s(d), Se = De[f + w.os2], ye = q.getProperty(d), H = q.quickSetter(d, w.a, gs), dc(d, ve, De), _e = mc(d)), M) {
				z = Qo(M) ? ys(M, As) : As, L = Ps("scroller-start", o, E, w, z, 0), R = Ps("scroller-end", o, E, w, z, 0, L), V = L["offset" + w.op.d2];
				var Le = Ha(Ma(E, "content") || E);
				pe = this.markerStart = Ps("start", o, Le, w, z, V, 0, x), I = this.markerEnd = Ps("end", o, Le, w, z, V, 0, x), x && (Fe = q.quickSetter([pe, I], w.a, gs)), !k && !(Oa.length && Ma(E, "fixedMarkers") === !0) && (vs(O ? Y : E), q.set([L, R], { force3D: !0 }), we = q.quickSetter(L, w.a, gs), Ee = q.quickSetter(R, w.a, gs));
			}
			if (x) {
				var Re = x.vars.onUpdate, ze = x.vars.onUpdateParams;
				x.eventCallback("onUpdate", function() {
					N.update(0, 0, 1), Re && Re.apply(x, ze || []);
				});
			}
			if (N.previous = function() {
				return Z[Z.indexOf(N) - 1];
			}, N.next = function() {
				return Z[Z.indexOf(N) + 1];
			}, N.revert = function(e, t) {
				if (!t) return N.kill(!0);
				var r = e !== !1 || !N.enabled, i = oo;
				r !== N.isReverted && (r && (Ne = Math.max(oe(), N.scroll.rec || 0), ae = N.progress, Pe = n && n.progress()), pe && [
					pe,
					I,
					L,
					R
				].forEach(function(e) {
					return e.style.display = r ? "none" : "block";
				}), r && (oo = N, N.update(r)), d && (!y || !N.isActive) && (r ? uc(d, ve, he) : dc(d, ve, _s(d), Ce)), r || N.update(r), oo = i, N.isReverted = r);
			}, N.refresh = function(r, i, a, o) {
				if (!oo && N.enabled || i) {
					if (d && r && Mo) Ds(e, "scrollEnd", Ws);
					else {
						!Zs && P && P(N), oo = N, se.tween && !a && (se.tween.kill(), se.tween = 0), U && U.pause(), p && n && (n.revert({ kill: !1 }).invalidate(), n.getChildren ? n.getChildren(!0, !0, !1).forEach(function(e) {
							return e.vars.immediateRender && e.render(0, !0, !0);
						}) : n.vars.immediateRender && n.render(0, !0, !0)), N.isReverted || N.revert(!0, !0), N._subPinOffset = !1;
						var s = te(), l = ne(), m = x ? x.duration() : qo(E, w), h = me <= .01 || !me, g = 0, _ = o || 0, v = Qo(a) ? a.end : t.end, b = t.endTrigger || u, S = Qo(a) ? a.start : t.start || (t.start === 0 || !u ? 0 : d ? "0 0" : "0 100%"), C = N.pinnedContainer = t.pinnedContainer && Ha(t.pinnedContainer, N), D = u && Math.max(0, Z.indexOf(N)) || 0, A = D, j, ce, le, z, V, H, Se, we, Ee, De, Oe, ke, Ae;
						for (M && Qo(a) && (ke = q.getProperty(L, w.p), Ae = q.getProperty(R, w.p)); A-- > 0;) H = Z[A], H.end || H.refresh(0, 1) || (oo = N), Se = H.pin, Se && (Se === u || Se === d || Se === C) && !H.isReverted && (De ||= [], De.unshift(H), H.revert(!0, !0)), H !== Z[A] && (D--, A--);
						for (Xo(S) && (S = S(N)), S = X(S, "start", N), F = _c(S, u, s, w, oe(), pe, L, N, l, ee, k, m, x, N._startClamp && "_startClamp") || (d ? -.001 : 0), Xo(v) && (v = v(N)), Yo(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (Yo(S) ? S.split(" ")[0] : "") + v : (g = Ns(v.substr(2), s), v = Yo(S) ? S : (x ? q.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, F) : F) + g, b = u)), v = X(v, "end", N), fe = Math.max(F, _c(v || (b ? "100% 0" : m), b, s, w, oe() + g, I, R, N, l, ee, k, m, x, N._endClamp && "_endClamp")) || -.001, g = 0, A = D; A--;) H = Z[A] || {}, Se = H.pin, Se && H.start - H._pinPush <= F && !x && H.end > 0 && (j = H.end - (N._startClamp ? Math.max(0, H.start) : H.start), (Se === u && H.start - H._pinPush < F || Se === C) && isNaN(S) && (g += j * (1 - H.progress)), Se === d && (_ += j));
						if (F += g, fe += g, N._startClamp && (N._startClamp += g), N._endClamp && !Zs && (N._endClamp = fe || -.001, fe = Math.min(fe, qo(E, w))), me = fe - F || (F -= .01) && .001, h && (ae = q.utils.clamp(0, 1, q.utils.normalize(F, fe, Ne))), N._pinPush = _, pe && g && (j = {}, j[w.a] = "+=" + g, C && (j[w.p] = "-=" + oe()), q.set([pe, I], j)), d && !(Do && N.end >= qo(E, w))) j = _s(d), z = w === Va, le = oe(), be = parseFloat(ye(w.a)) + _, !m && fe > 1 && (Oe = (O ? Qa.scrollingElement || $a : E).style, Oe = {
							style: Oe,
							value: Oe["overflow" + w.a.toUpperCase()]
						}, O && _s(Y)["overflow" + w.a.toUpperCase()] !== "scroll" && (Oe.style["overflow" + w.a.toUpperCase()] = "scroll")), dc(d, ve, j), _e = mc(d), ce = bs(d, !0), we = k && Wa(E, z ? Ba : Va)(), f ? (Ce = [f + w.os2, me + _ + gs], Ce.t = ve, A = f === fs ? xs(d, w) + me + _ : 0, A && (Ce.push(w.d, A + gs), ve.style.flexBasis !== "auto" && (ve.style.flexBasis = A + gs)), pc(Ce), C && Z.forEach(function(e) {
							e.pin === C && e.vars.pinSpacing !== !1 && (e._subPinOffset = !0);
						}), k && oe(Ne)) : (A = xs(d, w), A && ve.style.flexBasis !== "auto" && (ve.style.flexBasis = A + gs)), k && (V = {
							top: ce.top + (z ? le - F : we) + gs,
							left: ce.left + (z ? we : le - F) + gs,
							boxSizing: "border-box",
							position: "fixed"
						}, V[os] = V["max" + ms] = Math.ceil(ce.width) + gs, V[ss] = V["max" + hs] = Math.ceil(ce.height) + gs, V[ps] = V[ps + us] = V[ps + cs] = V[ps + ds] = V[ps + ls] = "0", V[fs] = j[fs], V[fs + us] = j[fs + us], V[fs + cs] = j[fs + cs], V[fs + ds] = j[fs + ds], V[fs + ls] = j[fs + ls], ge = hc(he, V, y), Zs && oe(0)), n ? (Ee = n._initted, ho(1), n.render(n.duration(), !0, !0), xe = ye(w.a) - be + me + _, Te = Math.abs(me - xe) > 1, k && Te && ge.splice(ge.length - 2, 2), n.render(0, !0, !0), Ee || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), ho(0)) : xe = me, Oe && (Oe.value ? Oe.style["overflow" + w.a.toUpperCase()] = Oe.value : Oe.style.removeProperty("overflow-" + w.a));
						else if (u && oe() && !x) for (ce = u.parentNode; ce && ce !== Y;) ce._pinOffset && (F -= ce._pinOffset, fe -= ce._pinOffset), ce = ce.parentNode;
						De && De.forEach(function(e) {
							return e.revert(!1, !0);
						}), N.start = F, N.end = fe, ue = de = Zs ? Ne : oe(), !x && !Zs && (ue < Ne && oe(Ne), N.scroll.rec = 0), N.revert(!1, !0), ie = Ao(), Me && (re = -1, Me.restart(!0)), oo = 0, n && T && (n._initted || Pe) && n.progress() !== Pe && n.progress(Pe || 0, !0).render(n.time(), !0, !0), (h || ae !== N.progress || x || p || n && !n._initted) && (n && !T && (n._initted || ae || n.vars.immediateRender !== !1) && n.totalProgress(x && F < -.001 && !ae ? q.utils.normalize(F, fe, 0) : ae, !0), N.progress = h || (ue - F) / me === ae ? 0 : ae), d && f && (ve._pinOffset = Math.round(N.progress * xe)), U && U.invalidate(), isNaN(ke) || (ke -= q.getProperty(L, w.p), Ae -= q.getProperty(R, w.p), xc(L, w, ke), xc(pe, w, ke - (o || 0)), xc(R, w, Ae), xc(I, w, Ae - (o || 0))), h && !Zs && N.update(), c && !Zs && !B && (B = !0, c(N), B = !1);
					}
				}
			}, N.getVelocity = function() {
				return (oe() - de) / (Ao() - io) * 1e3 || 0;
			}, N.endAnimation = function() {
				$o(N.callbackAnimation), n && (U ? U.progress(1) : n.paused() ? T || $o(n, N.direction < 0, 1) : $o(n, n.reversed()));
			}, N.labelToScroll = function(e) {
				return n && n.labels && (F || N.refresh() || F) + n.labels[e] / n.duration() * me || 0;
			}, N.getTrailing = function(e) {
				var t = Z.indexOf(N), n = N.direction > 0 ? Z.slice(0, t).reverse() : Z.slice(t + 1);
				return (Yo(e) ? n.filter(function(t) {
					return t.vars.preventOverlaps === e;
				}) : n).filter(function(e) {
					return N.direction > 0 ? e.end <= F : e.start >= fe;
				});
			}, N.update = function(e, t, r) {
				if (!x || r || e) {
					var o = Zs === !0 ? Ne : N.scroll(), c = e ? 0 : (o - F) / me, u = c < 0 ? 0 : c > 1 ? 1 : c || 0, p = N.progress, h, g, b, D, O, M, ee, P;
					if (t && (de = ue, ue = x ? oe() : o, v && (ke = Oe, Oe = n && !T ? n.totalProgress() : u)), m && d && !oo && !ko && Mo && (!u && F < o + (o - de) / (Ao() - io) * m ? u = 1e-4 : u === 1 && fe > o + (o - de) / (Ao() - io) * m && (u = .9999)), u !== p && N.enabled) {
						if (h = N.isActive = !!u && u < 1, g = !!p && p < 1, M = h !== g, O = M || !!u != !!p, N.direction = u > p ? 1 : -1, N.progress = u, O && !oo && (b = u && !p ? 0 : u === 1 ? 1 : p === 1 ? 2 : 3, T && (D = !M && j[b + 1] !== "none" && j[b + 1] || j[b], P = n && (D === "complete" || D === "reset" || D in n))), C && (M || P) && (P || l || !n) && (Xo(C) ? C(N) : N.getTrailing(C).forEach(function(e) {
							return e.endAnimation();
						})), T || (U && !oo && !ko ? (U._dp._time - U._start !== U._time && U.render(U._dp._time - U._start), U.resetTo ? U.resetTo("totalProgress", u, n._tTime / n._tDur) : (U.vars.totalProgress = u, U.invalidate().restart())) : n && n.totalProgress(u, !!(oo && (ie || e)))), d) {
							if (e && f && (ve.style[f + w.os2] = Se), !k) H(zo(be + xe * u));
							else if (O) {
								if (ee = !e && u > p && fe + 1 > o && o + 1 >= qo(E, w), y) {
									if (!e && (h || ee)) {
										var te = bs(d, !0), ne = o - F;
										yc(d, Y, te.top + (w === Va ? ne : 0) + gs, te.left + (w === Va ? 0 : ne) + gs);
									} else yc(d, ve);
								}
								pc(h || ee ? ge : _e), Te && u < 1 && h || H(be + (u === 1 && !ee ? xe : 0));
							}
						}
						v && !se.tween && !oo && !ko && Me.restart(!0), a && (M || _ && u && (u < 1 || !Oo)) && no(a.targets).forEach(function(e) {
							return e.classList[h || _ ? "add" : "remove"](a.className);
						}), i && !T && !e && i(N), O && !oo ? (T && (P && (D === "complete" ? n.pause().totalProgress(1) : D === "reset" ? n.restart(!0).pause() : D === "restart" ? n.restart(!0) : n[D]()), i && i(N)), (M || !Oo) && (s && M && es(N, s), A[b] && es(N, A[b]), _ && (u === 1 ? N.kill(!1, 1) : A[b] = 0), M || (b = u === 1 ? 1 : 3, A[b] && es(N, A[b]))), S && !h && Math.abs(N.getVelocity()) > (Zo(S) ? S : 2500) && ($o(N.callbackAnimation), U ? U.progress(1) : $o(n, D === "reverse" ? 1 : !u, 1))) : T && i && !oo && i(N);
					}
					if (Ee) {
						var re = x ? o / x.duration() * (x._caScrollDist || 0) : o;
						we(re + +!!L._isFlipped), Ee(re);
					}
					Fe && Fe(-o / x.duration() * (x._caScrollDist || 0));
				}
			}, N.enable = function(t, n) {
				N.enabled || (N.enabled = !0, Ds(E, "resize", Vs), O || Ds(E, "scroll", zs), P && Ds(e, "refreshInit", P), t !== !1 && (N.progress = ae = 0, ue = de = re = oe()), n !== !1 && N.refresh());
			}, N.getTween = function(e) {
				return e && se ? se.tween : U;
			}, N.setPositions = function(e, t, n, r) {
				if (x) {
					var i = x.scrollTrigger, a = x.duration(), o = i.end - i.start;
					e = i.start + o * e / a, t = i.start + o * t / a;
				}
				N.refresh(!1, !1, {
					start: Po(e, n && !!N._startClamp),
					end: Po(t, n && !!N._endClamp)
				}, r), N.update();
			}, N.adjustPinSpacing = function(e) {
				if (Ce && e) {
					var t = Ce.indexOf(w.d) + 1;
					Ce[t] = parseFloat(Ce[t]) + e + gs, Ce[1] = parseFloat(Ce[1]) + e + gs, pc(Ce);
				}
			}, N.disable = function(t, n) {
				if (t !== !1 && N.revert(!0, !0), N.enabled && (N.enabled = N.isActive = !1, n || U && U.pause(), Ne = 0, ce && (ce.uncache = 1), P && Os(e, "refreshInit", P), Me && (Me.pause(), se.tween && se.tween.kill() && (se.tween = 0)), !O)) {
					for (var r = Z.length; r--;) if (Z[r].scroller === E && Z[r] !== N) return;
					Os(E, "resize", Vs), O || Os(E, "scroll", zs);
				}
			}, N.kill = function(e, r) {
				N.disable(e, r), U && !r && U.kill(), o && delete Is[o];
				var i = Z.indexOf(N);
				i >= 0 && Z.splice(i, 1), i === lo && ac > 0 && lo--, i = 0, Z.forEach(function(e) {
					return e.scroller === N.scroller && (i = 1);
				}), i || Zs || (N.scroll.rec = 0), n && (n.scrollTrigger = null, e && n.revert({ kill: !1 }), r || n.kill()), pe && [
					pe,
					I,
					L,
					R
				].forEach(function(e) {
					return e.parentNode && e.parentNode.removeChild(e);
				}), oc === N && (oc = 0), d && (ce && (ce.uncache = 1), i = 0, Z.forEach(function(e) {
					return e.pin === d && i++;
				}), i || (ce.spacer = 0)), t.onKill && t.onKill(N);
			}, Z.push(N), N.enable(!1, !1), Ie && Ie(N), n && n.add && !me) {
				var Be = N.update;
				N.update = function() {
					N.update = Be, K.cache++, F || fe || N.refresh();
				}, q.delayedCall(.01, N.update), me = .01, F = fe = 0;
			} else N.refresh();
			d && ec();
		}
	}, e.register = function(t) {
		return Za ||= (q = t || Vo(), Bo() && window.document && e.enable(), No), Za;
	}, e.defaults = function(e) {
		if (e) for (var t in e) js[t] = e[t];
		return js;
	}, e.disable = function(e, t) {
		No = 0, Z.forEach(function(n) {
			return n[t ? "kill" : "disable"](e);
		}), Os(J, "wheel", zs), Os(Qa, "scroll", zs), clearInterval(ao), Os(Qa, "touchcancel", Ro), Os(Y, "touchstart", Ro), Es(Os, Qa, "pointerdown,touchstart,mousedown", Io), Es(Os, Qa, "pointerup,touchend,mouseup", Lo), to.kill(), Jo(Os);
		for (var n = 0; n < K.length; n += 3) ks(Os, K[n], K[n + 1]), ks(Os, K[n], K[n + 2]);
	}, e.enable = function() {
		if (J = window, Qa = document, $a = Qa.documentElement, Y = Qa.body, q) {
			if (no = q.utils.toArray, ro = q.utils.clamp, So = q.core.context || Ro, ho = q.core.suppressOverwrites || Ro, Co = J.history.scrollRestoration || "auto", ic = J.pageYOffset || 0, q.core.globals("ScrollTrigger", e), Y) {
				No = 1, wo = document.createElement("div"), wo.style.height = "100vh", wo.style.position = "absolute", tc(), Fo(), Xa.register(q), e.isTouch = Xa.isTouch, xo = Xa.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), vo = Xa.isTouch === 1, Ds(J, "wheel", zs), eo = [
					J,
					Qa,
					$a,
					Y
				], q.matchMedia ? (e.matchMedia = function(e) {
					var t = q.matchMedia(), n;
					for (n in e) t.add(n, e[n]);
					return t;
				}, q.addEventListener("matchMediaInit", function() {
					Js(), Ys();
				}), q.addEventListener("matchMediaRevert", function() {
					return qs();
				}), q.addEventListener("matchMedia", function() {
					rc(0, 1), Gs("matchMedia");
				}), q.matchMedia().add("(orientation: portrait)", function() {
					return Bs(), Bs;
				})) : console.warn("Requires GSAP 3.11.0 or later"), Bs(), Ds(Qa, "scroll", zs);
				var t = Y.hasAttribute("style"), n = Y.style, r = n.borderTopStyle, i = q.core.Animation.prototype, a, o;
				for (i.revert || Object.defineProperty(i, "revert", { value: function() {
					return this.time(-.01, !0);
				} }), n.borderTopStyle = "solid", a = bs(Y), Va.m = Math.round(a.top + Va.sc()) || 0, Ba.m = Math.round(a.left + Ba.sc()) || 0, r ? n.borderTopStyle = r : n.removeProperty("border-top-style"), t || (Y.setAttribute("style", ""), Y.removeAttribute("style")), ao = setInterval(Rs, 250), q.delayedCall(.5, function() {
					return ko = 0;
				}), Ds(Qa, "touchcancel", Ro), Ds(Y, "touchstart", Ro), Es(Ds, Qa, "pointerdown,touchstart,mousedown", Io), Es(Ds, Qa, "pointerup,touchend,mouseup", Lo), co = q.utils.checkPrefix("transform"), lc.push(co), Za = Ao(), to = q.delayedCall(.2, rc).pause(), po = [
					Qa,
					"visibilitychange",
					function() {
						var e = J.innerWidth, t = J.innerHeight;
						Qa.hidden ? (uo = e, fo = t) : (uo !== e || fo !== t) && Vs();
					},
					Qa,
					"DOMContentLoaded",
					rc,
					J,
					"load",
					rc,
					J,
					"resize",
					Vs
				], Jo(Ds), Z.forEach(function(e) {
					return e.enable(0, 1);
				}), o = 0; o < K.length; o += 3) ks(Os, K[o], K[o + 1]), ks(Os, K[o], K[o + 2]);
			} else Qa && Qa.addEventListener("DOMContentLoaded", function t() {
				e.enable(), Qa.removeEventListener("DOMContentLoaded", t);
			});
		}
	}, e.config = function(t) {
		"limitCallbacks" in t && (Oo = !!t.limitCallbacks);
		var n = t.syncInterval;
		n && clearInterval(ao) || (ao = n) && setInterval(Rs, n), "ignoreMobileResize" in t && (vo = e.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (Jo(Os) || Jo(Ds, t.autoRefreshEvents || "none"), go = (t.autoRefreshEvents + "").indexOf("resize") === -1);
	}, e.scrollerProxy = function(e, t) {
		var n = Ha(e), r = K.indexOf(n), i = Ho(n);
		~r && K.splice(r, i ? 6 : 2), t && (i ? Oa.unshift(J, t, Y, t, $a, t) : Oa.unshift(n, t));
	}, e.clearMatchMedia = function(e) {
		Z.forEach(function(t) {
			return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
		});
	}, e.isInViewport = function(e, t, n) {
		var r = (Yo(e) ? Ha(e) : e).getBoundingClientRect(), i = r[n ? os : ss] * t || 0;
		return n ? r.right - i > 0 && r.left + i < J.innerWidth : r.bottom - i > 0 && r.top + i < J.innerHeight;
	}, e.positionInViewport = function(e, t, n) {
		Yo(e) && (e = Ha(e));
		var r = e.getBoundingClientRect(), i = r[n ? os : ss], a = t == null ? i / 2 : t in Ms ? Ms[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
		return n ? (r.left + a) / J.innerWidth : (r.top + a) / J.innerHeight;
	}, e.killAll = function(e) {
		if (Z.slice(0).forEach(function(e) {
			return e.vars.id !== "ScrollSmoother" && e.kill();
		}), e !== !0) {
			var t = Hs.killAll || [];
			Hs = {}, t.forEach(function(e) {
				return e();
			});
		}
	}, e;
}();
Q.version = "3.15.0", Q.saveStyles = function(e) {
	return e ? no(e).forEach(function(e) {
		if (e && e.style) {
			var t = Ks.indexOf(e);
			t >= 0 && Ks.splice(t, 5), Ks.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), q.core.getCache(e), So());
		}
	}) : Ks;
}, Q.revert = function(e, t) {
	return Ys(!e, t);
}, Q.create = function(e, t) {
	return new Q(e, t);
}, Q.refresh = function(e) {
	return e ? Vs(!0) : (Za || Q.register()) && rc(!0);
}, Q.update = function(e) {
	return ++K.cache && sc(e === !0 ? 2 : 0);
}, Q.clearScrollMemory = Xs, Q.maxScroll = function(e, t) {
	return qo(e, t ? Ba : Va);
}, Q.getScrollFunc = function(e, t) {
	return Wa(Ha(e), t ? Ba : Va);
}, Q.getById = function(e) {
	return Is[e];
}, Q.getAll = function() {
	return Z.filter(function(e) {
		return e.vars.id !== "ScrollSmoother";
	});
}, Q.isScrolling = function() {
	return !!Mo;
}, Q.snapDirectional = ws, Q.addEventListener = function(e, t) {
	var n = Hs[e] || (Hs[e] = []);
	~n.indexOf(t) || n.push(t);
}, Q.removeEventListener = function(e, t) {
	var n = Hs[e], r = n && n.indexOf(t);
	r >= 0 && n.splice(r, 1);
}, Q.batch = function(e, t) {
	var n = [], r = {}, i = t.interval || .016, a = t.batchMax || 1e9, o = function(e, t) {
		var n = [], r = [], o = q.delayedCall(i, function() {
			t(n, r), n = [], r = [];
		}).pause();
		return function(e) {
			n.length || o.restart(!0), n.push(e.trigger), r.push(e), a <= n.length && o.progress(1);
		};
	}, s;
	for (s in t) r[s] = s.substr(0, 2) === "on" && Xo(t[s]) && s !== "onRefreshInit" ? o(s, t[s]) : t[s];
	return Xo(a) && (a = a(), Ds(Q, "refresh", function() {
		return a = t.batchMax();
	})), no(e).forEach(function(e) {
		var t = {};
		for (s in r) t[s] = r[s];
		t.trigger = e, n.push(Q.create(t));
	}), n;
};
var Cc = function(e, t, n, r) {
	return t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1;
}, wc = function e(t, n) {
	n === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (Xa.isTouch ? " pinch-zoom" : "") : "none", t === $a && e(Y, n);
}, Tc = {
	auto: 1,
	scroll: 1
}, Ec = function(e) {
	var t = e.event, n = e.target, r = e.axis, i = (t.changedTouches ? t.changedTouches[0] : t).target, a = i._gsap || q.core.getCache(i), o = Ao(), s;
	if (!a._isScrollT || o - a._isScrollT > 2e3) {
		for (; i && i !== Y && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !(Tc[(s = _s(i)).overflowY] || Tc[s.overflowX]));) i = i.parentNode;
		a._isScroll = i && i !== n && !Ho(i) && (Tc[(s = _s(i)).overflowY] || Tc[s.overflowX]), a._isScrollT = o;
	}
	(a._isScroll || r === "x") && (t.stopPropagation(), t._gsapAllow = !0);
}, Dc = function(e, t, n, r) {
	return Xa.create({
		target: e,
		capture: !0,
		debounce: !1,
		lockAxis: !0,
		type: t,
		onWheel: r &&= Ec,
		onPress: r,
		onDrag: r,
		onScroll: r,
		onEnable: function() {
			return n && Ds(Qa, Xa.eventTypes[0], Ac, !1, !0);
		},
		onDisable: function() {
			return Os(Qa, Xa.eventTypes[0], Ac, !0);
		}
	});
}, Oc = /(input|label|select|textarea)/i, kc, Ac = function(e) {
	var t = Oc.test(e.target.tagName);
	(t || kc) && (e._gsapAllow = !0, kc = t);
}, jc = function(e) {
	Qo(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
	var t = e, n = t.normalizeScrollX, r = t.momentum, i = t.allowNestedScroll, a = t.onRelease, o, s, c = Ha(e.target) || $a, l = q.core.globals().ScrollSmoother, u = l && l.get(), d = xo && (e.content && Ha(e.content) || u && e.content !== !1 && !u.smooth() && u.content()), f = Wa(c, Va), p = Wa(c, Ba), m = 1, h = (Xa.isTouch && J.visualViewport ? J.visualViewport.scale * J.visualViewport.width : J.outerWidth) / J.innerWidth, g = 0, _ = Xo(r) ? function() {
		return r(o);
	} : function() {
		return r || 2.8;
	}, v, y, b = Dc(c, e.type, !0, i), x = function() {
		return y = !1;
	}, S = Ro, C = Ro, w = function() {
		s = qo(c, Va), C = ro(+!!xo, s), n && (S = ro(0, qo(c, Ba))), v = Qs;
	}, T = function() {
		d._gsap.y = zo(parseFloat(d._gsap.y) + f.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0;
	}, E = function() {
		if (y) {
			requestAnimationFrame(x);
			var e = zo(o.deltaY / 2), t = C(f.v - e);
			if (d && t !== f.v + f.offset) {
				f.offset = t - f.v;
				var n = zo((parseFloat(d && d._gsap.y) || 0) - f.offset);
				d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", d._gsap.y = n + "px", f.cacheID = K.cache, sc();
			}
			return !0;
		}
		f.offset && T(), y = !0;
	}, D, O, k, A, j = function() {
		w(), D.isActive() && D.vars.scrollY > s && (f() > s ? D.progress(1) && f(s) : D.resetTo("scrollY", s));
	};
	return d && q.set(d, { y: "+=0" }), e.ignoreCheck = function(e) {
		return xo && e.type === "touchmove" && E(e) || m > 1.05 && e.type !== "touchstart" || o.isGesturing || e.touches && e.touches.length > 1;
	}, e.onPress = function() {
		y = !1;
		var e = m;
		m = zo((J.visualViewport && J.visualViewport.scale || 1) / h), D.pause(), e !== m && wc(c, m > 1.01 || !n && "x"), O = p(), k = f(), w(), v = Qs;
	}, e.onRelease = e.onGestureStart = function(e, t) {
		if (f.offset && T(), !t) A.restart(!0);
		else {
			K.cache++;
			var r = _(), i, o;
			n && (i = p(), o = i + r * .05 * -e.velocityX / .227, r *= Cc(p, i, o, qo(c, Ba)), D.vars.scrollX = S(o)), i = f(), o = i + r * .05 * -e.velocityY / .227, r *= Cc(f, i, o, qo(c, Va)), D.vars.scrollY = C(o), D.invalidate().duration(r).play(.01), (xo && D.vars.scrollY >= s || i >= s - 1) && q.to({}, {
				onUpdate: j,
				duration: r
			});
		}
		a && a(e);
	}, e.onWheel = function() {
		D._ts && D.pause(), Ao() - g > 1e3 && (v = 0, g = Ao());
	}, e.onChange = function(e, t, r, i, a) {
		if (Qs !== v && w(), t && n && p(S(i[2] === t ? O + (e.startX - e.x) : p() + t - i[1])), r) {
			f.offset && T();
			var o = a[2] === r, s = o ? k + e.startY - e.y : f() + r - a[1], c = C(s);
			o && s !== c && (k += c - s), f(c);
		}
		(r || t) && sc();
	}, e.onEnable = function() {
		wc(c, !n && "x"), Q.addEventListener("refresh", j), Ds(J, "resize", j), f.smooth &&= (f.target.style.scrollBehavior = "auto", p.smooth = !1), b.enable();
	}, e.onDisable = function() {
		wc(c, !0), Os(J, "resize", j), Q.removeEventListener("refresh", j), b.kill();
	}, e.lockAxis = e.lockAxis !== !1, o = new Xa(e), o.iOS = xo, xo && !f() && f(1), xo && q.ticker.add(Ro), A = o._dc, D = q.to(o, {
		ease: "power4",
		paused: !0,
		inherit: !1,
		scrollX: n ? "+=0.1" : "+=0",
		scrollY: "+=0.1",
		modifiers: { scrollY: bc(f, f(), function() {
			return D.pause();
		}) },
		onUpdate: sc,
		onComplete: A.vars.onComplete
	}), o;
};
Q.sort = function(e) {
	if (Xo(e)) return Z.sort(e);
	var t = J.pageYOffset || 0;
	return Q.getAll().forEach(function(e) {
		return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + J.innerHeight;
	}), Z.sort(e || function(e, t) {
		return (e.vars.refreshPriority || 0) * -1e6 + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6);
	});
}, Q.observe = function(e) {
	return new Xa(e);
}, Q.normalizeScroll = function(e) {
	if (e === void 0) return _o;
	if (e === !0 && _o) return _o.enable();
	if (e === !1) _o && _o.kill(), _o = e;
	else {
		var t = e instanceof Xa ? e : jc(e);
		return _o && _o.target === t.target && _o.kill(), Ho(t.target) && (_o = t), t;
	}
}, Q.core = {
	_getVelocityProp: Ga,
	_inputObserver: Dc,
	_scrollers: K,
	_proxies: Oa,
	bridge: {
		ss: function() {
			Mo || Gs("scrollStart"), Mo = Ao();
		},
		ref: function() {
			return oo;
		}
	}
}, Vo() && q.registerPlugin(Q);
//#endregion
//#region ../../../../Downloads/Portfolio-component-lab/node_modules/gsap/SplitText.js
var Mc, Nc, Pc = typeof Symbol == "function" ? Symbol() : "_split", Fc, Ic = () => Fc || tl.register(window.gsap), Lc = typeof Intl < "u" && "Segmenter" in Intl ? new Intl.Segmenter() : 0, Rc = (e) => e ? typeof e == "string" ? Rc(document.querySelectorAll(e)) : "length" in e ? Array.from(e).reduce((e, t) => (typeof t == "string" ? e.push(...Rc(t)) : e.push(t), e), []) : [e] : [], zc = (e) => Rc(e).filter((e) => e && e.nodeType === 1), Bc = [], Vc = function() {}, Hc = { add: (e) => e() }, Uc = /\s+/g, Wc = /* @__PURE__ */ RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.", "gu"), Gc = {
	left: 0,
	top: 0,
	width: 0,
	height: 0
}, Kc = (e, t) => {
	for (; ++t < e.length && e[t] === Gc;);
	return e[t] || Gc;
}, qc = ({ element: e, html: t, ariaL: n, ariaH: r }) => {
	e.innerHTML = t, n ? e.setAttribute("aria-label", n) : e.removeAttribute("aria-label"), r ? e.setAttribute("aria-hidden", r) : e.removeAttribute("aria-hidden");
}, Jc = (e, t) => {
	if (t) {
		let n = new Set(e.join("").match(t) || Bc), r = e.length, i, a, o, s;
		if (n.size) for (; --r > -1;) {
			a = e[r];
			for (o of n) if (o.startsWith(a) && o.length > a.length) {
				for (i = 0, s = a; o.startsWith(s += e[r + ++i]) && s.length < o.length;);
				if (i && s.length === o.length) {
					e[r] = o, e.splice(r + 1, i);
					break;
				}
			}
		}
	}
	return e;
}, Yc = (e) => window.getComputedStyle(e).display === "inline" && (e.style.display = "inline-block"), Xc = (e, t, n) => t.insertBefore(typeof e == "string" ? document.createTextNode(e) : e, n), Zc = (e, t, n) => {
	let r = t[e + "sClass"] || "", { tag: i = "div", aria: a = "auto", propIndex: o = !1 } = t, s = e === "line" ? "block" : "inline-block", c = r.indexOf("++") > -1, l = (t) => {
		let l = document.createElement(i), u = n.length + 1;
		return r && (l.className = r + (c ? " " + r + u : "")), o && l.style.setProperty("--" + e, u + ""), a !== "none" && l.setAttribute("aria-hidden", "true"), i !== "span" && (l.style.position = "relative", l.style.display = s), l.textContent = t, n.push(l), l;
	};
	return c && (r = r.replace("++", "")), l.collection = n, l;
}, Qc = (e, t, n, r) => {
	let i = Zc("line", n, r), a = window.getComputedStyle(e).textAlign || "left";
	return (n, r) => {
		let o = i("");
		for (o.style.textAlign = a, e.insertBefore(o, t[n]); n < r; n++) o.appendChild(t[n]);
		o.normalize();
	};
}, $c = (e, t, n, r, i, a, o, s, c, l) => {
	var u;
	let d = Array.from(e.childNodes), f = 0, { wordDelimiter: p, reduceWhiteSpace: m = !0, prepareText: h } = t, g = e.getBoundingClientRect(), _ = g, v = !m && window.getComputedStyle(e).whiteSpace.substring(0, 3) === "pre", y = 0, b = n.collection, x, S, C, w, T, E, D, O, k, A, j, M, ee, N, P, te, ne, re;
	for (typeof p == "object" ? (C = p.delimiter || p, S = p.replaceWith || "") : S = p === "" ? "" : p || " ", x = S !== " "; f < d.length; f++) if (w = d[f], w.nodeType === 3) {
		for (P = w.textContent || "", m ? P = P.replace(Uc, " ") : v && (P = P.replace(/\n/g, S + "\n")), h && (P = h(P, e)), w.textContent = P, T = S || C ? P.split(C || S) : P.match(s) || Bc, ne = T[T.length - 1], O = x ? ne.slice(-1) === " " : !ne, ne || T.pop(), _ = g, D = x ? T[0].charAt(0) === " " : !T[0], D && Xc(" ", e, w), T[0] || T.shift(), Jc(T, c), a && l || (w.textContent = ""), k = 1; k <= T.length; k++) if (te = T[k - 1], !m && v && te.charAt(0) === "\n" && ((u = w.previousSibling) == null || u.remove(), Xc(document.createElement("br"), e, w), te = te.slice(1)), !m && te === "") Xc(S, e, w);
		else if (te === " ") e.insertBefore(document.createTextNode(" "), w);
		else {
			if (x && te.charAt(0) === " " && Xc(" ", e, w), y && k === 1 && !D && b.indexOf(y.parentNode) > -1 ? (E = b[b.length - 1], E.appendChild(document.createTextNode(r ? "" : te))) : (E = n(r ? "" : te), Xc(E, e, w), y && k === 1 && !D && E.insertBefore(y, E.firstChild)), r) for (j = Lc ? Jc([...Lc.segment(te)].map((e) => e.segment), c) : te.match(s) || Bc, re = 0; re < j.length; re++) E.appendChild(j[re] === " " ? document.createTextNode(" ") : r(j[re]));
			if (a && l) {
				if (P = w.textContent = P.substring(te.length + 1, P.length), A = E.getBoundingClientRect(), A.top > _.top && A.left <= _.left) {
					for (M = e.cloneNode(), ee = e.childNodes[0]; ee && ee !== E;) N = ee, ee = ee.nextSibling, M.appendChild(N);
					e.parentNode.insertBefore(M, e), i && Yc(M);
				}
				_ = A;
			}
			(k < T.length || O) && Xc(k >= T.length ? " " : x && te.slice(-1) === " " ? " " + S : S, e, w);
		}
		e.removeChild(w), y = 0;
	} else w.nodeType === 1 && (o && o.indexOf(w) > -1 ? (b.indexOf(w.previousSibling) > -1 && b[b.length - 1].appendChild(w), y = w) : ($c(w, t, n, r, i, a, o, s, c, !0), y = 0), i && Yc(w));
}, el = class e {
	constructor(e, t) {
		this.isSplit = !1, Ic(), this.elements = zc(e), this.chars = [], this.words = [], this.lines = [], this.masks = [], this.vars = t, this.elements.forEach((e) => {
			var n;
			t.overwrite !== !1 && ((n = e[Pc]) == null || n._data.orig.filter(({ element: t }) => t === e).forEach(qc)), e[Pc] = this;
		}), this._split = () => this.isSplit && this.split(this.vars);
		let n = [], r, i = () => {
			let e = n.length, t;
			for (; e--;) {
				t = n[e];
				let r = t.element.offsetWidth;
				if (r !== t.width) {
					t.width = r, this._split();
					return;
				}
			}
		};
		this._data = {
			orig: n,
			obs: typeof ResizeObserver < "u" && new ResizeObserver(() => {
				clearTimeout(r), r = setTimeout(i, 200);
			})
		}, Vc(this), this.split(t);
	}
	split(e) {
		return (this._ctx || Hc).add(() => {
			this.isSplit && this.revert(), this.vars = e = e || this.vars || {};
			let { type: t = "chars,words,lines", aria: n = "auto", deepSlice: r = !0, smartWrap: i, onSplit: a, autoSplit: o = !1, specialChars: s, mask: c } = this.vars, l = t.indexOf("lines") > -1, u = t.indexOf("chars") > -1, d = t.indexOf("words") > -1, f = u && !d && !l, p = s && ("push" in s ? RegExp("(?:" + s.join("|") + ")", "gu") : s), m = p ? RegExp(p.source + "|" + Wc.source, "gu") : Wc, h = !!e.ignore && zc(e.ignore), { orig: g, animTime: _, obs: v } = this._data, y;
			(u || d || l) && (this.elements.forEach((t, a) => {
				g[a] = {
					element: t,
					html: t.innerHTML,
					ariaL: t.getAttribute("aria-label"),
					ariaH: t.getAttribute("aria-hidden")
				}, n === "auto" ? t.setAttribute("aria-label", (t.textContent || "").trim()) : n === "hidden" && t.setAttribute("aria-hidden", "true");
				let o = [], s = [], c = [], _ = u ? Zc("char", e, o) : null, v = Zc("word", e, s), y, b, x, S;
				if ($c(t, e, v, _, f, r && (l || f), h, m, p, !1), l) {
					let n = Rc(t.childNodes), r = Qc(t, n, e, c), i, a = [], o = 0, s = n.map((e) => e.nodeType === 1 ? e.getBoundingClientRect() : Gc), l = Gc, u;
					for (y = 0; y < n.length; y++) i = n[y], i.nodeType === 1 && (i.nodeName === "BR" ? ((!y || n[y - 1].nodeName !== "BR") && (a.push(i), r(o, y + 1)), o = y + 1, l = Kc(s, y)) : (u = s[y], y && u.top > l.top && u.left < l.left + l.width - 1 && (r(o, y), o = y), l = u));
					o < y && r(o, y), a.forEach((e) => e.parentNode?.removeChild(e));
				}
				if (!d) {
					for (y = 0; y < s.length; y++) if (b = s[y], u || !b.nextSibling || b.nextSibling.nodeType !== 3) {
						if (i && !l) {
							for (x = document.createElement("span"), x.style.whiteSpace = "nowrap"; b.firstChild;) x.appendChild(b.firstChild);
							b.replaceWith(x);
						} else b.replaceWith(...b.childNodes);
					} else S = b.nextSibling, S && S.nodeType === 3 && (S.textContent = (b.textContent || "") + (S.textContent || ""), b.remove());
					s.length = 0, t.normalize();
				}
				this.lines.push(...c), this.words.push(...s), this.chars.push(...o);
			}), c && this[c] && this.masks.push(...this[c].map((e) => {
				let t = e.cloneNode();
				return e.replaceWith(t), t.appendChild(e), e.className && (t.className = e.className.trim().split(" ").map((e) => e + "-mask").join(" ")), t.style.overflow = "clip", t;
			}))), this.isSplit = !0, Nc && l && o && Nc.addEventListener("loadingdone", this._split), (y = a && a(this)) && y.totalTime && (this._data.anim = _ ? y.totalTime(_) : y), l && o && this.elements.forEach((e, t) => {
				g[t].width = e.offsetWidth, v && v.observe(e);
			});
		}), this;
	}
	kill() {
		let { obs: e } = this._data;
		e && e.disconnect(), Nc?.removeEventListener("loadingdone", this._split);
	}
	revert() {
		var e, t;
		if (this.isSplit) {
			let { orig: n, anim: r } = this._data;
			this.kill(), n.forEach(qc), this.chars.length = this.words.length = this.lines.length = n.length = this.masks.length = 0, this.isSplit = !1, r && (this._data.animTime = r.totalTime(), r.revert()), (t = (e = this.vars).onRevert) == null || t.call(e, this);
		}
		return this;
	}
	static create(t, n) {
		return new e(t, n);
	}
	static register(e) {
		Mc = Mc || e || window.gsap, Mc && (Rc = Mc.utils.toArray, Vc = Mc.core.context || Vc), !Fc && window.innerWidth > 0 && (Nc = document.fonts, Fc = !0);
	}
};
el.version = "3.15.0";
var tl = el;
//#endregion
//#region ../../../../Downloads/Portfolio-Elena-Preview/component-src/ReferenceMotion.ts
function nl() {
	ca.registerPlugin(Q, tl), ca.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
		let e = [], t = document.querySelectorAll("#about .about-h, #experience .section-h, #work>.section-h, #education>.section-h, #contact h2"), n = document.querySelectorAll(".hero-summary .intro-strip>p, #about .about-body>p, #contact .lede"), r = (t, n) => {
			t.classList.remove("reveal");
			let r = tl.create(t, {
				type: n ? "lines" : "lines,chars",
				mask: n ? "lines" : "chars",
				charsClass: "v2-copy-char",
				linesClass: "v2-copy-line",
				autoSplit: !0,
				onSplit(e) {
					return n || e.masks.forEach((e) => {
						e.style.paddingInline = ".04em", e.style.marginInline = "-.04em", e.style.boxSizing = "content-box";
					}), ca.fromTo(n ? e.lines : e.chars, { yPercent: 100 }, {
						yPercent: 0,
						duration: .5,
						stagger: n ? .1 : .015,
						ease: "power3.out",
						scrollTrigger: {
							trigger: t,
							start: "top 85%",
							once: !0
						}
					});
				}
			});
			e.push(r);
		};
		t.forEach((e) => r(e, !1)), n.forEach((e) => r(e, !0)), document.querySelector("#about .about-body")?.classList.remove("reveal");
		let i = document.querySelector(".v2-ending"), a = document.querySelector("#contact"), o = ca.matchMedia();
		o.add("(min-width:1026px)", () => {
			i && a && ca.fromTo(a, { yPercent: 20 }, {
				yPercent: 0,
				ease: "power1.out",
				scrollTrigger: {
					trigger: i,
					start: "top 60%",
					end: "bottom bottom",
					scrub: !0
				}
			});
		});
		let s = 0, c = () => {
			cancelAnimationFrame(s), s = requestAnimationFrame(() => {
				Q.refresh(), window.dispatchEvent(new Event("v2-layout-settled"));
			});
		}, l = new ResizeObserver(c);
		return l.observe(document.querySelector("main")), l.observe(document.querySelector("#experience")), c(), () => {
			cancelAnimationFrame(s), l.disconnect(), o.revert(), e.forEach((e) => e.revert());
		};
	}), document.querySelectorAll(".contact-pill, .v2-contact-cta, .hero-browse").forEach((e) => {
		let t = [...e.childNodes].find((e) => e.nodeType === Node.TEXT_NODE && e.textContent?.trim());
		if (!t) return;
		let n = t.textContent.trim();
		e.setAttribute("aria-label", e.getAttribute("aria-label") || n);
		let r = document.createElement("span");
		r.className = "v2-rolling-label", r.setAttribute("aria-hidden", "true"), [...n].forEach((e, t) => {
			let n = document.createElement("span");
			n.textContent = e, n.style.setProperty("--char-delay", `${t * .01}s`), r.append(n);
		}), t.replaceWith(r);
	}), document.body.dataset.referenceMotion = "ready";
}
//#endregion
//#region ../../../../Downloads/Portfolio-Elena-Preview/component-src/main.tsx
var rl = window.portfolioV2, { projects: il, featured: al, images: ol } = rl;
function sl() {
	let [e, t] = b.useState(matchMedia("(prefers-reduced-motion: reduce)").matches);
	return b.useEffect(() => {
		let e = matchMedia("(prefers-reduced-motion: reduce)"), n = () => t(e.matches);
		return e.addEventListener("change", n), () => e.removeEventListener("change", n);
	}, []), e;
}
function cl() {
	let e = sl();
	return /* @__PURE__ */ (0, x.jsx)(la, { reduced: e });
}
function ll({ item: e, index: t, compact: n = !1 }) {
	let r = n ? 160 : 270, i = b.useRef(null), [a, o] = b.useState(r), [s, c] = b.useState(!1), l = il[e.id];
	b.useEffect(() => {
		let e = i.current;
		if (!e) return;
		let t = new ResizeObserver(([e]) => o(Math.min(r, e.contentRect.width - 32)));
		return t.observe(e), () => t.disconnect();
	}, [r]);
	let u = b.useMemo(() => [{
		name: "Case study",
		meta: e.title,
		image: ol[e.id]
	}, ...l.links.map((t) => ({
		name: t.label.replace(/\s*[↗→]$/, ""),
		meta: e.title,
		href: t.url,
		image: ol[e.id]
	}))], [e.id]);
	return /* @__PURE__ */ (0, x.jsxs)("article", {
		className: "v2-project-card" + (n ? " v1-mini-project" : "") + (s ? " folder-open" : ""),
		"aria-labelledby": `v2-title-${e.id}`,
		children: [
			!n && /* @__PURE__ */ (0, x.jsxs)("div", {
				className: "v2-card-top",
				children: [/* @__PURE__ */ (0, x.jsx)("span", { children: String(t + 1).padStart(2, "0") }), /* @__PURE__ */ (0, x.jsx)("span", { children: e.category })]
			}),
			/* @__PURE__ */ (0, x.jsx)("div", {
				className: "v2-folder-stage",
				ref: i,
				children: /* @__PURE__ */ (0, x.jsx)(le, {
					label: e.title,
					meta: `${u.length} resources`,
					tone: "light",
					art: "none",
					image: ol[e.id],
					appear: !1,
					style: {
						"--gf-hover-lift": `${(n ? -30 : -55) * 340 / a}px`,
						"--gf-open-lift": `${(n ? -80 : -140) * 340 / a}px`,
						"--gf-open-spread": `${(n ? 22 : 50) * 340 / a}px`,
						"--gf-open-stack": `${(n ? 20 : 31) * 340 / a}px`
					},
					files: u,
					action: "none",
					width: a,
					open: s,
					onOpenChange: c,
					onFileSelect: (t) => {
						t.href || rl.open(e.id, document.activeElement);
					}
				})
			}),
			/* @__PURE__ */ (0, x.jsxs)("div", {
				className: "v2-card-copy",
				children: [/* @__PURE__ */ (0, x.jsx)("h3", {
					id: `v2-title-${e.id}`,
					children: e.title
				}), /* @__PURE__ */ (0, x.jsx)("p", { dangerouslySetInnerHTML: { __html: e.description } })]
			}),
			/* @__PURE__ */ (0, x.jsxs)("button", {
				type: "button",
				className: "v2-case-link",
				"data-id": e.id,
				"aria-label": `Open ${e.title} case study`,
				children: [/* @__PURE__ */ (0, x.jsx)("span", { children: n ? "Case study" : "Open full case study" }), /* @__PURE__ */ (0, x.jsx)("span", {
					"aria-hidden": "true",
					children: "↗"
				})]
			})
		]
	});
}
function ul() {
	return b.useLayoutEffect(() => (document.body.classList.add("v2-folders-ready"), () => document.body.classList.remove("v2-folders-ready")), []), /* @__PURE__ */ (0, x.jsxs)(x.Fragment, { children: [/* @__PURE__ */ (0, x.jsx)("div", {
		className: "v2-featured-grid",
		children: al.map((e, t) => /* @__PURE__ */ (0, x.jsx)(ll, {
			item: e,
			index: t
		}, e.id))
	}), /* @__PURE__ */ (0, x.jsxs)("section", {
		className: "v1-other-projects",
		"aria-labelledby": "v1-other-title",
		children: [/* @__PURE__ */ (0, x.jsx)("div", {
			className: "v1-other-heading",
			children: /* @__PURE__ */ (0, x.jsx)("h3", {
				id: "v1-other-title",
				children: "More projects"
			})
		}), /* @__PURE__ */ (0, x.jsx)("div", {
			className: "v1-other-grid",
			"data-layout": "shelf",
			children: rl.additional.map((e, t) => /* @__PURE__ */ (0, x.jsx)(ll, {
				item: e,
				index: t + al.length,
				compact: !0
			}, e.id))
		})]
	})] });
}
var dl = class extends b.Component {
	state = { failed: !1 };
	static getDerivedStateFromError() {
		return { failed: !0 };
	}
	componentDidCatch(e) {
		console.error("Portfolio component:", e);
	}
	render() {
		return this.state.failed ? /* @__PURE__ */ (0, x.jsx)("p", {
			className: "v2-component-error",
			children: this.props.fallback
		}) : this.props.children;
	}
};
function fl() {
	if (!rl) return;
	let e = document.querySelector(".showcase");
	if (!e) return;
	let t = document.querySelector("#hero");
	t && (t.classList.add("cinematic-hero"), (0, y.createRoot)(t).render(/* @__PURE__ */ (0, x.jsx)(dl, {
		fallback: "Anshul Raman",
		children: /* @__PURE__ */ (0, x.jsx)(cl, {})
	})));
	let n = document.createElement("div");
	n.id = "v2Featured", e.before(n), (0, y.createRoot)(n).render(/* @__PURE__ */ (0, x.jsx)(dl, {
		fallback: "",
		children: /* @__PURE__ */ (0, x.jsx)(ul, {})
	})), document.fonts.ready.then(() => requestAnimationFrame(nl));
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", fl, { once: !0 }) : fl();
//#endregion
