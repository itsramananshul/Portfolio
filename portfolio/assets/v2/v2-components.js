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
	var I = Array.isArray, L = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, R = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, me = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, z = [], he = -1;
	function ge(e) {
		return { current: e };
	}
	function _e(e) {
		0 > he || (e.current = z[he], z[he] = null, he--);
	}
	function ve(e, t) {
		he++, z[he] = e.current, e.current = t;
	}
	var ye = ge(null), B = ge(null), be = ge(null), V = ge(null);
	function xe(e, t) {
		switch (ve(be, t), ve(B, e), ve(ye, null), t.nodeType) {
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
		_e(ye), ve(ye, e);
	}
	function Se() {
		_e(ye), _e(B), _e(be);
	}
	function Ce(e) {
		var t = e.memoizedState;
		t !== null && (sh._currentValue = t.memoizedState, ve(V, e)), t = ye.current;
		var n = dp(t, e.type);
		t !== n && (ve(B, e), ve(ye, n));
	}
	function we(e) {
		B.current === e && (_e(ye), _e(B)), V.current === e && (_e(V), sh._currentValue = me);
	}
	var Te, Ee;
	function De(e) {
		if (Te === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			Te = t && t[1] || "", Ee = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + Te + e + Ee;
	}
	var Oe = !1;
	function ke(e, t) {
		if (!e || Oe) return "";
		Oe = !0;
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
			Oe = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? De(n) : "";
	}
	function Ae(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return De(e.type);
			case 16: return De("Lazy");
			case 13: return e.child !== t && t !== null ? De("Suspense Fallback") : De("Suspense");
			case 19: return De("SuspenseList");
			case 0:
			case 15: return ke(e.type, !1);
			case 11: return ke(e.type.render, !1);
			case 1: return ke(e.type, !0);
			case 31: return De("Activity");
			case 30: return De("ViewTransition");
			default: return "";
		}
	}
	function H(e) {
		try {
			var t = "", n = null;
			do
				t += Ae(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var je = Object.prototype.hasOwnProperty, Me = t.unstable_scheduleCallback, Ne = t.unstable_cancelCallback, Pe = t.unstable_shouldYield, Fe = t.unstable_requestPaint, Ie = t.unstable_now, Le = t.unstable_getCurrentPriorityLevel, Re = t.unstable_ImmediatePriority, ze = t.unstable_UserBlockingPriority, Be = t.unstable_NormalPriority, Ve = t.unstable_LowPriority, He = t.unstable_IdlePriority, Ue = t.log, We = t.unstable_setDisableYieldValue, Ge = null, Ke = null;
	function qe(e) {
		if (typeof Ue == "function" && We(e), Ke && typeof Ke.setStrictMode == "function") try {
			Ke.setStrictMode(Ge, e);
		} catch {}
	}
	var Je = Math.clz32 ? Math.clz32 : Ze, Ye = Math.log, Xe = Math.LN2;
	function Ze(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (Ye(e) / Xe | 0) | 0;
	}
	var Qe = 256, $e = 262144, et = 4194304;
	function tt(e) {
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
	function nt(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = tt(n))) : i = tt(o) : i = tt(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = tt(n))) : i = tt(o)) : i = tt(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function rt(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function it(e, t) {
		t & 8 && (t |= t & 32);
		var n = e.entangledLanes;
		if (n !== 0) for (e = e.entanglements, n &= t; 0 < n;) {
			var r = 31 - Je(n), i = 1 << r;
			t |= e[r], n &= ~i;
		}
		return t;
	}
	function at(e, t) {
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
	function ot() {
		var e = et;
		return et <<= 1, !(et & 62914560) && (et = 4194304), e;
	}
	function st(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function ct(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function lt(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - Je(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && ut(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function ut(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - Je(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function dt(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - Je(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function ft(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : pt(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function pt(e) {
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
	function mt(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function ht() {
		var e = R.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : Ch(e.type)) : e;
	}
	function gt(e, t) {
		var n = R.p;
		try {
			return R.p = e, t();
		} finally {
			R.p = n;
		}
	}
	var _t = Math.random().toString(36).slice(2), vt = "__reactFiber$" + _t, yt = "__reactProps$" + _t, bt = "__reactContainer$" + _t, xt = "__reactEvents$" + _t, St = "__reactListeners$" + _t, Ct = "__reactHandles$" + _t, wt = "__reactResources$" + _t, Tt = "__reactMarker$" + _t, Et = "__reactLoad$" + _t;
	function Dt(e) {
		delete e[vt], delete e[yt], delete e[St], delete e[Ct];
	}
	function Ot(e) {
		var t;
		if (t = e[vt]) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[bt] || n[vt]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = fm(e); e !== null;) {
					if (n = e[vt]) return n;
					e = fm(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function kt(e) {
		if (e = e[vt] || e[bt]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function At(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(i(33));
	}
	function jt(e) {
		var t = e[wt];
		return t ||= e[wt] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function Mt(e) {
		e[Tt] = !0;
	}
	function Nt(e) {
		e[Et] = void 0;
	}
	var Pt = /* @__PURE__ */ new Set(), Ft = {};
	function It(e, t) {
		Lt(e, t), Lt(e + "Capture", t);
	}
	function Lt(e, t) {
		for (Ft[e] = t, e = 0; e < t.length; e++) Pt.add(t[e]);
	}
	var Rt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), zt = {}, Bt = {};
	function Vt(e) {
		return je.call(Bt, e) ? !0 : je.call(zt, e) ? !1 : Rt.test(e) ? Bt[e] = !0 : (zt[e] = !0, !1);
	}
	var Ht = !1;
	function Ut() {
		var e = Ht;
		return Ht = !1, e;
	}
	function Wt(e, t, n) {
		if (Vt(t)) {
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
	function Gt(e, t, n) {
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
	function Kt(e, t, n, r) {
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
	function qt(e) {
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
	function Jt(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function Yt(e, t, n) {
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
	function Xt(e) {
		if (!e._valueTracker) {
			var t = Jt(e) ? "checked" : "value";
			e._valueTracker = Yt(e, t, "" + e[t]);
		}
	}
	function Zt(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = Jt(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0);
	}
	var Qt = /[\n"\\]/g;
	function $t(e) {
		return e.replace(Qt, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function en(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + qt(t)) : e.value !== "" + qt(t) && (e.value = "" + qt(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : nn(e, qt(n)) : o === "number" && e.value == t ? nn(e, qt(e.value)) : nn(e, qt(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + qt(s) : e.removeAttribute("name");
	}
	function tn(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				Xt(e);
				return;
			}
			n = n == null ? "" : "" + qt(n), t = t == null ? n : "" + qt(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), Xt(e);
	}
	function nn(e, t) {
		e.defaultValue !== "" + t && (e.defaultValue = "" + t);
	}
	function rn(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + qt(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function an(e, t, n) {
		t != null && (t = "" + qt(t), t !== e.value && (e.value = t), n == null) ? e.defaultValue !== t && (e.defaultValue = t) : e.defaultValue = n == null ? "" : "" + qt(n);
	}
	function on(e, t, n, r) {
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
		n = qt(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), Xt(e);
	}
	function sn(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var cn = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function ln(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || cn.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function un(e, t, n) {
		if (t != null && typeof t != "object") throw Error(i(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "", Ht = !0);
			for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && (ln(e, a, r), Ht = !0);
		} else for (var o in t) t.hasOwnProperty(o) && ln(e, o, t[o]);
	}
	function dn(e) {
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
	var fn = /* @__PURE__ */ new Map([
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
	]), pn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function mn(e) {
		return pn.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function hn() {}
	var gn = null;
	function _n(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var vn = null, yn = null;
	function bn(e) {
		var t = kt(e);
		if (t && (e = t.stateNode)) {
			var n = e[yt] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (en(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + $t("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var a = r[yt] || null;
								if (!a) throw Error(i(90));
								en(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && Zt(r);
					}
					break a;
				case "textarea":
					an(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && rn(e, !!n.multiple, t, !1);
			}
		}
	}
	var xn = !1;
	function Sn(e, t, n) {
		if (xn) return e(t, n);
		xn = !0;
		try {
			return e(t);
		} finally {
			if (xn = !1, (vn !== null || yn !== null) && (Id(), vn && (t = vn, e = yn, yn = vn = null, bn(t), e))) for (t = 0; t < e.length; t++) bn(e[t]);
		}
	}
	function Cn(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[yt] || null;
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
	var wn = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Tn = !1;
	if (wn) try {
		var En = {};
		Object.defineProperty(En, "passive", { get: function() {
			Tn = !0;
		} }), window.addEventListener("test", En, En), window.removeEventListener("test", En, En);
	} catch {
		Tn = !1;
	}
	var Dn = null, On = null, kn = null;
	function An() {
		if (kn) return kn;
		var e, t = On, n = t.length, r, i = "value" in Dn ? Dn.value : Dn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return kn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function jn(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function Mn() {
		return !0;
	}
	function Nn() {
		return !1;
	}
	function Pn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Mn : Nn, this.isPropagationStopped = Nn, this;
		}
		return D(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Mn);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Mn);
			},
			persist: function() {},
			isPersistent: Mn
		}), t;
	}
	var Fn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, In = Pn(Fn), Ln = D({}, Fn, {
		view: 0,
		detail: 0
	}), Rn = Pn(Ln), zn, U, Bn, Vn = D({}, Ln, {
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
		getModifierState: Qn,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== Bn && (Bn && e.type === "mousemove" ? (zn = e.screenX - Bn.screenX, U = e.screenY - Bn.screenY) : U = zn = 0, Bn = e), zn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : U;
		}
	}), Hn = Pn(Vn), Un = Pn(D({}, Vn, { dataTransfer: 0 })), Wn = Pn(D({}, Ln, { relatedTarget: 0 })), Gn = Pn(D({}, Fn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Kn = Pn(D({}, Fn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), qn = Pn(D({}, Fn, { data: 0 })), Jn = {
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
	}, Yn = {
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
	}, Xn = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Zn(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = Xn[e]) ? !!t[e] : !1;
	}
	function Qn() {
		return Zn;
	}
	var $n = Pn(D({}, Ln, {
		key: function(e) {
			if (e.key) {
				var t = Jn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = jn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Yn[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Qn,
		charCode: function(e) {
			return e.type === "keypress" ? jn(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? jn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), er = Pn(D({}, Vn, {
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
	})), tr = Pn(D({}, Fn, { submitter: 0 })), nr = Pn(D({}, Ln, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Qn
	})), rr = Pn(D({}, Fn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), ir = Pn(D({}, Vn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), ar = Pn(D({}, Fn, {
		newState: 0,
		oldState: 0,
		source: 0
	})), or = [
		9,
		13,
		27,
		32
	], sr = wn && "CompositionEvent" in window, cr = null;
	wn && "documentMode" in document && (cr = document.documentMode);
	var lr = wn && "TextEvent" in window && !cr, ur = wn && (!sr || cr && 8 < cr && 11 >= cr), dr = " ", fr = !1;
	function pr(e, t) {
		switch (e) {
			case "keyup": return or.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function mr(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var hr = !1;
	function gr(e, t) {
		switch (e) {
			case "compositionend": return mr(t);
			case "keypress": return t.which === 32 ? (fr = !0, dr) : null;
			case "textInput": return e = t.data, e === dr && fr ? null : e;
			default: return null;
		}
	}
	function _r(e, t) {
		if (hr) return e === "compositionend" || !sr && pr(e, t) ? (e = An(), kn = On = Dn = null, hr = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return ur && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var vr = {
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
	function yr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!vr[e.type] : t === "textarea";
	}
	function br(e, t, n, r) {
		vn ? yn ? yn.push(r) : yn = [r] : vn = r, t = qf(t, "onChange"), 0 < t.length && (n = new In("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var xr = null, Sr = null;
	function Cr(e) {
		zf(e, 0);
	}
	function wr(e) {
		if (Zt(At(e))) return e;
	}
	function Tr(e, t) {
		if (e === "change") return t;
	}
	var Er = !1;
	if (wn) {
		var Dr;
		if (wn) {
			var Or = "oninput" in document;
			if (!Or) {
				var kr = document.createElement("div");
				kr.setAttribute("oninput", "return;"), Or = typeof kr.oninput == "function";
			}
			Dr = Or;
		} else Dr = !1;
		Er = Dr && (!document.documentMode || 9 < document.documentMode);
	}
	function Ar() {
		xr && (xr.detachEvent("onpropertychange", jr), Sr = xr = null);
	}
	function jr(e) {
		if (e.propertyName === "value" && wr(Sr)) {
			var t = [];
			br(t, Sr, e, _n(e)), Sn(Cr, t);
		}
	}
	function Mr(e, t, n) {
		e === "focusin" ? (Ar(), xr = t, Sr = n, xr.attachEvent("onpropertychange", jr)) : e === "focusout" && Ar();
	}
	function Nr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return wr(Sr);
	}
	function Pr(e, t) {
		if (e === "click") return wr(t);
	}
	function Fr(e, t) {
		if (e === "input" || e === "change") return wr(t);
	}
	function Ir(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Lr = typeof Object.is == "function" ? Object.is : Ir;
	function Rr(e, t) {
		if (Lr(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!je.call(t, i) || !Lr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function zr(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function Br(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Vr(e, t) {
		var n = Br(e);
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
			n = Br(n);
		}
	}
	function Hr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Hr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Ur(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = zr(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = zr(e.document);
		}
		return t;
	}
	function Wr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var Gr = wn && "documentMode" in document && 11 >= document.documentMode, Kr = null, qr = null, Jr = null, Yr = !1;
	function Xr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Yr || Kr == null || Kr !== zr(r) || (r = Kr, "selectionStart" in r && Wr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), Jr && Rr(Jr, r) || (Jr = r, r = qf(qr, "onSelect"), 0 < r.length && (t = new In("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Kr)));
	}
	function Zr(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var Qr = {
		animationend: Zr("Animation", "AnimationEnd"),
		animationiteration: Zr("Animation", "AnimationIteration"),
		animationstart: Zr("Animation", "AnimationStart"),
		transitionrun: Zr("Transition", "TransitionRun"),
		transitionstart: Zr("Transition", "TransitionStart"),
		transitioncancel: Zr("Transition", "TransitionCancel"),
		transitionend: Zr("Transition", "TransitionEnd")
	}, $r = {}, ei = {};
	wn && (ei = document.createElement("div").style, "AnimationEvent" in window || (delete Qr.animationend.animation, delete Qr.animationiteration.animation, delete Qr.animationstart.animation), "TransitionEvent" in window || delete Qr.transitionend.transition);
	function ti(e) {
		if ($r[e]) return $r[e];
		if (!Qr[e]) return e;
		var t = Qr[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in ei) return $r[e] = t[n];
		return e;
	}
	var ni = ti("animationend"), ri = ti("animationiteration"), ii = ti("animationstart"), ai = ti("transitionrun"), oi = ti("transitionstart"), si = ti("transitioncancel"), ci = ti("transitionend"), li = /* @__PURE__ */ new Map(), ui = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	ui.push("scrollEnd");
	function di(e, t) {
		li.set(e, t), It(t, [e]);
	}
	var fi = 0;
	function pi(e, t) {
		if (e.name != null && e.name !== "auto") return e.name;
		if (t.autoName !== null) return t.autoName;
		e = _d.identifierPrefix;
		var n = fi++;
		return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
	}
	function mi(e) {
		if (e == null || typeof e == "string") return e;
		var t = null, n = Td;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = e[n[r]];
			if (i != null) {
				if (i === "none") return "none";
				t = t == null ? i : t + (" " + i);
			}
		}
		return t ?? e.default;
	}
	function hi(e, t) {
		return e = mi(e), t = mi(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
	}
	var gi = typeof reportError == "function" ? reportError : function(e) {
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
	}, _i = [], vi = 0, yi = 0;
	function bi() {
		for (var e = vi, t = yi = vi = 0; t < e;) {
			var n = _i[t];
			_i[t++] = null;
			var r = _i[t];
			_i[t++] = null;
			var i = _i[t];
			_i[t++] = null;
			var a = _i[t];
			if (_i[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && wi(n, i, a);
		}
	}
	function xi(e, t, n, r) {
		_i[vi++] = e, _i[vi++] = t, _i[vi++] = n, _i[vi++] = r, yi |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function Si(e, t, n, r) {
		return xi(e, t, n, r), Ti(e);
	}
	function Ci(e, t) {
		return xi(e, null, null, t), Ti(e);
	}
	function wi(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - Je(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function Ti(e) {
		if (50 < Ed) throw Ed = 0, Dd = null, Error(i(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var Ei = {};
	function Di(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function Oi(e, t, n, r) {
		return new Di(e, t, n, r);
	}
	function ki(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function Ai(e, t) {
		var n = e.alternate;
		return n === null ? (n = Oi(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function ji(e, t) {
		e.flags &= 1206910978;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function Mi(e, t, n, r, a, o) {
		var s = 0;
		if (r = e, typeof r == "function") ki(r) && (s = 1);
		else if (typeof r == "string") s = qm(e, n, ye.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (r) {
			case oe: return e = Oi(31, n, t, a), e.elementType = oe, e.lanes = o, e;
			case j: return Ni(n.children, a, o, t);
			case M:
				s = 8, a |= 24;
				break;
			case ee: return e = Oi(12, n, t, a | 2), e.elementType = ee, e.lanes = o, e;
			case ne: return e = Oi(13, n, t, a), e.elementType = ne, e.lanes = o, e;
			case re: return e = Oi(19, n, t, a), e.elementType = re, e.lanes = o, e;
			case se:
			case le: return e = a | 32, e = Oi(30, n, t, e), e.elementType = le, e.lanes = o, e.stateNode = {
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
		return t = Oi(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
	}
	function Ni(e, t, n, r) {
		return e = Oi(7, e, r, t), e.lanes = n, e;
	}
	function Pi(e, t, n) {
		return e = Oi(6, e, null, t), e.lanes = n, e;
	}
	function Fi(e) {
		var t = Oi(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function Ii(e, t, n) {
		return t = Oi(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var Li = /* @__PURE__ */ new WeakMap();
	function Ri(e, t) {
		if (typeof e == "object" && e) {
			var n = Li.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: H(t)
			}, Li.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: H(t)
		};
	}
	var zi = [], Bi = 0, Vi = null, Hi = 0, Ui = [], Wi = 0, Gi = null, Ki = 1, qi = "";
	function Ji(e, t) {
		zi[Bi++] = Hi, zi[Bi++] = Vi, Vi = e, Hi = t;
	}
	function Yi(e, t, n) {
		Ui[Wi++] = Ki, Ui[Wi++] = qi, Ui[Wi++] = Gi, Gi = e;
		var r = Ki;
		e = qi;
		var i = 32 - Je(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - Je(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Ki = 1 << 32 - Je(t) + i | n << i | r, qi = a + e;
		} else Ki = 1 << a | n << i | r, qi = e;
	}
	function Xi(e) {
		e.return !== null && (Ji(e, 1), Yi(e, 1, 0));
	}
	function Zi(e) {
		for (; e === Vi;) Vi = zi[--Bi], zi[Bi] = null, Hi = zi[--Bi], zi[Bi] = null;
		for (; e === Gi;) Gi = Ui[--Wi], Ui[Wi] = null, qi = Ui[--Wi], Ui[Wi] = null, Ki = Ui[--Wi], Ui[Wi] = null;
	}
	function Qi(e, t) {
		Ui[Wi++] = Ki, Ui[Wi++] = qi, Ui[Wi++] = Gi, Ki = t.id, qi = t.overflow, Gi = e;
	}
	var $i = null, ea = null, W = !1, ta = null, na = !1, ra = Error(i(519));
	function ia(e) {
		throw ua(Ri(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), ra;
	}
	function aa(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[vt] = e, t[yt] = r, n) {
			case "dialog":
				Bf("cancel", t), Bf("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				Bf("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < Lf.length; n++) Bf(Lf[n], t);
				break;
			case "source":
				Bf("error", t);
				break;
			case "img":
			case "image":
			case "link":
				Bf("error", t), Bf("load", t);
				break;
			case "details":
				Bf("toggle", t);
				break;
			case "input":
				Bf("invalid", t), tn(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				Bf("invalid", t);
				break;
			case "textarea": Bf("invalid", t), on(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || $f(t.textContent, n) ? (r.popover != null && (Bf("beforetoggle", t), Bf("toggle", t)), r.onScroll != null && Bf("scroll", t), r.onScrollEnd != null && Bf("scrollend", t), r.onClick != null && (t.onclick = hn), t = !0) : t = !1, t || ia(e, !0);
	}
	function oa(e) {
		for ($i = e.return; $i;) switch ($i.tag) {
			case 5:
			case 31:
			case 13:
				na = !1;
				return;
			case 27:
			case 3:
				na = !0;
				return;
			default: $i = $i.return;
		}
	}
	function sa(e) {
		if (e !== $i) return !1;
		if (!W) return oa(e), W = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = n === "form" || n === "button" || pp(e.type, e.memoizedProps)), n = !n), n && ea && ia(e), oa(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			ea = dm(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			ea = dm(e);
		} else t === 27 ? (t = ea, Sp(e.type) ? (e = um, um = null, ea = e) : ea = t) : ea = $i ? lm(e.stateNode.nextSibling) : null;
		return !0;
	}
	function ca() {
		ea = $i = null, W = !1;
	}
	function la() {
		var e = ta;
		return e !== null && (ld === null ? ld = e : ld.push.apply(ld, e), ta = null), e;
	}
	function ua(e) {
		ta === null ? ta = [e] : ta.push(e);
	}
	var da = ge(null), fa = null, pa = null;
	function ma(e, t, n) {
		ve(da, t._currentValue), t._currentValue = n;
	}
	function ha(e) {
		e._currentValue = da.current, _e(da);
	}
	function ga(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function _a(e, t, n, r) {
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
						o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), ga(o.return, n, e), r || (s = null);
						break a;
					}
					o = c.next;
				}
			} else if (a.tag === 18) {
				if (s = a.return, s === null) throw Error(i(341));
				s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), ga(s, n, e), s = null;
			} else a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), ga(a.return, n, e), s = a.child, s = s === null ? null : s.sibling) : s = a.child;
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
	function va(e, t, n, r) {
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
					Lr(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
				}
			} else if (a === V.current) {
				if (s = a.alternate, s === null) throw Error(i(387));
				s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [sh] : e.push(sh));
			}
			a = a.return;
		}
		return e !== null && _a(t, e, n, r), t.flags |= 262144, e !== null;
	}
	function ya(e) {
		for (e = e.firstContext; e !== null;) {
			if (!Lr(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function ba(e) {
		fa = e, pa = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function xa(e) {
		return Ca(fa, e);
	}
	function Sa(e, t) {
		return fa === null && ba(e), Ca(e, t);
	}
	function Ca(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, pa === null) {
			if (e === null) throw Error(i(308));
			pa = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else pa = pa.next = t;
		return n;
	}
	var wa = typeof AbortController < "u" ? AbortController : function() {
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
	}, Ta = t.unstable_scheduleCallback, Ea = t.unstable_NormalPriority, Da = {
		$$typeof: P,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function Oa() {
		return {
			controller: new wa(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function ka(e) {
		e.refCount--, e.refCount === 0 && Ta(Ea, function() {
			e.controller.abort();
		});
	}
	function Aa(e, t) {
		if (e.pendingLanes & 4194048) {
			var n = e.transitionTypes;
			for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
				var r = t[e];
				n.indexOf(r) === -1 && n.push(r);
			}
		}
	}
	var ja = null;
	function Ma(e) {
		var t = e.transitionTypes;
		return e.transitionTypes = null, t;
	}
	var Na = null, Pa = 0, Fa = 0, Ia = null;
	function La(e, t) {
		if (Na === null) {
			var n = Na = [];
			Pa = 0, Fa = Mf(), Ia = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return Pa++, t.then(Ra, Ra), t;
	}
	function Ra() {
		if (--Pa === 0 && (ja = null, Na !== null)) {
			Ia !== null && (Ia.status = "fulfilled");
			var e = Na;
			Na = null, Fa = 0, Ia = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function za(e, t) {
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
	var Ba = L.S;
	L.S = function(e, t) {
		if (fd = Ie(), typeof t == "object" && t && typeof t.then == "function" && La(e, t), ja !== null) for (var n = vf; n !== null;) Aa(n, ja), n = n.next;
		if (n = e.types, n !== null) {
			for (var r = vf; r !== null;) Aa(r, n), r = r.next;
			if (Fa !== 0) {
				r = ja, r === null && (r = ja = []);
				for (var i = 0; i < n.length; i++) {
					var a = n[i];
					r.indexOf(a) === -1 && r.push(a);
				}
			}
		}
		Ba !== null && Ba(e, t);
	};
	var Va = ge(null);
	function Ha() {
		var e = Va.current;
		return e === null ? Ju.pooledCache : e;
	}
	function Ua(e, t) {
		t === null ? ve(Va, Va.current) : ve(Va, t.pool);
	}
	function Wa() {
		var e = Ha();
		return e === null ? null : {
			parent: Da._currentValue,
			pool: e
		};
	}
	var Ga = Error(i(460)), Ka = Error(i(474)), qa = Error(i(542)), Ja = { then: function() {} };
	function Ya(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function Xa(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(hn, hn), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, $a(e), e === void 0 && !("reason" in t) ? Error(i(600)) : e;
			default:
				if (typeof t.status == "string") t.then(hn, hn);
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
					case "rejected": throw e = t.reason, $a(e), e;
				}
				throw Qa = t, Ga;
		}
	}
	function Za(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == "object" && e && typeof e.then == "function" ? (Qa = e, Ga) : e;
		}
	}
	var Qa = null;
	function G() {
		if (Qa === null) throw Error(i(459));
		var e = Qa;
		return Qa = null, e;
	}
	function $a(e) {
		if (e === Ga || e === qa) throw Error(i(483));
	}
	var eo = null, to = 0;
	function no(e) {
		var t = to;
		return to += 1, eo === null && (eo = []), Xa(eo, e, t);
	}
	function ro(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function io(e, t) {
		throw t.$$typeof === O ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
	}
	function ao(e) {
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
			return e = Ai(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 134217730, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 134217730), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = Pi(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var i = n.type;
			return i === j ? (e = d(e, t, n.props.children, r, n.key), ro(e, n), e) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === ae && Za(i) === t.type) ? (t = a(t, n.props), ro(t, n), t.return = e, t) : (t = Mi(n.type, n.key, n.props, null, e.mode, r), ro(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Ii(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = Ni(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = Pi("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case k: return n = Mi(t.type, t.key, t.props, null, e.mode, n), ro(n, t), n.return = e, n;
					case A: return t = Ii(t, e.mode, n), t.return = e, t;
					case ae: return t = Za(t), f(e, t, n);
				}
				if (I(t) || F(t)) return t = Ni(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, no(t), n);
				if (t.$$typeof === P) return f(e, Sa(e, t), n);
				io(e, t);
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
					case ae: return n = Za(n), p(e, t, n, r);
				}
				if (I(n) || F(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, no(n), r);
				if (n.$$typeof === P) return p(e, t, Sa(e, n), r);
				io(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case k: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case A: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case ae: return r = Za(r), m(e, t, n, r, i);
				}
				if (I(r) || F(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, no(r), i);
				if (r.$$typeof === P) return m(e, t, n, Sa(t, r), i);
				io(t, r);
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
			if (h === s.length) return n(i, d), W && Ji(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return W && Ji(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && (_ = g.alternate, _ !== null && d.delete(_.key === null ? h : _.key)), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), W && Ji(i, h), l;
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
			if (v.done) return n(a, h), W && Ji(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return W && Ji(a, g), u;
			}
			for (h = r(h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && (_ = v.alternate, _ !== null && h.delete(_.key === null ? g : _.key)), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), W && Ji(a, g), u;
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
											n(e, r.sibling), c = a(r, o.props.children), ro(c, o), c.return = e, e = c;
											break a;
										}
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === ae && Za(l) === r.type) {
										n(e, r.sibling), c = a(r, o.props), ro(c, o), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							o.type === j ? (c = Ni(o.props.children, e.mode, c, o.key), ro(c, o), c.return = e, e = c) : (c = Mi(o.type, o.key, o.props, null, e.mode, c), ro(c, o), c.return = e, e = c);
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
							c = Ii(o, e.mode, c), c.return = e, e = c;
						}
						return s(e);
					case ae: return o = Za(o), _(e, r, o, c);
				}
				if (I(o)) return h(e, r, o, c);
				if (F(o)) {
					if (l = F(o), typeof l != "function") throw Error(i(150));
					return o = l.call(o), g(e, r, o, c);
				}
				if (typeof o.then == "function") return _(e, r, no(o), c);
				if (o.$$typeof === P) return _(e, r, Sa(e, o), c);
				io(e, o);
			}
			return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = a(r, o), c.return = e, e = c) : (n(e, r), c = Pi(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				to = 0;
				var i = _(e, t, n, r);
				return eo = null, i;
			} catch (t) {
				if (t === Ga || t === qa) throw t;
				var a = Oi(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var oo = ao(!0), so = ao(!1), co = !1;
	function lo(e) {
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
	function uo(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function fo(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function po(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, qu & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = Ti(e), wi(e, null, n), t;
		}
		return xi(e, r, t, n), Ti(e);
	}
	function mo(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, dt(e, n);
		}
	}
	function ho(e, t) {
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
	var go = !1;
	function _o() {
		if (go) {
			var e = Ia;
			if (e !== null) throw e;
		}
	}
	function vo(e, t, n, r) {
		go = !1;
		var i = e.updateQueue;
		co = !1;
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
				if (p ? (Yu & f) === f : (r & f) === f) {
					f !== 0 && f === Fa && (go = !0), u !== null && (u = u.next = {
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
							case 2: co = !0;
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
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), rd |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function yo(e, t) {
		if (typeof e != "function") throw Error(i(191, e));
		e.call(t);
	}
	function bo(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) yo(n[e], t);
	}
	var xo = ge(null), So = ge(0);
	function K(e, t) {
		e = td, ve(So, e), ve(xo, t), td = e | t.baseLanes;
	}
	function Co() {
		ve(So, td), ve(xo, xo.current);
	}
	function q() {
		td = So.current, _e(xo), _e(So);
	}
	var J = ge(null), wo = null;
	function Y(e) {
		var t = e.alternate;
		ve(ko, ko.current & 1), ve(J, e), wo === null && (t === null || xo.current !== null || t.memoizedState !== null) && (wo = e);
	}
	function To(e) {
		ve(ko, ko.current), ve(J, e), wo === null && (wo = e);
	}
	function Eo(e) {
		e.tag === 22 ? (ve(ko, ko.current), ve(J, e), wo === null && (wo = e)) : Do();
	}
	function Do() {
		ve(ko, ko.current), ve(J, J.current);
	}
	function Oo(e) {
		_e(J), wo === e && (wo = null), _e(ko);
	}
	var ko = ge(0);
	function Ao(e, t) {
		ve(J, J.current), ve(ko, t);
	}
	function jo(e) {
		_e(ko), _e(J), wo === e && (wo = null);
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
		for (var n = 0; n < t.length && n < e.length; n++) if (!Lr(e[n], t[n])) return !1;
		return !0;
	}
	function Go(e, t, n, r, i, a) {
		return No = a, X = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, L.H = e === null || e.memoizedState === null ? sc : cc, Ro = !1, a = n(r, i), Ro = !1, Lo && (a = qo(t, n, r, i)), Ko(e), a;
	}
	function Ko(e) {
		L.H = oc;
		var t = Po !== null && Po.next !== null;
		if (No = 0, Fo = Po = X = null, Io = !1, Bo = 0, Vo = null, t) throw Error(i(300));
		e === null || Tc || (e = e.dependencies, e !== null && ya(e) && (Tc = !0));
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
		return Bo += 1, Vo === null && (Vo = []), e = Xa(Vo, e, t), t = X, (Fo === null ? t.memoizedState : Fo.next) === null && (t = t.alternate, L.H = t === null || t.memoizedState === null ? sc : cc), e;
	}
	function ns(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return ts(e);
			if (e.$$typeof === ue) return;
			if (e.$$typeof === P) return xa(e);
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
				if (f === u.lane ? (No & f) === f : (Yu & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === Fa && (d = !0);
					else if ((No & p) === p) {
						u = u.next, p === Fa && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (c = l = f, s = o) : l = l.next = f, X.lanes |= p, rd |= p;
					f = u.action, Ro && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (c = l = p, s = o) : l = l.next = p, X.lanes |= f, rd |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? s = o : l.next = c, !Lr(o, e.memoizedState) && (Tc = !0, d && (n = Ia, n !== null))) throw n;
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
			Lr(o, t.memoizedState) || (Tc = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function cs(e, t, n) {
		var r = X, a = $o(), o = W;
		if (o) {
			if (n === void 0) throw Error(i(407));
			n = n();
		} else n = t();
		var s = !Lr((Po || a).memoizedState, n);
		if (s && (a.memoizedState = n, Tc = !0), a = a.queue, Ns(ds.bind(null, r, a, e), [e]), e = a.getSnapshot !== t || s || Fo !== null && !!(Fo.memoizedState.tag & 1), Os(e ? 9 : 8, { destroy: void 0 }, us.bind(null, r, a, n, t), null), e) {
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
			return !Lr(e, n);
		} catch {
			return !0;
		}
	}
	function ps(e) {
		var t = Ci(e, 2);
		t !== null && jd(t, e, 2);
	}
	function ms(e) {
		var t = Qo();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), Ro) {
				qe(!0);
				try {
					n();
				} finally {
					qe(!1);
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
		if (ic(e)) throw Error(i(485));
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
		if (W) {
			var n = Ju.formState;
			if (n !== null) {
				a: {
					var r = X;
					if (W) {
						if (ea) {
							b: {
								for (var i = ea, a = na; i.nodeType !== 8;) if (!a || (i = lm(i.nextSibling), i === null)) {
									i = null;
									break b;
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								ea = lm(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						ia(r);
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
		}, n.queue = r, n = tc.bind(null, X, r), r.dispatch = n, r = ms(!1), a = rc.bind(null, X, !1, r.queue), r = Qo(), i = {
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
			throw e === Ga ? qa : e;
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
	function Is(e, t) {
		return js(4, 2, e, t);
	}
	function Ls(e, t) {
		return js(4, 4, e, t);
	}
	function Rs(e, t) {
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
	function zs(e, t, n) {
		n = n == null ? null : n.concat([e]), js(4, 4, Rs.bind(null, t, e), n);
	}
	function Bs() {}
	function Vs(e, t) {
		var n = $o();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && Wo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function Hs(e, t) {
		var n = $o();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && Wo(t, r[1])) return r[0];
		if (r = e(), Ro) {
			qe(!0);
			try {
				e();
			} finally {
				qe(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function Us(e, t, n) {
		return n === void 0 || No & 1073741824 && !(Yu & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = kd(), X.lanes |= e, rd |= e, n);
	}
	function Ws(e, t, n, r) {
		return Lr(n, t) ? n : xo.current === null ? !(No & 106) || No & 1073741824 && !(Yu & 261930) ? (Tc = !0, e.memoizedState = n) : (e = kd(), X.lanes |= e, rd |= e, t) : (e = Us(e, n, r), Lr(e, t) || (Tc = !0), e);
	}
	function Gs(e, t, n, r, i) {
		var a = R.p;
		R.p = a !== 0 && 8 > a ? a : 8;
		var o = L.T, s = {};
		s.types = o === null ? null : o.types, L.T = s, rc(e, !1, t, n);
		try {
			var c = i(), l = L.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? nc(e, t, za(c, r), Od(e)) : nc(e, t, r, Od(e));
		} catch (n) {
			nc(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, Od());
		} finally {
			R.p = a, o !== null && s.types !== null && (o.types = s.types), L.T = o;
		}
	}
	function Ks() {}
	function qs(e, t, n, r) {
		if (e.tag !== 5) throw Error(i(476));
		var a = Js(e).queue;
		Gs(e, a, t, me, n === null ? Ks : function() {
			return Ys(e), n(r);
		});
	}
	function Js(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: me,
			baseState: me,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: is,
				lastRenderedState: me
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
	function Ys(e) {
		var t = Js(e);
		t.next === null && (t = e.alternate.memoizedState), nc(e, t.next.queue, {}, Od());
	}
	function Xs() {
		return xa(sh);
	}
	function Zs() {
		return $o().memoizedState;
	}
	function Qs() {
		return $o().memoizedState;
	}
	function $s(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = Od();
					e = fo(n);
					var r = po(t, e, n);
					r !== null && (jd(r, t, n), mo(r, t, n)), t = { cache: Oa() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function ec(e, t, n) {
		var r = Od();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, ic(e) ? ac(t, n) : (n = Si(e, t, n, r), n !== null && (jd(n, e, r), Z(n, t, r)));
	}
	function tc(e, t, n) {
		nc(e, t, n, Od());
	}
	function nc(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (ic(e)) ac(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, Lr(s, o)) return xi(e, t, i, 0), Ju === null && bi(), !1;
			} catch {}
			if (n = Si(e, t, i, r), n !== null) return jd(n, e, r), Z(n, t, r), !0;
		}
		return !1;
	}
	function rc(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: Mf(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, ic(e)) {
			if (t) throw Error(i(479));
		} else t = Si(e, n, r, 2), t !== null && jd(t, e, 2);
	}
	function ic(e) {
		var t = e.alternate;
		return e === X || t !== null && t === X;
	}
	function ac(e, t) {
		Lo = Io = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function Z(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, dt(e, n);
		}
	}
	var oc = {
		readContext: xa,
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
		readContext: xa,
		use: ns,
		useCallback: function(e, t) {
			return Qo().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: xa,
		useEffect: Ms,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), As(4194308, 4, Rs.bind(null, t, e), n);
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
				qe(!0);
				try {
					e();
				} finally {
					qe(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = Qo();
			if (n !== void 0) {
				var i = n(t);
				if (Ro) {
					qe(!0);
					try {
						n(t);
					} finally {
						qe(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = ec.bind(null, X, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = Qo();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = ms(e);
			var t = e.queue, n = tc.bind(null, X, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: Bs,
		useDeferredValue: function(e, t) {
			return Us(Qo(), e, t);
		},
		useTransition: function() {
			var e = ms(!1);
			return e = Gs.bind(null, X, e.queue, !0, !1), Qo().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = X, a = Qo();
			if (W) {
				if (n === void 0) throw Error(i(407));
				n = n();
			} else {
				if (n = t(), Ju === null) throw Error(i(349));
				Yu & 127 || ls(r, t, n);
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
			if (W) {
				var n = qi, r = Ki;
				n = (r & ~(1 << 32 - Je(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = zo++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = Ho++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: Xs,
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
			return t.queue = n, t = rc.bind(null, X, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: rs,
		useCacheRefresh: function() {
			return Qo().memoizedState = $s.bind(null, X);
		},
		useEffectEvent: function(e) {
			var t = Qo(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (qu & 2) throw Error(i(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, cc = {
		readContext: xa,
		use: ns,
		useCallback: Vs,
		useContext: xa,
		useEffect: Ns,
		useImperativeHandle: zs,
		useInsertionEffect: Is,
		useLayoutEffect: Ls,
		useMemo: Hs,
		useReducer: as,
		useRef: ks,
		useState: function() {
			return as(is);
		},
		useDebugValue: Bs,
		useDeferredValue: function(e, t) {
			return Ws($o(), Po.memoizedState, e, t);
		},
		useTransition: function() {
			var e = as(is)[0], t = $o().memoizedState;
			return [typeof e == "boolean" ? e : ts(e), t];
		},
		useSyncExternalStore: cs,
		useId: Zs,
		useHostTransitionStatus: Xs,
		useFormState: ws,
		useActionState: ws,
		useOptimistic: function(e, t) {
			return hs($o(), Po, e, t);
		},
		useMemoCache: rs,
		useCacheRefresh: Qs,
		useEffectEvent: Fs
	}, lc = {
		readContext: xa,
		use: ns,
		useCallback: Vs,
		useContext: xa,
		useEffect: Ns,
		useImperativeHandle: zs,
		useInsertionEffect: Is,
		useLayoutEffect: Ls,
		useMemo: Hs,
		useReducer: ss,
		useRef: ks,
		useState: function() {
			return ss(is);
		},
		useDebugValue: Bs,
		useDeferredValue: function(e, t) {
			var n = $o();
			return Po === null ? Us(n, e, t) : Ws(n, Po.memoizedState, e, t);
		},
		useTransition: function() {
			var e = ss(is)[0], t = $o().memoizedState;
			return [typeof e == "boolean" ? e : ts(e), t];
		},
		useSyncExternalStore: cs,
		useId: Zs,
		useHostTransitionStatus: Xs,
		useFormState: Ds,
		useActionState: Ds,
		useOptimistic: function(e, t) {
			var n = $o();
			return Po === null ? (n.baseState = e, [e, n.queue.dispatch]) : hs(n, Po, e, t);
		},
		useMemoCache: rs,
		useCacheRefresh: Qs,
		useEffectEvent: Fs
	};
	function uc(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : D({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var dc = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = Od(), i = fo(r);
			i.payload = t, n != null && (i.callback = n), t = po(e, i, r), t !== null && (jd(t, e, r), mo(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = Od(), i = fo(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = po(e, i, r), t !== null && (jd(t, e, r), mo(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = Od(), r = fo(n);
			r.tag = 2, t != null && (r.callback = t), t = po(e, r, n), t !== null && (jd(t, e, n), mo(t, e, n));
		}
	};
	function fc(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Rr(n, r) || !Rr(i, a) : !0;
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
		gi(e);
	}
	function gc(e) {
		console.error(e);
	}
	function _c(e) {
		gi(e);
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
		return n = fo(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			vc(e, t);
		}, n;
	}
	function xc(e) {
		return e = fo(e), e.tag = 3, e;
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
			yc(t, n, r), typeof i != "function" && (hd === null ? hd = /* @__PURE__ */ new Set([this]) : hd.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function Cc(e, t, n, r, a) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && va(t, n, a, !0), n = J.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13:
					case 19: return wo === null ? Ud() : n.alternate === null && nd === 0 && (nd = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === Ja ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), ff(e, r, a)), !1;
					case 22: return n.flags |= 65536, r === Ja ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: /* @__PURE__ */ new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), ff(e, r, a)), !1;
				}
				throw Error(i(435, n.tag));
			}
			return ff(e, r, a), Ud(), !1;
		}
		if (W) return t = J.current, t === null ? (r !== ra && (t = Error(i(423), { cause: r }), ua(Ri(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = Ri(r, n), a = bc(e.stateNode, r, a), ho(e, a), nd !== 4 && (nd = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== ra && (e = Error(i(422), { cause: r }), ua(Ri(e, n)))), !1;
		var o = Error(i(520), { cause: r });
		if (o = Ri(o, n), cd === null ? cd = [o] : cd.push(o), nd !== 4 && (nd = 2), t === null) return !0;
		r = Ri(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = a & -a, n.lanes |= e, e = bc(n.stateNode, r, e), ho(n, e), !1;
				case 1:
					if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (hd === null || !hd.has(o)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = xc(a), Sc(a, e, n, r), ho(n, a), !1;
					break;
				case 22: if (n.memoizedState !== null) return n.flags |= 65536, !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var wc = Error(i(461)), Tc = !1;
	function Ec(e, t, n, r) {
		t.child = e === null ? so(t, null, n, r) : oo(t, e.child, n, r);
	}
	function Dc(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return ba(t), r = Go(e, t, n, o, a, i), s = Yo(), e !== null && !Tc ? (Xo(e, t, i), el(e, t, i)) : (W && s && Xi(t), t.flags |= 1, Ec(e, t, r, i), t.child);
	}
	function Oc(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !ki(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, kc(e, t, a, r, i)) : (e = Mi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !tl(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Rr : n, n(o, r) && e.ref === t.ref) return el(e, t, i);
		}
		return t.flags |= 1, e = Ai(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function kc(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Rr(a, r) && e.ref === t.ref) {
				if (Tc = !1, t.pendingProps = r = a, tl(e, i)) e.flags & 131072 && (Tc = !0);
				else return t.lanes = e.lanes, el(e, t, i);
			}
		}
		return Lc(e, t, n, r, i);
	}
	function Ac(e, t, n, r) {
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
				return Mc(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && Ua(t, a === null ? null : a.cachePool), a === null ? Co() : K(t, a), Eo(t);
			else return r = t.lanes = 536870912, Mc(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && Ua(t, null), Co(), Do()) : (Ua(t, a.cachePool), K(t, a), Do(), t.memoizedState = null);
		return Ec(e, t, i, n), t.child;
	}
	function jc(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function Mc(e, t, n, r, i) {
		var a = Ha();
		return a = a === null ? null : {
			parent: Da._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && Ua(t, null), Co(), Eo(t), e !== null && va(e, t, r, !0), t.childLanes = i, null;
	}
	function Nc(e, t) {
		return t = Kc({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function Pc(e, t, n) {
		return oo(t, e.child, null, n), e = Nc(t, t.pendingProps), e.flags |= 2, Oo(t), t.memoizedState = null, e;
	}
	function Fc(e, t, n) {
		var r = t.pendingProps, a = !!(t.flags & 128);
		if (t.flags &= -129, e === null) {
			if (W) {
				if (r.mode === "hidden") return e = Nc(t, r), t.lanes = 536870912, e.memoizedState = {
					baseLanes: 0,
					cachePool: null
				}, jc(null, e);
				if (To(t), (e = ea) ? (e = am(e, na), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Gi === null ? null : {
						id: Ki,
						overflow: qi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Fi(e), n.return = t, t.child = n, $i = t, ea = null)) : e = null, e === null) throw ia(t);
				return t.lanes = 536870912, null;
			}
			return Nc(t, r);
		}
		var o = e.memoizedState;
		if (o !== null) {
			var s = o.dehydrated;
			if (To(t), a) {
				if (t.flags & 256) t.flags &= -257, t = Pc(e, t, n);
				else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
				else throw Error(i(558));
			} else if (Tc || va(e, t, n, !1), a = (n & e.childLanes) !== 0, Tc || a) {
				if (xo.current === null) {
					if (r = Ju, r !== null && (s = ft(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, Ci(e, s), jd(r, e, s), wc;
					Ud();
				}
				t = Pc(e, t, n);
			} else e = o.treeContext, ea = lm(s.nextSibling), $i = t, W = !0, ta = null, na = !1, e !== null && Qi(t, e), t = Nc(t, r), t.flags |= 134221824;
			return t;
		}
		return e = Ai(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function Ic(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(i(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function Lc(e, t, n, r, i) {
		return ba(t), n = Go(e, t, n, r, void 0, i), r = Yo(), e !== null && !Tc ? (Xo(e, t, i), el(e, t, i)) : (W && r && Xi(t), t.flags |= 1, Ec(e, t, n, i), t.child);
	}
	function Rc(e, t, n, r, i, a) {
		return ba(t), t.updateQueue = null, n = qo(t, r, n, i), Ko(e), r = Yo(), e !== null && !Tc ? (Xo(e, t, a), el(e, t, a)) : (W && r && Xi(t), t.flags |= 1, Ec(e, t, n, a), t.child);
	}
	function zc(e, t, n, r, i) {
		if (ba(t), t.stateNode === null) {
			var a = Ei, o = n.contextType;
			typeof o == "object" && o && (a = xa(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = dc, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, lo(t), o = n.contextType, a.context = typeof o == "object" && o ? xa(o) : Ei, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (uc(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && dc.enqueueReplaceState(a, a.state, null), vo(t, r, a, i), _o(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = mc(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = Ei, typeof u == "object" && u && (o = xa(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && pc(t, a, r, o), co = !1;
			var f = t.memoizedState;
			a.state = f, vo(t, r, a, i), _o(), l = t.memoizedState, s || f !== l || co ? (typeof d == "function" && (uc(t, n, d, r), l = t.memoizedState), (c = co || fc(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, uo(e, t), o = t.memoizedProps, u = mc(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = Ei, typeof l == "object" && l && (c = xa(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && pc(t, a, r, c), co = !1, f = t.memoizedState, a.state = f, vo(t, r, a, i), _o();
			var p = t.memoizedState;
			o !== d || f !== p || co || e !== null && e.dependencies !== null && ya(e.dependencies) ? (typeof s == "function" && (uc(t, n, s, r), p = t.memoizedState), (u = co || fc(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && ya(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, Ic(e, t), r = !!(t.flags & 128), a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = oo(t, e.child, null, i), t.child = oo(t, null, n, i)) : Ec(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = el(e, t, i), e;
	}
	function Bc(e, t, n, r) {
		return ca(), t.flags |= 256, Ec(e, t, n, r), t.child;
	}
	var Vc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function Hc(e) {
		return {
			baseLanes: e,
			cachePool: Wa()
		};
	}
	function Uc(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= od), e;
	}
	function Wc(e, t, n) {
		var r = t.pendingProps, i = !1, a = !!(t.flags & 128), o;
		if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : !!(ko.current & 2)), o && (i = !0, t.flags &= -129), o = !!(t.flags & 32), t.flags &= -33, e === null) {
			if (W) {
				if (i ? Y(t) : Do(), (e = ea) ? (e = am(e, na), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Gi === null ? null : {
						id: Ki,
						overflow: qi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Fi(e), n.return = t, t.child = n, $i = t, ea = null)) : e = null, e === null) throw ia(t);
				return t.lanes = sm(e) ? 32 : 536870912, null;
			}
			return a = r.children, r = r.fallback, i ? (Do(), i = t.mode, a = Kc({
				mode: "hidden",
				children: a
			}, i), r = Ni(r, i, n, null), a.return = t, r.return = t, a.sibling = r, t.child = a, r = t.child, r.memoizedState = Hc(n), r.childLanes = Uc(e, o, n), t.memoizedState = Vc, jc(null, r)) : (Y(t), Gc(t, a));
		}
		var s = e.memoizedState;
		if (s !== null) {
			var c = s.dehydrated;
			if (c !== null) return qc(e, t, a, o, r, c, s, n);
		}
		return i ? (Do(), i = r.fallback, a = t.mode, s = e.child, c = s.sibling, r = Ai(s, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = s.subtreeFlags & 1206910976, c === null ? (i = Ni(i, a, n, null), i.flags |= 2) : i = Ai(c, i), i.return = t, r.return = t, r.sibling = i, t.child = r, jc(null, r), r = t.child, i = e.child.memoizedState, i === null ? i = Hc(n) : (a = i.cachePool, a === null ? a = Wa() : (s = Da._currentValue, a = a.parent === s ? a : {
			parent: s,
			pool: s
		}), i = {
			baseLanes: i.baseLanes | n,
			cachePool: a
		}), r.memoizedState = i, r.childLanes = Uc(e, o, n), t.memoizedState = Vc, jc(e.child, r)) : (Y(t), n = e.child, e = n.sibling, n = Ai(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function Gc(e, t) {
		return t = Kc({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function Kc(e, t) {
		return e = Oi(22, e, null, t), e.lanes = 0, e;
	}
	function Q(e, t, n) {
		return oo(t, e.child, null, n), e = Gc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function qc(e, t, n, r, a, o, s, c) {
		if (n) return t.flags & 256 ? (Y(t), t.flags &= -257, Q(e, t, c)) : t.memoizedState === null ? (Do(), o = a.fallback, s = t.mode, a = Kc({
			mode: "visible",
			children: a.children
		}, s), o = Ni(o, s, c, null), o.flags |= 2, a.return = t, o.return = t, a.sibling = o, t.child = a, oo(t, e.child, null, c), a = t.child, a.memoizedState = Hc(c), a.childLanes = Uc(e, r, c), t.memoizedState = Vc, jc(null, a)) : (Do(), t.child = e.child, t.flags |= 128, null);
		if (Y(t), sm(o)) {
			if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
			return r = l, r !== "" && (a = Error(i(419)), a.stack = "", a.digest = r, ua({
				value: a,
				source: null,
				stack: null
			})), Q(e, t, c);
		}
		if (Tc || va(e, t, c, !1), r = (c & e.childLanes) !== 0, Tc || r) {
			if (xo.current !== null) return Q(e, t, c);
			if (r = Ju, r !== null && (a = ft(r, c), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, Ci(e, a), jd(r, e, a), wc;
			return om(o) || Ud(), Q(e, t, c);
		}
		return om(o) ? (t.flags |= 192, t.child = e.child, null) : (e = s.treeContext, ea = lm(o.nextSibling), $i = t, W = !0, ta = null, na = !1, e !== null && Qi(t, e), t = Gc(t, a.children), t.flags |= 134221824, t);
	}
	function Jc(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), ga(e.return, t, n);
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
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, Ao(t, o), i === "backwards" && e !== null ? (Zc(e), Ec(e, t, r, n), Zc(e)) : Ec(e, t, r, n), r = W ? Hi : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
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
		return ma(t, t.type, r.value), Ec(e, t, r.children, n), t.child;
	}
	function el(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), rd |= t.lanes, (n & t.childLanes) === 0) {
			if (e !== null) {
				if (va(e, t, n, !1), (n & t.childLanes) === 0) return null;
			} else return null;
		}
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (e = t.child, n = Ai(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Ai(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function tl(e, t) {
		return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && ya(e)));
	}
	function nl(e, t, n) {
		switch (t.tag) {
			case 3:
				xe(t, t.stateNode.containerInfo), ma(t, Da, e.memoizedState.cache), ca();
				break;
			case 27:
			case 5:
				Ce(t);
				break;
			case 4:
				xe(t, t.stateNode.containerInfo);
				break;
			case 10:
				ma(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, To(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) {
					if (r.dehydrated !== null) return Y(t), t.flags |= 128, null;
					r = va(e, t, n, !1);
					var i = t.child.childLanes;
					return r || (n & i) !== 0 ? Wc(e, t, n) : (Y(t), e = el(e, t, n), e === null ? null : e.sibling);
				}
				Y(t);
				break;
			case 19:
				if (t.flags & 128) return Qc(e, t, n);
				if (i = !!(e.flags & 128), r = (n & t.childLanes) !== 0, r ||= (va(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return Qc(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Ao(t, ko.current), r) break;
				return null;
			case 22: return t.lanes = 0, Ac(e, t, n, t.pendingProps);
			case 24: ma(t, Da, e.memoizedState.cache);
		}
		return el(e, t, n);
	}
	function rl(e, t, n) {
		if (e !== null) {
			if (e.memoizedProps !== t.pendingProps) Tc = !0;
			else {
				if (!tl(e, n) && !(t.flags & 128)) return Tc = !1, nl(e, t, n);
				Tc = !!(e.flags & 131072);
			}
		} else Tc = !1, W && t.flags & 1048576 && Yi(t, Hi, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = Za(t.elementType), t.type = e, typeof e == "function") ki(e) ? (r = mc(e, r), t.tag = 1, t = zc(null, t, e, r, n)) : (t.tag = 0, t = Lc(null, t, e, r, n));
					else {
						if (e != null) {
							var a = e.$$typeof;
							if (a === te) {
								t.tag = 11, t = Dc(null, t, e, r, n);
								break a;
							}
							if (a === ie) {
								t.tag = 14, t = Oc(null, t, e, r, n);
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
			case 0: return Lc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, a = mc(r, t.pendingProps), zc(e, t, r, a, n);
			case 3:
				a: {
					if (xe(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
					r = t.pendingProps;
					var o = t.memoizedState;
					a = o.element, uo(e, t), vo(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.cache, ma(t, Da, r), r !== o.cache && _a(t, [Da], n, !0), _o(), r = s.element, o.isDehydrated) {
						if (o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache
						}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
							t = Bc(e, t, r, n);
							break a;
						}
						if (r !== a) {
							a = Ri(Error(i(424)), t), ua(a), t = Bc(e, t, r, n);
							break a;
						}
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for (ea = lm(e.firstChild), $i = t, W = !0, ta = null, na = !0, n = so(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 134221824, n = n.sibling;
					} else {
						if (ca(), r === a) {
							t = el(e, t, n);
							break a;
						}
						Ec(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return Ic(e, t), e === null ? (n = Nm(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : W || (t.stateNode = fp(t.type, t.pendingProps, be.current, t)) : t.memoizedState = Nm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return Ce(t), e === null && W && (r = t.stateNode = hm(t.type, t.pendingProps, be.current), $i = t, na = !0, a = ea, Sp(t.type) ? (um = a, ea = lm(r.firstChild)) : ea = a), Ec(e, t, t.pendingProps.children, n), Ic(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && W && ((a = r = ea) && (r = rm(r, t.type, t.pendingProps, na), r === null ? a = !1 : (t.stateNode = r, $i = t, ea = lm(r.firstChild), na = !1, a = !0)), a || ia(t)), Ce(t), a = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, pp(a, o) ? r = null : s !== null && pp(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = Go(e, t, Jo, null, null, n), sh._currentValue = a), Ic(e, t), Ec(e, t, r, n), t.child;
			case 6: return e === null && W && ((e = n = ea) && (n = im(n, t.pendingProps, na), n === null ? e = !1 : (t.stateNode = n, $i = t, ea = null, e = !0)), e || ia(t)), null;
			case 13: return Wc(e, t, n);
			case 4: return xe(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = oo(t, null, r, n) : Ec(e, t, r, n), t.child;
			case 11: return Dc(e, t, t.type, t.pendingProps, n);
			case 7: return r = t.pendingProps, Ic(e, t), Ec(e, t, r, n), t.child;
			case 8: return Ec(e, t, t.pendingProps.children, n), t.child;
			case 12: return Ec(e, t, t.pendingProps.children, n), t.child;
			case 10: return $c(e, t, n);
			case 9: return a = t.type._context, r = t.pendingProps.children, ba(t), a = xa(a), r = r(a), t.flags |= 1, Ec(e, t, r, n), t.child;
			case 14: return Oc(e, t, t.type, t.pendingProps, n);
			case 15: return kc(e, t, t.type, t.pendingProps, n);
			case 19: return Qc(e, t, n);
			case 31: return Fc(e, t, n);
			case 22: return Ac(e, t, n, t.pendingProps);
			case 24: return ba(t), r = xa(Da), e === null ? (a = Ha(), a === null && (a = Ju, o = Oa(), a.pooledCache = o, o.refCount++, o !== null && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
				parent: r,
				cache: a
			}, lo(t), ma(t, Da, a)) : ((e.lanes & n) !== 0 && (uo(e, t), vo(t, null, null, n), _o()), a = e.memoizedState, o = t.memoizedState, a.parent === r ? (r = o.cache, ma(t, Da, r), r !== a.cache && _a(t, [Da], n, !0)) : (a = {
				parent: r,
				cache: r
			}, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), ma(t, Da, r))), Ec(e, t, t.pendingProps.children, n), t.child;
			case 30: return t.stateNode === null && (t.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}), r = t.pendingProps, r.name != null && r.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : W && Xi(t), e !== null && e.memoizedProps.name !== r.name ? t.flags |= 4194816 : Ic(e, t), Ec(e, t, r.children, n), t.child;
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
				else if (Bd()) e.flags |= 8192;
				else throw Qa = Ja, Ka;
			}
		} else e.flags &= -16777217;
	}
	function ol(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !Ym(t)) {
			if (Bd()) e.flags |= 8192;
			else throw Qa = Ja, Ka;
		}
	}
	function sl(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : ot(), e.lanes |= t, sd |= t);
	}
	function cl(e, t) {
		if (!W) switch (e.tailMode) {
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
		switch (Zi(t), t.tag) {
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
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), ha(Da), Se(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (sa(t) ? il(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, la())), ll(t), null;
			case 26:
				var a = t.type, o = t.memoizedState;
				return e === null ? (il(t), o === null ? (ll(t), al(t, a, null, r, n)) : (ll(t), ol(t, o))) : o ? o === e.memoizedState ? (ll(t), t.flags &= -16777217) : (il(t), ll(t), ol(t, o)) : (e = e.memoizedProps, e !== r && il(t), ll(t), al(t, a, e, r, n)), null;
			case 27:
				if (we(t), n = be.current, a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && il(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return ll(t), t.subtreeFlags &= -33554433, null;
					}
					e = ye.current, sa(t) ? aa(t, e) : (e = hm(a, r, n), t.stateNode = e, il(t));
				}
				return ll(t), t.subtreeFlags &= -33554433, null;
			case 5:
				if (we(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && il(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return ll(t), t.subtreeFlags &= -33554433, null;
					}
					if (o = ye.current, sa(t)) aa(t, o);
					else {
						var s = lp(be.current);
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
						o[vt] = t, o[yt] = r;
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
					if (e = be.current, sa(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, a = $i, a !== null) switch (a.tag) {
							case 27:
							case 5: r = a.memoizedProps;
						}
						e[vt] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || $f(e.nodeValue, n)), e || ia(t, !0);
					} else e = lp(e).createTextNode(r), e[vt] = t, t.stateNode = e;
				}
				return ll(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = sa(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(i(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(557));
							e[vt] = t;
						} else ca(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						ll(t), e = !1;
					} else n = la(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (Oo(t), t) : (Oo(t), null);
					if (t.flags & 128) throw Error(i(558));
				}
				return ll(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (a = sa(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!a) throw Error(i(318));
							if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error(i(317));
							a[vt] = t;
						} else ca(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						ll(t), a = !1;
					} else a = la(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
					if (!a) return t.flags & 256 ? (Oo(t), t) : (Oo(t), null);
				}
				return Oo(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, a = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), sl(t, t.updateQueue), ll(t), null);
			case 4: return Se(), e === null && Uf(t.stateNode.containerInfo), t.flags |= 67108864, ll(t), null;
			case 10: return ha(t.type), ll(t), null;
			case 19:
				if (jo(t), r = t.memoizedState, r === null) return ll(t), null;
				if (a = !!(t.flags & 128), o = r.rendering, o === null) {
					if (a) cl(r, !1);
					else {
						if (nd !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (o = Mo(e), o !== null) {
								for (t.flags |= 128, cl(r, !1), e = o.updateQueue, t.updateQueue = e, sl(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) ji(n, e), n = n.sibling;
								return Ao(t, ko.current & 1 | 2), W && Ji(t, r.treeForkCount), t.child;
							}
							e = e.sibling;
						}
						r.tail !== null && Ie() > pd && (t.flags |= 128, a = !0, cl(r, !1), t.lanes = 4194304);
					}
				} else {
					if (!a) {
						if (e = Mo(o), e !== null) {
							if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, sl(t, e), cl(r, !0), r.tail === null && r.tailMode !== "collapsed" && r.tailMode !== "visible" && !o.alternate && !W) return ll(t), null;
						} else 2 * Ie() - r.renderingStartTime > pd && n !== 536870912 && (t.flags |= 128, a = !0, cl(r, !1), t.lanes = 4194304);
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
					return r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Ie(), e.sibling = null, o = ko.current, o = a ? o & 1 | 2 : o & 1, r.tailMode === "visible" || r.tailMode === "collapsed" || !n || W ? Ao(t, o) : (n = o, ve(J, t), ve(ko, n), wo === null && (wo = t)), W && Ji(t, r.treeForkCount), e;
				}
				return ll(t), null;
			case 22:
			case 23: return Oo(t), q(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (ll(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ll(t), n = t.updateQueue, n !== null && sl(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && _e(Va), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ha(Da), ll(t), null;
			case 25: return null;
			case 30: return t.flags |= 33554432, ll(t), null;
		}
		throw Error(i(156, t.tag));
	}
	function dl(e, t) {
		switch (Zi(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return ha(Da), Se(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return we(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (Oo(t), t.alternate === null) throw Error(i(340));
					ca();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (Oo(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(i(340));
					ca();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return jo(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
			case 4: return Se(), null;
			case 10: return ha(t.type), null;
			case 22:
			case 23: return Oo(t), q(), e !== null && _e(Va), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return ha(Da), null;
			case 25: return null;
			default: return null;
		}
	}
	function fl(e, t) {
		switch (Zi(t), t.tag) {
			case 3:
				ha(Da), Se();
				break;
			case 26:
			case 27:
			case 5:
				we(t);
				break;
			case 4:
				Se();
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
				ha(t.type);
				break;
			case 22:
			case 23:
				Oo(t), q(), e !== null && _e(Va);
				break;
			case 24: ha(Da);
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
			df(t, t.return, e);
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
								df(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			df(t, t.return, e);
		}
	}
	function hl(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				bo(t, n);
			} catch (t) {
				df(e, e.return, t);
			}
		}
	}
	function gl(e, t, n) {
		n.props = mc(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			df(e, t, n);
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
						var i = e.stateNode, a = pi(e.memoizedProps, i);
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
			df(e, t, n);
		}
	}
	function vl(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) {
			if (typeof r == "function") try {
				r();
			} catch (n) {
				df(e, t, n);
			} finally {
				e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
			}
			else if (typeof n == "function") try {
				n(null);
			} catch (n) {
				df(e, t, n);
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
			df(e, e.return, t);
		}
	}
	function Tl(e, t, n) {
		try {
			var r = e.stateNode;
			ip(r, e.type, n, t), r[yt] = t;
		} catch (t) {
			df(e, e.return, t);
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
		if (i === 5 || i === 6) i = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(i, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(i), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = hn)), yl(e, r), Ht = !0;
		else if (i !== 4 && (i === 27 && (yl(e, r), r = null, Sp(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null)) for (Ol(e, t, n, r), e = e.sibling; e !== null;) Ol(e, t, n, r), e = e.sibling;
	}
	function kl(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? n.insertBefore(i, t) : n.appendChild(i), yl(e, r), Ht = !0;
		else if (i !== 4 && (i === 27 && (yl(e, r), r = null, Sp(e.type) && (n = e.stateNode)), e = e.child, e !== null)) for (kl(e, t, n, r), e = e.sibling; e !== null;) kl(e, t, n, r), e = e.sibling;
	}
	function Al(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			np(t, r, n), t[vt] = e, t[yt] = n;
		} catch (t) {
			df(e, e.return, t);
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
				t = hi(t.default, t.share), t !== "none" && (Ll(e, n, t, null, !1) || zl(e.child, !1));
			}
			e = e.sibling;
		}
	}
	function Vl(e, t) {
		if (e.tag === 30) {
			var n = e.stateNode, r = e.memoizedProps, i = pi(r, n), a = hi(r.default, n.paired ? r.share : r.enter);
			a === "none" ? Bl(e) : Ll(e, i, a, null, !1) ? (Bl(e), n.paired || t || Ad(e, r.onEnter)) : zl(e.child, !1);
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
								var a = hi(n.default, n.share);
								if (a !== "none" && (Ll(e, r, a, null, !1) ? (a = e.stateNode, i.paired = a, a.paired = i, Ad(e, n.onShare)) : zl(e.child, !1)), t.delete(r), t.size === 0) break;
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
			var t = e.memoizedProps, n = pi(t, e.stateNode), r = Ml === null ? void 0 : Ml.get(n), i = hi(t.default, r === void 0 ? t.exit : t.share);
			i !== "none" && (Ll(e, n, i, null, !1) ? r === void 0 ? Ad(e, t.onExit) : (i = e.stateNode, r.paired = i, i.paired = r, Ml.delete(n), Ad(e, t.onShare)) : zl(e.child, !1)), Ml !== null && Hl(e);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Ul(e), e = e.sibling;
		else Ml !== null && Hl(e);
	}
	function Wl(e) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var t = e.memoizedProps, n = pi(t, e.stateNode);
				t = hi(t.default, t.update), e.flags &= -5, t !== "none" && Ll(e, n, t, e.memoizedState = [], !1);
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
				var n = e.memoizedProps, r = e.stateNode, i = pi(n, r), a = hi(n.default, n.update);
				if (t) {
					r = r.clones;
					var o = r === null ? null : r.map(kp);
				} else o = e.memoizedState, e.memoizedState = null;
				r = e;
				var s = e.child;
				Il = 0, i = Jl(r, s, i, i, a, o, !1), e.flags & 4 && i && (t || Ad(e, n.onUpdate));
			} else e.subtreeFlags & 33554432 && Yl(e, t);
			e = e.sibling;
		}
	}
	var Xl = !1, Zl = !1, Ql = !1, $l = !1, eu = typeof WeakSet == "function" ? WeakSet : Set, tu = null, nu = !1, ru = !1, iu = !1, au = !1;
	function ou(e, t, n) {
		if (e = e.containerInfo, sp = gh, e = Ur(e), Wr(e)) {
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
							df(t, t.return, e);
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
					n && r !== null && (n = pi(r.memoizedProps, r.stateNode), a = t.memoizedProps, a = hi(a.default, a.update), a !== "none" && Ll(r, n, a, r.memoizedState = [], !0));
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
						df(n, n.return, e);
					}
					else {
						var i = mc(n.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
						} catch (e) {
							df(n, n.return, e);
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
						bo(e, t);
					} catch (e) {
						df(n, n.return, e);
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
				Ou(e, n), r & 4 && vu(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = hf.bind(null, n), cm(e, n))));
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
					df(e, e.return, t);
				}
				du(e, t);
				break;
			case 6:
				try {
					e.stateNode.nodeValue = t ? "" : e.memoizedProps, Ht = !0;
				} catch (t) {
					df(e, e.return, t);
				}
				break;
			case 18:
				try {
					var s = e.stateNode;
					t ? wp(s, !0) : wp(e.stateNode, !1);
				} catch (t) {
					df(e, e.return, t);
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
		t !== null && (e.alternate = null, fu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Dt(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var pu = null, mu = !1;
	function hu(e, t, n) {
		for (n = n.child; n !== null;) gu(e, t, n), n = n.sibling;
	}
	function gu(e, t, n) {
		if (Ke && typeof Ke.onCommitFiberUnmount == "function") try {
			Ke.onCommitFiberUnmount(Ge, n);
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
						(pu.nodeType === 9 ? pu.body : pu.nodeName === "HTML" ? pu.ownerDocument.body : pu).removeChild(n.stateNode), Ht = !0;
					} catch (e) {
						df(n, t, e);
					}
					else try {
						pu.removeChild(n.stateNode), Ht = !0;
					} catch (e) {
						df(n, t, e);
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
				df(t, t.return, e);
			}
		}
	}
	function vu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Hh(e);
		} catch (e) {
			df(t, t.return, e);
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
				var r = gf.bind(null, e, t);
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
												r = a.getElementsByTagName("title")[0], (!r || r[Tt] || r[vt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = a.createElement(t), a.head.insertBefore(r, a.querySelector("head > title"))), np(r, t, n), r[vt] = e, Mt(r), t = r;
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
										r[vt] = e, Mt(r), t = r;
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
						sn(t, ""), Ht = !0;
					} catch (t) {
						df(e, e.return, t);
					}
				}
				a & 4 && e.stateNode != null && (t = e.memoizedProps, Tl(e, t, r === null ? t : r.memoizedProps)), a & 1024 && ($l = !0);
				break;
			case 6:
				if (xu(t, e, n), wu(e), a & 4) {
					if (e.stateNode === null) throw Error(i(162));
					t = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = t, Ht = !0;
					} catch (t) {
						df(e, e.return, t);
					}
				}
				break;
			case 3:
				if (Ht = !1, Wm = null, o = Su, Su = bm(t.containerInfo), xu(t, e, n), Su = o, wu(e), a & 4 && r !== null && r.memoizedState.isDehydrated) try {
					Hh(t.containerInfo);
				} catch (t) {
					df(e, e.return, t);
				}
				$l && ($l = !1, Tu(e)), Ht = !1;
				break;
			case 4:
				a = Ql, Ql = Xl, r = Ut(), o = Su, Su = bm(e.stateNode.containerInfo), xu(t, e, n), wu(e), Su = o, Ht && ru && (iu = !0), Ht = r, Ql = a;
				break;
			case 12:
				xu(t, e, n), wu(e);
				break;
			case 31:
				xu(t, e, n), wu(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, bu(e, t)));
				break;
			case 13:
				xu(t, e, n), wu(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (dd = Ie()), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, bu(e, t)));
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
				a & 512 && (Zl || r === null || vl(r, r.return)), a = Ut(), o = ru, s = (n & 335544064) === n, c = e.memoizedProps, ru = s && hi(c.default, c.update) !== "none", xu(t, e, n), wu(e), s && r !== null && Ht && (e.flags |= 4), ru = o, Ht = a;
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
						n.flags & 32 && (sn(l, ""), n.flags &= -33), kl(e, Dl(e), l, s);
						break;
					case 3:
					case 4:
						var u = n.stateNode.containerInfo;
						Ol(e, Dl(e), u, s);
						break;
					default: throw Error(i(161));
				}
			} catch (t) {
				df(e, e.return, t);
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
				t = pi(a, o), o = pi(n.memoizedProps, o);
				var s = hi(a.default, a.update);
				s === "none" ? t = !1 : (a = n.memoizedState, n.memoizedState = null, n = e.child, Il = 0, t = Jl(e, n, t, o, s, a, !0), Il !== (a === null ? 0 : a.length) && (e.flags |= 32)), e.flags & 4 && t ? (Ad(e, e.memoizedProps.onUpdate), Pl = i) : i !== null && (i.push.apply(i, Pl), Pl = i), nu = e.flags & 32 ? !0 : r;
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
						df(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var c = r.stateNode;
						try {
							var l = i.shared.hiddenCallbacks;
							if (l !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) yo(l[i], c);
						} catch (e) {
							df(r, r.return, e);
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
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && ka(n));
	}
	function Mu(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ka(e));
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
				Nu(e, t, n, r), i && au && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), a & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (t.refCount++, a != null && ka(a)));
				break;
			case 12:
				if (a & 2048) {
					Nu(e, t, n, r), a = t.stateNode;
					try {
						var o = t.memoizedProps, s = o.id, c = o.onPostCommit;
						typeof c == "function" && c(s, t.alternate === null ? "mount" : "update", a.passiveEffectDuration, -0);
					} catch (e) {
						df(t, t.return, e);
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
				case 24: ka(n.memoizedState.cache);
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
			var t = xa(Da), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return xa(Da).controller.signal;
		}
	}, Ku = typeof WeakMap == "function" ? WeakMap : Map, qu = 0, Ju = null, $ = null, Yu = 0, Xu = 0, Zu = null, Qu = !1, $u = !1, ed = !1, td = 0, nd = 0, rd = 0, id = 0, ad = 0, od = 0, sd = 0, cd = null, ld = null, ud = !1, dd = 0, fd = 0, pd = Infinity, md = null, hd = null, gd = 0, _d = null, vd = null, yd = 0, bd = 0, xd = null, Sd = null, Cd = null, wd = null, Td = null, Ed = 0, Dd = null;
	function Od() {
		return qu & 2 && Yu !== 0 ? Yu & -Yu : L.T === null ? ht() : Mf();
	}
	function kd() {
		if (od === 0) {
			if (!(Yu & 536870912) || W) {
				var e = $e;
				$e <<= 1, !($e & 3932160) && ($e = 262144), od = e;
			} else od = 536870912;
		}
		return e = J.current, e !== null && (e.flags |= 32), od;
	}
	function Ad(e, t) {
		if (t != null) {
			var n = e.stateNode, r = n.ref;
			r === null && (r = n.ref = Pp(pi(e.memoizedProps, n))), wd === null && (wd = []), wd.push(t.bind(null, r));
		}
	}
	function jd(e, t, n) {
		(e === Ju && (Xu === 2 || Xu === 9) || e.cancelPendingCommit !== null) && (Rd(e, 0), Fd(e, Yu, od, !1)), ct(e, n), (!(qu & 2) || e !== Ju) && (e === Ju && (!(qu & 2) && (id |= n), nd === 4 && Fd(e, Yu, od, !1)), wf(e));
	}
	function Md(e, t, n) {
		if (qu & 6) throw Error(i(327));
		var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || rt(e, t), a = r ? Kd(e, t) : Wd(e, t, !0), o = r;
		do {
			if (a === 0) {
				$u && !r && Fd(e, t, 0, !1);
				break;
			}
			if (n = e.current.alternate, o && !Pd(n)) a = Wd(e, t, !1), o = !1;
			else {
				if (a === 2) {
					if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
					else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
					if (s !== 0) {
						t = s;
						a: {
							var c = e;
							a = cd;
							var l = c.current.memoizedState.isDehydrated;
							if (l && (Rd(c, s).flags |= 256), s = Wd(c, s, !1), s !== 2 && s !== 6) {
								if (ed && !l) {
									c.errorRecoveryDisabledLanes |= o, id |= o, a = 4;
									break a;
								}
								o = ld, ld = a, o !== null && (ld === null ? ld = o : ld.push.apply(ld, o));
							}
							a = s;
						}
						if (o = !1, a !== 2) continue;
					}
				}
				if (a === 1) {
					Rd(e, 0), Fd(e, t, 0, !0);
					break;
				}
				a: {
					switch (r = e, o = a, o) {
						case 0:
						case 1: throw Error(i(345));
						case 4: if ((t & 4194048) !== t && (t & 62914560) !== t) break;
						case 6:
							Fd(r, t, od, !Qu);
							break a;
						case 2:
							ld = null;
							break;
						case 3:
						case 5: break;
						default: throw Error(i(329));
					}
					if ((t & 62914560) === t && (a = dd + 300 - Ie(), 10 < a)) {
						if (Fd(r, t, od, !Qu), nt(r, 0, !0) !== 0) break a;
						yd = t, r.timeoutHandle = gp(Nd.bind(null, r, n, ld, md, ud, t, od, id, sd, Qu, o, "Throttled", -0, 0), a);
						break a;
					}
					Nd(r, n, ld, md, ud, t, od, id, sd, Qu, o, null, -0, 0);
				}
				break;
			}
		} while (1);
		wf(e);
	}
	function Nd(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
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
			unsuspend: hn
		}, Ml = null, zu(t, a, d), h && (m = d, h = e.containerInfo, h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition, h != null && (m.count++, m.waitingForViewTransition = !0, m = nh.bind(m), h.finished.then(m, m))), m = (a & 62914560) === a ? dd - Ie() : (a & 4194048) === a ? fd - Ie() : 0, m = eh(d, m), m !== null) ? (yd = a, e.cancelPendingCommit = m($d.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p)), Fd(e, a, o, !l)) : $d(e, t, a, n, r, i, o, s, c, l, u, d);
	}
	function Pd(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!Lr(a(), i)) return !1;
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
	function Fd(e, t, n, r) {
		t = it(e, t), t &= ~ad, t &= ~id, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - Je(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && ut(e, n, t);
	}
	function Id() {
		return qu & 6 ? !0 : (Tf(0, !1), !1);
	}
	function Ld() {
		if ($ !== null) {
			if (Xu === 0) var e = $.return;
			else e = $, pa = fa = null, Zo(e), eo = null, to = 0, e = $;
			for (; e !== null;) fl(e.alternate, e), e = e.return;
			$ = null;
		}
	}
	function Rd(e, t) {
		var n = e.timeoutHandle;
		return n !== -1 && (e.timeoutHandle = -1, _p(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), yd = 0, Ld(), Ju = e, $ = n = Ai(e.current, null), Yu = t, Xu = 0, Zu = null, Qu = !1, $u = rt(e, t), ed = !1, sd = od = ad = id = rd = nd = 0, ld = cd = null, ud = !1, td = it(e, t), bi(), n;
	}
	function zd(e, t) {
		X = null, L.H = oc, t === Ga || t === qa ? (t = G(), Xu = 3) : t === Ka ? (t = G(), Xu = 4) : Xu = t === wc ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, Zu = t, $ === null && (nd = 1, vc(e, Ri(t, e.current)));
	}
	function Bd() {
		var e = J.current;
		return e === null ? !0 : (Yu & 4194048) === Yu ? wo === null : (Yu & 62914560) === Yu || Yu & 536870912 ? e === wo : !1;
	}
	function Vd() {
		var e = L.H;
		return L.H = oc, e === null ? oc : e;
	}
	function Hd() {
		var e = L.A;
		return L.A = Gu, e;
	}
	function Ud() {
		nd = 4, Qu || (Yu & 4194048) !== Yu && J.current !== null || ($u = !0), !(rd & 134217727) && !(id & 134217727) || Ju === null || Fd(Ju, Yu, od, !1);
	}
	function Wd(e, t, n) {
		var r = qu;
		qu |= 2;
		var i = Vd(), a = Hd();
		(Ju !== e || Yu !== t) && (md = null, Rd(e, t)), t = !1;
		var o = nd;
		a: do
			try {
				if (Xu !== 0 && $ !== null) {
					var s = $, c = Zu;
					switch (Xu) {
						case 8:
							Ld(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							J.current === null && (t = !0);
							var l = Xu;
							if (Xu = 0, Zu = null, Xd(e, s, c, l), n && $u) {
								o = 0;
								break a;
							}
							break;
						default: l = Xu, Xu = 0, Zu = null, Xd(e, s, c, l);
					}
				}
				Gd(), o = nd;
				break;
			} catch (t) {
				zd(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, pa = fa = null, qu = r, L.H = i, L.A = a, $ === null && (Ju = null, Yu = 0, bi()), o;
	}
	function Gd() {
		for (; $ !== null;) Jd($);
	}
	function Kd(e, t) {
		var n = qu;
		qu |= 2;
		var r = Vd(), a = Hd();
		Ju !== e || Yu !== t ? (md = null, pd = Ie() + 500, Rd(e, t)) : $u = rt(e, t);
		a: do
			try {
				if (Xu !== 0 && $ !== null) {
					t = $;
					var o = Zu;
					b: switch (Xu) {
						case 1:
							Xu = 0, Zu = null, Xd(e, t, o, 1);
							break;
						case 2:
						case 9:
							if (Ya(o)) {
								Xu = 0, Zu = null, Yd(t);
								break;
							}
							t = function() {
								Xu !== 2 && Xu !== 9 || Ju !== e || (Xu = 7), wf(e);
							}, o.then(t, t);
							break a;
						case 3:
							Xu = 7;
							break a;
						case 4:
							Xu = 5;
							break a;
						case 7:
							Ya(o) ? (Xu = 0, Zu = null, Yd(t)) : (Xu = 0, Zu = null, Xd(e, t, o, 7));
							break;
						case 5:
							var s = null;
							switch ($.tag) {
								case 26: s = $.memoizedState;
								case 5:
								case 27:
									var c = $;
									if (s ? Ym(s) : c.stateNode.complete) {
										Xu = 0, Zu = null;
										var l = c.sibling;
										if (l !== null) $ = l;
										else {
											var u = c.return;
											u === null ? $ = null : ($ = u, Zd(u));
										}
										break b;
									}
							}
							Xu = 0, Zu = null, Xd(e, t, o, 5);
							break;
						case 6:
							Xu = 0, Zu = null, Xd(e, t, o, 6);
							break;
						case 8:
							Ld(), nd = 6;
							break a;
						default: throw Error(i(462));
					}
				}
				qd();
				break;
			} catch (t) {
				zd(e, t);
			}
		while (1);
		return pa = fa = null, L.H = r, L.A = a, qu = n, $ === null ? (Ju = null, Yu = 0, bi(), nd) : 0;
	}
	function qd() {
		for (; $ !== null && !Pe();) Jd($);
	}
	function Jd(e) {
		var t = rl(e.alternate, e, td);
		e.memoizedProps = e.pendingProps, t === null ? Zd(e) : $ = t;
	}
	function Yd(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = Rc(n, t, t.pendingProps, t.type, void 0, Yu);
				break;
			case 11:
				t = Rc(n, t, t.pendingProps, t.type.render, t.ref, Yu);
				break;
			case 5:
				Zo(t);
				var r = t;
				r === $i && (W ? (oa(r), r.tag === 5 && r.stateNode != null && (ea = r.stateNode)) : (oa(r), W = !0));
			default: fl(n, t), t = $ = ji(t, td), t = rl(n, t, td);
		}
		e.memoizedProps = e.pendingProps, t === null ? Zd(e) : $ = t;
	}
	function Xd(e, t, n, r) {
		pa = fa = null, Zo(t), eo = null, to = 0;
		var i = t.return;
		try {
			if (Cc(e, i, t, n, Yu)) {
				nd = 1, vc(e, Ri(n, e.current)), $ = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw $ = i, t;
			nd = 1, vc(e, Ri(n, e.current)), $ = null;
			return;
		}
		t.flags & 32768 ? (W || r === 1 ? e = !0 : $u || Yu & 536870912 ? e = !1 : (Qu = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = J.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Qd(t, e)) : Zd(t);
	}
	function Zd(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				Qd(t, Qu);
				return;
			}
			e = t.return;
			var n = ul(t.alternate, t, td);
			if (n !== null) {
				$ = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				$ = t;
				return;
			}
			$ = t = e;
		} while (t !== null);
		nd === 0 && (nd = 5);
	}
	function Qd(e, t) {
		do {
			var n = dl(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, $ = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				$ = e;
				return;
			}
			$ = e = n;
		} while (e !== null);
		nd = 6, $ = null;
	}
	function $d(e, t, n, r, a, o, s, c, l, u, d, f) {
		e.cancelPendingCommit = null;
		do
			cf();
		while (gd !== 0);
		if (qu & 6) throw Error(i(327));
		if (t !== null) {
			if (t === e.current) throw Error(i(177));
			e === Ju && ($ = Ju = null, Yu = 0), vd = t, _d = e, yd = n, xd = a, Sd = r, ef(e, t, n, s, c, l, f);
		}
	}
	function ef(e, t, n, r, i, a, o) {
		var s = t.lanes | t.childLanes;
		if (bd = s, s |= yi, lt(e, n, s, r, i, a), wd = null, (n & 335544064) === n ? (Td = Ma(e), r = 10262) : (Td = null, r = 10256), (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, _f(Be, function() {
			return lf(), null;
		})) : (e.callbackNode = null, e.callbackPriority = 0), jl = !1, r = !!(t.flags & 13878), t.subtreeFlags & 13878 || r) {
			r = L.T, L.T = null, i = R.p, R.p = 2, a = qu, qu |= 4;
			try {
				ou(e, t, n);
			} finally {
				qu = a, R.p = i, L.T = r;
			}
		}
		gd = 1, jl ? Cd = Mp(o, e.containerInfo, Td, rf, af, nf, of, lf, tf, null, null) : (rf(), af(), of());
	}
	function tf(e) {
		if (gd !== 0) {
			var t = _d.onRecoverableError;
			t(e, { componentStack: null });
		}
	}
	function nf() {
		gd === 3 && (gd = 0, Du(vd, _d), gd = 4);
	}
	function rf() {
		if (gd === 1) {
			gd = 0;
			var e = _d, t = vd, n = yd, r = !!(t.flags & 13878);
			if (t.subtreeFlags & 13878 || r) {
				r = L.T, L.T = null;
				var i = R.p;
				R.p = 2;
				var a = qu;
				qu |= 4;
				try {
					ru = iu = !1, Cu(t, e, n), n = cp;
					var o = Ur(e.containerInfo), s = n.focusedElem, c = n.selectionRange;
					if (o !== s && s && s.ownerDocument && Hr(s.ownerDocument.documentElement, s)) {
						if (c !== null && Wr(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = Vr(s, h), v = Vr(s, g);
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
			e.current = t, gd = 2;
		}
	}
	function af() {
		if (gd === 2) {
			gd = 0;
			var e = _d, t = vd, n = !!(t.flags & 8772);
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
			gd = 3;
		}
	}
	function of() {
		if (gd === 4 || gd === 3) {
			gd = 0;
			var e = Cd;
			Cd = null, Fe();
			var t = _d, n = vd, r = yd, i = Sd, a = (r & 335544064) === r ? 10262 : 10256;
			if ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0 ? gd = 5 : (gd = 0, vd = _d = null, sf(t, t.pendingLanes)), a = t.pendingLanes, a === 0 && (hd = null), mt(r), n = n.stateNode, Ke && typeof Ke.onCommitFiberRoot == "function") try {
				Ke.onCommitFiberRoot(Ge, n, void 0, (n.current.flags & 128) == 128);
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
			if (i = wd, o = Td, Td = null, i !== null && (wd = null, o === null && (o = []), e !== null)) for (c = 0; c < i.length; c++) n = (0, i[c])(o), n !== void 0 && e.finished.finally(n);
			yd & 3 && cf(), wf(t), a = t.pendingLanes, r & 261930 && a & 42 ? t === Dd ? Ed++ : (Ed = 0, Dd = t) : (Ed = 0, Dd = null), Tf(0, !1);
		}
	}
	function sf(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ka(t)));
	}
	function cf() {
		return Cd !== null && (Cd.skipTransition(), Cd = null), rf(), af(), of(), lf();
	}
	function lf() {
		if (gd !== 5) return !1;
		var e = _d, t = bd;
		bd = 0;
		var n = mt(yd), r = L.T, a = R.p;
		try {
			R.p = 32 > n ? 32 : n, L.T = null, n = xd, xd = null;
			var o = _d, s = yd;
			if (gd = 0, vd = _d = null, yd = 0, qu & 6) throw Error(i(331));
			var c = qu;
			if (qu |= 4, Hu(o.current), Pu(o, o.current, s, n), qu = c, Tf(0, !1), Ke && typeof Ke.onPostCommitFiberRoot == "function") try {
				Ke.onPostCommitFiberRoot(Ge, o);
			} catch {}
			return !0;
		} finally {
			R.p = a, L.T = r, sf(e, t);
		}
	}
	function uf(e, t, n) {
		t = Ri(n, t), t = bc(e.stateNode, t, 2), e = po(e, t, 2), e !== null && (ct(e, 2), wf(e));
	}
	function df(e, t, n) {
		if (e.tag === 3) uf(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				uf(t, e, n);
				break;
			}
			if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (hd === null || !hd.has(r))) {
					e = Ri(n, e), n = xc(2), r = po(t, n, 2), r !== null && (Sc(n, r, t, e), ct(r, 2), wf(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function ff(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new Ku();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (ed = !0, i.add(n), e = pf.bind(null, e, t, n), t.then(e, e));
	}
	function pf(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ju === e && (Yu & n) === n && (nd === 4 || nd === 3 && (Yu & 62914560) === Yu && 300 > Ie() - dd ? qu & 2 ? ad |= n : Rd(e, 0) : ad |= n, sd === Yu && (sd = 0)), wf(e);
	}
	function mf(e, t) {
		t === 0 && (t = ot()), e = Ci(e, t), e !== null && (ct(e, t), wf(e));
	}
	function hf(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), mf(e, n);
	}
	function gf(e, t) {
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
		r !== null && r.delete(t), mf(e, n);
	}
	function _f(e, t) {
		return Me(e, t);
	}
	var vf = null, yf = null, bf = !1, xf = !1, Sf = !1, Cf = 0;
	function wf(e) {
		e !== yf && e.next === null && (yf === null ? vf = yf = e : yf = yf.next = e), xf = !0, bf || (bf = !0, jf());
	}
	function Tf(e, t) {
		if (!Sf && xf) {
			Sf = !0;
			do
				for (var n = !1, r = vf; r !== null;) {
					if (!t) {
						if (e !== 0) {
							var i = r.pendingLanes;
							if (i === 0) var a = 0;
							else {
								var o = r.suspendedLanes, s = r.pingedLanes;
								a = (1 << 31 - Je(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
							}
							a !== 0 && (n = !0, Af(r, a));
						} else a = Yu, a = nt(r, r === Ju ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || rt(r, a) || (n = !0, Af(r, a));
					}
					r = r.next;
				}
			while (n);
			Sf = !1;
		}
	}
	function Ef() {
		Df();
	}
	function Df() {
		xf = bf = !1;
		var e = 0;
		Cf !== 0 && hp() && (e = Cf);
		for (var t = Ie(), n = null, r = vf; r !== null;) {
			var i = r.next, a = Of(r, t);
			a === 0 ? (r.next = null, n === null ? vf = i : n.next = i, i === null && (yf = n)) : (n = r, (e !== 0 || a & 3) && (xf = !0)), r = i;
		}
		gd !== 0 && gd !== 5 || Tf(e, !1), Cf !== 0 && (Cf = 0);
	}
	function Of(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - Je(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = at(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = Ju, n = Yu, n = nt(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (Xu === 2 || Xu === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && Ne(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || rt(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && Ne(r), mt(n)) {
				case 2:
				case 8:
					n = ze;
					break;
				case 32:
					n = Be;
					break;
				case 268435456:
					n = He;
					break;
				default: n = Be;
			}
			return r = kf.bind(null, e), n = Me(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && Ne(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function kf(e, t) {
		if (gd !== 0 && gd !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (cf() && e.callbackNode !== n) return null;
		var r = Yu;
		return r = nt(e, e === Ju ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Md(e, r, t), Of(e, Ie()), e.callbackNode != null && e.callbackNode === n ? kf.bind(null, e) : null);
	}
	function Af(e, t) {
		if (cf()) return null;
		Md(e, t, !0);
	}
	function jf() {
		bp(function() {
			qu & 6 ? Me(Re, Ef) : Df();
		});
	}
	function Mf() {
		if (Cf === 0) {
			var e = Fa;
			e === 0 && (e = Qe, Qe <<= 1, !(Qe & 261888) && (Qe = 256)), Cf = e;
		}
		return Cf;
	}
	function Nf(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : mn(e);
	}
	function Pf(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = Nf((i[yt] || null).action), o = r.submitter;
			o && (t = (t = o[yt] || null) ? Nf(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new In("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (Cf !== 0) {
								var e = new FormData(i, o);
								qs(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = new FormData(i, o), qs(n, {
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
	for (var Ff = 0; Ff < ui.length; Ff++) {
		var If = ui[Ff];
		di(If.toLowerCase(), "on" + (If[0].toUpperCase() + If.slice(1)));
	}
	di(ni, "onAnimationEnd"), di(ri, "onAnimationIteration"), di(ii, "onAnimationStart"), di("dblclick", "onDoubleClick"), di("focusin", "onFocus"), di("focusout", "onBlur"), di(ai, "onTransitionRun"), di(oi, "onTransitionStart"), di(si, "onTransitionCancel"), di(ci, "onTransitionEnd"), Lt("onMouseEnter", ["mouseout", "mouseover"]), Lt("onMouseLeave", ["mouseout", "mouseover"]), Lt("onPointerEnter", ["pointerout", "pointerover"]), Lt("onPointerLeave", ["pointerout", "pointerover"]), It("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), It("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), It("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), It("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), It("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), It("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var Lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Rf = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lf));
	function zf(e, t) {
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
						gi(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						gi(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function Bf(e, t) {
		var n = t[xt];
		n === void 0 && (n = t[xt] = /* @__PURE__ */ new Set());
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
			e[Hf] = !0, Pt.forEach(function(t) {
				t !== "selectionchange" && (Rf.has(t) || Vf(t, !1, e), Vf(t, !0, e));
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
		n = i.bind(null, t, n, e), i = void 0, !Tn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
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
					if (s = Ot(c), s === null) return;
					if (l = s.tag, l === 5 || l === 6 || l === 26 || l === 27) {
						r = a = s;
						continue a;
					}
					c = c.parentNode;
				}
			}
			r = r.return;
		}
		Sn(function() {
			var r = a, i = _n(n), s = [];
			a: {
				var c = li.get(e);
				if (c !== void 0) {
					var l = In, u = e;
					switch (e) {
						case "keypress": if (jn(n) === 0) break a;
						case "keydown":
						case "keyup":
							l = $n;
							break;
						case "focusin":
							u = "focus", l = Wn;
							break;
						case "focusout":
							u = "blur", l = Wn;
							break;
						case "beforeblur":
						case "afterblur":
							l = Wn;
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
							l = Hn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							l = Un;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							l = nr;
							break;
						case ni:
						case ri:
						case ii:
							l = Gn;
							break;
						case ci:
							l = rr;
							break;
						case "scroll":
						case "scrollend":
							l = Rn;
							break;
						case "wheel":
							l = ir;
							break;
						case "copy":
						case "cut":
						case "paste":
							l = Kn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							l = er;
							break;
						case "submit":
							l = tr;
							break;
						case "toggle":
						case "beforetoggle": l = ar;
					}
					var d = !!(t & 4), f = !d && (e === "scroll" || e === "scrollend"), p = d ? c === null ? null : c + "Capture" : c;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = Cn(m, p), g != null && d.push(Kf(m, g, h))), f) break;
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
					if (l = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", l && n !== gn && (u = n.relatedTarget || n.fromElement) && (Ot(u) || u[bt])) break a;
					(c || l) && (u = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? Ot(l) : null, l !== null && (f = o(l), d = l.tag, l !== f || d !== 5 && d !== 27 && d !== 6) && (l = null)) : (c = null, l = r), c !== l && (d = Hn, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (d = er, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = c == null ? u : At(c), h = l == null ? u : At(l), u = new d(g, m + "leave", c, n, i), u.target = f, u.relatedTarget = h, g = null, Ot(i) === r && (d = new d(p, m + "enter", l, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, d = c && l ? E(c, l, Jf) : null, c !== null && Yf(s, u, c, d, !1), l !== null && f !== null && Yf(s, f, l, d, !0)));
				}
				a: {
					if (c = r ? At(r) : window, l = c.nodeName && c.nodeName.toLowerCase(), l === "select" || l === "input" && c.type === "file") var _ = Tr;
					else if (yr(c)) {
						if (Er) _ = Fr;
						else {
							_ = Nr;
							var v = Mr;
						}
					} else l = c.nodeName, !l || l.toLowerCase() !== "input" || c.type !== "checkbox" && c.type !== "radio" ? r && dn(r.elementType) && (_ = Tr) : _ = Pr;
					if (_ &&= _(e, r)) {
						br(s, _, n, i);
						break a;
					}
					v && v(e, c, r);
				}
				switch (v = r ? At(r) : window, e) {
					case "focusin":
						(yr(v) || v.contentEditable === "true") && (Kr = v, qr = r, Jr = null);
						break;
					case "focusout":
						Jr = qr = Kr = null;
						break;
					case "mousedown":
						Yr = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Yr = !1, Xr(s, n, i);
						break;
					case "selectionchange": if (Gr) break;
					case "keydown":
					case "keyup": Xr(s, n, i);
				}
				var y;
				if (sr) b: {
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
				else hr ? pr(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
				b && (ur && n.locale !== "ko" && (hr || b !== "onCompositionStart" ? b === "onCompositionEnd" && hr && (y = An()) : (Dn = i, On = "value" in Dn ? Dn.value : Dn.textContent, hr = !0)), v = qf(r, b), 0 < v.length && (b = new qn(b, e, null, n, i), s.push({
					event: b,
					listeners: v
				}), y ? b.data = y : (y = mr(n), y !== null && (b.data = y)))), (y = lr ? gr(e, n) : _r(e, n)) && (b = qf(r, "onBeforeInput"), 0 < b.length && (v = new qn("onBeforeInput", "beforeinput", null, n, i), s.push({
					event: v,
					listeners: b
				}), v.data = y)), Pf(s, e, r, n, i);
			}
			zf(s, t);
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
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = Cn(e, n), i != null && r.unshift(Kf(e, i, a)), i = Cn(e, t), i != null && r.push(Kf(e, i, a))), e.tag === 3) return r;
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
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = Cn(n, a), l != null && o.unshift(Kf(n, l, c))) : i || (l = Cn(n, a), l != null && o.push(Kf(n, l, c)))), n = n.return;
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
				if (typeof r == "string") t === "body" || t === "textarea" && r === "" || sn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") t !== "body" && sn(e, "" + r);
				else return;
				break;
			case "className":
				Gt(e, "class", r);
				break;
			case "tabIndex":
				Gt(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Gt(e, n, r);
				break;
			case "style":
				un(e, r, o);
				return;
			case "data": if (t !== "object") {
				Gt(e, "data", r);
				break;
			}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || n !== "href") || r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = mn(r), e.setAttribute(n, r);
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
				r = mn(r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = hn);
				return;
			case "onScroll":
				r != null && Bf("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Bf("scrollend", e);
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
				n = mn(r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
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
				Bf("beforetoggle", e), Bf("toggle", e), Wt(e, "popover", r);
				break;
			case "xlinkActuate":
				Kt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				Kt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				Kt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				Kt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				Kt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				Kt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				Kt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				Kt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				Kt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				Wt(e, "is", r);
				break;
			case "innerText":
			case "textContent": return;
			default: if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") n = fn.get(n) || n, Wt(e, n, r);
			else return;
		}
		Ht = !0;
	}
	function tp(e, t, n, r, a, o) {
		switch (n) {
			case "style":
				un(e, r, o);
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
				if (typeof r == "string") sn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") sn(e, "" + r);
				else return;
				break;
			case "onScroll":
				r != null && Bf("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Bf("scrollend", e);
				return;
			case "onClick":
				r != null && (e.onclick = hn);
				return;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": return;
			case "innerText":
			case "textContent": return;
			default:
				if (!Ft.hasOwnProperty(n)) a: {
					if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), o = n.slice(2, a ? n.length - 7 : void 0), t = e[yt] || null, t = t == null ? null : t[n], typeof t == "function" && e.removeEventListener(o, t, a), typeof r == "function")) {
						typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(o, r, a);
						break a;
					}
					Ht = !0, n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : Wt(e, n, r);
				}
				return;
		}
		Ht = !0;
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
				Bf("error", e), Bf("load", e);
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
				Bf("invalid", e);
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
				tn(e, o, c, l, u, s, a, !1);
				return;
			case "select":
				for (a in Bf("invalid", e), r = s = o = null, n) if (n.hasOwnProperty(a) && (c = n[a], c != null)) switch (a) {
					case "value":
						o = c;
						break;
					case "defaultValue":
						s = c;
						break;
					case "multiple": r = c;
					default: ep(e, t, a, c, n, null);
				}
				t = o, n = s, e.multiple = !!r, t == null ? n != null && rn(e, !!r, n, !0) : rn(e, !!r, t, !1);
				return;
			case "textarea":
				for (s in Bf("invalid", e), o = a = r = null, n) if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
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
				on(e, r, a, o);
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
				Bf("beforetoggle", e), Bf("toggle", e), Bf("cancel", e), Bf("close", e);
				break;
			case "iframe":
			case "object":
				Bf("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < Lf.length; r++) Bf(Lf[r], e);
				break;
			case "image":
				Bf("error", e), Bf("load", e);
				break;
			case "details":
				Bf("toggle", e);
				break;
			case "embed":
			case "source":
			case "link": Bf("error", e), Bf("load", e);
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
			default: if (dn(t)) {
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
							m !== f && (Ht = !0), o = m;
							break;
						case "name":
							m !== f && (Ht = !0), a = m;
							break;
						case "checked":
							m !== f && (Ht = !0), u = m;
							break;
						case "defaultChecked":
							m !== f && (Ht = !0), d = m;
							break;
						case "value":
							m !== f && (Ht = !0), s = m;
							break;
						case "defaultValue":
							m !== f && (Ht = !0), c = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(i(137, t));
							break;
						default: m !== f && ep(e, t, p, m, r, f);
					}
				}
				en(e, s, c, l, u, d, o, a);
				return;
			case "select":
				for (o in m = s = c = p = null, n) if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(o) || ep(e, t, o, null, r, l);
				}
				for (a in r) if (o = r[a], l = n[a], r.hasOwnProperty(a) && (o != null || l != null)) switch (a) {
					case "value":
						o !== l && (Ht = !0), p = o;
						break;
					case "defaultValue":
						o !== l && (Ht = !0), c = o;
						break;
					case "multiple": o !== l && (Ht = !0), s = o;
					default: o !== l && ep(e, t, a, o, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? rn(e, !!n, n ? [] : "", !1) : rn(e, !!n, t, !0)) : rn(e, !!n, p, !1);
				return;
			case "textarea":
				for (c in m = p = null, n) if (a = n[c], n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)) switch (c) {
					case "value": break;
					case "children": break;
					default: ep(e, t, c, null, r, a);
				}
				for (s in r) if (a = r[s], o = n[s], r.hasOwnProperty(s) && (a != null || o != null)) switch (s) {
					case "value":
						a !== o && (Ht = !0), p = a;
						break;
					case "defaultValue":
						a !== o && (Ht = !0), m = a;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (a != null) throw Error(i(91));
						break;
					default: a !== o && ep(e, t, s, a, r, o);
				}
				an(e, p, m);
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
						p !== m && (Ht = !0), e.selected = p && typeof p != "function" && typeof p != "symbol";
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
			default: if (dn(t)) {
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
		return n = lp(n).createElement(e), n[vt] = r, n[yt] = t, np(n, e, t), Mt(n), n;
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
						a[Tt] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
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
		var a = Ot(i);
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
					nm(n), Dt(n);
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
			} else if (!e[Tt]) switch (t) {
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
		n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === hn && (e.onclick = null), Dt(e);
	}
	function _m(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		Dt(e);
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
		var e = xm.f(), t = Id();
		return e || t;
	}
	function Cm(e) {
		var t = kt(e);
		t !== null && t.tag === 5 && t.type === "form" ? Ys(t) : xm.r(e);
	}
	var wm = typeof document > "u" ? null : document;
	function Tm(e, t, n) {
		var r = wm;
		if (r && typeof t == "string" && t) {
			var i = $t(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), ym.has(i) || (ym.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), np(t, "link", e), Mt(t), r.head.appendChild(t)));
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
			var i = "link[rel=\"preload\"][as=\"" + $t(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + $t(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + $t(n.imageSizes) + "\"]")) : i += "[href=\"" + $t(e) + "\"]";
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
				np(o, "link", e), t === "style" && (o[Et] = !0, o.onload = o.onerror = function() {
					Nt(o);
				}), Mt(o), r.head.appendChild(o);
			}
		}
	}
	function km(e, t) {
		xm.m(e, t);
		var n = wm;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + $t(r) + "\"][href=\"" + $t(e) + "\"]", a = i;
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
				r = n.createElement("link"), np(r, "link", e), Mt(r), n.head.appendChild(r);
			}
		}
	}
	function Am(e, t, n) {
		xm.S(e, t, n);
		var r = wm;
		if (r && e) {
			var i = jt(r).hoistableStyles, a = Pm(e);
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
					Mt(c), np(c, "link", e), c._p = new Promise(function(e, t) {
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
			var r = jt(n).hoistableScripts, i = Rm(e), a = r.get(i);
			a || (a = n.querySelector(zm(i)), a || (e = D({
				src: e,
				async: !0
			}, t), (t = vm.get(i)) && Um(e, t), a = n.createElement("script"), Mt(a), np(a, "link", e), n.head.appendChild(a)), a = {
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
			var r = jt(n).hoistableScripts, i = Rm(e), a = r.get(i);
			a || (a = n.querySelector(zm(i)), a || (e = D({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = vm.get(i)) && Um(e, t), a = n.createElement("script"), Mt(a), np(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Nm(e, t, n, r) {
		var a = (a = be.current) ? bm(a) : null;
		if (!a) throw Error(i(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Pm(n.href), t = jt(a).hoistableStyles, r = t.get(n), r || (r = {
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
					var o = jt(a).hoistableStyles, s = o.get(e);
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
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Rm(n), t = jt(a).hoistableScripts, r = t.get(n), r || (r = {
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
		return "href=\"" + $t(e) + "\"";
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
			if (!0 !== t[Et]) {
				r.loading = 1;
				return;
			}
		} else t = e.createElement("link"), t[Et] = !0, t.onload = t.onerror = Nt.bind(null, t), np(t, "link", n), Mt(t), e.head.appendChild(t);
		r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		});
	}
	function Rm(e) {
		return "[src=\"" + $t(e) + "\"]";
	}
	function zm(e) {
		return "script[async]" + e;
	}
	function Bm(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + $t(n.href) + "\"]");
				if (r) return t.instance = r, Mt(r), r;
				var a = D({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), Mt(r), np(r, "style", a), Vm(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				a = Pm(n.href);
				var o = e.querySelector(Fm(a));
				if (o) return t.state.loading |= 4, t.instance = o, Mt(o), o;
				r = Im(n), (a = vm.get(a)) && Hm(r, a), o = (e.ownerDocument || e).createElement("link"), Mt(o);
				var s = o;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), np(o, "link", r), t.state.loading |= 4, Vm(o, n.precedence, e), t.instance = o;
			case "script": return o = Rm(n.src), (a = e.querySelector(zm(o))) ? (t.instance = a, Mt(a), a) : (r = n, (a = vm.get(o)) && (r = D({}, n), Um(r, a)), e = e.ownerDocument || e, a = e.createElement("script"), Mt(a), np(a, "link", r), e.head.appendChild(a), t.instance = a);
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
			if (!(a[Tt] || a[vt] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
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
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = nh.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, Mt(a);
					return;
				}
				a = t.ownerDocument || t, r = Im(r), (i = vm.get(i)) && Hm(r, i), a = a.createElement("link"), Mt(a);
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
		_currentValue: me,
		_currentValue2: me,
		_threadCount: 0
	};
	function ch(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = st(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = st(0), this.hiddenUpdates = st(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function lh(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new ch(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = Oi(3, null, null, t), e.current = a, a.stateNode = e, t = Oa(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, lo(a), e;
	}
	function uh(e) {
		return e ? (e = Ei, e) : Ei;
	}
	function dh(e, t, n, r, i, a) {
		i = uh(i), r.context === null ? r.context = i : r.pendingContext = i, r = fo(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = po(e, r, t), n !== null && (jd(n, e, t), mo(n, e, t));
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
			var t = Ci(e, 67108864);
			t !== null && jd(t, e, 67108864), ph(e, 67108864);
		}
	}
	function hh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = Od();
			t = pt(t);
			var n = Ci(e, t);
			n !== null && jd(n, e, t), ph(e, t);
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
					var a = kt(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = tt(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - Je(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									wf(a), !(qu & 6) && (pd = Ie() + 500, Tf(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = Ci(a, 2), s !== null && jd(s, a, 2), Id(), ph(a, 2);
					}
					if (a = bh(r), a === null && Gf(e, t, r, xh, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else Gf(e, t, r, null, n);
		}
	}
	function bh(e) {
		return e = _n(e), Sh(e);
	}
	var xh = null;
	function Sh(e) {
		if (xh = null, e = Ot(e), e !== null) {
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
			case "message": switch (Le()) {
				case Re: return 2;
				case ze: return 8;
				case Be:
				case Ve: return 32;
				case He: return 268435456;
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
		}, t !== null && (t = kt(t), t !== null && mh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
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
		var t = Ot(e.target);
		if (t !== null) {
			var n = o(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = s(n), t !== null) {
						e.blockedOn = t, gt(e.priority, function() {
							hh(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = c(n), t !== null) {
						e.blockedOn = t, gt(e.priority, function() {
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
				gn = r, n.target.dispatchEvent(r), gn = null;
			} else return t = kt(n), t !== null && mh(t), e.blockedOn = n, !1;
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
				var a = kt(n);
				a !== null && (e.splice(t, 3), t -= 3, qs(a, {
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
			var i = n[r], a = n[r + 1], o = i[yt] || null;
			if (typeof a == "function") o || Vh(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[yt] || null) s = o.formAction;
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
		dh(n, Od(), e, t, null, null);
	}, Gh.prototype.unmount = Wh.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			dh(e.current, 2, null, e, null, null), Id(), t[bt] = null;
		}
	};
	function Gh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = ht();
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
			Ge = Jh.inject(qh), Ke = Jh;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!a(e)) throw Error(i(299));
		var n = !1, r = "", o = hc, s = gc, c = _c;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = lh(e, 1, !1, null, null, n, r, null, o, s, c, Uh), e[bt] = t.current, Uf(e), new Wh(t);
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
	let C = b.useId().replace(/:/g, ""), E = b.useRef(null), D = b.useRef(null), k = b.useRef(null), A = b.useRef(null), j = b.useRef(null), [M, ee] = b.useState(o), N = b.useRef(o.map((e, t) => t)), le = b.useRef(o.length), [de, F] = b.useState(null), [fe, pe] = b.useState(0), [I, L] = b.useState(p), R = f ?? I, me = b.useCallback((e) => {
		f === void 0 && L(e), m?.(e);
	}, [f, m]), [z, he] = b.useState(!1), [ge, _e] = b.useState(!_), ve = g / te, ye = Math.min(1.5, Math.max(1, typeof window > "u" ? 1 : window.devicePixelRatio || 1)) * ve;
	b.useEffect(() => {
		if (!_) return;
		let e = E.current;
		if (!e || typeof IntersectionObserver > "u") {
			_e(!0);
			return;
		}
		let t = 0, n = new IntersectionObserver((e) => {
			e.some((e) => e.isIntersecting) && (n.disconnect(), t = window.setTimeout(() => _e(!0), v));
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
		if (!R && !z) return;
		let e = (e) => {
			e.key !== "Escape" || document.querySelector("dialog[open]") || (z ? (he(!1), A.current?.focus()) : (me(!1), k.current?.focus()));
		}, t = (e) => {
			if (document.querySelector("dialog[open]")) return;
			let t = e.target;
			z && !j.current?.contains(t) && !A.current?.contains(t) && he(!1), R && !z && !E.current?.contains(t) && me(!1);
		};
		return document.addEventListener("keydown", e), document.addEventListener("pointerdown", t), () => {
			document.removeEventListener("keydown", e), document.removeEventListener("pointerdown", t);
		};
	}, [
		R,
		z,
		me
	]), b.useEffect(() => {
		z && j.current?.querySelector("[role=menuitem]")?.focus();
	}, [z]);
	let B = () => {
		let e = c?.(M) || {
			name: "Untitled " + (M.length + 1),
			meta: "Just now"
		}, t = [...M, e], n = le.current++;
		N.current = [...N.current, n], ee(t), F(n), pe((e) => e + 1), l?.(t);
	}, be = [{
		label: R ? "Close folder" : "Open folder",
		onSelect: () => me(!R)
	}, ...u], V = (e) => {
		let t = Array.from(j.current?.querySelectorAll("[role=menuitem]") ?? []), n = t.indexOf(document.activeElement), r = (n) => {
			e.preventDefault(), t[(n + t.length) % t.length]?.focus();
		};
		e.key === "ArrowDown" ? r(n + 1) : e.key === "ArrowUp" ? r(n - 1) : e.key === "Home" ? r(0) : e.key === "End" ? r(t.length - 1) : e.key === "Tab" && he(!1);
	}, xe = Math.max(0, M.length - se), Se = M.slice(xe), Ce = M.length, we = t ?? Ce + (Ce === 1 ? " item" : " items");
	return /* @__PURE__ */ (0, x.jsxs)("div", {
		ref: E,
		className: "gf-root" + (y ? " " + y : ""),
		"data-tone": n,
		"data-open": R || void 0,
		"data-entered": ge || void 0,
		"data-place": d,
		style: {
			width: g,
			height: 372 * ve,
			...S
		},
		children: [/* @__PURE__ */ (0, x.jsx)("style", { children: ue }), /* @__PURE__ */ (0, x.jsx)("div", {
			className: "gf-stage",
			style: { transform: "translateY(" + ne * ve + "px) scale(" + ve + ")" },
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
							density: ye,
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
								"aria-label": (R ? "Close " : "Open ") + e + ", " + Ce + (Ce === 1 ? " item" : " items"),
								onClick: () => {
									he(!1), me(!R);
								}
							}),
							/* @__PURE__ */ (0, x.jsxs)("div", {
								className: "gf-label",
								children: [/* @__PURE__ */ (0, x.jsx)("span", {
									className: "gf-title",
									children: e
								}), /* @__PURE__ */ (0, x.jsx)("span", {
									className: "gf-meta",
									children: we
								}, we)]
							})
						]
					}, fe),
					/* @__PURE__ */ (0, x.jsx)("div", {
						ref: D,
						className: "gf-files",
						role: "list",
						"aria-label": e + " contents",
						children: Se.map((e, t) => {
							let n = N.current[xe + t], r = O(t, Se.length), i = w(T(e.name) + n), a = !!(e.art || e.image), o = /* @__PURE__ */ (0, x.jsxs)(x.Fragment, { children: [a ? e.image ? /* @__PURE__ */ (0, x.jsx)("img", {
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
								density: Math.min(ye, 1.25),
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
									"--gf-depth": Se.length - 1 - t,
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
									onClick: () => h?.(e, xe + t),
									children: o
								}) : /* @__PURE__ */ (0, x.jsx)("button", {
									...s,
									type: "button",
									onClick: () => h?.(e, xe + t),
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
						"aria-expanded": s === "more" ? z : void 0,
						"aria-controls": s === "more" ? "gf-menu-" + C : void 0,
						onClick: () => s === "add" ? B() : he((e) => !e),
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
						"data-open": z || void 0,
						onKeyDown: V,
						children: be.map((e, t) => /* @__PURE__ */ (0, x.jsx)("button", {
							type: "button",
							role: "menuitem",
							tabIndex: z ? -1 : void 0,
							disabled: !z,
							className: "gf-menu-item" + (e.danger ? " gf-menu-item--danger" : ""),
							onClick: () => {
								he(!1), A.current?.focus(), e.onSelect?.();
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
}, I, L, R, me = 1e8, z = 1 / me, he = Math.PI * 2, ge = he / 4, _e = 0, ve = Math.sqrt, ye = Math.cos, B = Math.sin, be = function(e) {
	return typeof e == "string";
}, V = function(e) {
	return typeof e == "function";
}, xe = function(e) {
	return typeof e == "number";
}, Se = function(e) {
	return e === void 0;
}, Ce = function(e) {
	return typeof e == "object";
}, we = function(e) {
	return e !== !1;
}, Te = function() {
	return typeof window < "u";
}, Ee = function(e) {
	return V(e) || be(e);
}, De = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}, Oe = Array.isArray, ke = /random\([^)]+\)/g, Ae = /,\s*/g, H = /(?:-?\.?\d|\.)+/gi, je = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Me = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Ne = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Pe = /[+-]=-?[.\d]+/, Fe = /[^,'"\[\]\s]+/gi, Ie = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Le, Re, ze, Be, Ve = {}, He = {}, Ue, We = function(e) {
	return (He = St(e, Ve)) && Vr;
}, Ge = function(e, t) {
	return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, Ke = function(e, t) {
	return !t && console.warn(e);
}, qe = function(e, t) {
	return e && (Ve[e] = t) && He && (He[e] = t) || Ve;
}, Je = function() {
	return 0;
}, Ye = {
	suppressEvents: !0,
	isStart: !0,
	kill: !1
}, Xe = {
	suppressEvents: !0,
	kill: !1
}, Ze = { suppressEvents: !0 }, Qe = {}, $e = [], et = {}, tt, nt = {}, rt = {}, it = 30, at = [], ot = "", st = function(e) {
	var t = e[0], n, r;
	if (Ce(t) || V(t) || (e = [e]), !(n = (t._gsap || {}).harness)) {
		for (r = at.length; r-- && !at[r].targetTest(t););
		n = at[r];
	}
	for (r = e.length; r--;) e[r] && (e[r]._gsap || (e[r]._gsap = new Zn(e[r], n))) || e.splice(r, 1);
	return e;
}, ct = function(e) {
	return e._gsap || st(on(e))[0]._gsap;
}, lt = function(e, t, n) {
	return (n = e[t]) && V(n) ? e[t]() : Se(n) && e.getAttribute && e.getAttribute(t) || n;
}, ut = function(e, t) {
	return (e = e.split(",")).forEach(t) || e;
}, dt = function(e) {
	return Math.round(e * 1e5) / 1e5 || 0;
}, ft = function(e) {
	return Math.round(e * 1e7) / 1e7 || 0;
}, pt = function(e, t) {
	var n = t.charAt(0), r = parseFloat(t.substr(2));
	return e = parseFloat(e), n === "+" ? e + r : n === "-" ? e - r : n === "*" ? e * r : e / r;
}, mt = function(e, t) {
	for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n;);
	return r < n;
}, ht = function() {
	var e = $e.length, t = $e.slice(0), n, r;
	for (et = {}, $e.length = 0, n = 0; n < e; n++) r = t[n], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, gt = function(e) {
	return !!(e._initted || e._startAt || e.add);
}, _t = function(e, t, n, r) {
	$e.length && !L && ht(), e.render(t, n, r || !!(L && t < 0 && gt(e))), $e.length && !L && ht();
}, vt = function(e) {
	var t = parseFloat(e);
	return (t || t === 0) && (e + "").match(Fe).length < 2 ? t : be(e) ? e.trim() : e;
}, yt = function(e) {
	return e;
}, bt = function(e, t) {
	for (var n in t) n in e || (e[n] = t[n]);
	return e;
}, xt = function(e) {
	return function(t, n) {
		for (var r in n) r in t || r === "duration" && e || r === "ease" || (t[r] = n[r]);
	};
}, St = function(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}, Ct = function e(t, n) {
	for (var r in n) r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = Ce(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
	return t;
}, wt = function(e, t) {
	var n = {}, r;
	for (r in e) r in t || (n[r] = e[r]);
	return n;
}, Tt = function(e) {
	var t = e.parent || Le, n = e.keyframes ? xt(Oe(e.keyframes)) : bt;
	if (we(e.inherit)) for (; t;) n(e, t.vars.defaults), t = t.parent || t._dp;
	return e;
}, Et = function(e, t) {
	for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n];);
	return n < 0;
}, Dt = function(e, t, n, r, i) {
	n === void 0 && (n = "_first"), r === void 0 && (r = "_last");
	var a = e[r], o;
	if (i) for (o = t[i]; a && a[i] > o;) a = a._prev;
	return a ? (t._next = a._next, a._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[r] = t, t._prev = a, t.parent = t._dp = e, t;
}, Ot = function(e, t, n, r) {
	n === void 0 && (n = "_first"), r === void 0 && (r = "_last");
	var i = t._prev, a = t._next;
	i ? i._next = a : e[n] === t && (e[n] = a), a ? a._prev = i : e[r] === t && (e[r] = i), t._next = t._prev = t.parent = null;
}, kt = function(e, t) {
	e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, At = function(e, t) {
	if (e && (!t || t._end > e._dur || t._start < 0)) for (var n = e; n;) n._dirty = 1, n = n.parent;
	return e;
}, jt = function(e) {
	for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
	return e;
}, Mt = function(e, t, n, r) {
	return e._startAt && (L ? e._startAt.revert(Xe) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, r));
}, Nt = function e(t) {
	return !t || t._ts && e(t.parent);
}, Pt = function(e) {
	return e._repeat ? Ft(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, Ft = function(e, t) {
	var n = Math.floor(e = ft(e / t));
	return e && n === e ? n - 1 : n;
}, It = function(e, t) {
	return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, Lt = function(e) {
	return e._end = ft(e._start + (e._tDur / Math.abs(e._ts || e._rts || z) || 0));
}, Rt = function(e, t) {
	var n = e._dp;
	return n && n.smoothChildTiming && e._ts && (e._start = ft(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Lt(e), n._dirty || At(n, e)), e;
}, zt = function(e, t) {
	var n;
	if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = It(e.rawTime(), t), (!t._dur || $t(0, t.totalDuration(), n) - t._tTime > z) && t.render(n, !0)), At(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
		if (e._dur < e.duration()) for (n = e; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
		e._zTime = -z;
	}
}, Bt = function(e, t, n, r) {
	return t.parent && kt(t), t._start = ft((xe(n) ? n : n || e !== Le ? Xt(e, n, t) : e._time) + t._delay), t._end = ft(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Dt(e, t, "_first", "_last", e._sort ? "_start" : 0), Wt(t) || (e._recent = t), r || zt(e, t), e._ts < 0 && Rt(e, e._tTime), e;
}, Vt = function(e, t) {
	return (Ve.ScrollTrigger || Ge("scrollTrigger", t)) && Ve.ScrollTrigger.create(t, e);
}, Ht = function(e, t, n, r, i) {
	if (or(e, t, i), !e._initted) return 1;
	if (!n && e._pt && !L && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && tt !== Rn.frame) return $e.push(e), e._lazy = [i, r], 1;
}, Ut = function e(t) {
	var n = t.parent;
	return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
}, Wt = function(e) {
	var t = e.data;
	return t === "isFromStart" || t === "isStart";
}, Gt = function(e, t, n, r) {
	var i = e.ratio, a = t < 0 || !t && (!e._start && Ut(e) && (e._initted || !Wt(e)) || (e._ts < 0 || e._dp._ts < 0) && !Wt(e)) ? 0 : 1, o = e._rDelay, s = 0, c, l, u;
	if (o && e._repeat && (s = $t(0, e._tDur, t), l = Ft(s, o), e._yoyo && l & 1 && (a = 1 - a), l !== Ft(e._tTime, o) && (i = 1 - a, e.vars.repeatRefresh && e._initted && e.invalidate())), a !== i || L || r || e._zTime === z || !t && e._zTime) {
		if (!e._initted && Ht(e, t, r, n, s)) return;
		for (u = e._zTime, e._zTime = t || (n ? z : 0), n ||= t && !u, e.ratio = a, e._from && (a = 1 - a), e._time = 0, e._tTime = s, c = e._pt; c;) c.r(a, c.d), c = c._next;
		t < 0 && Mt(e, t, n, !0), e._onUpdate && !n && Cn(e, "onUpdate"), s && e._repeat && !n && e.parent && Cn(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === a && (a && kt(e, 1), !n && !L && (Cn(e, a ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
	} else e._zTime ||= t;
}, Kt = function(e, t, n) {
	var r;
	if (n > t) for (r = e._first; r && r._start <= n;) {
		if (r.data === "isPause" && r._start > t) return r;
		r = r._next;
	}
	else for (r = e._last; r && r._start >= n;) {
		if (r.data === "isPause" && r._start < t) return r;
		r = r._prev;
	}
}, qt = function(e, t, n, r) {
	var i = e._repeat, a = ft(t) || 0, o = e._tTime / e._tDur;
	return o && !r && (e._time *= a / e._dur), e._dur = a, e._tDur = i ? i < 0 ? 1e10 : ft(a * (i + 1) + e._rDelay * i) : a, o > 0 && !r && Rt(e, e._tTime = e._tDur * o), e.parent && Lt(e), n || At(e.parent, e), e;
}, Jt = function(e) {
	return e instanceof $n ? At(e) : qt(e, e._dur);
}, Yt = {
	_start: 0,
	endTime: Je,
	totalDuration: Je
}, Xt = function e(t, n, r) {
	var i = t.labels, a = t._recent || Yt, o = t.duration() >= me ? a.endTime(!1) : t._dur, s, c, l;
	return be(n) && (isNaN(n) || n in i) ? (c = n.charAt(0), l = n.substr(-1) === "%", s = n.indexOf("="), c === "<" || c === ">" ? (s >= 0 && (n = n.replace(/=/, "")), (c === "<" ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (l ? (s < 0 ? a : r).totalDuration() / 100 : 1)) : s < 0 ? (n in i || (i[n] = o), i[n]) : (c = parseFloat(n.charAt(s - 1) + n.substr(s + 1)), l && r && (c = c / 100 * (Oe(r) ? r[0] : r).totalDuration()), s > 1 ? e(t, n.substr(0, s - 1), r) + c : o + c)) : n == null ? o : +n;
}, Zt = function(e, t, n) {
	var r = xe(t[1]), i = (r ? 2 : 1) + (e < 2 ? 0 : 1), a = t[i], o, s;
	if (r && (a.duration = t[1]), a.parent = n, e) {
		for (o = a, s = n; s && !("immediateRender" in o);) o = s.vars.defaults || {}, s = we(s.vars.inherit) && s.parent;
		a.immediateRender = we(o.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[i - 1];
	}
	return new pr(t[0], a, t[i + 1]);
}, Qt = function(e, t) {
	return e || e === 0 ? t(e) : t;
}, $t = function(e, t, n) {
	return n < e ? e : n > t ? t : n;
}, en = function(e, t) {
	return !be(e) || !(t = Ie.exec(e)) ? "" : t[1];
}, tn = function(e, t, n) {
	return Qt(n, function(n) {
		return $t(e, t, n);
	});
}, nn = [].slice, rn = function(e, t) {
	return e && Ce(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Ce(e[0])) && !e.nodeType && e !== Re;
}, an = function(e, t, n) {
	return n === void 0 && (n = []), e.forEach(function(e) {
		var r;
		return be(e) && !t || rn(e, 1) ? (r = n).push.apply(r, on(e)) : n.push(e);
	}) || n;
}, on = function(e, t, n) {
	return R && !t && R.selector ? R.selector(e) : be(e) && !n && (ze || !zn()) ? nn.call((t || Be).querySelectorAll(e), 0) : Oe(e) ? an(e, n) : rn(e) ? nn.call(e, 0) : e ? [e] : [];
}, sn = function(e) {
	return e = on(e)[0] || Ke("Invalid scope") || {}, function(t) {
		var n = e.current || e.nativeElement || e;
		return on(t, n.querySelectorAll ? n : n === e ? Ke("Invalid scope") || Be.createElement("div") : e);
	};
}, cn = function(e) {
	return e.sort(function() {
		return .5 - Math.random();
	});
}, ln = function(e) {
	if (V(e)) return e;
	var t = Ce(e) ? e : { each: e }, n = Kn(t.ease), r = t.from || 0, i = parseFloat(t.base) || 0, a = {}, o = r > 0 && r < 1, s = isNaN(r) || o, c = t.axis, l = r, u = r;
	return be(r) ? l = u = {
		center: .5,
		edges: .5,
		end: 1
	}[r] || 0 : !o && s && (l = r[0], u = r[1]), function(e, o, d) {
		var f = (d || t).length, p = a[f], m, h, g, _, v, y, b, x, S;
		if (!p) {
			if (S = t.grid === "auto" ? 0 : (t.grid || [1, me])[1], !S) {
				for (b = -me; b < (b = d[S++].getBoundingClientRect().left) && S < f;);
				S < f && S--;
			}
			for (p = a[f] = [], m = s ? Math.min(S, f) * l - .5 : r % S, h = S === me ? 0 : s ? f * u / S - .5 : r / S | 0, b = 0, x = me, y = 0; y < f; y++) g = y % S - m, _ = h - (y / S | 0), p[y] = v = c ? Math.abs(c === "y" ? _ : g) : ve(g * g + _ * _), v > b && (b = v), v < x && (x = v);
			r === "random" && cn(p), p.max = b - x, p.min = x, p.v = f = (parseFloat(t.amount) || parseFloat(t.each) * (S > f ? f - 1 : c ? c === "y" ? f / S : S : Math.max(S, f / S)) || 0) * (r === "edges" ? -1 : 1), p.b = f < 0 ? i - f : i, p.u = en(t.amount || t.each) || 0, n = n && f < 0 ? Gn(n) : n;
		}
		return f = (p[e] - p.min) / p.max || 0, ft(p.b + (n ? n(f) : f) * p.v) + p.u;
	};
}, un = function(e) {
	var t = 10 ** ((e + "").split(".")[1] || "").length;
	return function(n) {
		var r = ft(Math.round(parseFloat(n) / e) * e * t);
		return (r - r % 1) / t + (xe(n) ? 0 : en(n));
	};
}, dn = function(e, t) {
	var n = Oe(e), r, i;
	return !n && Ce(e) && (r = n = e.radius || me, e.values ? (e = on(e.values), (i = !xe(e[0])) && (r *= r)) : e = un(e.increment)), Qt(t, n ? V(e) ? function(t) {
		return i = e(t), Math.abs(i - t) <= r ? i : t;
	} : function(t) {
		for (var n = parseFloat(i ? t.x : t), a = parseFloat(i ? t.y : 0), o = me, s = 0, c = e.length, l, u; c--;) i ? (l = e[c].x - n, u = e[c].y - a, l = l * l + u * u) : l = Math.abs(e[c] - n), l < o && (o = l, s = c);
		return s = !r || o <= r ? e[s] : t, i || s === t || xe(t) ? s : s + en(t);
	} : un(e));
}, fn = function(e, t, n, r) {
	return Qt(Oe(e) ? !t : n === !0 ? !!(n = 0) : !r, function() {
		return Oe(e) ? e[~~(Math.random() * e.length)] : (n ||= 1e-5) && (r = n < 1 ? 10 ** ((n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * .99)) / n) * n * r) / r;
	});
}, pn = function() {
	var e = [...arguments];
	return function(t) {
		return e.reduce(function(e, t) {
			return t(e);
		}, t);
	};
}, mn = function(e, t) {
	return function(n) {
		return e(parseFloat(n)) + (t || en(n));
	};
}, hn = function(e, t, n) {
	return bn(e, t, 0, 1, n);
}, gn = function(e, t, n) {
	return Qt(n, function(n) {
		return e[~~t(n)];
	});
}, _n = function e(t, n, r) {
	var i = n - t;
	return Oe(t) ? gn(t, e(0, t.length), n) : Qt(r, function(e) {
		return (i + (e - t) % i) % i + t;
	});
}, vn = function e(t, n, r) {
	var i = n - t, a = i * 2;
	return Oe(t) ? gn(t, e(0, t.length - 1), n) : Qt(r, function(e) {
		return e = (a + (e - t) % a) % a || 0, t + (e > i ? a - e : e);
	});
}, yn = function(e) {
	return e.replace(ke, function(e) {
		var t = e.indexOf("[") + 1, n = e.substring(t || 7, t ? e.indexOf("]") : e.length - 1).split(Ae);
		return fn(t ? n : +n[0], t ? 0 : +n[1], +n[2] || 1e-5);
	});
}, bn = function(e, t, n, r, i) {
	var a = t - e, o = r - n;
	return Qt(i, function(t) {
		return n + ((t - e) / a * o || 0);
	});
}, xn = function e(t, n, r, i) {
	var a = isNaN(t + n) ? 0 : function(e) {
		return (1 - e) * t + e * n;
	};
	if (!a) {
		var o = be(t), s = {}, c, l, u, d, f;
		if (r === !0 && (i = 1) && (r = null), o) t = { p: t }, n = { p: n };
		else if (Oe(t) && !Oe(n)) {
			for (u = [], d = t.length, f = d - 2, l = 1; l < d; l++) u.push(e(t[l - 1], t[l]));
			d--, a = function(e) {
				e *= d;
				var t = Math.min(f, ~~e);
				return u[t](e - t);
			}, r = n;
		} else i || (t = St(Oe(t) ? [] : {}, t));
		if (!u) {
			for (c in n) tr.call(s, t, c, "get", n[c]);
			a = function(e) {
				return Sr(e, s) || (o ? t.p : t);
			};
		}
	}
	return Qt(r, a);
}, Sn = function(e, t, n) {
	var r = e.labels, i = me, a, o, s;
	for (a in r) o = r[a] - t, o < 0 == !!n && o && i > (o = Math.abs(o)) && (s = a, i = o);
	return s;
}, Cn = function(e, t, n) {
	var r = e.vars, i = r[t], a = R, o = e._ctx, s, c, l;
	if (i) return s = r[t + "Params"], c = r.callbackScope || e, n && $e.length && ht(), o && (R = o), l = s ? i.apply(c, s) : i.call(c), R = a, l;
}, wn = function(e) {
	return kt(e), e.scrollTrigger && e.scrollTrigger.kill(!!L), e.progress() < 1 && Cn(e, "onInterrupt"), e;
}, Tn, En = [], Dn = function(e) {
	if (e) {
		if (e = !e.name && e.default || e, Te() || e.headless) {
			var t = e.name, n = V(e), r = t && !n && e.init ? function() {
				this._props = [];
			} : e, i = {
				init: Je,
				render: Sr,
				add: tr,
				kill: wr,
				modifier: Cr,
				rawVars: 0
			}, a = {
				targetTest: 0,
				get: 0,
				getSetter: vr,
				aliases: {},
				register: 0
			};
			if (zn(), e !== r) {
				if (nt[t]) return;
				bt(r, bt(wt(e, i), a)), St(r.prototype, St(i, wt(e, a))), nt[r.prop = t] = r, e.targetTest && (at.push(r), Qe[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
			}
			qe(t, r), e.register && e.register(Vr, r, Dr);
		} else En.push(e);
	}
}, On = 255, kn = {
	aqua: [
		0,
		On,
		On
	],
	lime: [
		0,
		On,
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
		On
	],
	navy: [
		0,
		0,
		128
	],
	white: [
		On,
		On,
		On
	],
	olive: [
		128,
		128,
		0
	],
	yellow: [
		On,
		On,
		0
	],
	orange: [
		On,
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
		On,
		0,
		0
	],
	pink: [
		On,
		192,
		203
	],
	cyan: [
		0,
		On,
		On
	],
	transparent: [
		On,
		On,
		On,
		0
	]
}, An = function(e, t, n) {
	return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (n - t) * e * 6 : e < .5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * On + .5 | 0;
}, jn = function(e, t, n) {
	var r = e ? xe(e) ? [
		e >> 16,
		e >> 8 & On,
		e & On
	] : 0 : kn.black, i, a, o, s, c, l, u, d, f, p;
	if (!r) {
		if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), kn[e]) r = kn[e];
		else if (e.charAt(0) === "#") {
			if (e.length < 6 && (i = e.charAt(1), a = e.charAt(2), o = e.charAt(3), e = "#" + i + i + a + a + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return r = parseInt(e.substr(1, 6), 16), [
				r >> 16,
				r >> 8 & On,
				r & On,
				parseInt(e.substr(7), 16) / 255
			];
			e = parseInt(e.substr(1), 16), r = [
				e >> 16,
				e >> 8 & On,
				e & On
			];
		} else if (e.substr(0, 3) === "hsl") {
			if (r = p = e.match(H), !t) s = r[0] % 360 / 360, c = r[1] / 100, l = r[2] / 100, a = l <= .5 ? l * (c + 1) : l + c - l * c, i = l * 2 - a, r.length > 3 && (r[3] *= 1), r[0] = An(s + 1 / 3, i, a), r[1] = An(s, i, a), r[2] = An(s - 1 / 3, i, a);
			else if (~e.indexOf("=")) return r = e.match(je), n && r.length < 4 && (r[3] = 1), r;
		} else r = e.match(H) || kn.transparent;
		r = r.map(Number);
	}
	return t && !p && (i = r[0] / On, a = r[1] / On, o = r[2] / On, u = Math.max(i, a, o), d = Math.min(i, a, o), l = (u + d) / 2, u === d ? s = c = 0 : (f = u - d, c = l > .5 ? f / (2 - u - d) : f / (u + d), s = u === i ? (a - o) / f + (a < o ? 6 : 0) : u === a ? (o - i) / f + 2 : (i - a) / f + 4, s *= 60), r[0] = ~~(s + .5), r[1] = ~~(c * 100 + .5), r[2] = ~~(l * 100 + .5)), n && r.length < 4 && (r[3] = 1), r;
}, Mn = function(e) {
	var t = [], n = [], r = -1;
	return e.split(Pn).forEach(function(e) {
		var i = e.match(Me) || [];
		t.push.apply(t, i), n.push(r += i.length + 1);
	}), t.c = n, t;
}, Nn = function(e, t, n) {
	var r = "", i = (e + r).match(Pn), a = t ? "hsla(" : "rgba(", o = 0, s, c, l, u;
	if (!i) return e;
	if (i = i.map(function(e) {
		return (e = jn(e, t, 1)) && a + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")";
	}), n && (l = Mn(e), s = n.c, s.join(r) !== l.c.join(r))) for (c = e.replace(Pn, "1").split(Me), u = c.length - 1; o < u; o++) r += c[o] + (~s.indexOf(o) ? i.shift() || a + "0,0,0,0)" : (l.length ? l : i.length ? i : n).shift());
	if (!c) for (c = e.split(Pn), u = c.length - 1; o < u; o++) r += c[o] + i[o];
	return r + c[u];
}, Pn = function() {
	var e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
	for (t in kn) e += "|" + t + "\\b";
	return RegExp(e + ")", "gi");
}(), Fn = /hsl[a]?\(/, In = function(e) {
	var t = e.join(" "), n;
	if (Pn.lastIndex = 0, Pn.test(t)) return n = Fn.test(t), e[1] = Nn(e[1], n), e[0] = Nn(e[0], n, Mn(e[1])), !0;
}, Ln, Rn = function() {
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
			Ue && (!ze && Te() && (Re = ze = window, Be = Re.document || {}, Ve.gsap = Vr, (Re.gsapVersions || (Re.gsapVersions = [])).push(Vr.version), We(He || Re.GreenSockGlobals || !Re.gsap && Re || {}), En.forEach(Dn)), u = typeof requestAnimationFrame < "u" && requestAnimationFrame, c && d.sleep(), l = u || function(e) {
				return setTimeout(e, o - d.time * 1e3 + 1 | 0);
			}, Ln = 1, m(2));
		},
		sleep: function() {
			(u ? cancelAnimationFrame : clearTimeout)(c), Ln = 0, l = Je;
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
			return d.remove(e), s[n ? "unshift" : "push"](r), zn(), r;
		},
		remove: function(e, t) {
			~(t = s.indexOf(e)) && s.splice(t, 1) && p >= t && p--;
		},
		_listeners: s
	}, d;
}(), zn = function() {
	return !Ln && Rn.wake();
}, U = {}, Bn = /^[\d.\-M][\d.\-,\s]/, Vn = /["']/g, Hn = function(e) {
	for (var t = {}, n = e.substr(1, e.length - 3).split(":"), r = n[0], i = 1, a = n.length, o, s, c; i < a; i++) s = n[i], o = i === a - 1 ? s.length : s.lastIndexOf(","), c = s.substr(0, o), t[r] = isNaN(c) ? c.replace(Vn, "").trim() : +c, r = s.substr(o + 1).trim();
	return t;
}, Un = function(e) {
	var t = e.indexOf("(") + 1, n = e.indexOf(")"), r = e.indexOf("(", t);
	return e.substring(t, ~r && r < n ? e.indexOf(")", n + 1) : n);
}, Wn = function(e) {
	var t = (e + "").split("("), n = U[t[0]];
	return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [Hn(t[1])] : Un(e).split(",").map(vt)) : U._CE && Bn.test(e) ? U._CE("", e) : n;
}, Gn = function(e) {
	return function(t) {
		return 1 - e(1 - t);
	};
}, Kn = function(e, t) {
	return e && (V(e) ? e : U[e] || Wn(e)) || t;
}, qn = function(e, t, n, r) {
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
	return ut(e, function(e) {
		for (var t in U[e] = Ve[e] = i, U[a = e.toLowerCase()] = n, i) U[a + (t === "easeIn" ? ".in" : t === "easeOut" ? ".out" : ".inOut")] = U[e + "." + t] = i[t];
	}), i;
}, Jn = function(e) {
	return function(t) {
		return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2;
	};
}, Yn = function e(t, n, r) {
	var i = n >= 1 ? n : 1, a = (r || (t ? .3 : .45)) / (n < 1 ? n : 1), o = a / he * (Math.asin(1 / i) || 0), s = function(e) {
		return e === 1 ? 1 : i * 2 ** (-10 * e) * B((e - o) * a) + 1;
	}, c = t === "out" ? s : t === "in" ? function(e) {
		return 1 - s(1 - e);
	} : Jn(s);
	return a = he / a, c.config = function(n, r) {
		return e(t, n, r);
	}, c;
}, Xn = function e(t, n) {
	n === void 0 && (n = 1.70158);
	var r = function(e) {
		return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
	}, i = t === "out" ? r : t === "in" ? function(e) {
		return 1 - r(1 - e);
	} : Jn(r);
	return i.config = function(n) {
		return e(t, n);
	}, i;
};
ut("Linear,Quad,Cubic,Quart,Quint,Strong", function(e, t) {
	var n = t < 5 ? t + 1 : t;
	qn(e + ",Power" + (n - 1), t ? function(e) {
		return e ** +n;
	} : function(e) {
		return e;
	}, function(e) {
		return 1 - (1 - e) ** n;
	}, function(e) {
		return e < .5 ? (e * 2) ** n / 2 : 1 - ((1 - e) * 2) ** n / 2;
	});
}), U.Linear.easeNone = U.none = U.Linear.easeIn, qn("Elastic", Yn("in"), Yn("out"), Yn()), (function(e, t) {
	var n = 1 / t, r = 2 * n, i = 2.5 * n, a = function(a) {
		return a < n ? e * a * a : a < r ? e * (a - 1.5 / t) ** 2 + .75 : a < i ? e * (a -= 2.25 / t) * a + .9375 : e * (a - 2.625 / t) ** 2 + .984375;
	};
	qn("Bounce", function(e) {
		return 1 - a(1 - e);
	}, a);
})(7.5625, 2.75), qn("Expo", function(e) {
	return 2 ** (10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e);
}), qn("Circ", function(e) {
	return -(ve(1 - e * e) - 1);
}), qn("Sine", function(e) {
	return e === 1 ? 1 : -ye(e * ge) + 1;
}), qn("Back", Xn("in"), Xn("out"), Xn()), U.SteppedEase = U.steps = Ve.SteppedEase = { config: function(e, t) {
	e === void 0 && (e = 1);
	var n = 1 / e, r = e + +!t, i = +!!t, a = 1 - z;
	return function(e) {
		return ((r * $t(0, a, e) | 0) + i) * n;
	};
} }, pe.ease = U["quad.out"], ut("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e) {
	return ot += e + "," + e + "Params,";
});
var Zn = function(e, t) {
	this.id = _e++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : lt, this.set = t ? t.getSetter : vr;
}, Qn = /*#__PURE__*/ function() {
	function e(e) {
		this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === Infinity ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, qt(this, +e.duration, 1, 1), this.data = e.data, R && (this._ctx = R, R.data.push(this)), Ln || Rn.wake();
	}
	var t = e.prototype;
	return t.delay = function(e) {
		return e || e === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay;
	}, t.duration = function(e) {
		return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur;
	}, t.totalDuration = function(e) {
		return arguments.length ? (this._dirty = 0, qt(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
	}, t.totalTime = function(e, t) {
		if (zn(), !arguments.length) return this._tTime;
		var n = this._dp;
		if (n && n.smoothChildTiming && this._ts) {
			for (Rt(this, e), !n._dp || n.parent || zt(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
			!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && Bt(this._dp, this, this._start - this._delay);
		}
		return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === z || !this._initted && this._dur && e || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), _t(this, e, t)), this;
	}, t.time = function(e, t) {
		return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + Pt(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time;
	}, t.totalProgress = function(e, t) {
		return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
	}, t.progress = function(e, t) {
		return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) + Pt(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : +(this.rawTime() > 0);
	}, t.iteration = function(e, t) {
		var n = this.duration() + this._rDelay;
		return arguments.length ? this.totalTime(this._time + (e - 1) * n, t) : this._repeat ? Ft(this._tTime, n) + 1 : 1;
	}, t.timeScale = function(e, t) {
		if (!arguments.length) return this._rts === -z ? 0 : this._rts;
		if (this._rts === e) return this;
		var n = this.parent && this._ts ? It(this.parent._time, this) : this._tTime;
		return this._rts = +e || 0, this._ts = this._ps || e === -z ? 0 : this._rts, this.totalTime($t(-Math.abs(this._delay), this.totalDuration(), n), t !== !1), Lt(this), jt(this);
	}, t.paused = function(e) {
		return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (zn(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== z && (this._tTime -= z)))), this) : this._ps;
	}, t.startTime = function(e) {
		if (arguments.length) {
			this._start = ft(e);
			var t = this.parent || this._dp;
			return t && (t._sort || !this.parent) && Bt(t, this, this._start - this._delay), this;
		}
		return this._start;
	}, t.endTime = function(e) {
		return this._start + (we(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
	}, t.rawTime = function(e) {
		var t = this.parent || this._dp;
		return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? It(t.rawTime(e), this) : this._tTime : this._tTime;
	}, t.revert = function(e) {
		e === void 0 && (e = Ze);
		var t = L;
		return L = e, gt(this) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), this.data !== "nested" && e.kill !== !1 && this.kill(), L = t, this;
	}, t.globalTime = function(e) {
		for (var t = this, n = arguments.length ? e : t.rawTime(); t;) n = t._start + n / (Math.abs(t._ts) || 1), t = t._dp;
		return !this.parent && this._sat ? this._sat.globalTime(e) : n;
	}, t.repeat = function(e) {
		return arguments.length ? (this._repeat = e === Infinity ? -2 : e, Jt(this)) : this._repeat === -2 ? Infinity : this._repeat;
	}, t.repeatDelay = function(e) {
		if (arguments.length) {
			var t = this._time;
			return this._rDelay = e, Jt(this), t ? this.time(t) : this;
		}
		return this._rDelay;
	}, t.yoyo = function(e) {
		return arguments.length ? (this._yoyo = e, this) : this._yoyo;
	}, t.seek = function(e, t) {
		return this.totalTime(Xt(this, e), we(t));
	}, t.restart = function(e, t) {
		return this.play().totalTime(e ? -this._delay : 0, we(t)), this._dur || (this._zTime = -z), this;
	}, t.play = function(e, t) {
		return e != null && this.seek(e, t), this.reversed(!1).paused(!1);
	}, t.reverse = function(e, t) {
		return e != null && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1);
	}, t.pause = function(e, t) {
		return e != null && this.seek(e, t), this.paused(!0);
	}, t.resume = function() {
		return this.paused(!1);
	}, t.reversed = function(e) {
		return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -z : 0)), this) : this._rts < 0;
	}, t.invalidate = function() {
		return this._initted = this._act = 0, this._zTime = -z, this;
	}, t.isActive = function() {
		var e = this.parent || this._dp, t = this._start, n;
		return !!(!e || this._ts && this._initted && e.isActive() && (n = e.rawTime(!0)) >= t && n < this.endTime(!0) - z);
	}, t.eventCallback = function(e, t, n) {
		var r = this.vars;
		return arguments.length > 1 ? (t ? (r[e] = t, n && (r[e + "Params"] = n), e === "onUpdate" && (this._onUpdate = t)) : delete r[e], this) : r[e];
	}, t.then = function(e) {
		var t = this, n = t._prom;
		return new Promise(function(r) {
			var i = V(e) ? e : yt, a = function() {
				var e = t.then;
				t.then = null, n && n(), V(i) && (i = i(t)) && (i.then || i === t) && (t.then = e), r(i), t.then = e;
			};
			t._initted && t.totalProgress() === 1 && t._ts >= 0 || !t._tTime && t._ts < 0 ? a() : t._prom = a;
		});
	}, t.kill = function() {
		wn(this);
	}, e;
}();
bt(Qn.prototype, {
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
	_zTime: -z,
	_prom: 0,
	_ps: !1,
	_rts: 1
});
var $n = /*#__PURE__*/ function(e) {
	F(t, e);
	function t(t, n) {
		var r;
		return t === void 0 && (t = {}), r = e.call(this, t) || this, r.labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = we(t.sortChildren), Le && Bt(t.parent || Le, de(r), n), t.reversed && r.reverse(), t.paused && r.paused(!0), t.scrollTrigger && Vt(de(r), t.scrollTrigger), r;
	}
	var n = t.prototype;
	return n.to = function(e, t, n) {
		return Zt(0, arguments, this), this;
	}, n.from = function(e, t, n) {
		return Zt(1, arguments, this), this;
	}, n.fromTo = function(e, t, n, r) {
		return Zt(2, arguments, this), this;
	}, n.set = function(e, t, n) {
		return t.duration = 0, t.parent = this, Tt(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new pr(e, t, Xt(this, n), 1), this;
	}, n.call = function(e, t, n) {
		return Bt(this, pr.delayedCall(0, e, t), n);
	}, n.staggerTo = function(e, t, n, r, i, a, o) {
		return n.duration = t, n.stagger = n.stagger || r, n.onComplete = a, n.onCompleteParams = o, n.parent = this, new pr(e, n, Xt(this, i)), this;
	}, n.staggerFrom = function(e, t, n, r, i, a, o) {
		return n.runBackwards = 1, Tt(n).immediateRender = we(n.immediateRender), this.staggerTo(e, t, n, r, i, a, o);
	}, n.staggerFromTo = function(e, t, n, r, i, a, o, s) {
		return r.startAt = n, Tt(r).immediateRender = we(r.immediateRender), this.staggerTo(e, t, r, i, a, o, s);
	}, n.render = function(e, t, n) {
		var r = this._time, i = this._dirty ? this.totalDuration() : this._tDur, a = this._dur, o = e <= 0 ? 0 : ft(e), s = this._zTime < 0 != e < 0 && (this._initted || !a), c, l, u, d, f, p, m, h, g, _, v, y;
		if (this !== Le && o > i && e >= 0 && (o = i), o !== this._tTime || n || s) {
			if (r !== this._time && a && (o += this._time - r, e += this._time - r), c = o, g = this._start, h = this._ts, p = !h, s && (a || (r = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
				if (v = this._yoyo, f = a + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(f * 100 + e, t, n);
				if (c = ft(o % f), o === i ? (d = this._repeat, c = a) : (_ = ft(o / f), d = ~~_, d && d === _ && (c = a, d--), c > a && (c = a)), _ = Ft(this._tTime, f), !r && this._tTime && _ !== d && this._tTime - _ * f - this._dur <= 0 && (_ = d), v && d & 1 && (c = a - c, y = 1), d !== _ && !this._lock) {
					var b = v && _ & 1, x = b === (v && d & 1);
					if (d < _ && (b = !b), r = b ? 0 : o % a ? a : o, this._lock = 1, this.render(r || (y ? 0 : ft(d * f)), t, !a)._lock = 0, this._tTime = o, !t && this.parent && Cn(this, "onRepeat"), this.vars.repeatRefresh && !y && (this.invalidate()._lock = 1, _ = d), r && r !== this._time || p !== !this._ts || this.vars.onRepeat && !this.parent && !this._act || (a = this._dur, i = this._tDur, x && (this._lock = 2, r = b ? a : -1e-4, this.render(r, !0), this.vars.repeatRefresh && !y && this.invalidate()), this._lock = 0, !this._ts && !p)) return this;
				}
			}
			if (this._hasPause && !this._forcing && this._lock < 2 && (m = Kt(this, ft(r), ft(c)), m && (o -= c - (c = m._start))), this._tTime = o, this._time = c, this._act = !!h, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, r = 0), !r && o && a && !t && !_ && (Cn(this, "onStart"), this._tTime !== o)) return this;
			if (c >= r && e >= 0) for (l = this._first; l;) {
				if (u = l._next, (l._act || c >= l._start) && l._ts && m !== l) {
					if (l.parent !== this) return this.render(e, t, n);
					if (l.render(l._ts > 0 ? (c - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (c - l._start) * l._ts, t, n), c !== this._time || !this._ts && !p) {
						m = 0, u && (o += this._zTime = -z);
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
						if (l.render(l._ts > 0 ? (S - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (S - l._start) * l._ts, t, n || L && gt(l)), c !== this._time || !this._ts && !p) {
							m = 0, u && (o += this._zTime = S ? -z : z);
							break;
						}
					}
					l = u;
				}
			}
			if (m && !t && (this.pause(), m.render(c >= r ? 0 : -z)._zTime = c >= r ? 1 : -1, this._ts)) return this._start = g, Lt(this), this.render(e, t, n);
			this._onUpdate && !t && Cn(this, "onUpdate", !0), (o === i && this._tTime >= this.totalDuration() || !o && r) && (g === this._start || Math.abs(h) !== Math.abs(this._ts)) && (this._lock || ((e || !a) && (o === i && this._ts > 0 || !o && this._ts < 0) && kt(this, 1), !t && !(e < 0 && !r) && (o || r || !i) && (Cn(this, o === i && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(o < i && this.timeScale() > 0) && this._prom())));
		}
		return this;
	}, n.add = function(e, t) {
		var n = this;
		if (xe(t) || (t = Xt(this, t, e)), !(e instanceof Qn)) {
			if (Oe(e)) return e.forEach(function(e) {
				return n.add(e, t);
			}), this;
			if (be(e)) return this.addLabel(e, t);
			if (V(e)) e = pr.delayedCall(0, e);
			else return this;
		}
		return this === e ? this : Bt(this, e, t);
	}, n.getChildren = function(e, t, n, r) {
		e === void 0 && (e = !0), t === void 0 && (t = !0), n === void 0 && (n = !0), r === void 0 && (r = -me);
		for (var i = [], a = this._first; a;) a._start >= r && (a instanceof pr ? t && i.push(a) : (n && i.push(a), e && i.push.apply(i, a.getChildren(!0, t, n)))), a = a._next;
		return i;
	}, n.getById = function(e) {
		for (var t = this.getChildren(1, 1, 1), n = t.length; n--;) if (t[n].vars.id === e) return t[n];
	}, n.remove = function(e) {
		return be(e) ? this.removeLabel(e) : V(e) ? this.killTweensOf(e) : (e.parent === this && Ot(this, e), e === this._recent && (this._recent = this._last), At(this));
	}, n.totalTime = function(t, n) {
		return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ft(Rn.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), e.prototype.totalTime.call(this, t, n), this._forcing = 0, this) : this._tTime;
	}, n.addLabel = function(e, t) {
		return this.labels[e] = Xt(this, t), this;
	}, n.removeLabel = function(e) {
		return delete this.labels[e], this;
	}, n.addPause = function(e, t, n) {
		var r = pr.delayedCall(0, t || Je, n);
		return r.data = "isPause", this._hasPause = 1, Bt(this, r, Xt(this, e));
	}, n.removePause = function(e) {
		var t = this._first;
		for (e = Xt(this, e); t;) t._start === e && t.data === "isPause" && kt(t), t = t._next;
	}, n.killTweensOf = function(e, t, n) {
		for (var r = this.getTweensOf(e, n), i = r.length; i--;) ir !== r[i] && r[i].kill(e, t);
		return this;
	}, n.getTweensOf = function(e, t) {
		for (var n = [], r = on(e), i = this._first, a = xe(t), o; i;) i instanceof pr ? mt(i._targets, r) && (a ? (!ir || i._initted && i._ts) && i.globalTime(0) <= t && i.globalTime(i.totalDuration()) > t : !t || i.isActive()) && n.push(i) : (o = i.getTweensOf(r, t)).length && n.push.apply(n, o), i = i._next;
		return n;
	}, n.tweenTo = function(e, t) {
		t ||= {};
		var n = this, r = Xt(n, e), i = t, a = i.startAt, o = i.onStart, s = i.onStartParams, c = i.immediateRender, l, u = pr.to(n, bt({
			ease: t.ease || "none",
			lazy: !1,
			immediateRender: !1,
			time: r,
			overwrite: "auto",
			duration: t.duration || Math.abs((r - (a && "time" in a ? a.time : n._time)) / n.timeScale()) || z,
			onStart: function() {
				if (n.pause(), !l) {
					var e = t.duration || Math.abs((r - (a && "time" in a ? a.time : n._time)) / n.timeScale());
					u._dur !== e && qt(u, e, 0, 1).render(u._time, !0, !0), l = 1;
				}
				o && o.apply(u, s || []);
			}
		}, t));
		return c ? u.render(0) : u;
	}, n.tweenFromTo = function(e, t, n) {
		return this.tweenTo(t, bt({ startAt: { time: Xt(this, e) } }, n));
	}, n.recent = function() {
		return this._recent;
	}, n.nextLabel = function(e) {
		return e === void 0 && (e = this._time), Sn(this, Xt(this, e));
	}, n.previousLabel = function(e) {
		return e === void 0 && (e = this._time), Sn(this, Xt(this, e), 1);
	}, n.currentLabel = function(e) {
		return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + z);
	}, n.shiftChildren = function(e, t, n) {
		n === void 0 && (n = 0);
		var r = this._first, i = this.labels, a;
		for (e = ft(e); r;) r._start >= n && (r._start += e, r._end += e), r = r._next;
		if (t) for (a in i) i[a] >= n && (i[a] += e);
		return At(this);
	}, n.invalidate = function(t) {
		var n = this._first;
		for (this._lock = 0; n;) n.invalidate(t), n = n._next;
		return e.prototype.invalidate.call(this, t);
	}, n.clear = function(e) {
		e === void 0 && (e = !0);
		for (var t = this._first, n; t;) n = t._next, this.remove(t), t = n;
		return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), At(this);
	}, n.totalDuration = function(e) {
		var t = 0, n = this, r = n._last, i = me, a, o, s;
		if (arguments.length) return n.timeScale((n._repeat < 0 ? n.duration() : n.totalDuration()) / (n.reversed() ? -e : e));
		if (n._dirty) {
			for (s = n.parent; r;) a = r._prev, r._dirty && r.totalDuration(), o = r._start, o > i && n._sort && r._ts && !n._lock ? (n._lock = 1, Bt(n, r, o - r._delay, 1)._lock = 0) : i = o, o < 0 && r._ts && (t -= o, (!s && !n._dp || s && s.smoothChildTiming) && (n._start += ft(o / n._ts), n._time -= o, n._tTime -= o), n.shiftChildren(-o, !1, -Infinity), i = 0), r._end > t && r._ts && (t = r._end), r = a;
			qt(n, n === Le && n._time > t ? n._time : t, 1, 1), n._dirty = 0;
		}
		return n._tDur;
	}, t.updateRoot = function(e) {
		if (Le._ts && (_t(Le, It(e, Le)), tt = Rn.frame), Rn.frame >= it) {
			it += fe.autoSleep || 120;
			var t = Le._first;
			if ((!t || !t._ts) && fe.autoSleep && Rn._listeners.length < 2) {
				for (; t && !t._ts;) t = t._next;
				t || Rn.sleep();
			}
		}
	}, t;
}(Qn);
bt($n.prototype, {
	_lock: 0,
	_hasPause: 0,
	_forcing: 0
});
var er = function(e, t, n, r, i, a, o) {
	var s = new Dr(this._pt, e, t, 0, 1, xr, null, i), c = 0, l = 0, u, d, f, p, m, h, g, _;
	for (s.b = n, s.e = r, n += "", r += "", (g = ~r.indexOf("random(")) && (r = yn(r)), a && (_ = [n, r], a(_, e, t), n = _[0], r = _[1]), d = n.match(Ne) || []; u = Ne.exec(r);) p = u[0], m = r.substring(c, u.index), f ? f = (f + 1) % 5 : m.substr(-5) === "rgba(" && (f = 1), p !== d[l++] && (h = parseFloat(d[l - 1]) || 0, s._pt = {
		_next: s._pt,
		p: m || l === 1 ? m : ",",
		s: h,
		c: p.charAt(1) === "=" ? pt(h, p) - h : parseFloat(p) - h,
		m: f && f < 4 ? Math.round : 0
	}, c = Ne.lastIndex);
	return s.c = c < r.length ? r.substring(c, r.length) : "", s.fp = o, (Pe.test(r) || g) && (s.e = 0), this._pt = s, s;
}, tr = function(e, t, n, r, i, a, o, s, c, l) {
	V(r) && (r = r(i || 0, e, a));
	var u = e[t], d = n === "get" ? V(u) ? c ? e[t.indexOf("set") || !V(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : u : n, f = V(u) ? c ? gr : hr : mr, p;
	if (be(r) && (~r.indexOf("random(") && (r = yn(r)), r.charAt(1) === "=" && (p = pt(d, r) + (en(d) || 0), (p || p === 0) && (r = p))), !l || d !== r || ar) return !isNaN(d * r) && r !== "" ? (p = new Dr(this._pt, e, t, +d || 0, r - (d || 0), typeof u == "boolean" ? br : yr, 0, f), c && (p.fp = c), o && p.modifier(o, this, e), this._pt = p) : (!u && !(t in e) && Ge(t, r), er.call(this, e, t, d, r, f, s || fe.stringFilter, c));
}, nr = function(e, t, n, r, i) {
	if (V(e) && (e = ur(e, i, t, n, r)), !Ce(e) || e.style && e.nodeType || Oe(e) || De(e)) return be(e) ? ur(e, i, t, n, r) : e;
	var a = {}, o;
	for (o in e) a[o] = ur(e[o], i, t, n, r);
	return a;
}, rr = function(e, t, n, r, i, a) {
	var o, s, c, l;
	if (nt[e] && (o = new nt[e]()).init(i, o.rawVars ? t[e] : nr(t[e], r, i, a, n), n, r, a) !== !1 && (n._pt = s = new Dr(n._pt, i, e, 0, 1, o.render, o, 0, o.priority), n !== Tn)) for (c = n._ptLookup[n._targets.indexOf(i)], l = o._props.length; l--;) c[o._props[l]] = s;
	return o;
}, ir, ar, or = function e(t, n, r) {
	var i = t.vars, a = i.ease, o = i.startAt, s = i.immediateRender, c = i.lazy, l = i.onUpdate, u = i.runBackwards, d = i.yoyoEase, f = i.keyframes, p = i.autoRevert, m = t._dur, h = t._startAt, g = t._targets, _ = t.parent, v = _ && _.data === "nested" ? _.vars.targets : g, y = t._overwrite === "auto" && !I, b = t.timeline, x = i.easeReverse || d, S, C, w, T, E, D, O, k, A, j, M, ee, N;
	if (b && (!f || !a) && (a = "none"), t._ease = Kn(a, pe.ease), t._rEase = x && (Kn(x) || t._ease), t._from = !b && !!i.runBackwards, t._from && (t.ratio = 1), !b || f && !i.stagger) {
		if (k = g[0] ? ct(g[0]).harness : 0, ee = k && i[k.prop], S = wt(i, Qe), h && (h._zTime < 0 && h.progress(1), n < 0 && u && s && !p ? h.render(-1, !0) : h.revert(u && m ? Xe : Ye), h._lazy = 0), o) {
			if (kt(t._startAt = pr.set(g, bt({
				data: "isStart",
				overwrite: !1,
				parent: _,
				immediateRender: !0,
				lazy: !h && we(c),
				startAt: null,
				delay: 0,
				onUpdate: l && function() {
					return Cn(t, "onUpdate");
				},
				stagger: 0
			}, o))), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (L || !s && !p) && t._startAt.revert(Xe), s && m && n <= 0 && r <= 0) {
				n && (t._zTime = n);
				return;
			}
		} else if (u && m && !h) {
			if (n && (s = !1), w = bt({
				overwrite: !1,
				data: "isFromStart",
				lazy: s && !h && we(c),
				immediateRender: s,
				stagger: 0,
				parent: _
			}, S), ee && (w[k.prop] = ee), kt(t._startAt = pr.set(g, w)), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (L ? t._startAt.revert(Xe) : t._startAt.render(-1, !0)), t._zTime = n, !s) e(t._startAt, z, z);
			else if (!n) return;
		}
		for (t._pt = t._ptCache = 0, c = m && we(c) || c && !m, C = 0; C < g.length; C++) {
			if (E = g[C], O = E._gsap || st(g)[C]._gsap, t._ptLookup[C] = j = {}, et[O.id] && $e.length && ht(), M = v === g ? C : v.indexOf(E), k && (A = new k()).init(E, ee || S, t, M, v) !== !1 && (t._pt = T = new Dr(t._pt, E, A.name, 0, 1, A.render, A, 0, A.priority), A._props.forEach(function(e) {
				j[e] = T;
			}), A.priority && (D = 1)), !k || ee) for (w in S) nt[w] && (A = rr(w, S, t, M, E, v)) ? A.priority && (D = 1) : j[w] = T = tr.call(t, E, w, "get", S[w], M, v, 0, i.stringFilter);
			t._op && t._op[C] && t.kill(E, t._op[C]), y && t._pt && (ir = t, Le.killTweensOf(E, j, t.globalTime(n)), N = !t.parent, ir = 0), t._pt && c && (et[O.id] = 1);
		}
		D && Er(t), t._onInit && t._onInit(t);
	}
	t._onUpdate = l, t._initted = (!t._op || t._pt) && !N, f && n <= 0 && b.render(me, !0, !0);
}, sr = function(e, t, n, r, i, a, o, s) {
	var c = (e._pt && e._ptCache || (e._ptCache = {}))[t], l, u, d, f;
	if (!c) for (c = e._ptCache[t] = [], d = e._ptLookup, f = e._targets.length; f--;) {
		if (l = d[f][t], l && l.d && l.d._pt) for (l = l.d._pt; l && l.p !== t && l.fp !== t;) l = l._next;
		if (!l) return ar = 1, e.vars[t] = "+=0", or(e, o), ar = 0, s ? Ke(t + " not eligible for reset. Try splitting into individual properties") : 1;
		c.push(l);
	}
	for (f = c.length; f--;) u = c[f], l = u._pt || u, l.s = (r || r === 0) && !i ? r : l.s + (r || 0) + a * l.c, l.c = n - l.s, u.e && (u.e = dt(n) + en(u.e)), u.b && (u.b = l.s + en(u.b));
}, cr = function(e, t) {
	var n = e[0] ? ct(e[0]).harness : 0, r = n && n.aliases, i, a, o, s;
	if (!r) return t;
	for (a in i = St({}, t), r) if (a in i) for (s = r[a].split(","), o = s.length; o--;) i[s[o]] = i[a];
	return i;
}, lr = function(e, t, n, r) {
	var i = t.ease || r || "power1.inOut", a, o;
	if (Oe(t)) o = n[e] || (n[e] = []), t.forEach(function(e, n) {
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
}, ur = function(e, t, n, r, i) {
	return V(e) ? e.call(t, n, r, i) : be(e) && ~e.indexOf("random(") ? yn(e) : e;
}, dr = ot + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", fr = {};
ut(dr + ",id,stagger,delay,duration,paused,scrollTrigger", function(e) {
	return fr[e] = 1;
});
var pr = /*#__PURE__*/ function(e) {
	F(t, e);
	function t(t, n, r, i) {
		var a;
		typeof n == "number" && (r.duration = n, n = r, r = null), a = e.call(this, i ? n : Tt(n)) || this;
		var o = a.vars, s = o.duration, c = o.delay, l = o.immediateRender, u = o.stagger, d = o.overwrite, f = o.keyframes, p = o.defaults, m = o.scrollTrigger, h = n.parent || Le, g = (Oe(t) || De(t) ? xe(t[0]) : "length" in n) ? [t] : on(t), _, v, y, b, x, S, C, w;
		if (a._targets = g.length ? st(g) : Ke("GSAP target " + t + " not found. https://gsap.com", !fe.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d, f || u || Ee(s) || Ee(c)) {
			n = a.vars;
			var T = n.easeReverse || n.yoyoEase;
			if (_ = a.timeline = new $n({
				data: "nested",
				defaults: p || {},
				targets: h && h.data === "nested" ? h.vars.targets : g
			}), _.kill(), _.parent = _._dp = de(a), _._start = 0, u || Ee(s) || Ee(c)) {
				if (b = g.length, C = u && ln(u), Ce(u)) for (x in u) ~dr.indexOf(x) && (w ||= {}, w[x] = u[x]);
				for (v = 0; v < b; v++) y = wt(n, fr), y.stagger = 0, T && (y.easeReverse = T), w && St(y, w), S = g[v], y.duration = +ur(s, de(a), v, S, g), y.delay = (+ur(c, de(a), v, S, g) || 0) - a._delay, !u && b === 1 && y.delay && (a._delay = c = y.delay, a._start += c, y.delay = 0), _.to(S, y, C ? C(v, S, g) : 0), _._ease = U.none;
				_.duration() ? s = c = 0 : a.timeline = 0;
			} else if (f) {
				Tt(bt(_.vars.defaults, { ease: "none" })), _._ease = Kn(f.ease || n.ease || "none");
				var E = 0, D, O, k;
				if (Oe(f)) f.forEach(function(e) {
					return _.to(g, e, ">");
				}), _.duration();
				else {
					for (x in y = {}, f) x === "ease" || x === "easeEach" || lr(x, f[x], y, f.easeEach);
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
		return d === !0 && !I && (ir = de(a), Le.killTweensOf(g), ir = 0), Bt(h, de(a), r), n.reversed && a.reverse(), n.paused && a.paused(!0), (l || !s && !f && a._start === ft(h._time) && we(l) && Nt(de(a)) && h.data !== "nested") && (a._tTime = -z, a.render(Math.max(0, -c) || 0)), m && Vt(de(a), m), a;
	}
	var n = t.prototype;
	return n.render = function(e, t, n) {
		var r = this._time, i = this._tDur, a = this._dur, o = e < 0, s = e > i - z && !o ? i : e < z ? 0 : e, c, l, u, d, f, p, m, h;
		if (!a) Gt(this, e, t, n);
		else if (s !== this._tTime || !e || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== o || this._lazy) {
			if (c = s, h = this.timeline, this._repeat) {
				if (d = a + this._rDelay, this._repeat < -1 && o) return this.totalTime(d * 100 + e, t, n);
				if (c = ft(s % d), s === i ? (u = this._repeat, c = a) : (f = ft(s / d), u = ~~f, u && u === f ? (c = a, u--) : c > a && (c = a)), p = this._yoyo && u & 1, p && (c = a - c), f = Ft(this._tTime, d), c === r && !n && this._initted && u === f) return this._tTime = s, this;
				u !== f && this.vars.repeatRefresh && !p && !this._lock && c !== d && this._initted && (this._lock = n = 1, this.render(ft(d * u), !0).invalidate()._lock = 0);
			}
			if (!this._initted) {
				if (Ht(this, o ? e : c, n, t, s)) return this._tTime = 0, this;
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
			if (this._from && (this.ratio = m = 1 - m), this._tTime = s, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), !r && s && !t && !f && (Cn(this, "onStart"), this._tTime !== s)) return this;
			for (l = this._pt; l;) l.r(m, l.d), l = l._next;
			h && h.render(e < 0 ? e : h._dur * h._ease(c / this._dur), t, n) || this._startAt && (this._zTime = e), this._onUpdate && !t && (o && Mt(this, e, t, n), Cn(this, "onUpdate")), this._repeat && u !== f && this.vars.onRepeat && !t && this.parent && Cn(this, "onRepeat"), (s === this._tDur || !s) && this._tTime === s && (o && !this._onUpdate && Mt(this, e, !0, !0), (e || !a) && (s === this._tDur && this._ts > 0 || !s && this._ts < 0) && kt(this, 1), !t && (!o || r) && (s || r || p) && (Cn(this, s === i ? "onComplete" : "onReverseComplete", !0), this._prom && !(s < i && this.timeScale() > 0) && this._prom()));
		}
		return this;
	}, n.targets = function() {
		return this._targets;
	}, n.invalidate = function(t) {
		return (!t || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), e.prototype.invalidate.call(this, t);
	}, n.resetTo = function(e, t, n, r, i) {
		Ln || Rn.wake(), this._ts || this.play();
		var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts), o;
		return this._initted || or(this, a), o = this._ease(a / this._dur), sr(this, e, t, n, r, o, a, i) ? this.resetTo(e, t, n, r, 1) : (Rt(this, 0), this.parent || Dt(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
	}, n.kill = function(e, t) {
		if (t === void 0 && (t = "all"), !e && (!t || t === "all")) return this._lazy = this._pt = 0, this.parent ? wn(this) : this.scrollTrigger && this.scrollTrigger.kill(!!L), this;
		if (this.timeline) {
			var n = this.timeline.totalDuration();
			return this.timeline.killTweensOf(e, t, ir && ir.vars.overwrite !== !0)._first || wn(this), this.parent && n !== this.timeline.totalDuration() && qt(this, this._dur * this.timeline._tDur / n, 0, 1), this;
		}
		var r = this._targets, i = e ? on(e) : r, a = this._ptLookup, o = this._pt, s, c, l, u, d, f, p;
		if ((!t || t === "all") && Et(r, i)) return t === "all" && (this._pt = 0), wn(this);
		for (s = this._op = this._op || [], t !== "all" && (be(t) && (d = {}, ut(t, function(e) {
			return d[e] = 1;
		}), t = d), t = cr(r, t)), p = r.length; p--;) if (~i.indexOf(r[p])) for (d in c = a[p], t === "all" ? (s[p] = t, u = c, l = {}) : (l = s[p] = s[p] || {}, u = t), u) f = c && c[d], f && ((!("kill" in f.d) || f.d.kill(d) === !0) && Ot(this, f, "_pt"), delete c[d]), l !== "all" && (l[d] = 1);
		return this._initted && !this._pt && o && wn(this), this;
	}, t.to = function(e, n) {
		return new t(e, n, arguments[2]);
	}, t.from = function(e, t) {
		return Zt(1, arguments);
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
		return Zt(2, arguments);
	}, t.set = function(e, n) {
		return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(e, n);
	}, t.killTweensOf = function(e, t, n) {
		return Le.killTweensOf(e, t, n);
	}, t;
}(Qn);
bt(pr.prototype, {
	_targets: [],
	_lazy: 0,
	_startAt: 0,
	_op: 0,
	_onInit: 0
}), ut("staggerTo,staggerFrom,staggerFromTo", function(e) {
	pr[e] = function() {
		var t = new $n(), n = nn.call(arguments, 0);
		return n.splice(e === "staggerFromTo" ? 5 : 4, 0, 0), t[e].apply(t, n);
	};
});
var mr = function(e, t, n) {
	return e[t] = n;
}, hr = function(e, t, n) {
	return e[t](n);
}, gr = function(e, t, n, r) {
	return e[t](r.fp, n);
}, _r = function(e, t, n) {
	return e.setAttribute(t, n);
}, vr = function(e, t) {
	return V(e[t]) ? hr : Se(e[t]) && e.setAttribute ? _r : mr;
}, yr = function(e, t) {
	return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, br = function(e, t) {
	return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, xr = function(e, t) {
	var n = t._pt, r = "";
	if (!e && t.b) r = t.b;
	else if (e === 1 && t.e) r = t.e;
	else {
		for (; n;) r = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + r, n = n._next;
		r += t.c;
	}
	t.set(t.t, t.p, r, t);
}, Sr = function(e, t) {
	for (var n = t._pt; n;) n.r(e, n.d), n = n._next;
}, Cr = function(e, t, n, r) {
	for (var i = this._pt, a; i;) a = i._next, i.p === r && i.modifier(e, t, n), i = a;
}, wr = function(e) {
	for (var t = this._pt, n, r; t;) r = t._next, t.p === e && !t.op || t.op === e ? Ot(this, t, "_pt") : t.dep || (n = 1), t = r;
	return !n;
}, Tr = function(e, t, n, r) {
	r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
}, Er = function(e) {
	for (var t = e._pt, n, r, i, a; t;) {
		for (n = t._next, r = i; r && r.pr > t.pr;) r = r._next;
		(t._prev = r ? r._prev : a) ? t._prev._next = t : i = t, (t._next = r) ? r._prev = t : a = t, t = n;
	}
	e._pt = i;
}, Dr = /*#__PURE__*/ function() {
	function e(e, t, n, r, i, a, o, s, c) {
		this.t = t, this.s = r, this.c = i, this.p = n, this.r = a || yr, this.d = o || this, this.set = s || mr, this.pr = c || 0, this._next = e, e && (e._prev = this);
	}
	var t = e.prototype;
	return t.modifier = function(e, t, n) {
		this.mSet = this.mSet || this.set, this.set = Tr, this.m = e, this.mt = n, this.tween = t;
	}, e;
}();
ut(ot + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(e) {
	return Qe[e] = 1;
}), Ve.TweenMax = Ve.TweenLite = pr, Ve.TimelineLite = Ve.TimelineMax = $n, Le = new $n({
	sortChildren: !1,
	defaults: pe,
	autoRemoveChildren: !0,
	id: "root",
	smoothChildTiming: !0
}), fe.stringFilter = In;
var Or = [], kr = {}, Ar = [], jr = 0, Mr = 0, Nr = function(e) {
	return (kr[e] || Ar).map(function(e) {
		return e();
	});
}, Pr = function() {
	var e = Date.now(), t = [];
	e - jr > 2 && (Nr("matchMediaInit"), Or.forEach(function(e) {
		var n = e.queries, r = e.conditions, i, a, o, s;
		for (a in n) i = Re.matchMedia(n[a]).matches, i && (o = 1), i !== r[a] && (r[a] = i, s = 1);
		s && (e.revert(), o && t.push(e));
	}), Nr("matchMediaRevert"), t.forEach(function(e) {
		return e.onMatch(e, function(t) {
			return e.add(null, t);
		});
	}), jr = e, Nr("matchMedia"));
}, Fr = /*#__PURE__*/ function() {
	function e(e, t) {
		this.selector = t && sn(t), this.data = [], this._r = [], this.isReverted = !1, this.id = Mr++, e && this.add(e);
	}
	var t = e.prototype;
	return t.add = function(e, t, n) {
		V(e) && (n = t, t = e, e = V);
		var r = this, i = function() {
			var e = R, i = r.selector, a;
			return e && e !== r && e.data.push(r), n && (r.selector = sn(n)), R = r, a = t.apply(r, arguments), V(a) && r._r.push(a), R = e, r.selector = i, r.isReverted = !1, a;
		};
		return r.last = i, e === V ? i(r, function(e) {
			return r.add(null, e);
		}) : e ? r[e] = i : i;
	}, t.ignore = function(e) {
		var t = R;
		R = null, e(this), R = t;
	}, t.getTweens = function() {
		var t = [];
		return this.data.forEach(function(n) {
			return n instanceof e ? t.push.apply(t, n.getTweens()) : n instanceof pr && !(n.parent && n.parent.data === "nested") && t.push(n);
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
			}), r = n.data.length; r--;) i = n.data[r], i instanceof $n ? i.data !== "nested" && (i.scrollTrigger && i.scrollTrigger.revert(), i.kill()) : !(i instanceof pr) && i.revert && i.revert(e);
			n._r.forEach(function(t) {
				return t(e, n);
			}), n.isReverted = !0;
		})() : this.data.forEach(function(e) {
			return e.kill && e.kill();
		}), this.clear(), t) for (var r = Or.length; r--;) Or[r].id === this.id && Or.splice(r, 1);
	}, t.revert = function(e) {
		this.kill(e || {});
	}, e;
}(), Ir = /*#__PURE__*/ function() {
	function e(e) {
		this.contexts = [], this.scope = e, R && R.data.push(this);
	}
	var t = e.prototype;
	return t.add = function(e, t, n) {
		Ce(e) || (e = { matches: e });
		var r = new Fr(0, n || this.scope), i = r.conditions = {}, a, o, s;
		for (o in R && !r.selector && (r.selector = R.selector), this.contexts.push(r), t = r.add("onMatch", t), r.queries = e, e) o === "all" ? s = 1 : (a = Re.matchMedia(e[o]), a && (Or.indexOf(r) < 0 && Or.push(r), (i[o] = a.matches) && (s = 1), a.addListener ? a.addListener(Pr) : a.addEventListener("change", Pr)));
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
}(), Lr = {
	registerPlugin: function() {
		[...arguments].forEach(function(e) {
			return Dn(e);
		});
	},
	timeline: function(e) {
		return new $n(e);
	},
	getTweensOf: function(e, t) {
		return Le.getTweensOf(e, t);
	},
	getProperty: function(e, t, n, r) {
		be(e) && (e = on(e)[0]);
		var i = ct(e || {}).get, a = n ? yt : vt;
		return n === "native" && (n = ""), e && (t ? a((nt[t] && nt[t].get || i)(e, t, n, r)) : function(t, n, r) {
			return a((nt[t] && nt[t].get || i)(e, t, n, r));
		});
	},
	quickSetter: function(e, t, n) {
		if (e = on(e), e.length > 1) {
			var r = e.map(function(e) {
				return Vr.quickSetter(e, t, n);
			}), i = r.length;
			return function(e) {
				for (var t = i; t--;) r[t](e);
			};
		}
		e = e[0] || {};
		var a = nt[t], o = ct(e), s = o.harness && (o.harness.aliases || {})[t] || t, c = a ? function(t) {
			var r = new a();
			Tn._pt = 0, r.init(e, n ? t + n : t, Tn, 0, [e]), r.render(1, r), Tn._pt && Sr(1, Tn);
		} : o.set(e, s);
		return a ? c : function(t) {
			return c(e, s, n ? t + n : t, o, 1);
		};
	},
	quickTo: function(e, t, n) {
		var r, i = Vr.to(e, bt((r = {}, r[t] = "+=0.1", r.paused = !0, r.stagger = 0, r), n || {})), a = function(e, n, r) {
			return i.resetTo(t, e, n, r);
		};
		return a.tween = i, a;
	},
	isTweening: function(e) {
		return Le.getTweensOf(e, !0).length > 0;
	},
	defaults: function(e) {
		return e && e.ease && (e.ease = Kn(e.ease, pe.ease)), Ct(pe, e || {});
	},
	config: function(e) {
		return Ct(fe, e || {});
	},
	registerEffect: function(e) {
		var t = e.name, n = e.effect, r = e.plugins, i = e.defaults, a = e.extendTimeline;
		(r || "").split(",").forEach(function(e) {
			return e && !nt[e] && !Ve[e] && Ke(t + " effect requires " + e + " plugin.");
		}), rt[t] = function(e, t, r) {
			return n(on(e), bt(t || {}, i), r);
		}, a && ($n.prototype[t] = function(e, n, r) {
			return this.add(rt[t](e, Ce(n) ? n : (r = n) && {}, this), r);
		});
	},
	registerEase: function(e, t) {
		U[e] = Kn(t);
	},
	parseEase: function(e, t) {
		return arguments.length ? Kn(e, t) : U;
	},
	getById: function(e) {
		return Le.getById(e);
	},
	exportRoot: function(e, t) {
		e === void 0 && (e = {});
		var n = new $n(e), r, i;
		for (n.smoothChildTiming = we(e.smoothChildTiming), Le.remove(n), n._dp = 0, n._time = n._tTime = Le._time, r = Le._first; r;) i = r._next, (t || !(!r._dur && r instanceof pr && r.vars.onComplete === r._targets[0])) && Bt(n, r, r._start - r._delay), r = i;
		return Bt(Le, n, 0), n;
	},
	context: function(e, t) {
		return e ? new Fr(e, t) : R;
	},
	matchMedia: function(e) {
		return new Ir(e);
	},
	matchMediaRefresh: function() {
		return Or.forEach(function(e) {
			var t = e.conditions, n, r;
			for (r in t) t[r] && (t[r] = !1, n = 1);
			n && e.revert();
		}) || Pr();
	},
	addEventListener: function(e, t) {
		var n = kr[e] || (kr[e] = []);
		~n.indexOf(t) || n.push(t);
	},
	removeEventListener: function(e, t) {
		var n = kr[e], r = n && n.indexOf(t);
		r >= 0 && n.splice(r, 1);
	},
	utils: {
		wrap: _n,
		wrapYoyo: vn,
		distribute: ln,
		random: fn,
		snap: dn,
		normalize: hn,
		getUnit: en,
		clamp: tn,
		splitColor: jn,
		toArray: on,
		selector: sn,
		mapRange: bn,
		pipe: pn,
		unitize: mn,
		interpolate: xn,
		shuffle: cn
	},
	install: We,
	effects: rt,
	ticker: Rn,
	updateRoot: $n.updateRoot,
	plugins: nt,
	globalTimeline: Le,
	core: {
		PropTween: Dr,
		globals: qe,
		Tween: pr,
		Timeline: $n,
		Animation: Qn,
		getCache: ct,
		_removeLinkedListItem: Ot,
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
ut("to,from,fromTo,delayedCall,set,killTweensOf", function(e) {
	return Lr[e] = pr[e];
}), Rn.add($n.updateRoot), Tn = Lr.to({}, { duration: 0 });
var Rr = function(e, t) {
	for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;) n = n._next;
	return n;
}, zr = function(e, t) {
	var n = e._targets, r, i, a;
	for (r in t) for (i = n.length; i--;) a = e._ptLookup[i][r], (a &&= a.d) && (a._pt && (a = Rr(a, r)), a && a.modifier && a.modifier(t[r], e, n[i], r));
}, Br = function(e, t) {
	return {
		name: e,
		headless: 1,
		rawVars: 1,
		init: function(e, n, r) {
			r._onInit = function(e) {
				var r, i;
				if (be(n) && (r = {}, ut(n, function(e) {
					return r[e] = 1;
				}), n = r), t) {
					for (i in r = {}, n) r[i] = t(n[i]);
					n = r;
				}
				zr(e, n);
			};
		}
	};
}, Vr = Lr.registerPlugin({
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
}, Br("roundProps", un), Br("modifiers"), Br("snap", dn)) || Lr;
pr.version = $n.version = Vr.version = "3.15.0", Ue = 1, Te() && zn(), U.Power0, U.Power1, U.Power2, U.Power3, U.Power4, U.Linear, U.Quad, U.Cubic, U.Quart, U.Quint, U.Strong, U.Elastic, U.Back, U.SteppedEase, U.Bounce, U.Sine, U.Expo, U.Circ;
//#endregion
//#region ../../../../Downloads/Portfolio-component-lab/node_modules/gsap/CSSPlugin.js
var Hr, Ur, Wr, Gr, Kr, qr, Jr, Yr = function() {
	return typeof window < "u";
}, Xr = {}, Zr = 180 / Math.PI, Qr = Math.PI / 180, $r = Math.atan2, ei = 1e8, ti = /([A-Z])/g, ni = /(left|right|width|margin|padding|x)/i, ri = /[\s,\(]\S/, ii = {
	autoAlpha: "opacity,visibility",
	scale: "scaleX,scaleY",
	alpha: "opacity"
}, ai = function(e, t) {
	return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, oi = function(e, t) {
	return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, si = function(e, t) {
	return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, ci = function(e, t) {
	return t.set(t.t, t.p, e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, li = function(e, t) {
	var n = t.s + t.c * e;
	t.set(t.t, t.p, ~~(n + (n < 0 ? -.5 : .5)) + t.u, t);
}, ui = function(e, t) {
	return t.set(t.t, t.p, e ? t.e : t.b, t);
}, di = function(e, t) {
	return t.set(t.t, t.p, e === 1 ? t.e : t.b, t);
}, fi = function(e, t, n) {
	return e.style[t] = n;
}, pi = function(e, t, n) {
	return e.style.setProperty(t, n);
}, mi = function(e, t, n) {
	return e._gsap[t] = n;
}, hi = function(e, t, n) {
	return e._gsap.scaleX = e._gsap.scaleY = n;
}, gi = function(e, t, n, r, i) {
	var a = e._gsap;
	a.scaleX = a.scaleY = n, a.renderTransform(i, a);
}, _i = function(e, t, n, r, i) {
	var a = e._gsap;
	a[t] = n, a.renderTransform(i, a);
}, vi = "transform", yi = vi + "Origin", bi = function e(t, n) {
	var r = this, i = this.target, a = i.style, o = i._gsap;
	if (t in Xr && a) {
		if (this.tfm = this.tfm || {}, t !== "transform") t = ii[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(e) {
			return r.tfm[e] = zi(i, e);
		}) : this.tfm[t] = o.x ? o[t] : zi(i, t), t === yi && (this.tfm.zOrigin = o.zOrigin);
		else return ii.transform.split(",").forEach(function(t) {
			return e.call(r, t, n);
		});
		if (this.props.indexOf(vi) >= 0) return;
		o.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(yi, n, "")), t = vi;
	}
	(a || n) && this.props.push(t, n, a[t]);
}, xi = function(e) {
	e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, Si = function() {
	for (var e = this.props, t = this.target, n = t.style, r = t._gsap, i = 0, a; i < e.length; i += 3) e[i + 1] ? e[i + 1] === 2 ? t[e[i]](e[i + 2]) : t[e[i]] = e[i + 2] : e[i + 2] ? n[e[i]] = e[i + 2] : n.removeProperty(e[i].substr(0, 2) === "--" ? e[i] : e[i].replace(ti, "-$1").toLowerCase());
	if (this.tfm) {
		for (a in this.tfm) r[a] = this.tfm[a];
		r.svg && (r.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), i = Jr(), (!i || !i.isStart) && !n[vi] && (xi(n), r.zOrigin && n[yi] && (n[yi] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
	}
}, Ci = function(e, t) {
	var n = {
		target: e,
		props: [],
		revert: Si,
		save: bi
	};
	return e._gsap || Vr.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(e) {
		return n.save(e);
	}), n;
}, wi, Ti = function(e, t) {
	var n = Ur.createElementNS ? Ur.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Ur.createElement(e);
	return n && n.style ? n : Ur.createElement(e);
}, Ei = function e(t, n, r) {
	var i = getComputedStyle(t);
	return i[n] || i.getPropertyValue(n.replace(ti, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && e(t, Oi(n) || n, 1) || "";
}, Di = "O,Moz,ms,Ms,Webkit".split(","), Oi = function(e, t, n) {
	var r = (t || Kr).style, i = 5;
	if (e in r && !n) return e;
	for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(Di[i] + e in r););
	return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? Di[i] : "") + e;
}, ki = function() {
	Yr() && window.document && (Hr = window, Ur = Hr.document, Wr = Ur.documentElement, Kr = Ti("div") || { style: {} }, Ti("div"), vi = Oi(vi), yi = vi + "Origin", Kr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", wi = !!Oi("perspective"), Jr = Vr.core.reverting, Gr = 1);
}, Ai = function(e) {
	var t = e.ownerSVGElement, n = Ti("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = e.cloneNode(!0), i;
	r.style.display = "block", n.appendChild(r), Wr.appendChild(n);
	try {
		i = r.getBBox();
	} catch {}
	return n.removeChild(r), Wr.removeChild(n), i;
}, ji = function(e, t) {
	for (var n = t.length; n--;) if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
}, Mi = function(e) {
	var t, n;
	try {
		t = e.getBBox();
	} catch {
		t = Ai(e), n = 1;
	}
	return t && (t.width || t.height) || n || (t = Ai(e)), t && !t.width && !t.x && !t.y ? {
		x: +ji(e, [
			"x",
			"cx",
			"x1"
		]) || 0,
		y: +ji(e, [
			"y",
			"cy",
			"y1"
		]) || 0,
		width: 0,
		height: 0
	} : t;
}, Ni = function(e) {
	return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !Mi(e));
}, Pi = function(e, t) {
	if (t) {
		var n = e.style, r;
		t in Xr && t !== yi && (t = vi), n.removeProperty ? (r = t.substr(0, 2), (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), n.removeProperty(r === "--" ? t : t.replace(ti, "-$1").toLowerCase())) : n.removeAttribute(t);
	}
}, Fi = function(e, t, n, r, i, a) {
	var o = new Dr(e._pt, t, n, 0, 1, a ? di : ui);
	return e._pt = o, o.b = r, o.e = i, e._props.push(n), o;
}, Ii = {
	deg: 1,
	rad: 1,
	turn: 1
}, Li = {
	grid: 1,
	flex: 1
}, Ri = function e(t, n, r, i) {
	var a = parseFloat(r) || 0, o = (r + "").trim().substr((a + "").length) || "px", s = Kr.style, c = ni.test(n), l = t.tagName.toLowerCase() === "svg", u = (l ? "client" : "offset") + (c ? "Width" : "Height"), d = 100, f = i === "px", p = i === "%", m, h, g, _;
	if (i === o || !a || Ii[i] || Ii[o]) return a;
	if (o !== "px" && !f && (a = e(t, n, r, "px")), _ = t.getCTM && Ni(t), (p || o === "%") && (Xr[n] || ~n.indexOf("adius"))) return m = _ ? t.getBBox()[c ? "width" : "height"] : t[u], dt(p ? a / m * d : a / 100 * m);
	if (s[c ? "width" : "height"] = d + (f ? o : i), h = i !== "rem" && ~n.indexOf("adius") || i === "em" && t.appendChild && !l ? t : t.parentNode, _ && (h = (t.ownerSVGElement || {}).parentNode), (!h || h === Ur || !h.appendChild) && (h = Ur.body), g = h._gsap, g && p && g.width && c && g.time === Rn.time && !g.uncache) return dt(a / g.width * d);
	if (p && (n === "height" || n === "width")) {
		var v = t.style[n];
		t.style[n] = d + i, m = t[u], v ? t.style[n] = v : Pi(t, n);
	} else (p || o === "%") && !Li[Ei(h, "display")] && (s.position = Ei(t, "position")), h === t && (s.position = "static"), h.appendChild(Kr), m = Kr[u], h.removeChild(Kr), s.position = "absolute";
	return c && p && (g = ct(h), g.time = Rn.time, g.width = h[u]), dt(f ? m * a / d : m && a ? d / m * a : 0);
}, zi = function(e, t, n, r) {
	var i;
	return Gr || ki(), t in ii && t !== "transform" && (t = ii[t], ~t.indexOf(",") && (t = t.split(",")[0])), Xr[t] && t !== "transform" ? (i = Zi(e, r), i = t === "transformOrigin" ? i.svg ? i.origin : Qi(Ei(e, yi)) + " " + i.zOrigin + "px" : i[t]) : (i = e.style[t], (!i || i === "auto" || r || ~(i + "").indexOf("calc(")) && (i = Wi[t] && Wi[t](e, t, n) || Ei(e, t) || lt(e, t) || +(t === "opacity"))), n && !~(i + "").trim().indexOf(" ") ? Ri(e, t, i, n) + n : i;
}, Bi = function(e, t, n, r) {
	if (!n || n === "none") {
		var i = Oi(t, e, 1), a = i && Ei(e, i, 1);
		a && a !== n ? (t = i, n = a) : t === "borderColor" && (n = Ei(e, "borderTopColor"));
	}
	var o = new Dr(this._pt, e.style, t, 0, 1, xr), s = 0, c = 0, l, u, d, f, p, m, h, g, _, v, y, b;
	if (o.b = n, o.e = r, n += "", r += "", r.substring(0, 6) === "var(--" && (r = Ei(e, r.substring(4, r.indexOf(")")))), r === "auto" && (m = e.style[t], e.style[t] = r, r = Ei(e, t) || r, m ? e.style[t] = m : Pi(e, t)), l = [n, r], In(l), n = l[0], r = l[1], d = n.match(Me) || [], b = r.match(Me) || [], b.length) {
		for (; u = Me.exec(r);) h = u[0], _ = r.substring(s, u.index), p ? p = (p + 1) % 5 : (_.substr(-5) === "rgba(" || _.substr(-5) === "hsla(") && (p = 1), h !== (m = d[c++] || "") && (f = parseFloat(m) || 0, y = m.substr((f + "").length), h.charAt(1) === "=" && (h = pt(f, h) + y), g = parseFloat(h), v = h.substr((g + "").length), s = Me.lastIndex - v.length, v || (v = v || fe.units[t] || y, s === r.length && (r += v, o.e += v)), y !== v && (f = Ri(e, t, m, v) || 0), o._pt = {
			_next: o._pt,
			p: _ || c === 1 ? _ : ",",
			s: f,
			c: g - f,
			m: p && p < 4 || t === "zIndex" ? Math.round : 0
		});
		o.c = s < r.length ? r.substring(s, r.length) : "";
	} else o.r = t === "display" && r === "none" ? di : ui;
	return Pe.test(r) && (o.e = 0), this._pt = o, o;
}, Vi = {
	top: "0%",
	bottom: "100%",
	left: "0%",
	right: "100%",
	center: "50%"
}, Hi = function(e) {
	var t = e.split(" "), n = t[0], r = t[1] || "50%";
	return (n === "top" || n === "bottom" || r === "left" || r === "right") && (e = n, n = r, r = e), t[0] = Vi[n] || n, t[1] = Vi[r] || r, t.join(" ");
}, Ui = function(e, t) {
	if (t.tween && t.tween._time === t.tween._dur) {
		var n = t.t, r = n.style, i = t.u, a = n._gsap, o, s, c;
		if (i === "all" || i === !0) r.cssText = "", s = 1;
		else for (i = i.split(","), c = i.length; --c > -1;) o = i[c], Xr[o] && (s = 1, o = o === "transformOrigin" ? yi : vi), Pi(n, o);
		s && (Pi(n, vi), a && (a.svg && n.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", Zi(n, 1), a.uncache = 1, xi(r)));
	}
}, Wi = { clearProps: function(e, t, n, r, i) {
	if (i.data !== "isFromStart") {
		var a = e._pt = new Dr(e._pt, t, n, 0, 0, Ui);
		return a.u = r, a.pr = -10, a.tween = i, e._props.push(n), 1;
	}
} }, Gi = [
	1,
	0,
	0,
	1,
	0,
	0
], Ki = {}, qi = function(e) {
	return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, Ji = function(e) {
	var t = Ei(e, vi);
	return qi(t) ? Gi : t.substr(7).match(je).map(dt);
}, Yi = function(e, t) {
	var n = e._gsap || ct(e), r = e.style, i = Ji(e), a, o, s, c;
	return n.svg && e.getAttribute("transform") ? (s = e.transform.baseVal.consolidate().matrix, i = [
		s.a,
		s.b,
		s.c,
		s.d,
		s.e,
		s.f
	], i.join(",") === "1,0,0,1,0,0" ? Gi : i) : (i === Gi && !e.offsetParent && e !== Wr && !n.svg && (s = r.display, r.display = "block", a = e.parentNode, (!a || !e.offsetParent && !e.getBoundingClientRect().width) && (c = 1, o = e.nextElementSibling, Wr.appendChild(e)), i = Ji(e), s ? r.display = s : Pi(e, "display"), c && (o ? a.insertBefore(e, o) : a ? a.appendChild(e) : Wr.removeChild(e))), t && i.length > 6 ? [
		i[0],
		i[1],
		i[4],
		i[5],
		i[12],
		i[13]
	] : i);
}, Xi = function(e, t, n, r, i, a) {
	var o = e._gsap, s = i || Yi(e, !0), c = o.xOrigin || 0, l = o.yOrigin || 0, u = o.xOffset || 0, d = o.yOffset || 0, f = s[0], p = s[1], m = s[2], h = s[3], g = s[4], _ = s[5], v = t.split(" "), y = parseFloat(v[0]) || 0, b = parseFloat(v[1]) || 0, x, S, C, w;
	n ? s !== Gi && (S = f * h - p * m) && (C = h / S * y + b * (-m / S) + (m * _ - h * g) / S, w = y * (-p / S) + f / S * b - (f * _ - p * g) / S, y = C, b = w) : (x = Mi(e), y = x.x + (~v[0].indexOf("%") ? y / 100 * x.width : y), b = x.y + (~(v[1] || v[0]).indexOf("%") ? b / 100 * x.height : b)), r || r !== !1 && o.smooth ? (g = y - c, _ = b - l, o.xOffset = u + (g * f + _ * m) - g, o.yOffset = d + (g * p + _ * h) - _) : o.xOffset = o.yOffset = 0, o.xOrigin = y, o.yOrigin = b, o.smooth = !!r, o.origin = t, o.originIsAbsolute = !!n, e.style[yi] = "0px 0px", a && (Fi(a, o, "xOrigin", c, y), Fi(a, o, "yOrigin", l, b), Fi(a, o, "xOffset", u, o.xOffset), Fi(a, o, "yOffset", d, o.yOffset)), e.setAttribute("data-svg-origin", y + " " + b);
}, Zi = function(e, t) {
	var n = e._gsap || new Zn(e);
	if ("x" in n && !t && !n.uncache) return n;
	var r = e.style, i = n.scaleX < 0, a = "px", o = "deg", s = getComputedStyle(e), c = Ei(e, yi) || "0", l = u = d = m = h = g = _ = v = y = 0, u, d, f = p = 1, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A, j, M, ee, N, P, te, ne, re, ie, ae;
	return n.svg = !!(e.getCTM && Ni(e)), s.translate && ((s.translate !== "none" || s.scale !== "none" || s.rotate !== "none") && (r[vi] = (s.translate === "none" ? "" : "translate3d(" + (s.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") ") + (s.rotate === "none" ? "" : "rotate(" + s.rotate + ") ") + (s.scale === "none" ? "" : "scale(" + s.scale.split(" ").join(",") + ") ") + (s[vi] === "none" ? "" : s[vi])), r.scale = r.rotate = r.translate = "none"), S = Yi(e, n.svg), n.svg && (n.uncache ? (ee = e.getBBox(), c = n.xOrigin - ee.x + "px " + (n.yOrigin - ee.y) + "px", M = "") : M = !t && e.getAttribute("data-svg-origin"), Xi(e, M || c, !!M || n.originIsAbsolute, n.smooth !== !1, S)), b = n.xOrigin || 0, x = n.yOrigin || 0, S !== Gi && (E = S[0], D = S[1], O = S[2], k = S[3], l = A = S[4], u = j = S[5], S.length === 6 ? (f = Math.sqrt(E * E + D * D), p = Math.sqrt(k * k + O * O), m = E || D ? $r(D, E) * Zr : 0, _ = O || k ? $r(O, k) * Zr + m : 0, _ && (p *= Math.abs(Math.cos(_ * Qr))), n.svg && (l -= b - (b * E + x * O), u -= x - (b * D + x * k))) : (ae = S[6], re = S[7], P = S[8], te = S[9], ne = S[10], ie = S[11], l = S[12], u = S[13], d = S[14], C = $r(ae, ne), h = C * Zr, C && (w = Math.cos(-C), T = Math.sin(-C), M = A * w + P * T, ee = j * w + te * T, N = ae * w + ne * T, P = A * -T + P * w, te = j * -T + te * w, ne = ae * -T + ne * w, ie = re * -T + ie * w, A = M, j = ee, ae = N), C = $r(-O, ne), g = C * Zr, C && (w = Math.cos(-C), T = Math.sin(-C), M = E * w - P * T, ee = D * w - te * T, N = O * w - ne * T, ie = k * T + ie * w, E = M, D = ee, O = N), C = $r(D, E), m = C * Zr, C && (w = Math.cos(C), T = Math.sin(C), M = E * w + D * T, ee = A * w + j * T, D = D * w - E * T, j = j * w - A * T, E = M, A = ee), h && Math.abs(h) + Math.abs(m) > 359.9 && (h = m = 0, g = 180 - g), f = dt(Math.sqrt(E * E + D * D + O * O)), p = dt(Math.sqrt(j * j + ae * ae)), C = $r(A, j), _ = Math.abs(C) > 2e-4 ? C * Zr : 0, y = ie ? 1 / (ie < 0 ? -ie : ie) : 0), n.svg && (M = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !qi(Ei(e, vi)), M && e.setAttribute("transform", M))), Math.abs(_) > 90 && Math.abs(_) < 270 && (i ? (f *= -1, _ += m <= 0 ? 180 : -180, m += m <= 0 ? 180 : -180) : (p *= -1, _ += _ <= 0 ? 180 : -180)), t ||= n.uncache, n.x = l - ((n.xPercent = l && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-l) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + a, n.y = u - ((n.yPercent = u && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + a, n.z = d + a, n.scaleX = dt(f), n.scaleY = dt(p), n.rotation = dt(m) + o, n.rotationX = dt(h) + o, n.rotationY = dt(g) + o, n.skewX = _ + o, n.skewY = v + o, n.transformPerspective = y + a, (n.zOrigin = parseFloat(c.split(" ")[2]) || !t && n.zOrigin || 0) && (r[yi] = Qi(c)), n.xOffset = n.yOffset = 0, n.force3D = fe.force3D, n.renderTransform = n.svg ? ia : wi ? ra : ea, n.uncache = 0, n;
}, Qi = function(e) {
	return (e = e.split(" "))[0] + " " + e[1];
}, $i = function(e, t, n) {
	var r = en(t);
	return dt(parseFloat(t) + parseFloat(Ri(e, "x", n + "px", r))) + r;
}, ea = function(e, t) {
	t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, ra(e, t);
}, W = "0deg", ta = "0px", na = ") ", ra = function(e, t) {
	var n = t || this, r = n.xPercent, i = n.yPercent, a = n.x, o = n.y, s = n.z, c = n.rotation, l = n.rotationY, u = n.rotationX, d = n.skewX, f = n.skewY, p = n.scaleX, m = n.scaleY, h = n.transformPerspective, g = n.force3D, _ = n.target, v = n.zOrigin, y = "", b = g === "auto" && e && e !== 1 || g === !0;
	if (v && (u !== W || l !== W)) {
		var x = parseFloat(l) * Qr, S = Math.sin(x), C = Math.cos(x), w;
		x = parseFloat(u) * Qr, w = Math.cos(x), a = $i(_, a, S * w * -v), o = $i(_, o, -Math.sin(x) * -v), s = $i(_, s, C * w * -v + v);
	}
	h !== ta && (y += "perspective(" + h + na), (r || i) && (y += "translate(" + r + "%, " + i + "%) "), (b || a !== ta || o !== ta || s !== ta) && (y += s !== ta || b ? "translate3d(" + a + ", " + o + ", " + s + ") " : "translate(" + a + ", " + o + na), c !== W && (y += "rotate(" + c + na), l !== W && (y += "rotateY(" + l + na), u !== W && (y += "rotateX(" + u + na), (d !== W || f !== W) && (y += "skew(" + d + ", " + f + na), (p !== 1 || m !== 1) && (y += "scale(" + p + ", " + m + na), _.style[vi] = y || "translate(0, 0)";
}, ia = function(e, t) {
	var n = t || this, r = n.xPercent, i = n.yPercent, a = n.x, o = n.y, s = n.rotation, c = n.skewX, l = n.skewY, u = n.scaleX, d = n.scaleY, f = n.target, p = n.xOrigin, m = n.yOrigin, h = n.xOffset, g = n.yOffset, _ = n.forceCSS, v = parseFloat(a), y = parseFloat(o), b, x, S, C, w;
	s = parseFloat(s), c = parseFloat(c), l = parseFloat(l), l && (l = parseFloat(l), c += l, s += l), s || c ? (s *= Qr, c *= Qr, b = Math.cos(s) * u, x = Math.sin(s) * u, S = Math.sin(s - c) * -d, C = Math.cos(s - c) * d, c && (l *= Qr, w = Math.tan(c - l), w = Math.sqrt(1 + w * w), S *= w, C *= w, l && (w = Math.tan(l), w = Math.sqrt(1 + w * w), b *= w, x *= w)), b = dt(b), x = dt(x), S = dt(S), C = dt(C)) : (b = u, C = d, x = S = 0), (v && !~(a + "").indexOf("px") || y && !~(o + "").indexOf("px")) && (v = Ri(f, "x", a, "px"), y = Ri(f, "y", o, "px")), (p || m || h || g) && (v = dt(v + p - (p * b + m * S) + h), y = dt(y + m - (p * x + m * C) + g)), (r || i) && (w = f.getBBox(), v = dt(v + r / 100 * w.width), y = dt(y + i / 100 * w.height)), w = "matrix(" + b + "," + x + "," + S + "," + C + "," + v + "," + y + ")", f.setAttribute("transform", w), _ && (f.style[vi] = w);
}, aa = function(e, t, n, r, i) {
	var a = 360, o = be(i), s = parseFloat(i) * (o && ~i.indexOf("rad") ? Zr : 1) - r, c = r + s + "deg", l, u;
	return o && (l = i.split("_")[1], l === "short" && (s %= a, s !== s % (a / 2) && (s += s < 0 ? a : -a)), l === "cw" && s < 0 ? s = (s + a * ei) % a - ~~(s / a) * a : l === "ccw" && s > 0 && (s = (s - a * ei) % a - ~~(s / a) * a)), e._pt = u = new Dr(e._pt, t, n, r, s, oi), u.e = c, u.u = "deg", e._props.push(n), u;
}, oa = function(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}, sa = function(e, t, n) {
	var r = oa({}, n._gsap), i = "perspective,force3D,transformOrigin,svgOrigin", a = n.style, o, s, c, l, u, d, f, p;
	for (s in r.svg ? (c = n.getAttribute("transform"), n.setAttribute("transform", ""), a[vi] = t, o = Zi(n, 1), Pi(n, vi), n.setAttribute("transform", c)) : (c = getComputedStyle(n)[vi], a[vi] = t, o = Zi(n, 1), a[vi] = c), Xr) c = r[s], l = o[s], c !== l && i.indexOf(s) < 0 && (f = en(c), p = en(l), u = f === p ? parseFloat(c) : Ri(n, s, c, p), d = parseFloat(l), e._pt = new Dr(e._pt, o, s, u, d - u, ai), e._pt.u = p || 0, e._props.push(s));
	oa(o, r);
};
ut("padding,margin,Width,Radius", function(e, t) {
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
	Wi[t > 1 ? "border" + e : e] = function(e, t, n, r, i) {
		var a, s;
		if (arguments.length < 4) return a = o.map(function(t) {
			return zi(e, t, n);
		}), s = a.join(" "), s.split(a[0]).length === 5 ? a[0] : s;
		a = (r + "").split(" "), s = {}, o.forEach(function(e, t) {
			return s[e] = a[t] = a[t] || a[(t - 1) / 2 | 0];
		}), e.init(t, s, i);
	};
});
var ca = {
	name: "css",
	register: ki,
	targetTest: function(e) {
		return e.style && e.nodeType;
	},
	init: function(e, t, n, r, i) {
		var a = this._props, o = e.style, s = n.vars.startAt, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w;
		for (m in Gr || ki(), this.styles = this.styles || Ci(e), C = this.styles.props, this.tween = n, t) if (m !== "autoRound" && (l = t[m], !(nt[m] && rr(m, t, n, r, e, i)))) {
			if (f = typeof l, p = Wi[m], f === "function" && (l = l.call(n, r, e, i), f = typeof l), f === "string" && ~l.indexOf("random(") && (l = yn(l)), p) p(this, e, m, l, n) && (S = 1);
			else if (m.substr(0, 2) === "--") c = (getComputedStyle(e).getPropertyValue(m) + "").trim(), l += "", Pn.lastIndex = 0, Pn.test(c) || (h = en(c), g = en(l), g ? h !== g && (c = Ri(e, m, c, g) + g) : h && (l += h)), this.add(o, "setProperty", c, l, r, i, 0, 0, m), a.push(m), C.push(m, 0, o[m]);
			else if (f !== "undefined") {
				if (s && m in s ? (c = typeof s[m] == "function" ? s[m].call(n, r, e, i) : s[m], be(c) && ~c.indexOf("random(") && (c = yn(c)), en(c + "") || c === "auto" || (c += fe.units[m] || en(zi(e, m)) || ""), (c + "").charAt(1) === "=" && (c = zi(e, m))) : c = zi(e, m), d = parseFloat(c), _ = f === "string" && l.charAt(1) === "=" && l.substr(0, 2), _ && (l = l.substr(2)), u = parseFloat(l), m in ii && (m === "autoAlpha" && (d === 1 && zi(e, "visibility") === "hidden" && u && (d = 0), C.push("visibility", 0, o.visibility), Fi(this, o, "visibility", d ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), m !== "scale" && m !== "transform" && (m = ii[m], ~m.indexOf(",") && (m = m.split(",")[0]))), v = m in Xr, v) {
					if (this.styles.save(m), w = l, f === "string" && l.substring(0, 6) === "var(--") {
						if (l = Ei(e, l.substring(4, l.indexOf(")"))), l.substring(0, 5) === "calc(") {
							var T = e.style.perspective;
							e.style.perspective = l, l = Ei(e, "perspective"), T ? e.style.perspective = T : Pi(e, "perspective");
						}
						u = parseFloat(l);
					}
					if (y || (b = e._gsap, b.renderTransform && !t.parseTransform || Zi(e, t.parseTransform), x = t.smoothOrigin !== !1 && b.smooth, y = this._pt = new Dr(this._pt, o, vi, 0, 1, b.renderTransform, b, 0, -1), y.dep = 1), m === "scale") this._pt = new Dr(this._pt, b, "scaleY", b.scaleY, (_ ? pt(b.scaleY, _ + u) : u) - b.scaleY || 0, ai), this._pt.u = 0, a.push("scaleY", m), m += "X";
					else if (m === "transformOrigin") {
						C.push(yi, 0, o[yi]), l = Hi(l), b.svg ? Xi(e, l, 0, x, 0, this) : (g = parseFloat(l.split(" ")[2]) || 0, g !== b.zOrigin && Fi(this, b, "zOrigin", b.zOrigin, g), Fi(this, o, m, Qi(c), Qi(l)));
						continue;
					} else if (m === "svgOrigin") {
						Xi(e, l, 1, x, 0, this);
						continue;
					} else if (m in Ki) {
						aa(this, b, m, d, _ ? pt(d, _ + l) : l);
						continue;
					} else if (m === "smoothOrigin") {
						Fi(this, b, "smooth", b.smooth, l);
						continue;
					} else if (m === "force3D") {
						b[m] = l;
						continue;
					} else if (m === "transform") {
						sa(this, l, e);
						continue;
					}
				} else m in o || (m = Oi(m) || m);
				if (v || (u || u === 0) && (d || d === 0) && !ri.test(l) && m in o) h = (c + "").substr((d + "").length), u ||= 0, g = en(l) || (m in fe.units ? fe.units[m] : h), h !== g && (d = Ri(e, m, c, g)), this._pt = new Dr(this._pt, v ? b : o, m, d, (_ ? pt(d, _ + u) : u) - d, !v && (g === "px" || m === "zIndex") && t.autoRound !== !1 ? li : ai), this._pt.u = g || 0, v && w !== l ? (this._pt.b = c, this._pt.e = w, this._pt.r = ci) : h !== g && g !== "%" && (this._pt.b = c, this._pt.r = si);
				else if (m in o) Bi.call(this, e, m, c, _ ? _ + l : l);
				else if (m in e) this.add(e, m, c || e[m], _ ? _ + l : l, r, i);
				else if (m !== "parseTransform") {
					Ge(m, l);
					continue;
				}
				v || (m in o ? C.push(m, 0, o[m]) : typeof e[m] == "function" ? C.push(m, 2, e[m]()) : C.push(m, 1, c || e[m])), a.push(m);
			}
		}
		S && Er(this);
	},
	render: function(e, t) {
		if (t.tween._time || !Jr()) for (var n = t._pt; n;) n.r(e, n.d), n = n._next;
		else t.styles.revert();
	},
	get: zi,
	aliases: ii,
	getSetter: function(e, t, n) {
		var r = ii[t];
		return r && r.indexOf(",") < 0 && (t = r), t in Xr && t !== yi && (e._gsap.x || zi(e, "x")) ? n && qr === n ? t === "scale" ? hi : mi : (qr = n || {}) && (t === "scale" ? gi : _i) : e.style && !Se(e.style[t]) ? fi : ~t.indexOf("-") ? pi : vr(e, t);
	},
	core: {
		_removeProperty: Pi,
		_getMatrix: Yi
	}
};
Vr.utils.checkPrefix = Oi, Vr.core.getStyleSaver = Ci, (function(e, t, n, r) {
	var i = ut(e + "," + t + "," + n, function(e) {
		Xr[e] = 1;
	});
	ut(t, function(e) {
		fe.units[e] = "deg", Ki[e] = 1;
	}), ii[i[13]] = e + "," + t, ut(r, function(e) {
		var t = e.split(":");
		ii[t[1]] = i[t[0]];
	});
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"), ut("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
	fe.units[e] = "px";
}), Vr.registerPlugin(ca);
//#endregion
//#region ../../../../Downloads/Portfolio-component-lab/node_modules/gsap/index.js
var la = Vr.registerPlugin(ca) || Vr;
la.core.Tween;
//#endregion
//#region ../../../../Downloads/Portfolio-component-lab/node_modules/gsap/SplitText.js
var ua, da, fa = typeof Symbol == "function" ? Symbol() : "_split", pa, ma = () => pa || Na.register(window.gsap), ha = typeof Intl < "u" && "Segmenter" in Intl ? new Intl.Segmenter() : 0, ga = (e) => e ? typeof e == "string" ? ga(document.querySelectorAll(e)) : "length" in e ? Array.from(e).reduce((e, t) => (typeof t == "string" ? e.push(...ga(t)) : e.push(t), e), []) : [e] : [], _a = (e) => ga(e).filter((e) => e && e.nodeType === 1), va = [], ya = function() {}, ba = { add: (e) => e() }, xa = /\s+/g, Sa = /* @__PURE__ */ RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.", "gu"), Ca = {
	left: 0,
	top: 0,
	width: 0,
	height: 0
}, wa = (e, t) => {
	for (; ++t < e.length && e[t] === Ca;);
	return e[t] || Ca;
}, Ta = ({ element: e, html: t, ariaL: n, ariaH: r }) => {
	e.innerHTML = t, n ? e.setAttribute("aria-label", n) : e.removeAttribute("aria-label"), r ? e.setAttribute("aria-hidden", r) : e.removeAttribute("aria-hidden");
}, Ea = (e, t) => {
	if (t) {
		let n = new Set(e.join("").match(t) || va), r = e.length, i, a, o, s;
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
}, Da = (e) => window.getComputedStyle(e).display === "inline" && (e.style.display = "inline-block"), Oa = (e, t, n) => t.insertBefore(typeof e == "string" ? document.createTextNode(e) : e, n), ka = (e, t, n) => {
	let r = t[e + "sClass"] || "", { tag: i = "div", aria: a = "auto", propIndex: o = !1 } = t, s = e === "line" ? "block" : "inline-block", c = r.indexOf("++") > -1, l = (t) => {
		let l = document.createElement(i), u = n.length + 1;
		return r && (l.className = r + (c ? " " + r + u : "")), o && l.style.setProperty("--" + e, u + ""), a !== "none" && l.setAttribute("aria-hidden", "true"), i !== "span" && (l.style.position = "relative", l.style.display = s), l.textContent = t, n.push(l), l;
	};
	return c && (r = r.replace("++", "")), l.collection = n, l;
}, Aa = (e, t, n, r) => {
	let i = ka("line", n, r), a = window.getComputedStyle(e).textAlign || "left";
	return (n, r) => {
		let o = i("");
		for (o.style.textAlign = a, e.insertBefore(o, t[n]); n < r; n++) o.appendChild(t[n]);
		o.normalize();
	};
}, ja = (e, t, n, r, i, a, o, s, c, l) => {
	var u;
	let d = Array.from(e.childNodes), f = 0, { wordDelimiter: p, reduceWhiteSpace: m = !0, prepareText: h } = t, g = e.getBoundingClientRect(), _ = g, v = !m && window.getComputedStyle(e).whiteSpace.substring(0, 3) === "pre", y = 0, b = n.collection, x, S, C, w, T, E, D, O, k, A, j, M, ee, N, P, te, ne, re;
	for (typeof p == "object" ? (C = p.delimiter || p, S = p.replaceWith || "") : S = p === "" ? "" : p || " ", x = S !== " "; f < d.length; f++) if (w = d[f], w.nodeType === 3) {
		for (P = w.textContent || "", m ? P = P.replace(xa, " ") : v && (P = P.replace(/\n/g, S + "\n")), h && (P = h(P, e)), w.textContent = P, T = S || C ? P.split(C || S) : P.match(s) || va, ne = T[T.length - 1], O = x ? ne.slice(-1) === " " : !ne, ne || T.pop(), _ = g, D = x ? T[0].charAt(0) === " " : !T[0], D && Oa(" ", e, w), T[0] || T.shift(), Ea(T, c), a && l || (w.textContent = ""), k = 1; k <= T.length; k++) if (te = T[k - 1], !m && v && te.charAt(0) === "\n" && ((u = w.previousSibling) == null || u.remove(), Oa(document.createElement("br"), e, w), te = te.slice(1)), !m && te === "") Oa(S, e, w);
		else if (te === " ") e.insertBefore(document.createTextNode(" "), w);
		else {
			if (x && te.charAt(0) === " " && Oa(" ", e, w), y && k === 1 && !D && b.indexOf(y.parentNode) > -1 ? (E = b[b.length - 1], E.appendChild(document.createTextNode(r ? "" : te))) : (E = n(r ? "" : te), Oa(E, e, w), y && k === 1 && !D && E.insertBefore(y, E.firstChild)), r) for (j = ha ? Ea([...ha.segment(te)].map((e) => e.segment), c) : te.match(s) || va, re = 0; re < j.length; re++) E.appendChild(j[re] === " " ? document.createTextNode(" ") : r(j[re]));
			if (a && l) {
				if (P = w.textContent = P.substring(te.length + 1, P.length), A = E.getBoundingClientRect(), A.top > _.top && A.left <= _.left) {
					for (M = e.cloneNode(), ee = e.childNodes[0]; ee && ee !== E;) N = ee, ee = ee.nextSibling, M.appendChild(N);
					e.parentNode.insertBefore(M, e), i && Da(M);
				}
				_ = A;
			}
			(k < T.length || O) && Oa(k >= T.length ? " " : x && te.slice(-1) === " " ? " " + S : S, e, w);
		}
		e.removeChild(w), y = 0;
	} else w.nodeType === 1 && (o && o.indexOf(w) > -1 ? (b.indexOf(w.previousSibling) > -1 && b[b.length - 1].appendChild(w), y = w) : (ja(w, t, n, r, i, a, o, s, c, !0), y = 0), i && Da(w));
}, Ma = class e {
	constructor(e, t) {
		this.isSplit = !1, ma(), this.elements = _a(e), this.chars = [], this.words = [], this.lines = [], this.masks = [], this.vars = t, this.elements.forEach((e) => {
			var n;
			t.overwrite !== !1 && ((n = e[fa]) == null || n._data.orig.filter(({ element: t }) => t === e).forEach(Ta)), e[fa] = this;
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
		}, ya(this), this.split(t);
	}
	split(e) {
		return (this._ctx || ba).add(() => {
			this.isSplit && this.revert(), this.vars = e = e || this.vars || {};
			let { type: t = "chars,words,lines", aria: n = "auto", deepSlice: r = !0, smartWrap: i, onSplit: a, autoSplit: o = !1, specialChars: s, mask: c } = this.vars, l = t.indexOf("lines") > -1, u = t.indexOf("chars") > -1, d = t.indexOf("words") > -1, f = u && !d && !l, p = s && ("push" in s ? RegExp("(?:" + s.join("|") + ")", "gu") : s), m = p ? RegExp(p.source + "|" + Sa.source, "gu") : Sa, h = !!e.ignore && _a(e.ignore), { orig: g, animTime: _, obs: v } = this._data, y;
			(u || d || l) && (this.elements.forEach((t, a) => {
				g[a] = {
					element: t,
					html: t.innerHTML,
					ariaL: t.getAttribute("aria-label"),
					ariaH: t.getAttribute("aria-hidden")
				}, n === "auto" ? t.setAttribute("aria-label", (t.textContent || "").trim()) : n === "hidden" && t.setAttribute("aria-hidden", "true");
				let o = [], s = [], c = [], _ = u ? ka("char", e, o) : null, v = ka("word", e, s), y, b, x, S;
				if (ja(t, e, v, _, f, r && (l || f), h, m, p, !1), l) {
					let n = ga(t.childNodes), r = Aa(t, n, e, c), i, a = [], o = 0, s = n.map((e) => e.nodeType === 1 ? e.getBoundingClientRect() : Ca), l = Ca, u;
					for (y = 0; y < n.length; y++) i = n[y], i.nodeType === 1 && (i.nodeName === "BR" ? ((!y || n[y - 1].nodeName !== "BR") && (a.push(i), r(o, y + 1)), o = y + 1, l = wa(s, y)) : (u = s[y], y && u.top > l.top && u.left < l.left + l.width - 1 && (r(o, y), o = y), l = u));
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
			}))), this.isSplit = !0, da && l && o && da.addEventListener("loadingdone", this._split), (y = a && a(this)) && y.totalTime && (this._data.anim = _ ? y.totalTime(_) : y), l && o && this.elements.forEach((e, t) => {
				g[t].width = e.offsetWidth, v && v.observe(e);
			});
		}), this;
	}
	kill() {
		let { obs: e } = this._data;
		e && e.disconnect(), da?.removeEventListener("loadingdone", this._split);
	}
	revert() {
		var e, t;
		if (this.isSplit) {
			let { orig: n, anim: r } = this._data;
			this.kill(), n.forEach(Ta), this.chars.length = this.words.length = this.lines.length = n.length = this.masks.length = 0, this.isSplit = !1, r && (this._data.animTime = r.totalTime(), r.revert()), (t = (e = this.vars).onRevert) == null || t.call(e, this);
		}
		return this;
	}
	static create(t, n) {
		return new e(t, n);
	}
	static register(e) {
		ua = ua || e || window.gsap, ua && (ga = ua.utils.toArray, ya = ua.core.context || ya), !pa && window.innerWidth > 0 && (da = document.fonts, pa = !0);
	}
};
Ma.version = "3.15.0";
var Na = Ma;
//#endregion
//#region ../../../../Downloads/Portfolio-Elena-Preview/component-src/CinematicLandingIntro.tsx
function Pa({ reduced: e }) {
	let t = b.useRef(null);
	return b.useLayoutEffect(() => {
		let n = t.current;
		if (!n || e) return;
		la.registerPlugin(Na);
		let r = !1, i, a = [], o = n.querySelector(".cinematic-image-reveal"), s = n.querySelector(".cinematic-name"), c = n.querySelector(".cinematic-card-copy>p"), l = () => {
			r || (i = la.context(() => {
				let e = Na.create(s, {
					type: "lines,chars",
					mask: "chars",
					charsClass: "cinematic-copy-char"
				}), t = Na.create(c, {
					type: "lines",
					mask: "lines"
				});
				a.push(e, t), e.masks.forEach((e) => {
					e.style.paddingInline = ".04em", e.style.marginInline = "-.04em", e.style.boxSizing = "content-box";
				}), la.set([s, c], { autoAlpha: 1 }), la.set([...e.chars, ...t.lines], { yPercent: 100 });
				let r = { value: -40 };
				n.dataset.landingPhase = "image", la.timeline().to(r, {
					value: 125,
					duration: 3.5,
					ease: "power2.out",
					onUpdate: () => o.style.setProperty("--portrait-reveal", `${r.value}%`)
				}, 0).fromTo(o, { opacity: 0 }, {
					opacity: 1,
					duration: 1.5,
					ease: "power2.out"
				}, 0).call(() => {
					n.dataset.landingPhase = "name";
				}, [], 1).to(e.chars, {
					yPercent: 0,
					duration: .5,
					stagger: .015,
					ease: "power3.out"
				}, 1).call(() => {
					n.dataset.landingPhase = "supporting";
				}, [], 1.5).to(t.lines, {
					yPercent: 0,
					duration: .5,
					stagger: .1,
					ease: "power3.out"
				}, 1.5).call(() => {
					n.dataset.landingPhase = "complete";
				}, [], 3.5);
			}, n));
		}, u = n.querySelector(".portrait-base");
		return Promise.all([u.decode().catch(() => {}), document.fonts.ready]).then(l), () => {
			r = !0, i?.revert(), a.forEach((e) => e.revert()), o.style.removeProperty("--portrait-reveal");
		};
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
					/* @__PURE__ */ (0, x.jsx)("div", {
						className: "cinematic-image-reveal",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, x.jsxs)("div", {
							className: "hero-portrait",
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
						})
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
					href: window.location.pathname + window.location.search + "#work",
					children: ["Browse the projects ", /* @__PURE__ */ (0, x.jsx)("span", {
						"aria-hidden": "true",
						children: "↘︎"
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
function Fa(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function Ia(e, t, n) {
	return t && Fa(e.prototype, t), n && Fa(e, n), e;
}
var La, Ra, za, Ba, Va, Ha, Ua, Wa, Ga, Ka, qa, Ja, Ya, Xa = function() {
	return La || typeof window < "u" && (La = window.gsap) && La.registerPlugin && La;
}, Za = 1, Qa = [], G = [], $a = [], eo = Date.now, to = function(e, t) {
	return t;
}, no = function() {
	var e = Ga.core, t = e.bridge || {}, n = e._scrollers, r = e._proxies;
	n.push.apply(n, G), r.push.apply(r, $a), G = n, $a = r, to = function(e, n) {
		return t[e](n);
	};
}, ro = function(e, t) {
	return ~$a.indexOf(e) && $a[$a.indexOf(e) + 1][t];
}, io = function(e) {
	return !!~Ka.indexOf(e);
}, ao = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: r !== !1,
		capture: !!i
	});
}, oo = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, so = "scrollLeft", co = "scrollTop", lo = function() {
	return qa && qa.isPressed || G.cache++;
}, uo = function(e, t) {
	var n = function n(r) {
		if (r || r === 0) {
			Za && (za.history.scrollRestoration = "manual");
			var i = qa && qa.isPressed;
			r = n.v = Math.round(r) || (qa && qa.iOS ? 1 : 0), e(r), n.cacheID = G.cache, i && to("ss", r);
		} else (t || G.cache !== n.cacheID || to("ref")) && (n.cacheID = G.cache, n.v = e());
		return n.v + n.offset;
	};
	return n.offset = 0, e && n;
}, fo = {
	s: so,
	p: "left",
	p2: "Left",
	os: "right",
	os2: "Right",
	d: "width",
	d2: "Width",
	a: "x",
	sc: uo(function(e) {
		return arguments.length ? za.scrollTo(e, po.sc()) : za.pageXOffset || Ba[so] || Va[so] || Ha[so] || 0;
	})
}, po = {
	s: co,
	p: "top",
	p2: "Top",
	os: "bottom",
	os2: "Bottom",
	d: "height",
	d2: "Height",
	a: "y",
	op: fo,
	sc: uo(function(e) {
		return arguments.length ? za.scrollTo(fo.sc(), e) : za.pageYOffset || Ba[co] || Va[co] || Ha[co] || 0;
	})
}, mo = function(e, t) {
	return (t && t._ctx && t._ctx.selector || La.utils.toArray)(e)[0] || (typeof e == "string" && La.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, ho = function(e, t) {
	for (var n = t.length; n--;) if (t[n] === e || t[n].contains(e)) return !0;
	return !1;
}, go = function(e, t) {
	var n = t.s, r = t.sc;
	io(e) && (e = Ba.scrollingElement || Va);
	var i = G.indexOf(e), a = r === po.sc ? 1 : 2;
	!~i && (i = G.push(e) - 1), G[i + a] || ao(e, "scroll", lo);
	var o = G[i + a], s = o || (G[i + a] = uo(ro(e, n), !0) || (io(e) ? r : uo(function(t) {
		return arguments.length ? e[n] = t : e[n];
	})));
	return s.target = e, o || (s.smooth = La.getProperty(e, "scrollBehavior") === "smooth"), s;
}, _o = function(e, t, n) {
	var r = e, i = e, a = eo(), o = a, s = t || 50, c = Math.max(500, s * 3), l = function(e, t) {
		var c = eo();
		t || c - a > s ? (i = r, r = e, o = a, a = c) : n ? r += e : r = i + (e - i) / (c - o) * (a - o);
	};
	return {
		update: l,
		reset: function() {
			i = r = n ? 0 : r, o = a = 0;
		},
		getVelocity: function(e) {
			var t = o, s = i, u = eo();
			return (e || e === 0) && e !== r && l(e), a === o || u - o > c ? 0 : (r + (n ? s : -s)) / ((n ? u : a) - t) * 1e3;
		}
	};
}, vo = function(e, t) {
	return t && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, yo = function(e) {
	var t = Math.max.apply(Math, e), n = Math.min.apply(Math, e);
	return Math.abs(t) >= Math.abs(n) ? t : n;
}, bo = function() {
	Ga = La.core.globals().ScrollTrigger, Ga && Ga.core && no();
}, xo = function(e) {
	return La = e || Xa(), !Ra && La && typeof document < "u" && document.body && (za = window, Ba = document, Va = Ba.documentElement, Ha = Ba.body, Ka = [
		za,
		Ba,
		Va,
		Ha
	], La.utils.clamp, Ya = La.core.context || function() {}, Wa = "onpointerenter" in Ha ? "pointer" : "mouse", Ua = So.isTouch = za.matchMedia && za.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in za || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Ja = So.eventTypes = ("ontouchstart" in Va ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Va ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
		return Za = 0;
	}, 500), Ra = 1), Ga || bo(), Ra;
};
fo.op = po, G.cache = 0;
var So = /*#__PURE__*/ function() {
	function e(e) {
		this.init(e);
	}
	var t = e.prototype;
	return t.init = function(e) {
		Ra || xo(La) || console.warn("Please gsap.registerPlugin(Observer)"), Ga || bo();
		var t = e.tolerance, n = e.dragMinimum, r = e.type, i = e.target, a = e.lineHeight, o = e.debounce, s = e.preventDefault, c = e.onStop, l = e.onStopDelay, u = e.ignore, d = e.wheelSpeed, f = e.event, p = e.onDragStart, m = e.onDragEnd, h = e.onDrag, g = e.onPress, _ = e.onRelease, v = e.onRight, y = e.onLeft, b = e.onUp, x = e.onDown, S = e.onChangeX, C = e.onChangeY, w = e.onChange, T = e.onToggleX, E = e.onToggleY, D = e.onHover, O = e.onHoverEnd, k = e.onMove, A = e.ignoreCheck, j = e.isNormalizer, M = e.onGestureStart, ee = e.onGestureEnd, N = e.onWheel, P = e.onEnable, te = e.onDisable, ne = e.onClick, re = e.scrollSpeed, ie = e.capture, ae = e.allowClicks, oe = e.lockAxis, se = e.onLockAxis;
		this.target = i = mo(i) || Va, this.vars = e, u &&= La.utils.toArray(u), t ||= 1e-9, n ||= 0, d ||= 1, re ||= 1, r ||= "wheel,touch,pointer", o = o !== !1, a ||= parseFloat(za.getComputedStyle(Ha).lineHeight) || 22;
		var ce, le, ue, de, F, fe, pe, I = this, L = 0, R = 0, me = e.passive || !s && e.passive !== !1, z = go(i, fo), he = go(i, po), ge = z(), _e = he(), ve = ~r.indexOf("touch") && !~r.indexOf("pointer") && Ja[0] === "pointerdown", ye = io(i), B = i.ownerDocument || Ba, be = [
			0,
			0,
			0
		], V = [
			0,
			0,
			0
		], xe = 0, Se = function() {
			return xe = eo();
		}, Ce = function(e, t) {
			return (I.event = e) && u && ho(e.target, u) || t && ve && e.pointerType !== "touch" || A && A(e, t);
		}, we = function() {
			I._vx.reset(), I._vy.reset(), le.pause(), c && c(I);
		}, Te = function() {
			var e = I.deltaX = yo(be), n = I.deltaY = yo(V), r = Math.abs(e) >= t, i = Math.abs(n) >= t;
			w && (r || i) && w(I, e, n, be, V), r && (v && I.deltaX > 0 && v(I), y && I.deltaX < 0 && y(I), S && S(I), T && I.deltaX < 0 != L < 0 && T(I), L = I.deltaX, be[0] = be[1] = be[2] = 0), i && (x && I.deltaY > 0 && x(I), b && I.deltaY < 0 && b(I), C && C(I), E && I.deltaY < 0 != R < 0 && E(I), R = I.deltaY, V[0] = V[1] = V[2] = 0), (de || ue) && (k && k(I), ue &&= (p && ue === 1 && p(I), h && h(I), 0), de = !1), fe && !(fe = !1) && se && se(I), F &&= (N(I), !1), ce = 0;
		}, Ee = function(e, t, n) {
			be[n] += e, V[n] += t, I._vx.update(e), I._vy.update(t), o ? ce ||= requestAnimationFrame(Te) : Te();
		}, De = function(e, t) {
			oe && !pe && (I.axis = pe = Math.abs(e) > Math.abs(t) ? "x" : "y", fe = !0), pe !== "y" && (be[2] += e, I._vx.update(e, !0)), pe !== "x" && (V[2] += t, I._vy.update(t, !0)), o ? ce ||= requestAnimationFrame(Te) : Te();
		}, Oe = function(e) {
			if (!Ce(e, 1)) {
				e = vo(e, s);
				var t = e.clientX, r = e.clientY, i = t - I.x, a = r - I.y, o = I.isDragging;
				I.x = t, I.y = r, (o || (i || a) && (Math.abs(I.startX - t) >= n || Math.abs(I.startY - r) >= n)) && (ue ||= o ? 2 : 1, o || (I.isDragging = !0), De(i, a));
			}
		}, ke = I.onPress = function(e) {
			Ce(e, 1) || e && e.button || (I.axis = pe = null, le.pause(), I.isPressed = !0, e = vo(e), L = R = 0, I.startX = I.x = e.clientX, I.startY = I.y = e.clientY, I._vx.reset(), I._vy.reset(), ao(j ? i : B, Ja[1], Oe, me, !0), I.deltaX = I.deltaY = 0, g && g(I));
		}, Ae = I.onRelease = function(e) {
			if (!Ce(e, 1)) {
				oo(j ? i : B, Ja[1], Oe, !0);
				var t = !isNaN(I.y - I.startY), n = I.isDragging, r = n && (Math.abs(I.x - I.startX) > 3 || Math.abs(I.y - I.startY) > 3), a = vo(e);
				!r && t && (I._vx.reset(), I._vy.reset(), s && ae && La.delayedCall(.08, function() {
					if (eo() - xe > 300 && !e.defaultPrevented) {
						if (e.target.click) e.target.click();
						else if (B.createEvent) {
							var t = B.createEvent("MouseEvents");
							t.initMouseEvent("click", !0, !0, za, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t);
						}
					}
				})), I.isDragging = I.isGesturing = I.isPressed = !1, c && n && !j && le.restart(!0), ue && Te(), m && n && m(I), _ && _(I, r);
			}
		}, H = function(e) {
			return e.touches && e.touches.length > 1 && (I.isGesturing = !0) && M(e, I.isDragging);
		}, je = function() {
			return (I.isGesturing = !1) || ee(I);
		}, Me = function(e) {
			if (!Ce(e)) {
				var t = z(), n = he();
				Ee((t - ge) * re, (n - _e) * re, 1), ge = t, _e = n, c && le.restart(!0);
			}
		}, Ne = function(e) {
			if (!Ce(e)) {
				e = vo(e, s), N && (F = !0);
				var t = (e.deltaMode === 1 ? a : e.deltaMode === 2 ? za.innerHeight : 1) * d;
				Ee(e.deltaX * t, e.deltaY * t, 0), c && !j && le.restart(!0);
			}
		}, Pe = function(e) {
			if (!Ce(e)) {
				var t = e.clientX, n = e.clientY, r = t - I.x, i = n - I.y;
				I.x = t, I.y = n, de = !0, c && le.restart(!0), (r || i) && De(r, i);
			}
		}, Fe = function(e) {
			I.event = e, D(I);
		}, Ie = function(e) {
			I.event = e, O(I);
		}, Le = function(e) {
			return Ce(e) || vo(e, s) && ne(I);
		};
		le = I._dc = La.delayedCall(l || .25, we).pause(), I.deltaX = I.deltaY = 0, I._vx = _o(0, 50, !0), I._vy = _o(0, 50, !0), I.scrollX = z, I.scrollY = he, I.isDragging = I.isGesturing = I.isPressed = !1, Ya(this), I.enable = function(e) {
			return I.isEnabled || (ao(ye ? B : i, "scroll", lo), r.indexOf("scroll") >= 0 && ao(ye ? B : i, "scroll", Me, me, ie), r.indexOf("wheel") >= 0 && ao(i, "wheel", Ne, me, ie), (r.indexOf("touch") >= 0 && Ua || r.indexOf("pointer") >= 0) && (ao(i, Ja[0], ke, me, ie), ao(B, Ja[2], Ae), ao(B, Ja[3], Ae), ae && ao(i, "click", Se, !0, !0), ne && ao(i, "click", Le), M && ao(B, "gesturestart", H), ee && ao(B, "gestureend", je), D && ao(i, Wa + "enter", Fe), O && ao(i, Wa + "leave", Ie), k && ao(i, Wa + "move", Pe)), I.isEnabled = !0, I.isDragging = I.isGesturing = I.isPressed = de = ue = !1, I._vx.reset(), I._vy.reset(), ge = z(), _e = he(), e && e.type && ke(e), P && P(I)), I;
		}, I.disable = function() {
			I.isEnabled && (Qa.filter(function(e) {
				return e !== I && io(e.target);
			}).length || oo(ye ? B : i, "scroll", lo), I.isPressed && (I._vx.reset(), I._vy.reset(), oo(j ? i : B, Ja[1], Oe, !0)), oo(ye ? B : i, "scroll", Me, ie), oo(i, "wheel", Ne, ie), oo(i, Ja[0], ke, ie), oo(B, Ja[2], Ae), oo(B, Ja[3], Ae), oo(i, "click", Se, !0), oo(i, "click", Le), oo(B, "gesturestart", H), oo(B, "gestureend", je), oo(i, Wa + "enter", Fe), oo(i, Wa + "leave", Ie), oo(i, Wa + "move", Pe), I.isEnabled = I.isPressed = I.isDragging = !1, te && te(I));
		}, I.kill = I.revert = function() {
			I.disable();
			var e = Qa.indexOf(I);
			e >= 0 && Qa.splice(e, 1), qa === I && (qa = 0);
		}, Qa.push(I), j && io(i) && (qa = I), I.enable(f);
	}, Ia(e, [{
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
So.version = "3.15.0", So.create = function(e) {
	return new So(e);
}, So.register = xo, So.getAll = function() {
	return Qa.slice();
}, So.getById = function(e) {
	return Qa.filter(function(t) {
		return t.vars.id === e;
	})[0];
}, Xa() && La.registerPlugin(So);
//#endregion
//#region ../../../../Downloads/Portfolio-component-lab/node_modules/gsap/ScrollTrigger.js
var K, Co, q, J, wo, Y, To, Eo, Do, Oo, ko, Ao, jo, Mo, No, X, Po, Fo, Io, Lo, Ro, zo, Bo, Vo, Ho, Uo, Wo, Go, Ko, qo, Jo, Yo, Xo, Zo, Qo = 1, $o = Date.now, es = $o(), ts = 0, ns = 0, rs = function(e, t, n) {
	var r = ys(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
	return n["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e;
}, is = function(e, t) {
	return t && (!ys(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
}, as = function e() {
	return ns && requestAnimationFrame(e);
}, os = function() {
	return Mo = 1;
}, ss = function() {
	return Mo = 0;
}, cs = function(e) {
	return e;
}, ls = function(e) {
	return Math.round(e * 1e5) / 1e5 || 0;
}, us = function() {
	return typeof window < "u";
}, ds = function() {
	return K || us() && (K = window.gsap) && K.registerPlugin && K;
}, fs = function(e) {
	return !!~To.indexOf(e);
}, ps = function(e) {
	return (e === "Height" ? Jo : q["inner" + e]) || wo["client" + e] || Y["client" + e];
}, ms = function(e) {
	return ro(e, "getBoundingClientRect") || (fs(e) ? function() {
		return Bc.width = q.innerWidth, Bc.height = Jo, Bc;
	} : function() {
		return Ws(e);
	});
}, hs = function(e, t, n) {
	var r = n.d, i = n.d2, a = n.a;
	return (a = ro(e, "getBoundingClientRect")) ? function() {
		return a()[r];
	} : function() {
		return (t ? ps(i) : e["client" + i]) || 0;
	};
}, gs = function(e, t) {
	return !t || ~$a.indexOf(e) ? ms(e) : function() {
		return Bc;
	};
}, _s = function(e, t) {
	var n = t.s, r = t.d2, i = t.d, a = t.a;
	return Math.max(0, (n = "scroll" + r) && (a = ro(e, n)) ? a() - ms(e)()[i] : fs(e) ? (wo[n] || Y[n]) - ps(r) : e[n] - e["offset" + r]);
}, vs = function(e, t) {
	for (var n = 0; n < Io.length; n += 3) (!t || ~t.indexOf(Io[n + 1])) && e(Io[n], Io[n + 1], Io[n + 2]);
}, ys = function(e) {
	return typeof e == "string";
}, bs = function(e) {
	return typeof e == "function";
}, xs = function(e) {
	return typeof e == "number";
}, Ss = function(e) {
	return typeof e == "object";
}, Cs = function(e, t, n) {
	return e && e.progress(+!t) && n && e.pause();
}, ws = function(e, t, n) {
	if (e.enabled) {
		var r = e._ctx ? e._ctx.add(function() {
			return t(e, n);
		}) : t(e, n);
		r && r.totalTime && (e.callbackAnimation = r);
	}
}, Ts = Math.abs, Es = "left", Ds = "top", Os = "right", ks = "bottom", As = "width", js = "height", Ms = "Right", Ns = "Left", Ps = "Top", Fs = "Bottom", Is = "padding", Ls = "margin", Rs = "Width", zs = "Height", Bs = "px", Vs = function(e) {
	return q.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e);
}, Hs = function(e) {
	var t = Vs(e).position;
	e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
}, Us = function(e, t) {
	for (var n in t) n in e || (e[n] = t[n]);
	return e;
}, Ws = function(e, t) {
	var n = t && Vs(e)[No] !== "matrix(1, 0, 0, 1, 0, 0)" && K.to(e, {
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
}, Gs = function(e, t) {
	var n = t.d2;
	return e["offset" + n] || e["client" + n] || 0;
}, Ks = function(e) {
	var t = [], n = e.labels, r = e.duration(), i;
	for (i in n) t.push(n[i] / r);
	return t;
}, qs = function(e) {
	return function(t) {
		return K.utils.snap(Ks(e), t);
	};
}, Js = function(e) {
	var t = K.utils.snap(e), n = Array.isArray(e) && e.slice(0).sort(function(e, t) {
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
}, Ys = function(e) {
	return function(t, n) {
		return Js(Ks(e))(t, n.direction);
	};
}, Xs = function(e, t, n, r) {
	return n.split(",").forEach(function(n) {
		return e(t, n, r);
	});
}, Zs = function(e, t, n, r, i) {
	return e.addEventListener(t, n, {
		passive: !r,
		capture: !!i
	});
}, Qs = function(e, t, n, r) {
	return e.removeEventListener(t, n, !!r);
}, $s = function(e, t, n) {
	n &&= n.wheelHandler, n && (e(t, "wheel", n), e(t, "touchmove", n));
}, ec = {
	startColor: "green",
	endColor: "red",
	indent: 0,
	fontSize: "16px",
	fontWeight: "normal"
}, tc = {
	toggleActions: "play",
	anticipatePin: 0
}, nc = {
	top: 0,
	left: 0,
	center: .5,
	bottom: 1,
	right: 1
}, rc = function(e, t) {
	if (ys(e)) {
		var n = e.indexOf("="), r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
		~n && (e.indexOf("%") > n && (r *= t / 100), e = e.substr(0, n - 1)), e = r + (e in nc ? nc[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
	}
	return e;
}, ic = function(e, t, n, r, i, a, o, s) {
	var c = i.startColor, l = i.endColor, u = i.fontSize, d = i.indent, f = i.fontWeight, p = J.createElement("div"), m = fs(n) || ro(n, "pinType") === "fixed", h = e.indexOf("scroller") !== -1, g = m ? Y : n.tagName === "IFRAME" ? n.contentDocument.body : n, _ = e.indexOf("start") !== -1, v = _ ? c : l, y = "border-color:" + v + ";font-size:" + u + ";color:" + v + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
	return y += "position:" + ((h || s) && m ? "fixed;" : "absolute;"), (h || s || !m) && (y += (r === po ? Os : ks) + ":" + (a + parseFloat(d)) + "px;"), o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), p._isStart = _, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = y, p.innerText = t || t === 0 ? e + "-" + t : e, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + r.op.d2], ac(p, 0, r, _), p;
}, ac = function(e, t, n, r) {
	var i = { display: "block" }, a = n[r ? "os2" : "p2"], o = n[r ? "p2" : "os2"];
	e._isFlipped = r, i[n.a + "Percent"] = r ? -100 : 0, i[n.a] = r ? "1px" : 0, i["border" + a + Rs] = 1, i["border" + o + Rs] = 0, i[n.p] = t + "px", K.set(e, i);
}, Z = [], oc = {}, sc, cc = function() {
	return $o() - ts > 34 && (sc ||= requestAnimationFrame(jc));
}, lc = function() {
	(!Bo || !Bo.isPressed || Bo.startX > Y.clientWidth) && (G.cache++, Bo ? sc ||= requestAnimationFrame(jc) : jc(), ts || hc("scrollStart"), ts = $o());
}, uc = function() {
	Uo = q.innerWidth, Ho = q.innerHeight;
}, dc = function(e) {
	G.cache++, (e === !0 || !jo && !zo && !J.fullscreenElement && !J.webkitFullscreenElement && (!Vo || Uo !== q.innerWidth || Math.abs(q.innerHeight - Ho) > q.innerHeight * .25)) && Eo.restart(!0);
}, fc = {}, pc = [], mc = function e() {
	return Qs(Q, "scrollEnd", e) || Dc(!0);
}, hc = function(e) {
	return fc[e] && fc[e].map(function(e) {
		return e();
	}) || pc;
}, gc = [], _c = function(e) {
	for (var t = 0; t < gc.length; t += 5) (!e || gc[t + 4] && gc[t + 4].query === e) && (gc[t].style.cssText = gc[t + 1], gc[t].getBBox && gc[t].setAttribute("transform", gc[t + 2] || ""), gc[t + 3].uncache = 1);
}, vc = function() {
	return G.forEach(function(e) {
		return bs(e) && ++e.cacheID && (e.rec = e());
	});
}, yc = function(e, t) {
	var n;
	for (X = 0; X < Z.length; X++) n = Z[X], n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
	Yo = !0, t && _c(t), t || hc("revert");
}, bc = function(e, t) {
	G.cache++, (t || !xc) && G.forEach(function(e) {
		return bs(e) && e.cacheID++ && (e.rec = 0);
	}), ys(e) && (q.history.scrollRestoration = Ko = e);
}, xc, Sc = 0, Cc, wc = function() {
	if (Cc !== Sc) {
		var e = Cc = Sc;
		requestAnimationFrame(function() {
			return e === Sc && Dc(!0);
		});
	}
}, Tc = function() {
	Y.appendChild(qo), Jo = !Bo && qo.offsetHeight || q.innerHeight, Y.removeChild(qo);
}, Ec = function(e) {
	return Do(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
		return t.style.display = e ? "none" : "block";
	});
}, Dc = function(e, t) {
	if (wo = J.documentElement, Y = J.body, To = [
		q,
		J,
		wo,
		Y
	], ts && !e && !Yo) Zs(Q, "scrollEnd", mc);
	else {
		Tc(), xc = Q.isRefreshing = !0, Yo || vc();
		var n = hc("refreshInit");
		Lo && Q.sort(), t || yc(), G.forEach(function(e) {
			bs(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
		}), Z.slice(0).forEach(function(e) {
			return e.refresh();
		}), Yo = !1, Z.forEach(function(e) {
			if (e._subPinOffset && e.pin) {
				var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight", n = e.pin[t];
				e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh();
			}
		}), Xo = 1, Ec(!0), Z.forEach(function(e) {
			var t = _s(e.scroller, e._dir), n = e.vars.end === "max" || e._endClamp && e.end > t, r = e._startClamp && e.start >= t;
			(n || r) && e.setPositions(r ? t - 1 : e.start, n ? Math.max(r ? t : e.start + 1, t) : e.end, !0);
		}), Ec(!1), Xo = 0, n.forEach(function(e) {
			return e && e.render && e.render(-1);
		}), G.forEach(function(e) {
			bs(e) && (e.smooth && requestAnimationFrame(function() {
				return e.target.style.scrollBehavior = "smooth";
			}), e.rec && e(e.rec));
		}), bc(Ko, 1), Eo.pause(), Sc++, xc = 2, jc(2), Z.forEach(function(e) {
			return bs(e.vars.onRefresh) && e.vars.onRefresh(e);
		}), xc = Q.isRefreshing = !1, hc("refresh");
	}
}, Oc = 0, kc = 1, Ac, jc = function(e) {
	if (e === 2 || !xc && !Yo) {
		Q.isUpdating = !0, Ac && Ac.update(0);
		var t = Z.length, n = $o(), r = n - es >= 50, i = t && Z[0].scroll();
		if (kc = Oc > i ? -1 : 1, xc || (Oc = i), r && (ts && !Mo && n - ts > 200 && (ts = 0, hc("scrollEnd")), ko = es, es = n), kc < 0) {
			for (X = t; X-- > 0;) Z[X] && Z[X].update(0, r);
			kc = 1;
		} else for (X = 0; X < t; X++) Z[X] && Z[X].update(0, r);
		Q.isUpdating = !1;
	}
	sc = 0;
}, Mc = [
	Es,
	Ds,
	ks,
	Os,
	Ls + Fs,
	Ls + Ms,
	Ls + Ps,
	Ls + Ns,
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
], Nc = Mc.concat([
	As,
	js,
	"boxSizing",
	"max" + Rs,
	"max" + zs,
	"position",
	Ls,
	Is,
	Is + Ps,
	Is + Ms,
	Is + Fs,
	Is + Ns
]), Pc = function(e, t, n) {
	Lc(n);
	var r = e._gsap;
	if (r.spacerIsNative) Lc(r.spacerState);
	else if (e._gsap.swappedIn) {
		var i = t.parentNode;
		i && (i.insertBefore(e, t), i.removeChild(t));
	}
	e._gsap.swappedIn = !1;
}, Fc = function(e, t, n, r) {
	if (!e._gsap.swappedIn) {
		for (var i = Mc.length, a = t.style, o = e.style, s; i--;) s = Mc[i], a[s] = n[s];
		a.position = n.position === "absolute" ? "absolute" : "relative", n.display === "inline" && (a.display = "inline-block"), o[ks] = o[Os] = "auto", a.flexBasis = n.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[As] = Gs(e, fo) + Bs, a[js] = Gs(e, po) + Bs, a[Is] = o[Ls] = o[Ds] = o[Es] = "0", Lc(r), o[As] = o["max" + Rs] = n[As], o[js] = o["max" + zs] = n[js], o[Is] = n[Is], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0;
	}
}, Ic = /([A-Z])/g, Lc = function(e) {
	if (e) {
		var t = e.t.style, n = e.length, r = 0, i, a;
		for ((e.t._gsap || K.core.getCache(e.t)).uncache = 1; r < n; r += 2) a = e[r + 1], i = e[r], a ? t[i] = a : t[i] && t.removeProperty(i.replace(Ic, "-$1").toLowerCase());
	}
}, Rc = function(e) {
	for (var t = Nc.length, n = e.style, r = [], i = 0; i < t; i++) r.push(Nc[i], n[Nc[i]]);
	return r.t = e, r;
}, zc = function(e, t, n) {
	for (var r = [], i = e.length, a = n ? 8 : 0, o; a < i; a += 2) o = e[a], r.push(o, o in t ? t[o] : e[a + 1]);
	return r.t = e.t, r;
}, Bc = {
	left: 0,
	top: 0
}, Vc = function(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
	bs(e) && (e = e(s)), ys(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? rc("0" + e.substr(3), n) : 0));
	var m = f ? f.time() : 0, h, g, _;
	if (f && f.seek(0), isNaN(e) || (e = +e), xs(e)) f && (e = K.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, d, e)), o && ac(o, n, r, !0);
	else {
		bs(t) && (t = t(s));
		var v = (e || "0").split(" "), y, b, x, S;
		_ = mo(t, s) || Y, y = Ws(_) || {}, (!y || !y.left && !y.top) && Vs(_).display === "none" && (S = _.style.display, _.style.display = "block", y = Ws(_), S ? _.style.display = S : _.style.removeProperty("display")), b = rc(v[0], y[r.d]), x = rc(v[1] || "0", n), e = y[r.p] - c[r.p] - l + b + i - x, o && ac(o, x, r, n - x < 20 || o._isStart && x > 20), n -= n - x;
	}
	if (p && (s[p] = e || -.001, e < 0 && (e = 0)), a) {
		var C = e + n, w = a._isStart;
		h = "scroll" + r.d2, ac(a, C, r, w && C > 20 || !w && (u ? Math.max(Y[h], wo[h]) : a.parentNode[h]) <= C + 1), u && (c = Ws(o), u && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + Bs));
	}
	return f && _ && (h = Ws(_), f.seek(d), g = Ws(_), f._caScrollDist = h[r.p] - g[r.p], e = e / f._caScrollDist * d), f && f.seek(m), f ? e : Math.round(e);
}, Hc = /(webkit|moz|length|cssText|inset)/i, Uc = function(e, t, n, r) {
	if (e.parentNode !== t) {
		var i = e.style, a, o;
		if (t === Y) {
			for (a in e._stOrig = i.cssText, o = Vs(e), o) !+a && !Hc.test(a) && o[a] && typeof i[a] == "string" && a !== "0" && (i[a] = o[a]);
			i.top = n, i.left = r;
		} else i.cssText = e._stOrig;
		K.core.getCache(e).uncache = 1, t.appendChild(e);
	}
}, Wc = function(e, t, n) {
	var r = t, i = r;
	return function(t) {
		var a = Math.round(e());
		return a !== r && a !== i && Math.abs(a - r) > 3 && Math.abs(a - i) > 3 && (t = a, n && n()), i = r, r = Math.round(t), r;
	};
}, Gc = function(e, t, n) {
	var r = {};
	r[t.p] = "+=" + n, K.set(e, r);
}, Kc = function(e, t) {
	var n = go(e, t), r = "_scroll" + t.p2, i = function t(i, a, o, s, c) {
		var l = t.tween, u = a.onComplete, d = {};
		o ||= n();
		var f = Wc(n, o, function() {
			l.kill(), t.tween = 0;
		});
		return c = s && c || 0, s ||= i - o, l && l.kill(), a[r] = i, a.inherit = !1, a.modifiers = d, d[r] = function() {
			return f(o + s * l.ratio + c * l.ratio * l.ratio);
		}, a.onUpdate = function() {
			G.cache++, t.tween && jc();
		}, a.onComplete = function() {
			t.tween = 0, u && u.call(l);
		}, l = t.tween = K.to(e, a), l;
	};
	return e[r] = n, n.wheelHandler = function() {
		return i.tween && i.tween.kill() && (i.tween = 0);
	}, Zs(e, "wheel", n.wheelHandler), Q.isTouch && Zs(e, "touchmove", n.wheelHandler), i;
}, Q = /*#__PURE__*/ function() {
	function e(t, n) {
		Co || e.register(K) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Go(this), this.init(t, n);
	}
	var t = e.prototype;
	return t.init = function(t, n) {
		if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !ns) this.update = this.refresh = this.kill = cs;
		else {
			t = Us(ys(t) || xs(t) || t.nodeType ? { trigger: t } : t, tc);
			var r = t, i = r.onUpdate, a = r.toggleClass, o = r.id, s = r.onToggle, c = r.onRefresh, l = r.scrub, u = r.trigger, d = r.pin, f = r.pinSpacing, p = r.invalidateOnRefresh, m = r.anticipatePin, h = r.onScrubComplete, g = r.onSnapComplete, _ = r.once, v = r.snap, y = r.pinReparent, b = r.pinSpacer, x = r.containerAnimation, S = r.fastScrollEnd, C = r.preventOverlaps, w = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? fo : po, T = !l && l !== 0, E = mo(t.scroller || q), D = K.core.getCache(E), O = fs(E), k = ("pinType" in t ? t.pinType : ro(E, "pinType") || O && "fixed") === "fixed", A = [
				t.onEnter,
				t.onLeave,
				t.onEnterBack,
				t.onLeaveBack
			], j = T && t.toggleActions.split(" "), M = "markers" in t ? t.markers : tc.markers, ee = O ? 0 : parseFloat(Vs(E)["border" + w.p2 + Rs]) || 0, N = this, P = t.onRefreshInit && function() {
				return t.onRefreshInit(N);
			}, te = hs(E, O, w), ne = gs(E, O), re = 0, ie = 0, ae = 0, oe = go(E, w), se, ce, le, ue, de, F, fe, pe, I, L, R, me, z, he, ge, _e, ve, ye, B, be, V, xe, Se, Ce, we, Te, Ee, De, Oe, ke, Ae, H, je, Me, Ne, Pe, Fe, Ie, Le;
			if (N._startClamp = N._endClamp = !1, N._dir = w, m *= 45, N.scroller = E, N.scroll = x ? x.time.bind(x) : oe, ue = oe(), N.vars = t, n ||= t.animation, "refreshPriority" in t && (Lo = 1, t.refreshPriority === -9999 && (Ac = N)), D.tweenScroll = D.tweenScroll || {
				top: Kc(E, po),
				left: Kc(E, fo)
			}, N.tweenTo = se = D.tweenScroll[w.p], N.scrubDuration = function(e) {
				je = xs(e) && e, je ? H ? H.duration(e) : H = K.to(n, {
					ease: "expo",
					totalProgress: "+=0",
					inherit: !1,
					duration: je,
					paused: !0,
					onComplete: function() {
						return h && h(N);
					}
				}) : (H && H.progress(1).kill(), H = 0);
			}, n && (n.vars.lazy = !1, n._initted && !N.isReverted || n.vars.immediateRender !== !1 && t.immediateRender !== !1 && n.duration() && n.render(0, !0, !0), N.animation = n.pause(), n.scrollTrigger = N, N.scrubDuration(l), ke = 0, o ||= n.vars.id), v && ((!Ss(v) || v.push) && (v = { snapTo: v }), "scrollBehavior" in Y.style && K.set(O ? [Y, wo] : E, { scrollBehavior: "auto" }), G.forEach(function(e) {
				return bs(e) && e.target === (O ? J.scrollingElement || wo : E) && (e.smooth = !1);
			}), le = bs(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? qs(n) : v.snapTo === "labelsDirectional" ? Ys(n) : v.directional === !1 ? K.utils.snap(v.snapTo) : function(e, t) {
				return Js(v.snapTo)(e, $o() - ie < 500 ? 0 : t.direction);
			}, Me = v.duration || {
				min: .1,
				max: 2
			}, Me = Ss(Me) ? Oo(Me.min, Me.max) : Oo(Me, Me), Ne = K.delayedCall(v.delay || je / 2 || .1, function() {
				var e = oe(), t = $o() - ie < 500, r = se.tween;
				if ((t || Math.abs(N.getVelocity()) < 10) && !r && !Mo && re !== e) {
					var i = (e - F) / he, a = n && !T ? n.totalProgress() : i, o = t ? 0 : (a - Ae) / ($o() - ko) * 1e3 || 0, s = K.utils.clamp(-i, 1 - i, Ts(o / 2) * o / .185), c = i + (v.inertia === !1 ? 0 : s), l, u, d = v, f = d.onStart, p = d.onInterrupt, m = d.onComplete;
					if (l = le(c, N), xs(l) || (l = c), u = Math.max(0, Math.round(F + l * he)), e <= fe && e >= F && u !== e) {
						if (r && !r._initted && r.data <= Ts(u - e)) return;
						v.inertia === !1 && (s = l - i), se(u, {
							duration: Me(Ts(Math.max(Ts(c - a), Ts(l - a)) * .185 / o / .05 || 0)),
							ease: v.ease || "power3",
							data: Ts(u - e),
							onInterrupt: function() {
								return Ne.restart(!0) && p && ws(N, p);
							},
							onComplete: function() {
								N.update(), re = oe(), n && !T && (H ? H.resetTo("totalProgress", l, n._tTime / n._tDur) : n.progress(l)), ke = Ae = n && !T ? n.totalProgress() : N.progress, g && g(N), m && ws(N, m);
							}
						}, e, s * he, u - e - s * he), f && ws(N, f, se.tween);
					}
				} else N.isActive && re !== e && Ne.restart(!0);
			}).pause()), o && (oc[o] = N), u = N.trigger = mo(u || d !== !0 && d), Le = u && u._gsap && u._gsap.stRevert, Le &&= Le(N), d = d === !0 ? u : mo(d), ys(a) && (a = {
				targets: u,
				className: a
			}), d && (f === !1 || f === Ls || (f = !f && d.parentNode && d.parentNode.style && Vs(d.parentNode).display === "flex" ? !1 : Is), N.pin = d, ce = K.core.getCache(d), ce.spacer ? ge = ce.pinState : (b && (b = mo(b), b && !b.nodeType && (b = b.current || b.nativeElement), ce.spacerIsNative = !!b, b && (ce.spacerState = Rc(b))), ce.spacer = ye = b || J.createElement("div"), ye.classList.add("pin-spacer"), o && ye.classList.add("pin-spacer-" + o), ce.pinState = ge = Rc(d)), t.force3D !== !1 && K.set(d, { force3D: !0 }), N.spacer = ye = ce.spacer, Oe = Vs(d), Ce = Oe[f + w.os2], be = K.getProperty(d), V = K.quickSetter(d, w.a, Bs), Fc(d, ye, Oe), ve = Rc(d)), M) {
				me = Ss(M) ? Us(M, ec) : ec, L = ic("scroller-start", o, E, w, me, 0), R = ic("scroller-end", o, E, w, me, 0, L), B = L["offset" + w.op.d2];
				var Re = mo(ro(E, "content") || E);
				pe = this.markerStart = ic("start", o, Re, w, me, B, 0, x), I = this.markerEnd = ic("end", o, Re, w, me, B, 0, x), x && (Ie = K.quickSetter([pe, I], w.a, Bs)), !k && !($a.length && ro(E, "fixedMarkers") === !0) && (Hs(O ? Y : E), K.set([L, R], { force3D: !0 }), Te = K.quickSetter(L, w.a, Bs), De = K.quickSetter(R, w.a, Bs));
			}
			if (x) {
				var ze = x.vars.onUpdate, Be = x.vars.onUpdateParams;
				x.eventCallback("onUpdate", function() {
					N.update(0, 0, 1), ze && ze.apply(x, Be || []);
				});
			}
			if (N.previous = function() {
				return Z[Z.indexOf(N) - 1];
			}, N.next = function() {
				return Z[Z.indexOf(N) + 1];
			}, N.revert = function(e, t) {
				if (!t) return N.kill(!0);
				var r = e !== !1 || !N.enabled, i = jo;
				r !== N.isReverted && (r && (Pe = Math.max(oe(), N.scroll.rec || 0), ae = N.progress, Fe = n && n.progress()), pe && [
					pe,
					I,
					L,
					R
				].forEach(function(e) {
					return e.style.display = r ? "none" : "block";
				}), r && (jo = N, N.update(r)), d && (!y || !N.isActive) && (r ? Pc(d, ye, ge) : Fc(d, ye, Vs(d), we)), r || N.update(r), jo = i, N.isReverted = r);
			}, N.refresh = function(r, i, a, o) {
				if (!jo && N.enabled || i) {
					if (d && r && ts) Zs(e, "scrollEnd", mc);
					else {
						!xc && P && P(N), jo = N, se.tween && !a && (se.tween.kill(), se.tween = 0), H && H.pause(), p && n && (n.revert({ kill: !1 }).invalidate(), n.getChildren ? n.getChildren(!0, !0, !1).forEach(function(e) {
							return e.vars.immediateRender && e.render(0, !0, !0);
						}) : n.vars.immediateRender && n.render(0, !0, !0)), N.isReverted || N.revert(!0, !0), N._subPinOffset = !1;
						var s = te(), l = ne(), m = x ? x.duration() : _s(E, w), h = he <= .01 || !he, g = 0, _ = o || 0, v = Ss(a) ? a.end : t.end, b = t.endTrigger || u, S = Ss(a) ? a.start : t.start || (t.start === 0 || !u ? 0 : d ? "0 0" : "0 100%"), C = N.pinnedContainer = t.pinnedContainer && mo(t.pinnedContainer, N), D = u && Math.max(0, Z.indexOf(N)) || 0, A = D, j, ce, le, me, B, V, Ce, Te, De, Oe, ke, Ae, je;
						for (M && Ss(a) && (Ae = K.getProperty(L, w.p), je = K.getProperty(R, w.p)); A-- > 0;) V = Z[A], V.end || V.refresh(0, 1) || (jo = N), Ce = V.pin, Ce && (Ce === u || Ce === d || Ce === C) && !V.isReverted && (Oe ||= [], Oe.unshift(V), V.revert(!0, !0)), V !== Z[A] && (D--, A--);
						for (bs(S) && (S = S(N)), S = rs(S, "start", N), F = Vc(S, u, s, w, oe(), pe, L, N, l, ee, k, m, x, N._startClamp && "_startClamp") || (d ? -.001 : 0), bs(v) && (v = v(N)), ys(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (ys(S) ? S.split(" ")[0] : "") + v : (g = rc(v.substr(2), s), v = ys(S) ? S : (x ? K.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, F) : F) + g, b = u)), v = rs(v, "end", N), fe = Math.max(F, Vc(v || (b ? "100% 0" : m), b, s, w, oe() + g, I, R, N, l, ee, k, m, x, N._endClamp && "_endClamp")) || -.001, g = 0, A = D; A--;) V = Z[A] || {}, Ce = V.pin, Ce && V.start - V._pinPush <= F && !x && V.end > 0 && (j = V.end - (N._startClamp ? Math.max(0, V.start) : V.start), (Ce === u && V.start - V._pinPush < F || Ce === C) && isNaN(S) && (g += j * (1 - V.progress)), Ce === d && (_ += j));
						if (F += g, fe += g, N._startClamp && (N._startClamp += g), N._endClamp && !xc && (N._endClamp = fe || -.001, fe = Math.min(fe, _s(E, w))), he = fe - F || (F -= .01) && .001, h && (ae = K.utils.clamp(0, 1, K.utils.normalize(F, fe, Pe))), N._pinPush = _, pe && g && (j = {}, j[w.a] = "+=" + g, C && (j[w.p] = "-=" + oe()), K.set([pe, I], j)), d && !(Xo && N.end >= _s(E, w))) j = Vs(d), me = w === po, le = oe(), xe = parseFloat(be(w.a)) + _, !m && fe > 1 && (ke = (O ? J.scrollingElement || wo : E).style, ke = {
							style: ke,
							value: ke["overflow" + w.a.toUpperCase()]
						}, O && Vs(Y)["overflow" + w.a.toUpperCase()] !== "scroll" && (ke.style["overflow" + w.a.toUpperCase()] = "scroll")), Fc(d, ye, j), ve = Rc(d), ce = Ws(d, !0), Te = k && go(E, me ? fo : po)(), f ? (we = [f + w.os2, he + _ + Bs], we.t = ye, A = f === Is ? Gs(d, w) + he + _ : 0, A && (we.push(w.d, A + Bs), ye.style.flexBasis !== "auto" && (ye.style.flexBasis = A + Bs)), Lc(we), C && Z.forEach(function(e) {
							e.pin === C && e.vars.pinSpacing !== !1 && (e._subPinOffset = !0);
						}), k && oe(Pe)) : (A = Gs(d, w), A && ye.style.flexBasis !== "auto" && (ye.style.flexBasis = A + Bs)), k && (B = {
							top: ce.top + (me ? le - F : Te) + Bs,
							left: ce.left + (me ? Te : le - F) + Bs,
							boxSizing: "border-box",
							position: "fixed"
						}, B[As] = B["max" + Rs] = Math.ceil(ce.width) + Bs, B[js] = B["max" + zs] = Math.ceil(ce.height) + Bs, B[Ls] = B[Ls + Ps] = B[Ls + Ms] = B[Ls + Fs] = B[Ls + Ns] = "0", B[Is] = j[Is], B[Is + Ps] = j[Is + Ps], B[Is + Ms] = j[Is + Ms], B[Is + Fs] = j[Is + Fs], B[Is + Ns] = j[Is + Ns], _e = zc(ge, B, y), xc && oe(0)), n ? (De = n._initted, Ro(1), n.render(n.duration(), !0, !0), Se = be(w.a) - xe + he + _, Ee = Math.abs(he - Se) > 1, k && Ee && _e.splice(_e.length - 2, 2), n.render(0, !0, !0), De || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), Ro(0)) : Se = he, ke && (ke.value ? ke.style["overflow" + w.a.toUpperCase()] = ke.value : ke.style.removeProperty("overflow-" + w.a));
						else if (u && oe() && !x) for (ce = u.parentNode; ce && ce !== Y;) ce._pinOffset && (F -= ce._pinOffset, fe -= ce._pinOffset), ce = ce.parentNode;
						Oe && Oe.forEach(function(e) {
							return e.revert(!1, !0);
						}), N.start = F, N.end = fe, ue = de = xc ? Pe : oe(), !x && !xc && (ue < Pe && oe(Pe), N.scroll.rec = 0), N.revert(!1, !0), ie = $o(), Ne && (re = -1, Ne.restart(!0)), jo = 0, n && T && (n._initted || Fe) && n.progress() !== Fe && n.progress(Fe || 0, !0).render(n.time(), !0, !0), (h || ae !== N.progress || x || p || n && !n._initted) && (n && !T && (n._initted || ae || n.vars.immediateRender !== !1) && n.totalProgress(x && F < -.001 && !ae ? K.utils.normalize(F, fe, 0) : ae, !0), N.progress = h || (ue - F) / he === ae ? 0 : ae), d && f && (ye._pinOffset = Math.round(N.progress * Se)), H && H.invalidate(), isNaN(Ae) || (Ae -= K.getProperty(L, w.p), je -= K.getProperty(R, w.p), Gc(L, w, Ae), Gc(pe, w, Ae - (o || 0)), Gc(R, w, je), Gc(I, w, je - (o || 0))), h && !xc && N.update(), c && !xc && !z && (z = !0, c(N), z = !1);
					}
				}
			}, N.getVelocity = function() {
				return (oe() - de) / ($o() - ko) * 1e3 || 0;
			}, N.endAnimation = function() {
				Cs(N.callbackAnimation), n && (H ? H.progress(1) : n.paused() ? T || Cs(n, N.direction < 0, 1) : Cs(n, n.reversed()));
			}, N.labelToScroll = function(e) {
				return n && n.labels && (F || N.refresh() || F) + n.labels[e] / n.duration() * he || 0;
			}, N.getTrailing = function(e) {
				var t = Z.indexOf(N), n = N.direction > 0 ? Z.slice(0, t).reverse() : Z.slice(t + 1);
				return (ys(e) ? n.filter(function(t) {
					return t.vars.preventOverlaps === e;
				}) : n).filter(function(e) {
					return N.direction > 0 ? e.end <= F : e.start >= fe;
				});
			}, N.update = function(e, t, r) {
				if (!x || r || e) {
					var o = xc === !0 ? Pe : N.scroll(), c = e ? 0 : (o - F) / he, u = c < 0 ? 0 : c > 1 ? 1 : c || 0, p = N.progress, h, g, b, D, O, M, ee, P;
					if (t && (de = ue, ue = x ? oe() : o, v && (Ae = ke, ke = n && !T ? n.totalProgress() : u)), m && d && !jo && !Qo && ts && (!u && F < o + (o - de) / ($o() - ko) * m ? u = 1e-4 : u === 1 && fe > o + (o - de) / ($o() - ko) * m && (u = .9999)), u !== p && N.enabled) {
						if (h = N.isActive = !!u && u < 1, g = !!p && p < 1, M = h !== g, O = M || !!u != !!p, N.direction = u > p ? 1 : -1, N.progress = u, O && !jo && (b = u && !p ? 0 : u === 1 ? 1 : p === 1 ? 2 : 3, T && (D = !M && j[b + 1] !== "none" && j[b + 1] || j[b], P = n && (D === "complete" || D === "reset" || D in n))), C && (M || P) && (P || l || !n) && (bs(C) ? C(N) : N.getTrailing(C).forEach(function(e) {
							return e.endAnimation();
						})), T || (H && !jo && !Qo ? (H._dp._time - H._start !== H._time && H.render(H._dp._time - H._start), H.resetTo ? H.resetTo("totalProgress", u, n._tTime / n._tDur) : (H.vars.totalProgress = u, H.invalidate().restart())) : n && n.totalProgress(u, !!(jo && (ie || e)))), d) {
							if (e && f && (ye.style[f + w.os2] = Ce), !k) V(ls(xe + Se * u));
							else if (O) {
								if (ee = !e && u > p && fe + 1 > o && o + 1 >= _s(E, w), y) {
									if (!e && (h || ee)) {
										var te = Ws(d, !0), ne = o - F;
										Uc(d, Y, te.top + (w === po ? ne : 0) + Bs, te.left + (w === po ? 0 : ne) + Bs);
									} else Uc(d, ye);
								}
								Lc(h || ee ? _e : ve), Ee && u < 1 && h || V(xe + (u === 1 && !ee ? Se : 0));
							}
						}
						v && !se.tween && !jo && !Qo && Ne.restart(!0), a && (M || _ && u && (u < 1 || !Zo)) && Do(a.targets).forEach(function(e) {
							return e.classList[h || _ ? "add" : "remove"](a.className);
						}), i && !T && !e && i(N), O && !jo ? (T && (P && (D === "complete" ? n.pause().totalProgress(1) : D === "reset" ? n.restart(!0).pause() : D === "restart" ? n.restart(!0) : n[D]()), i && i(N)), (M || !Zo) && (s && M && ws(N, s), A[b] && ws(N, A[b]), _ && (u === 1 ? N.kill(!1, 1) : A[b] = 0), M || (b = u === 1 ? 1 : 3, A[b] && ws(N, A[b]))), S && !h && Math.abs(N.getVelocity()) > (xs(S) ? S : 2500) && (Cs(N.callbackAnimation), H ? H.progress(1) : Cs(n, D === "reverse" ? 1 : !u, 1))) : T && i && !jo && i(N);
					}
					if (De) {
						var re = x ? o / x.duration() * (x._caScrollDist || 0) : o;
						Te(re + +!!L._isFlipped), De(re);
					}
					Ie && Ie(-o / x.duration() * (x._caScrollDist || 0));
				}
			}, N.enable = function(t, n) {
				N.enabled || (N.enabled = !0, Zs(E, "resize", dc), O || Zs(E, "scroll", lc), P && Zs(e, "refreshInit", P), t !== !1 && (N.progress = ae = 0, ue = de = re = oe()), n !== !1 && N.refresh());
			}, N.getTween = function(e) {
				return e && se ? se.tween : H;
			}, N.setPositions = function(e, t, n, r) {
				if (x) {
					var i = x.scrollTrigger, a = x.duration(), o = i.end - i.start;
					e = i.start + o * e / a, t = i.start + o * t / a;
				}
				N.refresh(!1, !1, {
					start: is(e, n && !!N._startClamp),
					end: is(t, n && !!N._endClamp)
				}, r), N.update();
			}, N.adjustPinSpacing = function(e) {
				if (we && e) {
					var t = we.indexOf(w.d) + 1;
					we[t] = parseFloat(we[t]) + e + Bs, we[1] = parseFloat(we[1]) + e + Bs, Lc(we);
				}
			}, N.disable = function(t, n) {
				if (t !== !1 && N.revert(!0, !0), N.enabled && (N.enabled = N.isActive = !1, n || H && H.pause(), Pe = 0, ce && (ce.uncache = 1), P && Qs(e, "refreshInit", P), Ne && (Ne.pause(), se.tween && se.tween.kill() && (se.tween = 0)), !O)) {
					for (var r = Z.length; r--;) if (Z[r].scroller === E && Z[r] !== N) return;
					Qs(E, "resize", dc), O || Qs(E, "scroll", lc);
				}
			}, N.kill = function(e, r) {
				N.disable(e, r), H && !r && H.kill(), o && delete oc[o];
				var i = Z.indexOf(N);
				i >= 0 && Z.splice(i, 1), i === X && kc > 0 && X--, i = 0, Z.forEach(function(e) {
					return e.scroller === N.scroller && (i = 1);
				}), i || xc || (N.scroll.rec = 0), n && (n.scrollTrigger = null, e && n.revert({ kill: !1 }), r || n.kill()), pe && [
					pe,
					I,
					L,
					R
				].forEach(function(e) {
					return e.parentNode && e.parentNode.removeChild(e);
				}), Ac === N && (Ac = 0), d && (ce && (ce.uncache = 1), i = 0, Z.forEach(function(e) {
					return e.pin === d && i++;
				}), i || (ce.spacer = 0)), t.onKill && t.onKill(N);
			}, Z.push(N), N.enable(!1, !1), Le && Le(N), n && n.add && !he) {
				var Ve = N.update;
				N.update = function() {
					N.update = Ve, G.cache++, F || fe || N.refresh();
				}, K.delayedCall(.01, N.update), he = .01, F = fe = 0;
			} else N.refresh();
			d && wc();
		}
	}, e.register = function(t) {
		return Co ||= (K = t || ds(), us() && window.document && e.enable(), ns), Co;
	}, e.defaults = function(e) {
		if (e) for (var t in e) tc[t] = e[t];
		return tc;
	}, e.disable = function(e, t) {
		ns = 0, Z.forEach(function(n) {
			return n[t ? "kill" : "disable"](e);
		}), Qs(q, "wheel", lc), Qs(J, "scroll", lc), clearInterval(Ao), Qs(J, "touchcancel", cs), Qs(Y, "touchstart", cs), Xs(Qs, J, "pointerdown,touchstart,mousedown", os), Xs(Qs, J, "pointerup,touchend,mouseup", ss), Eo.kill(), vs(Qs);
		for (var n = 0; n < G.length; n += 3) $s(Qs, G[n], G[n + 1]), $s(Qs, G[n], G[n + 2]);
	}, e.enable = function() {
		if (q = window, J = document, wo = J.documentElement, Y = J.body, K) {
			if (Do = K.utils.toArray, Oo = K.utils.clamp, Go = K.core.context || cs, Ro = K.core.suppressOverwrites || cs, Ko = q.history.scrollRestoration || "auto", Oc = q.pageYOffset || 0, K.core.globals("ScrollTrigger", e), Y) {
				ns = 1, qo = document.createElement("div"), qo.style.height = "100vh", qo.style.position = "absolute", Tc(), as(), So.register(K), e.isTouch = So.isTouch, Wo = So.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Vo = So.isTouch === 1, Zs(q, "wheel", lc), To = [
					q,
					J,
					wo,
					Y
				], K.matchMedia ? (e.matchMedia = function(e) {
					var t = K.matchMedia(), n;
					for (n in e) t.add(n, e[n]);
					return t;
				}, K.addEventListener("matchMediaInit", function() {
					vc(), yc();
				}), K.addEventListener("matchMediaRevert", function() {
					return _c();
				}), K.addEventListener("matchMedia", function() {
					Dc(0, 1), hc("matchMedia");
				}), K.matchMedia().add("(orientation: portrait)", function() {
					return uc(), uc;
				})) : console.warn("Requires GSAP 3.11.0 or later"), uc(), Zs(J, "scroll", lc);
				var t = Y.hasAttribute("style"), n = Y.style, r = n.borderTopStyle, i = K.core.Animation.prototype, a, o;
				for (i.revert || Object.defineProperty(i, "revert", { value: function() {
					return this.time(-.01, !0);
				} }), n.borderTopStyle = "solid", a = Ws(Y), po.m = Math.round(a.top + po.sc()) || 0, fo.m = Math.round(a.left + fo.sc()) || 0, r ? n.borderTopStyle = r : n.removeProperty("border-top-style"), t || (Y.setAttribute("style", ""), Y.removeAttribute("style")), Ao = setInterval(cc, 250), K.delayedCall(.5, function() {
					return Qo = 0;
				}), Zs(J, "touchcancel", cs), Zs(Y, "touchstart", cs), Xs(Zs, J, "pointerdown,touchstart,mousedown", os), Xs(Zs, J, "pointerup,touchend,mouseup", ss), No = K.utils.checkPrefix("transform"), Nc.push(No), Co = $o(), Eo = K.delayedCall(.2, Dc).pause(), Io = [
					J,
					"visibilitychange",
					function() {
						var e = q.innerWidth, t = q.innerHeight;
						J.hidden ? (Po = e, Fo = t) : (Po !== e || Fo !== t) && dc();
					},
					J,
					"DOMContentLoaded",
					Dc,
					q,
					"load",
					Dc,
					q,
					"resize",
					dc
				], vs(Zs), Z.forEach(function(e) {
					return e.enable(0, 1);
				}), o = 0; o < G.length; o += 3) $s(Qs, G[o], G[o + 1]), $s(Qs, G[o], G[o + 2]);
			} else J && J.addEventListener("DOMContentLoaded", function t() {
				e.enable(), J.removeEventListener("DOMContentLoaded", t);
			});
		}
	}, e.config = function(t) {
		"limitCallbacks" in t && (Zo = !!t.limitCallbacks);
		var n = t.syncInterval;
		n && clearInterval(Ao) || (Ao = n) && setInterval(cc, n), "ignoreMobileResize" in t && (Vo = e.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (vs(Qs) || vs(Zs, t.autoRefreshEvents || "none"), zo = (t.autoRefreshEvents + "").indexOf("resize") === -1);
	}, e.scrollerProxy = function(e, t) {
		var n = mo(e), r = G.indexOf(n), i = fs(n);
		~r && G.splice(r, i ? 6 : 2), t && (i ? $a.unshift(q, t, Y, t, wo, t) : $a.unshift(n, t));
	}, e.clearMatchMedia = function(e) {
		Z.forEach(function(t) {
			return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
		});
	}, e.isInViewport = function(e, t, n) {
		var r = (ys(e) ? mo(e) : e).getBoundingClientRect(), i = r[n ? As : js] * t || 0;
		return n ? r.right - i > 0 && r.left + i < q.innerWidth : r.bottom - i > 0 && r.top + i < q.innerHeight;
	}, e.positionInViewport = function(e, t, n) {
		ys(e) && (e = mo(e));
		var r = e.getBoundingClientRect(), i = r[n ? As : js], a = t == null ? i / 2 : t in nc ? nc[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
		return n ? (r.left + a) / q.innerWidth : (r.top + a) / q.innerHeight;
	}, e.killAll = function(e) {
		if (Z.slice(0).forEach(function(e) {
			return e.vars.id !== "ScrollSmoother" && e.kill();
		}), e !== !0) {
			var t = fc.killAll || [];
			fc = {}, t.forEach(function(e) {
				return e();
			});
		}
	}, e;
}();
Q.version = "3.15.0", Q.saveStyles = function(e) {
	return e ? Do(e).forEach(function(e) {
		if (e && e.style) {
			var t = gc.indexOf(e);
			t >= 0 && gc.splice(t, 5), gc.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), K.core.getCache(e), Go());
		}
	}) : gc;
}, Q.revert = function(e, t) {
	return yc(!e, t);
}, Q.create = function(e, t) {
	return new Q(e, t);
}, Q.refresh = function(e) {
	return e ? dc(!0) : (Co || Q.register()) && Dc(!0);
}, Q.update = function(e) {
	return ++G.cache && jc(e === !0 ? 2 : 0);
}, Q.clearScrollMemory = bc, Q.maxScroll = function(e, t) {
	return _s(e, t ? fo : po);
}, Q.getScrollFunc = function(e, t) {
	return go(mo(e), t ? fo : po);
}, Q.getById = function(e) {
	return oc[e];
}, Q.getAll = function() {
	return Z.filter(function(e) {
		return e.vars.id !== "ScrollSmoother";
	});
}, Q.isScrolling = function() {
	return !!ts;
}, Q.snapDirectional = Js, Q.addEventListener = function(e, t) {
	var n = fc[e] || (fc[e] = []);
	~n.indexOf(t) || n.push(t);
}, Q.removeEventListener = function(e, t) {
	var n = fc[e], r = n && n.indexOf(t);
	r >= 0 && n.splice(r, 1);
}, Q.batch = function(e, t) {
	var n = [], r = {}, i = t.interval || .016, a = t.batchMax || 1e9, o = function(e, t) {
		var n = [], r = [], o = K.delayedCall(i, function() {
			t(n, r), n = [], r = [];
		}).pause();
		return function(e) {
			n.length || o.restart(!0), n.push(e.trigger), r.push(e), a <= n.length && o.progress(1);
		};
	}, s;
	for (s in t) r[s] = s.substr(0, 2) === "on" && bs(t[s]) && s !== "onRefreshInit" ? o(s, t[s]) : t[s];
	return bs(a) && (a = a(), Zs(Q, "refresh", function() {
		return a = t.batchMax();
	})), Do(e).forEach(function(e) {
		var t = {};
		for (s in r) t[s] = r[s];
		t.trigger = e, n.push(Q.create(t));
	}), n;
};
var qc = function(e, t, n, r) {
	return t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1;
}, Jc = function e(t, n) {
	n === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (So.isTouch ? " pinch-zoom" : "") : "none", t === wo && e(Y, n);
}, Yc = {
	auto: 1,
	scroll: 1
}, Xc = function(e) {
	var t = e.event, n = e.target, r = e.axis, i = (t.changedTouches ? t.changedTouches[0] : t).target, a = i._gsap || K.core.getCache(i), o = $o(), s;
	if (!a._isScrollT || o - a._isScrollT > 2e3) {
		for (; i && i !== Y && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !(Yc[(s = Vs(i)).overflowY] || Yc[s.overflowX]));) i = i.parentNode;
		a._isScroll = i && i !== n && !fs(i) && (Yc[(s = Vs(i)).overflowY] || Yc[s.overflowX]), a._isScrollT = o;
	}
	(a._isScroll || r === "x") && (t.stopPropagation(), t._gsapAllow = !0);
}, Zc = function(e, t, n, r) {
	return So.create({
		target: e,
		capture: !0,
		debounce: !1,
		lockAxis: !0,
		type: t,
		onWheel: r &&= Xc,
		onPress: r,
		onDrag: r,
		onScroll: r,
		onEnable: function() {
			return n && Zs(J, So.eventTypes[0], el, !1, !0);
		},
		onDisable: function() {
			return Qs(J, So.eventTypes[0], el, !0);
		}
	});
}, Qc = /(input|label|select|textarea)/i, $c, el = function(e) {
	var t = Qc.test(e.target.tagName);
	(t || $c) && (e._gsapAllow = !0, $c = t);
}, tl = function(e) {
	Ss(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
	var t = e, n = t.normalizeScrollX, r = t.momentum, i = t.allowNestedScroll, a = t.onRelease, o, s, c = mo(e.target) || wo, l = K.core.globals().ScrollSmoother, u = l && l.get(), d = Wo && (e.content && mo(e.content) || u && e.content !== !1 && !u.smooth() && u.content()), f = go(c, po), p = go(c, fo), m = 1, h = (So.isTouch && q.visualViewport ? q.visualViewport.scale * q.visualViewport.width : q.outerWidth) / q.innerWidth, g = 0, _ = bs(r) ? function() {
		return r(o);
	} : function() {
		return r || 2.8;
	}, v, y, b = Zc(c, e.type, !0, i), x = function() {
		return y = !1;
	}, S = cs, C = cs, w = function() {
		s = _s(c, po), C = Oo(+!!Wo, s), n && (S = Oo(0, _s(c, fo))), v = Sc;
	}, T = function() {
		d._gsap.y = ls(parseFloat(d._gsap.y) + f.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0;
	}, E = function() {
		if (y) {
			requestAnimationFrame(x);
			var e = ls(o.deltaY / 2), t = C(f.v - e);
			if (d && t !== f.v + f.offset) {
				f.offset = t - f.v;
				var n = ls((parseFloat(d && d._gsap.y) || 0) - f.offset);
				d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", d._gsap.y = n + "px", f.cacheID = G.cache, jc();
			}
			return !0;
		}
		f.offset && T(), y = !0;
	}, D, O, k, A, j = function() {
		w(), D.isActive() && D.vars.scrollY > s && (f() > s ? D.progress(1) && f(s) : D.resetTo("scrollY", s));
	};
	return d && K.set(d, { y: "+=0" }), e.ignoreCheck = function(e) {
		return Wo && e.type === "touchmove" && E(e) || m > 1.05 && e.type !== "touchstart" || o.isGesturing || e.touches && e.touches.length > 1;
	}, e.onPress = function() {
		y = !1;
		var e = m;
		m = ls((q.visualViewport && q.visualViewport.scale || 1) / h), D.pause(), e !== m && Jc(c, m > 1.01 || !n && "x"), O = p(), k = f(), w(), v = Sc;
	}, e.onRelease = e.onGestureStart = function(e, t) {
		if (f.offset && T(), !t) A.restart(!0);
		else {
			G.cache++;
			var r = _(), i, o;
			n && (i = p(), o = i + r * .05 * -e.velocityX / .227, r *= qc(p, i, o, _s(c, fo)), D.vars.scrollX = S(o)), i = f(), o = i + r * .05 * -e.velocityY / .227, r *= qc(f, i, o, _s(c, po)), D.vars.scrollY = C(o), D.invalidate().duration(r).play(.01), (Wo && D.vars.scrollY >= s || i >= s - 1) && K.to({}, {
				onUpdate: j,
				duration: r
			});
		}
		a && a(e);
	}, e.onWheel = function() {
		D._ts && D.pause(), $o() - g > 1e3 && (v = 0, g = $o());
	}, e.onChange = function(e, t, r, i, a) {
		if (Sc !== v && w(), t && n && p(S(i[2] === t ? O + (e.startX - e.x) : p() + t - i[1])), r) {
			f.offset && T();
			var o = a[2] === r, s = o ? k + e.startY - e.y : f() + r - a[1], c = C(s);
			o && s !== c && (k += c - s), f(c);
		}
		(r || t) && jc();
	}, e.onEnable = function() {
		Jc(c, !n && "x"), Q.addEventListener("refresh", j), Zs(q, "resize", j), f.smooth &&= (f.target.style.scrollBehavior = "auto", p.smooth = !1), b.enable();
	}, e.onDisable = function() {
		Jc(c, !0), Qs(q, "resize", j), Q.removeEventListener("refresh", j), b.kill();
	}, e.lockAxis = e.lockAxis !== !1, o = new So(e), o.iOS = Wo, Wo && !f() && f(1), Wo && K.ticker.add(cs), A = o._dc, D = K.to(o, {
		ease: "power4",
		paused: !0,
		inherit: !1,
		scrollX: n ? "+=0.1" : "+=0",
		scrollY: "+=0.1",
		modifiers: { scrollY: Wc(f, f(), function() {
			return D.pause();
		}) },
		onUpdate: jc,
		onComplete: A.vars.onComplete
	}), o;
};
Q.sort = function(e) {
	if (bs(e)) return Z.sort(e);
	var t = q.pageYOffset || 0;
	return Q.getAll().forEach(function(e) {
		return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + q.innerHeight;
	}), Z.sort(e || function(e, t) {
		return (e.vars.refreshPriority || 0) * -1e6 + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6);
	});
}, Q.observe = function(e) {
	return new So(e);
}, Q.normalizeScroll = function(e) {
	if (e === void 0) return Bo;
	if (e === !0 && Bo) return Bo.enable();
	if (e === !1) Bo && Bo.kill(), Bo = e;
	else {
		var t = e instanceof So ? e : tl(e);
		return Bo && Bo.target === t.target && Bo.kill(), fs(t.target) && (Bo = t), t;
	}
}, Q.core = {
	_getVelocityProp: _o,
	_inputObserver: Zc,
	_scrollers: G,
	_proxies: $a,
	bridge: {
		ss: function() {
			ts || hc("scrollStart"), ts = $o();
		},
		ref: function() {
			return jo;
		}
	}
}, ds() && K.registerPlugin(Q);
//#endregion
//#region ../../../../Downloads/Portfolio-Elena-Preview/component-src/ReferenceMotion.ts
function nl() {
	la.registerPlugin(Q, Na), la.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
		let e = [], t = document.querySelectorAll("#about .about-h, #experience .section-h, #work>.section-h, #education>.section-h, #contact h2"), n = document.querySelectorAll(".hero-summary .intro-strip>p, #about .about-body>p, #contact .lede"), r = (t, n) => {
			t.classList.remove("reveal");
			let r = Na.create(t, {
				type: n ? "lines" : "lines,chars",
				mask: n ? "lines" : "chars",
				charsClass: "v2-copy-char",
				linesClass: "v2-copy-line",
				autoSplit: !0,
				onSplit(e) {
					return n || e.masks.forEach((e) => {
						e.style.paddingInline = ".04em", e.style.marginInline = "-.04em", e.style.boxSizing = "content-box";
					}), la.fromTo(n ? e.lines : e.chars, { yPercent: 100 }, {
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
		let i = document.querySelector(".v2-ending"), a = document.querySelector("#contact"), o = la.matchMedia();
		o.add("(min-width:1026px)", () => {
			i && a && la.fromTo(a, { yPercent: 20 }, {
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
	}), document.querySelectorAll(".contact-pill, .v2-contact-cta, .v2-resume-button, .hero-browse").forEach((e) => {
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
la.registerPlugin(Q);
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
	return /* @__PURE__ */ (0, x.jsx)(Pa, { reduced: e });
}
function ll({ item: e, index: t, compact: n = !1 }) {
	let r = b.useRef(null), i = n ? 160 : 270, a = b.useRef(null), [o, s] = b.useState(i), [c, l] = b.useState(!1), u = il[e.id];
	b.useLayoutEffect(() => {
		let e = r.current;
		if (!e) return;
		let t = la.matchMedia();
		return t.add("(prefers-reduced-motion: no-preference)", () => {
			e.dataset.scrollEntrance = "ready";
			let t = la.fromTo(e, {
				opacity: 0,
				y: n ? 36 : 72
			}, {
				opacity: 1,
				y: 0,
				ease: "power2.inOut",
				scrollTrigger: {
					trigger: e,
					start: "top 95%",
					end: "top 65%",
					scrub: .45,
					invalidateOnRefresh: !0
				}
			}), r = () => {
				t.scrollTrigger?.kill(), t.kill(), la.set(e, { clearProps: "transform,opacity,visibility" });
			};
			return e.addEventListener("focusin", r, { once: !0 }), () => {
				e.removeEventListener("focusin", r), delete e.dataset.scrollEntrance;
			};
		}), () => t.revert();
	}, [n]), b.useEffect(() => {
		let e = a.current;
		if (!e) return;
		let t = new ResizeObserver(([e]) => s(Math.min(i, e.contentRect.width - 32)));
		return t.observe(e), () => t.disconnect();
	}, [i]);
	let d = b.useMemo(() => [{
		name: "Case study",
		meta: e.title,
		image: ol[e.id]
	}, ...u.links.map((t) => ({
		name: t.label.replace(/\s*[↗→]$/, ""),
		meta: e.title,
		href: t.url,
		image: ol[e.id]
	}))], [e.id]);
	return /* @__PURE__ */ (0, x.jsxs)("article", {
		ref: r,
		className: "v2-project-card" + (n ? " v1-mini-project" : "") + (c ? " folder-open" : ""),
		"aria-labelledby": `v2-title-${e.id}`,
		children: [
			!n && /* @__PURE__ */ (0, x.jsxs)("div", {
				className: "v2-card-top",
				children: [/* @__PURE__ */ (0, x.jsx)("span", { children: String(t + 1).padStart(2, "0") }), /* @__PURE__ */ (0, x.jsx)("span", { children: e.category })]
			}),
			/* @__PURE__ */ (0, x.jsx)("div", {
				className: "v2-folder-stage",
				ref: a,
				children: /* @__PURE__ */ (0, x.jsx)(le, {
					label: e.title,
					meta: `${d.length} resources`,
					tone: "light",
					art: "none",
					image: ol[e.id],
					appear: !1,
					style: {
						"--gf-hover-lift": `${(n ? -30 : -55) * 340 / o}px`,
						"--gf-open-lift": `${(n ? -80 : -140) * 340 / o}px`,
						"--gf-open-spread": `${(n ? 22 : 50) * 340 / o}px`,
						"--gf-open-stack": `${(n ? 20 : 31) * 340 / o}px`
					},
					files: d,
					action: "none",
					width: o,
					open: c,
					onOpenChange: l,
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
				children: [
					n ? "Case study" : "Open full case study",
					" ",
					/* @__PURE__ */ (0, x.jsx)("span", {
						className: "v2-project-arrow",
						"aria-hidden": "true",
						children: "↗︎"
					})
				]
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
