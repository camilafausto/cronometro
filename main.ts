let numero = 0
let Número = 0
input.onButtonPressed(Button.A, function () {
    numero = 0
    while (Número <= 10) {
        basic.showNumber(Número)
        basic.pause(1000)
        numero += 1
    }
    basic.showString("FIM")
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    numero = 10
    while (Número >= 10) {
        basic.showNumber(Número)
        basic.pause(1000)
        numero += -1
    }
    basic.showString("FIM")
    basic.pause(1000)
    basic.clearScreen()
})
