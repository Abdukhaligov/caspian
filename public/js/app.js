/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavbarComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "NavbarComponent",
  props: ['routes', 'locale', 'data']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PageBannerComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PageBannerComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PageBannerComponent",
  props: ['title']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Timer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Timer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Timer",
  props: ['starttime', 'endtime', 'trans'],
  data: function data() {
    return {
      timer: "",
      wordString: {},
      start: "",
      end: "",
      interval: "",
      days: "",
      minutes: "",
      hours: "",
      seconds: "",
      message: "",
      statusType: "",
      statusText: ""
    };
  },
  created: function created() {
    this.wordString = JSON.parse(this.trans);
  },
  mounted: function mounted() {
    var _this = this;

    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime(); // Update the count down every 1 second

    this.timerCount(this.start, this.end);
    this.interval = setInterval(function () {
      _this.timerCount(_this.start, _this.end);
    }, 1000);
  },
  methods: {
    timerCount: function timerCount(start, end) {
      // Get todays date and time
      var now = new Date().getTime(); // Find the distance between now an the count down date

      var distance = start - now;
      var passTime = end - now;

      if (distance < 0 && passTime < 0) {
        this.message = this.wordString.expired;
        this.statusType = "expired";
        this.statusText = this.wordString.status.expired;
        clearInterval(this.interval);
        return;
      } else if (distance < 0 && passTime > 0) {
        this.calcTime(passTime);
        this.message = this.wordString.running;
        this.statusType = "running";
        this.statusText = this.wordString.status.running;
      } else if (distance > 0 && passTime > 0) {
        this.calcTime(distance);
        this.message = this.wordString.upcoming;
        this.statusType = "upcoming";
        this.statusText = this.wordString.status.upcoming;
      }
    },
    calcTime: function calcTime(dist) {
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(dist % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      this.minutes = Math.floor(dist % (1000 * 60 * 60) / (1000 * 60));
      this.seconds = Math.floor(dist % (1000 * 60) / 1000);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Timer.vue?vue&type=style&index=0&id=54f9552c&scoped=true&lang=sass&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Timer.vue?vue&type=style&index=0&id=54f9552c&scoped=true&lang=sass& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timer[data-v-54f9552c] {\n  font-size: 20px;\n  text-align: center;\n  margin-top: 50px;\n}\n.timer .day[data-v-54f9552c], .timer .hour[data-v-54f9552c], .timer .min[data-v-54f9552c], .timer .sec[data-v-54f9552c] {\n  font-size: 30px;\n  display: inline-block;\n  font-weight: 500;\n  text-align: center;\n  margin: 0 5px;\n}\n.timer .day .format[data-v-54f9552c], .timer .hour .format[data-v-54f9552c], .timer .min .format[data-v-54f9552c], .timer .sec .format[data-v-54f9552c] {\n  font-weight: 300;\n  font-size: 14px;\n  opacity: 0.8;\n  width: 60px;\n}\n.timer .number[data-v-54f9552c] {\n  background: rgba(51, 51, 51, 0.53);\n  padding: 0 5px;\n  border-radius: 5px;\n  display: inline-block;\n  width: 60px;\n  text-align: center;\n}\n.timer .message[data-v-54f9552c] {\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 5px;\n}\n.timer .status-tag[data-v-54f9552c] {\n  width: 270px;\n  margin: 10px auto;\n  padding: 8px 0;\n  font-weight: 500;\n  color: #000;\n  text-align: center;\n  border-radius: 15px;\n}\n.timer .status-tag.upcoming[data-v-54f9552c] {\n  background-color: lightGreen;\n}\n.timer .status-tag.running[data-v-54f9552c] {\n  background-color: gold;\n}\n.timer .status-tag.expired[data-v-54f9552c] {\n  background-color: silver;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.sub-menu-active[data-v-485090b2] {\n  background-color: #0c59db;\n  color: #fff!important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
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

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Timer.vue?vue&type=style&index=0&id=54f9552c&scoped=true&lang=sass&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Timer.vue?vue&type=style&index=0&id=54f9552c&scoped=true&lang=sass& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Timer.vue?vue&type=style&index=0&id=54f9552c&scoped=true&lang=sass& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Timer.vue?vue&type=style&index=0&id=54f9552c&scoped=true&lang=sass&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./NavbarComponent.vue?vue&type=style&index=0&id=485090b2&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
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
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-inputmask/dist/vue-inputmask.js":
/*!**********************************************************!*\
  !*** ./node_modules/vue-inputmask/dist/vue-inputmask.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n* dependencyLibs/inputmask.dependencyLib.js\n* https://github.com/RobinHerbots/Inputmask\n* Copyright (c) 2010 - 2017 Robin Herbots\n* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)\n* Version: 3.3.8\n*/\n\n!function(factory) {\n     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(3) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : \"object\" == typeof exports ? module.exports = factory(require(\"../global/window\"), require(\"../global/document\")) : window.dependencyLib = factory(window, document);\n}(function(window, document) {\n    function indexOf(list, elem) {\n        for (var i = 0, len = list.length; i < len; i++) if (list[i] === elem) return i;\n        return -1;\n    }\n    function type(obj) {\n        return null == obj ? obj + \"\" : \"object\" == typeof obj || \"function\" == typeof obj ? class2type[class2type.toString.call(obj)] || \"object\" : typeof obj;\n    }\n    function isWindow(obj) {\n        return null != obj && obj === obj.window;\n    }\n    function isArraylike(obj) {\n        var length = \"length\" in obj && obj.length, ltype = type(obj);\n        return \"function\" !== ltype && !isWindow(obj) && (!(1 !== obj.nodeType || !length) || (\"array\" === ltype || 0 === length || \"number\" == typeof length && length > 0 && length - 1 in obj));\n    }\n    function isValidElement(elem) {\n        return elem instanceof Element;\n    }\n    function DependencyLib(elem) {\n        return elem instanceof DependencyLib ? elem : this instanceof DependencyLib ? void (void 0 !== elem && null !== elem && elem !== window && (this[0] = elem.nodeName ? elem : void 0 !== elem[0] && elem[0].nodeName ? elem[0] : document.querySelector(elem), \n        void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new DependencyLib(elem);\n    }\n    for (var class2type = {}, classTypes = \"Boolean Number String Function Array Date RegExp Object Error\".split(\" \"), nameNdx = 0; nameNdx < classTypes.length; nameNdx++) class2type[\"[object \" + classTypes[nameNdx] + \"]\"] = classTypes[nameNdx].toLowerCase();\n    return DependencyLib.prototype = {\n        on: function(events, handler) {\n            if (isValidElement(this[0])) for (var eventRegistry = this[0].eventRegistry, elem = this[0], _events = events.split(\" \"), endx = 0; endx < _events.length; endx++) {\n                var nsEvent = _events[endx].split(\".\"), ev = nsEvent[0], namespace = nsEvent[1] || \"global\";\n                !function(ev, namespace) {\n                    elem.addEventListener ? elem.addEventListener(ev, handler, !1) : elem.attachEvent && elem.attachEvent(\"on\" + ev, handler), \n                    eventRegistry[ev] = eventRegistry[ev] || {}, eventRegistry[ev][namespace] = eventRegistry[ev][namespace] || [], \n                    eventRegistry[ev][namespace].push(handler);\n                }(ev, namespace);\n            }\n            return this;\n        },\n        off: function(events, handler) {\n            if (isValidElement(this[0])) for (var eventRegistry = this[0].eventRegistry, elem = this[0], _events = events.split(\" \"), endx = 0; endx < _events.length; endx++) for (var nsEvent = _events[endx].split(\".\"), offEvents = function(ev, namespace) {\n                var hndx, hndL, evts = [];\n                if (ev.length > 0) if (void 0 === handler) for (hndx = 0, hndL = eventRegistry[ev][namespace].length; hndx < hndL; hndx++) evts.push({\n                    ev: ev,\n                    namespace: namespace && namespace.length > 0 ? namespace : \"global\",\n                    handler: eventRegistry[ev][namespace][hndx]\n                }); else evts.push({\n                    ev: ev,\n                    namespace: namespace && namespace.length > 0 ? namespace : \"global\",\n                    handler: handler\n                }); else if (namespace.length > 0) for (var evNdx in eventRegistry) for (var nmsp in eventRegistry[evNdx]) if (nmsp === namespace) if (void 0 === handler) for (hndx = 0, \n                hndL = eventRegistry[evNdx][nmsp].length; hndx < hndL; hndx++) evts.push({\n                    ev: evNdx,\n                    namespace: nmsp,\n                    handler: eventRegistry[evNdx][nmsp][hndx]\n                }); else evts.push({\n                    ev: evNdx,\n                    namespace: nmsp,\n                    handler: handler\n                });\n                return evts;\n            }(nsEvent[0], nsEvent[1]), i = 0, offEventsL = offEvents.length; i < offEventsL; i++) !function(ev, namespace, handler) {\n                if (ev in eventRegistry == 1) if (elem.removeEventListener ? elem.removeEventListener(ev, handler, !1) : elem.detachEvent && elem.detachEvent(\"on\" + ev, handler), \n                \"global\" === namespace) for (var nmsp in eventRegistry[ev]) eventRegistry[ev][nmsp].splice(eventRegistry[ev][nmsp].indexOf(handler), 1); else eventRegistry[ev][namespace].splice(eventRegistry[ev][namespace].indexOf(handler), 1);\n            }(offEvents[i].ev, offEvents[i].namespace, offEvents[i].handler);\n            return this;\n        },\n        trigger: function(events) {\n            if (isValidElement(this[0])) for (var eventRegistry = this[0].eventRegistry, elem = this[0], _events = \"string\" == typeof events ? events.split(\" \") : [ events.type ], endx = 0; endx < _events.length; endx++) {\n                var nsEvent = _events[endx].split(\".\"), ev = nsEvent[0], namespace = nsEvent[1] || \"global\";\n                if (void 0 !== document && \"global\" === namespace) {\n                    var evnt, i, params = {\n                        bubbles: !0,\n                        cancelable: !0,\n                        detail: Array.prototype.slice.call(arguments, 1)\n                    };\n                    if (document.createEvent) {\n                        try {\n                            evnt = new CustomEvent(ev, params);\n                        } catch (e) {\n                            evnt = document.createEvent(\"CustomEvent\"), evnt.initCustomEvent(ev, params.bubbles, params.cancelable, params.detail);\n                        }\n                        events.type && DependencyLib.extend(evnt, events), elem.dispatchEvent(evnt);\n                    } else evnt = document.createEventObject(), evnt.eventType = ev, events.type && DependencyLib.extend(evnt, events), \n                    elem.fireEvent(\"on\" + evnt.eventType, evnt);\n                } else if (void 0 !== eventRegistry[ev]) if (arguments[0] = arguments[0].type ? arguments[0] : DependencyLib.Event(arguments[0]), \n                \"global\" === namespace) for (var nmsp in eventRegistry[ev]) for (i = 0; i < eventRegistry[ev][nmsp].length; i++) eventRegistry[ev][nmsp][i].apply(elem, arguments); else for (i = 0; i < eventRegistry[ev][namespace].length; i++) eventRegistry[ev][namespace][i].apply(elem, arguments);\n            }\n            return this;\n        }\n    }, DependencyLib.isFunction = function(obj) {\n        return \"function\" === type(obj);\n    }, DependencyLib.noop = function() {}, DependencyLib.isArray = Array.isArray, DependencyLib.inArray = function(elem, arr, i) {\n        return null == arr ? -1 : indexOf(arr, elem);\n    }, DependencyLib.valHooks = void 0, DependencyLib.isPlainObject = function(obj) {\n        return \"object\" === type(obj) && !obj.nodeType && !isWindow(obj) && !(obj.constructor && !class2type.hasOwnProperty.call(obj.constructor.prototype, \"isPrototypeOf\"));\n    }, DependencyLib.extend = function() {\n        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = !1;\n        for (\"boolean\" == typeof target && (deep = target, target = arguments[i] || {}, \n        i++), \"object\" == typeof target || DependencyLib.isFunction(target) || (target = {}), \n        i === length && (target = this, i--); i < length; i++) if (null != (options = arguments[i])) for (name in options) src = target[name], \n        copy = options[name], target !== copy && (deep && copy && (DependencyLib.isPlainObject(copy) || (copyIsArray = DependencyLib.isArray(copy))) ? (copyIsArray ? (copyIsArray = !1, \n        clone = src && DependencyLib.isArray(src) ? src : []) : clone = src && DependencyLib.isPlainObject(src) ? src : {}, \n        target[name] = DependencyLib.extend(deep, clone, copy)) : void 0 !== copy && (target[name] = copy));\n        return target;\n    }, DependencyLib.each = function(obj, callback) {\n        var i = 0;\n        if (isArraylike(obj)) for (var length = obj.length; i < length && !1 !== callback.call(obj[i], i, obj[i]); i++) ; else for (i in obj) if (!1 === callback.call(obj[i], i, obj[i])) break;\n        return obj;\n    }, DependencyLib.map = function(elems, callback) {\n        var value, i = 0, length = elems.length, isArray = isArraylike(elems), ret = [];\n        if (isArray) for (;i < length; i++) null != (value = callback(elems[i], i)) && ret.push(value); else for (i in elems) null != (value = callback(elems[i], i)) && ret.push(value);\n        return [].concat(ret);\n    }, DependencyLib.data = function(owner, key, value) {\n        if (void 0 === value) return owner.__data ? owner.__data[key] : null;\n        owner.__data = owner.__data || {}, owner.__data[key] = value;\n    }, \"function\" == typeof window.CustomEvent ? DependencyLib.Event = window.CustomEvent : (DependencyLib.Event = function(event, params) {\n        params = params || {\n            bubbles: !1,\n            cancelable: !1,\n            detail: void 0\n        };\n        var evt = document.createEvent(\"CustomEvent\");\n        return evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail), \n        evt;\n    }, DependencyLib.Event.prototype = window.Event.prototype), DependencyLib;\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2RlcGVuZGVuY3lMaWJzL2lucHV0bWFzay5kZXBlbmRlbmN5TGliLmpzPzczMWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBDQUEwQyxTQUFTO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzR0FBc0c7QUFDdEc7QUFDQSw0QkFBNEIsdUdBQXVHLDZCQUE2QjtBQUNoSztBQUNBO0FBQ0EsK0lBQStJLHVCQUF1QjtBQUN0SztBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLCtJQUErSSx1QkFBdUI7QUFDdEs7QUFDQSxxSEFBcUgsYUFBYTtBQUNsSTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQix5REFBeUQsYUFBYTtBQUN0RTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhLCtEQUErRCxnQkFBZ0I7QUFDNUY7QUFDQSx3SkFBd0o7QUFDeEosYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNkxBQTZMLHVCQUF1QjtBQUNwTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakIsdUZBQXVGLG9DQUFvQyx3REFBd0QsaUJBQWlCLHlDQUF5QztBQUM3TztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLLG9DQUFvQztBQUN6QztBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxxRkFBcUY7QUFDckYsc0ZBQXNGO0FBQ3RGLDJGQUEyRjtBQUMzRiw2Q0FBNkMsWUFBWTtBQUN6RDtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkRBQTJELHVEQUF1RCxPQUFPO0FBQ3pIO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkJBQTJCLFdBQVcsaUVBQWlFO0FBQ3ZHO0FBQ0EsS0FBSztBQUNMO0FBQ0EseUNBQXlDO0FBQ3pDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuKiBkZXBlbmRlbmN5TGlicy9pbnB1dG1hc2suZGVwZW5kZW5jeUxpYi5qc1xuKiBodHRwczovL2dpdGh1Yi5jb20vUm9iaW5IZXJib3RzL0lucHV0bWFza1xuKiBDb3B5cmlnaHQgKGMpIDIwMTAgLSAyMDE3IFJvYmluIEhlcmJvdHNcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocClcbiogVmVyc2lvbjogMy4zLjhcbiovXG5cbiFmdW5jdGlvbihmYWN0b3J5KSB7XG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbIFwiLi4vZ2xvYmFsL3dpbmRvd1wiLCBcIi4uL2dsb2JhbC9kb2N1bWVudFwiIF0sIGZhY3RvcnkpIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi4vZ2xvYmFsL3dpbmRvd1wiKSwgcmVxdWlyZShcIi4uL2dsb2JhbC9kb2N1bWVudFwiKSkgOiB3aW5kb3cuZGVwZW5kZW5jeUxpYiA9IGZhY3Rvcnkod2luZG93LCBkb2N1bWVudCk7XG59KGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQpIHtcbiAgICBmdW5jdGlvbiBpbmRleE9mKGxpc3QsIGVsZW0pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIGlmIChsaXN0W2ldID09PSBlbGVtKSByZXR1cm4gaTtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0eXBlKG9iaikge1xuICAgICAgICByZXR1cm4gbnVsbCA9PSBvYmogPyBvYmogKyBcIlwiIDogXCJvYmplY3RcIiA9PSB0eXBlb2Ygb2JqIHx8IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygb2JqID8gY2xhc3MydHlwZVtjbGFzczJ0eXBlLnRvU3RyaW5nLmNhbGwob2JqKV0gfHwgXCJvYmplY3RcIiA6IHR5cGVvZiBvYmo7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzV2luZG93KG9iaikge1xuICAgICAgICByZXR1cm4gbnVsbCAhPSBvYmogJiYgb2JqID09PSBvYmoud2luZG93O1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0FycmF5bGlrZShvYmopIHtcbiAgICAgICAgdmFyIGxlbmd0aCA9IFwibGVuZ3RoXCIgaW4gb2JqICYmIG9iai5sZW5ndGgsIGx0eXBlID0gdHlwZShvYmopO1xuICAgICAgICByZXR1cm4gXCJmdW5jdGlvblwiICE9PSBsdHlwZSAmJiAhaXNXaW5kb3cob2JqKSAmJiAoISgxICE9PSBvYmoubm9kZVR5cGUgfHwgIWxlbmd0aCkgfHwgKFwiYXJyYXlcIiA9PT0gbHR5cGUgfHwgMCA9PT0gbGVuZ3RoIHx8IFwibnVtYmVyXCIgPT0gdHlwZW9mIGxlbmd0aCAmJiBsZW5ndGggPiAwICYmIGxlbmd0aCAtIDEgaW4gb2JqKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIGVsZW0gaW5zdGFuY2VvZiBFbGVtZW50O1xuICAgIH1cbiAgICBmdW5jdGlvbiBEZXBlbmRlbmN5TGliKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIGVsZW0gaW5zdGFuY2VvZiBEZXBlbmRlbmN5TGliID8gZWxlbSA6IHRoaXMgaW5zdGFuY2VvZiBEZXBlbmRlbmN5TGliID8gdm9pZCAodm9pZCAwICE9PSBlbGVtICYmIG51bGwgIT09IGVsZW0gJiYgZWxlbSAhPT0gd2luZG93ICYmICh0aGlzWzBdID0gZWxlbS5ub2RlTmFtZSA/IGVsZW0gOiB2b2lkIDAgIT09IGVsZW1bMF0gJiYgZWxlbVswXS5ub2RlTmFtZSA/IGVsZW1bMF0gOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pLCBcbiAgICAgICAgdm9pZCAwICE9PSB0aGlzWzBdICYmIG51bGwgIT09IHRoaXNbMF0gJiYgKHRoaXNbMF0uZXZlbnRSZWdpc3RyeSA9IHRoaXNbMF0uZXZlbnRSZWdpc3RyeSB8fCB7fSkpKSA6IG5ldyBEZXBlbmRlbmN5TGliKGVsZW0pO1xuICAgIH1cbiAgICBmb3IgKHZhciBjbGFzczJ0eXBlID0ge30sIGNsYXNzVHlwZXMgPSBcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3JcIi5zcGxpdChcIiBcIiksIG5hbWVOZHggPSAwOyBuYW1lTmR4IDwgY2xhc3NUeXBlcy5sZW5ndGg7IG5hbWVOZHgrKykgY2xhc3MydHlwZVtcIltvYmplY3QgXCIgKyBjbGFzc1R5cGVzW25hbWVOZHhdICsgXCJdXCJdID0gY2xhc3NUeXBlc1tuYW1lTmR4XS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBEZXBlbmRlbmN5TGliLnByb3RvdHlwZSA9IHtcbiAgICAgICAgb246IGZ1bmN0aW9uKGV2ZW50cywgaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHRoaXNbMF0pKSBmb3IgKHZhciBldmVudFJlZ2lzdHJ5ID0gdGhpc1swXS5ldmVudFJlZ2lzdHJ5LCBlbGVtID0gdGhpc1swXSwgX2V2ZW50cyA9IGV2ZW50cy5zcGxpdChcIiBcIiksIGVuZHggPSAwOyBlbmR4IDwgX2V2ZW50cy5sZW5ndGg7IGVuZHgrKykge1xuICAgICAgICAgICAgICAgIHZhciBuc0V2ZW50ID0gX2V2ZW50c1tlbmR4XS5zcGxpdChcIi5cIiksIGV2ID0gbnNFdmVudFswXSwgbmFtZXNwYWNlID0gbnNFdmVudFsxXSB8fCBcImdsb2JhbFwiO1xuICAgICAgICAgICAgICAgICFmdW5jdGlvbihldiwgbmFtZXNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lciA/IGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihldiwgaGFuZGxlciwgITEpIDogZWxlbS5hdHRhY2hFdmVudCAmJiBlbGVtLmF0dGFjaEV2ZW50KFwib25cIiArIGV2LCBoYW5kbGVyKSwgXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50UmVnaXN0cnlbZXZdID0gZXZlbnRSZWdpc3RyeVtldl0gfHwge30sIGV2ZW50UmVnaXN0cnlbZXZdW25hbWVzcGFjZV0gPSBldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdIHx8IFtdLCBcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRSZWdpc3RyeVtldl1bbmFtZXNwYWNlXS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIH0oZXYsIG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmOiBmdW5jdGlvbihldmVudHMsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudCh0aGlzWzBdKSkgZm9yICh2YXIgZXZlbnRSZWdpc3RyeSA9IHRoaXNbMF0uZXZlbnRSZWdpc3RyeSwgZWxlbSA9IHRoaXNbMF0sIF9ldmVudHMgPSBldmVudHMuc3BsaXQoXCIgXCIpLCBlbmR4ID0gMDsgZW5keCA8IF9ldmVudHMubGVuZ3RoOyBlbmR4KyspIGZvciAodmFyIG5zRXZlbnQgPSBfZXZlbnRzW2VuZHhdLnNwbGl0KFwiLlwiKSwgb2ZmRXZlbnRzID0gZnVuY3Rpb24oZXYsIG5hbWVzcGFjZSkge1xuICAgICAgICAgICAgICAgIHZhciBobmR4LCBobmRMLCBldnRzID0gW107XG4gICAgICAgICAgICAgICAgaWYgKGV2Lmxlbmd0aCA+IDApIGlmICh2b2lkIDAgPT09IGhhbmRsZXIpIGZvciAoaG5keCA9IDAsIGhuZEwgPSBldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdLmxlbmd0aDsgaG5keCA8IGhuZEw7IGhuZHgrKykgZXZ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZXY6IGV2LFxuICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZSAmJiBuYW1lc3BhY2UubGVuZ3RoID4gMCA/IG5hbWVzcGFjZSA6IFwiZ2xvYmFsXCIsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGV2ZW50UmVnaXN0cnlbZXZdW25hbWVzcGFjZV1baG5keF1cbiAgICAgICAgICAgICAgICB9KTsgZWxzZSBldnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBldjogZXYsXG4gICAgICAgICAgICAgICAgICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlICYmIG5hbWVzcGFjZS5sZW5ndGggPiAwID8gbmFtZXNwYWNlIDogXCJnbG9iYWxcIixcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogaGFuZGxlclxuICAgICAgICAgICAgICAgIH0pOyBlbHNlIGlmIChuYW1lc3BhY2UubGVuZ3RoID4gMCkgZm9yICh2YXIgZXZOZHggaW4gZXZlbnRSZWdpc3RyeSkgZm9yICh2YXIgbm1zcCBpbiBldmVudFJlZ2lzdHJ5W2V2TmR4XSkgaWYgKG5tc3AgPT09IG5hbWVzcGFjZSkgaWYgKHZvaWQgMCA9PT0gaGFuZGxlcikgZm9yIChobmR4ID0gMCwgXG4gICAgICAgICAgICAgICAgaG5kTCA9IGV2ZW50UmVnaXN0cnlbZXZOZHhdW25tc3BdLmxlbmd0aDsgaG5keCA8IGhuZEw7IGhuZHgrKykgZXZ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZXY6IGV2TmR4LFxuICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IG5tc3AsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGV2ZW50UmVnaXN0cnlbZXZOZHhdW25tc3BdW2huZHhdXG4gICAgICAgICAgICAgICAgfSk7IGVsc2UgZXZ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZXY6IGV2TmR4LFxuICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IG5tc3AsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZ0cztcbiAgICAgICAgICAgIH0obnNFdmVudFswXSwgbnNFdmVudFsxXSksIGkgPSAwLCBvZmZFdmVudHNMID0gb2ZmRXZlbnRzLmxlbmd0aDsgaSA8IG9mZkV2ZW50c0w7IGkrKykgIWZ1bmN0aW9uKGV2LCBuYW1lc3BhY2UsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXYgaW4gZXZlbnRSZWdpc3RyeSA9PSAxKSBpZiAoZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyID8gZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKGV2LCBoYW5kbGVyLCAhMSkgOiBlbGVtLmRldGFjaEV2ZW50ICYmIGVsZW0uZGV0YWNoRXZlbnQoXCJvblwiICsgZXYsIGhhbmRsZXIpLCBcbiAgICAgICAgICAgICAgICBcImdsb2JhbFwiID09PSBuYW1lc3BhY2UpIGZvciAodmFyIG5tc3AgaW4gZXZlbnRSZWdpc3RyeVtldl0pIGV2ZW50UmVnaXN0cnlbZXZdW25tc3BdLnNwbGljZShldmVudFJlZ2lzdHJ5W2V2XVtubXNwXS5pbmRleE9mKGhhbmRsZXIpLCAxKTsgZWxzZSBldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdLnNwbGljZShldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdLmluZGV4T2YoaGFuZGxlciksIDEpO1xuICAgICAgICAgICAgfShvZmZFdmVudHNbaV0uZXYsIG9mZkV2ZW50c1tpXS5uYW1lc3BhY2UsIG9mZkV2ZW50c1tpXS5oYW5kbGVyKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICB0cmlnZ2VyOiBmdW5jdGlvbihldmVudHMpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudCh0aGlzWzBdKSkgZm9yICh2YXIgZXZlbnRSZWdpc3RyeSA9IHRoaXNbMF0uZXZlbnRSZWdpc3RyeSwgZWxlbSA9IHRoaXNbMF0sIF9ldmVudHMgPSBcInN0cmluZ1wiID09IHR5cGVvZiBldmVudHMgPyBldmVudHMuc3BsaXQoXCIgXCIpIDogWyBldmVudHMudHlwZSBdLCBlbmR4ID0gMDsgZW5keCA8IF9ldmVudHMubGVuZ3RoOyBlbmR4KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbnNFdmVudCA9IF9ldmVudHNbZW5keF0uc3BsaXQoXCIuXCIpLCBldiA9IG5zRXZlbnRbMF0sIG5hbWVzcGFjZSA9IG5zRXZlbnRbMV0gfHwgXCJnbG9iYWxcIjtcbiAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBkb2N1bWVudCAmJiBcImdsb2JhbFwiID09PSBuYW1lc3BhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2bnQsIGksIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2bnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXYsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIiksIGV2bnQuaW5pdEN1c3RvbUV2ZW50KGV2LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzLnR5cGUgJiYgRGVwZW5kZW5jeUxpYi5leHRlbmQoZXZudCwgZXZlbnRzKSwgZWxlbS5kaXNwYXRjaEV2ZW50KGV2bnQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZXZudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50T2JqZWN0KCksIGV2bnQuZXZlbnRUeXBlID0gZXYsIGV2ZW50cy50eXBlICYmIERlcGVuZGVuY3lMaWIuZXh0ZW5kKGV2bnQsIGV2ZW50cyksIFxuICAgICAgICAgICAgICAgICAgICBlbGVtLmZpcmVFdmVudChcIm9uXCIgKyBldm50LmV2ZW50VHlwZSwgZXZudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2b2lkIDAgIT09IGV2ZW50UmVnaXN0cnlbZXZdKSBpZiAoYXJndW1lbnRzWzBdID0gYXJndW1lbnRzWzBdLnR5cGUgPyBhcmd1bWVudHNbMF0gOiBEZXBlbmRlbmN5TGliLkV2ZW50KGFyZ3VtZW50c1swXSksIFxuICAgICAgICAgICAgICAgIFwiZ2xvYmFsXCIgPT09IG5hbWVzcGFjZSkgZm9yICh2YXIgbm1zcCBpbiBldmVudFJlZ2lzdHJ5W2V2XSkgZm9yIChpID0gMDsgaSA8IGV2ZW50UmVnaXN0cnlbZXZdW25tc3BdLmxlbmd0aDsgaSsrKSBldmVudFJlZ2lzdHJ5W2V2XVtubXNwXVtpXS5hcHBseShlbGVtLCBhcmd1bWVudHMpOyBlbHNlIGZvciAoaSA9IDA7IGkgPCBldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdLmxlbmd0aDsgaSsrKSBldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdW2ldLmFwcGx5KGVsZW0sIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIERlcGVuZGVuY3lMaWIuaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gXCJmdW5jdGlvblwiID09PSB0eXBlKG9iaik7XG4gICAgfSwgRGVwZW5kZW5jeUxpYi5ub29wID0gZnVuY3Rpb24oKSB7fSwgRGVwZW5kZW5jeUxpYi5pc0FycmF5ID0gQXJyYXkuaXNBcnJheSwgRGVwZW5kZW5jeUxpYi5pbkFycmF5ID0gZnVuY3Rpb24oZWxlbSwgYXJyLCBpKSB7XG4gICAgICAgIHJldHVybiBudWxsID09IGFyciA/IC0xIDogaW5kZXhPZihhcnIsIGVsZW0pO1xuICAgIH0sIERlcGVuZGVuY3lMaWIudmFsSG9va3MgPSB2b2lkIDAsIERlcGVuZGVuY3lMaWIuaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gXCJvYmplY3RcIiA9PT0gdHlwZShvYmopICYmICFvYmoubm9kZVR5cGUgJiYgIWlzV2luZG93KG9iaikgJiYgIShvYmouY29uc3RydWN0b3IgJiYgIWNsYXNzMnR5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmouY29uc3RydWN0b3IucHJvdG90eXBlLCBcImlzUHJvdG90eXBlT2ZcIikpO1xuICAgIH0sIERlcGVuZGVuY3lMaWIuZXh0ZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZSwgdGFyZ2V0ID0gYXJndW1lbnRzWzBdIHx8IHt9LCBpID0gMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCwgZGVlcCA9ICExO1xuICAgICAgICBmb3IgKFwiYm9vbGVhblwiID09IHR5cGVvZiB0YXJnZXQgJiYgKGRlZXAgPSB0YXJnZXQsIHRhcmdldCA9IGFyZ3VtZW50c1tpXSB8fCB7fSwgXG4gICAgICAgIGkrKyksIFwib2JqZWN0XCIgPT0gdHlwZW9mIHRhcmdldCB8fCBEZXBlbmRlbmN5TGliLmlzRnVuY3Rpb24odGFyZ2V0KSB8fCAodGFyZ2V0ID0ge30pLCBcbiAgICAgICAgaSA9PT0gbGVuZ3RoICYmICh0YXJnZXQgPSB0aGlzLCBpLS0pOyBpIDwgbGVuZ3RoOyBpKyspIGlmIChudWxsICE9IChvcHRpb25zID0gYXJndW1lbnRzW2ldKSkgZm9yIChuYW1lIGluIG9wdGlvbnMpIHNyYyA9IHRhcmdldFtuYW1lXSwgXG4gICAgICAgIGNvcHkgPSBvcHRpb25zW25hbWVdLCB0YXJnZXQgIT09IGNvcHkgJiYgKGRlZXAgJiYgY29weSAmJiAoRGVwZW5kZW5jeUxpYi5pc1BsYWluT2JqZWN0KGNvcHkpIHx8IChjb3B5SXNBcnJheSA9IERlcGVuZGVuY3lMaWIuaXNBcnJheShjb3B5KSkpID8gKGNvcHlJc0FycmF5ID8gKGNvcHlJc0FycmF5ID0gITEsIFxuICAgICAgICBjbG9uZSA9IHNyYyAmJiBEZXBlbmRlbmN5TGliLmlzQXJyYXkoc3JjKSA/IHNyYyA6IFtdKSA6IGNsb25lID0gc3JjICYmIERlcGVuZGVuY3lMaWIuaXNQbGFpbk9iamVjdChzcmMpID8gc3JjIDoge30sIFxuICAgICAgICB0YXJnZXRbbmFtZV0gPSBEZXBlbmRlbmN5TGliLmV4dGVuZChkZWVwLCBjbG9uZSwgY29weSkpIDogdm9pZCAwICE9PSBjb3B5ICYmICh0YXJnZXRbbmFtZV0gPSBjb3B5KSk7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSwgRGVwZW5kZW5jeUxpYi5lYWNoID0gZnVuY3Rpb24ob2JqLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIGlmIChpc0FycmF5bGlrZShvYmopKSBmb3IgKHZhciBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoICYmICExICE9PSBjYWxsYmFjay5jYWxsKG9ialtpXSwgaSwgb2JqW2ldKTsgaSsrKSA7IGVsc2UgZm9yIChpIGluIG9iaikgaWYgKCExID09PSBjYWxsYmFjay5jYWxsKG9ialtpXSwgaSwgb2JqW2ldKSkgYnJlYWs7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSwgRGVwZW5kZW5jeUxpYi5tYXAgPSBmdW5jdGlvbihlbGVtcywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHZhbHVlLCBpID0gMCwgbGVuZ3RoID0gZWxlbXMubGVuZ3RoLCBpc0FycmF5ID0gaXNBcnJheWxpa2UoZWxlbXMpLCByZXQgPSBbXTtcbiAgICAgICAgaWYgKGlzQXJyYXkpIGZvciAoO2kgPCBsZW5ndGg7IGkrKykgbnVsbCAhPSAodmFsdWUgPSBjYWxsYmFjayhlbGVtc1tpXSwgaSkpICYmIHJldC5wdXNoKHZhbHVlKTsgZWxzZSBmb3IgKGkgaW4gZWxlbXMpIG51bGwgIT0gKHZhbHVlID0gY2FsbGJhY2soZWxlbXNbaV0sIGkpKSAmJiByZXQucHVzaCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiBbXS5jb25jYXQocmV0KTtcbiAgICB9LCBEZXBlbmRlbmN5TGliLmRhdGEgPSBmdW5jdGlvbihvd25lciwga2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodm9pZCAwID09PSB2YWx1ZSkgcmV0dXJuIG93bmVyLl9fZGF0YSA/IG93bmVyLl9fZGF0YVtrZXldIDogbnVsbDtcbiAgICAgICAgb3duZXIuX19kYXRhID0gb3duZXIuX19kYXRhIHx8IHt9LCBvd25lci5fX2RhdGFba2V5XSA9IHZhbHVlO1xuICAgIH0sIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID8gRGVwZW5kZW5jeUxpYi5FdmVudCA9IHdpbmRvdy5DdXN0b21FdmVudCA6IChEZXBlbmRlbmN5TGliLkV2ZW50ID0gZnVuY3Rpb24oZXZlbnQsIHBhcmFtcykge1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMgfHwge1xuICAgICAgICAgICAgYnViYmxlczogITEsXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiAhMSxcbiAgICAgICAgICAgIGRldGFpbDogdm9pZCAwXG4gICAgICAgIH07XG4gICAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO1xuICAgICAgICByZXR1cm4gZXZ0LmluaXRDdXN0b21FdmVudChldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsKSwgXG4gICAgICAgIGV2dDtcbiAgICB9LCBEZXBlbmRlbmN5TGliLkV2ZW50LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGUpLCBEZXBlbmRlbmN5TGliO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2RlcGVuZGVuY3lMaWJzL2lucHV0bWFzay5kZXBlbmRlbmN5TGliLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n* inputmask.js\n* https://github.com/RobinHerbots/Inputmask\n* Copyright (c) 2010 - 2017 Robin Herbots\n* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)\n* Version: 3.3.8\n*/\n\n!function(factory) {\n     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(2), __webpack_require__(3) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : \"object\" == typeof exports ? module.exports = factory(require(\"./dependencyLibs/inputmask.dependencyLib\"), require(\"./global/window\"), require(\"./global/document\")) : window.Inputmask = factory(window.dependencyLib || jQuery, window, document);\n}(function($, window, document, undefined) {\n    function Inputmask(alias, options, internal) {\n        if (!(this instanceof Inputmask)) return new Inputmask(alias, options, internal);\n        this.el = undefined, this.events = {}, this.maskset = undefined, this.refreshValue = !1, \n        !0 !== internal && ($.isPlainObject(alias) ? options = alias : (options = options || {}, \n        options.alias = alias), this.opts = $.extend(!0, {}, this.defaults, options), this.noMasksCache = options && options.definitions !== undefined, \n        this.userOptions = options || {}, this.isRTL = this.opts.numericInput, resolveAlias(this.opts.alias, options, this.opts));\n    }\n    function resolveAlias(aliasStr, options, opts) {\n        var aliasDefinition = Inputmask.prototype.aliases[aliasStr];\n        return aliasDefinition ? (aliasDefinition.alias && resolveAlias(aliasDefinition.alias, undefined, opts), \n        $.extend(!0, opts, aliasDefinition), $.extend(!0, opts, options), !0) : (null === opts.mask && (opts.mask = aliasStr), \n        !1);\n    }\n    function generateMaskSet(opts, nocache) {\n        function generateMask(mask, metadata, opts) {\n            var regexMask = !1;\n            if (null !== mask && \"\" !== mask || (regexMask = null !== opts.regex, regexMask ? (mask = opts.regex, \n            mask = mask.replace(/^(\\^)(.*)(\\$)$/, \"$2\")) : (regexMask = !0, mask = \".*\")), 1 === mask.length && !1 === opts.greedy && 0 !== opts.repeat && (opts.placeholder = \"\"), \n            opts.repeat > 0 || \"*\" === opts.repeat || \"+\" === opts.repeat) {\n                var repeatStart = \"*\" === opts.repeat ? 0 : \"+\" === opts.repeat ? 1 : opts.repeat;\n                mask = opts.groupmarker.start + mask + opts.groupmarker.end + opts.quantifiermarker.start + repeatStart + \",\" + opts.repeat + opts.quantifiermarker.end;\n            }\n            var masksetDefinition, maskdefKey = regexMask ? \"regex_\" + opts.regex : opts.numericInput ? mask.split(\"\").reverse().join(\"\") : mask;\n            return Inputmask.prototype.masksCache[maskdefKey] === undefined || !0 === nocache ? (masksetDefinition = {\n                mask: mask,\n                maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),\n                validPositions: {},\n                _buffer: undefined,\n                buffer: undefined,\n                tests: {},\n                metadata: metadata,\n                maskLength: undefined\n            }, !0 !== nocache && (Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition, \n            masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]))) : masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]), \n            masksetDefinition;\n        }\n        if ($.isFunction(opts.mask) && (opts.mask = opts.mask(opts)), $.isArray(opts.mask)) {\n            if (opts.mask.length > 1) {\n                opts.keepStatic = null === opts.keepStatic || opts.keepStatic;\n                var altMask = opts.groupmarker.start;\n                return $.each(opts.numericInput ? opts.mask.reverse() : opts.mask, function(ndx, msk) {\n                    altMask.length > 1 && (altMask += opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start), \n                    msk.mask === undefined || $.isFunction(msk.mask) ? altMask += msk : altMask += msk.mask;\n                }), altMask += opts.groupmarker.end, generateMask(altMask, opts.mask, opts);\n            }\n            opts.mask = opts.mask.pop();\n        }\n        return opts.mask && opts.mask.mask !== undefined && !$.isFunction(opts.mask.mask) ? generateMask(opts.mask.mask, opts.mask, opts) : generateMask(opts.mask, opts.mask, opts);\n    }\n    function maskScope(actionObj, maskset, opts) {\n        function getMaskTemplate(baseOnInput, minimalPos, includeMode) {\n            minimalPos = minimalPos || 0;\n            var ndxIntlzr, test, testPos, maskTemplate = [], pos = 0, lvp = getLastValidPosition();\n            do {\n                !0 === baseOnInput && getMaskSet().validPositions[pos] ? (testPos = getMaskSet().validPositions[pos], \n                test = testPos.match, ndxIntlzr = testPos.locator.slice(), maskTemplate.push(!0 === includeMode ? testPos.input : !1 === includeMode ? test.nativeDef : getPlaceholder(pos, test))) : (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), \n                test = testPos.match, ndxIntlzr = testPos.locator.slice(), (!1 === opts.jitMasking || pos < lvp || \"number\" == typeof opts.jitMasking && isFinite(opts.jitMasking) && opts.jitMasking > pos) && maskTemplate.push(!1 === includeMode ? test.nativeDef : getPlaceholder(pos, test))), \n                pos++;\n            } while ((maxLength === undefined || pos < maxLength) && (null !== test.fn || \"\" !== test.def) || minimalPos > pos);\n            return \"\" === maskTemplate[maskTemplate.length - 1] && maskTemplate.pop(), getMaskSet().maskLength = pos + 1, \n            maskTemplate;\n        }\n        function getMaskSet() {\n            return maskset;\n        }\n        function resetMaskSet(soft) {\n            var maskset = getMaskSet();\n            maskset.buffer = undefined, !0 !== soft && (maskset.validPositions = {}, maskset.p = 0);\n        }\n        function getLastValidPosition(closestTo, strict, validPositions) {\n            var before = -1, after = -1, valids = validPositions || getMaskSet().validPositions;\n            closestTo === undefined && (closestTo = -1);\n            for (var posNdx in valids) {\n                var psNdx = parseInt(posNdx);\n                valids[psNdx] && (strict || !0 !== valids[psNdx].generatedInput) && (psNdx <= closestTo && (before = psNdx), \n                psNdx >= closestTo && (after = psNdx));\n            }\n            return -1 !== before && closestTo - before > 1 || after < closestTo ? before : after;\n        }\n        function stripValidPositions(start, end, nocheck, strict) {\n            var i, startPos = start, positionsClone = $.extend(!0, {}, getMaskSet().validPositions), needsValidation = !1;\n            for (getMaskSet().p = start, i = end - 1; i >= startPos; i--) getMaskSet().validPositions[i] !== undefined && (!0 !== nocheck && (!getMaskSet().validPositions[i].match.optionality && function(pos) {\n                var posMatch = getMaskSet().validPositions[pos];\n                if (posMatch !== undefined && null === posMatch.match.fn) {\n                    var prevMatch = getMaskSet().validPositions[pos - 1], nextMatch = getMaskSet().validPositions[pos + 1];\n                    return prevMatch !== undefined && nextMatch !== undefined;\n                }\n                return !1;\n            }(i) || !1 === opts.canClearPosition(getMaskSet(), i, getLastValidPosition(), strict, opts)) || delete getMaskSet().validPositions[i]);\n            for (resetMaskSet(!0), i = startPos + 1; i <= getLastValidPosition(); ) {\n                for (;getMaskSet().validPositions[startPos] !== undefined; ) startPos++;\n                if (i < startPos && (i = startPos + 1), getMaskSet().validPositions[i] === undefined && isMask(i)) i++; else {\n                    var t = getTestTemplate(i);\n                    !1 === needsValidation && positionsClone[startPos] && positionsClone[startPos].match.def === t.match.def ? (getMaskSet().validPositions[startPos] = $.extend(!0, {}, positionsClone[startPos]), \n                    getMaskSet().validPositions[startPos].input = t.input, delete getMaskSet().validPositions[i], \n                    i++) : positionCanMatchDefinition(startPos, t.match.def) ? !1 !== isValid(startPos, t.input || getPlaceholder(i), !0) && (delete getMaskSet().validPositions[i], \n                    i++, needsValidation = !0) : isMask(i) || (i++, startPos--), startPos++;\n                }\n            }\n            resetMaskSet(!0);\n        }\n        function determineTestTemplate(tests, guessNextBest) {\n            for (var testPos, testPositions = tests, lvp = getLastValidPosition(), lvTest = getMaskSet().validPositions[lvp] || getTests(0)[0], lvTestAltArr = lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation].toString().split(\",\") : [], ndx = 0; ndx < testPositions.length && (testPos = testPositions[ndx], \n            !(testPos.match && (opts.greedy && !0 !== testPos.match.optionalQuantifier || (!1 === testPos.match.optionality || !1 === testPos.match.newBlockMarker) && !0 !== testPos.match.optionalQuantifier) && (lvTest.alternation === undefined || lvTest.alternation !== testPos.alternation || testPos.locator[lvTest.alternation] !== undefined && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(\",\"), lvTestAltArr))) || !0 === guessNextBest && (null !== testPos.match.fn || /[0-9a-bA-Z]/.test(testPos.match.def))); ndx++) ;\n            return testPos;\n        }\n        function getTestTemplate(pos, ndxIntlzr, tstPs) {\n            return getMaskSet().validPositions[pos] || determineTestTemplate(getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));\n        }\n        function getTest(pos) {\n            return getMaskSet().validPositions[pos] ? getMaskSet().validPositions[pos] : getTests(pos)[0];\n        }\n        function positionCanMatchDefinition(pos, def) {\n            for (var valid = !1, tests = getTests(pos), tndx = 0; tndx < tests.length; tndx++) if (tests[tndx].match && tests[tndx].match.def === def) {\n                valid = !0;\n                break;\n            }\n            return valid;\n        }\n        function getTests(pos, ndxIntlzr, tstPs) {\n            function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {\n                function handleMatch(match, loopNdx, quantifierRecurse) {\n                    function isFirstMatch(latestMatch, tokenGroup) {\n                        var firstMatch = 0 === $.inArray(latestMatch, tokenGroup.matches);\n                        return firstMatch || $.each(tokenGroup.matches, function(ndx, match) {\n                            if (!0 === match.isQuantifier && (firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]))) return !1;\n                        }), firstMatch;\n                    }\n                    function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {\n                        var bestMatch, indexPos;\n                        if (getMaskSet().validPositions[pos - 1] && targetAlternation && getMaskSet().tests[pos]) for (var vpAlternation = getMaskSet().validPositions[pos - 1].locator, tpAlternation = getMaskSet().tests[pos][0].locator, i = 0; i < targetAlternation; i++) if (vpAlternation[i] !== tpAlternation[i]) return vpAlternation.slice(targetAlternation + 1);\n                        return (getMaskSet().tests[pos] || getMaskSet().validPositions[pos]) && $.each(getMaskSet().tests[pos] || [ getMaskSet().validPositions[pos] ], function(ndx, lmnt) {\n                            var alternation = targetAlternation !== undefined ? targetAlternation : lmnt.alternation, ndxPos = lmnt.locator[alternation] !== undefined ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;\n                            (indexPos === undefined || ndxPos < indexPos) && -1 !== ndxPos && (bestMatch = lmnt, \n                            indexPos = ndxPos);\n                        }), bestMatch ? bestMatch.locator.slice((targetAlternation !== undefined ? targetAlternation : bestMatch.alternation) + 1) : targetAlternation !== undefined ? resolveNdxInitializer(pos, alternateNdx) : undefined;\n                    }\n                    if (testPos > 1e4) throw \"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. \" + getMaskSet().mask;\n                    if (testPos === pos && match.matches === undefined) return matches.push({\n                        match: match,\n                        locator: loopNdx.reverse(),\n                        cd: cacheDependency\n                    }), !0;\n                    if (match.matches !== undefined) {\n                        if (match.isGroup && quantifierRecurse !== match) {\n                            if (match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx)) return !0;\n                        } else if (match.isOptional) {\n                            var optionalToken = match;\n                            if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) {\n                                if (latestMatch = matches[matches.length - 1].match, !isFirstMatch(latestMatch, optionalToken)) return !0;\n                                insertStop = !0, testPos = pos;\n                            }\n                        } else if (match.isAlternator) {\n                            var maltMatches, alternateToken = match, malternateMatches = [], currentMatches = matches.slice(), loopNdxCnt = loopNdx.length, altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;\n                            if (-1 === altIndex || \"string\" == typeof altIndex) {\n                                var amndx, currentPos = testPos, ndxInitializerClone = ndxInitializer.slice(), altIndexArr = [];\n                                if (\"string\" == typeof altIndex) altIndexArr = altIndex.split(\",\"); else for (amndx = 0; amndx < alternateToken.matches.length; amndx++) altIndexArr.push(amndx);\n                                for (var ndx = 0; ndx < altIndexArr.length; ndx++) {\n                                    if (amndx = parseInt(altIndexArr[ndx]), matches = [], ndxInitializer = resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice(), \n                                    !0 !== (match = handleMatch(alternateToken.matches[amndx] || maskToken.matches[amndx], [ amndx ].concat(loopNdx), quantifierRecurse) || match) && match !== undefined && altIndexArr[altIndexArr.length - 1] < alternateToken.matches.length) {\n                                        var ntndx = $.inArray(match, maskToken.matches) + 1;\n                                        maskToken.matches.length > ntndx && (match = handleMatch(maskToken.matches[ntndx], [ ntndx ].concat(loopNdx.slice(1, loopNdx.length)), quantifierRecurse)) && (altIndexArr.push(ntndx.toString()), \n                                        $.each(matches, function(ndx, lmnt) {\n                                            lmnt.alternation = loopNdx.length - 1;\n                                        }));\n                                    }\n                                    maltMatches = matches.slice(), testPos = currentPos, matches = [];\n                                    for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {\n                                        var altMatch = maltMatches[ndx1], dropMatch = !1;\n                                        altMatch.alternation = altMatch.alternation || loopNdxCnt;\n                                        for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {\n                                            var altMatch2 = malternateMatches[ndx2];\n                                            if (\"string\" != typeof altIndex || -1 !== $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr)) {\n                                                if (function(source, target) {\n                                                    return source.match.nativeDef === target.match.nativeDef || source.match.def === target.match.nativeDef || source.match.nativeDef === target.match.def;\n                                                }(altMatch, altMatch2)) {\n                                                    dropMatch = !0, altMatch.alternation === altMatch2.alternation && -1 === altMatch2.locator[altMatch2.alternation].toString().indexOf(altMatch.locator[altMatch.alternation]) && (altMatch2.locator[altMatch2.alternation] = altMatch2.locator[altMatch2.alternation] + \",\" + altMatch.locator[altMatch.alternation], \n                                                    altMatch2.alternation = altMatch.alternation), altMatch.match.nativeDef === altMatch2.match.def && (altMatch.locator[altMatch.alternation] = altMatch2.locator[altMatch2.alternation], \n                                                    malternateMatches.splice(malternateMatches.indexOf(altMatch2), 1, altMatch));\n                                                    break;\n                                                }\n                                                if (altMatch.match.def === altMatch2.match.def) {\n                                                    dropMatch = !1;\n                                                    break;\n                                                }\n                                                if (function(source, target) {\n                                                    return null === source.match.fn && null !== target.match.fn && target.match.fn.test(source.match.def, getMaskSet(), pos, !1, opts, !1);\n                                                }(altMatch, altMatch2) || function(source, target) {\n                                                    return null !== source.match.fn && null !== target.match.fn && target.match.fn.test(source.match.def.replace(/[\\[\\]]/g, \"\"), getMaskSet(), pos, !1, opts, !1);\n                                                }(altMatch, altMatch2)) {\n                                                    altMatch.alternation === altMatch2.alternation && -1 === altMatch.locator[altMatch.alternation].toString().indexOf(altMatch2.locator[altMatch2.alternation].toString().split(\"\")[0]) && (altMatch.na = altMatch.na || altMatch.locator[altMatch.alternation].toString(), \n                                                    -1 === altMatch.na.indexOf(altMatch.locator[altMatch.alternation].toString().split(\"\")[0]) && (altMatch.na = altMatch.na + \",\" + altMatch.locator[altMatch2.alternation].toString().split(\"\")[0]), \n                                                    dropMatch = !0, altMatch.locator[altMatch.alternation] = altMatch2.locator[altMatch2.alternation].toString().split(\"\")[0] + \",\" + altMatch.locator[altMatch.alternation], \n                                                    malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));\n                                                    break;\n                                                }\n                                            }\n                                        }\n                                        dropMatch || malternateMatches.push(altMatch);\n                                    }\n                                }\n                                \"string\" == typeof altIndex && (malternateMatches = $.map(malternateMatches, function(lmnt, ndx) {\n                                    if (isFinite(ndx)) {\n                                        var alternation = lmnt.alternation, altLocArr = lmnt.locator[alternation].toString().split(\",\");\n                                        lmnt.locator[alternation] = undefined, lmnt.alternation = undefined;\n                                        for (var alndx = 0; alndx < altLocArr.length; alndx++) -1 !== $.inArray(altLocArr[alndx], altIndexArr) && (lmnt.locator[alternation] !== undefined ? (lmnt.locator[alternation] += \",\", \n                                        lmnt.locator[alternation] += altLocArr[alndx]) : lmnt.locator[alternation] = parseInt(altLocArr[alndx]), \n                                        lmnt.alternation = alternation);\n                                        if (lmnt.locator[alternation] !== undefined) return lmnt;\n                                    }\n                                })), matches = currentMatches.concat(malternateMatches), testPos = pos, insertStop = matches.length > 0, \n                                match = malternateMatches.length > 0, ndxInitializer = ndxInitializerClone.slice();\n                            } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [ altIndex ].concat(loopNdx), quantifierRecurse);\n                            if (match) return !0;\n                        } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]) for (var qt = match, qndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {\n                            var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];\n                            if (match = handleMatch(tokenGroup, [ qndx ].concat(loopNdx), tokenGroup)) {\n                                if (latestMatch = matches[matches.length - 1].match, latestMatch.optionalQuantifier = qndx > qt.quantifier.min - 1, \n                                isFirstMatch(latestMatch, tokenGroup)) {\n                                    if (qndx > qt.quantifier.min - 1) {\n                                        insertStop = !0, testPos = pos;\n                                        break;\n                                    }\n                                    return !0;\n                                }\n                                return !0;\n                            }\n                        } else if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) return !0;\n                    } else testPos++;\n                }\n                for (var tndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) if (!0 !== maskToken.matches[tndx].isQuantifier) {\n                    var match = handleMatch(maskToken.matches[tndx], [ tndx ].concat(loopNdx), quantifierRecurse);\n                    if (match && testPos === pos) return match;\n                    if (testPos > pos) break;\n                }\n            }\n            function filterTests(tests) {\n                if (opts.keepStatic && pos > 0 && tests.length > 1 + (\"\" === tests[tests.length - 1].match.def ? 1 : 0) && !0 !== tests[0].match.optionality && !0 !== tests[0].match.optionalQuantifier && null === tests[0].match.fn && !/[0-9a-bA-Z]/.test(tests[0].match.def)) {\n                    if (getMaskSet().validPositions[pos - 1] === undefined) return [ determineTestTemplate(tests) ];\n                    if (getMaskSet().validPositions[pos - 1].alternation === tests[0].alternation) return [ determineTestTemplate(tests) ];\n                    if (getMaskSet().validPositions[pos - 1]) return [ determineTestTemplate(tests) ];\n                }\n                return tests;\n            }\n            var latestMatch, maskTokens = getMaskSet().maskToken, testPos = ndxIntlzr ? tstPs : 0, ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [ 0 ], matches = [], insertStop = !1, cacheDependency = ndxIntlzr ? ndxIntlzr.join(\"\") : \"\";\n            if (pos > -1) {\n                if (ndxIntlzr === undefined) {\n                    for (var test, previousPos = pos - 1; (test = getMaskSet().validPositions[previousPos] || getMaskSet().tests[previousPos]) === undefined && previousPos > -1; ) previousPos--;\n                    test !== undefined && previousPos > -1 && (ndxInitializer = function(tests) {\n                        var locator = [];\n                        return $.isArray(tests) || (tests = [ tests ]), tests.length > 0 && (tests[0].alternation === undefined ? (locator = determineTestTemplate(tests.slice()).locator.slice(), \n                        0 === locator.length && (locator = tests[0].locator.slice())) : $.each(tests, function(ndx, tst) {\n                            if (\"\" !== tst.def) if (0 === locator.length) locator = tst.locator.slice(); else for (var i = 0; i < locator.length; i++) tst.locator[i] && -1 === locator[i].toString().indexOf(tst.locator[i]) && (locator[i] += \",\" + tst.locator[i]);\n                        })), locator;\n                    }(test), cacheDependency = ndxInitializer.join(\"\"), testPos = previousPos);\n                }\n                if (getMaskSet().tests[pos] && getMaskSet().tests[pos][0].cd === cacheDependency) return filterTests(getMaskSet().tests[pos]);\n                for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {\n                    if (resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [ mtndx ]) && testPos === pos || testPos > pos) break;\n                }\n            }\n            return (0 === matches.length || insertStop) && matches.push({\n                match: {\n                    fn: null,\n                    cardinality: 0,\n                    optionality: !0,\n                    casing: null,\n                    def: \"\",\n                    placeholder: \"\"\n                },\n                locator: [],\n                cd: cacheDependency\n            }), ndxIntlzr !== undefined && getMaskSet().tests[pos] ? filterTests($.extend(!0, [], matches)) : (getMaskSet().tests[pos] = $.extend(!0, [], matches), \n            filterTests(getMaskSet().tests[pos]));\n        }\n        function getBufferTemplate() {\n            return getMaskSet()._buffer === undefined && (getMaskSet()._buffer = getMaskTemplate(!1, 1), \n            getMaskSet().buffer === undefined && (getMaskSet().buffer = getMaskSet()._buffer.slice())), \n            getMaskSet()._buffer;\n        }\n        function getBuffer(noCache) {\n            return getMaskSet().buffer !== undefined && !0 !== noCache || (getMaskSet().buffer = getMaskTemplate(!0, getLastValidPosition(), !0)), \n            getMaskSet().buffer;\n        }\n        function refreshFromBuffer(start, end, buffer) {\n            var i, p;\n            if (!0 === start) resetMaskSet(), start = 0, end = buffer.length; else for (i = start; i < end; i++) delete getMaskSet().validPositions[i];\n            for (p = start, i = start; i < end; i++) if (resetMaskSet(!0), buffer[i] !== opts.skipOptionalPartCharacter) {\n                var valResult = isValid(p, buffer[i], !0, !0);\n                !1 !== valResult && (resetMaskSet(!0), p = valResult.caret !== undefined ? valResult.caret : valResult.pos + 1);\n            }\n        }\n        function casing(elem, test, pos) {\n            switch (opts.casing || test.casing) {\n              case \"upper\":\n                elem = elem.toUpperCase();\n                break;\n\n              case \"lower\":\n                elem = elem.toLowerCase();\n                break;\n\n              case \"title\":\n                var posBefore = getMaskSet().validPositions[pos - 1];\n                elem = 0 === pos || posBefore && posBefore.input === String.fromCharCode(Inputmask.keyCode.SPACE) ? elem.toUpperCase() : elem.toLowerCase();\n                break;\n\n              default:\n                if ($.isFunction(opts.casing)) {\n                    var args = Array.prototype.slice.call(arguments);\n                    args.push(getMaskSet().validPositions), elem = opts.casing.apply(this, args);\n                }\n            }\n            return elem;\n        }\n        function checkAlternationMatch(altArr1, altArr2, na) {\n            for (var naNdx, altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = !1, naArr = na !== undefined ? na.split(\",\") : [], i = 0; i < naArr.length; i++) -1 !== (naNdx = altArr1.indexOf(naArr[i])) && altArr1.splice(naNdx, 1);\n            for (var alndx = 0; alndx < altArr1.length; alndx++) if (-1 !== $.inArray(altArr1[alndx], altArrC)) {\n                isMatch = !0;\n                break;\n            }\n            return isMatch;\n        }\n        function isValid(pos, c, strict, fromSetValid, fromAlternate, validateOnly) {\n            function isSelection(posObj) {\n                var selection = isRTL ? posObj.begin - posObj.end > 1 || posObj.begin - posObj.end == 1 : posObj.end - posObj.begin > 1 || posObj.end - posObj.begin == 1;\n                return selection && 0 === posObj.begin && posObj.end === getMaskSet().maskLength ? \"full\" : selection;\n            }\n            function _isValid(position, c, strict) {\n                var rslt = !1;\n                return $.each(getTests(position), function(ndx, tst) {\n                    for (var test = tst.match, loopend = c ? 1 : 0, chrs = \"\", i = test.cardinality; i > loopend; i--) chrs += getBufferElement(position - (i - 1));\n                    if (c && (chrs += c), getBuffer(!0), !1 !== (rslt = null != test.fn ? test.fn.test(chrs, getMaskSet(), position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && \"\" !== test.def && {\n                        c: getPlaceholder(position, test, !0) || test.def,\n                        pos: position\n                    })) {\n                        var elem = rslt.c !== undefined ? rslt.c : c;\n                        elem = elem === opts.skipOptionalPartCharacter && null === test.fn ? getPlaceholder(position, test, !0) || test.def : elem;\n                        var validatedPos = position, possibleModifiedBuffer = getBuffer();\n                        if (rslt.remove !== undefined && ($.isArray(rslt.remove) || (rslt.remove = [ rslt.remove ]), \n                        $.each(rslt.remove.sort(function(a, b) {\n                            return b - a;\n                        }), function(ndx, lmnt) {\n                            stripValidPositions(lmnt, lmnt + 1, !0);\n                        })), rslt.insert !== undefined && ($.isArray(rslt.insert) || (rslt.insert = [ rslt.insert ]), \n                        $.each(rslt.insert.sort(function(a, b) {\n                            return a - b;\n                        }), function(ndx, lmnt) {\n                            isValid(lmnt.pos, lmnt.c, !0, fromSetValid);\n                        })), rslt.refreshFromBuffer) {\n                            var refresh = rslt.refreshFromBuffer;\n                            if (refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, possibleModifiedBuffer), \n                            rslt.pos === undefined && rslt.c === undefined) return rslt.pos = getLastValidPosition(), \n                            !1;\n                            if ((validatedPos = rslt.pos !== undefined ? rslt.pos : position) !== position) return rslt = $.extend(rslt, isValid(validatedPos, elem, !0, fromSetValid)), \n                            !1;\n                        } else if (!0 !== rslt && rslt.pos !== undefined && rslt.pos !== position && (validatedPos = rslt.pos, \n                        refreshFromBuffer(position, validatedPos, getBuffer().slice()), validatedPos !== position)) return rslt = $.extend(rslt, isValid(validatedPos, elem, !0)), \n                        !1;\n                        return (!0 === rslt || rslt.pos !== undefined || rslt.c !== undefined) && (ndx > 0 && resetMaskSet(!0), \n                        setValidPosition(validatedPos, $.extend({}, tst, {\n                            input: casing(elem, test, validatedPos)\n                        }), fromSetValid, isSelection(pos)) || (rslt = !1), !1);\n                    }\n                }), rslt;\n            }\n            function setValidPosition(pos, validTest, fromSetValid, isSelection) {\n                if (isSelection || opts.insertMode && getMaskSet().validPositions[pos] !== undefined && fromSetValid === undefined) {\n                    var i, positionsClone = $.extend(!0, {}, getMaskSet().validPositions), lvp = getLastValidPosition(undefined, !0);\n                    for (i = pos; i <= lvp; i++) delete getMaskSet().validPositions[i];\n                    getMaskSet().validPositions[pos] = $.extend(!0, {}, validTest);\n                    var j, valid = !0, vps = getMaskSet().validPositions, needsValidation = !1, initialLength = getMaskSet().maskLength;\n                    for (i = j = pos; i <= lvp; i++) {\n                        var t = positionsClone[i];\n                        if (t !== undefined) for (var posMatch = j; posMatch < getMaskSet().maskLength && (null === t.match.fn && vps[i] && (!0 === vps[i].match.optionalQuantifier || !0 === vps[i].match.optionality) || null != t.match.fn); ) {\n                            if (posMatch++, !1 === needsValidation && positionsClone[posMatch] && positionsClone[posMatch].match.def === t.match.def) getMaskSet().validPositions[posMatch] = $.extend(!0, {}, positionsClone[posMatch]), \n                            getMaskSet().validPositions[posMatch].input = t.input, fillMissingNonMask(posMatch), \n                            j = posMatch, valid = !0; else if (positionCanMatchDefinition(posMatch, t.match.def)) {\n                                var result = isValid(posMatch, t.input, !0, !0);\n                                valid = !1 !== result, j = result.caret || result.insert ? getLastValidPosition() : posMatch, \n                                needsValidation = !0;\n                            } else if (!(valid = !0 === t.generatedInput) && posMatch >= getMaskSet().maskLength - 1) break;\n                            if (getMaskSet().maskLength < initialLength && (getMaskSet().maskLength = initialLength), \n                            valid) break;\n                        }\n                        if (!valid) break;\n                    }\n                    if (!valid) return getMaskSet().validPositions = $.extend(!0, {}, positionsClone), \n                    resetMaskSet(!0), !1;\n                } else getMaskSet().validPositions[pos] = $.extend(!0, {}, validTest);\n                return resetMaskSet(!0), !0;\n            }\n            function fillMissingNonMask(maskPos) {\n                for (var pndx = maskPos - 1; pndx > -1 && !getMaskSet().validPositions[pndx]; pndx--) ;\n                var testTemplate, testsFromPos;\n                for (pndx++; pndx < maskPos; pndx++) getMaskSet().validPositions[pndx] === undefined && (!1 === opts.jitMasking || opts.jitMasking > pndx) && (testsFromPos = getTests(pndx, getTestTemplate(pndx - 1).locator, pndx - 1).slice(), \n                \"\" === testsFromPos[testsFromPos.length - 1].match.def && testsFromPos.pop(), (testTemplate = determineTestTemplate(testsFromPos)) && (testTemplate.match.def === opts.radixPointDefinitionSymbol || !isMask(pndx, !0) || $.inArray(opts.radixPoint, getBuffer()) < pndx && testTemplate.match.fn && testTemplate.match.fn.test(getPlaceholder(pndx), getMaskSet(), pndx, !1, opts)) && !1 !== (result = _isValid(pndx, getPlaceholder(pndx, testTemplate.match, !0) || (null == testTemplate.match.fn ? testTemplate.match.def : \"\" !== getPlaceholder(pndx) ? getPlaceholder(pndx) : getBuffer()[pndx]), !0)) && (getMaskSet().validPositions[result.pos || pndx].generatedInput = !0));\n            }\n            strict = !0 === strict;\n            var maskPos = pos;\n            pos.begin !== undefined && (maskPos = isRTL && !isSelection(pos) ? pos.end : pos.begin);\n            var result = !0, positionsClone = $.extend(!0, {}, getMaskSet().validPositions);\n            if ($.isFunction(opts.preValidation) && !strict && !0 !== fromSetValid && !0 !== validateOnly && (result = opts.preValidation(getBuffer(), maskPos, c, isSelection(pos), opts)), \n            !0 === result) {\n                if (fillMissingNonMask(maskPos), isSelection(pos) && (handleRemove(undefined, Inputmask.keyCode.DELETE, pos, !0, !0), \n                maskPos = getMaskSet().p), maskPos < getMaskSet().maskLength && (maxLength === undefined || maskPos < maxLength) && (result = _isValid(maskPos, c, strict), \n                (!strict || !0 === fromSetValid) && !1 === result && !0 !== validateOnly)) {\n                    var currentPosValid = getMaskSet().validPositions[maskPos];\n                    if (!currentPosValid || null !== currentPosValid.match.fn || currentPosValid.match.def !== c && c !== opts.skipOptionalPartCharacter) {\n                        if ((opts.insertMode || getMaskSet().validPositions[seekNext(maskPos)] === undefined) && !isMask(maskPos, !0)) for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) if (!1 !== (result = _isValid(nPos, c, strict))) {\n                            !function(originalPos, newPos) {\n                                var vp = getMaskSet().validPositions[newPos];\n                                if (vp) for (var targetLocator = vp.locator, tll = targetLocator.length, ps = originalPos; ps < newPos; ps++) if (getMaskSet().validPositions[ps] === undefined && !isMask(ps, !0)) {\n                                    var tests = getTests(ps).slice(), bestMatch = determineTestTemplate(tests, !0), equality = -1;\n                                    \"\" === tests[tests.length - 1].match.def && tests.pop(), $.each(tests, function(ndx, tst) {\n                                        for (var i = 0; i < tll; i++) {\n                                            if (tst.locator[i] === undefined || !checkAlternationMatch(tst.locator[i].toString().split(\",\"), targetLocator[i].toString().split(\",\"), tst.na)) {\n                                                var targetAI = targetLocator[i], bestMatchAI = bestMatch.locator[i], tstAI = tst.locator[i];\n                                                targetAI - bestMatchAI > Math.abs(targetAI - tstAI) && (bestMatch = tst);\n                                                break;\n                                            }\n                                            equality < i && (equality = i, bestMatch = tst);\n                                        }\n                                    }), bestMatch = $.extend({}, bestMatch, {\n                                        input: getPlaceholder(ps, bestMatch.match, !0) || bestMatch.match.def\n                                    }), bestMatch.generatedInput = !0, setValidPosition(ps, bestMatch, !0), getMaskSet().validPositions[newPos] = undefined, \n                                    _isValid(newPos, vp.input, !0);\n                                }\n                            }(maskPos, result.pos !== undefined ? result.pos : nPos), maskPos = nPos;\n                            break;\n                        }\n                    } else result = {\n                        caret: seekNext(maskPos)\n                    };\n                }\n                !1 === result && opts.keepStatic && !strict && !0 !== fromAlternate && (result = function(pos, c, strict) {\n                    var lastAlt, alternation, altPos, prevAltPos, i, validPos, altNdxs, decisionPos, validPsClone = $.extend(!0, {}, getMaskSet().validPositions), isValidRslt = !1, lAltPos = getLastValidPosition();\n                    for (prevAltPos = getMaskSet().validPositions[lAltPos]; lAltPos >= 0; lAltPos--) if ((altPos = getMaskSet().validPositions[lAltPos]) && altPos.alternation !== undefined) {\n                        if (lastAlt = lAltPos, alternation = getMaskSet().validPositions[lastAlt].alternation, \n                        prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) break;\n                        prevAltPos = altPos;\n                    }\n                    if (alternation !== undefined) {\n                        decisionPos = parseInt(lastAlt);\n                        var decisionTaker = prevAltPos.locator[prevAltPos.alternation || alternation] !== undefined ? prevAltPos.locator[prevAltPos.alternation || alternation] : altNdxs[0];\n                        decisionTaker.length > 0 && (decisionTaker = decisionTaker.split(\",\")[0]);\n                        var possibilityPos = getMaskSet().validPositions[decisionPos], prevPos = getMaskSet().validPositions[decisionPos - 1];\n                        $.each(getTests(decisionPos, prevPos ? prevPos.locator : undefined, decisionPos - 1), function(ndx, test) {\n                            altNdxs = test.locator[alternation] ? test.locator[alternation].toString().split(\",\") : [];\n                            for (var mndx = 0; mndx < altNdxs.length; mndx++) {\n                                var validInputs = [], staticInputsBeforePos = 0, staticInputsBeforePosAlternate = 0, verifyValidInput = !1;\n                                if (decisionTaker < altNdxs[mndx] && (test.na === undefined || -1 === $.inArray(altNdxs[mndx], test.na.split(\",\")) || -1 === $.inArray(decisionTaker.toString(), altNdxs))) {\n                                    getMaskSet().validPositions[decisionPos] = $.extend(!0, {}, test);\n                                    var possibilities = getMaskSet().validPositions[decisionPos].locator;\n                                    for (getMaskSet().validPositions[decisionPos].locator[alternation] = parseInt(altNdxs[mndx]), \n                                    null == test.match.fn ? (possibilityPos.input !== test.match.def && (verifyValidInput = !0, \n                                    !0 !== possibilityPos.generatedInput && validInputs.push(possibilityPos.input)), \n                                    staticInputsBeforePosAlternate++, getMaskSet().validPositions[decisionPos].generatedInput = !/[0-9a-bA-Z]/.test(test.match.def), \n                                    getMaskSet().validPositions[decisionPos].input = test.match.def) : getMaskSet().validPositions[decisionPos].input = possibilityPos.input, \n                                    i = decisionPos + 1; i < getLastValidPosition(undefined, !0) + 1; i++) validPos = getMaskSet().validPositions[i], \n                                    validPos && !0 !== validPos.generatedInput && /[0-9a-bA-Z]/.test(validPos.input) ? validInputs.push(validPos.input) : i < pos && staticInputsBeforePos++, \n                                    delete getMaskSet().validPositions[i];\n                                    for (verifyValidInput && validInputs[0] === test.match.def && validInputs.shift(), \n                                    resetMaskSet(!0), isValidRslt = !0; validInputs.length > 0; ) {\n                                        var input = validInputs.shift();\n                                        if (input !== opts.skipOptionalPartCharacter && !(isValidRslt = isValid(getLastValidPosition(undefined, !0) + 1, input, !1, fromSetValid, !0))) break;\n                                    }\n                                    if (isValidRslt) {\n                                        getMaskSet().validPositions[decisionPos].locator = possibilities;\n                                        var targetLvp = getLastValidPosition(pos) + 1;\n                                        for (i = decisionPos + 1; i < getLastValidPosition() + 1; i++) ((validPos = getMaskSet().validPositions[i]) === undefined || null == validPos.match.fn) && i < pos + (staticInputsBeforePosAlternate - staticInputsBeforePos) && staticInputsBeforePosAlternate++;\n                                        pos += staticInputsBeforePosAlternate - staticInputsBeforePos, isValidRslt = isValid(pos > targetLvp ? targetLvp : pos, c, strict, fromSetValid, !0);\n                                    }\n                                    if (isValidRslt) return !1;\n                                    resetMaskSet(), getMaskSet().validPositions = $.extend(!0, {}, validPsClone);\n                                }\n                            }\n                        });\n                    }\n                    return isValidRslt;\n                }(maskPos, c, strict)), !0 === result && (result = {\n                    pos: maskPos\n                });\n            }\n            if ($.isFunction(opts.postValidation) && !1 !== result && !strict && !0 !== fromSetValid && !0 !== validateOnly) {\n                var postResult = opts.postValidation(getBuffer(!0), result, opts);\n                if (postResult.refreshFromBuffer && postResult.buffer) {\n                    var refresh = postResult.refreshFromBuffer;\n                    refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, postResult.buffer);\n                }\n                result = !0 === postResult ? result : postResult;\n            }\n            return result && result.pos === undefined && (result.pos = maskPos), !1 !== result && !0 !== validateOnly || (resetMaskSet(!0), \n            getMaskSet().validPositions = $.extend(!0, {}, positionsClone)), result;\n        }\n        function isMask(pos, strict) {\n            var test = getTestTemplate(pos).match;\n            if (\"\" === test.def && (test = getTest(pos).match), null != test.fn) return test.fn;\n            if (!0 !== strict && pos > -1) {\n                var tests = getTests(pos);\n                return tests.length > 1 + (\"\" === tests[tests.length - 1].match.def ? 1 : 0);\n            }\n            return !1;\n        }\n        function seekNext(pos, newBlock) {\n            var maskL = getMaskSet().maskLength;\n            if (pos >= maskL) return maskL;\n            var position = pos;\n            for (getTests(maskL + 1).length > 1 && (getMaskTemplate(!0, maskL + 1, !0), maskL = getMaskSet().maskLength); ++position < maskL && (!0 === newBlock && (!0 !== getTest(position).match.newBlockMarker || !isMask(position)) || !0 !== newBlock && !isMask(position)); ) ;\n            return position;\n        }\n        function seekPrevious(pos, newBlock) {\n            var tests, position = pos;\n            if (position <= 0) return 0;\n            for (;--position > 0 && (!0 === newBlock && !0 !== getTest(position).match.newBlockMarker || !0 !== newBlock && !isMask(position) && (tests = getTests(position), \n            tests.length < 2 || 2 === tests.length && \"\" === tests[1].match.def)); ) ;\n            return position;\n        }\n        function getBufferElement(position) {\n            return getMaskSet().validPositions[position] === undefined ? getPlaceholder(position) : getMaskSet().validPositions[position].input;\n        }\n        function writeBuffer(input, buffer, caretPos, event, triggerInputEvent) {\n            if (event && $.isFunction(opts.onBeforeWrite)) {\n                var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);\n                if (result) {\n                    if (result.refreshFromBuffer) {\n                        var refresh = result.refreshFromBuffer;\n                        refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, result.buffer || buffer), \n                        buffer = getBuffer(!0);\n                    }\n                    caretPos !== undefined && (caretPos = result.caret !== undefined ? result.caret : caretPos);\n                }\n            }\n            input !== undefined && (input.inputmask._valueSet(buffer.join(\"\")), caretPos === undefined || event !== undefined && \"blur\" === event.type ? renderColorMask(input, caretPos, 0 === buffer.length) : android && event && \"input\" === event.type ? setTimeout(function() {\n                caret(input, caretPos);\n            }, 0) : caret(input, caretPos), !0 === triggerInputEvent && (skipInputEvent = !0, \n            $(input).trigger(\"input\")));\n        }\n        function getPlaceholder(pos, test, returnPL) {\n            if (test = test || getTest(pos).match, test.placeholder !== undefined || !0 === returnPL) return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;\n            if (null === test.fn) {\n                if (pos > -1 && getMaskSet().validPositions[pos] === undefined) {\n                    var prevTest, tests = getTests(pos), staticAlternations = [];\n                    if (tests.length > 1 + (\"\" === tests[tests.length - 1].match.def ? 1 : 0)) for (var i = 0; i < tests.length; i++) if (!0 !== tests[i].match.optionality && !0 !== tests[i].match.optionalQuantifier && (null === tests[i].match.fn || prevTest === undefined || !1 !== tests[i].match.fn.test(prevTest.match.def, getMaskSet(), pos, !0, opts)) && (staticAlternations.push(tests[i]), \n                    null === tests[i].match.fn && (prevTest = tests[i]), staticAlternations.length > 1 && /[0-9a-bA-Z]/.test(staticAlternations[0].match.def))) return opts.placeholder.charAt(pos % opts.placeholder.length);\n                }\n                return test.def;\n            }\n            return opts.placeholder.charAt(pos % opts.placeholder.length);\n        }\n        function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {\n            function isTemplateMatch(ndx, charCodes) {\n                return -1 !== getBufferTemplate().slice(ndx, seekNext(ndx)).join(\"\").indexOf(charCodes) && !isMask(ndx) && getTest(ndx).match.nativeDef === charCodes.charAt(charCodes.length - 1);\n            }\n            var inputValue = nptvl.slice(), charCodes = \"\", initialNdx = -1, result = undefined;\n            if (resetMaskSet(), strict || !0 === opts.autoUnmask) initialNdx = seekNext(initialNdx); else {\n                var staticInput = getBufferTemplate().slice(0, seekNext(-1)).join(\"\"), matches = inputValue.join(\"\").match(new RegExp(\"^\" + Inputmask.escapeRegex(staticInput), \"g\"));\n                matches && matches.length > 0 && (inputValue.splice(0, matches.length * staticInput.length), \n                initialNdx = seekNext(initialNdx));\n            }\n            if (-1 === initialNdx ? (getMaskSet().p = seekNext(initialNdx), initialNdx = 0) : getMaskSet().p = initialNdx, \n            $.each(inputValue, function(ndx, charCode) {\n                if (charCode !== undefined) if (getMaskSet().validPositions[ndx] === undefined && inputValue[ndx] === getPlaceholder(ndx) && isMask(ndx, !0) && !1 === isValid(ndx, inputValue[ndx], !0, undefined, undefined, !0)) getMaskSet().p++; else {\n                    var keypress = new $.Event(\"_checkval\");\n                    keypress.which = charCode.charCodeAt(0), charCodes += charCode;\n                    var lvp = getLastValidPosition(undefined, !0), lvTest = getMaskSet().validPositions[lvp], nextTest = getTestTemplate(lvp + 1, lvTest ? lvTest.locator.slice() : undefined, lvp);\n                    if (!isTemplateMatch(initialNdx, charCodes) || strict || opts.autoUnmask) {\n                        var pos = strict ? ndx : null == nextTest.match.fn && nextTest.match.optionality && lvp + 1 < getMaskSet().p ? lvp + 1 : getMaskSet().p;\n                        result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, pos), \n                        initialNdx = pos + 1, charCodes = \"\";\n                    } else result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, !0, lvp + 1);\n                    if (!1 !== result && !strict && $.isFunction(opts.onBeforeWrite)) {\n                        var origResult = result;\n                        if (result = opts.onBeforeWrite.call(inputmask, keypress, getBuffer(), result.forwardPosition, opts), \n                        (result = $.extend(origResult, result)) && result.refreshFromBuffer) {\n                            var refresh = result.refreshFromBuffer;\n                            refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, result.buffer), \n                            resetMaskSet(!0), result.caret && (getMaskSet().p = result.caret, result.forwardPosition = result.caret);\n                        }\n                    }\n                }\n            }), writeOut) {\n                var caretPos = undefined;\n                document.activeElement === input && result && (caretPos = opts.numericInput ? seekPrevious(result.forwardPosition) : result.forwardPosition), \n                writeBuffer(input, getBuffer(), caretPos, initiatingEvent || new $.Event(\"checkval\"), initiatingEvent && \"input\" === initiatingEvent.type);\n            }\n        }\n        function unmaskedvalue(input) {\n            if (input) {\n                if (input.inputmask === undefined) return input.value;\n                input.inputmask && input.inputmask.refreshValue && EventHandlers.setValueEvent.call(input);\n            }\n            var umValue = [], vps = getMaskSet().validPositions;\n            for (var pndx in vps) vps[pndx].match && null != vps[pndx].match.fn && umValue.push(vps[pndx].input);\n            var unmaskedValue = 0 === umValue.length ? \"\" : (isRTL ? umValue.reverse() : umValue).join(\"\");\n            if ($.isFunction(opts.onUnMask)) {\n                var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join(\"\");\n                unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);\n            }\n            return unmaskedValue;\n        }\n        function caret(input, begin, end, notranslate) {\n            function translatePosition(pos) {\n                if (!0 !== notranslate && isRTL && \"number\" == typeof pos && (!opts.greedy || \"\" !== opts.placeholder)) {\n                    pos = getBuffer().join(\"\").length - pos;\n                }\n                return pos;\n            }\n            var range;\n            if (begin === undefined) return input.setSelectionRange ? (begin = input.selectionStart, \n            end = input.selectionEnd) : window.getSelection ? (range = window.getSelection().getRangeAt(0), \n            range.commonAncestorContainer.parentNode !== input && range.commonAncestorContainer !== input || (begin = range.startOffset, \n            end = range.endOffset)) : document.selection && document.selection.createRange && (range = document.selection.createRange(), \n            begin = 0 - range.duplicate().moveStart(\"character\", -input.inputmask._valueGet().length), \n            end = begin + range.text.length), {\n                begin: translatePosition(begin),\n                end: translatePosition(end)\n            };\n            if (begin.begin !== undefined && (end = begin.end, begin = begin.begin), \"number\" == typeof begin) {\n                begin = translatePosition(begin), end = translatePosition(end), end = \"number\" == typeof end ? end : begin;\n                var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;\n                if (input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0, mobile || !1 !== opts.insertMode || begin !== end || end++, \n                input.setSelectionRange) input.selectionStart = begin, input.selectionEnd = end; else if (window.getSelection) {\n                    if (range = document.createRange(), input.firstChild === undefined || null === input.firstChild) {\n                        var textNode = document.createTextNode(\"\");\n                        input.appendChild(textNode);\n                    }\n                    range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length), \n                    range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length), \n                    range.collapse(!0);\n                    var sel = window.getSelection();\n                    sel.removeAllRanges(), sel.addRange(range);\n                } else input.createTextRange && (range = input.createTextRange(), range.collapse(!0), \n                range.moveEnd(\"character\", end), range.moveStart(\"character\", begin), range.select());\n                renderColorMask(input, {\n                    begin: begin,\n                    end: end\n                });\n            }\n        }\n        function determineLastRequiredPosition(returnDefinition) {\n            var pos, testPos, buffer = getBuffer(), bl = buffer.length, lvp = getLastValidPosition(), positions = {}, lvTest = getMaskSet().validPositions[lvp], ndxIntlzr = lvTest !== undefined ? lvTest.locator.slice() : undefined;\n            for (pos = lvp + 1; pos < buffer.length; pos++) testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), \n            ndxIntlzr = testPos.locator.slice(), positions[pos] = $.extend(!0, {}, testPos);\n            var lvTestAlt = lvTest && lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation] : undefined;\n            for (pos = bl - 1; pos > lvp && (testPos = positions[pos], (testPos.match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && null != testPos.match.fn || null === testPos.match.fn && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(\",\"), lvTestAlt.toString().split(\",\")) && \"\" !== getTests(pos)[0].def)) && buffer[pos] === getPlaceholder(pos, testPos.match)); pos--) bl--;\n            return returnDefinition ? {\n                l: bl,\n                def: positions[bl] ? positions[bl].match : undefined\n            } : bl;\n        }\n        function clearOptionalTail(buffer) {\n            for (var validPos, rl = determineLastRequiredPosition(), bl = buffer.length, lv = getMaskSet().validPositions[getLastValidPosition()]; rl < bl && !isMask(rl, !0) && (validPos = lv !== undefined ? getTestTemplate(rl, lv.locator.slice(\"\"), lv) : getTest(rl)) && !0 !== validPos.match.optionality && (!0 !== validPos.match.optionalQuantifier && !0 !== validPos.match.newBlockMarker || rl + 1 === bl && \"\" === (lv !== undefined ? getTestTemplate(rl + 1, lv.locator.slice(\"\"), lv) : getTest(rl + 1)).match.def); ) rl++;\n            for (;(validPos = getMaskSet().validPositions[rl - 1]) && validPos && validPos.match.optionality && validPos.input === opts.skipOptionalPartCharacter; ) rl--;\n            return buffer.splice(rl), buffer;\n        }\n        function isComplete(buffer) {\n            if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);\n            if (\"*\" === opts.repeat) return undefined;\n            var complete = !1, lrp = determineLastRequiredPosition(!0), aml = seekPrevious(lrp.l);\n            if (lrp.def === undefined || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {\n                complete = !0;\n                for (var i = 0; i <= aml; i++) {\n                    var test = getTestTemplate(i).match;\n                    if (null !== test.fn && getMaskSet().validPositions[i] === undefined && !0 !== test.optionality && !0 !== test.optionalQuantifier || null === test.fn && buffer[i] !== getPlaceholder(i, test)) {\n                        complete = !1;\n                        break;\n                    }\n                }\n            }\n            return complete;\n        }\n        function handleRemove(input, k, pos, strict, fromIsValid) {\n            if ((opts.numericInput || isRTL) && (k === Inputmask.keyCode.BACKSPACE ? k = Inputmask.keyCode.DELETE : k === Inputmask.keyCode.DELETE && (k = Inputmask.keyCode.BACKSPACE), \n            isRTL)) {\n                var pend = pos.end;\n                pos.end = pos.begin, pos.begin = pend;\n            }\n            k === Inputmask.keyCode.BACKSPACE && (pos.end - pos.begin < 1 || !1 === opts.insertMode) ? (pos.begin = seekPrevious(pos.begin), \n            getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator && pos.begin--) : k === Inputmask.keyCode.DELETE && pos.begin === pos.end && (pos.end = isMask(pos.end, !0) && getMaskSet().validPositions[pos.end] && getMaskSet().validPositions[pos.end].input !== opts.radixPoint ? pos.end + 1 : seekNext(pos.end) + 1, \n            getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator && pos.end++), \n            stripValidPositions(pos.begin, pos.end, !1, strict), !0 !== strict && function() {\n                if (opts.keepStatic) {\n                    for (var validInputs = [], lastAlt = getLastValidPosition(-1, !0), positionsClone = $.extend(!0, {}, getMaskSet().validPositions), prevAltPos = getMaskSet().validPositions[lastAlt]; lastAlt >= 0; lastAlt--) {\n                        var altPos = getMaskSet().validPositions[lastAlt];\n                        if (altPos) {\n                            if (!0 !== altPos.generatedInput && /[0-9a-bA-Z]/.test(altPos.input) && validInputs.push(altPos.input), \n                            delete getMaskSet().validPositions[lastAlt], altPos.alternation !== undefined && altPos.locator[altPos.alternation] !== prevAltPos.locator[altPos.alternation]) break;\n                            prevAltPos = altPos;\n                        }\n                    }\n                    if (lastAlt > -1) for (getMaskSet().p = seekNext(getLastValidPosition(-1, !0)); validInputs.length > 0; ) {\n                        var keypress = new $.Event(\"keypress\");\n                        keypress.which = validInputs.pop().charCodeAt(0), EventHandlers.keypressEvent.call(input, keypress, !0, !1, !1, getMaskSet().p);\n                    } else getMaskSet().validPositions = $.extend(!0, {}, positionsClone);\n                }\n            }();\n            var lvp = getLastValidPosition(pos.begin, !0);\n            if (lvp < pos.begin) getMaskSet().p = seekNext(lvp); else if (!0 !== strict && (getMaskSet().p = pos.begin, \n            !0 !== fromIsValid)) for (;getMaskSet().p < lvp && getMaskSet().validPositions[getMaskSet().p] === undefined; ) getMaskSet().p++;\n        }\n        function initializeColorMask(input) {\n            function findCaretPos(clientx) {\n                var caretPos, e = document.createElement(\"span\");\n                for (var style in computedStyle) isNaN(style) && -1 !== style.indexOf(\"font\") && (e.style[style] = computedStyle[style]);\n                e.style.textTransform = computedStyle.textTransform, e.style.letterSpacing = computedStyle.letterSpacing, \n                e.style.position = \"absolute\", e.style.height = \"auto\", e.style.width = \"auto\", \n                e.style.visibility = \"hidden\", e.style.whiteSpace = \"nowrap\", document.body.appendChild(e);\n                var itl, inputText = input.inputmask._valueGet(), previousWidth = 0;\n                for (caretPos = 0, itl = inputText.length; caretPos <= itl; caretPos++) {\n                    if (e.innerHTML += inputText.charAt(caretPos) || \"_\", e.offsetWidth >= clientx) {\n                        var offset1 = clientx - previousWidth, offset2 = e.offsetWidth - clientx;\n                        e.innerHTML = inputText.charAt(caretPos), offset1 -= e.offsetWidth / 3, caretPos = offset1 < offset2 ? caretPos - 1 : caretPos;\n                        break;\n                    }\n                    previousWidth = e.offsetWidth;\n                }\n                return document.body.removeChild(e), caretPos;\n            }\n            var computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null), template = document.createElement(\"div\");\n            template.style.width = computedStyle.width, template.style.textAlign = computedStyle.textAlign, \n            colorMask = document.createElement(\"div\"), colorMask.className = \"im-colormask\", \n            input.parentNode.insertBefore(colorMask, input), input.parentNode.removeChild(input), \n            colorMask.appendChild(template), colorMask.appendChild(input), input.style.left = template.offsetLeft + \"px\", \n            $(input).on(\"click\", function(e) {\n                return caret(input, findCaretPos(e.clientX)), EventHandlers.clickEvent.call(input, [ e ]);\n            }), $(input).on(\"keydown\", function(e) {\n                e.shiftKey || !1 === opts.insertMode || setTimeout(function() {\n                    renderColorMask(input);\n                }, 0);\n            });\n        }\n        function renderColorMask(input, caretPos, clear) {\n            function handleStatic() {\n                isStatic || null !== test.fn && testPos.input !== undefined ? isStatic && (null !== test.fn && testPos.input !== undefined || \"\" === test.def) && (isStatic = !1, \n                maskTemplate += \"</span>\") : (isStatic = !0, maskTemplate += \"<span class='im-static'>\");\n            }\n            function handleCaret(force) {\n                !0 !== force && pos !== caretPos.begin || document.activeElement !== input || (maskTemplate += \"<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>\");\n            }\n            var test, testPos, ndxIntlzr, maskTemplate = \"\", isStatic = !1, pos = 0;\n            if (colorMask !== undefined) {\n                var buffer = getBuffer();\n                if (caretPos === undefined ? caretPos = caret(input) : caretPos.begin === undefined && (caretPos = {\n                    begin: caretPos,\n                    end: caretPos\n                }), !0 !== clear) {\n                    var lvp = getLastValidPosition();\n                    do {\n                        handleCaret(), getMaskSet().validPositions[pos] ? (testPos = getMaskSet().validPositions[pos], \n                        test = testPos.match, ndxIntlzr = testPos.locator.slice(), handleStatic(), maskTemplate += buffer[pos]) : (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), \n                        test = testPos.match, ndxIntlzr = testPos.locator.slice(), (!1 === opts.jitMasking || pos < lvp || \"number\" == typeof opts.jitMasking && isFinite(opts.jitMasking) && opts.jitMasking > pos) && (handleStatic(), \n                        maskTemplate += getPlaceholder(pos, test))), pos++;\n                    } while ((maxLength === undefined || pos < maxLength) && (null !== test.fn || \"\" !== test.def) || lvp > pos || isStatic);\n                    -1 === maskTemplate.indexOf(\"im-caret\") && handleCaret(!0), isStatic && handleStatic();\n                }\n                var template = colorMask.getElementsByTagName(\"div\")[0];\n                template.innerHTML = maskTemplate, input.inputmask.positionColorMask(input, template);\n            }\n        }\n        maskset = maskset || this.maskset, opts = opts || this.opts;\n        var undoValue, $el, maxLength, colorMask, inputmask = this, el = this.el, isRTL = this.isRTL, skipKeyPressEvent = !1, skipInputEvent = !1, ignorable = !1, mouseEnter = !1, EventRuler = {\n            on: function(input, eventName, eventHandler) {\n                var ev = function(e) {\n                    if (this.inputmask === undefined && \"FORM\" !== this.nodeName) {\n                        var imOpts = $.data(this, \"_inputmask_opts\");\n                        imOpts ? new Inputmask(imOpts).mask(this) : EventRuler.off(this);\n                    } else {\n                        if (\"setvalue\" === e.type || \"FORM\" === this.nodeName || !(this.disabled || this.readOnly && !(\"keydown\" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === opts.tabThrough && e.keyCode === Inputmask.keyCode.TAB))) {\n                            switch (e.type) {\n                              case \"input\":\n                                if (!0 === skipInputEvent) return skipInputEvent = !1, e.preventDefault();\n                                break;\n\n                              case \"keydown\":\n                                skipKeyPressEvent = !1, skipInputEvent = !1;\n                                break;\n\n                              case \"keypress\":\n                                if (!0 === skipKeyPressEvent) return e.preventDefault();\n                                skipKeyPressEvent = !0;\n                                break;\n\n                              case \"click\":\n                                if (iemobile || iphone) {\n                                    var that = this, args = arguments;\n                                    return setTimeout(function() {\n                                        eventHandler.apply(that, args);\n                                    }, 0), !1;\n                                }\n                            }\n                            var returnVal = eventHandler.apply(this, arguments);\n                            return !1 === returnVal && (e.preventDefault(), e.stopPropagation()), returnVal;\n                        }\n                        e.preventDefault();\n                    }\n                };\n                input.inputmask.events[eventName] = input.inputmask.events[eventName] || [], input.inputmask.events[eventName].push(ev), \n                -1 !== $.inArray(eventName, [ \"submit\", \"reset\" ]) ? null !== input.form && $(input.form).on(eventName, ev) : $(input).on(eventName, ev);\n            },\n            off: function(input, event) {\n                if (input.inputmask && input.inputmask.events) {\n                    var events;\n                    event ? (events = [], events[event] = input.inputmask.events[event]) : events = input.inputmask.events, \n                    $.each(events, function(eventName, evArr) {\n                        for (;evArr.length > 0; ) {\n                            var ev = evArr.pop();\n                            -1 !== $.inArray(eventName, [ \"submit\", \"reset\" ]) ? null !== input.form && $(input.form).off(eventName, ev) : $(input).off(eventName, ev);\n                        }\n                        delete input.inputmask.events[eventName];\n                    });\n                }\n            }\n        }, EventHandlers = {\n            keydownEvent: function(e) {\n                var input = this, $input = $(input), k = e.keyCode, pos = caret(input);\n                if (k === Inputmask.keyCode.BACKSPACE || k === Inputmask.keyCode.DELETE || iphone && k === Inputmask.keyCode.BACKSPACE_SAFARI || e.ctrlKey && k === Inputmask.keyCode.X && !function(eventName) {\n                    var el = document.createElement(\"input\"), evName = \"on\" + eventName, isSupported = evName in el;\n                    return isSupported || (el.setAttribute(evName, \"return;\"), isSupported = \"function\" == typeof el[evName]), \n                    el = null, isSupported;\n                }(\"cut\")) e.preventDefault(), handleRemove(input, k, pos), writeBuffer(input, getBuffer(!0), getMaskSet().p, e, input.inputmask._valueGet() !== getBuffer().join(\"\")), \n                input.inputmask._valueGet() === getBufferTemplate().join(\"\") ? $input.trigger(\"cleared\") : !0 === isComplete(getBuffer()) && $input.trigger(\"complete\"); else if (k === Inputmask.keyCode.END || k === Inputmask.keyCode.PAGE_DOWN) {\n                    e.preventDefault();\n                    var caretPos = seekNext(getLastValidPosition());\n                    opts.insertMode || caretPos !== getMaskSet().maskLength || e.shiftKey || caretPos--, \n                    caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, !0);\n                } else k === Inputmask.keyCode.HOME && !e.shiftKey || k === Inputmask.keyCode.PAGE_UP ? (e.preventDefault(), \n                caret(input, 0, e.shiftKey ? pos.begin : 0, !0)) : (opts.undoOnEscape && k === Inputmask.keyCode.ESCAPE || 90 === k && e.ctrlKey) && !0 !== e.altKey ? (checkVal(input, !0, !1, undoValue.split(\"\")), \n                $input.trigger(\"click\")) : k !== Inputmask.keyCode.INSERT || e.shiftKey || e.ctrlKey ? !0 === opts.tabThrough && k === Inputmask.keyCode.TAB ? (!0 === e.shiftKey ? (null === getTest(pos.begin).match.fn && (pos.begin = seekNext(pos.begin)), \n                pos.end = seekPrevious(pos.begin, !0), pos.begin = seekPrevious(pos.end, !0)) : (pos.begin = seekNext(pos.begin, !0), \n                pos.end = seekNext(pos.begin, !0), pos.end < getMaskSet().maskLength && pos.end--), \n                pos.begin < getMaskSet().maskLength && (e.preventDefault(), caret(input, pos.begin, pos.end))) : e.shiftKey || !1 === opts.insertMode && (k === Inputmask.keyCode.RIGHT ? setTimeout(function() {\n                    var caretPos = caret(input);\n                    caret(input, caretPos.begin);\n                }, 0) : k === Inputmask.keyCode.LEFT && setTimeout(function() {\n                    var caretPos = caret(input);\n                    caret(input, isRTL ? caretPos.begin + 1 : caretPos.begin - 1);\n                }, 0)) : (opts.insertMode = !opts.insertMode, caret(input, opts.insertMode || pos.begin !== getMaskSet().maskLength ? pos.begin : pos.begin - 1));\n                opts.onKeyDown.call(this, e, getBuffer(), caret(input).begin, opts), ignorable = -1 !== $.inArray(k, opts.ignorables);\n            },\n            keypressEvent: function(e, checkval, writeOut, strict, ndx) {\n                var input = this, $input = $(input), k = e.which || e.charCode || e.keyCode;\n                if (!(!0 === checkval || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable)) return k === Inputmask.keyCode.ENTER && undoValue !== getBuffer().join(\"\") && (undoValue = getBuffer().join(\"\"), \n                setTimeout(function() {\n                    $input.trigger(\"change\");\n                }, 0)), !0;\n                if (k) {\n                    46 === k && !1 === e.shiftKey && \"\" !== opts.radixPoint && (k = opts.radixPoint.charCodeAt(0));\n                    var forwardPosition, pos = checkval ? {\n                        begin: ndx,\n                        end: ndx\n                    } : caret(input), c = String.fromCharCode(k);\n                    getMaskSet().writeOutBuffer = !0;\n                    var valResult = isValid(pos, c, strict);\n                    if (!1 !== valResult && (resetMaskSet(!0), forwardPosition = valResult.caret !== undefined ? valResult.caret : checkval ? valResult.pos + 1 : seekNext(valResult.pos), \n                    getMaskSet().p = forwardPosition), !1 !== writeOut && (setTimeout(function() {\n                        opts.onKeyValidation.call(input, k, valResult, opts);\n                    }, 0), getMaskSet().writeOutBuffer && !1 !== valResult)) {\n                        var buffer = getBuffer();\n                        writeBuffer(input, buffer, opts.numericInput && valResult.caret === undefined ? seekPrevious(forwardPosition) : forwardPosition, e, !0 !== checkval), \n                        !0 !== checkval && setTimeout(function() {\n                            !0 === isComplete(buffer) && $input.trigger(\"complete\");\n                        }, 0);\n                    }\n                    if (e.preventDefault(), checkval) return !1 !== valResult && (valResult.forwardPosition = forwardPosition), \n                    valResult;\n                }\n            },\n            pasteEvent: function(e) {\n                var tempValue, input = this, ev = e.originalEvent || e, $input = $(input), inputValue = input.inputmask._valueGet(!0), caretPos = caret(input);\n                isRTL && (tempValue = caretPos.end, caretPos.end = caretPos.begin, caretPos.begin = tempValue);\n                var valueBeforeCaret = inputValue.substr(0, caretPos.begin), valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);\n                if (valueBeforeCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join(\"\") && (valueBeforeCaret = \"\"), \n                valueAfterCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(caretPos.end).join(\"\") && (valueAfterCaret = \"\"), \n                isRTL && (tempValue = valueBeforeCaret, valueBeforeCaret = valueAfterCaret, valueAfterCaret = tempValue), \n                window.clipboardData && window.clipboardData.getData) inputValue = valueBeforeCaret + window.clipboardData.getData(\"Text\") + valueAfterCaret; else {\n                    if (!ev.clipboardData || !ev.clipboardData.getData) return !0;\n                    inputValue = valueBeforeCaret + ev.clipboardData.getData(\"text/plain\") + valueAfterCaret;\n                }\n                var pasteValue = inputValue;\n                if ($.isFunction(opts.onBeforePaste)) {\n                    if (!1 === (pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts))) return e.preventDefault();\n                    pasteValue || (pasteValue = inputValue);\n                }\n                return checkVal(input, !1, !1, isRTL ? pasteValue.split(\"\").reverse() : pasteValue.toString().split(\"\")), \n                writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()), e, undoValue !== getBuffer().join(\"\")), \n                !0 === isComplete(getBuffer()) && $input.trigger(\"complete\"), e.preventDefault();\n            },\n            inputFallBackEvent: function(e) {\n                var input = this, inputValue = input.inputmask._valueGet();\n                if (getBuffer().join(\"\") !== inputValue) {\n                    var caretPos = caret(input);\n                    if (!1 === function(input, inputValue, caretPos) {\n                        if (\".\" === inputValue.charAt(caretPos.begin - 1) && \"\" !== opts.radixPoint && (inputValue = inputValue.split(\"\"), \n                        inputValue[caretPos.begin - 1] = opts.radixPoint.charAt(0), inputValue = inputValue.join(\"\")), \n                        inputValue.charAt(caretPos.begin - 1) === opts.radixPoint && inputValue.length > getBuffer().length) {\n                            var keypress = new $.Event(\"keypress\");\n                            return keypress.which = opts.radixPoint.charCodeAt(0), EventHandlers.keypressEvent.call(input, keypress, !0, !0, !1, caretPos.begin - 1), \n                            !1;\n                        }\n                    }(input, inputValue, caretPos)) return !1;\n                    if (inputValue = inputValue.replace(new RegExp(\"(\" + Inputmask.escapeRegex(getBufferTemplate().join(\"\")) + \")*\"), \"\"), \n                    !1 === function(input, inputValue, caretPos) {\n                        if (iemobile) {\n                            var inputChar = inputValue.replace(getBuffer().join(\"\"), \"\");\n                            if (1 === inputChar.length) {\n                                var keypress = new $.Event(\"keypress\");\n                                return keypress.which = inputChar.charCodeAt(0), EventHandlers.keypressEvent.call(input, keypress, !0, !0, !1, getMaskSet().validPositions[caretPos.begin - 1] ? caretPos.begin : caretPos.begin - 1), \n                                !1;\n                            }\n                        }\n                    }(input, inputValue, caretPos)) return !1;\n                    caretPos.begin > inputValue.length && (caret(input, inputValue.length), caretPos = caret(input));\n                    var buffer = getBuffer().join(\"\"), frontPart = inputValue.substr(0, caretPos.begin), backPart = inputValue.substr(caretPos.begin), frontBufferPart = buffer.substr(0, caretPos.begin), backBufferPart = buffer.substr(caretPos.begin), selection = caretPos, entries = \"\", isEntry = !1;\n                    if (frontPart !== frontBufferPart) {\n                        selection.begin = 0;\n                        for (var fpl = (isEntry = frontPart.length >= frontBufferPart.length) ? frontPart.length : frontBufferPart.length, i = 0; frontPart.charAt(i) === frontBufferPart.charAt(i) && i < fpl; i++) selection.begin++;\n                        isEntry && (entries += frontPart.slice(selection.begin, selection.end));\n                    }\n                    backPart !== backBufferPart && (backPart.length > backBufferPart.length ? isEntry && (selection.end = selection.begin) : backPart.length < backBufferPart.length ? selection.end += backBufferPart.length - backPart.length : backPart.charAt(0) !== backBufferPart.charAt(0) && selection.end++), \n                    writeBuffer(input, getBuffer(), selection), entries.length > 0 ? $.each(entries.split(\"\"), function(ndx, entry) {\n                        var keypress = new $.Event(\"keypress\");\n                        keypress.which = entry.charCodeAt(0), ignorable = !1, EventHandlers.keypressEvent.call(input, keypress);\n                    }) : (selection.begin === selection.end - 1 && caret(input, seekPrevious(selection.begin + 1), selection.end), \n                    e.keyCode = Inputmask.keyCode.DELETE, EventHandlers.keydownEvent.call(input, e)), \n                    e.preventDefault();\n                }\n            },\n            setValueEvent: function(e) {\n                this.inputmask.refreshValue = !1;\n                var input = this, value = input.inputmask._valueGet(!0);\n                $.isFunction(opts.onBeforeMask) && (value = opts.onBeforeMask.call(inputmask, value, opts) || value), \n                value = value.split(\"\"), checkVal(input, !0, !1, isRTL ? value.reverse() : value), \n                undoValue = getBuffer().join(\"\"), (opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join(\"\") && input.inputmask._valueSet(\"\");\n            },\n            focusEvent: function(e) {\n                var input = this, nptValue = input.inputmask._valueGet();\n                opts.showMaskOnFocus && (!opts.showMaskOnHover || opts.showMaskOnHover && \"\" === nptValue) && (input.inputmask._valueGet() !== getBuffer().join(\"\") ? writeBuffer(input, getBuffer(), seekNext(getLastValidPosition())) : !1 === mouseEnter && caret(input, seekNext(getLastValidPosition()))), \n                !0 === opts.positionCaretOnTab && !1 === mouseEnter && \"\" !== nptValue && (writeBuffer(input, getBuffer(), caret(input)), \n                EventHandlers.clickEvent.apply(input, [ e, !0 ])), undoValue = getBuffer().join(\"\");\n            },\n            mouseleaveEvent: function(e) {\n                var input = this;\n                if (mouseEnter = !1, opts.clearMaskOnLostFocus && document.activeElement !== input) {\n                    var buffer = getBuffer().slice(), nptValue = input.inputmask._valueGet();\n                    nptValue !== input.getAttribute(\"placeholder\") && \"\" !== nptValue && (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join(\"\") ? buffer = [] : clearOptionalTail(buffer), \n                    writeBuffer(input, buffer));\n                }\n            },\n            clickEvent: function(e, tabbed) {\n                function doRadixFocus(clickPos) {\n                    if (\"\" !== opts.radixPoint) {\n                        var vps = getMaskSet().validPositions;\n                        if (vps[clickPos] === undefined || vps[clickPos].input === getPlaceholder(clickPos)) {\n                            if (clickPos < seekNext(-1)) return !0;\n                            var radixPos = $.inArray(opts.radixPoint, getBuffer());\n                            if (-1 !== radixPos) {\n                                for (var vp in vps) if (radixPos < vp && vps[vp].input !== getPlaceholder(vp)) return !1;\n                                return !0;\n                            }\n                        }\n                    }\n                    return !1;\n                }\n                var input = this;\n                setTimeout(function() {\n                    if (document.activeElement === input) {\n                        var selectedCaret = caret(input);\n                        if (tabbed && (isRTL ? selectedCaret.end = selectedCaret.begin : selectedCaret.begin = selectedCaret.end), \n                        selectedCaret.begin === selectedCaret.end) switch (opts.positionCaretOnClick) {\n                          case \"none\":\n                            break;\n\n                          case \"radixFocus\":\n                            if (doRadixFocus(selectedCaret.begin)) {\n                                var radixPos = getBuffer().join(\"\").indexOf(opts.radixPoint);\n                                caret(input, opts.numericInput ? seekNext(radixPos) : radixPos);\n                                break;\n                            }\n\n                          default:\n                            var clickPosition = selectedCaret.begin, lvclickPosition = getLastValidPosition(clickPosition, !0), lastPosition = seekNext(lvclickPosition);\n                            if (clickPosition < lastPosition) caret(input, isMask(clickPosition, !0) || isMask(clickPosition - 1, !0) ? clickPosition : seekNext(clickPosition)); else {\n                                var lvp = getMaskSet().validPositions[lvclickPosition], tt = getTestTemplate(lastPosition, lvp ? lvp.match.locator : undefined, lvp), placeholder = getPlaceholder(lastPosition, tt.match);\n                                if (\"\" !== placeholder && getBuffer()[lastPosition] !== placeholder && !0 !== tt.match.optionalQuantifier && !0 !== tt.match.newBlockMarker || !isMask(lastPosition, !0) && tt.match.def === placeholder) {\n                                    var newPos = seekNext(lastPosition);\n                                    (clickPosition >= newPos || clickPosition === lastPosition) && (lastPosition = newPos);\n                                }\n                                caret(input, lastPosition);\n                            }\n                        }\n                    }\n                }, 0);\n            },\n            dblclickEvent: function(e) {\n                var input = this;\n                setTimeout(function() {\n                    caret(input, 0, seekNext(getLastValidPosition()));\n                }, 0);\n            },\n            cutEvent: function(e) {\n                var input = this, $input = $(input), pos = caret(input), ev = e.originalEvent || e, clipboardData = window.clipboardData || ev.clipboardData, clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);\n                clipboardData.setData(\"text\", isRTL ? clipData.reverse().join(\"\") : clipData.join(\"\")), \n                document.execCommand && document.execCommand(\"copy\"), handleRemove(input, Inputmask.keyCode.DELETE, pos), \n                writeBuffer(input, getBuffer(), getMaskSet().p, e, undoValue !== getBuffer().join(\"\")), \n                input.inputmask._valueGet() === getBufferTemplate().join(\"\") && $input.trigger(\"cleared\");\n            },\n            blurEvent: function(e) {\n                var $input = $(this), input = this;\n                if (input.inputmask) {\n                    var nptValue = input.inputmask._valueGet(), buffer = getBuffer().slice();\n                    \"\" !== nptValue && (opts.clearMaskOnLostFocus && (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join(\"\") ? buffer = [] : clearOptionalTail(buffer)), \n                    !1 === isComplete(buffer) && (setTimeout(function() {\n                        $input.trigger(\"incomplete\");\n                    }, 0), opts.clearIncomplete && (resetMaskSet(), buffer = opts.clearMaskOnLostFocus ? [] : getBufferTemplate().slice())), \n                    writeBuffer(input, buffer, undefined, e)), undoValue !== getBuffer().join(\"\") && (undoValue = buffer.join(\"\"), \n                    $input.trigger(\"change\"));\n                }\n            },\n            mouseenterEvent: function(e) {\n                var input = this;\n                mouseEnter = !0, document.activeElement !== input && opts.showMaskOnHover && input.inputmask._valueGet() !== getBuffer().join(\"\") && writeBuffer(input, getBuffer());\n            },\n            submitEvent: function(e) {\n                undoValue !== getBuffer().join(\"\") && $el.trigger(\"change\"), opts.clearMaskOnLostFocus && -1 === getLastValidPosition() && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join(\"\") && el.inputmask._valueSet(\"\"), \n                opts.removeMaskOnSubmit && (el.inputmask._valueSet(el.inputmask.unmaskedvalue(), !0), \n                setTimeout(function() {\n                    writeBuffer(el, getBuffer());\n                }, 0));\n            },\n            resetEvent: function(e) {\n                el.inputmask.refreshValue = !0, setTimeout(function() {\n                    $el.trigger(\"setvalue\");\n                }, 0);\n            }\n        };\n        Inputmask.prototype.positionColorMask = function(input, template) {\n            input.style.left = template.offsetLeft + \"px\";\n        };\n        var valueBuffer;\n        if (actionObj !== undefined) switch (actionObj.action) {\n          case \"isComplete\":\n            return el = actionObj.el, isComplete(getBuffer());\n\n          case \"unmaskedvalue\":\n            return el !== undefined && actionObj.value === undefined || (valueBuffer = actionObj.value, \n            valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, valueBuffer, opts) || valueBuffer : valueBuffer).split(\"\"), \n            checkVal(undefined, !1, !1, isRTL ? valueBuffer.reverse() : valueBuffer), $.isFunction(opts.onBeforeWrite) && opts.onBeforeWrite.call(inputmask, undefined, getBuffer(), 0, opts)), \n            unmaskedvalue(el);\n\n          case \"mask\":\n            !function(elem) {\n                EventRuler.off(elem);\n                var isSupported = function(input, opts) {\n                    var elementType = input.getAttribute(\"type\"), isSupported = \"INPUT\" === input.tagName && -1 !== $.inArray(elementType, opts.supportsInputType) || input.isContentEditable || \"TEXTAREA\" === input.tagName;\n                    if (!isSupported) if (\"INPUT\" === input.tagName) {\n                        var el = document.createElement(\"input\");\n                        el.setAttribute(\"type\", elementType), isSupported = \"text\" === el.type, el = null;\n                    } else isSupported = \"partial\";\n                    return !1 !== isSupported ? function(npt) {\n                        function getter() {\n                            return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== getLastValidPosition() || !0 !== opts.nullable ? document.activeElement === this && opts.clearMaskOnLostFocus ? (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join(\"\") : valueGet.call(this) : \"\" : valueGet.call(this);\n                        }\n                        function setter(value) {\n                            valueSet.call(this, value), this.inputmask && $(this).trigger(\"setvalue\");\n                        }\n                        var valueGet, valueSet;\n                        if (!npt.inputmask.__valueGet) {\n                            if (!0 !== opts.noValuePatching) {\n                                if (Object.getOwnPropertyDescriptor) {\n                                    \"function\" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = \"object\" == typeof \"test\".__proto__ ? function(object) {\n                                        return object.__proto__;\n                                    } : function(object) {\n                                        return object.constructor.prototype;\n                                    });\n                                    var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), \"value\") : undefined;\n                                    valueProperty && valueProperty.get && valueProperty.set ? (valueGet = valueProperty.get, \n                                    valueSet = valueProperty.set, Object.defineProperty(npt, \"value\", {\n                                        get: getter,\n                                        set: setter,\n                                        configurable: !0\n                                    })) : \"INPUT\" !== npt.tagName && (valueGet = function() {\n                                        return this.textContent;\n                                    }, valueSet = function(value) {\n                                        this.textContent = value;\n                                    }, Object.defineProperty(npt, \"value\", {\n                                        get: getter,\n                                        set: setter,\n                                        configurable: !0\n                                    }));\n                                } else document.__lookupGetter__ && npt.__lookupGetter__(\"value\") && (valueGet = npt.__lookupGetter__(\"value\"), \n                                valueSet = npt.__lookupSetter__(\"value\"), npt.__defineGetter__(\"value\", getter), \n                                npt.__defineSetter__(\"value\", setter));\n                                npt.inputmask.__valueGet = valueGet, npt.inputmask.__valueSet = valueSet;\n                            }\n                            npt.inputmask._valueGet = function(overruleRTL) {\n                                return isRTL && !0 !== overruleRTL ? valueGet.call(this.el).split(\"\").reverse().join(\"\") : valueGet.call(this.el);\n                            }, npt.inputmask._valueSet = function(value, overruleRTL) {\n                                valueSet.call(this.el, null === value || value === undefined ? \"\" : !0 !== overruleRTL && isRTL ? value.split(\"\").reverse().join(\"\") : value);\n                            }, valueGet === undefined && (valueGet = function() {\n                                return this.value;\n                            }, valueSet = function(value) {\n                                this.value = value;\n                            }, function(type) {\n                                if ($.valHooks && ($.valHooks[type] === undefined || !0 !== $.valHooks[type].inputmaskpatch)) {\n                                    var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function(elem) {\n                                        return elem.value;\n                                    }, valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function(elem, value) {\n                                        return elem.value = value, elem;\n                                    };\n                                    $.valHooks[type] = {\n                                        get: function(elem) {\n                                            if (elem.inputmask) {\n                                                if (elem.inputmask.opts.autoUnmask) return elem.inputmask.unmaskedvalue();\n                                                var result = valhookGet(elem);\n                                                return -1 !== getLastValidPosition(undefined, undefined, elem.inputmask.maskset.validPositions) || !0 !== opts.nullable ? result : \"\";\n                                            }\n                                            return valhookGet(elem);\n                                        },\n                                        set: function(elem, value) {\n                                            var result, $elem = $(elem);\n                                            return result = valhookSet(elem, value), elem.inputmask && $elem.trigger(\"setvalue\"), \n                                            result;\n                                        },\n                                        inputmaskpatch: !0\n                                    };\n                                }\n                            }(npt.type), function(npt) {\n                                EventRuler.on(npt, \"mouseenter\", function(event) {\n                                    var $input = $(this);\n                                    this.inputmask._valueGet() !== getBuffer().join(\"\") && $input.trigger(\"setvalue\");\n                                });\n                            }(npt));\n                        }\n                    }(input) : input.inputmask = undefined, isSupported;\n                }(elem, opts);\n                if (!1 !== isSupported && (el = elem, $el = $(el), maxLength = el !== undefined ? el.maxLength : undefined, \n                -1 === maxLength && (maxLength = undefined), !0 === opts.colorMask && initializeColorMask(el), \n                android && (el.hasOwnProperty(\"inputmode\") && (el.inputmode = opts.inputmode, el.setAttribute(\"inputmode\", opts.inputmode)), \n                \"rtfm\" === opts.androidHack && (!0 !== opts.colorMask && initializeColorMask(el), \n                el.type = \"password\")), !0 === isSupported && (EventRuler.on(el, \"submit\", EventHandlers.submitEvent), \n                EventRuler.on(el, \"reset\", EventHandlers.resetEvent), EventRuler.on(el, \"mouseenter\", EventHandlers.mouseenterEvent), \n                EventRuler.on(el, \"blur\", EventHandlers.blurEvent), EventRuler.on(el, \"focus\", EventHandlers.focusEvent), \n                EventRuler.on(el, \"mouseleave\", EventHandlers.mouseleaveEvent), !0 !== opts.colorMask && EventRuler.on(el, \"click\", EventHandlers.clickEvent), \n                EventRuler.on(el, \"dblclick\", EventHandlers.dblclickEvent), EventRuler.on(el, \"paste\", EventHandlers.pasteEvent), \n                EventRuler.on(el, \"dragdrop\", EventHandlers.pasteEvent), EventRuler.on(el, \"drop\", EventHandlers.pasteEvent), \n                EventRuler.on(el, \"cut\", EventHandlers.cutEvent), EventRuler.on(el, \"complete\", opts.oncomplete), \n                EventRuler.on(el, \"incomplete\", opts.onincomplete), EventRuler.on(el, \"cleared\", opts.oncleared), \n                android || !0 === opts.inputEventOnly ? el.removeAttribute(\"maxLength\") : (EventRuler.on(el, \"keydown\", EventHandlers.keydownEvent), \n                EventRuler.on(el, \"keypress\", EventHandlers.keypressEvent)), EventRuler.on(el, \"compositionstart\", $.noop), \n                EventRuler.on(el, \"compositionupdate\", $.noop), EventRuler.on(el, \"compositionend\", $.noop), \n                EventRuler.on(el, \"keyup\", $.noop), EventRuler.on(el, \"input\", EventHandlers.inputFallBackEvent), \n                EventRuler.on(el, \"beforeinput\", $.noop)), EventRuler.on(el, \"setvalue\", EventHandlers.setValueEvent), \n                undoValue = getBufferTemplate().join(\"\"), \"\" !== el.inputmask._valueGet(!0) || !1 === opts.clearMaskOnLostFocus || document.activeElement === el)) {\n                    var initialValue = $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, el.inputmask._valueGet(!0), opts) || el.inputmask._valueGet(!0) : el.inputmask._valueGet(!0);\n                    \"\" !== initialValue && checkVal(el, !0, !1, isRTL ? initialValue.split(\"\").reverse() : initialValue.split(\"\"));\n                    var buffer = getBuffer().slice();\n                    undoValue = buffer.join(\"\"), !1 === isComplete(buffer) && opts.clearIncomplete && resetMaskSet(), \n                    opts.clearMaskOnLostFocus && document.activeElement !== el && (-1 === getLastValidPosition() ? buffer = [] : clearOptionalTail(buffer)), \n                    writeBuffer(el, buffer), document.activeElement === el && caret(el, seekNext(getLastValidPosition()));\n                }\n            }(el);\n            break;\n\n          case \"format\":\n            return valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value : actionObj.value).split(\"\"), \n            checkVal(undefined, !0, !1, isRTL ? valueBuffer.reverse() : valueBuffer), actionObj.metadata ? {\n                value: isRTL ? getBuffer().slice().reverse().join(\"\") : getBuffer().join(\"\"),\n                metadata: maskScope.call(this, {\n                    action: \"getmetadata\"\n                }, maskset, opts)\n            } : isRTL ? getBuffer().slice().reverse().join(\"\") : getBuffer().join(\"\");\n\n          case \"isValid\":\n            actionObj.value ? (valueBuffer = actionObj.value.split(\"\"), checkVal(undefined, !0, !0, isRTL ? valueBuffer.reverse() : valueBuffer)) : actionObj.value = getBuffer().join(\"\");\n            for (var buffer = getBuffer(), rl = determineLastRequiredPosition(), lmib = buffer.length - 1; lmib > rl && !isMask(lmib); lmib--) ;\n            return buffer.splice(rl, lmib + 1 - rl), isComplete(buffer) && actionObj.value === getBuffer().join(\"\");\n\n          case \"getemptymask\":\n            return getBufferTemplate().join(\"\");\n\n          case \"remove\":\n            if (el && el.inputmask) {\n                $el = $(el), el.inputmask._valueSet(opts.autoUnmask ? unmaskedvalue(el) : el.inputmask._valueGet(!0)), \n                EventRuler.off(el);\n                Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), \"value\") && el.inputmask.__valueGet && Object.defineProperty(el, \"value\", {\n                    get: el.inputmask.__valueGet,\n                    set: el.inputmask.__valueSet,\n                    configurable: !0\n                }) : document.__lookupGetter__ && el.__lookupGetter__(\"value\") && el.inputmask.__valueGet && (el.__defineGetter__(\"value\", el.inputmask.__valueGet), \n                el.__defineSetter__(\"value\", el.inputmask.__valueSet)), el.inputmask = undefined;\n            }\n            return el;\n\n          case \"getmetadata\":\n            if ($.isArray(maskset.metadata)) {\n                var maskTarget = getMaskTemplate(!0, 0, !1).join(\"\");\n                return $.each(maskset.metadata, function(ndx, mtdt) {\n                    if (mtdt.mask === maskTarget) return maskTarget = mtdt, !1;\n                }), maskTarget;\n            }\n            return maskset.metadata;\n        }\n    }\n    var ua = navigator.userAgent, mobile = /mobile/i.test(ua), iemobile = /iemobile/i.test(ua), iphone = /iphone/i.test(ua) && !iemobile, android = /android/i.test(ua) && !iemobile;\n    return Inputmask.prototype = {\n        dataAttribute: \"data-inputmask\",\n        defaults: {\n            placeholder: \"_\",\n            optionalmarker: {\n                start: \"[\",\n                end: \"]\"\n            },\n            quantifiermarker: {\n                start: \"{\",\n                end: \"}\"\n            },\n            groupmarker: {\n                start: \"(\",\n                end: \")\"\n            },\n            alternatormarker: \"|\",\n            escapeChar: \"\\\\\",\n            mask: null,\n            regex: null,\n            oncomplete: $.noop,\n            onincomplete: $.noop,\n            oncleared: $.noop,\n            repeat: 0,\n            greedy: !0,\n            autoUnmask: !1,\n            removeMaskOnSubmit: !1,\n            clearMaskOnLostFocus: !0,\n            insertMode: !0,\n            clearIncomplete: !1,\n            alias: null,\n            onKeyDown: $.noop,\n            onBeforeMask: null,\n            onBeforePaste: function(pastedValue, opts) {\n                return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;\n            },\n            onBeforeWrite: null,\n            onUnMask: null,\n            showMaskOnFocus: !0,\n            showMaskOnHover: !0,\n            onKeyValidation: $.noop,\n            skipOptionalPartCharacter: \" \",\n            numericInput: !1,\n            rightAlign: !1,\n            undoOnEscape: !0,\n            radixPoint: \"\",\n            radixPointDefinitionSymbol: undefined,\n            groupSeparator: \"\",\n            keepStatic: null,\n            positionCaretOnTab: !0,\n            tabThrough: !1,\n            supportsInputType: [ \"text\", \"tel\", \"password\" ],\n            ignorables: [ 8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],\n            isComplete: null,\n            canClearPosition: $.noop,\n            preValidation: null,\n            postValidation: null,\n            staticDefinitionSymbol: undefined,\n            jitMasking: !1,\n            nullable: !0,\n            inputEventOnly: !1,\n            noValuePatching: !1,\n            positionCaretOnClick: \"lvp\",\n            casing: null,\n            inputmode: \"verbatim\",\n            colorMask: !1,\n            androidHack: !1,\n            importDataAttributes: !0\n        },\n        definitions: {\n            \"9\": {\n                validator: \"[0-9\\uff11-\\uff19]\",\n                cardinality: 1,\n                definitionSymbol: \"*\"\n            },\n            a: {\n                validator: \"[A-Za-z\\u0410-\\u044f\\u0401\\u0451\\xc0-\\xff\\xb5]\",\n                cardinality: 1,\n                definitionSymbol: \"*\"\n            },\n            \"*\": {\n                validator: \"[0-9\\uff11-\\uff19A-Za-z\\u0410-\\u044f\\u0401\\u0451\\xc0-\\xff\\xb5]\",\n                cardinality: 1\n            }\n        },\n        aliases: {},\n        masksCache: {},\n        mask: function(elems) {\n            function importAttributeOptions(npt, opts, userOptions, dataAttribute) {\n                function importOption(option, optionData) {\n                    null !== (optionData = optionData !== undefined ? optionData : npt.getAttribute(dataAttribute + \"-\" + option)) && (\"string\" == typeof optionData && (0 === option.indexOf(\"on\") ? optionData = window[optionData] : \"false\" === optionData ? optionData = !1 : \"true\" === optionData && (optionData = !0)), \n                    userOptions[option] = optionData);\n                }\n                if (!0 === opts.importDataAttributes) {\n                    var option, dataoptions, optionData, p, attrOptions = npt.getAttribute(dataAttribute);\n                    if (attrOptions && \"\" !== attrOptions && (attrOptions = attrOptions.replace(new RegExp(\"'\", \"g\"), '\"'), \n                    dataoptions = JSON.parse(\"{\" + attrOptions + \"}\")), dataoptions) {\n                        optionData = undefined;\n                        for (p in dataoptions) if (\"alias\" === p.toLowerCase()) {\n                            optionData = dataoptions[p];\n                            break;\n                        }\n                    }\n                    importOption(\"alias\", optionData), userOptions.alias && resolveAlias(userOptions.alias, userOptions, opts);\n                    for (option in opts) {\n                        if (dataoptions) {\n                            optionData = undefined;\n                            for (p in dataoptions) if (p.toLowerCase() === option.toLowerCase()) {\n                                optionData = dataoptions[p];\n                                break;\n                            }\n                        }\n                        importOption(option, optionData);\n                    }\n                }\n                return $.extend(!0, opts, userOptions), (\"rtl\" === npt.dir || opts.rightAlign) && (npt.style.textAlign = \"right\"), \n                (\"rtl\" === npt.dir || opts.numericInput) && (npt.dir = \"ltr\", npt.removeAttribute(\"dir\"), \n                opts.isRTL = !0), opts;\n            }\n            var that = this;\n            return \"string\" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), \n            elems = elems.nodeName ? [ elems ] : elems, $.each(elems, function(ndx, el) {\n                var scopedOpts = $.extend(!0, {}, that.opts);\n                importAttributeOptions(el, scopedOpts, $.extend(!0, {}, that.userOptions), that.dataAttribute);\n                var maskset = generateMaskSet(scopedOpts, that.noMasksCache);\n                maskset !== undefined && (el.inputmask !== undefined && (el.inputmask.opts.autoUnmask = !0, \n                el.inputmask.remove()), el.inputmask = new Inputmask(undefined, undefined, !0), \n                el.inputmask.opts = scopedOpts, el.inputmask.noMasksCache = that.noMasksCache, el.inputmask.userOptions = $.extend(!0, {}, that.userOptions), \n                el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput, el.inputmask.el = el, \n                el.inputmask.maskset = maskset, $.data(el, \"_inputmask_opts\", scopedOpts), maskScope.call(el.inputmask, {\n                    action: \"mask\"\n                }));\n            }), elems && elems[0] ? elems[0].inputmask || this : this;\n        },\n        option: function(options, noremask) {\n            return \"string\" == typeof options ? this.opts[options] : \"object\" == typeof options ? ($.extend(this.userOptions, options), \n            this.el && !0 !== noremask && this.mask(this.el), this) : void 0;\n        },\n        unmaskedvalue: function(value) {\n            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), \n            maskScope.call(this, {\n                action: \"unmaskedvalue\",\n                value: value\n            });\n        },\n        remove: function() {\n            return maskScope.call(this, {\n                action: \"remove\"\n            });\n        },\n        getemptymask: function() {\n            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), \n            maskScope.call(this, {\n                action: \"getemptymask\"\n            });\n        },\n        hasMaskedValue: function() {\n            return !this.opts.autoUnmask;\n        },\n        isComplete: function() {\n            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), \n            maskScope.call(this, {\n                action: \"isComplete\"\n            });\n        },\n        getmetadata: function() {\n            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), \n            maskScope.call(this, {\n                action: \"getmetadata\"\n            });\n        },\n        isValid: function(value) {\n            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), \n            maskScope.call(this, {\n                action: \"isValid\",\n                value: value\n            });\n        },\n        format: function(value, metadata) {\n            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), \n            maskScope.call(this, {\n                action: \"format\",\n                value: value,\n                metadata: metadata\n            });\n        },\n        analyseMask: function(mask, regexMask, opts) {\n            function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {\n                this.matches = [], this.openGroup = isGroup || !1, this.alternatorGroup = !1, this.isGroup = isGroup || !1, \n                this.isOptional = isOptional || !1, this.isQuantifier = isQuantifier || !1, this.isAlternator = isAlternator || !1, \n                this.quantifier = {\n                    min: 1,\n                    max: 1\n                };\n            }\n            function insertTestDefinition(mtoken, element, position) {\n                position = position !== undefined ? position : mtoken.matches.length;\n                var prevMatch = mtoken.matches[position - 1];\n                if (regexMask) 0 === element.indexOf(\"[\") || escaped && /\\\\d|\\\\s|\\\\w]/i.test(element) || \".\" === element ? mtoken.matches.splice(position++, 0, {\n                    fn: new RegExp(element, opts.casing ? \"i\" : \"\"),\n                    cardinality: 1,\n                    optionality: mtoken.isOptional,\n                    newBlockMarker: prevMatch === undefined || prevMatch.def !== element,\n                    casing: null,\n                    def: element,\n                    placeholder: undefined,\n                    nativeDef: element\n                }) : (escaped && (element = element[element.length - 1]), $.each(element.split(\"\"), function(ndx, lmnt) {\n                    prevMatch = mtoken.matches[position - 1], mtoken.matches.splice(position++, 0, {\n                        fn: null,\n                        cardinality: 0,\n                        optionality: mtoken.isOptional,\n                        newBlockMarker: prevMatch === undefined || prevMatch.def !== lmnt && null !== prevMatch.fn,\n                        casing: null,\n                        def: opts.staticDefinitionSymbol || lmnt,\n                        placeholder: opts.staticDefinitionSymbol !== undefined ? lmnt : undefined,\n                        nativeDef: lmnt\n                    });\n                })), escaped = !1; else {\n                    var maskdef = (opts.definitions ? opts.definitions[element] : undefined) || Inputmask.prototype.definitions[element];\n                    if (maskdef && !escaped) {\n                        for (var prevalidators = maskdef.prevalidator, prevalidatorsL = prevalidators ? prevalidators.length : 0, i = 1; i < maskdef.cardinality; i++) {\n                            var prevalidator = prevalidatorsL >= i ? prevalidators[i - 1] : [], validator = prevalidator.validator, cardinality = prevalidator.cardinality;\n                            mtoken.matches.splice(position++, 0, {\n                                fn: validator ? \"string\" == typeof validator ? new RegExp(validator, opts.casing ? \"i\" : \"\") : new function() {\n                                    this.test = validator;\n                                }() : new RegExp(\".\"),\n                                cardinality: cardinality || 1,\n                                optionality: mtoken.isOptional,\n                                newBlockMarker: prevMatch === undefined || prevMatch.def !== (maskdef.definitionSymbol || element),\n                                casing: maskdef.casing,\n                                def: maskdef.definitionSymbol || element,\n                                placeholder: maskdef.placeholder,\n                                nativeDef: element\n                            }), prevMatch = mtoken.matches[position - 1];\n                        }\n                        mtoken.matches.splice(position++, 0, {\n                            fn: maskdef.validator ? \"string\" == typeof maskdef.validator ? new RegExp(maskdef.validator, opts.casing ? \"i\" : \"\") : new function() {\n                                this.test = maskdef.validator;\n                            }() : new RegExp(\".\"),\n                            cardinality: maskdef.cardinality,\n                            optionality: mtoken.isOptional,\n                            newBlockMarker: prevMatch === undefined || prevMatch.def !== (maskdef.definitionSymbol || element),\n                            casing: maskdef.casing,\n                            def: maskdef.definitionSymbol || element,\n                            placeholder: maskdef.placeholder,\n                            nativeDef: element\n                        });\n                    } else mtoken.matches.splice(position++, 0, {\n                        fn: null,\n                        cardinality: 0,\n                        optionality: mtoken.isOptional,\n                        newBlockMarker: prevMatch === undefined || prevMatch.def !== element && null !== prevMatch.fn,\n                        casing: null,\n                        def: opts.staticDefinitionSymbol || element,\n                        placeholder: opts.staticDefinitionSymbol !== undefined ? element : undefined,\n                        nativeDef: element\n                    }), escaped = !1;\n                }\n            }\n            function verifyGroupMarker(maskToken) {\n                maskToken && maskToken.matches && $.each(maskToken.matches, function(ndx, token) {\n                    var nextToken = maskToken.matches[ndx + 1];\n                    (nextToken === undefined || nextToken.matches === undefined || !1 === nextToken.isQuantifier) && token && token.isGroup && (token.isGroup = !1, \n                    regexMask || (insertTestDefinition(token, opts.groupmarker.start, 0), !0 !== token.openGroup && insertTestDefinition(token, opts.groupmarker.end))), \n                    verifyGroupMarker(token);\n                });\n            }\n            function defaultCase() {\n                if (openenings.length > 0) {\n                    if (currentOpeningToken = openenings[openenings.length - 1], insertTestDefinition(currentOpeningToken, m), \n                    currentOpeningToken.isAlternator) {\n                        alternator = openenings.pop();\n                        for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1;\n                        openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1], \n                        currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator);\n                    }\n                } else insertTestDefinition(currentToken, m);\n            }\n            function reverseTokens(maskToken) {\n                maskToken.matches = maskToken.matches.reverse();\n                for (var match in maskToken.matches) if (maskToken.matches.hasOwnProperty(match)) {\n                    var intMatch = parseInt(match);\n                    if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {\n                        var qt = maskToken.matches[match];\n                        maskToken.matches.splice(match, 1), maskToken.matches.splice(intMatch + 1, 0, qt);\n                    }\n                    maskToken.matches[match].matches !== undefined ? maskToken.matches[match] = reverseTokens(maskToken.matches[match]) : maskToken.matches[match] = function(st) {\n                        return st === opts.optionalmarker.start ? st = opts.optionalmarker.end : st === opts.optionalmarker.end ? st = opts.optionalmarker.start : st === opts.groupmarker.start ? st = opts.groupmarker.end : st === opts.groupmarker.end && (st = opts.groupmarker.start), \n                        st;\n                    }(maskToken.matches[match]);\n                }\n                return maskToken;\n            }\n            var match, m, openingToken, currentOpeningToken, alternator, lastMatch, groupToken, tokenizer = /(?:[?*+]|\\{[0-9\\+\\*]+(?:,[0-9\\+\\*]*)?\\})|[^.?*+^${[]()|\\\\]+|./g, regexTokenizer = /\\[\\^?]?(?:[^\\\\\\]]+|\\\\[\\S\\s]?)*]?|\\\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\\S\\s]?)|\\((?:\\?[:=!]?)?|(?:[?*+]|\\{[0-9]+(?:,[0-9]*)?\\})\\??|[^.?*+^${[()|\\\\]+|./g, escaped = !1, currentToken = new MaskToken(), openenings = [], maskTokens = [];\n            for (regexMask && (opts.optionalmarker.start = undefined, opts.optionalmarker.end = undefined); match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask); ) {\n                if (m = match[0], regexMask) switch (m.charAt(0)) {\n                  case \"?\":\n                    m = \"{0,1}\";\n                    break;\n\n                  case \"+\":\n                  case \"*\":\n                    m = \"{\" + m + \"}\";\n                }\n                if (escaped) defaultCase(); else switch (m.charAt(0)) {\n                  case opts.escapeChar:\n                    escaped = !0, regexMask && defaultCase();\n                    break;\n\n                  case opts.optionalmarker.end:\n                  case opts.groupmarker.end:\n                    if (openingToken = openenings.pop(), openingToken.openGroup = !1, openingToken !== undefined) if (openenings.length > 0) {\n                        if (currentOpeningToken = openenings[openenings.length - 1], currentOpeningToken.matches.push(openingToken), \n                        currentOpeningToken.isAlternator) {\n                            alternator = openenings.pop();\n                            for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1, \n                            alternator.matches[mndx].alternatorGroup = !1;\n                            openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1], \n                            currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator);\n                        }\n                    } else currentToken.matches.push(openingToken); else defaultCase();\n                    break;\n\n                  case opts.optionalmarker.start:\n                    openenings.push(new MaskToken(!1, !0));\n                    break;\n\n                  case opts.groupmarker.start:\n                    openenings.push(new MaskToken(!0));\n                    break;\n\n                  case opts.quantifiermarker.start:\n                    var quantifier = new MaskToken(!1, !1, !0);\n                    m = m.replace(/[{}]/g, \"\");\n                    var mq = m.split(\",\"), mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]), mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);\n                    if (\"*\" !== mq1 && \"+\" !== mq1 || (mq0 = \"*\" === mq1 ? 0 : 1), quantifier.quantifier = {\n                        min: mq0,\n                        max: mq1\n                    }, openenings.length > 0) {\n                        var matches = openenings[openenings.length - 1].matches;\n                        match = matches.pop(), match.isGroup || (groupToken = new MaskToken(!0), groupToken.matches.push(match), \n                        match = groupToken), matches.push(match), matches.push(quantifier);\n                    } else match = currentToken.matches.pop(), match.isGroup || (regexMask && null === match.fn && \".\" === match.def && (match.fn = new RegExp(match.def, opts.casing ? \"i\" : \"\")), \n                    groupToken = new MaskToken(!0), groupToken.matches.push(match), match = groupToken), \n                    currentToken.matches.push(match), currentToken.matches.push(quantifier);\n                    break;\n\n                  case opts.alternatormarker:\n                    if (openenings.length > 0) {\n                        currentOpeningToken = openenings[openenings.length - 1];\n                        var subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];\n                        lastMatch = currentOpeningToken.openGroup && (subToken.matches === undefined || !1 === subToken.isGroup && !1 === subToken.isAlternator) ? openenings.pop() : currentOpeningToken.matches.pop();\n                    } else lastMatch = currentToken.matches.pop();\n                    if (lastMatch.isAlternator) openenings.push(lastMatch); else if (lastMatch.alternatorGroup ? (alternator = openenings.pop(), \n                    lastMatch.alternatorGroup = !1) : alternator = new MaskToken(!1, !1, !1, !0), alternator.matches.push(lastMatch), \n                    openenings.push(alternator), lastMatch.openGroup) {\n                        lastMatch.openGroup = !1;\n                        var alternatorGroup = new MaskToken(!0);\n                        alternatorGroup.alternatorGroup = !0, openenings.push(alternatorGroup);\n                    }\n                    break;\n\n                  default:\n                    defaultCase();\n                }\n            }\n            for (;openenings.length > 0; ) openingToken = openenings.pop(), currentToken.matches.push(openingToken);\n            return currentToken.matches.length > 0 && (verifyGroupMarker(currentToken), maskTokens.push(currentToken)), \n            (opts.numericInput || opts.isRTL) && reverseTokens(maskTokens[0]), maskTokens;\n        }\n    }, Inputmask.extendDefaults = function(options) {\n        $.extend(!0, Inputmask.prototype.defaults, options);\n    }, Inputmask.extendDefinitions = function(definition) {\n        $.extend(!0, Inputmask.prototype.definitions, definition);\n    }, Inputmask.extendAliases = function(alias) {\n        $.extend(!0, Inputmask.prototype.aliases, alias);\n    }, Inputmask.format = function(value, options, metadata) {\n        return Inputmask(options).format(value, metadata);\n    }, Inputmask.unmask = function(value, options) {\n        return Inputmask(options).unmaskedvalue(value);\n    }, Inputmask.isValid = function(value, options) {\n        return Inputmask(options).isValid(value);\n    }, Inputmask.remove = function(elems) {\n        $.each(elems, function(ndx, el) {\n            el.inputmask && el.inputmask.remove();\n        });\n    }, Inputmask.escapeRegex = function(str) {\n        var specials = [ \"/\", \".\", \"*\", \"+\", \"?\", \"|\", \"(\", \")\", \"[\", \"]\", \"{\", \"}\", \"\\\\\", \"$\", \"^\" ];\n        return str.replace(new RegExp(\"(\\\\\" + specials.join(\"|\\\\\") + \")\", \"gim\"), \"\\\\$1\");\n    }, Inputmask.keyCode = {\n        ALT: 18,\n        BACKSPACE: 8,\n        BACKSPACE_SAFARI: 127,\n        CAPS_LOCK: 20,\n        COMMA: 188,\n        COMMAND: 91,\n        COMMAND_LEFT: 91,\n        COMMAND_RIGHT: 93,\n        CONTROL: 17,\n        DELETE: 46,\n        DOWN: 40,\n        END: 35,\n        ENTER: 13,\n        ESCAPE: 27,\n        HOME: 36,\n        INSERT: 45,\n        LEFT: 37,\n        MENU: 93,\n        NUMPAD_ADD: 107,\n        NUMPAD_DECIMAL: 110,\n        NUMPAD_DIVIDE: 111,\n        NUMPAD_ENTER: 108,\n        NUMPAD_MULTIPLY: 106,\n        NUMPAD_SUBTRACT: 109,\n        PAGE_DOWN: 34,\n        PAGE_UP: 33,\n        PERIOD: 190,\n        RIGHT: 39,\n        SHIFT: 16,\n        SPACE: 32,\n        TAB: 9,\n        UP: 38,\n        WINDOWS: 91,\n        X: 88\n    }, Inputmask;\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5qcz9mMWQzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLDZDQUE2QztBQUM3QywrRkFBK0Y7QUFDL0YsMkRBQTJEO0FBQzNELHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLGFBQWE7QUFDYiwrQ0FBK0MscUZBQXFGO0FBQ3BJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFLHFEQUFxRCxlQUFlO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixvREFBb0QsNkJBQTZCO0FBQ2pGLHNCQUFzQixvREFBb0Q7QUFDMUUsdUhBQXVIO0FBQ3ZIO0FBQ0EsdUxBQXVMO0FBQ3ZMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5UUFBeVE7QUFDelEsNmhCQUE2aEI7QUFDN2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxxQkFBcUI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLG1QQUFtUCx1QkFBdUI7QUFDMVE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLG1HQUFtRyxxQkFBcUIsdUNBQXVDO0FBQy9KLGlEQUFpRCwwQkFBMEI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQSxzREFBc0QsMkJBQTJCO0FBQ2pGO0FBQ0E7QUFDQSwwREFBMEQsaUNBQWlDO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELDBCQUEwQjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLHlCQUF5QixxTUFBcU0sb0ZBQW9GO0FBQ2xUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQSx1RkFBdUYsaUNBQWlDO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELHdIQUF3SDtBQUNqTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdHQUF3RyxxQkFBcUIsb0JBQW9CO0FBQ2pKLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHdEQUF3RCwyQkFBMkI7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFLHFCQUFxQixTQUFTO0FBQzNHLHNDQUFzQyxTQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0pBQXNKLGtCQUFrQjtBQUN4SywrQkFBK0Isd0JBQXdCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0dBQW9HLGFBQWE7QUFDakg7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNELGlDQUFpQyxVQUFVO0FBQzNDLHNFQUFzRTtBQUN0RTtBQUNBLHFDQUFxQyxVQUFVO0FBQy9DO0FBQ0EsbUVBQW1FLDRLQUE0SztBQUMvTyw2TUFBNk07QUFDN007QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0Y7QUFDcEY7QUFDQSxpQkFBaUIsd0RBQXdEO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxpREFBaUQ7QUFDN0Y7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4TEFBOEwsZUFBZTtBQUM3TTtBQUNBO0FBQ0EsMEhBQTBILGFBQWE7QUFDdkk7QUFDQTtBQUNBLHVEQUF1RCxTQUFTO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDBCQUEwQjtBQUMvRDtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtSUFBbUk7QUFDbkksMkVBQTJFLGNBQWM7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx1QkFBdUI7QUFDckU7QUFDQTtBQUNBLDhGQUE4RjtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsNkNBQTZDO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSx3QkFBd0I7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLGdDQUFnQztBQUNqRztBQUNBO0FBQ0E7QUFDQSxpR0FBaUc7QUFDakc7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5SEFBeUgseUpBQXlKO0FBQ2xSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsa0ZBQWtGO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEdBQThHLGtCQUFrQjtBQUNoSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0dBQW9HO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFQQUFxUDtBQUNyUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdHQUFnRztBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0Esb0hBQW9IO0FBQ3BILCtCQUErQixxQkFBcUI7QUFDcEQsaUZBQWlGO0FBQ2pGO0FBQ0EsOEJBQThCLCtmQUErZjtBQUM3aEI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxrSkFBa0osb1hBQW9YO0FBQ3RnQixrQkFBa0IsZ0pBQWdKO0FBQ2xLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsVUFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUhBQXVILGtGQUFrRixjQUFjO0FBQ3ZOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUdBQW1HLHdCQUF3QjtBQUMzSDtBQUNBO0FBQ0EscUJBQXFCLG1EQUFtRDtBQUN4RTtBQUNBLGFBQWE7QUFDYjtBQUNBLGdFQUFnRTtBQUNoRSx1Q0FBdUMsa0ZBQWtGO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxpQkFBaUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzS0FBc0ssMEJBQTBCO0FBQ2hNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaUJBQWlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQSxpQkFBaUI7QUFDakIsd0tBQXdLO0FBQ3hLO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2SkFBNko7QUFDN0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpSkFBaUosOERBQThEO0FBQy9NO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlMQUFpTDtBQUNqTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsNkJBQTZCO0FBQzdCO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTs7QUFFYjtBQUNBO0FBQ0EsMEdBQTBHLDRCQUE0QjtBQUN0STs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EseUJBQXlCO0FBQ3pCLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxtQkFBbUI7QUFDbkIsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxvQkFBb0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLHlJQUF5STtBQUN6STtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQSx3SUFBd0kseUJBQXlCO0FBQ2pLO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGtDQUFrQztBQUM1RTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHdIQUF3SCw0QkFBNEIsV0FBVyxzRkFBc0YsSUFBSSx3Q0FBd0MsRUFBRSxjQUFjLEVBQUUsK0NBQStDLG9CQUFvQixjQUFjO0FBQ3BZLDJHQUEyRyxzRUFBc0U7QUFDakw7QUFDQTtBQUNBLDBCQUEwQixJQUFJO0FBQzlCOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsVUFBVTtBQUNwQztBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGtDQUFrQztBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw4Q0FBOEM7QUFDbkU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQiwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCw2RUFBNkUsS0FBSztBQUNsRjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiogaW5wdXRtYXNrLmpzXG4qIGh0dHBzOi8vZ2l0aHViLmNvbS9Sb2JpbkhlcmJvdHMvSW5wdXRtYXNrXG4qIENvcHlyaWdodCAoYykgMjAxMCAtIDIwMTcgUm9iaW4gSGVyYm90c1xuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgKGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwKVxuKiBWZXJzaW9uOiAzLjMuOFxuKi9cblxuIWZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsgXCIuL2RlcGVuZGVuY3lMaWJzL2lucHV0bWFzay5kZXBlbmRlbmN5TGliXCIsIFwiLi9nbG9iYWwvd2luZG93XCIsIFwiLi9nbG9iYWwvZG9jdW1lbnRcIiBdLCBmYWN0b3J5KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vZGVwZW5kZW5jeUxpYnMvaW5wdXRtYXNrLmRlcGVuZGVuY3lMaWJcIiksIHJlcXVpcmUoXCIuL2dsb2JhbC93aW5kb3dcIiksIHJlcXVpcmUoXCIuL2dsb2JhbC9kb2N1bWVudFwiKSkgOiB3aW5kb3cuSW5wdXRtYXNrID0gZmFjdG9yeSh3aW5kb3cuZGVwZW5kZW5jeUxpYiB8fCBqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xufShmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcbiAgICBmdW5jdGlvbiBJbnB1dG1hc2soYWxpYXMsIG9wdGlvbnMsIGludGVybmFsKSB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBJbnB1dG1hc2spKSByZXR1cm4gbmV3IElucHV0bWFzayhhbGlhcywgb3B0aW9ucywgaW50ZXJuYWwpO1xuICAgICAgICB0aGlzLmVsID0gdW5kZWZpbmVkLCB0aGlzLmV2ZW50cyA9IHt9LCB0aGlzLm1hc2tzZXQgPSB1bmRlZmluZWQsIHRoaXMucmVmcmVzaFZhbHVlID0gITEsIFxuICAgICAgICAhMCAhPT0gaW50ZXJuYWwgJiYgKCQuaXNQbGFpbk9iamVjdChhbGlhcykgPyBvcHRpb25zID0gYWxpYXMgOiAob3B0aW9ucyA9IG9wdGlvbnMgfHwge30sIFxuICAgICAgICBvcHRpb25zLmFsaWFzID0gYWxpYXMpLCB0aGlzLm9wdHMgPSAkLmV4dGVuZCghMCwge30sIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpLCB0aGlzLm5vTWFza3NDYWNoZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWZpbml0aW9ucyAhPT0gdW5kZWZpbmVkLCBcbiAgICAgICAgdGhpcy51c2VyT3B0aW9ucyA9IG9wdGlvbnMgfHwge30sIHRoaXMuaXNSVEwgPSB0aGlzLm9wdHMubnVtZXJpY0lucHV0LCByZXNvbHZlQWxpYXModGhpcy5vcHRzLmFsaWFzLCBvcHRpb25zLCB0aGlzLm9wdHMpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzb2x2ZUFsaWFzKGFsaWFzU3RyLCBvcHRpb25zLCBvcHRzKSB7XG4gICAgICAgIHZhciBhbGlhc0RlZmluaXRpb24gPSBJbnB1dG1hc2sucHJvdG90eXBlLmFsaWFzZXNbYWxpYXNTdHJdO1xuICAgICAgICByZXR1cm4gYWxpYXNEZWZpbml0aW9uID8gKGFsaWFzRGVmaW5pdGlvbi5hbGlhcyAmJiByZXNvbHZlQWxpYXMoYWxpYXNEZWZpbml0aW9uLmFsaWFzLCB1bmRlZmluZWQsIG9wdHMpLCBcbiAgICAgICAgJC5leHRlbmQoITAsIG9wdHMsIGFsaWFzRGVmaW5pdGlvbiksICQuZXh0ZW5kKCEwLCBvcHRzLCBvcHRpb25zKSwgITApIDogKG51bGwgPT09IG9wdHMubWFzayAmJiAob3B0cy5tYXNrID0gYWxpYXNTdHIpLCBcbiAgICAgICAgITEpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZU1hc2tTZXQob3B0cywgbm9jYWNoZSkge1xuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZU1hc2sobWFzaywgbWV0YWRhdGEsIG9wdHMpIHtcbiAgICAgICAgICAgIHZhciByZWdleE1hc2sgPSAhMTtcbiAgICAgICAgICAgIGlmIChudWxsICE9PSBtYXNrICYmIFwiXCIgIT09IG1hc2sgfHwgKHJlZ2V4TWFzayA9IG51bGwgIT09IG9wdHMucmVnZXgsIHJlZ2V4TWFzayA/IChtYXNrID0gb3B0cy5yZWdleCwgXG4gICAgICAgICAgICBtYXNrID0gbWFzay5yZXBsYWNlKC9eKFxcXikoLiopKFxcJCkkLywgXCIkMlwiKSkgOiAocmVnZXhNYXNrID0gITAsIG1hc2sgPSBcIi4qXCIpKSwgMSA9PT0gbWFzay5sZW5ndGggJiYgITEgPT09IG9wdHMuZ3JlZWR5ICYmIDAgIT09IG9wdHMucmVwZWF0ICYmIChvcHRzLnBsYWNlaG9sZGVyID0gXCJcIiksIFxuICAgICAgICAgICAgb3B0cy5yZXBlYXQgPiAwIHx8IFwiKlwiID09PSBvcHRzLnJlcGVhdCB8fCBcIitcIiA9PT0gb3B0cy5yZXBlYXQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVwZWF0U3RhcnQgPSBcIipcIiA9PT0gb3B0cy5yZXBlYXQgPyAwIDogXCIrXCIgPT09IG9wdHMucmVwZWF0ID8gMSA6IG9wdHMucmVwZWF0O1xuICAgICAgICAgICAgICAgIG1hc2sgPSBvcHRzLmdyb3VwbWFya2VyLnN0YXJ0ICsgbWFzayArIG9wdHMuZ3JvdXBtYXJrZXIuZW5kICsgb3B0cy5xdWFudGlmaWVybWFya2VyLnN0YXJ0ICsgcmVwZWF0U3RhcnQgKyBcIixcIiArIG9wdHMucmVwZWF0ICsgb3B0cy5xdWFudGlmaWVybWFya2VyLmVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBtYXNrc2V0RGVmaW5pdGlvbiwgbWFza2RlZktleSA9IHJlZ2V4TWFzayA/IFwicmVnZXhfXCIgKyBvcHRzLnJlZ2V4IDogb3B0cy5udW1lcmljSW5wdXQgPyBtYXNrLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpIDogbWFzaztcbiAgICAgICAgICAgIHJldHVybiBJbnB1dG1hc2sucHJvdG90eXBlLm1hc2tzQ2FjaGVbbWFza2RlZktleV0gPT09IHVuZGVmaW5lZCB8fCAhMCA9PT0gbm9jYWNoZSA/IChtYXNrc2V0RGVmaW5pdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBtYXNrOiBtYXNrLFxuICAgICAgICAgICAgICAgIG1hc2tUb2tlbjogSW5wdXRtYXNrLnByb3RvdHlwZS5hbmFseXNlTWFzayhtYXNrLCByZWdleE1hc2ssIG9wdHMpLFxuICAgICAgICAgICAgICAgIHZhbGlkUG9zaXRpb25zOiB7fSxcbiAgICAgICAgICAgICAgICBfYnVmZmVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgYnVmZmVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgdGVzdHM6IHt9LFxuICAgICAgICAgICAgICAgIG1ldGFkYXRhOiBtZXRhZGF0YSxcbiAgICAgICAgICAgICAgICBtYXNrTGVuZ3RoOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH0sICEwICE9PSBub2NhY2hlICYmIChJbnB1dG1hc2sucHJvdG90eXBlLm1hc2tzQ2FjaGVbbWFza2RlZktleV0gPSBtYXNrc2V0RGVmaW5pdGlvbiwgXG4gICAgICAgICAgICBtYXNrc2V0RGVmaW5pdGlvbiA9ICQuZXh0ZW5kKCEwLCB7fSwgSW5wdXRtYXNrLnByb3RvdHlwZS5tYXNrc0NhY2hlW21hc2tkZWZLZXldKSkpIDogbWFza3NldERlZmluaXRpb24gPSAkLmV4dGVuZCghMCwge30sIElucHV0bWFzay5wcm90b3R5cGUubWFza3NDYWNoZVttYXNrZGVmS2V5XSksIFxuICAgICAgICAgICAgbWFza3NldERlZmluaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihvcHRzLm1hc2spICYmIChvcHRzLm1hc2sgPSBvcHRzLm1hc2sob3B0cykpLCAkLmlzQXJyYXkob3B0cy5tYXNrKSkge1xuICAgICAgICAgICAgaWYgKG9wdHMubWFzay5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgb3B0cy5rZWVwU3RhdGljID0gbnVsbCA9PT0gb3B0cy5rZWVwU3RhdGljIHx8IG9wdHMua2VlcFN0YXRpYztcbiAgICAgICAgICAgICAgICB2YXIgYWx0TWFzayA9IG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuICQuZWFjaChvcHRzLm51bWVyaWNJbnB1dCA/IG9wdHMubWFzay5yZXZlcnNlKCkgOiBvcHRzLm1hc2ssIGZ1bmN0aW9uKG5keCwgbXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsdE1hc2subGVuZ3RoID4gMSAmJiAoYWx0TWFzayArPSBvcHRzLmdyb3VwbWFya2VyLmVuZCArIG9wdHMuYWx0ZXJuYXRvcm1hcmtlciArIG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQpLCBcbiAgICAgICAgICAgICAgICAgICAgbXNrLm1hc2sgPT09IHVuZGVmaW5lZCB8fCAkLmlzRnVuY3Rpb24obXNrLm1hc2spID8gYWx0TWFzayArPSBtc2sgOiBhbHRNYXNrICs9IG1zay5tYXNrO1xuICAgICAgICAgICAgICAgIH0pLCBhbHRNYXNrICs9IG9wdHMuZ3JvdXBtYXJrZXIuZW5kLCBnZW5lcmF0ZU1hc2soYWx0TWFzaywgb3B0cy5tYXNrLCBvcHRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdHMubWFzayA9IG9wdHMubWFzay5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3B0cy5tYXNrICYmIG9wdHMubWFzay5tYXNrICE9PSB1bmRlZmluZWQgJiYgISQuaXNGdW5jdGlvbihvcHRzLm1hc2subWFzaykgPyBnZW5lcmF0ZU1hc2sob3B0cy5tYXNrLm1hc2ssIG9wdHMubWFzaywgb3B0cykgOiBnZW5lcmF0ZU1hc2sob3B0cy5tYXNrLCBvcHRzLm1hc2ssIG9wdHMpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtYXNrU2NvcGUoYWN0aW9uT2JqLCBtYXNrc2V0LCBvcHRzKSB7XG4gICAgICAgIGZ1bmN0aW9uIGdldE1hc2tUZW1wbGF0ZShiYXNlT25JbnB1dCwgbWluaW1hbFBvcywgaW5jbHVkZU1vZGUpIHtcbiAgICAgICAgICAgIG1pbmltYWxQb3MgPSBtaW5pbWFsUG9zIHx8IDA7XG4gICAgICAgICAgICB2YXIgbmR4SW50bHpyLCB0ZXN0LCB0ZXN0UG9zLCBtYXNrVGVtcGxhdGUgPSBbXSwgcG9zID0gMCwgbHZwID0gZ2V0TGFzdFZhbGlkUG9zaXRpb24oKTtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAhMCA9PT0gYmFzZU9uSW5wdXQgJiYgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc10gPyAodGVzdFBvcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3NdLCBcbiAgICAgICAgICAgICAgICB0ZXN0ID0gdGVzdFBvcy5tYXRjaCwgbmR4SW50bHpyID0gdGVzdFBvcy5sb2NhdG9yLnNsaWNlKCksIG1hc2tUZW1wbGF0ZS5wdXNoKCEwID09PSBpbmNsdWRlTW9kZSA/IHRlc3RQb3MuaW5wdXQgOiAhMSA9PT0gaW5jbHVkZU1vZGUgPyB0ZXN0Lm5hdGl2ZURlZiA6IGdldFBsYWNlaG9sZGVyKHBvcywgdGVzdCkpKSA6ICh0ZXN0UG9zID0gZ2V0VGVzdFRlbXBsYXRlKHBvcywgbmR4SW50bHpyLCBwb3MgLSAxKSwgXG4gICAgICAgICAgICAgICAgdGVzdCA9IHRlc3RQb3MubWF0Y2gsIG5keEludGx6ciA9IHRlc3RQb3MubG9jYXRvci5zbGljZSgpLCAoITEgPT09IG9wdHMuaml0TWFza2luZyB8fCBwb3MgPCBsdnAgfHwgXCJudW1iZXJcIiA9PSB0eXBlb2Ygb3B0cy5qaXRNYXNraW5nICYmIGlzRmluaXRlKG9wdHMuaml0TWFza2luZykgJiYgb3B0cy5qaXRNYXNraW5nID4gcG9zKSAmJiBtYXNrVGVtcGxhdGUucHVzaCghMSA9PT0gaW5jbHVkZU1vZGUgPyB0ZXN0Lm5hdGl2ZURlZiA6IGdldFBsYWNlaG9sZGVyKHBvcywgdGVzdCkpKSwgXG4gICAgICAgICAgICAgICAgcG9zKys7XG4gICAgICAgICAgICB9IHdoaWxlICgobWF4TGVuZ3RoID09PSB1bmRlZmluZWQgfHwgcG9zIDwgbWF4TGVuZ3RoKSAmJiAobnVsbCAhPT0gdGVzdC5mbiB8fCBcIlwiICE9PSB0ZXN0LmRlZikgfHwgbWluaW1hbFBvcyA+IHBvcyk7XG4gICAgICAgICAgICByZXR1cm4gXCJcIiA9PT0gbWFza1RlbXBsYXRlW21hc2tUZW1wbGF0ZS5sZW5ndGggLSAxXSAmJiBtYXNrVGVtcGxhdGUucG9wKCksIGdldE1hc2tTZXQoKS5tYXNrTGVuZ3RoID0gcG9zICsgMSwgXG4gICAgICAgICAgICBtYXNrVGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0TWFza1NldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXNrc2V0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlc2V0TWFza1NldChzb2Z0KSB7XG4gICAgICAgICAgICB2YXIgbWFza3NldCA9IGdldE1hc2tTZXQoKTtcbiAgICAgICAgICAgIG1hc2tzZXQuYnVmZmVyID0gdW5kZWZpbmVkLCAhMCAhPT0gc29mdCAmJiAobWFza3NldC52YWxpZFBvc2l0aW9ucyA9IHt9LCBtYXNrc2V0LnAgPSAwKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRMYXN0VmFsaWRQb3NpdGlvbihjbG9zZXN0VG8sIHN0cmljdCwgdmFsaWRQb3NpdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBiZWZvcmUgPSAtMSwgYWZ0ZXIgPSAtMSwgdmFsaWRzID0gdmFsaWRQb3NpdGlvbnMgfHwgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zO1xuICAgICAgICAgICAgY2xvc2VzdFRvID09PSB1bmRlZmluZWQgJiYgKGNsb3Nlc3RUbyA9IC0xKTtcbiAgICAgICAgICAgIGZvciAodmFyIHBvc05keCBpbiB2YWxpZHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHNOZHggPSBwYXJzZUludChwb3NOZHgpO1xuICAgICAgICAgICAgICAgIHZhbGlkc1twc05keF0gJiYgKHN0cmljdCB8fCAhMCAhPT0gdmFsaWRzW3BzTmR4XS5nZW5lcmF0ZWRJbnB1dCkgJiYgKHBzTmR4IDw9IGNsb3Nlc3RUbyAmJiAoYmVmb3JlID0gcHNOZHgpLCBcbiAgICAgICAgICAgICAgICBwc05keCA+PSBjbG9zZXN0VG8gJiYgKGFmdGVyID0gcHNOZHgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAtMSAhPT0gYmVmb3JlICYmIGNsb3Nlc3RUbyAtIGJlZm9yZSA+IDEgfHwgYWZ0ZXIgPCBjbG9zZXN0VG8gPyBiZWZvcmUgOiBhZnRlcjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzdHJpcFZhbGlkUG9zaXRpb25zKHN0YXJ0LCBlbmQsIG5vY2hlY2ssIHN0cmljdCkge1xuICAgICAgICAgICAgdmFyIGksIHN0YXJ0UG9zID0gc3RhcnQsIHBvc2l0aW9uc0Nsb25lID0gJC5leHRlbmQoITAsIHt9LCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMpLCBuZWVkc1ZhbGlkYXRpb24gPSAhMTtcbiAgICAgICAgICAgIGZvciAoZ2V0TWFza1NldCgpLnAgPSBzdGFydCwgaSA9IGVuZCAtIDE7IGkgPj0gc3RhcnRQb3M7IGktLSkgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldICE9PSB1bmRlZmluZWQgJiYgKCEwICE9PSBub2NoZWNrICYmICghZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldLm1hdGNoLm9wdGlvbmFsaXR5ICYmIGZ1bmN0aW9uKHBvcykge1xuICAgICAgICAgICAgICAgIHZhciBwb3NNYXRjaCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3NdO1xuICAgICAgICAgICAgICAgIGlmIChwb3NNYXRjaCAhPT0gdW5kZWZpbmVkICYmIG51bGwgPT09IHBvc01hdGNoLm1hdGNoLmZuKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2TWF0Y2ggPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zIC0gMV0sIG5leHRNYXRjaCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3MgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXZNYXRjaCAhPT0gdW5kZWZpbmVkICYmIG5leHRNYXRjaCAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICB9KGkpIHx8ICExID09PSBvcHRzLmNhbkNsZWFyUG9zaXRpb24oZ2V0TWFza1NldCgpLCBpLCBnZXRMYXN0VmFsaWRQb3NpdGlvbigpLCBzdHJpY3QsIG9wdHMpKSB8fCBkZWxldGUgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldKTtcbiAgICAgICAgICAgIGZvciAocmVzZXRNYXNrU2V0KCEwKSwgaSA9IHN0YXJ0UG9zICsgMTsgaSA8PSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpOyApIHtcbiAgICAgICAgICAgICAgICBmb3IgKDtnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbc3RhcnRQb3NdICE9PSB1bmRlZmluZWQ7ICkgc3RhcnRQb3MrKztcbiAgICAgICAgICAgICAgICBpZiAoaSA8IHN0YXJ0UG9zICYmIChpID0gc3RhcnRQb3MgKyAxKSwgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldID09PSB1bmRlZmluZWQgJiYgaXNNYXNrKGkpKSBpKys7IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGdldFRlc3RUZW1wbGF0ZShpKTtcbiAgICAgICAgICAgICAgICAgICAgITEgPT09IG5lZWRzVmFsaWRhdGlvbiAmJiBwb3NpdGlvbnNDbG9uZVtzdGFydFBvc10gJiYgcG9zaXRpb25zQ2xvbmVbc3RhcnRQb3NdLm1hdGNoLmRlZiA9PT0gdC5tYXRjaC5kZWYgPyAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3N0YXJ0UG9zXSA9ICQuZXh0ZW5kKCEwLCB7fSwgcG9zaXRpb25zQ2xvbmVbc3RhcnRQb3NdKSwgXG4gICAgICAgICAgICAgICAgICAgIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tzdGFydFBvc10uaW5wdXQgPSB0LmlucHV0LCBkZWxldGUgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldLCBcbiAgICAgICAgICAgICAgICAgICAgaSsrKSA6IHBvc2l0aW9uQ2FuTWF0Y2hEZWZpbml0aW9uKHN0YXJ0UG9zLCB0Lm1hdGNoLmRlZikgPyAhMSAhPT0gaXNWYWxpZChzdGFydFBvcywgdC5pbnB1dCB8fCBnZXRQbGFjZWhvbGRlcihpKSwgITApICYmIChkZWxldGUgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldLCBcbiAgICAgICAgICAgICAgICAgICAgaSsrLCBuZWVkc1ZhbGlkYXRpb24gPSAhMCkgOiBpc01hc2soaSkgfHwgKGkrKywgc3RhcnRQb3MtLSksIHN0YXJ0UG9zKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzZXRNYXNrU2V0KCEwKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBkZXRlcm1pbmVUZXN0VGVtcGxhdGUodGVzdHMsIGd1ZXNzTmV4dEJlc3QpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHRlc3RQb3MsIHRlc3RQb3NpdGlvbnMgPSB0ZXN0cywgbHZwID0gZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSwgbHZUZXN0ID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2x2cF0gfHwgZ2V0VGVzdHMoMClbMF0sIGx2VGVzdEFsdEFyciA9IGx2VGVzdC5hbHRlcm5hdGlvbiAhPT0gdW5kZWZpbmVkID8gbHZUZXN0LmxvY2F0b3JbbHZUZXN0LmFsdGVybmF0aW9uXS50b1N0cmluZygpLnNwbGl0KFwiLFwiKSA6IFtdLCBuZHggPSAwOyBuZHggPCB0ZXN0UG9zaXRpb25zLmxlbmd0aCAmJiAodGVzdFBvcyA9IHRlc3RQb3NpdGlvbnNbbmR4XSwgXG4gICAgICAgICAgICAhKHRlc3RQb3MubWF0Y2ggJiYgKG9wdHMuZ3JlZWR5ICYmICEwICE9PSB0ZXN0UG9zLm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciB8fCAoITEgPT09IHRlc3RQb3MubWF0Y2gub3B0aW9uYWxpdHkgfHwgITEgPT09IHRlc3RQb3MubWF0Y2gubmV3QmxvY2tNYXJrZXIpICYmICEwICE9PSB0ZXN0UG9zLm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllcikgJiYgKGx2VGVzdC5hbHRlcm5hdGlvbiA9PT0gdW5kZWZpbmVkIHx8IGx2VGVzdC5hbHRlcm5hdGlvbiAhPT0gdGVzdFBvcy5hbHRlcm5hdGlvbiB8fCB0ZXN0UG9zLmxvY2F0b3JbbHZUZXN0LmFsdGVybmF0aW9uXSAhPT0gdW5kZWZpbmVkICYmIGNoZWNrQWx0ZXJuYXRpb25NYXRjaCh0ZXN0UG9zLmxvY2F0b3JbbHZUZXN0LmFsdGVybmF0aW9uXS50b1N0cmluZygpLnNwbGl0KFwiLFwiKSwgbHZUZXN0QWx0QXJyKSkpIHx8ICEwID09PSBndWVzc05leHRCZXN0ICYmIChudWxsICE9PSB0ZXN0UG9zLm1hdGNoLmZuIHx8IC9bMC05YS1iQS1aXS8udGVzdCh0ZXN0UG9zLm1hdGNoLmRlZikpKTsgbmR4KyspIDtcbiAgICAgICAgICAgIHJldHVybiB0ZXN0UG9zO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldFRlc3RUZW1wbGF0ZShwb3MsIG5keEludGx6ciwgdHN0UHMpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSB8fCBkZXRlcm1pbmVUZXN0VGVtcGxhdGUoZ2V0VGVzdHMocG9zLCBuZHhJbnRsenIgPyBuZHhJbnRsenIuc2xpY2UoKSA6IG5keEludGx6ciwgdHN0UHMpKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRUZXN0KHBvcykge1xuICAgICAgICAgICAgcmV0dXJuIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3NdID8gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc10gOiBnZXRUZXN0cyhwb3MpWzBdO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHBvc2l0aW9uQ2FuTWF0Y2hEZWZpbml0aW9uKHBvcywgZGVmKSB7XG4gICAgICAgICAgICBmb3IgKHZhciB2YWxpZCA9ICExLCB0ZXN0cyA9IGdldFRlc3RzKHBvcyksIHRuZHggPSAwOyB0bmR4IDwgdGVzdHMubGVuZ3RoOyB0bmR4KyspIGlmICh0ZXN0c1t0bmR4XS5tYXRjaCAmJiB0ZXN0c1t0bmR4XS5tYXRjaC5kZWYgPT09IGRlZikge1xuICAgICAgICAgICAgICAgIHZhbGlkID0gITA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0VGVzdHMocG9zLCBuZHhJbnRsenIsIHRzdFBzKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiByZXNvbHZlVGVzdEZyb21Ub2tlbihtYXNrVG9rZW4sIG5keEluaXRpYWxpemVyLCBsb29wTmR4LCBxdWFudGlmaWVyUmVjdXJzZSkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1hdGNoKG1hdGNoLCBsb29wTmR4LCBxdWFudGlmaWVyUmVjdXJzZSkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBpc0ZpcnN0TWF0Y2gobGF0ZXN0TWF0Y2gsIHRva2VuR3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaXJzdE1hdGNoID0gMCA9PT0gJC5pbkFycmF5KGxhdGVzdE1hdGNoLCB0b2tlbkdyb3VwLm1hdGNoZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpcnN0TWF0Y2ggfHwgJC5lYWNoKHRva2VuR3JvdXAubWF0Y2hlcywgZnVuY3Rpb24obmR4LCBtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gbWF0Y2guaXNRdWFudGlmaWVyICYmIChmaXJzdE1hdGNoID0gaXNGaXJzdE1hdGNoKGxhdGVzdE1hdGNoLCB0b2tlbkdyb3VwLm1hdGNoZXNbbmR4IC0gMV0pKSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIGZpcnN0TWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZU5keEluaXRpYWxpemVyKHBvcywgYWx0ZXJuYXRlTmR4LCB0YXJnZXRBbHRlcm5hdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJlc3RNYXRjaCwgaW5kZXhQb3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3BvcyAtIDFdICYmIHRhcmdldEFsdGVybmF0aW9uICYmIGdldE1hc2tTZXQoKS50ZXN0c1twb3NdKSBmb3IgKHZhciB2cEFsdGVybmF0aW9uID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3BvcyAtIDFdLmxvY2F0b3IsIHRwQWx0ZXJuYXRpb24gPSBnZXRNYXNrU2V0KCkudGVzdHNbcG9zXVswXS5sb2NhdG9yLCBpID0gMDsgaSA8IHRhcmdldEFsdGVybmF0aW9uOyBpKyspIGlmICh2cEFsdGVybmF0aW9uW2ldICE9PSB0cEFsdGVybmF0aW9uW2ldKSByZXR1cm4gdnBBbHRlcm5hdGlvbi5zbGljZSh0YXJnZXRBbHRlcm5hdGlvbiArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChnZXRNYXNrU2V0KCkudGVzdHNbcG9zXSB8fCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSkgJiYgJC5lYWNoKGdldE1hc2tTZXQoKS50ZXN0c1twb3NdIHx8IFsgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc10gXSwgZnVuY3Rpb24obmR4LCBsbW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFsdGVybmF0aW9uID0gdGFyZ2V0QWx0ZXJuYXRpb24gIT09IHVuZGVmaW5lZCA/IHRhcmdldEFsdGVybmF0aW9uIDogbG1udC5hbHRlcm5hdGlvbiwgbmR4UG9zID0gbG1udC5sb2NhdG9yW2FsdGVybmF0aW9uXSAhPT0gdW5kZWZpbmVkID8gbG1udC5sb2NhdG9yW2FsdGVybmF0aW9uXS50b1N0cmluZygpLmluZGV4T2YoYWx0ZXJuYXRlTmR4KSA6IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbmRleFBvcyA9PT0gdW5kZWZpbmVkIHx8IG5keFBvcyA8IGluZGV4UG9zKSAmJiAtMSAhPT0gbmR4UG9zICYmIChiZXN0TWF0Y2ggPSBsbW50LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFBvcyA9IG5keFBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgYmVzdE1hdGNoID8gYmVzdE1hdGNoLmxvY2F0b3Iuc2xpY2UoKHRhcmdldEFsdGVybmF0aW9uICE9PSB1bmRlZmluZWQgPyB0YXJnZXRBbHRlcm5hdGlvbiA6IGJlc3RNYXRjaC5hbHRlcm5hdGlvbikgKyAxKSA6IHRhcmdldEFsdGVybmF0aW9uICE9PSB1bmRlZmluZWQgPyByZXNvbHZlTmR4SW5pdGlhbGl6ZXIocG9zLCBhbHRlcm5hdGVOZHgpIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0UG9zID4gMWU0KSB0aHJvdyBcIklucHV0bWFzazogVGhlcmUgaXMgcHJvYmFibHkgYW4gZXJyb3IgaW4geW91ciBtYXNrIGRlZmluaXRpb24gb3IgaW4gdGhlIGNvZGUuIENyZWF0ZSBhbiBpc3N1ZSBvbiBnaXRodWIgd2l0aCBhbiBleGFtcGxlIG9mIHRoZSBtYXNrIHlvdSBhcmUgdXNpbmcuIFwiICsgZ2V0TWFza1NldCgpLm1hc2s7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0UG9zID09PSBwb3MgJiYgbWF0Y2gubWF0Y2hlcyA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbWF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoOiBtYXRjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0b3I6IGxvb3BOZHgucmV2ZXJzZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2Q6IGNhY2hlRGVwZW5kZW5jeVxuICAgICAgICAgICAgICAgICAgICB9KSwgITA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC5tYXRjaGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC5pc0dyb3VwICYmIHF1YW50aWZpZXJSZWN1cnNlICE9PSBtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCA9IGhhbmRsZU1hdGNoKG1hc2tUb2tlbi5tYXRjaGVzWyQuaW5BcnJheShtYXRjaCwgbWFza1Rva2VuLm1hdGNoZXMpICsgMV0sIGxvb3BOZHgpKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoLmlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW9uYWxUb2tlbiA9IG1hdGNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCA9IHJlc29sdmVUZXN0RnJvbVRva2VuKG1hdGNoLCBuZHhJbml0aWFsaXplciwgbG9vcE5keCwgcXVhbnRpZmllclJlY3Vyc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXRlc3RNYXRjaCA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5tYXRjaCwgIWlzRmlyc3RNYXRjaChsYXRlc3RNYXRjaCwgb3B0aW9uYWxUb2tlbikpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0U3RvcCA9ICEwLCB0ZXN0UG9zID0gcG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWF0Y2guaXNBbHRlcm5hdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hbHRNYXRjaGVzLCBhbHRlcm5hdGVUb2tlbiA9IG1hdGNoLCBtYWx0ZXJuYXRlTWF0Y2hlcyA9IFtdLCBjdXJyZW50TWF0Y2hlcyA9IG1hdGNoZXMuc2xpY2UoKSwgbG9vcE5keENudCA9IGxvb3BOZHgubGVuZ3RoLCBhbHRJbmRleCA9IG5keEluaXRpYWxpemVyLmxlbmd0aCA+IDAgPyBuZHhJbml0aWFsaXplci5zaGlmdCgpIDogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0xID09PSBhbHRJbmRleCB8fCBcInN0cmluZ1wiID09IHR5cGVvZiBhbHRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW1uZHgsIGN1cnJlbnRQb3MgPSB0ZXN0UG9zLCBuZHhJbml0aWFsaXplckNsb25lID0gbmR4SW5pdGlhbGl6ZXIuc2xpY2UoKSwgYWx0SW5kZXhBcnIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGFsdEluZGV4KSBhbHRJbmRleEFyciA9IGFsdEluZGV4LnNwbGl0KFwiLFwiKTsgZWxzZSBmb3IgKGFtbmR4ID0gMDsgYW1uZHggPCBhbHRlcm5hdGVUb2tlbi5tYXRjaGVzLmxlbmd0aDsgYW1uZHgrKykgYWx0SW5kZXhBcnIucHVzaChhbW5keCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG5keCA9IDA7IG5keCA8IGFsdEluZGV4QXJyLmxlbmd0aDsgbmR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbW5keCA9IHBhcnNlSW50KGFsdEluZGV4QXJyW25keF0pLCBtYXRjaGVzID0gW10sIG5keEluaXRpYWxpemVyID0gcmVzb2x2ZU5keEluaXRpYWxpemVyKHRlc3RQb3MsIGFtbmR4LCBsb29wTmR4Q250KSB8fCBuZHhJbml0aWFsaXplckNsb25lLnNsaWNlKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgITAgIT09IChtYXRjaCA9IGhhbmRsZU1hdGNoKGFsdGVybmF0ZVRva2VuLm1hdGNoZXNbYW1uZHhdIHx8IG1hc2tUb2tlbi5tYXRjaGVzW2FtbmR4XSwgWyBhbW5keCBdLmNvbmNhdChsb29wTmR4KSwgcXVhbnRpZmllclJlY3Vyc2UpIHx8IG1hdGNoKSAmJiBtYXRjaCAhPT0gdW5kZWZpbmVkICYmIGFsdEluZGV4QXJyW2FsdEluZGV4QXJyLmxlbmd0aCAtIDFdIDwgYWx0ZXJuYXRlVG9rZW4ubWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbnRuZHggPSAkLmluQXJyYXkobWF0Y2gsIG1hc2tUb2tlbi5tYXRjaGVzKSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza1Rva2VuLm1hdGNoZXMubGVuZ3RoID4gbnRuZHggJiYgKG1hdGNoID0gaGFuZGxlTWF0Y2gobWFza1Rva2VuLm1hdGNoZXNbbnRuZHhdLCBbIG50bmR4IF0uY29uY2F0KGxvb3BOZHguc2xpY2UoMSwgbG9vcE5keC5sZW5ndGgpKSwgcXVhbnRpZmllclJlY3Vyc2UpKSAmJiAoYWx0SW5kZXhBcnIucHVzaChudG5keC50b1N0cmluZygpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKG1hdGNoZXMsIGZ1bmN0aW9uKG5keCwgbG1udCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbW50LmFsdGVybmF0aW9uID0gbG9vcE5keC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbHRNYXRjaGVzID0gbWF0Y2hlcy5zbGljZSgpLCB0ZXN0UG9zID0gY3VycmVudFBvcywgbWF0Y2hlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbmR4MSA9IDA7IG5keDEgPCBtYWx0TWF0Y2hlcy5sZW5ndGg7IG5keDErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbHRNYXRjaCA9IG1hbHRNYXRjaGVzW25keDFdLCBkcm9wTWF0Y2ggPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHRNYXRjaC5hbHRlcm5hdGlvbiA9IGFsdE1hdGNoLmFsdGVybmF0aW9uIHx8IGxvb3BOZHhDbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbmR4MiA9IDA7IG5keDIgPCBtYWx0ZXJuYXRlTWF0Y2hlcy5sZW5ndGg7IG5keDIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWx0TWF0Y2gyID0gbWFsdGVybmF0ZU1hdGNoZXNbbmR4Ml07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiICE9IHR5cGVvZiBhbHRJbmRleCB8fCAtMSAhPT0gJC5pbkFycmF5KGFsdE1hdGNoLmxvY2F0b3JbYWx0TWF0Y2guYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCksIGFsdEluZGV4QXJyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZ1bmN0aW9uKHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5tYXRjaC5uYXRpdmVEZWYgPT09IHRhcmdldC5tYXRjaC5uYXRpdmVEZWYgfHwgc291cmNlLm1hdGNoLmRlZiA9PT0gdGFyZ2V0Lm1hdGNoLm5hdGl2ZURlZiB8fCBzb3VyY2UubWF0Y2gubmF0aXZlRGVmID09PSB0YXJnZXQubWF0Y2guZGVmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfShhbHRNYXRjaCwgYWx0TWF0Y2gyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BNYXRjaCA9ICEwLCBhbHRNYXRjaC5hbHRlcm5hdGlvbiA9PT0gYWx0TWF0Y2gyLmFsdGVybmF0aW9uICYmIC0xID09PSBhbHRNYXRjaDIubG9jYXRvclthbHRNYXRjaDIuYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuaW5kZXhPZihhbHRNYXRjaC5sb2NhdG9yW2FsdE1hdGNoLmFsdGVybmF0aW9uXSkgJiYgKGFsdE1hdGNoMi5sb2NhdG9yW2FsdE1hdGNoMi5hbHRlcm5hdGlvbl0gPSBhbHRNYXRjaDIubG9jYXRvclthbHRNYXRjaDIuYWx0ZXJuYXRpb25dICsgXCIsXCIgKyBhbHRNYXRjaC5sb2NhdG9yW2FsdE1hdGNoLmFsdGVybmF0aW9uXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0TWF0Y2gyLmFsdGVybmF0aW9uID0gYWx0TWF0Y2guYWx0ZXJuYXRpb24pLCBhbHRNYXRjaC5tYXRjaC5uYXRpdmVEZWYgPT09IGFsdE1hdGNoMi5tYXRjaC5kZWYgJiYgKGFsdE1hdGNoLmxvY2F0b3JbYWx0TWF0Y2guYWx0ZXJuYXRpb25dID0gYWx0TWF0Y2gyLmxvY2F0b3JbYWx0TWF0Y2gyLmFsdGVybmF0aW9uXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFsdGVybmF0ZU1hdGNoZXMuc3BsaWNlKG1hbHRlcm5hdGVNYXRjaGVzLmluZGV4T2YoYWx0TWF0Y2gyKSwgMSwgYWx0TWF0Y2gpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbHRNYXRjaC5tYXRjaC5kZWYgPT09IGFsdE1hdGNoMi5tYXRjaC5kZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wTWF0Y2ggPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmdW5jdGlvbihzb3VyY2UsIHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsID09PSBzb3VyY2UubWF0Y2guZm4gJiYgbnVsbCAhPT0gdGFyZ2V0Lm1hdGNoLmZuICYmIHRhcmdldC5tYXRjaC5mbi50ZXN0KHNvdXJjZS5tYXRjaC5kZWYsIGdldE1hc2tTZXQoKSwgcG9zLCAhMSwgb3B0cywgITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfShhbHRNYXRjaCwgYWx0TWF0Y2gyKSB8fCBmdW5jdGlvbihzb3VyY2UsIHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsICE9PSBzb3VyY2UubWF0Y2guZm4gJiYgbnVsbCAhPT0gdGFyZ2V0Lm1hdGNoLmZuICYmIHRhcmdldC5tYXRjaC5mbi50ZXN0KHNvdXJjZS5tYXRjaC5kZWYucmVwbGFjZSgvW1xcW1xcXV0vZywgXCJcIiksIGdldE1hc2tTZXQoKSwgcG9zLCAhMSwgb3B0cywgITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfShhbHRNYXRjaCwgYWx0TWF0Y2gyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdE1hdGNoLmFsdGVybmF0aW9uID09PSBhbHRNYXRjaDIuYWx0ZXJuYXRpb24gJiYgLTEgPT09IGFsdE1hdGNoLmxvY2F0b3JbYWx0TWF0Y2guYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuaW5kZXhPZihhbHRNYXRjaDIubG9jYXRvclthbHRNYXRjaDIuYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuc3BsaXQoXCJcIilbMF0pICYmIChhbHRNYXRjaC5uYSA9IGFsdE1hdGNoLm5hIHx8IGFsdE1hdGNoLmxvY2F0b3JbYWx0TWF0Y2guYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0xID09PSBhbHRNYXRjaC5uYS5pbmRleE9mKGFsdE1hdGNoLmxvY2F0b3JbYWx0TWF0Y2guYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuc3BsaXQoXCJcIilbMF0pICYmIChhbHRNYXRjaC5uYSA9IGFsdE1hdGNoLm5hICsgXCIsXCIgKyBhbHRNYXRjaC5sb2NhdG9yW2FsdE1hdGNoMi5hbHRlcm5hdGlvbl0udG9TdHJpbmcoKS5zcGxpdChcIlwiKVswXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BNYXRjaCA9ICEwLCBhbHRNYXRjaC5sb2NhdG9yW2FsdE1hdGNoLmFsdGVybmF0aW9uXSA9IGFsdE1hdGNoMi5sb2NhdG9yW2FsdE1hdGNoMi5hbHRlcm5hdGlvbl0udG9TdHJpbmcoKS5zcGxpdChcIlwiKVswXSArIFwiLFwiICsgYWx0TWF0Y2gubG9jYXRvclthbHRNYXRjaC5hbHRlcm5hdGlvbl0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbHRlcm5hdGVNYXRjaGVzLnNwbGljZShtYWx0ZXJuYXRlTWF0Y2hlcy5pbmRleE9mKGFsdE1hdGNoMiksIDAsIGFsdE1hdGNoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcE1hdGNoIHx8IG1hbHRlcm5hdGVNYXRjaGVzLnB1c2goYWx0TWF0Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RyaW5nXCIgPT0gdHlwZW9mIGFsdEluZGV4ICYmIChtYWx0ZXJuYXRlTWF0Y2hlcyA9ICQubWFwKG1hbHRlcm5hdGVNYXRjaGVzLCBmdW5jdGlvbihsbW50LCBuZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0Zpbml0ZShuZHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFsdGVybmF0aW9uID0gbG1udC5hbHRlcm5hdGlvbiwgYWx0TG9jQXJyID0gbG1udC5sb2NhdG9yW2FsdGVybmF0aW9uXS50b1N0cmluZygpLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbW50LmxvY2F0b3JbYWx0ZXJuYXRpb25dID0gdW5kZWZpbmVkLCBsbW50LmFsdGVybmF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGFsbmR4ID0gMDsgYWxuZHggPCBhbHRMb2NBcnIubGVuZ3RoOyBhbG5keCsrKSAtMSAhPT0gJC5pbkFycmF5KGFsdExvY0FyclthbG5keF0sIGFsdEluZGV4QXJyKSAmJiAobG1udC5sb2NhdG9yW2FsdGVybmF0aW9uXSAhPT0gdW5kZWZpbmVkID8gKGxtbnQubG9jYXRvclthbHRlcm5hdGlvbl0gKz0gXCIsXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxtbnQubG9jYXRvclthbHRlcm5hdGlvbl0gKz0gYWx0TG9jQXJyW2FsbmR4XSkgOiBsbW50LmxvY2F0b3JbYWx0ZXJuYXRpb25dID0gcGFyc2VJbnQoYWx0TG9jQXJyW2FsbmR4XSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxtbnQuYWx0ZXJuYXRpb24gPSBhbHRlcm5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxtbnQubG9jYXRvclthbHRlcm5hdGlvbl0gIT09IHVuZGVmaW5lZCkgcmV0dXJuIGxtbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgbWF0Y2hlcyA9IGN1cnJlbnRNYXRjaGVzLmNvbmNhdChtYWx0ZXJuYXRlTWF0Y2hlcyksIHRlc3RQb3MgPSBwb3MsIGluc2VydFN0b3AgPSBtYXRjaGVzLmxlbmd0aCA+IDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IG1hbHRlcm5hdGVNYXRjaGVzLmxlbmd0aCA+IDAsIG5keEluaXRpYWxpemVyID0gbmR4SW5pdGlhbGl6ZXJDbG9uZS5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBtYXRjaCA9IGhhbmRsZU1hdGNoKGFsdGVybmF0ZVRva2VuLm1hdGNoZXNbYWx0SW5kZXhdIHx8IG1hc2tUb2tlbi5tYXRjaGVzW2FsdEluZGV4XSwgWyBhbHRJbmRleCBdLmNvbmNhdChsb29wTmR4KSwgcXVhbnRpZmllclJlY3Vyc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaC5pc1F1YW50aWZpZXIgJiYgcXVhbnRpZmllclJlY3Vyc2UgIT09IG1hc2tUb2tlbi5tYXRjaGVzWyQuaW5BcnJheShtYXRjaCwgbWFza1Rva2VuLm1hdGNoZXMpIC0gMV0pIGZvciAodmFyIHF0ID0gbWF0Y2gsIHFuZHggPSBuZHhJbml0aWFsaXplci5sZW5ndGggPiAwID8gbmR4SW5pdGlhbGl6ZXIuc2hpZnQoKSA6IDA7IHFuZHggPCAoaXNOYU4ocXQucXVhbnRpZmllci5tYXgpID8gcW5keCArIDEgOiBxdC5xdWFudGlmaWVyLm1heCkgJiYgdGVzdFBvcyA8PSBwb3M7IHFuZHgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbkdyb3VwID0gbWFza1Rva2VuLm1hdGNoZXNbJC5pbkFycmF5KHF0LCBtYXNrVG9rZW4ubWF0Y2hlcykgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggPSBoYW5kbGVNYXRjaCh0b2tlbkdyb3VwLCBbIHFuZHggXS5jb25jYXQobG9vcE5keCksIHRva2VuR3JvdXApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXRlc3RNYXRjaCA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5tYXRjaCwgbGF0ZXN0TWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyID0gcW5keCA+IHF0LnF1YW50aWZpZXIubWluIC0gMSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRmlyc3RNYXRjaChsYXRlc3RNYXRjaCwgdG9rZW5Hcm91cCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxbmR4ID4gcXQucXVhbnRpZmllci5taW4gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0U3RvcCA9ICEwLCB0ZXN0UG9zID0gcG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoID0gcmVzb2x2ZVRlc3RGcm9tVG9rZW4obWF0Y2gsIG5keEluaXRpYWxpemVyLCBsb29wTmR4LCBxdWFudGlmaWVyUmVjdXJzZSkpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHRlc3RQb3MrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdG5keCA9IG5keEluaXRpYWxpemVyLmxlbmd0aCA+IDAgPyBuZHhJbml0aWFsaXplci5zaGlmdCgpIDogMDsgdG5keCA8IG1hc2tUb2tlbi5tYXRjaGVzLmxlbmd0aDsgdG5keCsrKSBpZiAoITAgIT09IG1hc2tUb2tlbi5tYXRjaGVzW3RuZHhdLmlzUXVhbnRpZmllcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBoYW5kbGVNYXRjaChtYXNrVG9rZW4ubWF0Y2hlc1t0bmR4XSwgWyB0bmR4IF0uY29uY2F0KGxvb3BOZHgpLCBxdWFudGlmaWVyUmVjdXJzZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCAmJiB0ZXN0UG9zID09PSBwb3MpIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3RQb3MgPiBwb3MpIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGZpbHRlclRlc3RzKHRlc3RzKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdHMua2VlcFN0YXRpYyAmJiBwb3MgPiAwICYmIHRlc3RzLmxlbmd0aCA+IDEgKyAoXCJcIiA9PT0gdGVzdHNbdGVzdHMubGVuZ3RoIC0gMV0ubWF0Y2guZGVmID8gMSA6IDApICYmICEwICE9PSB0ZXN0c1swXS5tYXRjaC5vcHRpb25hbGl0eSAmJiAhMCAhPT0gdGVzdHNbMF0ubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyICYmIG51bGwgPT09IHRlc3RzWzBdLm1hdGNoLmZuICYmICEvWzAtOWEtYkEtWl0vLnRlc3QodGVzdHNbMF0ubWF0Y2guZGVmKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3BvcyAtIDFdID09PSB1bmRlZmluZWQpIHJldHVybiBbIGRldGVybWluZVRlc3RUZW1wbGF0ZSh0ZXN0cykgXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3MgLSAxXS5hbHRlcm5hdGlvbiA9PT0gdGVzdHNbMF0uYWx0ZXJuYXRpb24pIHJldHVybiBbIGRldGVybWluZVRlc3RUZW1wbGF0ZSh0ZXN0cykgXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3MgLSAxXSkgcmV0dXJuIFsgZGV0ZXJtaW5lVGVzdFRlbXBsYXRlKHRlc3RzKSBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGVzdHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbGF0ZXN0TWF0Y2gsIG1hc2tUb2tlbnMgPSBnZXRNYXNrU2V0KCkubWFza1Rva2VuLCB0ZXN0UG9zID0gbmR4SW50bHpyID8gdHN0UHMgOiAwLCBuZHhJbml0aWFsaXplciA9IG5keEludGx6ciA/IG5keEludGx6ci5zbGljZSgpIDogWyAwIF0sIG1hdGNoZXMgPSBbXSwgaW5zZXJ0U3RvcCA9ICExLCBjYWNoZURlcGVuZGVuY3kgPSBuZHhJbnRsenIgPyBuZHhJbnRsenIuam9pbihcIlwiKSA6IFwiXCI7XG4gICAgICAgICAgICBpZiAocG9zID4gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAobmR4SW50bHpyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdGVzdCwgcHJldmlvdXNQb3MgPSBwb3MgLSAxOyAodGVzdCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twcmV2aW91c1Bvc10gfHwgZ2V0TWFza1NldCgpLnRlc3RzW3ByZXZpb3VzUG9zXSkgPT09IHVuZGVmaW5lZCAmJiBwcmV2aW91c1BvcyA+IC0xOyApIHByZXZpb3VzUG9zLS07XG4gICAgICAgICAgICAgICAgICAgIHRlc3QgIT09IHVuZGVmaW5lZCAmJiBwcmV2aW91c1BvcyA+IC0xICYmIChuZHhJbml0aWFsaXplciA9IGZ1bmN0aW9uKHRlc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYXRvciA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQuaXNBcnJheSh0ZXN0cykgfHwgKHRlc3RzID0gWyB0ZXN0cyBdKSwgdGVzdHMubGVuZ3RoID4gMCAmJiAodGVzdHNbMF0uYWx0ZXJuYXRpb24gPT09IHVuZGVmaW5lZCA/IChsb2NhdG9yID0gZGV0ZXJtaW5lVGVzdFRlbXBsYXRlKHRlc3RzLnNsaWNlKCkpLmxvY2F0b3Iuc2xpY2UoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAwID09PSBsb2NhdG9yLmxlbmd0aCAmJiAobG9jYXRvciA9IHRlc3RzWzBdLmxvY2F0b3Iuc2xpY2UoKSkpIDogJC5lYWNoKHRlc3RzLCBmdW5jdGlvbihuZHgsIHRzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIlwiICE9PSB0c3QuZGVmKSBpZiAoMCA9PT0gbG9jYXRvci5sZW5ndGgpIGxvY2F0b3IgPSB0c3QubG9jYXRvci5zbGljZSgpOyBlbHNlIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYXRvci5sZW5ndGg7IGkrKykgdHN0LmxvY2F0b3JbaV0gJiYgLTEgPT09IGxvY2F0b3JbaV0udG9TdHJpbmcoKS5pbmRleE9mKHRzdC5sb2NhdG9yW2ldKSAmJiAobG9jYXRvcltpXSArPSBcIixcIiArIHRzdC5sb2NhdG9yW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgbG9jYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgfSh0ZXN0KSwgY2FjaGVEZXBlbmRlbmN5ID0gbmR4SW5pdGlhbGl6ZXIuam9pbihcIlwiKSwgdGVzdFBvcyA9IHByZXZpb3VzUG9zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGdldE1hc2tTZXQoKS50ZXN0c1twb3NdICYmIGdldE1hc2tTZXQoKS50ZXN0c1twb3NdWzBdLmNkID09PSBjYWNoZURlcGVuZGVuY3kpIHJldHVybiBmaWx0ZXJUZXN0cyhnZXRNYXNrU2V0KCkudGVzdHNbcG9zXSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbXRuZHggPSBuZHhJbml0aWFsaXplci5zaGlmdCgpOyBtdG5keCA8IG1hc2tUb2tlbnMubGVuZ3RoOyBtdG5keCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNvbHZlVGVzdEZyb21Ub2tlbihtYXNrVG9rZW5zW210bmR4XSwgbmR4SW5pdGlhbGl6ZXIsIFsgbXRuZHggXSkgJiYgdGVzdFBvcyA9PT0gcG9zIHx8IHRlc3RQb3MgPiBwb3MpIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoMCA9PT0gbWF0Y2hlcy5sZW5ndGggfHwgaW5zZXJ0U3RvcCkgJiYgbWF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBtYXRjaDoge1xuICAgICAgICAgICAgICAgICAgICBmbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDAsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiAhMCxcbiAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBkZWY6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsb2NhdG9yOiBbXSxcbiAgICAgICAgICAgICAgICBjZDogY2FjaGVEZXBlbmRlbmN5XG4gICAgICAgICAgICB9KSwgbmR4SW50bHpyICE9PSB1bmRlZmluZWQgJiYgZ2V0TWFza1NldCgpLnRlc3RzW3Bvc10gPyBmaWx0ZXJUZXN0cygkLmV4dGVuZCghMCwgW10sIG1hdGNoZXMpKSA6IChnZXRNYXNrU2V0KCkudGVzdHNbcG9zXSA9ICQuZXh0ZW5kKCEwLCBbXSwgbWF0Y2hlcyksIFxuICAgICAgICAgICAgZmlsdGVyVGVzdHMoZ2V0TWFza1NldCgpLnRlc3RzW3Bvc10pKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRCdWZmZXJUZW1wbGF0ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRNYXNrU2V0KCkuX2J1ZmZlciA9PT0gdW5kZWZpbmVkICYmIChnZXRNYXNrU2V0KCkuX2J1ZmZlciA9IGdldE1hc2tUZW1wbGF0ZSghMSwgMSksIFxuICAgICAgICAgICAgZ2V0TWFza1NldCgpLmJ1ZmZlciA9PT0gdW5kZWZpbmVkICYmIChnZXRNYXNrU2V0KCkuYnVmZmVyID0gZ2V0TWFza1NldCgpLl9idWZmZXIuc2xpY2UoKSkpLCBcbiAgICAgICAgICAgIGdldE1hc2tTZXQoKS5fYnVmZmVyO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldEJ1ZmZlcihub0NhY2hlKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0TWFza1NldCgpLmJ1ZmZlciAhPT0gdW5kZWZpbmVkICYmICEwICE9PSBub0NhY2hlIHx8IChnZXRNYXNrU2V0KCkuYnVmZmVyID0gZ2V0TWFza1RlbXBsYXRlKCEwLCBnZXRMYXN0VmFsaWRQb3NpdGlvbigpLCAhMCkpLCBcbiAgICAgICAgICAgIGdldE1hc2tTZXQoKS5idWZmZXI7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVmcmVzaEZyb21CdWZmZXIoc3RhcnQsIGVuZCwgYnVmZmVyKSB7XG4gICAgICAgICAgICB2YXIgaSwgcDtcbiAgICAgICAgICAgIGlmICghMCA9PT0gc3RhcnQpIHJlc2V0TWFza1NldCgpLCBzdGFydCA9IDAsIGVuZCA9IGJ1ZmZlci5sZW5ndGg7IGVsc2UgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykgZGVsZXRlIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tpXTtcbiAgICAgICAgICAgIGZvciAocCA9IHN0YXJ0LCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykgaWYgKHJlc2V0TWFza1NldCghMCksIGJ1ZmZlcltpXSAhPT0gb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbFJlc3VsdCA9IGlzVmFsaWQocCwgYnVmZmVyW2ldLCAhMCwgITApO1xuICAgICAgICAgICAgICAgICExICE9PSB2YWxSZXN1bHQgJiYgKHJlc2V0TWFza1NldCghMCksIHAgPSB2YWxSZXN1bHQuY2FyZXQgIT09IHVuZGVmaW5lZCA/IHZhbFJlc3VsdC5jYXJldCA6IHZhbFJlc3VsdC5wb3MgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjYXNpbmcoZWxlbSwgdGVzdCwgcG9zKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG9wdHMuY2FzaW5nIHx8IHRlc3QuY2FzaW5nKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJ1cHBlclwiOlxuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSBcImxvd2VyXCI6XG4gICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIFwidGl0bGVcIjpcbiAgICAgICAgICAgICAgICB2YXIgcG9zQmVmb3JlID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3BvcyAtIDFdO1xuICAgICAgICAgICAgICAgIGVsZW0gPSAwID09PSBwb3MgfHwgcG9zQmVmb3JlICYmIHBvc0JlZm9yZS5pbnB1dCA9PT0gU3RyaW5nLmZyb21DaGFyQ29kZShJbnB1dG1hc2sua2V5Q29kZS5TUEFDRSkgPyBlbGVtLnRvVXBwZXJDYXNlKCkgOiBlbGVtLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKG9wdHMuY2FzaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaChnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMpLCBlbGVtID0gb3B0cy5jYXNpbmcuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tBbHRlcm5hdGlvbk1hdGNoKGFsdEFycjEsIGFsdEFycjIsIG5hKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuYU5keCwgYWx0QXJyQyA9IG9wdHMuZ3JlZWR5ID8gYWx0QXJyMiA6IGFsdEFycjIuc2xpY2UoMCwgMSksIGlzTWF0Y2ggPSAhMSwgbmFBcnIgPSBuYSAhPT0gdW5kZWZpbmVkID8gbmEuc3BsaXQoXCIsXCIpIDogW10sIGkgPSAwOyBpIDwgbmFBcnIubGVuZ3RoOyBpKyspIC0xICE9PSAobmFOZHggPSBhbHRBcnIxLmluZGV4T2YobmFBcnJbaV0pKSAmJiBhbHRBcnIxLnNwbGljZShuYU5keCwgMSk7XG4gICAgICAgICAgICBmb3IgKHZhciBhbG5keCA9IDA7IGFsbmR4IDwgYWx0QXJyMS5sZW5ndGg7IGFsbmR4KyspIGlmICgtMSAhPT0gJC5pbkFycmF5KGFsdEFycjFbYWxuZHhdLCBhbHRBcnJDKSkge1xuICAgICAgICAgICAgICAgIGlzTWF0Y2ggPSAhMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpc01hdGNoO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzVmFsaWQocG9zLCBjLCBzdHJpY3QsIGZyb21TZXRWYWxpZCwgZnJvbUFsdGVybmF0ZSwgdmFsaWRhdGVPbmx5KSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBpc1NlbGVjdGlvbihwb3NPYmopIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0aW9uID0gaXNSVEwgPyBwb3NPYmouYmVnaW4gLSBwb3NPYmouZW5kID4gMSB8fCBwb3NPYmouYmVnaW4gLSBwb3NPYmouZW5kID09IDEgOiBwb3NPYmouZW5kIC0gcG9zT2JqLmJlZ2luID4gMSB8fCBwb3NPYmouZW5kIC0gcG9zT2JqLmJlZ2luID09IDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGlvbiAmJiAwID09PSBwb3NPYmouYmVnaW4gJiYgcG9zT2JqLmVuZCA9PT0gZ2V0TWFza1NldCgpLm1hc2tMZW5ndGggPyBcImZ1bGxcIiA6IHNlbGVjdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9pc1ZhbGlkKHBvc2l0aW9uLCBjLCBzdHJpY3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgcnNsdCA9ICExO1xuICAgICAgICAgICAgICAgIHJldHVybiAkLmVhY2goZ2V0VGVzdHMocG9zaXRpb24pLCBmdW5jdGlvbihuZHgsIHRzdCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0ZXN0ID0gdHN0Lm1hdGNoLCBsb29wZW5kID0gYyA/IDEgOiAwLCBjaHJzID0gXCJcIiwgaSA9IHRlc3QuY2FyZGluYWxpdHk7IGkgPiBsb29wZW5kOyBpLS0pIGNocnMgKz0gZ2V0QnVmZmVyRWxlbWVudChwb3NpdGlvbiAtIChpIC0gMSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYyAmJiAoY2hycyArPSBjKSwgZ2V0QnVmZmVyKCEwKSwgITEgIT09IChyc2x0ID0gbnVsbCAhPSB0ZXN0LmZuID8gdGVzdC5mbi50ZXN0KGNocnMsIGdldE1hc2tTZXQoKSwgcG9zaXRpb24sIHN0cmljdCwgb3B0cywgaXNTZWxlY3Rpb24ocG9zKSkgOiAoYyA9PT0gdGVzdC5kZWYgfHwgYyA9PT0gb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyKSAmJiBcIlwiICE9PSB0ZXN0LmRlZiAmJiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjOiBnZXRQbGFjZWhvbGRlcihwb3NpdGlvbiwgdGVzdCwgITApIHx8IHRlc3QuZGVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW0gPSByc2x0LmMgIT09IHVuZGVmaW5lZCA/IHJzbHQuYyA6IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtID0gZWxlbSA9PT0gb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyICYmIG51bGwgPT09IHRlc3QuZm4gPyBnZXRQbGFjZWhvbGRlcihwb3NpdGlvbiwgdGVzdCwgITApIHx8IHRlc3QuZGVmIDogZWxlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZGF0ZWRQb3MgPSBwb3NpdGlvbiwgcG9zc2libGVNb2RpZmllZEJ1ZmZlciA9IGdldEJ1ZmZlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJzbHQucmVtb3ZlICE9PSB1bmRlZmluZWQgJiYgKCQuaXNBcnJheShyc2x0LnJlbW92ZSkgfHwgKHJzbHQucmVtb3ZlID0gWyByc2x0LnJlbW92ZSBdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmVhY2gocnNsdC5yZW1vdmUuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIgLSBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIGZ1bmN0aW9uKG5keCwgbG1udCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwVmFsaWRQb3NpdGlvbnMobG1udCwgbG1udCArIDEsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgcnNsdC5pbnNlcnQgIT09IHVuZGVmaW5lZCAmJiAoJC5pc0FycmF5KHJzbHQuaW5zZXJ0KSB8fCAocnNsdC5pbnNlcnQgPSBbIHJzbHQuaW5zZXJ0IF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICQuZWFjaChyc2x0Lmluc2VydC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgZnVuY3Rpb24obmR4LCBsbW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZChsbW50LnBvcywgbG1udC5jLCAhMCwgZnJvbVNldFZhbGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgcnNsdC5yZWZyZXNoRnJvbUJ1ZmZlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWZyZXNoID0gcnNsdC5yZWZyZXNoRnJvbUJ1ZmZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVmcmVzaEZyb21CdWZmZXIoITAgPT09IHJlZnJlc2ggPyByZWZyZXNoIDogcmVmcmVzaC5zdGFydCwgcmVmcmVzaC5lbmQsIHBvc3NpYmxlTW9kaWZpZWRCdWZmZXIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByc2x0LnBvcyA9PT0gdW5kZWZpbmVkICYmIHJzbHQuYyA9PT0gdW5kZWZpbmVkKSByZXR1cm4gcnNsdC5wb3MgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHZhbGlkYXRlZFBvcyA9IHJzbHQucG9zICE9PSB1bmRlZmluZWQgPyByc2x0LnBvcyA6IHBvc2l0aW9uKSAhPT0gcG9zaXRpb24pIHJldHVybiByc2x0ID0gJC5leHRlbmQocnNsdCwgaXNWYWxpZCh2YWxpZGF0ZWRQb3MsIGVsZW0sICEwLCBmcm9tU2V0VmFsaWQpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCEwICE9PSByc2x0ICYmIHJzbHQucG9zICE9PSB1bmRlZmluZWQgJiYgcnNsdC5wb3MgIT09IHBvc2l0aW9uICYmICh2YWxpZGF0ZWRQb3MgPSByc2x0LnBvcywgXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlcihwb3NpdGlvbiwgdmFsaWRhdGVkUG9zLCBnZXRCdWZmZXIoKS5zbGljZSgpKSwgdmFsaWRhdGVkUG9zICE9PSBwb3NpdGlvbikpIHJldHVybiByc2x0ID0gJC5leHRlbmQocnNsdCwgaXNWYWxpZCh2YWxpZGF0ZWRQb3MsIGVsZW0sICEwKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgITE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCEwID09PSByc2x0IHx8IHJzbHQucG9zICE9PSB1bmRlZmluZWQgfHwgcnNsdC5jICE9PSB1bmRlZmluZWQpICYmIChuZHggPiAwICYmIHJlc2V0TWFza1NldCghMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsaWRQb3NpdGlvbih2YWxpZGF0ZWRQb3MsICQuZXh0ZW5kKHt9LCB0c3QsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogY2FzaW5nKGVsZW0sIHRlc3QsIHZhbGlkYXRlZFBvcylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBmcm9tU2V0VmFsaWQsIGlzU2VsZWN0aW9uKHBvcykpIHx8IChyc2x0ID0gITEpLCAhMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSwgcnNsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldFZhbGlkUG9zaXRpb24ocG9zLCB2YWxpZFRlc3QsIGZyb21TZXRWYWxpZCwgaXNTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNTZWxlY3Rpb24gfHwgb3B0cy5pbnNlcnRNb2RlICYmIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3NdICE9PSB1bmRlZmluZWQgJiYgZnJvbVNldFZhbGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGksIHBvc2l0aW9uc0Nsb25lID0gJC5leHRlbmQoITAsIHt9LCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMpLCBsdnAgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbih1bmRlZmluZWQsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gcG9zOyBpIDw9IGx2cDsgaSsrKSBkZWxldGUgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgICBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSA9ICQuZXh0ZW5kKCEwLCB7fSwgdmFsaWRUZXN0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGosIHZhbGlkID0gITAsIHZwcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9ucywgbmVlZHNWYWxpZGF0aW9uID0gITEsIGluaXRpYWxMZW5ndGggPSBnZXRNYXNrU2V0KCkubWFza0xlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gaiA9IHBvczsgaSA8PSBsdnA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBwb3NpdGlvbnNDbG9uZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ICE9PSB1bmRlZmluZWQpIGZvciAodmFyIHBvc01hdGNoID0gajsgcG9zTWF0Y2ggPCBnZXRNYXNrU2V0KCkubWFza0xlbmd0aCAmJiAobnVsbCA9PT0gdC5tYXRjaC5mbiAmJiB2cHNbaV0gJiYgKCEwID09PSB2cHNbaV0ubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyIHx8ICEwID09PSB2cHNbaV0ubWF0Y2gub3B0aW9uYWxpdHkpIHx8IG51bGwgIT0gdC5tYXRjaC5mbik7ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3NNYXRjaCsrLCAhMSA9PT0gbmVlZHNWYWxpZGF0aW9uICYmIHBvc2l0aW9uc0Nsb25lW3Bvc01hdGNoXSAmJiBwb3NpdGlvbnNDbG9uZVtwb3NNYXRjaF0ubWF0Y2guZGVmID09PSB0Lm1hdGNoLmRlZikgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc01hdGNoXSA9ICQuZXh0ZW5kKCEwLCB7fSwgcG9zaXRpb25zQ2xvbmVbcG9zTWF0Y2hdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc01hdGNoXS5pbnB1dCA9IHQuaW5wdXQsIGZpbGxNaXNzaW5nTm9uTWFzayhwb3NNYXRjaCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGogPSBwb3NNYXRjaCwgdmFsaWQgPSAhMDsgZWxzZSBpZiAocG9zaXRpb25DYW5NYXRjaERlZmluaXRpb24ocG9zTWF0Y2gsIHQubWF0Y2guZGVmKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXNWYWxpZChwb3NNYXRjaCwgdC5pbnB1dCwgITAsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSAhMSAhPT0gcmVzdWx0LCBqID0gcmVzdWx0LmNhcmV0IHx8IHJlc3VsdC5pbnNlcnQgPyBnZXRMYXN0VmFsaWRQb3NpdGlvbigpIDogcG9zTWF0Y2gsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWVkc1ZhbGlkYXRpb24gPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCEodmFsaWQgPSAhMCA9PT0gdC5nZW5lcmF0ZWRJbnB1dCkgJiYgcG9zTWF0Y2ggPj0gZ2V0TWFza1NldCgpLm1hc2tMZW5ndGggLSAxKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0TWFza1NldCgpLm1hc2tMZW5ndGggPCBpbml0aWFsTGVuZ3RoICYmIChnZXRNYXNrU2V0KCkubWFza0xlbmd0aCA9IGluaXRpYWxMZW5ndGgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkKSByZXR1cm4gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zID0gJC5leHRlbmQoITAsIHt9LCBwb3NpdGlvbnNDbG9uZSksIFxuICAgICAgICAgICAgICAgICAgICByZXNldE1hc2tTZXQoITApLCAhMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc10gPSAkLmV4dGVuZCghMCwge30sIHZhbGlkVGVzdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc2V0TWFza1NldCghMCksICEwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gZmlsbE1pc3NpbmdOb25NYXNrKG1hc2tQb3MpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwbmR4ID0gbWFza1BvcyAtIDE7IHBuZHggPiAtMSAmJiAhZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3BuZHhdOyBwbmR4LS0pIDtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdFRlbXBsYXRlLCB0ZXN0c0Zyb21Qb3M7XG4gICAgICAgICAgICAgICAgZm9yIChwbmR4Kys7IHBuZHggPCBtYXNrUG9zOyBwbmR4KyspIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twbmR4XSA9PT0gdW5kZWZpbmVkICYmICghMSA9PT0gb3B0cy5qaXRNYXNraW5nIHx8IG9wdHMuaml0TWFza2luZyA+IHBuZHgpICYmICh0ZXN0c0Zyb21Qb3MgPSBnZXRUZXN0cyhwbmR4LCBnZXRUZXN0VGVtcGxhdGUocG5keCAtIDEpLmxvY2F0b3IsIHBuZHggLSAxKS5zbGljZSgpLCBcbiAgICAgICAgICAgICAgICBcIlwiID09PSB0ZXN0c0Zyb21Qb3NbdGVzdHNGcm9tUG9zLmxlbmd0aCAtIDFdLm1hdGNoLmRlZiAmJiB0ZXN0c0Zyb21Qb3MucG9wKCksICh0ZXN0VGVtcGxhdGUgPSBkZXRlcm1pbmVUZXN0VGVtcGxhdGUodGVzdHNGcm9tUG9zKSkgJiYgKHRlc3RUZW1wbGF0ZS5tYXRjaC5kZWYgPT09IG9wdHMucmFkaXhQb2ludERlZmluaXRpb25TeW1ib2wgfHwgIWlzTWFzayhwbmR4LCAhMCkgfHwgJC5pbkFycmF5KG9wdHMucmFkaXhQb2ludCwgZ2V0QnVmZmVyKCkpIDwgcG5keCAmJiB0ZXN0VGVtcGxhdGUubWF0Y2guZm4gJiYgdGVzdFRlbXBsYXRlLm1hdGNoLmZuLnRlc3QoZ2V0UGxhY2Vob2xkZXIocG5keCksIGdldE1hc2tTZXQoKSwgcG5keCwgITEsIG9wdHMpKSAmJiAhMSAhPT0gKHJlc3VsdCA9IF9pc1ZhbGlkKHBuZHgsIGdldFBsYWNlaG9sZGVyKHBuZHgsIHRlc3RUZW1wbGF0ZS5tYXRjaCwgITApIHx8IChudWxsID09IHRlc3RUZW1wbGF0ZS5tYXRjaC5mbiA/IHRlc3RUZW1wbGF0ZS5tYXRjaC5kZWYgOiBcIlwiICE9PSBnZXRQbGFjZWhvbGRlcihwbmR4KSA/IGdldFBsYWNlaG9sZGVyKHBuZHgpIDogZ2V0QnVmZmVyKClbcG5keF0pLCAhMCkpICYmIChnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcmVzdWx0LnBvcyB8fCBwbmR4XS5nZW5lcmF0ZWRJbnB1dCA9ICEwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHJpY3QgPSAhMCA9PT0gc3RyaWN0O1xuICAgICAgICAgICAgdmFyIG1hc2tQb3MgPSBwb3M7XG4gICAgICAgICAgICBwb3MuYmVnaW4gIT09IHVuZGVmaW5lZCAmJiAobWFza1BvcyA9IGlzUlRMICYmICFpc1NlbGVjdGlvbihwb3MpID8gcG9zLmVuZCA6IHBvcy5iZWdpbik7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gITAsIHBvc2l0aW9uc0Nsb25lID0gJC5leHRlbmQoITAsIHt9LCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMpO1xuICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihvcHRzLnByZVZhbGlkYXRpb24pICYmICFzdHJpY3QgJiYgITAgIT09IGZyb21TZXRWYWxpZCAmJiAhMCAhPT0gdmFsaWRhdGVPbmx5ICYmIChyZXN1bHQgPSBvcHRzLnByZVZhbGlkYXRpb24oZ2V0QnVmZmVyKCksIG1hc2tQb3MsIGMsIGlzU2VsZWN0aW9uKHBvcyksIG9wdHMpKSwgXG4gICAgICAgICAgICAhMCA9PT0gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGxNaXNzaW5nTm9uTWFzayhtYXNrUG9zKSwgaXNTZWxlY3Rpb24ocG9zKSAmJiAoaGFuZGxlUmVtb3ZlKHVuZGVmaW5lZCwgSW5wdXRtYXNrLmtleUNvZGUuREVMRVRFLCBwb3MsICEwLCAhMCksIFxuICAgICAgICAgICAgICAgIG1hc2tQb3MgPSBnZXRNYXNrU2V0KCkucCksIG1hc2tQb3MgPCBnZXRNYXNrU2V0KCkubWFza0xlbmd0aCAmJiAobWF4TGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbWFza1BvcyA8IG1heExlbmd0aCkgJiYgKHJlc3VsdCA9IF9pc1ZhbGlkKG1hc2tQb3MsIGMsIHN0cmljdCksIFxuICAgICAgICAgICAgICAgICghc3RyaWN0IHx8ICEwID09PSBmcm9tU2V0VmFsaWQpICYmICExID09PSByZXN1bHQgJiYgITAgIT09IHZhbGlkYXRlT25seSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRQb3NWYWxpZCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1ttYXNrUG9zXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50UG9zVmFsaWQgfHwgbnVsbCAhPT0gY3VycmVudFBvc1ZhbGlkLm1hdGNoLmZuIHx8IGN1cnJlbnRQb3NWYWxpZC5tYXRjaC5kZWYgIT09IGMgJiYgYyAhPT0gb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKG9wdHMuaW5zZXJ0TW9kZSB8fCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbc2Vla05leHQobWFza1BvcyldID09PSB1bmRlZmluZWQpICYmICFpc01hc2sobWFza1BvcywgITApKSBmb3IgKHZhciBuUG9zID0gbWFza1BvcyArIDEsIHNuUG9zID0gc2Vla05leHQobWFza1Bvcyk7IG5Qb3MgPD0gc25Qb3M7IG5Qb3MrKykgaWYgKCExICE9PSAocmVzdWx0ID0gX2lzVmFsaWQoblBvcywgYywgc3RyaWN0KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZnVuY3Rpb24ob3JpZ2luYWxQb3MsIG5ld1Bvcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdnAgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbmV3UG9zXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZwKSBmb3IgKHZhciB0YXJnZXRMb2NhdG9yID0gdnAubG9jYXRvciwgdGxsID0gdGFyZ2V0TG9jYXRvci5sZW5ndGgsIHBzID0gb3JpZ2luYWxQb3M7IHBzIDwgbmV3UG9zOyBwcysrKSBpZiAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3BzXSA9PT0gdW5kZWZpbmVkICYmICFpc01hc2socHMsICEwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3RzID0gZ2V0VGVzdHMocHMpLnNsaWNlKCksIGJlc3RNYXRjaCA9IGRldGVybWluZVRlc3RUZW1wbGF0ZSh0ZXN0cywgITApLCBlcXVhbGl0eSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIiA9PT0gdGVzdHNbdGVzdHMubGVuZ3RoIC0gMV0ubWF0Y2guZGVmICYmIHRlc3RzLnBvcCgpLCAkLmVhY2godGVzdHMsIGZ1bmN0aW9uKG5keCwgdHN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0bGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHN0LmxvY2F0b3JbaV0gPT09IHVuZGVmaW5lZCB8fCAhY2hlY2tBbHRlcm5hdGlvbk1hdGNoKHRzdC5sb2NhdG9yW2ldLnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLCB0YXJnZXRMb2NhdG9yW2ldLnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLCB0c3QubmEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0QUkgPSB0YXJnZXRMb2NhdG9yW2ldLCBiZXN0TWF0Y2hBSSA9IGJlc3RNYXRjaC5sb2NhdG9yW2ldLCB0c3RBSSA9IHRzdC5sb2NhdG9yW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QUkgLSBiZXN0TWF0Y2hBSSA+IE1hdGguYWJzKHRhcmdldEFJIC0gdHN0QUkpICYmIChiZXN0TWF0Y2ggPSB0c3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXF1YWxpdHkgPCBpICYmIChlcXVhbGl0eSA9IGksIGJlc3RNYXRjaCA9IHRzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIGJlc3RNYXRjaCA9ICQuZXh0ZW5kKHt9LCBiZXN0TWF0Y2gsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZ2V0UGxhY2Vob2xkZXIocHMsIGJlc3RNYXRjaC5tYXRjaCwgITApIHx8IGJlc3RNYXRjaC5tYXRjaC5kZWZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBiZXN0TWF0Y2guZ2VuZXJhdGVkSW5wdXQgPSAhMCwgc2V0VmFsaWRQb3NpdGlvbihwcywgYmVzdE1hdGNoLCAhMCksIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tuZXdQb3NdID0gdW5kZWZpbmVkLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pc1ZhbGlkKG5ld1BvcywgdnAuaW5wdXQsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0obWFza1BvcywgcmVzdWx0LnBvcyAhPT0gdW5kZWZpbmVkID8gcmVzdWx0LnBvcyA6IG5Qb3MpLCBtYXNrUG9zID0gblBvcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBzZWVrTmV4dChtYXNrUG9zKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAhMSA9PT0gcmVzdWx0ICYmIG9wdHMua2VlcFN0YXRpYyAmJiAhc3RyaWN0ICYmICEwICE9PSBmcm9tQWx0ZXJuYXRlICYmIChyZXN1bHQgPSBmdW5jdGlvbihwb3MsIGMsIHN0cmljdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdEFsdCwgYWx0ZXJuYXRpb24sIGFsdFBvcywgcHJldkFsdFBvcywgaSwgdmFsaWRQb3MsIGFsdE5keHMsIGRlY2lzaW9uUG9zLCB2YWxpZFBzQ2xvbmUgPSAkLmV4dGVuZCghMCwge30sIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9ucyksIGlzVmFsaWRSc2x0ID0gITEsIGxBbHRQb3MgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHByZXZBbHRQb3MgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbEFsdFBvc107IGxBbHRQb3MgPj0gMDsgbEFsdFBvcy0tKSBpZiAoKGFsdFBvcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tsQWx0UG9zXSkgJiYgYWx0UG9zLmFsdGVybmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0QWx0ID0gbEFsdFBvcywgYWx0ZXJuYXRpb24gPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbGFzdEFsdF0uYWx0ZXJuYXRpb24sIFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkFsdFBvcy5sb2NhdG9yW2FsdFBvcy5hbHRlcm5hdGlvbl0gIT09IGFsdFBvcy5sb2NhdG9yW2FsdFBvcy5hbHRlcm5hdGlvbl0pIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkFsdFBvcyA9IGFsdFBvcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYWx0ZXJuYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaXNpb25Qb3MgPSBwYXJzZUludChsYXN0QWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWNpc2lvblRha2VyID0gcHJldkFsdFBvcy5sb2NhdG9yW3ByZXZBbHRQb3MuYWx0ZXJuYXRpb24gfHwgYWx0ZXJuYXRpb25dICE9PSB1bmRlZmluZWQgPyBwcmV2QWx0UG9zLmxvY2F0b3JbcHJldkFsdFBvcy5hbHRlcm5hdGlvbiB8fCBhbHRlcm5hdGlvbl0gOiBhbHROZHhzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaXNpb25UYWtlci5sZW5ndGggPiAwICYmIChkZWNpc2lvblRha2VyID0gZGVjaXNpb25UYWtlci5zcGxpdChcIixcIilbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc3NpYmlsaXR5UG9zID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2RlY2lzaW9uUG9zXSwgcHJldlBvcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tkZWNpc2lvblBvcyAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGdldFRlc3RzKGRlY2lzaW9uUG9zLCBwcmV2UG9zID8gcHJldlBvcy5sb2NhdG9yIDogdW5kZWZpbmVkLCBkZWNpc2lvblBvcyAtIDEpLCBmdW5jdGlvbihuZHgsIHRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHROZHhzID0gdGVzdC5sb2NhdG9yW2FsdGVybmF0aW9uXSA/IHRlc3QubG9jYXRvclthbHRlcm5hdGlvbl0udG9TdHJpbmcoKS5zcGxpdChcIixcIikgOiBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtbmR4ID0gMDsgbW5keCA8IGFsdE5keHMubGVuZ3RoOyBtbmR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkSW5wdXRzID0gW10sIHN0YXRpY0lucHV0c0JlZm9yZVBvcyA9IDAsIHN0YXRpY0lucHV0c0JlZm9yZVBvc0FsdGVybmF0ZSA9IDAsIHZlcmlmeVZhbGlkSW5wdXQgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlY2lzaW9uVGFrZXIgPCBhbHROZHhzW21uZHhdICYmICh0ZXN0Lm5hID09PSB1bmRlZmluZWQgfHwgLTEgPT09ICQuaW5BcnJheShhbHROZHhzW21uZHhdLCB0ZXN0Lm5hLnNwbGl0KFwiLFwiKSkgfHwgLTEgPT09ICQuaW5BcnJheShkZWNpc2lvblRha2VyLnRvU3RyaW5nKCksIGFsdE5keHMpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2RlY2lzaW9uUG9zXSA9ICQuZXh0ZW5kKCEwLCB7fSwgdGVzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zc2liaWxpdGllcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tkZWNpc2lvblBvc10ubG9jYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2RlY2lzaW9uUG9zXS5sb2NhdG9yW2FsdGVybmF0aW9uXSA9IHBhcnNlSW50KGFsdE5keHNbbW5keF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgPT0gdGVzdC5tYXRjaC5mbiA/IChwb3NzaWJpbGl0eVBvcy5pbnB1dCAhPT0gdGVzdC5tYXRjaC5kZWYgJiYgKHZlcmlmeVZhbGlkSW5wdXQgPSAhMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMCAhPT0gcG9zc2liaWxpdHlQb3MuZ2VuZXJhdGVkSW5wdXQgJiYgdmFsaWRJbnB1dHMucHVzaChwb3NzaWJpbGl0eVBvcy5pbnB1dCkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0lucHV0c0JlZm9yZVBvc0FsdGVybmF0ZSsrLCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbZGVjaXNpb25Qb3NdLmdlbmVyYXRlZElucHV0ID0gIS9bMC05YS1iQS1aXS8udGVzdCh0ZXN0Lm1hdGNoLmRlZiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2RlY2lzaW9uUG9zXS5pbnB1dCA9IHRlc3QubWF0Y2guZGVmKSA6IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tkZWNpc2lvblBvc10uaW5wdXQgPSBwb3NzaWJpbGl0eVBvcy5pbnB1dCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gZGVjaXNpb25Qb3MgKyAxOyBpIDwgZ2V0TGFzdFZhbGlkUG9zaXRpb24odW5kZWZpbmVkLCAhMCkgKyAxOyBpKyspIHZhbGlkUG9zID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkUG9zICYmICEwICE9PSB2YWxpZFBvcy5nZW5lcmF0ZWRJbnB1dCAmJiAvWzAtOWEtYkEtWl0vLnRlc3QodmFsaWRQb3MuaW5wdXQpID8gdmFsaWRJbnB1dHMucHVzaCh2YWxpZFBvcy5pbnB1dCkgOiBpIDwgcG9zICYmIHN0YXRpY0lucHV0c0JlZm9yZVBvcysrLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZlcmlmeVZhbGlkSW5wdXQgJiYgdmFsaWRJbnB1dHNbMF0gPT09IHRlc3QubWF0Y2guZGVmICYmIHZhbGlkSW5wdXRzLnNoaWZ0KCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRNYXNrU2V0KCEwKSwgaXNWYWxpZFJzbHQgPSAhMDsgdmFsaWRJbnB1dHMubGVuZ3RoID4gMDsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gdmFsaWRJbnB1dHMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQgIT09IG9wdHMuc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlciAmJiAhKGlzVmFsaWRSc2x0ID0gaXNWYWxpZChnZXRMYXN0VmFsaWRQb3NpdGlvbih1bmRlZmluZWQsICEwKSArIDEsIGlucHV0LCAhMSwgZnJvbVNldFZhbGlkLCAhMCkpKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkUnNsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tkZWNpc2lvblBvc10ubG9jYXRvciA9IHBvc3NpYmlsaXRpZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldEx2cCA9IGdldExhc3RWYWxpZFBvc2l0aW9uKHBvcykgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGRlY2lzaW9uUG9zICsgMTsgaSA8IGdldExhc3RWYWxpZFBvc2l0aW9uKCkgKyAxOyBpKyspICgodmFsaWRQb3MgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbaV0pID09PSB1bmRlZmluZWQgfHwgbnVsbCA9PSB2YWxpZFBvcy5tYXRjaC5mbikgJiYgaSA8IHBvcyArIChzdGF0aWNJbnB1dHNCZWZvcmVQb3NBbHRlcm5hdGUgLSBzdGF0aWNJbnB1dHNCZWZvcmVQb3MpICYmIHN0YXRpY0lucHV0c0JlZm9yZVBvc0FsdGVybmF0ZSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcyArPSBzdGF0aWNJbnB1dHNCZWZvcmVQb3NBbHRlcm5hdGUgLSBzdGF0aWNJbnB1dHNCZWZvcmVQb3MsIGlzVmFsaWRSc2x0ID0gaXNWYWxpZChwb3MgPiB0YXJnZXRMdnAgPyB0YXJnZXRMdnAgOiBwb3MsIGMsIHN0cmljdCwgZnJvbVNldFZhbGlkLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZFJzbHQpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0TWFza1NldCgpLCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMgPSAkLmV4dGVuZCghMCwge30sIHZhbGlkUHNDbG9uZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZFJzbHQ7XG4gICAgICAgICAgICAgICAgfShtYXNrUG9zLCBjLCBzdHJpY3QpKSwgITAgPT09IHJlc3VsdCAmJiAocmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgICAgICBwb3M6IG1hc2tQb3NcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24ob3B0cy5wb3N0VmFsaWRhdGlvbikgJiYgITEgIT09IHJlc3VsdCAmJiAhc3RyaWN0ICYmICEwICE9PSBmcm9tU2V0VmFsaWQgJiYgITAgIT09IHZhbGlkYXRlT25seSkge1xuICAgICAgICAgICAgICAgIHZhciBwb3N0UmVzdWx0ID0gb3B0cy5wb3N0VmFsaWRhdGlvbihnZXRCdWZmZXIoITApLCByZXN1bHQsIG9wdHMpO1xuICAgICAgICAgICAgICAgIGlmIChwb3N0UmVzdWx0LnJlZnJlc2hGcm9tQnVmZmVyICYmIHBvc3RSZXN1bHQuYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWZyZXNoID0gcG9zdFJlc3VsdC5yZWZyZXNoRnJvbUJ1ZmZlcjtcbiAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEZyb21CdWZmZXIoITAgPT09IHJlZnJlc2ggPyByZWZyZXNoIDogcmVmcmVzaC5zdGFydCwgcmVmcmVzaC5lbmQsIHBvc3RSZXN1bHQuYnVmZmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gITAgPT09IHBvc3RSZXN1bHQgPyByZXN1bHQgOiBwb3N0UmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCAmJiByZXN1bHQucG9zID09PSB1bmRlZmluZWQgJiYgKHJlc3VsdC5wb3MgPSBtYXNrUG9zKSwgITEgIT09IHJlc3VsdCAmJiAhMCAhPT0gdmFsaWRhdGVPbmx5IHx8IChyZXNldE1hc2tTZXQoITApLCBcbiAgICAgICAgICAgIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9ucyA9ICQuZXh0ZW5kKCEwLCB7fSwgcG9zaXRpb25zQ2xvbmUpKSwgcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzTWFzayhwb3MsIHN0cmljdCkge1xuICAgICAgICAgICAgdmFyIHRlc3QgPSBnZXRUZXN0VGVtcGxhdGUocG9zKS5tYXRjaDtcbiAgICAgICAgICAgIGlmIChcIlwiID09PSB0ZXN0LmRlZiAmJiAodGVzdCA9IGdldFRlc3QocG9zKS5tYXRjaCksIG51bGwgIT0gdGVzdC5mbikgcmV0dXJuIHRlc3QuZm47XG4gICAgICAgICAgICBpZiAoITAgIT09IHN0cmljdCAmJiBwb3MgPiAtMSkge1xuICAgICAgICAgICAgICAgIHZhciB0ZXN0cyA9IGdldFRlc3RzKHBvcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlc3RzLmxlbmd0aCA+IDEgKyAoXCJcIiA9PT0gdGVzdHNbdGVzdHMubGVuZ3RoIC0gMV0ubWF0Y2guZGVmID8gMSA6IDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNlZWtOZXh0KHBvcywgbmV3QmxvY2spIHtcbiAgICAgICAgICAgIHZhciBtYXNrTCA9IGdldE1hc2tTZXQoKS5tYXNrTGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHBvcyA+PSBtYXNrTCkgcmV0dXJuIG1hc2tMO1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gcG9zO1xuICAgICAgICAgICAgZm9yIChnZXRUZXN0cyhtYXNrTCArIDEpLmxlbmd0aCA+IDEgJiYgKGdldE1hc2tUZW1wbGF0ZSghMCwgbWFza0wgKyAxLCAhMCksIG1hc2tMID0gZ2V0TWFza1NldCgpLm1hc2tMZW5ndGgpOyArK3Bvc2l0aW9uIDwgbWFza0wgJiYgKCEwID09PSBuZXdCbG9jayAmJiAoITAgIT09IGdldFRlc3QocG9zaXRpb24pLm1hdGNoLm5ld0Jsb2NrTWFya2VyIHx8ICFpc01hc2socG9zaXRpb24pKSB8fCAhMCAhPT0gbmV3QmxvY2sgJiYgIWlzTWFzayhwb3NpdGlvbikpOyApIDtcbiAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzZWVrUHJldmlvdXMocG9zLCBuZXdCbG9jaykge1xuICAgICAgICAgICAgdmFyIHRlc3RzLCBwb3NpdGlvbiA9IHBvcztcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA8PSAwKSByZXR1cm4gMDtcbiAgICAgICAgICAgIGZvciAoOy0tcG9zaXRpb24gPiAwICYmICghMCA9PT0gbmV3QmxvY2sgJiYgITAgIT09IGdldFRlc3QocG9zaXRpb24pLm1hdGNoLm5ld0Jsb2NrTWFya2VyIHx8ICEwICE9PSBuZXdCbG9jayAmJiAhaXNNYXNrKHBvc2l0aW9uKSAmJiAodGVzdHMgPSBnZXRUZXN0cyhwb3NpdGlvbiksIFxuICAgICAgICAgICAgdGVzdHMubGVuZ3RoIDwgMiB8fCAyID09PSB0ZXN0cy5sZW5ndGggJiYgXCJcIiA9PT0gdGVzdHNbMV0ubWF0Y2guZGVmKSk7ICkgO1xuICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldEJ1ZmZlckVsZW1lbnQocG9zaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zaXRpb25dID09PSB1bmRlZmluZWQgPyBnZXRQbGFjZWhvbGRlcihwb3NpdGlvbikgOiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zaXRpb25dLmlucHV0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHdyaXRlQnVmZmVyKGlucHV0LCBidWZmZXIsIGNhcmV0UG9zLCBldmVudCwgdHJpZ2dlcklucHV0RXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudCAmJiAkLmlzRnVuY3Rpb24ob3B0cy5vbkJlZm9yZVdyaXRlKSkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBvcHRzLm9uQmVmb3JlV3JpdGUuY2FsbChpbnB1dG1hc2ssIGV2ZW50LCBidWZmZXIsIGNhcmV0UG9zLCBvcHRzKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVmcmVzaEZyb21CdWZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWZyZXNoID0gcmVzdWx0LnJlZnJlc2hGcm9tQnVmZmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEZyb21CdWZmZXIoITAgPT09IHJlZnJlc2ggPyByZWZyZXNoIDogcmVmcmVzaC5zdGFydCwgcmVmcmVzaC5lbmQsIHJlc3VsdC5idWZmZXIgfHwgYnVmZmVyKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgPSBnZXRCdWZmZXIoITApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhcmV0UG9zICE9PSB1bmRlZmluZWQgJiYgKGNhcmV0UG9zID0gcmVzdWx0LmNhcmV0ICE9PSB1bmRlZmluZWQgPyByZXN1bHQuY2FyZXQgOiBjYXJldFBvcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQgIT09IHVuZGVmaW5lZCAmJiAoaW5wdXQuaW5wdXRtYXNrLl92YWx1ZVNldChidWZmZXIuam9pbihcIlwiKSksIGNhcmV0UG9zID09PSB1bmRlZmluZWQgfHwgZXZlbnQgIT09IHVuZGVmaW5lZCAmJiBcImJsdXJcIiA9PT0gZXZlbnQudHlwZSA/IHJlbmRlckNvbG9yTWFzayhpbnB1dCwgY2FyZXRQb3MsIDAgPT09IGJ1ZmZlci5sZW5ndGgpIDogYW5kcm9pZCAmJiBldmVudCAmJiBcImlucHV0XCIgPT09IGV2ZW50LnR5cGUgPyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNhcmV0KGlucHV0LCBjYXJldFBvcyk7XG4gICAgICAgICAgICB9LCAwKSA6IGNhcmV0KGlucHV0LCBjYXJldFBvcyksICEwID09PSB0cmlnZ2VySW5wdXRFdmVudCAmJiAoc2tpcElucHV0RXZlbnQgPSAhMCwgXG4gICAgICAgICAgICAkKGlucHV0KS50cmlnZ2VyKFwiaW5wdXRcIikpKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRQbGFjZWhvbGRlcihwb3MsIHRlc3QsIHJldHVyblBMKSB7XG4gICAgICAgICAgICBpZiAodGVzdCA9IHRlc3QgfHwgZ2V0VGVzdChwb3MpLm1hdGNoLCB0ZXN0LnBsYWNlaG9sZGVyICE9PSB1bmRlZmluZWQgfHwgITAgPT09IHJldHVyblBMKSByZXR1cm4gJC5pc0Z1bmN0aW9uKHRlc3QucGxhY2Vob2xkZXIpID8gdGVzdC5wbGFjZWhvbGRlcihvcHRzKSA6IHRlc3QucGxhY2Vob2xkZXI7XG4gICAgICAgICAgICBpZiAobnVsbCA9PT0gdGVzdC5mbikge1xuICAgICAgICAgICAgICAgIGlmIChwb3MgPiAtMSAmJiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2VGVzdCwgdGVzdHMgPSBnZXRUZXN0cyhwb3MpLCBzdGF0aWNBbHRlcm5hdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3RzLmxlbmd0aCA+IDEgKyAoXCJcIiA9PT0gdGVzdHNbdGVzdHMubGVuZ3RoIC0gMV0ubWF0Y2guZGVmID8gMSA6IDApKSBmb3IgKHZhciBpID0gMDsgaSA8IHRlc3RzLmxlbmd0aDsgaSsrKSBpZiAoITAgIT09IHRlc3RzW2ldLm1hdGNoLm9wdGlvbmFsaXR5ICYmICEwICE9PSB0ZXN0c1tpXS5tYXRjaC5vcHRpb25hbFF1YW50aWZpZXIgJiYgKG51bGwgPT09IHRlc3RzW2ldLm1hdGNoLmZuIHx8IHByZXZUZXN0ID09PSB1bmRlZmluZWQgfHwgITEgIT09IHRlc3RzW2ldLm1hdGNoLmZuLnRlc3QocHJldlRlc3QubWF0Y2guZGVmLCBnZXRNYXNrU2V0KCksIHBvcywgITAsIG9wdHMpKSAmJiAoc3RhdGljQWx0ZXJuYXRpb25zLnB1c2godGVzdHNbaV0pLCBcbiAgICAgICAgICAgICAgICAgICAgbnVsbCA9PT0gdGVzdHNbaV0ubWF0Y2guZm4gJiYgKHByZXZUZXN0ID0gdGVzdHNbaV0pLCBzdGF0aWNBbHRlcm5hdGlvbnMubGVuZ3RoID4gMSAmJiAvWzAtOWEtYkEtWl0vLnRlc3Qoc3RhdGljQWx0ZXJuYXRpb25zWzBdLm1hdGNoLmRlZikpKSByZXR1cm4gb3B0cy5wbGFjZWhvbGRlci5jaGFyQXQocG9zICUgb3B0cy5wbGFjZWhvbGRlci5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGVzdC5kZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3B0cy5wbGFjZWhvbGRlci5jaGFyQXQocG9zICUgb3B0cy5wbGFjZWhvbGRlci5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrVmFsKGlucHV0LCB3cml0ZU91dCwgc3RyaWN0LCBucHR2bCwgaW5pdGlhdGluZ0V2ZW50KSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBpc1RlbXBsYXRlTWF0Y2gobmR4LCBjaGFyQ29kZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTEgIT09IGdldEJ1ZmZlclRlbXBsYXRlKCkuc2xpY2UobmR4LCBzZWVrTmV4dChuZHgpKS5qb2luKFwiXCIpLmluZGV4T2YoY2hhckNvZGVzKSAmJiAhaXNNYXNrKG5keCkgJiYgZ2V0VGVzdChuZHgpLm1hdGNoLm5hdGl2ZURlZiA9PT0gY2hhckNvZGVzLmNoYXJBdChjaGFyQ29kZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaW5wdXRWYWx1ZSA9IG5wdHZsLnNsaWNlKCksIGNoYXJDb2RlcyA9IFwiXCIsIGluaXRpYWxOZHggPSAtMSwgcmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKHJlc2V0TWFza1NldCgpLCBzdHJpY3QgfHwgITAgPT09IG9wdHMuYXV0b1VubWFzaykgaW5pdGlhbE5keCA9IHNlZWtOZXh0KGluaXRpYWxOZHgpOyBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGljSW5wdXQgPSBnZXRCdWZmZXJUZW1wbGF0ZSgpLnNsaWNlKDAsIHNlZWtOZXh0KC0xKSkuam9pbihcIlwiKSwgbWF0Y2hlcyA9IGlucHV0VmFsdWUuam9pbihcIlwiKS5tYXRjaChuZXcgUmVnRXhwKFwiXlwiICsgSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KHN0YXRpY0lucHV0KSwgXCJnXCIpKTtcbiAgICAgICAgICAgICAgICBtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID4gMCAmJiAoaW5wdXRWYWx1ZS5zcGxpY2UoMCwgbWF0Y2hlcy5sZW5ndGggKiBzdGF0aWNJbnB1dC5sZW5ndGgpLCBcbiAgICAgICAgICAgICAgICBpbml0aWFsTmR4ID0gc2Vla05leHQoaW5pdGlhbE5keCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKC0xID09PSBpbml0aWFsTmR4ID8gKGdldE1hc2tTZXQoKS5wID0gc2Vla05leHQoaW5pdGlhbE5keCksIGluaXRpYWxOZHggPSAwKSA6IGdldE1hc2tTZXQoKS5wID0gaW5pdGlhbE5keCwgXG4gICAgICAgICAgICAkLmVhY2goaW5wdXRWYWx1ZSwgZnVuY3Rpb24obmR4LCBjaGFyQ29kZSkge1xuICAgICAgICAgICAgICAgIGlmIChjaGFyQ29kZSAhPT0gdW5kZWZpbmVkKSBpZiAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW25keF0gPT09IHVuZGVmaW5lZCAmJiBpbnB1dFZhbHVlW25keF0gPT09IGdldFBsYWNlaG9sZGVyKG5keCkgJiYgaXNNYXNrKG5keCwgITApICYmICExID09PSBpc1ZhbGlkKG5keCwgaW5wdXRWYWx1ZVtuZHhdLCAhMCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICEwKSkgZ2V0TWFza1NldCgpLnArKzsgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlwcmVzcyA9IG5ldyAkLkV2ZW50KFwiX2NoZWNrdmFsXCIpO1xuICAgICAgICAgICAgICAgICAgICBrZXlwcmVzcy53aGljaCA9IGNoYXJDb2RlLmNoYXJDb2RlQXQoMCksIGNoYXJDb2RlcyArPSBjaGFyQ29kZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGx2cCA9IGdldExhc3RWYWxpZFBvc2l0aW9uKHVuZGVmaW5lZCwgITApLCBsdlRlc3QgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbHZwXSwgbmV4dFRlc3QgPSBnZXRUZXN0VGVtcGxhdGUobHZwICsgMSwgbHZUZXN0ID8gbHZUZXN0LmxvY2F0b3Iuc2xpY2UoKSA6IHVuZGVmaW5lZCwgbHZwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1RlbXBsYXRlTWF0Y2goaW5pdGlhbE5keCwgY2hhckNvZGVzKSB8fCBzdHJpY3QgfHwgb3B0cy5hdXRvVW5tYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gc3RyaWN0ID8gbmR4IDogbnVsbCA9PSBuZXh0VGVzdC5tYXRjaC5mbiAmJiBuZXh0VGVzdC5tYXRjaC5vcHRpb25hbGl0eSAmJiBsdnAgKyAxIDwgZ2V0TWFza1NldCgpLnAgPyBsdnAgKyAxIDogZ2V0TWFza1NldCgpLnA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBFdmVudEhhbmRsZXJzLmtleXByZXNzRXZlbnQuY2FsbChpbnB1dCwga2V5cHJlc3MsICEwLCAhMSwgc3RyaWN0LCBwb3MpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxOZHggPSBwb3MgKyAxLCBjaGFyQ29kZXMgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgcmVzdWx0ID0gRXZlbnRIYW5kbGVycy5rZXlwcmVzc0V2ZW50LmNhbGwoaW5wdXQsIGtleXByZXNzLCAhMCwgITEsICEwLCBsdnAgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCExICE9PSByZXN1bHQgJiYgIXN0cmljdCAmJiAkLmlzRnVuY3Rpb24ob3B0cy5vbkJlZm9yZVdyaXRlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID0gb3B0cy5vbkJlZm9yZVdyaXRlLmNhbGwoaW5wdXRtYXNrLCBrZXlwcmVzcywgZ2V0QnVmZmVyKCksIHJlc3VsdC5mb3J3YXJkUG9zaXRpb24sIG9wdHMpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXN1bHQgPSAkLmV4dGVuZChvcmlnUmVzdWx0LCByZXN1bHQpKSAmJiByZXN1bHQucmVmcmVzaEZyb21CdWZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVmcmVzaCA9IHJlc3VsdC5yZWZyZXNoRnJvbUJ1ZmZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlcighMCA9PT0gcmVmcmVzaCA/IHJlZnJlc2ggOiByZWZyZXNoLnN0YXJ0LCByZWZyZXNoLmVuZCwgcmVzdWx0LmJ1ZmZlciksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0TWFza1NldCghMCksIHJlc3VsdC5jYXJldCAmJiAoZ2V0TWFza1NldCgpLnAgPSByZXN1bHQuY2FyZXQsIHJlc3VsdC5mb3J3YXJkUG9zaXRpb24gPSByZXN1bHQuY2FyZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksIHdyaXRlT3V0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhcmV0UG9zID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGlucHV0ICYmIHJlc3VsdCAmJiAoY2FyZXRQb3MgPSBvcHRzLm51bWVyaWNJbnB1dCA/IHNlZWtQcmV2aW91cyhyZXN1bHQuZm9yd2FyZFBvc2l0aW9uKSA6IHJlc3VsdC5mb3J3YXJkUG9zaXRpb24pLCBcbiAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcihpbnB1dCwgZ2V0QnVmZmVyKCksIGNhcmV0UG9zLCBpbml0aWF0aW5nRXZlbnQgfHwgbmV3ICQuRXZlbnQoXCJjaGVja3ZhbFwiKSwgaW5pdGlhdGluZ0V2ZW50ICYmIFwiaW5wdXRcIiA9PT0gaW5pdGlhdGluZ0V2ZW50LnR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHVubWFza2VkdmFsdWUoaW5wdXQpIHtcbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5pbnB1dG1hc2sgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGlucHV0LmlucHV0bWFzayAmJiBpbnB1dC5pbnB1dG1hc2sucmVmcmVzaFZhbHVlICYmIEV2ZW50SGFuZGxlcnMuc2V0VmFsdWVFdmVudC5jYWxsKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1bVZhbHVlID0gW10sIHZwcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9ucztcbiAgICAgICAgICAgIGZvciAodmFyIHBuZHggaW4gdnBzKSB2cHNbcG5keF0ubWF0Y2ggJiYgbnVsbCAhPSB2cHNbcG5keF0ubWF0Y2guZm4gJiYgdW1WYWx1ZS5wdXNoKHZwc1twbmR4XS5pbnB1dCk7XG4gICAgICAgICAgICB2YXIgdW5tYXNrZWRWYWx1ZSA9IDAgPT09IHVtVmFsdWUubGVuZ3RoID8gXCJcIiA6IChpc1JUTCA/IHVtVmFsdWUucmV2ZXJzZSgpIDogdW1WYWx1ZSkuam9pbihcIlwiKTtcbiAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24ob3B0cy5vblVuTWFzaykpIHtcbiAgICAgICAgICAgICAgICB2YXIgYnVmZmVyVmFsdWUgPSAoaXNSVEwgPyBnZXRCdWZmZXIoKS5zbGljZSgpLnJldmVyc2UoKSA6IGdldEJ1ZmZlcigpKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgIHVubWFza2VkVmFsdWUgPSBvcHRzLm9uVW5NYXNrLmNhbGwoaW5wdXRtYXNrLCBidWZmZXJWYWx1ZSwgdW5tYXNrZWRWYWx1ZSwgb3B0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdW5tYXNrZWRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjYXJldChpbnB1dCwgYmVnaW4sIGVuZCwgbm90cmFuc2xhdGUpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZVBvc2l0aW9uKHBvcykge1xuICAgICAgICAgICAgICAgIGlmICghMCAhPT0gbm90cmFuc2xhdGUgJiYgaXNSVEwgJiYgXCJudW1iZXJcIiA9PSB0eXBlb2YgcG9zICYmICghb3B0cy5ncmVlZHkgfHwgXCJcIiAhPT0gb3B0cy5wbGFjZWhvbGRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zID0gZ2V0QnVmZmVyKCkuam9pbihcIlwiKS5sZW5ndGggLSBwb3M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmFuZ2U7XG4gICAgICAgICAgICBpZiAoYmVnaW4gPT09IHVuZGVmaW5lZCkgcmV0dXJuIGlucHV0LnNldFNlbGVjdGlvblJhbmdlID8gKGJlZ2luID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQsIFxuICAgICAgICAgICAgZW5kID0gaW5wdXQuc2VsZWN0aW9uRW5kKSA6IHdpbmRvdy5nZXRTZWxlY3Rpb24gPyAocmFuZ2UgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKSwgXG4gICAgICAgICAgICByYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lci5wYXJlbnROb2RlICE9PSBpbnB1dCAmJiByYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lciAhPT0gaW5wdXQgfHwgKGJlZ2luID0gcmFuZ2Uuc3RhcnRPZmZzZXQsIFxuICAgICAgICAgICAgZW5kID0gcmFuZ2UuZW5kT2Zmc2V0KSkgOiBkb2N1bWVudC5zZWxlY3Rpb24gJiYgZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlICYmIChyYW5nZSA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpLCBcbiAgICAgICAgICAgIGJlZ2luID0gMCAtIHJhbmdlLmR1cGxpY2F0ZSgpLm1vdmVTdGFydChcImNoYXJhY3RlclwiLCAtaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpLmxlbmd0aCksIFxuICAgICAgICAgICAgZW5kID0gYmVnaW4gKyByYW5nZS50ZXh0Lmxlbmd0aCksIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogdHJhbnNsYXRlUG9zaXRpb24oYmVnaW4pLFxuICAgICAgICAgICAgICAgIGVuZDogdHJhbnNsYXRlUG9zaXRpb24oZW5kKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChiZWdpbi5iZWdpbiAhPT0gdW5kZWZpbmVkICYmIChlbmQgPSBiZWdpbi5lbmQsIGJlZ2luID0gYmVnaW4uYmVnaW4pLCBcIm51bWJlclwiID09IHR5cGVvZiBiZWdpbikge1xuICAgICAgICAgICAgICAgIGJlZ2luID0gdHJhbnNsYXRlUG9zaXRpb24oYmVnaW4pLCBlbmQgPSB0cmFuc2xhdGVQb3NpdGlvbihlbmQpLCBlbmQgPSBcIm51bWJlclwiID09IHR5cGVvZiBlbmQgPyBlbmQgOiBiZWdpbjtcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsQ2FsYyA9IHBhcnNlSW50KCgoaW5wdXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cpLmdldENvbXB1dGVkU3R5bGUgPyAoaW5wdXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cpLmdldENvbXB1dGVkU3R5bGUoaW5wdXQsIG51bGwpIDogaW5wdXQuY3VycmVudFN0eWxlKS5mb250U2l6ZSkgKiBlbmQ7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LnNjcm9sbExlZnQgPSBzY3JvbGxDYWxjID4gaW5wdXQuc2Nyb2xsV2lkdGggPyBzY3JvbGxDYWxjIDogMCwgbW9iaWxlIHx8ICExICE9PSBvcHRzLmluc2VydE1vZGUgfHwgYmVnaW4gIT09IGVuZCB8fCBlbmQrKywgXG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UpIGlucHV0LnNlbGVjdGlvblN0YXJ0ID0gYmVnaW4sIGlucHV0LnNlbGVjdGlvbkVuZCA9IGVuZDsgZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLCBpbnB1dC5maXJzdENoaWxkID09PSB1bmRlZmluZWQgfHwgbnVsbCA9PT0gaW5wdXQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmFuZ2Uuc2V0U3RhcnQoaW5wdXQuZmlyc3RDaGlsZCwgYmVnaW4gPCBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoID8gYmVnaW4gOiBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoKSwgXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlLnNldEVuZChpbnB1dC5maXJzdENoaWxkLCBlbmQgPCBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoID8gZW5kIDogaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpLmxlbmd0aCksIFxuICAgICAgICAgICAgICAgICAgICByYW5nZS5jb2xsYXBzZSghMCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKSwgc2VsLmFkZFJhbmdlKHJhbmdlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaW5wdXQuY3JlYXRlVGV4dFJhbmdlICYmIChyYW5nZSA9IGlucHV0LmNyZWF0ZVRleHRSYW5nZSgpLCByYW5nZS5jb2xsYXBzZSghMCksIFxuICAgICAgICAgICAgICAgIHJhbmdlLm1vdmVFbmQoXCJjaGFyYWN0ZXJcIiwgZW5kKSwgcmFuZ2UubW92ZVN0YXJ0KFwiY2hhcmFjdGVyXCIsIGJlZ2luKSwgcmFuZ2Uuc2VsZWN0KCkpO1xuICAgICAgICAgICAgICAgIHJlbmRlckNvbG9yTWFzayhpbnB1dCwge1xuICAgICAgICAgICAgICAgICAgICBiZWdpbjogYmVnaW4sXG4gICAgICAgICAgICAgICAgICAgIGVuZDogZW5kXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZGV0ZXJtaW5lTGFzdFJlcXVpcmVkUG9zaXRpb24ocmV0dXJuRGVmaW5pdGlvbikge1xuICAgICAgICAgICAgdmFyIHBvcywgdGVzdFBvcywgYnVmZmVyID0gZ2V0QnVmZmVyKCksIGJsID0gYnVmZmVyLmxlbmd0aCwgbHZwID0gZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSwgcG9zaXRpb25zID0ge30sIGx2VGVzdCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tsdnBdLCBuZHhJbnRsenIgPSBsdlRlc3QgIT09IHVuZGVmaW5lZCA/IGx2VGVzdC5sb2NhdG9yLnNsaWNlKCkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBmb3IgKHBvcyA9IGx2cCArIDE7IHBvcyA8IGJ1ZmZlci5sZW5ndGg7IHBvcysrKSB0ZXN0UG9zID0gZ2V0VGVzdFRlbXBsYXRlKHBvcywgbmR4SW50bHpyLCBwb3MgLSAxKSwgXG4gICAgICAgICAgICBuZHhJbnRsenIgPSB0ZXN0UG9zLmxvY2F0b3Iuc2xpY2UoKSwgcG9zaXRpb25zW3Bvc10gPSAkLmV4dGVuZCghMCwge30sIHRlc3RQb3MpO1xuICAgICAgICAgICAgdmFyIGx2VGVzdEFsdCA9IGx2VGVzdCAmJiBsdlRlc3QuYWx0ZXJuYXRpb24gIT09IHVuZGVmaW5lZCA/IGx2VGVzdC5sb2NhdG9yW2x2VGVzdC5hbHRlcm5hdGlvbl0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBmb3IgKHBvcyA9IGJsIC0gMTsgcG9zID4gbHZwICYmICh0ZXN0UG9zID0gcG9zaXRpb25zW3Bvc10sICh0ZXN0UG9zLm1hdGNoLm9wdGlvbmFsaXR5IHx8IHRlc3RQb3MubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyICYmIHRlc3RQb3MubWF0Y2gubmV3QmxvY2tNYXJrZXIgfHwgbHZUZXN0QWx0ICYmIChsdlRlc3RBbHQgIT09IHBvc2l0aW9uc1twb3NdLmxvY2F0b3JbbHZUZXN0LmFsdGVybmF0aW9uXSAmJiBudWxsICE9IHRlc3RQb3MubWF0Y2guZm4gfHwgbnVsbCA9PT0gdGVzdFBvcy5tYXRjaC5mbiAmJiB0ZXN0UG9zLmxvY2F0b3JbbHZUZXN0LmFsdGVybmF0aW9uXSAmJiBjaGVja0FsdGVybmF0aW9uTWF0Y2godGVzdFBvcy5sb2NhdG9yW2x2VGVzdC5hbHRlcm5hdGlvbl0udG9TdHJpbmcoKS5zcGxpdChcIixcIiksIGx2VGVzdEFsdC50b1N0cmluZygpLnNwbGl0KFwiLFwiKSkgJiYgXCJcIiAhPT0gZ2V0VGVzdHMocG9zKVswXS5kZWYpKSAmJiBidWZmZXJbcG9zXSA9PT0gZ2V0UGxhY2Vob2xkZXIocG9zLCB0ZXN0UG9zLm1hdGNoKSk7IHBvcy0tKSBibC0tO1xuICAgICAgICAgICAgcmV0dXJuIHJldHVybkRlZmluaXRpb24gPyB7XG4gICAgICAgICAgICAgICAgbDogYmwsXG4gICAgICAgICAgICAgICAgZGVmOiBwb3NpdGlvbnNbYmxdID8gcG9zaXRpb25zW2JsXS5tYXRjaCA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSA6IGJsO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyT3B0aW9uYWxUYWlsKGJ1ZmZlcikge1xuICAgICAgICAgICAgZm9yICh2YXIgdmFsaWRQb3MsIHJsID0gZGV0ZXJtaW5lTGFzdFJlcXVpcmVkUG9zaXRpb24oKSwgYmwgPSBidWZmZXIubGVuZ3RoLCBsdiA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tnZXRMYXN0VmFsaWRQb3NpdGlvbigpXTsgcmwgPCBibCAmJiAhaXNNYXNrKHJsLCAhMCkgJiYgKHZhbGlkUG9zID0gbHYgIT09IHVuZGVmaW5lZCA/IGdldFRlc3RUZW1wbGF0ZShybCwgbHYubG9jYXRvci5zbGljZShcIlwiKSwgbHYpIDogZ2V0VGVzdChybCkpICYmICEwICE9PSB2YWxpZFBvcy5tYXRjaC5vcHRpb25hbGl0eSAmJiAoITAgIT09IHZhbGlkUG9zLm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciAmJiAhMCAhPT0gdmFsaWRQb3MubWF0Y2gubmV3QmxvY2tNYXJrZXIgfHwgcmwgKyAxID09PSBibCAmJiBcIlwiID09PSAobHYgIT09IHVuZGVmaW5lZCA/IGdldFRlc3RUZW1wbGF0ZShybCArIDEsIGx2LmxvY2F0b3Iuc2xpY2UoXCJcIiksIGx2KSA6IGdldFRlc3QocmwgKyAxKSkubWF0Y2guZGVmKTsgKSBybCsrO1xuICAgICAgICAgICAgZm9yICg7KHZhbGlkUG9zID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3JsIC0gMV0pICYmIHZhbGlkUG9zICYmIHZhbGlkUG9zLm1hdGNoLm9wdGlvbmFsaXR5ICYmIHZhbGlkUG9zLmlucHV0ID09PSBvcHRzLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXI7ICkgcmwtLTtcbiAgICAgICAgICAgIHJldHVybiBidWZmZXIuc3BsaWNlKHJsKSwgYnVmZmVyO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzQ29tcGxldGUoYnVmZmVyKSB7XG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKG9wdHMuaXNDb21wbGV0ZSkpIHJldHVybiBvcHRzLmlzQ29tcGxldGUoYnVmZmVyLCBvcHRzKTtcbiAgICAgICAgICAgIGlmIChcIipcIiA9PT0gb3B0cy5yZXBlYXQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgY29tcGxldGUgPSAhMSwgbHJwID0gZGV0ZXJtaW5lTGFzdFJlcXVpcmVkUG9zaXRpb24oITApLCBhbWwgPSBzZWVrUHJldmlvdXMobHJwLmwpO1xuICAgICAgICAgICAgaWYgKGxycC5kZWYgPT09IHVuZGVmaW5lZCB8fCBscnAuZGVmLm5ld0Jsb2NrTWFya2VyIHx8IGxycC5kZWYub3B0aW9uYWxpdHkgfHwgbHJwLmRlZi5vcHRpb25hbFF1YW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSA9ICEwO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IGFtbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0ID0gZ2V0VGVzdFRlbXBsYXRlKGkpLm1hdGNoO1xuICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCAhPT0gdGVzdC5mbiAmJiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbaV0gPT09IHVuZGVmaW5lZCAmJiAhMCAhPT0gdGVzdC5vcHRpb25hbGl0eSAmJiAhMCAhPT0gdGVzdC5vcHRpb25hbFF1YW50aWZpZXIgfHwgbnVsbCA9PT0gdGVzdC5mbiAmJiBidWZmZXJbaV0gIT09IGdldFBsYWNlaG9sZGVyKGksIHRlc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29tcGxldGU7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlKGlucHV0LCBrLCBwb3MsIHN0cmljdCwgZnJvbUlzVmFsaWQpIHtcbiAgICAgICAgICAgIGlmICgob3B0cy5udW1lcmljSW5wdXQgfHwgaXNSVEwpICYmIChrID09PSBJbnB1dG1hc2sua2V5Q29kZS5CQUNLU1BBQ0UgPyBrID0gSW5wdXRtYXNrLmtleUNvZGUuREVMRVRFIDogayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuREVMRVRFICYmIChrID0gSW5wdXRtYXNrLmtleUNvZGUuQkFDS1NQQUNFKSwgXG4gICAgICAgICAgICBpc1JUTCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGVuZCA9IHBvcy5lbmQ7XG4gICAgICAgICAgICAgICAgcG9zLmVuZCA9IHBvcy5iZWdpbiwgcG9zLmJlZ2luID0gcGVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGsgPT09IElucHV0bWFzay5rZXlDb2RlLkJBQ0tTUEFDRSAmJiAocG9zLmVuZCAtIHBvcy5iZWdpbiA8IDEgfHwgITEgPT09IG9wdHMuaW5zZXJ0TW9kZSkgPyAocG9zLmJlZ2luID0gc2Vla1ByZXZpb3VzKHBvcy5iZWdpbiksIFxuICAgICAgICAgICAgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvcy5iZWdpbl0gIT09IHVuZGVmaW5lZCAmJiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zLmJlZ2luXS5pbnB1dCA9PT0gb3B0cy5ncm91cFNlcGFyYXRvciAmJiBwb3MuYmVnaW4tLSkgOiBrID09PSBJbnB1dG1hc2sua2V5Q29kZS5ERUxFVEUgJiYgcG9zLmJlZ2luID09PSBwb3MuZW5kICYmIChwb3MuZW5kID0gaXNNYXNrKHBvcy5lbmQsICEwKSAmJiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zLmVuZF0gJiYgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvcy5lbmRdLmlucHV0ICE9PSBvcHRzLnJhZGl4UG9pbnQgPyBwb3MuZW5kICsgMSA6IHNlZWtOZXh0KHBvcy5lbmQpICsgMSwgXG4gICAgICAgICAgICBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zLmJlZ2luXSAhPT0gdW5kZWZpbmVkICYmIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3MuYmVnaW5dLmlucHV0ID09PSBvcHRzLmdyb3VwU2VwYXJhdG9yICYmIHBvcy5lbmQrKyksIFxuICAgICAgICAgICAgc3RyaXBWYWxpZFBvc2l0aW9ucyhwb3MuYmVnaW4sIHBvcy5lbmQsICExLCBzdHJpY3QpLCAhMCAhPT0gc3RyaWN0ICYmIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRzLmtlZXBTdGF0aWMpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdmFsaWRJbnB1dHMgPSBbXSwgbGFzdEFsdCA9IGdldExhc3RWYWxpZFBvc2l0aW9uKC0xLCAhMCksIHBvc2l0aW9uc0Nsb25lID0gJC5leHRlbmQoITAsIHt9LCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMpLCBwcmV2QWx0UG9zID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2xhc3RBbHRdOyBsYXN0QWx0ID49IDA7IGxhc3RBbHQtLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFsdFBvcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tsYXN0QWx0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbHRQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgIT09IGFsdFBvcy5nZW5lcmF0ZWRJbnB1dCAmJiAvWzAtOWEtYkEtWl0vLnRlc3QoYWx0UG9zLmlucHV0KSAmJiB2YWxpZElucHV0cy5wdXNoKGFsdFBvcy5pbnB1dCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbGFzdEFsdF0sIGFsdFBvcy5hbHRlcm5hdGlvbiAhPT0gdW5kZWZpbmVkICYmIGFsdFBvcy5sb2NhdG9yW2FsdFBvcy5hbHRlcm5hdGlvbl0gIT09IHByZXZBbHRQb3MubG9jYXRvclthbHRQb3MuYWx0ZXJuYXRpb25dKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2QWx0UG9zID0gYWx0UG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0QWx0ID4gLTEpIGZvciAoZ2V0TWFza1NldCgpLnAgPSBzZWVrTmV4dChnZXRMYXN0VmFsaWRQb3NpdGlvbigtMSwgITApKTsgdmFsaWRJbnB1dHMubGVuZ3RoID4gMDsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5cHJlc3MgPSBuZXcgJC5FdmVudChcImtleXByZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5cHJlc3Mud2hpY2ggPSB2YWxpZElucHV0cy5wb3AoKS5jaGFyQ29kZUF0KDApLCBFdmVudEhhbmRsZXJzLmtleXByZXNzRXZlbnQuY2FsbChpbnB1dCwga2V5cHJlc3MsICEwLCAhMSwgITEsIGdldE1hc2tTZXQoKS5wKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9ucyA9ICQuZXh0ZW5kKCEwLCB7fSwgcG9zaXRpb25zQ2xvbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgIHZhciBsdnAgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbihwb3MuYmVnaW4sICEwKTtcbiAgICAgICAgICAgIGlmIChsdnAgPCBwb3MuYmVnaW4pIGdldE1hc2tTZXQoKS5wID0gc2Vla05leHQobHZwKTsgZWxzZSBpZiAoITAgIT09IHN0cmljdCAmJiAoZ2V0TWFza1NldCgpLnAgPSBwb3MuYmVnaW4sIFxuICAgICAgICAgICAgITAgIT09IGZyb21Jc1ZhbGlkKSkgZm9yICg7Z2V0TWFza1NldCgpLnAgPCBsdnAgJiYgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2dldE1hc2tTZXQoKS5wXSA9PT0gdW5kZWZpbmVkOyApIGdldE1hc2tTZXQoKS5wKys7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaW5pdGlhbGl6ZUNvbG9yTWFzayhpbnB1dCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZmluZENhcmV0UG9zKGNsaWVudHgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2FyZXRQb3MsIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBzdHlsZSBpbiBjb21wdXRlZFN0eWxlKSBpc05hTihzdHlsZSkgJiYgLTEgIT09IHN0eWxlLmluZGV4T2YoXCJmb250XCIpICYmIChlLnN0eWxlW3N0eWxlXSA9IGNvbXB1dGVkU3R5bGVbc3R5bGVdKTtcbiAgICAgICAgICAgICAgICBlLnN0eWxlLnRleHRUcmFuc2Zvcm0gPSBjb21wdXRlZFN0eWxlLnRleHRUcmFuc2Zvcm0sIGUuc3R5bGUubGV0dGVyU3BhY2luZyA9IGNvbXB1dGVkU3R5bGUubGV0dGVyU3BhY2luZywgXG4gICAgICAgICAgICAgICAgZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIiwgZS5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIiwgZS5zdHlsZS53aWR0aCA9IFwiYXV0b1wiLCBcbiAgICAgICAgICAgICAgICBlLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiLCBlLnN0eWxlLndoaXRlU3BhY2UgPSBcIm5vd3JhcFwiLCBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGUpO1xuICAgICAgICAgICAgICAgIHZhciBpdGwsIGlucHV0VGV4dCA9IGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKSwgcHJldmlvdXNXaWR0aCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChjYXJldFBvcyA9IDAsIGl0bCA9IGlucHV0VGV4dC5sZW5ndGg7IGNhcmV0UG9zIDw9IGl0bDsgY2FyZXRQb3MrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5pbm5lckhUTUwgKz0gaW5wdXRUZXh0LmNoYXJBdChjYXJldFBvcykgfHwgXCJfXCIsIGUub2Zmc2V0V2lkdGggPj0gY2xpZW50eCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9mZnNldDEgPSBjbGllbnR4IC0gcHJldmlvdXNXaWR0aCwgb2Zmc2V0MiA9IGUub2Zmc2V0V2lkdGggLSBjbGllbnR4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5pbm5lckhUTUwgPSBpbnB1dFRleHQuY2hhckF0KGNhcmV0UG9zKSwgb2Zmc2V0MSAtPSBlLm9mZnNldFdpZHRoIC8gMywgY2FyZXRQb3MgPSBvZmZzZXQxIDwgb2Zmc2V0MiA/IGNhcmV0UG9zIC0gMSA6IGNhcmV0UG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNXaWR0aCA9IGUub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGUpLCBjYXJldFBvcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjb21wdXRlZFN0eWxlID0gKGlucHV0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93KS5nZXRDb21wdXRlZFN0eWxlKGlucHV0LCBudWxsKSwgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGVtcGxhdGUuc3R5bGUud2lkdGggPSBjb21wdXRlZFN0eWxlLndpZHRoLCB0ZW1wbGF0ZS5zdHlsZS50ZXh0QWxpZ24gPSBjb21wdXRlZFN0eWxlLnRleHRBbGlnbiwgXG4gICAgICAgICAgICBjb2xvck1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCBjb2xvck1hc2suY2xhc3NOYW1lID0gXCJpbS1jb2xvcm1hc2tcIiwgXG4gICAgICAgICAgICBpbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjb2xvck1hc2ssIGlucHV0KSwgaW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpbnB1dCksIFxuICAgICAgICAgICAgY29sb3JNYXNrLmFwcGVuZENoaWxkKHRlbXBsYXRlKSwgY29sb3JNYXNrLmFwcGVuZENoaWxkKGlucHV0KSwgaW5wdXQuc3R5bGUubGVmdCA9IHRlbXBsYXRlLm9mZnNldExlZnQgKyBcInB4XCIsIFxuICAgICAgICAgICAgJChpbnB1dCkub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhcmV0KGlucHV0LCBmaW5kQ2FyZXRQb3MoZS5jbGllbnRYKSksIEV2ZW50SGFuZGxlcnMuY2xpY2tFdmVudC5jYWxsKGlucHV0LCBbIGUgXSk7XG4gICAgICAgICAgICB9KSwgJChpbnB1dCkub24oXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLnNoaWZ0S2V5IHx8ICExID09PSBvcHRzLmluc2VydE1vZGUgfHwgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ29sb3JNYXNrKGlucHV0KTtcbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlckNvbG9yTWFzayhpbnB1dCwgY2FyZXRQb3MsIGNsZWFyKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVTdGF0aWMoKSB7XG4gICAgICAgICAgICAgICAgaXNTdGF0aWMgfHwgbnVsbCAhPT0gdGVzdC5mbiAmJiB0ZXN0UG9zLmlucHV0ICE9PSB1bmRlZmluZWQgPyBpc1N0YXRpYyAmJiAobnVsbCAhPT0gdGVzdC5mbiAmJiB0ZXN0UG9zLmlucHV0ICE9PSB1bmRlZmluZWQgfHwgXCJcIiA9PT0gdGVzdC5kZWYpICYmIChpc1N0YXRpYyA9ICExLCBcbiAgICAgICAgICAgICAgICBtYXNrVGVtcGxhdGUgKz0gXCI8L3NwYW4+XCIpIDogKGlzU3RhdGljID0gITAsIG1hc2tUZW1wbGF0ZSArPSBcIjxzcGFuIGNsYXNzPSdpbS1zdGF0aWMnPlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNhcmV0KGZvcmNlKSB7XG4gICAgICAgICAgICAgICAgITAgIT09IGZvcmNlICYmIHBvcyAhPT0gY2FyZXRQb3MuYmVnaW4gfHwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gaW5wdXQgfHwgKG1hc2tUZW1wbGF0ZSArPSBcIjxzcGFuIGNsYXNzPSdpbS1jYXJldCcgc3R5bGU9J2JvcmRlci1yaWdodC13aWR0aDogMXB4O2JvcmRlci1yaWdodC1zdHlsZTogc29saWQ7Jz48L3NwYW4+XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRlc3QsIHRlc3RQb3MsIG5keEludGx6ciwgbWFza1RlbXBsYXRlID0gXCJcIiwgaXNTdGF0aWMgPSAhMSwgcG9zID0gMDtcbiAgICAgICAgICAgIGlmIChjb2xvck1hc2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhciBidWZmZXIgPSBnZXRCdWZmZXIoKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FyZXRQb3MgPT09IHVuZGVmaW5lZCA/IGNhcmV0UG9zID0gY2FyZXQoaW5wdXQpIDogY2FyZXRQb3MuYmVnaW4gPT09IHVuZGVmaW5lZCAmJiAoY2FyZXRQb3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiBjYXJldFBvcyxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBjYXJldFBvc1xuICAgICAgICAgICAgICAgIH0pLCAhMCAhPT0gY2xlYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGx2cCA9IGdldExhc3RWYWxpZFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNhcmV0KCksIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3NdID8gKHRlc3RQb3MgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0ID0gdGVzdFBvcy5tYXRjaCwgbmR4SW50bHpyID0gdGVzdFBvcy5sb2NhdG9yLnNsaWNlKCksIGhhbmRsZVN0YXRpYygpLCBtYXNrVGVtcGxhdGUgKz0gYnVmZmVyW3Bvc10pIDogKHRlc3RQb3MgPSBnZXRUZXN0VGVtcGxhdGUocG9zLCBuZHhJbnRsenIsIHBvcyAtIDEpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlc3QgPSB0ZXN0UG9zLm1hdGNoLCBuZHhJbnRsenIgPSB0ZXN0UG9zLmxvY2F0b3Iuc2xpY2UoKSwgKCExID09PSBvcHRzLmppdE1hc2tpbmcgfHwgcG9zIDwgbHZwIHx8IFwibnVtYmVyXCIgPT0gdHlwZW9mIG9wdHMuaml0TWFza2luZyAmJiBpc0Zpbml0ZShvcHRzLmppdE1hc2tpbmcpICYmIG9wdHMuaml0TWFza2luZyA+IHBvcykgJiYgKGhhbmRsZVN0YXRpYygpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tUZW1wbGF0ZSArPSBnZXRQbGFjZWhvbGRlcihwb3MsIHRlc3QpKSksIHBvcysrO1xuICAgICAgICAgICAgICAgICAgICB9IHdoaWxlICgobWF4TGVuZ3RoID09PSB1bmRlZmluZWQgfHwgcG9zIDwgbWF4TGVuZ3RoKSAmJiAobnVsbCAhPT0gdGVzdC5mbiB8fCBcIlwiICE9PSB0ZXN0LmRlZikgfHwgbHZwID4gcG9zIHx8IGlzU3RhdGljKTtcbiAgICAgICAgICAgICAgICAgICAgLTEgPT09IG1hc2tUZW1wbGF0ZS5pbmRleE9mKFwiaW0tY2FyZXRcIikgJiYgaGFuZGxlQ2FyZXQoITApLCBpc1N0YXRpYyAmJiBoYW5kbGVTdGF0aWMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gY29sb3JNYXNrLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpWzBdO1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IG1hc2tUZW1wbGF0ZSwgaW5wdXQuaW5wdXRtYXNrLnBvc2l0aW9uQ29sb3JNYXNrKGlucHV0LCB0ZW1wbGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWFza3NldCA9IG1hc2tzZXQgfHwgdGhpcy5tYXNrc2V0LCBvcHRzID0gb3B0cyB8fCB0aGlzLm9wdHM7XG4gICAgICAgIHZhciB1bmRvVmFsdWUsICRlbCwgbWF4TGVuZ3RoLCBjb2xvck1hc2ssIGlucHV0bWFzayA9IHRoaXMsIGVsID0gdGhpcy5lbCwgaXNSVEwgPSB0aGlzLmlzUlRMLCBza2lwS2V5UHJlc3NFdmVudCA9ICExLCBza2lwSW5wdXRFdmVudCA9ICExLCBpZ25vcmFibGUgPSAhMSwgbW91c2VFbnRlciA9ICExLCBFdmVudFJ1bGVyID0ge1xuICAgICAgICAgICAgb246IGZ1bmN0aW9uKGlucHV0LCBldmVudE5hbWUsIGV2ZW50SGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHZhciBldiA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRtYXNrID09PSB1bmRlZmluZWQgJiYgXCJGT1JNXCIgIT09IHRoaXMubm9kZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbU9wdHMgPSAkLmRhdGEodGhpcywgXCJfaW5wdXRtYXNrX29wdHNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbU9wdHMgPyBuZXcgSW5wdXRtYXNrKGltT3B0cykubWFzayh0aGlzKSA6IEV2ZW50UnVsZXIub2ZmKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwic2V0dmFsdWVcIiA9PT0gZS50eXBlIHx8IFwiRk9STVwiID09PSB0aGlzLm5vZGVOYW1lIHx8ICEodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5ICYmICEoXCJrZXlkb3duXCIgPT09IGUudHlwZSAmJiBlLmN0cmxLZXkgJiYgNjcgPT09IGUua2V5Q29kZSB8fCAhMSA9PT0gb3B0cy50YWJUaHJvdWdoICYmIGUua2V5Q29kZSA9PT0gSW5wdXRtYXNrLmtleUNvZGUuVEFCKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImlucHV0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gc2tpcElucHV0RXZlbnQpIHJldHVybiBza2lwSW5wdXRFdmVudCA9ICExLCBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwia2V5ZG93blwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2lwS2V5UHJlc3NFdmVudCA9ICExLCBza2lwSW5wdXRFdmVudCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImtleXByZXNzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gc2tpcEtleVByZXNzRXZlbnQpIHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraXBLZXlQcmVzc0V2ZW50ID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2xpY2tcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGllbW9iaWxlIHx8IGlwaG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMCksICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5WYWwgPSBldmVudEhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITEgPT09IHJldHVyblZhbCAmJiAoZS5wcmV2ZW50RGVmYXVsdCgpLCBlLnN0b3BQcm9wYWdhdGlvbigpKSwgcmV0dXJuVmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpbnB1dC5pbnB1dG1hc2suZXZlbnRzW2V2ZW50TmFtZV0gPSBpbnB1dC5pbnB1dG1hc2suZXZlbnRzW2V2ZW50TmFtZV0gfHwgW10sIGlucHV0LmlucHV0bWFzay5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGV2KSwgXG4gICAgICAgICAgICAgICAgLTEgIT09ICQuaW5BcnJheShldmVudE5hbWUsIFsgXCJzdWJtaXRcIiwgXCJyZXNldFwiIF0pID8gbnVsbCAhPT0gaW5wdXQuZm9ybSAmJiAkKGlucHV0LmZvcm0pLm9uKGV2ZW50TmFtZSwgZXYpIDogJChpbnB1dCkub24oZXZlbnROYW1lLCBldik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb2ZmOiBmdW5jdGlvbihpbnB1dCwgZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuaW5wdXRtYXNrICYmIGlucHV0LmlucHV0bWFzay5ldmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50cztcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQgPyAoZXZlbnRzID0gW10sIGV2ZW50c1tldmVudF0gPSBpbnB1dC5pbnB1dG1hc2suZXZlbnRzW2V2ZW50XSkgOiBldmVudHMgPSBpbnB1dC5pbnB1dG1hc2suZXZlbnRzLCBcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGV2ZW50cywgZnVuY3Rpb24oZXZlbnROYW1lLCBldkFycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7ZXZBcnIubGVuZ3RoID4gMDsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV2ID0gZXZBcnIucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTEgIT09ICQuaW5BcnJheShldmVudE5hbWUsIFsgXCJzdWJtaXRcIiwgXCJyZXNldFwiIF0pID8gbnVsbCAhPT0gaW5wdXQuZm9ybSAmJiAkKGlucHV0LmZvcm0pLm9mZihldmVudE5hbWUsIGV2KSA6ICQoaW5wdXQpLm9mZihldmVudE5hbWUsIGV2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBpbnB1dC5pbnB1dG1hc2suZXZlbnRzW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgRXZlbnRIYW5kbGVycyA9IHtcbiAgICAgICAgICAgIGtleWRvd25FdmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXMsICRpbnB1dCA9ICQoaW5wdXQpLCBrID0gZS5rZXlDb2RlLCBwb3MgPSBjYXJldChpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKGsgPT09IElucHV0bWFzay5rZXlDb2RlLkJBQ0tTUEFDRSB8fCBrID09PSBJbnB1dG1hc2sua2V5Q29kZS5ERUxFVEUgfHwgaXBob25lICYmIGsgPT09IElucHV0bWFzay5rZXlDb2RlLkJBQ0tTUEFDRV9TQUZBUkkgfHwgZS5jdHJsS2V5ICYmIGsgPT09IElucHV0bWFzay5rZXlDb2RlLlggJiYgIWZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksIGV2TmFtZSA9IFwib25cIiArIGV2ZW50TmFtZSwgaXNTdXBwb3J0ZWQgPSBldk5hbWUgaW4gZWw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1N1cHBvcnRlZCB8fCAoZWwuc2V0QXR0cmlidXRlKGV2TmFtZSwgXCJyZXR1cm47XCIpLCBpc1N1cHBvcnRlZCA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZWxbZXZOYW1lXSksIFxuICAgICAgICAgICAgICAgICAgICBlbCA9IG51bGwsIGlzU3VwcG9ydGVkO1xuICAgICAgICAgICAgICAgIH0oXCJjdXRcIikpIGUucHJldmVudERlZmF1bHQoKSwgaGFuZGxlUmVtb3ZlKGlucHV0LCBrLCBwb3MpLCB3cml0ZUJ1ZmZlcihpbnB1dCwgZ2V0QnVmZmVyKCEwKSwgZ2V0TWFza1NldCgpLnAsIGUsIGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKSAhPT0gZ2V0QnVmZmVyKCkuam9pbihcIlwiKSksIFxuICAgICAgICAgICAgICAgIGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKSA9PT0gZ2V0QnVmZmVyVGVtcGxhdGUoKS5qb2luKFwiXCIpID8gJGlucHV0LnRyaWdnZXIoXCJjbGVhcmVkXCIpIDogITAgPT09IGlzQ29tcGxldGUoZ2V0QnVmZmVyKCkpICYmICRpbnB1dC50cmlnZ2VyKFwiY29tcGxldGVcIik7IGVsc2UgaWYgKGsgPT09IElucHV0bWFzay5rZXlDb2RlLkVORCB8fCBrID09PSBJbnB1dG1hc2sua2V5Q29kZS5QQUdFX0RPV04pIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FyZXRQb3MgPSBzZWVrTmV4dChnZXRMYXN0VmFsaWRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5pbnNlcnRNb2RlIHx8IGNhcmV0UG9zICE9PSBnZXRNYXNrU2V0KCkubWFza0xlbmd0aCB8fCBlLnNoaWZ0S2V5IHx8IGNhcmV0UG9zLS0sIFxuICAgICAgICAgICAgICAgICAgICBjYXJldChpbnB1dCwgZS5zaGlmdEtleSA/IHBvcy5iZWdpbiA6IGNhcmV0UG9zLCBjYXJldFBvcywgITApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBrID09PSBJbnB1dG1hc2sua2V5Q29kZS5IT01FICYmICFlLnNoaWZ0S2V5IHx8IGsgPT09IElucHV0bWFzay5rZXlDb2RlLlBBR0VfVVAgPyAoZS5wcmV2ZW50RGVmYXVsdCgpLCBcbiAgICAgICAgICAgICAgICBjYXJldChpbnB1dCwgMCwgZS5zaGlmdEtleSA/IHBvcy5iZWdpbiA6IDAsICEwKSkgOiAob3B0cy51bmRvT25Fc2NhcGUgJiYgayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuRVNDQVBFIHx8IDkwID09PSBrICYmIGUuY3RybEtleSkgJiYgITAgIT09IGUuYWx0S2V5ID8gKGNoZWNrVmFsKGlucHV0LCAhMCwgITEsIHVuZG9WYWx1ZS5zcGxpdChcIlwiKSksIFxuICAgICAgICAgICAgICAgICRpbnB1dC50cmlnZ2VyKFwiY2xpY2tcIikpIDogayAhPT0gSW5wdXRtYXNrLmtleUNvZGUuSU5TRVJUIHx8IGUuc2hpZnRLZXkgfHwgZS5jdHJsS2V5ID8gITAgPT09IG9wdHMudGFiVGhyb3VnaCAmJiBrID09PSBJbnB1dG1hc2sua2V5Q29kZS5UQUIgPyAoITAgPT09IGUuc2hpZnRLZXkgPyAobnVsbCA9PT0gZ2V0VGVzdChwb3MuYmVnaW4pLm1hdGNoLmZuICYmIChwb3MuYmVnaW4gPSBzZWVrTmV4dChwb3MuYmVnaW4pKSwgXG4gICAgICAgICAgICAgICAgcG9zLmVuZCA9IHNlZWtQcmV2aW91cyhwb3MuYmVnaW4sICEwKSwgcG9zLmJlZ2luID0gc2Vla1ByZXZpb3VzKHBvcy5lbmQsICEwKSkgOiAocG9zLmJlZ2luID0gc2Vla05leHQocG9zLmJlZ2luLCAhMCksIFxuICAgICAgICAgICAgICAgIHBvcy5lbmQgPSBzZWVrTmV4dChwb3MuYmVnaW4sICEwKSwgcG9zLmVuZCA8IGdldE1hc2tTZXQoKS5tYXNrTGVuZ3RoICYmIHBvcy5lbmQtLSksIFxuICAgICAgICAgICAgICAgIHBvcy5iZWdpbiA8IGdldE1hc2tTZXQoKS5tYXNrTGVuZ3RoICYmIChlLnByZXZlbnREZWZhdWx0KCksIGNhcmV0KGlucHV0LCBwb3MuYmVnaW4sIHBvcy5lbmQpKSkgOiBlLnNoaWZ0S2V5IHx8ICExID09PSBvcHRzLmluc2VydE1vZGUgJiYgKGsgPT09IElucHV0bWFzay5rZXlDb2RlLlJJR0hUID8gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhcmV0UG9zID0gY2FyZXQoaW5wdXQpO1xuICAgICAgICAgICAgICAgICAgICBjYXJldChpbnB1dCwgY2FyZXRQb3MuYmVnaW4pO1xuICAgICAgICAgICAgICAgIH0sIDApIDogayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuTEVGVCAmJiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FyZXRQb3MgPSBjYXJldChpbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgIGNhcmV0KGlucHV0LCBpc1JUTCA/IGNhcmV0UG9zLmJlZ2luICsgMSA6IGNhcmV0UG9zLmJlZ2luIC0gMSk7XG4gICAgICAgICAgICAgICAgfSwgMCkpIDogKG9wdHMuaW5zZXJ0TW9kZSA9ICFvcHRzLmluc2VydE1vZGUsIGNhcmV0KGlucHV0LCBvcHRzLmluc2VydE1vZGUgfHwgcG9zLmJlZ2luICE9PSBnZXRNYXNrU2V0KCkubWFza0xlbmd0aCA/IHBvcy5iZWdpbiA6IHBvcy5iZWdpbiAtIDEpKTtcbiAgICAgICAgICAgICAgICBvcHRzLm9uS2V5RG93bi5jYWxsKHRoaXMsIGUsIGdldEJ1ZmZlcigpLCBjYXJldChpbnB1dCkuYmVnaW4sIG9wdHMpLCBpZ25vcmFibGUgPSAtMSAhPT0gJC5pbkFycmF5KGssIG9wdHMuaWdub3JhYmxlcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAga2V5cHJlc3NFdmVudDogZnVuY3Rpb24oZSwgY2hlY2t2YWwsIHdyaXRlT3V0LCBzdHJpY3QsIG5keCkge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXMsICRpbnB1dCA9ICQoaW5wdXQpLCBrID0gZS53aGljaCB8fCBlLmNoYXJDb2RlIHx8IGUua2V5Q29kZTtcbiAgICAgICAgICAgICAgICBpZiAoISghMCA9PT0gY2hlY2t2YWwgfHwgZS5jdHJsS2V5ICYmIGUuYWx0S2V5KSAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSB8fCBpZ25vcmFibGUpKSByZXR1cm4gayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuRU5URVIgJiYgdW5kb1ZhbHVlICE9PSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpICYmICh1bmRvVmFsdWUgPSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpLCBcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkaW5wdXQudHJpZ2dlcihcImNoYW5nZVwiKTtcbiAgICAgICAgICAgICAgICB9LCAwKSksICEwO1xuICAgICAgICAgICAgICAgIGlmIChrKSB7XG4gICAgICAgICAgICAgICAgICAgIDQ2ID09PSBrICYmICExID09PSBlLnNoaWZ0S2V5ICYmIFwiXCIgIT09IG9wdHMucmFkaXhQb2ludCAmJiAoayA9IG9wdHMucmFkaXhQb2ludC5jaGFyQ29kZUF0KDApKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcndhcmRQb3NpdGlvbiwgcG9zID0gY2hlY2t2YWwgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogbmR4LFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBuZHhcbiAgICAgICAgICAgICAgICAgICAgfSA6IGNhcmV0KGlucHV0KSwgYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoayk7XG4gICAgICAgICAgICAgICAgICAgIGdldE1hc2tTZXQoKS53cml0ZU91dEJ1ZmZlciA9ICEwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsUmVzdWx0ID0gaXNWYWxpZChwb3MsIGMsIHN0cmljdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghMSAhPT0gdmFsUmVzdWx0ICYmIChyZXNldE1hc2tTZXQoITApLCBmb3J3YXJkUG9zaXRpb24gPSB2YWxSZXN1bHQuY2FyZXQgIT09IHVuZGVmaW5lZCA/IHZhbFJlc3VsdC5jYXJldCA6IGNoZWNrdmFsID8gdmFsUmVzdWx0LnBvcyArIDEgOiBzZWVrTmV4dCh2YWxSZXN1bHQucG9zKSwgXG4gICAgICAgICAgICAgICAgICAgIGdldE1hc2tTZXQoKS5wID0gZm9yd2FyZFBvc2l0aW9uKSwgITEgIT09IHdyaXRlT3V0ICYmIChzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5vbktleVZhbGlkYXRpb24uY2FsbChpbnB1dCwgaywgdmFsUmVzdWx0LCBvcHRzKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMCksIGdldE1hc2tTZXQoKS53cml0ZU91dEJ1ZmZlciAmJiAhMSAhPT0gdmFsUmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJ1ZmZlciA9IGdldEJ1ZmZlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGVCdWZmZXIoaW5wdXQsIGJ1ZmZlciwgb3B0cy5udW1lcmljSW5wdXQgJiYgdmFsUmVzdWx0LmNhcmV0ID09PSB1bmRlZmluZWQgPyBzZWVrUHJldmlvdXMoZm9yd2FyZFBvc2l0aW9uKSA6IGZvcndhcmRQb3NpdGlvbiwgZSwgITAgIT09IGNoZWNrdmFsKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAhMCAhPT0gY2hlY2t2YWwgJiYgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMCA9PT0gaXNDb21wbGV0ZShidWZmZXIpICYmICRpbnB1dC50cmlnZ2VyKFwiY29tcGxldGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCgpLCBjaGVja3ZhbCkgcmV0dXJuICExICE9PSB2YWxSZXN1bHQgJiYgKHZhbFJlc3VsdC5mb3J3YXJkUG9zaXRpb24gPSBmb3J3YXJkUG9zaXRpb24pLCBcbiAgICAgICAgICAgICAgICAgICAgdmFsUmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXN0ZUV2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBWYWx1ZSwgaW5wdXQgPSB0aGlzLCBldiA9IGUub3JpZ2luYWxFdmVudCB8fCBlLCAkaW5wdXQgPSAkKGlucHV0KSwgaW5wdXRWYWx1ZSA9IGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoITApLCBjYXJldFBvcyA9IGNhcmV0KGlucHV0KTtcbiAgICAgICAgICAgICAgICBpc1JUTCAmJiAodGVtcFZhbHVlID0gY2FyZXRQb3MuZW5kLCBjYXJldFBvcy5lbmQgPSBjYXJldFBvcy5iZWdpbiwgY2FyZXRQb3MuYmVnaW4gPSB0ZW1wVmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZUJlZm9yZUNhcmV0ID0gaW5wdXRWYWx1ZS5zdWJzdHIoMCwgY2FyZXRQb3MuYmVnaW4pLCB2YWx1ZUFmdGVyQ2FyZXQgPSBpbnB1dFZhbHVlLnN1YnN0cihjYXJldFBvcy5lbmQsIGlucHV0VmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVCZWZvcmVDYXJldCA9PT0gKGlzUlRMID8gZ2V0QnVmZmVyVGVtcGxhdGUoKS5yZXZlcnNlKCkgOiBnZXRCdWZmZXJUZW1wbGF0ZSgpKS5zbGljZSgwLCBjYXJldFBvcy5iZWdpbikuam9pbihcIlwiKSAmJiAodmFsdWVCZWZvcmVDYXJldCA9IFwiXCIpLCBcbiAgICAgICAgICAgICAgICB2YWx1ZUFmdGVyQ2FyZXQgPT09IChpc1JUTCA/IGdldEJ1ZmZlclRlbXBsYXRlKCkucmV2ZXJzZSgpIDogZ2V0QnVmZmVyVGVtcGxhdGUoKSkuc2xpY2UoY2FyZXRQb3MuZW5kKS5qb2luKFwiXCIpICYmICh2YWx1ZUFmdGVyQ2FyZXQgPSBcIlwiKSwgXG4gICAgICAgICAgICAgICAgaXNSVEwgJiYgKHRlbXBWYWx1ZSA9IHZhbHVlQmVmb3JlQ2FyZXQsIHZhbHVlQmVmb3JlQ2FyZXQgPSB2YWx1ZUFmdGVyQ2FyZXQsIHZhbHVlQWZ0ZXJDYXJldCA9IHRlbXBWYWx1ZSksIFxuICAgICAgICAgICAgICAgIHdpbmRvdy5jbGlwYm9hcmREYXRhICYmIHdpbmRvdy5jbGlwYm9hcmREYXRhLmdldERhdGEpIGlucHV0VmFsdWUgPSB2YWx1ZUJlZm9yZUNhcmV0ICsgd2luZG93LmNsaXBib2FyZERhdGEuZ2V0RGF0YShcIlRleHRcIikgKyB2YWx1ZUFmdGVyQ2FyZXQ7IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWV2LmNsaXBib2FyZERhdGEgfHwgIWV2LmNsaXBib2FyZERhdGEuZ2V0RGF0YSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlID0gdmFsdWVCZWZvcmVDYXJldCArIGV2LmNsaXBib2FyZERhdGEuZ2V0RGF0YShcInRleHQvcGxhaW5cIikgKyB2YWx1ZUFmdGVyQ2FyZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBwYXN0ZVZhbHVlID0gaW5wdXRWYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKG9wdHMub25CZWZvcmVQYXN0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCExID09PSAocGFzdGVWYWx1ZSA9IG9wdHMub25CZWZvcmVQYXN0ZS5jYWxsKGlucHV0bWFzaywgaW5wdXRWYWx1ZSwgb3B0cykpKSByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBwYXN0ZVZhbHVlIHx8IChwYXN0ZVZhbHVlID0gaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjaGVja1ZhbChpbnB1dCwgITEsICExLCBpc1JUTCA/IHBhc3RlVmFsdWUuc3BsaXQoXCJcIikucmV2ZXJzZSgpIDogcGFzdGVWYWx1ZS50b1N0cmluZygpLnNwbGl0KFwiXCIpKSwgXG4gICAgICAgICAgICAgICAgd3JpdGVCdWZmZXIoaW5wdXQsIGdldEJ1ZmZlcigpLCBzZWVrTmV4dChnZXRMYXN0VmFsaWRQb3NpdGlvbigpKSwgZSwgdW5kb1ZhbHVlICE9PSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpKSwgXG4gICAgICAgICAgICAgICAgITAgPT09IGlzQ29tcGxldGUoZ2V0QnVmZmVyKCkpICYmICRpbnB1dC50cmlnZ2VyKFwiY29tcGxldGVcIiksIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnB1dEZhbGxCYWNrRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSB0aGlzLCBpbnB1dFZhbHVlID0gaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpO1xuICAgICAgICAgICAgICAgIGlmIChnZXRCdWZmZXIoKS5qb2luKFwiXCIpICE9PSBpbnB1dFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYXJldFBvcyA9IGNhcmV0KGlucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCExID09PSBmdW5jdGlvbihpbnB1dCwgaW5wdXRWYWx1ZSwgY2FyZXRQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIi5cIiA9PT0gaW5wdXRWYWx1ZS5jaGFyQXQoY2FyZXRQb3MuYmVnaW4gLSAxKSAmJiBcIlwiICE9PSBvcHRzLnJhZGl4UG9pbnQgJiYgKGlucHV0VmFsdWUgPSBpbnB1dFZhbHVlLnNwbGl0KFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWVbY2FyZXRQb3MuYmVnaW4gLSAxXSA9IG9wdHMucmFkaXhQb2ludC5jaGFyQXQoMCksIGlucHV0VmFsdWUgPSBpbnB1dFZhbHVlLmpvaW4oXCJcIikpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWUuY2hhckF0KGNhcmV0UG9zLmJlZ2luIC0gMSkgPT09IG9wdHMucmFkaXhQb2ludCAmJiBpbnB1dFZhbHVlLmxlbmd0aCA+IGdldEJ1ZmZlcigpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXlwcmVzcyA9IG5ldyAkLkV2ZW50KFwia2V5cHJlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleXByZXNzLndoaWNoID0gb3B0cy5yYWRpeFBvaW50LmNoYXJDb2RlQXQoMCksIEV2ZW50SGFuZGxlcnMua2V5cHJlc3NFdmVudC5jYWxsKGlucHV0LCBrZXlwcmVzcywgITAsICEwLCAhMSwgY2FyZXRQb3MuYmVnaW4gLSAxKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0oaW5wdXQsIGlucHV0VmFsdWUsIGNhcmV0UG9zKSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXRWYWx1ZSA9IGlucHV0VmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKFwiICsgSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KGdldEJ1ZmZlclRlbXBsYXRlKCkuam9pbihcIlwiKSkgKyBcIikqXCIpLCBcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICExID09PSBmdW5jdGlvbihpbnB1dCwgaW5wdXRWYWx1ZSwgY2FyZXRQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZW1vYmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dENoYXIgPSBpbnB1dFZhbHVlLnJlcGxhY2UoZ2V0QnVmZmVyKCkuam9pbihcIlwiKSwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDEgPT09IGlucHV0Q2hhci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleXByZXNzID0gbmV3ICQuRXZlbnQoXCJrZXlwcmVzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleXByZXNzLndoaWNoID0gaW5wdXRDaGFyLmNoYXJDb2RlQXQoMCksIEV2ZW50SGFuZGxlcnMua2V5cHJlc3NFdmVudC5jYWxsKGlucHV0LCBrZXlwcmVzcywgITAsICEwLCAhMSwgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2NhcmV0UG9zLmJlZ2luIC0gMV0gPyBjYXJldFBvcy5iZWdpbiA6IGNhcmV0UG9zLmJlZ2luIC0gMSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0oaW5wdXQsIGlucHV0VmFsdWUsIGNhcmV0UG9zKSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICBjYXJldFBvcy5iZWdpbiA+IGlucHV0VmFsdWUubGVuZ3RoICYmIChjYXJldChpbnB1dCwgaW5wdXRWYWx1ZS5sZW5ndGgpLCBjYXJldFBvcyA9IGNhcmV0KGlucHV0KSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBidWZmZXIgPSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpLCBmcm9udFBhcnQgPSBpbnB1dFZhbHVlLnN1YnN0cigwLCBjYXJldFBvcy5iZWdpbiksIGJhY2tQYXJ0ID0gaW5wdXRWYWx1ZS5zdWJzdHIoY2FyZXRQb3MuYmVnaW4pLCBmcm9udEJ1ZmZlclBhcnQgPSBidWZmZXIuc3Vic3RyKDAsIGNhcmV0UG9zLmJlZ2luKSwgYmFja0J1ZmZlclBhcnQgPSBidWZmZXIuc3Vic3RyKGNhcmV0UG9zLmJlZ2luKSwgc2VsZWN0aW9uID0gY2FyZXRQb3MsIGVudHJpZXMgPSBcIlwiLCBpc0VudHJ5ID0gITE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmcm9udFBhcnQgIT09IGZyb250QnVmZmVyUGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLmJlZ2luID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGZwbCA9IChpc0VudHJ5ID0gZnJvbnRQYXJ0Lmxlbmd0aCA+PSBmcm9udEJ1ZmZlclBhcnQubGVuZ3RoKSA/IGZyb250UGFydC5sZW5ndGggOiBmcm9udEJ1ZmZlclBhcnQubGVuZ3RoLCBpID0gMDsgZnJvbnRQYXJ0LmNoYXJBdChpKSA9PT0gZnJvbnRCdWZmZXJQYXJ0LmNoYXJBdChpKSAmJiBpIDwgZnBsOyBpKyspIHNlbGVjdGlvbi5iZWdpbisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNFbnRyeSAmJiAoZW50cmllcyArPSBmcm9udFBhcnQuc2xpY2Uoc2VsZWN0aW9uLmJlZ2luLCBzZWxlY3Rpb24uZW5kKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYmFja1BhcnQgIT09IGJhY2tCdWZmZXJQYXJ0ICYmIChiYWNrUGFydC5sZW5ndGggPiBiYWNrQnVmZmVyUGFydC5sZW5ndGggPyBpc0VudHJ5ICYmIChzZWxlY3Rpb24uZW5kID0gc2VsZWN0aW9uLmJlZ2luKSA6IGJhY2tQYXJ0Lmxlbmd0aCA8IGJhY2tCdWZmZXJQYXJ0Lmxlbmd0aCA/IHNlbGVjdGlvbi5lbmQgKz0gYmFja0J1ZmZlclBhcnQubGVuZ3RoIC0gYmFja1BhcnQubGVuZ3RoIDogYmFja1BhcnQuY2hhckF0KDApICE9PSBiYWNrQnVmZmVyUGFydC5jaGFyQXQoMCkgJiYgc2VsZWN0aW9uLmVuZCsrKSwgXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlQnVmZmVyKGlucHV0LCBnZXRCdWZmZXIoKSwgc2VsZWN0aW9uKSwgZW50cmllcy5sZW5ndGggPiAwID8gJC5lYWNoKGVudHJpZXMuc3BsaXQoXCJcIiksIGZ1bmN0aW9uKG5keCwgZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXlwcmVzcyA9IG5ldyAkLkV2ZW50KFwia2V5cHJlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlwcmVzcy53aGljaCA9IGVudHJ5LmNoYXJDb2RlQXQoMCksIGlnbm9yYWJsZSA9ICExLCBFdmVudEhhbmRsZXJzLmtleXByZXNzRXZlbnQuY2FsbChpbnB1dCwga2V5cHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICB9KSA6IChzZWxlY3Rpb24uYmVnaW4gPT09IHNlbGVjdGlvbi5lbmQgLSAxICYmIGNhcmV0KGlucHV0LCBzZWVrUHJldmlvdXMoc2VsZWN0aW9uLmJlZ2luICsgMSksIHNlbGVjdGlvbi5lbmQpLCBcbiAgICAgICAgICAgICAgICAgICAgZS5rZXlDb2RlID0gSW5wdXRtYXNrLmtleUNvZGUuREVMRVRFLCBFdmVudEhhbmRsZXJzLmtleWRvd25FdmVudC5jYWxsKGlucHV0LCBlKSksIFxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldFZhbHVlRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0bWFzay5yZWZyZXNoVmFsdWUgPSAhMTtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSB0aGlzLCB2YWx1ZSA9IGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoITApO1xuICAgICAgICAgICAgICAgICQuaXNGdW5jdGlvbihvcHRzLm9uQmVmb3JlTWFzaykgJiYgKHZhbHVlID0gb3B0cy5vbkJlZm9yZU1hc2suY2FsbChpbnB1dG1hc2ssIHZhbHVlLCBvcHRzKSB8fCB2YWx1ZSksIFxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoXCJcIiksIGNoZWNrVmFsKGlucHV0LCAhMCwgITEsIGlzUlRMID8gdmFsdWUucmV2ZXJzZSgpIDogdmFsdWUpLCBcbiAgICAgICAgICAgICAgICB1bmRvVmFsdWUgPSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpLCAob3B0cy5jbGVhck1hc2tPbkxvc3RGb2N1cyB8fCBvcHRzLmNsZWFySW5jb21wbGV0ZSkgJiYgaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpID09PSBnZXRCdWZmZXJUZW1wbGF0ZSgpLmpvaW4oXCJcIikgJiYgaW5wdXQuaW5wdXRtYXNrLl92YWx1ZVNldChcIlwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb2N1c0V2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gdGhpcywgbnB0VmFsdWUgPSBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCk7XG4gICAgICAgICAgICAgICAgb3B0cy5zaG93TWFza09uRm9jdXMgJiYgKCFvcHRzLnNob3dNYXNrT25Ib3ZlciB8fCBvcHRzLnNob3dNYXNrT25Ib3ZlciAmJiBcIlwiID09PSBucHRWYWx1ZSkgJiYgKGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKSAhPT0gZ2V0QnVmZmVyKCkuam9pbihcIlwiKSA/IHdyaXRlQnVmZmVyKGlucHV0LCBnZXRCdWZmZXIoKSwgc2Vla05leHQoZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSkpIDogITEgPT09IG1vdXNlRW50ZXIgJiYgY2FyZXQoaW5wdXQsIHNlZWtOZXh0KGdldExhc3RWYWxpZFBvc2l0aW9uKCkpKSksIFxuICAgICAgICAgICAgICAgICEwID09PSBvcHRzLnBvc2l0aW9uQ2FyZXRPblRhYiAmJiAhMSA9PT0gbW91c2VFbnRlciAmJiBcIlwiICE9PSBucHRWYWx1ZSAmJiAod3JpdGVCdWZmZXIoaW5wdXQsIGdldEJ1ZmZlcigpLCBjYXJldChpbnB1dCkpLCBcbiAgICAgICAgICAgICAgICBFdmVudEhhbmRsZXJzLmNsaWNrRXZlbnQuYXBwbHkoaW5wdXQsIFsgZSwgITAgXSkpLCB1bmRvVmFsdWUgPSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlbGVhdmVFdmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlRW50ZXIgPSAhMSwgb3B0cy5jbGVhck1hc2tPbkxvc3RGb2N1cyAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBpbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYnVmZmVyID0gZ2V0QnVmZmVyKCkuc2xpY2UoKSwgbnB0VmFsdWUgPSBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCk7XG4gICAgICAgICAgICAgICAgICAgIG5wdFZhbHVlICE9PSBpbnB1dC5nZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKSAmJiBcIlwiICE9PSBucHRWYWx1ZSAmJiAoLTEgPT09IGdldExhc3RWYWxpZFBvc2l0aW9uKCkgJiYgbnB0VmFsdWUgPT09IGdldEJ1ZmZlclRlbXBsYXRlKCkuam9pbihcIlwiKSA/IGJ1ZmZlciA9IFtdIDogY2xlYXJPcHRpb25hbFRhaWwoYnVmZmVyKSwgXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlQnVmZmVyKGlucHV0LCBidWZmZXIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xpY2tFdmVudDogZnVuY3Rpb24oZSwgdGFiYmVkKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZG9SYWRpeEZvY3VzKGNsaWNrUG9zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcIlwiICE9PSBvcHRzLnJhZGl4UG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2cHMgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodnBzW2NsaWNrUG9zXSA9PT0gdW5kZWZpbmVkIHx8IHZwc1tjbGlja1Bvc10uaW5wdXQgPT09IGdldFBsYWNlaG9sZGVyKGNsaWNrUG9zKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGlja1BvcyA8IHNlZWtOZXh0KC0xKSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByYWRpeFBvcyA9ICQuaW5BcnJheShvcHRzLnJhZGl4UG9pbnQsIGdldEJ1ZmZlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoLTEgIT09IHJhZGl4UG9zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHZwIGluIHZwcykgaWYgKHJhZGl4UG9zIDwgdnAgJiYgdnBzW3ZwXS5pbnB1dCAhPT0gZ2V0UGxhY2Vob2xkZXIodnApKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBpbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkQ2FyZXQgPSBjYXJldChpbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFiYmVkICYmIChpc1JUTCA/IHNlbGVjdGVkQ2FyZXQuZW5kID0gc2VsZWN0ZWRDYXJldC5iZWdpbiA6IHNlbGVjdGVkQ2FyZXQuYmVnaW4gPSBzZWxlY3RlZENhcmV0LmVuZCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXJldC5iZWdpbiA9PT0gc2VsZWN0ZWRDYXJldC5lbmQpIHN3aXRjaCAob3B0cy5wb3NpdGlvbkNhcmV0T25DbGljaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm9uZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyYWRpeEZvY3VzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvUmFkaXhGb2N1cyhzZWxlY3RlZENhcmV0LmJlZ2luKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmFkaXhQb3MgPSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpLmluZGV4T2Yob3B0cy5yYWRpeFBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXQoaW5wdXQsIG9wdHMubnVtZXJpY0lucHV0ID8gc2Vla05leHQocmFkaXhQb3MpIDogcmFkaXhQb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2xpY2tQb3NpdGlvbiA9IHNlbGVjdGVkQ2FyZXQuYmVnaW4sIGx2Y2xpY2tQb3NpdGlvbiA9IGdldExhc3RWYWxpZFBvc2l0aW9uKGNsaWNrUG9zaXRpb24sICEwKSwgbGFzdFBvc2l0aW9uID0gc2Vla05leHQobHZjbGlja1Bvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xpY2tQb3NpdGlvbiA8IGxhc3RQb3NpdGlvbikgY2FyZXQoaW5wdXQsIGlzTWFzayhjbGlja1Bvc2l0aW9uLCAhMCkgfHwgaXNNYXNrKGNsaWNrUG9zaXRpb24gLSAxLCAhMCkgPyBjbGlja1Bvc2l0aW9uIDogc2Vla05leHQoY2xpY2tQb3NpdGlvbikpOyBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGx2cCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tsdmNsaWNrUG9zaXRpb25dLCB0dCA9IGdldFRlc3RUZW1wbGF0ZShsYXN0UG9zaXRpb24sIGx2cCA/IGx2cC5tYXRjaC5sb2NhdG9yIDogdW5kZWZpbmVkLCBsdnApLCBwbGFjZWhvbGRlciA9IGdldFBsYWNlaG9sZGVyKGxhc3RQb3NpdGlvbiwgdHQubWF0Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJcIiAhPT0gcGxhY2Vob2xkZXIgJiYgZ2V0QnVmZmVyKClbbGFzdFBvc2l0aW9uXSAhPT0gcGxhY2Vob2xkZXIgJiYgITAgIT09IHR0Lm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciAmJiAhMCAhPT0gdHQubWF0Y2gubmV3QmxvY2tNYXJrZXIgfHwgIWlzTWFzayhsYXN0UG9zaXRpb24sICEwKSAmJiB0dC5tYXRjaC5kZWYgPT09IHBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3UG9zID0gc2Vla05leHQobGFzdFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGlja1Bvc2l0aW9uID49IG5ld1BvcyB8fCBjbGlja1Bvc2l0aW9uID09PSBsYXN0UG9zaXRpb24pICYmIChsYXN0UG9zaXRpb24gPSBuZXdQb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0KGlucHV0LCBsYXN0UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRibGNsaWNrRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmV0KGlucHV0LCAwLCBzZWVrTmV4dChnZXRMYXN0VmFsaWRQb3NpdGlvbigpKSk7XG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3V0RXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSB0aGlzLCAkaW5wdXQgPSAkKGlucHV0KSwgcG9zID0gY2FyZXQoaW5wdXQpLCBldiA9IGUub3JpZ2luYWxFdmVudCB8fCBlLCBjbGlwYm9hcmREYXRhID0gd2luZG93LmNsaXBib2FyZERhdGEgfHwgZXYuY2xpcGJvYXJkRGF0YSwgY2xpcERhdGEgPSBpc1JUTCA/IGdldEJ1ZmZlcigpLnNsaWNlKHBvcy5lbmQsIHBvcy5iZWdpbikgOiBnZXRCdWZmZXIoKS5zbGljZShwb3MuYmVnaW4sIHBvcy5lbmQpO1xuICAgICAgICAgICAgICAgIGNsaXBib2FyZERhdGEuc2V0RGF0YShcInRleHRcIiwgaXNSVEwgPyBjbGlwRGF0YS5yZXZlcnNlKCkuam9pbihcIlwiKSA6IGNsaXBEYXRhLmpvaW4oXCJcIikpLCBcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCAmJiBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIiksIGhhbmRsZVJlbW92ZShpbnB1dCwgSW5wdXRtYXNrLmtleUNvZGUuREVMRVRFLCBwb3MpLCBcbiAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcihpbnB1dCwgZ2V0QnVmZmVyKCksIGdldE1hc2tTZXQoKS5wLCBlLCB1bmRvVmFsdWUgIT09IGdldEJ1ZmZlcigpLmpvaW4oXCJcIikpLCBcbiAgICAgICAgICAgICAgICBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkgPT09IGdldEJ1ZmZlclRlbXBsYXRlKCkuam9pbihcIlwiKSAmJiAkaW5wdXQudHJpZ2dlcihcImNsZWFyZWRcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmx1ckV2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyksIGlucHV0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuaW5wdXRtYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBucHRWYWx1ZSA9IGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKSwgYnVmZmVyID0gZ2V0QnVmZmVyKCkuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgXCJcIiAhPT0gbnB0VmFsdWUgJiYgKG9wdHMuY2xlYXJNYXNrT25Mb3N0Rm9jdXMgJiYgKC0xID09PSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpICYmIG5wdFZhbHVlID09PSBnZXRCdWZmZXJUZW1wbGF0ZSgpLmpvaW4oXCJcIikgPyBidWZmZXIgPSBbXSA6IGNsZWFyT3B0aW9uYWxUYWlsKGJ1ZmZlcikpLCBcbiAgICAgICAgICAgICAgICAgICAgITEgPT09IGlzQ29tcGxldGUoYnVmZmVyKSAmJiAoc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC50cmlnZ2VyKFwiaW5jb21wbGV0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMCksIG9wdHMuY2xlYXJJbmNvbXBsZXRlICYmIChyZXNldE1hc2tTZXQoKSwgYnVmZmVyID0gb3B0cy5jbGVhck1hc2tPbkxvc3RGb2N1cyA/IFtdIDogZ2V0QnVmZmVyVGVtcGxhdGUoKS5zbGljZSgpKSksIFxuICAgICAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcihpbnB1dCwgYnVmZmVyLCB1bmRlZmluZWQsIGUpKSwgdW5kb1ZhbHVlICE9PSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpICYmICh1bmRvVmFsdWUgPSBidWZmZXIuam9pbihcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC50cmlnZ2VyKFwiY2hhbmdlXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2VlbnRlckV2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBtb3VzZUVudGVyID0gITAsIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGlucHV0ICYmIG9wdHMuc2hvd01hc2tPbkhvdmVyICYmIGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKSAhPT0gZ2V0QnVmZmVyKCkuam9pbihcIlwiKSAmJiB3cml0ZUJ1ZmZlcihpbnB1dCwgZ2V0QnVmZmVyKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdEV2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdW5kb1ZhbHVlICE9PSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpICYmICRlbC50cmlnZ2VyKFwiY2hhbmdlXCIpLCBvcHRzLmNsZWFyTWFza09uTG9zdEZvY3VzICYmIC0xID09PSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpICYmIGVsLmlucHV0bWFzay5fdmFsdWVHZXQgJiYgZWwuaW5wdXRtYXNrLl92YWx1ZUdldCgpID09PSBnZXRCdWZmZXJUZW1wbGF0ZSgpLmpvaW4oXCJcIikgJiYgZWwuaW5wdXRtYXNrLl92YWx1ZVNldChcIlwiKSwgXG4gICAgICAgICAgICAgICAgb3B0cy5yZW1vdmVNYXNrT25TdWJtaXQgJiYgKGVsLmlucHV0bWFzay5fdmFsdWVTZXQoZWwuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKSwgITApLCBcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcihlbCwgZ2V0QnVmZmVyKCkpO1xuICAgICAgICAgICAgICAgIH0sIDApKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXNldEV2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgZWwuaW5wdXRtYXNrLnJlZnJlc2hWYWx1ZSA9ICEwLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkZWwudHJpZ2dlcihcInNldHZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBJbnB1dG1hc2sucHJvdG90eXBlLnBvc2l0aW9uQ29sb3JNYXNrID0gZnVuY3Rpb24oaW5wdXQsIHRlbXBsYXRlKSB7XG4gICAgICAgICAgICBpbnB1dC5zdHlsZS5sZWZ0ID0gdGVtcGxhdGUub2Zmc2V0TGVmdCArIFwicHhcIjtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHZhbHVlQnVmZmVyO1xuICAgICAgICBpZiAoYWN0aW9uT2JqICE9PSB1bmRlZmluZWQpIHN3aXRjaCAoYWN0aW9uT2JqLmFjdGlvbikge1xuICAgICAgICAgIGNhc2UgXCJpc0NvbXBsZXRlXCI6XG4gICAgICAgICAgICByZXR1cm4gZWwgPSBhY3Rpb25PYmouZWwsIGlzQ29tcGxldGUoZ2V0QnVmZmVyKCkpO1xuXG4gICAgICAgICAgY2FzZSBcInVubWFza2VkdmFsdWVcIjpcbiAgICAgICAgICAgIHJldHVybiBlbCAhPT0gdW5kZWZpbmVkICYmIGFjdGlvbk9iai52YWx1ZSA9PT0gdW5kZWZpbmVkIHx8ICh2YWx1ZUJ1ZmZlciA9IGFjdGlvbk9iai52YWx1ZSwgXG4gICAgICAgICAgICB2YWx1ZUJ1ZmZlciA9ICgkLmlzRnVuY3Rpb24ob3B0cy5vbkJlZm9yZU1hc2spID8gb3B0cy5vbkJlZm9yZU1hc2suY2FsbChpbnB1dG1hc2ssIHZhbHVlQnVmZmVyLCBvcHRzKSB8fCB2YWx1ZUJ1ZmZlciA6IHZhbHVlQnVmZmVyKS5zcGxpdChcIlwiKSwgXG4gICAgICAgICAgICBjaGVja1ZhbCh1bmRlZmluZWQsICExLCAhMSwgaXNSVEwgPyB2YWx1ZUJ1ZmZlci5yZXZlcnNlKCkgOiB2YWx1ZUJ1ZmZlciksICQuaXNGdW5jdGlvbihvcHRzLm9uQmVmb3JlV3JpdGUpICYmIG9wdHMub25CZWZvcmVXcml0ZS5jYWxsKGlucHV0bWFzaywgdW5kZWZpbmVkLCBnZXRCdWZmZXIoKSwgMCwgb3B0cykpLCBcbiAgICAgICAgICAgIHVubWFza2VkdmFsdWUoZWwpO1xuXG4gICAgICAgICAgY2FzZSBcIm1hc2tcIjpcbiAgICAgICAgICAgICFmdW5jdGlvbihlbGVtKSB7XG4gICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vZmYoZWxlbSk7XG4gICAgICAgICAgICAgICAgdmFyIGlzU3VwcG9ydGVkID0gZnVuY3Rpb24oaW5wdXQsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRUeXBlID0gaW5wdXQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSwgaXNTdXBwb3J0ZWQgPSBcIklOUFVUXCIgPT09IGlucHV0LnRhZ05hbWUgJiYgLTEgIT09ICQuaW5BcnJheShlbGVtZW50VHlwZSwgb3B0cy5zdXBwb3J0c0lucHV0VHlwZSkgfHwgaW5wdXQuaXNDb250ZW50RWRpdGFibGUgfHwgXCJURVhUQVJFQVwiID09PSBpbnB1dC50YWdOYW1lO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzU3VwcG9ydGVkKSBpZiAoXCJJTlBVVFwiID09PSBpbnB1dC50YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIGVsZW1lbnRUeXBlKSwgaXNTdXBwb3J0ZWQgPSBcInRleHRcIiA9PT0gZWwudHlwZSwgZWwgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaXNTdXBwb3J0ZWQgPSBcInBhcnRpYWxcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExICE9PSBpc1N1cHBvcnRlZCA/IGZ1bmN0aW9uKG5wdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0dGVyKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0bWFzayA/IHRoaXMuaW5wdXRtYXNrLm9wdHMuYXV0b1VubWFzayA/IHRoaXMuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKSA6IC0xICE9PSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpIHx8ICEwICE9PSBvcHRzLm51bGxhYmxlID8gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcyAmJiBvcHRzLmNsZWFyTWFza09uTG9zdEZvY3VzID8gKGlzUlRMID8gY2xlYXJPcHRpb25hbFRhaWwoZ2V0QnVmZmVyKCkuc2xpY2UoKSkucmV2ZXJzZSgpIDogY2xlYXJPcHRpb25hbFRhaWwoZ2V0QnVmZmVyKCkuc2xpY2UoKSkpLmpvaW4oXCJcIikgOiB2YWx1ZUdldC5jYWxsKHRoaXMpIDogXCJcIiA6IHZhbHVlR2V0LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXR0ZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVNldC5jYWxsKHRoaXMsIHZhbHVlKSwgdGhpcy5pbnB1dG1hc2sgJiYgJCh0aGlzKS50cmlnZ2VyKFwic2V0dmFsdWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVHZXQsIHZhbHVlU2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFucHQuaW5wdXRtYXNrLl9fdmFsdWVHZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgIT09IG9wdHMubm9WYWx1ZVBhdGNoaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiAoT2JqZWN0LmdldFByb3RvdHlwZU9mID0gXCJvYmplY3RcIiA9PSB0eXBlb2YgXCJ0ZXN0XCIuX19wcm90b19fID8gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5fX3Byb3RvX187XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZVByb3BlcnR5ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QuZ2V0UHJvdG90eXBlT2YobnB0KSwgXCJ2YWx1ZVwiKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlUHJvcGVydHkgJiYgdmFsdWVQcm9wZXJ0eS5nZXQgJiYgdmFsdWVQcm9wZXJ0eS5zZXQgPyAodmFsdWVHZXQgPSB2YWx1ZVByb3BlcnR5LmdldCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVNldCA9IHZhbHVlUHJvcGVydHkuc2V0LCBPYmplY3QuZGVmaW5lUHJvcGVydHkobnB0LCBcInZhbHVlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGdldHRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IHNldHRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkgOiBcIklOUFVUXCIgIT09IG5wdC50YWdOYW1lICYmICh2YWx1ZUdldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdmFsdWVTZXQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucHQsIFwidmFsdWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZ2V0dGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogc2V0dGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGRvY3VtZW50Ll9fbG9va3VwR2V0dGVyX18gJiYgbnB0Ll9fbG9va3VwR2V0dGVyX18oXCJ2YWx1ZVwiKSAmJiAodmFsdWVHZXQgPSBucHQuX19sb29rdXBHZXR0ZXJfXyhcInZhbHVlXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVTZXQgPSBucHQuX19sb29rdXBTZXR0ZXJfXyhcInZhbHVlXCIpLCBucHQuX19kZWZpbmVHZXR0ZXJfXyhcInZhbHVlXCIsIGdldHRlciksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBucHQuX19kZWZpbmVTZXR0ZXJfXyhcInZhbHVlXCIsIHNldHRlcikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBucHQuaW5wdXRtYXNrLl9fdmFsdWVHZXQgPSB2YWx1ZUdldCwgbnB0LmlucHV0bWFzay5fX3ZhbHVlU2V0ID0gdmFsdWVTZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5wdC5pbnB1dG1hc2suX3ZhbHVlR2V0ID0gZnVuY3Rpb24ob3ZlcnJ1bGVSVEwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzUlRMICYmICEwICE9PSBvdmVycnVsZVJUTCA/IHZhbHVlR2V0LmNhbGwodGhpcy5lbCkuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiB2YWx1ZUdldC5jYWxsKHRoaXMuZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG5wdC5pbnB1dG1hc2suX3ZhbHVlU2V0ID0gZnVuY3Rpb24odmFsdWUsIG92ZXJydWxlUlRMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlU2V0LmNhbGwodGhpcy5lbCwgbnVsbCA9PT0gdmFsdWUgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiAhMCAhPT0gb3ZlcnJ1bGVSVEwgJiYgaXNSVEwgPyB2YWx1ZS5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKSA6IHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB2YWx1ZUdldCA9PT0gdW5kZWZpbmVkICYmICh2YWx1ZUdldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB2YWx1ZVNldCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbih0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkLnZhbEhvb2tzICYmICgkLnZhbEhvb2tzW3R5cGVdID09PSB1bmRlZmluZWQgfHwgITAgIT09ICQudmFsSG9va3NbdHlwZV0uaW5wdXRtYXNrcGF0Y2gpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaG9va0dldCA9ICQudmFsSG9va3NbdHlwZV0gJiYgJC52YWxIb29rc1t0eXBlXS5nZXQgPyAkLnZhbEhvb2tzW3R5cGVdLmdldCA6IGZ1bmN0aW9uKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHZhbGhvb2tTZXQgPSAkLnZhbEhvb2tzW3R5cGVdICYmICQudmFsSG9va3NbdHlwZV0uc2V0ID8gJC52YWxIb29rc1t0eXBlXS5zZXQgOiBmdW5jdGlvbihlbGVtLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLnZhbHVlID0gdmFsdWUsIGVsZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC52YWxIb29rc1t0eXBlXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0uaW5wdXRtYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5pbnB1dG1hc2sub3B0cy5hdXRvVW5tYXNrKSByZXR1cm4gZWxlbS5pbnB1dG1hc2sudW5tYXNrZWR2YWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHZhbGhvb2tHZXQoZWxlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTEgIT09IGdldExhc3RWYWxpZFBvc2l0aW9uKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBlbGVtLmlucHV0bWFzay5tYXNrc2V0LnZhbGlkUG9zaXRpb25zKSB8fCAhMCAhPT0gb3B0cy5udWxsYWJsZSA/IHJlc3VsdCA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbGhvb2tHZXQoZWxlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKGVsZW0sIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQsICRlbGVtID0gJChlbGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCA9IHZhbGhvb2tTZXQoZWxlbSwgdmFsdWUpLCBlbGVtLmlucHV0bWFzayAmJiAkZWxlbS50cmlnZ2VyKFwic2V0dmFsdWVcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dG1hc2twYXRjaDogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KG5wdC50eXBlKSwgZnVuY3Rpb24obnB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub24obnB0LCBcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dG1hc2suX3ZhbHVlR2V0KCkgIT09IGdldEJ1ZmZlcigpLmpvaW4oXCJcIikgJiYgJGlucHV0LnRyaWdnZXIoXCJzZXR2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfShucHQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfShpbnB1dCkgOiBpbnB1dC5pbnB1dG1hc2sgPSB1bmRlZmluZWQsIGlzU3VwcG9ydGVkO1xuICAgICAgICAgICAgICAgIH0oZWxlbSwgb3B0cyk7XG4gICAgICAgICAgICAgICAgaWYgKCExICE9PSBpc1N1cHBvcnRlZCAmJiAoZWwgPSBlbGVtLCAkZWwgPSAkKGVsKSwgbWF4TGVuZ3RoID0gZWwgIT09IHVuZGVmaW5lZCA/IGVsLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgXG4gICAgICAgICAgICAgICAgLTEgPT09IG1heExlbmd0aCAmJiAobWF4TGVuZ3RoID0gdW5kZWZpbmVkKSwgITAgPT09IG9wdHMuY29sb3JNYXNrICYmIGluaXRpYWxpemVDb2xvck1hc2soZWwpLCBcbiAgICAgICAgICAgICAgICBhbmRyb2lkICYmIChlbC5oYXNPd25Qcm9wZXJ0eShcImlucHV0bW9kZVwiKSAmJiAoZWwuaW5wdXRtb2RlID0gb3B0cy5pbnB1dG1vZGUsIGVsLnNldEF0dHJpYnV0ZShcImlucHV0bW9kZVwiLCBvcHRzLmlucHV0bW9kZSkpLCBcbiAgICAgICAgICAgICAgICBcInJ0Zm1cIiA9PT0gb3B0cy5hbmRyb2lkSGFjayAmJiAoITAgIT09IG9wdHMuY29sb3JNYXNrICYmIGluaXRpYWxpemVDb2xvck1hc2soZWwpLCBcbiAgICAgICAgICAgICAgICBlbC50eXBlID0gXCJwYXNzd29yZFwiKSksICEwID09PSBpc1N1cHBvcnRlZCAmJiAoRXZlbnRSdWxlci5vbihlbCwgXCJzdWJtaXRcIiwgRXZlbnRIYW5kbGVycy5zdWJtaXRFdmVudCksIFxuICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub24oZWwsIFwicmVzZXRcIiwgRXZlbnRIYW5kbGVycy5yZXNldEV2ZW50KSwgRXZlbnRSdWxlci5vbihlbCwgXCJtb3VzZWVudGVyXCIsIEV2ZW50SGFuZGxlcnMubW91c2VlbnRlckV2ZW50KSwgXG4gICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJibHVyXCIsIEV2ZW50SGFuZGxlcnMuYmx1ckV2ZW50KSwgRXZlbnRSdWxlci5vbihlbCwgXCJmb2N1c1wiLCBFdmVudEhhbmRsZXJzLmZvY3VzRXZlbnQpLCBcbiAgICAgICAgICAgICAgICBFdmVudFJ1bGVyLm9uKGVsLCBcIm1vdXNlbGVhdmVcIiwgRXZlbnRIYW5kbGVycy5tb3VzZWxlYXZlRXZlbnQpLCAhMCAhPT0gb3B0cy5jb2xvck1hc2sgJiYgRXZlbnRSdWxlci5vbihlbCwgXCJjbGlja1wiLCBFdmVudEhhbmRsZXJzLmNsaWNrRXZlbnQpLCBcbiAgICAgICAgICAgICAgICBFdmVudFJ1bGVyLm9uKGVsLCBcImRibGNsaWNrXCIsIEV2ZW50SGFuZGxlcnMuZGJsY2xpY2tFdmVudCksIEV2ZW50UnVsZXIub24oZWwsIFwicGFzdGVcIiwgRXZlbnRIYW5kbGVycy5wYXN0ZUV2ZW50KSwgXG4gICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJkcmFnZHJvcFwiLCBFdmVudEhhbmRsZXJzLnBhc3RlRXZlbnQpLCBFdmVudFJ1bGVyLm9uKGVsLCBcImRyb3BcIiwgRXZlbnRIYW5kbGVycy5wYXN0ZUV2ZW50KSwgXG4gICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJjdXRcIiwgRXZlbnRIYW5kbGVycy5jdXRFdmVudCksIEV2ZW50UnVsZXIub24oZWwsIFwiY29tcGxldGVcIiwgb3B0cy5vbmNvbXBsZXRlKSwgXG4gICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJpbmNvbXBsZXRlXCIsIG9wdHMub25pbmNvbXBsZXRlKSwgRXZlbnRSdWxlci5vbihlbCwgXCJjbGVhcmVkXCIsIG9wdHMub25jbGVhcmVkKSwgXG4gICAgICAgICAgICAgICAgYW5kcm9pZCB8fCAhMCA9PT0gb3B0cy5pbnB1dEV2ZW50T25seSA/IGVsLnJlbW92ZUF0dHJpYnV0ZShcIm1heExlbmd0aFwiKSA6IChFdmVudFJ1bGVyLm9uKGVsLCBcImtleWRvd25cIiwgRXZlbnRIYW5kbGVycy5rZXlkb3duRXZlbnQpLCBcbiAgICAgICAgICAgICAgICBFdmVudFJ1bGVyLm9uKGVsLCBcImtleXByZXNzXCIsIEV2ZW50SGFuZGxlcnMua2V5cHJlc3NFdmVudCkpLCBFdmVudFJ1bGVyLm9uKGVsLCBcImNvbXBvc2l0aW9uc3RhcnRcIiwgJC5ub29wKSwgXG4gICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJjb21wb3NpdGlvbnVwZGF0ZVwiLCAkLm5vb3ApLCBFdmVudFJ1bGVyLm9uKGVsLCBcImNvbXBvc2l0aW9uZW5kXCIsICQubm9vcCksIFxuICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub24oZWwsIFwia2V5dXBcIiwgJC5ub29wKSwgRXZlbnRSdWxlci5vbihlbCwgXCJpbnB1dFwiLCBFdmVudEhhbmRsZXJzLmlucHV0RmFsbEJhY2tFdmVudCksIFxuICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub24oZWwsIFwiYmVmb3JlaW5wdXRcIiwgJC5ub29wKSksIEV2ZW50UnVsZXIub24oZWwsIFwic2V0dmFsdWVcIiwgRXZlbnRIYW5kbGVycy5zZXRWYWx1ZUV2ZW50KSwgXG4gICAgICAgICAgICAgICAgdW5kb1ZhbHVlID0gZ2V0QnVmZmVyVGVtcGxhdGUoKS5qb2luKFwiXCIpLCBcIlwiICE9PSBlbC5pbnB1dG1hc2suX3ZhbHVlR2V0KCEwKSB8fCAhMSA9PT0gb3B0cy5jbGVhck1hc2tPbkxvc3RGb2N1cyB8fCBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBlbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluaXRpYWxWYWx1ZSA9ICQuaXNGdW5jdGlvbihvcHRzLm9uQmVmb3JlTWFzaykgPyBvcHRzLm9uQmVmb3JlTWFzay5jYWxsKGlucHV0bWFzaywgZWwuaW5wdXRtYXNrLl92YWx1ZUdldCghMCksIG9wdHMpIHx8IGVsLmlucHV0bWFzay5fdmFsdWVHZXQoITApIDogZWwuaW5wdXRtYXNrLl92YWx1ZUdldCghMCk7XG4gICAgICAgICAgICAgICAgICAgIFwiXCIgIT09IGluaXRpYWxWYWx1ZSAmJiBjaGVja1ZhbChlbCwgITAsICExLCBpc1JUTCA/IGluaXRpYWxWYWx1ZS5zcGxpdChcIlwiKS5yZXZlcnNlKCkgOiBpbml0aWFsVmFsdWUuc3BsaXQoXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYnVmZmVyID0gZ2V0QnVmZmVyKCkuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdW5kb1ZhbHVlID0gYnVmZmVyLmpvaW4oXCJcIiksICExID09PSBpc0NvbXBsZXRlKGJ1ZmZlcikgJiYgb3B0cy5jbGVhckluY29tcGxldGUgJiYgcmVzZXRNYXNrU2V0KCksIFxuICAgICAgICAgICAgICAgICAgICBvcHRzLmNsZWFyTWFza09uTG9zdEZvY3VzICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGVsICYmICgtMSA9PT0gZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSA/IGJ1ZmZlciA9IFtdIDogY2xlYXJPcHRpb25hbFRhaWwoYnVmZmVyKSksIFxuICAgICAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcihlbCwgYnVmZmVyKSwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZWwgJiYgY2FyZXQoZWwsIHNlZWtOZXh0KGdldExhc3RWYWxpZFBvc2l0aW9uKCkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KGVsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcImZvcm1hdFwiOlxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlQnVmZmVyID0gKCQuaXNGdW5jdGlvbihvcHRzLm9uQmVmb3JlTWFzaykgPyBvcHRzLm9uQmVmb3JlTWFzay5jYWxsKGlucHV0bWFzaywgYWN0aW9uT2JqLnZhbHVlLCBvcHRzKSB8fCBhY3Rpb25PYmoudmFsdWUgOiBhY3Rpb25PYmoudmFsdWUpLnNwbGl0KFwiXCIpLCBcbiAgICAgICAgICAgIGNoZWNrVmFsKHVuZGVmaW5lZCwgITAsICExLCBpc1JUTCA/IHZhbHVlQnVmZmVyLnJldmVyc2UoKSA6IHZhbHVlQnVmZmVyKSwgYWN0aW9uT2JqLm1ldGFkYXRhID8ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBpc1JUTCA/IGdldEJ1ZmZlcigpLnNsaWNlKCkucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiBnZXRCdWZmZXIoKS5qb2luKFwiXCIpLFxuICAgICAgICAgICAgICAgIG1ldGFkYXRhOiBtYXNrU2NvcGUuY2FsbCh0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJnZXRtZXRhZGF0YVwiXG4gICAgICAgICAgICAgICAgfSwgbWFza3NldCwgb3B0cylcbiAgICAgICAgICAgIH0gOiBpc1JUTCA/IGdldEJ1ZmZlcigpLnNsaWNlKCkucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiBnZXRCdWZmZXIoKS5qb2luKFwiXCIpO1xuXG4gICAgICAgICAgY2FzZSBcImlzVmFsaWRcIjpcbiAgICAgICAgICAgIGFjdGlvbk9iai52YWx1ZSA/ICh2YWx1ZUJ1ZmZlciA9IGFjdGlvbk9iai52YWx1ZS5zcGxpdChcIlwiKSwgY2hlY2tWYWwodW5kZWZpbmVkLCAhMCwgITAsIGlzUlRMID8gdmFsdWVCdWZmZXIucmV2ZXJzZSgpIDogdmFsdWVCdWZmZXIpKSA6IGFjdGlvbk9iai52YWx1ZSA9IGdldEJ1ZmZlcigpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBidWZmZXIgPSBnZXRCdWZmZXIoKSwgcmwgPSBkZXRlcm1pbmVMYXN0UmVxdWlyZWRQb3NpdGlvbigpLCBsbWliID0gYnVmZmVyLmxlbmd0aCAtIDE7IGxtaWIgPiBybCAmJiAhaXNNYXNrKGxtaWIpOyBsbWliLS0pIDtcbiAgICAgICAgICAgIHJldHVybiBidWZmZXIuc3BsaWNlKHJsLCBsbWliICsgMSAtIHJsKSwgaXNDb21wbGV0ZShidWZmZXIpICYmIGFjdGlvbk9iai52YWx1ZSA9PT0gZ2V0QnVmZmVyKCkuam9pbihcIlwiKTtcblxuICAgICAgICAgIGNhc2UgXCJnZXRlbXB0eW1hc2tcIjpcbiAgICAgICAgICAgIHJldHVybiBnZXRCdWZmZXJUZW1wbGF0ZSgpLmpvaW4oXCJcIik7XG5cbiAgICAgICAgICBjYXNlIFwicmVtb3ZlXCI6XG4gICAgICAgICAgICBpZiAoZWwgJiYgZWwuaW5wdXRtYXNrKSB7XG4gICAgICAgICAgICAgICAgJGVsID0gJChlbCksIGVsLmlucHV0bWFzay5fdmFsdWVTZXQob3B0cy5hdXRvVW5tYXNrID8gdW5tYXNrZWR2YWx1ZShlbCkgOiBlbC5pbnB1dG1hc2suX3ZhbHVlR2V0KCEwKSksIFxuICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub2ZmKGVsKTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LmdldFByb3RvdHlwZU9mKGVsKSwgXCJ2YWx1ZVwiKSAmJiBlbC5pbnB1dG1hc2suX192YWx1ZUdldCAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWwsIFwidmFsdWVcIiwge1xuICAgICAgICAgICAgICAgICAgICBnZXQ6IGVsLmlucHV0bWFzay5fX3ZhbHVlR2V0LFxuICAgICAgICAgICAgICAgICAgICBzZXQ6IGVsLmlucHV0bWFzay5fX3ZhbHVlU2V0LFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgICAgICAgICAgfSkgOiBkb2N1bWVudC5fX2xvb2t1cEdldHRlcl9fICYmIGVsLl9fbG9va3VwR2V0dGVyX18oXCJ2YWx1ZVwiKSAmJiBlbC5pbnB1dG1hc2suX192YWx1ZUdldCAmJiAoZWwuX19kZWZpbmVHZXR0ZXJfXyhcInZhbHVlXCIsIGVsLmlucHV0bWFzay5fX3ZhbHVlR2V0KSwgXG4gICAgICAgICAgICAgICAgZWwuX19kZWZpbmVTZXR0ZXJfXyhcInZhbHVlXCIsIGVsLmlucHV0bWFzay5fX3ZhbHVlU2V0KSksIGVsLmlucHV0bWFzayA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbDtcblxuICAgICAgICAgIGNhc2UgXCJnZXRtZXRhZGF0YVwiOlxuICAgICAgICAgICAgaWYgKCQuaXNBcnJheShtYXNrc2V0Lm1ldGFkYXRhKSkge1xuICAgICAgICAgICAgICAgIHZhciBtYXNrVGFyZ2V0ID0gZ2V0TWFza1RlbXBsYXRlKCEwLCAwLCAhMSkuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJC5lYWNoKG1hc2tzZXQubWV0YWRhdGEsIGZ1bmN0aW9uKG5keCwgbXRkdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobXRkdC5tYXNrID09PSBtYXNrVGFyZ2V0KSByZXR1cm4gbWFza1RhcmdldCA9IG10ZHQsICExO1xuICAgICAgICAgICAgICAgIH0pLCBtYXNrVGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1hc2tzZXQubWV0YWRhdGE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudCwgbW9iaWxlID0gL21vYmlsZS9pLnRlc3QodWEpLCBpZW1vYmlsZSA9IC9pZW1vYmlsZS9pLnRlc3QodWEpLCBpcGhvbmUgPSAvaXBob25lL2kudGVzdCh1YSkgJiYgIWllbW9iaWxlLCBhbmRyb2lkID0gL2FuZHJvaWQvaS50ZXN0KHVhKSAmJiAhaWVtb2JpbGU7XG4gICAgcmV0dXJuIElucHV0bWFzay5wcm90b3R5cGUgPSB7XG4gICAgICAgIGRhdGFBdHRyaWJ1dGU6IFwiZGF0YS1pbnB1dG1hc2tcIixcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIl9cIixcbiAgICAgICAgICAgIG9wdGlvbmFsbWFya2VyOiB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwiW1wiLFxuICAgICAgICAgICAgICAgIGVuZDogXCJdXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBxdWFudGlmaWVybWFya2VyOiB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwie1wiLFxuICAgICAgICAgICAgICAgIGVuZDogXCJ9XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBncm91cG1hcmtlcjoge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIihcIixcbiAgICAgICAgICAgICAgICBlbmQ6IFwiKVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWx0ZXJuYXRvcm1hcmtlcjogXCJ8XCIsXG4gICAgICAgICAgICBlc2NhcGVDaGFyOiBcIlxcXFxcIixcbiAgICAgICAgICAgIG1hc2s6IG51bGwsXG4gICAgICAgICAgICByZWdleDogbnVsbCxcbiAgICAgICAgICAgIG9uY29tcGxldGU6ICQubm9vcCxcbiAgICAgICAgICAgIG9uaW5jb21wbGV0ZTogJC5ub29wLFxuICAgICAgICAgICAgb25jbGVhcmVkOiAkLm5vb3AsXG4gICAgICAgICAgICByZXBlYXQ6IDAsXG4gICAgICAgICAgICBncmVlZHk6ICEwLFxuICAgICAgICAgICAgYXV0b1VubWFzazogITEsXG4gICAgICAgICAgICByZW1vdmVNYXNrT25TdWJtaXQ6ICExLFxuICAgICAgICAgICAgY2xlYXJNYXNrT25Mb3N0Rm9jdXM6ICEwLFxuICAgICAgICAgICAgaW5zZXJ0TW9kZTogITAsXG4gICAgICAgICAgICBjbGVhckluY29tcGxldGU6ICExLFxuICAgICAgICAgICAgYWxpYXM6IG51bGwsXG4gICAgICAgICAgICBvbktleURvd246ICQubm9vcCxcbiAgICAgICAgICAgIG9uQmVmb3JlTWFzazogbnVsbCxcbiAgICAgICAgICAgIG9uQmVmb3JlUGFzdGU6IGZ1bmN0aW9uKHBhc3RlZFZhbHVlLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICQuaXNGdW5jdGlvbihvcHRzLm9uQmVmb3JlTWFzaykgPyBvcHRzLm9uQmVmb3JlTWFzay5jYWxsKHRoaXMsIHBhc3RlZFZhbHVlLCBvcHRzKSA6IHBhc3RlZFZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQmVmb3JlV3JpdGU6IG51bGwsXG4gICAgICAgICAgICBvblVuTWFzazogbnVsbCxcbiAgICAgICAgICAgIHNob3dNYXNrT25Gb2N1czogITAsXG4gICAgICAgICAgICBzaG93TWFza09uSG92ZXI6ICEwLFxuICAgICAgICAgICAgb25LZXlWYWxpZGF0aW9uOiAkLm5vb3AsXG4gICAgICAgICAgICBza2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyOiBcIiBcIixcbiAgICAgICAgICAgIG51bWVyaWNJbnB1dDogITEsXG4gICAgICAgICAgICByaWdodEFsaWduOiAhMSxcbiAgICAgICAgICAgIHVuZG9PbkVzY2FwZTogITAsXG4gICAgICAgICAgICByYWRpeFBvaW50OiBcIlwiLFxuICAgICAgICAgICAgcmFkaXhQb2ludERlZmluaXRpb25TeW1ib2w6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGdyb3VwU2VwYXJhdG9yOiBcIlwiLFxuICAgICAgICAgICAga2VlcFN0YXRpYzogbnVsbCxcbiAgICAgICAgICAgIHBvc2l0aW9uQ2FyZXRPblRhYjogITAsXG4gICAgICAgICAgICB0YWJUaHJvdWdoOiAhMSxcbiAgICAgICAgICAgIHN1cHBvcnRzSW5wdXRUeXBlOiBbIFwidGV4dFwiLCBcInRlbFwiLCBcInBhc3N3b3JkXCIgXSxcbiAgICAgICAgICAgIGlnbm9yYWJsZXM6IFsgOCwgOSwgMTMsIDE5LCAyNywgMzMsIDM0LCAzNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0NSwgNDYsIDkzLCAxMTIsIDExMywgMTE0LCAxMTUsIDExNiwgMTE3LCAxMTgsIDExOSwgMTIwLCAxMjEsIDEyMiwgMTIzLCAwLCAyMjkgXSxcbiAgICAgICAgICAgIGlzQ29tcGxldGU6IG51bGwsXG4gICAgICAgICAgICBjYW5DbGVhclBvc2l0aW9uOiAkLm5vb3AsXG4gICAgICAgICAgICBwcmVWYWxpZGF0aW9uOiBudWxsLFxuICAgICAgICAgICAgcG9zdFZhbGlkYXRpb246IG51bGwsXG4gICAgICAgICAgICBzdGF0aWNEZWZpbml0aW9uU3ltYm9sOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBqaXRNYXNraW5nOiAhMSxcbiAgICAgICAgICAgIG51bGxhYmxlOiAhMCxcbiAgICAgICAgICAgIGlucHV0RXZlbnRPbmx5OiAhMSxcbiAgICAgICAgICAgIG5vVmFsdWVQYXRjaGluZzogITEsXG4gICAgICAgICAgICBwb3NpdGlvbkNhcmV0T25DbGljazogXCJsdnBcIixcbiAgICAgICAgICAgIGNhc2luZzogbnVsbCxcbiAgICAgICAgICAgIGlucHV0bW9kZTogXCJ2ZXJiYXRpbVwiLFxuICAgICAgICAgICAgY29sb3JNYXNrOiAhMSxcbiAgICAgICAgICAgIGFuZHJvaWRIYWNrOiAhMSxcbiAgICAgICAgICAgIGltcG9ydERhdGFBdHRyaWJ1dGVzOiAhMFxuICAgICAgICB9LFxuICAgICAgICBkZWZpbml0aW9uczoge1xuICAgICAgICAgICAgXCI5XCI6IHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOVxcdWZmMTEtXFx1ZmYxOV1cIixcbiAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMSxcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3ltYm9sOiBcIipcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiW0EtWmEtelxcdTA0MTAtXFx1MDQ0ZlxcdTA0MDFcXHUwNDUxXFx4YzAtXFx4ZmZcXHhiNV1cIixcbiAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMSxcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3ltYm9sOiBcIipcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiKlwiOiB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlcXHVmZjExLVxcdWZmMTlBLVphLXpcXHUwNDEwLVxcdTA0NGZcXHUwNDAxXFx1MDQ1MVxceGMwLVxceGZmXFx4YjVdXCIsXG4gICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWxpYXNlczoge30sXG4gICAgICAgIG1hc2tzQ2FjaGU6IHt9LFxuICAgICAgICBtYXNrOiBmdW5jdGlvbihlbGVtcykge1xuICAgICAgICAgICAgZnVuY3Rpb24gaW1wb3J0QXR0cmlidXRlT3B0aW9ucyhucHQsIG9wdHMsIHVzZXJPcHRpb25zLCBkYXRhQXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaW1wb3J0T3B0aW9uKG9wdGlvbiwgb3B0aW9uRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBudWxsICE9PSAob3B0aW9uRGF0YSA9IG9wdGlvbkRhdGEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbkRhdGEgOiBucHQuZ2V0QXR0cmlidXRlKGRhdGFBdHRyaWJ1dGUgKyBcIi1cIiArIG9wdGlvbikpICYmIChcInN0cmluZ1wiID09IHR5cGVvZiBvcHRpb25EYXRhICYmICgwID09PSBvcHRpb24uaW5kZXhPZihcIm9uXCIpID8gb3B0aW9uRGF0YSA9IHdpbmRvd1tvcHRpb25EYXRhXSA6IFwiZmFsc2VcIiA9PT0gb3B0aW9uRGF0YSA/IG9wdGlvbkRhdGEgPSAhMSA6IFwidHJ1ZVwiID09PSBvcHRpb25EYXRhICYmIChvcHRpb25EYXRhID0gITApKSwgXG4gICAgICAgICAgICAgICAgICAgIHVzZXJPcHRpb25zW29wdGlvbl0gPSBvcHRpb25EYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCEwID09PSBvcHRzLmltcG9ydERhdGFBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb24sIGRhdGFvcHRpb25zLCBvcHRpb25EYXRhLCBwLCBhdHRyT3B0aW9ucyA9IG5wdC5nZXRBdHRyaWJ1dGUoZGF0YUF0dHJpYnV0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRyT3B0aW9ucyAmJiBcIlwiICE9PSBhdHRyT3B0aW9ucyAmJiAoYXR0ck9wdGlvbnMgPSBhdHRyT3B0aW9ucy5yZXBsYWNlKG5ldyBSZWdFeHAoXCInXCIsIFwiZ1wiKSwgJ1wiJyksIFxuICAgICAgICAgICAgICAgICAgICBkYXRhb3B0aW9ucyA9IEpTT04ucGFyc2UoXCJ7XCIgKyBhdHRyT3B0aW9ucyArIFwifVwiKSksIGRhdGFvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25EYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwIGluIGRhdGFvcHRpb25zKSBpZiAoXCJhbGlhc1wiID09PSBwLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25EYXRhID0gZGF0YW9wdGlvbnNbcF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0T3B0aW9uKFwiYWxpYXNcIiwgb3B0aW9uRGF0YSksIHVzZXJPcHRpb25zLmFsaWFzICYmIHJlc29sdmVBbGlhcyh1c2VyT3B0aW9ucy5hbGlhcywgdXNlck9wdGlvbnMsIG9wdHMpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKG9wdGlvbiBpbiBvcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YW9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25EYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocCBpbiBkYXRhb3B0aW9ucykgaWYgKHAudG9Mb3dlckNhc2UoKSA9PT0gb3B0aW9uLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uRGF0YSA9IGRhdGFvcHRpb25zW3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRPcHRpb24ob3B0aW9uLCBvcHRpb25EYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gJC5leHRlbmQoITAsIG9wdHMsIHVzZXJPcHRpb25zKSwgKFwicnRsXCIgPT09IG5wdC5kaXIgfHwgb3B0cy5yaWdodEFsaWduKSAmJiAobnB0LnN0eWxlLnRleHRBbGlnbiA9IFwicmlnaHRcIiksIFxuICAgICAgICAgICAgICAgIChcInJ0bFwiID09PSBucHQuZGlyIHx8IG9wdHMubnVtZXJpY0lucHV0KSAmJiAobnB0LmRpciA9IFwibHRyXCIsIG5wdC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXJcIiksIFxuICAgICAgICAgICAgICAgIG9wdHMuaXNSVEwgPSAhMCksIG9wdHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZWxlbXMgJiYgKGVsZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbXMpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbXMpKSwgXG4gICAgICAgICAgICBlbGVtcyA9IGVsZW1zLm5vZGVOYW1lID8gWyBlbGVtcyBdIDogZWxlbXMsICQuZWFjaChlbGVtcywgZnVuY3Rpb24obmR4LCBlbCkge1xuICAgICAgICAgICAgICAgIHZhciBzY29wZWRPcHRzID0gJC5leHRlbmQoITAsIHt9LCB0aGF0Lm9wdHMpO1xuICAgICAgICAgICAgICAgIGltcG9ydEF0dHJpYnV0ZU9wdGlvbnMoZWwsIHNjb3BlZE9wdHMsICQuZXh0ZW5kKCEwLCB7fSwgdGhhdC51c2VyT3B0aW9ucyksIHRoYXQuZGF0YUF0dHJpYnV0ZSk7XG4gICAgICAgICAgICAgICAgdmFyIG1hc2tzZXQgPSBnZW5lcmF0ZU1hc2tTZXQoc2NvcGVkT3B0cywgdGhhdC5ub01hc2tzQ2FjaGUpO1xuICAgICAgICAgICAgICAgIG1hc2tzZXQgIT09IHVuZGVmaW5lZCAmJiAoZWwuaW5wdXRtYXNrICE9PSB1bmRlZmluZWQgJiYgKGVsLmlucHV0bWFzay5vcHRzLmF1dG9Vbm1hc2sgPSAhMCwgXG4gICAgICAgICAgICAgICAgZWwuaW5wdXRtYXNrLnJlbW92ZSgpKSwgZWwuaW5wdXRtYXNrID0gbmV3IElucHV0bWFzayh1bmRlZmluZWQsIHVuZGVmaW5lZCwgITApLCBcbiAgICAgICAgICAgICAgICBlbC5pbnB1dG1hc2sub3B0cyA9IHNjb3BlZE9wdHMsIGVsLmlucHV0bWFzay5ub01hc2tzQ2FjaGUgPSB0aGF0Lm5vTWFza3NDYWNoZSwgZWwuaW5wdXRtYXNrLnVzZXJPcHRpb25zID0gJC5leHRlbmQoITAsIHt9LCB0aGF0LnVzZXJPcHRpb25zKSwgXG4gICAgICAgICAgICAgICAgZWwuaW5wdXRtYXNrLmlzUlRMID0gc2NvcGVkT3B0cy5pc1JUTCB8fCBzY29wZWRPcHRzLm51bWVyaWNJbnB1dCwgZWwuaW5wdXRtYXNrLmVsID0gZWwsIFxuICAgICAgICAgICAgICAgIGVsLmlucHV0bWFzay5tYXNrc2V0ID0gbWFza3NldCwgJC5kYXRhKGVsLCBcIl9pbnB1dG1hc2tfb3B0c1wiLCBzY29wZWRPcHRzKSwgbWFza1Njb3BlLmNhbGwoZWwuaW5wdXRtYXNrLCB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJtYXNrXCJcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KSwgZWxlbXMgJiYgZWxlbXNbMF0gPyBlbGVtc1swXS5pbnB1dG1hc2sgfHwgdGhpcyA6IHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbjogZnVuY3Rpb24ob3B0aW9ucywgbm9yZW1hc2spIHtcbiAgICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBvcHRpb25zID8gdGhpcy5vcHRzW29wdGlvbnNdIDogXCJvYmplY3RcIiA9PSB0eXBlb2Ygb3B0aW9ucyA/ICgkLmV4dGVuZCh0aGlzLnVzZXJPcHRpb25zLCBvcHRpb25zKSwgXG4gICAgICAgICAgICB0aGlzLmVsICYmICEwICE9PSBub3JlbWFzayAmJiB0aGlzLm1hc2sodGhpcy5lbCksIHRoaXMpIDogdm9pZCAwO1xuICAgICAgICB9LFxuICAgICAgICB1bm1hc2tlZHZhbHVlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza3NldCA9IHRoaXMubWFza3NldCB8fCBnZW5lcmF0ZU1hc2tTZXQodGhpcy5vcHRzLCB0aGlzLm5vTWFza3NDYWNoZSksIFxuICAgICAgICAgICAgbWFza1Njb3BlLmNhbGwodGhpcywge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJ1bm1hc2tlZHZhbHVlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXNrU2NvcGUuY2FsbCh0aGlzLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcInJlbW92ZVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0ZW1wdHltYXNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgZ2VuZXJhdGVNYXNrU2V0KHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpLCBcbiAgICAgICAgICAgIG1hc2tTY29wZS5jYWxsKHRoaXMsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwiZ2V0ZW1wdHltYXNrXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBoYXNNYXNrZWRWYWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMub3B0cy5hdXRvVW5tYXNrO1xuICAgICAgICB9LFxuICAgICAgICBpc0NvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgZ2VuZXJhdGVNYXNrU2V0KHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpLCBcbiAgICAgICAgICAgIG1hc2tTY29wZS5jYWxsKHRoaXMsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwiaXNDb21wbGV0ZVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0bWV0YWRhdGE6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza3NldCA9IHRoaXMubWFza3NldCB8fCBnZW5lcmF0ZU1hc2tTZXQodGhpcy5vcHRzLCB0aGlzLm5vTWFza3NDYWNoZSksIFxuICAgICAgICAgICAgbWFza1Njb3BlLmNhbGwodGhpcywge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJnZXRtZXRhZGF0YVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNWYWxpZDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgZ2VuZXJhdGVNYXNrU2V0KHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpLCBcbiAgICAgICAgICAgIG1hc2tTY29wZS5jYWxsKHRoaXMsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwiaXNWYWxpZFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDogZnVuY3Rpb24odmFsdWUsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXNrc2V0ID0gdGhpcy5tYXNrc2V0IHx8IGdlbmVyYXRlTWFza1NldCh0aGlzLm9wdHMsIHRoaXMubm9NYXNrc0NhY2hlKSwgXG4gICAgICAgICAgICBtYXNrU2NvcGUuY2FsbCh0aGlzLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcImZvcm1hdFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBtZXRhZGF0YTogbWV0YWRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBhbmFseXNlTWFzazogZnVuY3Rpb24obWFzaywgcmVnZXhNYXNrLCBvcHRzKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBNYXNrVG9rZW4oaXNHcm91cCwgaXNPcHRpb25hbCwgaXNRdWFudGlmaWVyLCBpc0FsdGVybmF0b3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdGNoZXMgPSBbXSwgdGhpcy5vcGVuR3JvdXAgPSBpc0dyb3VwIHx8ICExLCB0aGlzLmFsdGVybmF0b3JHcm91cCA9ICExLCB0aGlzLmlzR3JvdXAgPSBpc0dyb3VwIHx8ICExLCBcbiAgICAgICAgICAgICAgICB0aGlzLmlzT3B0aW9uYWwgPSBpc09wdGlvbmFsIHx8ICExLCB0aGlzLmlzUXVhbnRpZmllciA9IGlzUXVhbnRpZmllciB8fCAhMSwgdGhpcy5pc0FsdGVybmF0b3IgPSBpc0FsdGVybmF0b3IgfHwgITEsIFxuICAgICAgICAgICAgICAgIHRoaXMucXVhbnRpZmllciA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDFcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaW5zZXJ0VGVzdERlZmluaXRpb24obXRva2VuLCBlbGVtZW50LCBwb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24gIT09IHVuZGVmaW5lZCA/IHBvc2l0aW9uIDogbXRva2VuLm1hdGNoZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciBwcmV2TWF0Y2ggPSBtdG9rZW4ubWF0Y2hlc1twb3NpdGlvbiAtIDFdO1xuICAgICAgICAgICAgICAgIGlmIChyZWdleE1hc2spIDAgPT09IGVsZW1lbnQuaW5kZXhPZihcIltcIikgfHwgZXNjYXBlZCAmJiAvXFxcXGR8XFxcXHN8XFxcXHddL2kudGVzdChlbGVtZW50KSB8fCBcIi5cIiA9PT0gZWxlbWVudCA/IG10b2tlbi5tYXRjaGVzLnNwbGljZShwb3NpdGlvbisrLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgIGZuOiBuZXcgUmVnRXhwKGVsZW1lbnQsIG9wdHMuY2FzaW5nID8gXCJpXCIgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiBtdG9rZW4uaXNPcHRpb25hbCxcbiAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2tNYXJrZXI6IHByZXZNYXRjaCA9PT0gdW5kZWZpbmVkIHx8IHByZXZNYXRjaC5kZWYgIT09IGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGNhc2luZzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZGVmOiBlbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWY6IGVsZW1lbnRcbiAgICAgICAgICAgICAgICB9KSA6IChlc2NhcGVkICYmIChlbGVtZW50ID0gZWxlbWVudFtlbGVtZW50Lmxlbmd0aCAtIDFdKSwgJC5lYWNoKGVsZW1lbnQuc3BsaXQoXCJcIiksIGZ1bmN0aW9uKG5keCwgbG1udCkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2TWF0Y2ggPSBtdG9rZW4ubWF0Y2hlc1twb3NpdGlvbiAtIDFdLCBtdG9rZW4ubWF0Y2hlcy5zcGxpY2UocG9zaXRpb24rKywgMCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm46IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiBtdG9rZW4uaXNPcHRpb25hbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Jsb2NrTWFya2VyOiBwcmV2TWF0Y2ggPT09IHVuZGVmaW5lZCB8fCBwcmV2TWF0Y2guZGVmICE9PSBsbW50ICYmIG51bGwgIT09IHByZXZNYXRjaC5mbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogb3B0cy5zdGF0aWNEZWZpbml0aW9uU3ltYm9sIHx8IGxtbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogb3B0cy5zdGF0aWNEZWZpbml0aW9uU3ltYm9sICE9PSB1bmRlZmluZWQgPyBsbW50IDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlRGVmOiBsbW50XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pKSwgZXNjYXBlZCA9ICExOyBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hc2tkZWYgPSAob3B0cy5kZWZpbml0aW9ucyA/IG9wdHMuZGVmaW5pdGlvbnNbZWxlbWVudF0gOiB1bmRlZmluZWQpIHx8IElucHV0bWFzay5wcm90b3R5cGUuZGVmaW5pdGlvbnNbZWxlbWVudF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXNrZGVmICYmICFlc2NhcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwcmV2YWxpZGF0b3JzID0gbWFza2RlZi5wcmV2YWxpZGF0b3IsIHByZXZhbGlkYXRvcnNMID0gcHJldmFsaWRhdG9ycyA/IHByZXZhbGlkYXRvcnMubGVuZ3RoIDogMCwgaSA9IDE7IGkgPCBtYXNrZGVmLmNhcmRpbmFsaXR5OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJldmFsaWRhdG9yID0gcHJldmFsaWRhdG9yc0wgPj0gaSA/IHByZXZhbGlkYXRvcnNbaSAtIDFdIDogW10sIHZhbGlkYXRvciA9IHByZXZhbGlkYXRvci52YWxpZGF0b3IsIGNhcmRpbmFsaXR5ID0gcHJldmFsaWRhdG9yLmNhcmRpbmFsaXR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG10b2tlbi5tYXRjaGVzLnNwbGljZShwb3NpdGlvbisrLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiB2YWxpZGF0b3IgPyBcInN0cmluZ1wiID09IHR5cGVvZiB2YWxpZGF0b3IgPyBuZXcgUmVnRXhwKHZhbGlkYXRvciwgb3B0cy5jYXNpbmcgPyBcImlcIiA6IFwiXCIpIDogbmV3IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXN0ID0gdmFsaWRhdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KCkgOiBuZXcgUmVnRXhwKFwiLlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IGNhcmRpbmFsaXR5IHx8IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiBtdG9rZW4uaXNPcHRpb25hbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2tNYXJrZXI6IHByZXZNYXRjaCA9PT0gdW5kZWZpbmVkIHx8IHByZXZNYXRjaC5kZWYgIT09IChtYXNrZGVmLmRlZmluaXRpb25TeW1ib2wgfHwgZWxlbWVudCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogbWFza2RlZi5jYXNpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogbWFza2RlZi5kZWZpbml0aW9uU3ltYm9sIHx8IGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBtYXNrZGVmLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWY6IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgcHJldk1hdGNoID0gbXRva2VuLm1hdGNoZXNbcG9zaXRpb24gLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG10b2tlbi5tYXRjaGVzLnNwbGljZShwb3NpdGlvbisrLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IG1hc2tkZWYudmFsaWRhdG9yID8gXCJzdHJpbmdcIiA9PSB0eXBlb2YgbWFza2RlZi52YWxpZGF0b3IgPyBuZXcgUmVnRXhwKG1hc2tkZWYudmFsaWRhdG9yLCBvcHRzLmNhc2luZyA/IFwiaVwiIDogXCJcIikgOiBuZXcgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVzdCA9IG1hc2tkZWYudmFsaWRhdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oKSA6IG5ldyBSZWdFeHAoXCIuXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiBtYXNrZGVmLmNhcmRpbmFsaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiBtdG9rZW4uaXNPcHRpb25hbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdCbG9ja01hcmtlcjogcHJldk1hdGNoID09PSB1bmRlZmluZWQgfHwgcHJldk1hdGNoLmRlZiAhPT0gKG1hc2tkZWYuZGVmaW5pdGlvblN5bWJvbCB8fCBlbGVtZW50KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IG1hc2tkZWYuY2FzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogbWFza2RlZi5kZWZpbml0aW9uU3ltYm9sIHx8IGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IG1hc2tkZWYucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlRGVmOiBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIG10b2tlbi5tYXRjaGVzLnNwbGljZShwb3NpdGlvbisrLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWxpdHk6IG10b2tlbi5pc09wdGlvbmFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2tNYXJrZXI6IHByZXZNYXRjaCA9PT0gdW5kZWZpbmVkIHx8IHByZXZNYXRjaC5kZWYgIT09IGVsZW1lbnQgJiYgbnVsbCAhPT0gcHJldk1hdGNoLmZuLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmOiBvcHRzLnN0YXRpY0RlZmluaXRpb25TeW1ib2wgfHwgZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBvcHRzLnN0YXRpY0RlZmluaXRpb25TeW1ib2wgIT09IHVuZGVmaW5lZCA/IGVsZW1lbnQgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWY6IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgfSksIGVzY2FwZWQgPSAhMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiB2ZXJpZnlHcm91cE1hcmtlcihtYXNrVG9rZW4pIHtcbiAgICAgICAgICAgICAgICBtYXNrVG9rZW4gJiYgbWFza1Rva2VuLm1hdGNoZXMgJiYgJC5lYWNoKG1hc2tUb2tlbi5tYXRjaGVzLCBmdW5jdGlvbihuZHgsIHRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0VG9rZW4gPSBtYXNrVG9rZW4ubWF0Y2hlc1tuZHggKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgKG5leHRUb2tlbiA9PT0gdW5kZWZpbmVkIHx8IG5leHRUb2tlbi5tYXRjaGVzID09PSB1bmRlZmluZWQgfHwgITEgPT09IG5leHRUb2tlbi5pc1F1YW50aWZpZXIpICYmIHRva2VuICYmIHRva2VuLmlzR3JvdXAgJiYgKHRva2VuLmlzR3JvdXAgPSAhMSwgXG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4TWFzayB8fCAoaW5zZXJ0VGVzdERlZmluaXRpb24odG9rZW4sIG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQsIDApLCAhMCAhPT0gdG9rZW4ub3Blbkdyb3VwICYmIGluc2VydFRlc3REZWZpbml0aW9uKHRva2VuLCBvcHRzLmdyb3VwbWFya2VyLmVuZCkpKSwgXG4gICAgICAgICAgICAgICAgICAgIHZlcmlmeUdyb3VwTWFya2VyKHRva2VuKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlZmF1bHRDYXNlKCkge1xuICAgICAgICAgICAgICAgIGlmIChvcGVuZW5pbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRPcGVuaW5nVG9rZW4gPSBvcGVuZW5pbmdzW29wZW5lbmluZ3MubGVuZ3RoIC0gMV0sIGluc2VydFRlc3REZWZpbml0aW9uKGN1cnJlbnRPcGVuaW5nVG9rZW4sIG0pLCBcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE9wZW5pbmdUb2tlbi5pc0FsdGVybmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0b3IgPSBvcGVuZW5pbmdzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbW5keCA9IDA7IG1uZHggPCBhbHRlcm5hdG9yLm1hdGNoZXMubGVuZ3RoOyBtbmR4KyspIGFsdGVybmF0b3IubWF0Y2hlc1ttbmR4XS5pc0dyb3VwID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuZW5pbmdzLmxlbmd0aCA+IDAgPyAoY3VycmVudE9wZW5pbmdUb2tlbiA9IG9wZW5lbmluZ3Nbb3BlbmVuaW5ncy5sZW5ndGggLSAxXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3BlbmluZ1Rva2VuLm1hdGNoZXMucHVzaChhbHRlcm5hdG9yKSkgOiBjdXJyZW50VG9rZW4ubWF0Y2hlcy5wdXNoKGFsdGVybmF0b3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGluc2VydFRlc3REZWZpbml0aW9uKGN1cnJlbnRUb2tlbiwgbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiByZXZlcnNlVG9rZW5zKG1hc2tUb2tlbikge1xuICAgICAgICAgICAgICAgIG1hc2tUb2tlbi5tYXRjaGVzID0gbWFza1Rva2VuLm1hdGNoZXMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG1hdGNoIGluIG1hc2tUb2tlbi5tYXRjaGVzKSBpZiAobWFza1Rva2VuLm1hdGNoZXMuaGFzT3duUHJvcGVydHkobWF0Y2gpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnRNYXRjaCA9IHBhcnNlSW50KG1hdGNoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hc2tUb2tlbi5tYXRjaGVzW21hdGNoXS5pc1F1YW50aWZpZXIgJiYgbWFza1Rva2VuLm1hdGNoZXNbaW50TWF0Y2ggKyAxXSAmJiBtYXNrVG9rZW4ubWF0Y2hlc1tpbnRNYXRjaCArIDFdLmlzR3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBxdCA9IG1hc2tUb2tlbi5tYXRjaGVzW21hdGNoXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tUb2tlbi5tYXRjaGVzLnNwbGljZShtYXRjaCwgMSksIG1hc2tUb2tlbi5tYXRjaGVzLnNwbGljZShpbnRNYXRjaCArIDEsIDAsIHF0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtYXNrVG9rZW4ubWF0Y2hlc1ttYXRjaF0ubWF0Y2hlcyAhPT0gdW5kZWZpbmVkID8gbWFza1Rva2VuLm1hdGNoZXNbbWF0Y2hdID0gcmV2ZXJzZVRva2VucyhtYXNrVG9rZW4ubWF0Y2hlc1ttYXRjaF0pIDogbWFza1Rva2VuLm1hdGNoZXNbbWF0Y2hdID0gZnVuY3Rpb24oc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdCA9PT0gb3B0cy5vcHRpb25hbG1hcmtlci5zdGFydCA/IHN0ID0gb3B0cy5vcHRpb25hbG1hcmtlci5lbmQgOiBzdCA9PT0gb3B0cy5vcHRpb25hbG1hcmtlci5lbmQgPyBzdCA9IG9wdHMub3B0aW9uYWxtYXJrZXIuc3RhcnQgOiBzdCA9PT0gb3B0cy5ncm91cG1hcmtlci5zdGFydCA/IHN0ID0gb3B0cy5ncm91cG1hcmtlci5lbmQgOiBzdCA9PT0gb3B0cy5ncm91cG1hcmtlci5lbmQgJiYgKHN0ID0gb3B0cy5ncm91cG1hcmtlci5zdGFydCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Q7XG4gICAgICAgICAgICAgICAgICAgIH0obWFza1Rva2VuLm1hdGNoZXNbbWF0Y2hdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hc2tUb2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBtYXRjaCwgbSwgb3BlbmluZ1Rva2VuLCBjdXJyZW50T3BlbmluZ1Rva2VuLCBhbHRlcm5hdG9yLCBsYXN0TWF0Y2gsIGdyb3VwVG9rZW4sIHRva2VuaXplciA9IC8oPzpbPyorXXxcXHtbMC05XFwrXFwqXSsoPzosWzAtOVxcK1xcKl0qKT9cXH0pfFteLj8qK14ke1tdKCl8XFxcXF0rfC4vZywgcmVnZXhUb2tlbml6ZXIgPSAvXFxbXFxeP10/KD86W15cXFxcXFxdXSt8XFxcXFtcXFNcXHNdPykqXT98XFxcXCg/OjAoPzpbMC0zXVswLTddezAsMn18WzQtN11bMC03XT8pP3xbMS05XVswLTldKnx4WzAtOUEtRmEtZl17Mn18dVswLTlBLUZhLWZdezR9fGNbQS1aYS16XXxbXFxTXFxzXT8pfFxcKCg/OlxcP1s6PSFdPyk/fCg/Ols/KitdfFxce1swLTldKyg/OixbMC05XSopP1xcfSlcXD8/fFteLj8qK14ke1soKXxcXFxcXSt8Li9nLCBlc2NhcGVkID0gITEsIGN1cnJlbnRUb2tlbiA9IG5ldyBNYXNrVG9rZW4oKSwgb3BlbmVuaW5ncyA9IFtdLCBtYXNrVG9rZW5zID0gW107XG4gICAgICAgICAgICBmb3IgKHJlZ2V4TWFzayAmJiAob3B0cy5vcHRpb25hbG1hcmtlci5zdGFydCA9IHVuZGVmaW5lZCwgb3B0cy5vcHRpb25hbG1hcmtlci5lbmQgPSB1bmRlZmluZWQpOyBtYXRjaCA9IHJlZ2V4TWFzayA/IHJlZ2V4VG9rZW5pemVyLmV4ZWMobWFzaykgOiB0b2tlbml6ZXIuZXhlYyhtYXNrKTsgKSB7XG4gICAgICAgICAgICAgICAgaWYgKG0gPSBtYXRjaFswXSwgcmVnZXhNYXNrKSBzd2l0Y2ggKG0uY2hhckF0KDApKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiP1wiOlxuICAgICAgICAgICAgICAgICAgICBtID0gXCJ7MCwxfVwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSBcIitcIjpcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCIqXCI6XG4gICAgICAgICAgICAgICAgICAgIG0gPSBcIntcIiArIG0gKyBcIn1cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVzY2FwZWQpIGRlZmF1bHRDYXNlKCk7IGVsc2Ugc3dpdGNoIChtLmNoYXJBdCgwKSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBvcHRzLmVzY2FwZUNoYXI6XG4gICAgICAgICAgICAgICAgICAgIGVzY2FwZWQgPSAhMCwgcmVnZXhNYXNrICYmIGRlZmF1bHRDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIG9wdHMub3B0aW9uYWxtYXJrZXIuZW5kOlxuICAgICAgICAgICAgICAgICAgY2FzZSBvcHRzLmdyb3VwbWFya2VyLmVuZDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZW5pbmdUb2tlbiA9IG9wZW5lbmluZ3MucG9wKCksIG9wZW5pbmdUb2tlbi5vcGVuR3JvdXAgPSAhMSwgb3BlbmluZ1Rva2VuICE9PSB1bmRlZmluZWQpIGlmIChvcGVuZW5pbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50T3BlbmluZ1Rva2VuID0gb3BlbmVuaW5nc1tvcGVuZW5pbmdzLmxlbmd0aCAtIDFdLCBjdXJyZW50T3BlbmluZ1Rva2VuLm1hdGNoZXMucHVzaChvcGVuaW5nVG9rZW4pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPcGVuaW5nVG9rZW4uaXNBbHRlcm5hdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRvciA9IG9wZW5lbmluZ3MucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbW5keCA9IDA7IG1uZHggPCBhbHRlcm5hdG9yLm1hdGNoZXMubGVuZ3RoOyBtbmR4KyspIGFsdGVybmF0b3IubWF0Y2hlc1ttbmR4XS5pc0dyb3VwID0gITEsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0b3IubWF0Y2hlc1ttbmR4XS5hbHRlcm5hdG9yR3JvdXAgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuZW5pbmdzLmxlbmd0aCA+IDAgPyAoY3VycmVudE9wZW5pbmdUb2tlbiA9IG9wZW5lbmluZ3Nbb3BlbmVuaW5ncy5sZW5ndGggLSAxXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE9wZW5pbmdUb2tlbi5tYXRjaGVzLnB1c2goYWx0ZXJuYXRvcikpIDogY3VycmVudFRva2VuLm1hdGNoZXMucHVzaChhbHRlcm5hdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGN1cnJlbnRUb2tlbi5tYXRjaGVzLnB1c2gob3BlbmluZ1Rva2VuKTsgZWxzZSBkZWZhdWx0Q2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSBvcHRzLm9wdGlvbmFsbWFya2VyLnN0YXJ0OlxuICAgICAgICAgICAgICAgICAgICBvcGVuZW5pbmdzLnB1c2gobmV3IE1hc2tUb2tlbighMSwgITApKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2Ugb3B0cy5ncm91cG1hcmtlci5zdGFydDpcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVuaW5ncy5wdXNoKG5ldyBNYXNrVG9rZW4oITApKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2Ugb3B0cy5xdWFudGlmaWVybWFya2VyLnN0YXJ0OlxuICAgICAgICAgICAgICAgICAgICB2YXIgcXVhbnRpZmllciA9IG5ldyBNYXNrVG9rZW4oITEsICExLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgIG0gPSBtLnJlcGxhY2UoL1t7fV0vZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtcSA9IG0uc3BsaXQoXCIsXCIpLCBtcTAgPSBpc05hTihtcVswXSkgPyBtcVswXSA6IHBhcnNlSW50KG1xWzBdKSwgbXExID0gMSA9PT0gbXEubGVuZ3RoID8gbXEwIDogaXNOYU4obXFbMV0pID8gbXFbMV0gOiBwYXJzZUludChtcVsxXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcIipcIiAhPT0gbXExICYmIFwiK1wiICE9PSBtcTEgfHwgKG1xMCA9IFwiKlwiID09PSBtcTEgPyAwIDogMSksIHF1YW50aWZpZXIucXVhbnRpZmllciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogbXEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBtcTFcbiAgICAgICAgICAgICAgICAgICAgfSwgb3BlbmVuaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IG9wZW5lbmluZ3Nbb3BlbmVuaW5ncy5sZW5ndGggLSAxXS5tYXRjaGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBtYXRjaGVzLnBvcCgpLCBtYXRjaC5pc0dyb3VwIHx8IChncm91cFRva2VuID0gbmV3IE1hc2tUb2tlbighMCksIGdyb3VwVG9rZW4ubWF0Y2hlcy5wdXNoKG1hdGNoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGdyb3VwVG9rZW4pLCBtYXRjaGVzLnB1c2gobWF0Y2gpLCBtYXRjaGVzLnB1c2gocXVhbnRpZmllcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBtYXRjaCA9IGN1cnJlbnRUb2tlbi5tYXRjaGVzLnBvcCgpLCBtYXRjaC5pc0dyb3VwIHx8IChyZWdleE1hc2sgJiYgbnVsbCA9PT0gbWF0Y2guZm4gJiYgXCIuXCIgPT09IG1hdGNoLmRlZiAmJiAobWF0Y2guZm4gPSBuZXcgUmVnRXhwKG1hdGNoLmRlZiwgb3B0cy5jYXNpbmcgPyBcImlcIiA6IFwiXCIpKSwgXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwVG9rZW4gPSBuZXcgTWFza1Rva2VuKCEwKSwgZ3JvdXBUb2tlbi5tYXRjaGVzLnB1c2gobWF0Y2gpLCBtYXRjaCA9IGdyb3VwVG9rZW4pLCBcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRva2VuLm1hdGNoZXMucHVzaChtYXRjaCksIGN1cnJlbnRUb2tlbi5tYXRjaGVzLnB1c2gocXVhbnRpZmllcik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIG9wdHMuYWx0ZXJuYXRvcm1hcmtlcjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZW5lbmluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE9wZW5pbmdUb2tlbiA9IG9wZW5lbmluZ3Nbb3BlbmVuaW5ncy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdWJUb2tlbiA9IGN1cnJlbnRPcGVuaW5nVG9rZW4ubWF0Y2hlc1tjdXJyZW50T3BlbmluZ1Rva2VuLm1hdGNoZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0TWF0Y2ggPSBjdXJyZW50T3BlbmluZ1Rva2VuLm9wZW5Hcm91cCAmJiAoc3ViVG9rZW4ubWF0Y2hlcyA9PT0gdW5kZWZpbmVkIHx8ICExID09PSBzdWJUb2tlbi5pc0dyb3VwICYmICExID09PSBzdWJUb2tlbi5pc0FsdGVybmF0b3IpID8gb3BlbmVuaW5ncy5wb3AoKSA6IGN1cnJlbnRPcGVuaW5nVG9rZW4ubWF0Y2hlcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGxhc3RNYXRjaCA9IGN1cnJlbnRUb2tlbi5tYXRjaGVzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdE1hdGNoLmlzQWx0ZXJuYXRvcikgb3BlbmVuaW5ncy5wdXNoKGxhc3RNYXRjaCk7IGVsc2UgaWYgKGxhc3RNYXRjaC5hbHRlcm5hdG9yR3JvdXAgPyAoYWx0ZXJuYXRvciA9IG9wZW5lbmluZ3MucG9wKCksIFxuICAgICAgICAgICAgICAgICAgICBsYXN0TWF0Y2guYWx0ZXJuYXRvckdyb3VwID0gITEpIDogYWx0ZXJuYXRvciA9IG5ldyBNYXNrVG9rZW4oITEsICExLCAhMSwgITApLCBhbHRlcm5hdG9yLm1hdGNoZXMucHVzaChsYXN0TWF0Y2gpLCBcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVuaW5ncy5wdXNoKGFsdGVybmF0b3IpLCBsYXN0TWF0Y2gub3Blbkdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0TWF0Y2gub3Blbkdyb3VwID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWx0ZXJuYXRvckdyb3VwID0gbmV3IE1hc2tUb2tlbighMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdG9yR3JvdXAuYWx0ZXJuYXRvckdyb3VwID0gITAsIG9wZW5lbmluZ3MucHVzaChhbHRlcm5hdG9yR3JvdXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2FzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoO29wZW5lbmluZ3MubGVuZ3RoID4gMDsgKSBvcGVuaW5nVG9rZW4gPSBvcGVuZW5pbmdzLnBvcCgpLCBjdXJyZW50VG9rZW4ubWF0Y2hlcy5wdXNoKG9wZW5pbmdUb2tlbik7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFRva2VuLm1hdGNoZXMubGVuZ3RoID4gMCAmJiAodmVyaWZ5R3JvdXBNYXJrZXIoY3VycmVudFRva2VuKSwgbWFza1Rva2Vucy5wdXNoKGN1cnJlbnRUb2tlbikpLCBcbiAgICAgICAgICAgIChvcHRzLm51bWVyaWNJbnB1dCB8fCBvcHRzLmlzUlRMKSAmJiByZXZlcnNlVG9rZW5zKG1hc2tUb2tlbnNbMF0pLCBtYXNrVG9rZW5zO1xuICAgICAgICB9XG4gICAgfSwgSW5wdXRtYXNrLmV4dGVuZERlZmF1bHRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAkLmV4dGVuZCghMCwgSW5wdXRtYXNrLnByb3RvdHlwZS5kZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgfSwgSW5wdXRtYXNrLmV4dGVuZERlZmluaXRpb25zID0gZnVuY3Rpb24oZGVmaW5pdGlvbikge1xuICAgICAgICAkLmV4dGVuZCghMCwgSW5wdXRtYXNrLnByb3RvdHlwZS5kZWZpbml0aW9ucywgZGVmaW5pdGlvbik7XG4gICAgfSwgSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMgPSBmdW5jdGlvbihhbGlhcykge1xuICAgICAgICAkLmV4dGVuZCghMCwgSW5wdXRtYXNrLnByb3RvdHlwZS5hbGlhc2VzLCBhbGlhcyk7XG4gICAgfSwgSW5wdXRtYXNrLmZvcm1hdCA9IGZ1bmN0aW9uKHZhbHVlLCBvcHRpb25zLCBtZXRhZGF0YSkge1xuICAgICAgICByZXR1cm4gSW5wdXRtYXNrKG9wdGlvbnMpLmZvcm1hdCh2YWx1ZSwgbWV0YWRhdGEpO1xuICAgIH0sIElucHV0bWFzay51bm1hc2sgPSBmdW5jdGlvbih2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gSW5wdXRtYXNrKG9wdGlvbnMpLnVubWFza2VkdmFsdWUodmFsdWUpO1xuICAgIH0sIElucHV0bWFzay5pc1ZhbGlkID0gZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIElucHV0bWFzayhvcHRpb25zKS5pc1ZhbGlkKHZhbHVlKTtcbiAgICB9LCBJbnB1dG1hc2sucmVtb3ZlID0gZnVuY3Rpb24oZWxlbXMpIHtcbiAgICAgICAgJC5lYWNoKGVsZW1zLCBmdW5jdGlvbihuZHgsIGVsKSB7XG4gICAgICAgICAgICBlbC5pbnB1dG1hc2sgJiYgZWwuaW5wdXRtYXNrLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9LCBJbnB1dG1hc2suZXNjYXBlUmVnZXggPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgdmFyIHNwZWNpYWxzID0gWyBcIi9cIiwgXCIuXCIsIFwiKlwiLCBcIitcIiwgXCI/XCIsIFwifFwiLCBcIihcIiwgXCIpXCIsIFwiW1wiLCBcIl1cIiwgXCJ7XCIsIFwifVwiLCBcIlxcXFxcIiwgXCIkXCIsIFwiXlwiIF07XG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKFwiKFxcXFxcIiArIHNwZWNpYWxzLmpvaW4oXCJ8XFxcXFwiKSArIFwiKVwiLCBcImdpbVwiKSwgXCJcXFxcJDFcIik7XG4gICAgfSwgSW5wdXRtYXNrLmtleUNvZGUgPSB7XG4gICAgICAgIEFMVDogMTgsXG4gICAgICAgIEJBQ0tTUEFDRTogOCxcbiAgICAgICAgQkFDS1NQQUNFX1NBRkFSSTogMTI3LFxuICAgICAgICBDQVBTX0xPQ0s6IDIwLFxuICAgICAgICBDT01NQTogMTg4LFxuICAgICAgICBDT01NQU5EOiA5MSxcbiAgICAgICAgQ09NTUFORF9MRUZUOiA5MSxcbiAgICAgICAgQ09NTUFORF9SSUdIVDogOTMsXG4gICAgICAgIENPTlRST0w6IDE3LFxuICAgICAgICBERUxFVEU6IDQ2LFxuICAgICAgICBET1dOOiA0MCxcbiAgICAgICAgRU5EOiAzNSxcbiAgICAgICAgRU5URVI6IDEzLFxuICAgICAgICBFU0NBUEU6IDI3LFxuICAgICAgICBIT01FOiAzNixcbiAgICAgICAgSU5TRVJUOiA0NSxcbiAgICAgICAgTEVGVDogMzcsXG4gICAgICAgIE1FTlU6IDkzLFxuICAgICAgICBOVU1QQURfQUREOiAxMDcsXG4gICAgICAgIE5VTVBBRF9ERUNJTUFMOiAxMTAsXG4gICAgICAgIE5VTVBBRF9ESVZJREU6IDExMSxcbiAgICAgICAgTlVNUEFEX0VOVEVSOiAxMDgsXG4gICAgICAgIE5VTVBBRF9NVUxUSVBMWTogMTA2LFxuICAgICAgICBOVU1QQURfU1VCVFJBQ1Q6IDEwOSxcbiAgICAgICAgUEFHRV9ET1dOOiAzNCxcbiAgICAgICAgUEFHRV9VUDogMzMsXG4gICAgICAgIFBFUklPRDogMTkwLFxuICAgICAgICBSSUdIVDogMzksXG4gICAgICAgIFNISUZUOiAxNixcbiAgICAgICAgU1BBQ0U6IDMyLFxuICAgICAgICBUQUI6IDksXG4gICAgICAgIFVQOiAzOCxcbiAgICAgICAgV0lORE9XUzogOTEsXG4gICAgICAgIFg6IDg4XG4gICAgfSwgSW5wdXRtYXNrO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;/*!\n* global/window.js\n* https://github.com/RobinHerbots/Inputmask\n* Copyright (c) 2010 - 2017 Robin Herbots\n* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)\n* Version: 3.3.8\n*/\n\n true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {\n    return window;\n}.call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : \"object\" == typeof exports && (module.exports = window);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2dsb2JhbC93aW5kb3cuanM/YTUyZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUFBIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiogZ2xvYmFsL3dpbmRvdy5qc1xuKiBodHRwczovL2dpdGh1Yi5jb20vUm9iaW5IZXJib3RzL0lucHV0bWFza1xuKiBDb3B5cmlnaHQgKGMpIDIwMTAgLSAyMDE3IFJvYmluIEhlcmJvdHNcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocClcbiogVmVyc2lvbjogMy4zLjhcbiovXG5cblwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbn0pIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyAmJiAobW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lucHV0bWFzay9kaXN0L2lucHV0bWFzay9nbG9iYWwvd2luZG93LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;/*!\n* global/document.js\n* https://github.com/RobinHerbots/Inputmask\n* Copyright (c) 2010 - 2017 Robin Herbots\n* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)\n* Version: 3.3.8\n*/\n\n true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {\n    return document;\n}.call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : \"object\" == typeof exports && (module.exports = document);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2dsb2JhbC9kb2N1bWVudC5qcz80ZGY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQUEiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuKiBnbG9iYWwvZG9jdW1lbnQuanNcbiogaHR0cHM6Ly9naXRodWIuY29tL1JvYmluSGVyYm90cy9JbnB1dG1hc2tcbiogQ29weXJpZ2h0IChjKSAyMDEwIC0gMjAxNyBSb2JpbiBIZXJib3RzXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4qIFZlcnNpb246IDMuMy44XG4qL1xuXG5cImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkb2N1bWVudDtcbn0pIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyAmJiAobW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2dsb2JhbC9kb2N1bWVudC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inputmask__ = __webpack_require__(5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inputmask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inputmask__);\n/*\n * vue-inputmask\n *\n * (C) 2016 Simon Clériot\n * MIT LICENCE\n *\n */\n\n\nvar inputmaskPlugin = {\n    install: function (Vue, options) {\n        Vue.directive('mask', {\n            bind: function (el, binding) {\n                __WEBPACK_IMPORTED_MODULE_0_inputmask___default()(binding.value).mask(el);\n            }\n        });\n    }\n};\n\nexports.default = inputmaskPlugin;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdnVlLWlucHV0bWFzay5qcz9hMmE5Il0sIm5hbWVzIjpbImlucHV0bWFza1BsdWdpbiIsImluc3RhbGwiLCJWdWUiLCJvcHRpb25zIiwiZGlyZWN0aXZlIiwiYmluZCIsImVsIiwiYmluZGluZyIsIklucHV0bWFzayIsInZhbHVlIiwibWFzayIsImV4cG9ydHMiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBT0E7O0FBRUEsSUFBSUEsa0JBQWtCO0FBQ2xCQyxhQUFTLFVBQVNDLEdBQVQsRUFBY0MsT0FBZCxFQUF1QjtBQUM1QkQsWUFBSUUsU0FBSixDQUFjLE1BQWQsRUFBc0I7QUFDbEJDLGtCQUFNLFVBQVNDLEVBQVQsRUFBYUMsT0FBYixFQUFzQjtBQUN4QkMsZ0JBQUEsaURBQUFBLENBQVVELFFBQVFFLEtBQWxCLEVBQXlCQyxJQUF6QixDQUE4QkosRUFBOUI7QUFDSDtBQUhpQixTQUF0QjtBQUtIO0FBUGlCLENBQXRCOztBQVVBSyxRQUFRQyxPQUFSLEdBQWtCWixlQUFsQiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIHZ1ZS1pbnB1dG1hc2tcbiAqXG4gKiAoQykgMjAxNiBTaW1vbiBDbMOpcmlvdFxuICogTUlUIExJQ0VOQ0VcbiAqXG4gKi9cbmltcG9ydCBJbnB1dG1hc2sgZnJvbSAnaW5wdXRtYXNrJ1xuXG52YXIgaW5wdXRtYXNrUGx1Z2luID0ge1xuICAgIGluc3RhbGw6IGZ1bmN0aW9uKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWUuZGlyZWN0aXZlKCdtYXNrJywge1xuICAgICAgICAgICAgYmluZDogZnVuY3Rpb24oZWwsIGJpbmRpbmcpIHtcbiAgICAgICAgICAgICAgICBJbnB1dG1hc2soYmluZGluZy52YWx1ZSkubWFzayhlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGlucHV0bWFza1BsdWdpblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92dWUtaW5wdXRtYXNrLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(6);\r\n__webpack_require__(7);\r\n__webpack_require__(8);\r\n__webpack_require__(9);\r\n\r\n// require(\"./dist/inputmask/phone-codes/phone-be\");\r\n// require(\"./dist/inputmask/phone-codes/phone-nl\");\r\n// require(\"./dist/inputmask/phone-codes/phone-ru\");\r\n// require(\"./dist/inputmask/phone-codes/phone-uk\");\r\n// require(\"./dist/inputmask/phone-codes/phone\");\r\n\r\nmodule.exports = __webpack_require__(1);\r\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2luZGV4LmpzP2VlNjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZShcIi4vZGlzdC9pbnB1dG1hc2svaW5wdXRtYXNrLmRhdGUuZXh0ZW5zaW9uc1wiKTtcclxucmVxdWlyZShcIi4vZGlzdC9pbnB1dG1hc2svaW5wdXRtYXNrLmV4dGVuc2lvbnNcIik7XHJcbnJlcXVpcmUoXCIuL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5udW1lcmljLmV4dGVuc2lvbnNcIik7XHJcbnJlcXVpcmUoXCIuL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5waG9uZS5leHRlbnNpb25zXCIpO1xyXG5cclxuLy8gcmVxdWlyZShcIi4vZGlzdC9pbnB1dG1hc2svcGhvbmUtY29kZXMvcGhvbmUtYmVcIik7XHJcbi8vIHJlcXVpcmUoXCIuL2Rpc3QvaW5wdXRtYXNrL3Bob25lLWNvZGVzL3Bob25lLW5sXCIpO1xyXG4vLyByZXF1aXJlKFwiLi9kaXN0L2lucHV0bWFzay9waG9uZS1jb2Rlcy9waG9uZS1ydVwiKTtcclxuLy8gcmVxdWlyZShcIi4vZGlzdC9pbnB1dG1hc2svcGhvbmUtY29kZXMvcGhvbmUtdWtcIik7XHJcbi8vIHJlcXVpcmUoXCIuL2Rpc3QvaW5wdXRtYXNrL3Bob25lLWNvZGVzL3Bob25lXCIpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9kaXN0L2lucHV0bWFzay9pbnB1dG1hc2suanNcIik7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lucHV0bWFzay9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n* inputmask.date.extensions.js\n* https://github.com/RobinHerbots/Inputmask\n* Copyright (c) 2010 - 2017 Robin Herbots\n* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)\n* Version: 3.3.8\n*/\n\n!function(factory) {\n     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : \"object\" == typeof exports ? module.exports = factory(require(\"./dependencyLibs/inputmask.dependencyLib\"), require(\"./inputmask\")) : factory(window.dependencyLib || jQuery, window.Inputmask);\n}(function($, Inputmask) {\n    function isLeapYear(year) {\n        return isNaN(year) || 29 === new Date(year, 2, 0).getDate();\n    }\n    return Inputmask.extendAliases({\n        \"dd/mm/yyyy\": {\n            mask: \"1/2/y\",\n            placeholder: \"dd/mm/yyyy\",\n            regex: {\n                val1pre: new RegExp(\"[0-3]\"),\n                val1: new RegExp(\"0[1-9]|[12][0-9]|3[01]\"),\n                val2pre: function(separator) {\n                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);\n                    return new RegExp(\"((0[1-9]|[12][0-9]|3[01])\" + escapedSeparator + \"[01])\");\n                },\n                val2: function(separator) {\n                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);\n                    return new RegExp(\"((0[1-9]|[12][0-9])\" + escapedSeparator + \"(0[1-9]|1[012]))|(30\" + escapedSeparator + \"(0[13-9]|1[012]))|(31\" + escapedSeparator + \"(0[13578]|1[02]))\");\n                }\n            },\n            leapday: \"29/02/\",\n            separator: \"/\",\n            yearrange: {\n                minyear: 1900,\n                maxyear: 2099\n            },\n            isInYearRange: function(chrs, minyear, maxyear) {\n                if (isNaN(chrs)) return !1;\n                var enteredyear = parseInt(chrs.concat(minyear.toString().slice(chrs.length))), enteredyear2 = parseInt(chrs.concat(maxyear.toString().slice(chrs.length)));\n                return !isNaN(enteredyear) && (minyear <= enteredyear && enteredyear <= maxyear) || !isNaN(enteredyear2) && (minyear <= enteredyear2 && enteredyear2 <= maxyear);\n            },\n            determinebaseyear: function(minyear, maxyear, hint) {\n                var currentyear = new Date().getFullYear();\n                if (minyear > currentyear) return minyear;\n                if (maxyear < currentyear) {\n                    for (var maxYearPrefix = maxyear.toString().slice(0, 2), maxYearPostfix = maxyear.toString().slice(2, 4); maxyear < maxYearPrefix + hint; ) maxYearPrefix--;\n                    var maxxYear = maxYearPrefix + maxYearPostfix;\n                    return minyear > maxxYear ? minyear : maxxYear;\n                }\n                if (minyear <= currentyear && currentyear <= maxyear) {\n                    for (var currentYearPrefix = currentyear.toString().slice(0, 2); maxyear < currentYearPrefix + hint; ) currentYearPrefix--;\n                    var currentYearAndHint = currentYearPrefix + hint;\n                    return currentYearAndHint < minyear ? minyear : currentYearAndHint;\n                }\n                return currentyear;\n            },\n            onKeyDown: function(e, buffer, caretPos, opts) {\n                var $input = $(this);\n                if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {\n                    var today = new Date();\n                    $input.val(today.getDate().toString() + (today.getMonth() + 1).toString() + today.getFullYear().toString()), \n                    $input.trigger(\"setvalue\");\n                }\n            },\n            getFrontValue: function(mask, buffer, opts) {\n                for (var start = 0, length = 0, i = 0; i < mask.length && \"2\" !== mask.charAt(i); i++) {\n                    var definition = opts.definitions[mask.charAt(i)];\n                    definition ? (start += length, length = definition.cardinality) : length++;\n                }\n                return buffer.join(\"\").substr(start, length);\n            },\n            postValidation: function(buffer, currentResult, opts) {\n                var dayMonthValue, year, bufferStr = buffer.join(\"\");\n                return 0 === opts.mask.indexOf(\"y\") ? (year = bufferStr.substr(0, 4), dayMonthValue = bufferStr.substring(4, 10)) : (year = bufferStr.substring(6, 10), \n                dayMonthValue = bufferStr.substr(0, 6)), currentResult && (dayMonthValue !== opts.leapday || isLeapYear(year));\n            },\n            definitions: {\n                \"1\": {\n                    validator: function(chrs, maskset, pos, strict, opts) {\n                        if (\"3\" == chrs.charAt(0)) {\n                            if (new RegExp(\"[2-9]\").test(chrs.charAt(1))) return chrs = \"30\", maskset.buffer[pos] = \"0\", \n                            pos++, {\n                                pos: pos\n                            };\n                        }\n                        var isValid = opts.regex.val1.test(chrs);\n                        return strict || isValid || chrs.charAt(1) !== opts.separator && -1 === \"-./\".indexOf(chrs.charAt(1)) || !(isValid = opts.regex.val1.test(\"0\" + chrs.charAt(0))) ? isValid : (maskset.buffer[pos - 1] = \"0\", \n                        {\n                            refreshFromBuffer: {\n                                start: pos - 1,\n                                end: pos\n                            },\n                            pos: pos,\n                            c: chrs.charAt(0)\n                        });\n                    },\n                    cardinality: 2,\n                    prevalidator: [ {\n                        validator: function(chrs, maskset, pos, strict, opts) {\n                            var pchrs = chrs;\n                            isNaN(maskset.buffer[pos + 1]) || (pchrs += maskset.buffer[pos + 1]);\n                            var isValid = 1 === pchrs.length ? opts.regex.val1pre.test(pchrs) : opts.regex.val1.test(pchrs);\n                            if (!strict && !isValid) {\n                                if (isValid = opts.regex.val1.test(chrs + \"0\")) return maskset.buffer[pos] = chrs, \n                                maskset.buffer[++pos] = \"0\", {\n                                    pos: pos,\n                                    c: \"0\"\n                                };\n                                if (isValid = opts.regex.val1.test(\"0\" + chrs)) return maskset.buffer[pos] = \"0\", \n                                pos++, {\n                                    pos: pos\n                                };\n                            }\n                            return isValid;\n                        },\n                        cardinality: 1\n                    } ]\n                },\n                \"2\": {\n                    validator: function(chrs, maskset, pos, strict, opts) {\n                        var frontValue = opts.getFrontValue(maskset.mask, maskset.buffer, opts);\n                        if (-1 !== frontValue.indexOf(opts.placeholder[0]) && (frontValue = \"01\" + opts.separator), \n                        \"1\" == chrs.charAt(0)) {\n                            if (new RegExp(\"[3-9]\").test(chrs.charAt(1))) return chrs = \"10\", maskset.buffer[pos] = \"0\", \n                            pos++, {\n                                pos: pos\n                            };\n                        }\n                        var isValid = opts.regex.val2(opts.separator).test(frontValue + chrs);\n                        return strict || isValid || chrs.charAt(1) !== opts.separator && -1 === \"-./\".indexOf(chrs.charAt(1)) || !(isValid = opts.regex.val2(opts.separator).test(frontValue + \"0\" + chrs.charAt(0))) ? isValid : (maskset.buffer[pos - 1] = \"0\", \n                        {\n                            refreshFromBuffer: {\n                                start: pos - 1,\n                                end: pos\n                            },\n                            pos: pos,\n                            c: chrs.charAt(0)\n                        });\n                    },\n                    cardinality: 2,\n                    prevalidator: [ {\n                        validator: function(chrs, maskset, pos, strict, opts) {\n                            isNaN(maskset.buffer[pos + 1]) || (chrs += maskset.buffer[pos + 1]);\n                            var frontValue = opts.getFrontValue(maskset.mask, maskset.buffer, opts);\n                            -1 !== frontValue.indexOf(opts.placeholder[0]) && (frontValue = \"01\" + opts.separator);\n                            var isValid = 1 === chrs.length ? opts.regex.val2pre(opts.separator).test(frontValue + chrs) : opts.regex.val2(opts.separator).test(frontValue + chrs);\n                            return strict || isValid || !(isValid = opts.regex.val2(opts.separator).test(frontValue + \"0\" + chrs)) ? isValid : (maskset.buffer[pos] = \"0\", \n                            pos++, {\n                                pos: pos\n                            });\n                        },\n                        cardinality: 1\n                    } ]\n                },\n                y: {\n                    validator: function(chrs, maskset, pos, strict, opts) {\n                        return opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);\n                    },\n                    cardinality: 4,\n                    prevalidator: [ {\n                        validator: function(chrs, maskset, pos, strict, opts) {\n                            var isValid = opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);\n                            if (!strict && !isValid) {\n                                var yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs + \"0\").toString().slice(0, 1);\n                                if (isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(0), \n                                {\n                                    pos: pos\n                                };\n                                if (yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs + \"0\").toString().slice(0, 2), \n                                isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(0), \n                                maskset.buffer[pos++] = yearPrefix.charAt(1), {\n                                    pos: pos\n                                };\n                            }\n                            return isValid;\n                        },\n                        cardinality: 1\n                    }, {\n                        validator: function(chrs, maskset, pos, strict, opts) {\n                            var isValid = opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);\n                            if (!strict && !isValid) {\n                                var yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs).toString().slice(0, 2);\n                                if (isValid = opts.isInYearRange(chrs[0] + yearPrefix[1] + chrs[1], opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(1), \n                                {\n                                    pos: pos\n                                };\n                                if (yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs).toString().slice(0, 2), \n                                isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos - 1] = yearPrefix.charAt(0), \n                                maskset.buffer[pos++] = yearPrefix.charAt(1), maskset.buffer[pos++] = chrs.charAt(0), \n                                {\n                                    refreshFromBuffer: {\n                                        start: pos - 3,\n                                        end: pos\n                                    },\n                                    pos: pos\n                                };\n                            }\n                            return isValid;\n                        },\n                        cardinality: 2\n                    }, {\n                        validator: function(chrs, maskset, pos, strict, opts) {\n                            return opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);\n                        },\n                        cardinality: 3\n                    } ]\n                }\n            },\n            insertMode: !1,\n            autoUnmask: !1\n        },\n        \"mm/dd/yyyy\": {\n            placeholder: \"mm/dd/yyyy\",\n            alias: \"dd/mm/yyyy\",\n            regex: {\n                val2pre: function(separator) {\n                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);\n                    return new RegExp(\"((0[13-9]|1[012])\" + escapedSeparator + \"[0-3])|(02\" + escapedSeparator + \"[0-2])\");\n                },\n                val2: function(separator) {\n                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);\n                    return new RegExp(\"((0[1-9]|1[012])\" + escapedSeparator + \"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])\" + escapedSeparator + \"30)|((0[13578]|1[02])\" + escapedSeparator + \"31)\");\n                },\n                val1pre: new RegExp(\"[01]\"),\n                val1: new RegExp(\"0[1-9]|1[012]\")\n            },\n            leapday: \"02/29/\",\n            onKeyDown: function(e, buffer, caretPos, opts) {\n                var $input = $(this);\n                if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {\n                    var today = new Date();\n                    $input.val((today.getMonth() + 1).toString() + today.getDate().toString() + today.getFullYear().toString()), \n                    $input.trigger(\"setvalue\");\n                }\n            }\n        },\n        \"yyyy/mm/dd\": {\n            mask: \"y/1/2\",\n            placeholder: \"yyyy/mm/dd\",\n            alias: \"mm/dd/yyyy\",\n            leapday: \"/02/29\",\n            onKeyDown: function(e, buffer, caretPos, opts) {\n                var $input = $(this);\n                if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {\n                    var today = new Date();\n                    $input.val(today.getFullYear().toString() + (today.getMonth() + 1).toString() + today.getDate().toString()), \n                    $input.trigger(\"setvalue\");\n                }\n            }\n        },\n        \"dd.mm.yyyy\": {\n            mask: \"1.2.y\",\n            placeholder: \"dd.mm.yyyy\",\n            leapday: \"29.02.\",\n            separator: \".\",\n            alias: \"dd/mm/yyyy\"\n        },\n        \"dd-mm-yyyy\": {\n            mask: \"1-2-y\",\n            placeholder: \"dd-mm-yyyy\",\n            leapday: \"29-02-\",\n            separator: \"-\",\n            alias: \"dd/mm/yyyy\"\n        },\n        \"mm.dd.yyyy\": {\n            mask: \"1.2.y\",\n            placeholder: \"mm.dd.yyyy\",\n            leapday: \"02.29.\",\n            separator: \".\",\n            alias: \"mm/dd/yyyy\"\n        },\n        \"mm-dd-yyyy\": {\n            mask: \"1-2-y\",\n            placeholder: \"mm-dd-yyyy\",\n            leapday: \"02-29-\",\n            separator: \"-\",\n            alias: \"mm/dd/yyyy\"\n        },\n        \"yyyy.mm.dd\": {\n            mask: \"y.1.2\",\n            placeholder: \"yyyy.mm.dd\",\n            leapday: \".02.29\",\n            separator: \".\",\n            alias: \"yyyy/mm/dd\"\n        },\n        \"yyyy-mm-dd\": {\n            mask: \"y-1-2\",\n            placeholder: \"yyyy-mm-dd\",\n            leapday: \"-02-29\",\n            separator: \"-\",\n            alias: \"yyyy/mm/dd\"\n        },\n        datetime: {\n            mask: \"1/2/y h:s\",\n            placeholder: \"dd/mm/yyyy hh:mm\",\n            alias: \"dd/mm/yyyy\",\n            regex: {\n                hrspre: new RegExp(\"[012]\"),\n                hrs24: new RegExp(\"2[0-4]|1[3-9]\"),\n                hrs: new RegExp(\"[01][0-9]|2[0-4]\"),\n                ampm: new RegExp(\"^[a|p|A|P][m|M]\"),\n                mspre: new RegExp(\"[0-5]\"),\n                ms: new RegExp(\"[0-5][0-9]\")\n            },\n            timeseparator: \":\",\n            hourFormat: \"24\",\n            definitions: {\n                h: {\n                    validator: function(chrs, maskset, pos, strict, opts) {\n                        if (\"24\" === opts.hourFormat && 24 === parseInt(chrs, 10)) return maskset.buffer[pos - 1] = \"0\", \n                        maskset.buffer[pos] = \"0\", {\n                            refreshFromBuffer: {\n                                start: pos - 1,\n                                end: pos\n                            },\n                            c: \"0\"\n                        };\n                        var isValid = opts.regex.hrs.test(chrs);\n                        if (!strict && !isValid && (chrs.charAt(1) === opts.timeseparator || -1 !== \"-.:\".indexOf(chrs.charAt(1))) && (isValid = opts.regex.hrs.test(\"0\" + chrs.charAt(0)))) return maskset.buffer[pos - 1] = \"0\", \n                        maskset.buffer[pos] = chrs.charAt(0), pos++, {\n                            refreshFromBuffer: {\n                                start: pos - 2,\n                                end: pos\n                            },\n                            pos: pos,\n                            c: opts.timeseparator\n                        };\n                        if (isValid && \"24\" !== opts.hourFormat && opts.regex.hrs24.test(chrs)) {\n                            var tmp = parseInt(chrs, 10);\n                            return 24 === tmp ? (maskset.buffer[pos + 5] = \"a\", maskset.buffer[pos + 6] = \"m\") : (maskset.buffer[pos + 5] = \"p\", \n                            maskset.buffer[pos + 6] = \"m\"), tmp -= 12, tmp < 10 ? (maskset.buffer[pos] = tmp.toString(), \n                            maskset.buffer[pos - 1] = \"0\") : (maskset.buffer[pos] = tmp.toString().charAt(1), \n                            maskset.buffer[pos - 1] = tmp.toString().charAt(0)), {\n                                refreshFromBuffer: {\n                                    start: pos - 1,\n                                    end: pos + 6\n                                },\n                                c: maskset.buffer[pos]\n                            };\n                        }\n                        return isValid;\n                    },\n                    cardinality: 2,\n                    prevalidator: [ {\n                        validator: function(chrs, maskset, pos, strict, opts) {\n                            var isValid = opts.regex.hrspre.test(chrs);\n                            return strict || isValid || !(isValid = opts.regex.hrs.test(\"0\" + chrs)) ? isValid : (maskset.buffer[pos] = \"0\", \n                            pos++, {\n                                pos: pos\n                            });\n                        },\n                        cardinality: 1\n                    } ]\n                },\n                s: {\n                    validator: \"[0-5][0-9]\",\n                    cardinality: 2,\n                    prevalidator: [ {\n                        validator: function(chrs, maskset, pos, strict, opts) {\n                            var isValid = opts.regex.mspre.test(chrs);\n                            return strict || isValid || !(isValid = opts.regex.ms.test(\"0\" + chrs)) ? isValid : (maskset.buffer[pos] = \"0\", \n                            pos++, {\n                                pos: pos\n                            });\n                        },\n                        cardinality: 1\n                    } ]\n                },\n                t: {\n                    validator: function(chrs, maskset, pos, strict, opts) {\n                        return opts.regex.ampm.test(chrs + \"m\");\n                    },\n                    casing: \"lower\",\n                    cardinality: 1\n                }\n            },\n            insertMode: !1,\n            autoUnmask: !1\n        },\n        datetime12: {\n            mask: \"1/2/y h:s t\\\\m\",\n            placeholder: \"dd/mm/yyyy hh:mm xm\",\n            alias: \"datetime\",\n            hourFormat: \"12\"\n        },\n        \"mm/dd/yyyy hh:mm xm\": {\n            mask: \"1/2/y h:s t\\\\m\",\n            placeholder: \"mm/dd/yyyy hh:mm xm\",\n            alias: \"datetime12\",\n            regex: {\n                val2pre: function(separator) {\n                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);\n                    return new RegExp(\"((0[13-9]|1[012])\" + escapedSeparator + \"[0-3])|(02\" + escapedSeparator + \"[0-2])\");\n                },\n                val2: function(separator) {\n                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);\n                    return new RegExp(\"((0[1-9]|1[012])\" + escapedSeparator + \"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])\" + escapedSeparator + \"30)|((0[13578]|1[02])\" + escapedSeparator + \"31)\");\n                },\n                val1pre: new RegExp(\"[01]\"),\n                val1: new RegExp(\"0[1-9]|1[012]\")\n            },\n            leapday: \"02/29/\",\n            onKeyDown: function(e, buffer, caretPos, opts) {\n                var $input = $(this);\n                if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {\n                    var today = new Date();\n                    $input.val((today.getMonth() + 1).toString() + today.getDate().toString() + today.getFullYear().toString()), \n                    $input.trigger(\"setvalue\");\n                }\n            }\n        },\n        \"hh:mm t\": {\n            mask: \"h:s t\\\\m\",\n            placeholder: \"hh:mm xm\",\n            alias: \"datetime\",\n            hourFormat: \"12\"\n        },\n        \"h:s t\": {\n            mask: \"h:s t\\\\m\",\n            placeholder: \"hh:mm xm\",\n            alias: \"datetime\",\n            hourFormat: \"12\"\n        },\n        \"hh:mm:ss\": {\n            mask: \"h:s:s\",\n            placeholder: \"hh:mm:ss\",\n            alias: \"datetime\",\n            autoUnmask: !1\n        },\n        \"hh:mm\": {\n            mask: \"h:s\",\n            placeholder: \"hh:mm\",\n            alias: \"datetime\",\n            autoUnmask: !1\n        },\n        date: {\n            alias: \"dd/mm/yyyy\"\n        },\n        \"mm/yyyy\": {\n            mask: \"1/y\",\n            placeholder: \"mm/yyyy\",\n            leapday: \"donotuse\",\n            separator: \"/\",\n            alias: \"mm/dd/yyyy\"\n        },\n        shamsi: {\n            regex: {\n                val2pre: function(separator) {\n                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);\n                    return new RegExp(\"((0[1-9]|1[012])\" + escapedSeparator + \"[0-3])\");\n                },\n                val2: function(separator) {\n                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);\n                    return new RegExp(\"((0[1-9]|1[012])\" + escapedSeparator + \"(0[1-9]|[12][0-9]))|((0[1-9]|1[012])\" + escapedSeparator + \"30)|((0[1-6])\" + escapedSeparator + \"31)\");\n                },\n                val1pre: new RegExp(\"[01]\"),\n                val1: new RegExp(\"0[1-9]|1[012]\")\n            },\n            yearrange: {\n                minyear: 1300,\n                maxyear: 1499\n            },\n            mask: \"y/1/2\",\n            leapday: \"/12/30\",\n            placeholder: \"yyyy/mm/dd\",\n            alias: \"mm/dd/yyyy\",\n            clearIncomplete: !0\n        },\n        \"yyyy-mm-dd hh:mm:ss\": {\n            mask: \"y-1-2 h:s:s\",\n            placeholder: \"yyyy-mm-dd hh:mm:ss\",\n            alias: \"datetime\",\n            separator: \"-\",\n            leapday: \"-02-29\",\n            regex: {\n                val2pre: function(separator) {\n                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);\n                    return new RegExp(\"((0[13-9]|1[012])\" + escapedSeparator + \"[0-3])|(02\" + escapedSeparator + \"[0-2])\");\n                },\n                val2: function(separator) {\n                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);\n                    return new RegExp(\"((0[1-9]|1[012])\" + escapedSeparator + \"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])\" + escapedSeparator + \"30)|((0[13578]|1[02])\" + escapedSeparator + \"31)\");\n                },\n                val1pre: new RegExp(\"[01]\"),\n                val1: new RegExp(\"0[1-9]|1[012]\")\n            },\n            onKeyDown: function(e, buffer, caretPos, opts) {}\n        }\n    }), Inputmask;\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5kYXRlLmV4dGVuc2lvbnMuanM/ZTgyNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2SEFBNkgsZ0NBQWdDO0FBQzdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLG9DQUFvQztBQUN4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLHNEQUFzRCwyQ0FBMkM7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4qIGlucHV0bWFzay5kYXRlLmV4dGVuc2lvbnMuanNcbiogaHR0cHM6Ly9naXRodWIuY29tL1JvYmluSGVyYm90cy9JbnB1dG1hc2tcbiogQ29weXJpZ2h0IChjKSAyMDEwIC0gMjAxNyBSb2JpbiBIZXJib3RzXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4qIFZlcnNpb246IDMuMy44XG4qL1xuXG4hZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWyBcIi4vZGVwZW5kZW5jeUxpYnMvaW5wdXRtYXNrLmRlcGVuZGVuY3lMaWJcIiwgXCIuL2lucHV0bWFza1wiIF0sIGZhY3RvcnkpIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9kZXBlbmRlbmN5TGlicy9pbnB1dG1hc2suZGVwZW5kZW5jeUxpYlwiKSwgcmVxdWlyZShcIi4vaW5wdXRtYXNrXCIpKSA6IGZhY3Rvcnkod2luZG93LmRlcGVuZGVuY3lMaWIgfHwgalF1ZXJ5LCB3aW5kb3cuSW5wdXRtYXNrKTtcbn0oZnVuY3Rpb24oJCwgSW5wdXRtYXNrKSB7XG4gICAgZnVuY3Rpb24gaXNMZWFwWWVhcih5ZWFyKSB7XG4gICAgICAgIHJldHVybiBpc05hTih5ZWFyKSB8fCAyOSA9PT0gbmV3IERhdGUoeWVhciwgMiwgMCkuZ2V0RGF0ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICAgICBcImRkL21tL3l5eXlcIjoge1xuICAgICAgICAgICAgbWFzazogXCIxLzIveVwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiZGQvbW0veXl5eVwiLFxuICAgICAgICAgICAgcmVnZXg6IHtcbiAgICAgICAgICAgICAgICB2YWwxcHJlOiBuZXcgUmVnRXhwKFwiWzAtM11cIiksXG4gICAgICAgICAgICAgICAgdmFsMTogbmV3IFJlZ0V4cChcIjBbMS05XXxbMTJdWzAtOV18M1swMV1cIiksXG4gICAgICAgICAgICAgICAgdmFsMnByZTogZnVuY3Rpb24oc2VwYXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlc2NhcGVkU2VwYXJhdG9yID0gSW5wdXRtYXNrLmVzY2FwZVJlZ2V4LmNhbGwodGhpcywgc2VwYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoKDBbMS05XXxbMTJdWzAtOV18M1swMV0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCJbMDFdKVwiKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZhbDI6IGZ1bmN0aW9uKHNlcGFyYXRvcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXNjYXBlZFNlcGFyYXRvciA9IElucHV0bWFzay5lc2NhcGVSZWdleC5jYWxsKHRoaXMsIHNlcGFyYXRvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKCgwWzEtOV18WzEyXVswLTldKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiKDBbMS05XXwxWzAxMl0pKXwoMzBcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIigwWzEzLTldfDFbMDEyXSkpfCgzMVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiKDBbMTM1NzhdfDFbMDJdKSlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlYXBkYXk6IFwiMjkvMDIvXCIsXG4gICAgICAgICAgICBzZXBhcmF0b3I6IFwiL1wiLFxuICAgICAgICAgICAgeWVhcnJhbmdlOiB7XG4gICAgICAgICAgICAgICAgbWlueWVhcjogMTkwMCxcbiAgICAgICAgICAgICAgICBtYXh5ZWFyOiAyMDk5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNJblllYXJSYW5nZTogZnVuY3Rpb24oY2hycywgbWlueWVhciwgbWF4eWVhcikge1xuICAgICAgICAgICAgICAgIGlmIChpc05hTihjaHJzKSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgIHZhciBlbnRlcmVkeWVhciA9IHBhcnNlSW50KGNocnMuY29uY2F0KG1pbnllYXIudG9TdHJpbmcoKS5zbGljZShjaHJzLmxlbmd0aCkpKSwgZW50ZXJlZHllYXIyID0gcGFyc2VJbnQoY2hycy5jb25jYXQobWF4eWVhci50b1N0cmluZygpLnNsaWNlKGNocnMubGVuZ3RoKSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiAhaXNOYU4oZW50ZXJlZHllYXIpICYmIChtaW55ZWFyIDw9IGVudGVyZWR5ZWFyICYmIGVudGVyZWR5ZWFyIDw9IG1heHllYXIpIHx8ICFpc05hTihlbnRlcmVkeWVhcjIpICYmIChtaW55ZWFyIDw9IGVudGVyZWR5ZWFyMiAmJiBlbnRlcmVkeWVhcjIgPD0gbWF4eWVhcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGV0ZXJtaW5lYmFzZXllYXI6IGZ1bmN0aW9uKG1pbnllYXIsIG1heHllYXIsIGhpbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgaWYgKG1pbnllYXIgPiBjdXJyZW50eWVhcikgcmV0dXJuIG1pbnllYXI7XG4gICAgICAgICAgICAgICAgaWYgKG1heHllYXIgPCBjdXJyZW50eWVhcikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtYXhZZWFyUHJlZml4ID0gbWF4eWVhci50b1N0cmluZygpLnNsaWNlKDAsIDIpLCBtYXhZZWFyUG9zdGZpeCA9IG1heHllYXIudG9TdHJpbmcoKS5zbGljZSgyLCA0KTsgbWF4eWVhciA8IG1heFllYXJQcmVmaXggKyBoaW50OyApIG1heFllYXJQcmVmaXgtLTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heHhZZWFyID0gbWF4WWVhclByZWZpeCArIG1heFllYXJQb3N0Zml4O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWlueWVhciA+IG1heHhZZWFyID8gbWlueWVhciA6IG1heHhZZWFyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWlueWVhciA8PSBjdXJyZW50eWVhciAmJiBjdXJyZW50eWVhciA8PSBtYXh5ZWFyKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGN1cnJlbnRZZWFyUHJlZml4ID0gY3VycmVudHllYXIudG9TdHJpbmcoKS5zbGljZSgwLCAyKTsgbWF4eWVhciA8IGN1cnJlbnRZZWFyUHJlZml4ICsgaGludDsgKSBjdXJyZW50WWVhclByZWZpeC0tO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFllYXJBbmRIaW50ID0gY3VycmVudFllYXJQcmVmaXggKyBoaW50O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFllYXJBbmRIaW50IDwgbWlueWVhciA/IG1pbnllYXIgOiBjdXJyZW50WWVhckFuZEhpbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50eWVhcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbktleURvd246IGZ1bmN0aW9uKGUsIGJ1ZmZlciwgY2FyZXRQb3MsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PT0gSW5wdXRtYXNrLmtleUNvZGUuUklHSFQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbCh0b2RheS5nZXREYXRlKCkudG9TdHJpbmcoKSArICh0b2RheS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKSArIHRvZGF5LmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSksIFxuICAgICAgICAgICAgICAgICAgICAkaW5wdXQudHJpZ2dlcihcInNldHZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRGcm9udFZhbHVlOiBmdW5jdGlvbihtYXNrLCBidWZmZXIsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBzdGFydCA9IDAsIGxlbmd0aCA9IDAsIGkgPSAwOyBpIDwgbWFzay5sZW5ndGggJiYgXCIyXCIgIT09IG1hc2suY2hhckF0KGkpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmluaXRpb24gPSBvcHRzLmRlZmluaXRpb25zW21hc2suY2hhckF0KGkpXTtcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbiA/IChzdGFydCArPSBsZW5ndGgsIGxlbmd0aCA9IGRlZmluaXRpb24uY2FyZGluYWxpdHkpIDogbGVuZ3RoKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBidWZmZXIuam9pbihcIlwiKS5zdWJzdHIoc3RhcnQsIGxlbmd0aCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcG9zdFZhbGlkYXRpb246IGZ1bmN0aW9uKGJ1ZmZlciwgY3VycmVudFJlc3VsdCwgb3B0cykge1xuICAgICAgICAgICAgICAgIHZhciBkYXlNb250aFZhbHVlLCB5ZWFyLCBidWZmZXJTdHIgPSBidWZmZXIuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMCA9PT0gb3B0cy5tYXNrLmluZGV4T2YoXCJ5XCIpID8gKHllYXIgPSBidWZmZXJTdHIuc3Vic3RyKDAsIDQpLCBkYXlNb250aFZhbHVlID0gYnVmZmVyU3RyLnN1YnN0cmluZyg0LCAxMCkpIDogKHllYXIgPSBidWZmZXJTdHIuc3Vic3RyaW5nKDYsIDEwKSwgXG4gICAgICAgICAgICAgICAgZGF5TW9udGhWYWx1ZSA9IGJ1ZmZlclN0ci5zdWJzdHIoMCwgNikpLCBjdXJyZW50UmVzdWx0ICYmIChkYXlNb250aFZhbHVlICE9PSBvcHRzLmxlYXBkYXkgfHwgaXNMZWFwWWVhcih5ZWFyKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBcIjFcIjoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCIzXCIgPT0gY2hycy5jaGFyQXQoMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3IFJlZ0V4cChcIlsyLTldXCIpLnRlc3QoY2hycy5jaGFyQXQoMSkpKSByZXR1cm4gY2hycyA9IFwiMzBcIiwgbWFza3NldC5idWZmZXJbcG9zXSA9IFwiMFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MrKywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNWYWxpZCA9IG9wdHMucmVnZXgudmFsMS50ZXN0KGNocnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmljdCB8fCBpc1ZhbGlkIHx8IGNocnMuY2hhckF0KDEpICE9PSBvcHRzLnNlcGFyYXRvciAmJiAtMSA9PT0gXCItLi9cIi5pbmRleE9mKGNocnMuY2hhckF0KDEpKSB8fCAhKGlzVmFsaWQgPSBvcHRzLnJlZ2V4LnZhbDEudGVzdChcIjBcIiArIGNocnMuY2hhckF0KDApKSkgPyBpc1ZhbGlkIDogKG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdID0gXCIwXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwb3MgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogY2hycy5jaGFyQXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMixcbiAgICAgICAgICAgICAgICAgICAgcHJldmFsaWRhdG9yOiBbIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGNocnMgPSBjaHJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTmFOKG1hc2tzZXQuYnVmZmVyW3BvcyArIDFdKSB8fCAocGNocnMgKz0gbWFza3NldC5idWZmZXJbcG9zICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkID0gMSA9PT0gcGNocnMubGVuZ3RoID8gb3B0cy5yZWdleC52YWwxcHJlLnRlc3QocGNocnMpIDogb3B0cy5yZWdleC52YWwxLnRlc3QocGNocnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3RyaWN0ICYmICFpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkID0gb3B0cy5yZWdleC52YWwxLnRlc3QoY2hycyArIFwiMFwiKSkgcmV0dXJuIG1hc2tzZXQuYnVmZmVyW3Bvc10gPSBjaHJzLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza3NldC5idWZmZXJbKytwb3NdID0gXCIwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQgPSBvcHRzLnJlZ2V4LnZhbDEudGVzdChcIjBcIiArIGNocnMpKSByZXR1cm4gbWFza3NldC5idWZmZXJbcG9zXSA9IFwiMFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zKyssIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxXG4gICAgICAgICAgICAgICAgICAgIH0gXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCIyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZyb250VmFsdWUgPSBvcHRzLmdldEZyb250VmFsdWUobWFza3NldC5tYXNrLCBtYXNrc2V0LmJ1ZmZlciwgb3B0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoLTEgIT09IGZyb250VmFsdWUuaW5kZXhPZihvcHRzLnBsYWNlaG9sZGVyWzBdKSAmJiAoZnJvbnRWYWx1ZSA9IFwiMDFcIiArIG9wdHMuc2VwYXJhdG9yKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjFcIiA9PSBjaHJzLmNoYXJBdCgwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXcgUmVnRXhwKFwiWzMtOV1cIikudGVzdChjaHJzLmNoYXJBdCgxKSkpIHJldHVybiBjaHJzID0gXCIxMFwiLCBtYXNrc2V0LmJ1ZmZlcltwb3NdID0gXCIwXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcysrLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkID0gb3B0cy5yZWdleC52YWwyKG9wdHMuc2VwYXJhdG9yKS50ZXN0KGZyb250VmFsdWUgKyBjaHJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpY3QgfHwgaXNWYWxpZCB8fCBjaHJzLmNoYXJBdCgxKSAhPT0gb3B0cy5zZXBhcmF0b3IgJiYgLTEgPT09IFwiLS4vXCIuaW5kZXhPZihjaHJzLmNoYXJBdCgxKSkgfHwgIShpc1ZhbGlkID0gb3B0cy5yZWdleC52YWwyKG9wdHMuc2VwYXJhdG9yKS50ZXN0KGZyb250VmFsdWUgKyBcIjBcIiArIGNocnMuY2hhckF0KDApKSkgPyBpc1ZhbGlkIDogKG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdID0gXCIwXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwb3MgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogY2hycy5jaGFyQXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMixcbiAgICAgICAgICAgICAgICAgICAgcHJldmFsaWRhdG9yOiBbIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc05hTihtYXNrc2V0LmJ1ZmZlcltwb3MgKyAxXSkgfHwgKGNocnMgKz0gbWFza3NldC5idWZmZXJbcG9zICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmcm9udFZhbHVlID0gb3B0cy5nZXRGcm9udFZhbHVlKG1hc2tzZXQubWFzaywgbWFza3NldC5idWZmZXIsIG9wdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0xICE9PSBmcm9udFZhbHVlLmluZGV4T2Yob3B0cy5wbGFjZWhvbGRlclswXSkgJiYgKGZyb250VmFsdWUgPSBcIjAxXCIgKyBvcHRzLnNlcGFyYXRvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzVmFsaWQgPSAxID09PSBjaHJzLmxlbmd0aCA/IG9wdHMucmVnZXgudmFsMnByZShvcHRzLnNlcGFyYXRvcikudGVzdChmcm9udFZhbHVlICsgY2hycykgOiBvcHRzLnJlZ2V4LnZhbDIob3B0cy5zZXBhcmF0b3IpLnRlc3QoZnJvbnRWYWx1ZSArIGNocnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpY3QgfHwgaXNWYWxpZCB8fCAhKGlzVmFsaWQgPSBvcHRzLnJlZ2V4LnZhbDIob3B0cy5zZXBhcmF0b3IpLnRlc3QoZnJvbnRWYWx1ZSArIFwiMFwiICsgY2hycykpID8gaXNWYWxpZCA6IChtYXNrc2V0LmJ1ZmZlcltwb3NdID0gXCIwXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcysrLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDFcbiAgICAgICAgICAgICAgICAgICAgfSBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRzLmlzSW5ZZWFyUmFuZ2UoY2hycywgb3B0cy55ZWFycmFuZ2UubWlueWVhciwgb3B0cy55ZWFycmFuZ2UubWF4eWVhcik7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiA0LFxuICAgICAgICAgICAgICAgICAgICBwcmV2YWxpZGF0b3I6IFsge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkID0gb3B0cy5pc0luWWVhclJhbmdlKGNocnMsIG9wdHMueWVhcnJhbmdlLm1pbnllYXIsIG9wdHMueWVhcnJhbmdlLm1heHllYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3RyaWN0ICYmICFpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5ZWFyUHJlZml4ID0gb3B0cy5kZXRlcm1pbmViYXNleWVhcihvcHRzLnllYXJyYW5nZS5taW55ZWFyLCBvcHRzLnllYXJyYW5nZS5tYXh5ZWFyLCBjaHJzICsgXCIwXCIpLnRvU3RyaW5nKCkuc2xpY2UoMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkID0gb3B0cy5pc0luWWVhclJhbmdlKHllYXJQcmVmaXggKyBjaHJzLCBvcHRzLnllYXJyYW5nZS5taW55ZWFyLCBvcHRzLnllYXJyYW5nZS5tYXh5ZWFyKSkgcmV0dXJuIG1hc2tzZXQuYnVmZmVyW3BvcysrXSA9IHllYXJQcmVmaXguY2hhckF0KDApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHllYXJQcmVmaXggPSBvcHRzLmRldGVybWluZWJhc2V5ZWFyKG9wdHMueWVhcnJhbmdlLm1pbnllYXIsIG9wdHMueWVhcnJhbmdlLm1heHllYXIsIGNocnMgKyBcIjBcIikudG9TdHJpbmcoKS5zbGljZSgwLCAyKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBvcHRzLmlzSW5ZZWFyUmFuZ2UoeWVhclByZWZpeCArIGNocnMsIG9wdHMueWVhcnJhbmdlLm1pbnllYXIsIG9wdHMueWVhcnJhbmdlLm1heHllYXIpKSByZXR1cm4gbWFza3NldC5idWZmZXJbcG9zKytdID0geWVhclByZWZpeC5jaGFyQXQoMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrc2V0LmJ1ZmZlcltwb3MrK10gPSB5ZWFyUHJlZml4LmNoYXJBdCgxKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDFcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkID0gb3B0cy5pc0luWWVhclJhbmdlKGNocnMsIG9wdHMueWVhcnJhbmdlLm1pbnllYXIsIG9wdHMueWVhcnJhbmdlLm1heHllYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3RyaWN0ICYmICFpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5ZWFyUHJlZml4ID0gb3B0cy5kZXRlcm1pbmViYXNleWVhcihvcHRzLnllYXJyYW5nZS5taW55ZWFyLCBvcHRzLnllYXJyYW5nZS5tYXh5ZWFyLCBjaHJzKS50b1N0cmluZygpLnNsaWNlKDAsIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZCA9IG9wdHMuaXNJblllYXJSYW5nZShjaHJzWzBdICsgeWVhclByZWZpeFsxXSArIGNocnNbMV0sIG9wdHMueWVhcnJhbmdlLm1pbnllYXIsIG9wdHMueWVhcnJhbmdlLm1heHllYXIpKSByZXR1cm4gbWFza3NldC5idWZmZXJbcG9zKytdID0geWVhclByZWZpeC5jaGFyQXQoMSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeWVhclByZWZpeCA9IG9wdHMuZGV0ZXJtaW5lYmFzZXllYXIob3B0cy55ZWFycmFuZ2UubWlueWVhciwgb3B0cy55ZWFycmFuZ2UubWF4eWVhciwgY2hycykudG9TdHJpbmcoKS5zbGljZSgwLCAyKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBvcHRzLmlzSW5ZZWFyUmFuZ2UoeWVhclByZWZpeCArIGNocnMsIG9wdHMueWVhcnJhbmdlLm1pbnllYXIsIG9wdHMueWVhcnJhbmdlLm1heHllYXIpKSByZXR1cm4gbWFza3NldC5idWZmZXJbcG9zIC0gMV0gPSB5ZWFyUHJlZml4LmNoYXJBdCgwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tzZXQuYnVmZmVyW3BvcysrXSA9IHllYXJQcmVmaXguY2hhckF0KDEpLCBtYXNrc2V0LmJ1ZmZlcltwb3MrK10gPSBjaHJzLmNoYXJBdCgwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHBvcyAtIDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBwb3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMlxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMuaXNJblllYXJSYW5nZShjaHJzLCBvcHRzLnllYXJyYW5nZS5taW55ZWFyLCBvcHRzLnllYXJyYW5nZS5tYXh5ZWFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogM1xuICAgICAgICAgICAgICAgICAgICB9IF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5zZXJ0TW9kZTogITEsXG4gICAgICAgICAgICBhdXRvVW5tYXNrOiAhMVxuICAgICAgICB9LFxuICAgICAgICBcIm1tL2RkL3l5eXlcIjoge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwibW0vZGQveXl5eVwiLFxuICAgICAgICAgICAgYWxpYXM6IFwiZGQvbW0veXl5eVwiLFxuICAgICAgICAgICAgcmVnZXg6IHtcbiAgICAgICAgICAgICAgICB2YWwycHJlOiBmdW5jdGlvbihzZXBhcmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVzY2FwZWRTZXBhcmF0b3IgPSBJbnB1dG1hc2suZXNjYXBlUmVnZXguY2FsbCh0aGlzLCBzZXBhcmF0b3IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIigoMFsxMy05XXwxWzAxMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCJbMC0zXSl8KDAyXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCJbMC0yXSlcIik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB2YWwyOiBmdW5jdGlvbihzZXBhcmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVzY2FwZWRTZXBhcmF0b3IgPSBJbnB1dG1hc2suZXNjYXBlUmVnZXguY2FsbCh0aGlzLCBzZXBhcmF0b3IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIigoMFsxLTldfDFbMDEyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIigwWzEtOV18WzEyXVswLTldKSl8KCgwWzEzLTldfDFbMDEyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIjMwKXwoKDBbMTM1NzhdfDFbMDJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiMzEpXCIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdmFsMXByZTogbmV3IFJlZ0V4cChcIlswMV1cIiksXG4gICAgICAgICAgICAgICAgdmFsMTogbmV3IFJlZ0V4cChcIjBbMS05XXwxWzAxMl1cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWFwZGF5OiBcIjAyLzI5L1wiLFxuICAgICAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbihlLCBidWZmZXIsIGNhcmV0UG9zLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGUuY3RybEtleSAmJiBlLmtleUNvZGUgPT09IElucHV0bWFzay5rZXlDb2RlLlJJR0hUKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwoKHRvZGF5LmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpICsgdG9kYXkuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkgKyB0b2RheS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkpLCBcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnRyaWdnZXIoXCJzZXR2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwieXl5eS9tbS9kZFwiOiB7XG4gICAgICAgICAgICBtYXNrOiBcInkvMS8yXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJ5eXl5L21tL2RkXCIsXG4gICAgICAgICAgICBhbGlhczogXCJtbS9kZC95eXl5XCIsXG4gICAgICAgICAgICBsZWFwZGF5OiBcIi8wMi8yOVwiLFxuICAgICAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbihlLCBidWZmZXIsIGNhcmV0UG9zLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGUuY3RybEtleSAmJiBlLmtleUNvZGUgPT09IElucHV0bWFzay5rZXlDb2RlLlJJR0hUKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwodG9kYXkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpICsgKHRvZGF5LmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpICsgdG9kYXkuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkpLCBcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnRyaWdnZXIoXCJzZXR2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGQubW0ueXl5eVwiOiB7XG4gICAgICAgICAgICBtYXNrOiBcIjEuMi55XCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJkZC5tbS55eXl5XCIsXG4gICAgICAgICAgICBsZWFwZGF5OiBcIjI5LjAyLlwiLFxuICAgICAgICAgICAgc2VwYXJhdG9yOiBcIi5cIixcbiAgICAgICAgICAgIGFsaWFzOiBcImRkL21tL3l5eXlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRkLW1tLXl5eXlcIjoge1xuICAgICAgICAgICAgbWFzazogXCIxLTIteVwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiZGQtbW0teXl5eVwiLFxuICAgICAgICAgICAgbGVhcGRheTogXCIyOS0wMi1cIixcbiAgICAgICAgICAgIHNlcGFyYXRvcjogXCItXCIsXG4gICAgICAgICAgICBhbGlhczogXCJkZC9tbS95eXl5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtbS5kZC55eXl5XCI6IHtcbiAgICAgICAgICAgIG1hc2s6IFwiMS4yLnlcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIm1tLmRkLnl5eXlcIixcbiAgICAgICAgICAgIGxlYXBkYXk6IFwiMDIuMjkuXCIsXG4gICAgICAgICAgICBzZXBhcmF0b3I6IFwiLlwiLFxuICAgICAgICAgICAgYWxpYXM6IFwibW0vZGQveXl5eVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibW0tZGQteXl5eVwiOiB7XG4gICAgICAgICAgICBtYXNrOiBcIjEtMi15XCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJtbS1kZC15eXl5XCIsXG4gICAgICAgICAgICBsZWFwZGF5OiBcIjAyLTI5LVwiLFxuICAgICAgICAgICAgc2VwYXJhdG9yOiBcIi1cIixcbiAgICAgICAgICAgIGFsaWFzOiBcIm1tL2RkL3l5eXlcIlxuICAgICAgICB9LFxuICAgICAgICBcInl5eXkubW0uZGRcIjoge1xuICAgICAgICAgICAgbWFzazogXCJ5LjEuMlwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwieXl5eS5tbS5kZFwiLFxuICAgICAgICAgICAgbGVhcGRheTogXCIuMDIuMjlcIixcbiAgICAgICAgICAgIHNlcGFyYXRvcjogXCIuXCIsXG4gICAgICAgICAgICBhbGlhczogXCJ5eXl5L21tL2RkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ5eXl5LW1tLWRkXCI6IHtcbiAgICAgICAgICAgIG1hc2s6IFwieS0xLTJcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcInl5eXktbW0tZGRcIixcbiAgICAgICAgICAgIGxlYXBkYXk6IFwiLTAyLTI5XCIsXG4gICAgICAgICAgICBzZXBhcmF0b3I6IFwiLVwiLFxuICAgICAgICAgICAgYWxpYXM6IFwieXl5eS9tbS9kZFwiXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGV0aW1lOiB7XG4gICAgICAgICAgICBtYXNrOiBcIjEvMi95IGg6c1wiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiZGQvbW0veXl5eSBoaDptbVwiLFxuICAgICAgICAgICAgYWxpYXM6IFwiZGQvbW0veXl5eVwiLFxuICAgICAgICAgICAgcmVnZXg6IHtcbiAgICAgICAgICAgICAgICBocnNwcmU6IG5ldyBSZWdFeHAoXCJbMDEyXVwiKSxcbiAgICAgICAgICAgICAgICBocnMyNDogbmV3IFJlZ0V4cChcIjJbMC00XXwxWzMtOV1cIiksXG4gICAgICAgICAgICAgICAgaHJzOiBuZXcgUmVnRXhwKFwiWzAxXVswLTldfDJbMC00XVwiKSxcbiAgICAgICAgICAgICAgICBhbXBtOiBuZXcgUmVnRXhwKFwiXlthfHB8QXxQXVttfE1dXCIpLFxuICAgICAgICAgICAgICAgIG1zcHJlOiBuZXcgUmVnRXhwKFwiWzAtNV1cIiksXG4gICAgICAgICAgICAgICAgbXM6IG5ldyBSZWdFeHAoXCJbMC01XVswLTldXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGltZXNlcGFyYXRvcjogXCI6XCIsXG4gICAgICAgICAgICBob3VyRm9ybWF0OiBcIjI0XCIsXG4gICAgICAgICAgICBkZWZpbml0aW9uczoge1xuICAgICAgICAgICAgICAgIGg6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiMjRcIiA9PT0gb3B0cy5ob3VyRm9ybWF0ICYmIDI0ID09PSBwYXJzZUludChjaHJzLCAxMCkpIHJldHVybiBtYXNrc2V0LmJ1ZmZlcltwb3MgLSAxXSA9IFwiMFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tzZXQuYnVmZmVyW3Bvc10gPSBcIjBcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwb3MgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNWYWxpZCA9IG9wdHMucmVnZXguaHJzLnRlc3QoY2hycyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN0cmljdCAmJiAhaXNWYWxpZCAmJiAoY2hycy5jaGFyQXQoMSkgPT09IG9wdHMudGltZXNlcGFyYXRvciB8fCAtMSAhPT0gXCItLjpcIi5pbmRleE9mKGNocnMuY2hhckF0KDEpKSkgJiYgKGlzVmFsaWQgPSBvcHRzLnJlZ2V4Lmhycy50ZXN0KFwiMFwiICsgY2hycy5jaGFyQXQoMCkpKSkgcmV0dXJuIG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdID0gXCIwXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFza3NldC5idWZmZXJbcG9zXSA9IGNocnMuY2hhckF0KDApLCBwb3MrKywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwb3MgLSAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogb3B0cy50aW1lc2VwYXJhdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQgJiYgXCIyNFwiICE9PSBvcHRzLmhvdXJGb3JtYXQgJiYgb3B0cy5yZWdleC5ocnMyNC50ZXN0KGNocnMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IHBhcnNlSW50KGNocnMsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjQgPT09IHRtcCA/IChtYXNrc2V0LmJ1ZmZlcltwb3MgKyA1XSA9IFwiYVwiLCBtYXNrc2V0LmJ1ZmZlcltwb3MgKyA2XSA9IFwibVwiKSA6IChtYXNrc2V0LmJ1ZmZlcltwb3MgKyA1XSA9IFwicFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrc2V0LmJ1ZmZlcltwb3MgKyA2XSA9IFwibVwiKSwgdG1wIC09IDEyLCB0bXAgPCAxMCA/IChtYXNrc2V0LmJ1ZmZlcltwb3NdID0gdG1wLnRvU3RyaW5nKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdID0gXCIwXCIpIDogKG1hc2tzZXQuYnVmZmVyW3Bvc10gPSB0bXAudG9TdHJpbmcoKS5jaGFyQXQoMSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdID0gdG1wLnRvU3RyaW5nKCkuY2hhckF0KDApKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHBvcyAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHBvcyArIDZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogbWFza3NldC5idWZmZXJbcG9zXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDIsXG4gICAgICAgICAgICAgICAgICAgIHByZXZhbGlkYXRvcjogWyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzVmFsaWQgPSBvcHRzLnJlZ2V4Lmhyc3ByZS50ZXN0KGNocnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpY3QgfHwgaXNWYWxpZCB8fCAhKGlzVmFsaWQgPSBvcHRzLnJlZ2V4Lmhycy50ZXN0KFwiMFwiICsgY2hycykpID8gaXNWYWxpZCA6IChtYXNrc2V0LmJ1ZmZlcltwb3NdID0gXCIwXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcysrLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDFcbiAgICAgICAgICAgICAgICAgICAgfSBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbMC01XVswLTldXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAyLFxuICAgICAgICAgICAgICAgICAgICBwcmV2YWxpZGF0b3I6IFsge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkID0gb3B0cy5yZWdleC5tc3ByZS50ZXN0KGNocnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpY3QgfHwgaXNWYWxpZCB8fCAhKGlzVmFsaWQgPSBvcHRzLnJlZ2V4Lm1zLnRlc3QoXCIwXCIgKyBjaHJzKSkgPyBpc1ZhbGlkIDogKG1hc2tzZXQuYnVmZmVyW3Bvc10gPSBcIjBcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zKyssIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMVxuICAgICAgICAgICAgICAgICAgICB9IF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMucmVnZXguYW1wbS50ZXN0KGNocnMgKyBcIm1cIik7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhc2luZzogXCJsb3dlclwiLFxuICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnNlcnRNb2RlOiAhMSxcbiAgICAgICAgICAgIGF1dG9Vbm1hc2s6ICExXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGV0aW1lMTI6IHtcbiAgICAgICAgICAgIG1hc2s6IFwiMS8yL3kgaDpzIHRcXFxcbVwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiZGQvbW0veXl5eSBoaDptbSB4bVwiLFxuICAgICAgICAgICAgYWxpYXM6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgIGhvdXJGb3JtYXQ6IFwiMTJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1tL2RkL3l5eXkgaGg6bW0geG1cIjoge1xuICAgICAgICAgICAgbWFzazogXCIxLzIveSBoOnMgdFxcXFxtXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJtbS9kZC95eXl5IGhoOm1tIHhtXCIsXG4gICAgICAgICAgICBhbGlhczogXCJkYXRldGltZTEyXCIsXG4gICAgICAgICAgICByZWdleDoge1xuICAgICAgICAgICAgICAgIHZhbDJwcmU6IGZ1bmN0aW9uKHNlcGFyYXRvcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXNjYXBlZFNlcGFyYXRvciA9IElucHV0bWFzay5lc2NhcGVSZWdleC5jYWxsKHRoaXMsIHNlcGFyYXRvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKCgwWzEzLTldfDFbMDEyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIlswLTNdKXwoMDJcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIlswLTJdKVwiKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZhbDI6IGZ1bmN0aW9uKHNlcGFyYXRvcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXNjYXBlZFNlcGFyYXRvciA9IElucHV0bWFzay5lc2NhcGVSZWdleC5jYWxsKHRoaXMsIHNlcGFyYXRvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKCgwWzEtOV18MVswMTJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiKDBbMS05XXxbMTJdWzAtOV0pKXwoKDBbMTMtOV18MVswMTJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiMzApfCgoMFsxMzU3OF18MVswMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCIzMSlcIik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB2YWwxcHJlOiBuZXcgUmVnRXhwKFwiWzAxXVwiKSxcbiAgICAgICAgICAgICAgICB2YWwxOiBuZXcgUmVnRXhwKFwiMFsxLTldfDFbMDEyXVwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlYXBkYXk6IFwiMDIvMjkvXCIsXG4gICAgICAgICAgICBvbktleURvd246IGZ1bmN0aW9uKGUsIGJ1ZmZlciwgY2FyZXRQb3MsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PT0gSW5wdXRtYXNrLmtleUNvZGUuUklHSFQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbCgodG9kYXkuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkgKyB0b2RheS5nZXREYXRlKCkudG9TdHJpbmcoKSArIHRvZGF5LmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSksIFxuICAgICAgICAgICAgICAgICAgICAkaW5wdXQudHJpZ2dlcihcInNldHZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJoaDptbSB0XCI6IHtcbiAgICAgICAgICAgIG1hc2s6IFwiaDpzIHRcXFxcbVwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiaGg6bW0geG1cIixcbiAgICAgICAgICAgIGFsaWFzOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICBob3VyRm9ybWF0OiBcIjEyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJoOnMgdFwiOiB7XG4gICAgICAgICAgICBtYXNrOiBcImg6cyB0XFxcXG1cIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcImhoOm1tIHhtXCIsXG4gICAgICAgICAgICBhbGlhczogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgaG91ckZvcm1hdDogXCIxMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiaGg6bW06c3NcIjoge1xuICAgICAgICAgICAgbWFzazogXCJoOnM6c1wiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiaGg6bW06c3NcIixcbiAgICAgICAgICAgIGFsaWFzOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICBhdXRvVW5tYXNrOiAhMVxuICAgICAgICB9LFxuICAgICAgICBcImhoOm1tXCI6IHtcbiAgICAgICAgICAgIG1hc2s6IFwiaDpzXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJoaDptbVwiLFxuICAgICAgICAgICAgYWxpYXM6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgIGF1dG9Vbm1hc2s6ICExXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGU6IHtcbiAgICAgICAgICAgIGFsaWFzOiBcImRkL21tL3l5eXlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1tL3l5eXlcIjoge1xuICAgICAgICAgICAgbWFzazogXCIxL3lcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIm1tL3l5eXlcIixcbiAgICAgICAgICAgIGxlYXBkYXk6IFwiZG9ub3R1c2VcIixcbiAgICAgICAgICAgIHNlcGFyYXRvcjogXCIvXCIsXG4gICAgICAgICAgICBhbGlhczogXCJtbS9kZC95eXl5XCJcbiAgICAgICAgfSxcbiAgICAgICAgc2hhbXNpOiB7XG4gICAgICAgICAgICByZWdleDoge1xuICAgICAgICAgICAgICAgIHZhbDJwcmU6IGZ1bmN0aW9uKHNlcGFyYXRvcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXNjYXBlZFNlcGFyYXRvciA9IElucHV0bWFzay5lc2NhcGVSZWdleC5jYWxsKHRoaXMsIHNlcGFyYXRvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKCgwWzEtOV18MVswMTJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiWzAtM10pXCIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdmFsMjogZnVuY3Rpb24oc2VwYXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlc2NhcGVkU2VwYXJhdG9yID0gSW5wdXRtYXNrLmVzY2FwZVJlZ2V4LmNhbGwodGhpcywgc2VwYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoKDBbMS05XXwxWzAxMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCIoMFsxLTldfFsxMl1bMC05XSkpfCgoMFsxLTldfDFbMDEyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIjMwKXwoKDBbMS02XSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIjMxKVwiKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZhbDFwcmU6IG5ldyBSZWdFeHAoXCJbMDFdXCIpLFxuICAgICAgICAgICAgICAgIHZhbDE6IG5ldyBSZWdFeHAoXCIwWzEtOV18MVswMTJdXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeWVhcnJhbmdlOiB7XG4gICAgICAgICAgICAgICAgbWlueWVhcjogMTMwMCxcbiAgICAgICAgICAgICAgICBtYXh5ZWFyOiAxNDk5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFzazogXCJ5LzEvMlwiLFxuICAgICAgICAgICAgbGVhcGRheTogXCIvMTIvMzBcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcInl5eXkvbW0vZGRcIixcbiAgICAgICAgICAgIGFsaWFzOiBcIm1tL2RkL3l5eXlcIixcbiAgICAgICAgICAgIGNsZWFySW5jb21wbGV0ZTogITBcbiAgICAgICAgfSxcbiAgICAgICAgXCJ5eXl5LW1tLWRkIGhoOm1tOnNzXCI6IHtcbiAgICAgICAgICAgIG1hc2s6IFwieS0xLTIgaDpzOnNcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcInl5eXktbW0tZGQgaGg6bW06c3NcIixcbiAgICAgICAgICAgIGFsaWFzOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICBzZXBhcmF0b3I6IFwiLVwiLFxuICAgICAgICAgICAgbGVhcGRheTogXCItMDItMjlcIixcbiAgICAgICAgICAgIHJlZ2V4OiB7XG4gICAgICAgICAgICAgICAgdmFsMnByZTogZnVuY3Rpb24oc2VwYXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlc2NhcGVkU2VwYXJhdG9yID0gSW5wdXRtYXNrLmVzY2FwZVJlZ2V4LmNhbGwodGhpcywgc2VwYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoKDBbMTMtOV18MVswMTJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiWzAtM10pfCgwMlwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiWzAtMl0pXCIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdmFsMjogZnVuY3Rpb24oc2VwYXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlc2NhcGVkU2VwYXJhdG9yID0gSW5wdXRtYXNrLmVzY2FwZVJlZ2V4LmNhbGwodGhpcywgc2VwYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoKDBbMS05XXwxWzAxMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCIoMFsxLTldfFsxMl1bMC05XSkpfCgoMFsxMy05XXwxWzAxMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCIzMCl8KCgwWzEzNTc4XXwxWzAyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIjMxKVwiKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZhbDFwcmU6IG5ldyBSZWdFeHAoXCJbMDFdXCIpLFxuICAgICAgICAgICAgICAgIHZhbDE6IG5ldyBSZWdFeHAoXCIwWzEtOV18MVswMTJdXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbihlLCBidWZmZXIsIGNhcmV0UG9zLCBvcHRzKSB7fVxuICAgICAgICB9XG4gICAgfSksIElucHV0bWFzaztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lucHV0bWFzay9kaXN0L2lucHV0bWFzay9pbnB1dG1hc2suZGF0ZS5leHRlbnNpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n* inputmask.extensions.js\n* https://github.com/RobinHerbots/Inputmask\n* Copyright (c) 2010 - 2017 Robin Herbots\n* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)\n* Version: 3.3.8\n*/\n\n!function(factory) {\n     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : \"object\" == typeof exports ? module.exports = factory(require(\"./dependencyLibs/inputmask.dependencyLib\"), require(\"./inputmask\")) : factory(window.dependencyLib || jQuery, window.Inputmask);\n}(function($, Inputmask) {\n    return Inputmask.extendDefinitions({\n        A: {\n            validator: \"[A-Za-z\\u0410-\\u044f\\u0401\\u0451\\xc0-\\xff\\xb5]\",\n            cardinality: 1,\n            casing: \"upper\"\n        },\n        \"&\": {\n            validator: \"[0-9A-Za-z\\u0410-\\u044f\\u0401\\u0451\\xc0-\\xff\\xb5]\",\n            cardinality: 1,\n            casing: \"upper\"\n        },\n        \"#\": {\n            validator: \"[0-9A-Fa-f]\",\n            cardinality: 1,\n            casing: \"upper\"\n        }\n    }), Inputmask.extendAliases({\n        url: {\n            definitions: {\n                i: {\n                    validator: \".\",\n                    cardinality: 1\n                }\n            },\n            mask: \"(\\\\http://)|(\\\\http\\\\s://)|(ftp://)|(ftp\\\\s://)i{+}\",\n            insertMode: !1,\n            autoUnmask: !1,\n            inputmode: \"url\"\n        },\n        ip: {\n            mask: \"i[i[i]].i[i[i]].i[i[i]].i[i[i]]\",\n            definitions: {\n                i: {\n                    validator: function(chrs, maskset, pos, strict, opts) {\n                        return pos - 1 > -1 && \".\" !== maskset.buffer[pos - 1] ? (chrs = maskset.buffer[pos - 1] + chrs, \n                        chrs = pos - 2 > -1 && \".\" !== maskset.buffer[pos - 2] ? maskset.buffer[pos - 2] + chrs : \"0\" + chrs) : chrs = \"00\" + chrs, \n                        new RegExp(\"25[0-5]|2[0-4][0-9]|[01][0-9][0-9]\").test(chrs);\n                    },\n                    cardinality: 1\n                }\n            },\n            onUnMask: function(maskedValue, unmaskedValue, opts) {\n                return maskedValue;\n            },\n            inputmode: \"numeric\"\n        },\n        email: {\n            mask: \"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]\",\n            greedy: !1,\n            onBeforePaste: function(pastedValue, opts) {\n                return pastedValue = pastedValue.toLowerCase(), pastedValue.replace(\"mailto:\", \"\");\n            },\n            definitions: {\n                \"*\": {\n                    validator: \"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]\",\n                    cardinality: 1,\n                    casing: \"lower\"\n                },\n                \"-\": {\n                    validator: \"[0-9A-Za-z-]\",\n                    cardinality: 1,\n                    casing: \"lower\"\n                }\n            },\n            onUnMask: function(maskedValue, unmaskedValue, opts) {\n                return maskedValue;\n            },\n            inputmode: \"email\"\n        },\n        mac: {\n            mask: \"##:##:##:##:##:##\"\n        },\n        vin: {\n            mask: \"V{13}9{4}\",\n            definitions: {\n                V: {\n                    validator: \"[A-HJ-NPR-Za-hj-npr-z\\\\d]\",\n                    cardinality: 1,\n                    casing: \"upper\"\n                }\n            },\n            clearIncomplete: !0,\n            autoUnmask: !0\n        }\n    }), Inputmask;\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5leHRlbnNpb25zLmpzPzY5NWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLG9FQUFvRSxFQUFFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBLHFCQUFxQixLQUFLLElBQUksS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLElBQUksS0FBSyxHQUFHLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSztBQUMzRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHlEQUF5RCxFQUFFO0FBQzNEO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxxQkFBcUIsR0FBRyxFQUFFLEVBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiogaW5wdXRtYXNrLmV4dGVuc2lvbnMuanNcbiogaHR0cHM6Ly9naXRodWIuY29tL1JvYmluSGVyYm90cy9JbnB1dG1hc2tcbiogQ29weXJpZ2h0IChjKSAyMDEwIC0gMjAxNyBSb2JpbiBIZXJib3RzXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4qIFZlcnNpb246IDMuMy44XG4qL1xuXG4hZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWyBcIi4vZGVwZW5kZW5jeUxpYnMvaW5wdXRtYXNrLmRlcGVuZGVuY3lMaWJcIiwgXCIuL2lucHV0bWFza1wiIF0sIGZhY3RvcnkpIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9kZXBlbmRlbmN5TGlicy9pbnB1dG1hc2suZGVwZW5kZW5jeUxpYlwiKSwgcmVxdWlyZShcIi4vaW5wdXRtYXNrXCIpKSA6IGZhY3Rvcnkod2luZG93LmRlcGVuZGVuY3lMaWIgfHwgalF1ZXJ5LCB3aW5kb3cuSW5wdXRtYXNrKTtcbn0oZnVuY3Rpb24oJCwgSW5wdXRtYXNrKSB7XG4gICAgcmV0dXJuIElucHV0bWFzay5leHRlbmREZWZpbml0aW9ucyh7XG4gICAgICAgIEE6IHtcbiAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbQS1aYS16XFx1MDQxMC1cXHUwNDRmXFx1MDQwMVxcdTA0NTFcXHhjMC1cXHhmZlxceGI1XVwiLFxuICAgICAgICAgICAgY2FyZGluYWxpdHk6IDEsXG4gICAgICAgICAgICBjYXNpbmc6IFwidXBwZXJcIlxuICAgICAgICB9LFxuICAgICAgICBcIiZcIjoge1xuICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlBLVphLXpcXHUwNDEwLVxcdTA0NGZcXHUwNDAxXFx1MDQ1MVxceGMwLVxceGZmXFx4YjVdXCIsXG4gICAgICAgICAgICBjYXJkaW5hbGl0eTogMSxcbiAgICAgICAgICAgIGNhc2luZzogXCJ1cHBlclwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiI1wiOiB7XG4gICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOUEtRmEtZl1cIixcbiAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxuICAgICAgICAgICAgY2FzaW5nOiBcInVwcGVyXCJcbiAgICAgICAgfVxuICAgIH0pLCBJbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgICAgIHVybDoge1xuICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBpOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCIuXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1hc2s6IFwiKFxcXFxodHRwOi8vKXwoXFxcXGh0dHBcXFxcczovLyl8KGZ0cDovLyl8KGZ0cFxcXFxzOi8vKWl7K31cIixcbiAgICAgICAgICAgIGluc2VydE1vZGU6ICExLFxuICAgICAgICAgICAgYXV0b1VubWFzazogITEsXG4gICAgICAgICAgICBpbnB1dG1vZGU6IFwidXJsXCJcbiAgICAgICAgfSxcbiAgICAgICAgaXA6IHtcbiAgICAgICAgICAgIG1hc2s6IFwiaVtpW2ldXS5pW2lbaV1dLmlbaVtpXV0uaVtpW2ldXVwiLFxuICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBpOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3MgLSAxID4gLTEgJiYgXCIuXCIgIT09IG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdID8gKGNocnMgPSBtYXNrc2V0LmJ1ZmZlcltwb3MgLSAxXSArIGNocnMsIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hycyA9IHBvcyAtIDIgPiAtMSAmJiBcIi5cIiAhPT0gbWFza3NldC5idWZmZXJbcG9zIC0gMl0gPyBtYXNrc2V0LmJ1ZmZlcltwb3MgLSAyXSArIGNocnMgOiBcIjBcIiArIGNocnMpIDogY2hycyA9IFwiMDBcIiArIGNocnMsIFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFJlZ0V4cChcIjI1WzAtNV18MlswLTRdWzAtOV18WzAxXVswLTldWzAtOV1cIikudGVzdChjaHJzKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Vbk1hc2s6IGZ1bmN0aW9uKG1hc2tlZFZhbHVlLCB1bm1hc2tlZFZhbHVlLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hc2tlZFZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0bW9kZTogXCJudW1lcmljXCJcbiAgICAgICAgfSxcbiAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgIG1hc2s6IFwiKnsxLDY0fVsuKnsxLDY0fV1bLip7MSw2NH1dWy4qezEsNjN9XUAtezEsNjN9Li17MSw2M31bLi17MSw2M31dWy4tezEsNjN9XVwiLFxuICAgICAgICAgICAgZ3JlZWR5OiAhMSxcbiAgICAgICAgICAgIG9uQmVmb3JlUGFzdGU6IGZ1bmN0aW9uKHBhc3RlZFZhbHVlLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhc3RlZFZhbHVlID0gcGFzdGVkVmFsdWUudG9Mb3dlckNhc2UoKSwgcGFzdGVkVmFsdWUucmVwbGFjZShcIm1haWx0bzpcIiwgXCJcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBcIipcIjoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOUEtWmEteiEjJCUmJyorLz0/Xl9ge3x9fi1dXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IFwibG93ZXJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCItXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlBLVphLXotXVwiLFxuICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBcImxvd2VyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Vbk1hc2s6IGZ1bmN0aW9uKG1hc2tlZFZhbHVlLCB1bm1hc2tlZFZhbHVlLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hc2tlZFZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0bW9kZTogXCJlbWFpbFwiXG4gICAgICAgIH0sXG4gICAgICAgIG1hYzoge1xuICAgICAgICAgICAgbWFzazogXCIjIzojIzojIzojIzojIzojI1wiXG4gICAgICAgIH0sXG4gICAgICAgIHZpbjoge1xuICAgICAgICAgICAgbWFzazogXCJWezEzfTl7NH1cIixcbiAgICAgICAgICAgIGRlZmluaXRpb25zOiB7XG4gICAgICAgICAgICAgICAgVjoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiW0EtSEotTlBSLVphLWhqLW5wci16XFxcXGRdXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IFwidXBwZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhckluY29tcGxldGU6ICEwLFxuICAgICAgICAgICAgYXV0b1VubWFzazogITBcbiAgICAgICAgfVxuICAgIH0pLCBJbnB1dG1hc2s7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pbnB1dG1hc2svZGlzdC9pbnB1dG1hc2svaW5wdXRtYXNrLmV4dGVuc2lvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n* inputmask.numeric.extensions.js\n* https://github.com/RobinHerbots/Inputmask\n* Copyright (c) 2010 - 2017 Robin Herbots\n* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)\n* Version: 3.3.8\n*/\n\n!function(factory) {\n     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : \"object\" == typeof exports ? module.exports = factory(require(\"./dependencyLibs/inputmask.dependencyLib\"), require(\"./inputmask\")) : factory(window.dependencyLib || jQuery, window.Inputmask);\n}(function($, Inputmask, undefined) {\n    function autoEscape(txt, opts) {\n        for (var escapedTxt = \"\", i = 0; i < txt.length; i++) Inputmask.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker.start === txt.charAt(i) || opts.optionalmarker.end === txt.charAt(i) || opts.quantifiermarker.start === txt.charAt(i) || opts.quantifiermarker.end === txt.charAt(i) || opts.groupmarker.start === txt.charAt(i) || opts.groupmarker.end === txt.charAt(i) || opts.alternatormarker === txt.charAt(i) ? escapedTxt += \"\\\\\" + txt.charAt(i) : escapedTxt += txt.charAt(i);\n        return escapedTxt;\n    }\n    return Inputmask.extendAliases({\n        numeric: {\n            mask: function(opts) {\n                if (0 !== opts.repeat && isNaN(opts.integerDigits) && (opts.integerDigits = opts.repeat), \n                opts.repeat = 0, opts.groupSeparator === opts.radixPoint && (\".\" === opts.radixPoint ? opts.groupSeparator = \",\" : \",\" === opts.radixPoint ? opts.groupSeparator = \".\" : opts.groupSeparator = \"\"), \n                \" \" === opts.groupSeparator && (opts.skipOptionalPartCharacter = undefined), opts.autoGroup = opts.autoGroup && \"\" !== opts.groupSeparator, \n                opts.autoGroup && (\"string\" == typeof opts.groupSize && isFinite(opts.groupSize) && (opts.groupSize = parseInt(opts.groupSize)), \n                isFinite(opts.integerDigits))) {\n                    var seps = Math.floor(opts.integerDigits / opts.groupSize), mod = opts.integerDigits % opts.groupSize;\n                    opts.integerDigits = parseInt(opts.integerDigits) + (0 === mod ? seps - 1 : seps), \n                    opts.integerDigits < 1 && (opts.integerDigits = \"*\");\n                }\n                opts.placeholder.length > 1 && (opts.placeholder = opts.placeholder.charAt(0)), \n                \"radixFocus\" === opts.positionCaretOnClick && \"\" === opts.placeholder && !1 === opts.integerOptional && (opts.positionCaretOnClick = \"lvp\"), \n                opts.definitions[\";\"] = opts.definitions[\"~\"], opts.definitions[\";\"].definitionSymbol = \"~\", \n                !0 === opts.numericInput && (opts.positionCaretOnClick = \"radixFocus\" === opts.positionCaretOnClick ? \"lvp\" : opts.positionCaretOnClick, \n                opts.digitsOptional = !1, isNaN(opts.digits) && (opts.digits = 2), opts.decimalProtect = !1);\n                var mask = \"[+]\";\n                if (mask += autoEscape(opts.prefix, opts), !0 === opts.integerOptional ? mask += \"~{1,\" + opts.integerDigits + \"}\" : mask += \"~{\" + opts.integerDigits + \"}\", \n                opts.digits !== undefined) {\n                    opts.radixPointDefinitionSymbol = opts.decimalProtect ? \":\" : opts.radixPoint;\n                    var dq = opts.digits.toString().split(\",\");\n                    isFinite(dq[0] && dq[1] && isFinite(dq[1])) ? mask += opts.radixPointDefinitionSymbol + \";{\" + opts.digits + \"}\" : (isNaN(opts.digits) || parseInt(opts.digits) > 0) && (opts.digitsOptional ? mask += \"[\" + opts.radixPointDefinitionSymbol + \";{1,\" + opts.digits + \"}]\" : mask += opts.radixPointDefinitionSymbol + \";{\" + opts.digits + \"}\");\n                }\n                return mask += autoEscape(opts.suffix, opts), mask += \"[-]\", opts.greedy = !1, mask;\n            },\n            placeholder: \"\",\n            greedy: !1,\n            digits: \"*\",\n            digitsOptional: !0,\n            enforceDigitsOnBlur: !1,\n            radixPoint: \".\",\n            positionCaretOnClick: \"radixFocus\",\n            groupSize: 3,\n            groupSeparator: \"\",\n            autoGroup: !1,\n            allowMinus: !0,\n            negationSymbol: {\n                front: \"-\",\n                back: \"\"\n            },\n            integerDigits: \"+\",\n            integerOptional: !0,\n            prefix: \"\",\n            suffix: \"\",\n            rightAlign: !0,\n            decimalProtect: !0,\n            min: null,\n            max: null,\n            step: 1,\n            insertMode: !0,\n            autoUnmask: !1,\n            unmaskAsNumber: !1,\n            inputmode: \"numeric\",\n            preValidation: function(buffer, pos, c, isSelection, opts) {\n                if (\"-\" === c || c === opts.negationSymbol.front) return !0 === opts.allowMinus && (opts.isNegative = opts.isNegative === undefined || !opts.isNegative, \n                \"\" === buffer.join(\"\") || {\n                    caret: pos,\n                    dopost: !0\n                });\n                if (!1 === isSelection && c === opts.radixPoint && opts.digits !== undefined && (isNaN(opts.digits) || parseInt(opts.digits) > 0)) {\n                    var radixPos = $.inArray(opts.radixPoint, buffer);\n                    if (-1 !== radixPos) return !0 === opts.numericInput ? pos === radixPos : {\n                        caret: radixPos + 1\n                    };\n                }\n                return !0;\n            },\n            postValidation: function(buffer, currentResult, opts) {\n                var suffix = opts.suffix.split(\"\"), prefix = opts.prefix.split(\"\");\n                if (currentResult.pos === undefined && currentResult.caret !== undefined && !0 !== currentResult.dopost) return currentResult;\n                var caretPos = currentResult.caret !== undefined ? currentResult.caret : currentResult.pos, maskedValue = buffer.slice();\n                opts.numericInput && (caretPos = maskedValue.length - caretPos - 1, maskedValue = maskedValue.reverse());\n                var charAtPos = maskedValue[caretPos];\n                if (charAtPos === opts.groupSeparator && (caretPos += 1, charAtPos = maskedValue[caretPos]), \n                caretPos === maskedValue.length - opts.suffix.length - 1 && charAtPos === opts.radixPoint) return currentResult;\n                charAtPos !== undefined && charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back && (maskedValue[caretPos] = \"?\", \n                opts.prefix.length > 0 && caretPos >= (!1 === opts.isNegative ? 1 : 0) && caretPos < opts.prefix.length - 1 + (!1 === opts.isNegative ? 1 : 0) ? prefix[caretPos - (!1 === opts.isNegative ? 1 : 0)] = \"?\" : opts.suffix.length > 0 && caretPos >= maskedValue.length - opts.suffix.length - (!1 === opts.isNegative ? 1 : 0) && (suffix[caretPos - (maskedValue.length - opts.suffix.length - (!1 === opts.isNegative ? 1 : 0))] = \"?\")), \n                prefix = prefix.join(\"\"), suffix = suffix.join(\"\");\n                var processValue = maskedValue.join(\"\").replace(prefix, \"\");\n                if (processValue = processValue.replace(suffix, \"\"), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), \"g\"), \"\"), \n                processValue = processValue.replace(new RegExp(\"[-\" + Inputmask.escapeRegex(opts.negationSymbol.front) + \"]\", \"g\"), \"\"), \n                processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + \"$\"), \"\"), \n                isNaN(opts.placeholder) && (processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.placeholder), \"g\"), \"\")), \n                processValue.length > 1 && 1 !== processValue.indexOf(opts.radixPoint) && (\"0\" === charAtPos && (processValue = processValue.replace(/^\\?/g, \"\")), \n                processValue = processValue.replace(/^0/g, \"\")), processValue.charAt(0) === opts.radixPoint && \"\" !== opts.radixPoint && !0 !== opts.numericInput && (processValue = \"0\" + processValue), \n                \"\" !== processValue) {\n                    if (processValue = processValue.split(\"\"), (!opts.digitsOptional || opts.enforceDigitsOnBlur && \"blur\" === currentResult.event) && isFinite(opts.digits)) {\n                        var radixPosition = $.inArray(opts.radixPoint, processValue), rpb = $.inArray(opts.radixPoint, maskedValue);\n                        -1 === radixPosition && (processValue.push(opts.radixPoint), radixPosition = processValue.length - 1);\n                        for (var i = 1; i <= opts.digits; i++) opts.digitsOptional && (!opts.enforceDigitsOnBlur || \"blur\" !== currentResult.event) || processValue[radixPosition + i] !== undefined && processValue[radixPosition + i] !== opts.placeholder.charAt(0) ? -1 !== rpb && maskedValue[rpb + i] !== undefined && (processValue[radixPosition + i] = processValue[radixPosition + i] || maskedValue[rpb + i]) : processValue[radixPosition + i] = currentResult.placeholder || opts.placeholder.charAt(0);\n                    }\n                    if (!0 !== opts.autoGroup || \"\" === opts.groupSeparator || charAtPos === opts.radixPoint && currentResult.pos === undefined && !currentResult.dopost) processValue = processValue.join(\"\"); else {\n                        var addRadix = processValue[processValue.length - 1] === opts.radixPoint && currentResult.c === opts.radixPoint;\n                        processValue = Inputmask(function(buffer, opts) {\n                            var postMask = \"\";\n                            if (postMask += \"(\" + opts.groupSeparator + \"*{\" + opts.groupSize + \"}){*}\", \"\" !== opts.radixPoint) {\n                                var radixSplit = buffer.join(\"\").split(opts.radixPoint);\n                                radixSplit[1] && (postMask += opts.radixPoint + \"*{\" + radixSplit[1].match(/^\\d*\\??\\d*/)[0].length + \"}\");\n                            }\n                            return postMask;\n                        }(processValue, opts), {\n                            numericInput: !0,\n                            jitMasking: !0,\n                            definitions: {\n                                \"*\": {\n                                    validator: \"[0-9?]\",\n                                    cardinality: 1\n                                }\n                            }\n                        }).format(processValue.join(\"\")), addRadix && (processValue += opts.radixPoint), \n                        processValue.charAt(0) === opts.groupSeparator && processValue.substr(1);\n                    }\n                }\n                if (opts.isNegative && \"blur\" === currentResult.event && (opts.isNegative = \"0\" !== processValue), \n                processValue = prefix + processValue, processValue += suffix, opts.isNegative && (processValue = opts.negationSymbol.front + processValue, \n                processValue += opts.negationSymbol.back), processValue = processValue.split(\"\"), \n                charAtPos !== undefined) if (charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back) caretPos = $.inArray(\"?\", processValue), \n                caretPos > -1 ? processValue[caretPos] = charAtPos : caretPos = currentResult.caret || 0; else if (charAtPos === opts.radixPoint || charAtPos === opts.negationSymbol.front || charAtPos === opts.negationSymbol.back) {\n                    var newCaretPos = $.inArray(charAtPos, processValue);\n                    -1 !== newCaretPos && (caretPos = newCaretPos);\n                }\n                opts.numericInput && (caretPos = processValue.length - caretPos - 1, processValue = processValue.reverse());\n                var rslt = {\n                    caret: charAtPos === undefined || currentResult.pos !== undefined ? caretPos + (opts.numericInput ? -1 : 1) : caretPos,\n                    buffer: processValue,\n                    refreshFromBuffer: currentResult.dopost || buffer.join(\"\") !== processValue.join(\"\")\n                };\n                return rslt.refreshFromBuffer ? rslt : currentResult;\n            },\n            onBeforeWrite: function(e, buffer, caretPos, opts) {\n                if (e) switch (e.type) {\n                  case \"keydown\":\n                    return opts.postValidation(buffer, {\n                        caret: caretPos,\n                        dopost: !0\n                    }, opts);\n\n                  case \"blur\":\n                  case \"checkval\":\n                    var unmasked;\n                    if (function(opts) {\n                        opts.parseMinMaxOptions === undefined && (null !== opts.min && (opts.min = opts.min.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), \"g\"), \"\"), \n                        \",\" === opts.radixPoint && (opts.min = opts.min.replace(opts.radixPoint, \".\")), \n                        opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN, isNaN(opts.min) && (opts.min = Number.MIN_VALUE)), \n                        null !== opts.max && (opts.max = opts.max.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), \"g\"), \"\"), \n                        \",\" === opts.radixPoint && (opts.max = opts.max.replace(opts.radixPoint, \".\")), \n                        opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN, isNaN(opts.max) && (opts.max = Number.MAX_VALUE)), \n                        opts.parseMinMaxOptions = \"done\");\n                    }(opts), null !== opts.min || null !== opts.max) {\n                        if (unmasked = opts.onUnMask(buffer.join(\"\"), undefined, $.extend({}, opts, {\n                            unmaskAsNumber: !0\n                        })), null !== opts.min && unmasked < opts.min) return opts.isNegative = opts.min < 0, \n                        opts.postValidation(opts.min.toString().replace(\".\", opts.radixPoint).split(\"\"), {\n                            caret: caretPos,\n                            dopost: !0,\n                            placeholder: \"0\"\n                        }, opts);\n                        if (null !== opts.max && unmasked > opts.max) return opts.isNegative = opts.max < 0, \n                        opts.postValidation(opts.max.toString().replace(\".\", opts.radixPoint).split(\"\"), {\n                            caret: caretPos,\n                            dopost: !0,\n                            placeholder: \"0\"\n                        }, opts);\n                    }\n                    return opts.postValidation(buffer, {\n                        caret: caretPos,\n                        placeholder: \"0\",\n                        event: \"blur\"\n                    }, opts);\n\n                  case \"_checkval\":\n                    return {\n                        caret: caretPos\n                    };\n                }\n            },\n            regex: {\n                integerPart: function(opts, emptyCheck) {\n                    return emptyCheck ? new RegExp(\"[\" + Inputmask.escapeRegex(opts.negationSymbol.front) + \"+]?\") : new RegExp(\"[\" + Inputmask.escapeRegex(opts.negationSymbol.front) + \"+]?\\\\d+\");\n                },\n                integerNPart: function(opts) {\n                    return new RegExp(\"[\\\\d\" + Inputmask.escapeRegex(opts.groupSeparator) + Inputmask.escapeRegex(opts.placeholder.charAt(0)) + \"]+\");\n                }\n            },\n            definitions: {\n                \"~\": {\n                    validator: function(chrs, maskset, pos, strict, opts, isSelection) {\n                        var isValid = strict ? new RegExp(\"[0-9\" + Inputmask.escapeRegex(opts.groupSeparator) + \"]\").test(chrs) : new RegExp(\"[0-9]\").test(chrs);\n                        if (!0 === isValid) {\n                            if (!0 !== opts.numericInput && maskset.validPositions[pos] !== undefined && \"~\" === maskset.validPositions[pos].match.def && !isSelection) {\n                                var processValue = maskset.buffer.join(\"\");\n                                processValue = processValue.replace(new RegExp(\"[-\" + Inputmask.escapeRegex(opts.negationSymbol.front) + \"]\", \"g\"), \"\"), \n                                processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + \"$\"), \"\");\n                                var pvRadixSplit = processValue.split(opts.radixPoint);\n                                pvRadixSplit.length > 1 && (pvRadixSplit[1] = pvRadixSplit[1].replace(/0/g, opts.placeholder.charAt(0))), \n                                \"0\" === pvRadixSplit[0] && (pvRadixSplit[0] = pvRadixSplit[0].replace(/0/g, opts.placeholder.charAt(0))), \n                                processValue = pvRadixSplit[0] + opts.radixPoint + pvRadixSplit[1] || \"\";\n                                var bufferTemplate = maskset._buffer.join(\"\");\n                                for (processValue === opts.radixPoint && (processValue = bufferTemplate); null === processValue.match(Inputmask.escapeRegex(bufferTemplate) + \"$\"); ) bufferTemplate = bufferTemplate.slice(1);\n                                processValue = processValue.replace(bufferTemplate, \"\"), processValue = processValue.split(\"\"), \n                                isValid = processValue[pos] === undefined ? {\n                                    pos: pos,\n                                    remove: pos\n                                } : {\n                                    pos: pos\n                                };\n                            }\n                        } else strict || chrs !== opts.radixPoint || maskset.validPositions[pos - 1] !== undefined || (maskset.buffer[pos] = \"0\", \n                        isValid = {\n                            pos: pos + 1\n                        });\n                        return isValid;\n                    },\n                    cardinality: 1\n                },\n                \"+\": {\n                    validator: function(chrs, maskset, pos, strict, opts) {\n                        return opts.allowMinus && (\"-\" === chrs || chrs === opts.negationSymbol.front);\n                    },\n                    cardinality: 1,\n                    placeholder: \"\"\n                },\n                \"-\": {\n                    validator: function(chrs, maskset, pos, strict, opts) {\n                        return opts.allowMinus && chrs === opts.negationSymbol.back;\n                    },\n                    cardinality: 1,\n                    placeholder: \"\"\n                },\n                \":\": {\n                    validator: function(chrs, maskset, pos, strict, opts) {\n                        var radix = \"[\" + Inputmask.escapeRegex(opts.radixPoint) + \"]\", isValid = new RegExp(radix).test(chrs);\n                        return isValid && maskset.validPositions[pos] && maskset.validPositions[pos].match.placeholder === opts.radixPoint && (isValid = {\n                            caret: pos + 1\n                        }), isValid;\n                    },\n                    cardinality: 1,\n                    placeholder: function(opts) {\n                        return opts.radixPoint;\n                    }\n                }\n            },\n            onUnMask: function(maskedValue, unmaskedValue, opts) {\n                if (\"\" === unmaskedValue && !0 === opts.nullable) return unmaskedValue;\n                var processValue = maskedValue.replace(opts.prefix, \"\");\n                return processValue = processValue.replace(opts.suffix, \"\"), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), \"g\"), \"\"), \n                \"\" !== opts.placeholder.charAt(0) && (processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), \"g\"), \"0\")), \n                opts.unmaskAsNumber ? (\"\" !== opts.radixPoint && -1 !== processValue.indexOf(opts.radixPoint) && (processValue = processValue.replace(Inputmask.escapeRegex.call(this, opts.radixPoint), \".\")), \n                processValue = processValue.replace(new RegExp(\"^\" + Inputmask.escapeRegex(opts.negationSymbol.front)), \"-\"), \n                processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + \"$\"), \"\"), \n                Number(processValue)) : processValue;\n            },\n            isComplete: function(buffer, opts) {\n                var maskedValue = buffer.join(\"\");\n                if (buffer.slice().join(\"\") !== maskedValue) return !1;\n                var processValue = maskedValue.replace(opts.prefix, \"\");\n                return processValue = processValue.replace(opts.suffix, \"\"), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), \"g\"), \"\"), \n                \",\" === opts.radixPoint && (processValue = processValue.replace(Inputmask.escapeRegex(opts.radixPoint), \".\")), \n                isFinite(processValue);\n            },\n            onBeforeMask: function(initialValue, opts) {\n                if (opts.isNegative = undefined, initialValue = initialValue.toString().charAt(initialValue.length - 1) === opts.radixPoint ? initialValue.toString().substr(0, initialValue.length - 1) : initialValue.toString(), \n                \"\" !== opts.radixPoint && isFinite(initialValue)) {\n                    var vs = initialValue.split(\".\"), groupSize = \"\" !== opts.groupSeparator ? parseInt(opts.groupSize) : 0;\n                    2 === vs.length && (vs[0].length > groupSize || vs[1].length > groupSize || vs[0].length <= groupSize && vs[1].length < groupSize) && (initialValue = initialValue.replace(\".\", opts.radixPoint));\n                }\n                var kommaMatches = initialValue.match(/,/g), dotMatches = initialValue.match(/\\./g);\n                if (dotMatches && kommaMatches ? dotMatches.length > kommaMatches.length ? (initialValue = initialValue.replace(/\\./g, \"\"), \n                initialValue = initialValue.replace(\",\", opts.radixPoint)) : kommaMatches.length > dotMatches.length ? (initialValue = initialValue.replace(/,/g, \"\"), \n                initialValue = initialValue.replace(\".\", opts.radixPoint)) : initialValue = initialValue.indexOf(\".\") < initialValue.indexOf(\",\") ? initialValue.replace(/\\./g, \"\") : initialValue.replace(/,/g, \"\") : initialValue = initialValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), \"g\"), \"\"), \n                0 === opts.digits && (-1 !== initialValue.indexOf(\".\") ? initialValue = initialValue.substring(0, initialValue.indexOf(\".\")) : -1 !== initialValue.indexOf(\",\") && (initialValue = initialValue.substring(0, initialValue.indexOf(\",\")))), \n                \"\" !== opts.radixPoint && isFinite(opts.digits) && -1 !== initialValue.indexOf(opts.radixPoint)) {\n                    var valueParts = initialValue.split(opts.radixPoint), decPart = valueParts[1].match(new RegExp(\"\\\\d*\"))[0];\n                    if (parseInt(opts.digits) < decPart.toString().length) {\n                        var digitsFactor = Math.pow(10, parseInt(opts.digits));\n                        initialValue = initialValue.replace(Inputmask.escapeRegex(opts.radixPoint), \".\"), \n                        initialValue = Math.round(parseFloat(initialValue) * digitsFactor) / digitsFactor, \n                        initialValue = initialValue.toString().replace(\".\", opts.radixPoint);\n                    }\n                }\n                return initialValue;\n            },\n            canClearPosition: function(maskset, position, lvp, strict, opts) {\n                var vp = maskset.validPositions[position], canClear = vp.input !== opts.radixPoint || null !== maskset.validPositions[position].match.fn && !1 === opts.decimalProtect || vp.input === opts.radixPoint && maskset.validPositions[position + 1] && null === maskset.validPositions[position + 1].match.fn || isFinite(vp.input) || position === lvp || vp.input === opts.groupSeparator || vp.input === opts.negationSymbol.front || vp.input === opts.negationSymbol.back;\n                return !canClear || \"+\" !== vp.match.nativeDef && \"-\" !== vp.match.nativeDef || (opts.isNegative = !1), \n                canClear;\n            },\n            onKeyDown: function(e, buffer, caretPos, opts) {\n                var $input = $(this);\n                if (e.ctrlKey) switch (e.keyCode) {\n                  case Inputmask.keyCode.UP:\n                    $input.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step)), $input.trigger(\"setvalue\");\n                    break;\n\n                  case Inputmask.keyCode.DOWN:\n                    $input.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step)), $input.trigger(\"setvalue\");\n                }\n            }\n        },\n        currency: {\n            prefix: \"$ \",\n            groupSeparator: \",\",\n            alias: \"numeric\",\n            placeholder: \"0\",\n            autoGroup: !0,\n            digits: 2,\n            digitsOptional: !1,\n            clearMaskOnLostFocus: !1\n        },\n        decimal: {\n            alias: \"numeric\"\n        },\n        integer: {\n            alias: \"numeric\",\n            digits: 0,\n            radixPoint: \"\"\n        },\n        percentage: {\n            alias: \"numeric\",\n            digits: 2,\n            digitsOptional: !0,\n            radixPoint: \".\",\n            placeholder: \"0\",\n            autoGroup: !1,\n            min: 0,\n            max: 100,\n            suffix: \" %\",\n            allowMinus: !1\n        }\n    }), Inputmask;\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5udW1lcmljLmV4dGVuc2lvbnMuanM/ZTAyOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esd0NBQXdDLGdCQUFnQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywrQ0FBK0M7QUFDbEY7QUFDQTtBQUNBO0FBQ0Esb0dBQW9HLDZCQUE2QixlQUFlLDJCQUEyQjtBQUMzSztBQUNBO0FBQ0E7QUFDQSwrR0FBK0csb0JBQW9CLG1JQUFtSSxzQkFBc0Isa0RBQWtELG9CQUFvQjtBQUNsVztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGtCQUFrQjtBQUN6RDtBQUNBLCtNQUErTTtBQUMvTTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsdUJBQXVCLEVBQUUsRUFBRTtBQUN0RztBQUNBLG1GQUFtRixvREFBb0Q7QUFDdkk7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUdBQXlHO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQiw0RkFBNEY7QUFDNUY7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlHQUF5RywwRUFBMEU7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4qIGlucHV0bWFzay5udW1lcmljLmV4dGVuc2lvbnMuanNcbiogaHR0cHM6Ly9naXRodWIuY29tL1JvYmluSGVyYm90cy9JbnB1dG1hc2tcbiogQ29weXJpZ2h0IChjKSAyMDEwIC0gMjAxNyBSb2JpbiBIZXJib3RzXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4qIFZlcnNpb246IDMuMy44XG4qL1xuXG4hZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWyBcIi4vZGVwZW5kZW5jeUxpYnMvaW5wdXRtYXNrLmRlcGVuZGVuY3lMaWJcIiwgXCIuL2lucHV0bWFza1wiIF0sIGZhY3RvcnkpIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9kZXBlbmRlbmN5TGlicy9pbnB1dG1hc2suZGVwZW5kZW5jeUxpYlwiKSwgcmVxdWlyZShcIi4vaW5wdXRtYXNrXCIpKSA6IGZhY3Rvcnkod2luZG93LmRlcGVuZGVuY3lMaWIgfHwgalF1ZXJ5LCB3aW5kb3cuSW5wdXRtYXNrKTtcbn0oZnVuY3Rpb24oJCwgSW5wdXRtYXNrLCB1bmRlZmluZWQpIHtcbiAgICBmdW5jdGlvbiBhdXRvRXNjYXBlKHR4dCwgb3B0cykge1xuICAgICAgICBmb3IgKHZhciBlc2NhcGVkVHh0ID0gXCJcIiwgaSA9IDA7IGkgPCB0eHQubGVuZ3RoOyBpKyspIElucHV0bWFzay5wcm90b3R5cGUuZGVmaW5pdGlvbnNbdHh0LmNoYXJBdChpKV0gfHwgb3B0cy5kZWZpbml0aW9uc1t0eHQuY2hhckF0KGkpXSB8fCBvcHRzLm9wdGlvbmFsbWFya2VyLnN0YXJ0ID09PSB0eHQuY2hhckF0KGkpIHx8IG9wdHMub3B0aW9uYWxtYXJrZXIuZW5kID09PSB0eHQuY2hhckF0KGkpIHx8IG9wdHMucXVhbnRpZmllcm1hcmtlci5zdGFydCA9PT0gdHh0LmNoYXJBdChpKSB8fCBvcHRzLnF1YW50aWZpZXJtYXJrZXIuZW5kID09PSB0eHQuY2hhckF0KGkpIHx8IG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQgPT09IHR4dC5jaGFyQXQoaSkgfHwgb3B0cy5ncm91cG1hcmtlci5lbmQgPT09IHR4dC5jaGFyQXQoaSkgfHwgb3B0cy5hbHRlcm5hdG9ybWFya2VyID09PSB0eHQuY2hhckF0KGkpID8gZXNjYXBlZFR4dCArPSBcIlxcXFxcIiArIHR4dC5jaGFyQXQoaSkgOiBlc2NhcGVkVHh0ICs9IHR4dC5jaGFyQXQoaSk7XG4gICAgICAgIHJldHVybiBlc2NhcGVkVHh0O1xuICAgIH1cbiAgICByZXR1cm4gSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICAgICBudW1lcmljOiB7XG4gICAgICAgICAgICBtYXNrOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKDAgIT09IG9wdHMucmVwZWF0ICYmIGlzTmFOKG9wdHMuaW50ZWdlckRpZ2l0cykgJiYgKG9wdHMuaW50ZWdlckRpZ2l0cyA9IG9wdHMucmVwZWF0KSwgXG4gICAgICAgICAgICAgICAgb3B0cy5yZXBlYXQgPSAwLCBvcHRzLmdyb3VwU2VwYXJhdG9yID09PSBvcHRzLnJhZGl4UG9pbnQgJiYgKFwiLlwiID09PSBvcHRzLnJhZGl4UG9pbnQgPyBvcHRzLmdyb3VwU2VwYXJhdG9yID0gXCIsXCIgOiBcIixcIiA9PT0gb3B0cy5yYWRpeFBvaW50ID8gb3B0cy5ncm91cFNlcGFyYXRvciA9IFwiLlwiIDogb3B0cy5ncm91cFNlcGFyYXRvciA9IFwiXCIpLCBcbiAgICAgICAgICAgICAgICBcIiBcIiA9PT0gb3B0cy5ncm91cFNlcGFyYXRvciAmJiAob3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyID0gdW5kZWZpbmVkKSwgb3B0cy5hdXRvR3JvdXAgPSBvcHRzLmF1dG9Hcm91cCAmJiBcIlwiICE9PSBvcHRzLmdyb3VwU2VwYXJhdG9yLCBcbiAgICAgICAgICAgICAgICBvcHRzLmF1dG9Hcm91cCAmJiAoXCJzdHJpbmdcIiA9PSB0eXBlb2Ygb3B0cy5ncm91cFNpemUgJiYgaXNGaW5pdGUob3B0cy5ncm91cFNpemUpICYmIChvcHRzLmdyb3VwU2l6ZSA9IHBhcnNlSW50KG9wdHMuZ3JvdXBTaXplKSksIFxuICAgICAgICAgICAgICAgIGlzRmluaXRlKG9wdHMuaW50ZWdlckRpZ2l0cykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZXBzID0gTWF0aC5mbG9vcihvcHRzLmludGVnZXJEaWdpdHMgLyBvcHRzLmdyb3VwU2l6ZSksIG1vZCA9IG9wdHMuaW50ZWdlckRpZ2l0cyAlIG9wdHMuZ3JvdXBTaXplO1xuICAgICAgICAgICAgICAgICAgICBvcHRzLmludGVnZXJEaWdpdHMgPSBwYXJzZUludChvcHRzLmludGVnZXJEaWdpdHMpICsgKDAgPT09IG1vZCA/IHNlcHMgLSAxIDogc2VwcyksIFxuICAgICAgICAgICAgICAgICAgICBvcHRzLmludGVnZXJEaWdpdHMgPCAxICYmIChvcHRzLmludGVnZXJEaWdpdHMgPSBcIipcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9wdHMucGxhY2Vob2xkZXIubGVuZ3RoID4gMSAmJiAob3B0cy5wbGFjZWhvbGRlciA9IG9wdHMucGxhY2Vob2xkZXIuY2hhckF0KDApKSwgXG4gICAgICAgICAgICAgICAgXCJyYWRpeEZvY3VzXCIgPT09IG9wdHMucG9zaXRpb25DYXJldE9uQ2xpY2sgJiYgXCJcIiA9PT0gb3B0cy5wbGFjZWhvbGRlciAmJiAhMSA9PT0gb3B0cy5pbnRlZ2VyT3B0aW9uYWwgJiYgKG9wdHMucG9zaXRpb25DYXJldE9uQ2xpY2sgPSBcImx2cFwiKSwgXG4gICAgICAgICAgICAgICAgb3B0cy5kZWZpbml0aW9uc1tcIjtcIl0gPSBvcHRzLmRlZmluaXRpb25zW1wiflwiXSwgb3B0cy5kZWZpbml0aW9uc1tcIjtcIl0uZGVmaW5pdGlvblN5bWJvbCA9IFwiflwiLCBcbiAgICAgICAgICAgICAgICAhMCA9PT0gb3B0cy5udW1lcmljSW5wdXQgJiYgKG9wdHMucG9zaXRpb25DYXJldE9uQ2xpY2sgPSBcInJhZGl4Rm9jdXNcIiA9PT0gb3B0cy5wb3NpdGlvbkNhcmV0T25DbGljayA/IFwibHZwXCIgOiBvcHRzLnBvc2l0aW9uQ2FyZXRPbkNsaWNrLCBcbiAgICAgICAgICAgICAgICBvcHRzLmRpZ2l0c09wdGlvbmFsID0gITEsIGlzTmFOKG9wdHMuZGlnaXRzKSAmJiAob3B0cy5kaWdpdHMgPSAyKSwgb3B0cy5kZWNpbWFsUHJvdGVjdCA9ICExKTtcbiAgICAgICAgICAgICAgICB2YXIgbWFzayA9IFwiWytdXCI7XG4gICAgICAgICAgICAgICAgaWYgKG1hc2sgKz0gYXV0b0VzY2FwZShvcHRzLnByZWZpeCwgb3B0cyksICEwID09PSBvcHRzLmludGVnZXJPcHRpb25hbCA/IG1hc2sgKz0gXCJ+ezEsXCIgKyBvcHRzLmludGVnZXJEaWdpdHMgKyBcIn1cIiA6IG1hc2sgKz0gXCJ+e1wiICsgb3B0cy5pbnRlZ2VyRGlnaXRzICsgXCJ9XCIsIFxuICAgICAgICAgICAgICAgIG9wdHMuZGlnaXRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5yYWRpeFBvaW50RGVmaW5pdGlvblN5bWJvbCA9IG9wdHMuZGVjaW1hbFByb3RlY3QgPyBcIjpcIiA6IG9wdHMucmFkaXhQb2ludDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRxID0gb3B0cy5kaWdpdHMudG9TdHJpbmcoKS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgICAgIGlzRmluaXRlKGRxWzBdICYmIGRxWzFdICYmIGlzRmluaXRlKGRxWzFdKSkgPyBtYXNrICs9IG9wdHMucmFkaXhQb2ludERlZmluaXRpb25TeW1ib2wgKyBcIjt7XCIgKyBvcHRzLmRpZ2l0cyArIFwifVwiIDogKGlzTmFOKG9wdHMuZGlnaXRzKSB8fCBwYXJzZUludChvcHRzLmRpZ2l0cykgPiAwKSAmJiAob3B0cy5kaWdpdHNPcHRpb25hbCA/IG1hc2sgKz0gXCJbXCIgKyBvcHRzLnJhZGl4UG9pbnREZWZpbml0aW9uU3ltYm9sICsgXCI7ezEsXCIgKyBvcHRzLmRpZ2l0cyArIFwifV1cIiA6IG1hc2sgKz0gb3B0cy5yYWRpeFBvaW50RGVmaW5pdGlvblN5bWJvbCArIFwiO3tcIiArIG9wdHMuZGlnaXRzICsgXCJ9XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWFzayArPSBhdXRvRXNjYXBlKG9wdHMuc3VmZml4LCBvcHRzKSwgbWFzayArPSBcIlstXVwiLCBvcHRzLmdyZWVkeSA9ICExLCBtYXNrO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiLFxuICAgICAgICAgICAgZ3JlZWR5OiAhMSxcbiAgICAgICAgICAgIGRpZ2l0czogXCIqXCIsXG4gICAgICAgICAgICBkaWdpdHNPcHRpb25hbDogITAsXG4gICAgICAgICAgICBlbmZvcmNlRGlnaXRzT25CbHVyOiAhMSxcbiAgICAgICAgICAgIHJhZGl4UG9pbnQ6IFwiLlwiLFxuICAgICAgICAgICAgcG9zaXRpb25DYXJldE9uQ2xpY2s6IFwicmFkaXhGb2N1c1wiLFxuICAgICAgICAgICAgZ3JvdXBTaXplOiAzLFxuICAgICAgICAgICAgZ3JvdXBTZXBhcmF0b3I6IFwiXCIsXG4gICAgICAgICAgICBhdXRvR3JvdXA6ICExLFxuICAgICAgICAgICAgYWxsb3dNaW51czogITAsXG4gICAgICAgICAgICBuZWdhdGlvblN5bWJvbDoge1xuICAgICAgICAgICAgICAgIGZyb250OiBcIi1cIixcbiAgICAgICAgICAgICAgICBiYWNrOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW50ZWdlckRpZ2l0czogXCIrXCIsXG4gICAgICAgICAgICBpbnRlZ2VyT3B0aW9uYWw6ICEwLFxuICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgcmlnaHRBbGlnbjogITAsXG4gICAgICAgICAgICBkZWNpbWFsUHJvdGVjdDogITAsXG4gICAgICAgICAgICBtaW46IG51bGwsXG4gICAgICAgICAgICBtYXg6IG51bGwsXG4gICAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICAgICAgaW5zZXJ0TW9kZTogITAsXG4gICAgICAgICAgICBhdXRvVW5tYXNrOiAhMSxcbiAgICAgICAgICAgIHVubWFza0FzTnVtYmVyOiAhMSxcbiAgICAgICAgICAgIGlucHV0bW9kZTogXCJudW1lcmljXCIsXG4gICAgICAgICAgICBwcmVWYWxpZGF0aW9uOiBmdW5jdGlvbihidWZmZXIsIHBvcywgYywgaXNTZWxlY3Rpb24sIG9wdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoXCItXCIgPT09IGMgfHwgYyA9PT0gb3B0cy5uZWdhdGlvblN5bWJvbC5mcm9udCkgcmV0dXJuICEwID09PSBvcHRzLmFsbG93TWludXMgJiYgKG9wdHMuaXNOZWdhdGl2ZSA9IG9wdHMuaXNOZWdhdGl2ZSA9PT0gdW5kZWZpbmVkIHx8ICFvcHRzLmlzTmVnYXRpdmUsIFxuICAgICAgICAgICAgICAgIFwiXCIgPT09IGJ1ZmZlci5qb2luKFwiXCIpIHx8IHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZXQ6IHBvcyxcbiAgICAgICAgICAgICAgICAgICAgZG9wb3N0OiAhMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghMSA9PT0gaXNTZWxlY3Rpb24gJiYgYyA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIG9wdHMuZGlnaXRzICE9PSB1bmRlZmluZWQgJiYgKGlzTmFOKG9wdHMuZGlnaXRzKSB8fCBwYXJzZUludChvcHRzLmRpZ2l0cykgPiAwKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmFkaXhQb3MgPSAkLmluQXJyYXkob3B0cy5yYWRpeFBvaW50LCBidWZmZXIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoLTEgIT09IHJhZGl4UG9zKSByZXR1cm4gITAgPT09IG9wdHMubnVtZXJpY0lucHV0ID8gcG9zID09PSByYWRpeFBvcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiByYWRpeFBvcyArIDFcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBvc3RWYWxpZGF0aW9uOiBmdW5jdGlvbihidWZmZXIsIGN1cnJlbnRSZXN1bHQsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3VmZml4ID0gb3B0cy5zdWZmaXguc3BsaXQoXCJcIiksIHByZWZpeCA9IG9wdHMucHJlZml4LnNwbGl0KFwiXCIpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVzdWx0LnBvcyA9PT0gdW5kZWZpbmVkICYmIGN1cnJlbnRSZXN1bHQuY2FyZXQgIT09IHVuZGVmaW5lZCAmJiAhMCAhPT0gY3VycmVudFJlc3VsdC5kb3Bvc3QpIHJldHVybiBjdXJyZW50UmVzdWx0O1xuICAgICAgICAgICAgICAgIHZhciBjYXJldFBvcyA9IGN1cnJlbnRSZXN1bHQuY2FyZXQgIT09IHVuZGVmaW5lZCA/IGN1cnJlbnRSZXN1bHQuY2FyZXQgOiBjdXJyZW50UmVzdWx0LnBvcywgbWFza2VkVmFsdWUgPSBidWZmZXIuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBvcHRzLm51bWVyaWNJbnB1dCAmJiAoY2FyZXRQb3MgPSBtYXNrZWRWYWx1ZS5sZW5ndGggLSBjYXJldFBvcyAtIDEsIG1hc2tlZFZhbHVlID0gbWFza2VkVmFsdWUucmV2ZXJzZSgpKTtcbiAgICAgICAgICAgICAgICB2YXIgY2hhckF0UG9zID0gbWFza2VkVmFsdWVbY2FyZXRQb3NdO1xuICAgICAgICAgICAgICAgIGlmIChjaGFyQXRQb3MgPT09IG9wdHMuZ3JvdXBTZXBhcmF0b3IgJiYgKGNhcmV0UG9zICs9IDEsIGNoYXJBdFBvcyA9IG1hc2tlZFZhbHVlW2NhcmV0UG9zXSksIFxuICAgICAgICAgICAgICAgIGNhcmV0UG9zID09PSBtYXNrZWRWYWx1ZS5sZW5ndGggLSBvcHRzLnN1ZmZpeC5sZW5ndGggLSAxICYmIGNoYXJBdFBvcyA9PT0gb3B0cy5yYWRpeFBvaW50KSByZXR1cm4gY3VycmVudFJlc3VsdDtcbiAgICAgICAgICAgICAgICBjaGFyQXRQb3MgIT09IHVuZGVmaW5lZCAmJiBjaGFyQXRQb3MgIT09IG9wdHMucmFkaXhQb2ludCAmJiBjaGFyQXRQb3MgIT09IG9wdHMubmVnYXRpb25TeW1ib2wuZnJvbnQgJiYgY2hhckF0UG9zICE9PSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmJhY2sgJiYgKG1hc2tlZFZhbHVlW2NhcmV0UG9zXSA9IFwiP1wiLCBcbiAgICAgICAgICAgICAgICBvcHRzLnByZWZpeC5sZW5ndGggPiAwICYmIGNhcmV0UG9zID49ICghMSA9PT0gb3B0cy5pc05lZ2F0aXZlID8gMSA6IDApICYmIGNhcmV0UG9zIDwgb3B0cy5wcmVmaXgubGVuZ3RoIC0gMSArICghMSA9PT0gb3B0cy5pc05lZ2F0aXZlID8gMSA6IDApID8gcHJlZml4W2NhcmV0UG9zIC0gKCExID09PSBvcHRzLmlzTmVnYXRpdmUgPyAxIDogMCldID0gXCI/XCIgOiBvcHRzLnN1ZmZpeC5sZW5ndGggPiAwICYmIGNhcmV0UG9zID49IG1hc2tlZFZhbHVlLmxlbmd0aCAtIG9wdHMuc3VmZml4Lmxlbmd0aCAtICghMSA9PT0gb3B0cy5pc05lZ2F0aXZlID8gMSA6IDApICYmIChzdWZmaXhbY2FyZXRQb3MgLSAobWFza2VkVmFsdWUubGVuZ3RoIC0gb3B0cy5zdWZmaXgubGVuZ3RoIC0gKCExID09PSBvcHRzLmlzTmVnYXRpdmUgPyAxIDogMCkpXSA9IFwiP1wiKSksIFxuICAgICAgICAgICAgICAgIHByZWZpeCA9IHByZWZpeC5qb2luKFwiXCIpLCBzdWZmaXggPSBzdWZmaXguam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJvY2Vzc1ZhbHVlID0gbWFza2VkVmFsdWUuam9pbihcIlwiKS5yZXBsYWNlKHByZWZpeCwgXCJcIik7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKHN1ZmZpeCwgXCJcIiksIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMuZ3JvdXBTZXBhcmF0b3IpLCBcImdcIiksIFwiXCIpLCBcbiAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKFwiWy1cIiArIElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KSArIFwiXVwiLCBcImdcIiksIFwiXCIpLCBcbiAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmJhY2spICsgXCIkXCIpLCBcIlwiKSwgXG4gICAgICAgICAgICAgICAgaXNOYU4ob3B0cy5wbGFjZWhvbGRlcikgJiYgKHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMucGxhY2Vob2xkZXIpLCBcImdcIiksIFwiXCIpKSwgXG4gICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlLmxlbmd0aCA+IDEgJiYgMSAhPT0gcHJvY2Vzc1ZhbHVlLmluZGV4T2Yob3B0cy5yYWRpeFBvaW50KSAmJiAoXCIwXCIgPT09IGNoYXJBdFBvcyAmJiAocHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UoL15cXD8vZywgXCJcIikpLCBcbiAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZSgvXjAvZywgXCJcIikpLCBwcm9jZXNzVmFsdWUuY2hhckF0KDApID09PSBvcHRzLnJhZGl4UG9pbnQgJiYgXCJcIiAhPT0gb3B0cy5yYWRpeFBvaW50ICYmICEwICE9PSBvcHRzLm51bWVyaWNJbnB1dCAmJiAocHJvY2Vzc1ZhbHVlID0gXCIwXCIgKyBwcm9jZXNzVmFsdWUpLCBcbiAgICAgICAgICAgICAgICBcIlwiICE9PSBwcm9jZXNzVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5zcGxpdChcIlwiKSwgKCFvcHRzLmRpZ2l0c09wdGlvbmFsIHx8IG9wdHMuZW5mb3JjZURpZ2l0c09uQmx1ciAmJiBcImJsdXJcIiA9PT0gY3VycmVudFJlc3VsdC5ldmVudCkgJiYgaXNGaW5pdGUob3B0cy5kaWdpdHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmFkaXhQb3NpdGlvbiA9ICQuaW5BcnJheShvcHRzLnJhZGl4UG9pbnQsIHByb2Nlc3NWYWx1ZSksIHJwYiA9ICQuaW5BcnJheShvcHRzLnJhZGl4UG9pbnQsIG1hc2tlZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xID09PSByYWRpeFBvc2l0aW9uICYmIChwcm9jZXNzVmFsdWUucHVzaChvcHRzLnJhZGl4UG9pbnQpLCByYWRpeFBvc2l0aW9uID0gcHJvY2Vzc1ZhbHVlLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gb3B0cy5kaWdpdHM7IGkrKykgb3B0cy5kaWdpdHNPcHRpb25hbCAmJiAoIW9wdHMuZW5mb3JjZURpZ2l0c09uQmx1ciB8fCBcImJsdXJcIiAhPT0gY3VycmVudFJlc3VsdC5ldmVudCkgfHwgcHJvY2Vzc1ZhbHVlW3JhZGl4UG9zaXRpb24gKyBpXSAhPT0gdW5kZWZpbmVkICYmIHByb2Nlc3NWYWx1ZVtyYWRpeFBvc2l0aW9uICsgaV0gIT09IG9wdHMucGxhY2Vob2xkZXIuY2hhckF0KDApID8gLTEgIT09IHJwYiAmJiBtYXNrZWRWYWx1ZVtycGIgKyBpXSAhPT0gdW5kZWZpbmVkICYmIChwcm9jZXNzVmFsdWVbcmFkaXhQb3NpdGlvbiArIGldID0gcHJvY2Vzc1ZhbHVlW3JhZGl4UG9zaXRpb24gKyBpXSB8fCBtYXNrZWRWYWx1ZVtycGIgKyBpXSkgOiBwcm9jZXNzVmFsdWVbcmFkaXhQb3NpdGlvbiArIGldID0gY3VycmVudFJlc3VsdC5wbGFjZWhvbGRlciB8fCBvcHRzLnBsYWNlaG9sZGVyLmNoYXJBdCgwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoITAgIT09IG9wdHMuYXV0b0dyb3VwIHx8IFwiXCIgPT09IG9wdHMuZ3JvdXBTZXBhcmF0b3IgfHwgY2hhckF0UG9zID09PSBvcHRzLnJhZGl4UG9pbnQgJiYgY3VycmVudFJlc3VsdC5wb3MgPT09IHVuZGVmaW5lZCAmJiAhY3VycmVudFJlc3VsdC5kb3Bvc3QpIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5qb2luKFwiXCIpOyBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhZGRSYWRpeCA9IHByb2Nlc3NWYWx1ZVtwcm9jZXNzVmFsdWUubGVuZ3RoIC0gMV0gPT09IG9wdHMucmFkaXhQb2ludCAmJiBjdXJyZW50UmVzdWx0LmMgPT09IG9wdHMucmFkaXhQb2ludDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NWYWx1ZSA9IElucHV0bWFzayhmdW5jdGlvbihidWZmZXIsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zdE1hc2sgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3N0TWFzayArPSBcIihcIiArIG9wdHMuZ3JvdXBTZXBhcmF0b3IgKyBcIip7XCIgKyBvcHRzLmdyb3VwU2l6ZSArIFwifSl7Kn1cIiwgXCJcIiAhPT0gb3B0cy5yYWRpeFBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByYWRpeFNwbGl0ID0gYnVmZmVyLmpvaW4oXCJcIikuc3BsaXQob3B0cy5yYWRpeFBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXhTcGxpdFsxXSAmJiAocG9zdE1hc2sgKz0gb3B0cy5yYWRpeFBvaW50ICsgXCIqe1wiICsgcmFkaXhTcGxpdFsxXS5tYXRjaCgvXlxcZCpcXD8/XFxkKi8pWzBdLmxlbmd0aCArIFwifVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc3RNYXNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfShwcm9jZXNzVmFsdWUsIG9wdHMpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJpY0lucHV0OiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqaXRNYXNraW5nOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIipcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTk/XVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmZvcm1hdChwcm9jZXNzVmFsdWUuam9pbihcIlwiKSksIGFkZFJhZGl4ICYmIChwcm9jZXNzVmFsdWUgKz0gb3B0cy5yYWRpeFBvaW50KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUuY2hhckF0KDApID09PSBvcHRzLmdyb3VwU2VwYXJhdG9yICYmIHByb2Nlc3NWYWx1ZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9wdHMuaXNOZWdhdGl2ZSAmJiBcImJsdXJcIiA9PT0gY3VycmVudFJlc3VsdC5ldmVudCAmJiAob3B0cy5pc05lZ2F0aXZlID0gXCIwXCIgIT09IHByb2Nlc3NWYWx1ZSksIFxuICAgICAgICAgICAgICAgIHByb2Nlc3NWYWx1ZSA9IHByZWZpeCArIHByb2Nlc3NWYWx1ZSwgcHJvY2Vzc1ZhbHVlICs9IHN1ZmZpeCwgb3B0cy5pc05lZ2F0aXZlICYmIChwcm9jZXNzVmFsdWUgPSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250ICsgcHJvY2Vzc1ZhbHVlLCBcbiAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUgKz0gb3B0cy5uZWdhdGlvblN5bWJvbC5iYWNrKSwgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnNwbGl0KFwiXCIpLCBcbiAgICAgICAgICAgICAgICBjaGFyQXRQb3MgIT09IHVuZGVmaW5lZCkgaWYgKGNoYXJBdFBvcyAhPT0gb3B0cy5yYWRpeFBvaW50ICYmIGNoYXJBdFBvcyAhPT0gb3B0cy5uZWdhdGlvblN5bWJvbC5mcm9udCAmJiBjaGFyQXRQb3MgIT09IG9wdHMubmVnYXRpb25TeW1ib2wuYmFjaykgY2FyZXRQb3MgPSAkLmluQXJyYXkoXCI/XCIsIHByb2Nlc3NWYWx1ZSksIFxuICAgICAgICAgICAgICAgIGNhcmV0UG9zID4gLTEgPyBwcm9jZXNzVmFsdWVbY2FyZXRQb3NdID0gY2hhckF0UG9zIDogY2FyZXRQb3MgPSBjdXJyZW50UmVzdWx0LmNhcmV0IHx8IDA7IGVsc2UgaWYgKGNoYXJBdFBvcyA9PT0gb3B0cy5yYWRpeFBvaW50IHx8IGNoYXJBdFBvcyA9PT0gb3B0cy5uZWdhdGlvblN5bWJvbC5mcm9udCB8fCBjaGFyQXRQb3MgPT09IG9wdHMubmVnYXRpb25TeW1ib2wuYmFjaykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Q2FyZXRQb3MgPSAkLmluQXJyYXkoY2hhckF0UG9zLCBwcm9jZXNzVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAtMSAhPT0gbmV3Q2FyZXRQb3MgJiYgKGNhcmV0UG9zID0gbmV3Q2FyZXRQb3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcHRzLm51bWVyaWNJbnB1dCAmJiAoY2FyZXRQb3MgPSBwcm9jZXNzVmFsdWUubGVuZ3RoIC0gY2FyZXRQb3MgLSAxLCBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmV2ZXJzZSgpKTtcbiAgICAgICAgICAgICAgICB2YXIgcnNsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZXQ6IGNoYXJBdFBvcyA9PT0gdW5kZWZpbmVkIHx8IGN1cnJlbnRSZXN1bHQucG9zICE9PSB1bmRlZmluZWQgPyBjYXJldFBvcyArIChvcHRzLm51bWVyaWNJbnB1dCA/IC0xIDogMSkgOiBjYXJldFBvcyxcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiBwcm9jZXNzVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiBjdXJyZW50UmVzdWx0LmRvcG9zdCB8fCBidWZmZXIuam9pbihcIlwiKSAhPT0gcHJvY2Vzc1ZhbHVlLmpvaW4oXCJcIilcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiByc2x0LnJlZnJlc2hGcm9tQnVmZmVyID8gcnNsdCA6IGN1cnJlbnRSZXN1bHQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25CZWZvcmVXcml0ZTogZnVuY3Rpb24oZSwgYnVmZmVyLCBjYXJldFBvcywgb3B0cykge1xuICAgICAgICAgICAgICAgIGlmIChlKSBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBcImtleWRvd25cIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMucG9zdFZhbGlkYXRpb24oYnVmZmVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogY2FyZXRQb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3Bvc3Q6ICEwXG4gICAgICAgICAgICAgICAgICAgIH0sIG9wdHMpO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIFwiYmx1clwiOlxuICAgICAgICAgICAgICAgICAgY2FzZSBcImNoZWNrdmFsXCI6XG4gICAgICAgICAgICAgICAgICAgIHZhciB1bm1hc2tlZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMucGFyc2VNaW5NYXhPcHRpb25zID09PSB1bmRlZmluZWQgJiYgKG51bGwgIT09IG9wdHMubWluICYmIChvcHRzLm1pbiA9IG9wdHMubWluLnRvU3RyaW5nKCkucmVwbGFjZShuZXcgUmVnRXhwKElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLmdyb3VwU2VwYXJhdG9yKSwgXCJnXCIpLCBcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBcIixcIiA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIChvcHRzLm1pbiA9IG9wdHMubWluLnJlcGxhY2Uob3B0cy5yYWRpeFBvaW50LCBcIi5cIikpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMubWluID0gaXNGaW5pdGUob3B0cy5taW4pID8gcGFyc2VGbG9hdChvcHRzLm1pbikgOiBOYU4sIGlzTmFOKG9wdHMubWluKSAmJiAob3B0cy5taW4gPSBOdW1iZXIuTUlOX1ZBTFVFKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhPT0gb3B0cy5tYXggJiYgKG9wdHMubWF4ID0gb3B0cy5tYXgudG9TdHJpbmcoKS5yZXBsYWNlKG5ldyBSZWdFeHAoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMuZ3JvdXBTZXBhcmF0b3IpLCBcImdcIiksIFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLFwiID09PSBvcHRzLnJhZGl4UG9pbnQgJiYgKG9wdHMubWF4ID0gb3B0cy5tYXgucmVwbGFjZShvcHRzLnJhZGl4UG9pbnQsIFwiLlwiKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5tYXggPSBpc0Zpbml0ZShvcHRzLm1heCkgPyBwYXJzZUZsb2F0KG9wdHMubWF4KSA6IE5hTiwgaXNOYU4ob3B0cy5tYXgpICYmIChvcHRzLm1heCA9IE51bWJlci5NQVhfVkFMVUUpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzLnBhcnNlTWluTWF4T3B0aW9ucyA9IFwiZG9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfShvcHRzKSwgbnVsbCAhPT0gb3B0cy5taW4gfHwgbnVsbCAhPT0gb3B0cy5tYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bm1hc2tlZCA9IG9wdHMub25Vbk1hc2soYnVmZmVyLmpvaW4oXCJcIiksIHVuZGVmaW5lZCwgJC5leHRlbmQoe30sIG9wdHMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hc2tBc051bWJlcjogITBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgbnVsbCAhPT0gb3B0cy5taW4gJiYgdW5tYXNrZWQgPCBvcHRzLm1pbikgcmV0dXJuIG9wdHMuaXNOZWdhdGl2ZSA9IG9wdHMubWluIDwgMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzLnBvc3RWYWxpZGF0aW9uKG9wdHMubWluLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgb3B0cy5yYWRpeFBvaW50KS5zcGxpdChcIlwiKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBjYXJldFBvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3Bvc3Q6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3B0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCAhPT0gb3B0cy5tYXggJiYgdW5tYXNrZWQgPiBvcHRzLm1heCkgcmV0dXJuIG9wdHMuaXNOZWdhdGl2ZSA9IG9wdHMubWF4IDwgMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzLnBvc3RWYWxpZGF0aW9uKG9wdHMubWF4LnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgb3B0cy5yYWRpeFBvaW50KS5zcGxpdChcIlwiKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBjYXJldFBvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3Bvc3Q6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3B0cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMucG9zdFZhbGlkYXRpb24oYnVmZmVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogY2FyZXRQb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDogXCJibHVyXCJcbiAgICAgICAgICAgICAgICAgICAgfSwgb3B0cyk7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJfY2hlY2t2YWxcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBjYXJldFBvc1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWdleDoge1xuICAgICAgICAgICAgICAgIGludGVnZXJQYXJ0OiBmdW5jdGlvbihvcHRzLCBlbXB0eUNoZWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbXB0eUNoZWNrID8gbmV3IFJlZ0V4cChcIltcIiArIElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KSArIFwiK10/XCIpIDogbmV3IFJlZ0V4cChcIltcIiArIElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KSArIFwiK10/XFxcXGQrXCIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW50ZWdlck5QYXJ0OiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiW1xcXFxkXCIgKyBJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5ncm91cFNlcGFyYXRvcikgKyBJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5wbGFjZWhvbGRlci5jaGFyQXQoMCkpICsgXCJdK1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBcIn5cIjoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzLCBpc1NlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzVmFsaWQgPSBzdHJpY3QgPyBuZXcgUmVnRXhwKFwiWzAtOVwiICsgSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMuZ3JvdXBTZXBhcmF0b3IpICsgXCJdXCIpLnRlc3QoY2hycykgOiBuZXcgUmVnRXhwKFwiWzAtOV1cIikudGVzdChjaHJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCAhPT0gb3B0cy5udW1lcmljSW5wdXQgJiYgbWFza3NldC52YWxpZFBvc2l0aW9uc1twb3NdICE9PSB1bmRlZmluZWQgJiYgXCJ+XCIgPT09IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zXS5tYXRjaC5kZWYgJiYgIWlzU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9jZXNzVmFsdWUgPSBtYXNrc2V0LmJ1ZmZlci5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKFwiWy1cIiArIElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KSArIFwiXVwiLCBcImdcIiksIFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5uZWdhdGlvblN5bWJvbC5iYWNrKSArIFwiJFwiKSwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwdlJhZGl4U3BsaXQgPSBwcm9jZXNzVmFsdWUuc3BsaXQob3B0cy5yYWRpeFBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHZSYWRpeFNwbGl0Lmxlbmd0aCA+IDEgJiYgKHB2UmFkaXhTcGxpdFsxXSA9IHB2UmFkaXhTcGxpdFsxXS5yZXBsYWNlKC8wL2csIG9wdHMucGxhY2Vob2xkZXIuY2hhckF0KDApKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjBcIiA9PT0gcHZSYWRpeFNwbGl0WzBdICYmIChwdlJhZGl4U3BsaXRbMF0gPSBwdlJhZGl4U3BsaXRbMF0ucmVwbGFjZSgvMC9nLCBvcHRzLnBsYWNlaG9sZGVyLmNoYXJBdCgwKSkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlID0gcHZSYWRpeFNwbGl0WzBdICsgb3B0cy5yYWRpeFBvaW50ICsgcHZSYWRpeFNwbGl0WzFdIHx8IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBidWZmZXJUZW1wbGF0ZSA9IG1hc2tzZXQuX2J1ZmZlci5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHByb2Nlc3NWYWx1ZSA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIChwcm9jZXNzVmFsdWUgPSBidWZmZXJUZW1wbGF0ZSk7IG51bGwgPT09IHByb2Nlc3NWYWx1ZS5tYXRjaChJbnB1dG1hc2suZXNjYXBlUmVnZXgoYnVmZmVyVGVtcGxhdGUpICsgXCIkXCIpOyApIGJ1ZmZlclRlbXBsYXRlID0gYnVmZmVyVGVtcGxhdGUuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKGJ1ZmZlclRlbXBsYXRlLCBcIlwiKSwgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnNwbGl0KFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHByb2Nlc3NWYWx1ZVtwb3NdID09PSB1bmRlZmluZWQgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZTogcG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBzdHJpY3QgfHwgY2hycyAhPT0gb3B0cy5yYWRpeFBvaW50IHx8IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zIC0gMV0gIT09IHVuZGVmaW5lZCB8fCAobWFza3NldC5idWZmZXJbcG9zXSA9IFwiMFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3MgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCIrXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMuYWxsb3dNaW51cyAmJiAoXCItXCIgPT09IGNocnMgfHwgY2hycyA9PT0gb3B0cy5uZWdhdGlvblN5bWJvbC5mcm9udCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCItXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMuYWxsb3dNaW51cyAmJiBjaHJzID09PSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmJhY2s7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCI6XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJhZGl4ID0gXCJbXCIgKyBJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5yYWRpeFBvaW50KSArIFwiXVwiLCBpc1ZhbGlkID0gbmV3IFJlZ0V4cChyYWRpeCkudGVzdChjaHJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkICYmIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zXSAmJiBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc10ubWF0Y2gucGxhY2Vob2xkZXIgPT09IG9wdHMucmFkaXhQb2ludCAmJiAoaXNWYWxpZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogcG9zICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksIGlzVmFsaWQ7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogZnVuY3Rpb24ob3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMucmFkaXhQb2ludDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblVuTWFzazogZnVuY3Rpb24obWFza2VkVmFsdWUsIHVubWFza2VkVmFsdWUsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJcIiA9PT0gdW5tYXNrZWRWYWx1ZSAmJiAhMCA9PT0gb3B0cy5udWxsYWJsZSkgcmV0dXJuIHVubWFza2VkVmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIHByb2Nlc3NWYWx1ZSA9IG1hc2tlZFZhbHVlLnJlcGxhY2Uob3B0cy5wcmVmaXgsIFwiXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZShvcHRzLnN1ZmZpeCwgXCJcIiksIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMuZ3JvdXBTZXBhcmF0b3IpLCBcImdcIiksIFwiXCIpLCBcbiAgICAgICAgICAgICAgICBcIlwiICE9PSBvcHRzLnBsYWNlaG9sZGVyLmNoYXJBdCgwKSAmJiAocHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChvcHRzLnBsYWNlaG9sZGVyLmNoYXJBdCgwKSwgXCJnXCIpLCBcIjBcIikpLCBcbiAgICAgICAgICAgICAgICBvcHRzLnVubWFza0FzTnVtYmVyID8gKFwiXCIgIT09IG9wdHMucmFkaXhQb2ludCAmJiAtMSAhPT0gcHJvY2Vzc1ZhbHVlLmluZGV4T2Yob3B0cy5yYWRpeFBvaW50KSAmJiAocHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4LmNhbGwodGhpcywgb3B0cy5yYWRpeFBvaW50KSwgXCIuXCIpKSwgXG4gICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChcIl5cIiArIElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KSksIFwiLVwiKSwgXG4gICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5uZWdhdGlvblN5bWJvbC5iYWNrKSArIFwiJFwiKSwgXCJcIiksIFxuICAgICAgICAgICAgICAgIE51bWJlcihwcm9jZXNzVmFsdWUpKSA6IHByb2Nlc3NWYWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0NvbXBsZXRlOiBmdW5jdGlvbihidWZmZXIsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFza2VkVmFsdWUgPSBidWZmZXIuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoYnVmZmVyLnNsaWNlKCkuam9pbihcIlwiKSAhPT0gbWFza2VkVmFsdWUpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICB2YXIgcHJvY2Vzc1ZhbHVlID0gbWFza2VkVmFsdWUucmVwbGFjZShvcHRzLnByZWZpeCwgXCJcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKG9wdHMuc3VmZml4LCBcIlwiKSwgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5ncm91cFNlcGFyYXRvciksIFwiZ1wiKSwgXCJcIiksIFxuICAgICAgICAgICAgICAgIFwiLFwiID09PSBvcHRzLnJhZGl4UG9pbnQgJiYgKHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLnJhZGl4UG9pbnQpLCBcIi5cIikpLCBcbiAgICAgICAgICAgICAgICBpc0Zpbml0ZShwcm9jZXNzVmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQmVmb3JlTWFzazogZnVuY3Rpb24oaW5pdGlhbFZhbHVlLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdHMuaXNOZWdhdGl2ZSA9IHVuZGVmaW5lZCwgaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnRvU3RyaW5nKCkuY2hhckF0KGluaXRpYWxWYWx1ZS5sZW5ndGggLSAxKSA9PT0gb3B0cy5yYWRpeFBvaW50ID8gaW5pdGlhbFZhbHVlLnRvU3RyaW5nKCkuc3Vic3RyKDAsIGluaXRpYWxWYWx1ZS5sZW5ndGggLSAxKSA6IGluaXRpYWxWYWx1ZS50b1N0cmluZygpLCBcbiAgICAgICAgICAgICAgICBcIlwiICE9PSBvcHRzLnJhZGl4UG9pbnQgJiYgaXNGaW5pdGUoaW5pdGlhbFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdnMgPSBpbml0aWFsVmFsdWUuc3BsaXQoXCIuXCIpLCBncm91cFNpemUgPSBcIlwiICE9PSBvcHRzLmdyb3VwU2VwYXJhdG9yID8gcGFyc2VJbnQob3B0cy5ncm91cFNpemUpIDogMDtcbiAgICAgICAgICAgICAgICAgICAgMiA9PT0gdnMubGVuZ3RoICYmICh2c1swXS5sZW5ndGggPiBncm91cFNpemUgfHwgdnNbMV0ubGVuZ3RoID4gZ3JvdXBTaXplIHx8IHZzWzBdLmxlbmd0aCA8PSBncm91cFNpemUgJiYgdnNbMV0ubGVuZ3RoIDwgZ3JvdXBTaXplKSAmJiAoaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnJlcGxhY2UoXCIuXCIsIG9wdHMucmFkaXhQb2ludCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIga29tbWFNYXRjaGVzID0gaW5pdGlhbFZhbHVlLm1hdGNoKC8sL2cpLCBkb3RNYXRjaGVzID0gaW5pdGlhbFZhbHVlLm1hdGNoKC9cXC4vZyk7XG4gICAgICAgICAgICAgICAgaWYgKGRvdE1hdGNoZXMgJiYga29tbWFNYXRjaGVzID8gZG90TWF0Y2hlcy5sZW5ndGggPiBrb21tYU1hdGNoZXMubGVuZ3RoID8gKGluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZS5yZXBsYWNlKC9cXC4vZywgXCJcIiksIFxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZS5yZXBsYWNlKFwiLFwiLCBvcHRzLnJhZGl4UG9pbnQpKSA6IGtvbW1hTWF0Y2hlcy5sZW5ndGggPiBkb3RNYXRjaGVzLmxlbmd0aCA/IChpbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWUucmVwbGFjZSgvLC9nLCBcIlwiKSwgXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnJlcGxhY2UoXCIuXCIsIG9wdHMucmFkaXhQb2ludCkpIDogaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLmluZGV4T2YoXCIuXCIpIDwgaW5pdGlhbFZhbHVlLmluZGV4T2YoXCIsXCIpID8gaW5pdGlhbFZhbHVlLnJlcGxhY2UoL1xcLi9nLCBcIlwiKSA6IGluaXRpYWxWYWx1ZS5yZXBsYWNlKC8sL2csIFwiXCIpIDogaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5ncm91cFNlcGFyYXRvciksIFwiZ1wiKSwgXCJcIiksIFxuICAgICAgICAgICAgICAgIDAgPT09IG9wdHMuZGlnaXRzICYmICgtMSAhPT0gaW5pdGlhbFZhbHVlLmluZGV4T2YoXCIuXCIpID8gaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnN1YnN0cmluZygwLCBpbml0aWFsVmFsdWUuaW5kZXhPZihcIi5cIikpIDogLTEgIT09IGluaXRpYWxWYWx1ZS5pbmRleE9mKFwiLFwiKSAmJiAoaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnN1YnN0cmluZygwLCBpbml0aWFsVmFsdWUuaW5kZXhPZihcIixcIikpKSksIFxuICAgICAgICAgICAgICAgIFwiXCIgIT09IG9wdHMucmFkaXhQb2ludCAmJiBpc0Zpbml0ZShvcHRzLmRpZ2l0cykgJiYgLTEgIT09IGluaXRpYWxWYWx1ZS5pbmRleE9mKG9wdHMucmFkaXhQb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlUGFydHMgPSBpbml0aWFsVmFsdWUuc3BsaXQob3B0cy5yYWRpeFBvaW50KSwgZGVjUGFydCA9IHZhbHVlUGFydHNbMV0ubWF0Y2gobmV3IFJlZ0V4cChcIlxcXFxkKlwiKSlbMF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChvcHRzLmRpZ2l0cykgPCBkZWNQYXJ0LnRvU3RyaW5nKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlnaXRzRmFjdG9yID0gTWF0aC5wb3coMTAsIHBhcnNlSW50KG9wdHMuZGlnaXRzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWUucmVwbGFjZShJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5yYWRpeFBvaW50KSwgXCIuXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IE1hdGgucm91bmQocGFyc2VGbG9hdChpbml0aWFsVmFsdWUpICogZGlnaXRzRmFjdG9yKSAvIGRpZ2l0c0ZhY3RvciwgXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBvcHRzLnJhZGl4UG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpbml0aWFsVmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FuQ2xlYXJQb3NpdGlvbjogZnVuY3Rpb24obWFza3NldCwgcG9zaXRpb24sIGx2cCwgc3RyaWN0LCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZwID0gbWFza3NldC52YWxpZFBvc2l0aW9uc1twb3NpdGlvbl0sIGNhbkNsZWFyID0gdnAuaW5wdXQgIT09IG9wdHMucmFkaXhQb2ludCB8fCBudWxsICE9PSBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc2l0aW9uXS5tYXRjaC5mbiAmJiAhMSA9PT0gb3B0cy5kZWNpbWFsUHJvdGVjdCB8fCB2cC5pbnB1dCA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zaXRpb24gKyAxXSAmJiBudWxsID09PSBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc2l0aW9uICsgMV0ubWF0Y2guZm4gfHwgaXNGaW5pdGUodnAuaW5wdXQpIHx8IHBvc2l0aW9uID09PSBsdnAgfHwgdnAuaW5wdXQgPT09IG9wdHMuZ3JvdXBTZXBhcmF0b3IgfHwgdnAuaW5wdXQgPT09IG9wdHMubmVnYXRpb25TeW1ib2wuZnJvbnQgfHwgdnAuaW5wdXQgPT09IG9wdHMubmVnYXRpb25TeW1ib2wuYmFjaztcbiAgICAgICAgICAgICAgICByZXR1cm4gIWNhbkNsZWFyIHx8IFwiK1wiICE9PSB2cC5tYXRjaC5uYXRpdmVEZWYgJiYgXCItXCIgIT09IHZwLm1hdGNoLm5hdGl2ZURlZiB8fCAob3B0cy5pc05lZ2F0aXZlID0gITEpLCBcbiAgICAgICAgICAgICAgICBjYW5DbGVhcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbktleURvd246IGZ1bmN0aW9uKGUsIGJ1ZmZlciwgY2FyZXRQb3MsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5KSBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBJbnB1dG1hc2sua2V5Q29kZS5VUDpcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbChwYXJzZUZsb2F0KHRoaXMuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKSkgKyBwYXJzZUludChvcHRzLnN0ZXApKSwgJGlucHV0LnRyaWdnZXIoXCJzZXR2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgSW5wdXRtYXNrLmtleUNvZGUuRE9XTjpcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbChwYXJzZUZsb2F0KHRoaXMuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKSkgLSBwYXJzZUludChvcHRzLnN0ZXApKSwgJGlucHV0LnRyaWdnZXIoXCJzZXR2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBwcmVmaXg6IFwiJCBcIixcbiAgICAgICAgICAgIGdyb3VwU2VwYXJhdG9yOiBcIixcIixcbiAgICAgICAgICAgIGFsaWFzOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIjBcIixcbiAgICAgICAgICAgIGF1dG9Hcm91cDogITAsXG4gICAgICAgICAgICBkaWdpdHM6IDIsXG4gICAgICAgICAgICBkaWdpdHNPcHRpb25hbDogITEsXG4gICAgICAgICAgICBjbGVhck1hc2tPbkxvc3RGb2N1czogITFcbiAgICAgICAgfSxcbiAgICAgICAgZGVjaW1hbDoge1xuICAgICAgICAgICAgYWxpYXM6IFwibnVtZXJpY1wiXG4gICAgICAgIH0sXG4gICAgICAgIGludGVnZXI6IHtcbiAgICAgICAgICAgIGFsaWFzOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgIGRpZ2l0czogMCxcbiAgICAgICAgICAgIHJhZGl4UG9pbnQ6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgcGVyY2VudGFnZToge1xuICAgICAgICAgICAgYWxpYXM6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgZGlnaXRzOiAyLFxuICAgICAgICAgICAgZGlnaXRzT3B0aW9uYWw6ICEwLFxuICAgICAgICAgICAgcmFkaXhQb2ludDogXCIuXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCIwXCIsXG4gICAgICAgICAgICBhdXRvR3JvdXA6ICExLFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgICBzdWZmaXg6IFwiICVcIixcbiAgICAgICAgICAgIGFsbG93TWludXM6ICExXG4gICAgICAgIH1cbiAgICB9KSwgSW5wdXRtYXNrO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5udW1lcmljLmV4dGVuc2lvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n* inputmask.phone.extensions.js\n* https://github.com/RobinHerbots/Inputmask\n* Copyright (c) 2010 - 2017 Robin Herbots\n* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)\n* Version: 3.3.8\n*/\n\n!function(factory) {\n     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : \"object\" == typeof exports ? module.exports = factory(require(\"./dependencyLibs/inputmask.dependencyLib\"), require(\"./inputmask\")) : factory(window.dependencyLib || jQuery, window.Inputmask);\n}(function($, Inputmask) {\n    function maskSort(a, b) {\n        var maska = (a.mask || a).replace(/#/g, \"9\").replace(/\\)/, \"9\").replace(/[+()#-]/g, \"\"), maskb = (b.mask || b).replace(/#/g, \"9\").replace(/\\)/, \"9\").replace(/[+()#-]/g, \"\"), maskas = (a.mask || a).split(\"#\")[0], maskbs = (b.mask || b).split(\"#\")[0];\n        return 0 === maskbs.indexOf(maskas) ? -1 : 0 === maskas.indexOf(maskbs) ? 1 : maska.localeCompare(maskb);\n    }\n    var analyseMaskBase = Inputmask.prototype.analyseMask;\n    return Inputmask.prototype.analyseMask = function(mask, regexMask, opts) {\n        function reduceVariations(masks, previousVariation, previousmaskGroup) {\n            previousVariation = previousVariation || \"\", previousmaskGroup = previousmaskGroup || maskGroups, \n            \"\" !== previousVariation && (previousmaskGroup[previousVariation] = {});\n            for (var variation = \"\", maskGroup = previousmaskGroup[previousVariation] || previousmaskGroup, i = masks.length - 1; i >= 0; i--) mask = masks[i].mask || masks[i], \n            variation = mask.substr(0, 1), maskGroup[variation] = maskGroup[variation] || [], \n            maskGroup[variation].unshift(mask.substr(1)), masks.splice(i, 1);\n            for (var ndx in maskGroup) maskGroup[ndx].length > 500 && reduceVariations(maskGroup[ndx].slice(), ndx, maskGroup);\n        }\n        function rebuild(maskGroup) {\n            var mask = \"\", submasks = [];\n            for (var ndx in maskGroup) $.isArray(maskGroup[ndx]) ? 1 === maskGroup[ndx].length ? submasks.push(ndx + maskGroup[ndx]) : submasks.push(ndx + opts.groupmarker.start + maskGroup[ndx].join(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start) + opts.groupmarker.end) : submasks.push(ndx + rebuild(maskGroup[ndx]));\n            return 1 === submasks.length ? mask += submasks[0] : mask += opts.groupmarker.start + submasks.join(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start) + opts.groupmarker.end, \n            mask;\n        }\n        var maskGroups = {};\n        return opts.phoneCodes && (opts.phoneCodes && opts.phoneCodes.length > 1e3 && (mask = mask.substr(1, mask.length - 2), \n        reduceVariations(mask.split(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start)), \n        mask = rebuild(maskGroups)), mask = mask.replace(/9/g, \"\\\\9\")), analyseMaskBase.call(this, mask, regexMask, opts);\n    }, Inputmask.extendAliases({\n        abstractphone: {\n            groupmarker: {\n                start: \"<\",\n                end: \">\"\n            },\n            countrycode: \"\",\n            phoneCodes: [],\n            mask: function(opts) {\n                return opts.definitions = {\n                    \"#\": Inputmask.prototype.definitions[9]\n                }, opts.phoneCodes.sort(maskSort);\n            },\n            keepStatic: !0,\n            onBeforeMask: function(value, opts) {\n                var processedValue = value.replace(/^0{1,2}/, \"\").replace(/[\\s]/g, \"\");\n                return (processedValue.indexOf(opts.countrycode) > 1 || -1 === processedValue.indexOf(opts.countrycode)) && (processedValue = \"+\" + opts.countrycode + processedValue), \n                processedValue;\n            },\n            onUnMask: function(maskedValue, unmaskedValue, opts) {\n                return maskedValue.replace(/[()#-]/g, \"\");\n            },\n            inputmode: \"tel\"\n        }\n    }), Inputmask;\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5waG9uZS5leHRlbnNpb25zLmpzP2ZhYTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGO0FBQ2xGLGlJQUFpSSxRQUFRO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBLHVEQUF1RCxJQUFJO0FBQzNEO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuKiBpbnB1dG1hc2sucGhvbmUuZXh0ZW5zaW9ucy5qc1xuKiBodHRwczovL2dpdGh1Yi5jb20vUm9iaW5IZXJib3RzL0lucHV0bWFza1xuKiBDb3B5cmlnaHQgKGMpIDIwMTAgLSAyMDE3IFJvYmluIEhlcmJvdHNcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocClcbiogVmVyc2lvbjogMy4zLjhcbiovXG5cbiFmdW5jdGlvbihmYWN0b3J5KSB7XG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbIFwiLi9kZXBlbmRlbmN5TGlicy9pbnB1dG1hc2suZGVwZW5kZW5jeUxpYlwiLCBcIi4vaW5wdXRtYXNrXCIgXSwgZmFjdG9yeSkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2RlcGVuZGVuY3lMaWJzL2lucHV0bWFzay5kZXBlbmRlbmN5TGliXCIpLCByZXF1aXJlKFwiLi9pbnB1dG1hc2tcIikpIDogZmFjdG9yeSh3aW5kb3cuZGVwZW5kZW5jeUxpYiB8fCBqUXVlcnksIHdpbmRvdy5JbnB1dG1hc2spO1xufShmdW5jdGlvbigkLCBJbnB1dG1hc2spIHtcbiAgICBmdW5jdGlvbiBtYXNrU29ydChhLCBiKSB7XG4gICAgICAgIHZhciBtYXNrYSA9IChhLm1hc2sgfHwgYSkucmVwbGFjZSgvIy9nLCBcIjlcIikucmVwbGFjZSgvXFwpLywgXCI5XCIpLnJlcGxhY2UoL1srKCkjLV0vZywgXCJcIiksIG1hc2tiID0gKGIubWFzayB8fCBiKS5yZXBsYWNlKC8jL2csIFwiOVwiKS5yZXBsYWNlKC9cXCkvLCBcIjlcIikucmVwbGFjZSgvWysoKSMtXS9nLCBcIlwiKSwgbWFza2FzID0gKGEubWFzayB8fCBhKS5zcGxpdChcIiNcIilbMF0sIG1hc2ticyA9IChiLm1hc2sgfHwgYikuc3BsaXQoXCIjXCIpWzBdO1xuICAgICAgICByZXR1cm4gMCA9PT0gbWFza2JzLmluZGV4T2YobWFza2FzKSA/IC0xIDogMCA9PT0gbWFza2FzLmluZGV4T2YobWFza2JzKSA/IDEgOiBtYXNrYS5sb2NhbGVDb21wYXJlKG1hc2tiKTtcbiAgICB9XG4gICAgdmFyIGFuYWx5c2VNYXNrQmFzZSA9IElucHV0bWFzay5wcm90b3R5cGUuYW5hbHlzZU1hc2s7XG4gICAgcmV0dXJuIElucHV0bWFzay5wcm90b3R5cGUuYW5hbHlzZU1hc2sgPSBmdW5jdGlvbihtYXNrLCByZWdleE1hc2ssIG9wdHMpIHtcbiAgICAgICAgZnVuY3Rpb24gcmVkdWNlVmFyaWF0aW9ucyhtYXNrcywgcHJldmlvdXNWYXJpYXRpb24sIHByZXZpb3VzbWFza0dyb3VwKSB7XG4gICAgICAgICAgICBwcmV2aW91c1ZhcmlhdGlvbiA9IHByZXZpb3VzVmFyaWF0aW9uIHx8IFwiXCIsIHByZXZpb3VzbWFza0dyb3VwID0gcHJldmlvdXNtYXNrR3JvdXAgfHwgbWFza0dyb3VwcywgXG4gICAgICAgICAgICBcIlwiICE9PSBwcmV2aW91c1ZhcmlhdGlvbiAmJiAocHJldmlvdXNtYXNrR3JvdXBbcHJldmlvdXNWYXJpYXRpb25dID0ge30pO1xuICAgICAgICAgICAgZm9yICh2YXIgdmFyaWF0aW9uID0gXCJcIiwgbWFza0dyb3VwID0gcHJldmlvdXNtYXNrR3JvdXBbcHJldmlvdXNWYXJpYXRpb25dIHx8IHByZXZpb3VzbWFza0dyb3VwLCBpID0gbWFza3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIG1hc2sgPSBtYXNrc1tpXS5tYXNrIHx8IG1hc2tzW2ldLCBcbiAgICAgICAgICAgIHZhcmlhdGlvbiA9IG1hc2suc3Vic3RyKDAsIDEpLCBtYXNrR3JvdXBbdmFyaWF0aW9uXSA9IG1hc2tHcm91cFt2YXJpYXRpb25dIHx8IFtdLCBcbiAgICAgICAgICAgIG1hc2tHcm91cFt2YXJpYXRpb25dLnVuc2hpZnQobWFzay5zdWJzdHIoMSkpLCBtYXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBmb3IgKHZhciBuZHggaW4gbWFza0dyb3VwKSBtYXNrR3JvdXBbbmR4XS5sZW5ndGggPiA1MDAgJiYgcmVkdWNlVmFyaWF0aW9ucyhtYXNrR3JvdXBbbmR4XS5zbGljZSgpLCBuZHgsIG1hc2tHcm91cCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVidWlsZChtYXNrR3JvdXApIHtcbiAgICAgICAgICAgIHZhciBtYXNrID0gXCJcIiwgc3VibWFza3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIG5keCBpbiBtYXNrR3JvdXApICQuaXNBcnJheShtYXNrR3JvdXBbbmR4XSkgPyAxID09PSBtYXNrR3JvdXBbbmR4XS5sZW5ndGggPyBzdWJtYXNrcy5wdXNoKG5keCArIG1hc2tHcm91cFtuZHhdKSA6IHN1Ym1hc2tzLnB1c2gobmR4ICsgb3B0cy5ncm91cG1hcmtlci5zdGFydCArIG1hc2tHcm91cFtuZHhdLmpvaW4ob3B0cy5ncm91cG1hcmtlci5lbmQgKyBvcHRzLmFsdGVybmF0b3JtYXJrZXIgKyBvcHRzLmdyb3VwbWFya2VyLnN0YXJ0KSArIG9wdHMuZ3JvdXBtYXJrZXIuZW5kKSA6IHN1Ym1hc2tzLnB1c2gobmR4ICsgcmVidWlsZChtYXNrR3JvdXBbbmR4XSkpO1xuICAgICAgICAgICAgcmV0dXJuIDEgPT09IHN1Ym1hc2tzLmxlbmd0aCA/IG1hc2sgKz0gc3VibWFza3NbMF0gOiBtYXNrICs9IG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQgKyBzdWJtYXNrcy5qb2luKG9wdHMuZ3JvdXBtYXJrZXIuZW5kICsgb3B0cy5hbHRlcm5hdG9ybWFya2VyICsgb3B0cy5ncm91cG1hcmtlci5zdGFydCkgKyBvcHRzLmdyb3VwbWFya2VyLmVuZCwgXG4gICAgICAgICAgICBtYXNrO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtYXNrR3JvdXBzID0ge307XG4gICAgICAgIHJldHVybiBvcHRzLnBob25lQ29kZXMgJiYgKG9wdHMucGhvbmVDb2RlcyAmJiBvcHRzLnBob25lQ29kZXMubGVuZ3RoID4gMWUzICYmIChtYXNrID0gbWFzay5zdWJzdHIoMSwgbWFzay5sZW5ndGggLSAyKSwgXG4gICAgICAgIHJlZHVjZVZhcmlhdGlvbnMobWFzay5zcGxpdChvcHRzLmdyb3VwbWFya2VyLmVuZCArIG9wdHMuYWx0ZXJuYXRvcm1hcmtlciArIG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQpKSwgXG4gICAgICAgIG1hc2sgPSByZWJ1aWxkKG1hc2tHcm91cHMpKSwgbWFzayA9IG1hc2sucmVwbGFjZSgvOS9nLCBcIlxcXFw5XCIpKSwgYW5hbHlzZU1hc2tCYXNlLmNhbGwodGhpcywgbWFzaywgcmVnZXhNYXNrLCBvcHRzKTtcbiAgICB9LCBJbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgICAgIGFic3RyYWN0cGhvbmU6IHtcbiAgICAgICAgICAgIGdyb3VwbWFya2VyOiB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwiPFwiLFxuICAgICAgICAgICAgICAgIGVuZDogXCI+XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb3VudHJ5Y29kZTogXCJcIixcbiAgICAgICAgICAgIHBob25lQ29kZXM6IFtdLFxuICAgICAgICAgICAgbWFzazogZnVuY3Rpb24ob3B0cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHRzLmRlZmluaXRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBcIiNcIjogSW5wdXRtYXNrLnByb3RvdHlwZS5kZWZpbml0aW9uc1s5XVxuICAgICAgICAgICAgICAgIH0sIG9wdHMucGhvbmVDb2Rlcy5zb3J0KG1hc2tTb3J0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBrZWVwU3RhdGljOiAhMCxcbiAgICAgICAgICAgIG9uQmVmb3JlTWFzazogZnVuY3Rpb24odmFsdWUsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvY2Vzc2VkVmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9eMHsxLDJ9LywgXCJcIikucmVwbGFjZSgvW1xcc10vZywgXCJcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChwcm9jZXNzZWRWYWx1ZS5pbmRleE9mKG9wdHMuY291bnRyeWNvZGUpID4gMSB8fCAtMSA9PT0gcHJvY2Vzc2VkVmFsdWUuaW5kZXhPZihvcHRzLmNvdW50cnljb2RlKSkgJiYgKHByb2Nlc3NlZFZhbHVlID0gXCIrXCIgKyBvcHRzLmNvdW50cnljb2RlICsgcHJvY2Vzc2VkVmFsdWUpLCBcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRWYWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblVuTWFzazogZnVuY3Rpb24obWFza2VkVmFsdWUsIHVubWFza2VkVmFsdWUsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFza2VkVmFsdWUucmVwbGFjZSgvWygpIy1dL2csIFwiXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0bW9kZTogXCJ0ZWxcIlxuICAgICAgICB9XG4gICAgfSksIElucHV0bWFzaztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lucHV0bWFzay9kaXN0L2lucHV0bWFzay9pbnB1dG1hc2sucGhvbmUuZXh0ZW5zaW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ })
/******/ ]);

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavbarComponent.vue?vue&type=template&id=485090b2&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=template&id=485090b2&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "header",
    {
      staticClass: "header-area header-area-2",
      class:
        _vm.data.currentPage === _vm.data.domain
          ? "header-area-4"
          : "header-area-2"
    },
    [
      _c("div", { staticClass: "header-top pl-30 pr-30 white-bg" }, [
        _c("div", { staticClass: "row align-items-center" }, [
          _c("div", { staticClass: "col-md-6 col-sm-7" }, [
            _c(
              "div",
              { staticClass: "header-left-side text-center text-sm-left" },
              [
                _c("ul", [
                  _c("li", [
                    _c("a", { attrs: { href: "mailto:" + _vm.data.email } }, [
                      _c("i", { staticClass: "fal fa-envelope" }),
                      _vm._v(" " + _vm._s(_vm.data.email))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "tel:" + _vm.data.phone } }, [
                      _c("i", { staticClass: "fal fa-phone" }),
                      _vm._v(_vm._s(_vm.data.phone))
                    ])
                  ])
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6 col-sm-5" }, [
            _c(
              "div",
              { staticClass: "header-right-social text-center text-sm-right" },
              [
                _c(
                  "ul",
                  _vm._l(_vm.data.socialNetworks, function(network) {
                    return _c("li", { key: network.key }, [
                      _c(
                        "a",
                        {
                          attrs: {
                            target: "_blank",
                            href: network.attributes.link
                          }
                        },
                        [
                          _c("i", {
                            class: "fab " + network.attributes.network
                          })
                        ]
                      )
                    ])
                  }),
                  0
                )
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "header-nav" }, [
        _c("div", { staticClass: "navigation" }, [
          _c("nav", { staticClass: "navbar navbar-expand-lg navbar-light " }, [
            _c("a", { staticClass: "navbar-brand", attrs: { href: "/" } }, [
              _c("img", { attrs: { src: _vm.data.logo, alt: "" } })
            ]),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "collapse navbar-collapse sub-menu-bar",
                attrs: { id: "navbarSupportedContent" }
              },
              [
                _c(
                  "ul",
                  { staticClass: "navbar-nav ml-auto" },
                  _vm._l(_vm.routes, function(route) {
                    return _c(
                      "li",
                      {
                        key: route.id,
                        staticClass: "nav-item",
                        class: route.active ? "active" : ""
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "nav-link",
                            attrs: { href: route.link }
                          },
                          [_vm._v(_vm._s(route.title))]
                        ),
                        _vm._v(" "),
                        route.children
                          ? _c(
                              "ul",
                              { staticClass: "sub-menu" },
                              _vm._l(route.children, function(child) {
                                return _c("li", { key: child.id }, [
                                  _c(
                                    "a",
                                    {
                                      class: child.active
                                        ? "sub-menu-active"
                                        : "",
                                      attrs: { href: child.link }
                                    },
                                    [_vm._v(_vm._s(child.title))]
                                  )
                                ])
                              }),
                              0
                            )
                          : _vm._e()
                      ]
                    )
                  }),
                  0
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "navbar-btn mr-100" }, [
              _c(
                "a",
                {
                  staticClass: "main-btn",
                  attrs: { href: _vm.data.cabinet.url }
                },
                [
                  _vm._v(
                    "\n              " + _vm._s(_vm.data.cabinet.title) + "\n"
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "ul",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.data.cabinet.loggedIn,
                    expression: "data.cabinet.loggedIn"
                  }
                ],
                staticClass: "navbar-nav ml-auto"
              },
              [
                _c("li", { staticClass: "nav-item" }, [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link",
                      attrs: {
                        href: _vm.data.cabinet.logoutUrl,
                        onclick:
                          "event.preventDefault(); document.getElementById('logout-form').submit();"
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.data.cabinet.logoutTitle) +
                          "\n              "
                      )
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "country-flag d-none d-lg-block ml-3" }, [
              _c("a", { attrs: { href: _vm.locale.link } }, [
                _c("img", { attrs: { src: _vm.locale.img, alt: "flag" } })
              ])
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }
      },
      [
        _c("span", { staticClass: "toggler-icon" }),
        _vm._v(" "),
        _c("span", { staticClass: "toggler-icon" }),
        _vm._v(" "),
        _c("span", { staticClass: "toggler-icon" })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PageBannerComponent.vue?vue&type=template&id=24975cf2&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PageBannerComponent.vue?vue&type=template&id=24975cf2&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "page-title-area",
      staticStyle: { "margin-bottom": "50px" }
    },
    [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-12" }, [
            _c("div", { staticClass: "page-title-item text-center" }, [
              _c("h2", { staticClass: "title" }, [_vm._v(_vm._s(_vm.title))]),
              _vm._v(" "),
              _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
                _c("ol", { staticClass: "breadcrumb" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "breadcrumb-item active",
                      attrs: { "aria-current": "page" }
                    },
                    [_vm._v(_vm._s(_vm.title))]
                  )
                ])
              ])
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "breadcrumb-item" }, [
      _c("a", { attrs: { href: "/" } }, [_vm._v("Home")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Timer.vue?vue&type=template&id=54f9552c&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Timer.vue?vue&type=template&id=54f9552c&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "timer" }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.statusType !== "expired",
            expression: "statusType !== 'expired'"
          }
        ]
      },
      [
        _c("div", { staticClass: "day" }, [
          _c("span", { staticClass: "number" }, [_vm._v(_vm._s(_vm.days))]),
          _vm._v(" "),
          _c("div", { staticClass: "format" }, [
            _vm._v(_vm._s(_vm.wordString.day))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "hour" }, [
          _c("span", { staticClass: "number" }, [_vm._v(_vm._s(_vm.hours))]),
          _vm._v(" "),
          _c("div", { staticClass: "format" }, [
            _vm._v(_vm._s(_vm.wordString.hours))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "min" }, [
          _c("span", { staticClass: "number" }, [_vm._v(_vm._s(_vm.minutes))]),
          _vm._v(" "),
          _c("div", { staticClass: "format" }, [
            _vm._v(_vm._s(_vm.wordString.minutes))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "sec" }, [
          _c("span", { staticClass: "number" }, [_vm._v(_vm._s(_vm.seconds))]),
          _vm._v(" "),
          _c("div", { staticClass: "format" }, [
            _vm._v(_vm._s(_vm.wordString.seconds))
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "message" }, [_vm._v(_vm._s(_vm.message))]),
    _vm._v(" "),
    _c("div", { staticClass: "status-tag", class: _vm.statusType }, [
      _vm._v(_vm._s(_vm.statusText))
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.common.dev.js":
/*!*************************************************!*\
  !*** ./node_modules/vue/dist/vue.common.dev.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (!config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (!isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if (isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  }
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
      warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (!config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if (!(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */



/* eslint-disable no-unused-vars */
function baseWarn (msg, range) {
  console.error(("[Vue compiler]: " + msg));
}
/* eslint-enable no-unused-vars */

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value, range, dynamic) {
  (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

function addAttr (el, name, value, range, dynamic) {
  var attrs = dynamic
    ? (el.dynamicAttrs || (el.dynamicAttrs = []))
    : (el.attrs || (el.attrs = []));
  attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value, range) {
  el.attrsMap[name] = value;
  el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  isDynamicArg,
  modifiers,
  range
) {
  (el.directives || (el.directives = [])).push(rangeSetItem({
    name: name,
    rawName: rawName,
    value: value,
    arg: arg,
    isDynamicArg: isDynamicArg,
    modifiers: modifiers
  }, range));
  el.plain = false;
}

function prependModifierMarker (symbol, name, dynamic) {
  return dynamic
    ? ("_p(" + name + ",\"" + symbol + "\")")
    : symbol + name // mark the event as captured
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn,
  range,
  dynamic
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.',
      range
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (modifiers.right) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
    } else if (name === 'click') {
      name = 'contextmenu';
      delete modifiers.right;
    }
  } else if (modifiers.middle) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
    } else if (name === 'click') {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = prependModifierMarker('!', name, dynamic);
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = prependModifierMarker('~', name, dynamic);
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = prependModifierMarker('&', name, dynamic);
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getRawBindingAttr (
  el,
  name
) {
  return el.rawAttrsMap[':' + name] ||
    el.rawAttrsMap['v-bind:' + name] ||
    el.rawAttrsMap[name]
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

function getAndRemoveAttrByRegex (
  el,
  name
) {
  var list = el.attrsList;
  for (var i = 0, l = list.length; i < l; i++) {
    var attr = list[i];
    if (name.test(attr.name)) {
      list.splice(i, 1);
      return attr
    }
  }
}

function rangeSetItem (
  item,
  range
) {
  if (range) {
    if (range.start != null) {
      item.start = range.start;
    }
    if (range.end != null) {
      item.end = range.end;
    }
  }
  return item
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead.",
        el.rawAttrsMap['v-model']
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.',
      el.rawAttrsMap['v-model']
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally',
        el.rawAttrsMap[binding]
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.',
        el.rawAttrsMap['class']
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.',
          el.rawAttrsMap['style']
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being passed as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t',
  '&#39;': "'"
};
var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
      }

      if (textEnd < 0) {
        text = html;
      }

      if (text) {
        advance(text.length);
      }

      if (options.chars && text) {
        options.chars(text, index - text.length, index);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (!stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
        attr.start = index;
        advance(attr[0].length);
        attr.end = index;
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
      if (options.outputSourceRange) {
        attrs[i].start = args.start + args[0].match(/^\s*/).length;
        attrs[i].end = args.end;
      }
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (i > pos || !tagName &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag."),
            { start: stack[i].start, end: stack[i].end }
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:|^#/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
var dynamicArgRE = /^\[.*\]$/;

var argRE = /:(.*)$/;
var bindRE = /^:|^\.|^v-bind:/;
var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

var slotRE = /^v-slot(:|$)|^#/;

var lineBreakRE = /[\r\n]/;
var whitespaceRE$1 = /\s+/g;

var invalidAttributeRE = /[\s"'<>\/=]/;

var decodeHTMLCached = cached(he.decode);

var emptySlotScopeToken = "_empty_";

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;
var maybeComponent;

function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    rawAttrsMap: {},
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;
  var isReservedTag = options.isReservedTag || no;
  maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var whitespaceOption = options.whitespace;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg, range) {
    if (!warned) {
      warned = true;
      warn$2(msg, range);
    }
  }

  function closeElement (element) {
    trimEndingWhitespace(element);
    if (!inVPre && !element.processed) {
      element = processElement(element, options);
    }
    // tree management
    if (!stack.length && element !== root) {
      // allow root elements with v-if, v-else-if and v-else
      if (root.if && (element.elseif || element.else)) {
        {
          checkRootConstraints(element);
        }
        addIfCondition(root, {
          exp: element.elseif,
          block: element
        });
      } else {
        warnOnce(
          "Component template should contain exactly one root element. " +
          "If you are using v-if on multiple elements, " +
          "use v-else-if to chain them instead.",
          { start: element.start }
        );
      }
    }
    if (currentParent && !element.forbidden) {
      if (element.elseif || element.else) {
        processIfConditions(element, currentParent);
      } else {
        if (element.slotScope) {
          // scoped slot
          // keep it in the children list so that v-else(-if) conditions can
          // find it as the prev node.
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        }
        currentParent.children.push(element);
        element.parent = currentParent;
      }
    }

    // final children cleanup
    // filter out scoped slots
    element.children = element.children.filter(function (c) { return !(c).slotScope; });
    // remove trailing whitespace node again
    trimEndingWhitespace(element);

    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  function trimEndingWhitespace (el) {
    // remove trailing whitespace node
    if (!inPre) {
      var lastNode;
      while (
        (lastNode = el.children[el.children.length - 1]) &&
        lastNode.type === 3 &&
        lastNode.text === ' '
      ) {
        el.children.pop();
      }
    }
  }

  function checkRootConstraints (el) {
    if (el.tag === 'slot' || el.tag === 'template') {
      warnOnce(
        "Cannot use <" + (el.tag) + "> as component root element because it may " +
        'contain multiple nodes.',
        { start: el.start }
      );
    }
    if (el.attrsMap.hasOwnProperty('v-for')) {
      warnOnce(
        'Cannot use v-for on stateful component root element because ' +
        'it renders multiple elements.',
        el.rawAttrsMap['v-for']
      );
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    outputSourceRange: options.outputSourceRange,
    start: function start (tag, attrs, unary, start$1, end) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      {
        if (options.outputSourceRange) {
          element.start = start$1;
          element.end = end;
          element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
            cumulated[attr.name] = attr;
            return cumulated
          }, {});
        }
        attrs.forEach(function (attr) {
          if (invalidAttributeRE.test(attr.name)) {
            warn$2(
              "Invalid dynamic argument expression: attribute names cannot contain " +
              "spaces, quotes, <, >, / or =.",
              {
                start: attr.start + attr.name.indexOf("["),
                end: attr.start + attr.name.length
              }
            );
          }
        });
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.',
          { start: element.start }
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
      }

      if (!root) {
        root = element;
        {
          checkRootConstraints(root);
        }
      }

      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end (tag, start, end$1) {
      var element = stack[stack.length - 1];
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      if (options.outputSourceRange) {
        element.end = end$1;
      }
      closeElement(element);
    },

    chars: function chars (text, start, end) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.',
              { start: start }
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored."),
              { start: start }
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      if (inPre || text.trim()) {
        text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
      } else if (!children.length) {
        // remove the whitespace-only node right after an opening tag
        text = '';
      } else if (whitespaceOption) {
        if (whitespaceOption === 'condense') {
          // in condense mode, remove the whitespace node if it contains
          // line break, otherwise condense to a single space
          text = lineBreakRE.test(text) ? '' : ' ';
        } else {
          text = ' ';
        }
      } else {
        text = preserveWhitespace ? ' ' : '';
      }
      if (text) {
        if (!inPre && whitespaceOption === 'condense') {
          // condense consecutive whitespaces into single space
          text = text.replace(whitespaceRE$1, ' ');
        }
        var res;
        var child;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          child = {
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          };
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          child = {
            type: 3,
            text: text
          };
        }
        if (child) {
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          children.push(child);
        }
      }
    },
    comment: function comment (text, start, end) {
      // adding anyting as a sibling to the root node is forbidden
      // comments should still be allowed, but ignored
      if (currentParent) {
        var child = {
          type: 3,
          text: text,
          isComment: true
        };
        if (options.outputSourceRange) {
          child.start = start;
          child.end = end;
        }
        currentParent.children.push(child);
      }
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var list = el.attrsList;
  var len = list.length;
  if (len) {
    var attrs = el.attrs = new Array(len);
    for (var i = 0; i < len; i++) {
      attrs[i] = {
        name: list[i].name,
        value: JSON.stringify(list[i].value)
      };
      if (list[i].start != null) {
        attrs[i].start = list[i].start;
        attrs[i].end = list[i].end;
      }
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (
  element,
  options
) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = (
    !element.key &&
    !element.scopedSlots &&
    !element.attrsList.length
  );

  processRef(element);
  processSlotContent(element);
  processSlotOutlet(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
  return element
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    {
      if (el.tag === 'template') {
        warn$2(
          "<template> cannot be keyed. Place the key on real elements instead.",
          getRawBindingAttr(el, 'key')
        );
      }
      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;
        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2(
            "Do not use v-for index as key on <transition-group> children, " +
            "this is the same as not using keys.",
            getRawBindingAttr(el, 'key'),
            true /* tip */
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else {
      warn$2(
        ("Invalid v-for expression: " + exp),
        el.rawAttrsMap['v-for']
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if.",
      el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored.",
          children[i]
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

// handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">
function processSlotContent (el) {
  var slotScope;
  if (el.tag === 'template') {
    slotScope = getAndRemoveAttr(el, 'scope');
    /* istanbul ignore if */
    if (slotScope) {
      warn$2(
        "the \"scope\" attribute for scoped slots have been deprecated and " +
        "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
        "can also be used on plain elements in addition to <template> to " +
        "denote scoped slots.",
        el.rawAttrsMap['scope'],
        true
      );
    }
    el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
  } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
    /* istanbul ignore if */
    if (el.attrsMap['v-for']) {
      warn$2(
        "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
        "(v-for takes higher priority). Use a wrapper <template> for the " +
        "scoped slot to make it clearer.",
        el.rawAttrsMap['slot-scope'],
        true
      );
    }
    el.slotScope = slotScope;
  }

  // slot="xxx"
  var slotTarget = getBindingAttr(el, 'slot');
  if (slotTarget) {
    el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
    // preserve slot as an attribute for native shadow DOM compat
    // only for non-scoped slots.
    if (el.tag !== 'template' && !el.slotScope) {
      addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
    }
  }

  // 2.6 v-slot syntax
  {
    if (el.tag === 'template') {
      // v-slot on <template>
      var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding) {
        {
          if (el.slotTarget || el.slotScope) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.parent && !maybeComponent(el.parent)) {
            warn$2(
              "<template v-slot> can only appear at the root level inside " +
              "the receiving component",
              el
            );
          }
        }
        var ref = getSlotName(slotBinding);
        var name = ref.name;
        var dynamic = ref.dynamic;
        el.slotTarget = name;
        el.slotTargetDynamic = dynamic;
        el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
      }
    } else {
      // v-slot on component, denotes default slot
      var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding$1) {
        {
          if (!maybeComponent(el)) {
            warn$2(
              "v-slot can only be used on components or <template>.",
              slotBinding$1
            );
          }
          if (el.slotScope || el.slotTarget) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.scopedSlots) {
            warn$2(
              "To avoid scope ambiguity, the default slot should also use " +
              "<template> syntax when there are other named slots.",
              slotBinding$1
            );
          }
        }
        // add the component's children to its default slot
        var slots = el.scopedSlots || (el.scopedSlots = {});
        var ref$1 = getSlotName(slotBinding$1);
        var name$1 = ref$1.name;
        var dynamic$1 = ref$1.dynamic;
        var slotContainer = slots[name$1] = createASTElement('template', [], el);
        slotContainer.slotTarget = name$1;
        slotContainer.slotTargetDynamic = dynamic$1;
        slotContainer.children = el.children.filter(function (c) {
          if (!c.slotScope) {
            c.parent = slotContainer;
            return true
          }
        });
        slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
        // remove children as they are returned from scopedSlots now
        el.children = [];
        // mark el non-plain so data gets generated
        el.plain = false;
      }
    }
  }
}

function getSlotName (binding) {
  var name = binding.name.replace(slotRE, '');
  if (!name) {
    if (binding.name[0] !== '#') {
      name = 'default';
    } else {
      warn$2(
        "v-slot shorthand syntax requires a slot name.",
        binding
      );
    }
  }
  return dynamicArgRE.test(name)
    // dynamic [name]
    ? { name: name.slice(1, -1), dynamic: true }
    // static name
    : { name: ("\"" + name + "\""), dynamic: false }
}

// handle <slot/> outlets
function processSlotOutlet (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead.",
        getRawBindingAttr(el, 'key')
      );
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name.replace(dirRE, ''));
      // support .foo shorthand syntax for the .prop modifier
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        if (
          value.trim().length === 0
        ) {
          warn$2(
            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
          );
        }
        if (modifiers) {
          if (modifiers.prop && !isDynamic) {
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel && !isDynamic) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            syncGen = genAssignmentCode(value, "$event");
            if (!isDynamic) {
              addHandler(
                el,
                ("update:" + (camelize(name))),
                syncGen,
                null,
                false,
                warn$2,
                list[i]
              );
              if (hyphenate(name) !== camelize(name)) {
                addHandler(
                  el,
                  ("update:" + (hyphenate(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
              }
            } else {
              // handler w/ dynamic event name
              addHandler(
                el,
                ("\"update:\"+(" + name + ")"),
                syncGen,
                null,
                false,
                warn$2,
                list[i],
                true // dynamic
              );
            }
          }
        }
        if ((modifiers && modifiers.prop) || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value, list[i], isDynamic);
        } else {
          addAttr(el, name, value, list[i], isDynamic);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        isDynamic = false;
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
          if (dynamicArgRE.test(arg)) {
            arg = arg.slice(1, -1);
            isDynamic = true;
          }
        }
        addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
        if (name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.',
            list[i]
          );
        }
      }
      addAttr(el, name, JSON.stringify(value), list[i]);
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true', list[i]);
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead.",
        el.rawAttrsMap['v-model']
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
var fnInvokeRE = /\([^)]*?\);*$/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var prefix = isNative ? 'nativeOn:' : 'on:';
  var staticHandlers = "";
  var dynamicHandlers = "";
  for (var name in events) {
    var handlerCode = genHandler(events[name]);
    if (events[name] && events[name].dynamic) {
      dynamicHandlers += name + "," + handlerCode + ",";
    } else {
      staticHandlers += "\"" + name + "\":" + handlerCode + ",";
    }
  }
  staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
  if (dynamicHandlers) {
    return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
  } else {
    return prefix + staticHandlers
  }
}

function genHandler (handler) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);
  var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : isFunctionInvocation
          ? ("return " + (handler.value))
          : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return (
    // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" +
    (keys.map(genFilterCode).join('&&')) + ")return null;"
  )
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      state.warn(
        "v-once can only be used inside v-for that is keyed. ",
        el.rawAttrsMap['v-once']
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      el.rawAttrsMap['v-for'],
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:" + (genProps(el.attrs)) + ",";
  }
  // DOM props
  if (el.props) {
    data += "domProps:" + (genProps(el.props)) + ",";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind dynamic argument wrap
  // v-bind with dynamic arguments must be applied using the same v-bind object
  // merge helper so that class/style/mustUseProp attrs are handled correctly.
  if (el.dynamicAttrs) {
    data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
  }
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (el.children.length !== 1 || ast.type !== 1) {
    state.warn(
      'Inline-template components must have exactly one child element.',
      { start: el.start }
    );
  }
  if (ast && ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  el,
  slots,
  state
) {
  // by default scoped slots are considered "stable", this allows child
  // components with only scoped slots to skip forced updates from parent.
  // but in some cases we have to bail-out of this optimization
  // for example if the slot contains dynamic names, has v-if or v-for on them...
  var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
    var slot = slots[key];
    return (
      slot.slotTargetDynamic ||
      slot.if ||
      slot.for ||
      containsSlotChild(slot) // is passing down slot from parent which may be dynamic
    )
  });

  // #9534: if a component with scoped slots is inside a conditional branch,
  // it's possible for the same component to be reused but with different
  // compiled slot content. To avoid that, we generate a unique key based on
  // the generated code of all the slot contents.
  var needsKey = !!el.if;

  // OR when it is inside another scoped slot or v-for (the reactivity may be
  // disconnected due to the intermediate scope variable)
  // #9438, #9506
  // TODO: this can be further optimized by properly analyzing in-scope bindings
  // and skip force updating ones that do not actually use scope variables.
  if (!needsForceUpdate) {
    var parent = el.parent;
    while (parent) {
      if (
        (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
        parent.for
      ) {
        needsForceUpdate = true;
        break
      }
      if (parent.if) {
        needsKey = true;
      }
      parent = parent.parent;
    }
  }

  var generatedSlots = Object.keys(slots)
    .map(function (key) { return genScopedSlot(slots[key], state); })
    .join(',');

  return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
}

function hash(str) {
  var hash = 5381;
  var i = str.length;
  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return hash >>> 0
}

function containsSlotChild (el) {
  if (el.type === 1) {
    if (el.tag === 'slot') {
      return true
    }
    return el.children.some(containsSlotChild)
  }
  return false
}

function genScopedSlot (
  el,
  state
) {
  var isLegacySyntax = el.attrsMap['slot-scope'];
  if (el.if && !el.ifProcessed && !isLegacySyntax) {
    return genIf(el, state, genScopedSlot, "null")
  }
  if (el.for && !el.forProcessed) {
    return genFor(el, state, genScopedSlot)
  }
  var slotScope = el.slotScope === emptySlotScopeToken
    ? ""
    : String(el.slotScope);
  var fn = "function(" + slotScope + "){" +
    "return " + (el.tag === 'template'
      ? el.if && isLegacySyntax
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  // reverse proxy v-slot without scope on this.$slots
  var reverseProxy = slotScope ? "" : ",proxy:true";
  return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs || el.dynamicAttrs
    ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
        // slot props are camelized
        name: camelize(attr.name),
        value: attr.value,
        dynamic: attr.dynamic
      }); }))
    : null;
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var staticProps = "";
  var dynamicProps = "";
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    var value = transformSpecialNewlines(prop.value);
    if (prop.dynamic) {
      dynamicProps += (prop.name) + "," + value + ",";
    } else {
      staticProps += "\"" + (prop.name) + "\":" + value + ",";
    }
  }
  staticProps = "{" + (staticProps.slice(0, -1)) + "}";
  if (dynamicProps) {
    return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
  } else {
    return staticProps
  }
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */



// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast, warn) {
  if (ast) {
    checkNode(ast, warn);
  }
}

function checkNode (node, warn) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          var range = node.rawAttrsMap[name];
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), warn, range);
          } else if (name === 'v-slot' || name[0] === '#') {
            checkFunctionParameterExpression(value, (name + "=\"" + value + "\""), warn, range);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), warn, range);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), warn, range);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], warn);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, warn, node);
  }
}

function checkEvent (exp, text, warn, range) {
  var stripped = exp.replace(stripStringRE, '');
  var keywordMatch = stripped.match(unaryOperatorsRE);
  if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
    warn(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
      range
    );
  }
  checkExpression(exp, text, warn, range);
}

function checkFor (node, text, warn, range) {
  checkExpression(node.for || '', text, warn, range);
  checkIdentifier(node.alias, 'v-for alias', text, warn, range);
  checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
  checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
}

function checkIdentifier (
  ident,
  type,
  text,
  warn,
  range
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
    }
  }
}

function checkExpression (exp, text, warn, range) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      warn(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
        range
      );
    } else {
      warn(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n",
        range
      );
    }
  }
}

function checkFunctionParameterExpression (exp, text, warn, range) {
  try {
    new Function(exp, '');
  } catch (e) {
    warn(
      "invalid function parameter expression: " + (e.message) + " in\n\n" +
      "    " + exp + "\n\n" +
      "  Raw expression: " + (text.trim()) + "\n",
      range
    );
  }
}

/*  */

var range = 2;

function generateCodeFrame (
  source,
  start,
  end
) {
  if ( start === void 0 ) start = 0;
  if ( end === void 0 ) end = source.length;

  var lines = source.split(/\r?\n/);
  var count = 0;
  var res = [];
  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) { continue }
        res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
        var lineLength = lines[j].length;
        if (j === i) {
          // push underline
          var pad = start - (count - lineLength) + 1;
          var length = end > count ? lineLength - pad : end - start;
          res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
        } else if (j > i) {
          if (end > count) {
            var length$1 = Math.min(end - count, lineLength);
            res.push("   |  " + repeat$1("^", length$1));
          }
          count += lineLength + 1;
        }
      }
      break
    }
  }
  return res.join('\n')
}

function repeat$1 (str, n) {
  var result = '';
  if (n > 0) {
    while (true) { // eslint-disable-line
      if (n & 1) { result += str; }
      n >>>= 1;
      if (n <= 0) { break }
      str += str;
    }
  }
  return result
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        if (options.outputSourceRange) {
          compiled.errors.forEach(function (e) {
            warn$$1(
              "Error compiling template:\n\n" + (e.msg) + "\n\n" +
              generateCodeFrame(template, e.start, e.end),
              vm
            );
          });
        } else {
          warn$$1(
            "Error compiling template:\n\n" + template + "\n\n" +
            compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
            vm
          );
        }
      }
      if (compiled.tips && compiled.tips.length) {
        if (options.outputSourceRange) {
          compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
        } else {
          compiled.tips.forEach(function (msg) { return tip(msg, vm); });
        }
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];

      var warn = function (msg, range, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        if (options.outputSourceRange) {
          // $flow-disable-line
          var leadingSpaceLength = template.match(/^\s*/)[0].length;

          warn = function (msg, range, tip) {
            var data = { msg: msg };
            if (range) {
              if (range.start != null) {
                data.start = range.start + leadingSpaceLength;
              }
              if (range.end != null) {
                data.end = range.end + leadingSpaceLength;
              }
            }
            (tip ? tips : errors).push(data);
          };
        }
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      finalOptions.warn = warn;

      var compiled = baseCompile(template.trim(), finalOptions);
      {
        detectErrors(compiled.ast, warn);
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (!template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        outputSourceRange: "development" !== 'production',
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./vue.common.dev.js */ "./node_modules/vue/dist/vue.common.dev.js")
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
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

/***/ "./resources/js sync recursive \\.vue$/":
/*!***********************************!*\
  !*** ./resources/js sync \.vue$/ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/NavbarComponent.vue": "./resources/js/components/NavbarComponent.vue",
	"./components/PageBannerComponent.vue": "./resources/js/components/PageBannerComponent.vue",
	"./components/Timer.vue": "./resources/js/components/Timer.vue"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js sync recursive \\.vue$/";

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
// require('./bootstrap');


var VueInputMask = __webpack_require__(/*! vue-inputmask */ "./node_modules/vue-inputmask/dist/vue-inputmask.js")["default"];

vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(VueInputMask);
window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

var files = __webpack_require__("./resources/js sync recursive \\.vue$/");

files.keys().map(function (key) {
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.component(key.split('/').pop().split('.')[0], files(key)["default"]);
}); // Vue.component('passport-clients', require('./components/passport/Clients.vue').default);
// Vue.component('passport-authorized-clients', require('./components/passport/AuthorizedClients.vue').default);
// Vue.component('passport-personal-access-tokens', require('./components/passport/PersonalAccessTokens.vue').default);

var app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  el: '#app'
});

/***/ }),

/***/ "./resources/js/components/NavbarComponent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/NavbarComponent.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavbarComponent_vue_vue_type_template_id_485090b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavbarComponent.vue?vue&type=template&id=485090b2&scoped=true& */ "./resources/js/components/NavbarComponent.vue?vue&type=template&id=485090b2&scoped=true&");
/* harmony import */ var _NavbarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavbarComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/NavbarComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NavbarComponent_vue_vue_type_style_index_0_id_485090b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavbarComponent.vue?vue&type=style&index=0&id=485090b2&scoped=true&lang=css& */ "./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NavbarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavbarComponent_vue_vue_type_template_id_485090b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavbarComponent_vue_vue_type_template_id_485090b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "485090b2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NavbarComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/NavbarComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/NavbarComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NavbarComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavbarComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_style_index_0_id_485090b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./NavbarComponent.vue?vue&type=style&index=0&id=485090b2&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_style_index_0_id_485090b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_style_index_0_id_485090b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_style_index_0_id_485090b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_style_index_0_id_485090b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_style_index_0_id_485090b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/NavbarComponent.vue?vue&type=template&id=485090b2&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/NavbarComponent.vue?vue&type=template&id=485090b2&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_template_id_485090b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./NavbarComponent.vue?vue&type=template&id=485090b2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavbarComponent.vue?vue&type=template&id=485090b2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_template_id_485090b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_template_id_485090b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/PageBannerComponent.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/PageBannerComponent.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageBannerComponent_vue_vue_type_template_id_24975cf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageBannerComponent.vue?vue&type=template&id=24975cf2&scoped=true& */ "./resources/js/components/PageBannerComponent.vue?vue&type=template&id=24975cf2&scoped=true&");
/* harmony import */ var _PageBannerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageBannerComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/PageBannerComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageBannerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageBannerComponent_vue_vue_type_template_id_24975cf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageBannerComponent_vue_vue_type_template_id_24975cf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "24975cf2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PageBannerComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/PageBannerComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/PageBannerComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBannerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PageBannerComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PageBannerComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBannerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PageBannerComponent.vue?vue&type=template&id=24975cf2&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/PageBannerComponent.vue?vue&type=template&id=24975cf2&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBannerComponent_vue_vue_type_template_id_24975cf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PageBannerComponent.vue?vue&type=template&id=24975cf2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PageBannerComponent.vue?vue&type=template&id=24975cf2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBannerComponent_vue_vue_type_template_id_24975cf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBannerComponent_vue_vue_type_template_id_24975cf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Timer.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Timer.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Timer_vue_vue_type_template_id_54f9552c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timer.vue?vue&type=template&id=54f9552c&scoped=true& */ "./resources/js/components/Timer.vue?vue&type=template&id=54f9552c&scoped=true&");
/* harmony import */ var _Timer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Timer.vue?vue&type=script&lang=js& */ "./resources/js/components/Timer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Timer_vue_vue_type_style_index_0_id_54f9552c_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Timer.vue?vue&type=style&index=0&id=54f9552c&scoped=true&lang=sass& */ "./resources/js/components/Timer.vue?vue&type=style&index=0&id=54f9552c&scoped=true&lang=sass&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Timer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Timer_vue_vue_type_template_id_54f9552c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Timer_vue_vue_type_template_id_54f9552c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "54f9552c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Timer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Timer.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Timer.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Timer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Timer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Timer.vue?vue&type=style&index=0&id=54f9552c&scoped=true&lang=sass&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Timer.vue?vue&type=style&index=0&id=54f9552c&scoped=true&lang=sass& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Timer_vue_vue_type_style_index_0_id_54f9552c_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Timer.vue?vue&type=style&index=0&id=54f9552c&scoped=true&lang=sass& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Timer.vue?vue&type=style&index=0&id=54f9552c&scoped=true&lang=sass&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Timer_vue_vue_type_style_index_0_id_54f9552c_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Timer_vue_vue_type_style_index_0_id_54f9552c_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Timer_vue_vue_type_style_index_0_id_54f9552c_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Timer_vue_vue_type_style_index_0_id_54f9552c_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Timer_vue_vue_type_style_index_0_id_54f9552c_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Timer.vue?vue&type=template&id=54f9552c&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Timer.vue?vue&type=template&id=54f9552c&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timer_vue_vue_type_template_id_54f9552c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Timer.vue?vue&type=template&id=54f9552c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Timer.vue?vue&type=template&id=54f9552c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timer_vue_vue_type_template_id_54f9552c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timer_vue_vue_type_template_id_54f9552c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\WebProjects\caspian\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! D:\WebProjects\caspian\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });