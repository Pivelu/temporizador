input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 30; index++) {
        basic.showNumber(contador)
        basic.pause(1000)
        contador += -1
    }
})
let contador = 0
contador = 30
basic.showNumber(contador)
