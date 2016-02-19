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