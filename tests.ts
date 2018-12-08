// tests go here; this will not be compiled when this package is used as a library

let 거리 = 0
Ultrasonic.init(Pins.P1, Pins.P2)
basic.forever(function () {
    거리 = Ultrasonic.get_dist_cm()
    basic.showNumber(거리)
    basic.pause(1000)
})
