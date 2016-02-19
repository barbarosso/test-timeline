(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
(function (global){
/**
 * @file        Main entry point of the main class
 * @file		Here you can listen to the api and trigger events via the eventbus
 * @author      Dreams & Creations <info@dreamsandcreations.be>
 * @copyright   2013-2016
 * @license     {@link }
 */
var mainTimeline = require('./MainTimeline');
var signal = new signals.Signal();
console.log(signal);

global.mainTimeline = mainTimeline;


var mainClass = new MainClass();
console.log(mainClass);

module.exports = mainTimeline;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./MainTimeline":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvTWFpblRpbWVsaW5lLmpzIiwic3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogQGZpbGUgICAgICAgIE1haW4gZW50cnkgcG9pbnQgb2YgdGhlIG1haW4gY2xhc3NcbiAqIEBmaWxlICAgICAgICBIZXJlIHlvdSBjYW4gbGlzdGVuIHRvIHRoZSBhcGkgYW5kIHRyaWdnZXIgZXZlbnRzIHZpYSB0aGUgZXZlbnRidXNcbiAqIEBhdXRob3IgICAgICBEcmVhbXMgJiBDcmVhdGlvbnMgPGluZm9AZHJlYW1zYW5kY3JlYXRpb25zLmJlPlxuICogQGNvcHlyaWdodCAgIDIwMTMtMjAxNlxuICogQGxpY2Vuc2UgICAgIHtAbGluayB9XG4gKi9cblxuZnVuY3Rpb24gTWFpblRpbWVsaW5lKCkge1xuXG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE1haW5UaW1lbGluZS5wcm90b3R5cGUsIHtcbiAgICBldmVudHM6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2V2ZW50cyc7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGFwaToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnYXBpJztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICBNYWluVGltZWxpbmU7XG4iLCIvKipcbiAqIEBmaWxlICAgICAgICBNYWluIGVudHJ5IHBvaW50IG9mIHRoZSBtYWluIGNsYXNzXG4gKiBAZmlsZVx0XHRIZXJlIHlvdSBjYW4gbGlzdGVuIHRvIHRoZSBhcGkgYW5kIHRyaWdnZXIgZXZlbnRzIHZpYSB0aGUgZXZlbnRidXNcbiAqIEBhdXRob3IgICAgICBEcmVhbXMgJiBDcmVhdGlvbnMgPGluZm9AZHJlYW1zYW5kY3JlYXRpb25zLmJlPlxuICogQGNvcHlyaWdodCAgIDIwMTMtMjAxNlxuICogQGxpY2Vuc2UgICAgIHtAbGluayB9XG4gKi9cbnZhciBtYWluVGltZWxpbmUgPSByZXF1aXJlKCcuL01haW5UaW1lbGluZScpO1xudmFyIHNpZ25hbCA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xuY29uc29sZS5sb2coc2lnbmFsKTtcblxuZ2xvYmFsLm1haW5UaW1lbGluZSA9IG1haW5UaW1lbGluZTtcblxuXG52YXIgbWFpbkNsYXNzID0gbmV3IE1haW5DbGFzcygpO1xuY29uc29sZS5sb2cobWFpbkNsYXNzKTtcblxubW9kdWxlLmV4cG9ydHMgPSBtYWluVGltZWxpbmU7Il19
