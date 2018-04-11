// tests go here; this will not be compiled when this package is used as a library

ultrasonic.init(Pins.P0, Pins.P1)
basic.forever(() => {
    ultrasonic.start()
    basic.pause(500)
    basic.showNumber(ultrasonic.get_dist_cm())
    basic.pause(500)
})
