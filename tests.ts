// tests go here; this will not be compiled when this package is used as a library

let �Ÿ� = 0
Ultrasonic.init(Pins.P1, Pins.P2)
basic.forever(function () {
    �Ÿ� = Ultrasonic.get_dist_cm()
    basic.showNumber(�Ÿ�)
    basic.pause(1000)
})
