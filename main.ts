basic.forever(function () {
    basic.showIcon(IconNames.Duck)
    basic.showLeds(`
        # # . . .
        # # . . .
        # # # # .
        # # # . .
        . . . # .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # # # . .
        # # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . # #
        . . # # #
        . . . # #
        . . . # #
        . . . . .
        `)
    basic.showLeds(`
        . . # # .
        . # # # .
        . . # # #
        . . # # #
        . . . . .
        `)
    basic.showLeds(`
        . # # . .
        # # # . .
        . # # # #
        . # # # .
        . . . . .
        `)
})
basic.forever(function () {
    music.playMelody("G - G - G - A - ", 500)
    music.playMelody("B - - B - - - - ", 500)
    music.playMelody("G - B - B - A - ", 500)
    music.playMelody("A - B - A - C5 C5 ", 500)
})
