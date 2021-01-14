let state = 0
input.onButtonPressed(Button.A, function () {
    state = 1
    basic.showString("ON")
})
function blinker (pattern: number) {
    if (pattern == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (pattern == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
    if (pattern == 3) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
    }
    if (pattern == 4) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
}
input.onButtonPressed(Button.B, function () {
    state = 0
    basic.showString("OFF")
})
basic.forever(function () {
    if (state) {
        if (input.lightLevel() <= 150) {
            blinker(1)
        }
        if (input.lightLevel() <= 90) {
            blinker(2)
        }
        if (input.lightLevel() <= 60) {
            blinker(3)
        }
        if (input.lightLevel() <= 30) {
            blinker(4)
        }
    }
})
