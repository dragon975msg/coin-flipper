input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Sword)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
})
