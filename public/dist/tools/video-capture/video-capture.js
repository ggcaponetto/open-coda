(function webpackUniversalModuleDefinition(root, factory) {
	//Video capture library comment
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	//Video capture library comment
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	//Video capture library comment
	else if(typeof exports === 'object')
		exports["video-capture"] = factory();
	//Video capture library comment
	else
		root["video-capture"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, process, Buffer, setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdadeltaOptimizer", function() { return Od; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdagradOptimizer", function() { return Md; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdamOptimizer", function() { return Bd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdamaxOptimizer", function() { return Pd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorage", function() { return aa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENV", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Environment", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KernelBackend", function() { return ia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentumOptimizer", function() { return Wd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Optimizer", function() { return _d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RMSPropOptimizer", function() { return Ud; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rank", function() { return Ct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reduction", function() { return Ch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SGDOptimizer", function() { return Ld; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tensor", function() { return wt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TensorBuffer", function() { return gt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Variable", function() { return St; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return _r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acos", function() { return Or; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acosh", function() { return Mr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return po; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addN", function() { return vo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStrict", function() { return mo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return Ml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "any", function() { return Bl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argMax", function() { return Pl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argMin", function() { return Ll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asin", function() { return Br; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asinh", function() { return Pr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan", function() { return Lr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan2", function() { return go; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atanh", function() { return Wr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avgPool", function() { return Il; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avgPool3d", function() { return Al; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backend", function() { return hn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backend_util", function() { return Ea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicLSTMCell", function() { return eh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "batchNorm", function() { return _c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "batchNorm2d", function() { return Oc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "batchNorm3d", function() { return Mc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "batchNorm4d", function() { return Bc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "batchNormalization", function() { return Fc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "batchNormalization2d", function() { return Tc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "batchNormalization3d", function() { return Dc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "batchNormalization4d", function() { return Nc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "batchToSpaceND", function() { return rr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "booleanMaskAsync", function() { return Zc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "broadcastTo", function() { return Xu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browser", function() { return kd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return er; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return or; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return Ur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clipByValue", function() { return Vr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return Yu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complex", function() { return Tn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return Yn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat1d", function() { return $n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat2d", function() { return Qn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat3d", function() { return Jn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat4d", function() { return Zn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conv1d", function() { return rl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conv2d", function() { return ol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conv2dTranspose", function() { return fl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conv3d", function() { return al; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conv3dTranspose", function() { return dl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return zr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cosh", function() { return Gr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cumsum", function() { return ar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customGrad", function() { return ea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecationWarn", function() { return Xe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "depthToSpace", function() { return ir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "depthwiseConv2d", function() { return ul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diag", function() { return ph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableDeprecationWarnings", function() { return je; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispose", function() { return tn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disposeVariables", function() { return Ye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return _o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divNoNan", function() { return nc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divStrict", function() { return yo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return vl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropout", function() { return vh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elu", function() { return Kl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableDebugMode", function() { return Ke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableProdMode", function() { return qe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "engine", function() { return $e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "env", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equal", function() { return Pc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalStrict", function() { return Lc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erf", function() { return Hr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exp", function() { return qr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandDims", function() { return sr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expm1", function() { return Kr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eye", function() { return oc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fft", function() { return sh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fill", function() { return Hn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findBackend", function() { return un; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findBackendFactory", function() { return cn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return jr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floorDiv", function() { return xo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frame", function() { return xh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fused", function() { return ef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gather", function() { return Qc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gatherND", function() { return dh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gather_util", function() { return Mo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackend", function() { return an; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGradient", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKernel", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKernelsForBackend", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grad", function() { return $o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grads", function() { return Qo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greater", function() { return Wc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greaterEqual", function() { return Uc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greaterEqualStrict", function() { return Vc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greaterStrict", function() { return zc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hammingWindow", function() { return yh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hannWindow", function() { return gh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifft", function() { return uh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imag", function() { return Nn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "image", function() { return jh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inTopKAsync", function() { return Eh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "io", function() { return wd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "irfft", function() { return lh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFinite", function() { return ao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInf", function() { return oo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return ro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keep", function() { return en; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leakyRelu", function() { return jl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "less", function() { return Gc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessEqual", function() { return Hc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessEqualStrict", function() { return qc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessStrict", function() { return Kc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linalg", function() { return Lh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linspace", function() { return qn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localResponseNormalization", function() { return Zl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return Xr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log1p", function() { return Yr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logSigmoid", function() { return $r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logSoftmax", function() { return oa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logSumExp", function() { return Wl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logicalAnd", function() { return $u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logicalNot", function() { return Qu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logicalOr", function() { return Ju; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logicalXor", function() { return Zu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "losses", function() { return _h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matMul", function() { return pl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "math", function() { return Rd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return Ul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxPool", function() { return Rl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxPool3d", function() { return Sl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maximum", function() { return bo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maximumStrict", function() { return wo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return Vl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memory", function() { return Qe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return zl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minimum", function() { return Co; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minimumStrict", function() { return Eo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mod", function() { return Ro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modStrict", function() { return Io; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moments", function() { return Gl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movingAverage", function() { return rh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return ko; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mulStrict", function() { return So; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiRNNCell", function() { return nh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multinomial", function() { return ac; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "neg", function() { return Qr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextFrame", function() { return Hd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "norm", function() { return th; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return jc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEqualStrict", function() { return Xc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneHot", function() { return ic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ones", function() { return zn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onesLike", function() { return jn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op", function() { return An; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outerProduct", function() { return ml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad", function() { return ur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad1d", function() { return cr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad2d", function() { return lr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad3d", function() { return hr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad4d", function() { return fr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pool", function() { return kl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pow", function() { return Ao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "powStrict", function() { return To; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prelu", function() { return Xl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "print", function() { return nr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prod", function() { return ql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profile", function() { return Je; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rand", function() { return sc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomGamma", function() { return gc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomNormal", function() { return yc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomUniform", function() { return xc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return Kn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ready", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "real", function() { return Dn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reciprocal", function() { return Jr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBackend", function() { return ln; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerGradient", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerKernel", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relu", function() { return Yl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relu6", function() { return $l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeBackend", function() { return sn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reshape", function() { return dr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverse", function() { return gl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverse1d", function() { return yl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverse2d", function() { return xl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverse3d", function() { return bl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverse4d", function() { return wl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rfft", function() { return ch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return Zr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rsqrt", function() { return to; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scalar", function() { return On; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scatterND", function() { return ih; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scatter_util", function() { return Vo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selu", function() { return Ql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "separableConv2d", function() { return hl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serialization", function() { return Dd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBackend", function() { return rn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPlatform", function() { return fn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setdiff1dAsync", function() { return yr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sigmoid", function() { return eo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sign", function() { return no; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signal", function() { return wh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return io; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinh", function() { return so; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return Tl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice1d", function() { return Dl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice2d", function() { return Nl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice3d", function() { return Fl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice4d", function() { return _l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice_util", function() { return Yo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "softmax", function() { return ra; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "softplus", function() { return uo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spaceToBatchND", function() { return pr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sparseToDense", function() { return fh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spectral", function() { return hh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return tr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return co; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "square", function() { return bc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDifference", function() { return wc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDifferenceStrict", function() { return Do; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squeeze", function() { return vr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stack", function() { return mr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "step", function() { return lo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stft", function() { return bh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stridedSlice", function() { return oh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return No; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subStrict", function() { return Fo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return Hl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumOutType", function() { return Dt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tan", function() { return ho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tanh", function() { return fo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tensor", function() { return Fn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tensor1d", function() { return Mn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tensor2d", function() { return Bn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tensor3d", function() { return Pn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tensor4d", function() { return Ln; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tensor5d", function() { return Wn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tensor6d", function() { return Un; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tensor_util", function() { return Mt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test_util", function() { return dc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tidy", function() { return Ze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tile", function() { return rc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time", function() { return nn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topk", function() { return ah; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "train", function() { return zd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return Jl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncatedNormal", function() { return Cc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregisterGradient", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregisterKernel", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsortedSegmentSum", function() { return Jc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstack", function() { return gr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "util", function() { return st; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueAndGrad", function() { return Jo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueAndGrads", function() { return Zo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variable", function() { return Vn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variableGrads", function() { return ta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version_core", function() { return Nd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webgl", function() { return Fd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "where", function() { return tc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whereAsync", function() { return ec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeros", function() { return Gn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zerosLike", function() { return Xn; });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};function e(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}function n(t,e,n,r){return new(n||(n=Promise))((function(o,a){function i(t){try{u(r.next(t))}catch(t){a(t)}}function s(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(i,s)}u((r=r.apply(t,e||[])).next())}))}function r(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}var o=function(){function t(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return t.prototype.setPlatform=function(t,e){null!=this.platform&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=t,this.platform=e},t.prototype.registerFlag=function(t,e,n){if(this.flagRegistry[t]={evaluationFn:e,setHook:n},null!=this.urlFlags[t]){var r=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+r+"."),this.set(t,r)}},t.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},t.prototype.getNumber=function(t){return this.get(t)},t.prototype.getBool=function(t){return this.get(t)},t.prototype.getFlags=function(){return this.flags},Object.defineProperty(t.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),t.prototype.set=function(t,e){if(null==this.flagRegistry[t])throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=e,null!=this.flagRegistry[t].setHook&&this.flagRegistry[t].setHook(e)},t.prototype.evaluateFlag=function(t){if(null==this.flagRegistry[t])throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},t.prototype.setFlags=function(t){this.flags=Object.assign({},t)},t.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},t.prototype.populateURLFlags=function(){var t=this;if(void 0!==this.global&&void 0!==this.global.location&&void 0!==this.global.location.search){var e,n,r=(e=this.global.location.search,n={},e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return a(n,e[0],e[1]),e.join("=")})),n);if("tfjsflags"in r)r.tfjsflags.split(",").forEach((function(e){var n=e.split(":"),r=n[0],o=n[1];t.urlFlags[r]=function(t,e){if("true"===(e=e.toLowerCase())||"false"===e)return"true"===e;if(""+ +e===e)return+e;throw new Error("Could not parse value flag value "+e+" for flag "+t+".")}(r,o)}))}},t}();function a(t,e,n){t[decodeURIComponent(e)]=decodeURIComponent(n||"")}function i(){return s}var s=null;var u=new Map,c=new Map;function l(t,e){var n=g(t,e);return u.get(n)}function h(t){return c.get(t)}function f(t){for(var e=u.entries(),n=[];;){var r=e.next(),o=r.done,a=r.value;if(o)break;var i=a[0],s=a[1];i.split("_")[0]===t&&n.push(s)}return n}function d(t){var e=t.kernelName,n=t.backendName,r=g(e,n);if(u.has(r))throw new Error("The kernel '"+e+"' for backend '"+n+"' is already registered");u.set(r,t)}function p(t){var e=t.kernelName;c.has(e)&&console.warn("Overriding the gradient for '"+e+"'"),c.set(e,t)}function v(t,e){var n=g(t,e);if(!u.has(n))throw new Error("The kernel '"+t+"' for backend '"+e+"' is not registered");u.delete(n)}function m(t){if(!c.has(t))throw new Error("The gradient '"+t+"' for backend is not registered");c.delete(t)}function g(t,e){return e+"_"+t}function y(t){for(var e=t.length,n=0,r=0;e>0;)r=Math.random()*e|0,n=t[--e],t[e]=t[r],t[r]=n}function x(t,e,n){return Math.max(t,Math.min(e,n))}function b(t){return t%2==0?t:t+1}function w(t){for(var e=0,n=0;n<t.length;n++)e+=t[n];return e}function C(t,e){if(!t)throw new Error("string"==typeof e?e:e())}function E(t,e,n){void 0===n&&(n=""),C(S(t,e),(function(){return n+" Shapes "+t+" and "+e+" must match"}))}function R(t){C(null!=t,(function(){return"The input to the tensor constructor must be a non-null value."}))}function I(t,e,n){if(void 0===e&&(e=[]),void 0===n&&(n=!1),null==e&&(e=[]),Array.isArray(t)||V(t)&&!n)for(var r=0;r<t.length;++r)I(t[r],e,n);else e.push(t);return e}function k(t){if(0===t.length)return 1;for(var e=t[0],n=1;n<t.length;n++)e*=t[n];return e}function S(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function A(t){return t%1==0}function T(t){if(null!=Math.tanh)return Math.tanh(t);if(t===1/0)return 1;if(t===-1/0)return-1;var e=Math.exp(2*t);return(e-1)/(e+1)}function D(t){var e=Math.ceil(Math.sqrt(t));return[e,Math.ceil(t/e)]}function N(t,e){return e<=t.length?t:t+" ".repeat(e-t.length)}function F(t,e,n){return void 0===e&&(e=function(t){return 0}),new Promise((function(r,o){var a=0,i=function(){if(t())r();else{a++;var s=e(a);null!=n&&a>=n?o():setTimeout(i,s)}};i()}))}function _(t,e){for(var n=1,r=-1,o=0;o<t.length;++o)if(t[o]>=0)n*=t[o];else if(-1===t[o]){if(-1!==r)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+r+" and dim "+o);r=o}else if(t[o]<0)throw Error("Shapes can not be < 0. Found "+t[o]+" at dim "+o);if(-1===r){if(e>0&&e!==n)throw Error("Size("+e+") must match the product of shape "+t);return t}if(0===n)throw Error("Cannot infer the missing size in ["+t+"] when there are 0 elements");if(e%n!=0)throw Error("The implicit shape can't be a fractional number. Got "+e+" / "+n);var a=t.slice();return a[r]=e/n,a}function O(t,e){var n=e.length;return C((t=null==t?e.map((function(t,e){return e})):[].concat(t)).every((function(t){return t>=-n&&t<n})),(function(){return"All values in axis param must be in range [-"+n+", "+n+") but got axis "+t})),C(t.every((function(t){return A(t)})),(function(){return"All values in axis param must be integers but got axis "+t})),t.map((function(t){return t<0?n+t:t}))}function M(t,e){for(var n=[],r=[],o=null!=e&&Array.isArray(e)&&0===e.length,a=null==e||o?null:O(e,t).sort(),i=0,s=0;s<t.length;++s){if(null!=a){if(a[i]===s&&1!==t[s])throw new Error("Can't squeeze axis "+s+" since its dim '"+t[s]+"' is not 1");(null==a[i]||a[i]>s)&&1===t[s]&&(n.push(t[s]),r.push(s)),a[i]<=s&&i++}1!==t[s]&&(n.push(t[s]),r.push(s))}return{newShape:n,keptDims:r}}function B(t,e){var n=null;if(null==t||"float32"===t)n=new Float32Array(e);else if("int32"===t)n=new Int32Array(e);else{if("bool"!==t)throw new Error("Unknown data type "+t);n=new Uint8Array(e)}return n}function P(t,e){var n=null;if(null==t||"float32"===t)n=new Float32Array(e);else if("int32"===t)n=new Int32Array(e);else if("bool"===t)n=new Uint8Array(e);else{if("string"!==t)throw new Error("Unknown data type "+t);n=new Array(e)}return n}function L(t,e){for(var n=0;n<t.length;n++){var r=t[n];if(isNaN(r)||!isFinite(r))throw Error("A tensor of type "+e+" being uploaded contains "+r+".")}}function W(t){return"bool"===t||"complex64"===t||"float32"===t||"int32"===t||"string"===t}function U(t,e){return"complex64"!==e&&(("float32"!==e||"complex64"===t)&&(("int32"!==e||"float32"===t||"complex64"===t)&&("bool"!==e||"bool"!==t)))}function V(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array}function z(t){if("float32"===t||"int32"===t)return 4;if("complex64"===t)return 8;if("bool"===t)return 1;throw new Error("Unknown dtype "+t)}function G(t){if(null==t)return 0;var e=0;return t.forEach((function(t){return e+=t.length})),e}function H(t){return"string"==typeof t||t instanceof String}function q(t){return"boolean"==typeof t}function K(t){return"number"==typeof t}function j(t){return Array.isArray(t)?j(t[0]):t instanceof Float32Array?"float32":t instanceof Int32Array||t instanceof Uint8Array?"int32":K(t)?"float32":H(t)?"string":q(t)?"bool":"float32"}function X(t){return!!(t&&t.constructor&&t.call&&t.apply)}function Y(t,e){for(var n=e;n<t;++n)if(t%n==0)return n;return t}function $(t){var e=t.length;if(e<2)return[];var n=new Array(e-1);n[e-2]=t[e-1];for(var r=e-3;r>=0;--r)n[r]=n[r+1]*t[r+1];return n}function Q(t,e,n){if("string"===e)throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(t)&&(t=I(t)),n&&L(t,e),function(t,e){return t instanceof Float32Array&&"float32"===e||t instanceof Int32Array&&"int32"===e||t instanceof Uint8Array&&"bool"===e}(t,e))return t;if(null==e||"float32"===e||"complex64"===e)return new Float32Array(t);if("int32"===e)return new Int32Array(t);if("bool"===e){for(var r=new Uint8Array(t.length),o=0;o<r.length;++o)0!==Math.round(t[o])&&(r[o]=1);return r}throw new Error("Unknown data type "+e)}function J(t,e){if(0===t.length)return e[0];var n=t.reduce((function(t,e){return t*e}));if(0===n)return[];if(n!==e.length)throw new Error("["+t+"] does not match the input size.");return function t(e,n,r){var o=new Array;if(1===n.length)for(var a=n[0],i=0;i<a;i++)o[i]=r[e+i];else{a=n[0];var s=n.slice(1),u=s.reduce((function(t,e){return t*e}));for(i=0;i<a;i++)o[i]=t(e+i*u,s,r)}return o}(0,t,e)}function Z(t,e){for(var n=tt(t,e),r=0;r<n.length;r++)n[r]=1;return n}function tt(t,e){if(null==e||"float32"===e||"complex64"===e)return new Float32Array(t);if("int32"===e)return new Int32Array(t);if("bool"===e)return new Uint8Array(t);throw new Error("Unknown data type "+e)}function et(){return i().platform.now()}function nt(t){t.forEach((function(e){C(Number.isInteger(e)&&e>=0,(function(){return"Tensor must have a shape comprised of positive integers but got shape ["+t+"]."}))}))}function rt(t,e){return void 0===e&&(e="utf-8"),e=e||"utf-8",i().platform.encode(t,e)}function ot(t,e){return void 0===e&&(e="utf-8"),e=e||"utf-8",i().platform.decode(t,e)}function at(t,e,n){if(0===e)return 0;if(1===e)return t[0];for(var r=t[t.length-1],o=0;o<t.length-1;++o)r+=n[o]*t[o];return r}function it(t,e,n){if(0===e)return[];if(1===e)return[t];for(var r=new Array(e),o=0;o<r.length-1;++o)r[o]=Math.floor(t/n[o]),t-=r[o]*n[o];return r[r.length-1]=t,r}var st=Object.freeze({shuffle:y,clamp:x,nearestLargerEven:b,sum:w,randUniform:function(t,e){var n=Math.random();return e*n+(1-n)*t},distSquared:function(t,e){for(var n=0,r=0;r<t.length;r++){var o=Number(t[r])-Number(e[r]);n+=o*o}return n},assert:C,assertShapesMatch:E,assertNonNull:R,flatten:I,sizeFromShape:k,isScalarShape:function(t){return 0===t.length},arraysEqual:S,isInt:A,tanh:T,sizeToSquarishShape:D,createShuffledIndices:function(t){for(var e=new Uint32Array(t),n=0;n<t;++n)e[n]=n;return y(e),e},rightPad:N,repeatedTry:F,inferFromImplicitShape:_,parseAxisParam:O,squeezeShape:M,getTypedArrayFromDType:B,getArrayFromDType:P,checkConversionForErrors:L,isValidDtype:W,hasEncodingLoss:U,isTypedArray:V,bytesPerElement:z,bytesFromStringArray:G,isString:H,isBoolean:q,isNumber:K,inferDtype:j,isFunction:X,nearestDivisor:Y,computeStrides:$,toTypedArray:Q,toNestedArray:J,makeOnesTypedArray:Z,makeZerosTypedArray:tt,now:et,assertNonNegativeIntegerDimensions:nt,fetch:function(t,e){return i().platform.fetch(t,e)},encodeString:rt,decodeString:ot,locToIndex:at,indexToLoc:it}),ut=function(){function t(t,e){this.backendTimer=t,this.logger=e,null==e&&(this.logger=new ct)}return t.prototype.profileKernel=function(t,e,n){var r,o=this,a=this.backendTimer.time((function(){r=n()}));return r.forEach((function(n){n.data().then((function(r){!function(t,e,n){if("float32"!==e)return!1;for(var r=0;r<t.length;r++){var o=t[r];if(isNaN(o)||!isFinite(o))return console.warn("Found "+o+" in the result of '"+n+"'"),!0}}(r,n.dtype,t),a.then((function(a){var i="";null!=a.getExtraProfileInfo&&(i=a.getExtraProfileInfo()),o.logger.logKernelProfile(t,n,r,a.kernelMs,e,i)}))}))})),r},t}();var ct=function(){function t(){}return t.prototype.logKernelProfile=function(t,e,n,r,o,a){var i="number"==typeof r?N(r+"ms",9):r.error,s=N(t,25),u=e.rank,c=e.size,l=N(e.shape.toString(),14),h="";for(var f in o){var d=o[f].shape||e.shape,p=d.length;h+=f+": "+p+"D "+(p>0?d:"")+" "}console.log("%c"+s+"\t%c"+i+"\t%c"+u+"D "+l+"\t%c"+c+"\t%c"+h+"\t%c"+a,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},t}();var lt=20,ht=3,ft=7;function dt(t,e,n,r){var o=$(e),a=function(t,e,n,r){var o=k(e),a=r[r.length-1],i=new Array(a).fill(0),s=e.length,u="complex64"===n?mt(t):t;if(s>1)for(var c=0;c<o/a;c++)for(var l=c*a,h=0;h<a;h++)i[h]=Math.max(i[h],pt(u[l+h],0,n).length);return i}(t,e,n,o),i=e.length,s=function t(e,n,r,o,a,i){void 0===i&&(i=!0);var s="complex64"===r?2:1,u=n[0],c=n.length;if(0===c){return"complex64"===r?[pt(mt(e)[0],0,r)]:"bool"===r?[vt(e[0])]:[e[0].toString()]}if(1===c){if(u>lt){var l=ht*s,h=Array.from(e.slice(0,l)),f=Array.from(e.slice((u-ht)*s,u*s));return"complex64"===r&&(h=mt(h),f=mt(f)),["["+h.map((function(t,e){return pt(t,a[e],r)})).join(", ")+", ..., "+f.map((function(t,e){return pt(t,a[u-ht+e],r)})).join(", ")+"]"]}return["["+("complex64"===r?mt(e):Array.from(e)).map((function(t,e){return pt(t,a[e],r)})).join(", ")+"]"]}var d=n.slice(1),p=o.slice(1),v=o[0]*s,m=[];if(u>lt){for(var g=0;g<ht;g++){var y=(x=g*v)+v;m.push.apply(m,t(e.slice(x,y),d,r,p,a,!1))}m.push("...");for(g=u-ht;g<u;g++){y=(x=g*v)+v;m.push.apply(m,t(e.slice(x,y),d,r,p,a,g===u-1))}}else for(g=0;g<u;g++){var x;y=(x=g*v)+v;m.push.apply(m,t(e.slice(x,y),d,r,p,a,g===u-1))}var b=2===c?",":"";m[0]="["+m[0]+b;for(g=1;g<m.length-1;g++)m[g]=" "+m[g]+b;var w=",\n";for(g=2;g<c;g++)w+="\n";return m[m.length-1]=" "+m[m.length-1]+"]"+(i?"":w),m}(t,e,n,o,a),u=["Tensor"];return r&&(u.push("  dtype: "+n),u.push("  rank: "+i),u.push("  shape: ["+e+"]"),u.push("  values:")),u.push(s.map((function(t){return"    "+t})).join("\n")),u.join("\n")}function pt(t,e,n){return N(Array.isArray(t)?parseFloat(t[0].toFixed(ft))+" + "+parseFloat(t[1].toFixed(ft))+"j":H(t)?"'"+t+"'":"bool"===n?vt(t):parseFloat(t.toFixed(ft)).toString(),e)}function vt(t){return 0===t?"false":"true"}function mt(t){for(var e=[],n=0;n<t.length;n+=2)e.push([t[n],t[n+1]]);return e}var gt=function(){function t(t,e,n){var r=this;if(this.dtype=e,this.shape=t.slice(),this.size=k(t),null!=n){var o=n.length;C(o===this.size,(function(){return"Length of values '"+o+"' does not match the size inferred by the shape '"+r.size+"'."}))}if("complex64"===e)throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||P(e,this.size),this.strides=$(t)}return t.prototype.set=function(t){for(var e=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];0===n.length&&(n=[0]),C(n.length===this.rank,(function(){return"The number of provided coordinates ("+n.length+") must match the rank ("+e.rank+")"}));var o=this.locToIndex(n);this.values[o]=t},t.prototype.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];0===t.length&&(t=[0]);for(var n=0,r=0,o=t;r<o.length;r++){var a=o[r];if(a<0||a>=this.shape[n]){var i="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(i)}n++}for(var s=t[t.length-1],u=0;u<t.length-1;++u)s+=this.strides[u]*t[u];return this.values[s]},t.prototype.locToIndex=function(t){if(0===this.rank)return 0;if(1===this.rank)return t[0];for(var e=t[t.length-1],n=0;n<t.length-1;++n)e+=this.strides[n]*t[n];return e},t.prototype.indexToLoc=function(t){if(0===this.rank)return[];if(1===this.rank)return[t];for(var e=new Array(this.shape.length),n=0;n<e.length-1;++n)e[n]=Math.floor(t/this.strides[n]),t-=e[n]*this.strides[n];return e[e.length-1]=t,e},Object.defineProperty(t.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),t.prototype.toTensor=function(){return yt().makeTensor(this.values,this.shape,this.dtype)},t}(),yt=null,xt=null,bt=null;var wt=function(){function t(t,e,n,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=k(t),this.strides=$(t),this.dataId=n,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}return t.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},t.prototype.asScalar=function(){return this.throwIfDisposed(),C(1===this.size,(function(){return"The array must have only 1 element."})),this.reshape([])},t.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},t.prototype.as2D=function(t,e){return this.throwIfDisposed(),this.reshape([t,e])},t.prototype.as3D=function(t,e,n){return this.throwIfDisposed(),this.reshape([t,e,n])},t.prototype.as4D=function(t,e,n,r){return this.throwIfDisposed(),this.reshape([t,e,n,r])},t.prototype.as5D=function(t,e,n,r,o){return this.throwIfDisposed(),this.reshape([t,e,n,r,o])},t.prototype.asType=function(t){return this.throwIfDisposed(),xt.cast(this,t)},Object.defineProperty(t.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),t.prototype.buffer=function(){return n(this,void 0,void 0,(function(){var t;return r(this,(function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,xt.buffer(this.shape,this.dtype,t)]}}))}))},t.prototype.bufferSync=function(){return xt.buffer(this.shape,this.dtype,this.dataSync())},t.prototype.array=function(){return n(this,void 0,void 0,(function(){var t;return r(this,(function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,J(this.shape,t)]}}))}))},t.prototype.arraySync=function(){return J(this.shape,this.dataSync())},t.prototype.data=function(){return n(this,void 0,void 0,(function(){var t,e;return r(this,(function(n){switch(n.label){case 0:return this.throwIfDisposed(),t=yt().read(this.dataId),"string"!==this.dtype?[3,2]:[4,t];case 1:e=n.sent();try{return[2,e.map((function(t){return ot(t)}))]}catch(t){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}n.label=2;case 2:return[2,t]}}))}))},t.prototype.dataSync=function(){this.throwIfDisposed();var t=yt().readSync(this.dataId);if("string"===this.dtype)try{return t.map((function(t){return ot(t)}))}catch(t){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},t.prototype.bytes=function(){return n(this,void 0,void 0,(function(){var t;return r(this,(function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,yt().read(this.dataId)];case 1:return t=e.sent(),"string"===this.dtype?[2,t]:[2,new Uint8Array(t.buffer)]}}))}))},t.prototype.dispose=function(){this.isDisposed||(yt().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(t.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),t.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},t.prototype.toFloat=function(){return this.asType("float32")},t.prototype.toInt=function(){return this.asType("int32")},t.prototype.toBool=function(){return this.asType("bool")},t.prototype.print=function(t){return void 0===t&&(t=!1),xt.print(this,t)},t.prototype.reshape=function(t){return this.throwIfDisposed(),xt.reshape(this,t)},t.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},t.prototype.expandDims=function(t){return void 0===t&&(t=0),xt.expandDims(this,t)},t.prototype.cumsum=function(t,e,n){return void 0===t&&(t=0),void 0===e&&(e=!1),void 0===n&&(n=!1),xt.cumsum(this,t,e,n)},t.prototype.squeeze=function(t){return this.throwIfDisposed(),xt.squeeze(this,t)},t.prototype.clone=function(){return this.throwIfDisposed(),xt.clone(this)},t.prototype.toString=function(t){return void 0===t&&(t=!1),dt(this.dataSync(),this.shape,this.dtype,t)},t.prototype.gather=function(t,e){return void 0===e&&(e=0),this.throwIfDisposed(),xt.gather(this,t,e)},t.prototype.matMul=function(t,e,n){return void 0===e&&(e=!1),void 0===n&&(n=!1),this.throwIfDisposed(),xt.matMul(this,t,e,n)},t.prototype.dot=function(t){return this.throwIfDisposed(),xt.dot(this,t)},t.prototype.norm=function(t,e,n){return void 0===t&&(t="euclidean"),void 0===e&&(e=null),void 0===n&&(n=!1),this.throwIfDisposed(),xt.norm(this,t,e,n)},t.prototype.slice=function(t,e){return this.throwIfDisposed(),xt.slice(this,t,e)},t.prototype.reverse=function(t){return this.throwIfDisposed(),xt.reverse(this,t)},t.prototype.concat=function(e,n){return void 0===n&&(n=0),this.throwIfDisposed(),e instanceof t&&(e=[e]),xt.concat([this].concat(e),n)},t.prototype.split=function(t,e){return void 0===e&&(e=0),this.throwIfDisposed(),xt.split(this,t,e)},t.prototype.stack=function(t,e){return void 0===e&&(e=0),xt.stack([this,t],e)},t.prototype.unstack=function(t){return void 0===t&&(t=0),xt.unstack(this,t)},t.prototype.pad=function(t,e){return void 0===e&&(e=0),xt.pad(this,t,e)},t.prototype.batchNormalization=function(t,e,n,r,o){return void 0===n&&(n=.001),bt("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,e,o,r,n)},t.prototype.batchNorm=function(t,e,n,r,o){return void 0===o&&(o=.001),this.throwIfDisposed(),xt.batchNorm(this,t,e,n,r,o)},t.prototype.all=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),xt.all(this,t,e)},t.prototype.any=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),xt.any(this,t,e)},t.prototype.logSumExp=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),xt.logSumExp(this,t,e)},t.prototype.sum=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),xt.sum(this,t,e)},t.prototype.prod=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),xt.prod(this,t,e)},t.prototype.mean=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),xt.mean(this,t,e)},t.prototype.min=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),xt.min(this,t,e)},t.prototype.max=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),xt.max(this,t,e)},t.prototype.argMin=function(t){return void 0===t&&(t=null),this.throwIfDisposed(),xt.argMin(this,t)},t.prototype.argMax=function(t){return void 0===t&&(t=null),this.throwIfDisposed(),xt.argMax(this,t)},t.prototype.cast=function(t){return this.throwIfDisposed(),xt.cast(this,t)},t.prototype.add=function(t){return this.throwIfDisposed(),xt.add(this,t)},t.prototype.addStrict=function(t){return this.throwIfDisposed(),xt.addStrict(this,t)},t.prototype.atan2=function(t){return this.throwIfDisposed(),xt.atan2(this,t)},t.prototype.sub=function(t){return this.throwIfDisposed(),xt.sub(this,t)},t.prototype.subStrict=function(t){return this.throwIfDisposed(),xt.subStrict(this,t)},t.prototype.pow=function(t){return this.throwIfDisposed(),xt.pow(this,t)},t.prototype.powStrict=function(t){return this.throwIfDisposed(),xt.powStrict(this,t)},t.prototype.mul=function(t){return this.throwIfDisposed(),xt.mul(this,t)},t.prototype.mulStrict=function(t){return this.throwIfDisposed(),xt.mulStrict(this,t)},t.prototype.floorDiv=function(t){return this.throwIfDisposed(),xt.floorDiv(this,t)},t.prototype.divStrict=function(t){return this.throwIfDisposed(),xt.divStrict(this,t)},t.prototype.minimum=function(t){return this.throwIfDisposed(),xt.minimum(this,t)},t.prototype.minimumStrict=function(t){return this.throwIfDisposed(),xt.minimumStrict(this,t)},t.prototype.maximum=function(t){return this.throwIfDisposed(),xt.maximum(this,t)},t.prototype.maximumStrict=function(t){return this.throwIfDisposed(),xt.maximumStrict(this,t)},t.prototype.mod=function(t){return this.throwIfDisposed(),xt.mod(this,t)},t.prototype.modStrict=function(t){return this.throwIfDisposed(),xt.modStrict(this,t)},t.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),xt.squaredDifferenceStrict(this,t)},t.prototype.transpose=function(t){return this.throwIfDisposed(),xt.transpose(this,t)},t.prototype.notEqual=function(t){return this.throwIfDisposed(),xt.notEqual(this,t)},t.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),xt.notEqualStrict(this,t)},t.prototype.less=function(t){return this.throwIfDisposed(),xt.less(this,t)},t.prototype.lessStrict=function(t){return this.throwIfDisposed(),xt.lessStrict(this,t)},t.prototype.equal=function(t){return this.throwIfDisposed(),xt.equal(this,t)},t.prototype.equalStrict=function(t){return this.throwIfDisposed(),xt.equalStrict(this,t)},t.prototype.lessEqual=function(t){return this.throwIfDisposed(),xt.lessEqual(this,t)},t.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),xt.lessEqualStrict(this,t)},t.prototype.greater=function(t){return this.throwIfDisposed(),xt.greater(this,t)},t.prototype.greaterStrict=function(t){return this.throwIfDisposed(),xt.greaterStrict(this,t)},t.prototype.greaterEqual=function(t){return this.throwIfDisposed(),xt.greaterEqual(this,t)},t.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),xt.greaterEqualStrict(this,t)},t.prototype.logicalAnd=function(t){return this.throwIfDisposed(),xt.logicalAnd(this,t)},t.prototype.logicalOr=function(t){return this.throwIfDisposed(),xt.logicalOr(this,t)},t.prototype.logicalNot=function(){return this.throwIfDisposed(),xt.logicalNot(this)},t.prototype.logicalXor=function(t){return this.throwIfDisposed(),xt.logicalXor(this,t)},t.prototype.where=function(t,e){return this.throwIfDisposed(),xt.where(t,this,e)},t.prototype.neg=function(){return this.throwIfDisposed(),xt.neg(this)},t.prototype.ceil=function(){return this.throwIfDisposed(),xt.ceil(this)},t.prototype.floor=function(){return this.throwIfDisposed(),xt.floor(this)},t.prototype.sign=function(){return this.throwIfDisposed(),xt.sign(this)},t.prototype.isNaN=function(){return this.throwIfDisposed(),xt.isNaN(this)},t.prototype.isInf=function(){return this.throwIfDisposed(),xt.isInf(this)},t.prototype.isFinite=function(){return this.throwIfDisposed(),xt.isFinite(this)},t.prototype.exp=function(){return this.throwIfDisposed(),xt.exp(this)},t.prototype.expm1=function(){return this.throwIfDisposed(),xt.expm1(this)},t.prototype.log=function(){return this.throwIfDisposed(),xt.log(this)},t.prototype.log1p=function(){return this.throwIfDisposed(),xt.log1p(this)},t.prototype.sqrt=function(){return this.throwIfDisposed(),xt.sqrt(this)},t.prototype.rsqrt=function(){return this.throwIfDisposed(),xt.rsqrt(this)},t.prototype.square=function(){return this.throwIfDisposed(),xt.square(this)},t.prototype.reciprocal=function(){return this.throwIfDisposed(),xt.reciprocal(this)},t.prototype.abs=function(){return this.throwIfDisposed(),xt.abs(this)},t.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),xt.clipByValue(this,t,e)},t.prototype.relu=function(){return this.throwIfDisposed(),xt.relu(this)},t.prototype.relu6=function(){return this.throwIfDisposed(),xt.relu6(this)},t.prototype.elu=function(){return this.throwIfDisposed(),xt.elu(this)},t.prototype.selu=function(){return this.throwIfDisposed(),xt.selu(this)},t.prototype.leakyRelu=function(t){return void 0===t&&(t=.2),this.throwIfDisposed(),xt.leakyRelu(this,t)},t.prototype.prelu=function(t){return this.throwIfDisposed(),xt.prelu(this,t)},t.prototype.sigmoid=function(){return this.throwIfDisposed(),xt.sigmoid(this)},t.prototype.logSigmoid=function(){return this.throwIfDisposed(),xt.logSigmoid(this)},t.prototype.softplus=function(){return this.throwIfDisposed(),xt.softplus(this)},t.prototype.zerosLike=function(){return this.throwIfDisposed(),xt.zerosLike(this)},t.prototype.onesLike=function(){return this.throwIfDisposed(),xt.onesLike(this)},t.prototype.sin=function(){return this.throwIfDisposed(),xt.sin(this)},t.prototype.cos=function(){return this.throwIfDisposed(),xt.cos(this)},t.prototype.tan=function(){return this.throwIfDisposed(),xt.tan(this)},t.prototype.asin=function(){return this.throwIfDisposed(),xt.asin(this)},t.prototype.acos=function(){return this.throwIfDisposed(),xt.acos(this)},t.prototype.atan=function(){return this.throwIfDisposed(),xt.atan(this)},t.prototype.sinh=function(){return this.throwIfDisposed(),xt.sinh(this)},t.prototype.cosh=function(){return this.throwIfDisposed(),xt.cosh(this)},t.prototype.tanh=function(){return this.throwIfDisposed(),xt.tanh(this)},t.prototype.asinh=function(){return this.throwIfDisposed(),xt.asinh(this)},t.prototype.acosh=function(){return this.throwIfDisposed(),xt.acosh(this)},t.prototype.atanh=function(){return this.throwIfDisposed(),xt.atanh(this)},t.prototype.erf=function(){return this.throwIfDisposed(),xt.erf(this)},t.prototype.round=function(){return this.throwIfDisposed(),xt.round(this)},t.prototype.step=function(t){return void 0===t&&(t=0),this.throwIfDisposed(),xt.step(this,t)},t.prototype.softmax=function(t){return void 0===t&&(t=-1),this.throwIfDisposed(),xt.softmax(this,t)},t.prototype.logSoftmax=function(t){return void 0===t&&(t=-1),this.throwIfDisposed(),xt.logSoftmax(this,t)},t.prototype.resizeBilinear=function(t,e){return void 0===e&&(e=!1),this.throwIfDisposed(),xt.image.resizeBilinear(this,t,e)},t.prototype.resizeNearestNeighbor=function(t,e){return void 0===e&&(e=!1),this.throwIfDisposed(),xt.image.resizeNearestNeighbor(this,t,e)},t.prototype.conv1d=function(t,e,n,r,o,a){return void 0===r&&(r="NWC"),void 0===o&&(o=1),this.throwIfDisposed(),xt.conv1d(this,t,e,n,r,o,a)},t.prototype.conv2d=function(t,e,n,r,o,a){return void 0===r&&(r="NHWC"),void 0===o&&(o=[1,1]),this.throwIfDisposed(),xt.conv2d(this,t,e,n,r,o,a)},t.prototype.conv2dTranspose=function(t,e,n,r,o){return this.throwIfDisposed(),xt.conv2dTranspose(this,t,e,n,r,o)},t.prototype.depthwiseConv2D=function(t,e,n,r,o,a){return void 0===r&&(r="NHWC"),void 0===o&&(o=[1,1]),this.throwIfDisposed(),xt.depthwiseConv2d(this,t,e,n,r,o,a)},t.prototype.separableConv2d=function(t,e,n,r,o,a){return void 0===o&&(o=[1,1]),void 0===a&&(a="NHWC"),this.throwIfDisposed(),xt.separableConv2d(this,t,e,n,r,o,a)},t.prototype.avgPool=function(t,e,n,r){return this.throwIfDisposed(),xt.avgPool(this,t,e,n,r)},t.prototype.maxPool=function(t,e,n,r){return this.throwIfDisposed(),xt.maxPool(this,t,e,n,r)},t.prototype.localResponseNormalization=function(t,e,n,r){return void 0===t&&(t=5),void 0===e&&(e=1),void 0===n&&(n=1),void 0===r&&(r=.5),xt.localResponseNormalization(this,t,e,n,r)},t.prototype.pool=function(t,e,n,r,o){return this.throwIfDisposed(),xt.pool(this,t,e,n,r,o)},t.prototype.variable=function(t,e,n){return void 0===t&&(t=!0),this.throwIfDisposed(),yt().makeVariable(this,t,e,n)},t.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),xt.unsortedSegmentSum(this,t,e)},t.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),xt.batchToSpaceND(this,t,e)},t.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),xt.spaceToBatchND(this,t,e)},t.prototype.topk=function(t,e){return void 0===t&&(t=1),void 0===e&&(e=!0),this.throwIfDisposed(),xt.topk(this,t,e)},t.prototype.stridedSlice=function(t,e,n,r,o,a,i,s){return void 0===r&&(r=0),void 0===o&&(o=0),void 0===a&&(a=0),void 0===i&&(i=0),void 0===s&&(s=0),this.throwIfDisposed(),xt.stridedSlice(this,t,e,n,r,o,a,i,s)},t.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),xt.depthToSpace(this,t,e)},t.prototype.fft=function(){return this.throwIfDisposed(),xt.spectral.fft(this)},t.prototype.ifft=function(){return this.throwIfDisposed(),xt.spectral.ifft(this)},t.prototype.rfft=function(){return this.throwIfDisposed(),xt.spectral.rfft(this)},t.prototype.irfft=function(){return this.throwIfDisposed(),xt.spectral.irfft(this)},t}();Object.defineProperty(wt,Symbol.hasInstance,{value:function(t){return!!t&&null!=t.dataId&&null!=t.shape&&null!=t.dtype}});var Ct,Et,Rt,It,kt,St=function(t){function n(e,n,r,o){var a=t.call(this,e.shape,e.dtype,e.dataId,o)||this;return a.trainable=n,a.name=r,a}return e(n,t),n.prototype.assign=function(t){if(t.dtype!==this.dtype)throw new Error("dtype of the new value ("+t.dtype+") and previous value ("+this.dtype+") must match");if(!S(t.shape,this.shape))throw new Error("shape of the new value ("+t.shape+") and previous value ("+this.shape+") must match");yt().disposeTensor(this),this.dataId=t.dataId,yt().incRef(this,null)},n.prototype.dispose=function(){yt().disposeVariable(this),this.isDisposedInternal=!0},n}(wt);Object.defineProperty(St,Symbol.hasInstance,{value:function(t){return t instanceof wt&&null!=t.assign&&t.assign instanceof Function}}),function(t){t.R0="R0",t.R1="R1",t.R2="R2",t.R3="R3",t.R4="R4",t.R5="R5",t.R6="R6"}(Ct||(Ct={})),function(t){t.float32="float32",t.int32="int32",t.bool="int32",t.complex64="complex64"}(Et||(Et={})),function(t){t.float32="float32",t.int32="int32",t.bool="bool",t.complex64="complex64"}(Rt||(Rt={})),function(t){t.float32="float32",t.int32="float32",t.bool="float32",t.complex64="complex64"}(It||(It={})),function(t){t.float32="complex64",t.int32="complex64",t.bool="complex64",t.complex64="complex64"}(kt||(kt={}));var At={float32:It,int32:Et,bool:Rt,complex64:kt};function Tt(t,e){if("string"===t||"string"===e){if("string"===t&&"string"===e)return"string";throw new Error("Can not upcast "+t+" with "+e)}return At[t][e]}function Dt(t){return Tt(t,"int32")}function Nt(t,e){if(t.dtype===e.dtype)return[t,e];var n=Tt(t.dtype,e.dtype);return[t.cast(n),e.cast(n)]}function Ft(t,e){C(t.dtype===e.dtype,(function(){return"The dtypes of the first("+t.dtype+") and second("+e.dtype+") input must match"}))}function _t(t){var e=[];return function t(e,n,r){if(null==e)return;if(e instanceof wt)return void n.push(e);if(o=e,!Array.isArray(o)&&"object"!=typeof o)return;var o;var a=e;for(var i in a){var s=a[i];r.has(s)||(r.add(s),t(s,n,r))}}(t,e,new Set),e}var Ot,Mt=Object.freeze({makeTypesMatch:Nt,assertTypesMatch:Ft,isTensorInList:function(t,e){return e.some((function(e){return e.id===t.id}))},getTensorsInContainer:_t}),Bt=function(){function t(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return t.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose()},t}(),Pt=function(){function t(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Bt}return t.prototype.ready=function(){return n(this,void 0,void 0,(function(){var t,e,n;return r(this,(function(r){switch(r.label){case 0:if(null!=this.pendingBackendInit)return[2,this.pendingBackendInit.then((function(){}))];if(null!=this.backendInstance)return[2];t=this.getSortedBackends(),e=0,r.label=1;case 1:return e<t.length?(n=t[e],[4,this.initializeBackend(n).success]):[3,5];case 2:return r.sent()?[4,this.setBackend(n)]:[3,4];case 3:return r.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}}))}))},Object.defineProperty(t.prototype,"backend",{get:function(){if(null!=this.pendingBackendInit)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(null==this.backendInstance){var t=this.initializeBackendsAndReturnBest(),e=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(e)}return this.backendInstance},enumerable:!0,configurable:!0}),t.prototype.backendNames=function(){return Object.keys(this.registryFactory)},t.prototype.findBackend=function(t){if(!(t in this.registry)){if(!(t in this.registryFactory))return null;if(this.initializeBackend(t).asyncInit)return null}return this.registry[t]},t.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},t.prototype.registerBackend=function(t,e,n){return void 0===n&&(n=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:n},!0)},t.prototype.setBackend=function(t){return n(this,void 0,void 0,(function(){var e,n,o;return r(this,(function(r){switch(r.label){case 0:if(null==this.registryFactory[t])throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,null!=this.registry[t]?[3,4]:(this.backendInstance=null,e=this.initializeBackend(t),n=e.success,e.asyncInit?[4,n]:[3,2]);case 1:return o=r.sent(),[3,3];case 2:o=n,r.label=3;case 3:if(!o)return[2,!1];r.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new ut(this.backendInstance),[2,!0]}}))}))},t.prototype.setupRegisteredKernels=function(){var t=this;f(this.backendName).forEach((function(e){null!=e.setupFunc&&e.setupFunc(t.backendInstance)}))},t.prototype.disposeRegisteredKernels=function(t){var e=this;f(t).forEach((function(n){null!=n.disposeFunc&&n.disposeFunc(e.registry[t])}))},t.prototype.initializeBackend=function(t){var e=this,n=this.registryFactory[t];if(null==n)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var r=n.factory();if(Promise.resolve(r)===r){var o=++this.pendingBackendInitId,a=r.then((function(n){return!(o<e.pendingBackendInitId)&&(e.registry[t]=n,e.pendingBackendInit=null,!0)})).catch((function(n){return!(o<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(n.stack||n.message),!1)}));return this.pendingBackendInit=a,{success:a,asyncInit:!0}}return this.registry[t]=r,{success:!0,asyncInit:!1}}catch(e){return console.warn("Initialization of backend "+t+" failed"),console.warn(e.stack||e.message),{success:!1,asyncInit:!1}}},t.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&null!=this.pendingBackendInit&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},t.prototype.getSortedBackends=function(){var t=this;if(0===Object.keys(this.registryFactory).length)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((function(e,n){return t.registryFactory[n].priority-t.registryFactory[e].priority}))},t.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),e=0;e<t.length;e++){var n=t[e],r=this.initializeBackend(n),o=r.success,a=r.asyncInit;if(a||o)return{name:n,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")},t.prototype.moveData=function(t,e){var n=this.state.tensorInfo.get(e),r=n.backend,o=this.readSync(e);r.disposeData(e),n.backend=t,t.move(e,o,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},t.prototype.tidy=function(t,e){var n,r=this,o=null;if(null==e){if("function"!=typeof t)throw new Error("Please provide a function to tidy()");e=t}else{if("string"!=typeof t&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof e)throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");o=t}return this.scopedRun((function(){return r.startScope(o)}),(function(){return r.endScope(n)}),(function(){return(n=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n}))},t.prototype.scopedRun=function(t,e,n){t();try{var r=n();return e(),r}catch(t){throw e(),t}},t.prototype.nextTensorId=function(){return t.nextTensorId++},t.prototype.nextVariableId=function(){return t.nextVariableId++},t.prototype.clone=function(t){var e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),n={x:t};return this.addTapeNode(this.state.activeScope.name,n,[e],(function(t){return{x:function(){return t.toFloat()}}}),[],{}),e},t.prototype.runKernel=function(t,e,n,r,o){return this.runKernelFunc(null,e,null,t,n,r,o)},t.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},t.prototype.checkKernelForMemLeak=function(t,e,n){var r=this.backend.numDataIds(),o=0;n.forEach((function(t){o+="complex64"===t.dtype?3:1}));var a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],i=r-e-o-a;if(i>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+i+" data ids) after running '"+t+"'")},t.prototype.runKernelFunc=function(t,e,n,r,o,a,i){var s,u=this,c=[],h=this.isTapeOn();null==r&&(r=null!=this.state.activeScope?this.state.activeScope.name:"");var f,d=this.state.numBytes,p=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var v,m=l(r,this.backendName);if(null!=m)f=function(){var t=u.backend.numDataIds();v=m.kernelFunc({inputs:e,attrs:o,backend:u.backend});var n=Array.isArray(v)?v:[v];u.shouldCheckForMemLeaks()&&u.checkKernelForMemLeak(r,t,n);var s=n.map((function(t){var e=t.dataId,n=t.shape,r=t.dtype;return u.makeTensorFromDataId(e,n,r)}));if(h){var l=u.getTensorsForGradient(r,e,s);if(null==l){null==i&&(i=[]);var f=s.filter((function(t,e){return i[e]}));l=(a||[]).slice().concat(f)}c=u.saveTensorsForBackwardMode(l)}return s};else{var g=function(t){h&&(c=t.map((function(t){return u.keep(u.clone(t))})))};f=function(){var e=u.backend.numDataIds();v=u.tidy((function(){return t(u.backend,g)}));var n=Array.isArray(v)?v:[v];return u.shouldCheckForMemLeaks()&&u.checkKernelForMemLeak(r,e,n),n}}return this.scopedRun((function(){return u.state.kernelDepth++}),(function(){return u.state.kernelDepth--}),(function(){s=u.ENV.getBool("DEBUG")?u.profiler.profileKernel(r,e,(function(){return f()})):f()})),h&&this.addTapeNode(r,e,s,n,c,o),this.state.profiling&&this.state.activeProfile.kernels.push({name:r,bytesAdded:this.state.numBytes-d,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-p,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map((function(t){return e[t].shape})),outputShapes:s.map((function(t){return t.shape}))}),Array.isArray(v)?s:s[0]},t.prototype.saveTensorsForBackwardMode=function(t){var e=this;return t.map((function(t){return e.keep(e.clone(t))}))},t.prototype.getTensorsForGradient=function(t,e,n){var r=h(t);if(null!=r){var o=r.inputsToSave||[],a=r.outputsToSave||[],i=o.map((function(t){return e[t]})),s=n.filter((function(t,e){return a[e]}));return i.concat(s)}return null},t.prototype.makeTensor=function(t,e,n,r){if(null==t)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",r=r||this.backend;var o=t;"string"===n&&H(t[0])&&(o=t.map((function(t){return rt(t)})));var a=r.write(o,e,n),i=new wt(e,n,a,this.nextTensorId());if(this.incRef(i,r),"string"===n){var s=this.state.tensorInfo.get(a),u=G(o);this.state.numBytes+=u-s.bytes,s.bytes=u}return i},t.prototype.makeTensorFromDataId=function(t,e,n,r){var o=new wt(e,n=n||"float32",t,this.nextTensorId());return this.incRef(o,r),o},t.prototype.makeVariable=function(t,e,n,r){void 0===e&&(e=!0),n=n||this.nextVariableId().toString(),null!=r&&r!==t.dtype&&(t=t.asType(r));var o=new St(t,e,n,this.nextTensorId());if(null!=this.state.registeredVariables[o.name])throw new Error("Variable with name "+o.name+" was already registered");return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o},t.prototype.incRef=function(t,e){var n=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,"string"===t.dtype&&this.state.numStringTensors++,0===n){this.state.numDataBuffers++;var r=0;"complex64"!==t.dtype&&"string"!==t.dtype&&(r=t.size*z(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:r,refCount:0}),this.state.numBytes+=r}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof St||this.track(t)},t.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,"string"===t.dtype&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?("complex64"!==t.dtype&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}},t.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var e=this.state.registeredVariables[t];this.disposeVariable(e)}},t.prototype.disposeVariable=function(t){this.disposeTensor(t),null!=this.state.registeredVariables[t.name]&&delete this.state.registeredVariables[t.name]},t.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,null==t.reasons&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},t.prototype.profile=function(t){return n(this,void 0,void 0,(function(){var e,n;return r(this,(function(r){return this.state.profiling=!0,e=this.state.numBytes,n=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map((function(t){return t.totalBytesSnapshot}))),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-n,[2,this.state.activeProfile]}))}))},t.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&0===this.state.kernelDepth},t.prototype.addTapeNode=function(t,e,n,r,o,a){var i=this,s={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:n,saved:o},u=h(t);null!=u&&(r=u.gradFunc),null!=r&&(s.gradient=function(t){return t=t.map((function(t,e){if(null==t){var r=n[e],o=tt(r.size,r.dtype);return i.makeTensor(o,r.shape,r.dtype)}return t})),r(t.length>1?t:t[0],o,a)}),this.state.activeTape.push(s)},t.prototype.keep=function(t){return t.kept=!0,t},t.prototype.startTape=function(){0===this.state.gradientDepth&&(this.state.activeTape=[]),this.state.gradientDepth++},t.prototype.endTape=function(){this.state.gradientDepth--},t.prototype.startScope=function(t){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e},t.prototype.endScope=function(t){for(var e=this,n=_t(t),r=new Set(n.map((function(t){return t.id}))),o=0;o<this.state.activeScope.track.length;o++){var a=this.state.activeScope.track[o];a.kept||r.has(a.id)||a.dispose()}var i=this.state.scopeStack.pop();this.state.activeScope=0===this.state.scopeStack.length?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach((function(t){t.kept||t.scopeId!==i.id||e.track(t)}))},t.prototype.gradients=function(t,e,n,r){var o=this;if(void 0===r&&(r=!1),C(e.length>0,(function(){return"gradients() received an empty list of xs."})),null!=n&&"float32"!==n.dtype)throw new Error("dy must have 'float32' dtype, but has '"+n.dtype+"'");var a=this.scopedRun((function(){return o.startTape()}),(function(){return o.endTape()}),(function(){return o.tidy("forward",t)}));C(a instanceof wt,(function(){return"The result y returned by f() must be a tensor."}));var i=function(t,e,n){for(var r={},o={},a=0;a<e.length;a++)r[e[a].id]=!0;for(a=0;a<t.length;a++){var i=(p=t[a]).inputs;for(var s in i){for(var u=i[s],c=!1,l=0;l<e.length;l++)if(r[u.id]){p.outputs.forEach((function(t){return r[t.id]=!0})),c=!0,o[p.id]=!0;break}if(c)break}}var h={};h[n.id]=!0;var f={};for(a=t.length-1;a>=0;a--)for(i=(p=t[a]).inputs,l=0;l<p.outputs.length;l++)if(h[p.outputs[l].id]){for(var s in i)h[i[s].id]=!0,f[p.id]=!0;break}var d=[];for(a=0;a<t.length;a++){var p;if(o[(p=t[a]).id]&&f[p.id]){var v={};for(var s in p.inputs){var m=p.inputs[s];r[m.id]&&(v[s]=m)}var g=Object.assign({},p);g.inputs=v,g.outputs=p.outputs,d.push(g)}}return d}(this.state.activeTape,e,a);if(!r&&0===i.length&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",(function(){var t,r,s={};s[a.id]=null==n?(t=a.shape,r=Z(k(t),"float32"),Lt.makeTensor(r,t,"float32")):n,function(t,e,n){for(var r=function(r){var o=e[r],a=[];if(o.outputs.forEach((function(e){var n=t[e.id];null!=n?a.push(n):a.push(null)})),null==o.gradient)throw new Error("Cannot compute gradient: gradient function not found for "+o.kernelName+".");var i=o.gradient(a),s=function(e){if(!(e in i))throw new Error("Cannot backprop through input "+e+". Available gradients found: "+Object.keys(i)+".");var r=n((function(){return i[e]()}));if("float32"!==r.dtype)throw new Error("Error in gradient for op "+o.kernelName+". The gradient of input "+e+" must have 'float32' dtype, but has '"+r.dtype+"'");var a=o.inputs[e];if(!S(r.shape,a.shape))throw new Error("Error in gradient for op "+o.kernelName+". The gradient of input '"+e+"' has shape '"+r.shape+"', which does not match the shape of the input '"+a.shape+"'");if(null==t[a.id])t[a.id]=r;else{var s=t[a.id];t[a.id]=s.add(r),s.dispose()}};for(var u in o.inputs)s(u)},o=e.length-1;o>=0;o--)r(o)}(s,i,(function(t){return o.tidy(t)}));var u=e.map((function(t){return s[t.id]}));return 0===o.state.gradientDepth&&(o.state.activeTape.forEach((function(t){for(var e=0,n=t.saved;e<n.length;e++){n[e].dispose()}})),o.state.activeTape=null),{value:a,grads:u}}))},t.prototype.customGrad=function(t){var e=this;return C(X(t),(function(){return"The f passed in customGrad(f) must be a function."})),function(){for(var n,r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];C(r.every((function(t){return t instanceof wt})),(function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"}));var a={};return r.forEach((function(t,e){a[e]=t})),e.runKernelFunc((function(e,o){return C((n=t.apply(void 0,r.concat([o]))).value instanceof wt,(function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"})),C(X(n.gradFunc),(function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."})),n.value}),a,(function(t,e){var o=n.gradFunc(t,e),a=Array.isArray(o)?o:[o];C(a.length===r.length,(function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."})),C(a.every((function(t){return t instanceof wt})),(function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."}));var i={};return a.forEach((function(t,e){i[e]=function(){return t}})),i}))}},t.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},t.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},t.prototype.time=function(t){return n(this,void 0,void 0,(function(){var e,n;return r(this,(function(r){switch(r.label){case 0:return e=et(),[4,this.backend.time(t)];case 1:return(n=r.sent()).wallMs=et()-e,[2,n]}}))}))},t.prototype.track=function(t){return null!=this.state.activeScope&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(t.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),t.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Bt,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},t.nextTensorId=0,t.nextVariableId=0,t}();var Lt=function(){var t=function(){if(null==Ot){var t=void 0;if("undefined"!=typeof window)t=window;else if("undefined"!=typeof global)t=global;else if("undefined"!=typeof process)t=process;else{if("undefined"==typeof self)throw new Error("Could not find a global object");t=self}Ot=t}return Ot}();if(null==t._tfengine){var e=new o(t);t._tfengine=new Pt(e)}return function(t){s=t}(t._tfengine.ENV),yt=function(){return t._tfengine},t._tfengine}();function Wt(){return"undefined"!=typeof window&&null!=window.document||"undefined"!=typeof WorkerGlobalScope}var Ut=i();Ut.registerFlag("DEBUG",(function(){return!1}),(function(t){t&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")})),Ut.registerFlag("IS_BROWSER",(function(){return Wt()})),Ut.registerFlag("IS_NODE",(function(){return"undefined"!=typeof process&&void 0!==process.versions&&void 0!==process.versions.node})),Ut.registerFlag("IS_CHROME",(function(){return"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)})),Ut.registerFlag("PROD",(function(){return!1})),Ut.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",(function(){return Ut.getBool("DEBUG")})),Ut.registerFlag("DEPRECATION_WARNINGS_ENABLED",(function(){return!0})),Ut.registerFlag("IS_TEST",(function(){return!1}));var Vt,zt,Gt,Ht={},qt={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function Kt(t,e){Ht[t]=e}function jt(t){t in Ht||(Ht[t]=function(t){if(1!==t&&2!==t)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var e=function(t){if("undefined"!=typeof OffscreenCanvas&&2===t)return new OffscreenCanvas(300,150);if("undefined"!=typeof document)return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(t);if(e.addEventListener("webglcontextlost",(function(e){e.preventDefault(),delete Ht[t]}),!1),1===t)return e.getContext("webgl",qt)||e.getContext("experimental-webgl",qt);return e.getContext("webgl2",qt)}(t));var e=Ht[t];return e.isContextLost()?(delete Ht[t],jt(t)):(e.disable(e.DEPTH_TEST),e.disable(e.STENCIL_TEST),e.disable(e.BLEND),e.disable(e.DITHER),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SAMPLE_COVERAGE),e.enable(e.SCISSOR_TEST),e.enable(e.CULL_FACE),e.cullFace(e.BACK),Ht[t])}function Xt(t,e){return[e,t]}function Yt(t){var e=k(t);return D(Math.ceil(e/4))}function $t(t,e){return[Math.max(1,Math.ceil(e/2)),Math.max(1,Math.ceil(t/2))]}function Qt(t,e){var n,r,o,a,s,u,c,l,h,f=t;return 2===i().getNumber("WEBGL_VERSION")?(n=f.R32F,r=f.R16F,o=f.RGBA16F,a=f.RGBA32F,s=f.RED,u=4,c=1,l=f.HALF_FLOAT,h=f.FLOAT):(n=t.RGBA,r=t.RGBA,o=t.RGBA,a=f.RGBA,s=t.RGBA,u=4,c=4,l=null!=e?e.HALF_FLOAT_OES:null,h=t.FLOAT),{internalFormatFloat:n,internalFormatHalfFloat:r,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:a,textureFormatFloat:s,downloadTextureFormat:t.RGBA,downloadUnpackNumChannels:u,defaultNumChannels:c,textureTypeHalfFloat:l,textureTypeFloat:h}}function Jt(t,e,n){var r=n();return e&&function(t){var e=t.getError();if(e!==t.NO_ERROR)throw new Error("WebGL Error: "+ne(t,e))}(t),r}!function(t){t[t.DENSE=0]="DENSE",t[t.SHARED_BATCH=1]="SHARED_BATCH"}(Vt||(Vt={})),function(t){t[t.RENDER=0]="RENDER",t[t.UPLOAD=1]="UPLOAD",t[t.PIXELS=2]="PIXELS",t[t.DOWNLOAD=3]="DOWNLOAD"}(zt||(zt={})),function(t){t[t.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",t[t.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",t[t.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",t[t.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",t[t.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(Gt||(Gt={}));var Zt=5.96e-8,te=65504;function ee(t){return!!(i().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||0===t||Zt<Math.abs(t)&&Math.abs(t)<te)}function ne(t,e){switch(e){case t.NO_ERROR:return"NO_ERROR";case t.INVALID_ENUM:return"INVALID_ENUM";case t.INVALID_VALUE:return"INVALID_VALUE";case t.INVALID_OPERATION:return"INVALID_OPERATION";case t.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case t.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case t.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+e}}function re(t,e,n){return ke(t,e,(function(){return t.getExtension(n)}),'Extension "'+n+'" not supported on this browser.')}function oe(t,e,n){var r=ke(t,e,(function(){return t.createShader(t.VERTEX_SHADER)}),"Unable to create vertex WebGLShader.");if(Jt(t,e,(function(){return t.shaderSource(r,n)})),Jt(t,e,(function(){return t.compileShader(r)})),!1===t.getShaderParameter(r,t.COMPILE_STATUS))throw console.log(t.getShaderInfoLog(r)),new Error("Failed to compile vertex shader.");return r}function ae(t,e,n){var r=ke(t,e,(function(){return t.createShader(t.FRAGMENT_SHADER)}),"Unable to create fragment WebGLShader.");if(Jt(t,e,(function(){return t.shaderSource(r,n)})),Jt(t,e,(function(){return t.compileShader(r)})),!1===t.getShaderParameter(r,t.COMPILE_STATUS))throw function(t,e){var n=ue.exec(e);if(null==n)return console.log("Couldn't parse line number in error: "+e),void console.log(t);for(var r=+n[1],o=t.split("\n"),a=o.length.toString().length+2,i=o.map((function(t,e){return N((e+1).toString(),a)+t})),s=0,u=0;u<i.length;u++)s=Math.max(i[u].length,s);var c=i.slice(0,r-1),l=i.slice(r-1,r),h=i.slice(r);console.log(c.join("\n")),console.log(e.split("\n")[0]),console.log("%c "+N(l[0],s),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(h.join("\n"))}(n,t.getShaderInfoLog(r)),new Error("Failed to compile fragment shader.");return r}var ie,se,ue=/ERROR: [0-9]+:([0-9]+):/g;function ce(t,e){return ke(t,e,(function(){return t.createProgram()}),"Unable to create WebGLProgram.")}function le(t,e,n){if(Jt(t,e,(function(){return t.linkProgram(n)})),!1===t.getProgramParameter(n,t.LINK_STATUS))throw console.log(t.getProgramInfoLog(n)),new Error("Failed to link vertex and fragment shaders.")}function he(t,e,n){if(Jt(t,e,(function(){return t.validateProgram(n)})),!1===t.getProgramParameter(n,t.VALIDATE_STATUS))throw console.log(t.getProgramInfoLog(n)),new Error("Shader program validation failed.")}function fe(t,e,n){var r=ke(t,e,(function(){return t.createBuffer()}),"Unable to create WebGLBuffer");return Jt(t,e,(function(){return t.bindBuffer(t.ARRAY_BUFFER,r)})),Jt(t,e,(function(){return t.bufferData(t.ARRAY_BUFFER,n,t.STATIC_DRAW)})),r}function de(t,e,n){var r=ke(t,e,(function(){return t.createBuffer()}),"Unable to create WebGLBuffer");return Jt(t,e,(function(){return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,r)})),Jt(t,e,(function(){return t.bufferData(t.ELEMENT_ARRAY_BUFFER,n,t.STATIC_DRAW)})),r}function pe(t,e){return ke(t,e,(function(){return t.createTexture()}),"Unable to create WebGLTexture.")}function ve(t,e){var n=i().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t<=0||e<=0){var r="["+t+"x"+e+"]";throw new Error("Requested texture size "+r+" is invalid.")}if(t>n||e>n){r="["+t+"x"+e+"]";throw new Error("Requested texture size "+r+" greater than WebGL maximum on this browser / GPU "+("["+n+"x"+n+"]")+".")}}function me(t,e){return ke(t,e,(function(){return t.createFramebuffer()}),"Unable to create WebGLFramebuffer.")}function ge(t,e,n,r,o,a,i,s){var u=t.getAttribLocation(n,r);return-1!==u&&(Jt(t,e,(function(){return t.bindBuffer(t.ARRAY_BUFFER,o)})),Jt(t,e,(function(){return t.vertexAttribPointer(u,a,t.FLOAT,!1,i,s)})),Jt(t,e,(function(){return t.enableVertexAttribArray(u)})),!0)}function ye(t,e,n,r){Se(t,r),Jt(t,e,(function(){return t.activeTexture(t.TEXTURE0+r)})),Jt(t,e,(function(){return t.bindTexture(t.TEXTURE_2D,n)}))}function xe(t,e,n,r){return ke(t,e,(function(){return t.getUniformLocation(n,r)}),'uniform "'+r+'" not present in program.')}function be(t,e,n){return t.getUniformLocation(e,n)}function we(t,e,n,r,o,a){Jt(t,e,(function(){return ye(t,e,r,a)})),Jt(t,e,(function(){return t.uniform1i(o,a)}))}function Ce(t,e,n,r){Jt(t,e,(function(){return t.bindFramebuffer(t.FRAMEBUFFER,r)})),Jt(t,e,(function(){return t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}))}function Ee(t,e,n){Jt(t,e,(function(){return t.bindFramebuffer(t.FRAMEBUFFER,n)})),Jt(t,e,(function(){return t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,null,0)}))}function Re(t){var e=t.checkFramebufferStatus(t.FRAMEBUFFER);if(e!==t.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+Ie(t,e))}function Ie(t,e){switch(e){case t.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case t.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case t.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case t.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+e}}function ke(t,e,n,r){var o=Jt(t,e,(function(){return n()}));if(null==o)throw new Error(r);return o}function Se(t,e){var n=t.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=e+t.TEXTURE0;if(r<t.TEXTURE0||r>n)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+n+"]")+".")}function Ae(t,e){return void 0===e&&(e=2),k(t.slice(0,t.length-e))}function Te(t){if(0===t.length)throw Error("Cannot get rows and columns of an empty shape array.");return[t.length>1?t[t.length-2]:1,t[t.length-1]]}function De(t){var e=[1,1,1];return 0===t.length||1===t.length&&1===t[0]||(e=[Ae(t)].concat(Te(t))),e}function Ne(t,e){var n;void 0===e&&(e=!1);var r=i().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(e&&(r*=2,1===(t=t.map((function(e,n){return n>=t.length-2?b(t[n]):t[n]}))).length&&(t=[2,t[0]])),2!==t.length){var o=M(t);t=o.newShape}var a=k(t);if(t.length<=1&&a<=r)return[1,a];if(2===t.length&&t[0]<=r&&t[1]<=r)return t;if(3===t.length&&t[0]*t[1]<=r&&t[2]<=r)return[t[0]*t[1],t[2]];if(3===t.length&&t[0]<=r&&t[1]*t[2]<=r)return[t[0],t[1]*t[2]];if(4===t.length&&t[0]*t[1]*t[2]<=r&&t[3]<=r)return[t[0]*t[1]*t[2],t[3]];if(4===t.length&&t[0]<=r&&t[1]*t[2]*t[3]<=r)return[t[0],t[1]*t[2]*t[3]];if(e){var s=Ae(t),u=2,c=2;return t.length&&(u=(n=Te(t))[0],c=n[1]),D(a=s*(u/2)*(c/2)).map((function(t){return 2*t}))}return D(a)}function Fe(t){return t%2==0}function _e(t,e){if(S(t=t.slice(-2),e=e.slice(-2)))return!0;if(!t.length||!e.length)return!0;if(0===t[0]||0===t[1]||0===e[0]||0===e[1])return!0;if(t.length!==e.length){var n=t.slice(-1)[0],r=e.slice(-1)[0];if(n===r)return!0;if(Fe(n)&&Fe(r)&&(1===t[0]||1===e[0]))return!0}return t[1]===e[1]&&Fe(t[0])&&Fe(e[0])}function Oe(t){if(null==ie){var e=jt(t);ie=e.getParameter(e.MAX_TEXTURE_SIZE)}return ie}function Me(t){if(null==se){var e=jt(t);se=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,se)}function Be(t){if(0===t)return 0;var e=jt(t);return Pe(e,"EXT_disjoint_timer_query_webgl2")&&2===t?2:Pe(e,"EXT_disjoint_timer_query")?1:0}function Pe(t,e){return null!=t.getExtension(e)}function Le(t){try{if(null!=jt(t))return!0}catch(t){return!1}return!1}function We(t){if(0===t)return!1;var e=jt(t);if(1===t){if(!Pe(e,"OES_texture_float"))return!1}else if(!Pe(e,"EXT_color_buffer_float"))return!1;return Ve(e)}function Ue(t){if(0===t)return!1;var e=jt(t);if(1!==t){if(Pe(e,"EXT_color_buffer_float"))return Ve(e);if(Pe(e,"EXT_color_buffer_half_float")){var n=e.getExtension("EXT_color_buffer_half_float");return function(t,e){var n=Qt(t,e),r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r);t.texImage2D(t.TEXTURE_2D,0,n.internalFormatHalfFloat,1,1,0,n.textureFormatFloat,n.textureTypeHalfFloat,null);var o=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,o),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r,0);var a=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE;return t.bindTexture(t.TEXTURE_2D,null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteTexture(r),t.deleteFramebuffer(o),a}(e,n)}return!1}return!!Pe(e,"OES_texture_float")&&(!!Pe(e,"WEBGL_color_buffer_float")&&Ve(e))}function Ve(t){var e=Qt(t),n=t.createTexture();t.bindTexture(t.TEXTURE_2D,n);t.texImage2D(t.TEXTURE_2D,0,e.internalFormatFloat,1,1,0,e.textureFormatFloat,e.textureTypeFloat,null);var r=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,r),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0);var o=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE;return t.bindTexture(t.TEXTURE_2D,null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteTexture(n),t.deleteFramebuffer(r),o}function ze(t){return 2===t&&null!=jt(t).fenceSync}var Ge=Object.freeze({callAndCheck:Jt,canBeRepresented:ee,getWebGLErrorMessage:ne,getExtensionOrThrow:re,createVertexShader:oe,createFragmentShader:ae,createProgram:ce,linkProgram:le,validateProgram:he,createStaticVertexBuffer:fe,createStaticIndexBuffer:de,getNumChannels:function(){return 2===i().getNumber("WEBGL_VERSION")?1:4},createTexture:pe,validateTextureSize:ve,createFramebuffer:me,bindVertexBufferToProgramAttribute:ge,bindTextureUnit:ye,unbindTextureUnit:function(t,e,n){Se(t,n),Jt(t,e,(function(){return t.activeTexture(t.TEXTURE0+n)})),Jt(t,e,(function(){return t.bindTexture(t.TEXTURE_2D,null)}))},getProgramUniformLocationOrThrow:xe,getProgramUniformLocation:be,bindTextureToProgramUniformSampler:we,bindCanvasToFramebuffer:function(t,e){Jt(t,e,(function(){return t.bindFramebuffer(t.FRAMEBUFFER,null)})),Jt(t,e,(function(){return t.viewport(0,0,t.canvas.width,t.canvas.height)})),Jt(t,e,(function(){return t.scissor(0,0,t.canvas.width,t.canvas.height)}))},bindColorTextureToFramebuffer:Ce,unbindColorTextureFromFramebuffer:Ee,validateFramebuffer:Re,getFramebufferErrorMessage:Ie,getBatchDim:Ae,getRowsCols:Te,getShapeAs3D:De,getTextureShapeFromLogicalShape:Ne,isReshapeFree:_e,getWebGLMaxTextureSize:Oe,resetMaxTextureSize:function(){ie=null},resetMaxTexturesInShader:function(){se=null},getMaxTexturesInShader:Me,getWebGLDisjointQueryTimerVersion:Be,hasExtension:Pe,isWebGLVersionEnabled:Le,isCapableOfRenderingToFloatTexture:We,isDownloadFloatTextureEnabled:Ue,isWebGLFenceEnabled:ze}),He=i();function qe(){i().set("PROD",!0)}function Ke(){i().set("DEBUG",!0)}function je(){i().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")}function Xe(t){i().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(t+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function Ye(){Lt.disposeVariables()}function $e(){return Lt}function Qe(){return Lt.memory()}function Je(t){return Lt.profile(t)}function Ze(t,e){return Lt.tidy(t,e)}function tn(t){_t(t).forEach((function(t){return t.dispose()}))}function en(t){return Lt.keep(t)}function nn(t){return Lt.time(t)}function rn(t){return Lt.setBackend(t)}function on(){return Lt.ready()}function an(){return Lt.backendName}function sn(t){Lt.removeBackend(t)}function un(t){return Lt.findBackend(t)}function cn(t){return Lt.findBackendFactory(t)}function ln(t,e,n){return void 0===n&&(n=1),Lt.registerBackend(t,e,n)}function hn(){return Lt.backend}function fn(t,e){i().setPlatform(t,e)}function dn(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];i().getBool("IS_TEST")||console.warn.apply(console,t)}function pn(t,e){var n=t;if(V(t))return"string"===e?[]:[t.length];if(!Array.isArray(t))return[];for(var r=[];Array.isArray(n)||V(n)&&"string"!==e;)r.push(n.length),n=n[0];return Array.isArray(t)&&i().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function t(e,n,r){if(r=r||[],!Array.isArray(e)&&!V(e))return void C(0===n.length,(function(){return"Element arr["+r.join("][")+"] is a primitive, but should be an array/TypedArray of "+n[0]+" elements"}));C(n.length>0,(function(){return"Element arr["+r.join("][")+"] should be a primitive, but is an array of "+e.length+" elements"})),C(e.length===n[0],(function(){return"Element arr["+r.join("][")+"] should have "+n[0]+" elements, but has "+e.length+" elements"}));for(var o=n.slice(1),a=0;a<e.length;++a)t(e[a],o,r.concat(a))}(t,r,[]),r}function vn(t,e,n,r){if(null!=t&&("numeric"!==t&&t!==e||"numeric"===t&&"string"===e))throw new Error("Argument '"+n+"' passed to '"+r+"' must be "+t+" tensor, but got "+e+" tensor")}function mn(t,e,n,r){if(void 0===r&&(r="numeric"),t instanceof wt)return vn(r,t.dtype,e,n),t;var o=j(t);if("string"!==o&&["bool","int32","float32"].indexOf(r)>=0&&(o=r),vn(r,o,e,n),null==t||!V(t)&&!Array.isArray(t)&&"number"!=typeof t&&"boolean"!=typeof t&&"string"!=typeof t){var a=null==t?"null":t.constructor.name;throw new Error("Argument '"+e+"' passed to '"+n+"' must be a Tensor or TensorLike, but got '"+a+"'")}var s=pn(t,o);V(t)||Array.isArray(t)||(t=[t]);var u="string"!==o?Q(t,o,i().getBool("DEBUG")):I(t,[],!0);return Lt.makeTensor(u,s,o)}function gn(t,e,n,r){if(void 0===r&&(r="numeric"),!Array.isArray(t))throw new Error("Argument "+e+" passed to "+n+" must be a `Tensor[]` or `TensorLike[]`");return t.map((function(t,r){return mn(t,e+"["+r+"]",n)}),r)}function yn(t,e){for(var n=0;n<t.length;++n)if(t[t.length-n-1]!==e-1-n)return!1;return!0}function xn(t,e,n){for(var r=t.length+e.length,o=[],a=0,i=0,s=0;s<r;s++)-1===n.indexOf(s)?o.push(t[a++]):o.push(e[i++]);return o}function bn(t,e){for(var n=[],r=t.length,o=0;o<r;o++)-1===e.indexOf(o)&&n.push(t[o]);return[n,e.map((function(e){return t[e]}))]}function wn(t,e){return xn(t,e.map((function(t){return 1})),e)}function Cn(t,e,n){C(yn(e,n),(function(){return t+" supports only inner-most axes for now. Got axes "+e+" and rank-"+n+" input."}))}function En(t,e){if(yn(t,e))return null;for(var n=[],r=0;r<e;++r)-1===t.indexOf(r)&&n.push(r);return t.forEach((function(t){return n.push(t)})),n}function Rn(t){return t.map((function(t,e){return[e,t]})).sort((function(t,e){return t[1]-e[1]})).map((function(t){return t[0]}))}function In(t,e){for(var n=[],r=e-t;r<e;++r)n.push(r);return n}function kn(t,e){var n=t[0].length;t.forEach((function(t,e){C(t.length===n,(function(){return"Error in concat"+n+"D: rank of tensors["+e+"] must be the same as the rank of the rest ("+n+")"}))})),C(e>=0&&e<n,(function(){return"Error in concat"+n+"D: axis must be between 0 and "+(n-1)+"."}));var r=t[0];t.forEach((function(t,o){for(var a=0;a<n;a++)C(a===e||t[a]===r[a],(function(){return"Error in concat"+n+"D: Shape of tensors["+o+"] ("+t+") does not match the shape of the rest ("+r+") along the non-concatenated axis "+o+"."}))}))}function Sn(t,e){for(var n=t[0].slice(),r=1;r<t.length;r++)n[e]+=t[r][e];return n}function An(t){var e=Object.keys(t);if(1!==e.length)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+e.length+" keys.");var n=e[0],r=t[n];n.endsWith("_")&&(n=n.substring(0,n.length-1));var o=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];Lt.startScope(n);try{var o=r.apply(void 0,t);return o instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),Lt.endScope(o),o}catch(t){throw Lt.endScope(null),t}};return Object.defineProperty(o,"name",{value:n,configurable:!0}),o}He.registerFlag("HAS_WEBGL",(function(){return He.getNumber("WEBGL_VERSION")>0})),He.registerFlag("WEBGL_VERSION",(function(){return Le(2)?2:Le(1)?1:0})),He.registerFlag("WEBGL_BUFFER_SUPPORTED",(function(){return 2===He.get("WEBGL_VERSION")})),He.registerFlag("WEBGL_CPU_FORWARD",(function(){return!0})),He.registerFlag("WEBGL_FORCE_F16_TEXTURES",(function(){return!1})),He.registerFlag("WEBGL_PACK",(function(){return He.getBool("HAS_WEBGL")})),He.registerFlag("WEBGL_PACK_NORMALIZATION",(function(){return He.getBool("WEBGL_PACK")})),He.registerFlag("WEBGL_PACK_CLIP",(function(){return He.getBool("WEBGL_PACK")})),He.registerFlag("WEBGL_PACK_DEPTHWISECONV",(function(){return!1})),He.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",(function(){return He.getBool("WEBGL_PACK")})),He.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",(function(){return He.getBool("WEBGL_PACK")})),He.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",(function(){return He.getBool("WEBGL_PACK")})),He.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",(function(){return He.getBool("WEBGL_PACK")})),He.registerFlag("WEBGL_PACK_REDUCE",(function(){return He.getBool("WEBGL_PACK")})),He.registerFlag("WEBGL_LAZILY_UNPACK",(function(){return He.getBool("WEBGL_PACK")})),He.registerFlag("WEBGL_CONV_IM2COL",(function(){return He.getBool("WEBGL_PACK")})),He.registerFlag("WEBGL_MAX_TEXTURE_SIZE",(function(){return Oe(He.getNumber("WEBGL_VERSION"))})),He.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",(function(){return Me(He.getNumber("WEBGL_VERSION"))})),He.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",(function(){var t=He.getNumber("WEBGL_VERSION");return 0===t?0:Be(t)})),He.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",(function(){return He.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(t=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))));var t})),He.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",(function(){return We(He.getNumber("WEBGL_VERSION"))})),He.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",(function(){return!He.getBool("WEBGL_FORCE_F16_TEXTURES")&&He.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")})),He.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",(function(){return Ue(He.getNumber("WEBGL_VERSION"))})),He.registerFlag("WEBGL_FENCE_API_ENABLED",(function(){return ze(He.getNumber("WEBGL_VERSION"))})),He.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",(function(){return He.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0})),bt=Xe;var Tn=An({complex_:function(t,e){var n=mn(t,"real","complex"),r=mn(e,"imag","complex");return E(n.shape,r.shape,"real and imag shapes, "+n.shape+" and "+r.shape+", must match in call to tf.complex()."),Lt.runKernelFunc((function(t){return t.complex(n,r)}),{$real:n,$imag:r})}}),Dn=An({real_:function(t){var e=mn(t,"input","real");return Lt.runKernelFunc((function(t){return t.real(e)}),{$input:e})}}),Nn=An({imag_:function(t){var e=mn(t,"input","imag");return Lt.runKernelFunc((function(t){return t.imag(e)}),{$input:e})}});function Fn(t,e,n){return _n(t,e,pn(t,n),n)}function _n(t,e,n,r){if(null==r&&(r=j(t)),"complex64"===r)throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!V(t)&&!Array.isArray(t)&&"number"!=typeof t&&"boolean"!=typeof t&&"string"!=typeof t)throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=e){nt(e);var o=k(e),a=k(n);C(o===a,(function(){return"Based on the provided shape, ["+e+"], the tensor should have "+o+" values but has "+a}));for(var s=0;s<n.length;++s){var u=n[s],c=s!==n.length-1||u!==k(e.slice(s));C(n[s]===e[s]||!c,(function(){return"Error creating a new Tensor. Inferred shape ("+n+") does not match the provided shape ("+e+"). "}))}}return V(t)||Array.isArray(t)||(t=[t]),e=e||n,t="string"!==r?Q(t,r,i().getBool("DEBUG")):I(t,[],!0),Lt.makeTensor(t,e,r)}function On(t,e){if((V(t)&&"string"!==e||Array.isArray(t))&&"complex64"!==e)throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===e&&V(t)&&!(t instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return _n(t,[],[],e)}function Mn(t,e){R(t);var n=pn(t,e);if(1!==n.length)throw new Error("tensor1d() requires values to be a flat/TypedArray");return _n(t,null,n,e)}function Bn(t,e,n){if(R(t),null!=e&&2!==e.length)throw new Error("tensor2d() requires shape to have two numbers");var r=pn(t,n);if(2!==r.length&&1!==r.length)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return _n(t,e,r,n)}function Pn(t,e,n){if(R(t),null!=e&&3!==e.length)throw new Error("tensor3d() requires shape to have three numbers");var r=pn(t,n);if(3!==r.length&&1!==r.length)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return _n(t,e,r,n)}function Ln(t,e,n){if(R(t),null!=e&&4!==e.length)throw new Error("tensor4d() requires shape to have four numbers");var r=pn(t,n);if(4!==r.length&&1!==r.length)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return _n(t,e,r,n)}function Wn(t,e,n){if(R(t),null!=e&&5!==e.length)throw new Error("tensor5d() requires shape to have five numbers");var r=pn(t,n);if(5!==r.length&&1!==r.length)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return _n(t,e,r,n)}function Un(t,e,n){if(R(t),null!=e&&6!==e.length)throw new Error("tensor6d() requires shape to have six numbers");var r=pn(t,n);if(6!==r.length&&1!==r.length)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return _n(t,e=e||r,r,n)}function Vn(t,e,n,r){return void 0===e&&(e=!0),Lt.makeVariable(t,e,n,r)}function zn(t,e){if(void 0===e&&(e="float32"),"complex64"===e){var n=zn(t,"float32"),r=Gn(t,"float32");return Tn(n,r)}var o=Z(k(t),e);return Lt.makeTensor(o,t,e)}function Gn(t,e){if(void 0===e&&(e="float32"),"complex64"===e){var n=Gn(t,"float32"),r=Gn(t,"float32");return Tn(n,r)}var o=tt(k(t),e);return Lt.makeTensor(o,t,e)}function Hn(t,e,n){return Lt.runKernelFunc((function(r){return r.fill(t,e,n)}),{})}function qn(t,e,n){if(n<=0)throw new Error("The number of values should be positive.");return Lt.runKernelFunc((function(r){return r.linspace(t,e,n)}),{})}function Kn(t,e,n,r){if(void 0===n&&(n=1),void 0===r&&(r="float32"),0===n)throw new Error("Cannot have a step of zero");if(t===e||t<e&&n<0||e<t&&n>1)return Gn([0],r);var o=tt(Math.abs(Math.ceil((e-t)/n)),r);e<t&&1===n&&(n=-1),o[0]=t;for(var a=1;a<o.length;a++)o[a]=o[a-1]+n;return Mn(o,r)}var jn=An({onesLike_:function(t){var e=mn(t,"x","onesLike");if("complex64"===e.dtype){var n=jn(Dn(e)),r=Xn(Nn(e));return Tn(n,r)}return Lt.runKernelFunc((function(t){return t.onesLike(e)}),{x:e},(function(t,e){return{x:function(){return Xn(t)}}}),"OnesLike")}}),Xn=An({zerosLike_:function(t){var e=mn(t,"x","zerosLike");return Lt.runKernelFunc((function(t){return t.zerosLike(e)}),{x:e},(function(t,e){return{x:function(){return Xn(t)}}}),"ZerosLike")}});var Yn=An({concat_:function(t,e){void 0===e&&(e=0),C(t.length>=1,(function(){return"Pass at least one tensor to concat"}));var n=gn(t,"tensors","concat");"complex64"===n[0].dtype&&n.forEach((function(t){if("complex64"!==t.dtype)throw new Error("Cannot concatenate complex64 tensors with a tensor\n          with dtype "+t.dtype+". ")})),e=O(e,n[0].shape)[0];var r=Sn(n.map((function(t){return t.shape})),e);if(0===k(r))return Fn([],r);if(1===(n=n.filter((function(t){return t.size>0}))).length)return n[0];var o=n.map((function(t){return t.shape}));kn(o,e);var a=n,i={axis:e};return Lt.runKernelFunc((function(t){return t.concat(n,e)}),a,(function(t){var n=o.map((function(t){return t[e]}));return tr(t,n,e).map((function(t){return function(){return t}}))}),"Concat",i)}}),$n=An({concat1d_:function(t){return Yn(t,0)}}),Qn=An({concat2d_:function(t,e){return Yn(t,e)}}),Jn=An({concat3d_:function(t,e){return Yn(t,e)}}),Zn=An({concat4d_:function(t,e){return Yn(t,e)}}),tr=An({split_:function(t,e,n){void 0===n&&(n=0);var r,o=mn(t,"x","split");return n=O(n,o.shape)[0],"number"==typeof e?(C(o.shape[n]%e==0,(function(){return"Number of splits must evenly divide the axis."})),r=new Array(e).fill(o.shape[n]/e)):(C(o.shape[n]===e.reduce((function(t,e){return t+e})),(function(){return"The sum of sizes must match the size of the axis dimension."})),r=e),Lt.runKernelFunc((function(t){return t.split(o,r,n)}),{$x:o},(function(t){return{$x:function(){return Yn(t,n)}}}))}});function er(t,e,n){return void 0===e&&(e="float32"),e=e||"float32",nt(t),new gt(t,e,n)}function nr(t,e){void 0===e&&(e=!1),console.log(t.toString(e))}var rr=An({batchToSpaceND_:function(t,e,n){var r=mn(t,"x","batchToSpaceND"),o=e.reduce((function(t,e){return t*e}));return C(r.rank>=1+e.length,(function(){return"input rank is "+r.rank+" but should be > than blockShape.length "+e.length})),C(n.length===e.length,(function(){return"crops.length is "+n.length+" but should be equal to blockShape.length  "+e.length})),C(r.shape[0]%o==0,(function(){return"input tensor batch is "+r.shape[0]+" but is not divisible by the product of the elements of blockShape "+e.join(" * ")+" === "+o})),Lt.runKernelFunc((function(t){return t.batchToSpaceND(r,e,n)}),{$x:r},(function(t){return{$x:function(){return t.spaceToBatchND(e,n)}}}))}}),or=An({cast_:function(t,e){var n=mn(t,"x","cast");if(!W(e))throw new Error("Failed to cast to unknown dtype "+e);if("string"===e&&"string"!==n.dtype||"string"!==e&&"string"===n.dtype)throw new Error("Only strings can be casted to strings");var r={dtype:e};return Lt.runKernelFunc((function(t){return t.cast(n,e)}),{x:n},(function(t){return{x:function(){return t.clone()}}}),"Cast",r)}}),ar=An({cumsum_:function(t,e,n,r){void 0===e&&(e=0),void 0===n&&(n=!1),void 0===r&&(r=!1);var o=mn(t,"x","cumsum"),a=En([e|=0],o.rank),i=o;null!=a&&(i=o.transpose(a));var s=In(1,o.rank)[0],u=Lt.runKernelFunc((function(t){return t.cumsum(i,s,n,r)}),{permutedX:i},(function(t){return{permutedX:function(){return t.cumsum(e,n,!r)}}}));return null!=a&&(u=u.transpose(a)),u}}),ir=An({depthToSpace_:function(t,e,n){void 0===n&&(n="NHWC");var r=mn(t,"x","depthToSpace"),o="NHWC"===n?r.shape[1]:r.shape[2],a="NHWC"===n?r.shape[2]:r.shape[3],i="NHWC"===n?r.shape[3]:r.shape[1];return C(o*e>=0,(function(){return"Negative dimension size caused by overflow when multiplying\n      "+o+" and "+e+"  for depthToSpace with input shape\n      "+r.shape})),C(a*e>=0,(function(){return"Negative dimension size caused by overflow when multiplying\n      "+a+" and "+e+" for depthToSpace with input shape\n          "+r.shape})),C(i%(e*e)==0,(function(){return"Dimension size must be evenly divisible by "+e*e+" but is "+i+" for depthToSpace with input shape "+r.shape})),Lt.runKernelFunc((function(t){return t.depthToSpace(r,e,n)}),{$x:r})}}),sr=An({expandDims_:function(t,e){void 0===e&&(e=0);var n=mn(t,"x","expandDims",null);C(e<=n.rank,(function(){return"Axis must be <= rank of the tensor"}));var r=n.shape.slice();return e<0&&(C(-(n.rank+1)<=e,(function(){return"Axis must be in the interval ["+-(n.rank+1)+", "+n.rank+"]"})),e=n.rank+e+1),r.splice(e,0,1),dr(n,r)}}),ur=An({pad_:function(t,e,n){void 0===n&&(n=0);var r=mn(t,"x","pad");if(0===r.rank)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:e,constantValue:n};return Lt.runKernelFunc((function(t){return t.pad(r,e,n)}),{x:r},(function(t){var n=e.map((function(t){return t[0]}));return{x:function(){return t.slice(n,r.shape)}}}),"PadV2",o)}}),cr=An({pad1d_:function(t,e,n){return void 0===n&&(n=0),C(2===e.length,(function(){return"Invalid number of paddings. Must be length of 2."})),ur(t,[e],n)}}),lr=An({pad2d_:function(t,e,n){return void 0===n&&(n=0),C(2===e.length&&2===e[0].length&&2===e[1].length,(function(){return"Invalid number of paddings. Must be length of 2 each."})),ur(t,e,n)}}),hr=An({pad3d_:function(t,e,n){return void 0===n&&(n=0),C(3===e.length&&2===e[0].length&&2===e[1].length&&2===e[2].length,(function(){return"Invalid number of paddings. Must be length of 2 each."})),ur(t,e,n)}}),fr=An({pad4d_:function(t,e,n){return void 0===n&&(n=0),C(4===e.length&&2===e[0].length&&2===e[1].length&&2===e[2].length&&2===e[3].length,(function(){return"Invalid number of paddings. Must be length of 2 each."})),ur(t,e,n)}}),dr=An({reshape_:function(t,e){var n=mn(t,"x","reshape",null);e=_(e,n.size),C(n.size===k(e),(function(){return"new shape and old shape must have the same number of elements."}));var r={shape:e};return Lt.runKernelFunc((function(t){return t.reshape(n,e)}),{x:n},(function(t){return{x:function(){return t.reshape(n.shape)}}}),"Reshape",r)}}),pr=An({spaceToBatchND_:function(t,e,n){var r=mn(t,"x","spaceToBatchND");return C(r.rank>=1+e.length,(function(){return"input rank "+r.rank+" should be > than [blockShape] "+e.length})),C(n.length===e.length,(function(){return"paddings.shape[0] "+n.length+" must be equal to [blockShape] "+e.length})),C(r.shape.reduce((function(t,r,o){return o>0&&o<=e.length?t&&(r+n[o-1][0]+n[o-1][1])%e[o-1]==0:t}),!0),(function(){return"input spatial dimensions "+r.shape.slice(1)+" with paddings "+n.toString()+" must be divisible by blockShapes "+e.toString()})),Lt.runKernelFunc((function(t){return t.spaceToBatchND(r,e,n)}),{$x:r},(function(t){return{$x:function(){return t.batchToSpaceND(e,n)}}}))}}),vr=An({squeeze_:function(t,e){var n=mn(t,"x","squeeze");return dr(n,M(n.shape,e).newShape)}}),mr=An({stack_:function(t,e){void 0===e&&(e=0);var n=gn(t,"tensors","stack");if(C(n.length>=1,(function(){return"Pass at least one tensor to tf.stack"})),1===n.length)return n[0].expandDims(e);var r=n[0].rank,o=n[0].shape,a=n[0].dtype;C(e<=r,(function(){return"Axis must be <= rank of the tensor"})),n.forEach((function(t){E(o,t.shape,"All tensors passed to stack must have matching shapes")})),n.forEach((function(t){C(a===t.dtype,(function(){return"All tensors passed to stack must have matching dtypes"}))}));var i=n.map((function(t){return t.expandDims(e)}));return Yn(i,e)}}),gr=An({unstack_:function(t,e){void 0===e&&(e=0),e=e||0;var n=mn(t,"x","unstack");C(e>=-n.shape.length&&e<n.shape.length,(function(){return"Axis = "+e+" is not in [-"+n.shape.length+", "+n.shape.length+")"})),e<0&&(e+=n.shape.length);var r={axis:e};return Lt.runKernelFunc((function(t){return t.unstack(n,e)}),{x:n},(function(t){return{x:function(){return mr(t,e)}}}),"Unpack",r)}}),yr=function(t,e){return n(this,void 0,void 0,(function(){var n,o,a,i,s,u,c,l,h,f;return r(this,(function(r){switch(r.label){case 0:return n=mn(t,"x","setdiff1d"),o=mn(e,"y","setdiff1d"),C(n.dtype===o.dtype,(function(){return"x and y should have the same dtype, but got x ("+n.dtype+") and y ("+o.dtype+")."})),C(1===n.rank,(function(){return"x should be 1D tensor, but got x ("+n.shape+")."})),C(1===o.rank,(function(){return"y should be 1D tensor, but got y ("+o.shape+")."})),[4,n.data()];case 1:return a=r.sent(),[4,o.data()];case 2:for(i=r.sent(),s=new Set(i),u=0,h=0;h<a.length;h++)s.has(a[h])||u++;for(c=new gt([u],n.dtype),l=new gt([u],"int32"),h=0,f=0;h<a.length;h++)s.has(a[h])||(c.values[f]=a[h],l.values[f]=h,f++);return[2,[c.toTensor(),l.toTensor()]]}}))}))};function xr(t,e,n,r){void 0===r&&(r=!0);var o=[];if(r)(o=o.concat(e.slice(0))).push(t[0]/n),o=o.concat(t.slice(1));else{o=o.concat(t[0]);for(var a=e.length,i=0;i<a;++i)o=o.concat([t[i+1]/e[i],e[i]]);o=o.concat(t.slice(a+1))}return o}function br(t,e,n){void 0===n&&(n=!0);var r=[];if(n){r.push(e);for(var o=e+1;o<t;++o)o<=2*e?(r.push(o),r.push(o-(e+1))):r.push(o)}else{var a=[],i=[];for(o=1;o<t;++o)o>=2*e+1||o%2==1?i.push(o):a.push(o);r.push.apply(r,a),r.push(0),r.push.apply(r,i)}return r}function wr(t,e,n,r){void 0===r&&(r=!0);var o=[];r?o.push(t[0]/n):o.push(t[0]*n);for(var a=1;a<t.length;++a)a<=e.length?r?o.push(e[a-1]*t[a]):o.push(t[a]/e[a-1]):o.push(t[a]);return o}function Cr(t,e){for(var n=[0],r=0;r<e;++r)n.push(t[r][0]);return n}function Er(t,e,n){for(var r=t.slice(0,1),o=0;o<n;++o)r.push(t[o+1]-e[o][0]-e[o][1]);return r}var Rr="Div",Ir="SquaredDifference",kr="BroadcastTo",Sr="OneHot",Ar="Identity",Tr="Tile";function Dr(t,e){for(var n=t.length,r=[],o=0;o<n;o++){var a=n-1-o,i=t[a]||1;(e[e.length-1-o]||1)>1&&1===i&&r.unshift(a)}return r}function Nr(t,e){for(var n=[],r=0;r<e.length;r++){var o=t[t.length-r-1],a=e.length-r-1,i=e[a];(null==o||1===o&&i>1)&&n.unshift(a)}return n}function Fr(t,e){for(var n=[],r=Math.max(t.length,e.length),o=0;o<r;o++){var a=t[t.length-o-1];null==a&&(a=1);var i=e[e.length-o-1];if(null==i&&(i=1),1===a)n.unshift(i);else if(1===i)n.unshift(a);else{if(a!==i)throw Error("Operands could not be broadcast together with shapes "+t+" and "+e+".");n.unshift(a)}}return n}var _r=An({abs_:function(t){var e=mn(t,"x","abs");return"complex64"===e.dtype?Lt.runKernelFunc((function(t){return t.complexAbs(e)}),{$x:e}):Lt.runKernelFunc((function(t,n){var r=t.abs(e);return n([e]),r}),{x:e},(function(t,e){var n=e[0];return{x:function(){return t.mul(n.toFloat().step(-1))}}}),"Abs")}}),Or=An({acos_:function(t){var e=mn(t,"x","acos");return Lt.runKernelFunc((function(t,n){var r=t.acos(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return{$x:function(){return t.divStrict(On(1).sub(n.toFloat().square()).sqrt()).neg()}}}))}}),Mr=An({acosh_:function(t){var e=mn(t,"x","acosh");return Lt.runKernelFunc((function(t,n){var r=t.acosh(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return{$x:function(){return t.divStrict(n.toFloat().square().sub(1).sqrt())}}}))}}),Br=An({asin_:function(t){var e=mn(t,"x","asin");return Lt.runKernelFunc((function(t,n){var r=t.asin(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return{$x:function(){return t.divStrict(On(1).sub(n.toFloat().square()).sqrt())}}}))}}),Pr=An({asinh_:function(t){var e=mn(t,"x","asinh");return Lt.runKernelFunc((function(t,n){var r=t.asinh(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return{$x:function(){return t.divStrict(On(1).add(n.toFloat().square()).sqrt())}}}))}}),Lr=An({atan_:function(t){var e=mn(t,"x","atan");return Lt.runKernelFunc((function(t,n){var r=t.atan(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return{$x:function(){return t.div(n.toFloat().square().add(1))}}}))}}),Wr=An({atanh_:function(t){var e=mn(t,"x","atanh");return Lt.runKernelFunc((function(t,n){var r=t.atanh(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return{$x:function(){return t.div(On(1).sub(n.toFloat().square()))}}}))}}),Ur=An({ceil_:function(t){var e=mn(t,"x","ceil");return Lt.runKernelFunc((function(t){return t.ceil(e)}),{$x:e},(function(t){return{$x:function(){return Xn(t)}}}))}}),Vr=An({clipByValue_:function(t,e,n){var r=mn(t,"x","clipByValue");C(e<=n,(function(){return"Error in clip: min ("+e+") must be less than or equal to max ("+n+")."}));var o=[r],a={min:e,max:n};return Lt.runKernelFunc((function(t,o){var a=t.clip(r,e,n);return o([r]),a}),{x:r},(function(t,r){var o=r[0];return{x:function(){return t.where(o.greaterEqual(e).logicalAnd(o.lessEqual(n)),Xn(t))}}}),"ClipByValue",a,o)}}),zr=An({cos_:function(t){var e=mn(t,"x","cos"),n=[e];return Lt.runKernelFunc((function(t,n){var r=t.cos(e);return n([e]),r}),{x:e},(function(t,e){var n=e[0];return{x:function(){return n.toFloat().sin().neg().mul(t)}}}),"Cos",{},n)}}),Gr=An({cosh_:function(t){var e=mn(t,"x","cosh");return Lt.runKernelFunc((function(t,n){var r=t.cosh(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return{$x:function(){return n.toFloat().sinh().mulStrict(t)}}}))}}),Hr=An({erf_:function(t){var e=mn(t,"x","erf");return C("int32"===e.dtype||"float32"===e.dtype,(function(){return"Input dtype must be `int32` or `float32`."})),"int32"===e.dtype&&(e=e.toFloat()),Lt.runKernelFunc((function(t,n){var r=t.erf(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return{$x:function(){return t.mul(n.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}}))}}),qr=An({exp_:function(t){var e=mn(t,"x","exp");return Lt.runKernelFunc((function(t,n){var r=t.exp(e);return n([r]),r}),{x:e},(function(t,e){return{x:function(){return t.mulStrict(e[0])}}}),"Exp",{},[],[!0])}}),Kr=An({expm1_:function(t){var e=mn(t,"x","expm1");return Lt.runKernelFunc((function(t,n){var r=t.expm1(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return{$x:function(){return t.mul(n.exp())}}}))}}),jr=An({floor_:function(t){var e=mn(t,"x","floor");return Lt.runKernelFunc((function(t){return t.floor(e)}),{$x:e},(function(t){return{$x:function(){return Xn(t)}}}))}}),Xr=An({log_:function(t){var e=mn(t,"x","log"),n=[e];return Lt.runKernelFunc((function(t,n){var r=t.log(e);return n([e]),r}),{x:e},(function(t,e){var n=e[0];return{x:function(){return t.div(n.toFloat())}}}),"Log",{},n)}}),Yr=An({log1p_:function(t){var e=mn(t,"x","log1p");return Lt.runKernelFunc((function(t,n){var r=t.log1p(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return{$x:function(){return t.div(n.add(1))}}}))}}),$r=An({logSigmoid_:function(t){var e=mn(t,"x","logSigmoid");return Lt.runKernelFunc((function(t,n){var r=t.softplus(e.neg()).neg();return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return{$x:function(){return t.mul(n.neg().sigmoid())}}}))}}),Qr=An({neg_:function(t){var e=mn(t,"x","neg"),n=[e];return Lt.runKernelFunc((function(t){return t.neg(e)}),{x:e},(function(t){return{x:function(){return t.neg()}}}),"Neg",{},n)}}),Jr=An({reciprocal_:function(t){var e=mn(t,"x","reciprocal");return Lt.runKernelFunc((function(t,n){var r=t.reciprocal(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return{$x:function(){return t.div(n.square().neg())}}}))}}),Zr=An({round_:function(t){var e=mn(t,"x","round");return Lt.runKernelFunc((function(t){return t.round(e)}),{$x:e},(function(t){return{$x:function(){return Xn(t)}}}))}}),to=An({rsqrt_:function(t){var e=mn(t,"x","rsqrt"),n=[e];return Lt.runKernelFunc((function(t,n){var r=t.rsqrt(e);return n([e]),r}),{x:e},(function(t,e){var n=e[0];return{x:function(){return t.div(n.pow(1.5).mul(2)).neg()}}}),"Rsqrt",{},n)}}),eo=An({sigmoid_:function(t){var e=mn(t,"x","sigmoid");return Lt.runKernelFunc((function(t,n){var r=t.sigmoid(e);return n([r]),r}),{x:e},(function(t,e){var n=e[0];return{x:function(){return t.mul(n.mul(On(1).sub(n)))}}}),"Sigmoid")}}),no=An({sign_:function(t){var e=mn(t,"x","sign");return Lt.runKernelFunc((function(t){return t.sign(e)}),{$x:e},(function(t){return{$x:function(){return Xn(t)}}}))}}),ro=An({isNaN_:function(t){var e=mn(t,"x","isNaN");return Lt.runKernelFunc((function(t){return t.isNaN(e)}),{$x:e},(function(t){return{$x:function(){return Xn(t)}}}))}}),oo=An({isInf_:function(t){var e=mn(t,"x","isInf");return Lt.runKernelFunc((function(t){return t.isInf(e)}),{$x:e},(function(t){return{$x:function(){return Xn(t)}}}))}}),ao=An({isFinite_:function(t){var e=mn(t,"x","isFinite");return Lt.runKernelFunc((function(t){return t.isFinite(e)}),{$x:e},(function(t){return{$x:function(){return Xn(t)}}}))}}),io=An({sin_:function(t){var e=mn(t,"x","sin"),n=[e];return Lt.runKernelFunc((function(t,n){var r=t.sin(e);return n([e]),r}),{x:e},(function(t,e){var n=e[0];return{x:function(){return n.toFloat().cos().mul(t)}}}),"Sin",{},n)}}),so=An({sinh_:function(t){var e=mn(t,"x","sinh");return Lt.runKernelFunc((function(t,n){var r=t.sinh(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return{$x:function(){return n.toFloat().cosh().mulStrict(t)}}}))}}),uo=An({softplus_:function(t){var e=mn(t,"x","softplus");return Lt.runKernelFunc((function(t,n){var r=t.softplus(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return{$x:function(){return t.mul(n.sigmoid())}}}))}}),co=An({sqrt_:function(t){var e=mn(t,"x","sqrt");return Lt.runKernelFunc((function(t,n){var r=t.sqrt(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return{$x:function(){return t.div(n.toFloat().sqrt().mul(2))}}}))}}),lo=An({step_:function(t,e){void 0===e&&(e=0);var n=mn(t,"x","step");return Lt.runKernelFunc((function(t){return t.step(n,e)}),{$x:n},(function(t){return{$x:function(){return Xn(t)}}}))}}),ho=An({tan_:function(t){var e=mn(t,"x","tan");return Lt.runKernelFunc((function(t,n){var r=t.tan(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return{$x:function(){return t.div(n.cos().square())}}}))}}),fo=An({tanh_:function(t){var e=mn(t,"x","tanh");return Lt.runKernelFunc((function(t,n){var r=t.tanh(e);return n([r]),r}),{x:e},(function(t,e){var n=e[0];return{x:function(){return On(1).sub(n.square()).mulStrict(t)}}}),"Tanh",{},null,[!0])}});var po=An({add_:function(t,e){var n,r=mn(t,"a","add"),o=mn(e,"b","add");n=Nt(r,o),r=n[0],o=n[1];var a=Fr(r.shape,o.shape);return Lt.runKernelFunc((function(t){return t.add(r,o)}),{a:r,b:o},(function(t){return{a:function(){var e=t,n=Nr(r.shape,a);return n.length>0&&(e=e.sum(n)),e.reshape(r.shape)},b:function(){var e=t,n=Nr(o.shape,a);return n.length>0&&(e=e.sum(n)),e.reshape(o.shape)}}}),"Add")}}),vo=An({addN_:function(t){C(Array.isArray(t),(function(){return"The argument passed to tf.addN() must be a list of tensors"})),C(t.length>=1,(function(){return"Must pass at least one tensor to tf.addN(), but got "+t.length}));var e=t.map((function(t,e){return mn(t,"tensors"+e,"addN")})),n=e[0];e.forEach((function(t){if(t.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")})),e.forEach((function(t){if(!S(t.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")}));var r=e;return Lt.runKernelFunc((function(t){return t.addN(e)}),r,(function(t){var n={};return e.forEach((function(e,r){n[r]=function(){return t.clone()}})),n}),"AddN")}}),mo=An({addStrict_:function(t,e){var n=mn(t,"a","addStrict"),r=mn(e,"b","addStrict");return E(n.shape,r.shape,"Error in addStrict: "),n.add(r)}}),go=An({atan2_:function(t,e){var n,r=mn(t,"a","atan2"),o=mn(e,"b","atan2");n=Nt(r,o),r=n[0],o=n[1];var a=Fr(r.shape,o.shape);return Lt.runKernelFunc((function(t,e){var n=t.atan2(r,o);return e([r,o]),n}),{$a:r,$b:o},(function(t,e){var n=e[0],r=e[1];return{$a:function(){var e=po(n.square(),r.square()),o=t.mul(r.div(e)),i=Nr(n.shape,a);return i.length>0&&(o=o.sum(i)),o.reshape(n.shape)},$b:function(){var e=po(n.square(),r.square()),o=Qr(t.mul(n.div(e))),i=Nr(r.shape,a);return i.length>0&&(o=o.sum(i)),o.reshape(r.shape)}}}))}}),yo=An({divStrict_:function(t,e){var n=mn(t,"a","div"),r=mn(e,"b","div");return E(n.shape,r.shape,"Error in divideStrict: "),n.div(r)}}),xo=An({floorDiv_:function(t,e){var n,r=mn(t,"a","floorDiv"),o=mn(e,"b","floorDiv");n=Nt(r,o),r=n[0],o=n[1];var a=Fr(r.shape,o.shape);return Lt.runKernelFunc((function(t,e){var n=t.floorDiv(r,o);return e([r,o]),n}),{a:r,b:o},(function(t,e){var n=e[0],r=e[1];return{a:function(){var e=t.div(r.toFloat()),o=Nr(n.shape,a);return o.length>0?e.sum(o).reshape(n.shape):e},b:function(){var e=t.mul(n.toFloat()),o=Nr(r.shape,a);o.length>0&&(e=e.sum(o).reshape(r.shape));var i=r.square();return e.div(i.toFloat()).neg()}}}),"FloorDiv")}}),bo=An({maximum_:function(t,e){var n,r=mn(t,"a","maximum"),o=mn(e,"b","maximum");return n=Nt(r,o),r=n[0],o=n[1],"bool"===r.dtype&&(r=r.toInt(),o=o.toInt()),Fr(r.shape,o.shape),Lt.runKernelFunc((function(t,e){var n=t.maximum(r,o);return e([r,o]),n}),{a:r,b:o},(function(t,e){var n=e[0],r=e[1];return{a:function(){return t.mul(n.greaterEqual(r).toFloat())},b:function(){return t.mul(n.less(r).toFloat())}}}),"Maximum")}}),wo=An({maximumStrict_:function(t,e){var n=mn(t,"a","maximumStrict"),r=mn(e,"b","maximumStrict");return E(n.shape,r.shape,"Error in maximumStrict: "),n.maximum(r)}}),Co=An({minimum_:function(t,e){var n,r=mn(t,"a","minimum"),o=mn(e,"b","minimum");return n=Nt(r,o),r=n[0],o=n[1],"bool"===r.dtype&&(r=r.toInt(),o=o.toInt()),Fr(r.shape,o.shape),Lt.runKernelFunc((function(t,e){var n=t.minimum(r,o);return e([r,o]),n}),{a:r,b:o},(function(t,e){var n=e[0],r=e[1];return{a:function(){return t.mul(n.lessEqual(r).toFloat())},b:function(){return t.mul(n.greater(r).toFloat())}}}),"Minimum")}}),Eo=An({minimumStrict_:function(t,e){var n=mn(t,"a","minimumStrict"),r=mn(e,"b","minimumStrict");return E(n.shape,r.shape,"Error in minimumStrict: "),n.minimum(r)}}),Ro=An({mod_:function(t,e){var n,r=mn(t,"a","mod"),o=mn(e,"b","mod");n=Nt(r,o),r=n[0],o=n[1];var a=Fr(r.shape,o.shape);return Lt.runKernelFunc((function(t,e){var n=t.mod(r,o);return e([r,o]),n}),{$a:r,$b:o},(function(t,e){var n=e[0],r=e[1];return{$a:function(){var e=Nr(n.shape,a);return e.length>0?t.sum(e).reshape(n.shape):t},$b:function(){var e=t.mul(n.div(r).floor().neg()),o=Nr(r.shape,a);return o.length>0?e.sum(o).reshape(r.shape):e}}}))}}),Io=An({modStrict_:function(t,e){var n=mn(t,"a","modStrict"),r=mn(e,"b","modStrict");return E(n.shape,r.shape,"Error in modStrict: "),n.mod(r)}}),ko=An({mul_:function(t,e){var n,r=mn(t,"a","mul"),o=mn(e,"b","mul");n=Nt(r,o),r=n[0],o=n[1];var a=Fr(r.shape,o.shape);return Lt.runKernelFunc((function(t,e){var n=t.multiply(r,o);return e([r,o]),n}),{a:r,b:o},(function(t,e){var n=e[0],r=e[1];return{a:function(){var e=t.mul(r.toFloat()),o=Nr(n.shape,a);return o.length>0?e.sum(o).reshape(n.shape):e},b:function(){var e=t.mul(n.toFloat()),o=Nr(r.shape,a);return o.length>0?e.sum(o).reshape(r.shape):e}}}),"Mul")}}),So=An({mulStrict_:function(t,e){var n=mn(t,"a","mul"),r=mn(e,"b","mul");return E(n.shape,r.shape,"Error in multiplyStrict: "),n.mul(r)}}),Ao=An({pow_:function(t,e){var n,r=mn(t,"base","pow"),o=mn(e,"exp","pow");n=Nt(r,o),r=n[0],o=n[1];var a=Fr(r.shape,o.shape),i=[r,o];return Lt.runKernelFunc((function(t,e){var n=t.pow(r,o);return e([r,o,n]),n}),{a:r,b:o},(function(t,e){var n=e[0],r=e[1],o=e[2];return{a:function(){var e=r.toFloat(),o=t.mul(e.mul(n.pow(e.sub(On(1))))),i=Nr(n.shape,a);return i.length>0&&(o=o.sum(i)),o.reshape(n.shape)},b:function(){var e=n.greater(0),i=n.log().where(e,Xn(n)),s=t.mul(o.mul(i)),u=Nr(r.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(r.shape)}}}),"Pow",{},i,[!0])}}),To=An({powStrict_:function(t,e){return E(t.shape,e.shape,"Error in powStrict: "),t.pow(e)}}),Do=An({squaredDifferenceStrict_:function(t,e){var n=mn(t,"a","squaredDifferenceStrict"),r=mn(e,"b","squaredDifferenceStrict");return E(n.shape,r.shape,"Error in squaredDifferenceStrict: "),n.squaredDifference(r)}}),No=An({sub_:function(t,e){var n,r=mn(t,"a","sub"),o=mn(e,"b","sub");n=Nt(r,o),r=n[0],o=n[1];var a=Fr(r.shape,o.shape);return Lt.runKernelFunc((function(t){return t.subtract(r,o)}),{a:r,b:o},(function(t){return{a:function(){var e=t,n=Nr(r.shape,a);return n.length>0&&(e=e.sum(n)),e.reshape(r.shape)},b:function(){var e=t,n=Nr(o.shape,a);return n.length>0&&(e=e.sum(n)),e.neg().reshape(o.shape)}}}),"Sub")}}),Fo=An({subStrict_:function(t,e){var n=mn(t,"a","subStrict"),r=mn(e,"b","subStrict");return E(n.shape,r.shape,"Error in subStrict: "),n.sub(r)}});var _o=An({div_:function(t,e){var n,r=mn(t,"a","div"),o=mn(e,"b","div");if(n=Nt(r,o),r=n[0],o=n[1],"int32"===r.dtype&&"int32"===o.dtype)return xo(r,o);var a={a:r,b:o};return Lt.runKernelFunc((function(t,e){var n=t.realDivide(r,o);return e([r,o]),n}),a,null,Rr,{})}});function Oo(t,e){if(t.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+t.rank+".");if(e.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+e.rank+".");if("int32"!==e.dtype)throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+e.dtype+".");if(e.shape[e.rank-1]>t.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+e.shape[e.rank-1]+" vs. "+t.rank);if(0===t.size)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+t.shape+".");for(var n=e.shape,r=n[n.length-1],o=1,a=0;a<n.length-1;++a)o*=n[a];var i=t.shape,s=n.slice();s.pop();var u=1;for(a=r;a<t.rank;++a)u*=i[a],s.push(i[a]);var c=$(t.shape).map((function(t){return t/u})).concat([1]).slice(0,r);return[s,o,u,c]}var Mo=Object.freeze({prepareAndValidate:Oo}),Bo=30;function Po(t){return t<=Bo?t:Y(t,Math.floor(Math.sqrt(t)))}function Lo(t,e,n){var r=e.rank>1?e.shape[e.rank-1]:1,o=e.rank>1?e.rank-1:1,a="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+n.shape+", indices.shape: "+e.shape+", shape: "+t+", sliceDim: "+r+", and batchDim: "+o+".";if(n.rank<o)throw new Error(a+" update.rank < "+o+". ");if(t.length<r+(n.rank-o))throw new Error(a+" Output shape length < "+(r+(n.rank-o)));if(n.rank!==o+t.length-r)throw new Error(a+" update.rank != "+(o+t.length-r));for(var i=0;i<o;++i)if(n.shape[i]!==e.shape[i])throw new Error(a+" updates.shape["+i+"] ("+n.shape[i]+") != indices.shape["+i+"] ("+e.shape[i]+").");for(i=0;i<n.rank-o;++i)if(n.shape[i+o]!==t[i+r])throw new Error(a+" updates.shape["+(i+o)+"] ("+n.shape[i+o]+") != shape["+(i+o)+"] ("+t[i+o]+")")}function Wo(t,e,n){if(e.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+e.rank+".");if(t.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+t.rank+".");if("int32"!==e.dtype)throw new Error("The dtype of 'indices' should be int32, but got dtype: "+e.dtype);if(n.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+n);if(0===n.length){if(0===e.size)throw new Error("Indices specified for empty output. indices shape: "+e.shape);if(0===t.size)throw new Error("Updates specified for empty output. updates shape: "+t.shape)}Lo(n,e,t)}function Uo(t,e,n){for(var r=e.shape.length,o=r>1?e.shape[r-1]:1,a=n.length,i=1,s=o;s<a;++s)i*=n[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:k(e.shape)/u,sliceSize:i,strides:$(n.slice(0,o)).concat([1]),outputSize:k(n)}}var Vo=Object.freeze({validateUpdateShape:Lo,validateInput:Wo,calculateShapes:Uo});function zo(t,e,n){C(t.rank===e.length,(function(){return"Error in slice"+t.rank+"D: Length of begin "+e+" must match the rank of the array ("+t.rank+")."})),C(t.rank===n.length,(function(){return"Error in slice"+t.rank+"D: Length of size "+n+" must match the rank of the array ("+t.rank+")."}));for(var r=function(r){C(e[r]+n[r]<=t.shape[r],(function(){return"Error in slice"+t.rank+"D: begin["+r+"] + size["+r+"] ("+(e[r]+n[r])+") would overflow input.shape["+r+"] ("+t.shape[r]+")"}))},o=0;o<t.rank;++o)r(o)}function Go(t){for(var e=[],n=0;t>0;)1&t&&e.push(n),t/=2,n++;return e}function Ho(t,e,n){for(var r=[],o=0;o<t.length;o++)r[o]=Math.ceil((e[o]-t[o])/n[o]);return r}function qo(t,e,n,r,o){var a=e[o],i=n[o]||1;(t&1<<o||null==a)&&(a=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=r[o];return a<0&&(a+=s),a=x(0,a,s-1)}function Ko(t,e,n,r,o){var a=e[o],i=n[o]||1;(t&1<<o||null==a)&&(a=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=r[o];return a<0&&(a+=s),a=i>0?x(0,a,s):x(-1,a,s-1)}function jo(t,e,n){for(var r=n.length,o=0;o<n.length;o++)if(n[o]>1){r=o;break}for(o=r+1;o<n.length;o++)if(e[o]>0||n[o]!==t[o])return!1;return!0}function Xo(t,e){for(var n=t.length>0?t[t.length-1]:1,r=0;r<t.length-1;r++)n+=t[r]*e[r];return n}var Yo=Object.freeze({assertParamsValid:zo,maskToAxes:Go,computeOutShape:Ho,startForAxis:qo,stopForAxis:Ko,isSliceContinous:jo,computeFlatOffset:Xo});function $o(t){return C(X(t),(function(){return"The f passed in grad(f) must be a function"})),function(e,n){var r=mn(e,"x","tf.grad",null),o=null!=n?mn(n,"dy","tf.grad"):null;return Lt.tidy((function(){var e=Lt.gradients((function(){return t(r)}),[r],o),n=e.value,a=e.grads;return null!=o&&E(n.shape,o.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),na(a),a[0]}))}}function Qo(t){return C(X(t),(function(){return"The f passed in grads(f) must be a function"})),function(e,n){C(Array.isArray(e),(function(){return"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s"}));var r=gn(e,"args","tf.grads",null),o=null!=n?mn(n,"dy","tf.grads"):null;return Lt.tidy((function(){var e=Lt.gradients((function(){return t.apply(void 0,r)}),r,o),n=e.value,a=e.grads;return null!=o&&E(n.shape,o.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),na(a),a}))}}function Jo(t){return C(X(t),(function(){return"The f passed in valueAndGrad(f) must be a function"})),function(e,n){C(e instanceof wt,(function(){return"The x passed in valueAndGrad(f)(x) must be a tensor"})),C(null==n||n instanceof wt,(function(){return"The dy passed in valueAndGrad(f)(x, dy) must be a tensor"}));var r=Lt.gradients((function(){return t(e)}),[e],n),o=r.grads,a=r.value;return na(o),{grad:o[0],value:a}}}function Zo(t){return C(X(t),(function(){return"The f passed in valueAndGrads(f) must be a function"})),function(e,n){C(Array.isArray(e)&&e.every((function(t){return t instanceof wt})),(function(){return"The args passed in valueAndGrads(f)(args) must be array of tensors"})),C(null==n||n instanceof wt,(function(){return"The dy passed in valueAndGrads(f)(args, dy) must be a tensor"}));var r=Lt.gradients((function(){return t.apply(void 0,e)}),e,n);return null!=n&&E(r.value.shape,n.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),na(r.grads),r}}function ta(t,e){C(X(t),(function(){return"The f passed in variableGrads(f) must be a function"})),C(null==e||Array.isArray(e)&&e.every((function(t){return t instanceof St})),(function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"}));var n=null!=e;if(!n)for(var r in e=[],Lt.registeredVariables)e.push(Lt.registeredVariables[r]);var o=n?e.filter((function(t){return!t.trainable})):null,a=e.length;C((e=e.filter((function(t){return t.trainable}))).length>0,(function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+a+" variables is trainable."}));var i=Lt.gradients(t,e,null,!0),s=i.value,u=i.grads;C(u.some((function(t){return null!=t})),(function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."})),C(0===s.rank,(function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"}));var c={};return e.forEach((function(t,e){null!=u[e]&&(c[t.name]=u[e])})),null!=o&&o.forEach((function(t){return c[t.name]=null})),{value:s,grads:c}}function ea(t){return Lt.customGrad(t)}function na(t){if(t.filter((function(t){return null==t})).length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.")}var ra=An({softmax_:function(t,e){void 0===e&&(e=-1);var n=mn(t,"logits","softmax","float32");if(-1===e&&(e=n.rank-1),e!==n.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+n.rank+" and dim was "+e);return Lt.runKernelFunc((function(t,r){var o=t.softmax(n,e);return r([o]),o}),{logits:n},(function(t,n){var r=n[0],o=t.mul(r);return{logits:function(){return o.sub(o.sum([e],!0).mul(r))}}}),"Softmax",{dim:e},[],[!0])}}),oa=An({logSoftmax_:function(t,e){void 0===e&&(e=-1);var n=mn(t,"logits","logSoftmax");if(-1===e&&(e=n.rank-1),e!==n.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+n.rank+" and axis was "+e);return ea((function(t,n){var r=t.max(e,!0),o=t.sub(r),a=o.toFloat().sub(o.exp().sum(e,!0).log());n([a]);return{value:a,gradFunc:function(t,n){var r=n[0].exp();return t.sub(t.sum(e,!0).mul(r))}}}))(n)}}),aa=function(){function t(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}return t.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},t.prototype.set=function(t,e){this.dataIdsCount++,this.data.set(t,e)},t.prototype.has=function(t){return this.data.has(t)},t.prototype.delete=function(t){return this.dataIdsCount--,this.data.delete(t)},t.prototype.numDataIds=function(){return this.dataIdsCount},t}(),ia=function(){function t(){}return t.prototype.time=function(t){return sa("time")},t.prototype.read=function(t){return sa("read")},t.prototype.readSync=function(t){return sa("readSync")},t.prototype.numDataIds=function(){return sa("numDataIds")},t.prototype.disposeData=function(t){return sa("disposeData")},t.prototype.write=function(t,e,n){return sa("write")},t.prototype.move=function(t,e,n,r){return sa("move")},t.prototype.memory=function(){return sa("memory")},t.prototype.floatPrecision=function(){return sa("floatPrecision")},t.prototype.epsilon=function(){return 32===this.floatPrecision()?1e-7:1e-4},t.prototype.batchMatMul=function(t,e,n,r){return sa("batchMatMul")},t.prototype.fusedBatchMatMul=function(t){t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights;return sa("fusedBatchMatMul")},t.prototype.slice=function(t,e,n){return sa("slice")},t.prototype.stridedSlice=function(t,e,n,r){return sa("stridedSlice")},t.prototype.unstack=function(t,e){return sa("unstack")},t.prototype.reverse=function(t,e){return sa("reverse")},t.prototype.concat=function(t,e){return sa("concat")},t.prototype.neg=function(t){return sa("neg")},t.prototype.add=function(t,e){return sa("add")},t.prototype.addN=function(t){return sa("addN")},t.prototype.subtract=function(t,e){return sa("subtract")},t.prototype.multiply=function(t,e){return sa("multiply")},t.prototype.realDivide=function(t,e){return sa("realDivide")},t.prototype.floorDiv=function(t,e){return sa("floorDiv")},t.prototype.sum=function(t,e){return sa("sum")},t.prototype.prod=function(t,e){return sa("prod")},t.prototype.unsortedSegmentSum=function(t,e,n){return sa("unsortedSegmentSum")},t.prototype.argMin=function(t,e){return sa("argMin")},t.prototype.argMax=function(t,e){return sa("argMax")},t.prototype.equal=function(t,e){return sa("equal")},t.prototype.notEqual=function(t,e){return sa("notEqual")},t.prototype.less=function(t,e){return sa("less")},t.prototype.lessEqual=function(t,e){return sa("lessEqual")},t.prototype.greater=function(t,e){return sa("greater")},t.prototype.greaterEqual=function(t,e){return sa("greaterEqual")},t.prototype.logicalNot=function(t){return sa("logicalNot")},t.prototype.logicalAnd=function(t,e){return sa("logicalAnd")},t.prototype.logicalOr=function(t,e){return sa("logicalOr")},t.prototype.where=function(t){return sa("where")},t.prototype.select=function(t,e,n){return sa("select")},t.prototype.topk=function(t,e,n){return sa("topk")},t.prototype.min=function(t,e){return sa("min")},t.prototype.minimum=function(t,e){return sa("minimum")},t.prototype.mod=function(t,e){return sa("mod")},t.prototype.max=function(t,e){return sa("max")},t.prototype.maximum=function(t,e){return sa("maximum")},t.prototype.all=function(t,e){return sa("all")},t.prototype.any=function(t,e){return sa("any")},t.prototype.squaredDifference=function(t,e){return sa("squaredDifference")},t.prototype.ceil=function(t){return sa("ceil")},t.prototype.floor=function(t){return sa("floor")},t.prototype.round=function(t){return sa("round")},t.prototype.sign=function(t){return sa("sign")},t.prototype.isNaN=function(t){return sa("isNaN")},t.prototype.isInf=function(t){return sa("isInf")},t.prototype.isFinite=function(t){return sa("isFinite")},t.prototype.pow=function(t,e){return sa("pow")},t.prototype.exp=function(t){return sa("exp")},t.prototype.expm1=function(t){return sa("expm1")},t.prototype.softmax=function(t,e){return sa("softmax")},t.prototype.log=function(t){return sa("log")},t.prototype.log1p=function(t){return sa("log1p")},t.prototype.sqrt=function(t){return sa("sqrt")},t.prototype.rsqrt=function(t){return sa("rsqrt")},t.prototype.square=function(t){return sa("square")},t.prototype.reciprocal=function(t){return sa("reciprocal")},t.prototype.relu=function(t){return sa("relu")},t.prototype.relu6=function(t){return sa("relu6")},t.prototype.prelu=function(t,e){return sa("prelu")},t.prototype.elu=function(t){return sa("elu")},t.prototype.eluDer=function(t,e){return sa("eluDer")},t.prototype.selu=function(t){return sa("selu")},t.prototype.int=function(t){return sa("int")},t.prototype.clip=function(t,e,n){return sa("clip")},t.prototype.abs=function(t){return sa("abs")},t.prototype.complexAbs=function(t){return sa("complexAbs")},t.prototype.sigmoid=function(t){return sa("sigmoid")},t.prototype.softplus=function(t){return sa("softplus")},t.prototype.sin=function(t){return sa("sin")},t.prototype.cos=function(t){return sa("cos")},t.prototype.tan=function(t){return sa("tan")},t.prototype.asin=function(t){return sa("asin")},t.prototype.acos=function(t){return sa("acos")},t.prototype.atan=function(t){return sa("atan")},t.prototype.atan2=function(t,e){return sa("atan2")},t.prototype.sinh=function(t){return sa("sinh")},t.prototype.cosh=function(t){return sa("cosh")},t.prototype.tanh=function(t){return sa("tanh")},t.prototype.asinh=function(t){return sa("asinh")},t.prototype.acosh=function(t){return sa("acosh")},t.prototype.atanh=function(t){return sa("atanh")},t.prototype.erf=function(t){return sa("erf")},t.prototype.step=function(t,e){return sa("step")},t.prototype.fusedConv2d=function(t){t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights;return sa("fusedConv2d")},t.prototype.conv2d=function(t,e,n){return sa("conv2d")},t.prototype.conv2dDerInput=function(t,e,n){return sa("conv2dDerInput")},t.prototype.conv2dDerFilter=function(t,e,n){return sa("conv2dDerFilter")},t.prototype.fusedDepthwiseConv2D=function(t){t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights;return sa("fusedDepthwiseConv2D")},t.prototype.depthwiseConv2D=function(t,e,n){return sa("depthwiseConv2D")},t.prototype.depthwiseConv2DDerInput=function(t,e,n){return sa("depthwiseConv2DDerInput")},t.prototype.depthwiseConv2DDerFilter=function(t,e,n){return sa("depthwiseConv2DDerFilter")},t.prototype.conv3d=function(t,e,n){return sa("conv3d")},t.prototype.conv3dDerInput=function(t,e,n){return sa("conv3dDerInput")},t.prototype.conv3dDerFilter=function(t,e,n){return sa("conv3dDerFilter")},t.prototype.maxPool=function(t,e){return sa("maxPool")},t.prototype.maxPoolBackprop=function(t,e,n,r){return sa("maxPoolBackprop")},t.prototype.avgPool=function(t,e){return sa("avgPool")},t.prototype.avgPoolBackprop=function(t,e,n){return sa("avgPoolBackprop")},t.prototype.avgPool3d=function(t,e){return sa("avgPool3d")},t.prototype.avgPool3dBackprop=function(t,e,n){return sa("avgPool3dBackprop")},t.prototype.maxPool3d=function(t,e){return sa("maxPool3d")},t.prototype.maxPool3dBackprop=function(t,e,n,r){return sa("maxPool3dBackprop")},t.prototype.reshape=function(t,e){return sa("reshape")},t.prototype.cast=function(t,e){return sa("cast")},t.prototype.tile=function(t,e){return sa("tile")},t.prototype.pad=function(t,e,n){return sa("pad")},t.prototype.transpose=function(t,e){return sa("transpose")},t.prototype.gather=function(t,e,n){return sa("gather")},t.prototype.gatherND=function(t,e){return sa("gatherND")},t.prototype.scatterND=function(t,e,n){return sa("scatterND")},t.prototype.batchToSpaceND=function(t,e,n){return sa("batchToSpaceND")},t.prototype.spaceToBatchND=function(t,e,n){return sa("spaceToBatchND")},t.prototype.resizeBilinear=function(t,e,n,r){return sa("resizeBilinear")},t.prototype.resizeBilinearBackprop=function(t,e,n){return sa("resizeBilinearBackprop")},t.prototype.resizeNearestNeighbor=function(t,e,n,r){return sa("resizeNearestNeighbor")},t.prototype.resizeNearestNeighborBackprop=function(t,e,n){return sa("resizeNearestNeighborBackprop")},t.prototype.batchNormalization=function(t,e,n,r,o,a){return sa("batchNormalization")},t.prototype.localResponseNormalization4D=function(t,e,n,r,o){return sa("localResponseNormalization4D")},t.prototype.LRNGrad=function(t,e,n,r,o,a,i){return sa("LRNGrad")},t.prototype.multinomial=function(t,e,n,r){return sa("multinomial")},t.prototype.oneHot=function(t,e,n,r){return sa("oneHot")},t.prototype.cumsum=function(t,e,n,r){return sa("cumsum")},t.prototype.nonMaxSuppression=function(t,e,n,r,o){return sa("nonMaxSuppression")},t.prototype.fft=function(t){return sa("fft")},t.prototype.ifft=function(t){return sa("ifft")},t.prototype.complex=function(t,e){return sa("complex")},t.prototype.real=function(t){return sa("real")},t.prototype.imag=function(t){return sa("imag")},t.prototype.cropAndResize=function(t,e,n,r,o,a){return sa("cropAndResize")},t.prototype.depthToSpace=function(t,e,n){return sa("depthToSpace")},t.prototype.split=function(t,e,n){return sa("split")},t.prototype.sparseToDense=function(t,e,n,r){return sa("sparseToDense")},t.prototype.diag=function(t){return sa("diag")},t.prototype.fill=function(t,e,n){return sa("fill")},t.prototype.onesLike=function(t){return sa("onesLike")},t.prototype.zerosLike=function(t){return sa("zerosLike")},t.prototype.linspace=function(t,e,n){return sa("linspace")},t.prototype.dispose=function(){return sa("dispose")},t}();function sa(t){throw new Error("'"+t+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function ua(t,e,n,r,o,a,i){void 0===i&&(i="channelsLast");var s,u=da(e),c=u[0],l=u[1];if("channelsLast"===i)s=[c,l,t[3],t[3]];else{if("channelsFirst"!==i)throw new Error("Unknown dataFormat "+i);s=[c,l,t[1],t[1]]}return la(t,s,n,r,o,a,!1,i)}function ca(t,e,n,r,o,a,i){void 0===i&&(i="NDHWC");var s,u,c=pa(e),l=c[0],h=c[1],f=c[2];if("NDHWC"===i)u="channelsLast",s=[l,h,f,t[4],t[4]];else{if("NCDHW"!==i)throw new Error("Unknown dataFormat "+i);u="channelsFirst",s=[l,h,f,t[1],t[1]]}return ha(t,s,n,r,o,!1,u,a)}function la(t,e,n,r,o,a,i,s){void 0===i&&(i=!1),void 0===s&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],f=u[3];if("channelsLast"===s)c=t[0],l=t[1],h=t[2],f=t[3];else{if("channelsFirst"!==s)throw new Error("Unknown dataFormat "+s);c=t[0],f=t[1],l=t[2],h=t[3]}var d,p=e[0],v=e[1],m=e[3],g=da(n),y=g[0],x=g[1],b=da(r),w=b[0],E=b[1],R=va(p,w),I=va(v,E),k=function(t,e,n,r,o,a,i,s){var u,c,l;if("number"==typeof t){u={top:t,bottom:t,left:t,right:t,type:0===t?"VALID":"NUMBER"};var h=function(t,e,n,r,o){null==r&&(r=fa(t,e,n));var a=t[0],i=t[1],s=ma((a-e+2*r)/n+1,o);C(A(s),(function(){return"The output # of rows ("+s+") must be an integer. Change the stride and/or zero pad parameters"}));var u=ma((i-e+2*r)/n+1,o);return C(A(u),(function(){return"The output # of columns ("+u+") must be an integer. Change the stride and/or zero pad parameters"})),[s,u]}([e,n],a,r,t,s);c=h[0],l=h[1]}else if("same"===t){c=Math.ceil(e/r),l=Math.ceil(n/o);var f=Math.max(0,(c-1)*r+a-e),d=Math.max(0,(l-1)*o+i-n),p=Math.floor(f/2),v=f-p,m=Math.floor(d/2);u={top:p,bottom:v,left:m,right:d-m,type:"SAME"}}else{if("valid"!==t)throw Error("Unknown padding parameter: "+t);u={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((e-a+1)/r),l=Math.ceil((n-i+1)/o)}return{padInfo:u,outHeight:c,outWidth:l}}(o,l,h,y,x,R,I,a),S=k.padInfo,T=k.outHeight,D=k.outWidth,N=i?m*f:m;return"channelsFirst"===s?d=[c,N,T,D]:"channelsLast"===s&&(d=[c,T,D,N]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:h,inChannels:f,outHeight:T,outWidth:D,outChannels:N,padInfo:S,strideHeight:y,strideWidth:x,filterHeight:p,filterWidth:v,effectiveFilterHeight:R,effectiveFilterWidth:I,dilationHeight:w,dilationWidth:E,inShape:t,outShape:d,filterShape:e}}function ha(t,e,n,r,o,a,i,s){void 0===a&&(a=!1),void 0===i&&(i="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],f=u[3],d=u[4];if("channelsLast"===i)c=t[0],l=t[1],h=t[2],f=t[3],d=t[4];else{if("channelsFirst"!==i)throw new Error("Unknown dataFormat "+i);c=t[0],d=t[1],l=t[2],h=t[3],f=t[4]}var p,v=e[0],m=e[1],g=e[2],y=e[4],x=pa(n),b=x[0],w=x[1],E=x[2],R=pa(r),I=R[0],k=R[1],S=R[2],T=va(v,I),D=va(m,k),N=va(g,S),F=function(t,e,n,r,o,a,i,s,u,c,l){var h,f,d,p;if("number"==typeof t){h={top:t,bottom:t,left:t,right:t,front:t,back:t,type:0===t?"VALID":"NUMBER"};var v=function(t,e,n,r,o,a){null==o&&(o=fa(t,e,r));var i=t[0],s=t[1],u=t[2],c=ma((i-e+2*o)/r+1,a);C(A(c),(function(){return"The output # of depths ("+c+") must be an integer. Change the stride and/or zero pad parameters"}));var l=ma((s-e+2*o)/r+1,a);C(A(l),(function(){return"The output # of rows ("+l+") must be an integer. Change the stride and/or zero pad parameters"}));var h=ma((u-e+2*o)/r+1,a);return C(A(h),(function(){return"The output # of columns ("+h+") must be an integer. Change the stride and/or zero pad parameters"})),[c,l,h,n]}([e,n,r,1],s,1,o,t,l);f=v[0],d=v[1],p=v[2]}else if("same"===t){f=Math.ceil(e/o),d=Math.ceil(n/a),p=Math.ceil(r/i);var m=(f-1)*o+s-e,g=(d-1)*a+u-n,y=(p-1)*i+c-r,x=Math.floor(m/2),b=m-x,w=Math.floor(g/2),E=g-w,R=Math.floor(y/2);h={top:w,bottom:E,left:R,right:y-R,front:x,back:b,type:"SAME"}}else{if("valid"!==t)throw Error("Unknown padding parameter: "+t);h={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},f=Math.ceil((e-s+1)/o),d=Math.ceil((n-u+1)/a),p=Math.ceil((r-c+1)/i)}return{padInfo:h,outDepth:f,outHeight:d,outWidth:p}}(o,l,h,f,b,w,E,T,D,N,s),_=F.padInfo,O=F.outDepth,M=F.outHeight,B=F.outWidth,P=a?y*d:y;return"channelsFirst"===i?p=[c,P,O,M,B]:"channelsLast"===i&&(p=[c,O,M,B,P]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:h,inWidth:f,inChannels:d,outDepth:O,outHeight:M,outWidth:B,outChannels:P,padInfo:_,strideDepth:b,strideHeight:w,strideWidth:E,filterDepth:v,filterHeight:m,filterWidth:g,effectiveFilterDepth:T,effectiveFilterHeight:D,effectiveFilterWidth:N,dilationDepth:I,dilationHeight:k,dilationWidth:S,inShape:t,outShape:p,filterShape:e}}function fa(t,e,n,r){void 0===r&&(r=1);var o=va(e,r);return Math.floor((t[0]*(n-1)-n+o)/2)}function da(t){return"number"==typeof t?[t,t,t]:2===t.length?[t[0],t[1],1]:t}function pa(t){return"number"==typeof t?[t,t,t]:t}function va(t,e){return e<=1?t:t+(t-1)*(e-1)}function ma(t,e){if(!e)return t;switch(e){case"round":return Math.round(t);case"ceil":return Math.ceil(t);case"floor":return Math.floor(t);default:throw new Error("Unknown roundingMode "+e)}}function ga(t){var e=da(t),n=e[0],r=e[1],o=e[2];return 1===n&&1===r&&1===o}function ya(t,e){return ga(t)||ga(e)}function xa(t){if("NHWC"===t)return"channelsLast";if("NCHW"===t)return"channelsFirst";throw new Error("Unknown dataFormat "+t)}function ba(t,e,n){if("complex64"===e){if("complex64"===t.dtype)return t.clone();var r=Gn(t.shape),o=t.toFloat(),a=n.complex(o,r);return r.dispose(),o.dispose(),a}if(!U(t.dtype,e))return Lt.makeTensorFromDataId(t.dataId,t.shape,e);if("complex64"===t.dtype){var i=n.real(t);a=i.cast(e);return i.dispose(),a}if("int32"===e)return n.int(t);if("bool"===e){var s=On(0,t.dtype);a=n.notEqual(t,s);return s.dispose(),a}throw new Error("Error in Cast: failed to cast "+t.dtype+" to "+e)}function wa(t,e){return Lt.makeTensorFromDataId(t.dataId,e,t.dtype)}function Ca(t,e,n){var r=(e-t)/(n-1),o=tt(n,"float32");o[0]=t;for(var a=1;a<o.length;a++)o[a]=o[a-1]+r;return Mn(o,"float32")}var Ea=Object.freeze({castTensor:ba,reshapeTensor:wa,linspaceImpl:Ca,upcastType:Tt,axesAreInnerMostDims:yn,combineLocations:xn,computeOutAndReduceShapes:bn,expandShapeToKeepDim:wn,assertAxesAreInnerMostDims:Cn,getAxesPermutation:En,getUndoAxesPermutation:Rn,getInnerMostAxes:In,getBroadcastDims:Dr,getReductionAxes:Nr,assertAndGetBroadcastShape:Fr,assertParamsConsistent:kn,computeOutShape:Sn,computePool2DInfo:ua,computePool3DInfo:ca,computeConv2DInfo:la,computeConv3DInfo:ha,computeDefaultPad:fa,tupleValuesAreOne:ga,eitherStridesOrDilationsAreOne:ya,convertConv2DDataFormat:xa,PARALLELIZE_THRESHOLD:Bo,computeOptimalWindowSize:Po});function Ra(t,e){if(t.length!==e.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+t.length+", imag: "+e.length+".");for(var n=new Float32Array(2*t.length),r=0;r<n.length;r+=2)n[r]=t[r/2],n[r+1]=e[r/2];return n}function Ia(t,e){return{real:t[2*e],imag:t[2*e+1]}}function ka(t,e,n,r){t[2*r]=e,t[2*r+1]=n}function Sa(t,e,n){var r=(n?2:-2)*Math.PI*(t/e);return{real:Math.cos(r),imag:Math.sin(r)}}function Aa(t,e,n){var r=function(t,e,n){return function(t,e,n){var r=0,o=t.length,a=0,i=!1;for(;r<o;){var s=n(e,t[a=r+(o-r>>>1)]);s>0?r=a+1:(o=a,i=!s)}return i?r:-r-1}(t,e,n||Ta)}(t,e,n),o=r<0?-(r+1):r;t.splice(o,0,e)}function Ta(t,e){return t>e?1:t<e?-1:0}function Da(t,e,n,r,o){return Fa(t,e,n,r,o,0).selectedIndices}function Na(t,e,n,r,o,a){var i=Fa(t,e,n,r,o,a,!0);return i.numValidOutputs.dispose(),{selectedIndices:i.selectedIndices,selectedScores:i.selectedScores}}function Fa(t,e,n,r,o,a,i,s){void 0===i&&(i=!1),void 0===s&&(s=!1);for(var u=Array.from(e).map((function(t,e){return{score:t,boxIndex:e,suppressBeginIndex:0}})).filter((function(t){return t.score>o})).sort(Ma),c=a>0?-.5/a:0,l=[],h=[];l.length<n&&u.length>0;){var f=u.pop(),d=f.score,p=f.boxIndex,v=f.suppressBeginIndex;if(d<o)break;for(var m=!1,g=l.length-1;g>=v;--g){var y=_a(t,p,l[g]);if(y>=r){m=!0;break}if(f.score=f.score*Oa(r,c,y),f.score<=o)break}f.suppressBeginIndex=l.length,m||(f.score===d?(l.push(p),h.push(f.score)):f.score>o&&Aa(u,f,Ma))}var x=l.length;return s&&(l.fill(0,x),h.fill(0,x)),{selectedIndices:Mn(l,"int32"),selectedScores:Mn(h,"float32"),numValidOutputs:On(x,"int32")}}function _a(t,e,n){var r=t.subarray(4*e,4*e+4),o=t.subarray(4*n,4*n+4),a=Math.min(r[0],r[2]),i=Math.min(r[1],r[3]),s=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),h=Math.max(o[0],o[2]),f=Math.max(o[1],o[3]),d=(s-a)*(u-i),p=(h-c)*(f-l);if(d<=0||p<=0)return 0;var v=Math.max(a,c),m=Math.max(i,l),g=Math.min(s,h),y=Math.min(u,f),x=Math.max(g-v,0)*Math.max(y-m,0);return x/(d+p-x)}function Oa(t,e,n){var r=Math.exp(e*n*n);return n<=t?r:0}function Ma(t,e){return t.score-e.score||t.score===e.score&&e.boxIndex-t.boxIndex}function Ba(t,e,n){var r=new Array(t.rank).fill(0),o=t.shape.slice();return e.map((function(e){o[n]=e;var a=t.slice(r,o);return r[n]+=e,a}))}function Pa(t,e){for(var n=new Array(t.rank),r=0;r<n.length;r++)n[r]=t.shape[r]*e[r];var o=er(n,t.dtype);for(r=0;r<o.values.length;++r){for(var a=o.indexToLoc(r),i=new Array(t.rank),s=0;s<i.length;s++)i[s]=a[s]%t.shape[s];var u=t.locToIndex(i);o.values[r]=t.values[u]}return o.toTensor()}function La(t,e,n,r,o){for(var a=e[e.length-1],i=[t.length/a,a],s=i[0],u=i[1],c=B(n,s*r),l=B("int32",s*r),h=0;h<s;h++){for(var f=h*u,d=t.subarray(f,f+u),p=[],v=0;v<d.length;v++)p.push({value:d[v],index:v});p.sort((function(t,e){return e.value-t.value}));var m=h*r,g=c.subarray(m,m+r),y=l.subarray(m,m+r);for(v=0;v<r;v++)g[v]=p[v].value,y[v]=p[v].index}var x=e.slice();return x[x.length-1]=r,[Fn(c,x,n),Fn(l,x,"int32")]}function Wa(t,e){for(var n=[],r=0;r<e.length;r++)e[r]&&n.push(r);var o=er(t,"int32"),a=er([n.length,t.length],"int32");for(r=0;r<n.length;r++){var i=o.indexToLoc(n[r]),s=r*t.length;a.values.set(i,s)}return a.toTensor()}var Ua=function(t,e){this.outputShape=[],this.outputShape=t,this.variableNames=e.map((function(t,e){return"T"+e}));var n=[];this.variableNames.forEach((function(t){n.push("float v"+t+" = get"+t+"AtOutCoords();")}));var r=this.variableNames.map((function(t){return"v"+t})).join(" + ");this.userCode="\n      void main() {\n        "+n.join("\n        ")+"\n\n        float result = "+r+";\n        setOutput(result);\n      }\n    "},Va=function(t,e){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.variableNames=e.map((function(t,e){return"T"+e}));var n=[];this.variableNames.forEach((function(t){n.push("vec4 v"+t+" = get"+t+"AtOutCoords();")}));var r=this.variableNames.map((function(t){return"v"+t})).join(" + ");this.userCode="\n      void main() {\n        "+n.join("\n        ")+"\n\n        vec4 result = "+r+";\n        setOutput(result);\n      }\n    "},za=function(t,e,n){this.variableNames=["A"];var r=t.windowSize,o=t.batchSize,a=t.inSize,i=Math.ceil(a/r);n||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];var s="max"===e?">":"<",u=n?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode="\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * "+r+";\n\n        int bestIndex = inOffset;\n        float bestValue = getA(batch, bestIndex);\n\n        for (int i = 0; i < "+r+"; i++) {\n          int inIdx = "+u+";\n          float candidate = getA(batch, inIdx);\n          if (candidate "+s+" bestValue) {\n            bestValue = candidate;\n            bestIndex = inIdx;\n          }\n        }\n        setOutput(float(bestIndex));\n      }\n    "};function Ga(t,e){return["x","y","z","w","u","v"].slice(0,e).map((function(e){return t+"."+e}))}function Ha(t,e){return 1===e?[t]:Ga(t,e)}function qa(){var t,e,n,r,o,a,s,u,c,l;return 2===i().getNumber("WEBGL_VERSION")?(t="#version 300 es",e="in",n="out",r="in",o="texture",a="outputColor",s="out vec4 outputColor;",u="\n      bool isnan_custom(float val) {\n        return (val > 0.0 || val < 0.0) ? false : val != 0.0;\n      }\n\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan_custom(val.x),\n          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));\n      }\n\n      #define isnan(value) isnan_custom(value)\n    ",c="",l="\n      #define round(value) newRound(value)\n      int newRound(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 newRound(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "):(t="",e="attribute",n="varying",r="varying",o="texture2D",a="gl_FragColor",s="",u="\n      #define isnan(value) isnan_custom(value)\n      bool isnan_custom(float val) {\n        return (val > 0. || val < 1. || val == 0.) ? false : true;\n      }\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));\n      }\n    ",c="\n      uniform float INFINITY;\n\n      bool isinf(float val) {\n        return abs(val) == INFINITY;\n      }\n      bvec4 isinf(vec4 val) {\n        return equal(abs(val), vec4(INFINITY));\n      }\n    ",l="\n      int round(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 round(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "),{version:t,attribute:e,varyingVs:n,varyingFs:r,texture2D:o,output:a,defineOutput:s,defineSpecialNaN:u,defineSpecialInf:c,defineRound:l}}function Ka(t,e,n){void 0===n&&(n="index");var r=$(e);return r.map((function(e,o){return"int "+t[o]+" = "+n+" / "+e+"; "+(o===r.length-1?"int "+t[o+1]+" = "+n+" - "+t[o]+" * "+e:"index -= "+t[o]+" * "+e)+";"})).join("")}function ja(t){var e=$(t).map((function(t){return t.toString()}));return"\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * "+e[0]+" + coords.y * "+e[1]+" + coords.z;\n  }\n"}var Xa="\n  const float FLOAT_MAX = 1.70141184e38;\n  const float FLOAT_MIN = 1.17549435e-38;\n\n  lowp vec4 encode_float(highp float v) {\n    if (isnan(v)) {\n      return vec4(255, 255, 255, 255);\n    }\n\n    highp float av = abs(v);\n\n    if(av < FLOAT_MIN) {\n      return vec4(0.0, 0.0, 0.0, 0.0);\n    } else if(v > FLOAT_MAX) {\n      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;\n    } else if(v < -FLOAT_MAX) {\n      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;\n    }\n\n    highp vec4 c = vec4(0,0,0,0);\n\n    highp float e = floor(log2(av));\n    highp float m = exp2(fract(log2(av))) - 1.0;\n\n    c[2] = floor(128.0 * m);\n    m -= c[2] / 128.0;\n    c[1] = floor(32768.0 * m);\n    m -= c[1] / 32768.0;\n    c[0] = floor(8388608.0 * m);\n\n    highp float ebias = e + 127.0;\n    c[3] = floor(ebias / 2.0);\n    ebias -= c[3] * 2.0;\n    c[2] += floor(ebias) * 128.0;\n\n    c[3] += 128.0 * step(0.0, -v);\n\n    return c / 255.0;\n  }\n";function Ya(t,e,n,r){var o=[];t.forEach((function(t){var e=k(t.shapeInfo.logicalShape);t.shapeInfo.isUniform?o.push("uniform float "+t.name+(e>1?"["+e+"]":"")+";"):(o.push("uniform sampler2D "+t.name+";"),o.push("uniform int offset"+t.name+";"))}));var a,i,s=o.join("\n"),u=t.map((function(t){return function(t,e,n){void 0===n&&(n=!1);var r="";r+=n?Qa(t):$a(t);var o=t.shapeInfo.logicalShape,a=e.logicalShape;o.length<=a.length&&(r+=n?function(t,e){var n,r=t.name,o=r.charAt(0).toUpperCase()+r.slice(1),a="get"+o+"AtOutCoords",i=t.shapeInfo.logicalShape.length,s=e.logicalShape.length,u=Dr(t.shapeInfo.logicalShape,e.logicalShape),c=oi(s),l=s-i,h=["x","y","z","w","u","v"];n=0===i?"":s<2&&u.length>=1?"coords = 0;":u.map((function(t){return"coords."+h[t+l]+" = 0;"})).join("\n");var f="";f=s<2&&i>0?"coords":t.shapeInfo.logicalShape.map((function(t,e){return"coords."+h[e+l]})).join(", ");var d="return outputValue;",p=1===k(t.shapeInfo.logicalShape),v=1===k(e.logicalShape);if(1!==i||p||v){if(p&&!v)d=1===s?"\n        return vec4(outputValue.x, outputValue.x, 0., 0.);\n      ":"\n        return vec4(outputValue.x);\n      ";else if(u.length){var m=i-2,g=i-1;u.indexOf(m)>-1&&u.indexOf(g)>-1?d="return vec4(outputValue.x);":u.indexOf(m)>-1?d="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":u.indexOf(g)>-1&&(d="return vec4(outputValue.xx, outputValue.zz);")}}else d="\n      return vec4(outputValue.xy, outputValue.xy);\n    ";return"\n    vec4 "+a+"() {\n      "+c+" coords = getOutputCoords();\n      "+n+"\n      vec4 outputValue = get"+o+"("+f+");\n      "+d+"\n    }\n  "}(t,e):function(t,e){var n=t.name,r=n.charAt(0).toUpperCase()+n.slice(1),o="get"+r+"AtOutCoords",a=e.texShape,i=t.shapeInfo.texShape,s=t.shapeInfo.logicalShape.length,u=e.logicalShape.length;if(!t.shapeInfo.isUniform&&s===u&&null==t.shapeInfo.flatOffset&&S(i,a))return"\n      float "+o+"() {\n        return sampleTexture("+n+", resultUV);\n      }\n    ";var c,l=oi(u),h=Dr(t.shapeInfo.logicalShape,e.logicalShape),f=u-s,d=["x","y","z","w","u","v"];c=0===s?"":u<2&&h.length>=1?"coords = 0;":h.map((function(t){return"coords."+d[t+f]+" = 0;"})).join("\n");var p="";p=u<2&&s>0?"coords":t.shapeInfo.logicalShape.map((function(t,e){return"coords."+d[e+f]})).join(", ");return"\n    float "+o+"() {\n      "+l+" coords = getOutputCoords();\n      "+c+"\n      return get"+r+"("+p+");\n    }\n  "}(t,e));return r}(t,e,r)})).join("\n"),c=e.texShape,l=qa(),h=function(t){return"\n    float sampleTexture(sampler2D textureSampler, vec2 uv) {\n      return "+t.texture2D+"(textureSampler, uv).r;\n    }\n  "}(l),f=function(t){return t.version+"\n    precision highp float;\n    precision highp int;\n    precision highp sampler2D;\n    "+t.varyingFs+" vec2 resultUV;\n    "+t.defineOutput+"\n    const vec2 halfCR = vec2(0.5, 0.5);\n\n    struct ivec5\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n    };\n\n    struct ivec6\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n      int v;\n    };\n\n    uniform float NAN;\n    "+t.defineSpecialNaN+"\n    "+t.defineSpecialInf+"\n    "+t.defineRound+"\n\n    int imod(int x, int y) {\n      return x - y * (x / y);\n    }\n\n    int idiv(int a, int b, float sign) {\n      int res = a / b;\n      int mod = imod(a, b);\n      if (sign < 0. && mod != 0) {\n        res -= 1;\n      }\n      return res;\n    }\n\n    //Based on the work of Dave Hoskins\n    //https://www.shadertoy.com/view/4djSRW\n    #define HASHSCALE1 443.8975\n    float random(float seed){\n      vec2 p = resultUV * seed;\n      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);\n      p3 += dot(p3, p3.yzx + 19.19);\n      return fract((p3.x + p3.y) * p3.z);\n    }\n\n    "+Ja+"\n    "+Za+"\n    "+ti+"\n  "}(l);return e.isPacked?(a=function(t,e){switch(t.length){case 0:return"\n    int getOutputCoords() {\n      return 0;\n    }\n  ";case 1:return function(t,e){var n=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];if(1===n[0])return"\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * "+n[1]+".0);\n      }\n    ";if(1===n[1])return"\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * "+n[0]+".0);\n      }\n    ";return"\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+n[0]+", "+n[1]+"));\n      return 2 * (resTexRC.x * "+n[1]+" + resTexRC.y);\n    }\n  "}(0,e);case 2:return function(t,e){var n=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];if(S(t,e))return"\n      ivec2 getOutputCoords() {\n        return 2 * ivec2(resultUV.yx * vec2("+n[0]+", "+n[1]+"));\n      }\n    ";var r=Math.ceil(t[1]/2);return"\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+n[0]+", "+n[1]+"));\n\n      int index = resTexRC.x * "+n[1]+" + resTexRC.y;\n      int r = 2 * (index / "+r+");\n      int c = imod(index, "+r+") * 2;\n\n      return ivec2(r, c);\n    }\n  "}(t,e);case 3:return n=t,r=e,o=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)],a=Math.ceil(n[2]/2),i=a*Math.ceil(n[1]/2),"\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+o[0]+", "+o[1]+"));\n      int index = resTexRC.x * "+o[1]+" + resTexRC.y;\n\n      int b = index / "+i+";\n      index -= b * "+i+";\n\n      int r = 2 * (index / "+a+");\n      int c = imod(index, "+a+") * 2;\n\n      return ivec3(b, r, c);\n    }\n  ";default:return function(t,e){for(var n=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],r=Math.ceil(t[t.length-1]/2),o=r*Math.ceil(t[t.length-2]/2),a=o,i="",s="b, r, c",u=2;u<t.length-1;u++)a*=t[t.length-u-1],i="\n      int b"+u+" = index / "+a+";\n      index -= b"+u+" * "+a+";\n    "+i,s="b"+u+", "+s;return"\n    ivec"+t.length+" getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+n[0]+", "+n[1]+"));\n      int index = resTexRC.x * "+n[1]+" + resTexRC.y;\n\n      "+i+"\n\n      int b = index / "+o+";\n      index -= b * "+o+";\n\n      int r = 2 * (index / "+r+");\n      int c = imod(index, "+r+") * 2;\n\n      return ivec"+t.length+"("+s+");\n    }\n  "}(t,e)}var n,r,o,a,i}(e.logicalShape,c),i=function(t){return"\n    void setOutput(vec4 val) {\n      "+t.output+" = val;\n    }\n  "}(l)):(a=function(t,e){switch(t.length){case 0:return"\n    int getOutputCoords() {\n      return 0;\n    }\n  ";case 1:return function(t,e){if(1===e[0])return"\n      int getOutputCoords() {\n        return int(resultUV.x * "+e[1]+".0);\n      }\n    ";if(1===e[1])return"\n      int getOutputCoords() {\n        return int(resultUV.y * "+e[0]+".0);\n      }\n    ";return"\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+e[0]+", "+e[1]+"));\n      return resTexRC.x * "+e[1]+" + resTexRC.y;\n    }\n  "}(0,e);case 2:return function(t,e){if(S(t,e))return"\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2("+e[0]+", "+e[1]+"));\n      }\n    ";if(1===t[1])return"\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2("+e[0]+", "+e[1]+"));\n        int index = resTexRC.x * "+e[1]+" + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    ";if(1===t[0])return"\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2("+e[0]+", "+e[1]+"));\n        int index = resTexRC.x * "+e[1]+" + resTexRC.y;\n        return ivec2(0, index);\n      }\n    ";return"\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+e[0]+", "+e[1]+"));\n      int index = resTexRC.x * "+e[1]+" + resTexRC.y;\n      int r = index / "+t[1]+";\n      int c = index - r * "+t[1]+";\n      return ivec2(r, c);\n    }\n  "}(t,e);case 3:return n=e,r=Ka(["r","c","d"],t),"\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+n[0]+", "+n[1]+"));\n      int index = resTexRC.x * "+n[1]+" + resTexRC.y;\n      "+r+"\n      return ivec3(r, c, d);\n    }\n  ";case 4:return function(t,e){var n=Ka(["r","c","d","d2"],t);return"\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2("+e[0]+", "+e[1]+"));\n      int index = resTexRC.x * "+e[1]+" + resTexRC.y;\n      "+n+"\n      return ivec4(r, c, d, d2);\n    }\n  "}(t,e);case 5:return function(t,e){var n=Ka(["r","c","d","d2","d3"],t);return"\n    ivec5 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx * vec2("+e[0]+",\n                             "+e[1]+"));\n\n      int index = resTexRC.x * "+e[1]+" + resTexRC.y;\n\n      "+n+"\n\n      ivec5 outShape = ivec5(r, c, d, d2, d3);\n      return outShape;\n    }\n  "}(t,e);case 6:return function(t,e){var n=Ka(["r","c","d","d2","d3","d4"],t);return"\n    ivec6 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2("+e[0]+", "+e[1]+"));\n      int index = resTexRC.x * "+e[1]+" + resTexRC.y;\n\n      "+n+"\n\n      ivec6 result = ivec6(r, c, d, d2, d3, d4);\n      return result;\n    }\n  "}(t,e);default:throw new Error(t.length+"-D output sampling is not yet supported")}var n,r}(e.logicalShape,c),i=function(t){return"\n    void setOutput(float val) {\n      "+t.output+" = vec4(val, 0, 0, 0);\n    }\n  "}(l)),r&&(f+=ei),[f,h,i,s,a,u,n].join("\n")}function $a(t){var e=t.shapeInfo.logicalShape;switch(e.length){case 0:return function(t){var e=t.name,n="get"+e.charAt(0).toUpperCase()+e.slice(1);if(t.shapeInfo.isUniform)return"float "+n+"() {return "+e+";}";var r=t.shapeInfo.texShape,o=r[0],a=r[1];if(1===o&&1===a)return"\n      float "+n+"() {\n        return sampleTexture("+e+", halfCR);\n      }\n    ";var i=t.shapeInfo.texShape,s=i[0],u=i[1],c=ni(e);return"\n    float "+n+"() {\n      vec2 uv = uvFromFlat("+s+", "+u+", "+c+");\n      return sampleTexture("+e+", uv);\n    }\n  "}(t);case 1:return function(t){var e=t.name,n="get"+e.charAt(0).toUpperCase()+e.slice(1);if(t.shapeInfo.isUniform)return"\n      float "+n+"(int index) {\n        "+ri(t)+"\n      }\n    ";var r=t.shapeInfo.texShape,o=r[0],a=r[1];if(1===a&&1===o)return"\n      float "+n+"(int index) {\n        return sampleTexture("+e+", halfCR);\n      }\n    ";var i=ni(e);if(1===a)return"\n      float "+n+"(int index) {\n        vec2 uv = vec2(0.5, (float(index + "+i+") + 0.5) / "+o+".0);\n        return sampleTexture("+e+", uv);\n      }\n    ";if(1===o)return"\n      float "+n+"(int index) {\n        vec2 uv = vec2((float(index + "+i+") + 0.5) / "+a+".0, 0.5);\n        return sampleTexture("+e+", uv);\n      }\n    ";return"\n    float "+n+"(int index) {\n      vec2 uv = uvFromFlat("+o+", "+a+", index + "+i+");\n      return sampleTexture("+e+", uv);\n    }\n  "}(t);case 2:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=t.shapeInfo.texShape;if(null!=o&&S(e,o)){var a=o[0],i=o[1];return"\n    float "+r+"(int row, int col) {\n      vec2 uv = (vec2(col, row) + halfCR) / vec2("+i+".0, "+a+".0);\n      return sampleTexture("+n+", uv);\n    }\n  "}var s=M(e),u=s.newShape,c=s.keptDims,l=u;if(l.length<e.length){var h=ai(t,l);return"\n      "+$a(h)+"\n      float "+r+"(int row, int col) {\n        return "+r+"("+ii(["row","col"],c)+");\n      }\n    "}if(t.shapeInfo.isUniform)return"\n      float "+r+"(int row, int col) {\n        int index = round(dot(vec2(row, col), vec2("+e[1]+", 1)));\n        "+ri(t)+"\n      }\n    ";var f=o[0],d=o[1],p=ni(n);if(1===d)return"\n    float "+r+"(int row, int col) {\n      float index = dot(vec3(row, col, "+p+"), vec3("+e[1]+", 1, 1));\n      vec2 uv = vec2(0.5, (index + 0.5) / "+f+".0);\n      return sampleTexture("+n+", uv);\n    }\n  ";if(1===f)return"\n    float "+r+"(int row, int col) {\n      float index = dot(vec3(row, col, "+p+"), vec3("+e[1]+", 1, 1));\n      vec2 uv = vec2((index + 0.5) / "+d+".0, 0.5);\n      return sampleTexture("+n+", uv);\n    }\n  ";return"\n  float "+r+"(int row, int col) {\n    // Explicitly use integer operations as dot() only works on floats.\n    int index = row * "+e[1]+" + col + "+p+";\n    vec2 uv = uvFromFlat("+f+", "+d+", index);\n    return sampleTexture("+n+", uv);\n  }\n"}(t);case 3:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=e[1]*e[2],a=e[2],i=M(e),s=i.newShape,u=i.keptDims,c=s;if(c.length<e.length){var l=ai(t,c);return"\n        "+$a(l)+"\n        float "+r+"(int row, int col, int depth) {\n          return "+r+"("+ii(["row","col","depth"],u)+");\n        }\n      "}if(t.shapeInfo.isUniform)return"\n      float "+r+"(int row, int col, int depth) {\n        int index = round(dot(vec3(row, col, depth),\n                          vec3("+o+", "+a+", 1)));\n        "+ri(t)+"\n      }\n    ";var h=t.shapeInfo.texShape,f=h[0],d=h[1],p=t.shapeInfo.flatOffset;if(d===o&&null==p)return"\n        float "+r+"(int row, int col, int depth) {\n          float texR = float(row);\n          float texC = dot(vec2(col, depth), vec2("+a+", 1));\n          vec2 uv = (vec2(texC, texR) + halfCR) /\n                     vec2("+d+".0, "+f+".0);\n          return sampleTexture("+n+", uv);\n        }\n      ";if(d===a&&null==p)return"\n    float "+r+"(int row, int col, int depth) {\n      float texR = dot(vec2(row, col), vec2("+e[1]+", 1));\n      float texC = float(depth);\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2("+d+".0, "+f+".0);\n      return sampleTexture("+n+", uv);\n    }\n  ";var v=ni(n);return"\n      float "+r+"(int row, int col, int depth) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * "+o+" + col * "+a+" + depth + "+v+";\n        vec2 uv = uvFromFlat("+f+", "+d+", index);\n        return sampleTexture("+n+", uv);\n      }\n  "}(t);case 4:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=e[3],a=e[2]*o,i=e[1]*a,s=M(e),u=s.newShape,c=s.keptDims;if(u.length<e.length){var l=ai(t,u);return"\n      "+$a(l)+"\n      float "+r+"(int row, int col, int depth, int depth2) {\n        return "+r+"("+ii(["row","col","depth","depth2"],c)+");\n      }\n    "}if(t.shapeInfo.isUniform)return"\n      float "+r+"(int row, int col, int depth, int depth2) {\n        int index = round(dot(vec4(row, col, depth, depth2),\n                          vec4("+i+", "+a+", "+o+", 1)));\n        "+ri(t)+"\n      }\n    ";var h=t.shapeInfo.flatOffset,f=t.shapeInfo.texShape,d=f[0],p=f[1];if(p===i&&null==h)return"\n      float "+r+"(int row, int col, int depth, int depth2) {\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3("+a+", "+o+", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2("+p+".0, "+d+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ";if(p===o&&null==h)return"\n      float "+r+"(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3("+e[1]*e[2]+", "+e[2]+", 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2("+p+".0, "+d+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ";var v=ni(n);return"\n    float "+r+"(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * "+i+" + col * "+a+" +\n          depth * "+o+" + depth2;\n      vec2 uv = uvFromFlat("+d+", "+p+", index + "+v+");\n      return sampleTexture("+n+", uv);\n    }\n  "}(t);case 5:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=e[4],a=e[3]*o,i=e[2]*a,s=e[1]*i,u=M(e),c=u.newShape,l=u.keptDims;if(c.length<e.length){var h=ai(t,c);return"\n      "+$a(h)+"\n      float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n        return "+r+"("+ii(["row","col","depth","depth2","depth3"],l)+");\n      }\n    "}if(t.shapeInfo.isUniform)return"\n      float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n        float index = dot(\n          vec4(row, col, depth, depth2),\n          vec4("+s+", "+i+", "+a+", "+o+")) +\n          depth3;\n        "+ri(t)+"\n      }\n    ";var f=t.shapeInfo.flatOffset,d=t.shapeInfo.texShape,p=d[0],v=d[1];if(v===s&&null==f)return"\n      float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n                         vec4("+i+", "+a+", "+o+", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2("+v+".0, "+p+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ";if(v===o&&null==f)return"\n      float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n        float texR = dot(\n          vec4(row, col, depth, depth2),\n          vec4("+e[1]*e[2]*e[3]+",\n               "+e[2]*e[3]+", "+e[3]+", 1));\n        int texC = depth3;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2("+v+".0, "+p+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ";var m=ni(n);return"\n    float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * "+s+" + col * "+i+" + depth * "+a+" +\n          depth2 * "+o+" + depth3 + "+m+";\n      vec2 uv = uvFromFlat("+p+", "+v+", index);\n      return sampleTexture("+n+", uv);\n    }\n  "}(t);case 6:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=M(e),a=o.newShape,i=o.keptDims;if(a.length<e.length){var s=ai(t,a);return"\n      "+$a(s)+"\n      float "+r+"(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        return "+r+"("+ii(["row","col","depth","depth2","depth3","depth4"],i)+");\n      }\n    "}var u=e[5],c=e[4]*u,l=e[3]*c,h=e[2]*l,f=e[1]*h;if(t.shapeInfo.isUniform)return"\n      float "+r+"(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n        int index = round(dot(\n          vec4(row, col, depth, depth2),\n          vec4("+f+", "+h+", "+l+", "+c+")) +\n          dot(\n            vec2(depth3, depth4),\n            vec2("+u+", 1)));\n        "+ri(t)+"\n      }\n    ";var d=t.shapeInfo.flatOffset,p=t.shapeInfo.texShape,v=p[0],m=p[1];if(m===f&&null==d)return"\n      float "+r+"(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n          vec4("+h+", "+l+", "+c+", "+u+")) +\n               float(depth4);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2("+m+".0, "+v+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ";if(m===u&&null==d)return"\n      float "+r+"(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        float texR = dot(vec4(row, col, depth, depth2),\n          vec4("+e[1]*e[2]*e[3]*e[4]+",\n               "+e[2]*e[3]*e[4]+",\n               "+e[3]*e[4]+",\n               "+e[4]+")) + float(depth3);\n        int texC = depth4;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2("+m+".0, "+v+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ";var g=ni(n);return"\n    float "+r+"(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * "+f+" + col * "+h+" + depth * "+l+" +\n          depth2 * "+c+" + depth3 * "+u+" + depth4 + "+g+";\n      vec2 uv = uvFromFlat("+v+", "+m+", index);\n      return sampleTexture("+n+", uv);\n    }\n  "}(t);default:throw new Error(e.length+"-D input sampling is not yet supported")}}function Qa(t){var e,n,r;switch(t.shapeInfo.logicalShape.length){case 0:return e=t.name,n="get"+e.charAt(0).toUpperCase()+e.slice(1),r=qa(),"\n    vec4 "+n+"() {\n      return "+r.texture2D+"("+e+", halfCR);\n    }\n  ";case 1:return function(t){var e=t.name,n="get"+e.charAt(0).toUpperCase()+e.slice(1),r=t.shapeInfo.texShape,o=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)],a=qa();return"\n    vec4 "+n+"(int index) {\n      vec2 uv = packedUVfrom1D(\n        "+o[0]+", "+o[1]+", index);\n      return "+a.texture2D+"("+e+", uv);\n    }\n  "}(t);case 2:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=t.shapeInfo.texShape,a=o[0],i=o[1],s=qa();if(null!=o&&S(e,o))return"\n      vec4 "+r+"(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2("+i+".0, "+a+".0);\n\n        return "+s.texture2D+"("+n+", uv);\n      }\n    ";var u=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)],c=Math.ceil(e[1]/2);return"\n    vec4 "+r+"(int row, int col) {\n      vec2 uv = packedUVfrom2D("+c+", "+u[0]+", "+u[1]+", row, col);\n      return "+s.texture2D+"("+n+", uv);\n    }\n  "}(t);case 3:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=t.shapeInfo.texShape,a=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];if(1===e[0]){var i=e.slice(1),s=ai(t,i);return"\n        "+Qa(s)+"\n        vec4 "+r+"(int b, int row, int col) {\n          return "+r+"("+ii(["b","row","col"],[1,2])+");\n        }\n      "}var u=a[0],c=a[1],l=Math.ceil(e[2]/2),h=l*Math.ceil(e[1]/2),f=qa();return"\n    vec4 "+r+"(int b, int row, int col) {\n      vec2 uv = packedUVfrom3D(\n        "+u+", "+c+", "+h+", "+l+", b, row, col);\n      return "+f.texture2D+"("+n+", uv);\n    }\n  "}(t);default:return function(t){for(var e=t.shapeInfo.logicalShape,n=e.length,r=t.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),a=t.shapeInfo.texShape,i=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],s=i[0],u=i[1],c=Math.ceil(e[n-1]/2),l=c*Math.ceil(e[n-2]/2),h="int b, int row, int col",f="b * "+l+" + (row / 2) * "+c+" + (col / 2)",d=2;d<n-1;d++)h="int b"+d+", "+h,l*=e[n-d-1],f="b"+d+" * "+l+" + "+f;var p=qa();return"\n    vec4 "+o+"("+h+") {\n      int index = "+f+";\n      int texR = index / "+u+";\n      int texC = index - texR * "+u+";\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2("+u+", "+s+");\n      return "+p.texture2D+"("+r+", uv);\n    }\n  "}(t)}}var Ja="\nvec2 uvFromFlat(int texNumR, int texNumC, int index) {\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\nvec2 packedUVfrom1D(int texNumR, int texNumC, int index) {\n  int texelIndex = index / 2;\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",Za="\nvec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,\n  int texNumC, int row, int col) {\n  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",ti="\nvec2 packedUVfrom3D(int texNumR, int texNumC,\n    int texelsInBatch, int texelsInLogicalRow, int b,\n    int row, int col) {\n  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",ei="\n  float getChannel(vec4 frag, vec2 innerDims) {\n    vec2 modCoord = mod(innerDims, 2.);\n    return modCoord.x == 0. ?\n      (modCoord.y == 0. ? frag.r : frag.g) :\n      (modCoord.y == 0. ? frag.b : frag.a);\n  }\n  float getChannel(vec4 frag, int dim) {\n    float modCoord = mod(float(dim), 2.);\n    return modCoord == 0. ? frag.r : frag.g;\n  }\n";function ni(t){return"offset"+t}function ri(t){var e=t.name,n=k(t.shapeInfo.logicalShape);return n<2?"return "+e+";":"\n    for (int i = 0; i < "+n+"; i++) {\n      if (i == index) {\n        return "+e+"[i];\n      }\n    }\n  "}function oi(t){if(t<=1)return"int";if(2===t)return"ivec2";if(3===t)return"ivec3";if(4===t)return"ivec4";if(5===t)return"ivec5";if(6===t)return"ivec6";throw Error("GPU for rank "+t+" is not yet supported")}function ai(t,e){var n=JSON.parse(JSON.stringify(t));return n.shapeInfo.logicalShape=e,n}function ii(t,e){return e.map((function(e){return t[e]})).join(", ")}var si=function(t,e,n,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,C(t.length>2,(function(){return"Packed arg"+(n.charAt(0).toUpperCase()+n.slice(1))+" supports only inputs with rank above 2."}));var o=t[t.length-1],a=Math.ceil(o/e);this.outputShape=t.slice(0,-1),a>1&&this.outputShape.push(a),r||this.variableNames.push("bestIndicesA");var i,s,u=this.outputShape,c=u.length,l=oi(c),h=Ha("coords",c);if(1===a){var f=oi(s=c+1);i="\n        "+f+" sourceLocR = "+f+"("+h.join()+", 0);\n        ++"+h[c-1]+";\n        "+f+" sourceLocG = "+f+"("+h.join()+", 0);\n        ++"+h[c-2]+";\n        "+f+" sourceLocA = "+f+"("+h.join()+", 0);\n        --"+h[c-1]+";\n        "+f+" sourceLocB = "+f+"("+h.join()+", 0);\n        --"+h[c-2]+";"}else s=c,i="\n        "+l+" sourceLocR = coords;\n        ++"+h[c-1]+";\n        "+l+" sourceLocG = coords;\n        ++"+h[c-2]+";\n        "+l+" sourceLocA = coords;\n        --"+h[c-1]+";\n        "+l+" sourceLocB = coords;\n        --"+h[c-2]+";";var d=["x","y","z","w","u","v"].slice(0,s),p="."+d[s-1],v=d.map((function(t){return"int "+t})),m=Ha("sourceLocR",s-1).concat("inIdx.r"),g=Ha("sourceLocG",s-1).concat("inIdx.g"),y=Ha("sourceLocB",s-1).concat("inIdx.b"),x=Ha("sourceLocA",s-1).concat("inIdx.a"),b="max"===n?"greaterThan":"lessThan",w=r?"":"\n          inIdx = round(vec4(getBestIndicesAChannel("+m.join()+"),\n                             getBestIndicesAChannel("+g.join()+"),\n                             getBestIndicesAChannel("+y.join()+"),\n                             getBestIndicesAChannel("+x.join()+")));",E="vec4(\n            getAChannel("+m.join()+"),\n            hasNextCol ? getAChannel("+g.join()+") : 0.,\n            hasNextRow ? getAChannel("+y.join()+") : 0.,\n            hasNextRow && hasNextCol ? getAChannel("+x.join()+") : 0.)",R=r?"":"\n      float getBestIndicesAChannel("+v.join()+") {\n        return getChannel(getBestIndicesA("+d.join()+"),\n                                          vec2("+d.slice(-2).join()+"));\n      }";this.userCode="\n      float getAChannel("+v.join()+") {\n        return getChannel(getA("+d.join()+"),\n                               vec2("+d.slice(-2).join()+"));\n      }\n      "+R+"\n      void main() {\n        "+l+" coords = getOutputCoords();\n        bool hasNextCol = "+h[c-1]+" < "+(u[c-1]-1)+";\n        bool hasNextRow = "+h[c-2]+" < "+(u[c-2]-1)+";\n        "+i+"\n        ivec4 srcIdx = ivec4(sourceLocR"+p+", sourceLocG"+p+",\n          sourceLocB"+p+", sourceLocA"+p+") * "+e+";\n        ivec4 inIdx = srcIdx;\n        vec4 bestIndex = vec4(inIdx);\n        vec4 bestValue = "+E+";\n\n        for (int i = 0; i < "+e+"; i++) {\n          inIdx = srcIdx;\n          "+w+"\n          vec4 candidate = "+E+";\n          bvec4 nan = isnan(candidate);\n          bvec4 replace = bvec4(\n            vec4("+b+"(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));\n\n          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,\n                           replace.y  ? candidate.y : bestValue.y,\n                           replace.z  ? candidate.z : bestValue.z,\n                           replace.w  ? candidate.w : bestValue.w);\n          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));\n          srcIdx++;\n        }\n        setOutput(bestIndex);\n      }\n    "},ui=function(t){this.variableNames=["dy"],this.outputShape=t.inShape;var e=t.filterHeight,n=t.filterWidth,r=t.strideHeight,o=t.strideWidth,a=t.dilationHeight,i=t.dilationWidth,s=t.effectiveFilterHeight,u=t.effectiveFilterWidth,c=s-1-t.padInfo.top,l=u-1-t.padInfo.left,h=1/(e*n);this.userCode="\n      const ivec2 pads = ivec2("+c+", "+l+");\n      const float avgMultiplier = float("+h+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < "+s+";\n            wR += "+a+") {\n          float dyR = float(dyRCorner + wR) / "+r+".0;\n\n          if (dyR < 0.0 || dyR >= "+t.outHeight+".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < "+u+";\n            wC+= "+i+") {\n            float dyC = float(dyCCorner + wC) / "+o+".0;\n\n            if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n\n            dotProd += dyValue * avgMultiplier;\n          }\n        }\n        setOutput(dotProd);\n      }\n    "},ci=function(t){this.variableNames=["dy"],this.outputShape=t.inShape;var e=t.filterDepth,n=t.filterHeight,r=t.filterWidth,o=t.strideDepth,a=t.strideHeight,i=t.strideWidth,s=t.dilationDepth,u=t.dilationHeight,c=t.dilationWidth,l=t.effectiveFilterDepth,h=t.effectiveFilterHeight,f=t.effectiveFilterWidth,d=l-1-t.padInfo.front,p=h-1-t.padInfo.top,v=f-1-t.padInfo.left,m=1/(e*n*r);this.userCode="\n      const ivec3 pads = ivec3("+d+", "+p+", "+v+");\n      const float avgMultiplier = float("+m+");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < "+l+";\n            wD += "+s+") {\n          float dyD = float(dyDCorner + wD) / "+o+".0;\n\n          if (dyD < 0.0 || dyD >= "+t.outDepth+".0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < "+h+";\n              wR += "+u+") {\n            float dyR = float(dyRCorner + wR) / "+a+".0;\n\n            if (dyR < 0.0 || dyR >= "+t.outHeight+".0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < "+f+";\n                wC += "+c+") {\n              float dyC = float(dyCCorner + wC) / "+i+".0;\n\n              if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n\n              dotProd += dyValue * avgMultiplier;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "},li=function(t,e,n,r,o,a){this.outputShape=[],this.variableNames=["x","mean","variance"],Fr(t,e),Fr(t,n);var i="0.0";null!=r&&(Fr(t,r),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="1.0";null!=o&&(Fr(t,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=t,this.userCode="\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = "+i+";\n        float scale = "+s+";\n        float inv = scale * inversesqrt(variance + float("+a+"));\n        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));\n      }\n    "},hi=function(t,e,n,r,o,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],Fr(t,e),Fr(t,n);var i="vec4(0.0)";null!=r&&(Fr(t,r),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="vec4(1.0)";null!=o&&(Fr(t,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=t,this.userCode="\n      void main() {\n        vec4 offset = "+i+";\n        vec4 scale = "+s+";\n\n        vec4 x = getXAtOutCoords();\n        vec4 mean = getMeanAtOutCoords();\n        vec4 variance = getVarianceAtOutCoords();\n\n        vec4 inv = scale * inversesqrt(variance + vec4("+a+"));\n\n        setOutput((x - mean) * inv + offset);\n      }\n    "},fi="return areal * breal - aimag * bimag;",di="return areal * bimag + aimag * breal;",pi=function(t,e,n){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=Fr(e,n),this.userCode="\n      float binaryOpComplex(\n          float areal, float aimag, float breal, float bimag) {\n        "+t+"\n      }\n\n      void main() {\n        float areal = getARealAtOutCoords();\n        float aimag = getAImagAtOutCoords();\n        float breal = getBRealAtOutCoords();\n        float bimag = getBImagAtOutCoords();\n        setOutput(binaryOpComplex(areal, aimag, breal, bimag));\n      }\n    "},vi="return a + b;",mi="return a - b;",gi="return a * b;",yi="\nif (a == b) {\n  return 1.0;\n};\nreturn a / b;",xi="return (a < 0.) ? b * a : a;",bi=function(t,e,n){this.variableNames=["A","B"],this.outputShape=Fr(e,n),this.userCode="\n      float binaryOperation(float a, float b) {\n        "+t+"\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    "},wi="\n  // vec4 one = vec4(equal(a, b));\n  // return one + (vec4(1.0) - one) * a / b;\n  vec4 result = a / b;\n  if(a.x == b.x) {\n    result.x = 1.;\n  }\n  if(a.y == b.y) {\n    result.y = 1.;\n  }\n  if(a.z == b.z) {\n    result.z = 1.;\n  }\n  if(a.w == b.w) {\n    result.w = 1.;\n  }\n\n  return result;\n",Ci="\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n",Ei=function(t,e,n,r){void 0===r&&(r=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=Fr(e,n);var o=this.outputShape.length,a="";if(r)if(0===o||1===k(this.outputShape))a="\n          result.y = 0.;\n          result.z = 0.;\n          result.w = 0.;\n        ";else if(a="\n          "+oi(o)+" coords = getOutputCoords();\n        ",1===o)a+="\n            result.y = (coords + 1) >= "+this.outputShape[0]+" ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          ";else{var i=Ha("coords",o);a+="\n            bool nextRowOutOfBounds =\n              ("+i[o-2]+" + 1) >= "+this.outputShape[o-2]+";\n            bool nextColOutOfBounds =\n              ("+i[o-1]+" + 1) >= "+this.outputShape[o-1]+";\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          "}this.userCode="\n      vec4 binaryOperation(vec4 a, vec4 b) {\n        "+t+"\n      }\n\n      void main() {\n        vec4 a = getAAtOutCoords();\n        vec4 b = getBAtOutCoords();\n\n        vec4 result = binaryOperation(a, b);\n        "+a+"\n\n        setOutput(result);\n      }\n    "},Ri=function(){function t(t){this.variableNames=["A"],this.outputShape=t,this.userCode="\n      uniform float minVal;\n      uniform float maxVal;\n\n      void main() {\n        float value = getAAtOutCoords();\n        if (isnan(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, minVal, maxVal));\n      }\n    "}return t.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(r,o){null==n.minLoc&&(n.minLoc=r.getUniformLocationNoThrow(o,"minVal"),n.maxLoc=r.getUniformLocationNoThrow(o,"maxVal")),r.gl.uniform1f(n.minLoc,t),r.gl.uniform1f(n.maxLoc,e)}},t}(),Ii=function(){function t(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode="\n      uniform float minVal;\n      uniform float maxVal;\n\n      void main() {\n        vec4 value = getAAtOutCoords();\n\n        if (any(isnan(value))) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));\n      }\n    "}return t.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(r,o){null==n.minLoc&&(n.minLoc=r.getUniformLocationNoThrow(o,"minVal"),n.maxLoc=r.getUniformLocationNoThrow(o,"maxVal")),r.gl.uniform1f(n.minLoc,t),r.gl.uniform1f(n.maxLoc,e)}},t}(),ki=function(t){this.variableNames=["real","imag"],this.outputShape=t,this.userCode="\n      void main() {\n        float re = abs(getRealAtOutCoords());\n        float im = abs(getImagAtOutCoords());\n        float mx = max(re, im);\n\n        // sadly the length function in glsl is not underflow-safe\n        // (at least not on Intel GPUs). So the safe solution is\n        // to ensure underflow-safety in all cases.\n        setOutput(\n          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))\n        );\n      }\n    "},Si=function(t){this.outputShape=[],this.outputShape=Sn(t,1),this.variableNames=t.map((function(t,e){return"T"+e}));var e=new Array(t.length-1);e[0]=t[0][1];for(var n=1;n<e.length;n++)e[n]=e[n-1]+t[n][1];var r=["if (yC < "+e[0]+") setOutput(getT0(yR, yC));"];for(n=1;n<e.length;n++){var o=e[n-1];r.push("else if (yC < "+e[n]+") setOutput(getT"+n+"(yR, yC-"+o+"));")}var a=e.length,i=e[e.length-1];r.push("else setOutput(getT"+a+"(yR, yC-"+i+"));"),this.userCode="\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int yR = coords.x;\n        int yC = coords.y;\n\n        "+r.join("\n        ")+"\n      }\n    "},Ai=function(t,e){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=Sn(t,e);var n=this.outputShape,r=n.length,o=oi(r),a=Ha("coords",r),i=["x","y","z","w","u","v"].slice(0,r);this.variableNames=t.map((function(t,e){return"T"+e}));var s=new Array(t.length-1);s[0]=t[0][e];for(var u=1;u<s.length;u++)s[u]=s[u-1]+t[u][e];var c=i[e],l=i.slice(-2),h=i.join(),f="if ("+c+" < "+s[0]+") {\n        return getChannel(\n            getT0("+h+"), vec2("+l.join()+"));\n        }";for(u=1;u<s.length;u++){var d=s[u-1];f+="\n        if ("+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+") {\n          return getChannel(\n            getT"+u+"("+Ti(i,c,d)+"),\n            vec2("+Ti(l,c,d)+"));\n        }"}var p=s.length,v=s[s.length-1];f+="\n        return getChannel(\n          getT"+p+"("+Ti(i,c,v)+"),\n          vec2("+Ti(l,c,v)+"));",this.userCode="\n      float getValue("+i.map((function(t){return"int "+t}))+") {\n        "+f+"\n      }\n\n      void main() {\n        "+o+" coords = getOutputCoords();\n        vec4 result = vec4(getValue("+a+"), 0., 0., 0.);\n\n        "+a[r-1]+" = "+a[r-1]+" + 1;\n        if ("+a[r-1]+" < "+n[r-1]+") {\n          result.g = getValue("+a+");\n        }\n\n        "+a[r-2]+" = "+a[r-2]+" + 1;\n        if ("+a[r-2]+" < "+n[r-2]+") {\n          result.a = getValue("+a+");\n        }\n\n        "+a[r-1]+" = "+a[r-1]+" - 1;\n        if ("+a[r-2]+" < "+n[r-2]+" &&\n            "+a[r-1]+" < "+n[r-1]+") {\n          result.b = getValue("+a+");\n        }\n        setOutput(result);\n      }\n    "};function Ti(t,e,n){var r=t.indexOf(e);return t.map((function(t,e){return e===r?t+" - "+n:t})).join()}var Di=function(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;var e=t.strideHeight,n=t.strideWidth,r=t.padInfo.top,o=t.padInfo.left,a="channelsLast"===t.dataFormat;this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int d2 = coords.w;\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int b = 0; b < "+t.batchSize+"; b++) {\n          for (int yR = 0; yR < "+t.outHeight+"; yR++) {\n            int xR = wR + yR * "+e+" - "+r+";\n\n            if (xR < 0 || xR >= "+t.inHeight+") {\n              continue;\n            }\n\n            for (int yC = 0; yC < "+t.outWidth+"; yC++) {\n              int xC = wC + yC * "+n+" - "+o+";\n\n              if (xC < 0 || xC >= "+t.inWidth+") {\n                continue;\n              }\n\n              if ("+a+") {\n                float dyValue = getDy(b, yR, yC, d2);\n                float xValue = getX(b, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              } else {\n                float dyValue = getDy(b, d2, yR, yC);\n                float xValue = getX(b, d1, xR, xC);\n                dotProd += (xValue * dyValue);\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "},Ni=function(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;var e=t.filterHeight,n=t.filterWidth,r=t.strideHeight,o=t.strideWidth,a="channelsLast"===t.dataFormat,i=e-1-t.padInfo.top,s=n-1-t.padInfo.left,u=a?1:2,c=a?2:3,l=a?3:1;this.userCode="\n      const ivec2 pads = ivec2("+i+", "+s+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords["+l+"];\n\n        ivec2 dyCorner = ivec2(coords["+u+"], coords["+c+"]) - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < "+e+"; wR++) {\n          float dyR = float(dyRCorner + wR) / "+r+".0;\n\n          if (dyR < 0.0 || dyR >= "+t.outHeight+".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = "+e+" - 1 - wR;\n\n          for (int wC = 0; wC < "+n+"; wC++) {\n            float dyC = float(dyCCorner + wC) / "+o+".0;\n\n            if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = "+n+" - 1 - wC;\n\n            for (int d2 = 0; d2 < "+t.outChannels+"; d2++) {\n\n              if ("+a+") {\n                float xValue = getDy(batch, idyR, idyC, d2);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              } else {\n                float xValue = getDy(batch, d2, idyR, idyC);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "},Fi=function(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;var e=t.strideDepth,n=t.strideHeight,r=t.strideWidth,o=t.padInfo.front,a=t.padInfo.top,i=t.padInfo.left;this.userCode="\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int wF = coords.x;\n        int wR = coords.y;\n        int wC = coords.z;\n        int d1 = coords.w;\n        int d2 = coords.u;\n\n        float dotProd = 0.0;\n\n        for (int b = 0; b < "+t.batchSize+"; b++) {\n          for (int yF = 0; yF < "+t.outDepth+"; yF++) {\n            int xF = wF + yF * "+e+" - "+o+";\n\n            if (xF < 0 || xF >= "+t.inDepth+") {\n              continue;\n            }\n\n            for (int yR = 0; yR < "+t.outHeight+"; yR++) {\n              int xR = wR + yR * "+n+" - "+a+";\n\n              if (xR < 0 || xR >= "+t.inHeight+") {\n                continue;\n              }\n\n              for (int yC = 0; yC < "+t.outWidth+"; yC++) {\n                int xC = wC + yC * "+r+" - "+i+";\n\n                if (xC < 0 || xC >= "+t.inWidth+") {\n                  continue;\n                }\n\n                float dyValue = getDy(b, yF, yR, yC, d2);\n                float xValue = getX(b, xF, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "},_i=function(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;var e=t.filterDepth,n=t.filterHeight,r=t.filterWidth,o=t.strideDepth,a=t.strideHeight,i=t.strideWidth,s=e-1-t.padInfo.front,u=n-1-t.padInfo.top,c=r-1-t.padInfo.left;this.userCode="\n      const ivec3 pads = ivec3("+s+", "+u+", "+c+");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.u;\n\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyFCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        float dotProd = 0.0;\n        for (int wF = 0; wF < "+e+"; wF++) {\n          float dyF = float(dyFCorner + wF) / "+o+".0;\n\n          if (dyF < 0.0 || dyF >= "+t.outDepth+".0 || fract(dyF) > 0.0) {\n            continue;\n          }\n          int idyF = int(dyF);\n\n          int wFPerm = "+e+" - 1 - wF;\n\n          for (int wR = 0; wR < "+n+"; wR++) {\n            float dyR = float(dyRCorner + wR) / "+a+".0;\n\n            if (dyR < 0.0 || dyR >= "+t.outHeight+".0 ||\n              fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            int wRPerm = "+n+" - 1 - wR;\n\n            for (int wC = 0; wC < "+r+"; wC++) {\n              float dyC = float(dyCCorner + wC) / "+i+".0;\n\n              if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              int wCPerm = "+r+" - 1 - wC;\n\n              for (int d2 = 0; d2 < "+t.outChannels+"; d2++) {\n                float xValue = getDy(batch, idyF, idyR, idyC, d2);\n                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "},Oi=function(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;var e=t.strideHeight,n=t.strideWidth,r=t.padInfo.top,o=t.padInfo.left,a=t.outChannels/t.inChannels;this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int dm = coords.w;\n        int d2 = d1 * "+a+" + dm;\n\n        float dotProd = 0.0;\n\n        // TO DO: Vec4 over the batch size\n        for (int b = 0; b < "+t.batchSize+"; b++) {\n          for (int yR = 0; yR < "+t.outHeight+"; yR++) {\n            int xR = wR + yR * "+e+" - "+r+";\n\n            if (xR < 0 || xR >= "+t.inHeight+") {\n              continue;\n            }\n\n            for (int yC = 0; yC < "+t.outWidth+"; yC++) {\n              int xC = wC + yC * "+n+" - "+o+";\n\n              if (xC < 0 || xC >= "+t.inWidth+") {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "},Mi=function(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;var e=t.filterHeight,n=t.filterWidth,r=t.strideHeight,o=t.strideWidth,a=e-1-t.padInfo.top,i=n-1-t.padInfo.left,s=t.outChannels/t.inChannels;this.userCode="\n      const ivec2 pads = ivec2("+a+", "+i+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        float dotProd = 0.0;\n\n        for (int wR = 0; wR < "+e+"; wR++) {\n          float dyR = float(dyRCorner + wR) / "+r+".0;\n\n          if (dyR < 0.0 || dyR >= "+t.outHeight+".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = "+e+" - 1 - wR;\n\n          for (int wC = 0; wC < "+n+"; wC++) {\n            float dyC = float(dyCCorner + wC) / "+o+".0;\n\n            if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = "+n+" - 1 - wC;\n\n            // TO DO: Vec4 over the channelMul\n            for (int dm = 0; dm < "+s+"; dm++) {\n              int d2 = d1 * "+s+" + dm;\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, dm);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "},Bi=function(t,e,n,r){void 0===e&&(e=!1),void 0===n&&(n=null),void 0===r&&(r=!1),this.variableNames=["x","W"],this.outputShape=t.outShape;var o=t.padInfo.top,a=t.padInfo.left,i=t.strideHeight,s=t.strideWidth,u=t.dilationHeight,c=t.dilationWidth,l=t.filterHeight,h=t.filterWidth,f=4*Math.floor(t.inChannels/4),d=t.inChannels%4,p="channelsLast"===t.dataFormat,v=p?1:2,m=p?2:3,g=p?3:1,y="",x="";n&&(y=r?"float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          "+n+"\n        }":"\n          float activation(float x) {\n            "+n+"\n          }\n        ",x="result = activation(result);");var b=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode="\n      "+y+"\n\n      const ivec2 strides = ivec2("+i+", "+s+");\n      const ivec2 pads = ivec2("+o+", "+a+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d2 = coords["+g+"];\n\n        ivec2 xRCCorner =\n            ivec2(coords["+v+"], coords["+m+"]) * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < "+l+"; wR++) {\n          int xR = xRCorner + wR * "+u+";\n\n          if (xR < 0 || xR >= "+t.inHeight+") {\n            continue;\n          }\n\n          for (int wC = 0; wC < "+h+"; wC++) {\n            int xC = xCCorner + wC * "+c+";\n\n            if (xC < 0 || xC >= "+t.inWidth+") {\n              continue;\n            }\n\n            for (int d1 = 0; d1 < "+f+"; d1 += 4) {\n              vec4 wValues = vec4(\n                getW(wR, wC, d1, d2),\n                getW(wR, wC, d1 + 1, d2),\n                getW(wR, wC, d1 + 2, d2),\n                getW(wR, wC, d1 + 3, d2)\n              );\n\n              if ("+p+") {\n                vec4 xValues = vec4(\n                  getX(batch, xR, xC, d1),\n                  getX(batch, xR, xC, d1 + 1),\n                  getX(batch, xR, xC, d1 + 2),\n                  getX(batch, xR, xC, d1 + 3)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec4 xValues = vec4(\n                  getX(batch, d1, xR, xC),\n                  getX(batch, d1 + 1, xR, xC),\n                  getX(batch, d1 + 2, xR, xC),\n                  getX(batch, d1 + 3, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n\n            if ("+(1===d)+") {\n\n              if ("+p+") {\n                dotProd +=\n                    getX(batch, xR, xC, "+f+") *\n                    getW(wR, wC, "+f+", d2);\n              } else {\n                dotProd +=\n                    getX(batch, "+f+", xR, xC) *\n                    getW(wR, wC, "+f+", d2);\n              }\n\n            } else if ("+(2===d)+") {\n              vec2 wValues = vec2(\n                getW(wR, wC, "+f+", d2),\n                getW(wR, wC, "+f+" + 1, d2)\n              );\n\n              if ("+p+") {\n                vec2 xValues = vec2(\n                  getX(batch, xR, xC, "+f+"),\n                  getX(batch, xR, xC, "+f+" + 1)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec2 xValues = vec2(\n                  getX(batch, "+f+", xR, xC),\n                  getX(batch, "+f+" + 1, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            } else if ("+(3===d)+") {\n              vec3 wValues = vec3(\n                getW(wR, wC, "+f+", d2),\n                getW(wR, wC, "+f+" + 1, d2),\n                getW(wR, wC, "+f+" + 2, d2)\n              );\n\n              if ("+p+") {\n                vec3 xValues = vec3(\n                  getX(batch, xR, xC, "+f+"),\n                  getX(batch, xR, xC, "+f+" + 1),\n                  getX(batch, xR, xC, "+f+" + 2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec3 xValues = vec3(\n                  getX(batch, "+f+", xR, xC),\n                  getX(batch, "+f+" + 1, xR, xC),\n                  getX(batch, "+f+" + 2, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            }\n          }\n        }\n\n        float result = dotProd;\n        "+b+"\n        "+x+"\n        setOutput(result);\n      }\n    "},Pi=function(t){this.variableNames=["x","W"],this.outputShape=t.outShape;var e=t.padInfo.front,n=t.padInfo.top,r=t.padInfo.left,o=t.strideDepth,a=t.strideHeight,i=t.strideWidth,s=t.dilationDepth,u=t.dilationHeight,c=t.dilationWidth,l=t.filterDepth,h=t.filterHeight,f=t.filterWidth,d=4*Math.floor(t.inChannels/4),p=t.inChannels%4;this.userCode="\n      const ivec3 strides = ivec3("+o+", "+a+", "+i+");\n      const ivec3 pads = ivec3("+e+", "+n+", "+r+");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d2 = coords.u;\n\n        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xFCorner = xFRCCorner.x;\n        int xRCorner = xFRCCorner.y;\n        int xCCorner = xFRCCorner.z;\n\n        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get\n        // y(yF, yR, yC, d2). ? = to be determined. : = across all\n        // values in that axis.\n        float dotProd = 0.0;\n        for (int wF = 0; wF < "+l+"; wF++) {\n          int xF = xFCorner + wF * "+s+";\n\n          if (xF < 0 || xF >= "+t.inDepth+") {\n            continue;\n          }\n\n          for (int wR = 0; wR < "+h+"; wR++) {\n            int xR = xRCorner + wR * "+u+";\n\n            if (xR < 0 || xR >= "+t.inHeight+") {\n              continue;\n            }\n\n            for (int wC = 0; wC < "+f+"; wC++) {\n              int xC = xCCorner + wC * "+c+";\n\n              if (xC < 0 || xC >= "+t.inWidth+") {\n                continue;\n              }\n\n              for (int d1 = 0; d1 < "+d+"; d1 += 4) {\n                vec4 xValues = vec4(\n                  getX(batch, xF, xR, xC, d1),\n                  getX(batch, xF, xR, xC, d1 + 1),\n                  getX(batch, xF, xR, xC, d1 + 2),\n                  getX(batch, xF, xR, xC, d1 + 3)\n                );\n                vec4 wValues = vec4(\n                  getW(wF, wR, wC, d1, d2),\n                  getW(wF, wR, wC, d1 + 1, d2),\n                  getW(wF, wR, wC, d1 + 2, d2),\n                  getW(wF, wR, wC, d1 + 3, d2)\n                );\n\n                dotProd += dot(xValues, wValues);\n              }\n\n              if ("+(1===p)+") {\n                dotProd +=\n                  getX(batch, xF, xR, xC, "+d+") *\n                  getW(wF, wR, wC, "+d+", d2);\n              } else if ("+(2===p)+") {\n                vec2 xValues = vec2(\n                  getX(batch, xF, xR, xC, "+d+"),\n                  getX(batch, xF, xR, xC, "+d+" + 1)\n                );\n                vec2 wValues = vec2(\n                  getW(wF, wR, wC, "+d+", d2),\n                  getW(wF, wR, wC, "+d+" + 1, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else if ("+(3===p)+") {\n                vec3 xValues = vec3(\n                  getX(batch, xF, xR, xC, "+d+"),\n                  getX(batch, xF, xR, xC, "+d+" + 1),\n                  getX(batch, xF, xR, xC, "+d+" + 2)\n                );\n                vec3 wValues = vec3(\n                  getW(wF, wR, wC, "+d+", d2),\n                  getW(wF, wR, wC, "+d+" + 1, d2),\n                  getW(wF, wR, wC, "+d+" + 2, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "},Li=function(t,e,n,r){void 0===e&&(e=!1),void 0===n&&(n=null),void 0===r&&(r=!1),this.variableNames=["x","W"],this.outputShape=t.outShape;var o=t.inHeight,a=t.inWidth,i=t.padInfo.top,s=t.padInfo.left,u=t.strideHeight,c=t.strideWidth,l=t.dilationHeight,h=t.dilationWidth,f=t.filterHeight,d=t.filterWidth,p=t.outChannels/t.inChannels,v="",m="";n&&(v=r?"float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          "+n+"\n        }":"\n          float activation(float x) {\n            "+n+"\n          }\n        ",m="result = activation(result);");var g=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode="\n      "+v+"\n\n      const ivec2 strides = ivec2("+u+", "+c+");\n      const ivec2 pads = ivec2("+i+", "+s+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / "+p+";\n        int q = d2 - d1 * "+p+";\n\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.\n        for (int wR = 0; wR < "+f+"; wR++) {\n          int xR = xRCorner + wR * "+l+";\n\n          if (xR < 0 || xR >= "+o+") {\n            continue;\n          }\n\n          for (int wC = 0; wC < "+d+"; wC++) {\n            int xC = xCCorner + wC * "+h+";\n\n            if (xC < 0 || xC >= "+a+") {\n              continue;\n            }\n\n            float xVal = getX(batch, xR, xC, d1);\n            float wVal = getW(wR, wC, d1, q);\n            dotProd += xVal * wVal;\n          }\n        }\n\n        float result = dotProd;\n        "+g+"\n        "+m+"\n        setOutput(result);\n      }\n    "},Wi=function(t,e,n,r){void 0===e&&(e=!1),void 0===n&&(n=null),void 0===r&&(r=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.outShape;for(var o=t.inHeight,a=t.inWidth,i=t.padInfo.top,s=t.padInfo.left,u=t.strideHeight,c=t.strideWidth,l=t.dilationHeight,h=t.dilationWidth,f=t.filterHeight,d=t.filterWidth,p=d,v="int xR; int xC; int xCOffset;",m=0;m<f;m++)for(var g=0;g<d;g++)v+="\n          vec4 xTexelR"+m+"C"+2*g+" = vec4(0.);\n          vec4 wR"+m+"C"+g+" = vec4(0.);\n          vec4 xR"+m+"C"+g+" = vec4(0.);";for(m=0;m<f;m++)for(var y=0;y<p;y++){if(v+="\n          xR = xRCorner + "+m*l+";\n          xC = xCCorner + "+(g=2*y)*h+";\n        ",1===c){if(g<d&&(v+=s%2==1?"\n                xCOffset = xC + 1;\n                if(xR >= 0 && xR < "+o+" && xCOffset >= 0 && xCOffset < "+a+") {\n                  xTexelR"+m+"C"+g+" = getX(batch, xR, xCOffset, d1);\n\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if(xCOffset + 1 >= "+a+") {\n                    xTexelR"+m+"C"+g+".zw = vec2(0.);\n                  }\n                } else {\n                  xTexelR"+m+"C"+g+" = vec4(0.);\n                }\n\n                xCOffset = xC + 1 - 2;\n                if(xR >= 0 && xR < "+o+" && xCOffset >= 0 && xCOffset < "+a+") {\n                  vec4 previous = getX(batch, xR, xCOffset, d1);\n\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if(xCOffset + 1 >= "+a+") {\n                    previous.zw = vec2(0.);\n                  }\n\n                  xR"+m+"C"+g+" = vec4(previous.zw, xTexelR"+m+"C"+g+".xy);\n                } else {\n                  xR"+m+"C"+g+" = vec4(0, 0, xTexelR"+m+"C"+g+".xy);\n                }\n              ":"\n                if(xR >= 0 && xR < "+o+" && xC >= 0 && xC < "+a+") {\n                  xTexelR"+m+"C"+g+" = getX(batch, xR, xC, d1);\n                } else {\n                  xTexelR"+m+"C"+g+" = vec4(0.);\n                }\n\n                xR"+m+"C"+g+" = xTexelR"+m+"C"+g+";\n              ",g+1<d)){var x=s%2==0?b(h):h;h%2==0&&s%2==1||h%2!=0&&s%2!=1?(v+="\n                  xCOffset = xC + "+s%2+" + "+x+";\n\n                  if(xR >= 0 && xR < "+o+" &&\n                    xCOffset >= 0 && xCOffset < "+a+") {\n                    xTexelR"+m+"C"+(g+2)+" = getX(batch, xR, xCOffset, d1);\n                  }\n                ",h>1&&(v+="\n                    xCOffset -= 2;\n                    if(xR >= 0 && xR < "+o+" &&\n                      xCOffset >= 0 && xCOffset < "+a+") {\n                      xTexelR"+m+"C"+g+" = getX(batch, xR, xCOffset, d1);\n                    } else {\n                      xTexelR"+m+"C"+g+" = vec4(0.);\n                    }\n                  "),v+="\n                  xR"+m+"C"+(g+1)+" = vec4(\n                    xTexelR"+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+".xy);\n                "):v+="\n                  xCOffset = xC + "+x+";\n\n                  if(xR >= 0 && xR < "+o+" &&\n                    xCOffset >= 0 && xCOffset < "+a+") {\n                    xTexelR"+m+"C"+(g+2)+" = getX(batch, xR, xCOffset, d1);\n                  }\n\n                  xR"+m+"C"+(g+1)+" = xTexelR"+m+"C"+(g+2)+";\n                "}}else g<d&&(v+="\n              if(xR >= 0 && xR < "+o+") {\n            ",s%2==1?(v+="\n                xCOffset = xC + 1 - "+c+";\n                if(xCOffset >= 0 && xCOffset < "+a+") {\n                  xTexelR"+m+"C"+g+" = getX(batch, xR, xCOffset, d1);\n                } else {\n                  xTexelR"+m+"C"+g+" = vec4(0.);\n                }\n\n                if(xC + 1 >= 0 && xC + 1 < "+a+") {\n                  xTexelR"+m+"C"+(g+2)+" = getX(batch, xR, xC + 1, d1);\n                } else {\n                  xTexelR"+m+"C"+(g+2)+" = vec4(0.);\n                }\n\n                xR"+m+"C"+g+" = vec4(\n                  xTexelR"+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+".zw);\n              ",g+1<d&&(v+="\n                  vec4 final = vec4(0.);\n                  xCOffset = xC + 1 + "+c+";\n                  if(xCOffset >= 0 && xCOffset < "+a+") {\n                    final = getX(batch, xR, xCOffset, d1);\n                  }\n                  xR"+m+"C"+(g+1)+" = vec4(xTexelR"+m+"C"+(g+2)+".xy, final.xy);\n                ")):(v+="\n                if(xC >= 0 && xC < "+a+") {\n                  xTexelR"+m+"C"+g+" = getX(batch, xR, xC, d1);\n                } else {\n                  xTexelR"+m+"C"+g+" = vec4(0.);\n                }\n\n                xCOffset = xC + "+c+";\n                if(xCOffset >= 0 && xCOffset < "+a+") {\n                  xTexelR"+m+"C"+(g+2)+" = getX(batch, xR, xCOffset, d1);\n                } else {\n                  xTexelR"+m+"C"+(g+2)+" = vec4(0.);\n                }\n\n                xR"+m+"C"+g+" = vec4(\n                  xTexelR"+m+"C"+g+".xy, xTexelR"+m+"C"+(g+2)+".xy);\n              ",g+1<d&&(v+="\n                  xR"+m+"C"+(g+1)+" = vec4(\n                    xTexelR"+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+".zw);\n                ")),v+="}");g<d&&(v+="\n            vec4 wTexelR"+m+"C"+g+" = getW("+m+", "+g+", d1, q);\n            wR"+m+"C"+g+" = vec4(wTexelR"+m+"C"+g+".xz, wTexelR"+m+"C"+g+".xz);\n          ",g+1<d&&(v+="\n              vec4 wTexelR"+m+"C"+(g+1)+" = getW("+m+", "+(g+1)+", d1, q);\n              wR"+m+"C"+(g+1)+" =\n                vec4(wTexelR"+m+"C"+(g+1)+".xz, wTexelR"+m+"C"+(g+1)+".xz);"))}for(m=0;m<f;m++)for(g=0;g<d;g++)v+="dotProd += xR"+m+"C"+g+" * wR"+m+"C"+g+";";var w="",C="";n&&(w=r?"vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          "+n+"\n        }":"vec4 activation(vec4 x) {\n          "+n+"\n        }",C="result = activation(result);");var E=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode="\n      "+w+"\n\n      const ivec2 strides = ivec2("+u+", "+c+");\n      const ivec2 pads = ivec2("+i+", "+s+");\n\n      void main() {\n\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2;\n        int q = 0;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        vec4 dotProd = vec4(0.);\n\n        "+v+"\n\n        vec4 result = dotProd;\n        "+E+"\n        "+C+"\n        setOutput(result);\n      }\n    "},Ui=function(t,e,n,r,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var a=t[0],i=t[1],s=t[2],u=t[3],c=e[0],l=n[0],h=n[1];this.outputShape=[c,l,h,u];var f="bilinear"===r?1:0,d=[i-1+".0",s-1+".0"],p=d[0],v=d[1],m=l>1?[""+(i-1)/(l-1),"(y2-y1) * height_ratio","y1*"+p+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+p],g=m[0],y=m[1],x=m[2],b=h>1?[""+(s-1)/(h-1),"(x2-x1) * width_ratio","x1*"+v+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+v],w=b[0],C=b[1],E=b[2];this.userCode="\n      const float height_ratio = float("+g+");\n      const float width_ratio = float("+w+");\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int y = coords[1];\n        int x = coords[2];\n        int d = coords[3];\n\n        // get box vals\n        float y1 = getBoxes(b,0);\n        float x1 = getBoxes(b,1);\n        float y2 = getBoxes(b,2);\n        float x2 = getBoxes(b,3);\n\n        // get image in batch index\n        int bInd = round(getBoxInd(b));\n        if(bInd < 0 || bInd >= "+a+") {\n          return;\n        }\n\n        float height_scale = "+y+";\n        float width_scale = "+C+";\n\n        float in_y = "+x+";\n        if( in_y < 0.0 || in_y > "+p+" ) {\n          setOutput(float("+o+"));\n          return;\n        }\n        float in_x = "+E+";\n        if( in_x < 0.0 || in_x > "+v+" ) {\n          setOutput(float("+o+"));\n          return;\n        }\n\n        vec2 sourceFracIndexCR = vec2(in_x,in_y);\n        if("+f+" == 1) {\n          // Compute the four integer indices.\n          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);\n          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));\n\n          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);\n          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);\n          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);\n          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);\n\n          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);\n\n          float top = topLeft + (topRight - topLeft) * fracCR.x;\n          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;\n          float newValue = top + (bottom - top) * fracCR.y;\n          setOutput(newValue);\n        } else {\n          // Compute the coordinators of nearest neighbor point.\n          ivec2 sourceNearestCR = ivec2(floor(\n            sourceFracIndexCR + vec2(0.5,0.5)));\n          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);\n          setOutput(newValue);\n        }\n      }\n    "},Vi=function(t,e,n){this.variableNames=["x"],this.outputShape=t;var r=t.length,o=t[t.length-1],a=n?"<":">";this.userCode="\n      int getIndex(int i) {\n        "+(n?"return "+o+" -i - 1;":"return i;")+"\n      }\n\n      void main() {\n        "+oi(r)+" coords = getOutputCoords();\n        int end = "+zi(r,"coords")+";\n        float val = 0.0;\n        for (int i = "+o+" - 1; i >= 0; i -= 1) {\n          int idx = getIndex(i);\n          if (idx "+a+" end) {\n            continue;\n          }\n          if (idx == end && "+e+") {\n            continue;\n          }\n          "+zi(r,"coords")+" = idx;\n          val += getX("+function(t,e){if(1===t)return""+e;if(2===t)return e+".x, "+e+".y";if(3===t)return e+".x, "+e+".y, "+e+".z";if(4===t)return e+".x, "+e+".y, "+e+".z, "+e+".w";throw Error("Cumulative sum for rank "+t+" is not yet supported")}(r,"coords")+");\n        }\n        setOutput(val);\n      }\n    "};function zi(t,e){if(1===t)return""+e;if(2===t)return e+".y";if(3===t)return e+".z";if(4===t)return e+".w";throw Error("Cumulative sum for rank "+t+" is not yet supported")}var Gi=function(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Vt.DENSE;var e=Yt(t),n=qa();this.outputShape=t,this.userCode="\n      ivec3 outCoordsFromFlatIndex(int index) {\n        "+Ka(["r","c","d"],t)+"\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n          vec2("+e[0]+", "+e[1]+"));\n        int index = 4 * (resTexRC.x * "+e[1]+" + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getA(rc.x, rc.y, rc.z);\n        }\n\n        "+n.output+" = result;\n      }\n    "},Hi=function(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Vt.DENSE;var e=Yt(t),n=qa();this.outputShape=t,this.userCode="\n      ivec3 outCoordsFromFlatIndex(int index) {\n        "+Ka(["r","c","d"],t)+"\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n          vec2("+e[0]+", "+e[1]+"));\n        int index = 4 * (resTexRC.x * "+e[1]+" + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));\n        }\n\n        "+n.output+" = result;\n      }\n    "},qi=function(){function t(t,e,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=n,this.userCode="\n    void main() {\n      ivec4 coords = getOutputCoords();\n      int b = coords[0];\n      int h = "+this.getHeightCoordString()+";\n      int w = "+this.getWidthCoordString()+";\n      int d = "+this.getDepthCoordString()+";\n\n      int in_h = h / "+e+";\n      int offset_h = imod(h, "+e+");\n      int in_w = w / "+e+";\n      int offset_w = imod(w, "+e+");\n      int offset_d = (offset_h * "+e+" + offset_w) *\n        "+this.getOutputDepthSize()+";\n      int in_d = d + offset_d;\n\n      float result = "+this.getInputSamplingString()+";\n      setOutput(result);\n    }\n  "}return t.prototype.getHeightCoordString=function(){return"NHWC"===this.dataFormat?"coords[1]":"coords[2]"},t.prototype.getWidthCoordString=function(){return"NHWC"===this.dataFormat?"coords[2]":"coords[3]"},t.prototype.getDepthCoordString=function(){return"NHWC"===this.dataFormat?"coords[3]":"coords[1]"},t.prototype.getOutputDepthSize=function(){return"NHWC"===this.dataFormat?this.outputShape[3]:this.outputShape[1]},t.prototype.getInputSamplingString=function(){return"NHWC"===this.dataFormat?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},t}(),Ki=function(t){this.variableNames=["X"],this.outputShape=[t,t],this.userCode="\n      void main() {\n          ivec2 coords = getOutputCoords();\n          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;\n          setOutput(val);\n      }\n    "},ji=function(t){this.variableNames=["A"],this.outTexUsage=zt.DOWNLOAD;var e=qa();this.outputShape=t,this.userCode="\n      "+Xa+"\n\n      void main() {\n        float x = getAAtOutCoords();\n        "+e.output+" = encode_float(x);\n      }\n    "},Xi=function(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=zt.DOWNLOAD;var e=qa();this.outputShape=t,this.userCode="\n      "+Xa+"\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));\n        "+e.output+" = encode_float(x);\n      }\n    "},Yi=function(t,e,n){void 0===n&&(n=!1),this.variableNames=["A"];var r=qa(),o=e[0],a=e[1];this.outputShape=t;var i="result";n&&(i="floor(result * 255. + 0.5)"),this.userCode="\n      "+ja(t)+"\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n\n        int flatIndex = getFlatIndex(coords);\n        int offset = imod(flatIndex, 4);\n\n        flatIndex = idiv(flatIndex, 4, 1.);\n        \n        int r = flatIndex / "+a+";\n        int c = imod(flatIndex, "+a+");\n        vec2 uv = (vec2(c, r) + halfCR) / vec2("+a+".0, "+o+".0);\n        vec4 values = "+r.texture2D+"(A, uv);\n\n        float result;\n\n        if(offset == 0) {\n          result = values[0];\n        } else if(offset == 1) {\n          result = values[1];\n        } else if(offset == 2) {\n          result = values[2];\n        } else {\n          result = values[3];\n        }\n\n        "+r.output+" = vec4("+i+", 0., 0., 0.);\n      }\n    "},$i=function(t,e,n){void 0===n&&(n=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var r=qa(),o=e[0],a=e[1];this.outputShape=t;var i="",s="result";n&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;i+="\n          localCoords = coords;\n          if(localCoords[2] + "+c+" < "+t[2]+") {\n            localCoords[2] += "+c+";\n            if(localCoords[1] + "+u+" < "+t[1]+") {\n              localCoords[1] += "+u+";\n\n              flatIndex = getFlatIndex(localCoords);\n              offset = imod(flatIndex, 4);\n\n              flatIndex = idiv(flatIndex, 4, 1.);\n\n              r = flatIndex / "+a+";\n              c = imod(flatIndex, "+a+");\n              uv = (vec2(c, r) + halfCR) / vec2("+a+".0, "+o+".0);\n              values = "+r.texture2D+"(A, uv);\n\n              if(offset == 0) {\n                result["+l+"] = values[0];\n              } else if(offset == 1) {\n                result["+l+"] = values[1];\n              } else if(offset == 2) {\n                result["+l+"] = values[2];\n              } else {\n                result["+l+"] = values[3];\n              }\n            }\n          }\n        "}this.userCode="\n      "+ja(t)+"\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n\n        vec4 result = vec4(0.);\n        int flatIndex, r, c, offset;\n        ivec3 localCoords;\n        vec2 uv;\n        vec4 values;\n\n        "+i+"\n\n        "+r.output+" = "+s+";\n      }\n    "},Qi="return real * expR - imag * expI;",Ji="return real * expI + imag * expR;",Zi=function(t,e,n){this.variableNames=["real","imag"];var r=e[1];this.outputShape=e;var o=n?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,a=n?r+".0":"1.0";this.userCode="\n      const float exponentMultiplier = "+o+";\n\n      float unaryOpComplex(float real, float expR, float imag, float expI) {\n        "+t+"\n      }\n\n      float mulMatDFT(int batch, int index) {\n        float indexRatio = float(index) / float("+r+");\n        float exponentMultiplierTimesIndexRatio =\n            exponentMultiplier * indexRatio;\n\n        float result = 0.0;\n\n        for (int i = 0; i < "+r+"; i++) {\n          // x = (-2|2 * PI / N) * index * i;\n          float x = exponentMultiplierTimesIndexRatio * float(i);\n          float expR = cos(x);\n          float expI = sin(x);\n          float real = getReal(batch, i);\n          float imag = getImag(batch, i);\n\n          result +=\n              unaryOpComplex(real, expR, imag, expI) / "+a+";\n        }\n\n        return result;\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        setOutput(mulMatDFT(coords[0], coords[1]));\n      }\n    "},ts=function(){function t(t,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode="\n      uniform float value;\n      void main() {\n        // Input can be obtained from uniform value.\n        setOutput(value);\n      }\n    "}return t.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,r){null==e.valueLoc&&(e.valueLoc=n.getUniformLocationNoThrow(r,"value")),n.gl.uniform1f(e.valueLoc,t)}},t}(),es=function(t,e,n){this.variableNames=["A","indices"];var r=t.slice();r[n]=e,this.outputShape=r,this.rank=r.length;var o=oi(this.rank),a=function(t,e){var n=t.length;if(n>4)throw Error("Gather for rank "+n+" is not yet supported");if(1===n)return"int(getIndices(resRC))";for(var r=["resRC.x","resRC.y","resRC.z","resRC.w"],o=[],a=0;a<t.length;a++)a===e?o.push("int(getIndices("+r[a]+"))"):o.push(""+r[a]);return o.join()}(t,n);this.userCode="\n      void main() {\n        "+o+" resRC = getOutputCoords();\n        setOutput(getA("+a+"));\n      }\n    "};var ns=function(t,e,n){this.sliceDim=t,this.strides=e,this.variableNames=["x","indices"],this.outputShape=n;var r=oi(e.length),o=oi(n.length),a=this.sliceDim>1?"strides[j]":"strides";this.userCode="\n        "+r+" strides = "+r+"("+this.strides+");\n         void main() {\n          "+o+" coords = getOutputCoords();\n          int flattenIndex = 0;\n          for (int j = 0; j < "+this.sliceDim+"; j++) {\n            int index = round(getIndices(coords[0], j));\n            flattenIndex += index * "+a+";\n          }\n          setOutput(getX(flattenIndex, coords[1]));\n        }\n      "};function rs(t,e){var n=qa();return oe(t,e,n.version+"\n    precision highp float;\n    "+n.attribute+" vec3 clipSpacePos;\n    "+n.attribute+" vec2 uv;\n    "+n.varyingVs+" vec2 resultUV;\n\n    void main() {\n      gl_Position = vec4(clipSpacePos, 1);\n      resultUV = uv;\n    }")}function os(t,e){return fe(t,e,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function as(t,e){return de(t,e,new Uint16Array([0,1,2,2,1,3]))}function is(t,e,n,r,o,a,i){ve(n,r);var s=pe(t,e),u=t.TEXTURE_2D;return Jt(t,e,(function(){return t.bindTexture(u,s)})),Jt(t,e,(function(){return t.texParameteri(u,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE)})),Jt(t,e,(function(){return t.texParameteri(u,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)})),Jt(t,e,(function(){return t.texParameteri(u,t.TEXTURE_MIN_FILTER,t.NEAREST)})),Jt(t,e,(function(){return t.texParameteri(u,t.TEXTURE_MAG_FILTER,t.NEAREST)})),Jt(t,e,(function(){return t.texImage2D(u,0,o,n,r,0,a,i,null)})),Jt(t,e,(function(){return t.bindTexture(t.TEXTURE_2D,null)})),s}function ss(t,e,n,r,o){var a=Xt(n,r);return is(t,e,a[0],a[1],o.internalFormatFloat,o.textureFormatFloat,t.FLOAT)}function us(t,e,n,r,o){var a=Xt(n,r);return is(t,e,a[0],a[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function cs(t,e,n,r,o){var a=Xt(n,r);return is(t,e,a[0],a[1],t.RGBA,t.RGBA,t.UNSIGNED_BYTE)}function ls(t,e,n,r,o){var a=$t(n,r);return is(t,e,a[0],a[1],o.internalFormatPackedFloat,t.RGBA,t.FLOAT)}function hs(t,e,n,r,o){var a=$t(n,r);return is(t,e,a[0],a[1],o.internalFormatPackedHalfFloat,t.RGBA,o.textureTypeHalfFloat)}function fs(t,e,n,r){return Jt(t,e,(function(){return t.bindBuffer(t.ARRAY_BUFFER,r)})),ge(t,e,n,"clipSpacePos",r,3,20,0)&&ge(t,e,n,"uv",r,2,20,12)}function ds(t,e,n,r,o,a,i){var s,u,c;Jt(t,e,(function(){return t.bindTexture(t.TEXTURE_2D,n)})),a instanceof Uint8Array?(s=new Uint8Array(r*o*4),u=t.UNSIGNED_BYTE,c=t.RGBA):(s=new Float32Array(r*o*4),u=t.FLOAT,c=i.internalFormatPackedFloat),s.set(a),Jt(t,e,(function(){return t.texImage2D(t.TEXTURE_2D,0,c,r,o,0,t.RGBA,u,s)})),Jt(t,e,(function(){return t.bindTexture(t.TEXTURE_2D,null)}))}function ps(t,e,n,r){Jt(t,e,(function(){return t.bindTexture(t.TEXTURE_2D,n)})),r.data instanceof Uint8Array?Jt(t,e,(function(){return t.texImage2D(t.TEXTURE_2D,0,t.RGBA,r.width,r.height,0,t.RGBA,t.UNSIGNED_BYTE,r.data)})):Jt(t,e,(function(){return t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,r)})),Jt(t,e,(function(){return t.bindTexture(t.TEXTURE_2D,null)}))}function vs(t,e,n,r,o){var a=t.createBuffer();Jt(t,e,(function(){return t.bindBuffer(t.PIXEL_PACK_BUFFER,a)}));var i=16*n*r;return Jt(t,e,(function(){return t.bufferData(t.PIXEL_PACK_BUFFER,i,t.STREAM_READ)})),Jt(t,e,(function(){return t.readPixels(0,0,r,n,t.RGBA,t.FLOAT,0)})),Jt(t,e,(function(){return t.bindBuffer(t.PIXEL_PACK_BUFFER,null)})),a}function ms(t,e,n){var r=t,o=new Float32Array(n);return r.bindBuffer(r.PIXEL_PACK_BUFFER,e),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,o),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),o}function gs(t,e,n,r,o){var a=Xt(n,r),i=a[0],s=a[1],u=new Uint8Array(n*r*4);return Jt(t,e,(function(){return t.readPixels(0,0,i,s,o.downloadTextureFormat,t.UNSIGNED_BYTE,u)})),new Float32Array(u.buffer)}function ys(t,e,n,r,o,a,i,s){var u=t,c=new Float32Array(function(t,e){var n=$t(t,e);return n[0]*n[1]*4}(a,i));return u.bindBuffer(u.PIXEL_PACK_BUFFER,e),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function xs(t,e,n,r){var o=new Float32Array(n*r*4);return Jt(t,e,(function(){return t.readPixels(0,0,r,n,t.RGBA,t.FLOAT,o)})),o}var bs=Object.freeze({createVertexShader:rs,createVertexBuffer:os,createIndexBuffer:as,createFloat32MatrixTexture:ss,createFloat16MatrixTexture:us,createUnsignedBytesMatrixTexture:cs,createPackedMatrixTexture:ls,createFloat16PackedMatrixTexture:hs,bindVertexProgramAttributeStreams:fs,uploadDenseMatrixToTexture:ds,uploadPixelDataToTexture:ps,createBufferFromOutputTexture:vs,downloadFloat32MatrixFromBuffer:ms,downloadByteEncodedFloatMatrixFromOutputTexture:gs,downloadPackedMatrixFromBuffer:ys,downloadMatrixFromPackedOutputTexture:xs}),ws=function(){function t(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=i().getNumber("WEBGL_VERSION");null!=t?(this.gl=t,Kt(e,t)):this.gl=jt(e);var n="WEBGL_color_buffer_float";if(1===i().getNumber("WEBGL_VERSION")){if(this.textureFloatExtension=re(this.gl,this.debug,"OES_texture_float"),Pe(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=re(this.gl,this.debug,"OES_texture_half_float");else if(i().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(n),Pe(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=re(this.gl,this.debug,"EXT_color_buffer_half_float");else if(i().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(n="EXT_color_buffer_float",Pe(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else{if(!Pe(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=os(this.gl,this.debug),this.indexBuffer=as(this.gl,this.debug),this.framebuffer=me(this.gl,this.debug),this.textureConfig=Qt(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(t.prototype,"debug",{get:function(){return i().getBool("DEBUG")},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){var t=this;if(!this.disposed){null!=this.program&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),null!=this.outputTexture&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var e=this.gl;Jt(e,this.debug,(function(){return e.finish()})),Jt(e,this.debug,(function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)})),Jt(e,this.debug,(function(){return e.deleteFramebuffer(t.framebuffer)})),Jt(e,this.debug,(function(){return e.bindBuffer(e.ARRAY_BUFFER,null)})),Jt(e,this.debug,(function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)})),Jt(e,this.debug,(function(){return e.deleteBuffer(t.indexBuffer)})),this.disposed=!0}},t.prototype.createFloat32MatrixTexture=function(t,e){return this.throwIfDisposed(),ss(this.gl,this.debug,t,e,this.textureConfig)},t.prototype.createFloat16MatrixTexture=function(t,e){return this.throwIfDisposed(),us(this.gl,this.debug,t,e,this.textureConfig)},t.prototype.createUnsignedBytesMatrixTexture=function(t,e){return this.throwIfDisposed(),cs(this.gl,this.debug,t,e,this.textureConfig)},t.prototype.uploadPixelDataToTexture=function(t,e){this.throwIfDisposed(),ps(this.gl,this.debug,t,e)},t.prototype.uploadDenseMatrixToTexture=function(t,e,n,r){this.throwIfDisposed(),ds(this.gl,this.debug,t,e,n,r,this.textureConfig)},t.prototype.createFloat16PackedMatrixTexture=function(t,e){return this.throwIfDisposed(),hs(this.gl,this.debug,t,e,this.textureConfig)},t.prototype.createPackedMatrixTexture=function(t,e){return this.throwIfDisposed(),ls(this.gl,this.debug,t,e,this.textureConfig)},t.prototype.deleteMatrixTexture=function(t){var e=this;this.throwIfDisposed(),this.outputTexture===t&&(Ee(this.gl,this.debug,this.framebuffer),this.outputTexture=null),Jt(this.gl,this.debug,(function(){return e.gl.deleteTexture(t)}))},t.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,e,n){var r=this;return this.downloadMatrixDriver(t,(function(){return gs(r.gl,r.debug,e,n,r.textureConfig)}))},t.prototype.downloadPackedMatrixFromBuffer=function(t,e,n,r,o,a){return ys(this.gl,t,0,0,0,o,a,this.textureConfig)},t.prototype.downloadFloat32MatrixFromBuffer=function(t,e){return ms(this.gl,t,e)},t.prototype.createBufferFromTexture=function(t,e,n){this.bindTextureToFrameBuffer(t);var r=vs(this.gl,this.debug,e,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),r},t.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},t.prototype.createFence=function(t){var e,n,r=this;if(i().getBool("WEBGL_FENCE_API_ENABLED")){var o=t,a=o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),n=function(){var t=o.clientWaitSync(a,0,0);return t===o.ALREADY_SIGNALED||t===o.CONDITION_SATISFIED},e=a}else i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),n=function(){return r.isQueryAvailable(e,i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):n=function(){return!0};return{query:e,isFencePassed:n}},t.prototype.downloadMatrixFromPackedTexture=function(t,e,n){var r=this;return this.downloadMatrixDriver(t,(function(){return xs(r.gl,r.debug,e,n)}))},t.prototype.createProgram=function(t){this.throwIfDisposed();var e=this.gl,n=ae(e,this.debug,t),r=rs(e,this.debug),o=ce(e,this.debug);return Jt(e,this.debug,(function(){return e.attachShader(o,r)})),Jt(e,this.debug,(function(){return e.attachShader(o,n)})),le(e,this.debug,o),this.debug&&he(e,this.debug,o),this.vertexAttrsAreBound||(this.setProgram(o),this.vertexAttrsAreBound=fs(e,this.debug,this.program,this.vertexBuffer)),o},t.prototype.deleteProgram=function(t){var e=this;this.throwIfDisposed(),t===this.program&&(this.program=null),null!=t&&Jt(this.gl,this.debug,(function(){return e.gl.deleteProgram(t)}))},t.prototype.setProgram=function(t){var e=this;this.throwIfDisposed(),this.program=t,null!=this.program&&this.debug&&he(this.gl,this.debug,this.program),Jt(this.gl,this.debug,(function(){return e.gl.useProgram(t)}))},t.prototype.getUniformLocation=function(t,e,n){return void 0===n&&(n=!0),this.throwIfDisposed(),n?xe(this.gl,this.debug,t,e):be(this.gl,t,e)},t.prototype.getAttributeLocation=function(t,e){var n=this;return this.throwIfDisposed(),Jt(this.gl,this.debug,(function(){return n.gl.getAttribLocation(t,e)}))},t.prototype.getUniformLocationNoThrow=function(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)},t.prototype.setInputMatrixTexture=function(t,e,n){this.throwIfDisposed(),this.throwIfNoProgram(),we(this.gl,this.debug,this.program,t,e,n)},t.prototype.setOutputMatrixTexture=function(t,e,n){this.setOutputMatrixTextureDriver(t,n,e)},t.prototype.setOutputPackedMatrixTexture=function(t,e,n){this.throwIfDisposed();var r=$t(e,n),o=r[0],a=r[1];this.setOutputMatrixTextureDriver(t,o,a)},t.prototype.setOutputMatrixWriteRegion=function(t,e,n,r){this.setOutputMatrixWriteRegionDriver(n,t,r,e)},t.prototype.setOutputPackedMatrixWriteRegion=function(t,e,n,r){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},t.prototype.debugValidate=function(){null!=this.program&&he(this.gl,this.debug,this.program),Re(this.gl)},t.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),Jt(t,this.debug,(function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)}))},t.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),Jt(this.gl,this.debug,(function(){return t.gl.finish()}))},t.prototype.getQueryTimerExtension=function(){return null==this.disjointQueryTimerExtension&&(this.disjointQueryTimerExtension=re(this.gl,this.debug,2===i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},t.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},t.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},t.prototype.beginQuery=function(){if(2===i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){var t=this.gl,e=this.getQueryTimerExtensionWebGL2(),n=t.createQuery();return t.beginQuery(e.TIME_ELAPSED_EXT,n),n}var r=this.getQueryTimerExtensionWebGL1(),o=r.createQueryEXT();return r.beginQueryEXT(r.TIME_ELAPSED_EXT,o),o},t.prototype.endQuery=function(){if(2!==i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}else{var e=this.gl,n=this.getQueryTimerExtensionWebGL2();e.endQuery(n.TIME_ELAPSED_EXT)}},t.prototype.waitForQueryAndGetTime=function(t){return n(this,void 0,void 0,(function(){var e=this;return r(this,(function(n){switch(n.label){case 0:return[4,F((function(){return e.disposed||e.isQueryAvailable(t,i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}))];case 1:return n.sent(),[2,this.getQueryTime(t,i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}}))}))},t.prototype.getQueryTime=function(t,e){if(0===e)return null;if(2===e){var n=this.gl;return n.getQueryParameter(t,n.QUERY_RESULT)/1e6}var r=this.getQueryTimerExtensionWebGL1();return r.getQueryObjectEXT(t,r.QUERY_RESULT_EXT)/1e6},t.prototype.isQueryAvailable=function(t,e){if(0===e)return!0;if(2===e){var n=this.gl,r=this.getQueryTimerExtensionWebGL2(),o=n.getQueryParameter(t,n.QUERY_RESULT_AVAILABLE);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),o&&!this.disjoint}o=(r=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,r.QUERY_RESULT_AVAILABLE_EXT);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),o&&!this.disjoint},t.prototype.pollFence=function(t){var e=this;return new Promise((function(n){e.addItemToPoll((function(){return t.isFencePassed()}),(function(){return n()}))}))},t.prototype.pollItems=function(){for(var t=function(t){for(var e=0;e<t.length;++e){if(!t[e]())break}return e-1}(this.itemsToPoll.map((function(t){return t.isDoneFn}))),e=0;e<=t;++e){(0,this.itemsToPoll[e].resolveFn)()}this.itemsToPoll=this.itemsToPoll.slice(t+1)},t.prototype.addItemToPoll=function(t,e){var n=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1||F((function(){return n.pollItems(),0===n.itemsToPoll.length}))},t.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),Ce(this.gl,this.debug,t,this.framebuffer),this.debug&&Re(this.gl)},t.prototype.unbindTextureToFrameBuffer=function(){null!=this.outputTexture?(Ce(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&Re(this.gl)):Ee(this.gl,this.debug,this.framebuffer)},t.prototype.downloadMatrixDriver=function(t,e){this.bindTextureToFrameBuffer(t);var n=e();return this.unbindTextureToFrameBuffer(),n},t.prototype.setOutputMatrixTextureDriver=function(t,e,n){this.throwIfDisposed();var r=this.gl;Ce(r,this.debug,t,this.framebuffer),this.debug&&Re(r),this.outputTexture=t,Jt(r,this.debug,(function(){return r.viewport(0,0,e,n)})),Jt(r,this.debug,(function(){return r.scissor(0,0,e,n)}))},t.prototype.setOutputMatrixWriteRegionDriver=function(t,e,n,r){var o=this;this.throwIfDisposed(),Jt(this.gl,this.debug,(function(){return o.gl.scissor(t,e,n,r)}))},t.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},t.prototype.throwIfNoProgram=function(){if(null==this.program)throw new Error("No GPU program is currently set.")},t}();function Cs(t,e){if(t.length!==e.length)throw Error("Binary was compiled with "+t.length+" inputs, but was executed with "+e.length+" inputs");t.forEach((function(t,n){var r=t.logicalShape,o=e[n],a=o.shape;if(!S(r,a))throw Error("Binary was compiled with different shapes than the current args. Shapes "+r+" and "+a+" must match");if(!t.isUniform||!o.isUniform){var i=t.texShape,s=o.isUniform?null:o.texData.texShape;if(!S(i,s))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+i+" and "+s+" must match")}}))}var Es=function(t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;for(var r=n.filterWidth,o=n.inChannels,a=n.strideWidth,i=n.strideHeight,s=n.padInfo,u=n.outWidth,c=n.dilationWidth,l=n.dilationHeight,h=n.dataFormat,f=s.left,d=s.top,p=o*r,v=qa(),m="channelsLast"===h,g=m?0:1,y=m?1:2,x="",b=0;b<=1;b++)for(var w=0;w<=1;w++)x+="\n          blockIndex = rc.y + "+w+";\n          pos = rc.x + "+b+";\n\n          if(blockIndex < "+t[1]+" && pos < "+t[0]+") {\n            offsetY = int(blockIndex / ("+u+")) * "+i+" - "+d+";\n            d0 = offsetY + "+l+" * (pos / "+p+");\n\n            if(d0 < "+e[g]+" && d0 >= 0) {\n\n              offsetX = int(mod(float(blockIndex), "+u+".) * "+a+". - "+f+".);\n              d1 = offsetX + "+c+" * (int(mod(float(pos), "+p+".) / "+o+".));\n\n              if(d1 < "+e[y]+" && d1 >= 0) {\n\n                ch = int(mod(float(pos), "+o+".));\n\n                if ("+m+") {\n                  innerDims = vec2(d1, ch);\n                  result["+(2*b+w)+"] = getChannel(\n                    getA(d0, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                } else {\n                  innerDims = vec2(d0, d1);\n                  result["+(2*b+w)+"] = getChannel(\n                    getA(ch, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                }\n              }\n            }\n          }\n        ";this.userCode="\n      void main() {\n        ivec2 rc = getOutputCoords();\n\n        vec4 result = vec4(0);\n\n        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;\n        vec2 innerDims;\n\n        "+x+"\n\n        "+v.output+" = result;\n      }\n    "},Rs=function(t,e,n,r,o){this.variableNames=["x"],this.outputShape=[];var a,i=e,s=t[3]-1;this.outputShape=t;var u="float("+n+") + float("+r+") * sum";a=.5===o?"inversesqrt("+u+")":1===o?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n        int d = coords[3];\n        float x = getX(b, r, c, d);\n        float sum = 0.0;\n        for (int j = -"+i+"; j <= "+i+"; j++) {\n          int idx = d + j;\n          if (idx >= 0 && idx <=  "+s+") {\n            float z = getX(b, r, c, idx);\n            sum += z * z;\n          }\n        }\n        float val = x * "+a+";\n        setOutput(val);\n      }\n    "},Is=function(t,e,n,r,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=t,this.depth=t[3],this.depthRadius=e,this.bias=n,this.alpha=r,this.beta=o,this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n\n        float result = 0.0;\n        for (int d = 0; d < "+this.depth+"; ++d) {\n          int depthBegin = int(max(0.0, float(d - "+e+")));\n          int depthEnd = int(min(float("+this.depth+"),\n              float(d + "+e+" + 1)));\n\n          const int MIN_DEPTH_BEGIN = 0;\n          const int MAX_DEPTH_END = "+this.depth+";\n\n          float norm = 0.0;\n          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd) {\n              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);\n            }\n            else {\n              break;\n            }\n          }\n\n          norm = float("+r+") * norm + float("+n+");\n\n          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd){\n              float dyi = -2.0 * float("+r+")\n                * float("+o+")\n                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)\n                / norm;\n              if (k == d) {\n                dyi += pow(norm, -1.0 * "+o+");\n              }\n              if (k == coords[3]) {\n                dyi *= getDy(b, r, c, d);\n                result += dyi;\n              }\n            }\n            else {\n              break;\n            }\n          }\n      }\n      setOutput(result);\n      }\n    "},ks=function(t,e,n,r,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var a,i=e,s=t[3]-1;this.outputShape=t;var u="float("+n+") + float("+r+") * sum";a=.5===o?"inversesqrt("+u+")":1===o?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords.x;\n        int r = coords.y;\n        int c = coords.z;\n        int d = coords.w;\n\n        bool hasNextCol = d < "+this.outputShape[3]+";\n        bool hasNextRow = c < "+this.outputShape[2]+";\n\n        vec4 sum = vec4(0.);\n        vec4 xFragAtOutputCoords = getX(b, r, c, d);\n\n        vec4 xAtOutputCoords = vec4(\n          getChannel(xFragAtOutputCoords, vec2(c, d)),\n          hasNextCol ?\n            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,\n          hasNextRow ?\n            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0\n        );\n\n        int firstChannel = d - "+i+";\n        vec2 cache = vec2(0.);\n        if(firstChannel >= 0){\n          vec4 firstChannelFrag = getX(b, r, c, firstChannel);\n          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));\n            if(hasNextRow){\n              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));\n            }\n        }\n\n        ivec2 depth = ivec2(d, d + 1);\n        for (int j = - "+i+"; j <= "+i+"; j++) {\n          ivec2 idx = depth + j;\n          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));\n          bvec2 belowUpperBound = lessThanEqual(idx, ivec2("+s+"));\n\n          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;\n          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;\n\n          if(depthInRange || depthPlusOneInRange){\n            vec4 z = vec4(0.);\n            vec4 xFragAtCurrentDepth;\n            z.xz = cache.xy;\n            if(depthPlusOneInRange && hasNextCol){\n              xFragAtCurrentDepth = idx.y != d ?\n                getX(b, r, c, idx.y) : xFragAtOutputCoords;\n              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));\n              if(hasNextRow){\n                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));\n              }\n            }\n            cache.xy = z.yw;\n            sum += z * z;\n          }\n        }\n        vec4 result = xAtOutputCoords * "+a+";\n        setOutput(result);\n      }\n    "},Ss=function(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;var e=t.strideHeight,n=t.strideWidth,r=t.dilationHeight,o=t.effectiveFilterHeight,a=t.effectiveFilterWidth,i=o-1-t.padInfo.top,s=a-1-t.padInfo.left,u=o*a-1;this.userCode="\n      const ivec2 pads = ivec2("+i+", "+s+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < "+o+";\n          wR += "+r+") {\n          float dyR = float(dyRCorner + wR) / "+e+".0;\n\n          if (dyR < 0.0 || dyR >= "+t.outHeight+".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < "+a+"; wC++) {\n            float dyC = float(dyCCorner + wC) / "+n+".0;\n\n            if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n            int maxPosValue = "+u+" - int(getMaxPos(b, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            int curPosValue = wR * "+a+" + wC;\n            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutput(dotProd);\n      }\n    "},As=function(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;var e=t.strideDepth,n=t.strideHeight,r=t.strideWidth,o=t.dilationDepth,a=t.dilationHeight,i=t.dilationWidth,s=t.effectiveFilterDepth,u=t.effectiveFilterHeight,c=t.effectiveFilterWidth,l=s-1-t.padInfo.front,h=u-1-t.padInfo.top,f=c-1-t.padInfo.left,d=s*u*c-1;this.userCode="\n      const ivec3 pads = ivec3("+l+", "+h+", "+f+");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < "+s+";\n           wD += "+o+") {\n          float dyD = float(dyDCorner + wD) / "+e+".0;\n\n          if (dyD < 0.0 || dyD >= "+t.outDepth+".0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < "+u+";\n              wR += "+a+") {\n            float dyR = float(dyRCorner + wR) / "+n+".0;\n\n            if (dyR < 0.0 || dyR >= "+t.outHeight+".0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < "+c+";\n                wC += "+i+") {\n              float dyC = float(dyCCorner + wC) / "+r+".0;\n\n              if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              int maxPosValue = "+d+" -\n                  int(getMaxPos(batch, idyD, idyR, idyC, ch));\n\n              // Get the current value, check it against the value from the\n              // position matrix.\n              int curPosValue =\n                  wD * "+u+" * "+c+" +\n                  wR * "+c+" + wC;\n              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n              dotProd += dyValue * mask;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "},Ts=function(t,e,n,r,o,a,i){void 0===n&&(n=!1),void 0===r&&(r=!1),void 0===o&&(o=!1),void 0===a&&(a=null),void 0===i&&(i=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e;var s=n?t[1]:t[2],u=Math.ceil(s/2),c=n?"i * 2, rc.y":"rc.y, i * 2",l=r?"rc.z, i * 2":"i * 2, rc.z",h=n?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],f=r?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],d="",p="";a&&(d=i?"vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          "+a+"\n        }":"vec4 activation(vec4 x) {\n          "+a+"\n        }",p="result = activation(result);");var v=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.userCode="\n      "+d+"\n\n      const float sharedDimension = "+u+".0;\n\n      vec4 dot2x2ARowBCol(ivec3 rc) {\n        vec4 result = vec4(0);\n        for (int i = 0; i < "+u+"; i++) {\n          vec4 a = getMatrixA(rc.x, "+c+");\n          vec4 b = getMatrixB(rc.x, "+l+");\n\n          // These swizzled products need to be separately added.\n          // See: https://github.com/tensorflow/tfjs/issues/1735\n          result += ("+h[0]+" * "+f[0]+");\n          result += ("+h[1]+" * "+f[1]+");\n        }\n        return result;\n      }\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n        vec4 result = dot2x2ARowBCol(rc);\n\n        "+v+"\n\n        "+p+"\n\n        setOutput(result);\n      }\n    "},Ds=function(){function t(t,e,n){this.variableNames=["probs"],this.outputShape=[t,n],this.userCode="\n      uniform float seed;\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n\n        float r = random(seed);\n        float cdf = 0.0;\n\n        for (int i = 0; i < "+(e-1)+"; i++) {\n          cdf += getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutput(float(i));\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutput(float("+(e-1)+"));\n      }\n    "}return t.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,r){null==e.seedLoc&&(e.seedLoc=n.getUniformLocation(r,"seed")),n.gl.uniform1f(e.seedLoc,t)}},t}(),Ns=function(t,e,n,r){this.variableNames=["indices"],this.outputShape=[t,e],this.userCode="\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float("+r+"), float("+n+"),\n                      float(index == coords.y)));\n      }\n    "},Fs=function(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=t;var e=t.length;if(0===e)this.userCode="\n        void main() {\n          setOutput(vec4(getA(), 0., 0., 0.));\n        }\n      ";else{var n=Ha("rc",e),r=oi(e),o=function(t,e,n){if(1===t)return"rc > "+e[0];for(var r="",o=t-2;o<t;o++)r+=n[o]+" >= "+e[o],o<t-1&&(r+="||");return r}(e,t,n),a=function(t,e,n,r){if(1===t)return"";var o=r.slice(-2);return"\n    int r = "+o[0]+";\n    int c = "+o[1]+";\n    int rp1 = r + 1;\n    int cp1 = c + 1;\n\n    bool cEdge = cp1 >= "+e+";\n    bool rEdge = rp1 >= "+n+";\n  "}(e,t[t.length-1],t[t.length-2],n),i=function(t,e){var n=t.length,r=function(t,e){for(var n=[],r=0;r<=1;r++)for(var o=0;o<=1;o++){for(var a=(0===r?"r":"rp1")+", "+(0===o?"c":"cp1"),i=2;i<t;i++)a=e[e.length-1-i]+","+a;n.push(a)}return n}(n,e);return 1===n?"getA(rc),\n            rc + 1 >= "+t[0]+" ? 0. : getA(rc + 1),\n            0, 0":"getA("+r[0]+"),\n          cEdge ? 0. : getA("+r[1]+"),\n          rEdge ? 0. : getA("+r[2]+"),\n          rEdge || cEdge ? 0. : getA("+r[3]+")"}(t,n);this.userCode="\n        void main() {\n          "+r+" rc = getOutputCoords();\n\n          if("+o+") {\n            setOutput(vec4(0));\n          } else {\n            "+a+"\n\n            setOutput(vec4("+i+"));\n          }\n        }\n      "}};var _s=function(t,e,n){this.variableNames=["x"],this.outputShape=e.map((function(e,n){return e[0]+t[n]+e[1]}));var r=t.length,o=oi(r),a=e.map((function(t){return t[0]})).join(","),i=e.map((function(e,n){return e[0]+t[n]})).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);this.userCode=1!==r?"\n      "+o+" start = "+o+"("+a+");\n      "+o+" end = "+o+"("+i+");\n\n      void main() {\n        "+o+" outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(float("+n+"));\n        } else {\n          "+o+" coords = outC - start;\n          setOutput(getX("+s+"));\n        }\n      }\n    ":"\n        int start = "+a+";\n        int end = "+i+";\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(float("+n+"));\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      "},Os=function(t,e,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e.map((function(e,n){return e[0]+t[n]+e[1]}));for(var r=t.length,o=oi(r),a=e.map((function(t){return t[0]})).join(","),i=e.map((function(e,n){return e[0]+t[n]})).join(","),s=Ha("rc",r),u=Ha("source",r),c=s[r-1]+" < "+this.outputShape[r-1],l=1===r?"source":"vec2("+u.slice(-2).join()+")",h=[o+" rc = outputLoc;",s[r-1]+" += 1;\n       if("+c+") {\n      ",1===r?"":"}\n       rc = outputLoc;\n       "+s[r-2]+" += 1;\n       if("+s[r-2]+" < "+this.outputShape[r-2]+") {",1===r?"":"  "+s[r-1]+" += 1;\n         if("+c+") {"],f=1===r?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",d="",p=0,v=1===r?2:4;p<v;p++)d+="\n        "+h[p]+"\n        if ("+f+") {\n          result["+p+"] = float("+n+");\n        } else {\n          "+o+" source = rc - start;\n          result["+p+"] = getChannel(getX("+u.join()+"), "+l+");\n        }\n      ";d+=1===r?"} ":"}}",this.userCode="\n      const "+o+" start = "+o+"("+a+");\n      const "+o+" end = "+o+"("+i+");\n\n      void main() {\n        "+o+" outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        "+d+"\n        setOutput(result);\n      }\n    "},Ms=function(t,e,n){if(this.variableNames=["x"],"avg"===e&&n)throw new Error("Cannot compute positions for average pool.");var r=t.filterWidth,o=t.strideHeight,a=t.strideWidth,i=t.dilationHeight,s=t.dilationWidth,u=t.effectiveFilterHeight,c=t.effectiveFilterWidth,l=t.padInfo.top,h=t.padInfo.left;this.outputShape=t.outShape;var f="avg"===e,d="0.0";if(f||(d="-1.0 / 1e-20"),n)this.userCode="\n        const ivec2 strides = ivec2("+o+", "+a+");\n        const ivec2 pads = ivec2("+l+", "+h+");\n\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int batch = coords[0];\n          int d = coords[3];\n\n          ivec2 xRCCorner = coords.yz * strides - pads;\n          int xRCorner = xRCCorner.x;\n          int xCCorner = xRCCorner.y;\n\n          // max/min x(?, ?, d) to get y(yR, yC, d).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n          float avgValue = 0.0;\n\n          for (int wR = 0; wR < "+u+";\n              wR += "+i+") {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= "+t.inHeight+") {\n              continue;\n            }\n\n            for (int wC = 0; wC < "+c+";\n                wC += "+s+") {\n              int xC = xCCorner + wC;\n\n              if (xC < 0 || xC >= "+t.inWidth+") {\n                continue;\n              }\n\n              float value = getX(batch, xR, xC, d);\n\n              // If a min / max value has already been found, use it. If not,\n              // use the current value.\n              float currMinMaxValue = mix(\n                  value, minMaxValue, minMaxValueFound);\n              if (value >= currMinMaxValue) {\n                minMaxValue = value;\n                minMaxValueFound = 1.0;\n                minMaxPosition = wR * "+c+" + wC;\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ";else{var p=e+"("+e+"("+e+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";"avg"===e&&(p="avgValue / count");var v=4*Math.floor(r/4),m=r%4,g="\n      if ("+f+") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ";this.userCode="\n      const ivec2 strides = ivec2("+o+", "+a+");\n      const ivec2 pads = ivec2("+l+", "+h+");\n      const float initializationValue = "+d+";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xR, int xC, int d) {\n        if (xC < 0 || xC >= "+t.inWidth+") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xR, xC, d);\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // max/min x(?, ?, d) to get y(yR, yC, d).\n        // ? = to be determined\n        vec4 minMaxValue = vec4("+d+");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wR = 0; wR < "+u+";\n            wR += "+i+") {\n          int xR = xRCorner + wR;\n\n          if (xR < 0 || xR >= "+t.inHeight+") {\n            continue;\n          }\n\n          for (int wC = 0; wC < "+v+"; wC += 4) {\n            int xC = xCCorner + wC * "+s+";\n\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + "+s+", d),\n              getValue(batch, xR, xC + 2 * "+s+", d),\n              getValue(batch, xR, xC + 3 * "+s+", d)\n            );\n\n            "+g+"\n          }\n\n          int xC = xCCorner + "+v+";\n          if ("+(1===m)+") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              initializationValue,\n              initializationValue,\n              initializationValue\n            );\n\n            "+g+"\n          } else if ("+(2===m)+") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + "+s+", d),\n              initializationValue,\n              initializationValue\n            );\n\n            "+g+"\n          } else if ("+(3===m)+") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + "+s+", d),\n              getValue(batch, xR, xC + 2 * "+s+", d),\n              initializationValue\n            );\n\n            "+g+"\n          }\n        }\n        setOutput("+p+");\n      }\n    "}},Bs=function(t,e,n){if(this.variableNames=["x"],"avg"===e&&n)throw new Error("Cannot compute positions for average pool.");var r=t.filterWidth,o=t.strideDepth,a=t.strideHeight,i=t.strideWidth,s=t.dilationDepth,u=t.dilationHeight,c=t.dilationWidth,l=t.effectiveFilterDepth,h=t.effectiveFilterHeight,f=t.effectiveFilterWidth,d=t.padInfo.front,p=t.padInfo.top,v=t.padInfo.left;this.outputShape=t.outShape;var m="avg"===e,g="0.0";if(m||(g="-1.0 / 1e-20"),n)this.userCode="\n        const ivec3 strides =\n            ivec3("+o+", "+a+", "+i+");\n        const ivec3 pads = ivec3("+d+", "+p+", "+v+");\n\n        void main() {\n          ivec5 coords = getOutputCoords();\n          int batch = coords.x;\n          int ch = coords.u;\n\n          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n          int xDCorner = xCorner.x;\n          int xRCorner = xCorner.y;\n          int xCCorner = xCorner.z;\n\n          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n\n          for (int wD = 0; wD < "+l+";\n              wD += "+s+") {\n            int xD = xDCorner + wD;\n\n            if (xD < 0 || xD >= "+t.inDepth+") {\n              continue;\n            }\n\n            for (int wR = 0; wR < "+h+";\n                wR += "+u+") {\n              int xR = xRCorner + wR;\n\n              if (xR < 0 || xR >= "+t.inHeight+") {\n                continue;\n              }\n\n              for (int wC = 0; wC < "+f+";\n                  wC += "+c+") {\n                int xC = xCCorner + wC;\n\n                if (xC < 0 || xC >= "+t.inWidth+") {\n                  continue;\n                }\n\n                float value = getX(batch, xD, xR, xC, ch);\n\n                // If a min / max value has already been found, use it. If not,\n                // use the current value.\n                float currMinMaxValue = mix(\n                    value, minMaxValue, minMaxValueFound);\n                if (value >= currMinMaxValue) {\n                  minMaxValue = value;\n                  minMaxValueFound = 1.0;\n                  minMaxPosition =\n                      wD * "+h+" * "+f+" +\n                      wR * "+f+" + wC;;\n                }\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ";else{var y=e+"("+e+"("+e+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";"avg"===e&&(y="avgValue / count");var x=4*Math.floor(r/4),b=r%4,w="\n      if ("+m+") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ";this.userCode="\n      const ivec3 strides =\n        ivec3("+o+", "+a+", "+i+");\n      const ivec3 pads = ivec3("+d+", "+p+", "+v+");\n      const float initializationValue = "+g+";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xD, int xR, int xC, int ch) {\n        if (xC < 0 || xC >= "+t.inWidth+") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xD, xR, xC, ch);\n      }\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xDCorner = xCorner.x;\n        int xRCorner = xCorner.y;\n        int xCCorner = xCorner.z;\n\n        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).\n        // ? = to be determined\n        vec4 minMaxValue = vec4("+g+");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wD = 0; wD < "+l+";\n            wD += "+s+") {\n          int xD = xDCorner + wD;\n\n          if (xD < 0 || xD >= "+t.inDepth+") {\n            continue;\n          }\n\n          for (int wR = 0; wR < "+h+";\n            wR += "+u+") {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= "+t.inHeight+") {\n              continue;\n            }\n\n            for (int wC = 0; wC < "+x+"; wC += 4) {\n              int xC = xCCorner + wC * "+c+";\n\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + "+c+", ch),\n                getValue(batch, xD, xR, xC + 2 * "+c+", ch),\n                getValue(batch, xD, xR, xC + 3 * "+c+", ch)\n              );\n\n              "+w+"\n            }\n\n            int xC = xCCorner + "+x+";\n            if ("+(1===b)+") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                initializationValue,\n                initializationValue,\n                initializationValue\n              );\n\n              "+w+"\n            } else if ("+(2===b)+") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + "+c+", ch),\n                initializationValue,\n                initializationValue\n              );\n\n              "+w+"\n            } else if ("+(3===b)+") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + "+c+", ch),\n                getValue(batch, xD, xR, xC + 2 * "+c+", ch),\n                initializationValue\n              );\n\n              "+w+"\n            }\n          }\n          setOutput("+y+");\n        }\n      }\n    "}},Ps=function(t,e){this.variableNames=["x"];var n=t.windowSize,r=t.batchSize,o=t.inSize,a=Math.ceil(o/n);this.outputShape=[r,a];var i="0.0",s="";"prod"===e?i="1.0":"min"===e?(i="1.0 / 1e-20",s="min"):"max"===e&&(i="-1.0 / 1e-20",s="max");var u=e+"("+e+"("+e+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";"sum"===e?u="sumValue":"prod"===e?u="prodValue":"all"===e?u="allValue":"any"===e&&(u="anyValue");var c=4*Math.floor(n/4),l=n%4,h="\n      if ("+("sum"===e)+") {\n        sumValue += dot(values, ones);\n      } else if ("+("prod"===e)+") {\n        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);\n        prodValue *= tmp[0] * tmp[1];\n      } else {\n        minMaxValue = "+s+"(values, minMaxValue);\n      }\n    ",f="vec4";"all"===e?(i="1.0",h="\n        bool reducedAllValue = all(values);\n        float floatedReducedAllValue = float(reducedAllValue);\n        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);\n      ",f="bvec4"):"any"===e&&(i="0.0",h="\n        bool reducedAnyValue = any(values);\n        float floatedReducedAnyValue = float(reducedAnyValue);\n        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);\n      ",f="bvec4");var d="";o%n>0&&(d="\n        if (inIdx < 0 || inIdx >= "+o+") {\n          return initializationValue;\n        }\n      "),this.userCode="\n      const float initializationValue = "+i+";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        "+d+"\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * "+n+";\n\n        vec4 minMaxValue = vec4("+i+");\n        float prodValue = 1.0;\n        float sumValue = 0.0;\n        float allValue = 1.0;\n        float anyValue = 0.0;\n\n        for (int i = 0; i < "+c+"; i += 4) {\n          int inIdx = inOffset + i;\n          "+f+" values = "+f+"(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          "+h+"\n        }\n\n        int inIdx = inOffset + "+c+";\n        if ("+(1===l)+") {\n          "+f+" values = "+f+"(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          "+h+"\n        } else if ("+(2===l)+") {\n          "+f+" values = "+f+"(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          "+h+"\n        } else if ("+(3===l)+") {\n          "+f+" values = "+f+"(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          "+h+"\n        }\n        setOutput("+u+");\n      }\n    "},Ls=function(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;for(var n="",r=0;r<4;r++){var o="thisRC = rc;";r%2==1&&(o+="thisRC.z += 1;"),r>1&&(o+="thisRC.y += 1;"),n+="\n        "+o+"\n        "+(r>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+"\n          int flatIndex = getFlatIndex(thisRC);\n\n          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);\n          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));\n\n          result["+r+"] =\n            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);\n        "+(r>0?"}":"")+"\n      "}this.userCode="\n      \n    ivec3 inputCoordsFromReshapedOutCoords(int index) {\n      "+Ka(["r","c","d"],e)+"\n      return ivec3(r, c, d);\n    }\n  \n      "+ja(t)+"\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n\n        vec4 result = vec4(0.);\n\n        ivec3 thisRC;\n        int rows = "+t[1]+";\n        int cols = "+t[2]+";\n\n        "+n+"\n\n        setOutput(result);\n      }\n    "};var Ws=function(t,e,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e.shape;var r=e.shape,o=r[1],a=r[2],i=t.shape,s=i[1],u=i[2],c=[n&&s>1?o-1:o,n&&u>1?a-1:a],l=[n&&s>1?s-1:s,n&&u>1?u-1:u],h=c[0]/l[0],f=c[1]/l[1],d=1/h,p=1/f,v=2*Math.ceil(d)+2,m=2*Math.ceil(p)+2;this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float("+h+");\n        const float widthScale = float("+f+");\n\n        const float invHeightScale = float("+d+");\n        const float invWidthScale = float("+p+");\n\n        const int winHeight = int("+v+");\n        const int winWidth = int("+m+");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(startRLerp - float(winHeight / 2));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(startCLerp - float(winWidth / 2));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= "+s+") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= "+u+") {\n              continue;\n            }\n\n            float dxR = float(dyR) * heightScale;\n            int topDxRIndex = int(floor(dxR));\n            int bottomDxRIndex = int(min(ceil(dxR), "+(o-1)+".0));\n            float dxRLerp = dxR - float(topDxRIndex);\n            float inverseDxRLerp = 1.0 - dxRLerp;\n\n            float dxC = float(dyC) * widthScale;\n            int leftDxCIndex = int(floor(dxC));\n            int rightDxCIndex = int(min(ceil(dxC), "+(a-1)+".0));\n            float dxCLerp = dxC - float(leftDxCIndex);\n            float inverseDxCLerp = 1.0 - dxCLerp;\n\n            if (r == topDxRIndex && c == leftDxCIndex) {\n              // topLeft\n              accumulator +=\n                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n            }\n\n            if (r == topDxRIndex && c == rightDxCIndex) {\n              // topRight\n              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == leftDxCIndex) {\n              // bottomLeft\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == rightDxCIndex) {\n              // bottomRight\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    "},Us=function(t,e,n,r){this.variableNames=["A"],this.outputShape=[];var o=t[0],a=t[1],i=t[2],s=t[3];this.outputShape=[o,e,n,s];var u=[r&&e>1?a-1:a,r&&n>1?i-1:i],c=[r&&e>1?e-1:e,r&&n>1?n-1:n];this.userCode="\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          "+u[0]/c[0]+",\n          "+u[1]/c[1]+");\n      const vec2 inputShapeRC = vec2("+a+".0, "+i+".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);\n        ivec2 sourceCeilRC = ivec2(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);\n        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);\n        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);\n        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n        float top = topLeft + (topRight - topLeft) * fracRC.y;\n        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n        float newValue = top + (bottom - top) * fracRC.x;\n\n        setOutput(newValue);\n      }\n    "},Vs=function(t,e,n,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=t[0],a=t[1],i=t[2],s=t[3];this.outputShape=[o,e,n,s];var u=[r&&e>1?a-1:a,r&&n>1?i-1:i],c=[r&&e>1?e-1:e,r&&n>1?n-1:n];this.userCode="\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          "+u[0]/c[0]+",\n          "+u[1]/c[1]+",\n          "+u[1]/c[1]+");\n      const vec3 inputShapeRC = vec3("+a+".0, "+i+".0,\n                                     "+i+".0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);\n        ivec3 sourceCeilRC = ivec3(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < "+(s-1)+";\n        bool hasNextRow = coords.z < "+(n-1)+";\n\n        // In parallel, construct four corners for all four components in\n        // packed 2x2 cell.\n        vec4 topLeft = vec4(\n          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 bottomLeft = vec4(\n          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 topRight = vec4(\n          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec4 bottomRight = vec4(\n          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);\n\n        vec4 top = mix(topLeft, topRight, fracRC.yyzz);\n        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);\n        vec4 newValue = mix(top, bottom, fracRC.x);\n\n        setOutput(newValue);\n      }\n    "},zs=function(t,e,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e.shape;var r=e.shape,o=r[1],a=r[2],i=t.shape,s=i[1],u=i[2],c=[n&&s>1?o-1:o,n&&u>1?a-1:a],l=[n&&s>1?s-1:s,n&&u>1?u-1:u],h=c[0]/l[0],f=c[1]/l[1],d=1/h,p=1/f,v=2*Math.ceil(d)+2,m=2*Math.ceil(p)+2;this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float("+h+");\n        const float widthScale = float("+f+");\n\n        const float invHeightScale = float("+d+");\n        const float invWidthScale = float("+p+");\n\n        const int winHeight = int("+v+");\n        const int winWidth = int("+m+");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(floor(startRLerp - float(winHeight / 2)));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(floor(startCLerp - float(winWidth / 2)));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= "+s+") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= "+u+") {\n              continue;\n            }\n\n            float sourceFracRow =\n              float("+c[0]+") *\n                (float(dyR) / float("+l[0]+"));\n\n            float sourceFracCol =\n                float("+c[1]+") *\n                  (float(dyC) / float("+l[1]+"));\n\n            int sourceNearestRow = int(min(\n                float(int("+o+") - 1),\n                "+n+" ? float(round(sourceFracRow)) :\n                                  float(floor(sourceFracRow))));\n\n            int sourceNearestCol = int(min(\n                float(int("+a+") - 1),\n                "+n+" ? float(round(sourceFracCol)) :\n                                  float(floor(sourceFracCol))));\n\n            if (r == sourceNearestRow && c == sourceNearestCol) {\n              accumulator += getDy(b, dyR, dyC, d);\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    "},Gs=function(t,e,n,r){this.variableNames=["A"],this.outputShape=[];var o=t[0],a=t[1],i=t[2],s=t[3];this.outputShape=[o,e,n,s];var u=[r&&e>1?a-1:a,r&&n>1?i-1:i],c=[r&&e>1?e-1:e,r&&n>1?n-1:n],l=r?"0.5":"0.0";this.userCode="\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          "+u[0]/c[0]+",\n          "+u[1]/c[1]+");\n      const vec2 inputShapeRC = vec2("+a+".0, "+i+".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec2 sourceNearestRC = ivec2(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + "+l+")));\n\n        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n        setOutput(newValue);\n      }\n    "},Hs=function(t,e){this.variableNames=["x"];var n=t.length;if(n>4)throw new Error("WebGL backend: Reverse of rank-"+n+" tensor is not yet supported");if(this.outputShape=t,1!==n){var r=t.map((function(n,r){return function(n){return-1!==e.indexOf(n)&&1!==t[n]?t[n]+" - coords["+n+"] - 1":"coords["+n+"]"}(r)})).join(","),o=oi(n);this.userCode="\n      void main() {\n        "+o+" coords = getOutputCoords();\n        setOutput(getX("+r+"));\n      }\n    "}else this.userCode="\n        void main() {\n          int coord = getOutputCoords();\n          setOutput(getX("+t[0]+" - coord - 1));\n        }\n      "},qs=function(t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var n=t.length;if(n>4)throw new Error("WebGL backend: Reverse of rank-"+n+" tensor is not yet supported");this.outputShape=t;var r=Ha("rc",n),o=r[n-1]+" + 1 < "+this.outputShape[n-1],a=r[n-2]+" + 1 < "+this.outputShape[n-2],i=oi(n);function s(n){var r=t.map((function(r,o){return function(n,r){return-1!==e.indexOf(n)&&1!==t[n]?t[n]+" - "+r[n]+" - 1":""+r[n]}(o,n)}));return"getChannel(getX("+r.join(",")+"), vec2("+r.slice(-2).join(",")+"))"}this.userCode=1===n?"\n        void main(){\n          int rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = getChannel(getX("+t[0]+" - rc - 1),\n            "+t[0]+" - rc - 1);\n          if("+o+"){\n              result.g = getChannel(getX("+t[0]+" - (rc  + 1) - 1),\n                "+t[0]+" - (rc  + 1) - 1);\n          }\n          setOutput(result);\n        }\n      ":"\n        void main() {\n          "+i+" rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = "+function(t){return s(t)}(r.slice())+";\n          if("+o+"){\n            result.g = "+function(t){return t[n-1]="("+t[n-1]+" + 1)",s(t)}(r.slice())+";\n          }\n          if("+a+") {\n            result.b = "+function(t){return t[n-2]="("+t[n-2]+" + 1)",s(t)}(r.slice())+";\n            if("+o+") {\n              result.a = "+function(t){return t[n-1]="("+t[n-1]+" + 1)",t[n-2]="("+t[n-2]+" + 1)",s(t)}(r.slice())+";\n            }\n          }\n          setOutput(result);\n        }\n    "},Ks=function(t,e,n,r,o,a,i){void 0===i&&(i=!0),this.variableNames=["updates","indices","defaultValue"],this.outputShape=a;var s=oi(o.length),u=oi(a.length),c="";1===n?c="i":2===n&&(c="i, j");var l="getIndices("+c+")",h="";1===r?h="i":2===r&&(h="i, coords[1]");var f="getUpdates("+h+")",d=e>1?"strides[j]":"strides";this.userCode="\n        "+s+" strides = "+s+"("+o+");\n\n        void main() {\n          "+u+" coords = getOutputCoords();\n          float sum = 0.0;\n          bool found = false;\n          for (int i = 0; i < "+t+"; i++) {\n            int flattenedIndex = 0;\n            for (int j = 0; j < "+e+"; j++) {\n              int index = round("+l+");\n              flattenedIndex += index * "+d+";\n            }\n            if (flattenedIndex == coords[0]) {\n              sum += "+f+";\n              found = true;\n            }\n          }\n          setOutput(mix(getDefaultValue(), sum, float(found)));\n        }\n      "},js=function(t,e){this.variableNames=["x","segmentIds"];var n=t.windowSize,r=t.batchSize,o=t.inSize,a=t.numSegments,i=a*Math.ceil(o/n);this.outputShape=[r,i];var s=4*Math.floor(n/4),u=n%4,c="\n        sumValue += dot(values, segFilter);\n    ",l="";o%n>0&&(l="\n        if (inIdx < 0 || inIdx >= "+o+") {\n          return initializationValue;\n        }\n      ");var h="";o%n>0&&(h="\n        if (inIdx < 0 || inIdx >= "+o+") {\n          return -1.0;\n        }\n      "),this.userCode="\n      const float initializationValue = 0.0;\n\n      float getValue(int batch, int inIdx) {\n        "+l+"\n        return getX(batch, inIdx);\n      }\n\n      float getSegmentIdAtIndex(int inIdx) {\n        "+h+"\n        return getSegmentIds(inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = int(floor(float(outIdx) / float(\n          "+a+")) * float("+n+"));\n        int currentSeg = int(mod(float(outIdx), float("+a+")));\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < "+s+"; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0\n          );\n\n          "+c+"\n        }\n\n        int inIdx = inOffset + "+s+";\n        if ("+(1===u)+") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            0,\n            0,\n            0\n          );\n\n          "+c+"\n        } else if ("+(2===u)+") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n              0,\n              0\n          );\n\n          "+c+"\n        } else if ("+(3===u)+") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            0\n          );\n\n          "+c+"\n        }\n        setOutput(sumValue);\n      }\n    "},Xs=function(t,e,n){var r,o;if(this.variableNames=["c","a","b"],this.outputShape=e,n>4)throw Error("Where for rank "+n+" is not yet supported");if(1===n)o="resRC",r="resRC";else{for(var a=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[],u=0;u<e.length;u++)s.push(""+a[u]),u<t&&i.push(""+a[u]);r=i.join(),o=s.join()}var c=oi(n);this.userCode="\n      void main() {\n        "+c+" resRC = getOutputCoords();\n        float cVal = getC("+r+");\n        if (cVal >= 1.0) {\n          setOutput(getA("+o+"));\n        } else {\n          setOutput(getB("+o+"));\n        }\n      }\n    "},Ys=function(){function t(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var e,n=oi(this.rank),r="uniform int start["+this.rank+"];",o=function(t){if(1===t)return"sourceLoc";if(t<=6)return $s.slice(0,t).map((function(t){return"sourceLoc."+t})).join(",");throw Error("Slicing for rank "+t+" is not yet supported")}(this.rank);e="\n        "+n+" sourceLoc;\n        "+n+" coords = getOutputCoords();\n        "+t.map((function(t,e){return"sourceLoc."+$s[e]+" = start["+e+"] + coords."+$s[e]+";"})).join("\n")+"\n      ",this.userCode="\n      "+r+"\n      void main() {\n        "+e+"\n        setOutput(getSource("+o+"));\n      }\n    "}return t.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,r){null==e.startLoc&&(e.startLoc=n.getUniformLocationNoThrow(r,"start"),null==e.startLoc)||n.gl.uniform1iv(e.startLoc,t)}},t}(),$s=["x","y","z","w","u","v"];var Qs=function(){function t(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length;var e=oi(this.rank),n=Ha("coords",this.rank),r=Ha("sourceLoc",this.rank),o=1===this.rank?"sourceLoc":"vec2("+r.slice(-2).join()+")",a="getChannel(getSource("+r.join()+"), "+o+")",i="\n      result.x = "+a+";\n      if (++"+n[this.rank-1]+" < "+t[this.rank-1]+") {\n        ++"+r[this.rank-1]+";\n        result.y = "+a+";\n        --"+r[this.rank-1]+";\n      }\n    ",s=1===this.rank?"":"\n      --"+n[this.rank-1]+";\n      if (++"+n[this.rank-2]+" < "+t[this.rank-2]+") {\n        ++"+r[this.rank-2]+";\n        result.z = "+a+";\n        if (++"+n[this.rank-1]+" < "+t[this.rank-1]+") {\n          ++"+r[this.rank-1]+";\n          result.w = "+a+";\n        }\n      }\n    ",u=this.rank<=4?"sourceLoc = coords +\n            "+e+"("+t.map((function(t,e){return"start["+e+"]"})).join()+");":t.map((function(t,e){return r[e]+" = "+n[e]+" + start["+e+"];"})).join("\n");this.userCode="\n      uniform int start["+this.rank+"];\n      void main() {\n        "+e+" coords = getOutputCoords();\n        "+e+" sourceLoc;\n        "+u+"\n        vec4 result = vec4(0.);\n        "+i+"\n        "+s+"\n        setOutput(result);\n      }\n    "}return t.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,r){null==e.startLoc&&(e.startLoc=n.getUniformLocationNoThrow(r,"start"),null==e.startLoc)||n.gl.uniform1iv(e.startLoc,t)}},t}(),Js=function(t,e,n){this.variableNames=["x"],this.outputShape=n;var r=n.length,o=oi(n.length),a=oi(n.length),i="";if(1===r)i="coords * strides + begin";else{var s=0;i=n.map((function(t,e){return s++,1===n.length?"coords * strides["+e+"] + begin["+e+"]":"coords["+(s-1)+"] * strides["+e+"] + begin["+e+"]"})).join(",")}this.userCode="\n      "+o+" begin = "+o+"("+t+");\n      "+o+" strides = "+o+"("+e+");\n\n      void main() {\n        "+a+" coords = getOutputCoords();\n        setOutput(getX("+i+"));\n      }\n    "},Zs=function(){function t(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return t.prototype.acquireTexture=function(t,e,n){var r,o=tu(e,n),a=eu(t,o,n);if(a in this.freeTextures||(this.freeTextures[a]=[]),a in this.usedTextures||(this.usedTextures[a]=[]),this.freeTextures[a].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var i=this.freeTextures[a].shift();return this.usedTextures[a].push(i),i}return this.numUsedTextures++,this.log(),o===Gt.PACKED_2X2_FLOAT32?r=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):o===Gt.PACKED_2X2_FLOAT16?r=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):o===Gt.UNPACKED_FLOAT32?r=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):o===Gt.UNPACKED_FLOAT16?r=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):o===Gt.PACKED_4X1_UNSIGNED_BYTE&&(r=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[a].push(r),r},t.prototype.releaseTexture=function(t,e,n,r){if(null!=this.freeTextures){var o=eu(e,tu(n,r),r);o in this.freeTextures||(this.freeTextures[o]=[]),this.freeTextures[o].push(t),this.numFreeTextures++,this.numUsedTextures--;var a=this.usedTextures[o],i=a.indexOf(t);if(i<0)throw new Error("Cannot release a texture that was never provided by this texture manager");a.splice(i,1),this.log()}},t.prototype.log=function(){if(this.logEnabled){var t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+t+")")}},t.prototype.getNumUsedTextures=function(){return this.numUsedTextures},t.prototype.getNumFreeTextures=function(){return this.numFreeTextures},t.prototype.dispose=function(){var t=this;if(null!=this.freeTextures){for(var e in this.freeTextures)this.freeTextures[e].forEach((function(e){t.gpgpu.deleteMatrixTexture(e)}));for(var e in this.usedTextures)this.usedTextures[e].forEach((function(e){t.gpgpu.deleteMatrixTexture(e)}));this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},t}();function tu(t,e){if(t===zt.UPLOAD)return Gt.PACKED_2X2_FLOAT32;if(t===zt.RENDER||null==t)return function(t){return i().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?t?Gt.PACKED_2X2_FLOAT32:Gt.UNPACKED_FLOAT32:t?Gt.PACKED_2X2_FLOAT16:Gt.UNPACKED_FLOAT16}(e);if(t===zt.DOWNLOAD||t===zt.PIXELS)return Gt.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+t)}function eu(t,e,n){return t[0]+"_"+t[1]+"_"+e+"_"+n}var nu=function(t,e){this.variableNames=["A"];for(var n=new Array(t.length),r=0;r<n.length;r++)n[r]=t[r]*e[r];this.outputShape=n,this.rank=n.length;var o=oi(this.rank),a=function(t){var e=t.length;if(e>5)throw Error("Tile for rank "+e+" is not yet supported");if(1===e)return"imod(resRC, "+t[0]+")";for(var n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],r=[],o=0;o<t.length;o++)r.push("imod("+n[o]+", "+t[o]+")");return r.join()}(t);this.userCode="\n      void main() {\n        "+o+" resRC = getOutputCoords();\n        setOutput(getA("+a+"));\n      }\n    "};var ru=function(t,e){this.variableNames=["A"];for(var n=new Array(t.length),r=0;r<n.length;r++)n[r]=t[e[r]];this.outputShape=n,this.rank=n.length;var o=oi(this.rank),a=function(t){var e=t.length;if(e>6)throw Error("Transpose for rank "+e+" is not yet supported");for(var n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],r=new Array(e),o=0;o<t.length;o++)r[t[o]]=n[o];return r.join()}(e);this.userCode="\n    void main() {\n      "+o+" resRC = getOutputCoords();\n      setOutput(getA("+a+"));\n    }\n    "};var ou=function(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var n=new Array(t.length),r=0;r<n.length;r++)n[r]=t[e[r]];if(this.outputShape=n,this.rank=n.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=oi(this.rank),a=Ga("rc",this.rank),i=new Array(this.rank);for(r=0;r<e.length;r++)i[e[r]]=a[r];var s="vec2("+i.slice(-2).join()+")",u="++"+a[this.rank-1]+" < "+n[this.rank-1],c="getChannel(getA("+i.join()+"), "+s+")";this.userCode="\n    void main() {\n      "+o+" rc = getOutputCoords();\n      vec4 result = vec4(0.);\n      result[0] = "+c+";\n      if("+u+") {\n        result[1] = "+c+";\n      }\n      --"+a[this.rank-1]+";\n      if(++"+a[this.rank-2]+" < "+n[this.rank-2]+") {\n        result[2] = "+c+";\n        if("+u+") {\n          result[3] = "+c+";\n        }\n      }\n      setOutput(result);\n    }\n    "},au=1.7580993408473768,iu=1.0507009873554805,su=function(t,e){this.variableNames=["A"],this.outputShape=t,this.userCode="\n      float unaryOperation(float x) {\n        "+e+"\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        float y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    "},uu="if (isnan(x)) return x;",cu="return x;",lu="return abs(x);",hu=uu+"\n  return (x < 0.0) ? 0.0 : x;\n",fu=uu+"\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n",du="return (x >= 0.0) ? x : (exp(x) - 1.0);",pu="\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = "+au+";\n  float scale = "+iu+";\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n";var vu="return -x;",mu="return ceil(x);",gu="return floor(x);",yu="return exp(x);",xu="return exp(x) - 1.0;",bu=uu+"\n  return sin(x);\n",wu=uu+"\n  return cos(x);\n",Cu=uu+"\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return asin(x);\n",Eu=uu+"\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return acos(x);\n",Ru=uu+"\n  return atan(x);\n",Iu=uu+"return log(x + sqrt(x * x + 1.0));",ku=uu+"\n  if (x < 1.0) return NAN;\n  return log(x + sqrt(x * x - 1.0));",Su=uu+"\n  if ((x < -1.0) || (x > 1.0)) return NAN;\n  return (log(1.0 + x) - log(1.0 - x)) / 2.0;",Au="return x;",Tu="return x;",Du="\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",Nu="\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",Fu="\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n",_u=function(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode="\n      vec4 unaryOperation(vec4 x) {\n        "+e+"\n      }\n\n      void main() {\n        vec4 x = getAAtOutCoords();\n        vec4 y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    "},Ou=function(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=t;var e=t.length,n=Ha("rc",e),r=oi(e),o=function(t,e){if(1===t)return"rc";for(var n="",r=0;r<t;r++)n+=e[r],r<t-1&&(n+=",");return n}(e,n),a=n.slice(-2),i=e<=1?"rc":"vec2("+a.join(",")+")";this.userCode="\n      void main() {\n        "+r+" rc = getOutputCoords();\n        vec4 packedInput = getA("+o+");\n\n        setOutput(getChannel(packedInput, "+i+"));\n      }\n    "},Mu={};function Bu(t,e){if(void 0===e&&(e=!1),"linear"===t)return e?Tu:cu;if("relu"===t)return e?Du:hu;if("elu"===t)return e?Fu:du;if("relu6"===t)return e?Nu:fu;if("prelu"===t)return e?Ci:xi;throw new Error("Activation "+t+" has not been implemented for the WebGL backend.")}var Pu=600;var Lu=function(t){function o(e){var n,r=t.call(this)||this;if(r.pendingRead=new WeakMap,r.pendingDisposal=new WeakSet,r.dataRefCount=new WeakMap,r.numBytesInGPU=0,r.uploadWaitMs=0,r.downloadWaitMs=0,r.warnedAboutMemory=!1,r.pendingDeletes=0,r.disposed=!1,!i().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(null==e){var o=jt(i().getNumber("WEBGL_VERSION"));r.binaryCache=(n=i().getNumber("WEBGL_VERSION"))in Mu?Mu[n]:(Mu[n]={},Mu[n]),r.gpgpu=new ws(o),r.canvas=o.canvas,r.gpgpuCreatedLocally=!0}else r.gpgpu=e,r.binaryCache={},r.gpgpuCreatedLocally=!1,r.canvas=e.gl.canvas;return r.textureManager=new Zs(r.gpgpu),r.numMBBeforeWarning=null==i().global.screen?1024:i().global.screen.height*i().global.screen.width*window.devicePixelRatio*Pu/1024/1024,r.texData=new aa(r,Lt),r}return e(o,t),o.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},o.prototype.write=function(t,e,n){if(i().getBool("DEBUG")&&this.checkNumericalProblems(t),"complex64"===n&&null!=t)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var r={};return this.texData.set(r,{shape:e,dtype:n,values:t,usage:zt.UPLOAD}),r},o.prototype.move=function(t,e,n,r){if(i().getBool("DEBUG")&&this.checkNumericalProblems(e),"complex64"===r)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(t,{shape:n,dtype:r,values:e,usage:zt.UPLOAD})},o.prototype.readSync=function(t){var e=this.texData.get(t),n=e.values,r=e.dtype,o=e.complexTensors,a=e.slice,i=e.shape,s=e.isPacked;if(null!=a){var u=void 0;u=s?new _u(i,Au):new su(i,Au);var c=this.runWebGLProgram(u,[{dataId:t,shape:i,dtype:r}],r),l=this.readSync(c.dataId);return this.disposeData(c.dataId),l}if(null!=n)return this.convertAndCacheOnCPU(t);if("string"===r)return n;var h,f,d=null!=this.activeTimers;(d&&(h=et()),"complex64"===r)?f=Ra(o.real.dataSync(),o.imag.dataSync()):f=this.getValuesFromTexture(t);return d&&(this.downloadWaitMs+=et()-h),this.convertAndCacheOnCPU(t,f)},o.prototype.read=function(t){return n(this,void 0,void 0,(function(){var e,n,o,a,s,u,c,l,h,f,d,p,v,m,g,y,x,b,w,C,E,R;return r(this,(function(r){switch(r.label){case 0:if(this.pendingRead.has(t))return e=this.pendingRead.get(t),[2,new Promise((function(t){return e.push(t)}))];if(n=this.texData.get(t),o=n.values,a=n.shape,s=n.slice,u=n.dtype,c=n.complexTensors,l=n.isPacked,null!=s)return h=void 0,h=l?new _u(a,Au):new su(a,Au),f=this.runWebGLProgram(h,[{dataId:t,shape:a,dtype:u}],u),d=this.read(f.dataId),this.disposeData(f.dataId),[2,d];if(null!=o)return[2,this.convertAndCacheOnCPU(t)];if(!i().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&2===i().getNumber("WEBGL_VERSION"))throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return p=null,"complex64"!==u&&i().get("WEBGL_BUFFER_SUPPORTED")&&(v=this.decode(t),m=this.texData.get(v.dataId),p=(R=this.gpgpu).createBufferFromTexture.apply(R,[m.texture].concat(Yt(a)))),this.pendingRead.set(t,[]),"complex64"===u?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:r.sent(),r.label=2;case 2:return"complex64"!==u?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return y=r.sent(),x=y[0],b=y[1],g=Ra(x,b),[3,5];case 4:null==p?g=this.getValuesFromTexture(t):(w=k(a),g=this.gpgpu.downloadFloat32MatrixFromBuffer(p,w)),r.label=5;case 5:return null!=v&&this.disposeData(v.dataId),C=this.convertAndCacheOnCPU(t,g),E=this.pendingRead.get(t),this.pendingRead.delete(t),E.forEach((function(t){return t(C)})),this.pendingDisposal.has(t)&&(this.pendingDisposal.delete(t),this.disposeData(t),this.pendingDeletes--),[2,C]}}))}))},o.prototype.checkNumericalProblems=function(t){if(null!=t)for(var e=0;e<t.length;e++){var n=t[e];if(!ee(n)){if(i().getBool("WEBGL_RENDER_FLOAT32_CAPABLE"))throw Error("The value "+n+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'");throw Error("The value "+n+" cannot be represented on this device.")}}},o.prototype.getValuesFromTexture=function(t){var e,n=this.texData.get(t),r=n.shape,o=n.dtype,a=n.isPacked,s=k(r);if(i().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var u=this.decode(t),c=this.texData.get(u.dataId),l=(e=this.gpgpu).downloadMatrixFromPackedTexture.apply(e,[c.texture].concat(Yt(r))).subarray(0,s);return this.disposeData(u.dataId),l}var h=i().getBool("WEBGL_PACK")&&!0===a,f=h?De(r):r,d=h?new Xi(f):new ji(f),p=this.runWebGLProgram(d,[{shape:f,dtype:o,dataId:t}],"float32"),v=this.texData.get(p.dataId),m=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(v.texture,v.texShape[0],v.texShape[1]).subarray(0,s);return this.disposeData(p.dataId),m},o.prototype.time=function(t){return n(this,void 0,void 0,(function(){var e,n,o,a,s,u,c;return r(this,(function(r){switch(r.label){case 0:return e=this.activeTimers,n=[],o=!1,null==this.programTimersStack?(this.programTimersStack=n,o=!0):this.activeTimers.push(n),this.activeTimers=n,t(),a=I(this.activeTimers.map((function(t){return t.query}))).filter((function(t){return null!=t})),s=I(this.activeTimers.map((function(t){return t.name}))).filter((function(t){return null!=t})),this.activeTimers=e,o&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(a)]:[3,2];case 1:return c=r.sent(),u.kernelMs=w(c),u.getExtraProfileInfo=function(){return c.map((function(t,e){return{name:s[e],ms:t}})).map((function(t){return t.name+": "+t.ms})).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},r.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}}))}))},o.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},o.prototype.startTimer=function(){return i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:et(),endMs:null}},o.prototype.endTimer=function(t){return i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),t):(t.endMs=et(),t)},o.prototype.getQueryTime=function(t){return n(this,void 0,void 0,(function(){var e;return r(this,(function(n){return i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(t)]:[2,(e=t).endMs-e.startMs]}))}))},o.prototype.disposeData=function(t){if(!this.pendingDisposal.has(t)){if(this.pendingRead.has(t))return this.pendingDisposal.add(t),void this.pendingDeletes++;if(this.texData.has(t)){this.releaseGPUData(t);var e=this.texData.get(t).complexTensors;null!=e&&(e.real.dispose(),e.imag.dispose()),this.texData.delete(t)}}},o.prototype.releaseGPUData=function(t){var e=this.texData.get(t),n=e.texture,r=e.dtype,o=e.texShape,a=e.usage,i=e.isPacked,s=e.slice,u=s&&s.origDataId||t,c=this.dataRefCount.get(u);c>1?this.dataRefCount.set(u,c-1):(this.dataRefCount.delete(u),null!=n&&(this.numBytesInGPU-=this.computeBytes(o,r),this.textureManager.releaseTexture(n,o,a,i)));var l=this.texData.get(t);l.texture=null,l.texShape=null,l.isPacked=!1,l.slice=null},o.prototype.getTexture=function(t){return this.uploadToGPU(t),this.texData.get(t).texture},o.prototype.getDataInfo=function(t){return this.texData.get(t)},o.prototype.getCPUBackend=function(){return i().getBool("WEBGL_CPU_FORWARD")?(null==this.cpuBackend&&(this.cpuBackend=Lt.findBackend("cpu")),this.cpuBackend):null},o.prototype.shouldExecuteOnCPU=function(t,e){var n=this;return void 0===e&&(e=128),null!=this.getCPUBackend()&&t.every((function(t){return null==n.texData.get(t.dataId).texture&&t.size<e}))},o.prototype.getGPGPUContext=function(){return this.gpgpu},o.prototype.complex=function(t,e){var n=this.makeOutput(t.shape,"complex64");return this.texData.get(n.dataId).complexTensors={real:Lt.keep(t.clone()),imag:Lt.keep(e.clone())},n},o.prototype.real=function(t){return this.texData.get(t.dataId).complexTensors.real.clone()},o.prototype.imag=function(t){return this.texData.get(t.dataId).complexTensors.imag.clone()},o.prototype.slice=function(t,e,n){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.slice(t,e,n);if(0===k(n))return Fn([],n,t.dtype);var r=this.texData.get(t.dataId).isPacked,o=jo(t.shape,e,n);if(r||!o){var a=i().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Qs(n):new Ys(n),s=a.getCustomSetupFunc(e);return this.compileAndRun(a,[t],null,s)}return this.uploadToGPU(t.dataId),this.shallowSlice(t,e,n)},o.prototype.shallowSlice=function(t,e,n){var r=this.texData.get(t.dataId),o=this.makeOutput(n,t.dtype),a=this.texData.get(o.dataId);Object.assign(a,r),a.shape=n,a.dtype=t.dtype;var i=Xo(e,t.strides);r.slice&&(i+=r.slice.flatOffset),a.slice={flatOffset:i,origDataId:r.slice&&r.slice.origDataId||t.dataId};var s=this.dataRefCount.get(a.slice.origDataId)||1;return this.dataRefCount.set(a.slice.origDataId,s+1),o},o.prototype.stridedSlice=function(t,e,n,r){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.stridedSlice(t,e,n,r);var o=Ho(e,n,r);if(o.some((function(t){return 0===t})))return Fn([],o);var a=new Js(e,r,o);return this.compileAndRun(a,[t])},o.prototype.reverse=function(t,e){var n=i().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new qs(t.shape,e):new Hs(t.shape,e);return this.compileAndRun(n,[t])},o.prototype.concat=function(t,e){if("complex64"===t[0].dtype){var n=t.map((function(t){return Dn(t)})),r=t.map((function(t){return Nn(t)}));return Tn(this.concat(n,e),this.concat(r,e))}if(this.shouldExecuteOnCPU(t))return this.cpuBackend.concat(t,e);if(1===t.length)return t[0];if(t.length>i().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var o=Math.floor(t.length/2),a=this.concat(t.slice(0,o),e),s=this.concat(t.slice(o),e);return this.concat([a,s],e)}if(i().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&t[0].rank>1){var u=new Ai(t.map((function(t){return t.shape})),e);return this.compileAndRun(u,t)}var c=Sn(t.map((function(t){return t.shape})),e),l=t.map((function(t){return t.as2D(-1,k(t.shape.slice(e)))})),h=new Si(l.map((function(t){return t.shape})));return this.compileAndRun(h,l).reshape(c)},o.prototype.neg=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.neg(t);if(i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,vu,t.dtype);var e=new su(t.shape,vu);return this.compileAndRun(e,[t])},o.prototype.batchMatMul=function(t,e,n,r){var o=n?t.shape[2]:t.shape[1],a=r?e.shape[1]:e.shape[2],i=n?t.shape[1]:t.shape[2],s=t.shape[0];if((1===o||1===a)&&i>1e3){n&&(t=t.transpose([0,2,1])),r&&(e=e.transpose([0,2,1]));var u=1===a?t:t.as3D(s,i,1),c=1===a?2:1,l=1===a?e.as3D(s,1,i):e;return this.multiply(u,l).sum(c,!0)}var h=Tt(t.dtype,e.dtype),f=new Ts(t.shape,[s,o,a],n,r);return this.compileAndRun(f,[t,e],h)},o.prototype.fusedBatchMatMul=function(t){var e=t.a,n=t.b,r=t.transposeA,o=t.transposeB,a=t.bias,i=t.activation,s=t.preluActivationWeights,u=r?e.shape[2]:e.shape[1],c=o?n.shape[1]:n.shape[2],l=e.shape[0],h=Tt(e.dtype,n.dtype),f=null!=a,d=null!=s,p=i?Bu(i,!0):null,v=new Ts(e.shape,[l,u,c],r,o,f,p,d),m=[e,n];return a&&m.push(a),s&&m.push(s),this.compileAndRun(v,m,h)},o.prototype.multiply=function(t,e){if("complex64"===t.dtype){var n=this.texData.get(t.dataId),r=this.texData.get(e.dataId),o=new pi(fi,t.shape,e.shape),a=new pi(di,t.shape,e.shape),s=[this.makeComplexComponentTensorInfo(t,n.complexTensors.real),this.makeComplexComponentTensorInfo(t,n.complexTensors.imag),this.makeComplexComponentTensorInfo(e,r.complexTensors.real),this.makeComplexComponentTensorInfo(e,r.complexTensors.imag)],u=this.compileAndRun(o,s),c=this.compileAndRun(a,s),l=this.complex(u,c);return u.dispose(),c.dispose(),l}if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.multiply(t,e);if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,gi,t.dtype);var h=new bi(gi,t.shape,e.shape);return this.compileAndRun(h,[t,e],t.dtype)},o.prototype.batchNormalization=function(t,e,n,r,o,a){var s=[t,e,n],u=null;null!=a&&(u=a.shape,s.push(a));var c=null;if(null!=o&&(c=o.shape,s.push(o)),i().getBool("WEBGL_PACK_NORMALIZATION")){var l=new hi(t.shape,e.shape,n.shape,u,c,r);return this.compileAndRun(l,s)}var h=new li(t.shape,e.shape,n.shape,u,c,r);return this.compileAndRun(h,s)},o.prototype.localResponseNormalization4D=function(t,e,n,r,o){var a=i().getBool("WEBGL_PACK_NORMALIZATION")?new ks(t.shape,e,n,r,o):new Rs(t.shape,e,n,r,o);return this.compileAndRun(a,[t])},o.prototype.LRNGrad=function(t,e,n,r,o,a,i){var s=new Is(e.shape,r,o,a,i);return this.compileAndRun(s,[e,n,t])},o.prototype.tile=function(t,e){if("string"===t.dtype){var n=this.readSync(t.dataId).map((function(t){return ot(t)}));return Pa(er(t.shape,t.dtype,n),e)}var r=new nu(t.shape,e);return this.compileAndRun(r,[t])},o.prototype.pad=function(t,e,n){var r=i().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Os(t.shape,e,n):new _s(t.shape,e,n);return this.compileAndRun(r,[t])},o.prototype.transpose=function(t,e){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.transpose(t,e);var n=i().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new ou(t.shape,e):new ru(t.shape,e);return this.compileAndRun(n,[t])},o.prototype.gather=function(t,e,n){if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.gather(t,e,n);var r=new es(t.shape,e.size,n);return this.compileAndRun(r,[t,e])},o.prototype.batchToSpaceND=function(t,e,n){C(t.rank<=4,(function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"}));var r=e.reduce((function(t,e){return t*e})),o=xr(t.shape,e,r),a=br(o.length,e.length),i=wr(t.shape,e,r),s=Cr(n,e.length),u=Er(i,n,e.length);return t.reshape(o).transpose(a).reshape(i).slice(s,u)},o.prototype.spaceToBatchND=function(t,e,n){C(t.rank<=4,(function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"}));var r=e.reduce((function(t,e){return t*e})),o=[[0,0]];o.push.apply(o,n);for(var a=1+e.length;a<t.shape.length;++a)o.push([0,0]);var i=t.pad(o),s=xr(i.shape,e,r,!1),u=br(s.length,e.length,!1),c=wr(i.shape,e,r,!1);return i.reshape(s).transpose(u).reshape(c)},o.prototype.reduce=function(t,e,n){var r=t.shape[0],o=t.shape[1],a=Po(o),i=new Ps({windowSize:a,inSize:o,batchSize:r},e),s=this.compileAndRun(i,[t],n);return 1===s.shape[1]?s:this.reduce(s,e,n)},o.prototype.argReduce=function(t,e,n){void 0===n&&(n=null);var r=t.shape[0],o=t.shape[1];null!=n&&(r=n.shape[0],o=n.shape[1]);var a=Po(o),i=new za({windowSize:a,inSize:o,batchSize:r},e,null==n),s=[t];null!=n&&s.push(n);var u=this.compileAndRun(i,s,"int32");return 1===u.shape[1]?u:this.argReduce(t,e,u)},o.prototype.argReducePacked=function(t,e,n){void 0===n&&(n=null);var r=null!=n?n.shape:t.shape,o=Po(r[r.length-1]),a=new si(r,o,e,null==n),i=null==n?[t]:[t,n],s=this.compileAndRun(a,i,"int32");return s.rank===t.rank?this.argReducePacked(t,e,s):s},o.prototype.sum=function(t,e){Cn("sum",e,t.rank);var n=bn(t.shape,e),r=n[0],o=k(n[1]),a=t.as2D(-1,o),i=Dt(t.dtype);return this.reduce(a,"sum",i).reshape(r)},o.prototype.prod=function(t,e){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.prod(t,e);var n=bn(t.shape,e),r=n[0],o=k(n[1]),a=t.as2D(-1,o),i=Dt(t.dtype);return this.reduce(a,"prod",i).reshape(r)},o.prototype.unsortedSegmentSum=function(t,e,n){var r=0,o=En([r],t.rank),a=t;null!=o&&(a=t.transpose(o),r=In(1,t.rank)[0]);var i=function(t,e,n){for(var r=[],o=t.length,a=0;a<o;a++)a!==e?r.push(t[a]):r.push(n);return r}(a.shape,r,n),s=k([a.shape[r]]),u=a.as2D(-1,s),c=Dt(t.dtype),l=this.segOpCompute(u,"unsortedSegmentSum",e,c,n).reshape(i);return null!=o&&(l=l.transpose(Rn(o))),l},o.prototype.segOpCompute=function(t,e,n,r,o){var a=t.shape[0],i=t.shape[1],s=function(t,e){var n,r=!1;for(t<=Bo?(n=t,r=!0):n=Y(t,Math.floor(Math.sqrt(t)));!r;)n>e||n===t?r=!0:n=Y(t,n+1);return n}(i,o),u=new js({windowSize:s,inSize:i,batchSize:a,numSegments:o},e),c=this.compileAndRun(u,[t,n],r);return c.shape[1]===o?c:(n=Kn(0,o).tile([i/s]),this.segOpCompute(c,e,n,r,o))},o.prototype.argMinMaxReduce=function(t,e,n){var r=[e];if(Cn("arg"+n.charAt(0).toUpperCase()+n.slice(1),r,t.rank),!i().getBool("WEBGL_PACK_REDUCE")||t.rank<=2){var o=bn(t.shape,r),a=o[0],s=k(o[1]),u=t.as2D(-1,s);return this.argReduce(u,n).reshape(a)}return this.argReducePacked(t,n)},o.prototype.argMin=function(t,e){return this.argMinMaxReduce(t,e,"min")},o.prototype.argMax=function(t,e){return this.argMinMaxReduce(t,e,"max")},o.prototype.cumsum=function(t,e,n,r){if(e!==t.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(t.rank-1)+" but got axis="+e);var o=new Vi(t.shape,n,r);return this.compileAndRun(o,[t])},o.prototype.equal=function(t,e){if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(equal(a, b));\n","bool");var n=new bi("return float(a == b);",t.shape,e.shape);return this.compileAndRun(n,[t,e],"bool")},o.prototype.notEqual=function(t,e){if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(notEqual(a, b));\n","bool");var n=new bi("return float(a != b);",t.shape,e.shape);return this.compileAndRun(n,[t,e],"bool")},o.prototype.less=function(t,e){if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.less(t,e);if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(lessThan(a, b));\n","bool");var n=new bi("return float(a < b);",t.shape,e.shape);return this.compileAndRun(n,[t,e],"bool")},o.prototype.lessEqual=function(t,e){if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(lessThanEqual(a, b));\n","bool");var n=new bi("return float(a <= b);",t.shape,e.shape);return this.compileAndRun(n,[t,e],"bool")},o.prototype.greater=function(t,e){if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.greater(t,e);if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(greaterThan(a, b));\n","bool");var n=new bi("return float(a > b);",t.shape,e.shape);return this.compileAndRun(n,[t,e],"bool")},o.prototype.greaterEqual=function(t,e){if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(greaterThanEqual(a, b));\n","bool");var n=new bi("return float(a >= b);",t.shape,e.shape);return this.compileAndRun(n,[t,e],"bool")},o.prototype.logicalNot=function(t){var e=new su(t.shape,"return float(!(x >= 1.0));");return this.compileAndRun(e,[t])},o.prototype.logicalAnd=function(t,e){if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(\n    vec4(greaterThanEqual(a, vec4(1.0))) *\n    vec4(greaterThanEqual(b, vec4(1.0))));\n","bool");var n=new bi("return float(a >= 1.0 && b >= 1.0);",t.shape,e.shape);return this.compileAndRun(n,[t,e],"bool")},o.prototype.logicalOr=function(t,e){if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return min(\n    vec4(greaterThanEqual(a, vec4(1.0))) +\n    vec4(greaterThanEqual(b, vec4(1.0))),\n    vec4(1.0));\n","bool");var n=new bi("return float(a >= 1.0 || b >= 1.0);",t.shape,e.shape);return this.compileAndRun(n,[t,e],"bool")},o.prototype.select=function(t,e,n){var r=new Xs(t.rank,e.shape,e.rank);return this.compileAndRun(r,[t,e,n],Tt(e.dtype,n.dtype))},o.prototype.where=function(t){dn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var e=t.dataSync();return Wa(t.shape,e)},o.prototype.topk=function(t,e,n){return La(t.dataSync(),t.shape,t.dtype,e)},o.prototype.min=function(t,e){Cn("min",e,t.rank);var n=bn(t.shape,e),r=n[0],o=k(n[1]),a=t.as2D(-1,o);return this.reduce(a,"min",a.dtype).reshape(r)},o.prototype.minimum=function(t,e){if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.minimum(t,e);var n=i().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ei("\n  vec4 result = vec4(min(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",t.shape,e.shape):new bi("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return min(a, b);\n",t.shape,e.shape);return this.compileAndRun(n,[t,e])},o.prototype.mod=function(t,e){var n=i().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ei("\n  vec4 result = mod(a, b);\n  vec4 isNaN = vec4(equal(b, vec4(0.0)));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",t.shape,e.shape):new bi("if (b == 0.0) return NAN;\n  return mod(a, b);",t.shape,e.shape);return this.compileAndRun(n,[t,e])},o.prototype.max=function(t,e){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.max(t,e);Cn("max",e,t.rank);var n=bn(t.shape,e),r=n[0],o=k(n[1]),a=t.as2D(-1,o);return this.reduce(a,"max",a.dtype).reshape(r)},o.prototype.maximum=function(t,e){if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.maximum(t,e);var n=i().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ei("\n  vec4 result = vec4(max(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",t.shape,e.shape):new bi("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return max(a, b);\n",t.shape,e.shape);return this.compileAndRun(n,[t,e])},o.prototype.all=function(t,e){Cn("all",e,t.rank);var n=bn(t.shape,e),r=n[0],o=k(n[1]),a=t.as2D(-1,o);return this.reduce(a,"all",a.dtype).reshape(r)},o.prototype.any=function(t,e){Cn("any",e,t.rank);var n=bn(t.shape,e),r=n[0],o=k(n[1]),a=t.as2D(-1,o);return this.reduce(a,"any",a.dtype).reshape(r)},o.prototype.floorDiv=function(t,e){if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  ivec4 ia = round(a);\n  ivec4 ib = round(b);\n  bvec4 cond = notEqual(ib, ivec4(0));\n  ivec4 result = ivec4(0);\n  vec4 s = sign(a) * sign(b);\n\n  // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n  if (cond[0]) {\n    result[0] = idiv(ia[0], ib[0], s[0]);\n  }\n  if (cond[1]) {\n    result[1] = idiv(ia[1], ib[1], s[1]);\n  }\n  if (cond[2]) {\n    result[2] = idiv(ia[2], ib[2], s[2]);\n  }\n  if (cond[3]) {\n    result[3] = idiv(ia[3], ib[3], s[3]);\n  }\n  return vec4(result);\n","int32");var n=new bi("\n  float s = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  if (ib != 0) {\n    // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n    return float(idiv(ia, ib, s));\n  } else {\n    return NAN;\n  }\n",t.shape,e.shape);return this.compileAndRun(n,[t,e],"int32")},o.prototype.add=function(t,e){if("complex64"===t.dtype&&"complex64"===e.dtype)return this.complexSeparableBinaryOp(t,e,vi);if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.add(t,e);var n=Tt(t.dtype,e.dtype);if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,vi,n);var r=new bi(vi,t.shape,e.shape);return this.compileAndRun(r,[t,e],n)},o.prototype.packedUnaryOp=function(t,e,n){var r=new _u(t.shape,e);return this.compileAndRun(r,[t],n)},o.prototype.packedBinaryOp=function(t,e,n,r,o){void 0===o&&(o=!1);var a=new Ei(n,t.shape,e.shape,o);return this.compileAndRun(a,[t,e],r)},o.prototype.complexSeparableBinaryOp=function(t,e,n){var r=this,o=this.texData.get(t.dataId),a=this.texData.get(e.dataId),i=[[o.complexTensors.real,a.complexTensors.real],[o.complexTensors.imag,a.complexTensors.imag]].map((function(o){var a=o[0],i=o[1],s=r.makeComplexComponentTensorInfo(t,a),u=r.makeComplexComponentTensorInfo(e,i),c=new bi(n,t.shape,e.shape);return r.compileAndRun(c,[s,u],Tt(a.dtype,i.dtype))})),s=i[0],u=i[1],c=this.complex(s,u);return s.dispose(),u.dispose(),c},o.prototype.makeComplexComponentTensorInfo=function(t,e){return{dataId:e.dataId,dtype:e.dtype,shape:t.shape}},o.prototype.addN=function(t){if(1===t.length)return t[0];if(t.length>i().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var e=Math.floor(t.length/2),n=this.addN(t.slice(0,e)),r=this.addN(t.slice(e));return this.addN([n,r])}var o=t.map((function(t){return t.dtype})).reduce((function(t,e){return Tt(t,e)})),a=t.map((function(t){return t.shape})),s=i().getBool("WEBGL_PACK")?new Va(t[0].shape,a):new Ua(t[0].shape,a);return this.compileAndRun(s,t,o)},o.prototype.subtract=function(t,e){if("complex64"===t.dtype&&"complex64"===e.dtype)return this.complexSeparableBinaryOp(t,e,mi);if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.subtract(t,e);var n=Tt(t.dtype,e.dtype);if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,mi,t.dtype);var r=new bi(mi,t.shape,e.shape);return this.compileAndRun(r,[t,e],n)},o.prototype.pow=function(t,e){var n=i().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ei("\n  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.\n  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));\n  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);\n  vec4 result = multiplier * pow(abs(a), b);\n\n  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS\n  bvec4 isExpZero = equal(b, vec4(0.0));\n  result.r = isExpZero.r ? 1.0 : result.r;\n  result.g = isExpZero.g ? 1.0 : result.g;\n  result.b = isExpZero.b ? 1.0 : result.b;\n  result.a = isExpZero.a ? 1.0 : result.a;\n\n  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",t.shape,e.shape):new bi("\nif(a < 0.0 && floor(b) < b){\n  return NAN;\n}\nif (b == 0.0) {\n  return 1.0;\n}\nreturn (round(mod(b, 2.0)) != 1) ?\n    pow(abs(a), b) : sign(a) * pow(abs(a), b);\n",t.shape,e.shape),r=Tt(t.dtype,e.dtype);return this.compileAndRun(n,[t,e],r)},o.prototype.ceil=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.ceil(t);if(i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,mu,t.dtype);var e=new su(t.shape,mu);return this.compileAndRun(e,[t])},o.prototype.floor=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.floor(t);if(i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,gu,t.dtype);var e=new su(t.shape,gu);return this.compileAndRun(e,[t])},o.prototype.sign=function(t){var e=new su(t.shape,"\n  if (isnan(x)) { return 0.0; }\n  return sign(x);\n");return this.compileAndRun(e,[t])},o.prototype.isNaN=function(t){var e=new su(t.shape,"return float(isnan(x));");return this.compileAndRun(e,[t],"bool")},o.prototype.isInf=function(t){var e=new su(t.shape,"return float(isinf(x));");return this.compileAndRun(e,[t],"bool")},o.prototype.isFinite=function(t){var e=new su(t.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(e,[t],"bool")},o.prototype.round=function(t){var e=new su(t.shape,"\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n");return this.compileAndRun(e,[t])},o.prototype.exp=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.exp(t);if(i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,yu,t.dtype);var e=new su(t.shape,yu);return this.compileAndRun(e,[t])},o.prototype.expm1=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.expm1(t);if(i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,xu,t.dtype);var e=new su(t.shape,xu);return this.compileAndRun(e,[t])},o.prototype.softmax=function(t,e){var n=O([e],t.shape),r=this.max(t,n),o=wn(r.shape,n),a=this.subtract(t,r.reshape(o)),i=this.exp(a),s=this.sum(i,n).reshape(o);return _o(i,s)},o.prototype.log=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.log(t);if(i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,"\n  vec4 result = log(x);\n  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));\n  result.r = isNaN.r == 1.0 ? NAN : result.r;\n  result.g = isNaN.g == 1.0 ? NAN : result.g;\n  result.b = isNaN.b == 1.0 ? NAN : result.b;\n  result.a = isNaN.a == 1.0 ? NAN : result.a;\n\n  return result;\n",t.dtype);var e=new su(t.shape,"if (x < 0.0) return NAN;\n  return log(x);");return this.compileAndRun(e,[t])},o.prototype.log1p=function(t){var e=new su(t.shape,"return log(1.0 + x);");return this.compileAndRun(e,[t])},o.prototype.sqrt=function(t){var e=new su(t.shape,"return sqrt(x);");return this.compileAndRun(e,[t])},o.prototype.rsqrt=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.rsqrt(t);var e=new su(t.shape,"return inversesqrt(x);");return this.compileAndRun(e,[t])},o.prototype.reciprocal=function(t){var e=new su(t.shape,"return 1.0 / x;");return this.compileAndRun(e,[t])},o.prototype.relu=function(t){var e;return e=i().getBool("WEBGL_PACK")?new _u(t.shape,Du):new su(t.shape,hu),this.compileAndRun(e,[t])},o.prototype.relu6=function(t){var e;return e=i().getBool("WEBGL_PACK")?new _u(t.shape,Nu):new su(t.shape,fu),this.compileAndRun(e,[t])},o.prototype.prelu=function(t,e){var n=i().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ei(Ci,t.shape,e.shape):new bi(xi,t.shape,e.shape);return this.compileAndRun(n,[t,e])},o.prototype.elu=function(t){if(i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Fu,t.dtype);var e=new su(t.shape,du);return this.compileAndRun(e,[t])},o.prototype.eluDer=function(t,e){var n=i().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ei("\n  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));\n  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));\n",t.shape,e.shape):new bi("return (b >= 1.0) ? a : a * (b + 1.0);",t.shape,e.shape);return this.compileAndRun(n,[t,e])},o.prototype.selu=function(t){var e=new su(t.shape,pu);return this.compileAndRun(e,[t])},o.prototype.int=function(t){var e=new su(t.shape,"return float(int(x));");return this.compileAndRun(e,[t],"int32")},o.prototype.clip=function(t,e,n){var r,o=(r=i().getBool("WEBGL_PACK_CLIP")?new Ii(t.shape):new Ri(t.shape)).getCustomSetupFunc(e,n);return this.compileAndRun(r,[t],null,o)},o.prototype.abs=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.abs(t);if(i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,lu,t.dtype);var e=new su(t.shape,lu);return this.compileAndRun(e,[t])},o.prototype.complexAbs=function(t){var e=this.texData.get(t.dataId),n=new ki(t.shape),r=[this.makeComplexComponentTensorInfo(t,e.complexTensors.real),this.makeComplexComponentTensorInfo(t,e.complexTensors.imag)];return this.compileAndRun(n,r)},o.prototype.sigmoid=function(t){var e=new su(t.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(e,[t])},o.prototype.softplus=function(t){var e=new su(t.shape,"\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n");return this.compileAndRun(e,[t])},o.prototype.sin=function(t){var e=new su(t.shape,bu);return this.compileAndRun(e,[t])},o.prototype.cos=function(t){var e=new su(t.shape,wu);return this.compileAndRun(e,[t])},o.prototype.tan=function(t){var e=new su(t.shape,"return tan(x);");return this.compileAndRun(e,[t])},o.prototype.asin=function(t){var e=new su(t.shape,Cu);return this.compileAndRun(e,[t])},o.prototype.acos=function(t){var e=new su(t.shape,Eu);return this.compileAndRun(e,[t])},o.prototype.atan=function(t){var e=new su(t.shape,Ru);return this.compileAndRun(e,[t])},o.prototype.atan2=function(t,e){var n=i().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ei("\n  vec4 result = atan(a, b);\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",t.shape,e.shape):new bi("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return atan(a, b);\n",t.shape,e.shape);return this.compileAndRun(n,[t,e])},o.prototype.sinh=function(t){var e=new su(t.shape,"\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n");return this.compileAndRun(e,[t])},o.prototype.cosh=function(t){var e=new su(t.shape,"\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n");return this.compileAndRun(e,[t])},o.prototype.tanh=function(t){var e=new su(t.shape,"\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n");return this.compileAndRun(e,[t])},o.prototype.asinh=function(t){var e=new su(t.shape,Iu);return this.compileAndRun(e,[t])},o.prototype.acosh=function(t){var e=new su(t.shape,ku);return this.compileAndRun(e,[t])},o.prototype.atanh=function(t){var e=new su(t.shape,Su);return this.compileAndRun(e,[t])},o.prototype.erf=function(t){var e=new su(t.shape,'\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  float p = 0.3275911;\n  float a1 = 0.254829592;\n  float a2 = -0.284496736;\n  float a3 = 1.421413741;\n  float a4 = -1.453152027;\n  float a5 = 1.061405429;\n\n  float sign = sign(x);\n  x = abs(x);\n  float t = 1.0 / (1.0 + p * x);\n  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));\n');return this.compileAndRun(e,[t])},o.prototype.step=function(t,e){var n=new su(t.shape,function(t){return void 0===t&&(t=0),uu+"\n    return x > 0.0 ? 1.0 : float("+t+");\n  "}(e));return this.compileAndRun(n,[t])},o.prototype.conv2dByMatMul=function(t,e,n,r,o,a){var s=t.shape,u=this.texData.get(t.dataId),c=n.inChannels,l=s[0]*s[1]*s[2],h=n.outChannels,f="channelsLast"===n.dataFormat,d=(1===l||1===h)&&c>1e3,p=s[2]%2!=0&&!!u.isPacked;if(d||!i().getBool("WEBGL_LAZILY_UNPACK")||!i().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!p){var v=f?s[0]*s[1]*s[2]:s[0]*s[2]*s[3],m=this.reshape(t,[1,v,n.inChannels]),g=this.reshape(e,[1,n.inChannels,n.outChannels]);return this.reshape(this.fusedBatchMatMul({a:m,b:g,transposeA:!1,transposeB:!1,bias:r,activation:o,preluActivationWeights:a}),n.outShape)}var y=f?s[0]*s[1]*(s[2]+1):s[0]*s[2]*(s[3]+1),x={dataId:t.dataId,shape:[1,y,n.inChannels],dtype:t.dtype},b=u.shape;u.shape=u.shape.slice(),u.shape[u.shape.length-2]++,C(_e(u.shape,x.shape),(function(){return"packed reshape "+u.shape+" to "+x.shape+" isn't free"}));var w=this.reshape(e,[1,n.inChannels,n.outChannels]),E=this.fusedBatchMatMul({a:x,b:w,transposeA:!1,transposeB:!1,bias:r,activation:o,preluActivationWeights:a}),R=this.texData.get(E.dataId);return C(R.isPacked,(function(){return"batchMatMul result is expected to be packed"})),u.shape=b,R.shape=n.outShape,Lt.makeTensorFromDataId(E.dataId,n.outShape,E.dtype)},o.prototype.conv2dWithIm2Row=function(t,e,n,r,o,a){var i=n.filterWidth,s=n.filterHeight,u=n.inChannels,c=n.outWidth,l=n.outHeight,h="channelsLast"===n.dataFormat,f=i*s*u,d=l*c,p=[f,d],v=t.squeeze([0]),m=e.reshape([1,f,-1]),g=new Es(p,v.shape,n),y=this.compileAndRun(g,[v]).reshape([1,p[0],p[1]]),x=null!=r,b=null!=a,w=o?Bu(o,!0):null,C=new Ts(y.shape,[1,d,n.outChannels],!0,!1,x,w,b),E=[y,m];r&&E.push(r),b&&E.push(a);var R=this.compileAndRun(C,E);return h?R.reshape([1,l,c,n.outChannels]):R.reshape([1,n.outChannels,l,c])},o.prototype.fusedConv2d=function(t){var e=t.input,n=t.filter,r=t.convInfo,o=t.bias,a=t.activation,s=t.preluActivationWeights;if(1===r.filterHeight&&1===r.filterWidth&&1===r.dilationHeight&&1===r.dilationWidth&&1===r.strideHeight&&1===r.strideWidth&&("SAME"===r.padInfo.type||"VALID"===r.padInfo.type))return this.conv2dByMatMul(e,n,r,o,a,s);if(i().getBool("WEBGL_CONV_IM2COL")&&1===e.shape[0])return this.conv2dWithIm2Row(e,n,r,o,a,s);var u=null!=o,c=null!=s,l=a?Bu(a,!1):null,h=new Bi(r,u,l,c),f=[e,n];return o&&f.push(o),s&&f.push(s),this.compileAndRun(h,f)},o.prototype.conv2d=function(t,e,n){if(1===n.filterHeight&&1===n.filterWidth&&1===n.dilationHeight&&1===n.dilationWidth&&1===n.strideHeight&&1===n.strideWidth&&("SAME"===n.padInfo.type||"VALID"===n.padInfo.type))return this.conv2dByMatMul(t,e,n);if(i().getBool("WEBGL_CONV_IM2COL")&&1===t.shape[0])return this.conv2dWithIm2Row(t,e,n);var r=new Bi(n);return this.compileAndRun(r,[t,e])},o.prototype.conv2dDerInput=function(t,e,n){var r=new Ni(n);return this.compileAndRun(r,[t,e])},o.prototype.conv2dDerFilter=function(t,e,n){var r=new Di(n);return this.compileAndRun(r,[t,e])},o.prototype.fusedDepthwiseConv2D=function(t){var e,n=t.input,r=t.filter,o=t.convInfo,a=t.bias,s=t.activation,u=t.preluActivationWeights,c=i().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1,l=s?Bu(s,c):null,h=[n,r],f=null!=a,d=null!=u;return f&&h.push(a),d&&h.push(u),c?(e=new Wi(o,f,l,d),this.compileAndRun(e,h)):(e=new Li(o,f,l,d),this.compileAndRun(e,h))},o.prototype.depthwiseConv2D=function(t,e,n){var r;return i().getBool("WEBGL_PACK_DEPTHWISECONV")&&n.strideWidth<=2&&n.outChannels/n.inChannels==1?(r=new Wi(n),this.compileAndRun(r,[t,e])):(r=new Li(n),this.compileAndRun(r,[t,e]))},o.prototype.depthwiseConv2DDerInput=function(t,e,n){var r=new Mi(n);return this.compileAndRun(r,[t,e])},o.prototype.depthwiseConv2DDerFilter=function(t,e,n){var r=new Oi(n);return this.compileAndRun(r,[t,e])},o.prototype.conv3d=function(t,e,n){var r=new Pi(n);return this.compileAndRun(r,[t,e])},o.prototype.conv3dDerInput=function(t,e,n){var r=new _i(n);return this.compileAndRun(r,[t,e])},o.prototype.conv3dDerFilter=function(t,e,n){var r=new Fi(n);return this.compileAndRun(r,[t,e])},o.prototype.maxPool=function(t,e){var n=new Ms(e,"max",!1);return this.compileAndRun(n,[t])},o.prototype.avgPool=function(t,e){var n=new Ms(e,"avg",!1);return this.compileAndRun(n,[t],"float32")},o.prototype.maxPoolBackprop=function(t,e,n,r){var o=new Ms(r,"max",!0),a=this.compileAndRun(o,[e]),i=new Ss(r),s=this.compileAndRun(i,[t,a],e.dtype);return a.dispose(),s},o.prototype.avgPoolBackprop=function(t,e,n){var r=new ui(n);return this.compileAndRun(r,[t],e.dtype)},o.prototype.cast=function(t,e){return ba(t,e,this)},o.prototype.unstack=function(t,e){for(var n=t.shape[e],r=new Array(t.rank-1),o=0,a=0;a<t.rank;a++)a!==e&&(r[o++]=t.shape[a]);var i=new Array(t.rank).fill(0),s=t.shape.slice();s[e]=1;var u=new Array(n);for(a=0;a<u.length;a++)i[e]=a,u[a]=this.slice(t,i,s).reshape(r);return u},o.prototype.avgPool3d=function(t,e){var n=new Bs(e,"avg",!1);return this.compileAndRun(n,[t],"float32")},o.prototype.avgPool3dBackprop=function(t,e,n){var r=new ci(n);return this.compileAndRun(r,[t],e.dtype)},o.prototype.maxPool3d=function(t,e){var n=new Bs(e,"max",!1);return this.compileAndRun(n,[t],"float32")},o.prototype.maxPool3dBackprop=function(t,e,n,r){var o=new Bs(r,"max",!0),a=this.compileAndRun(o,[e]),i=new As(r),s=this.compileAndRun(i,[t,a],e.dtype);return a.dispose(),s},o.prototype.reshape=function(t,e){var n=this.texData.get(t.dataId);if(n.isPacked&&!_e(t.shape,e)&&(null===n.texture||!_e(n.shape,e))){var r=this.packedReshape(t,e);return Lt.makeTensorFromDataId(r.dataId,r.shape,r.dtype)}return wa(t,e)},o.prototype.resizeBilinear=function(t,e,n,r){var o=i().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Vs(t.shape,e,n,r):new Us(t.shape,e,n,r);return this.compileAndRun(o,[t],"float32")},o.prototype.resizeBilinearBackprop=function(t,e,n){var r=new Ws(t,e,n);return this.compileAndRun(r,[t])},o.prototype.resizeNearestNeighbor=function(t,e,n,r){var o=new Gs(t.shape,e,n,r);return this.compileAndRun(o,[t])},o.prototype.resizeNearestNeighborBackprop=function(t,e,n){var r=new zs(t,e,n);return this.compileAndRun(r,[t])},o.prototype.multinomial=function(t,e,n,r){var o=e?t:ra(t),a=o.shape[0],i=o.shape[1],s=new Ds(a,i,n),u=s.getCustomSetupFunc(r);return this.compileAndRun(s,[o],"int32",u)},o.prototype.oneHot=function(t,e,n,r){var o=new Ns(t.size,e,n,r);return this.compileAndRun(o,[t])},o.prototype.diag=function(t){var e=new Ki(t.size);return this.compileAndRun(e,[t])},o.prototype.nonMaxSuppression=function(t,e,n,r,o){return dn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),Da(t.dataSync(),e.dataSync(),n,r,o)},o.prototype.cropAndResize=function(t,e,n,r,o,a){var i=new Ui(t.shape,e.shape,r,o,a);return this.compileAndRun(i,[t,e,n],"float32")},o.prototype.depthToSpace=function(t,e,n){C(e>1,(function(){return"blockSize should be > 1 for depthToSpace, but was: "+e}));var r=t.shape[0],o="NHWC"===n?t.shape[1]:t.shape[2],a="NHWC"===n?t.shape[2]:t.shape[3],i="NHWC"===n?t.shape[3]:t.shape[1],s=o*e,u=a*e,c=i/(e*e),l=new qi("NHWC"===n?[r,s,u,c]:[r,c,s,u],e,n);return this.compileAndRun(l,[t])},o.prototype.split=function(t,e,n){return Ba(t,e,n)},o.prototype.scatterND=function(t,e,n){var r=Uo(0,t,n),o=r.sliceRank,a=r.numUpdates,i=r.sliceSize,s=r.strides,u=r.outputSize,c=[u/i,i],l=t.reshape([a,o]),h=e.reshape([a,i]);if(0===u)return wa(Fn([]),n);var f=On(0),d=new Ks(a,o,l.rank,h.rank,s,c);return this.compileAndRun(d,[h,l,f]).reshape(n)},o.prototype.sparseToDense=function(t,e,n,r){var o=Uo(0,t,n),a=o.sliceRank,i=o.numUpdates,s=o.strides,u=o.outputSize,c=new Ks(i,a,t.rank,e.rank,s,[u,1],!1);return this.compileAndRun(c,[e,t,r]).reshape(n)},o.prototype.fft=function(t){return this.fftImpl(t,!1)},o.prototype.ifft=function(t){return this.fftImpl(t,!0)},o.prototype.fftImpl=function(t,e){var n=this.texData.get(t.dataId),r=new Zi(Qi,t.shape,e),o=new Zi(Ji,t.shape,e),a=[this.makeComplexComponentTensorInfo(t,n.complexTensors.real),this.makeComplexComponentTensorInfo(t,n.complexTensors.imag)],i=this.compileAndRun(r,a),s=this.compileAndRun(o,a),u=this.complex(i,s).as2D(t.shape[0],t.shape[1]);return i.dispose(),s.dispose(),u},o.prototype.gatherND=function(t,e){var n=e.shape,r=n[n.length-1],o=Oo(t,e),a=o[0],i=o[1],s=o[2],u=o[3],c=e.reshape([i,r]),l=t.reshape([t.size/s,s]),h=new ns(r,u,[i,s]);return this.compileAndRun(h,[l,c]).reshape(a)},o.prototype.fill=function(t,e,n){if("string"===(n=n||j(e))){var r=P(n,k(t));return r.fill(e),Lt.makeTensor(r,t,n,this)}var o=new ts(t,e),a=o.getCustomSetupFunc(e);return this.compileAndRun(o,[],n,a)},o.prototype.onesLike=function(t){if("string"===t.dtype)throw new Error("onesLike is not supported under string dtype");return this.fill(t.shape,1,t.dtype)},o.prototype.zerosLike=function(t){return this.fill(t.shape,"string"===t.dtype?"":0,t.dtype)},o.prototype.linspace=function(t,e,n){return Ca(t,e,n)},o.prototype.makeTensorInfo=function(t,e){var n=this.write(null,t,e);return this.texData.get(n).usage=null,{dataId:n,shape:t,dtype:e}},o.prototype.makeOutput=function(t,e){var n=this.makeTensorInfo(t,e).dataId;return Lt.makeTensorFromDataId(n,t,e,this)},o.prototype.unpackTensor=function(t){var e=new Ou(t.shape);return this.runWebGLProgram(e,[t],t.dtype)},o.prototype.packTensor=function(t){var e=new Fs(t.shape);return this.runWebGLProgram(e,[t],t.dtype,null,!0)},o.prototype.packedReshape=function(t,e){var n=[Ae(t.shape)].concat(Te(t.shape)),r={dtype:t.dtype,shape:n,dataId:t.dataId},o=[Ae(e)].concat(Te(e)),a=new Ls(o,n),i=this.runWebGLProgram(a,[r],t.dtype,null,!0);return{dataId:i.dataId,shape:e,dtype:i.dtype}},o.prototype.decode=function(t){var e,n=this.texData.get(t),r=n.isPacked,o=n.shape,a=n.dtype,i=De(o);e=r?new Hi(i):new Gi(i);return{dtype:a,shape:o,dataId:this.runWebGLProgram(e,[{shape:i,dtype:a,dataId:t}],a,null,!0).dataId}},o.prototype.runWebGLProgram=function(t,e,n,r,o){var a=this;void 0===o&&(o=!1);var s=this.makeTensorInfo(t.outputShape,n),u=this.texData.get(s.dataId);if(t.packedOutput&&(u.isPacked=!0),t.outPackingScheme===Vt.DENSE){var c=Yt(t.outputShape);u.texShape=c.map((function(t){return 2*t}))}if(null!=t.outTexUsage&&(u.usage=t.outTexUsage),0===k(s.shape))return u.values=B(s.dtype,0),s;var l=[],h=e.map((function(e){if("complex64"===e.dtype)throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var n=a.texData.get(e.dataId);if(null==n.texture){if(!t.packedInputs&&k(e.shape)<=i().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:e.shape,texData:null,isUniform:!0,uniformValues:n.values};t.packedInputs&&(n.isPacked=!0,n.shape=e.shape)}else if(!!n.isPacked!=!!t.packedInputs)e=n.isPacked?a.unpackTensor(e):a.packTensor(e),l.push(e),n=a.texData.get(e.dataId);else if(n.isPacked&&!_e(n.shape,e.shape)){var r=e,o=e.shape;e.shape=n.shape,e=a.packedReshape(e,o),l.push(e),n=a.texData.get(e.dataId),r.shape=o}return a.uploadToGPU(e.dataId),{shape:e.shape,texData:n,isUniform:!1}}));this.uploadToGPU(s.dataId);var f,d={shape:s.shape,texData:u,isUniform:!1},p=function(t,e,n){var r="";e.concat(n).forEach((function(t){var e=null!=t.texData&&null!=t.texData.slice&&t.texData.slice.flatOffset>0,n=t.isUniform?"uniform":t.texData.texShape;r+=t.shape+"_"+n+"_"+e}));var o=t.userCode,a=t.constructor.name;return a+="_"+r+"_"+o}(t,h,d),v=this.getAndSaveBinary(p,(function(){return function(t,e,n,r){var o=e.userCode,a=n.map((function(t,n){var r={logicalShape:t.shape,texShape:t.isUniform?null:t.texData.texShape,isUniform:t.isUniform,isPacked:!t.isUniform&&t.texData.isPacked,flatOffset:null};return null!=t.texData&&null!=t.texData.slice&&t.texData.slice.flatOffset>0&&(r.flatOffset=t.texData.slice.flatOffset),{name:e.variableNames[n],shapeInfo:r}})),s=a.map((function(t){return t.shapeInfo})),u={logicalShape:r.shape,texShape:r.texData.texShape,isUniform:!1,isPacked:r.texData.isPacked,flatOffset:null},c=Ya(a,u,o,e.packedInputs),l=t.createProgram(c),h=null,f=t.getUniformLocation(l,"NAN",!1);1===i().getNumber("WEBGL_VERSION")&&(h=t.getUniformLocation(l,"INFINITY",!1));for(var d={},p=0;p<e.variableNames.length;p++){var v=e.variableNames[p];d[v]=t.getUniformLocation(l,v,!1),d["offset"+v]=t.getUniformLocation(l,"offset"+v,!1)}return{program:e,source:c,webGLProgram:l,uniformLocations:d,inShapeInfos:s,outShapeInfo:u,infLoc:h,nanLoc:f}}(a.gpgpu,t,h,d)})),m=null!=this.activeTimers;if(m&&(f=this.startTimer()),function(t,e,n,r,o){Cs(e.inShapeInfos,n),Cs([e.outShapeInfo],[r]);var a=r.texData.texture,s=r.texData.texShape;r.texData.isPacked?t.setOutputPackedMatrixTexture(a,s[0],s[1]):t.setOutputMatrixTexture(a,s[0],s[1]),t.setProgram(e.webGLProgram),1===i().getNumber("WEBGL_VERSION")&&null!==e.infLoc&&t.gl.uniform1f(e.infLoc,1/0),null!==e.nanLoc&&t.gl.uniform1f(e.nanLoc,NaN),n.forEach((function(n,r){var o=e.program.variableNames[r],a=e.uniformLocations[o],i=e.uniformLocations["offset"+o];if(null!=a)if(n.isUniform)if(k(n.shape)<2)t.gl.uniform1f(a,n.uniformValues[0]);else{var s=n.uniformValues;s instanceof Float32Array||(s=new Float32Array(s)),t.gl.uniform1fv(a,s)}else null!=n.texData.slice&&null!=i&&t.gl.uniform1i(i,n.texData.slice.flatOffset),t.setInputMatrixTexture(n.texData.texture,a,r)})),null!=o&&o(t,e.webGLProgram),t.executeProgram()}(this.gpgpu,v,h,d,r),l.forEach((function(t){return a.disposeData(t.dataId)})),m&&(f=this.endTimer(f),this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime(f)})),!i().getBool("WEBGL_LAZILY_UNPACK")&&u.isPacked&&!1===o){var g=this.unpackTensor(s);return this.disposeData(s.dataId),g}return s},o.prototype.compileAndRun=function(t,e,n,r,o){void 0===o&&(o=!1),n=n||e[0].dtype;var a=this.runWebGLProgram(t,e,n,r,o);return Lt.makeTensorFromDataId(a.dataId,a.shape,a.dtype)},o.prototype.getAndSaveBinary=function(t,e){return t in this.binaryCache||(this.binaryCache[t]=e()),this.binaryCache[t]},o.prototype.getTextureManager=function(){return this.textureManager},o.prototype.dispose=function(){var t=this;if(!this.disposed){if(!i().getBool("IS_TEST"))Object.keys(this.binaryCache).forEach((function(e){t.gpgpu.deleteProgram(t.binaryCache[e].webGLProgram),delete t.binaryCache[e]}));this.textureManager.dispose(),null!=this.canvas&&"undefined"!=typeof HTMLCanvasElement&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0}},o.prototype.floatPrecision=function(){var t=this;return null==this.floatPrecisionValue&&(this.floatPrecisionValue=Ze((function(){if(!i().get("WEBGL_RENDER_FLOAT32_ENABLED")){var e=i().getBool("DEBUG");i().set("DEBUG",!1);var n=t.abs(On(1e-8)).dataSync()[0];if(i().set("DEBUG",e),n>0)return 32}return 16}))),this.floatPrecisionValue},o.prototype.epsilon=function(){return 32===this.floatPrecision()?1e-7:1e-4},o.prototype.uploadToGPU=function(t){var e,n=this.texData.get(t),r=n.shape,o=n.dtype,a=n.values,i=n.texture,s=n.usage,u=n.isPacked;if(null==i){var c,l=null!=this.activeTimers;l&&(c=et());var h=n.texShape;if(null==h&&(h=Ne(r,u),n.texShape=h),null!=a){var f=De(r),d=void 0,p=h[1],v=h[0],m=a instanceof Uint8Array;u?(p=(e=$t(h[0],h[1]))[0],v=e[1],d=new $i(f,[v,p],m)):d=new Yi(f,[v,p],m);var g=this.makeTensorInfo([v,p],o);this.texData.get(g.dataId).usage=m?zt.PIXELS:zt.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(g.dataId),p,v,a);var y=this.runWebGLProgram(d,[g],o,null,!0),x=this.texData.get(y.dataId);n.texture=x.texture,n.texShape=x.texShape,n.isPacked=x.isPacked,n.usage=x.usage,this.disposeData(g.dataId),this.texData.delete(y.dataId),n.values=null,l&&(this.uploadWaitMs+=et()-c)}else{var b=this.acquireTexture(h,s,o,u);n.texture=b}}},o.prototype.convertAndCacheOnCPU=function(t,e){var n=this.texData.get(t),r=n.dtype;return this.releaseGPUData(t),null!=e&&(n.values=function(t,e){if("float32"===e||"complex64"===e)return t;if("int32"===e||"bool"===e){for(var n="int32"===e?new Int32Array(t.length):new Uint8Array(t.length),r=0;r<n.length;++r)n[r]=Math.round(t[r]);return n}throw new Error("Unknown dtype "+e)}(e,r)),n.values},o.prototype.acquireTexture=function(t,e,n,r){if(this.numBytesInGPU+=this.computeBytes(t,n),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var o=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+o+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(t,e,r)},o.prototype.computeBytes=function(t,e){return t[0]*t[1]*z(e)},o}(ia);Wt()&&Lt.registerBackend("webgl",(function(){return new Lu}),2);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function Wu(t,e){return t(e={exports:{}},e.exports),e.exports}var Uu=Wu((function(t){!function(t,e,n){function r(t){var e,n=this,r=(e=4022871197,function(t){t=t.toString();for(var n=0;n<t.length;n++){var r=.02519603282416938*(e+=t.charCodeAt(n));r-=e=r>>>0,e=(r*=e)>>>0,e+=4294967296*(r-=e)}return 2.3283064365386963e-10*(e>>>0)});n.next=function(){var t=2091639*n.s0+2.3283064365386963e-10*n.c;return n.s0=n.s1,n.s1=n.s2,n.s2=t-(n.c=0|t)},n.c=1,n.s0=r(" "),n.s1=r(" "),n.s2=r(" "),n.s0-=r(t),n.s0<0&&(n.s0+=1),n.s1-=r(t),n.s1<0&&(n.s1+=1),n.s2-=r(t),n.s2<0&&(n.s2+=1),r=null}function o(t,e){return e.c=t.c,e.s0=t.s0,e.s1=t.s1,e.s2=t.s2,e}function a(t,e){var n=new r(t),a=e&&e.state,i=n.next;return i.int32=function(){return 4294967296*n.next()|0},i.double=function(){return i()+11102230246251565e-32*(2097152*i()|0)},i.quick=i,a&&("object"==typeof a&&o(a,n),i.state=function(){return o(n,{})}),i}e&&e.exports?e.exports=a:n&&n.amd?n((function(){return a})):this.alea=a}(0,t,!1)})),Vu=Wu((function(t){!function(t,e,n){function r(t){var e=this,n="";e.x=0,e.y=0,e.z=0,e.w=0,e.next=function(){var t=e.x^e.x<<11;return e.x=e.y,e.y=e.z,e.z=e.w,e.w^=e.w>>>19^t^t>>>8},t===(0|t)?e.x=t:n+=t;for(var r=0;r<n.length+64;r++)e.x^=0|n.charCodeAt(r),e.next()}function o(t,e){return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e}function a(t,e){var n=new r(t),a=e&&e.state,i=function(){return(n.next()>>>0)/4294967296};return i.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},i.int32=n.next,i.quick=i,a&&("object"==typeof a&&o(a,n),i.state=function(){return o(n,{})}),i}e&&e.exports?e.exports=a:n&&n.amd?n((function(){return a})):this.xor128=a}(0,t,!1)})),zu=Wu((function(t){!function(t,e,n){function r(t){var e=this,n="";e.next=function(){var t=e.x^e.x>>>2;return e.x=e.y,e.y=e.z,e.z=e.w,e.w=e.v,(e.d=e.d+362437|0)+(e.v=e.v^e.v<<4^t^t<<1)|0},e.x=0,e.y=0,e.z=0,e.w=0,e.v=0,t===(0|t)?e.x=t:n+=t;for(var r=0;r<n.length+64;r++)e.x^=0|n.charCodeAt(r),r==n.length&&(e.d=e.x<<10^e.x>>>4),e.next()}function o(t,e){return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e.v=t.v,e.d=t.d,e}function a(t,e){var n=new r(t),a=e&&e.state,i=function(){return(n.next()>>>0)/4294967296};return i.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},i.int32=n.next,i.quick=i,a&&("object"==typeof a&&o(a,n),i.state=function(){return o(n,{})}),i}e&&e.exports?e.exports=a:n&&n.amd?n((function(){return a})):this.xorwow=a}(0,t,!1)})),Gu=Wu((function(t){!function(t,e,n){function r(t){var e=this;e.next=function(){var t,n,r=e.x,o=e.i;return t=r[o],n=(t^=t>>>7)^t<<24,n^=(t=r[o+1&7])^t>>>10,n^=(t=r[o+3&7])^t>>>3,n^=(t=r[o+4&7])^t<<7,t=r[o+7&7],n^=(t^=t<<13)^t<<9,r[o]=n,e.i=o+1&7,n},function(t,e){var n,r=[];if(e===(0|e))r[0]=e;else for(e=""+e,n=0;n<e.length;++n)r[7&n]=r[7&n]<<15^e.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&0===r[n];++n);for(8==n?r[7]=-1:r[n],t.x=r,t.i=0,n=256;n>0;--n)t.next()}(e,t)}function o(t,e){return e.x=t.x.slice(),e.i=t.i,e}function a(t,e){null==t&&(t=+new Date);var n=new r(t),a=e&&e.state,i=function(){return(n.next()>>>0)/4294967296};return i.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},i.int32=n.next,i.quick=i,a&&(a.x&&o(a,n),i.state=function(){return o(n,{})}),i}e&&e.exports?e.exports=a:n&&n.amd?n((function(){return a})):this.xorshift7=a}(0,t,!1)})),Hu=Wu((function(t){!function(t,e,n){function r(t){var e=this;e.next=function(){var t,n,r=e.w,o=e.X,a=e.i;return e.w=r=r+1640531527|0,n=o[a+34&127],t=o[a=a+1&127],n^=n<<13,t^=t<<17,n^=n>>>15,t^=t>>>12,n=o[a]=n^t,e.i=a,n+(r^r>>>16)|0},function(t,e){var n,r,o,a,i,s=[],u=128;for(e===(0|e)?(r=e,e=null):(e+="\0",r=0,u=Math.max(u,e.length)),o=0,a=-32;a<u;++a)e&&(r^=e.charCodeAt((a+32)%e.length)),0===a&&(i=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,a>=0&&(i=i+1640531527|0,o=0==(n=s[127&a]^=r+i)?o+1:0);for(o>=128&&(s[127&(e&&e.length||0)]=-1),o=127,a=512;a>0;--a)r=s[o+34&127],n=s[o=o+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,s[o]=r^n;t.w=i,t.X=s,t.i=o}(e,t)}function o(t,e){return e.i=t.i,e.w=t.w,e.X=t.X.slice(),e}function a(t,e){null==t&&(t=+new Date);var n=new r(t),a=e&&e.state,i=function(){return(n.next()>>>0)/4294967296};return i.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},i.int32=n.next,i.quick=i,a&&(a.X&&o(a,n),i.state=function(){return o(n,{})}),i}e&&e.exports?e.exports=a:n&&n.amd?n((function(){return a})):this.xor4096=a}(0,t,!1)})),qu=Wu((function(t){!function(t,e,n){function r(t){var e=this,n="";e.next=function(){var t=e.b,n=e.c,r=e.d,o=e.a;return t=t<<25^t>>>7^n,n=n-r|0,r=r<<24^r>>>8^o,o=o-t|0,e.b=t=t<<20^t>>>12^n,e.c=n=n-r|0,e.d=r<<16^n>>>16^o,e.a=o-t|0},e.a=0,e.b=0,e.c=-1640531527,e.d=1367130551,t===Math.floor(t)?(e.a=t/4294967296|0,e.b=0|t):n+=t;for(var r=0;r<n.length+20;r++)e.b^=0|n.charCodeAt(r),e.next()}function o(t,e){return e.a=t.a,e.b=t.b,e.c=t.c,e.d=t.d,e}function a(t,e){var n=new r(t),a=e&&e.state,i=function(){return(n.next()>>>0)/4294967296};return i.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},i.int32=n.next,i.quick=i,a&&("object"==typeof a&&o(a,n),i.state=function(){return o(n,{})}),i}e&&e.exports?e.exports=a:n&&n.amd?n((function(){return a})):this.tychei=a}(0,t,!1)})),Ku=Wu((function(t){!function(e,n){var r,o=this,a=256,i=6,s="random",u=n.pow(a,i),c=n.pow(2,52),l=2*c,h=a-1;function f(t,h,f){var g=[],y=v(function t(e,n){var r,o=[],a=typeof e;if(n&&"object"==a)for(r in e)try{o.push(t(e[r],n-1))}catch(t){}return o.length?o:"string"==a?e:e+"\0"}((h=1==h?{entropy:!0}:h||{}).entropy?[t,m(e)]:null==t?function(){try{var t;return r&&(t=r.randomBytes)?t=t(a):(t=new Uint8Array(a),(o.crypto||o.msCrypto).getRandomValues(t)),m(t)}catch(t){var n=o.navigator,i=n&&n.plugins;return[+new Date,o,i,o.screen,m(e)]}}():t,3),g),x=new d(g),b=function(){for(var t=x.g(i),e=u,n=0;t<c;)t=(t+n)*a,e*=a,n=x.g(1);for(;t>=l;)t/=2,e/=2,n>>>=1;return(t+n)/e};return b.int32=function(){return 0|x.g(4)},b.quick=function(){return x.g(4)/4294967296},b.double=b,v(m(x.S),e),(h.pass||f||function(t,e,r,o){return o&&(o.S&&p(o,x),t.state=function(){return p(x,{})}),r?(n[s]=t,e):t})(b,y,"global"in h?h.global:this==n,h.state)}function d(t){var e,n=t.length,r=this,o=0,i=r.i=r.j=0,s=r.S=[];for(n||(t=[n++]);o<a;)s[o]=o++;for(o=0;o<a;o++)s[o]=s[i=h&i+t[o%n]+(e=s[o])],s[i]=e;(r.g=function(t){for(var e,n=0,o=r.i,i=r.j,s=r.S;t--;)e=s[o=h&o+1],n=n*a+s[h&(s[o]=s[i=h&i+e])+(s[i]=e)];return r.i=o,r.j=i,n})(a)}function p(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function v(t,e){for(var n,r=t+"",o=0;o<r.length;)e[h&o]=h&(n^=19*e[h&o])+r.charCodeAt(o++);return m(e)}function m(t){return String.fromCharCode.apply(0,t)}if(n["seed"+s]=f,v(n.random(),e),t.exports){t.exports=f;try{r=__webpack_require__(16)}catch(t){}}}([],Math)}));Ku.alea=Uu,Ku.xor128=Vu,Ku.xorwow=zu,Ku.xorshift7=Gu,Ku.xor4096=Hu,Ku.tychei=qu;var ju=Ku.alea;var Xu=An({broadcastTo_:function(t,e){var n=mn(t,"broadcastTo","x"),r=n.shape;if(e.some((function(t){return!(t>0)||t%1!=0})))throw new Error("broadcastTo(): Invalid broadcast shape ["+e+"].");if(e.length<n.rank)throw new Error("broadcastTo(): shape.length="+e.length+" < input.rank="+n.rank+".");if(e.length>n.rank){for(var o=n.shape.slice();o.length<e.length;)o.unshift(1);n=n.reshape(o)}for(var a=n.shape,i=Array.from(e),s=e.length-1;s>=0;s--)if(a[s]===e[s])i[s]=1;else if(1!==n.shape[s])throw new Error("broadcastTo(): ["+r+"] cannot be broadcast to ["+e+"].");var u=i.map((function(t,e){return t>1?e:-1})).filter((function(t){return t>=0}));if(0===u.length)return n.clone();var c={x:n},l={shape:e,inputShape:a};return Lt.runKernelFunc((function(t){return t.tile(n,i)}),c,(function(t){return{x:function(){return t.sum(u,!0)}}}),kr,l)}});var Yu=An({clone_:function(t){var e=mn(t,"x","clone",null);return Lt.runKernelFunc((function(){return Lt.makeTensorFromDataId(e.dataId,e.shape,e.dtype)}),{x:e},null,Ar)}});var $u=An({logicalAnd_:function(t,e){var n=mn(t,"a","logicalAnd","bool"),r=mn(e,"b","logicalAnd","bool");return Fr(n.shape,r.shape),Lt.runKernelFunc((function(t){return t.logicalAnd(n,r)}),{a:n,b:r},null,"LogicalAnd")}}),Qu=An({logicalNot_:function(t){var e=mn(t,"x","logicalNot","bool");return Lt.runKernelFunc((function(t){return t.logicalNot(e)}),{$x:e})}}),Ju=An({logicalOr_:function(t,e){var n=mn(t,"a","logicalOr","bool"),r=mn(e,"b","logicalOr","bool");return Fr(n.shape,r.shape),Lt.runKernelFunc((function(t){return t.logicalOr(n,r)}),{$a:n,$b:r})}}),Zu=An({logicalXor_:function(t,e){var n=mn(t,"a","logicalXor","bool"),r=mn(e,"b","logicalXor","bool");return Fr(n.shape,r.shape),Ju(t,e).logicalAnd($u(t,e).logicalNot())}}),tc=An({where_:function(t,e,n){var r=mn(e,"a","where"),o=mn(n,"b","where"),a=mn(t,"condition","where","bool");return E(r.shape,o.shape,"Error in where: "),1===a.rank?C(a.shape[0]===r.shape[0],(function(){return"The first dimension of `a` must match the size of `condition`."})):E(a.shape,o.shape,"Error in where: "),Lt.runKernelFunc((function(t,e){var n=t.select(a,r,o);return e([a]),n}),{$condition:a,$a:r,$b:o},(function(t,e){var n=e[0];return{$condition:function(){return Xn(n).toFloat()},$a:function(){return t.mul(n.cast(t.dtype))},$b:function(){return t.mul(n.logicalNot().cast(t.dtype))}}}))}}),ec=function(t){return n(this,void 0,void 0,(function(){var e,n,o;return r(this,(function(r){switch(r.label){case 0:return[4,(e=mn(t,"condition","whereAsync","bool")).data()];case 1:return n=r.sent(),o=Wa(e.shape,n),t!==e&&e.dispose(),[2,o]}}))}))};var nc=An({divNoNan_:function(t,e){var n,r=mn(t,"a","div"),o=mn(e,"b","div");r=(n=Nt(r,o))[0],o=n[1];var a=_o(r,o),i=Xn(a),s=o.equal(i);return tc(s,i,a)}});var rc=An({tile_:function(t,e){var n=mn(t,"x","tile",null);C(n.rank===e.length,(function(){return"Error in transpose: rank of input "+n.rank+" must match length of reps "+e+"."}));var r=[n],o={x:n},a={reps:e};return Lt.runKernelFunc((function(t,r){var o=t.tile(n,e);return r([n]),o}),o,null,Tr,a,r)}});var oc=An({eye_:function(t,e,n,r){void 0===r&&(r="float32"),null==e&&(e=t);for(var o=er([t,e],r),a=t<=e?t:e,i=0;i<a;++i)o.set(1,i,i);var s=o.toTensor().as2D(t,e);if(null==n)return s;if(1===n.length)return rc(sr(s,0),[n[0],1,1]);if(2===n.length)return rc(sr(sr(s,0),0),[n[0],n[1],1,1]);if(3===n.length)return rc(sr(sr(sr(s,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+n.length+"D.")}});var ac=An({multinomial_:function(t,e,n,r){void 0===r&&(r=!1);var o=mn(t,"logits","multinomial"),a=o.size,i=o.rank;if(a<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+a+".");if(i>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+i);n=n||Math.random();var s=1===i?o.as2D(1,-1):o,u=Lt.runKernelFunc((function(t){return t.multinomial(s,r,e,n)}),{logits2D:s});return 1===i?u.as1D():u}});var ic=An({oneHot_:function(t,e,n,r){if(void 0===n&&(n=1),void 0===r&&(r=0),e<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+e);var o=mn(t,"indices","oneHot","int32"),a=o.shape.concat([e]),i={indices:o=o.flatten()},s={depth:e,onValue:n,offValue:r};return Lt.runKernelFunc((function(t,a){return a([o]),t.oneHot(o,e,n,r)}),i,null,Sr,s).reshape(a)}});var sc=An({rand_:function(t,e,n){var r=k(t),o=null;if(null==n||"float32"===n)o=new Float32Array(r);else if("int32"===n)o=new Int32Array(r);else{if("bool"!==n)throw new Error("Unknown data type "+n);o=new Uint8Array(r)}for(var a=0;a<r;a++)o[a]=e();return Lt.makeTensor(o,t,n)}}),uc=.001,cc=.1;function lc(){return 32===Lt.backend.floatPrecision()?uc:cc}function hc(t,e,n){var r=!0;if((V(t)||V(e))&&(r=!1),V(t)&&V(e)&&(r=!0),r){var o=t.constructor.name,a=e.constructor.name;if(o!==a)throw new Error("Arrays are of different type. Actual: "+o+". Expected: "+a)}if(Array.isArray(t)&&Array.isArray(e)){var i=pn(t),s=pn(e);if(!S(i,s))throw new Error("Arrays have different shapes. Actual: ["+i+"]. Expected: ["+s+"]")}var u=V(t)?t:I(t),c=V(e)?e:I(e);if(u.length!==c.length)throw new Error("Arrays have different lengths actual: "+u.length+" vs expected: "+c.length+".\nActual:   "+u+".\nExpected: "+c+".");for(var l=0;l<c.length;++l){var h=u[l],f=c[l];if(!n(h,f))throw new Error("Arrays differ: actual["+l+"] = "+h+", expected["+l+"] = "+f+".\nActual:   "+u+".\nExpected: "+c+".")}}function fc(t,e,n){return!isFinite(t)&&!isFinite(e)||!(isNaN(t)||isNaN(e)||Math.abs(t-e)>n)}var dc=Object.freeze({TEST_EPSILON_FLOAT16:cc,expectArraysClose:function(t,e,n){return null==n&&(n=lc()),hc(t,e,(function(t,e){return fc(t,e,n)}))},testEpsilon:lc,expectPromiseToFail:function(t,e){t().then((function(){return e.fail()}),(function(){return e()}))},expectArraysEqual:function(t,e){var n="string"==typeof e||"number"==typeof e||"boolean"==typeof e?[e]:e;return H(t)||H(t[0])||H(e)||H(e[0])?hc(t,n,(function(t,e){return t==e})):hc(t,e,(function(t,e){return fc(t,e,0)}))},expectNumbersClose:function(t,e,n){if(null==n&&(n=lc()),!fc(t,e,n))throw new Error("Numbers differ: actual === "+t+", expected === "+e)},expectValuesInRange:function(t,e,n){for(var r=0;r<t.length;r++)if(t[r]<e||t[r]>n)throw new Error("Value out of range:"+t[r]+" low: "+e+", high: "+n)},expectArrayBuffersEqual:function(t,e){expect(new Float32Array(t)).toEqual(new Float32Array(e))}}),pc=function(){function t(t,e,n,r,o){this.mean=t,this.stdDev=e,this.dtype=n,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var a=o||Math.random();this.random=ju(a.toString())}return t.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var e,n,r=!1;!r;){var o=void 0,a=void 0,i=void 0;do{i=(o=2*this.random()-1)*o+(a=2*this.random()-1)*a}while(i>=1||0===i);var s=Math.sqrt(-2*Math.log(i)/i);e=this.mean+this.stdDev*o*s,n=this.mean+this.stdDev*a*s,this.truncated&&!this.isValidTruncated(e)||(r=!0)}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(e)},t.prototype.convertValue=function(t){return null==this.dtype||"float32"===this.dtype?t:Math.round(t)},t.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},t}(),vc=function(){function t(t,e,n,r){this.alpha=t,this.beta=1/e,this.dtype=n;var o=r||Math.random();this.randu=ju(o.toString()),this.randn=new pc(0,1,n,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}return t.prototype.nextValue=function(){for(var t,e,n,r,o,a;;){do{r=this.randn.nextValue(),a=1+this.c*r}while(a<=0);if(a*=a*a,e=1-.331*(t=r*r)*t,n=.5*t+this.d*(1-a+Math.log(a)),(o=this.randu())<e||Math.log(o)<n)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)},t.prototype.convertValue=function(t){return"float32"===this.dtype?t:Math.round(t)},t}(),mc=function(){function t(t,e,n,r){var o=this;if(void 0===t&&(t=0),void 0===e&&(e=1),this.canReturnFloat=function(){return null==o.dtype||"float32"===o.dtype},this.min=t,this.range=e-t,this.dtype=n,null==r&&(r=Math.random()),"number"==typeof r&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+e+" <= 1 and dtype is not float");this.random=ju(r)}return t.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},t.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},t}();var gc=An({randomGamma_:function(t,e,n,r,o){if(void 0===n&&(n=1),void 0===r&&(r="float32"),null==n&&(n=1),null==r&&(r="float32"),"float32"!==r&&"int32"!==r)throw new Error("Unsupported data type "+r);for(var a=new vc(e,n,r,o),i=er(t,r),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}});var yc=An({randomNormal_:function(t,e,n,r,o){if(void 0===e&&(e=0),void 0===n&&(n=1),null!=r&&"bool"===r)throw new Error("Unsupported data type "+r);for(var a=new pc(e,n,r,!1,o),i=er(t,r),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}});var xc=An({randomUniform_:function(t,e,n,r,o){void 0===e&&(e=0),void 0===n&&(n=1),void 0===r&&(r="float32");for(var a=er(t,r),i=new mc(e,n,null,o),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}});var bc=An({square_:function(t){var e=mn(t,"x","square"),n=[e];return Lt.runKernelFunc((function(t,n){return n([e]),t.square(e)}),{x:e},null,"Square",{},n,[])}});var wc=An({squaredDifference_:function(t,e){var n,r=mn(t,"a","squaredDifference"),o=mn(e,"b","squaredDifference");n=Nt(r,o),r=n[0],o=n[1],Fr(r.shape,o.shape);var a={a:r,b:o},i=[r,o];return Lt.runKernelFunc((function(t,e){var n=t.squaredDifference(r,o);return e([r,o]),n}),a,(function(t,e){var n=e[0],r=e[1],o=On(2);return{a:function(){return t.mul(n.sub(r).mul(o))},b:function(){return t.mul(r.sub(n).mul(o))}}}),Ir,{},i,[])}});var Cc=An({truncatedNormal_:function(t,e,n,r,o){if(void 0===e&&(e=0),void 0===n&&(n=1),null!=r&&"bool"===r)throw new Error("Unsupported data type $ { dtype }");for(var a=new pc(e,n,r,!0,o),i=er(t,r),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}});function Ec(t,e,n,r,o,a){var i,s,u=mn(t,"x","batchNorm"),c=mn(e,"mean","batchNorm"),l=mn(n,"variance","batchNorm");return null!=o&&(i=mn(o,"scale","batchNorm")),null!=r&&(s=mn(r,"offset","batchNorm")),C(2===u.rank,(function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."})),C(2===c.rank||1===c.rank,(function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."})),C(2===l.rank||1===l.rank,(function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."})),null!=i&&C(2===i.rank||1===i.rank,(function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+i.rank+"."})),null!=s&&C(2===s.rank||1===s.rank,(function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."})),kc(u,c,l,s,i,a)}function Rc(t,e,n,r,o,a){var i,s,u=mn(t,"x","batchNorm"),c=mn(e,"mean","batchNorm"),l=mn(n,"variance","batchNorm");return null!=o&&(i=mn(o,"scale","batchNorm")),null!=r&&(s=mn(r,"offset","batchNorm")),C(3===u.rank,(function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."})),C(3===c.rank||1===c.rank,(function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."})),C(3===l.rank||1===l.rank,(function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."})),null!=i&&C(3===i.rank||1===i.rank,(function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+i.rank+"."})),null!=s&&C(3===s.rank||1===s.rank,(function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."})),kc(u,c,l,s,i,a)}function Ic(t,e,n,r,o,a){var i,s,u=mn(t,"x","batchNorm"),c=mn(e,"mean","batchNorm"),l=mn(n,"variance","batchNorm");return null!=o&&(i=mn(o,"scale","batchNorm")),null!=r&&(s=mn(r,"offset","batchNorm")),C(4===u.rank,(function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."})),C(4===c.rank||1===c.rank,(function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."})),C(4===l.rank||1===l.rank,(function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."})),null!=i&&C(4===i.rank||1===i.rank,(function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+i.rank+"."})),null!=s&&C(4===s.rank||1===s.rank,(function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."})),kc(u,c,l,s,i,a)}function kc(t,e,n,r,o,a){null==a&&(a=.001);var i,s,u,c=mn(t,"x","batchNorm"),l=mn(e,"mean","batchNorm"),h=mn(n,"variance","batchNorm");null!=o&&(i=mn(o,"scale","batchNorm")),null!=r&&(s=mn(r,"offset","batchNorm")),C(l.rank===h.rank,(function(){return"Batch normalization gradient requires mean and variance to have equal ranks."})),C(null==s||l.rank===s.rank,(function(){return"Batch normalization gradient requires mean and offset to have equal ranks."})),C(null==i||l.rank===i.rank,(function(){return"Batch normalization gradient requires mean and scale to have equal ranks."})),u=0===c.rank||1===c.rank?c.as4D(1,1,1,c.size):2===c.rank?c.as4D(1,1,c.shape[0],c.shape[1]):3===c.rank?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var f=[c,l,h,i];return Lt.runKernelFunc((function(t,e){var n=t.batchNormalization(u,Sc(l),Sc(h),a,Sc(i),Sc(s));return e([c,l,h,i]),n}),{x:c,mean:l,variance:h,scale:i,offset:s},(function(t,e){var n=e,r=n[0],o=n[1],i=n[2],s=n[3],c=null==s?On(1):s,l=Nr(o.shape,u.shape),h=[];if(1===o.rank){for(var f=0;f<u.shape.length-1;++f)h.push(u.shape[f]);h.push(1)}var d=r.sub(o),p=t.mul(c),v=to(i.add(On(a))),m=v.mul(v).mul(v).mul(On(-.5));return{x:function(){return 1===o.rank?t.mul(rc(v.as4D(1,1,1,o.shape[0]),h)).mul(c).reshape(r.shape):t.mul(v).mul(c).reshape(r.shape)},mean:function(){var t=v.mul(On(-1)).mul(p);return 1===o.rank&&(t=t.sum(l)),t.reshape(o.shape)},variance:function(){var t=m.mul(d).mul(p);return 1===o.rank&&(t=t.sum(l)),t.reshape(o.shape)},scale:function(){var e=d.mul(v),n=t.mul(e);return 1===o.rank&&(n=n.sum(l)),n.reshape(o.shape)},offset:function(){var e=t;return 1===o.rank&&(e=e.sum(l)),e.reshape(o.shape)}}}),"BatchNormalization",{varianceEpsilon:a},f).reshape(c.shape)}function Sc(t){return null==t?null:0===t.rank?t.as1D():1===t.rank?t:2===t.rank?t.as4D(1,1,t.shape[0],t.shape[1]):3===t.rank?t.as4D(1,t.shape[0],t.shape[1],t.shape[2]):t}function Ac(){Xe("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var Tc=An({batchNormalization2d_:function(t,e,n,r,o,a){return void 0===r&&(r=.001),Ac(),Ec(t,e,n,a,o,r)}}),Dc=An({batchNormalization3d_:function(t,e,n,r,o,a){return void 0===r&&(r=.001),Ac(),Rc(t,e,n,a,o,r)}}),Nc=An({batchNormalization4d_:function(t,e,n,r,o,a){return void 0===r&&(r=.001),Ac(),Ic(t,e,n,a,o,r)}}),Fc=An({batchNormalization_:function(t,e,n,r,o,a){return void 0===r&&(r=.001),Ac(),kc(t,e,n,a,o,r)}}),_c=An({batchNorm_:kc}),Oc=An({batchNorm2d_:Ec}),Mc=An({batchNorm3d_:Rc}),Bc=An({batchNorm4d_:Ic});var Pc=An({equal_:function(t,e){var n,r=mn(t,"a","equal"),o=mn(e,"b","equal");return n=Nt(r,o),r=n[0],o=n[1],Fr(r.shape,o.shape),Lt.runKernelFunc((function(t){return t.equal(r,o)}),{$a:r,$b:o})}}),Lc=An({equalStrict_:function(t,e){var n=mn(t,"a","equalStrict"),r=mn(e,"b","equalStrict");return E(n.shape,r.shape,"Error in equalStrict: "),n.equal(r)}}),Wc=An({greater_:function(t,e){var n,r=mn(t,"a","greater"),o=mn(e,"b","greater");return n=Nt(r,o),r=n[0],o=n[1],Fr(r.shape,o.shape),Lt.runKernelFunc((function(t){return t.greater(r,o)}),{a:r,b:o},null,"Greater")}}),Uc=An({greaterEqual_:function(t,e){var n,r=mn(t,"a","greaterEqual"),o=mn(e,"b","greaterEqual");return n=Nt(r,o),r=n[0],o=n[1],Fr(r.shape,o.shape),Lt.runKernelFunc((function(t,e){var n=t.greaterEqual(r,o);return e([r,o]),n}),{a:r,b:o},(function(t,e){var n=e[0],r=e[1];return{a:function(){return Xn(n)},b:function(){return Xn(r)}}}),"GreaterEqual")}}),Vc=An({greaterEqualStrict_:function(t,e){var n=mn(t,"a","greaterEqualStrict"),r=mn(e,"b","greaterEqualStrict");return E(n.shape,r.shape,"Error in greaterEqualStrict: "),n.greaterEqual(r)}}),zc=An({greaterStrict_:function(t,e){var n=mn(t,"a","greaterStrict"),r=mn(e,"b","greaterStrict");return E(n.shape,r.shape,"Error in greaterStrict: "),n.greater(r)}}),Gc=An({less_:function(t,e){var n,r=mn(t,"a","less"),o=mn(e,"b","less");return n=Nt(r,o),r=n[0],o=n[1],Fr(r.shape,o.shape),Lt.runKernelFunc((function(t){return t.less(r,o)}),{a:r,b:o},null,"Less")}}),Hc=An({lessEqual_:function(t,e){var n,r=mn(t,"a","lessEqual"),o=mn(e,"b","lessEqual");return n=Nt(r,o),r=n[0],o=n[1],Fr(r.shape,o.shape),Lt.runKernelFunc((function(t,e){var n=t.lessEqual(r,o);return e([r,o]),n}),{a:r,b:o},null,"LessEqual")}}),qc=An({lessEqualStrict_:function(t,e){var n=mn(t,"a","lessEqualStrict"),r=mn(e,"b","lessEqualStrict");return E(n.shape,r.shape,"Error in lessEqualStrict: "),n.lessEqual(r)}}),Kc=An({lessStrict_:function(t,e){var n=mn(t,"a","lessStrict"),r=mn(e,"b","lessStrict");return E(n.shape,r.shape,"Error in lessStrict: "),n.less(r)}}),jc=An({notEqual_:function(t,e){var n,r=mn(t,"a","notEqual"),o=mn(e,"b","notEqual");return n=Nt(r,o),r=n[0],o=n[1],Fr(r.shape,o.shape),Lt.runKernelFunc((function(t){return t.notEqual(r,o)}),{a:r,b:o},null,"NotEqual")}}),Xc=An({notEqualStrict_:function(t,e){var n=mn(t,"a","notEqualStrict"),r=mn(e,"b","notEqualStrict");return E(n.shape,r.shape,"Error in notEqualStrict: "),n.notEqual(r)}});function Yc(t,e){for(var n=[],r=t;r<e;++r)n.push(r);return n}function $c(t){for(var e=[],n=0;n<t.length;++n)for(var r=0;r<t[n].length;++r)e.push(t[n][r]);return e}var Qc=An({gather_:function(t,e,n){void 0===n&&(n=0);var r=mn(t,"x","gather"),o=mn(e,"indices","gather","int32");n=O(n,r.shape)[0];var a=function(t,e,n){for(var r=t.shape[n],o=[],a=1,i=1,s=0;s<n;s++)o.push(t.shape[s]),a*=t.shape[s];for(s=0;s<e.rank;s++)o.push(e.shape[s]);for(s=n+1;s<t.rank;s++)o.push(t.shape[s]),i*=t.shape[s];return{batchSize:a,sliceSize:i,dimSize:r,outputShape:o}}(r,o,n);return Lt.runKernelFunc((function(t,e){var a=t.gather(r,o.flatten(),n);return e([o]),a}),{x:r,indices:o},(function(t,e){var o=e[0];return{x:function(){var e=r.shape,a=o.size,i=e.slice(0,n),s=i.length,u=e.slice(n,e.length).slice(1),c=u.length,l=Yc(0,s),h=Yc(s+1,s+1+c),f=$c([i,[a],u]),d=t.reshape(f),p=o.reshape([a]),v=$c([[s],l,h]),m=d.transpose(v),g=Jc(m,p,r.shape[n]),y=Rn(v);return g=g.transpose(y)},indices:function(){return o}}}),"Gather",{axis:n}).reshape(a.outputShape)}}),Jc=An({unsortedSegmentSum_:function(t,e,n){var r=mn(t,"x","unsortedSegmentSum"),o=mn(e,"segmentIds","unsortedSegmentSum","int32");return C(A(n),(function(){return"numSegments must be of dtype int"})),Lt.runKernelFunc((function(t,e){var a=t.unsortedSegmentSum(r,o,n);return e([o]),a}),{$x:r},(function(t,e){var n=e[0];return{$x:function(){return function(t,e){for(var n=bo(e,Xn(e)),r=Qc(t,n),o=Uc(e,On(0,"int32")),a=r.rank-o.rank,i=0;i<a;++i)o=sr(o,i+1);o=$u(o,zn(r.shape,"bool"));var s=Xn(r);return tc(o,r,s)}(t,n)}}}))}});var Zc=function(t,e,o){return n(this,void 0,void 0,(function(){var n,a,i,s,u,c,l,h,f,d,p,v,m;return r(this,(function(r){switch(r.label){case 0:for(n=mn(t,"tensor","boolMask"),a=mn(e,"mask","boolMask","bool"),i=null==o?0:o,s=a.rank,u=n.shape,C(s>0,(function(){return"mask cannot be scalar"})),E(u.slice(i,i+s),a.shape,"mask's shape must match the first K dimensions of tensor's shape,"),c=1,l=i;l<i+s;l++)c*=u[l];return h=u.slice(0,i).concat([c],u.slice(i+s)),f=n.reshape(h),d=a.reshape([-1]),[4,ec(d)];case 1:return p=r.sent(),v=p.squeeze([1]),m=Qc(f,v,i),t!==n&&n.dispose(),e!==a&&a.dispose(),v.dispose(),f.dispose(),d.dispose(),p.dispose(),[2,m]}}))}))};function tl(t,e,n,r,o,a,i){void 0===a&&(a="NHWC"),C(t.length===e.rank,(function(){return"Length of inShape ("+t.length+") and rank of dy ("+e.rank+") must match"}));var s=t,u=e,c=!1;3===e.rank&&(c=!0,u=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]),s=[1,t[0],t[1],t[2]]),C(4===s.length,(function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."})),C(4===u.rank,(function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank})),C(4===n.rank,(function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+n.rank}));var l="NHWC"===a?s[3]:s[1],h="NHWC"===a?u.shape[3]:u.shape[1];C(l===n.shape[2],(function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+n.shape[2]+"."})),C(h===n.shape[3],(function(){return"Error in conv2dDerInput: depth of output ("+h+") must match output depth for filter "+n.shape[3]+"."})),null!=i&&C(A(o),(function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."}));var f=xa(a),d=la(s,n.shape,r,1,o,i,!1,f),p=Lt.runKernelFunc((function(t,e){var r=t.conv2dDerInput(u,n,d);return e([n,u]),r}),{dy4D:u,filter:n},(function(t,e){var n=e[0],s=e[1];return{dy4D:function(){return ol(t,n,r,o,a,1,i)},filter:function(){return il(t,s,n.shape,r,o,a,i)}}}));return c?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}function el(t){var e=function(t){return"number"==typeof t?[t,t,t]:2===t.length?[t[0],t[1],1]:t}(t),n=e[0],r=e[1],o=e[2];return 1===n&&1===r&&1===o}function nl(t,e,n,r,o){C(t.length===e.rank,(function(){return"Length of inShape ("+t.length+") and rank of dy ("+e.rank+") must match"}));var a=t,i=e,s=!1;4===e.rank&&(s=!0,i=e.as5D(1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]),a=[1,t[0],t[1],t[2],t[3]]);var u=a[4],c=i.shape[4];C(5===a.length,(function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+a.length+"."})),C(5===i.rank,(function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+i.rank})),C(5===n.rank,(function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+n.rank})),C(u===n.shape[3],(function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+n.shape[3]+"."})),C(c===n.shape[4],(function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+n.shape[4]+"."}));var l=ha(a,n.shape,r,1,o),h=Lt.runKernelFunc((function(t){return t.conv3dDerInput(i,n,l)}),{dy5D:i});return s?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}var rl=An({conv1d_:function(t,e,n,r,o,a,i){void 0===o&&(o="NWC"),void 0===a&&(a=1);var s=mn(t,"x","conv1d"),u=mn(e,"filter","conv1d"),c=s,l=!1;2===s.rank&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),C(3===c.rank,(function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."})),C(3===u.rank,(function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."})),null!=i&&C(A(r),(function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+r+"."})),C(c.shape[2]===u.shape[1],(function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."})),C(ya(n,a),(function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+n+" and dilation '"+a+"'"})),C("NWC"===o,(function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."}));var h=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),f=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),d=ol(f,h,[1,n],r,"NHWC",[1,a],i);return l?d.as2D(d.shape[2],d.shape[3]):d.as3D(d.shape[0],d.shape[2],d.shape[3])}}),ol=An({conv2d_:function(t,e,n,r,o,a,i){void 0===o&&(o="NHWC"),void 0===a&&(a=[1,1]);var s=mn(t,"x","conv2d"),u=mn(e,"filter","conv2d"),c=s,l=!1;3===s.rank&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),C(4===c.rank,(function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."})),C(4===u.rank,(function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."})),null!=i&&C(A(r),(function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+r+"."}));var h="NHWC"===o?c.shape[3]:c.shape[1];C(h===u.shape[2],(function(){return"Error in conv2d: depth of input ("+h+") must match input depth for filter "+u.shape[2]+"."})),C(ya(n,a),(function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+a+"'"}));var f=xa(o),d=la(c.shape,u.shape,n,a,r,i,!1,f),p=[u,c],v=Lt.runKernelFunc((function(t,e){var n=t.conv2d(c,u,d);return e([u,c]),n}),{x:c,filter:u},(function(t,e){var i=e,s=i[0],u=i[1];return C(ga(a),(function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"})),{x:function(){return sl(u.shape,t,s,n,r,o)},filter:function(){return il(u,t,s.shape,n,r,o)}}}),"Conv2D",d,p);return l?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),al=An({conv3d_:function(t,e,n,r,o,a){void 0===o&&(o="NDHWC"),void 0===a&&(a=[1,1,1]);var i=mn(t,"x","conv3d"),s=mn(e,"filter","conv3d"),u=i,c=!1;4===i.rank&&(c=!0,u=i.as5D(1,i.shape[0],i.shape[1],i.shape[2],i.shape[3])),C(5===u.rank,(function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."})),C(5===s.rank,(function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."})),C(u.shape[4]===s.shape[3],(function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."})),C(function(t,e){return el(t)||el(e)}(n,a),(function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+a+"'"})),C("NDHWC"===o,(function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."}));var l=ha(u.shape,s.shape,n,a,r),h=Lt.runKernelFunc((function(t,e){var n=t.conv3d(u,s,l);return e([u,s]),n}),{x:u,$filter:s},(function(t,e){C(el(a),(function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"}));var o=e[0],i=e[1];return{x:function(){return nl(o.shape,t,i,n,r)},$filter:function(){return function(t,e,n,r,o){var a=t;4===t.rank&&(a=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]));var i=e;4===i.rank&&(i=e.as5D(1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]));C(5===a.rank,(function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+a.shape+"."})),C(5===i.rank,(function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+i.shape+"."})),C(5===n.length,(function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+n+"."})),C(a.shape[4]===n[3],(function(){return"Error in conv3dDerFilter: depth of input "+a.shape[4]+") must match input depth in filter ("+n[3]+"."})),C(i.shape[4]===n[4],(function(){return"Error in conv3dDerFilter: depth of dy ("+i.shape[4]+") must match output depth for filter ("+n[4]+")."}));var s=ha(a.shape,n,r,1,o);return Lt.runKernelFunc((function(t){return t.conv3dDerFilter(a,i,s)}),{x5D:a,dy5D:i})}(o,t,i.shape,n,r)}}}));return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),il=An({conv2dDerFilter_:function(t,e,n,r,o,a,i){void 0===a&&(a="NHWC");var s=t;3===t.rank&&(s=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var u=e;3===u.rank&&(u=e.as4D(1,e.shape[0],e.shape[1],e.shape[2])),C(4===s.rank,(function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."})),C(4===u.rank,(function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."})),C(4===n.length,(function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+n+"."}));var c="NHWC"===a?s.shape[3]:s.shape[1],l="NHWC"===a?u.shape[3]:u.shape[1];C(c===n[2],(function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+n[2]+"."})),C(l===n[3],(function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+n[3]+")."})),null!=i&&C(A(o),(function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."}));var h=xa(a),f=la(s.shape,n,r,1,o,i,!1,h);return Lt.runKernelFunc((function(t){return t.conv2dDerFilter(s,u,f)}),{x4D:s,dy4D:u})}}),sl=An({conv2dDerInput_:tl}),ul=An({depthwiseConv2d_:function(t,e,n,r,o,a,i){void 0===o&&(o="NHWC"),void 0===a&&(a=[1,1]);var s=mn(t,"x","depthwiseConv2d"),u=mn(e,"filter","depthwiseConv2d"),c=s,l=!1;3===s.rank&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),C(4===c.rank,(function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."})),C(4===u.rank,(function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."})),C(c.shape[3]===u.shape[2],(function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."})),null==a&&(a=[1,1]),C(ya(n,a),(function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+a+"'"})),null!=i&&C(A(r),(function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+r+"."}));var h=la(c.shape,u.shape,n,a,r,i,!0),f=[c,u],d=Lt.runKernelFunc((function(t,e){var n=t.depthwiseConv2D(c,u,h);return e([c,u]),n}),{x:c,filter:u},(function(t,e){C(ga(a),(function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+a+"'"}));var n=e[0],r=e[1];return{x:function(){return cl(n.shape,t,r,h)},filter:function(){return ll(n,t,r.shape,h)}}}),"DepthwiseConv2dNative",h,f);return l?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}}),cl=An({depthwiseConv2dDerInput_:function(t,e,n,r){var o=e,a=!1;3===e.rank&&(a=!0,o=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var i=Lt.runKernelFunc((function(t){return t.depthwiseConv2DDerInput(o,n,r)}),{dy4D:o});return a?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}}),ll=An({depthwiseConv2dDerFilter_:function(t,e,n,r){var o=t;3===t.rank&&(o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var a=e;return 3===a.rank&&(a=e.as4D(1,e.shape[0],e.shape[1],e.shape[2])),Lt.runKernelFunc((function(t){return t.depthwiseConv2DDerFilter(o,a,r)}),{x4D:o,dy4D:a})}}),hl=An({separableConv2d_:function(t,e,n,r,o,a,i){void 0===a&&(a=[1,1]),void 0===i&&(i="NHWC");var s=mn(t,"x","separableConv2d"),u=mn(e,"depthwiseFilter","separableConv2d"),c=mn(n,"pointwiseFilter","separableConv2d"),l=s,h=!1;if(3===s.rank&&(h=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),"NCHW"===i)throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");C(4===l.rank,(function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."})),C(4===u.rank,(function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."})),C(4===c.rank,(function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."})),C(1===c.shape[0],(function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."})),C(1===c.shape[1],(function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."}));var f=u.shape[2],d=u.shape[3];C(c.shape[2]===f*d,(function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+f*d+", but got "+c.shape[2]+"."}));var p=ul(l,u,r,o,i,a),v=ol(p,c,1,"valid",i);return h?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),fl=An({conv2dTranspose_:function(t,e,n,r,o,a){return tl(n,mn(t,"x","conv2dTranspose"),mn(e,"filter","conv2dTranspose"),r,o,"NHWC",a)}}),dl=An({conv3dTranspose_:function(t,e,n,r,o){return nl(n,mn(t,"x","conv3dTranspose"),mn(e,"filter","conv3dTranspose"),r,o)}});var pl=An({matMul_:function(t,e,n,r){var o;void 0===n&&(n=!1),void 0===r&&(r=!1);var a=mn(t,"a","matMul"),i=mn(e,"b","matMul");o=Nt(a,i),a=o[0],i=o[1];var s=n?a.shape[a.rank-2]:a.shape[a.rank-1],u=r?i.shape[i.rank-1]:i.shape[i.rank-2],c=n?a.shape[a.rank-1]:a.shape[a.rank-2],l=r?i.shape[i.rank-2]:i.shape[i.rank-1],h=a.shape.slice(0,-2),f=i.shape.slice(0,-2),d=k(h),p=k(f);C(a.rank>=2&&i.rank>=2&&a.rank===i.rank,(function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+a.rank+" and "+i.rank+"."})),C(S(h,f),(function(){return"Error in matMul: outer dimensions ("+h+") and ("+f+") of Tensors with shapes "+a.shape+" and "+i.shape+" must match."})),C(s===u,(function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+a.shape+" and "+i.shape+" and transposeA="+n+" and transposeB="+r+" must match."}));var v=a.shape.slice(0,-2).concat([c,l]),m=n?a.as3D(d,s,c):a.as3D(d,c,s),g=r?i.as3D(p,l,u):i.as3D(p,u,l),y={transposeA:n,transposeB:r};return Lt.runKernelFunc((function(t,e){var o=t.batchMatMul(m,g,n,r);return e([m,g]),o}),{a:m,b:g},(function(t,e){var o=e,a=o[0],i=o[1];return n||r?!n&&r?{a:function(){return t.matMul(i,!1,!1)},b:function(){return t.matMul(a,!0,!1)}}:n&&!r?{a:function(){return i.matMul(t,!1,!0)},b:function(){return a.matMul(t,!1,!1)}}:{a:function(){return i.matMul(t,!0,!0)},b:function(){return t.matMul(a,!0,!0)}}:{a:function(){return t.matMul(i,!1,!0)},b:function(){return a.matMul(t,!0,!1)}}}),"BatchMatMul",y).reshape(v)}}),vl=An({dot_:function(t,e){var n=mn(t,"t1","dot"),r=mn(e,"t2","dot");C(!(1!==n.rank&&2!==n.rank||1!==r.rank&&2!==r.rank),(function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+n.rank+" and "+r.rank+"."}));var o=1===n.rank?n.size:n.shape[1],a=1===r.rank?r.size:r.shape[0];return C(o===a,(function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+a+"."})),1===n.rank&&1===r.rank?n.as2D(1,-1).matMul(r.as2D(-1,1)).asScalar():1===n.rank&&2===r.rank?n.as2D(1,-1).matMul(r.as2D(r.shape[0],r.shape[1])).as1D():2===n.rank&&1===r.rank?n.matMul(r.as2D(-1,1)).as1D():n.matMul(r.as2D(r.shape[0],r.shape[1]))}}),ml=An({outerProduct_:function(t,e){var n=mn(t,"v1","outerProduct"),r=mn(e,"v2","outerProduct");return C(1===n.rank&&1===r.rank,(function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+n.rank+" and "+r.rank+"."})),n.as2D(-1,1).matMul(r.as2D(1,-1))}});var gl=An({reverse_:function(t,e){var n=mn(t,"x","reverse");if(0===n.rank)return n.clone();var r=O(e,n.shape);return Lt.runKernelFunc((function(t){return t.reverse(n,r)}),{$x:n},(function(t){return{$x:function(){return t.reverse(r)}}})).reshapeAs(n)}}),yl=An({reverse1d_:function(t){var e=mn(t,"x","reverse");return C(1===e.rank,(function(){return"Error in reverse1D: x must be rank 1 but got rank "+e.rank+"."})),gl(e,0)}}),xl=An({reverse2d_:function(t,e){var n=mn(t,"x","reverse");return C(2===n.rank,(function(){return"Error in reverse2D: x must be rank 2 but got rank "+n.rank+"."})),gl(n,e)}}),bl=An({reverse3d_:function(t,e){var n=mn(t,"x","reverse");return C(3===n.rank,(function(){return"Error in reverse3D: x must be rank 3 but got rank "+n.rank+"."})),gl(n,e)}}),wl=An({reverse4d_:function(t,e){var n=mn(t,"x","reverse");return C(4===n.rank,(function(){return"Error in reverse4D: x must be rank 4 but got rank "+n.rank+"."})),gl(n,e)}});function Cl(t,e,n,r,o,a){var i=mn(t,"x","maxPool"),s=i,u=!1;3===i.rank&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),null==r&&(r=[1,1]),C(4===s.rank,(function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."})),C(ya(n,r),(function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+r+"'"})),null!=a&&C(A(o),(function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."}));var c=ua(s.shape,e,n,r,o,a);if(1===c.filterWidth&&1===c.filterHeight&&S(c.inShape,c.outShape))return i.clone();var l=[s],h=Lt.runKernelFunc((function(t,e){var n=t.maxPool(s,c);return e([s,n]),n}),{x:s},(function(t,a){var i=a[0],s=a[1];return{x:function(){return function(t,e,n,r,o,a,i,s){var u=mn(t,"dy","maxPoolBackprop"),c=mn(e,"input","maxPoolBackprop"),l=mn(n,"output","maxPoolBackprop");C(c.rank===u.rank,(function(){return"Rank of input ("+c.rank+") does not match rank of dy ("+u.rank+")"})),null==a&&(a=[1,1]);C(ya(o,a),(function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+o+" and dilations '"+a+"'"})),C(4===u.rank,(function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+u.rank+"."})),C(4===c.rank,(function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+c.rank+"."})),null!=s&&C(A(i),(function(){return"Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode "+s+" but got pad "+i+"."}));var h=ua(c.shape,r,o,a,i,s);return Lt.runKernelFunc((function(t){return t.maxPoolBackprop(u,c,l,h)}),{$dy:u,$input:c})}(t,i,s,e,n,r,o)}}}),"MaxPool",c,l);return u?h.as3D(h.shape[1],h.shape[2],h.shape[3]):h}function El(t,e,n,r,o,a){var i=mn(t,"x","avgPool","float32");null==r&&(r=[1,1]),C(ya(n,r),(function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+r+"'"}));var s=i,u=!1;3===i.rank&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),C(4===s.rank,(function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."})),null!=a&&C(A(o),(function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."}));var c=ua(s.shape,e,n,r,o,a);if(1===c.filterWidth&&1===c.filterHeight&&S(c.inShape,c.outShape))return i.clone();var l=Lt.runKernelFunc((function(t){return t.avgPool(s,c)}),{x:s},(function(t){return{x:function(){return function(t,e,n,r,o,a){var i=mn(t,"dy","avgPoolBackprop"),s=mn(e,"input","avgPoolBackprop");C(s.rank===i.rank,(function(){return"Rank of input ("+s.rank+") does not match rank of dy ("+i.rank+")"})),null==o&&(o=[1,1]);C(ya(r,o),(function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+o+"'"}));var u=s,c=i,l=!1;3===s.rank&&(l=!0,u=s.as4D(1,s.shape[0],s.shape[1],s.shape[2]),c=i.as4D(1,i.shape[0],i.shape[1],i.shape[2]));C(4===c.rank,(function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+c.rank+"."})),C(4===u.rank,(function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+u.rank+"."}));var h=ua(u.shape,n,r,o,a),f=Lt.runKernelFunc((function(t){return t.avgPoolBackprop(c,u,h)}),{dy4D:c,input4D:u});if(l)return f.as3D(f.shape[1],f.shape[2],f.shape[3]);return f}(t,s,e,n,r,o)}}}),"AvgPool",c);return l=l.cast(i.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var Rl=An({maxPool_:function(t,e,n,r,o){return Cl(t,e,n,1,r,o)}}),Il=An({avgPool_:function(t,e,n,r,o){return El(t,e,n,1,r,o)}}),kl=An({pool_:function(t,e,n,r,o,a){null==o&&(o=[1,1]),null==a&&(a=1),0===r&&(r="valid");var i=mn(t,"x","maxPool"),s=i,u=!1;3===i.rank&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),C(ya(a,o),(function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+a+" and dilations '"+o+"'"}));var c,l=ua(s.shape,e,a,o,r),h=[l.dilationHeight,l.dilationWidth];c="same"===r?function(t,e){var n=t.map((function(t,n){return t+(t-1)*(e[n]-1)})).map((function(t){return t-1})),r=n.map((function(t){return Math.floor(t/2)})),o=n.map((function(t,e){return t-r[e]}));return n.map((function(t,e){return[r[e],o[e]]}))}([l.filterHeight,l.filterWidth],h):[[0,0],[0,0]];var f=1===h[0]&&1===h[1],d=function(t,e,n){var r=n.map((function(t){return t[0]})),o=n.map((function(t){return t[1]})),a=t.concat(r,o),i=e.map((function(t,e){return(t-a[e]%t)%t})),s=o.map((function(t,e){return t+i[e]})),u=e.map((function(t,e){return[r[e],s[e]]})),c=e.map((function(t,e){return[0,i[e]]}));return[u,c]}([l.inHeight,l.inWidth],h,c),p=d[0],v=d[1],m=f?r:"valid",g=f?s:pr(s,h,p),y=("avg"===n?function(){return El(g,e,a,1,m)}:function(){return Cl(g,e,a,1,m)})(),x=f?y:rr(y,h,v);return u?x.as3D(x.shape[1],x.shape[2],x.shape[3]):x}}),Sl=An({maxPool3d_:function(t,e,n,r,o,a,i){void 0===a&&(a="NDHWC");var s=mn(t,"x","maxPool3d"),u=s,c=!1;4===s.rank&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),null==i&&(i=[1,1,1]),C(5===u.rank,(function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."})),C("NDHWC"===a,(function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+a})),C(ya(n,i),(function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+i+"'"})),null!=o&&C(A(r),(function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+"."}));var l=ca(u.shape,e,n,i,r,o,a),h=Lt.runKernelFunc((function(t,e){var n=t.maxPool3d(u,l);return e([u,n]),n}),{x:u},(function(t,a){var s=a[0],u=a[1];return{x:function(){return function(t,e,n,r,o,a,i,s){var u=mn(t,"dy","maxPool3dBackprop"),c=mn(e,"input","maxPool3dBackprop"),l=mn(n,"output","maxPool3dBackprop"),h=u,f=c,d=l,p=!1;4===c.rank&&(p=!0,h=u.as5D(1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]),f=c.as5D(1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]),d=l.as5D(1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]));C(5===h.rank,(function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+h.rank+"."})),C(5===f.rank,(function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+f.rank+"."})),C(5===d.rank,(function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+d.rank+"."})),null==a&&(a=[1,1,1]);C(ya(o,a),(function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+o+" and dilations '"+a+"'"})),null!=s&&C(A(i),(function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+s+" but got pad "+i+"."}));var v=ca(f.shape,r,o,a,i,s),m=Lt.runKernelFunc((function(t){return t.maxPool3dBackprop(h,f,d,v)}),{dy5D:h,input5D:f});if(p)return m.as4D(m.shape[1],m.shape[2],m.shape[3],m.shape[4]);return m}(t,s,u,e,n,i,r,o)}}}));return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),Al=An({avgPool3d_:function(t,e,n,r,o,a,i){void 0===a&&(a="NDHWC");var s=mn(t,"x","avgPool3d","float32"),u=s,c=!1;4===s.rank&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),null==i&&(i=[1,1,1]),C(5===u.rank,(function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."})),C("NDHWC"===a,(function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+a})),C(ya(n,i),(function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+i+"'"})),null!=o&&C(A(r),(function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+"."}));var l=ca(u.shape,e,n,i,r,o,a),h=Lt.runKernelFunc((function(t){return t.avgPool3d(u,l)}),{x:u},(function(t){return{x:function(){return function(t,e,n,r,o,a,i){var s=mn(t,"dy","avgPool3dBackprop"),u=mn(e,"input","avgPool3dBackprop"),c=s,l=u,h=!1;4===u.rank&&(h=!0,c=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3]),l=u.as5D(1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]));C(5===c.rank,(function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+c.rank+"."})),C(5===l.rank,(function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+l.rank+"."})),null==o&&(o=[1,1,1]);C(ya(r,o),(function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+o+"'"})),null!=i&&C(A(a),(function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+a+"."}));var f=ca(l.shape,n,r,o,a,i),d=Lt.runKernelFunc((function(t){return t.avgPool3dBackprop(c,l,f)}),{dy5D:c,input5D:l});if(h)return d.as4D(d.shape[1],d.shape[2],d.shape[3],d.shape[4]);return d}(t,u,e,n,i,r,o)}}}));return h=h.cast(u.dtype),c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}});var Tl=An({slice_:function(t,e,n){var r,o,a=mn(t,"x","slice");if(0===a.rank)throw new Error("Slicing scalar is not possible");(r="number"==typeof e?[e].concat(new Array(a.rank-1).fill(0)):e.length<a.rank?e.concat(new Array(a.rank-e.length).fill(0)):e.slice()).forEach((function(t){C(-1!==t,(function(){return"slice() does not support negative begin indexing."}))})),o=(o=null==n?new Array(a.rank).fill(-1):"number"==typeof n?[n].concat(new Array(a.rank-1).fill(-1)):n.length<a.rank?n.concat(new Array(a.rank-n.length).fill(-1)):n).map((function(t,e){return t>=0?t:(C(-1===t,(function(){return"Negative size values should be exactly -1 but got "+t+" for the slice() size at index "+e+"."})),a.shape[e]-r[e])})),zo(a,r,o);var i=a.shape,s={begin:r,size:o};return Lt.runKernelFunc((function(t){return t.slice(a,r,o)}),{x:a},(function(t){for(var e=[],n=0;n<t.rank;n++)e.push([r[n],i[n]-r[n]-o[n]]);return{x:function(){return t.pad(e)}}}),"Slice",s)}}),Dl=An({slice1d_:function(t,e,n){var r=mn(t,"x","slice1d");return C(1===r.rank,(function(){return"slice1d expects a rank-1 tensor, but got a rank-"+r.rank+" tensor"})),Tl(r,[e],[n])}}),Nl=An({slice2d_:function(t,e,n){var r=mn(t,"x","slice2d");return C(2===r.rank,(function(){return"slice2d expects a rank-2 tensor, but got a rank-"+r.rank+" tensor"})),Tl(r,e,n)}}),Fl=An({slice3d_:function(t,e,n){var r=mn(t,"x","slice3d");return C(3===r.rank,(function(){return"slice3d expects a rank-3 tensor, but got a rank-"+r.rank+" tensor"})),Tl(r,e,n)}}),_l=An({slice4d_:function(t,e,n){var r=mn(t,"x","slice4d");return C(4===r.rank,(function(){return"slice4d expects a rank-4 tensor, but got a rank-"+r.rank+" tensor"})),Tl(r,e,n)}});function Ol(t,e,n,r,o){return e.rank<n.rank&&(e=e.reshape(wn(e.shape,r))),t.rank<n.rank&&(t=t.reshape(wn(t.shape,r))),{x:function(){var r=t.mul(n.equal(e).cast(t.dtype));return null==o?r:r.transpose(o)}}}var Ml=An({all_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=mn(t,"x","all","bool"),o=O(e,r.shape),a=o,i=En(a,r.rank);null!=i&&(r=r.transpose(i),a=In(a.length,r.rank));var s=Lt.runKernelFunc((function(t){return t.all(r,a)}),{$x:r});if(n){var u=wn(s.shape,o);return s.reshape(u)}return s}}),Bl=An({any_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=mn(t,"x","any","bool"),o=O(e,r.shape),a=o,i=En(a,r.rank);null!=i&&(r=r.transpose(i),a=In(a.length,r.rank));var s=Lt.runKernelFunc((function(t){return t.any(r,a)}),{$x:r});if(n){var u=wn(s.shape,o);return s.reshape(u)}return s}}),Pl=An({argMax_:function(t,e){void 0===e&&(e=0);var n=mn(t,"x","argMax");null==e&&(e=0);var r=O(e,n.shape),o=En(r,n.rank);null!=o&&(n=n.transpose(o),r=In(r.length,n.rank));var a={axis:r[0]},i=[n];return Lt.runKernelFunc((function(t,e){var o=t.argMax(n,r[0]);return e([n]),o}),{x:n},(function(t,e){var n=e[0];return{x:function(){return Xn(n)}}}),"ArgMax",a,i)}}),Ll=An({argMin_:function(t,e){void 0===e&&(e=0);var n=mn(t,"x","argMin");null==e&&(e=0);var r=O(e,n.shape),o=En(r,n.rank);return null!=o&&(n=n.transpose(o),r=In(r.length,n.rank)),Lt.runKernelFunc((function(t,e){var o=t.argMin(n,r[0]);return e([n]),o}),{$x:n},(function(t,e){var n=e[0];return{$x:function(){return Xn(n)}}}))}}),Wl=An({logSumExp_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=mn(t,"x","logSumExp"),o=O(e,r.shape),a=r.max(o,!0),i=r.sub(a).exp().sum(o).log(),s=a.reshape(i.shape).add(i);if(n){var u=wn(s.shape,o);return s.reshape(u)}return s}}),Ul=An({max_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=mn(t,"x","max"),o=r,a=O(e,r.shape),i=a,s=En(i,r.rank);null!=s&&(r=r.transpose(s),i=In(i.length,r.rank));var u=[r],c=Lt.runKernelFunc((function(t,e){var n=t.max(r,i);return e([o,n]),n}),{x:r},(function(t,e){return Ol(t,e[1],e[0],a,s)}),"Max",{axes:i},u,[!0]);if(n){var l=wn(c.shape,a);c=c.reshape(l)}return c}}),Vl=An({mean_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=mn(t,"x","mean"),o=O(e,r.shape),a=k(bn(r.shape,o)[1]);return ea((function(t){var r=On(a);return{value:(r.dtype===t.dtype?t:t.cast(r.dtype)).div(r).sum(e,n),gradFunc:function(e){var n=t.shape.slice();return o.forEach((function(t){n[t]=1})),e.reshape(n).mul(zn(t.shape,"float32")).div(a)}}}))(r)}}),zl=An({min_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=mn(t,"x","min"),o=r,a=O(e,r.shape),i=a,s=En(i,r.rank);null!=s&&(r=r.transpose(s),i=In(i.length,r.rank));var u=[r],c=Lt.runKernelFunc((function(t,e){var n=t.min(r,i);return e([o,n]),n}),{x:r},(function(t,e){return Ol(t,e[1],e[0],a,s)}),"Min",{axes:i},u,[!0]);if(n){var l=wn(c.shape,a);c=c.reshape(l)}return c}}),Gl=An({moments_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=O(e,(t=mn(t,"x","moments")).shape),o=t.mean(r,n),a=o.shape;n||(a=wn(o.shape,r));var i=t.toFloat().sub(o.reshape(a)).square();return{mean:o,variance:i.mean(r,n)}}}),Hl=An({sum_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=mn(t,"x","sum");"bool"===r.dtype&&(r=r.toInt());var o=O(e,r.shape);return ea((function(t){var e=En(o,t.rank),r=o,a=t;null!=e&&(a=t.transpose(e),r=In(r.length,t.rank));var i=function(e){var n=t.shape.slice();return o.forEach((function(t){n[t]=1})),e.reshape(n).mul(zn(t.shape,"float32"))},s={axes:r},u=Lt.runKernelFunc((function(t){return t.sum(a,r)}),{x:a},(function(t){return{x:function(){return i(t)}}}),"Sum",s);if(n){var c=wn(u.shape,o);u=u.reshape(c)}return{value:u,gradFunc:i}}))(r)}}),ql=An({prod_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=mn(t,"x","prod");"bool"===r.dtype&&(r=r.toInt());var o=O(e,r.shape),a=En(o,r.rank),i=o,s=r;null!=a&&(s=r.transpose(a),i=In(i.length,r.rank));var u=Lt.runKernelFunc((function(t){return t.prod(s,i)}),{permutedX:s});if(n){var c=wn(u.shape,o);u=u.reshape(c)}return u}});var Kl=An({elu_:function(t){var e=mn(t,"x","elu");return Lt.runKernelFunc((function(t,n){var r=t.elu(e);return n([r]),r}),{$x:e},(function(t,e){var n=e[0];return{$x:function(){return Lt.runKernelFunc((function(e){return e.eluDer(t,n)}),{dy:t,y:n})}}}))}}),jl=An({leakyRelu_:function(t,e){void 0===e&&(e=.2);var n=mn(t,"x","leakyRelu");return bo(On(e).mul(n),n)}}),Xl=An({prelu_:function(t,e){var n=mn(t,"x","prelu"),r=mn(e,"alpha","prelu");return Lt.runKernelFunc((function(t,e){var o=t.prelu(n,r);return e([n,r]),o}),{x:n,alpha:r},(function(t,e){var n=e[0],r=e[1],o=n.greater(0);return{x:function(){return tc(o,t,t.mul(r))},alpha:function(){var e=tc(o,Xn(t),t.mul(n)),a=Nr(r.shape,t.shape);return a.length>0&&(e=e.sum(a)),e.reshape(r.shape)}}}),"Prelu")}}),Yl=An({relu_:function(t){var e=mn(t,"x","relu");return"bool"===e.dtype?e.toInt():Lt.runKernelFunc((function(t,n){var r=t.relu(e);return n([e]),r}),{x:e},(function(t,e){var n=e[0];return{x:function(){return t.mulStrict(n.step().toFloat())}}}),"Relu")}}),$l=An({relu6_:function(t){var e=mn(t,"x","relu6");return"bool"===e.dtype?e.toInt():Lt.runKernelFunc((function(t,n){var r=t.relu6(e);return n([e]),r}),{x:e},(function(t,e){var n=e[0],r=n.lessEqual(6).mul(n.step());return{x:function(){return t.mulStrict(r.toFloat())}}}),"Relu6")}}),Ql=An({selu_:function(t){var e=mn(t,"x","selu");return Lt.runKernelFunc((function(t,n){var r=t.selu(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return{$x:function(){var e=n.greater(On(0)),r=On(au),o=On(iu),a=t.mul(o),i=t.mul(r).mul(n.toFloat().exp());return tc(e,a,i)}}}))}});var Jl=An({transpose_:function(t,e){var n=mn(t,"x","transpose");if(null==e&&(e=n.shape.map((function(t,e){return e})).reverse()),C(n.rank===e.length,(function(){return"Error in transpose: rank of input "+n.rank+" must match length of perm "+e+"."})),e.forEach((function(t){C(t>=0&&t<n.rank,(function(){return"All entries in 'perm' must be between 0 and "+(n.rank-1)+" but got "+e}))})),n.rank<=1)return n.clone();var r={perm:e};return Lt.runKernelFunc((function(t){return t.transpose(n,e)}),{x:n},(function(t){var n=Rn(e);return{x:function(){return t.transpose(n)}}}),"Transpose",r)}});var Zl=An({localResponseNormalization_:function(t,e,n,r,o){void 0===e&&(e=5),void 0===n&&(n=1),void 0===r&&(r=1),void 0===o&&(o=.5);var a=mn(t,"x","localResponseNormalization");C(4===a.rank||3===a.rank,(function(){return"Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank "+a.rank+"."})),C(A(e),(function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+e+"."}));var i=a,s=!1;3===a.rank&&(s=!0,i=a.as4D(1,a.shape[0],a.shape[1],a.shape[2]));var u=Lt.runKernelFunc((function(t,a){var s=t.localResponseNormalization4D(i,e,n,r,o);return a([i,s]),s}),{x4D:i},(function(t,a){var i=a[0],s=a[1];return{x4D:function(){return Lt.runKernelFunc((function(a){return a.LRNGrad(t,i,s,e,n,r,o)}),{})}}}));return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}});var th=An({norm_:function(t,e,n,r){void 0===e&&(e="euclidean"),void 0===n&&(n=null),void 0===r&&(r=!1);var o=function t(e,n,r){void 0===r&&(r=null);if(0===e.rank)return e.abs();if(1!==e.rank&&null===r)return t(e.reshape([-1]),n,r);if(1===e.rank||"number"==typeof r||Array.isArray(r)&&1===r.length){if(1===n)return e.abs().sum(r);if(n===1/0)return e.abs().max(r);if(n===-1/0)return e.abs().min(r);if("euclidean"===n||2===n)return e.abs().pow(On(2,"int32")).sum(r).sqrt();throw new Error("Error in norm: invalid ord value: "+n)}if(Array.isArray(r)&&2===r.length){if(1===n)return e.abs().sum(r[0]).max(r[1]-1);if(n===1/0)return e.abs().sum(r[1]).max(r[0]);if(n===-1/0)return e.abs().sum(r[1]).min(r[0]);if("fro"===n||"euclidean"===n)return e.square().sum(r).sqrt();throw new Error("Error in norm: invalid ord value: "+n)}throw new Error("Error in norm: invalid axis: "+r)}(t=mn(t,"x","norm"),e,n),a=o.shape;if(r){var i=O(n,t.shape);a=wn(o.shape,i)}return o.reshape(a)}});var eh=An({basicLSTMCell_:function(t,e,n,r,o,a){var i=mn(t,"forgetBias","basicLSTMCell"),s=mn(e,"lstmKernel","basicLSTMCell"),u=mn(n,"lstmBias","basicLSTMCell"),c=mn(r,"data","basicLSTMCell"),l=mn(o,"c","basicLSTMCell"),h=mn(a,"h","basicLSTMCell"),f=c.concat(h,1).matMul(s).add(u),d=f.shape[0],p=f.shape[1]/4,v=[d,p],m=f.slice([0,0],v),g=f.slice([0,p],v),y=f.slice([0,2*p],v),x=f.slice([0,3*p],v),b=m.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(i.add(y).sigmoid())),w=b.tanh().mulStrict(x.sigmoid());return[b,w]}}),nh=An({multiRNNCell_:function(t,e,n,r){for(var o=mn(e,"data","multiRNNCell"),a=gn(n,"c","multiRNNCell"),i=gn(r,"h","multiRNNCell"),s=o,u=[],c=0;c<t.length;c++){var l=t[c](s,a[c],i[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var h=[],f=[];for(c=0;c<u.length;c+=2)h.push(u[c]),f.push(u[c+1]);return[h,f]}});var rh=An({movingAverage_:function(t,e,n,r,o){void 0===o&&(o=!0);var a=mn(t,"v","movingAverage"),i=mn(e,"x","movingAverage"),s=mn(n,"decay","movingAverage");Ft(a,i),C(S(a.shape,i.shape),(function(){return"Shape mismatch in v and x"}));var u=On(1),c=u.sub(s),l=i.sub(a).mul(c);if(o){C(null!=r,(function(){return"When using zeroDebias: true, step is required."}));var h=mn(r,"step","movingAverage");l=l.div(u.sub(Ao(s,h)))}return a.add(l)}});var oh=An({stridedSlice_:function(t,e,n,r,o,a,i,s,u){if(void 0===o&&(o=0),void 0===a&&(a=0),void 0===i&&(i=0),void 0===s&&(s=0),void 0===u&&(u=0),null==r&&(r=new Array(e.length)),0!==i)throw new Error("ellipsis mask is not yet supported");var c=mn(t,"x","stridedSlice"),l=Go(s),h=c.shape.slice();l.forEach((function(t){e[t]=0,n[t]=1,h.splice(t,0,1)})),c=c.reshape(h);for(var f=0;f<c.rank;f++)e[f]=qo(o,e,r,c.shape,f),n[f]=Ko(a,n,r,c.shape,f),r[f]=r[f]||1;var d=Go(u);d.forEach((function(t){n[t]=e[t]+1,r[t]=1}));var p=Ho(e,n,r),v=p.filter((function(t,e){return-1===d.indexOf(e)}));return r.every((function(t){return 1===t}))?Tl(c,e,p).reshape(v):Lt.runKernelFunc((function(t){return t.stridedSlice(c,e,n,r)}),{$x:c}).reshape(v)}});var ah=An({topk_:function(t,e,n){void 0===e&&(e=1),void 0===n&&(n=!0);var r=mn(t,"x","topk");if(0===r.rank)throw new Error("topk() expects the input to be of rank 1 or higher");var o=r.shape[r.shape.length-1];if(e>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+e);var a=Lt.runKernelFunc((function(t){return t.topk(r,e,n)}),{$x:r});return{values:a[0],indices:a[1]}}});var ih=An({scatterND_:function(t,e,n){var r=mn(t,"indices","scatterND","int32"),o=mn(e,"updates","scatterND");return Wo(o,r,n),Lt.runKernelFunc((function(t){return t.scatterND(r,o,n)}),{indices:r,updates:o},null,"ScatterNd",{shape:n})}});var sh=An({fft_:function(t){C("complex64"===t.dtype,(function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+t.dtype+"."}));var e=t.shape[t.shape.length-1],n=t.size/e,r=t.as2D(n,e);return Lt.runKernelFunc((function(t){return t.fft(r)}),{input:t}).reshape(t.shape)}}),uh=An({ifft_:function(t){C("complex64"===t.dtype,(function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+t.dtype+"."}));var e=t.shape[t.shape.length-1],n=t.size/e,r=t.as2D(n,e);return Lt.runKernelFunc((function(t){return t.ifft(r)}),{input:t}).reshape(t.shape)}}),ch=An({rfft_:function(t,e){C("float32"===t.dtype,(function(){return"The dtype for rfft() must be real value but got "+t.dtype}));var n,r=t.shape[t.shape.length-1],o=t.size/r;if(null!=e&&e<r){var a=t.shape.map((function(t){return 0})),i=t.shape.map((function(t){return t}));i[t.shape.length-1]=e,n=t.slice(a,i),r=e}else if(null!=e&&e>r){var s=t.shape.map((function(t){return t}));s[t.shape.length-1]=e-r,n=t.concat(Gn(s),t.shape.length-1),r=e}else n=t;var u=n.zerosLike(),c=Tn(n,u).as2D(o,r),l=sh(c),h=Math.floor(r/2)+1,f=Dn(l),d=Nn(l),p=f.split([h,r-h],f.shape.length-1),v=d.split([h,r-h],d.shape.length-1),m=n.shape.slice();return m[n.shape.length-1]=h,Tn(p[0],v[0]).reshape(m)}}),lh=An({irfft_:function(t){var e=t.shape[t.shape.length-1],n=t.size/e;if(e<=2){var r=t.as2D(n,e),o=uh(r);return Dn(o)}var a=[n,2*(e-1)],i=Dn(t).as2D(n,e),s=Nn(t).as2D(n,e),u=i.slice([0,1],[n,e-2]).reverse(1),c=s.slice([0,1],[n,e-2]).reverse(1).mul(On(-1)),l=i.concat(u,1),h=s.concat(c,1);return r=Tn(l,h).as2D(a[0],a[1]),o=uh(r),Dn(o)}}),hh=Object.freeze({fft:sh,ifft:uh,rfft:ch,irfft:lh});var fh=An({sparseToDense_:function(t,e,n,r){void 0===r&&(r=0);var o=mn(t,"sparseIndices","sparseToDense","int32"),a=mn(e,"sparseValues","sparseToDense"),i=mn(r,"defaultValue","sparseToDense",a.dtype);return function(t,e,n,r){if("int32"!==t.dtype)throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+t.shape+".");var o=t.rank>0?t.shape[0]:1,a=t.rank>1?t.shape[1]:1;if(n.length!==a)throw new Error("outputShape has incorrect number of elements:, "+n.length+", should be: "+a+".");var i=e.size;if(0!==e.rank&&(1!==e.rank||i!==o))throw new Error("sparseValues has incorrect shape "+e.shape+", should be [] or ["+o+"]");if(e.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,a,n,i),Lt.runKernelFunc((function(t){return t.sparseToDense(o,a,n,i)}),{$sparseIndices:o,$sparseValues:a,$defaultValue:i})}});var dh=An({gatherND_:function(t,e){var n=mn(e,"indices","gatherND","int32"),r=mn(t,"x","gatherND");return Lt.runKernelFunc((function(t){return t.gatherND(r,n)}),{x:r,indices:n},null,"GatherNd")}});var ph=An({diag_:function(t){var e=mn(t,"x","diag").flatten(),n=t.shape.concat(t.shape);return Lt.runKernelFunc((function(t){return t.diag(e)}),{$x:e}).reshape(n)}});var vh=An({dropout_:function(t,e,n,r){var o=mn(t,"x","dropout");if(C("float32"===o.dtype,(function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."})),C(e>=0&&e<1,(function(){return"rate must be a float in the range [0, 1), but got "+e+"."})),0===e)return t instanceof wt?o.clone():o;var a=function(t,e){if(null==e)return t.shape.slice();if(S(t.shape,e))return e;if(t.shape.length===e.length){for(var n=[],r=0;r<t.shape.length;r++)null==e[r]&&null!=t.shape[r]?n.push(t.shape[r]):n.push(e[r]);return n}return e}(o,n),i=1-e,s=xc(a,0,1,"float32",r).add(i).floor().div(i);return o.mul(s)}});function mh(t,e,n){for(var r=1-t%2,o=new Float32Array(t),a=0;a<t;++a){var i=2*Math.PI*a/(t+r-1);o[a]=e-n*Math.cos(i)}return Mn(o,"float32")}var gh=An({hannWindow_:function(t){return mh(t,.5,.5)}}),yh=An({hammingWindow_:function(t){return mh(t,.54,.46)}}),xh=An({frame_:function(t,e,n,r,o){void 0===r&&(r=!1),void 0===o&&(o=0);for(var a=0,i=[];a+e<=t.size;)i.push(Tl(t,a,e)),a+=n;if(r)for(;a<t.size;){var s=a+e-t.size,u=Yn([Tl(t,a,e-s),Hn([s],o)]);i.push(u),a+=n}return 0===i.length?Bn([],[0,e]):Yn(i).as2D(i.length,e)}}),bh=An({stft_:function(t,e,n,r,o){var a;void 0===o&&(o=gh),null==r&&(a=e,r=Math.floor(Math.pow(2,Math.ceil(Math.log(a)/Math.log(2)))));for(var i=xh(t,e,n),s=ko(i,o(e)),u=[],c=0;c<i.shape[0];c++)u.push(ch(s.slice([c,0],[1,e]),r));return Yn(u)}}),wh=Object.freeze({hannWindow:gh,hammingWindow:yh,frame:xh,stft:bh});var Ch,Eh=function(t,e,o){return void 0===o&&(o=1),n(this,void 0,void 0,(function(){var n,a,i,s,u,c,l,h,f,d,p,v,m,g;return r(this,(function(r){switch(r.label){case 0:return n=mn(t,"predictions","inTopK"),a=mn(e,"targets","inTopK"),C(n.rank>1,(function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+n.rank})),C(n.rank-1===a.rank,(function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+n.rank+" and targets rank "+a.rank})),E(n.shape.slice(0,n.shape.length-1),a.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),i=n.shape[n.shape.length-1],C(o>0&&o<=i,(function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+i+"), but got "+o})),[4,n.data()];case 1:return s=r.sent(),[4,a.data()];case 2:for(u=r.sent(),c=[s.length/i,i],h=c[1],f=B("bool",l=c[0]),d=0;d<l;d++){for(p=d*h,v=s.subarray(p,p+h),m=[],g=0;g<v.length;g++)m.push({value:v[g],index:g});for(m.sort((function(t,e){return e.value-t.value})),f[d]=0,g=0;g<o;g++)if(m[g].index===u[d]){f[d]=1;break}}return t!==n&&n.dispose(),e!==a&&a.dispose(),[2,Fn(f,a.shape,"bool")]}}))}))};!function(t){t[t.NONE=0]="NONE",t[t.MEAN=1]="MEAN",t[t.SUM=2]="SUM",t[t.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"}(Ch||(Ch={}));var Rh=An({absoluteDifference_:function(t,e,n,r){void 0===r&&(r=Ch.SUM_BY_NONZERO_WEIGHTS);var o=mn(t,"labels","absoluteDifference"),a=mn(e,"predictions","absoluteDifference"),i=null;null!=n&&(i=mn(n,"weights","absoluteDifference")),E(o.shape,a.shape,"Error in absoluteDifference: ");var s=o.sub(a).abs();return Ih(s,i,r)}}),Ih=An({computeWeightedLoss_:function(t,e,n){void 0===n&&(n=Ch.SUM_BY_NONZERO_WEIGHTS);var r=mn(t,"losses","computeWeightedLoss"),o=null;null!=e&&(o=mn(e,"weights","computeWeightedLoss"));var a=null==o?r:r.mul(o);if(n===Ch.NONE)return a;if(n===Ch.SUM)return a.sum();if(n===Ch.MEAN){if(null==o)return a.mean();var i=r.size/o.size,s=a.sum().div(o.sum());return i>1?s.div(On(i)):s}if(n===Ch.SUM_BY_NONZERO_WEIGHTS){if(null==o)return a.sum().div(On(r.size));var u=o.mul(zn(r.shape)).notEqual(On(0)).sum().toFloat();return a.sum().div(u)}throw Error("Unknown reduction: "+n)}}),kh=An({cosineDistance_:function(t,e,n,r,o){void 0===o&&(o=Ch.SUM_BY_NONZERO_WEIGHTS);var a=mn(t,"labels","cosineDistance"),i=mn(e,"predictions","cosineDistance"),s=null;null!=r&&(s=mn(r,"weights","cosineDistance")),E(a.shape,i.shape,"Error in cosineDistance: ");var u=On(1).sub(a.mul(i).sum(n,!0));return Ih(u,s,o)}}),Sh=An({hingeLoss_:function(t,e,n,r){void 0===r&&(r=Ch.SUM_BY_NONZERO_WEIGHTS);var o=mn(t,"labels","hingeLoss"),a=mn(e,"predictions","hingeLoss"),i=null;null!=n&&(i=mn(n,"weights","hingeLoss")),E(o.shape,a.shape,"Error in hingeLoss: ");var s=On(1);o=On(2).mul(o).sub(s);var u=s.sub(o.mul(a)).relu();return Ih(u,i,r)}}),Ah=An({huberLoss_:function(t,e,n,r,o){void 0===r&&(r=1),void 0===o&&(o=Ch.SUM_BY_NONZERO_WEIGHTS);var a=mn(t,"labels","huberLoss"),i=mn(e,"predictions","huberLoss"),s=null;null!=n&&(s=mn(n,"weights","huberLoss")),E(a.shape,i.shape,"Error in huberLoss: ");var u=On(r),c=i.sub(a).abs(),l=Co(c,u),h=c.sub(l),f=On(.5).mul(l.square()).add(u.mul(h));return Ih(f,s,o)}}),Th=An({logLoss_:function(t,e,n,r,o){void 0===r&&(r=1e-7),void 0===o&&(o=Ch.SUM_BY_NONZERO_WEIGHTS);var a=mn(t,"labels","logLoss"),i=mn(e,"predictions","logLoss"),s=null;null!=n&&(s=mn(n,"weights","logLoss")),E(a.shape,i.shape,"Error in logLoss: ");var u=On(1),c=On(r),l=a.mul(i.add(c).log()).neg().sub(u.sub(a).mul(u.sub(i).add(c).log()));return Ih(l,s,o)}}),Dh=An({meanSquaredError_:function(t,e,n,r){void 0===r&&(r=Ch.SUM_BY_NONZERO_WEIGHTS);var o=mn(t,"labels","meanSquaredError"),a=mn(e,"predictions","meanSquaredError"),i=null;null!=n&&(i=mn(n,"weights","meanSquaredError")),E(o.shape,a.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(a);return Ih(s,i,r)}}),Nh=An({sigmoidCrossEntropy_:function(t,e,n,r,o){void 0===r&&(r=0),void 0===o&&(o=Ch.SUM_BY_NONZERO_WEIGHTS);var a=mn(t,"multiClassLabels","sigmoidCrossEntropy"),i=mn(e,"logits","sigmoidCrossEntropy"),s=null;if(null!=n&&(s=mn(n,"weights","sigmoidCrossEntropy")),E(a.shape,i.shape,"Error in sigmoidCrossEntropy: "),r>0){var u=On(r),c=On(1),l=On(.5);a=a.mul(c.sub(u)).add(l.mul(u))}var h=function(t,e){var n=mn(t,"labels","sigmoidCrossEntropyWithLogits"),r=mn(e,"logits","sigmoidCrossEntropyWithLogits");E(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");var o=r.relu(),a=r.mul(n),i=r.abs().neg().exp().log1p();return o.sub(a).add(i)}(a,i);return Ih(h,s,o)}}),Fh=An({softmaxCrossEntropy_:function(t,e,n,r,o){void 0===r&&(r=0),void 0===o&&(o=Ch.SUM_BY_NONZERO_WEIGHTS);var a=mn(t,"onehotLabels","softmaxCrossEntropy"),i=mn(e,"logits","softmaxCrossEntropy"),s=null;if(null!=n&&(s=mn(n,"weights","softmaxCrossEntropy")),E(a.shape,i.shape,"Error in softmaxCrossEntropy: "),r>0){var u=On(r),c=On(1),l=On(a.shape[1]);a=a.mul(c.sub(u)).add(u.div(l))}var h=function(t,e,n){if(void 0===n&&(n=-1),-1===n&&(n=e.rank-1),n!==e.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+e.rank+" and dim was "+n);return ea((function(t,e,r){var o=e.logSumExp([n],!0),a=e.toFloat().sub(o);r([t,a]);return{value:a.mul(t).neg().sum([n]),gradFunc:function(t,e){var r=e[0],o=e[1],a=wn(t.shape,[n]);return[t.reshape(a).mul(r.toFloat().sub(o.exp())),t.reshape(a).mul(o.exp().sub(r.toFloat()))]}}}))(t,e)}(a,i);return Ih(h,s,o)}}),_h=Object.freeze({get Reduction(){return Ch},absoluteDifference:Rh,computeWeightedLoss:Ih,cosineDistance:kh,hingeLoss:Sh,huberLoss:Ah,logLoss:Th,meanSquaredError:Dh,sigmoidCrossEntropy:Nh,softmaxCrossEntropy:Fh});function Oh(t,e){return void 0===e&&(e=!1),Lt.tidy((function(){if(2!==t.shape.length)throw new Error("qr2d() requires a 2D Tensor, but got a "+t.shape.length+"D Tensor.");for(var n=t.shape[0],r=t.shape[1],o=oc(n),a=t.clone(),i=Bn([[1]],[1,1]),s=i.clone(),u=n>=r?r:n,c=function(t){var e,u=a,c=s,l=o;e=Lt.tidy((function(){var e=a.slice([t,t],[n-t,1]),u=e.norm(),c=a.slice([t,t],[1,1]),l=Bn([[-1]]).where(c.greater(0),Bn([[1]])),h=c.sub(l.mul(u)),f=e.div(h);s=1===f.shape[0]?i.clone():i.concat(f.slice([1,0],[f.shape[0]-1,f.shape[1]]),0);var d=l.matMul(h).div(u).neg(),p=a.slice([t,0],[n-t,r]),v=d.mul(s);if(0===t)a=p.sub(v.matMul(s.transpose().matMul(p)));else{var m=p.sub(v.matMul(s.transpose().matMul(p)));a=a.slice([0,0],[t,r]).concat(m,0)}var g=o.slice([0,t],[n,o.shape[1]-t]);if(0===t)o=g.sub(g.matMul(s).matMul(v.transpose()));else{var y=g.sub(g.matMul(s).matMul(v.transpose()));o=o.slice([0,0],[n,t]).concat(y,1)}return[s,a,o]})),s=e[0],a=e[1],o=e[2],tn([u,c,l])},l=0;l<u;++l)c(l);return!e&&n>r&&(o=o.slice([0,0],[n,r]),a=a.slice([0,0],[r,r])),[o,a]}))}var Mh=An({bandPart_:function(t,e,n){if(e%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+e+".");if(n%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+n+".");var r=mn(t,"a","bandPart");if(r.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+r.rank+".");var o=r.shape,a=r.shape.slice(-2),i=a[0],s=a[1];if(!(e<=i))throw new Error("bandPart(): numLower ("+e+") must not be greater than the number of rows ("+i+").");if(!(n<=s))throw new Error("bandPart(): numUpper ("+n+") must not be greater than the number of columns ("+s+").");e<0&&(e=i),n<0&&(n=s);var u=Kn(0,i,1,"int32").reshape([-1,1]),c=Kn(0,s,1,"int32"),l=No(u,c),h=$u(l.lessEqual(On(+e,"int32")),l.greaterEqual(On(-n,"int32"))),f=Gn([i,s],r.dtype);return mr(gr(r.reshape([-1,i,s])).map((function(t){return tc(h,t,f)}))).reshape(o)}}),Bh=An({gramSchmidt_:function(t){var e;if(Array.isArray(t)){e=!1,C(null!=t&&t.length>0,(function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"}));for(var n=t[0].shape[0],r=function(e){C(t[e].shape[0]===n,(function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+t[e].shape[0]+" vs. "+n+")"}))},o=1;o<t.length;++o)r(o)}else e=!0,t=tr(t,t.shape[0],0).map((function(t){return vr(t,[0])}));C(t.length<=t[0].shape[0],(function(){return"Gram-Schmidt: Number of vectors ("+t.length+") exceeds number of dimensions ("+t[0].shape[0]+")."}));var a=[],i=t,s=function(t){a.push(Lt.tidy((function(){var e=i[t];if(t>0)for(var n=0;n<t;++n){var r=Hl(a[n].mulStrict(e)).mul(a[n]);e=e.sub(r)}return e.div(th(e,"euclidean"))})))};for(o=0;o<t.length;++o)s(o);return e?mr(a,0):a}}),Ph=An({qr_:function(t,e){if(void 0===e&&(e=!1),t.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+t.rank);if(2===t.rank)return Oh(t,e);var n=t.shape.slice(0,t.shape.length-2).reduce((function(t,e){return t*e})),r=gr(t.reshape([n,t.shape[t.shape.length-2],t.shape[t.shape.length-1]]),0),o=[],a=[];return r.forEach((function(t){var n=Oh(t,e),r=n[0],i=n[1];o.push(r),a.push(i)})),[mr(o,0).reshape(t.shape),mr(a,0).reshape(t.shape)]}}),Lh=Object.freeze({bandPart:Mh,gramSchmidt:Bh,qr:Ph});function Wh(t,e,n,r,o,a){null==r&&(r=.5),null==o&&(o=Number.NEGATIVE_INFINITY),null==a&&(a=0);var i=t.shape[0];return n=Math.min(n,i),C(0<=r&&r<=1,(function(){return"iouThreshold must be in [0, 1], but was '"+r+"'"})),C(2===t.rank,(function(){return"boxes must be a 2D tensor, but was of rank '"+t.rank+"'"})),C(4===t.shape[1],(function(){return"boxes must have 4 columns, but 2nd dimension was "+t.shape[1]})),C(1===e.rank,(function(){return"scores must be a 1D tensor"})),C(e.shape[0]===i,(function(){return"scores has incompatible shape with boxes. Expected "+i+", but was "+e.shape[0]})),C(0<=a&&a<=1,(function(){return"softNmsSigma must be in [0, 1], but was '"+a+"'"})),{maxOutputSize:n,iouThreshold:r,scoreThreshold:o,softNmsSigma:a}}var Uh=An({resizeBilinear_:function(t,e,n){void 0===n&&(n=!1);var r=mn(t,"images","resizeBilinear");C(3===r.rank||4===r.rank,(function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+r.rank+"."})),C(2===e.length,(function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+e+"."}));var o=r,a=!1;3===r.rank&&(a=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var i=e[0],s=e[1],u=Lt.runKernelFunc((function(t,e){return e([o]),t.resizeBilinear(o,i,s,n)}),{x:o},(function(t,e){return{x:function(){return Lt.runKernelFunc((function(r){return r.resizeBilinearBackprop(t,e[0],n)}),{})}}}),"ResizeBilinear",{alignCorners:n,newHeight:i,newWidth:s});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Vh=An({resizeNearestNeighbor_:function(t,e,n){void 0===n&&(n=!1);var r=mn(t,"images","resizeNearestNeighbor");C(3===r.rank||4===r.rank,(function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+r.rank+"."})),C(2===e.length,(function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+e+"."})),C("float32"===r.dtype||"int32"===r.dtype,(function(){return"`images` must have `int32` or `float32` as dtype"}));var o=r,a=!1;3===r.rank&&(a=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var i=e[0],s=e[1],u=Lt.runKernelFunc((function(t,e){return e([o]),t.resizeNearestNeighbor(o,i,s,n)}),{batchImages:o},(function(t,e){return{batchImages:function(){return Lt.runKernelFunc((function(r){return r.resizeNearestNeighborBackprop(t,e[0],n)}),{})}}}));return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),zh=An({nonMaxSuppression_:function(t,e,n,r,o){void 0===r&&(r=.5),void 0===o&&(o=Number.NEGATIVE_INFINITY);var a=mn(t,"boxes","nonMaxSuppression"),i=mn(e,"scores","nonMaxSuppression"),s=Wh(a,i,n,r,o);n=s.maxOutputSize,r=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:n,iouThreshold:r,scoreThreshold:o};return Lt.runKernelFunc((function(t){return t.nonMaxSuppression(a,i,n,r,o)}),{boxes:a,scores:i},null,"NonMaxSuppressionV3",u)}}),Gh=function(t,e,o,a,i){return void 0===a&&(a=.5),void 0===i&&(i=Number.NEGATIVE_INFINITY),n(this,void 0,void 0,(function(){var n,s,u,c,l,h,f;return r(this,(function(r){switch(r.label){case 0:return n=mn(t,"boxes","nonMaxSuppressionAsync"),s=mn(e,"scores","nonMaxSuppressionAsync"),u=Wh(n,s,o,a,i),o=u.maxOutputSize,a=u.iouThreshold,i=u.scoreThreshold,[4,Promise.all([n.data(),s.data()])];case 1:return c=r.sent(),l=c[0],h=c[1],f=Da(l,h,o,a,i),n!==t&&n.dispose(),s!==e&&s.dispose(),[2,f]}}))}))},Hh=An({nonMaxSuppressionWithScore_:function(t,e,n,r,o,a){void 0===r&&(r=.5),void 0===o&&(o=Number.NEGATIVE_INFINITY),void 0===a&&(a=0);var i=mn(t,"boxes","nonMaxSuppression"),s=mn(e,"scores","nonMaxSuppression"),u=Wh(i,s,n,r,o,a),c={maxOutputSize:n=u.maxOutputSize,iouThreshold:r=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:a=u.softNmsSigma},l=Lt.runKernel("NonMaxSuppressionV5",{boxes:i,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),qh=function(t,e,o,a,i,s){return void 0===a&&(a=.5),void 0===i&&(i=Number.NEGATIVE_INFINITY),void 0===s&&(s=0),n(this,void 0,void 0,(function(){var n,u,c,l,h,f,d;return r(this,(function(r){switch(r.label){case 0:return n=mn(t,"boxes","nonMaxSuppressionAsync"),u=mn(e,"scores","nonMaxSuppressionAsync"),c=Wh(n,u,o,a,i,s),o=c.maxOutputSize,a=c.iouThreshold,i=c.scoreThreshold,s=c.softNmsSigma,[4,Promise.all([n.data(),u.data()])];case 1:return l=r.sent(),h=l[0],f=l[1],d=Na(h,f,o,a,i,s),n!==t&&n.dispose(),u!==e&&u.dispose(),[2,d]}}))}))},Kh=An({cropAndResize_:function(t,e,n,r,o,a){var i=mn(t,"image","cropAndResize"),s=mn(e,"boxes","cropAndResize","float32"),u=mn(n,"boxInd","cropAndResize","int32");o=o||"bilinear",a=a||0;var c=s.shape[0];return C(4===i.rank,(function(){return"Error in cropAndResize: image must be rank 4,but got rank "+i.rank+"."})),C(2===s.rank&&4===s.shape[1],(function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."})),C(1===u.rank&&u.shape[0]===c,(function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."})),C(2===r.length,(function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+r.length+"."})),C(r[0]>=1&&r[1]>=1,(function(){return"cropSize must be atleast [1,1], but was "+r})),C("bilinear"===o||"nearest"===o,(function(){return"method must be bilinear or nearest, but was "+o})),Lt.runKernelFunc((function(t,e){return t.cropAndResize(i,s,u,r,o,a)}),{images:i,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:a,cropSize:r})}}),jh=Object.freeze({resizeBilinear:Uh,resizeNearestNeighbor:Vh,nonMaxSuppression:zh,nonMaxSuppressionAsync:Gh,nonMaxSuppressionWithScore:Hh,nonMaxSuppressionWithScoreAsync:qh,cropAndResize:Kh}),Xh=function(t,e){return!(t>0)||"linear"===e},Yh=function(t,e,n){if(null==n||"linear"===n)return t;if("relu"===n)return t.mul(e.step());throw new Error("Gradient for activation "+n+" has not been implemented yet.")},$h=function(t,e){var n=e,r=Nr(t.shape,e.shape);return r.length>0&&(n=n.sum(r)),n.reshape(t.shape)},Qh=function(t,e,n){if("linear"===e)return t;if("relu"===e)return Yl(t);if("elu"===e)return Kl(t);if("relu6"===e)return $l(t);if("prelu"===e)return Xl(t,n);throw new Error("Unknown fused activation "+e+".")};var Jh=An({fusedMatMul_:function(t){var e,n=t.a,r=t.b,o=t.transposeA,a=void 0!==o&&o,i=t.transposeB,s=void 0!==i&&i,u=t.bias,c=t.activation,l=void 0===c?"linear":c,h=t.preluActivationWeights;if(!1===Xh(Lt.state.gradientDepth,l)){var f=pl(n,r,a,s);return null!=u&&(f=po(f,u)),Qh(f,l,h)}var d=mn(n,"a","fused matMul"),p=mn(r,"b","fused matMul");e=Nt(d,p),d=e[0],p=e[1];var v=a?d.shape[d.rank-2]:d.shape[d.rank-1],m=s?p.shape[p.rank-1]:p.shape[p.rank-2],g=a?d.shape[d.rank-1]:d.shape[d.rank-2],y=s?p.shape[p.rank-2]:p.shape[p.rank-1],x=d.shape.slice(0,-2),b=p.shape.slice(0,-2),w=k(x),E=k(b);C(d.rank>=2&&p.rank>=2&&d.rank===p.rank,(function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+d.rank+" and "+p.rank+"."})),C(S(x,b),(function(){return"Error in fused matMul: outer dimensions ("+x+") and ("+b+") of Tensors with shapes "+d.shape+" and "+p.shape+" must match."})),C(v===m,(function(){return"Error in fused matMul: inner shapes ("+v+") and ("+m+") of Tensors with shapes "+d.shape+" and "+p.shape+" and transposeA="+a+" and transposeB="+s+" must match."}));var R,I,A=d.shape.slice(0,-2).concat([g,y]),T=a?d.as3D(w,v,g):d.as3D(w,g,v),D=s?p.as3D(E,y,m):p.as3D(E,m,y);null!=u&&Fr(A,(R=Nt(R=mn(u,"bias","fused matMul"),d)[0]).shape),null!=h&&(I=mn(h,"prelu weights","fused matMul"));var N={a:T,b:D};null!=u&&(N.bias=R),null!=h&&(N.preluActivationWeights=I);var F=[T,D];return Lt.runKernelFunc((function(t,e){var n=t.fusedBatchMatMul({a:T,b:D,transposeA:a,transposeB:s,bias:R,activation:l,preluActivationWeights:I});return e([T,D,n]),n}),N,(function(t,e){var n=e[0],r=e[1],o=e[2],i=Yh(t,o,l),c={};return null!=u&&(c={bias:function(){return $h(R,i)}}),a||s?!a&&s?Object.assign({a:function(){return i.matMul(r,!1,!1)},b:function(){return i.matMul(n,!0,!1)}},c):a&&!s?Object.assign({a:function(){return r.matMul(i,!1,!0)},b:function(){return n.matMul(i,!1,!1)}},c):Object.assign({a:function(){return r.matMul(i,!0,!0)},b:function(){return i.matMul(n,!0,!0)}},c):Object.assign({a:function(){return i.matMul(r,!1,!0)},b:function(){return n.matMul(i,!0,!1)}},c)}),"_FusedMatMul",{transposeA:a,transposeB:s,activation:l},F,[!0]).reshape(A)}}),Zh=An({fusedConv2d_:function(t){var e=t.x,n=t.filter,r=t.strides,o=t.pad,a=t.dataFormat,i=void 0===a?"NHWC":a,s=t.dilations,u=void 0===s?[1,1]:s,c=t.dimRoundingMode,l=t.bias,h=t.activation,f=void 0===h?"linear":h,d=t.preluActivationWeights;if(f=f||"linear",!1===Xh(Lt.state.gradientDepth,f)){var p=ol(e,n,r,o,i,u,c);return null!=l&&(p=po(p,l)),Qh(p,f,d)}var v=mn(e,"x","conv2d"),m=mn(n,"filter","conv2d"),g=v,y=!1;3===v.rank&&(y=!0,g=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),C(4===g.rank,(function(){return"Error in fused conv2d: input must be rank 4, but got rank "+g.rank+"."})),C(4===m.rank,(function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+m.rank+"."})),null!=c&&C(A(o),(function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."})),C(g.shape[3]===m.shape[2],(function(){return"Error in conv2d: depth of input ("+g.shape[3]+") must match input depth for filter "+m.shape[2]+"."})),C(ya(r,u),(function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+u+"'"})),C("NHWC"===i,(function(){return"Error in conv2d: got dataFormat of "+i+" but only NHWC is currently supported."}));var x,b,w=la(g.shape,m.shape,r,u,o,c);null!=l&&(x=Nt(x=mn(l,"bias","fused conv2d"),v)[0],Fr(w.outShape,x.shape)),null!=d&&(b=mn(d,"prelu weights","fused conv2d"));var E={x:g,filter:m};null!=l&&(E.bias=x),null!=d&&(E.preluActivationWeights=b);var R=[m,g],I=Lt.runKernelFunc((function(t,e){var n=t.fusedConv2d({input:g,filter:m,convInfo:w,bias:x,activation:f,preluActivationWeights:b});return e([m,g,n]),n}),E,(function(t,e){var n=e,a=n[0],i=n[1],s=n[2],c=Yh(t,s,f);C(ga(u),(function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"}));var h={};return null!=l&&(h={bias:function(){return $h(x,c)}}),Object.assign({x:function(){return sl(i.shape,c,a,r,o)},filter:function(){return il(i,c,a.shape,r,o)}},h)}),"FusedConv2D",{convInfo:w,activation:f},R,[!0]);return y?I.as3D(I.shape[1],I.shape[2],I.shape[3]):I}}),tf=An({fusedDepthwiseConv2d_:function(t){var e=t.x,n=t.filter,r=t.strides,o=t.pad,a=t.dataFormat,i=void 0===a?"NHWC":a,s=t.dilations,u=void 0===s?[1,1]:s,c=t.dimRoundingMode,l=t.bias,h=t.activation,f=void 0===h?"linear":h,d=t.preluActivationWeights;if(!1===Xh(Lt.state.gradientDepth,f)){var p=ul(e,n,r,o,i,u,c);return null!=l&&(p=po(p,l)),Qh(p,f,d)}var v=mn(e,"x","depthwiseConv2d"),m=mn(n,"filter","depthwiseConv2d"),g=v,y=!1;3===v.rank&&(y=!0,g=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),C(4===g.rank,(function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+g.rank+"."})),C(4===m.rank,(function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+m.rank+"."})),C(g.shape[3]===m.shape[2],(function(){return"Error in fused depthwiseConv2d: number of input channels ("+g.shape[3]+") must match the inChannels dimension in filter "+m.shape[2]+"."})),null==u&&(u=[1,1]),C(ya(r,u),(function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+u+"'"})),null!=c&&C(A(o),(function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."}));var x,b,w=la(g.shape,m.shape,r,u,o,c,!0);null!=l&&(x=Nt(x=mn(l,"bias","fused conv2d"),v)[0],Fr(w.outShape,x.shape)),null!=d&&(b=mn(d,"prelu weights","fused depthwiseConv2d"));var E={x:g,filter:m};null!=l&&(E.bias=x),null!=d&&(E.preluActivationWeights=b);var R=[m,g],I=Lt.runKernelFunc((function(t,e){var n=t.fusedDepthwiseConv2D({input:g,filter:m,convInfo:w,bias:x,activation:f,preluActivationWeights:b});return e([m,g,n]),n}),E,(function(t,e){C(ga(u),(function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"}));var n=e[0],r=e[1],o=e[2],a=Yh(t,o,f),i={};return null!=l&&(i={bias:function(){return $h(x,a)}}),Object.assign({x:function(){return cl(r.shape,a,n,w)},filter:function(){return ll(r,a,n.shape,w)}},i)}),"FusedDepthwiseConv2D",{convInfo:w,activation:f},R,[!0]);return y?I.as3D(I.shape[1],I.shape[2],I.shape[3]):I}}),ef=Object.freeze({matMul:Jh,conv2d:Zh,depthwiseConv2d:tf}),nf=Object.freeze({image:jh,linalg:Lh,losses:_h,spectral:hh,fused:ef,signal:wh,broadcastTo:Xu,clone:Yu,div:_o,divNoNan:nc,eye:oc,multinomial:ac,oneHot:ic,rand:sc,randomGamma:gc,randomNormal:yc,randomUniform:xc,square:bc,squaredDifference:wc,tile:rc,truncatedNormal:Cc,conv1d:rl,conv2d:ol,conv3d:al,depthwiseConv2d:ul,separableConv2d:hl,conv2dTranspose:fl,conv3dTranspose:dl,op:An,batchNormalization2d:Tc,batchNormalization3d:Dc,batchNormalization4d:Nc,batchNormalization:Fc,batchNorm:_c,batchNorm2d:Oc,batchNorm3d:Mc,batchNorm4d:Bc,booleanMaskAsync:Zc,complex:Tn,real:Dn,imag:Nn,concat:Yn,concat1d:$n,concat2d:Qn,concat3d:Jn,concat4d:Zn,split:tr,matMul:pl,dot:vl,outerProduct:ml,reverse:gl,reverse1d:yl,reverse2d:xl,reverse3d:bl,reverse4d:wl,maxPool:Rl,avgPool:Il,pool:kl,maxPool3d:Sl,avgPool3d:Al,slice:Tl,slice1d:Dl,slice2d:Nl,slice3d:Fl,slice4d:_l,abs:_r,acos:Or,acosh:Mr,asin:Br,asinh:Pr,atan:Lr,atanh:Wr,ceil:Ur,clipByValue:Vr,cos:zr,cosh:Gr,erf:Hr,exp:qr,expm1:Kr,floor:jr,log:Xr,log1p:Yr,logSigmoid:$r,neg:Qr,reciprocal:Jr,round:Zr,rsqrt:to,sigmoid:eo,sign:no,isNaN:ro,isInf:oo,isFinite:ao,sin:io,sinh:so,softplus:uo,sqrt:co,step:lo,tan:ho,tanh:fo,all:Ml,any:Bl,argMax:Pl,argMin:Ll,logSumExp:Wl,max:Ul,mean:Vl,min:zl,moments:Gl,sum:Hl,prod:ql,equal:Pc,equalStrict:Lc,greater:Wc,greaterEqual:Uc,greaterEqualStrict:Vc,greaterStrict:zc,less:Gc,lessEqual:Hc,lessEqualStrict:qc,lessStrict:Kc,notEqual:jc,notEqualStrict:Xc,add:po,addN:vo,addStrict:mo,atan2:go,divStrict:yo,floorDiv:xo,maximum:bo,maximumStrict:wo,minimum:Co,minimumStrict:Eo,mod:Ro,modStrict:Io,mul:ko,mulStrict:So,pow:Ao,powStrict:To,squaredDifferenceStrict:Do,sub:No,subStrict:Fo,elu:Kl,leakyRelu:jl,prelu:Xl,relu:Yl,relu6:$l,selu:Ql,logicalAnd:$u,logicalNot:Qu,logicalOr:Ju,logicalXor:Zu,where:tc,whereAsync:ec,buffer:er,print:nr,batchToSpaceND:rr,cast:or,cumsum:ar,depthToSpace:ir,expandDims:sr,pad:ur,pad1d:cr,pad2d:lr,pad3d:hr,pad4d:fr,reshape:dr,spaceToBatchND:pr,squeeze:vr,stack:mr,unstack:gr,setdiff1dAsync:yr,fill:Hn,linspace:qn,ones:zn,range:Kn,scalar:On,tensor:Fn,tensor1d:Mn,tensor2d:Bn,tensor3d:Pn,tensor4d:Ln,tensor5d:Wn,tensor6d:Un,variable:Vn,zeros:Gn,onesLike:jn,zerosLike:Xn,transpose:Jl,softmax:ra,logSoftmax:oa,localResponseNormalization:Zl,norm:th,gather:Qc,unsortedSegmentSum:Jc,basicLSTMCell:eh,multiRNNCell:nh,movingAverage:rh,stridedSlice:oh,topk:ah,scatterND:ih,fft:sh,ifft:uh,rfft:ch,irfft:lh,sparseToDense:fh,gatherND:dh,diag:ph,dropout:vh,hannWindow:gh,hammingWindow:yh,frame:xh,stft:bh,inTopKAsync:Eh});function rf(t,e){Array.isArray(t)||(t=[t]),t.forEach((function(t){null!=t&&C("complex64"!==t.dtype,(function(){return e+" does not support complex64 tensors."}))}))}function of(t,e,n,r){if("linear"===n)return t.linear(e);if("relu"===n)return t.relu(e);if("elu"===n)return t.elu(e);if("relu6"===n)return t.relu6(e);if("prelu"===n)return t.prelu(e,r);throw new Error("Activation "+n+" has not been implemented for the CPU backend.")}var af=function(t){function o(){var e=t.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new aa(e,Lt),e}return e(o,t),o.prototype.write=function(t,e,n){this.firstUse&&(this.firstUse=!1,i().get("IS_NODE")&&dn("\n============================\nHi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.\n============================"));var r={};return this.data.set(r,{values:t,dtype:n}),r},o.prototype.move=function(t,e,n,r){this.data.set(t,{values:e,dtype:r})},o.prototype.numDataIds=function(){return this.data.numDataIds()},o.prototype.read=function(t){return n(this,void 0,void 0,(function(){return r(this,(function(e){return[2,this.readSync(t)]}))}))},o.prototype.readSync=function(t){var e=this.data.get(t),n=e.dtype,r=e.complexTensors;return"complex64"===n?Ra(this.readSync(r.real.dataId),this.readSync(r.imag.dataId)):this.data.get(t).values},o.prototype.bufferSync=function(t){var e=this.readSync(t.dataId),n=e;if("string"===t.dtype)try{n=e.map((function(t){return ot(t)}))}catch(t){throw new Error("Failed to decode encoded string bytes into utf-8")}return er(t.shape,t.dtype,n)},o.prototype.makeOutput=function(t,e,n){var r=this.write(t,e,n);return Lt.makeTensorFromDataId(r,e,n,this)},o.prototype.disposeData=function(t){if(this.data.has(t)){var e=this.data.get(t).complexTensors;null!=e&&(e.real.dispose(),e.imag.dispose()),this.data.delete(t)}},o.prototype.time=function(t){return n(this,void 0,void 0,(function(){var e;return r(this,(function(n){return e=et(),t(),[2,{kernelMs:et()-e}]}))}))},o.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},o.prototype.complex=function(t,e){var n=this.makeOutput(null,t.shape,"complex64");return this.data.get(n.dataId).complexTensors={real:Lt.keep(t.clone()),imag:Lt.keep(e.clone())},n},o.prototype.real=function(t){return this.data.get(t.dataId).complexTensors.real.clone()},o.prototype.imag=function(t){return this.data.get(t.dataId).complexTensors.imag.clone()},o.prototype.slice=function(t,e,n){if(rf(t,"slice"),jo(t.shape,e,n)){var r=Xo(e,t.strides),o=k(n);return Fn(this.readSync(t.dataId).subarray(r,r+o),n,t.dtype)}for(var a=er(n,t.dtype),i=this.bufferSync(t),s=0;s<a.size;++s){var u=a.indexToLoc(s).map((function(t,n){return t+e[n]}));a.values[s]=i.get.apply(i,u)}return a.toTensor()},o.prototype.stridedSlice=function(t,e,n,r){rf(t,"stridedSlice");var o=Ho(e,n,r);if(o.some((function(t){return 0===t})))return Fn([],o);for(var a=er(o,t.dtype),i=this.bufferSync(t),s=0;s<a.size;s++){for(var u=a.indexToLoc(s),c=new Array(u.length),l=0;l<c.length;l++)c[l]=u[l]*r[l]+e[l];a.set.apply(a,[i.get.apply(i,c)].concat(u))}return a.toTensor()},o.prototype.diag=function(t){for(var e=this.readSync(t.dataId),n=er([t.size,t.size],t.dtype),r=n.values,o=0;o<e.length;o++)r[o*t.size+o]=e[o];return n.toTensor()},o.prototype.unstack=function(t,e){for(var n=t.shape[e],r=new Array(t.rank-1),o=0,a=0;a<t.rank;a++)a!==e&&(r[o++]=t.shape[a]);var i=new Array(t.rank).fill(0),s=t.shape.slice();s[e]=1;var u=new Array(n);for(a=0;a<u.length;a++)i[e]=a,u[a]=this.slice(t,i,s).reshape(r);return u},o.prototype.reverse=function(t,e){rf(t,"reverse");for(var n=er(t.shape,t.dtype),r=this.bufferSync(t),o=function(o){var a=n.indexToLoc(o),i=a.slice();e.forEach((function(e){return i[e]=t.shape[e]-1-i[e]})),n.set.apply(n,[r.get.apply(r,i)].concat(a))},a=0;a<n.size;a++)o(a);return n.toTensor()},o.prototype.concat=function(t,e){var n=this;if("complex64"===t[0].dtype){var r=t.map((function(t){return Dn(t)})),o=t.map((function(t){return Nn(t)}));return Tn(this.concat(r,e),this.concat(o,e))}var a=t.map((function(t){var n=k(t.shape.slice(e));return t.as2D(-1,n)})),i=Sn(a.map((function(t){return t.shape})),1),s=er(i,t[0].dtype).values;if(1===a[0].shape[0]){var u=0;a.forEach((function(t){s.set(n.readSync(t.dataId),u),u+=t.size}))}else{var c=0;a.forEach((function(t){for(var e=n.readSync(t.dataId),r=0,o=0;o<t.shape[0];++o)for(var a=o*i[1]+c,u=0;u<t.shape[1];++u)s[a+u]=e[r++];c+=t.shape[1]}))}var l=Sn(t.map((function(t){return t.shape})),e);return Fn(s,l,t[0].dtype)},o.prototype.neg=function(t){return rf(t,"neg"),this.multiply(On(-1),t)},o.prototype.add=function(t,e){return"complex64"===t.dtype||"complex64"===e.dtype?this.broadcastedBinaryComplexOp(t.cast("complex64"),e.cast("complex64"),(function(t,e,n,r){return{real:t+n,imag:e+r}})):this.broadcastedBinaryOp(t,e,Tt(t.dtype,e.dtype),(function(t,e){return t+e}))},o.prototype.addN=function(t){var e=this;rf(t,"addN");for(var n=t.map((function(t){return e.readSync(t.dataId)})),r=er(t[0].shape,t[0].dtype),o=r.values,a=0;a<t.length;a++)for(var i=n[a],s=0;s<o.length;s++)o[s]+=i[s];return r.toTensor()},o.prototype.softmax=function(t,e){var n=O([e],t.shape),r=this.max(t,n),o=wn(r.shape,n),a=this.subtract(t,r.reshape(o)),i=this.exp(a),s=this.sum(i,n).reshape(o);return _o(i,s)},o.prototype.subtract=function(t,e){return"complex64"===t.dtype||"complex64"===e.dtype?this.broadcastedBinaryComplexOp(t.cast("complex64"),e.cast("complex64"),(function(t,e,n,r){return{real:t-n,imag:e-r}})):this.broadcastedBinaryOp(t,e,Tt(t.dtype,e.dtype),(function(t,e){return t-e}))},o.prototype.pow=function(t,e){return rf([t,e],"pow"),this.broadcastedBinaryOp(t,e,t.dtype,(function(t,e){return Math.pow(t,e)}))},o.prototype.batchMatMul=function(t,e,n,r){rf([t,e],"matMul");for(var o=n?t.shape[1]:t.shape[2],a=n?t.shape[2]:t.shape[1],i=r?e.shape[1]:e.shape[2],s=t.shape[0],u=this.readSync(t.dataId),c=this.readSync(e.dataId),l=n?[t.strides[0],1,t.strides[1]]:[t.strides[0],t.strides[1],1],h=l[0],f=l[1],d=l[2],p=r?[1,e.strides[1],e.strides[0]]:[e.strides[1],1,e.strides[0]],v=p[0],m=p[1],g=p[2],y=a*i,x=er([s,a,i],t.dtype),b=x.values,w=this.blockSize,C=0;C<s;C++)for(var E=0;E<a;E+=w)for(var R=0;R<i;R+=w)for(var I=0;I<o;I+=w)for(var k=Math.min(E+w,a),S=Math.min(R+w,i),A=Math.min(I+w,o),T=E;T<k;T++)for(var D=R;D<S;D++){for(var N=0,F=I;F<A;F++)N+=u[C*h+T*f+F*d]*c[F*v+D*m+C*g];b[C*y+(T*i+D)]+=N}return x.toTensor()},o.prototype.fusedBatchMatMul=function(t){var e=t.a,n=t.b,r=t.transposeA,o=t.transposeB,a=t.bias,i=t.activation,s=t.preluActivationWeights,u=this.batchMatMul(e,n,r,o);return a&&(u=this.add(u,a)),i&&(u=of(this,u,i,s)),u},o.prototype.multiply=function(t,e){return"complex64"===t.dtype||"complex64"===e.dtype?this.broadcastedBinaryComplexOp(t.cast("complex64"),e.cast("complex64"),(function(t,e,n,r){return{real:t*n-e*r,imag:t*r+e*n}})):this.broadcastedBinaryOp(t,e,Tt(t.dtype,e.dtype),(function(t,e){return t*e}))},o.prototype.floorDiv=function(t,e){rf([t,e],"floorDiv");return this.broadcastedBinaryOp(t,e,"int32",(function(t,e){return Math.floor(t/e)}))},o.prototype.sum=function(t,e){rf(t,"sum"),Cn("sum",e,t.rank);for(var n=bn(t.shape,e),r=n[0],o=n[1],a=Gn(r,Tt(t.dtype,"int32")),i=k(o),s=this.readSync(a.dataId),u=this.readSync(t.dataId),c=0;c<s.length;++c){for(var l=c*i,h=0,f=0;f<i;++f)h+=u[l+f];s[c]=h}return a},o.prototype.prod=function(t,e){rf(t,"sum");for(var n=bn(t.shape,e),r=n[0],o=n[1],a=Gn(r,Tt(t.dtype,"int32")),i=k(o),s=this.readSync(a.dataId),u=this.readSync(t.dataId),c=0;c<s.length;++c){for(var l=c*i,h=1,f=0;f<i;++f)h*=u[l+f];s[c]=h}return a},o.prototype.unsortedSegmentSum=function(t,e,n){rf(t,"unsortedSegmentSum");for(var r=[],o=t.rank-e.rank,a=0;a<o;++a)e=e.expandDims(a+1);for(a=0;a<n;++a){var i=On(a,"int32"),s=Pc(i,e).asType("float32").mul(t).sum(0);r.push(s)}return mr(r)},o.prototype.argMin=function(t,e){rf(t,"argMin");var n=[e];Cn("argMin",n,t.rank);for(var r=bn(t.shape,n),o=r[0],a=r[1],i=Gn(o,"int32"),s=k(a),u=this.readSync(i.dataId),c=this.readSync(t.dataId),l=0;l<u.length;++l){for(var h=l*s,f=c[h],d=0,p=0;p<s;++p){var v=c[h+p];v<f&&(f=v,d=p)}u[l]=d}return i},o.prototype.argMax=function(t,e){rf(t,"argMax");var n=[e];Cn("argMax",n,t.rank);for(var r=bn(t.shape,n),o=r[0],a=r[1],i=Gn(o,"int32"),s=k(a),u=this.readSync(i.dataId),c=this.readSync(t.dataId),l=0;l<u.length;++l){for(var h=l*s,f=c[h],d=0,p=0;p<s;++p){var v=c[h+p];v>f&&(f=v,d=p)}u[l]=d}return i},o.prototype.cumsum=function(t,e,n,r){if(rf(t,"cumsum"),e!==t.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(t.rank-1)+" but got axis="+e);for(var o=Tt(t.dtype,"int32"),a=Gn(t.shape,o),i=this.readSync(a.dataId),s=this.readSync(t.dataId),u=t.shape[t.rank-1],c=r?function(t,e){return t+u-e-1}:function(t,e){return t+e},l=0;l<s.length;l+=u)for(var h=0;h<u;h++){var f=c(l,h);if(0===h)i[f]=n?0:s[f];else{var d=c(l,h-1);i[f]=n?s[d]+i[d]:s[f]+i[d]}}return a},o.prototype.equal=function(t,e){return rf([t,e],"equal"),this.broadcastedBinaryOp(t,e,"bool",(function(t,e){return t===e?1:0}))},o.prototype.notEqual=function(t,e){return rf([t,e],"notEqual"),this.broadcastedBinaryOp(t,e,"bool",(function(t,e){return t!==e?1:0}))},o.prototype.less=function(t,e){return rf([t,e],"less"),this.broadcastedBinaryOp(t,e,"bool",(function(t,e){return t<e?1:0}))},o.prototype.lessEqual=function(t,e){return rf([t,e],"lessEqual"),this.broadcastedBinaryOp(t,e,"bool",(function(t,e){return t<=e?1:0}))},o.prototype.greater=function(t,e){return rf([t,e],"greater"),this.broadcastedBinaryOp(t,e,"bool",(function(t,e){return t>e?1:0}))},o.prototype.greaterEqual=function(t,e){return rf([t,e],"greaterEqual"),this.broadcastedBinaryOp(t,e,"bool",(function(t,e){return t>=e?1:0}))},o.prototype.logicalNot=function(t){rf(t,"logicalNot");for(var e=this.readSync(t.dataId),n=new Uint8Array(e.length),r=0;r<e.length;++r)n[r]=e[r]?0:1;return this.makeOutput(n,t.shape,"bool")},o.prototype.logicalAnd=function(t,e){return rf([t,e],"logicalAnd"),this.broadcastedBinaryOp(t,e,"bool",(function(t,e){return t&&e}))},o.prototype.logicalOr=function(t,e){return rf([t,e],"logicalOr"),this.broadcastedBinaryOp(t,e,"bool",(function(t,e){return t||e}))},o.prototype.select=function(t,e,n){rf([t,e,n],"select");for(var r=this.readSync(t.dataId),o=this.readSync(e.dataId),a=this.readSync(n.dataId),i=Gn(e.shape,Tt(e.dtype,n.dtype)),s=this.readSync(i.dataId),u=0,c=0===t.rank||t.rank>1||1===e.rank?1:k(e.shape.slice(1)),l=0;l<r.length;l++)for(var h=0;h<c;h++)1===r[l]?s[u++]=o[l]:s[u++]=a[l];return i},o.prototype.where=function(t){rf([t],"where");var e=this.readSync(t.dataId);return Wa(t.shape,e)},o.prototype.topk=function(t,e,n){return rf(t,"topk"),La(this.readSync(t.dataId),t.shape,t.dtype,e)},o.prototype.min=function(t,e){rf(t,"min"),Cn("min",e,t.rank);for(var n=bn(t.shape,e),r=n[0],o=n[1],a=Gn(r,t.dtype),i=k(o),s=this.readSync(a.dataId),u=this.readSync(t.dataId),c=0;c<s.length;++c){for(var l=c*i,h=u[l],f=0;f<i;++f){var d=u[l+f];d<h&&(h=d)}s[c]=h}return a},o.prototype.minimum=function(t,e){return rf([t,e],"minimum"),this.broadcastedBinaryOp(t,e,t.dtype,(function(t,e){return Math.min(t,e)}))},o.prototype.mod=function(t,e){return rf([t,e],"mod"),this.broadcastedBinaryOp(t,e,t.dtype,(function(t,e){var n=t%e;return t<0&&e<0||t>=0&&e>=0?n:(n+e)%e}))},o.prototype.max=function(t,e){rf(t,"max"),Cn("max",e,t.rank);for(var n=bn(t.shape,e),r=n[0],o=n[1],a=Gn(r,t.dtype),i=k(o),s=this.readSync(a.dataId),u=this.readSync(t.dataId),c=0;c<s.length;++c){for(var l=c*i,h=u[l],f=0;f<i;++f){var d=u[l+f];d>h&&(h=d)}s[c]=h}return a},o.prototype.maximum=function(t,e){return rf([t,e],"maximum"),this.broadcastedBinaryOp(t,e,t.dtype,(function(t,e){return Math.max(t,e)}))},o.prototype.all=function(t,e){rf(t,"all"),Cn("all",e,t.rank);for(var n=bn(t.shape,e),r=n[0],o=n[1],a=Gn(r,t.dtype),i=k(o),s=this.readSync(a.dataId),u=this.readSync(t.dataId),c=0;c<s.length;++c){for(var l=c*i,h=u[l],f=0;f<i;++f){var d=u[l+f];h=h&&d}s[c]=h}return a},o.prototype.any=function(t,e){rf(t,"any"),Cn("any",e,t.rank);for(var n=bn(t.shape,e),r=n[0],o=n[1],a=Gn(r,t.dtype),i=k(o),s=this.readSync(a.dataId),u=this.readSync(t.dataId),c=0;c<s.length;++c){for(var l=c*i,h=u[l],f=0;f<i;++f){var d=u[l+f];h=h||d}s[c]=h}return a},o.prototype.squaredDifference=function(t,e){return rf([t,e],"squaredDifference"),this.broadcastedBinaryOp(t,e,t.dtype,(function(t,e){var n=t-e;return n*n}))},o.prototype.ceil=function(t){rf(t,"ceil");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r)n[r]=Math.ceil(e[r]);return this.makeOutput(n,t.shape,"float32")},o.prototype.floor=function(t){rf(t,"floor");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r)n[r]=Math.floor(e[r]);return this.makeOutput(n,t.shape,"float32")},o.prototype.sign=function(t){rf(t,"x");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r)e[r]<0?n[r]=-1:e[r]>0?n[r]=1:n[r]=0;return this.makeOutput(n,t.shape,"float32")},o.prototype.isNaN=function(t){rf(t,"x");for(var e=this.readSync(t.dataId),n=new Uint8Array(e.length),r=0;r<e.length;++r)Number.isNaN(e[r])&&(n[r]=1);return this.makeOutput(n,t.shape,"bool")},o.prototype.isInf=function(t){rf(t,"x");for(var e=this.readSync(t.dataId),n=new Uint8Array(e.length),r=0;r<e.length;++r)Math.abs(e[r])===1/0&&(n[r]=1);return this.makeOutput(n,t.shape,"bool")},o.prototype.isFinite=function(t){rf(t,"x");for(var e=this.readSync(t.dataId),n=new Uint8Array(e.length),r=0;r<e.length;++r)Number.isFinite(e[r])&&(n[r]=1);return this.makeOutput(n,t.shape,"bool")},o.prototype.round=function(t){rf(t,"round");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r){var o=Math.floor(e[r]);e[r]-o<.5?n[r]=Math.floor(e[r]):e[r]-o>.5?n[r]=Math.ceil(e[r]):n[r]=o%2==0?o:o+1}return this.makeOutput(n,t.shape,"float32")},o.prototype.exp=function(t){rf(t,"exp");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r)n[r]=Math.exp(e[r]);return this.makeOutput(n,t.shape,"float32")},o.prototype.expm1=function(t){rf(t,"expm1");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r)n[r]=Math.expm1(e[r]);return this.makeOutput(n,t.shape,"float32")},o.prototype.log=function(t){rf(t,"log");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r){var o=e[r];n[r]=Math.log(o)}return this.makeOutput(n,t.shape,"float32")},o.prototype.log1p=function(t){rf(t,"log1p");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r){var o=e[r];n[r]=Math.log1p(o)}return this.makeOutput(n,t.shape,"float32")},o.prototype.sqrt=function(t){rf(t,"sqrt");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r){var o=e[r];n[r]=Math.sqrt(o)}return this.makeOutput(n,t.shape,"float32")},o.prototype.rsqrt=function(t){rf(t,"rsqrt");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r){var o=e[r];n[r]=1/Math.sqrt(o)}return this.makeOutput(n,t.shape,"float32")},o.prototype.reciprocal=function(t){rf(t,"reciprocal");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r)n[r]=1/e[r];return this.makeOutput(n,t.shape,"float32")},o.prototype.linear=function(t){return t},o.prototype.relu=function(t){rf(t,"relu");for(var e=Gn(t.shape,t.dtype),n=this.readSync(e.dataId),r=this.readSync(t.dataId),o=0;o<r.length;++o)n[o]=Math.max(0,r[o]);return e},o.prototype.relu6=function(t){rf(t,"relu");for(var e=Gn(t.shape,t.dtype),n=this.readSync(e.dataId),r=this.readSync(t.dataId),o=0;o<r.length;++o)n[o]=Math.min(Math.max(0,r[o]),6);return e},o.prototype.prelu=function(t,e){return rf([t,e],"prelu"),this.broadcastedBinaryOp(t,e,t.dtype,(function(t,e){return t<0?e*t:t}))},o.prototype.elu=function(t){rf(t,"elu");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r){var o=n[r];e[r]=o>=0?o:Math.exp(o)-1}return this.makeOutput(e,t.shape,"float32")},o.prototype.eluDer=function(t,e){rf([t,e],"eluDer");for(var n=new Float32Array(e.size),r=this.readSync(e.dataId),o=this.readSync(t.dataId),a=0;a<r.length;++a){var i=r[a];n[a]=i>=1?o[a]:o[a]*(i+1)}return this.makeOutput(n,e.shape,"float32")},o.prototype.selu=function(t){rf(t,"selu");for(var e=au,n=iu,r=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a){var i=o[a];r[a]=i>=0?n*i:e*(Math.exp(i)-1)}return this.makeOutput(r,t.shape,"float32")},o.prototype.clip=function(t,e,n){rf(t,"clip");for(var r=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a){var i=o[a];r[a]=i>n?n:i<e?e:i}return this.makeOutput(r,t.shape,"float32")},o.prototype.abs=function(t){for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.abs(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.complexAbs=function(t){for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<t.size;++r){var o=n[2*r],a=n[2*r+1];e[r]=Math.hypot(o,a)}return this.makeOutput(e,t.shape,"float32")},o.prototype.int=function(t){rf(t,"int");for(var e=new Int32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=n[r];return this.makeOutput(e,t.shape,"int32")},o.prototype.sigmoid=function(t){rf(t,"sigmoid");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=1/(1+Math.exp(-n[r]));return this.makeOutput(e,t.shape,"float32")},o.prototype.softplus=function(t){rf(t,"softplus");for(var e=Math.log(1.1920928955078125e-7)+2,n=new Float32Array(t.size),r=this.readSync(t.dataId),o=0;o<r.length;++o){var a=r[o]>-e,i=r[o]<e,s=Math.exp(r[o]),u=void 0;u=i?s:a?r[o]:Math.log(1+s),n[o]=u}return this.makeOutput(n,t.shape,"float32")},o.prototype.sin=function(t){rf(t,"sin");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.sin(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.cos=function(t){rf(t,"cos");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.cos(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.tan=function(t){rf(t,"tan");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.tan(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.asin=function(t){rf(t,"asin");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.asin(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.acos=function(t){rf(t,"acos");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.acos(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.atan=function(t){rf(t,"atan");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.atan(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.atan2=function(t,e){return rf([t,e],"atan2"),this.broadcastedBinaryOp(t,e,t.dtype,(function(t,e){return Math.atan2(t,e)}))},o.prototype.sinh=function(t){rf(t,"sinh");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.sinh(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.cosh=function(t){rf(t,"cosh");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.cosh(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.tanh=function(t){rf(t,"tanh");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=T(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.asinh=function(t){rf(t,"asinh");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.asinh(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.acosh=function(t){rf(t,"acosh");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.acosh(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.atanh=function(t){rf(t,"atanh");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.atanh(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.erf=function(t){rf(t,"erf");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r){var o=Math.sign(n[r]),a=Math.abs(n[r]),i=1/(1+.3275911*a);e[r]=o*(1-((((1.061405429*i-1.453152027)*i+1.421413741)*i-.284496736)*i+.254829592)*i*Math.exp(-a*a))}return this.makeOutput(e,t.shape,"float32")},o.prototype.step=function(t,e){void 0===e&&(e=0),rf(t,"step");for(var n=new Float32Array(t.size),r=this.readSync(t.dataId),o=0;o<r.length;++o){var a=r[o];isNaN(a)?n[o]=NaN:n[o]=a>0?1:e}return this.makeOutput(n,t.shape,"float32")},o.prototype.fusedConv2d=function(t){var e=t.input,n=t.filter,r=t.convInfo,o=t.bias,a=t.activation,i=t.preluActivationWeights,s=this.conv2d(e,n,r);return o&&(s=this.add(s,o)),a&&(s=of(this,s,a,i)),s},o.prototype.conv2d=function(t,e,n){rf([t,e],"conv2d");for(var r=n.filterHeight,o=n.filterWidth,a=n.dilationHeight,i=n.dilationWidth,s=n.padInfo.left,u=n.padInfo.top,c="channelsLast"===n.dataFormat,l=er(n.outShape,t.dtype),h=t.strides[0],f=c?t.strides[1]:t.strides[2],d=c?t.strides[2]:1,p=c?1:t.strides[1],v=l.strides[0],m=c?l.strides[1]:l.strides[2],g=c?l.strides[2]:1,y=c?1:l.strides[1],x=this.readSync(t.dataId),b=this.readSync(e.dataId),w=l.values,C=0;C<n.batchSize;++C)for(var E=C*h,R=C*v,I=0;I<n.outHeight;++I)for(var k=R+I*m,S=I*n.strideHeight-u,A=0;A<r;A++){var T=S+A*a;if(!(T<0||T>=n.inHeight))for(var D=A*e.strides[0],N=E+T*f,F=0;F<n.outWidth;++F)for(var _=k+F*g,O=F*n.strideWidth-s,M=0;M<o;M++){var B=O+M*i;if(!(B<0||B>=n.inWidth))for(var P=N+B*d,L=D+M*e.strides[1],W=0;W<n.inChannels;++W){for(var U=x[P+W*p],V=0;V<n.outChannels;++V)w[_+V*y]+=U*b[L+V];L+=n.outChannels}}}return l.toTensor()},o.prototype.conv3d=function(t,e,n){for(var r=n.filterDepth,o=n.filterHeight,a=n.filterWidth,i=n.dilationDepth,s=n.dilationHeight,u=n.dilationWidth,c=n.padInfo.front,l=n.padInfo.left,h=n.padInfo.top,f=er(n.outShape,t.dtype),d=this.readSync(t.dataId),p=this.readSync(e.dataId),v=f.values,m=0;m<n.batchSize;++m)for(var g=m*t.strides[0],y=m*f.strides[0],x=0;x<n.outDepth;++x)for(var b=y+x*f.strides[1],w=x*n.strideDepth-c,C=0;C<r;C++){var E=w+C*i;if(!(E<0||E>=n.inDepth))for(var R=C*e.strides[0],I=g+E*t.strides[1],k=0;k<n.outHeight;++k)for(var S=b+k*f.strides[2],A=k*n.strideHeight-h,T=0;T<o;T++){var D=A+T*s;if(!(D<0||D>=n.inHeight))for(var N=R+T*e.strides[1],F=I+D*t.strides[2],_=0;_<n.outWidth;++_)for(var O=S+_*n.outChannels,M=_*n.strideWidth-l,B=0;B<a;B++){var P=M+B*u;if(!(P<0||P>=n.inWidth))for(var L=N+B*e.strides[2],W=F+P*n.inChannels,U=L,V=0;V<n.inChannels;++V){for(var z=d[W+V],G=0;G<n.outChannels;++G)v[O+G]+=z*p[U+G];U+=n.outChannels}}}}return f.toTensor()},o.prototype.conv2dDerInput=function(t,e,n){rf([t,e],"conv2dDerInput");for(var r=er(n.inShape,"float32"),o=r.values,a=this.readSync(t.dataId),i=this.readSync(e.dataId),s=e.strides,u=s[0],c=s[1],l=s[2],h=n.batchSize,f=n.filterHeight,d=n.filterWidth,p=n.inChannels,v=n.inHeight,m=n.inWidth,g=n.outChannels,y=n.outHeight,x=n.outWidth,b=n.strideHeight,w=n.strideWidth,C=n.dataFormat,E=f-1-n.padInfo.top,R=d-1-n.padInfo.left,I="channelsLast"===C,k=r.strides[0],S=I?r.strides[1]:r.strides[2],A=I?r.strides[2]:1,T=I?1:r.strides[1],D=t.strides[0],N=I?t.strides[1]:t.strides[2],F=I?t.strides[2]:1,_=I?1:t.strides[1],O=0;O<h;++O)for(var M=0;M<p;++M)for(var B=0;B<v;++B)for(var P=B-E,L=Math.max(0,Math.ceil(P/b)),W=Math.min(y,(f+P)/b),U=0;U<m;++U){for(var V=U-R,z=Math.max(0,Math.ceil(V/w)),G=Math.min(x,(d+V)/w),H=0,q=L;q<W;++q)for(var K=q*b-P,j=z;j<G;++j)for(var X=D*O+N*q+F*j,Y=u*(f-1-K)+c*(d-1-(j*w-V))+l*M,$=0;$<g;++$){H+=a[X+_*$]*i[Y+$]}o[k*O+S*B+A*U+T*M]=H}return r.toTensor()},o.prototype.conv3dDerInput=function(t,e,n){for(var r=er(n.inShape,"float32"),o=r.values,a=r.strides,i=a[0],s=a[1],u=a[2],c=a[3],l=this.readSync(t.dataId),h=t.strides,f=h[0],d=h[1],p=h[2],v=h[3],m=this.readSync(e.dataId),g=e.strides,y=g[0],x=g[1],b=g[2],w=g[3],C=n.batchSize,E=n.filterDepth,R=n.filterHeight,I=n.filterWidth,k=n.inChannels,S=n.inDepth,A=n.inHeight,T=n.inWidth,D=n.outChannels,N=n.outDepth,F=n.outHeight,_=n.outWidth,O=n.strideDepth,M=n.strideHeight,B=n.strideWidth,P=E-1-n.padInfo.front,L=R-1-n.padInfo.top,W=I-1-n.padInfo.left,U=0;U<C;++U)for(var V=0;V<k;++V)for(var z=0;z<S;++z)for(var G=z-P,H=Math.max(0,Math.ceil(G/O)),q=Math.min(N,(E+G)/O),K=0;K<A;++K)for(var j=K-L,X=Math.max(0,Math.ceil(j/M)),Y=Math.min(F,(R+j)/M),$=0;$<T;++$){for(var Q=$-W,J=Math.max(0,Math.ceil(Q/B)),Z=Math.min(_,(I+Q)/B),tt=0,et=H;et<q;++et)for(var nt=et*O-G,rt=X;rt<Y;++rt)for(var ot=rt*M-j,at=J;at<Z;++at)for(var it=f*U+d*et+p*rt+v*at,st=y*(E-1-nt)+x*(R-1-ot)+b*(I-1-(at*B-Q))+w*V,ut=0;ut<D;++ut){tt+=l[it+ut]*m[st+ut]}o[i*U+s*z+u*K+c*$+V]=tt}return r.toTensor()},o.prototype.conv2dDerFilter=function(t,e,n){rf([t,e],"conv2dDerFilter");for(var r=n.strideHeight,o=n.strideWidth,a=n.filterHeight,i=n.filterWidth,s="channelsLast"===n.dataFormat,u=er(n.filterShape,"float32"),c=n.padInfo.left,l=n.padInfo.top,h=this.bufferSync(t),f=this.bufferSync(e),d=0;d<a;++d)for(var p=Math.max(0,Math.ceil((l-d)/r)),v=Math.min(n.outHeight,(n.inHeight+l-d)/r),m=0;m<i;++m)for(var g=Math.max(0,Math.ceil((c-m)/o)),y=Math.min(n.outWidth,(n.inWidth+c-m)/o),x=0;x<n.inChannels;++x)for(var b=0;b<n.outChannels;++b){for(var w=0,C=0;C<n.batchSize;++C)for(var E=p;E<v;++E)for(var R=d+E*r-l,I=g;I<y;++I){var k=m+I*o-c;w+=s?h.get(C,R,k,x)*f.get(C,E,I,b):h.get(C,x,R,k)*f.get(C,b,E,I)}u.set(w,d,m,x,b)}return u.toTensor()},o.prototype.conv3dDerFilter=function(t,e,n){for(var r=n.strideDepth,o=n.strideHeight,a=n.strideWidth,i=n.filterDepth,s=n.filterHeight,u=n.filterWidth,c=er(n.filterShape,"float32"),l=c.values,h=c.strides,f=h[0],d=h[1],p=h[2],v=h[3],m=this.readSync(e.dataId),g=e.strides,y=g[0],x=g[1],b=g[2],w=g[3],C=this.readSync(t.dataId),E=t.strides,R=E[0],I=E[1],k=E[2],S=E[3],A=n.padInfo.front,T=n.padInfo.left,D=n.padInfo.top,N=0;N<i;++N)for(var F=Math.max(0,Math.ceil((A-N)/r)),_=Math.min(n.outDepth,(n.inDepth+A-N)/r),O=N*f,M=0;M<s;++M)for(var B=Math.max(0,Math.ceil((D-M)/o)),P=Math.min(n.outHeight,(n.inHeight+D-M)/o),L=M*d+O,W=0;W<u;++W)for(var U=Math.max(0,Math.ceil((T-W)/a)),V=Math.min(n.outWidth,(n.inWidth+T-W)/a),z=W*p+L,G=0;G<n.inChannels;++G)for(var H=G*v+z,q=0;q<n.outChannels;++q){for(var K=0,j=0;j<n.batchSize;++j)for(var X=j*R,Y=j*y,$=F;$<_;++$)for(var Q=(N+$*r-A)*I+X,J=$*x+Y,Z=B;Z<P;++Z)for(var tt=(M+Z*o-D)*k+Q,et=Z*b+J,nt=U;nt<V;++nt){var rt=nt*w+et;K+=C[(W+nt*a-T)*S+tt+G]*m[rt+q]}l[H+q]=K}return c.toTensor()},o.prototype.fusedDepthwiseConv2D=function(t){var e=t.input,n=t.filter,r=t.convInfo,o=t.bias,a=t.activation,i=t.preluActivationWeights,s=this.depthwiseConv2D(e,n,r);return o&&(s=this.add(s,o)),a&&(s=of(this,s,a,i)),s},o.prototype.depthwiseConv2D=function(t,e,n){rf([t,e],"depthwiseConv2D");for(var r=n.filterHeight,o=n.filterWidth,a=n.dilationHeight,i=n.dilationWidth,s=n.padInfo.left,u=n.padInfo.top,c=n.outChannels/n.inChannels,l=er(n.outShape,t.dtype),h=this.readSync(t.dataId),f=this.readSync(e.dataId),d=l.values,p=0;p<n.batchSize;++p)for(var v=p*t.strides[0],m=p*l.strides[0],g=0;g<n.outHeight;++g)for(var y=m+g*l.strides[1],x=g*n.strideHeight-s,b=0;b<r;++b){var w=x+b*a;if(!(w<0||w>=n.inHeight))for(var C=b*e.strides[0],E=v+w*t.strides[1],R=0;R<n.outWidth;++R)for(var I=y+R*l.strides[2],k=R*n.strideWidth-u,S=0;S<o;++S){var A=k+S*i;if(!(A<0||A>=n.inWidth))for(var T=C+S*e.strides[1],D=E+A*n.inChannels,N=I,F=T,_=0;_<n.inChannels;++_){for(var O=h[D+_],M=0;M<c;++M)d[N+M]+=O*f[F+M];N+=c,F+=c}}}return l.toTensor()},o.prototype.depthwiseConv2DDerInput=function(t,e,n){rf([t,e],"depthwiseConv2DDerInput");for(var r=er(n.inShape,"float32"),o=r.values,a=r.strides,i=a[0],s=a[1],u=a[2],c=this.readSync(t.dataId),l=t.strides,h=l[0],f=l[1],d=l[2],p=this.readSync(e.dataId),v=e.strides,m=v[0],g=v[1],y=v[2],x=n.batchSize,b=n.filterHeight,w=n.filterWidth,C=n.inChannels,E=n.inHeight,R=n.inWidth,I=n.outChannels,k=n.outHeight,S=n.outWidth,A=n.strideHeight,T=n.strideWidth,D=b-1-n.padInfo.top,N=w-1-n.padInfo.left,F=I/C,_=0;_<x;++_)for(var O=0;O<C;++O)for(var M=0;M<E;++M)for(var B=M-D,P=Math.max(0,Math.ceil(B/A)),L=Math.min(k,(b+B)/A),W=0;W<R;++W){for(var U=W-N,V=Math.max(0,Math.ceil(U/T)),z=Math.min(S,(w+U)/T),G=0,H=P;H<L;++H)for(var q=H*A-B,K=V;K<z;++K)for(var j=h*_+f*H+d*K,X=m*(b-1-q)+g*(w-1-(K*T-U))+y*O,Y=0;Y<F;++Y){G+=c[j+(O*F+Y)]*p[X+Y]}o[i*_+s*M+u*W+O]=G}return r.toTensor()},o.prototype.depthwiseConv2DDerFilter=function(t,e,n){rf([t,e],"depthwiseConv2DDerFilter");for(var r=n.strideHeight,o=n.strideWidth,a=n.filterHeight,i=n.filterWidth,s=er(n.filterShape,"float32"),u=n.padInfo.left,c=n.padInfo.top,l=n.outChannels/n.inChannels,h=this.bufferSync(t),f=this.bufferSync(e),d=0;d<a;++d)for(var p=Math.max(0,Math.ceil((c-d)/r)),v=Math.min(n.outHeight,(n.inHeight+c-d)/r),m=0;m<i;++m)for(var g=Math.max(0,Math.ceil((u-m)/o)),y=Math.min(n.outWidth,(n.inWidth+u-m)/o),x=0;x<n.outChannels;++x){for(var b=Math.trunc(x/l),w=x%l,C=0,E=0;E<n.batchSize;++E)for(var R=p;R<v;++R)for(var I=d+R*r-c,k=g;k<y;++k){var S=m+k*o-u;C+=h.get(E,I,S,b)*f.get(E,R,k,x)}s.set(C,d,m,b,w)}return s.toTensor()},o.prototype.tile=function(t,e){return rf(t,"tile"),Pa(this.bufferSync(t),e)},o.prototype.pad=function(t,e,n){rf(t,"pad");var r=e.map((function(e,n){return e[0]+t.shape[n]+e[1]})),o=e.map((function(t){return t[0]})),a=this.bufferSync(t),i=er(r,t.dtype);0!==n&&i.values.fill(n);for(var s=0;s<t.size;s++){var u=a.indexToLoc(s),c=u.map((function(t,e){return t+o[e]}));i.set.apply(i,[a.get.apply(a,u)].concat(c))}return i.toTensor()},o.prototype.transpose=function(t,e){rf(t,"transpose");for(var n=new Array(t.rank),r=0;r<n.length;r++)n[r]=t.shape[e[r]];var o=this.readSync(t.dataId),a=er(n,t.dtype),i=this.bufferSync(t);for(r=0;r<t.size;++r){for(var s=i.indexToLoc(r),u=new Array(s.length),c=0;c<u.length;c++)u[c]=s[e[c]];var l=a.locToIndex(u);a.values[l]=o[r]}return a.toTensor()},o.prototype.gather=function(t,e,n){rf([t,e],"gather");var r=t.shape.slice(),o=this.readSync(e.dataId);r[n]=o.length;for(var a=er(r,t.dtype),i=this.bufferSync(t),s=0;s<a.size;++s){var u=a.indexToLoc(s),c=u.slice();c[n]=o[u[n]];var l=i.locToIndex(c);a.values[s]=i.values[l]}return a.toTensor()},o.prototype.batchToSpaceND=function(t,e,n){rf([t],"batchToSpaceND");var r=e.reduce((function(t,e){return t*e})),o=xr(t.shape,e,r),a=br(o.length,e.length),i=wr(t.shape,e,r),s=Cr(n,e.length),u=Er(i,n,e.length);return t.reshape(o).transpose(a).reshape(i).slice(s,u)},o.prototype.spaceToBatchND=function(t,e,n){rf([t],"spaceToBatchND");var r=e.reduce((function(t,e){return t*e})),o=[[0,0]];o.push.apply(o,n);for(var a=1+e.length;a<t.shape.length;++a)o.push([0,0]);var i=t.pad(o),s=xr(i.shape,e,r,!1),u=br(s.length,e.length,!1),c=wr(i.shape,e,r,!1);return i.reshape(s).transpose(u).reshape(c)},o.prototype.pool=function(t,e,n){rf(t,"pool");for(var r=e.strideHeight,o=e.strideWidth,a=e.dilationHeight,i=e.dilationWidth,s=e.effectiveFilterHeight,u=e.effectiveFilterWidth,c=e.padInfo.top,l=e.padInfo.left,h="max"===n?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,f=this.readSync(t.dataId),d=er(e.outShape,t.dtype),p=d.values,v=e.outShape[1]*e.outShape[2]*e.outShape[3],m=e.outShape[2]*e.outShape[3],g=e.outShape[3],y=0;y<e.batchSize;++y)for(var x=y*v,b=y*t.strides[0],w=0;w<e.inChannels;++w)for(var C=0;C<e.outHeight;++C)for(var E=C*r-c,R=Math.max(0,E),I=Math.min(e.inHeight,s+E),k=x+C*m,S=0;S<e.outWidth;++S){for(var A=S*o-l,T=Math.max(0,A),D=Math.min(e.inWidth,u+A),N=h,F=0,_=0,O=R;O<I;O+=a){for(var M=b+O*t.strides[1],B=T;B<D;B+=i){var P=f[M+B*t.strides[2]+w];"max"===n&&P>N?N=P:"avg"===n&&(F+=P,_++)}if(isNaN(N))break}p[k+S*g+w]="avg"===n?F/_:N}return d.toTensor()},o.prototype.maxPool=function(t,e){return this.pool(t,e,"max")},o.prototype.maxPoolPositions=function(t,e){for(var n=er(e.outShape,"int32"),r=e.strideHeight,o=e.strideWidth,a=e.dilationHeight,i=e.dilationWidth,s=e.effectiveFilterHeight,u=e.effectiveFilterWidth,c=e.padInfo.top,l=e.padInfo.left,h=this.bufferSync(t),f=0;f<e.batchSize;++f)for(var d=0;d<e.inChannels;++d)for(var p=0;p<e.outHeight;++p){for(var v=p*r-c,m=v;m<0;)m+=a;for(var g=Math.min(e.inHeight,s+v),y=0;y<e.outWidth;++y){for(var x=y*o-l,b=x;b<0;)b+=i;for(var w=Math.min(e.inWidth,u+x),C=Number.NEGATIVE_INFINITY,E=-1,R=m;R<g;R+=a)for(var I=R-v,k=b;k<w;k+=i){var S=k-x,A=h.get(f,R,k,d);A>C&&(C=A,E=I*u+S)}n.set(E,f,p,y,d)}}return n.toTensor()},o.prototype.maxPoolBackprop=function(t,e,n,r){rf([e,n],"maxPoolBackprop");for(var o=this.maxPoolPositions(e,r),a=r.strideHeight,i=r.strideWidth,s=r.dilationHeight,u=r.dilationWidth,c=r.effectiveFilterHeight,l=r.effectiveFilterWidth,h=l-1-r.padInfo.left,f=c-1-r.padInfo.top,d=er(e.shape,"float32"),p=this.bufferSync(o),v=this.bufferSync(t),m=0;m<r.batchSize;++m)for(var g=0;g<r.inChannels;++g)for(var y=0;y<r.inHeight;++y)for(var x=0;x<r.inWidth;++x){for(var b=y-f,w=x-h,C=0,E=0;E<c;E+=s){var R=(b+E)/a;if(!(R<0||R>=r.outHeight||Math.floor(R)!==R))for(var I=0;I<l;I+=u){var k=(w+I)/i;if(!(k<0||k>=r.outWidth||Math.floor(k)!==k)){var S=c*l-1-p.get(m,R,k,g)===E*l+I?1:0;if(0!==S)C+=v.get(m,R,k,g)*S}}}d.set(C,m,y,x,g)}return d.toTensor()},o.prototype.avgPoolBackprop=function(t,e,n){rf([t,e],"avgPoolBackprop");for(var r=n.strideHeight,o=n.strideWidth,a=n.filterHeight,i=n.filterWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,h=l-1-n.padInfo.left,f=c-1-n.padInfo.top,d=er(e.shape,"float32"),p=1/(a*i),v=this.bufferSync(t),m=0;m<n.batchSize;++m)for(var g=0;g<n.inChannels;++g)for(var y=0;y<n.inHeight;++y)for(var x=0;x<n.inWidth;++x){for(var b=y-f,w=x-h,C=0,E=0;E<c;E+=s){var R=(b+E)/r;if(!(R<0||R>=n.outHeight||Math.floor(R)!==R))for(var I=0;I<l;I+=u){var k=(w+I)/o;if(!(k<0||k>=n.outWidth||Math.floor(k)!==k))C+=v.get(m,R,k,g)}}d.set(C*p,m,y,x,g)}return d.toTensor()},o.prototype.pool3d=function(t,e,n){rf(t,"pool3d");for(var r=e.strideDepth,o=e.strideHeight,a=e.strideWidth,i=e.dilationDepth,s=e.dilationHeight,u=e.dilationWidth,c=e.effectiveFilterDepth,l=e.effectiveFilterHeight,h=e.effectiveFilterWidth,f=e.padInfo.front,d=e.padInfo.top,p=e.padInfo.left,v="max"===n?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,m=this.readSync(t.dataId),g=er(e.outShape,t.dtype),y=g.values,x=e.outShape[1]*e.outShape[2]*e.outShape[3]*e.outShape[4],b=e.outShape[2]*e.outShape[3]*e.outShape[4],w=e.outShape[3]*e.outShape[4],C=e.outShape[4],E=0;E<e.batchSize;++E)for(var R=E*x,I=E*t.strides[0],k=0;k<e.inChannels;++k)for(var S=0;S<e.outDepth;++S){for(var A=S*r-f,T=A;T<0;)T+=i;for(var D=Math.min(e.inDepth,c+A),N=R+S*b,F=0;F<e.outHeight;++F){for(var _=F*o-d,O=_;O<0;)O+=s;for(var M=Math.min(e.inHeight,l+_),B=N+F*w,P=0;P<e.outWidth;++P){for(var L=P*a-p,W=L;W<0;)W+=u;for(var U=Math.min(e.inWidth,h+L),V=B+P*C,z=v,G=0,H=0,q=T;q<D;q+=i){for(var K=I+q*t.strides[1],j=O;j<M;j+=s){for(var X=K+j*t.strides[2],Y=W;Y<U;Y+=u){var $=m[X+Y*t.strides[3]+k];if("max"===n&&$>z?z=$:"avg"===n&&(G+=$,H++),isNaN(z))break}if(isNaN(z))break}if(isNaN(z))break}y[V+k]="avg"===n?G/H:z}}}return g.toTensor()},o.prototype.avgPool3d=function(t,e){return rf(t,"avgPool3d"),this.pool3d(t,e,"avg").toFloat()},o.prototype.avgPool3dBackprop=function(t,e,n){rf([t,e],"avgPool3dBackprop");for(var r=n.strideDepth,o=n.strideHeight,a=n.strideWidth,i=n.filterDepth,s=n.filterHeight,u=n.filterWidth,c=n.dilationDepth,l=n.dilationHeight,h=n.dilationWidth,f=n.effectiveFilterDepth,d=n.effectiveFilterHeight,p=n.effectiveFilterWidth,v=f-1-n.padInfo.front,m=p-1-n.padInfo.left,g=d-1-n.padInfo.top,y=er(e.shape,"float32"),x=1/(i*s*u),b=this.bufferSync(t),w=0;w<n.batchSize;++w)for(var C=0;C<n.inChannels;++C)for(var E=0;E<n.inDepth;++E)for(var R=0;R<n.inHeight;++R)for(var I=0;I<n.inWidth;++I){for(var k=E-v,S=R-g,A=I-m,T=0,D=0;D<f;D+=c){var N=(k+D)/r;if(!(N<0||N>=n.outDepth||Math.floor(N)!==N))for(var F=0;F<d;F+=l){var _=(S+F)/o;if(!(_<0||_>=n.outHeight||Math.floor(_)!==_))for(var O=0;O<p;O+=h){var M=(A+O)/a;if(!(M<0||M>=n.outWidth||Math.floor(M)!==M))T+=b.get(w,N,_,M,C)}}}y.set(T*x,w,E,R,I,C)}return y.toTensor()},o.prototype.maxPool3d=function(t,e){return rf(t,"maxPool3d"),this.pool3d(t,e,"max").toFloat()},o.prototype.maxPool3dPositions=function(t,e){for(var n=er(e.outShape,"int32"),r=e.strideDepth,o=e.strideHeight,a=e.strideWidth,i=e.dilationDepth,s=e.dilationHeight,u=e.dilationWidth,c=e.effectiveFilterDepth,l=e.effectiveFilterHeight,h=e.effectiveFilterWidth,f=e.padInfo.front,d=e.padInfo.top,p=e.padInfo.left,v=this.bufferSync(t),m=0;m<e.batchSize;++m)for(var g=0;g<e.inChannels;++g)for(var y=0;y<e.outDepth;++y){for(var x=y*r-f,b=x;b<0;)b+=i;for(var w=Math.min(e.inDepth,c+x),C=0;C<e.outHeight;++C){for(var E=C*o-d,R=E;R<0;)R+=s;for(var I=Math.min(e.inHeight,l+E),k=0;k<e.outWidth;++k){for(var S=k*a-p,A=S;A<0;)A+=u;for(var T=Math.min(e.inWidth,h+S),D=Number.NEGATIVE_INFINITY,N=-1,F=b;F<w;F+=i)for(var _=F-x,O=R;O<I;O+=s)for(var M=O-E,B=A;B<T;B+=u){var P=B-S,L=v.get(m,F,O,B,g);L>=D&&(D=L,N=_*l*h+M*l+P)}n.set(N,m,y,C,k,g)}}}return n.toTensor()},o.prototype.maxPool3dBackprop=function(t,e,n,r){rf([e,n],"maxPool3dBackprop");for(var o=this.maxPool3dPositions(e,r),a=r.strideDepth,i=r.strideHeight,s=r.strideWidth,u=r.dilationDepth,c=r.dilationHeight,l=r.dilationWidth,h=r.effectiveFilterDepth,f=r.effectiveFilterHeight,d=r.effectiveFilterWidth,p=h-1-r.padInfo.front,v=d-1-r.padInfo.left,m=f-1-r.padInfo.top,g=er(e.shape,"float32"),y=this.bufferSync(o),x=this.bufferSync(t),b=0;b<r.batchSize;++b)for(var w=0;w<r.inChannels;++w)for(var C=0;C<r.inDepth;++C)for(var E=0;E<r.inHeight;++E)for(var R=0;R<r.inWidth;++R){for(var I=C-p,k=E-m,S=R-v,A=0,T=0;T<h;T+=u){var D=(I+T)/a;if(!(D<0||D>=r.outDepth||Math.floor(D)!==D))for(var N=0;N<f;N+=c){var F=(k+N)/i;if(!(F<0||F>=r.outHeight||Math.floor(F)!==F))for(var _=0;_<d;_+=l){var O=(S+_)/s;if(!(O<0||O>=r.outWidth||Math.floor(O)!==O)){var M=h*f*d-1-y.get(b,D,F,O,w)===T*f*d+N*d+_?1:0;if(0!==M)A+=x.get(b,D,F,O,w)*M}}}}g.set(A,b,C,E,R,w)}return g.toTensor()},o.prototype.cast=function(t,e){return ba(t,e,this)},o.prototype.reshape=function(t,e){return wa(t,e)},o.prototype.avgPool=function(t,e){return rf(t,"avgPool"),this.pool(t,e,"avg").toFloat()},o.prototype.resizeBilinear=function(t,e,n,r){rf(t,"resizeBilinear");for(var o=t.shape,a=o[0],i=o[1],s=o[2],u=o[3],c=this.readSync(t.dataId),l=new Float32Array(k([a,e,n,u])),h=[r&&e>1?i-1:i,r&&n>1?s-1:s],f=[r&&e>1?e-1:e,r&&n>1?n-1:n],d=0,p=h[0]/f[0],v=h[1]/f[1],m=0;m<a;m++)for(var g=0;g<e;g++)for(var y=p*g,x=Math.floor(y),b=y-x,w=Math.min(i-1,Math.ceil(y)),C=m*t.strides[0]+x*t.strides[1],E=m*t.strides[0]+w*t.strides[1],R=0;R<n;R++)for(var I=v*R,S=Math.floor(I),A=I-S,T=Math.min(s-1,Math.ceil(I)),D=C+S*t.strides[2],N=E+S*t.strides[2],F=C+T*t.strides[2],_=E+T*t.strides[2],O=0;O<u;O++){var M=c[D+O],B=c[N+O],P=M+(c[F+O]-M)*A,L=P+(B+(c[_+O]-B)*A-P)*b;l[d++]=L}return Fn(l,[a,e,n,u])},o.prototype.resizeBilinearBackprop=function(t,e,n){rf([t,e],"resizeBilinearBackprop");for(var r=e.shape,o=r[0],a=r[1],i=r[2],s=r[3],u=t.shape,c=u[1],l=u[2],h=new Float32Array(o*a*i*s),f=[n&&c>1?a-1:a,n&&l>1?i-1:i],d=[n&&c>1?c-1:c,n&&l>1?l-1:l],p=f[0]/d[0],v=f[1]/d[1],m=this.readSync(t.dataId),g=0,y=0;y<o;y++)for(var x=y*e.strides[0],b=0;b<c;b++)for(var w=b*p,C=Math.floor(w),E=Math.min(Math.ceil(w),a-1),R=x+C*e.strides[1],I=x+E*e.strides[1],k=w-C,S=1-k,A=0;A<l;A++)for(var T=A*v,D=Math.floor(T),N=Math.min(Math.ceil(T),i-1),F=T-D,_=1-F,O=R+D*e.strides[2],M=R+N*e.strides[2],B=I+D*e.strides[2],P=I+N*e.strides[2],L=S*_,W=S*F,U=k*_,V=k*F,z=0;z<s;z++){var G=m[g++];h[O+z]+=G*L,h[M+z]+=G*W,h[B+z]+=G*U,h[P+z]+=G*V}return Ln(h,[o,i,a,s],e.dtype)},o.prototype.resizeNearestNeighbor=function(t,e,n,r){rf(t,"resizeNearestNeighbor");for(var o=t.shape,a=o[0],i=o[1],s=o[2],u=o[3],c=this.readSync(t.dataId),l=new Float32Array(a*e*n*u),h=[r&&e>1?i-1:i,r&&n>1?s-1:s],f=[r&&e>1?e-1:e,r&&n>1?n-1:n],d=h[0]/f[0],p=h[1]/f[1],v=0,m=0;m<a;m++)for(var g=m*t.strides[0],y=0;y<e;y++)for(var x=d*y,b=g+Math.min(i-1,r?Math.round(x):Math.floor(x))*t.strides[1],w=0;w<n;w++)for(var C=p*w,E=b+Math.min(s-1,r?Math.round(C):Math.floor(C))*t.strides[2],R=0;R<u;R++){var I=c[E+R];l[v++]=I}return Fn(l,[a,e,n,u],t.dtype)},o.prototype.resizeNearestNeighborBackprop=function(t,e,n){rf([t,e],"resizeNearestNeighborBackprop");for(var r=e.shape,o=r[0],a=r[1],i=r[2],s=r[3],u=t.shape,c=u[1],l=u[2],h=new Float32Array(o*a*i*s),f=this.readSync(t.dataId),d=[n&&c>1?a-1:a,n&&l>1?i-1:i],p=[n&&c>1?c-1:c,n&&l>1?l-1:l],v=d[0]/p[0],m=d[1]/p[1],g=1/v,y=1/m,x=2*Math.ceil(g)+2,b=2*Math.ceil(y)+2,w=0;w<o;w++)for(var C=w*e.strides[0],E=0;E<a;E++)for(var R=C+E*e.strides[1],I=Math.floor(E*g),k=Math.floor(I-x/2),S=0;S<i;S++)for(var A=R+S*e.strides[2],T=Math.floor(S*y),D=Math.floor(T-b/2),N=0;N<s;N++){for(var F=0,_=0;_<x;_++){var O=_+k;if(!(O<0||O>=c)){var M=C+O*t.strides[1],B=O*v;if(E===Math.min(a-1,n?Math.round(B):Math.floor(B)))for(var P=0;P<b;P++){var L=P+D;if(!(L<0||L>=l)){var W=M+L*t.strides[2],U=L*m;S===Math.min(i-1,n?Math.round(U):Math.floor(U))&&(F+=f[W+N])}}}}h[A+N]=F}return Ln(h,e.shape,e.dtype)},o.prototype.batchNormalization=function(t,e,n,r,o,a){rf([t,e,n,o,a],"batchNorm");for(var i=this.readSync(t.dataId),s=this.readSync(e.dataId),u=this.readSync(n.dataId),c=o?this.readSync(o.dataId):new Float32Array([1]),l=a?this.readSync(a.dataId):new Float32Array([0]),h=new Float32Array(i.length),f=l.length,d=c.length,p=u.length,v=s.length,m=0,g=0,y=0,x=0,b=0;b<i.length;++b)h[b]=l[m++]+(i[b]-s[g++])*c[y++]/Math.sqrt(u[x++]+r),m>=f&&(m=0),g>=v&&(g=0),y>=d&&(y=0),x>=p&&(x=0);return Ln(h,t.shape)},o.prototype.localResponseNormalization4D=function(t,e,n,r,o){rf(t,"localResponseNormalization4D");var a=t.shape[3],i=a-1,s=this.readSync(t.dataId),u=t.size,c=new Float32Array(u);function l(t){for(var n=t%a,r=t-n+Math.max(0,n-e),o=t-n+Math.min(n+e,i),u=0;r<=o;r++){var c=s[r];u+=c*c}return u}for(var h=0;h<u;h++){var f=l(h),d=s[h]*Math.pow(n+r*f,-o);c[h]=d}return Ln(c,t.shape)},o.prototype.LRNGrad=function(t,e,n,r,o,a,i){rf(t,"LRNGrad");for(var s=t.shape[3],u=this.readSync(t.dataId),c=this.readSync(e.dataId),l=this.readSync(n.dataId),h=new Float32Array(t.size),f=t.size,d=0;d<f;d++){for(var p=d%s,v=d-p+Math.max(0,p-r),m=d-p+Math.min(s,p+r+1),g=0,y=v;y<m;y++)g+=Math.pow(c[y],2);g=a*g+o;for(y=v;y<m;y++){var x=-2*a*i*c[y]*l[d]/g;d===y&&(x+=Math.pow(g,-i)),x*=u[d],h[y]+=x}}return Ln(h,t.shape)},o.prototype.multinomial=function(t,e,n,r){rf(t,"multinomial");for(var o=e?t:ra(t),a=o.shape[0],i=o.shape[1],s=Gn([a,n],"int32"),u=this.readSync(s.dataId),c=this.readSync(o.dataId),l=0;l<a;++l){var h=l*i,f=new Float32Array(i-1);f[0]=c[h];for(var d=1;d<f.length;++d)f[d]=f[d-1]+c[h+d];for(var p=ju(r.toString()),v=l*n,m=0;m<n;++m){var g=p();u[v+m]=f.length;for(var y=0;y<f.length;y++)if(g<f[y]){u[v+m]=y;break}}}return s},o.prototype.oneHot=function(t,e,n,r){rf(t,"oneHot");var o=new Float32Array(t.size*e);o.fill(r);for(var a=this.readSync(t.dataId),i=0;i<t.size;++i)a[i]>=0&&a[i]<e&&(o[i*e+a[i]]=n);return Bn(o,[t.size,e],"int32")},o.prototype.nonMaxSuppression=function(t,e,n,r,o){return rf(t,"nonMaxSuppression"),Da(this.readSync(t.dataId),this.readSync(e.dataId),n,r,o)},o.prototype.fft=function(t){return this.fftBatch(t,!1)},o.prototype.ifft=function(t){return this.fftBatch(t,!0)},o.prototype.fftBatch=function(t,e){for(var n=t.shape[0],r=t.shape[1],o=er(t.shape,"float32"),a=er(t.shape,"float32"),i=Dn(t).as2D(n,r),s=Nn(t).as2D(n,r),u=0;u<n;u++)for(var c=i.slice([u,0],[1,r]),l=s.slice([u,0],[1,r]),h=Tn(c,l),f=this.readSync(this.fftImpl(h,e).dataId),d=0;d<r;d++){var p=Ia(f,d);o.values[u*r+d]=p.real,a.values[u*r+d]=p.imag}return Tn(o.toTensor(),a.toTensor()).as2D(n,r)},o.prototype.fftImpl=function(t,e){var n=t.as1D(),r=n.size;if(this.isExponentOf2(r)){var o=this.fftRadix2(n,r,e).as2D(t.shape[0],t.shape[1]);return e&&(o=Tn(Dn(o).div(On(r)),Nn(o).div(On(r)))),o}var a=this.readSync(t.dataId),i=function(t){for(var e=new Float32Array(t.length/2),n=new Float32Array(t.length/2),r=0;r<t.length;r+=2)e[r/2]=t[r],n[r/2]=t[r+1];return{real:e,imag:n}}(this.fourierTransformByMatmul(a,r,e));return Tn(i.real,i.imag).as2D(t.shape[0],t.shape[1])},o.prototype.isExponentOf2=function(t){return 0==(t&t-1)},o.prototype.fftRadix2=function(t,e,n){if(1===e)return t;var r=this.readSync(t.dataId),o=e/2,a=function(t){for(var e=Math.ceil(t.length/4),n=new Float32Array(e),r=new Float32Array(e),o=0;o<t.length;o+=4)n[Math.floor(o/4)]=t[o],r[Math.floor(o/4)]=t[o+1];return{real:n,imag:r}}(r),i=Tn(a.real,a.imag).as1D(),s=function(t){for(var e=Math.floor(t.length/4),n=new Float32Array(e),r=new Float32Array(e),o=2;o<t.length;o+=4)n[Math.floor(o/4)]=t[o],r[Math.floor(o/4)]=t[o+1];return{real:n,imag:r}}(r),u=Tn(s.real,s.imag).as1D();i=this.fftRadix2(i,o,n),u=this.fftRadix2(u,o,n);var c=function(t,e){for(var n=new Float32Array(t/2),r=new Float32Array(t/2),o=0;o<Math.ceil(t/2);o++){var a=(e?2:-2)*Math.PI*(o/t);n[o]=Math.cos(a),r[o]=Math.sin(a)}return{real:n,imag:r}}(e,n),l=Tn(c.real,c.imag).mul(u),h=i.add(l),f=i.sub(l),d=Dn(h).concat(Dn(f)),p=Nn(h).concat(Nn(f));return Tn(d,p).as1D()},o.prototype.fourierTransformByMatmul=function(t,e,n){for(var r=new Float32Array(2*e),o=0;o<e;o++){for(var a=0,i=0,s=0;s<e;s++){var u=Sa(o*s,e,n),c=Ia(t,s);a+=c.real*u.real-c.imag*u.imag,i+=c.real*u.imag+c.imag*u.real}n&&(a/=e,i/=e),ka(r,a,i,o)}return r},o.prototype.depthToSpace=function(t,e,n){C("NHWC"===n,(function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+n})),C(e>1,(function(){return"blockSize should be > 1 for depthToSpace, but was: "+e}));for(var r=t.shape[0],o=t.shape[1],a=t.shape[2],i=t.shape[3],s=o*e,u=a*e,c=i/(e*e),l=this.readSync(t.dataId),h=new Float32Array(r*s*u*c),f=0,d=0;d<r;++d)for(var p=0;p<s;++p)for(var v=Math.floor(p/e),m=p%e,g=0;g<u;++g)for(var y=Math.floor(g/e),x=(m*e+g%e)*c,b=0;b<c;++b){var w=b+x+i*(y+a*(v+o*d));h[f++]=l[w]}return Ln(h,[r,s,u,c])},o.prototype.broadcastedBinaryOp=function(t,e,n,r){var o=Fr(t.shape,e.shape),a=er(o,n),i=this.readSync(t.dataId),s=this.readSync(e.dataId),u=Dr(t.shape,o),c=Dr(e.shape,o),l=a.values;if(u.length+c.length===0)for(var h=0;h<l.length;++h)l[h]=r(i[h%i.length],s[h%s.length]);else{var f=this.bufferSync(t),d=this.bufferSync(e),p=function(n){var o=a.indexToLoc(n),h=o.slice(-t.rank);u.forEach((function(t){return h[t]=0}));var p=f.locToIndex(h),v=o.slice(-e.rank);c.forEach((function(t){return v[t]=0}));var m=d.locToIndex(v);l[n]=r(i[p],s[m])};for(h=0;h<l.length;++h)p(h)}return a.toTensor()},o.prototype.broadcastedBinaryComplexOp=function(t,e,n){var r=Fr(t.shape,e.shape),o=er(r,"float32"),a=er(r,"float32"),i=this.readSync(t.dataId),s=this.readSync(e.dataId),u=Dr(t.shape,r),c=Dr(e.shape,r),l=o.values,h=a.values;if(u.length+c.length===0)for(var f=0;f<l.length;f++){var d=f%i.length,p=f%s.length,v=n(i[2*d],i[2*d+1],s[2*p],s[2*p+1]);l[f]=v.real,h[f]=v.imag}else{var m=this.bufferSync(this.data.get(t.dataId).complexTensors.real),g=this.bufferSync(this.data.get(e.dataId).complexTensors.real),y=function(r){var a=o.indexToLoc(r),f=a.slice(-t.rank);u.forEach((function(t){return f[t]=0}));var d=m.locToIndex(f),p=a.slice(-e.rank);c.forEach((function(t){return p[t]=0}));var v=g.locToIndex(p),y=n(i[2*d],i[2*d+1],s[2*v],s[2*v+1]);l[r]=y.real,h[r]=y.imag};for(f=0;f<l.length;f++)y(f)}return this.complex(o.toTensor(),a.toTensor())},o.prototype.split=function(t,e,n){return Ba(t,e,n)},o.prototype.dispose=function(){},o.prototype.floatPrecision=function(){return 32},o.prototype.epsilon=function(){return 1e-7},o.prototype.cropAndResize=function(t,e,n,r,o,a){for(var i=t.shape,s=i[0],u=i[1],c=i[2],l=i[3],h=e.shape[0],f=r[0],d=r[1],p=er([h,f,d,l],"float32"),v=this.readSync(e.dataId),m=this.readSync(n.dataId),g=this.readSync(t.dataId),y=t.strides,x=p.strides,b=0;b<h;b++){var w=4*b,C=v[w],E=v[w+1],R=v[w+2],I=v[w+3],k=m[b];if(!(k>=s))for(var S=f>1?(R-C)*(u-1)/(f-1):0,A=d>1?(I-E)*(c-1)/(d-1):0,T=0;T<f;T++){var D=f>1?C*(u-1)+T*S:.5*(C+R)*(u-1);if(D<0||D>u-1)for(var N=0;N<d;N++)for(var F=0;F<l;F++){var _=F+N*x[2]+T*x[1]+b*x[0];p.values[_]=a}else if("bilinear"===o){var O=Math.floor(D),M=Math.ceil(D),B=D-O;for(N=0;N<d;N++){if((q=d>1?E*(c-1)+N*A:.5*(E+I)*(c-1))<0||q>c-1)for(F=0;F<l;F++){_=F+N*x[2]+T*x[1]+b*x[0];p.values[_]=a}else{var P=Math.floor(q),L=Math.ceil(q),W=q-P;for(F=0;F<l;F++){var U=g[_=F+P*y[2]+O*y[1]+k*y[0]],V=g[_=F+L*y[2]+O*y[1]+k*y[0]],z=g[_=F+P*y[2]+M*y[1]+k*y[0]],G=U+(V-U)*W,H=z+(g[_=F+L*y[2]+M*y[1]+k*y[0]]-z)*W;_=F+N*x[2]+T*x[1]+b*x[0],p.values[_]=G+(H-G)*B}}}}else for(N=0;N<d;++N){var q;if((q=d>1?E*(c-1)+N*A:.5*(E+I)*(c-1))<0||q>c-1)for(F=0;F<l;F++){_=F+N*x[2]+T*x[1]+b*x[0];p.values[_]=a}else{var K=Math.round(q),j=Math.round(D);for(F=0;F<l;F++){var X=F+K*y[2]+j*y[1]+k*y[0],Y=F+N*x[2]+T*x[1]+b*x[0];p.values[Y]=g[X]}}}}}return p.toTensor()},o.prototype.sparseToDense=function(t,e,n,r){var o=Uo(0,t,n),a=o.sliceRank,i=o.numUpdates,s=o.sliceSize,u=o.strides,c=o.outputSize;return this.scatter(t,e,n,c,s,i,a,u,r,!1)},o.prototype.gatherND=function(t,e){var n=e.shape,r=n[n.length-1],o=Oo(t,e),a=o[0],i=o[1],s=o[2],u=o[3];if(0===i)return Fn([],a,t.dtype);for(var c=new gt([i,s],t.dtype),l=this.readSync(e.dataId),h=this.readSync(t.dataId),f=0;f<i;f++){for(var d=[],p=0,v=0;v<r;v++){var m=l[f*r+v];p+=m*u[v],d.push(m)}if(p<0||p>=t.size/s)throw new Error("Invalid indices: "+d+" does not index into "+t.shape);for(var g=0;g<s;g++)c.values[f*s+g]=h[p*s+g]}return c.toTensor().reshape(a)},o.prototype.scatterND=function(t,e,n){var r=Uo(0,t,n),o=r.sliceRank,a=r.numUpdates,i=r.sliceSize,s=r.strides,u=r.outputSize,c=On(0);return this.scatter(t,e,n,u,i,a,o,s,c,!0)},o.prototype.fill=function(t,e,n){var r=P(n=n||j(e),k(t));return r.fill(e),Lt.makeTensor(r,t,n,this)},o.prototype.onesLike=function(t){if("string"===t.dtype)throw new Error("onesLike is not supported for string tensors");return this.fill(t.shape,1,t.dtype)},o.prototype.zerosLike=function(t){var e=P(t.dtype,k(t.shape));return this.makeOutput(e,t.shape,t.dtype)},o.prototype.linspace=function(t,e,n){return Ca(t,e,n)},o.prototype.scatter=function(t,e,n,r,o,a,i,s,u,c){var l=[r/o,o],h=this.readSync(t.dataId),f=this.readSync(e.dataId);if(0===r)return Fn([],n,e.dtype);var d=new gt(l,e.dtype);d.values.fill(this.readSync(u.dataId)[0]);for(var p=0;p<a;p++){for(var v=[],m=0,g=0;g<i;g++){var y=h[p*i+g];v.push(y),m+=y*s[g]}if(m<0||m>=r/o)throw new Error("Invalid indices: "+v+" does not index into "+n);for(var x=0;x<o;x++)c?d.values[m*o+x]+=f[p*o+x]:d.values[m*o+x]=0===e.rank?f[0]:f[p*o+x]}return d.toTensor().reshape(n)},o}(ia);function sf(t,e){return{kernelName:t,backendName:"cpu",kernelFunc:function(n){var r=n.inputs,o=n.backend,a=r,i=a.a,s=a.b,u=o;rf([i,s],t);var c=u.data.get(i.dataId).values,l=u.data.get(s.dataId).values,h=e(i.shape,s.shape,c,l,i.dtype),f=h[0],d=h[1];return{dataId:u.write(f,d,i.dtype),shape:d,dtype:i.dtype}}}}function uf(t){return function(e,n,r,o,a){var i=Fr(e,n),s=i.length,u=$(i),c=B(a,k(i)),l=e.length,h=n.length,f=$(e),d=$(n),p=Dr(e,i),v=Dr(n,i);if(p.length+v.length===0)for(var m=0;m<c.length;++m)c[m]=t(r[m%r.length],o[m%o.length]);else{var g=function(e){var n=it(e,s,u),a=n.slice(-l);p.forEach((function(t){return a[t]=0}));var i=at(a,l,f),m=n.slice(-h);v.forEach((function(t){return m[t]=0}));var g=at(m,h,d);c[e]=t(r[i],o[g])};for(m=0;m<c.length;++m)g(m)}return[c,i]}}Lt.registerBackend("cpu",(function(){return new af}),1);for(var cf=uf((function(t,e){return t/e})),lf=sf(Rr,cf),hf={kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(t){var e=t.inputs,n=t.backend,r=t.attrs,o=e,a=o.boxes,i=o.scores,s=r,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,f=n;rf(a,"NonMaxSuppressionWithScore");var d=Na(f.data.get(a.dataId).values,f.data.get(i.dataId).values,u,c,l,h);return[d.selectedIndices,d.selectedScores]}},ff={kernelName:"Square",backendName:"cpu",kernelFunc:function(t){var e=t.inputs,n=t.backend,r=e.x,o=n;rf(r,"square");for(var a=o.data.get(r.dataId).values,i=new Float32Array(a.length),s=0;s<a.length;++s){var u=a[s];i[s]=u*u}return{dataId:o.write(i,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}},df=uf((function(t,e){var n=t-e;return n*n})),pf=0,vf=[hf,ff,sf(Ir,df),lf];pf<vf.length;pf++){d(vf[pf])}var mf,gf=function(t){this.variableNames=["A"];var e=qa(),n=t[0],r=t[1];this.outputShape=t,this.userCode="\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2("+r+".0, "+n+".0);\n\n        vec4 values = "+e.texture2D+"(A, uv);\n        float value;\n        if (depth == 0) {\n          value = values.r;\n        } else if (depth == 1) {\n          value = values.g;\n        } else if (depth == 2) {\n          value = values.b;\n        } else if (depth == 3) {\n          value = values.a;\n        }\n\n        setOutput(floor(value * 255.0 + 0.5));\n      }\n    "},yf=function(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var e=qa(),n=t[0],r=t[1];this.outputShape=t,this.userCode="\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n\n        vec4 result = vec4(0.);\n\n        for(int row=0; row<=1; row++) {\n          for(int col=0; col<=1; col++) {\n            texC = coords[1] + row;\n            depth = coords[2] + col;\n\n            vec2 uv = (vec2(texC, texR) + halfCR) /\n                       vec2("+r+".0, "+n+".0);\n            vec4 values = "+e.texture2D+"(A, uv);\n            float value;\n            if (depth == 0) {\n              value = values.r;\n            } else if (depth == 1) {\n              value = values.g;\n            } else if (depth == 2) {\n              value = values.b;\n            } else if (depth == 3) {\n              value = values.a;\n            }\n\n            result[row * 2 + col] = floor(value * 255.0 + 0.5);\n          }\n        }\n\n        "+e.output+" = result;\n      }\n    "};for(var xf=0,bf=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(t){var e=t.inputs,n=t.backend,r=t.attrs,o=e.pixels,a=r.numChannels,s="undefined"!=typeof HTMLVideoElement&&o instanceof HTMLVideoElement,u="undefined"!=typeof HTMLImageElement&&o instanceof HTMLImageElement,c=s?[o.videoWidth,o.videoHeight]:[o.width,o.height],l=c[0],h=c[1],f=[h,l],d=[h,l,a];(u||s)&&(null==mf&&(mf=document.createElement("canvas").getContext("2d")),mf.canvas.width=l,mf.canvas.height=h,mf.drawImage(o,0,0,l,h),o=mf.canvas);var p=n.makeTensorInfo(f,"int32");n.texData.get(p.dataId).usage=zt.PIXELS,n.gpgpu.uploadPixelDataToTexture(n.getTexture(p.dataId),o);var v=i().getBool("WEBGL_PACK")?new yf(d):new gf(d),m=n.runWebGLProgram(v,[p],"int32");return n.disposeData(p.dataId),m}},{kernelName:Rr,backendName:"webgl",kernelFunc:function(t){var e=t.inputs,n=t.backend,r=e;return function(t,e,n){var r=new bi(yi,t.shape,e.shape);return i().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&(r=new Ei(wi,t.shape,e.shape,!0)),n.runWebGLProgram(r,[t,e],"float32")}(r.a,r.b,n)}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(t){var e=t.inputs,n=t.backend,r=t.attrs;dn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=e,a=o.boxes,i=o.scores,s=r,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,f=n,d=Na(f.readSync(a.dataId),f.readSync(i.dataId),u,c,l,h);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(t){var e=t.inputs,n=t.backend,r=e.x,o=n,a=new su(r.shape,"return x * x;");return o.runWebGLProgram(a,[r],r.dtype)}},{kernelName:Ir,backendName:"webgl",kernelFunc:function(t){var e=t.inputs,n=t.backend,r=e,o=r.a,a=r.b,s=n,u=i().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ei("return (a - b) * (a - b);",o.shape,a.shape):new bi("return (a - b) * (a - b);",o.shape,a.shape);return s.compileAndRun(u,[o,a])}}];xf<bf.length;xf++){d(bf[xf])}for(var wf=0,Cf=[{kernelName:Rr,inputsToSave:["a","b"],gradFunc:function(t,e){var n=e[0],r=e[1],o=Fr(n.shape,r.shape);return{a:function(){var e=_o(t,r.toFloat()),a=Nr(n.shape,o);return a.length>0?Hl(e,a).reshape(n.shape):e},b:function(){var e=t.mul(n.toFloat()),a=Nr(r.shape,o);a.length>0&&(e=Hl(e,a).reshape(r.shape));var i=bc(r);return Qr(_o(e,i.toFloat()))}}}},{kernelName:"Square",inputsToSave:["x"],gradFunc:function(t,e){var n=e[0];return{x:function(){return t.mul(n.toFloat().mul(2))}}}},{kernelName:Ir,inputsToSave:["a","b"],gradFunc:function(t,e){var n=e[0],r=e[1],o=On(2);return{a:function(){return ko(t,ko(o,No(n,r)))},b:function(){return ko(t,ko(o,No(r,n)))}}}},{kernelName:kr,gradFunc:function(t,e,n){for(var r=n,o=r.inputShape,a=r.shape,i=Array.from(a),s=o.length-1;s>=0;s--)if(o[s]===a[s])i[s]=1;else if(1!==o[s])throw new Error("broadcastTo(): ["+o+"] cannot be broadcast to ["+a+"].");var u=[];for(s=0;s<i.length;s++)i[s]>1&&u.push(s);return{x:function(){return t.sum(u,!0)}}}},{kernelName:Ar,gradFunc:function(t){return{x:function(){return t.toFloat()}}}},{kernelName:Tr,inputsToSave:["x"],gradFunc:function(t,e,n){var r=e[0],o=n.reps;return{x:function(){var e=Xn(r);if(1===r.rank)for(var n=0;n<o[0];++n)e=e.add(t.slice([n*r.shape[0]],[r.shape[0]]));else if(2===r.rank)for(n=0;n<o[0];++n)for(var a=0;a<o[1];++a)e=e.add(t.slice([n*r.shape[0],a*r.shape[1]],[r.shape[0],r.shape[1]]));else if(3===r.rank)for(n=0;n<o[0];++n)for(a=0;a<o[1];++a)for(var i=0;i<o[2];++i)e=e.add(t.slice([n*r.shape[0],a*r.shape[1],i*r.shape[2]],[r.shape[0],r.shape[1],r.shape[2]]));else{if(4!==r.rank)throw new Error("Gradient for tile operation is not implemented for rank-"+r.rank+" tensors yet.");for(n=0;n<o[0];++n)for(a=0;a<o[1];++a)for(i=0;i<o[2];++i)for(var s=0;s<o[3];++s)e=e.add(t.slice([n*r.shape[0],a*r.shape[1],i*r.shape[2],s*r.shape[3]],[r.shape[0],r.shape[1],r.shape[2],r.shape[3]]))}return e}}}},{kernelName:Sr,inputsToSave:["indices"],gradFunc:function(t,e){var n=e[0];return{indices:function(){return Gn(n.shape,"float32")}}}}];wf<Cf.length;wf++){p(Cf[wf])}var Ef=function(){function t(){}return t.prototype.fetch=function(t,e){return fetch(t,e)},t.prototype.now=function(){return performance.now()},t.prototype.encode=function(t,e){if("utf-8"!==e&&"utf8"!==e)throw new Error("Browser's encoder only supports utf-8, but got "+e);return null==this.textEncoder&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)},t.prototype.decode=function(t,e){return new TextDecoder(e).decode(t)},t}();i().get("IS_BROWSER")&&i().setPlatform("browser",new Ef);var Rf,If=function(){return __webpack_require__(17)},kf=function(){function t(){this.util=__webpack_require__(18),this.textEncoder=new this.util.TextEncoder}return t.prototype.fetch=function(t,e){return null!=i().global.fetch?i().global.fetch(t,e):(null==Rf&&(Rf=If()),Rf(t,e))},t.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},t.prototype.encode=function(t,e){if("utf-8"!==e&&"utf8"!==e)throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)},t.prototype.decode=function(t,e){return 0===t.length?"":new this.util.TextDecoder(e).decode(t)},t}();i().get("IS_NODE")&&i().setPlatform("node",new kf);var Sf={float32:4,int32:4,uint16:2,uint8:1,bool:1},Af=4;function Tf(t,e){for(var n={},r=0,o=function(e){var o=e.name,a=e.dtype,i=e.shape,s=k(i),u=void 0;if("quantization"in e){var c=e.quantization;if("uint8"!==c.dtype&&"uint16"!==c.dtype)throw new Error("Weight "+e.name+" has unknown quantization dtype "+c.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var l=Sf[c.dtype],h=t.slice(r,r+s*l),f="uint8"===c.dtype?new Uint8Array(h):new Uint16Array(h);if("float32"===a)u=Float32Array.from(f,(function(t){return t*c.scale+c.min}));else{if("int32"!==a)throw new Error("Unsupported dtype in weight '"+o+"': "+a);u=Int32Array.from(f,(function(t){return Math.round(t*c.scale+c.min)}))}r+=s*l}else if("string"===a){var d=k(e.shape);u=[];for(var p=0;p<d;p++){var v=new Uint32Array(t.slice(r,r+Af))[0];r+=Af;var m=new Uint8Array(t.slice(r,r+v));u.push(m),r+=v}}else{var g=Sf[a];h=t.slice(r,r+s*g);if("float32"===a)u=new Float32Array(h);else if("int32"===a)u=new Int32Array(h);else{if("bool"!==a)throw new Error("Unsupported dtype in weight '"+o+"': "+a);u=new Uint8Array(h)}r+=s*g}n[o]=Fn(u,i,a)},a=0,i=e;a<i.length;a++){o(i[a])}return n}function Df(t){if(null===t)throw new Error("Invalid input value: "+JSON.stringify(t));var e=0,n=[];t.forEach((function(t){if(e+=t.byteLength,n.push(t.byteLength===t.buffer.byteLength?t:new t.constructor(t)),!(t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+t.constructor.name)}));var r=new Uint8Array(e),o=0;return n.forEach((function(t){r.set(new Uint8Array(t.buffer),o),o+=t.byteLength})),r.buffer}var Nf="undefined"!=typeof Buffer&&("undefined"==typeof Blob||"undefined"==typeof atob||"undefined"==typeof btoa);function Ff(t){return Nf?Buffer.byteLength(t):new Blob([t]).size}function _f(t){var e=0;t.forEach((function(t){e+=t.byteLength}));var n=new Uint8Array(e),r=0;return t.forEach((function(t){n.set(new Uint8Array(t),r),r+=t.byteLength})),n.buffer}function Of(t){for(t=t.trim();t.endsWith("/");)t=t.slice(0,t.length-1);var e=t.split("/");return e[e.length-1]}function Mf(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==t.modelTopology?0:Ff(JSON.stringify(t.modelTopology)),weightSpecsBytes:null==t.weightSpecs?0:Ff(JSON.stringify(t.weightSpecs)),weightDataBytes:null==t.weightData?0:t.weightData.byteLength}}var Bf=function(){function t(){this.saveRouters=[],this.loadRouters=[]}return t.getInstance=function(){return null==t.instance&&(t.instance=new t),t.instance},t.registerSaveRouter=function(e){t.getInstance().saveRouters.push(e)},t.registerLoadRouter=function(e){t.getInstance().loadRouters.push(e)},t.getSaveHandlers=function(e){return t.getHandlers(e,"save")},t.getLoadHandlers=function(e,n){return t.getHandlers(e,"load",n)},t.getHandlers=function(e,n,r){var o=[];return("load"===n?t.getInstance().loadRouters:t.getInstance().saveRouters).forEach((function(t){var n=t(e,r);null!==n&&o.push(n)})),o},t}(),Pf="://",Lf=function(){function t(){this.managers={}}return t.getInstance=function(){return null==t.instance&&(t.instance=new t),t.instance},t.registerManager=function(e,n){C(null!=e,(function(){return"scheme must not be undefined or null."})),e.endsWith(Pf)&&(e=e.slice(0,e.indexOf(Pf))),C(e.length>0,(function(){return"scheme must not be an empty string."}));var r=t.getInstance();C(null==r.managers[e],(function(){return"A model store manager is already registered for scheme '"+e+"'."})),r.managers[e]=n},t.getManager=function(t){var e=this.getInstance().managers[t];if(null==e)throw new Error("Cannot find model manager for scheme '"+t+"'");return e},t.getSchemes=function(){return Object.keys(this.getInstance().managers)},t}();function Wf(t){if(-1===t.indexOf(Pf))throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+Lf.getSchemes().join(","));return{scheme:t.split(Pf)[0],path:t.split(Pf)[1]}}function Uf(t,e,o){return void 0===o&&(o=!1),n(this,void 0,void 0,(function(){var n,a,i,s,u,c,l,h,f;return r(this,(function(r){switch(r.label){case 0:return C(t!==e,(function(){return"Old path and new path are the same: '"+t+"'"})),C((n=Bf.getLoadHandlers(t)).length>0,(function(){return"Copying failed because no load handler is found for source URL "+t+"."})),C(n.length<2,(function(){return"Copying failed because more than one ("+n.length+") load handlers for source URL "+t+"."})),a=n[0],C((i=Bf.getSaveHandlers(e)).length>0,(function(){return"Copying failed because no save handler is found for destination URL "+e+"."})),C(i.length<2,(function(){return"Copying failed because more than one ("+n.length+") save handlers for destination URL "+e+"."})),s=i[0],u=Wf(t).scheme,c=Wf(t).path,l=u===Wf(t).scheme,[4,a.load()];case 1:return h=r.sent(),o&&l?[4,Lf.getManager(u).removeModel(c)]:[3,3];case 2:r.sent(),r.label=3;case 3:return[4,s.save(h)];case 4:return f=r.sent(),!o||l?[3,6]:[4,Lf.getManager(u).removeModel(c)];case 5:r.sent(),r.label=6;case 6:return[2,f.modelArtifactsInfo]}}))}))}var Vf="models_store",zf="model_info_store";function Gf(){if(!i().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var t=window||self,e=t.indexedDB||t.mozIndexedDB||t.webkitIndexedDB||t.msIndexedDB||t.shimIndexedDB;if(null==e)throw new Error("The current browser does not appear to support IndexedDB.");return e}function Hf(t){var e=t.result;e.createObjectStore(Vf,{keyPath:"modelPath"}),e.createObjectStore(zf,{keyPath:"modelPath"})}var qf=function(){function t(t){if(this.indexedDB=Gf(),null==t||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}return t.prototype.save=function(t){return n(this,void 0,void 0,(function(){return r(this,(function(e){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,t)]}))}))},t.prototype.load=function(){return n(this,void 0,void 0,(function(){return r(this,(function(t){return[2,this.databaseAction(this.modelPath)]}))}))},t.prototype.databaseAction=function(t,e){var n=this;return new Promise((function(t,r){var o=n.indexedDB.open("tensorflowjs",1);o.onupgradeneeded=function(){return Hf(o)},o.onsuccess=function(){var a=o.result;if(null==e){var i=a.transaction(Vf,"readonly"),s=i.objectStore(Vf).get(n.modelPath);s.onsuccess=function(){if(null==s.result)return a.close(),r(new Error("Cannot find model with path '"+n.modelPath+"' in IndexedDB."));t(s.result.modelArtifacts)},s.onerror=function(t){return a.close(),r(s.error)},i.oncomplete=function(){return a.close()}}else{var u,c=Mf(e),l=a.transaction(zf,"readwrite"),h=l.objectStore(zf),f=h.put({modelPath:n.modelPath,modelArtifactsInfo:c});f.onsuccess=function(){var o=(u=a.transaction(Vf,"readwrite")).objectStore(Vf).put({modelPath:n.modelPath,modelArtifacts:e,modelArtifactsInfo:c});o.onsuccess=function(){return t({modelArtifactsInfo:c})},o.onerror=function(t){var e=(h=l.objectStore(zf)).delete(n.modelPath);e.onsuccess=function(){return a.close(),r(o.error)},e.onerror=function(t){return a.close(),r(o.error)}}},f.onerror=function(t){return a.close(),r(f.error)},l.oncomplete=function(){null==u?a.close():u.oncomplete=function(){return a.close()}}}},o.onerror=function(t){return r(o.error)}}))},t.URL_SCHEME="indexeddb://",t}(),Kf=function(t){return i().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(qf.URL_SCHEME)?(e=t.slice(qf.URL_SCHEME.length),new qf(e)):null;var e};Bf.registerSaveRouter(Kf),Bf.registerLoadRouter(Kf);var jf=function(){function t(){this.indexedDB=Gf()}return t.prototype.listModels=function(){return n(this,void 0,void 0,(function(){var t=this;return r(this,(function(e){return[2,new Promise((function(e,n){var r=t.indexedDB.open("tensorflowjs",1);r.onupgradeneeded=function(){return Hf(r)},r.onsuccess=function(){var t=r.result,o=t.transaction(zf,"readonly"),a=o.objectStore(zf).getAll();a.onsuccess=function(){for(var t={},n=0,r=a.result;n<r.length;n++){var o=r[n];t[o.modelPath]=o.modelArtifactsInfo}e(t)},a.onerror=function(e){return t.close(),n(a.error)},o.oncomplete=function(){return t.close()}},r.onerror=function(t){return n(r.error)}}))]}))}))},t.prototype.removeModel=function(t){return n(this,void 0,void 0,(function(){var e=this;return r(this,(function(n){var r;return t=(r=t).startsWith(qf.URL_SCHEME)?r.slice(qf.URL_SCHEME.length):r,[2,new Promise((function(n,r){var o=e.indexedDB.open("tensorflowjs",1);o.onupgradeneeded=function(){return Hf(o)},o.onsuccess=function(){var e,a=o.result,i=a.transaction(zf,"readwrite"),s=i.objectStore(zf),u=s.get(t);u.onsuccess=function(){if(null==u.result)return a.close(),r(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var o=s.delete(t),i=function(){var o=(e=a.transaction(Vf,"readwrite")).objectStore(Vf).delete(t);o.onsuccess=function(){return n(u.result.modelArtifactsInfo)},o.onerror=function(t){return r(u.error)}};o.onsuccess=i,o.onerror=function(t){return i(),a.close(),r(u.error)}},u.onerror=function(t){return a.close(),r(u.error)},i.oncomplete=function(){null==e?a.close():e.oncomplete=function(){return a.close()}}},o.onerror=function(t){return r(o.error)}}))]}))}))},t}();if(i().getBool("IS_BROWSER"))try{Lf.registerManager(qf.URL_SCHEME,new jf)}catch(t){}var Xf="/",Yf="tensorflowjs_models",$f="info",Qf="model_topology",Jf="weight_specs",Zf="weight_data",td="model_metadata";function ed(t){return{info:[Yf,t,$f].join(Xf),topology:[Yf,t,Qf].join(Xf),weightSpecs:[Yf,t,Jf].join(Xf),weightData:[Yf,t,Zf].join(Xf),modelMetadata:[Yf,t,td].join(Xf)}}function nd(t){var e=t.split(Xf);if(e.length<3)throw new Error("Invalid key format: "+t);return e.slice(1,e.length-1).join(Xf)}var rd=function(){function t(t){if(!i().getBool("IS_BROWSER")||"undefined"==typeof window||void 0===window.localStorage)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==t||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=ed(this.modelPath)}return t.prototype.save=function(t){return n(this,void 0,void 0,(function(){var e,n,o;return r(this,(function(r){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(t.modelTopology),n=JSON.stringify(t.weightSpecs),o=Mf(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,function(t){if(Nf)return Buffer.from(t).toString("base64");for(var e=new Uint8Array(t),n="",r=0,o=e.length;r<o;r++)n+=String.fromCharCode(e[r]);return btoa(n)}(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch(t){throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]}))}))},t.prototype.load=function(){return n(this,void 0,void 0,(function(){var t,e,n,o,a,i,s;return r(this,(function(r){if(null==(t=JSON.parse(this.LS.getItem(this.keys.info))))throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if("JSON"!==t.modelTopologyType)throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},null==(n=JSON.parse(this.LS.getItem(this.keys.topology))))throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=n,null==(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs))))throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=o,null!=(a=this.LS.getItem(this.keys.modelMetadata))&&(i=JSON.parse(a),e.format=i.format,e.generatedBy=i.generatedBy,e.convertedBy=i.convertedBy,e.userDefinedMetadata=i.userDefinedMetadata),null==(s=this.LS.getItem(this.keys.weightData)))throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=function(t){if(Nf){var e=Buffer.from(t,"base64");return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}for(var n=atob(t),r=new Uint8Array(n.length),o=0;o<n.length;++o)r.set([n.charCodeAt(o)],o);return r.buffer}(s),[2,e]}))}))},t.URL_SCHEME="localstorage://",t}(),od=function(t){return i().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(rd.URL_SCHEME)?(e=t.slice(rd.URL_SCHEME.length),new rd(e)):null;var e};Bf.registerSaveRouter(od),Bf.registerLoadRouter(od);var ad=function(){function t(){C(i().getBool("IS_BROWSER"),(function(){return"Current environment is not a web browser"})),C("undefined"==typeof window||void 0!==window.localStorage,(function(){return"Current browser does not appear to support localStorage"})),this.LS=window.localStorage}return t.prototype.listModels=function(){return n(this,void 0,void 0,(function(){var t,e,n,o,a,i;return r(this,(function(r){for(t={},e=Yf+Xf,n=Xf+$f,o=0;o<this.LS.length;++o)(a=this.LS.key(o)).startsWith(e)&&a.endsWith(n)&&(i=nd(a),t[i]=JSON.parse(this.LS.getItem(a)));return[2,t]}))}))},t.prototype.removeModel=function(t){return n(this,void 0,void 0,(function(){var e,n;return r(this,(function(r){var o;if(t=(o=t).startsWith(rd.URL_SCHEME)?o.slice(rd.URL_SCHEME.length):o,e=ed(t),null==this.LS.getItem(e.info))throw new Error("Cannot find model at path '"+t+"'");return n=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,n]}))}))},t}();if(i().getBool("IS_BROWSER"))try{Lf.registerManager(rd.URL_SCHEME,new ad)}catch(t){}var id="model",sd=".json",ud=".weights.bin";function cd(t){return new Promise((function(t){return setTimeout(t)})).then(t)}var ld=function(){function t(e){if(!i().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(t.URL_SCHEME)&&(e=e.slice(t.URL_SCHEME.length)),null!=e&&0!==e.length||(e=id),this.modelTopologyFileName=e+sd,this.weightDataFileName=e+ud}return t.prototype.save=function(t){return n(this,void 0,void 0,(function(){var e,n,o,a,i,s;return r(this,(function(r){switch(r.label){case 0:if("undefined"==typeof document)throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return n=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:n},a=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(i=null==this.jsonAnchor?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,i.href=a,[4,cd((function(){return i.dispatchEvent(new MouseEvent("click"))}))];case 2:return r.sent(),null==t.weightData?[3,4]:((s=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=e,[4,cd((function(){return s.dispatchEvent(new MouseEvent("click"))}))]);case 3:r.sent(),r.label=4;case 4:return[2,{modelArtifactsInfo:Mf(t)}]}}))}))},t.URL_SCHEME="downloads://",t}(),hd=function(){function t(t){if(null==t||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}return t.prototype.load=function(){return n(this,void 0,void 0,(function(){var t,e,n=this;return r(this,(function(r){return t=this.files[0],e=this.files.slice(1),[2,new Promise((function(r,o){var a=new FileReader;a.onload=function(a){var i=JSON.parse(a.target.result),s=i.modelTopology;if(null!=s){0===e.length&&r({modelTopology:s});var u=i.weightsManifest;if(null!=u){var c;try{c=n.checkManifestAndWeightFiles(u,e)}catch(t){return void o(t)}var l=[],h=[],f=[];u.forEach((function(t){t.paths.forEach((function(t){h.push(t),f.push(null)})),l.push.apply(l,t.weights)})),u.forEach((function(t){t.paths.forEach((function(t){var e=new FileReader;e.onload=function(e){var n=e.target.result,o=h.indexOf(t);f[o]=n,-1===f.indexOf(null)&&r({modelTopology:s,weightSpecs:l,weightData:_f(f),format:i.format,generatedBy:i.generatedBy,convertedBy:i.convertedBy,userDefinedMetadata:i.userDefinedMetadata})},e.onerror=function(e){return o("Failed to weights data from file of path '"+t+"'.")},e.readAsArrayBuffer(c[t])}))}))}else o(new Error("weightManifest field is missing from file "+t.name))}else o(new Error("modelTopology field is missing from file "+t.name))},a.onerror=function(e){return o("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},a.readAsText(t)}))]}))}))},t.prototype.checkManifestAndWeightFiles=function(t,e){for(var n=[],r=e.map((function(t){return Of(t.name)})),o={},a=0,i=t;a<i.length;a++){i[a].paths.forEach((function(t){var a=Of(t);if(-1!==n.indexOf(a))throw new Error("Duplicate file basename found in weights manifest: '"+a+"'");if(n.push(a),-1===r.indexOf(a))throw new Error("Weight file with basename '"+a+"' is not provided.");o[t]=e[r.indexOf(a)]}))}if(n.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+n.length+") and the number of weight files provided ("+e.length+").");return o},t}();function fd(t,e,n,r){!function(t){C(null!=t&&Array.isArray(t)&&t.length>0,(function(){return"promises must be a none empty array"}))}(t),function(t,e){C(t>=0&&t<=1,(function(){return"Progress fraction must be in range [0, 1], but got startFraction "+t})),C(e>=0&&e<=1,(function(){return"Progress fraction must be in range [0, 1], but got endFraction "+e})),C(e>=t,(function(){return"startFraction must be no more than endFraction, but got startFraction "+t+" and endFraction "+e}))}(n=null==n?0:n,r=null==r?1:r);var o=0;return Promise.all(t.map((function(a){return a.then((function(a){var i=n+ ++o/t.length*(r-n);return e(i),a})),a})))}function dd(t,e){return n(this,void 0,void 0,(function(){var n,o,a,s,u,c,l,h,f;return r(this,(function(r){switch(r.label){case 0:return null==e&&(e={}),n=null==e.fetchFunc?i().platform.fetch:e.fetchFunc,o=t.map((function(t){return n(t,e.requestInit,{isBinary:!0})})),a=0,s=.5,null!=e.onProgress?[3,2]:[4,Promise.all(o)];case 1:return u=r.sent(),[3,4];case 2:return[4,fd(o,e.onProgress,a,s)];case 3:u=r.sent(),r.label=4;case 4:return c=u.map((function(t){return t.arrayBuffer()})),l=.5,h=1,null!=e.onProgress?[3,6]:[4,Promise.all(c)];case 5:return f=r.sent(),[3,8];case 6:return[4,fd(c,e.onProgress,l,h)];case 7:f=r.sent(),r.label=8;case 8:return[2,f]}}))}))}function pd(t){var e=this;return function(o,a,i){return void 0===a&&(a=""),n(e,void 0,void 0,(function(){var e,n,s,u,c,l,h,f,d,p;return r(this,(function(r){switch(r.label){case 0:if(e=o.map((function(){return!1})),n={},s=null!=i?i.map((function(){return!1})):[],u=[],o.forEach((function(t,r){var o=0;t.weights.forEach((function(t){var a="quantization"in t?t.quantization.dtype:t.dtype,c=Sf[a]*k(t.shape),l=function(){e[r]=!0,null==n[r]&&(n[r]=[]),n[r].push({manifestEntry:t,groupOffset:o,sizeBytes:c})};null!=i?i.forEach((function(e,n){e===t.name&&(l(),s[n]=!0)})):l(),u.push(t.name),o+=c}))})),!s.every((function(t){return t})))throw c=i.filter((function(t,e){return!s[e]})),new Error("Could not find weights in manifest with names: "+c.join(", ")+". \nManifest JSON has weights with names: "+u.join(", ")+".");return l=e.reduce((function(t,e,n){return e&&t.push(n),t}),[]),h=[],l.forEach((function(t){o[t].paths.forEach((function(t){var e=a+(a.endsWith("/")?"":"/")+t;h.push(e)}))})),[4,t(h)];case 1:return f=r.sent(),d={},p=0,l.forEach((function(t){for(var e=o[t].paths.length,r=0,a=0;a<e;a++)r+=f[p+a].byteLength;for(var i=new ArrayBuffer(r),s=new Uint8Array(i),u=0,c=0;c<e;c++){var l=new Uint8Array(f[p+c]);s.set(l,u),u+=l.byteLength}n[t].forEach((function(t){var e=Tf(i.slice(t.groupOffset,t.groupOffset+t.sizeBytes),[t.manifestEntry]);for(var n in e)d[n]=e[n]})),p+=e})),[2,d]}}))}))}}Bf.registerSaveRouter((function(t){return i().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(ld.URL_SCHEME)?function(t){void 0===t&&(t="model");return new ld(t)}(t.slice(ld.URL_SCHEME.length)):null}));var vd=function(){function t(t,e){if(this.DEFAULT_METHOD="POST",null==e&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,null!=e.fetchFunc?(C("function"==typeof e.fetchFunc,(function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"})),this.fetch=e.fetchFunc):this.fetch=i().platform.fetch,C(null!=t&&t.length>0,(function(){return"URL path for http must not be null, undefined or empty."})),Array.isArray(t)&&C(2===t.length,(function(){return"URL paths for http must have a length of 2, (actual length is "+t.length+")."})),this.path=t,null!=e.requestInit&&null!=e.requestInit.body)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}return t.prototype.save=function(t){return n(this,void 0,void 0,(function(){var e,n,o,a;return r(this,(function(r){switch(r.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:n},e.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),null!=t.weightData&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((a=r.sent()).ok)return[2,{modelArtifactsInfo:Mf(t),responses:[a]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+a.status+".")}}))}))},t.prototype.load=function(){return n(this,void 0,void 0,(function(){var t,e,n,o,a,i,s,u,c,l,h,f;return r(this,(function(r){switch(r.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=r.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");r.label=2;case 2:return r.trys.push([2,4,,5]),[4,t.json()];case 3:return e=r.sent(),[3,5];case 4:throw r.sent(),n="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?n+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":n+=" Please make sure the server is serving valid JSON for this request.",new Error(n);case 5:if(o=e.modelTopology,a=e.weightsManifest,i=e.generatedBy,s=e.convertedBy,u=e.format,c=e.userDefinedMetadata,null==o&&null==a)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return null==a?[3,7]:[4,this.loadWeights(a)];case 6:f=r.sent(),l=f[0],h=f[1],r.label=7;case 7:return[2,{modelTopology:o,weightSpecs:l,weightData:h,userDefinedMetadata:c,generatedBy:i,convertedBy:s,format:u}]}}))}))},t.prototype.loadWeights=function(t){return n(this,void 0,void 0,(function(){var e,n,o,a,i,s,u,c,l,h,f;return r(this,(function(r){switch(r.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,n=function(t){var e=t.lastIndexOf("/"),n=t.lastIndexOf("?"),r=t.substring(0,e),o=n>e?t.substring(n):"";return[r+"/",o]}(e),o=n[0],a=n[1],i=this.weightPathPrefix||o,s=[],u=0,c=t;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return h=[],t.forEach((function(t){t.paths.forEach((function(t){h.push(i+t+a)}))})),[4,dd(h,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return f=r.sent(),[2,[s,_f(f)]]}}))}))},t.URL_SCHEME_REGEX=/^https?:\/\//,t}();function md(t){return null!=t.match(vd.URL_SCHEME_REGEX)}var gd=function(t,e){if("undefined"==typeof fetch)return null;return(Array.isArray(t)?t.every((function(t){return md(t)})):md(t))?yd(t,{onProgress:e}):null};function yd(t,e){return new vd(t,e)}Bf.registerSaveRouter(gd),Bf.registerLoadRouter(gd);var xd=function(){function t(t){this.modelArtifacts=t}return t.prototype.load=function(){return n(this,void 0,void 0,(function(){return r(this,(function(t){return[2,this.modelArtifacts]}))}))},t}(),bd=function(){function t(t){this.saveHandler=t}return t.prototype.save=function(t){return n(this,void 0,void 0,(function(){return r(this,(function(e){return[2,this.saveHandler(t)]}))}))},t}();var wd=Object.freeze({browserFiles:function(t){return new hd(t)},browserHTTPRequest:function(t,e){return yd(t,e)},concatenateArrayBuffers:_f,decodeWeights:Tf,encodeWeights:function(t,e){return n(this,void 0,void 0,(function(){var o,a,i,s,u,c=this;return r(this,(function(l){switch(l.label){case 0:for(o=[],a=[],i=Array.isArray(t)?t.map((function(t){return t.name})):Object.keys(t),s=function(s){var u=i[s],l=Array.isArray(t)?t[s].tensor:t[u];if("float32"!==l.dtype&&"int32"!==l.dtype&&"bool"!==l.dtype&&"string"!==l.dtype)throw new Error("Unsupported dtype in weight '"+u+"': "+l.dtype);var h={name:u,shape:l.shape,dtype:l.dtype};if("string"===l.dtype){var f=new Promise((function(t){return n(c,void 0,void 0,(function(){var e,n,o,a,i,s,u;return r(this,(function(r){switch(r.label){case 0:return[4,l.bytes()];case 1:for(e=r.sent(),n=e.reduce((function(t,e){return t+e.length}),0)+Af*e.length,o=new Uint8Array(n),a=0,i=0;i<e.length;i++)s=e[i],u=new Uint8Array(new Uint32Array([s.length]).buffer),o.set(u,a),a+=Af,o.set(s,a),a+=s.length;return t(o),[2]}}))}))}));a.push(f)}else a.push(l.data());null!=e&&(h.group=e),o.push(h)},u=0;u<i.length;++u)s(u);return[4,Promise.all(a)];case 1:return[2,{data:Df(l.sent()),specs:o}]}}))}))},fromMemory:function(t,e,n,r){return 1===arguments.length?null!=t.modelTopology||null!=t.weightSpecs?new xd(t):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new xd({modelTopology:t})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new xd({modelTopology:t,weightSpecs:e,weightData:n,trainingConfig:r}))},getLoadHandlers:function(t,e){return Bf.getLoadHandlers(t,e)},getModelArtifactsInfoForJSON:Mf,getSaveHandlers:function(t){return Bf.getSaveHandlers(t)},http:yd,isHTTPScheme:md,loadWeights:function(t,e,o,a){return void 0===e&&(e=""),n(this,void 0,void 0,(function(){return r(this,(function(n){return[2,pd((function(t){return dd(t,{requestInit:a})}))(t,e,o)]}))}))},registerLoadRouter:function(t){return Bf.registerLoadRouter(t)},registerSaveRouter:function(t){return Bf.registerSaveRouter(t)},weightsLoaderFactory:pd,withSaveHandler:function(t){return new bd(t)},copyModel:function(t,e){return n(this,void 0,void 0,(function(){return r(this,(function(n){return!1,[2,Uf(t,e,!1)]}))}))},listModels:function(){return n(this,void 0,void 0,(function(){var t,e,n,o,a,i,s;return r(this,(function(r){switch(r.label){case 0:t=Lf.getSchemes(),e={},n=0,o=t,r.label=1;case 1:return n<o.length?(a=o[n],[4,Lf.getManager(a).listModels()]):[3,4];case 2:for(s in i=r.sent())e[a+Pf+s]=i[s];r.label=3;case 3:return n++,[3,1];case 4:return[2,e]}}))}))},moveModel:function(t,e){return n(this,void 0,void 0,(function(){return r(this,(function(n){return!0,[2,Uf(t,e,!0)]}))}))},removeModel:function(t){return n(this,void 0,void 0,(function(){var e;return r(this,(function(n){return e=Wf(t),[2,Lf.getManager(e.scheme).removeModel(e.path)]}))}))}});var Cd,Ed=An({confusionMatrix_:function(t,e,n){var r=mn(t,"labels","confusionMatrix"),o=mn(e,"predictions","confusionMatrix");C(null==n||n>0&&Number.isInteger(n),(function(){return"If provided, numClasses must be a positive integer, but got "+n})),C(1===r.rank,(function(){return"Expected the rank of labels to be 1, but got "+r.rank})),C(1===o.rank,(function(){return"Expected the rank of predictions to be 1, but got "+o.rank})),C(r.shape[0]===o.shape[0],(function(){return"Mismatch in the number of examples: "+r.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."})),C(n>0&&Number.isInteger(n),(function(){return"numClasses is required to be a positive integer, but got "+n}));var a=ic(r.asType("int32"),n),i=ic(o.asType("int32"),n);return a.transpose().matMul(i).asType("int32")}}),Rd=Object.freeze({confusionMatrix:Ed});var Id=An({fromPixels_:function(t,e){if(void 0===e&&(e=3),e>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(null==t)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var n=!1,r=!1,o=!1,a=!1,i=!1;if(t.data instanceof Uint8Array)n=!0;else if("undefined"!=typeof ImageData&&t instanceof ImageData)r=!0;else if("undefined"!=typeof HTMLVideoElement&&t instanceof HTMLVideoElement)o=!0;else if("undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement)a=!0;else{if(null==t.getContext)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+t.constructor.name);i=!0}if(o){if(o&&t.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.")}if(null!=l("FromPixels",Lt.backendName))return Lt.runKernel("FromPixels",{pixels:t},{numChannels:e});var s,u,c=o?[t.videoWidth,t.videoHeight]:[t.width,t.height],h=c[0],f=c[1];if(i?s=t.getContext("2d").getImageData(0,0,h,f).data:r||n?s=t.data:(a||o)&&(null==Cd&&(Cd=document.createElement("canvas").getContext("2d")),Cd.canvas.width=h,Cd.canvas.height=f,Cd.drawImage(t,0,0,h,f),s=Cd.getImageData(0,0,h,f).data),4===e)u=new Int32Array(s);else{var d=h*f;u=new Int32Array(d*e);for(var p=0;p<d;p++)for(var v=0;v<e;++v)u[p*e+v]=s[4*p+v]}return Pn(u,[f,h,e],"int32")}}),kd=Object.freeze({toPixels:function(t,e){return n(this,void 0,void 0,(function(){var n,o,a,i,s,u,c,l,h,f,d,p,v,m,g,y,x,b,w,C,E,R,I;return r(this,(function(r){switch(r.label){case 0:if(n=mn(t,"img","toPixels"),t instanceof wt||(n=n.toInt()),2!==n.rank&&3!==n.rank)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+n.rank+".");if(o=n.shape.slice(0,2),a=o[0],i=o[1],(s=2===n.rank?1:n.shape[2])>4||2===s)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+s);return[4,n.data()];case 1:return u=r.sent(),c=n.min(),l=n.max(),[4,Promise.all([c.data(),l.data()])];case 2:if(h=r.sent(),f=h[0],d=h[1],p=f[0],v=d[0],c.dispose(),l.dispose(),"float32"===n.dtype){if(p<0||v>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+p+" - "+v+"].")}else{if("int32"!==n.dtype)throw new Error("Unsupported type for toPixels: "+n.dtype+". Please use float32 or int32 tensors.");if(p<0||v>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+p+" - "+v+"].")}for(m="float32"===n.dtype?255:1,g=new Uint8ClampedArray(i*a*4),y=0;y<a*i;++y)x=void 0,b=void 0,w=void 0,C=void 0,1===s?(x=u[y]*m,b=u[y]*m,w=u[y]*m,C=255):3===s?(x=u[3*y]*m,b=u[3*y+1]*m,w=u[3*y+2]*m,C=255):4===s&&(x=u[4*y]*m,b=u[4*y+1]*m,w=u[4*y+2]*m,C=u[4*y+3]*m),g[(E=4*y)+0]=Math.round(x),g[E+1]=Math.round(b),g[E+2]=Math.round(w),g[E+3]=Math.round(C);return null!=e&&(e.width=i,e.height=a,R=e.getContext("2d"),I=new ImageData(g,i,a),R.putImageData(I,0,0)),n!==t&&n.dispose(),[2,g]}}))}))},fromPixels:Id}),Sd=function(){function t(){}return t.prototype.getClassName=function(){return this.constructor.className},t.fromConfig=function(t,e){return new t(e)},t}(),Ad=function(){function t(){this.classNameMap={}}return t.getMap=function(){return null==t.instance&&(t.instance=new t),t.instance},t.register=function(e){t.getMap().classNameMap[e.className]=[e,e.fromConfig]},t}();function Td(t){C(null!=t.className,(function(){return"Class being registered does not have the static className property defined."})),C("string"==typeof t.className,(function(){return"className is required to be a string, but got type "+typeof t.className})),C(t.className.length>0,(function(){return"Class being registered has an empty-string as its className, which is disallowed."})),Ad.register(t)}var Dd=Object.freeze({Serializable:Sd,SerializationMap:Ad,registerClass:Td}),Nd="1.7.1";var Fd=Object.freeze({gpgpu_util:bs,webgl_util:Ge,forceHalfFloat:function(){i().set("WEBGL_FORCE_F16_TEXTURES",!0)},MathBackendWebGL:Lu,setWebGLContext:Kt,GPGPUContext:ws}),_d=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return e(o,t),o.prototype.minimize=function(t,e,n){void 0===e&&(e=!1);var r=this.computeGradients(t,n),o=r.value,a=r.grads;if(null!=n){var i=n.map((function(t){return{name:t.name,tensor:a[t.name]}}));this.applyGradients(i)}else this.applyGradients(a);return tn(a),e?o:(o.dispose(),null)},Object.defineProperty(o.prototype,"iterations",{get:function(){return null==this.iterations_&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),o.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},o.prototype.computeGradients=function(t,e){return ta(t,e)},o.prototype.dispose=function(){null!=this.iterations_&&tn(this.iterations_)},o.prototype.saveIterations=function(){return n(this,void 0,void 0,(function(){return r(this,(function(t){return null==this.iterations_&&(this.iterations_=0),[2,{name:"iter",tensor:On(this.iterations_,"int32")}]}))}))},o.prototype.getWeights=function(){return n(this,void 0,void 0,(function(){return r(this,(function(t){throw new Error("getWeights() is not implemented for this optimizer yet.")}))}))},o.prototype.setWeights=function(t){return n(this,void 0,void 0,(function(){return r(this,(function(t){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())}))}))},o.prototype.extractIterations=function(t){return n(this,void 0,void 0,(function(){var e;return r(this,(function(n){switch(n.label){case 0:return e=this,[4,t[0].tensor.data()];case 1:return e.iterations_=n.sent()[0],[2,t.slice(1)]}}))}))},o}(Sd);Object.defineProperty(_d,Symbol.hasInstance,{value:function(t){return null!=t.minimize&&null!=t.computeGradients&&null!=t.applyGradients}});var Od=function(t){function o(e,n,r){void 0===r&&(r=null);var o=t.call(this)||this;return o.learningRate=e,o.rho=n,o.epsilon=r,o.accumulatedGrads=[],o.accumulatedUpdates=[],null==r&&(o.epsilon=Lt.backend.epsilon()),o}return e(o,t),o.prototype.applyGradients=function(t){var e=this;(Array.isArray(t)?t.map((function(t){return t.name})):Object.keys(t)).forEach((function(n,r){var o=Lt.registeredVariables[n];null==e.accumulatedGrads[r]&&(e.accumulatedGrads[r]={originalName:n+"/accum_grad",variable:Ze((function(){return Xn(o).variable(!1)}))}),null==e.accumulatedUpdates[r]&&(e.accumulatedUpdates[r]={originalName:n+"/accum_var",variable:Ze((function(){return Xn(o).variable(!1)}))});var a=Array.isArray(t)?t[r].tensor:t[n];if(null!=a){var i=e.accumulatedGrads[r].variable,s=e.accumulatedUpdates[r].variable;Ze((function(){var t=i.mul(e.rho).add(a.square().mul(1-e.rho)),n=s.add(e.epsilon).sqrt().div(i.add(e.epsilon).sqrt()).mul(a),r=s.mul(e.rho).add(n.square().mul(1-e.rho));i.assign(t),s.assign(r);var u=n.mul(-e.learningRate).add(o);o.assign(u)}))}})),this.incrementIterations()},o.prototype.dispose=function(){null!=this.accumulatedUpdates&&(tn(this.accumulatedGrads.map((function(t){return t.variable}))),tn(this.accumulatedUpdates.map((function(t){return t.variable}))))},o.prototype.getWeights=function(){return n(this,void 0,void 0,(function(){var t;return r(this,(function(e){switch(e.label){case 0:return t=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(t.map((function(t){return{name:t.originalName,tensor:t.variable}})))]}}))}))},o.prototype.setWeights=function(t){return n(this,void 0,void 0,(function(){var e;return r(this,(function(n){switch(n.label){case 0:return[4,this.extractIterations(t)];case 1:return t=n.sent(),e=t.length/2,!1,this.accumulatedGrads=t.slice(0,e).map((function(t){return{originalName:t.name,variable:t.tensor.variable(!1)}})),this.accumulatedUpdates=t.slice(e,2*e).map((function(t){return{originalName:t.name,variable:t.tensor.variable(!1)}})),[2]}}))}))},o.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},o.fromConfig=function(t,e){return new t(e.learningRate,e.rho,e.epsilon)},o.className="Adadelta",o}(_d);Td(Od);var Md=function(t){function o(e,n){void 0===n&&(n=.1);var r=t.call(this)||this;return r.learningRate=e,r.initialAccumulatorValue=n,r.accumulatedGrads=[],r}return e(o,t),o.prototype.applyGradients=function(t){var e=this;(Array.isArray(t)?t.map((function(t){return t.name})):Object.keys(t)).forEach((function(n,r){var o=Lt.registeredVariables[n];if(null==e.accumulatedGrads[r]){e.accumulatedGrads[r]={originalName:n+"/accumulator",variable:Ze((function(){return Hn(o.shape,e.initialAccumulatorValue).variable(!1)}))}}var a=Array.isArray(t)?t[r].tensor:t[n];if(null!=a){var i=e.accumulatedGrads[r].variable;Ze((function(){var t=i.add(a.square());i.assign(t);var n=a.div(t.add(Lt.backend.epsilon()).sqrt()).mul(-e.learningRate).add(o);o.assign(n)}))}})),this.incrementIterations()},o.prototype.dispose=function(){null!=this.accumulatedGrads&&tn(this.accumulatedGrads.map((function(t){return t.variable})))},o.prototype.getWeights=function(){return n(this,void 0,void 0,(function(){return r(this,(function(t){switch(t.label){case 0:return[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(this.accumulatedGrads.map((function(t){return{name:t.originalName,tensor:t.variable}})))]}}))}))},o.prototype.setWeights=function(t){return n(this,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return[4,this.extractIterations(t)];case 1:return t=e.sent(),!1,this.accumulatedGrads=t.map((function(t){return{originalName:t.name,variable:t.tensor.variable(!1)}})),[2]}}))}))},o.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},o.fromConfig=function(t,e){return new t(e.learningRate,e.initialAccumulatorValue)},o.className="Adagrad",o}(_d);Td(Md);var Bd=function(t){function o(e,n,r,o){void 0===o&&(o=null);var a=t.call(this)||this;return a.learningRate=e,a.beta1=n,a.beta2=r,a.epsilon=o,a.accumulatedFirstMoment=[],a.accumulatedSecondMoment=[],Ze((function(){a.accBeta1=On(n).variable(),a.accBeta2=On(r).variable()})),null==o&&(a.epsilon=Lt.backend.epsilon()),a}return e(o,t),o.prototype.applyGradients=function(t){var e=this,n=Array.isArray(t)?t.map((function(t){return t.name})):Object.keys(t);Ze((function(){var r=No(1,e.accBeta1),o=No(1,e.accBeta2);n.forEach((function(n,a){var i=Lt.registeredVariables[n];null==e.accumulatedFirstMoment[a]&&(e.accumulatedFirstMoment[a]={originalName:n+"/m",variable:Ze((function(){return Xn(i).variable(!1)}))}),null==e.accumulatedSecondMoment[a]&&(e.accumulatedSecondMoment[a]={originalName:n+"/v",variable:Ze((function(){return Xn(i).variable(!1)}))});var s=Array.isArray(t)?t[a].tensor:t[n];if(null!=s){var u=e.accumulatedFirstMoment[a].variable,c=e.accumulatedSecondMoment[a].variable,l=u.mul(e.beta1).add(s.mul(1-e.beta1)),h=c.mul(e.beta2).add(s.square().mul(1-e.beta2)),f=l.div(r),d=h.div(o);u.assign(l),c.assign(h);var p=f.div(d.sqrt().add(e.epsilon)).mul(-e.learningRate).add(i);i.assign(p)}})),e.accBeta1.assign(e.accBeta1.mul(e.beta1)),e.accBeta2.assign(e.accBeta2.mul(e.beta2))})),this.incrementIterations()},o.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),null!=this.accumulatedFirstMoment&&tn(this.accumulatedFirstMoment.map((function(t){return t.variable}))),null!=this.accumulatedSecondMoment&&tn(this.accumulatedSecondMoment.map((function(t){return t.variable})))},o.prototype.getWeights=function(){return n(this,void 0,void 0,(function(){var t;return r(this,(function(e){switch(e.label){case 0:return t=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(t.map((function(t){return{name:t.originalName,tensor:t.variable}})))]}}))}))},o.prototype.setWeights=function(t){return n(this,void 0,void 0,(function(){var e,n=this;return r(this,(function(r){switch(r.label){case 0:return[4,this.extractIterations(t)];case 1:return t=r.sent(),Ze((function(){n.accBeta1.assign(Ao(n.beta1,n.iterations_+1)),n.accBeta2.assign(Ao(n.beta2,n.iterations_+1))})),e=t.length/2,!1,this.accumulatedFirstMoment=t.slice(0,e).map((function(t){return{originalName:t.name,variable:t.tensor.variable(!1)}})),this.accumulatedSecondMoment=t.slice(e,2*e).map((function(t){return{originalName:t.name,variable:t.tensor.variable(!1)}})),[2]}}))}))},o.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},o.fromConfig=function(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon)},o.className="Adam",o}(_d);Td(Bd);var Pd=function(t){function o(e,n,r,o,a){void 0===o&&(o=null),void 0===a&&(a=0);var i=t.call(this)||this;return i.learningRate=e,i.beta1=n,i.beta2=r,i.epsilon=o,i.decay=a,i.accumulatedFirstMoment=[],i.accumulatedWeightedInfNorm=[],Ze((function(){i.iteration=On(0).variable(),i.accBeta1=On(n).variable()})),null==o&&(i.epsilon=Lt.backend.epsilon()),i}return e(o,t),o.prototype.applyGradients=function(t){var e=this,n=Array.isArray(t)?t.map((function(t){return t.name})):Object.keys(t);Ze((function(){var r=No(1,e.accBeta1),o=_o(-e.learningRate,e.iteration.mul(e.decay).add(1));n.forEach((function(n,a){var i=Lt.registeredVariables[n];null==e.accumulatedFirstMoment[a]&&(e.accumulatedFirstMoment[a]={originalName:n+"/m",variable:Xn(i).variable(!1)}),null==e.accumulatedWeightedInfNorm[a]&&(e.accumulatedWeightedInfNorm[a]={originalName:n+"/v",variable:Xn(i).variable(!1)});var s=Array.isArray(t)?t[a].tensor:t[n];if(null!=s){var u=e.accumulatedFirstMoment[a].variable,c=e.accumulatedWeightedInfNorm[a].variable,l=u.mul(e.beta1).add(s.mul(1-e.beta1)),h=c.mul(e.beta2),f=s.abs(),d=h.maximum(f);u.assign(l),c.assign(d);var p=o.div(r).mul(l.div(d.add(e.epsilon))).add(i);i.assign(p)}})),e.iteration.assign(e.iteration.add(1)),e.accBeta1.assign(e.accBeta1.mul(e.beta1))})),this.incrementIterations()},o.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),null!=this.accumulatedFirstMoment&&tn(this.accumulatedFirstMoment.map((function(t){return t.variable}))),null!=this.accumulatedWeightedInfNorm&&tn(this.accumulatedWeightedInfNorm.map((function(t){return t.variable})))},o.prototype.getWeights=function(){return n(this,void 0,void 0,(function(){return r(this,(function(t){throw new Error("getWeights() is not implemented for Adamax yet.")}))}))},o.prototype.setWeights=function(t){return n(this,void 0,void 0,(function(){return r(this,(function(t){throw new Error("setWeights() is not implemented for Adamax yet.")}))}))},o.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},o.fromConfig=function(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon,e.decay)},o.className="Adamax",o}(_d);Td(Pd);var Ld=function(t){function o(e){var n=t.call(this)||this;return n.learningRate=e,n.setLearningRate(e),n}return e(o,t),o.prototype.applyGradients=function(t){var e=this;(Array.isArray(t)?t.map((function(t){return t.name})):Object.keys(t)).forEach((function(n,r){var o=Array.isArray(t)?t[r].tensor:t[n];if(null!=o){var a=Lt.registeredVariables[n];Ze((function(){var t=e.c.mul(o).add(a);a.assign(t)}))}})),this.incrementIterations()},o.prototype.setLearningRate=function(t){this.learningRate=t,null!=this.c&&this.c.dispose(),this.c=en(On(-t))},o.prototype.dispose=function(){this.c.dispose()},o.prototype.getWeights=function(){return n(this,void 0,void 0,(function(){return r(this,(function(t){switch(t.label){case 0:return[4,this.saveIterations()];case 1:return[2,[t.sent()]]}}))}))},o.prototype.setWeights=function(t){return n(this,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return[4,this.extractIterations(t)];case 1:if(0!==(t=e.sent()).length)throw new Error("SGD optimizer does not have settable weights.");return[2]}}))}))},o.prototype.getConfig=function(){return{learningRate:this.learningRate}},o.fromConfig=function(t,e){return new t(e.learningRate)},o.className="SGD",o}(_d);Td(Ld);var Wd=function(t){function o(e,n,r){void 0===r&&(r=!1);var o=t.call(this,e)||this;return o.learningRate=e,o.momentum=n,o.useNesterov=r,o.accumulations=[],o.m=On(o.momentum),o}return e(o,t),o.prototype.applyGradients=function(t){var e=this;(Array.isArray(t)?t.map((function(t){return t.name})):Object.keys(t)).forEach((function(n,r){var o=Lt.registeredVariables[n];if(null==e.accumulations[r]){e.accumulations[r]={originalName:n+"/momentum",variable:Ze((function(){return Xn(o).variable(!1)}))}}var a=e.accumulations[r].variable,i=Array.isArray(t)?t[r].tensor:t[n];null!=i&&Ze((function(){var t,n=e.m.mul(a).add(i);t=e.useNesterov?e.c.mul(i.add(n.mul(e.m))).add(o):e.c.mul(n).add(o),a.assign(n),o.assign(t)}))})),this.incrementIterations()},o.prototype.dispose=function(){this.m.dispose(),null!=this.accumulations&&tn(this.accumulations.map((function(t){return t.variable})))},o.prototype.setMomentum=function(t){this.momentum=t},o.prototype.getWeights=function(){return n(this,void 0,void 0,(function(){return r(this,(function(t){switch(t.label){case 0:return[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(this.accumulations.map((function(t){return{name:t.originalName,tensor:t.variable}})))]}}))}))},o.prototype.setWeights=function(t){return n(this,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return[4,this.extractIterations(t)];case 1:return t=e.sent(),!1,this.accumulations=t.map((function(t){return{originalName:t.name,variable:t.tensor.variable(!1)}})),[2]}}))}))},o.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},o.fromConfig=function(t,e){return new t(e.learningRate,e.momentum,e.useNesterov)},o.className="Momentum",o}(Ld);Td(Wd);var Ud=function(t){function o(e,n,r,o,a){void 0===n&&(n=.9),void 0===r&&(r=0),void 0===o&&(o=null),void 0===a&&(a=!1);var i=t.call(this)||this;if(i.learningRate=e,i.decay=n,i.momentum=r,i.epsilon=o,i.accumulatedMeanSquares=[],i.accumulatedMoments=[],i.accumulatedMeanGrads=[],i.centered=a,null==o&&(i.epsilon=Lt.backend.epsilon()),null==e)throw new Error("learningRate for RMSPropOptimizer must be defined.");return i}return e(o,t),o.prototype.applyGradients=function(t){var e=this;(Array.isArray(t)?t.map((function(t){return t.name})):Object.keys(t)).forEach((function(n,r){var o=Lt.registeredVariables[n];null==e.accumulatedMeanSquares[r]&&(e.accumulatedMeanSquares[r]={originalName:n+"/rms",variable:Ze((function(){return Xn(o).variable(!1)}))}),null==e.accumulatedMoments[r]&&(e.accumulatedMoments[r]={originalName:n+"/momentum",variable:Ze((function(){return Xn(o).variable(!1)}))}),null==e.accumulatedMeanGrads[r]&&e.centered&&(e.accumulatedMeanGrads[r]={originalName:n+"/mg",variable:Ze((function(){return Xn(o).variable(!1)}))});var a=Array.isArray(t)?t[r].tensor:t[n];if(null!=a){var i=e.accumulatedMeanSquares[r].variable,s=e.accumulatedMoments[r].variable;Ze((function(){var t=i.mul(e.decay).add(a.square().mul(1-e.decay));if(e.centered){var n=e.accumulatedMeanGrads[r].variable,u=n.mul(e.decay).add(a.mul(1-e.decay)),c=s.mul(e.momentum).add(a.mul(e.learningRate).div(t.sub(u.square().add(e.epsilon)).sqrt()));i.assign(t),n.assign(u),s.assign(c);var l=o.sub(c);o.assign(l)}else{var h=i.mul(e.decay).add(a.square().mul(1-e.decay));c=s.mul(e.momentum).add(a.mul(e.learningRate).div(h.add(e.epsilon).sqrt()));i.assign(h),s.assign(c);l=o.sub(c);o.assign(l)}}))}})),this.incrementIterations()},o.prototype.dispose=function(){null!=this.accumulatedMeanSquares&&tn(this.accumulatedMeanSquares.map((function(t){return t.variable}))),null!=this.accumulatedMeanGrads&&this.centered&&tn(this.accumulatedMeanGrads.map((function(t){return t.variable}))),null!=this.accumulatedMoments&&tn(this.accumulatedMoments.map((function(t){return t.variable})))},o.prototype.getWeights=function(){return n(this,void 0,void 0,(function(){var t;return r(this,(function(e){switch(e.label){case 0:return t=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&t.push.apply(t,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(t.map((function(t){return{name:t.originalName,tensor:t.variable}})))]}}))}))},o.prototype.setWeights=function(t){return n(this,void 0,void 0,(function(){var e;return r(this,(function(n){switch(n.label){case 0:return[4,this.extractIterations(t)];case 1:return t=n.sent(),e=this.centered?t.length/3:t.length/2,!1,this.accumulatedMeanSquares=t.slice(0,e).map((function(t){return{originalName:t.name,variable:t.tensor.variable(!1)}})),this.accumulatedMoments=t.slice(e,2*e).map((function(t){return{originalName:t.name,variable:t.tensor.variable(!1)}})),this.centered&&(this.accumulatedMeanGrads=t.slice(2*e,3*e).map((function(t){return{originalName:t.name,variable:t.tensor.variable(!1)}}))),[2]}}))}))},o.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},o.fromConfig=function(t,e){return new t(e.learningRate,e.decay,e.momentum,e.epsilon,e.centered)},o.className="RMSProp",o}(_d);Td(Ud);var Vd=function(){function t(){}return t.sgd=function(t){return new Ld(t)},t.momentum=function(t,e,n){return void 0===n&&(n=!1),new Wd(t,e,n)},t.rmsprop=function(t,e,n,r,o){return void 0===e&&(e=.9),void 0===n&&(n=0),void 0===r&&(r=null),void 0===o&&(o=!1),new Ud(t,e,n,r,o)},t.adam=function(t,e,n,r){return void 0===t&&(t=.001),void 0===e&&(e=.9),void 0===n&&(n=.999),void 0===r&&(r=null),new Bd(t,e,n,r)},t.adadelta=function(t,e,n){return void 0===t&&(t=.001),void 0===e&&(e=.95),void 0===n&&(n=null),new Od(t,e,n)},t.adamax=function(t,e,n,r,o){return void 0===t&&(t=.002),void 0===e&&(e=.9),void 0===n&&(n=.999),void 0===r&&(r=null),void 0===o&&(o=0),new Pd(t,e,n,r,o)},t.adagrad=function(t,e){return void 0===e&&(e=.1),new Md(t,e)},t}(),zd={sgd:Vd.sgd,momentum:Vd.momentum,adadelta:Vd.adadelta,adagrad:Vd.adagrad,rmsprop:Vd.rmsprop,adamax:Vd.adamax,adam:Vd.adam},Gd="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:"undefined"!=typeof setImmediate?setImmediate:function(t){return t()};function Hd(){return new Promise((function(t){return Gd((function(){return t()}))}))}wt.prototype.broadcastTo=function(t){return Xu(this,t)},wt.prototype.div=function(t){return _o(this,t)},wt.prototype.divNoNan=function(t){return nc(this,t)},wt.prototype.squaredDifference=function(t){return wc(this,t)},wt.prototype.tile=function(t){return rc(this,t)},wt.prototype.oneHot=function(t,e,n){return void 0===e&&(e=1),void 0===n&&(n=0),ic(this,t,e,n)},xt=nf;
//# sourceMappingURL=tf-core.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(5), __webpack_require__(4).Buffer, __webpack_require__(14).setImmediate))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var util = __webpack_require__(2);

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = util.assign(
    {
        'default': Format.RFC3986,
        formatters: {
            RFC1738: function (value) {
                return replace.call(value, percentTwenties, '+');
            },
            RFC3986: function (value) {
                return String(value);
            }
        }
    },
    Format
);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(11)
var ieee754 = __webpack_require__(12)
var isArray = __webpack_require__(13)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(9);
var parse = __webpack_require__(10);
var formats = __webpack_require__(3);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* unused harmony export GraphModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loadGraphModel; });
/* unused harmony export deregisterOp */
/* unused harmony export registerOp */
/* unused harmony export version_converter */
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var DataType,SaverDef,__assign=function(){return(__assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function __awaiter(e,t,a,r){return new(a||(a=Promise))(function(n,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function p(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){e.done?n(e.value):new a(function(t){t(e.value)}).then(o,p)}u((r=r.apply(e,t||[])).next())})}function __generator(e,t){var a,r,n,s,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:p(0),throw:p(1),return:p(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function p(s){return function(p){return function(s){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,r&&(n=2&s[0]?r.return:s[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,s[1])).done)return n;switch(r=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(n=(n=o.trys).length>0&&n[n.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){o.label=s[1];break}if(6===s[0]&&o.label<n[1]){o.label=n[1],n=s;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(s);break}n[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{a=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,p])}}}!function(e){e[e.DT_INVALID=0]="DT_INVALID",e[e.DT_FLOAT=1]="DT_FLOAT",e[e.DT_DOUBLE=2]="DT_DOUBLE",e[e.DT_INT32=3]="DT_INT32",e[e.DT_UINT8=4]="DT_UINT8",e[e.DT_INT16=5]="DT_INT16",e[e.DT_INT8=6]="DT_INT8",e[e.DT_STRING=7]="DT_STRING",e[e.DT_COMPLEX64=8]="DT_COMPLEX64",e[e.DT_INT64=9]="DT_INT64",e[e.DT_BOOL=10]="DT_BOOL",e[e.DT_QINT8=11]="DT_QINT8",e[e.DT_QUINT8=12]="DT_QUINT8",e[e.DT_QINT32=13]="DT_QINT32",e[e.DT_BFLOAT16=14]="DT_BFLOAT16",e[e.DT_FLOAT_REF=101]="DT_FLOAT_REF",e[e.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",e[e.DT_INT32_REF=103]="DT_INT32_REF",e[e.DT_UINT8_REF=104]="DT_UINT8_REF",e[e.DT_INT16_REF=105]="DT_INT16_REF",e[e.DT_INT8_REF=106]="DT_INT8_REF",e[e.DT_STRING_REF=107]="DT_STRING_REF",e[e.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",e[e.DT_INT64_REF=109]="DT_INT64_REF",e[e.DT_BOOL_REF=110]="DT_BOOL_REF",e[e.DT_QINT8_REF=111]="DT_QINT8_REF",e[e.DT_QUINT8_REF=112]="DT_QUINT8_REF",e[e.DT_QINT32_REF=113]="DT_QINT32_REF",e[e.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF"}(DataType||(DataType={})),function(e){!function(e){e[e.LEGACY=0]="LEGACY",e[e.V1=1]="V1",e[e.V2=2]="V2"}(e.CheckpointFormatVersion||(e.CheckpointFormatVersion={}))}(SaverDef||(SaverDef={}));var CUSTOM_OPS={};function registerOp(e,t){var a={tfOpName:e,category:"custom",inputs:[],attrs:[],customExecutor:t};CUSTOM_OPS[e]=a}function getRegisteredOp(e){return CUSTOM_OPS[e]}function deregisterOp(e){delete CUSTOM_OPS[e]}function getParamValue(e,t,a,r){var n=t.inputParams[e];if(n&&void 0!==n.inputIndexStart){var s=n.inputIndexStart,o=0===n.inputIndexEnd?void 0:void 0===n.inputIndexEnd?s+1:n.inputIndexEnd;if("tensor"===n.type)return getTensor(t.inputNames[n.inputIndexStart],a,r);if("tensors"===n.type)return t.inputNames.slice(s,o).map(function(e){return getTensor(e,a,r)});var p=Array.prototype.slice.call(getTensor(t.inputNames.slice(s)[0],a,r).dataSync());return"number"===n.type?p[0]:p}var u=t.attrParams[e];return u&&u.value}function getTensor(e,t,a){var r=parseNodeName(e),n=r[0],s=r[1],o=a.currentContextIds.find(function(e){return!!t[getNodeNameWithContextId(n,e)]});return void 0!==o?t[getNodeNameWithContextId(n,o)][s]:void 0}function getTensorsForCurrentContenxt(e,t,a){return t[getNodeNameWithContextId(e,a.currentContextId)]}function getNodeNameAndIndex(e,t){var a=parseNodeName(e),r=a[0],n=a[1];return[getNodeNameWithContextId(r,t&&t.currentContextId),n]}function getNodeNameWithContextId(e,t){return t?e+"-"+t:e}function parseNodeName(e){var t=e.lastIndexOf(":");return-1===t?[e,0]:[e.substring(0,t),Number(e.substring(t+1))]}function split$1(e,t){for(var a=[],r=0;r<e.length;r+=t)a.push(e.slice(r,r+t));return a}var json=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],arithmetic=Object.freeze({json:json}),json$1=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"clip_value_min",name:"clipValueMin",type:"number"},{tfName:"clip_value_max",name:"clipValueMax",type:"number"}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"clipValueMin",name:"clipValueMin",type:"number",defaultValue:0},{tfName:"clipValueMax",name:"clipValueMax",type:"number",defaultValue:6}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Prod",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axes",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],basicMath=Object.freeze({json:json$1}),json$2=[{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"number"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"number"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"number"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"number"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"number"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"number"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"number"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"number"}]}],control=Object.freeze({json:json$2}),json$3=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]}],convolution=Object.freeze({json:json$3}),json$4=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],creation=Object.freeze({json:json$4}),json$5=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],dynamic=Object.freeze({json:json$5}),json$6=[{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]}],evaluation=Object.freeze({json:json$6}),json$7=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],graph=Object.freeze({json:json$7}),json$8=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]}],image$1=Object.freeze({json:json$8}),json$9=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],logical=Object.freeze({json:json$9}),json$10=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],matrices=Object.freeze({json:json$10}),json$11=[{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"SparseToDense",category:"normalization",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!0,notSupported:!0}]}],normalization=Object.freeze({json:json$11}),json$12=[{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]}],reduction=Object.freeze({json:json$12}),json$13=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool",notSupported:!0}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]}],sliceJoin=Object.freeze({json:json$13}),json$14=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],spectral=Object.freeze({json:json$14}),json$15=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]}],transformation=Object.freeze({json:json$15}),OperationMapper=function(){function e(){var e=[arithmetic,basicMath,control,convolution,creation,dynamic,evaluation,logical,image$1,graph,matrices,normalization,reduction,sliceJoin,spectral,transformation],t=[].concat.apply([],e.map(function(e){return e.json}));this.opMappers=t.reduce(function(e,t){return e[t.tfOpName]=t,e},{})}return Object.defineProperty(e,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!0,configurable:!0}),e.prototype.transformGraph=function(e,t){var a=this;void 0===t&&(t={});var r=[],n=[],s=e.node.reduce(function(e,t){return e[t.name]=a.mapNode(t),t.op.startsWith("Placeholder")&&r.push(e[t.name]),"Const"===t.op&&n.push(e[t.name]),e},{}),o=[],p=[],u={},i={};null!=t&&(u=this.mapSignatureEntries(t.inputs),i=this.mapSignatureEntries(t.outputs));var m=Object.keys(s);return m.forEach(function(e){var t=s[e];t.inputNames.forEach(function(e){var a=getNodeNameAndIndex(e)[0];t.inputs.push(s[a]),s[a].children.push(t)})}),0===Object.keys(i).length?m.forEach(function(e){var t=s[e];0===t.children.length&&p.push(t)}):Object.keys(i).forEach(function(e){var t=getNodeNameAndIndex(e)[0],a=s[t];null!=a&&(a.signatureKey=i[e],p.push(a))}),Object.keys(u).length>0?Object.keys(u).forEach(function(e){var t=getNodeNameAndIndex(e)[0],a=s[t];a&&(a.signatureKey=u[e],o.push(a))}):o=r,{nodes:s,inputs:o,outputs:p,weights:n,placeholders:r,signature:t}},e.prototype.mapSignatureEntries=function(e){return Object.keys(e||{}).reduce(function(t,a){return t[e[a].name]=a,t},{})},e.prototype.mapNode=function(e){var t=getRegisteredOp(e.op)||this.opMappers[e.op]||{};null==e.attr&&(e.attr={});var a={name:e.name,op:e.op,category:t.category,inputNames:(e.input||[]).map(function(e){return e.startsWith("^")?e.substr(1):e}),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:e.attr};return null!=t.inputs&&(a.inputParams=t.inputs.reduce(function(e,t){return e[t.name]={type:t.type,inputIndexStart:t.start,inputIndexEnd:t.end},e},{})),null!=t.attrs&&(a.attrParams=t.attrs.reduce(function(t,a){var r=a.type,n=void 0;switch(a.type){case"string":void 0===(n=getStringParam(e.attr,a.tfName,a.defaultValue))&&a.tfDeprecatedName&&(n=getStringParam(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"string[]":void 0===(n=getStringArrayParam(e.attr,a.tfName,a.defaultValue))&&a.tfDeprecatedName&&(n=getStringArrayParam(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"number":void 0===(n=getNumberParam(e.attr,a.tfName,a.defaultValue||0))&&a.tfDeprecatedName&&(n=getNumberParam(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"number[]":void 0===(n=getNumericArrayParam(e.attr,a.tfName,a.defaultValue))&&a.tfDeprecatedName&&(n=getNumericArrayParam(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool":void 0===(n=getBoolParam(e.attr,a.tfName,a.defaultValue))&&a.tfDeprecatedName&&(n=getBoolParam(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool[]":void 0===(n=getBoolArrayParam(e.attr,a.tfName,a.defaultValue))&&a.tfDeprecatedName&&(n=getBoolArrayParam(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape":void 0===(n=getTensorShapeParam(e.attr,a.tfName,a.defaultValue))&&a.tfDeprecatedName&&(n=getTensorShapeParam(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape[]":void 0===(n=getTensorShapeArrayParam(e.attr,a.tfName,a.defaultValue))&&a.tfDeprecatedName&&(n=getTensorShapeArrayParam(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype":void 0===(n=getDtypeParam(e.attr,a.tfName,a.defaultValue))&&a.tfDeprecatedName&&(n=getDtypeParam(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype[]":void 0===(n=getDtypeArrayParam(e.attr,a.tfName,a.defaultValue))&&a.tfDeprecatedName&&(n=getDtypeArrayParam(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error("Unsupported param type: "+a.type+" for op: "+e.op)}return t[a.name]={value:n,type:r},t},{})),a},e}();function decodeBase64(e){var t=Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["env"])().global;if(void 0!==t.atob)return t.atob(e);if("undefined"!=typeof Buffer)return new Buffer(e,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function parseStringParam(e,t){var a=Array.isArray(e)?String.fromCharCode.apply(null,e):decodeBase64(e);return t?a:a.toLowerCase()}function getStringParam(e,t,a,r){void 0===r&&(r=!1);var n=e[t];return null!=n?parseStringParam(n.s,r):a}function getBoolParam(e,t,a){var r=e[t];return r?r.b:a}function getNumberParam(e,t,a){var r=e[t]||{},n=null!=r.i?r.i:null!=r.f?r.f:a;return"number"==typeof n?n:parseInt(n,10)}function parseDtypeParam(e){switch("string"==typeof e&&(e=DataType[e]),e){case DataType.DT_FLOAT:return"float32";case DataType.DT_INT32:case DataType.DT_INT64:return"int32";case DataType.DT_BOOL:return"bool";case DataType.DT_DOUBLE:return"float32";case DataType.DT_STRING:return"string";default:return null}}function getDtypeParam(e,t,a){var r=e[t];return r&&r.type?parseDtypeParam(r.type):a}function getDtypeArrayParam(e,t,a){var r=e[t];return r&&r.list&&r.list.type?r.list.type.map(function(e){return parseDtypeParam(e)}):a}function parseTensorShapeParam(e){if(!e.unknownRank)return null!=e.dim?e.dim.map(function(e){return"number"==typeof e.size?e.size:parseInt(e.size,10)}):[]}function getTensorShapeParam(e,t,a){var r=e[t];return r&&r.shape?parseTensorShapeParam(r.shape):a}function getNumericArrayParam(e,t,a){var r=e[t];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map(function(e){return"number"==typeof e?e:parseInt(e,10)}):a}function getStringArrayParam(e,t,a,r){void 0===r&&(r=!1);var n=e[t];return n&&n.list&&n.list.s?n.list.s.map(function(e){return parseStringParam(e,r)}):a}function getTensorShapeArrayParam(e,t,a){var r=e[t];return r&&r.list&&r.list.shape?r.list.shape.map(function(e){return parseTensorShapeParam(e)}):a}function getBoolArrayParam(e,t,a){var r=e[t];return r&&r.list&&r.list.b?r.list.b:a}var NodeValueImpl=function(){function e(e,t,a){var r=this;this.node=e,this.tensorMap=t,this.context=a,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map(function(e){return r.getInput(e)}),null!=e.rawAttrs&&(this.attrs=Object.keys(e.rawAttrs).reduce(function(e,t){return e[t]=r.getAttr(t),e},{}))}return e.prototype.getInput=function(e){return getTensor(e,this.tensorMap,this.context)},e.prototype.getAttr=function(e,t){var a=this.node.rawAttrs[e];if(null!=a.tensor)return getTensor(e,this.tensorMap,this.context);if(null!=a.i||null!=a.f)return getNumberParam(this.node.rawAttrs,e,t);if(null!=a.s)return getStringParam(this.node.rawAttrs,e,t);if(null!=a.b)return getBoolParam(this.node.rawAttrs,e,t);if(null!=a.shape)return getTensorShapeParam(this.node.rawAttrs,e,t);if(null!=a.type)return getDtypeParam(this.node.rawAttrs,e,t);if(null!=a.list){if(null!=a.list.i||null!=a.list.f)return getNumericArrayParam(this.node.rawAttrs,e,t);if(null!=a.list.s)return getStringArrayParam(this.node.rawAttrs,e,t);if(null!=a.list.shape)return getTensorShapeArrayParam(this.node.rawAttrs,e,t);if(null!=a.list.b)return getBoolArrayParam(this.node.rawAttrs,e,t);if(null!=a.list.type)return getDtypeArrayParam(this.node.rawAttrs,e,t)}return t},e}(),executeOp=function(e,t,a){switch(e.op){case"BiasAdd":case"AddV2":case"Add":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["add"])(getParamValue("a",e,t,a),getParamValue("b",e,t,a))];case"AddN":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["addN"])(getParamValue("tensors",e,t,a))];case"FloorMod":case"Mod":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["mod"])(getParamValue("a",e,t,a),getParamValue("b",e,t,a))];case"Mul":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["mul"])(getParamValue("a",e,t,a),getParamValue("b",e,t,a))];case"RealDiv":case"Div":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["div"])(getParamValue("a",e,t,a),getParamValue("b",e,t,a))];case"DivNoNan":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["divNoNan"])(getParamValue("a",e,t,a),getParamValue("b",e,t,a))];case"FloorDiv":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["floorDiv"])(getParamValue("a",e,t,a),getParamValue("b",e,t,a))];case"Sub":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["sub"])(getParamValue("a",e,t,a),getParamValue("b",e,t,a))];case"Minimum":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["minimum"])(getParamValue("a",e,t,a),getParamValue("b",e,t,a))];case"Maximum":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["maximum"])(getParamValue("a",e,t,a),getParamValue("b",e,t,a))];case"Pow":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["pow"])(getParamValue("a",e,t,a),getParamValue("b",e,t,a))];case"SquaredDifference":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["squaredDifference"])(getParamValue("a",e,t,a),getParamValue("b",e,t,a))];default:throw TypeError("Node type "+e.op+" is not implemented")}},executeOp$1=function(e,t,a){switch(e.op){case"Abs":case"ComplexAbs":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["abs"])(getParamValue("x",e,t,a))];case"Acos":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["acos"])(getParamValue("x",e,t,a))];case"Acosh":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["acosh"])(getParamValue("x",e,t,a))];case"Asin":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["asin"])(getParamValue("x",e,t,a))];case"Asinh":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["asinh"])(getParamValue("x",e,t,a))];case"Atan":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["atan"])(getParamValue("x",e,t,a))];case"Atan2":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["atan2"])(getParamValue("x",e,t,a),getParamValue("y",e,t,a))];case"Atanh":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["atanh"])(getParamValue("x",e,t,a))];case"Ceil":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["ceil"])(getParamValue("x",e,t,a))];case"Complex":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["complex"])(getParamValue("real",e,t,a),getParamValue("imag",e,t,a))];case"Cos":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["cos"])(getParamValue("x",e,t,a))];case"Cosh":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["cosh"])(getParamValue("x",e,t,a))];case"Elu":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["elu"])(getParamValue("x",e,t,a))];case"Erf":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["erf"])(getParamValue("x",e,t,a))];case"Exp":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["exp"])(getParamValue("x",e,t,a))];case"Expm1":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["expm1"])(getParamValue("x",e,t,a))];case"Floor":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["floor"])(getParamValue("x",e,t,a))];case"Log":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["log"])(getParamValue("x",e,t,a))];case"Log1p":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["log1p"])(getParamValue("x",e,t,a))];case"Imag":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["imag"])(getParamValue("x",e,t,a))];case"Neg":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["neg"])(getParamValue("x",e,t,a))];case"Reciprocal":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["reciprocal"])(getParamValue("x",e,t,a))];case"Real":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["real"])(getParamValue("x",e,t,a))];case"Relu":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["relu"])(getParamValue("x",e,t,a))];case"Round":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["round"])(getParamValue("x",e,t,a))];case"Selu":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["selu"])(getParamValue("x",e,t,a))];case"Sigmoid":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["sigmoid"])(getParamValue("x",e,t,a))];case"Sin":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["sin"])(getParamValue("x",e,t,a))];case"Sign":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["sign"])(getParamValue("x",e,t,a))];case"Sinh":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["sinh"])(getParamValue("x",e,t,a))];case"Softplus":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["softplus"])(getParamValue("x",e,t,a))];case"Sqrt":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(getParamValue("x",e,t,a))];case"Square":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["square"])(getParamValue("x",e,t,a))];case"Tanh":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tanh"])(getParamValue("x",e,t,a))];case"Tan":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tan"])(getParamValue("x",e,t,a))];case"Relu6":case"ClipByValue":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["clipByValue"])(getParamValue("x",e,t,a),getParamValue("clipValueMin",e,t,a),getParamValue("clipValueMax",e,t,a))];case"Rsqrt":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["rsqrt"])(getTensor(e.inputNames[0],t,a))];case"Prod":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["prod"])(getParamValue("x",e,t,a),getParamValue("axes",e,t,a))];case"LeakyRelu":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["leakyRelu"])(getParamValue("x",e,t,a),getParamValue("alpha",e,t,a))];case"Prelu":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["prelu"])(getParamValue("x",e,t,a),getParamValue("alpha",e,t,a))];default:throw TypeError("Node type "+e.op+" is not implemented")}},TensorArray=function(){function e(t,a,r,n,s,o,p){this.name=t,this.dtype=a,this.maxSize=r,this.elementShape=n,this.identicalElementShapes=s,this.dynamicSize=o,this.clearAfterRead=p,this.tensors=[],this.closed_=!1,this.id=e.nextId++}return Object.defineProperty(e.prototype,"closed",{get:function(){return this.closed_},enumerable:!0,configurable:!0}),e.prototype.clearAndClose=function(){this.tensors.forEach(function(e){return e.tensor.dispose()}),this.tensors=[],this.closed_=!0},e.prototype.size=function(){return this.tensors.length},e.prototype.read=function(e){if(this.closed_)throw new Error("TensorArray "+this.name+" has already been closed.");if(e<0||e>=this.tensors.length)throw new Error("Tried to read from index "+e+", but array size is: "+this.tensors.length);var t=this.tensors[e];if(t.cleared)throw new Error("TensorArray "+this.name+": Could not read index "+e+" twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).");return this.clearAfterRead&&(t.cleared=!0),t.read=!0,t.tensor},e.prototype.readMany=function(e){var t=this;return e.map(function(e){return t.read(e)})},e.prototype.write=function(e,t){if(this.closed_)throw new Error("TensorArray "+this.name+" has already been closed.");if(e<0||!this.dynamicSize&&e>=this.maxSize)throw new Error("Tried to write to index "+e+", but array is not resizeable and size is: "+this.maxSize);var a=this.tensors[e]||{};if(t.dtype!==this.dtype)throw new Error("TensorArray "+this.name+": Could not write to TensorArray index "+e+",\n          because the value dtype is "+t.dtype+", but TensorArray dtype is "+this.dtype+".");if(0!==this.size()||null!=this.elementShape&&0!==this.elementShape.length||(this.elementShape=t.shape),this.assertShapesMatchAllowUndefinedSize(this.elementShape,t.shape,"TensorArray "+this.name+": Could not write to TensorArray index "+e+"."),a&&a.read)throw new Error("TensorArray "+this.name+": Could not write to TensorArray index "+e+", because it has already been read.");if(a&&a.written)throw new Error("TensorArray "+this.name+": Could not write to TensorArray index "+e+", because it has already been written.");a.tensor=t,a.written=!0,this.tensors[e]=a},e.prototype.writeMany=function(e,t){var a=this;if(e.length!==t.length)throw new Error("TensorArray "+this.name+": could not write multiple tensors,because the index size: "+e.length+" is not the same as tensors size: "+t.length+".");e.forEach(function(e,r){return a.write(e,t[r])})},e.prototype.gather=function(e,t){if(t&&t!==this.dtype)throw new Error("TensorArray dtype is "+this.dtype+" but gather requested dtype "+t);if(!e){e=[];for(var a=0;a<this.size();a++)e.push(a)}if(0===e.length)return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tensor"])([],[0].concat(this.elementShape));var r=this.readMany(e);return this.assertShapesMatchAllowUndefinedSize(this.elementShape,r[0].shape,"TensorArray shape mismatch: "),Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["stack"])(r,0)},e.prototype.concat=function(e){if(e&&e!==this.dtype)throw new Error("TensorArray dtype is "+this.dtype+" but concat requested dtype "+e);if(0===this.size())return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tensor"])([],[0].concat(this.elementShape));for(var t=[],a=0;a<this.size();a++)t.push(a);var r=this.readMany(t);return this.assertShapesMatchAllowUndefinedSize(this.elementShape,r[0].shape,"TensorArray shape mismatch: tensor array shape ("+this.elementShape+") vs first tensor shape ("+r[0].shape+")"),Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["concat"])(r,0)},e.prototype.scatter=function(e,t){if(t.dtype!==this.dtype)throw new Error("TensorArray dtype is "+this.dtype+" but tensor has dtype "+t.dtype);if(e.length!==t.shape[0])throw new Error("Expected len(indices) == tensor.shape[0], but saw: "+e.length+" vs. "+t.shape[0]);var a=Math.max.apply(Math,e);if(!this.dynamicSize&&a>=this.maxSize)throw new Error("Max index must be < array size ("+a+"  vs. "+this.maxSize+")");this.writeMany(e,Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["unstack"])(t,0))},e.prototype.split=function(e,t){var a=this;if(t.dtype!==this.dtype)throw new Error("TensorArray dtype is "+this.dtype+" but tensor has dtype "+t.dtype);var r=0,n=e.map(function(e){return r+=e});if(r!==t.shape[0])throw new Error("Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        "+r+", and tensor's shape is: "+t.shape);if(!this.dynamicSize&&e.length!==this.maxSize)throw new Error("TensorArray's size is not equal to the size of lengths ("+this.maxSize+" vs. "+e.length+"), and the TensorArray is not marked as dynamically resizeable");var s=0===r?0:t.size/r,o=[];Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tidy"])(function(){t=t.reshape([1,r,s]);for(var p=0;p<e.length;++p){var u=[0,0===p?0:n[p-1],0],i=[1,e[p],s];o[p]=Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["slice"])(t,u,i).reshape(a.elementShape)}return o});for(var p=[],u=0;u<e.length;u++)p[u]=u;this.writeMany(p,o)},e.prototype.assertShapesMatchAllowUndefinedSize=function(e,t,a){void 0===a&&(a=""),_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].assert(this.shapesEqualAllowUndefinedSize(e,t),function(){return a+" Shapes "+e+" and "+t+" must match"})},e.prototype.shapesEqualAllowUndefinedSize=function(e,t){if(e.length!==t.length)return!1;for(var a=0;a<e.length;a++)if(-1!==e[a]&&-1!==t[a]&&e[a]!==t[a])return!1;return!0},e.nextId=0,e}(),_this=void 0,executeOp$2=function(e,t,a){return __awaiter(_this,void 0,void 0,function(){var r,n,s,o,p,u,i,m,l,c,d,y,f,g,h,N,x,V,b,P,T,v,O,S,_,w,A,D,E,I,C,M,k,F,z;return __generator(this,function(j){switch(j.label){case 0:switch(e.op){case"LoopCond":return[3,1];case"Switch":return[3,2];case"Merge":return[3,4];case"Enter":return[3,5];case"Exit":return[3,6];case"NextIteration":return[3,7];case"TensorArrayV3":return[3,8];case"TensorArrayWriteV3":return[3,9];case"TensorArrayReadV3":return[3,10];case"TensorArrayGatherV3":return[3,11];case"TensorArrayScatterV3":return[3,12];case"TensorArrayConcatV3":return[3,13];case"TensorArraySplitV3":return[3,14];case"TensorArraySizeV3":return[3,15];case"TensorArrayCloseV3":return[3,16]}return[3,17];case 1:return[2,[getParamValue("pred",e,t,a).clone()]];case 2:return r=getParamValue("pred",e,t,a),n=getParamValue("data",e,t,a),[4,r.data()];case 3:return[2,j.sent()[0]?[void 0,n.clone()]:[n.clone(),void 0]];case 4:return[2,(s=e.inputNames.find(function(e){return void 0!==getTensor(e,t,a)}))?[getTensor(s,t,a).clone()]:void 0];case 5:return o=getParamValue("frameName",e,t,a),p=getParamValue("tensor",e,t,a),a.enterFrame(o),[2,[p.clone()]];case 6:return u=getParamValue("tensor",e,t,a),a.exitFrame(),[2,[u.clone()]];case 7:return i=getParamValue("tensor",e,t,a),a.nextIteration(),[2,[i.clone()]];case 8:return m=getParamValue("size",e,t,a),l=getParamValue("dtype",e,t,a),c=getParamValue("elementShape",e,t,a),d=getParamValue("dynamicSize",e,t,a),y=getParamValue("clearAfterRead",e,t,a),f=getParamValue("identicalElementShapes",e,t,a),g=getParamValue("name",e,t,a),h=new TensorArray(g,l,m,c,f,d,y),a.addTensorArray(h),[2,[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["scalar"])(h.id),Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["scalar"])(1)]];case 9:return N=getParamValue("tensorArrayId",e,t,a),x=getParamValue("index",e,t,a),V=getParamValue("tensor",e,t,a),a.getTensorArray(N).write(x,V),[2,[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["scalar"])(1)]];case 10:return b=getParamValue("tensorArrayId",e,t,a),P=getParamValue("index",e,t,a),[2,[a.getTensorArray(b).read(P)]];case 11:return T=getParamValue("tensorArrayId",e,t,a),v=getParamValue("indices",e,t,a),O=getParamValue("dtype",e,t,a),[2,[a.getTensorArray(T).gather(v,O)]];case 12:return S=getParamValue("tensorArrayId",e,t,a),_=getParamValue("indices",e,t,a),w=getParamValue("tensor",e,t,a),a.getTensorArray(S).scatter(_,w),[2,[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["scalar"])(1)]];case 13:return A=getParamValue("tensorArrayId",e,t,a),D=a.getTensorArray(A),E=getParamValue("dtype",e,t,a),[2,[D.concat(E)]];case 14:return I=getParamValue("tensorArrayId",e,t,a),C=getParamValue("tensor",e,t,a),M=getParamValue("lengths",e,t,a),a.getTensorArray(I).split(M,C),[2,[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["scalar"])(1)]];case 15:return k=getParamValue("tensorArrayId",e,t,a),F=a.getTensorArray(k),[2,[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["scalar"])(F.size(),"int32")]];case 16:return z=getParamValue("tensorArrayId",e,t,a),a.getTensorArray(z).clearAndClose(),[2,[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["scalar"])(0)]];case 17:throw TypeError("Node type "+e.op+" is not implemented")}})})},executeOp$3=function(e,t,a){switch(e.op){case"Conv1D":var r=getParamValue("stride",e,t,a),n=getParamValue("pad",e,t,a),s=getParamValue("dataFormat",e,t,a).toUpperCase(),o=getParamValue("dilation",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["conv1d"])(getParamValue("x",e,t,a),getParamValue("filter",e,t,a),r,n,s,o)];case"Conv2D":r=getParamValue("strides",e,t,a),n=getParamValue("pad",e,t,a),s=getParamValue("dataFormat",e,t,a).toUpperCase();var p=getParamValue("dilations",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["conv2d"])(getParamValue("x",e,t,a),getParamValue("filter",e,t,a),[r[1],r[2]],n,s,[p[1],p[2]])];case"_FusedConv2D":case"FusedDepthwiseConv2dNative":var u=getParamValue("fusedOps",e,t,a),i=u[0],m=u[1],l="biasadd"===i,c="prelu"===m,d="fusedbatchnorm"===i,y=getParamValue("numArgs",e,t,a);if(l){if(c&&2!==y)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!c&&1!==y)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(d)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported.");r=getParamValue("strides",e,t,a),n=getParamValue("pad",e,t,a),s=getParamValue("dataFormat",e,t,a).toUpperCase(),p=getParamValue("dilations",e,t,a);var f=getParamValue("args",e,t,a),g=f[0],h=f[1];return[("_FusedConv2D"===e.op?_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["fused"].conv2d:_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["fused"].depthwiseConv2d)({x:getParamValue("x",e,t,a),filter:getParamValue("filter",e,t,a),strides:[r[1],r[2]],pad:n,dataFormat:s,dilations:[p[1],p[2]],bias:g,activation:m,preluActivationWeights:h})];case"Conv2DBackpropInput":case"Conv2dTranspose":var N=getParamValue("outputShape",e,t,a);r=getParamValue("strides",e,t,a),n=getParamValue("pad",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["conv2dTranspose"])(getParamValue("x",e,t,a),getParamValue("filter",e,t,a),N,[r[1],r[2]],n)];case"DepthwiseConv2dNative":case"DepthwiseConv2d":r=getParamValue("strides",e,t,a),n=getParamValue("pad",e,t,a),p=getParamValue("dilations",e,t,a),s=getParamValue("dataFormat",e,t,a).toUpperCase();return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["depthwiseConv2d"])(getParamValue("input",e,t,a),getParamValue("filter",e,t,a),[r[1],r[2]],n,s,[p[1],p[2]])];case"Conv3D":r=getParamValue("strides",e,t,a),n=getParamValue("pad",e,t,a),s=getParamValue("dataFormat",e,t,a).toUpperCase(),p=getParamValue("dilations",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["conv3d"])(getParamValue("x",e,t,a),getParamValue("filter",e,t,a),[r[1],r[2],r[3]],n,s,[p[1],p[2],p[3]])];case"AvgPool":r=getParamValue("strides",e,t,a),n=getParamValue("pad",e,t,a);var x=getParamValue("kernelSize",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["avgPool"])(getParamValue("x",e,t,a),[x[1],x[2]],[r[1],r[2]],n)];case"MaxPool":r=getParamValue("strides",e,t,a),n=getParamValue("pad",e,t,a),x=getParamValue("kernelSize",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["maxPool"])(getParamValue("x",e,t,a),[x[1],x[2]],[r[1],r[2]],n)];case"AvgPool3D":r=getParamValue("strides",e,t,a),n=getParamValue("pad",e,t,a),x=getParamValue("kernelSize",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["avgPool3d"])(getParamValue("x",e,t,a),[x[1],x[2],x[3]],[r[1],r[2],r[3]],n)];case"MaxPool3D":r=getParamValue("strides",e,t,a),n=getParamValue("pad",e,t,a),x=getParamValue("kernelSize",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["maxPool3d"])(getParamValue("x",e,t,a),[x[1],x[2],x[3]],[r[1],r[2],r[3]],n)];default:throw TypeError("Node type "+e.op+" is not implemented")}},executeOp$4=function(e,t,a){switch(e.op){case"Fill":var r=getParamValue("shape",e,t,a),n=getParamValue("dtype",e,t,a),s=getParamValue("value",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["fill"])(r,s,n)];case"LinSpace":var o=getParamValue("start",e,t,a),p=getParamValue("stop",e,t,a),u=getParamValue("num",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["linspace"])(o,p,u)];case"Multinomial":var i=getParamValue("logits",e,t,a),m=getParamValue("numSamples",e,t,a),l=getParamValue("seed",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["multinomial"])(i,m,l)];case"OneHot":var c=getParamValue("indices",e,t,a),d=getParamValue("depth",e,t,a),y=getParamValue("onValue",e,t,a),f=getParamValue("offValue",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["oneHot"])(c,d,y,f)];case"Ones":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["ones"])(getParamValue("shape",e,t,a),getParamValue("dtype",e,t,a))];case"OnesLike":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["onesLike"])(getParamValue("x",e,t,a))];case"RandomUniform":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["randomUniform"])(getParamValue("shape",e,t,a),getParamValue("minval",e,t,a),getParamValue("maxval",e,t,a),getParamValue("dtype",e,t,a))];case"Range":o=getParamValue("start",e,t,a);var g=getParamValue("stop",e,t,a),h=getParamValue("step",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["range"])(o,g,h,getParamValue("dtype",e,t,a))];case"TruncatedNormal":r=getParamValue("shape",e,t,a);var N=getParamValue("mean",e,t,a),x=getParamValue("stdDev",e,t,a);l=getParamValue("seed",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["truncatedNormal"])(r,N,x,getParamValue("dtype",e,t,a),l)];case"Zeros":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["zeros"])(getParamValue("shape",e,t,a),getParamValue("dtype",e,t,a))];case"ZerosLike":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["zerosLike"])(getParamValue("x",e,t,a))];default:throw TypeError("Node type "+e.op+" is not implemented")}},_this$1=void 0,executeOp$5=function(e,t,a){return __awaiter(_this$1,void 0,void 0,function(){var r,n,s,o,p,u,i,m;return __generator(this,function(l){switch(l.label){case 0:switch(e.op){case"NonMaxSuppressionV5":case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":return[3,1];case"Where":return[3,5];case"ListDiff":return[3,7]}return[3,8];case 1:return r=getParamValue("boxes",e,t,a),n=getParamValue("scores",e,t,a),s=getParamValue("maxOutputSize",e,t,a),o=getParamValue("iouThreshold",e,t,a),p=getParamValue("scoreThreshold",e,t,a),"NonMaxSuppressionV5"!==e.op?[3,3]:(u=getParamValue("softNmsSigma",e,t,a),[4,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["image"].nonMaxSuppressionWithScoreAsync(r,n,s,o,p,u)]);case 2:return[2,[(m=l.sent()).selectedIndices,m.selectedScores]];case 3:return[4,_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["image"].nonMaxSuppressionAsync(r,n,s,o,p)];case 4:return[2,[l.sent()]];case 5:return i=getParamValue("condition",e,t,a).asType("bool"),[4,Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["whereAsync"])(i)];case 6:return m=[l.sent()],i.dispose(),[2,m];case 7:return[2,Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["setdiff1dAsync"])(getParamValue("x",e,t,a),getParamValue("y",e,t,a))];case 8:throw TypeError("Node type "+e.op+" is not implemented")}})})},executeOp$6=function(e,t,a){switch(e.op){case"TopKV2":var r=getParamValue("x",e,t,a),n=getParamValue("k",e,t,a),s=getParamValue("sorted",e,t,a),o=Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["topk"])(r,n,s);return[o.values,o.indices];default:throw TypeError("Node type "+e.op+" is not implemented")}},executeOp$7=function(e,t,a){switch(e.op){case"Const":return t[e.name];case"PlaceholderWithDefault":var r=getParamValue("default",e,t,a);return[getTensor(e.name,t,a)||r];case"Placeholder":return[getTensor(e.name,t,a)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":return[getParamValue("x",e,t,a).clone()];case"IdentityN":return getParamValue("x",e,t,a).map(function(e){return e.clone()});case"Snapshot":return[getParamValue("x",e,t,a).clone()];case"Shape":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tensor1d"])(getParamValue("x",e,t,a).shape,"int32")];case"ShapeN":return getParamValue("x",e,t,a).map(function(e){return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tensor1d"])(e.shape)});case"Size":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["scalar"])(getParamValue("x",e,t,a).size,"int32")];case"Rank":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["scalar"])(getParamValue("x",e,t,a).rank,"int32")];case"NoOp":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["scalar"])(1)];case"Print":var n=getParamValue("x",e,t,a),s=getParamValue("data",e,t,a),o=getParamValue("message",e,t,a),p=getParamValue("summarize",e,t,a);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(o);for(var u=0;u<s.length;u++)console.log(Array.prototype.slice.call(s[u].dataSync()).slice(0,p));return[n];default:throw TypeError("Node type "+e.op+" is not implemented")}},executeOp$8=function(e,t,a){switch(e.op){case"ResizeBilinear":var r=getParamValue("images",e,t,a),n=getParamValue("size",e,t,a),s=getParamValue("alignCorners",e,t,a);return[_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["image"].resizeBilinear(r,[n[0],n[1]],s)];case"ResizeNearestNeighbor":r=getParamValue("images",e,t,a),n=getParamValue("size",e,t,a),s=getParamValue("alignCorners",e,t,a);return[_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["image"].resizeNearestNeighbor(r,[n[0],n[1]],s)];case"CropAndResize":var o=getParamValue("image",e,t,a),p=getParamValue("boxes",e,t,a),u=getParamValue("boxInd",e,t,a),i=getParamValue("cropSize",e,t,a),m=getParamValue("method",e,t,a),l=getParamValue("extrapolationValue",e,t,a);return[_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["image"].cropAndResize(o,p,u,i,m,l)];default:throw TypeError("Node type "+e.op+" is not implemented")}},executeOp$9=function(e,t,a){switch(e.op){case"Equal":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["equal"])(getParamValue("a",e,t,a),getParamValue("b",e,t,a))];case"NotEqual":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["notEqual"])(getParamValue("a",e,t,a),getParamValue("b",e,t,a))];case"Greater":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["greater"])(getParamValue("a",e,t,a),getParamValue("b",e,t,a))];case"GreaterEqual":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["greaterEqual"])(getParamValue("a",e,t,a),getParamValue("b",e,t,a))];case"Less":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["less"])(getParamValue("a",e,t,a),getParamValue("b",e,t,a))];case"LessEqual":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["lessEqual"])(getParamValue("a",e,t,a),getParamValue("b",e,t,a))];case"LogicalAnd":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["logicalAnd"])(getParamValue("a",e,t,a),getParamValue("b",e,t,a))];case"LogicalNot":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["logicalNot"])(getParamValue("a",e,t,a))];case"LogicalOr":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["logicalOr"])(getParamValue("a",e,t,a),getParamValue("b",e,t,a))];case"Select":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["where"])(getParamValue("condition",e,t,a),getParamValue("a",e,t,a),getParamValue("b",e,t,a))];default:throw TypeError("Node type "+e.op+" is not implemented")}},executeOp$10=function(e,t,a){switch(e.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["matMul"])(getParamValue("a",e,t,a),getParamValue("b",e,t,a),getParamValue("transposeA",e,t,a),getParamValue("transposeB",e,t,a))];case"Transpose":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["transpose"])(getParamValue("x",e,t,a),getParamValue("perm",e,t,a))];case"_FusedMatMul":var r=getParamValue("fusedOps",e,t,a),n=r[0],s=r[1],o="biasadd"===n,p="prelu"===s,u=getParamValue("numArgs",e,t,a);if(o){if(p&&2!==u)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!p&&1!==u)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}var i=getParamValue("args",e,t,a),m=i[0],l=i[1];return[_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["fused"].matMul({a:getParamValue("a",e,t,a),b:getParamValue("b",e,t,a),transposeA:getParamValue("transposeA",e,t,a),transposeB:getParamValue("transposeB",e,t,a),bias:m,activation:s,preluActivationWeights:l})];default:throw TypeError("Node type "+e.op+" is not implemented")}},executeOp$11=function(e,t,a){switch(e.op){case"FusedBatchNorm":case"FusedBatchNormV2":case"FusedBatchNormV3":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["batchNorm"])(getParamValue("x",e,t,a),getParamValue("mean",e,t,a),getParamValue("variance",e,t,a),getParamValue("offset",e,t,a),getParamValue("scale",e,t,a),getParamValue("epsilon",e,t,a))];case"LRN":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["localResponseNormalization"])(getParamValue("x",e,t,a),getParamValue("radius",e,t,a),getParamValue("bias",e,t,a),getParamValue("alpha",e,t,a),getParamValue("beta",e,t,a))];case"Softmax":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["softmax"])(getParamValue("x",e,t,a))];case"LogSoftmax":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["logSoftmax"])(getParamValue("x",e,t,a))];case"SparseToDense":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["sparseToDense"])(getParamValue("sparseIndices",e,t,a),getParamValue("outputShape",e,t,a),getParamValue("sparseValues",e,t,a),getParamValue("defaultValue",e,t,a))];default:throw TypeError("Node type "+e.op+" is not implemented")}},executeOp$12=function(e,t,a){switch(e.op){case"Max":var r=getParamValue("axis",e,t,a),n=getParamValue("keepDims",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["max"])(getParamValue("x",e,t,a),r,n)];case"Mean":r=getParamValue("axis",e,t,a),n=getParamValue("keepDims",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["mean"])(getParamValue("x",e,t,a),r,n)];case"Min":r=getParamValue("axis",e,t,a),n=getParamValue("keepDims",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["min"])(getParamValue("x",e,t,a),r,n)];case"Sum":r=getParamValue("axis",e,t,a),n=getParamValue("keepDims",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["sum"])(getParamValue("x",e,t,a),r,n)];case"All":r=getParamValue("axis",e,t,a),n=getParamValue("keepDims",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["all"])(getParamValue("x",e,t,a),r,n)];case"Any":r=getParamValue("axis",e,t,a),n=getParamValue("keepDims",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["any"])(getParamValue("x",e,t,a),r,n)];case"ArgMax":r=getParamValue("axis",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["argMax"])(getParamValue("x",e,t,a),r)];case"ArgMin":r=getParamValue("axis",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["argMin"])(getParamValue("x",e,t,a),r)];case"Prod":r=getParamValue("axis",e,t,a),n=getParamValue("keepDims",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["prod"])(getParamValue("x",e,t,a),r,n)];default:throw TypeError("Node type "+e.op+" is not implemented")}},executeOp$13=function(e,t,a){switch(e.op){case"ConcatV2":case"Concat":var r=getParamValue("n",e,t,a),n=getParamValue("axis",e,t,a),s=getParamValue("tensors",e,t,a);return s=s.slice(0,r),[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["concat"])(s,n)];case"GatherV2":case"Gather":n=getParamValue("axis",e,t,a);var o=getParamValue("x",e,t,a),p=getParamValue("indices",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["gather"])(o,p.asType("int32"),n)];case"ReverseV2":case"Reverse":n=getParamValue("axis",e,t,a),o=getParamValue("x",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["reverse"])(o,n)];case"Slice":var u=getParamValue("begin",e,t,a),i=getParamValue("size",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["slice"])(getParamValue("x",e,t,a),u,i)];case"StridedSlice":u=getParamValue("begin",e,t,a);var m=getParamValue("end",e,t,a),l=getParamValue("strides",e,t,a),c=getParamValue("beginMask",e,t,a),d=getParamValue("endMask",e,t,a),y=getParamValue("ellipsisMask",e,t,a),f=getParamValue("newAxisMask",e,t,a),g=getParamValue("shrinkAxisMask",e,t,a),h=getParamValue("x",e,t,a);if(1===u.length&&h.shape.length>1)for(var N=1;N<h.shape.length;N++)u.push(0),m.push(h.shape[N]),l.push(l[0]);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["stridedSlice"])(h,u,m,l,c,d,y,f,g)];case"Pack":return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tidy"])(function(){var r=getParamValue("axis",e,t,a),n=getParamValue("tensors",e,t,a),s=n[0].shape,o=n[0].squeeze().shape,p=n.map(function(e){var t=_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].arraysEqual(e.shape,s);if(!t&&!_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].arraysEqual(e.squeeze().shape,o))throw new Error("the input tensors shape does not match");return t?e:e.reshape(s)});return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["stack"])(p,r)]});case"Unpack":return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tidy"])(function(){var r=getParamValue("axis",e,t,a),n=getParamValue("tensor",e,t,a);return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["unstack"])(n,r)});case"Tile":var x=getParamValue("reps",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tile"])(getParamValue("x",e,t,a),x)];case"Split":case"SplitV":n=getParamValue("axis",e,t,a);var V=getParamValue("numOrSizeSplits",e,t,a);return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["split"])(getParamValue("x",e,t,a),V,n);case"ScatterNd":p=getParamValue("indices",e,t,a);var b=getParamValue("values",e,t,a),P=getParamValue("shape",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["scatterND"])(p,b,P)];case"GatherNd":var T=getParamValue("x",e,t,a);p=getParamValue("indices",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["gatherND"])(T,p)];case"SparseToDense":p=getParamValue("sparseIndices",e,t,a),P=getParamValue("outputShape",e,t,a);var v=getParamValue("sparseValues",e,t,a),O=getParamValue("defaultValue",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["sparseToDense"])(p,v,P,v.dtype===O.dtype?O:O.asType(v.dtype))];default:throw TypeError("Node type "+e.op+" is not implemented")}},executeOp$14=function(e,t,a){switch(e.op){case"FFT":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["fft"])(getParamValue("x",e,t,a))];case"IFFT":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["ifft"])(getParamValue("x",e,t,a))];case"RFFT":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["rfft"])(getParamValue("x",e,t,a))];case"IRFFT":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["irfft"])(getParamValue("x",e,t,a))];default:throw TypeError("Node type "+e.op+" is not implemented")}},executeOp$15=function(e,t,a){switch(e.op){case"Cast":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["cast"])(getParamValue("x",e,t,a),getParamValue("dtype",e,t,a))];case"ExpandDims":var r=getParamValue("axis",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["expandDims"])(getParamValue("x",e,t,a),r)];case"Squeeze":r=getParamValue("axis",e,t,a);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["squeeze"])(getParamValue("x",e,t,a),r)];case"Reshape":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["reshape"])(getParamValue("x",e,t,a),getParamValue("shape",e,t,a))];case"PadV2":case"Pad":return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["pad"])(getParamValue("x",e,t,a),split$1(getParamValue("padding",e,t,a),2),getParamValue("constantValue",e,t,a))];case"SpaceToBatchND":var n=getParamValue("blockShape",e,t,a),s=split$1(getParamValue("paddings",e,t,a),2);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["spaceToBatchND"])(getParamValue("x",e,t,a),n,s)];case"BatchToSpaceND":n=getParamValue("blockShape",e,t,a);var o=split$1(getParamValue("crops",e,t,a),2);return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["batchToSpaceND"])(getParamValue("x",e,t,a),n,o)];case"DepthToSpace":var p=getParamValue("blockSize",e,t,a),u=getParamValue("dataFormat",e,t,a).toUpperCase();return[Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["depthToSpace"])(getParamValue("x",e,t,a),p,u)];default:throw TypeError("Node type "+e.op+" is not implemented")}};function executeOp$16(e,t,a){var r=function(e,t,a){switch(e.category){case"arithmetic":return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tidy"])(function(){return executeOp(e,t,a)});case"basic_math":return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tidy"])(function(){return executeOp$1(e,t,a)});case"control":return executeOp$2(e,t,a);case"convolution":return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tidy"])(function(){return executeOp$3(e,t,a)});case"creation":return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tidy"])(function(){return executeOp$4(e,t,a)});case"dynamic":return executeOp$5(e,t,a);case"evaluation":return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tidy"])(function(){return executeOp$6(e,t,a)});case"image":return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tidy"])(function(){return executeOp$8(e,t,a)});case"graph":return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tidy"])(function(){return executeOp$7(e,t,a)});case"logical":return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tidy"])(function(){return executeOp$9(e,t,a)});case"matrices":return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tidy"])(function(){return executeOp$10(e,t,a)});case"normalization":return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tidy"])(function(){return executeOp$11(e,t,a)});case"reduction":return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tidy"])(function(){return executeOp$12(e,t,a)});case"slice_join":return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tidy"])(function(){return executeOp$13(e,t,a)});case"spectral":return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tidy"])(function(){return executeOp$14(e,t,a)});case"transformation":return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tidy"])(function(){return executeOp$15(e,t,a)});case"custom":var r=getRegisteredOp(e.op);if(r&&r.customExecutor)return r.customExecutor(new NodeValueImpl(e,t,a));throw TypeError("Custom op "+e.op+" is not registered.");default:throw TypeError("Unknown op '"+e.op+"'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()")}}(e,t,a);return r instanceof Promise?r.then(function(e){return[].concat(e)}):[].concat(r)}var ExecutionContext=function(){function e(e,t){this.weightMap=e,this.tensorArrayMap=t,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}return e.prototype.newFrame=function(e,t){return{id:e,frameName:t,iterationId:0}},Object.defineProperty(e.prototype,"currentContext",{get:function(){return this.contexts},set:function(e){this.contexts!==e&&(this.contexts=e,this.generateCurrentContextIds())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"currentContextId",{get:function(){return this._currentContextIds[0]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"currentContextIds",{get:function(){return this._currentContextIds},enumerable:!0,configurable:!0}),e.prototype.generateCurrentContextIds=function(){for(var e=[],t=0;t<this.contexts.length-1;t++){var a=this.contexts.slice(0,this.contexts.length-t);e.push(this.contextIdforContexts(a))}e.push(""),this._currentContextIds=e},e.prototype.contextIdforContexts=function(e){return e?e.map(function(e){return 0===e.id&&0===e.iterationId?"":e.frameName+"-"+e.iterationId}).join("/"):""},e.prototype.enterFrame=function(e){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,e)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))},e.prototype.exitFrame=function(){if(!(this.contexts&&this.contexts.length>1))throw new Error("Cannot exit frame, the context is empty");this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift()},e.prototype.nextIteration=function(){if(!(this.contexts&&this.contexts.length>0))throw new Error("Cannot increase frame iteration, the context is empty");this.contexts=this.contexts.slice(),this.lastId++;var e=Object.assign({},this.contexts[this.contexts.length-1]);e.iterationId+=1,e.id=this.lastId,this.contexts.splice(-1,1,e),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))},e.prototype.getWeight=function(e){return this.weightMap[e]},e.prototype.addTensorArray=function(e){this.tensorArrayMap[e.id]=e},e.prototype.getTensorArray=function(e){return this.tensorArrayMap[e]},e}();function getExecutionSubgraph(e,t,a){for(var r=new Set,n=[],s=null,o=null,p=new Set,u=Object.keys(e).map(function(e){return parseNodeName(e)[0]}),i=t.slice();i.length>0;){var m=i.pop();(isControlFlow(m)||isDynamicShape(m))&&null==s&&(o=(s=m).children.map(function(e){return e.name}).filter(function(e){return r.has(e)})),r.add(m.name),null==a[m.name]&&(-1===u.indexOf(m.name)&&(0!==m.inputs.length?m.inputs.forEach(function(e){p.has(e.name)||(p.add(e.name),i.push(e))}):n.push(m.name)))}return{inputs:e,outputs:t,usedNodes:r,missingInputs:n,dynamicNode:s,syncInputs:o}}function getNodesInTopologicalOrder(e,t,a){var r=a.usedNodes,n=a.inputs,s=[];Object.keys(n).map(function(e){return parseNodeName(e)[0]}).map(function(t){return e.nodes[t]}).forEach(function(e){r.has(e.name)&&s.push(e)}),e.weights.forEach(function(e){r.has(e.name)&&s.push(e)});for(var o=new Set,p=[];s.length>0;){var u=s.pop();o.add(u.name),t[u.name]||p.push(u),u.children.forEach(function(e){!o.has(e.name)&&r.has(e.name)&&e.inputs.every(function(e){return o.has(e.name)})&&s.push(e)})}return p}var CONTROL_FLOW_OPS=["Switch","Merge","Enter","Exit","NextIteration"],DYNAMIC_SHAPE_OPS=["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"];function isControlFlow(e){return CONTROL_FLOW_OPS.indexOf(e.op)>=0}function isDynamicShape(e){return DYNAMIC_SHAPE_OPS.indexOf(e.op)>=0}var GraphExecutor=function(){function e(e){this.graph=e,this.compiledMap=new Map,this._weightMap={},this.SEPERATOR=",",this._outputs=e.outputs,this._inputs=e.inputs,this._signature=e.signature}return Object.defineProperty(e.prototype,"weightMap",{get:function(){return this._weightMap},set:function(e){var t=Object.keys(e).map(function(t){return e[t].map(function(e){return e.id})});this.weightIds=[].concat.apply([],t),this._weightMap=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"inputs",{get:function(){return this._inputs.map(function(e){return{name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"outputs",{get:function(){return this._outputs.map(function(e){return{name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"inputNodes",{get:function(){return this._inputs.map(function(e){return e.signatureKey||e.name})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"outputNodes",{get:function(){return this._outputs.map(function(e){return e.signatureKey||e.name})},enumerable:!0,configurable:!0}),e.prototype.getCompilationKey=function(e,t){var a=e.map(function(e){return e.name}).sort(),r=t.map(function(e){return e.name}).sort();return a.join(this.SEPERATOR)+"--"+r.join(this.SEPERATOR)},e.prototype.compile=function(e,t){var a=getExecutionSubgraph(e,t,this.weightMap),r=a.missingInputs,n=a.dynamicNode,s=a.syncInputs;if(null!=n)throw new Error("This execution contains the node '"+n.name+"', which has the dynamic op '"+n.op+"'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs ["+s+"]");if(r.length>0){var o=t.map(function(e){return e.name}),p=Object.keys(e);throw new Error("Cannot compute the outputs ["+o+"] from the provided inputs ["+p+"]. Missing the following inputs: ["+r+"]")}return getNodesInTopologicalOrder(this.graph,this.weightMap,a)},e.prototype.execute=function(e,t){var a=this;e=this.mapInputs(e);var r=Object.keys(e).sort();this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t);var n=r.map(function(e){return a.graph.nodes[parseNodeName(e)[0]]}),s=t.map(function(e){return a.graph.nodes[parseNodeName(e)[0]]}),o=this.getCompilationKey(n,s),p=this.compiledMap.get(o);null==p&&(p=this.compile(e,s),this.compiledMap.set(o,p));var u={};return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["tidy"])(function(){var r=new ExecutionContext(a._weightMap,u),n=__assign({},a.weightMap);Object.keys(e).forEach(function(t){var a=parseNodeName(t),r=a[0],s=[];s[a[1]]=e[t],n[r]=s});for(var s=a.getFrozenTensorIds(n),o={},i=0;i<p.length;i++){var m=p[i];if(!n[m.name]){var l=executeOp$16(m,n,r);if(l instanceof Promise)throw new Error("The execution of the op '"+m.op+"' returned a promise. Please use model.executeAsync() instead.");n[m.name]=l,a.checkTensorForDisposal(m.name,m,n,r,s,t,o)}}return t.map(function(e){return getTensor(e,n,r)})})},e.prototype.getFrozenTensorIds=function(e){var t=[].concat.apply([],Object.keys(e).map(function(t){return e[t]}).map(function(e){return e.map(function(e){return e.id})}));return new Set(t)},e.prototype.checkTensorForDisposal=function(e,t,a,r,n,s,o){"control"!==t.category&&-1===s.indexOf(e)&&(a[e].forEach(function(e){null!=e&&(o[e.id]=(o[e.id]||0)+t.children.length)}),t.inputs.forEach(function(e){if("control"!==e.category){var t=getTensorsForCurrentContenxt(e.name,a,r);null!=t&&t.forEach(function(e){if(e&&!n.has(e.id)){var t=o[e.id];1===t?(e.dispose(),delete o[e.id]):null!=t&&o[e.id]--}})}}))},e.prototype.executeAsync=function(e,t){return __awaiter(this,void 0,void 0,function(){var a,r,n,s,o,p,u=this;return __generator(this,function(i){switch(i.label){case 0:return e=this.mapInputs(e),this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t),a={},r=new ExecutionContext(this._weightMap,a),[4,this.executeWithControlFlow(e,r,t)];case 1:return n=i.sent(),s=t.map(function(e){return getTensor(e,n,r)}),o=new Set(s.map(function(e){return e.id})),p=new Set(Object.keys(e).map(function(t){return e[t].id})),Object.keys(n).forEach(function(e){n[e].forEach(function(e){!e||e.isDisposed||o.has(e.id)||p.has(e.id)||-1!==u.weightIds.indexOf(e.id)||e.dispose()})}),[2,s]}})})},e.prototype.executeWithControlFlow=function(e,t,a){return __awaiter(this,void 0,void 0,function(){var r,n,s,o,p,u,i,m,l,c,d,y,f,g,h,N,x=this;return __generator(this,function(V){switch(V.label){case 0:r=Object.keys(e),n=r.map(function(e){return x.graph.nodes[parseNodeName(e)[0]]}),s=a.map(function(e){return x.graph.nodes[parseNodeName(e)[0]]}),o=getExecutionSubgraph(e,s,this.weightMap),p=o.usedNodes,u=o.missingInputs,i=o.dynamicNode,m=o.syncInputs,l=n.concat(this.graph.weights).map(function(e){return{node:e,contexts:t.currentContext}}),c=__assign({},this.weightMap),Object.keys(e).forEach(function(t){var a=parseNodeName(t),r=a[0],n=[];n[a[1]]=e[t],c[r]=n}),d={},y=this.getFrozenTensorIds(c),f={},V.label=1;case 1:return l.length>0?(g=this.processStack(n,l,t,c,f,y,a,d,p),[4,Promise.all(g)]):[3,3];case 2:return V.sent(),[3,1];case 3:if(null==i&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead."),(h=s.filter(function(e){return!isControlFlow(e)&&!getTensor(e.name,c,t)}).map(function(e){return e.name})).length>0)throw N="",null!=i&&(N="Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs ["+m+"]"),new Error("Cannot compute the outputs ["+h+"] from the provided inputs ["+r+"]. Consider providing the following inputs: ["+u+"]. "+N);return[2,c]}})})},e.prototype.processStack=function(e,t,a,r,n,s,o,p,u){for(var i=this,m=[],l=function(){var l=t.pop();a.currentContext=l.contexts;var d="";if("Enter"===l.node.op&&getParamValue("isConstant",l.node,r,a)&&(d=getNodeNameAndIndex(l.node.name,a)[0]),-1===e.indexOf(l.node)){var y=executeOp$16(l.node,r,a);d||(d=getNodeNameAndIndex(l.node.name,a)[0]);var f=a.currentContext;y instanceof Promise?m.push(y.then(function(e){return r[d]=e,a.currentContext=f,i.checkTensorForDisposal(d,l.node,r,a,s,o,p),i.processChildNodes(l.node,t,a,r,n,u),e})):(r[d]=y,c.checkTensorForDisposal(d,l.node,r,a,s,o,p),c.processChildNodes(l.node,t,a,r,n,u))}else c.processChildNodes(l.node,t,a,r,n,u)},c=this;t.length>0;)l();return m},e.prototype.processChildNodes=function(e,t,a,r,n,s){e.children.forEach(function(e){var o=getNodeNameAndIndex(e.name,a)[0];!n[o]&&s.has(e.name)&&("Merge"===e.op?e.inputNames.some(function(e){return!!getTensor(e,r,a)})&&(n[o]=!0,t.push({contexts:a.currentContext,node:e})):e.inputNames.every(function(e){return!!getTensor(e,r,a)})&&(n[o]=!0,t.push({contexts:a.currentContext,node:e})))})},e.prototype.dispose=function(){var e=this;Object.keys(this.weightMap).forEach(function(t){return e.weightMap[t].forEach(function(e){return e.dispose()})})},e.prototype.checkInputShapeAndType=function(e){var t=this;Object.keys(e).forEach(function(a){var r=e[a],n=parseNodeName(a)[0],s=t.graph.nodes[n];if(s.attrParams.shape&&s.attrParams.shape.value){var o=s.attrParams.shape.value,p=o.length===r.shape.length&&r.shape.every(function(e,t){return-1===o[t]||o[t]===e});_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].assert(p,function(){return"The shape of dict['"+s.name+"'] provided in model.execute(dict) must be ["+o+"], but was ["+r.shape+"]"})}s.attrParams.dtype&&s.attrParams.dtype.value&&_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["util"].assert(r.dtype===s.attrParams.dtype.value,function(){return"The dtype of dict['"+s.name+"'] provided in model.execute(dict) must be "+s.attrParams.dtype.value+", but was "+r.dtype})})},e.prototype.mapInputs=function(e){var t={};for(var a in e){if(null!=this._signature&&null!=this._signature.inputs&&null!=this._signature.inputs[a])t[this._signature.inputs[a].name]=e[a];else t[a]=e[a]}return t},e.prototype.checkInputs=function(e){var t=this,a=Object.keys(e).filter(function(e){var a=parseNodeName(e)[0];return null==t.graph.nodes[a]});if(a.length>0)throw new Error("The dict provided in model.execute(dict) has keys: ["+a+"] that are not part of graph")},e.prototype.mapOutputs=function(e){var t=this;return e.map(function(e){return null!=t._signature&&null!=t._signature.outputs&&null!=t._signature.outputs[e]?t._signature.outputs[e].name:e},{})},e.prototype.checkOutputs=function(e){var t=this;e.forEach(function(e){var a=parseNodeName(e)[0];if(!t.graph.nodes[a])throw new Error("The output '"+e+"' is not found in the graph")})},e}(),TFHUB_SEARCH_PARAM="?tfjs-format=file",DEFAULT_MODEL_NAME="model.json",GraphModel=function(){function e(e,t){void 0===t&&(t={}),this.modelUrl=e,this.loadOptions=t,this.version="n/a",null==t&&(this.loadOptions={})}return Object.defineProperty(e.prototype,"modelVersion",{get:function(){return this.version},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"inputNodes",{get:function(){return this.executor.inputNodes},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"outputNodes",{get:function(){return this.executor.outputNodes},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"inputs",{get:function(){return this.executor.inputs},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"outputs",{get:function(){return this.executor.outputs},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"weights",{get:function(){return this.executor.weightMap},enumerable:!0,configurable:!0}),e.prototype.findIOHandler=function(){var e=this.modelUrl;if(null!=e.load)this.handler=e;else if(null!=this.loadOptions.requestInit)this.handler=_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["io"].browserHTTPRequest(e,this.loadOptions);else{var t=_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["io"].getLoadHandlers(e,this.loadOptions.onProgress);if(0===t.length)t.push(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["io"].browserHTTPRequest(e,this.loadOptions));else if(t.length>1)throw new Error("Found more than one ("+t.length+") load handlers for URL '"+[e]+"'");this.handler=t[0]}},e.prototype.load=function(){return __awaiter(this,void 0,void 0,function(){var e,t,a,r;return __generator(this,function(n){switch(n.label){case 0:if(this.findIOHandler(),null==this.handler.load)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");return e=this,[4,this.handler.load()];case 1:return e.artifacts=n.sent(),t=this.artifacts.modelTopology,a={},null!=this.artifacts.userDefinedMetadata&&(a=this.artifacts.userDefinedMetadata.signature),this.version=t.versions.producer+"."+t.versions.minConsumer,r=_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["io"].decodeWeights(this.artifacts.weightData,this.artifacts.weightSpecs),this.executor=new GraphExecutor(OperationMapper.Instance.transformGraph(t,a)),this.executor.weightMap=this.convertTensorMapToTensorsMap(r),[2,!0]}})})},e.prototype.save=function(e,t){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(a){if("string"==typeof e){if(0===(t=_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["io"].getSaveHandlers(e)).length)throw new Error("Cannot find any save handlers for URL '"+e+"'");if(t.length>1)throw new Error("Found more than one ("+t.length+") save handlers for URL '"+e+"'");e=t[0]}if(null==e.save)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return[2,e.save(this.artifacts)]})})},e.prototype.predict=function(e,t){return this.execute(e,this.outputNodes)},e.prototype.normalizeInputs=function(e){if(!(e instanceof _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"]||Array.isArray(e)))return e;if((e=Array.isArray(e)?e:[e]).length!==this.inputNodes.length)throw new Error("Input tensor count mismatch,the graph model has "+this.inputNodes.length+" placeholders, while there are "+e.length+" input tensors.");return this.inputNodes.reduce(function(t,a,r){return t[a]=e[r],t},{})},e.prototype.normalizeOutputs=function(e){return e=e||this.outputNodes,Array.isArray(e)?e:[e]},e.prototype.execute=function(e,t){e=this.normalizeInputs(e),t=this.normalizeOutputs(t);var a=this.executor.execute(e,t);return a.length>1?a:a[0]},e.prototype.executeAsync=function(e,t){return __awaiter(this,void 0,void 0,function(){var a;return __generator(this,function(r){switch(r.label){case 0:return e=this.normalizeInputs(e),t=this.normalizeOutputs(t),[4,this.executor.executeAsync(e,t)];case 1:return[2,(a=r.sent()).length>1?a:a[0]]}})})},e.prototype.convertTensorMapToTensorsMap=function(e){return Object.keys(e).reduce(function(t,a){return t[a]=[e[a]],t},{})},e.prototype.dispose=function(){this.executor.dispose()},e}();function loadGraphModel(e,t){return void 0===t&&(t={}),__awaiter(this,void 0,void 0,function(){var a;return __generator(this,function(r){switch(r.label){case 0:if(null==e)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");return null==t&&(t={}),t.fromTFHub&&null==e.load&&(e.endsWith("/")||(e+="/"),e=""+e+DEFAULT_MODEL_NAME+TFHUB_SEARCH_PARAM),[4,(a=new GraphModel(e,t)).load()];case 1:return r.sent(),[2,a]}})})}var version="1.7.1";
//# sourceMappingURL=tf-converter.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4).Buffer))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"className":"_1Ezx4z7z1af7sm8HcthqJj","VideoCapture":"_2KlHQagx--JI9xX21tMdfS"};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);
var formats = __webpack_require__(3);
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = obj.join(',');
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key') : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key');
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value'))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (isArray(obj)) {
            pushToArray(values, stringify(
                obj[key],
                typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix,
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        } else {
            pushToArray(values, stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        }
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj; // eslint-disable-line no-param-reassign
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(15);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(5)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 17 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 18 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./node_modules/@tensorflow-models/coco-ssd/dist/coco-ssd.esm.js
var coco_ssd_esm_namespaceObject = {};
__webpack_require__.r(coco_ssd_esm_namespaceObject);
__webpack_require__.d(coco_ssd_esm_namespaceObject, "load", function() { return load; });
__webpack_require__.d(coco_ssd_esm_namespaceObject, "ObjectDetection", function() { return ObjectDetection; });
__webpack_require__.d(coco_ssd_esm_namespaceObject, "version", function() { return version; });

// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(6);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/@tensorflow/tfjs-converter/dist/tf-converter.esm.js
var tf_converter_esm = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js
var tf_core_esm = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@tensorflow-models/coco-ssd/dist/coco-ssd.esm.js
/**
    * @license
    * Copyright 2019 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */
function __awaiter(e,a,i,n){return new(i||(i=Promise))(function(t,m){function r(e){try{s(n.next(e))}catch(e){m(e)}}function d(e){try{s(n.throw(e))}catch(e){m(e)}}function s(e){e.done?t(e.value):new i(function(a){a(e.value)}).then(r,d)}s((n=n.apply(e,a||[])).next())})}function __generator(e,a){var i,n,t,m,r={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return m={next:d(0),throw:d(1),return:d(2)},"function"==typeof Symbol&&(m[Symbol.iterator]=function(){return this}),m;function d(m){return function(d){return function(m){if(i)throw new TypeError("Generator is already executing.");for(;r;)try{if(i=1,n&&(t=2&m[0]?n.return:m[0]?n.throw||((t=n.return)&&t.call(n),0):n.next)&&!(t=t.call(n,m[1])).done)return t;switch(n=0,t&&(m=[2&m[0],t.value]),m[0]){case 0:case 1:t=m;break;case 4:return r.label++,{value:m[1],done:!1};case 5:r.label++,n=m[1],m=[0];continue;case 7:m=r.ops.pop(),r.trys.pop();continue;default:if(!(t=(t=r.trys).length>0&&t[t.length-1])&&(6===m[0]||2===m[0])){r=0;continue}if(3===m[0]&&(!t||m[1]>t[0]&&m[1]<t[3])){r.label=m[1];break}if(6===m[0]&&r.label<t[1]){r.label=t[1],t=m;break}if(t&&r.label<t[2]){r.label=t[2],r.ops.push(m);break}t[2]&&r.ops.pop(),r.trys.pop();continue}m=a.call(e,r)}catch(e){m=[6,e],n=0}finally{i=t=0}if(5&m[0])throw m[1];return{value:m[0]?m[1]:void 0,done:!0}}([m,d])}}}function __read(e,a){var i="function"==typeof Symbol&&e[Symbol.iterator];if(!i)return e;var n,t,m=i.call(e),r=[];try{for(;(void 0===a||a-- >0)&&!(n=m.next()).done;)r.push(n.value)}catch(e){t={error:e}}finally{try{n&&!n.done&&(i=m.return)&&i.call(m)}finally{if(t)throw t.error}}return r}var CLASSES={1:{name:"/m/01g317",id:1,displayName:"person"},2:{name:"/m/0199g",id:2,displayName:"bicycle"},3:{name:"/m/0k4j",id:3,displayName:"car"},4:{name:"/m/04_sv",id:4,displayName:"motorcycle"},5:{name:"/m/05czz6l",id:5,displayName:"airplane"},6:{name:"/m/01bjv",id:6,displayName:"bus"},7:{name:"/m/07jdr",id:7,displayName:"train"},8:{name:"/m/07r04",id:8,displayName:"truck"},9:{name:"/m/019jd",id:9,displayName:"boat"},10:{name:"/m/015qff",id:10,displayName:"traffic light"},11:{name:"/m/01pns0",id:11,displayName:"fire hydrant"},13:{name:"/m/02pv19",id:13,displayName:"stop sign"},14:{name:"/m/015qbp",id:14,displayName:"parking meter"},15:{name:"/m/0cvnqh",id:15,displayName:"bench"},16:{name:"/m/015p6",id:16,displayName:"bird"},17:{name:"/m/01yrx",id:17,displayName:"cat"},18:{name:"/m/0bt9lr",id:18,displayName:"dog"},19:{name:"/m/03k3r",id:19,displayName:"horse"},20:{name:"/m/07bgp",id:20,displayName:"sheep"},21:{name:"/m/01xq0k1",id:21,displayName:"cow"},22:{name:"/m/0bwd_0j",id:22,displayName:"elephant"},23:{name:"/m/01dws",id:23,displayName:"bear"},24:{name:"/m/0898b",id:24,displayName:"zebra"},25:{name:"/m/03bk1",id:25,displayName:"giraffe"},27:{name:"/m/01940j",id:27,displayName:"backpack"},28:{name:"/m/0hnnb",id:28,displayName:"umbrella"},31:{name:"/m/080hkjn",id:31,displayName:"handbag"},32:{name:"/m/01rkbr",id:32,displayName:"tie"},33:{name:"/m/01s55n",id:33,displayName:"suitcase"},34:{name:"/m/02wmf",id:34,displayName:"frisbee"},35:{name:"/m/071p9",id:35,displayName:"skis"},36:{name:"/m/06__v",id:36,displayName:"snowboard"},37:{name:"/m/018xm",id:37,displayName:"sports ball"},38:{name:"/m/02zt3",id:38,displayName:"kite"},39:{name:"/m/03g8mr",id:39,displayName:"baseball bat"},40:{name:"/m/03grzl",id:40,displayName:"baseball glove"},41:{name:"/m/06_fw",id:41,displayName:"skateboard"},42:{name:"/m/019w40",id:42,displayName:"surfboard"},43:{name:"/m/0dv9c",id:43,displayName:"tennis racket"},44:{name:"/m/04dr76w",id:44,displayName:"bottle"},46:{name:"/m/09tvcd",id:46,displayName:"wine glass"},47:{name:"/m/08gqpm",id:47,displayName:"cup"},48:{name:"/m/0dt3t",id:48,displayName:"fork"},49:{name:"/m/04ctx",id:49,displayName:"knife"},50:{name:"/m/0cmx8",id:50,displayName:"spoon"},51:{name:"/m/04kkgm",id:51,displayName:"bowl"},52:{name:"/m/09qck",id:52,displayName:"banana"},53:{name:"/m/014j1m",id:53,displayName:"apple"},54:{name:"/m/0l515",id:54,displayName:"sandwich"},55:{name:"/m/0cyhj_",id:55,displayName:"orange"},56:{name:"/m/0hkxq",id:56,displayName:"broccoli"},57:{name:"/m/0fj52s",id:57,displayName:"carrot"},58:{name:"/m/01b9xk",id:58,displayName:"hot dog"},59:{name:"/m/0663v",id:59,displayName:"pizza"},60:{name:"/m/0jy4k",id:60,displayName:"donut"},61:{name:"/m/0fszt",id:61,displayName:"cake"},62:{name:"/m/01mzpv",id:62,displayName:"chair"},63:{name:"/m/02crq1",id:63,displayName:"couch"},64:{name:"/m/03fp41",id:64,displayName:"potted plant"},65:{name:"/m/03ssj5",id:65,displayName:"bed"},67:{name:"/m/04bcr3",id:67,displayName:"dining table"},70:{name:"/m/09g1w",id:70,displayName:"toilet"},72:{name:"/m/07c52",id:72,displayName:"tv"},73:{name:"/m/01c648",id:73,displayName:"laptop"},74:{name:"/m/020lf",id:74,displayName:"mouse"},75:{name:"/m/0qjjc",id:75,displayName:"remote"},76:{name:"/m/01m2v",id:76,displayName:"keyboard"},77:{name:"/m/050k8",id:77,displayName:"cell phone"},78:{name:"/m/0fx9l",id:78,displayName:"microwave"},79:{name:"/m/029bxz",id:79,displayName:"oven"},80:{name:"/m/01k6s3",id:80,displayName:"toaster"},81:{name:"/m/0130jx",id:81,displayName:"sink"},82:{name:"/m/040b_t",id:82,displayName:"refrigerator"},84:{name:"/m/0bt_c3",id:84,displayName:"book"},85:{name:"/m/01x3z",id:85,displayName:"clock"},86:{name:"/m/02s195",id:86,displayName:"vase"},87:{name:"/m/01lsmm",id:87,displayName:"scissors"},88:{name:"/m/0kmg4",id:88,displayName:"teddy bear"},89:{name:"/m/03wvsk",id:89,displayName:"hair drier"},90:{name:"/m/012xff",id:90,displayName:"toothbrush"}},version="2.0.1",BASE_PATH="https://storage.googleapis.com/tfjs-models/savedmodel/";function load(e){return void 0===e&&(e={}),__awaiter(this,void 0,void 0,function(){var a,i,n;return __generator(this,function(t){switch(t.label){case 0:if(null==tf_core_esm)throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this model.");if(a=e.base||"lite_mobilenet_v2",i=e.modelUrl,-1===["mobilenet_v1","mobilenet_v2","lite_mobilenet_v2"].indexOf(a))throw new Error("ObjectDetection constructed with invalid base model "+a+". Valid names are 'mobilenet_v1', 'mobilenet_v2' and 'lite_mobilenet_v2'.");return[4,(n=new ObjectDetection(a,i)).load()];case 1:return t.sent(),[2,n]}})})}var ObjectDetection=function(){function e(e,a){this.modelPath=a||""+BASE_PATH+this.getPrefix(e)+"/model.json"}return e.prototype.getPrefix=function(e){return"lite_mobilenet_v2"===e?"ssd"+e:"ssd_"+e},e.prototype.load=function(){return __awaiter(this,void 0,void 0,function(){var e,a;return __generator(this,function(i){switch(i.label){case 0:return e=this,[4,Object(tf_converter_esm["a" /* loadGraphModel */])(this.modelPath)];case 1:return e.model=i.sent(),[4,this.model.executeAsync(Object(tf_core_esm["zeros"])([1,300,300,3]))];case 2:return a=i.sent(),[4,Promise.all(a.map(function(e){return e.data()}))];case 3:return i.sent(),a.map(function(e){return e.dispose()}),[2]}})})},e.prototype.infer=function(e,a){return __awaiter(this,void 0,void 0,function(){var i,n,t,m,r,d,s,o,l,p,c,y;return __generator(this,function(u){switch(u.label){case 0:return i=Object(tf_core_esm["tidy"])(function(){return e instanceof tf_core_esm["Tensor"]||(e=tf_core_esm["browser"].fromPixels(e)),e.expandDims(0)}),n=i.shape[1],t=i.shape[2],[4,this.model.executeAsync(i)];case 1:return m=u.sent(),r=m[0].dataSync(),d=m[1].dataSync(),i.dispose(),Object(tf_core_esm["dispose"])(m),s=__read(this.calculateMaxScores(r,m[0].shape[1],m[0].shape[2]),2),o=s[0],l=s[1],p=Object(tf_core_esm["getBackend"])(),Object(tf_core_esm["setBackend"])("cpu"),c=Object(tf_core_esm["tidy"])(function(){var e=Object(tf_core_esm["tensor2d"])(d,[m[1].shape[1],m[1].shape[3]]);return tf_core_esm["image"].nonMaxSuppression(e,o,a,.5,.5)}),y=c.dataSync(),c.dispose(),Object(tf_core_esm["setBackend"])(p),[2,this.buildDetectedObjects(t,n,d,o,y,l)]}})})},e.prototype.buildDetectedObjects=function(e,a,i,n,t,m){for(var r=t.length,d=[],s=0;s<r;s++){for(var o=[],l=0;l<4;l++)o[l]=i[4*t[s]+l];var p=o[0]*a,c=o[1]*e,y=o[2]*a,u=o[3]*e;o[0]=c,o[1]=p,o[2]=u-c,o[3]=y-p,d.push({bbox:o,class:CLASSES[m[t[s]]+1].displayName,score:n[t[s]]})}return d},e.prototype.calculateMaxScores=function(e,a,i){for(var n=[],t=[],m=0;m<a;m++){for(var r=Number.MIN_VALUE,d=-1,s=0;s<i;s++)e[m*i+s]>r&&(r=e[m*i+s],d=s);n[m]=r,t[m]=d}return[n,t]},e.prototype.detect=function(e,a){return void 0===a&&(a=20),__awaiter(this,void 0,void 0,function(){return __generator(this,function(i){return[2,this.infer(e,a)]})})},e.prototype.dispose=function(){this.model&&this.model.dispose()},e}();

// EXTERNAL MODULE: ./src/tools/video-capture/video-capture.module.css
var video_capture_module = __webpack_require__(8);
var video_capture_module_default = /*#__PURE__*/__webpack_require__.n(video_capture_module);

// CONCATENATED MODULE: ./src/tools/video-capture/video-capture.js




const getCallbackName = () => {
  let scripts = Array.from(document.getElementsByTagName('script'))
  let myScriptProd = scripts.filter(script => script.src.includes(`dist/tools/video-capture/video-capture.min.js`))[0]
  let myScriptDebug = scripts.filter(script => script.src.includes(`dist/tools/video-capture/video-capture.js`))[0]
  let myScript = myScriptProd || myScriptDebug
  let src = myScript.src
  let url = new URL(src)
  let queryString = lib_default.a.parse(url.search.substr(1, url.search.length))
  console.log(`getCallbackName - url is`, { scripts, window: window, src, url, queryString })
  return queryString.callback
}

function ObjectDetector () {
  this.rate = 1000
  this.predictionsArray = []
  this.sceneObjects = []
  this.intervalHandle = null
  this.add = (preditions) => {
    this.predictionsArray.push(preditions)
  }
  this.run = () => {
    let cycle = 0
    let handle = setInterval(() => {
      cycle++
      console.log(`cycle ${cycle}:`, { predictionsArray: this.predictionsArray })
      let objects = []
      this.predictionsArray.forEach((predictions) => {
        predictions.forEach(prediction => {
          let objectClass = prediction.class
          let score = prediction.score
          if (score >= 0.7) {
            objects.push(objectClass)
          }
        })
      })
      if (objects.filter(object => object === 'person').length / objects.length > 0.7) {
        this.onDetect("person");
      }
      console.log(`cycle ${cycle}:`, { predictionsArray: this.predictionsArray })
      this.predictionsArray = []
    }, this.rate)
    this.intervalHandle = handle
  }
  this.stop = () => {
    clearTimeout(this.intervalHandle)
  }
  this.onDetect = () => {}
  return this;
}

function SoundManager () {
  this.randomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  }
  this.playingAudo = [];
  this.play = () => {
    let audio = new window.Audio(`./audio/${this.randomNumber(1,3)}.mp3`)
    let hasReachedMaxPolyphony = this.playingAudo.filter(audio => !audio.paused).length >= 2;
    if(hasReachedMaxPolyphony === false){
      this.playingAudo = [];
      this.playingAudo.push(audio);
      audio.play();
    }
  }
  return {
    play: this.play
  }
}

const detect = async (imageElement) => {
  console.log('detect', { cocoSsd: coco_ssd_esm_namespaceObject, window })
  // Load the model.
  const model = await load()
  // Classify the image.
  const predictions = await model.detect(imageElement)
  console.log('detect - prediction: ', predictions)
}

const detectFromVideo = async (videoElement, canvasElement) => {
  let soundManager = new SoundManager()
  let objectDetector = new ObjectDetector()
  objectDetector.run()
  objectDetector.onDetect = (objectClass) => {
    console.log(`detected: ${objectClass}`)
    try {
      soundManager.play()
    } catch (e) {
      console.error(e)
    }
  }
  console.log('detectFromVideo', { cocoSsd: coco_ssd_esm_namespaceObject, window })
  const renderPredictions = (predictions, canvasElement) => {
    const ctx = canvasElement.getContext('2d')
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    // Font options.
    const font = '16px sans-serif'
    ctx.font = font
    ctx.textBaseline = 'top'
    predictions.forEach(prediction => {
      const x = prediction.bbox[0]
      const y = prediction.bbox[1]
      const width = prediction.bbox[2]
      const height = prediction.bbox[3]
      // Draw the bounding box.
      ctx.strokeStyle = '#00FFFF'
      ctx.lineWidth = 4
      ctx.strokeRect(x, y, width, height)
      // Draw the label background.
      ctx.fillStyle = '#00FFFF'
      const textWidth = ctx.measureText(prediction.class).width
      const textHeight = parseInt(font, 10) // base 10
      ctx.fillRect(x, y, textWidth + 4, textHeight + 4)
    })

    predictions.forEach(prediction => {
      const x = prediction.bbox[0]
      const y = prediction.bbox[1]
      // Draw the text last to ensure it's on top.
      ctx.fillStyle = '#000000'
      ctx.fillText(prediction.class, x, y)
    })
  }
  // Load the model.
  const model = await load()
  // Classify the image.
  const detectFrame = async () => {
    await model.detect(videoElement).then(predictions => {
      // console.log('detectFromVideo - prediction: ', predictions);
      objectDetector.add(predictions)
      renderPredictions(predictions, canvasElement)
      requestAnimationFrame(async () => {
        await detectFrame(videoElement, model)
      })
    })
  }
  await detectFrame(videoElement, canvasElement)
}

const runCallback = () => {
  console.log(`runCallback`)
  window.onload = function () {
    let callbackName = getCallbackName()
    let paths = callbackName.split('.')
    window[`${paths[0]}`] = {
      ...window[`${paths[0]}`],
      detect,
      detectFromVideo,
      styles: video_capture_module_default.a
    }
    window[`${paths[0]}`][`${paths[1]}`]()
  }
}

runCallback()


/***/ })
/******/ ]);
});