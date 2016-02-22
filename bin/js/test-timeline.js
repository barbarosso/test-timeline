(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @file        Main entry point of the main class
 * @file        Here you can listen to the api and trigger events via the eventbus
 * @author      Dreams & Creations <info@dreamsandcreations.be>
 * @copyright   2013-2016
 * @license     {@link }
 */

function MainCore() {

}

Object.defineProperties(MainCore.prototype, {
    events: {
        get: function () {
            return 'events';
        }
    },
    api: {
        get: function () {
            return 'api';
        }
    }
});

module.exports =  MainCore;

},{}],2:[function(require,module,exports){
(function (global){
/**
 * @file        Main entry point of the main class
 * @file		Here you can listen to the api and trigger events via the eventbus
 * @author      Dreams & Creations <info@dreamsandcreations.be>
 * @copyright   2013-2016
 * @license     {@link }
 */


var Signal = require('signals').Signal;
console.log("coreSignal: " + Signal);

var gsap = require("gsap");
console.log("coreGsap: " + gsap);

var mainCore = require('./MainCore');

global.MainCore = mainCore;

module.exports = mainCore;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./MainCore":1,"gsap":undefined,"signals":undefined}],3:[function(require,module,exports){
/**
 * @file        Main entry point of the main class
 * @file        Here you can listen to the api and trigger events via the eventbus
 * @author      Dreams & Creations <info@dreamsandcreations.be>
 * @copyright   2013-2016
 * @license     {@link }
 */

function MainTimeline() {

}

Object.defineProperties(MainTimeline.prototype, {
    events: {
        get: function () {
            return 'events';
        }
    },
    api: {
        get: function () {
            return 'api';
        }
    }
});

module.exports =  MainTimeline;

},{}],4:[function(require,module,exports){
(function (global){
/**
 * @file        Main entry point of the main class
 * @file		Here you can listen to the api and trigger events via the eventbus
 * @author      Dreams & Creations <info@dreamsandcreations.be>
 * @copyright   2013-2016
 * @license     {@link }
 */
var mainTimeline = require('./MainTimeline');
var testCore = require('test-core');
console.log(testCore);

var Signal = require("signals");
console.log("signals: " + Signal);

global.mainTimeline = mainTimeline;
module.exports = mainTimeline;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./MainTimeline":3,"signals":undefined,"test-core":2}]},{},[4]);
