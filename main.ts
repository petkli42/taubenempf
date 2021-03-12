radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Chessboard)
    music.setVolume(255)
    music.setTempo(74)
    music.playTone(988, music.beat(BeatFraction.Whole))
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    music.playMelody("B A G A G F A C5 ", 240)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(255)
    music.setTempo(211)
    music.playTone(988, music.beat(BeatFraction.Whole))
})
basic.showIcon(IconNames.SmallHeart)
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
basic.clearScreen()
basic.forever(function () {
	
})
