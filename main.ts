radio.onReceivedNumber(function (receivedNumber) {
    aqi = receivedNumber
})
let aqi = 0
music.stopAllSounds()
basic.clearScreen()
basic.showIcon(IconNames.Happy)
radio.setTransmitPower(7)
radio.setGroup(11)
music.setVolume(127)
basic.forever(function () {
    if (aqi == 999) {
        music.playMelody("C5 G C - C5 G C - ", 400)
        basic.showString("SOS")
    } else if (aqi == 1) {
        basic.showIcon(IconNames.StickFigure)
    } else {
        basic.showNumber(aqi)
        aqi = 1
    }
})
