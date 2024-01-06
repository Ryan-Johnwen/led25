let _112 = 0
let list: number[] = []
let d = 0
let a = 0
let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    list = []
    for (let index = 0; index < 25; index++) {
        list.push(0)
    }
    d = 0
    while (d < _112) {
        a = randint(0, 24)
        if (list[a] == 0) {
            list[a] = 1
            d += 1
            light2(a + 1)
        }
    }
    music.play(music.stringPlayable("E F G F A A G - ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    _112 += 1
    if (_112 <= 25) {
        basic.showNumber(_112)
        basic.pause(500)
        basic.clearScreen()
    } else {
        _112 = 1
        basic.showNumber(_112)
        basic.pause(500)
        basic.clearScreen()
    }
})
function light2 (num: number) {
    if (num % 5 == 0) {
        x = 4
        y = Math.floor(num / 5) - 1
    } else if (num % 5 > 0) {
        x = num % 5 - 1
        y = Math.floor(num / 5)
    }
    led.plot(x, y)
}
