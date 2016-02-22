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