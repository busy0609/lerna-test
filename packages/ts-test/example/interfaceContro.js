function createClock(ctro, hour, minute) {
    return new ctro(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log('Beep Beep');
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log('Tiki Tiki');
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 3);
digital.tick();
var analog = createClock(AnalogClock, 24, 34);
analog.tick();
