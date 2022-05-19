let Davant = 0
let Darrera = 0
basic.forever(function () {
    Davant = sonar.ping(
    DigitalPin.P15,
    DigitalPin.P16,
    PingUnit.Centimeters
    )
    basic.pause(100)
    Darrera = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P14,
    PingUnit.Centimeters
    )
    basic.pause(100)
})
basic.forever(function () {
    if (Darrera > 2 && Darrera < 30) {
        motorbit.freestyle(100, 100)
    } else if (Davant > 2 && Davant < 30) {
        motorbit.freestyle(-100, -100)
    } else {
        motorbit.brake()
    }
})
