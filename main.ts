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
        music.playMelody("C C C5 C5 C C C5 C5 ", 200)
        basic.showString("SOS")
    } else {
        basic.showNumber(aqi)
    }
})
