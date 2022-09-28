let numero_1 = 0
let numero_2 = 0
let numero_3 = 0
input.onButtonPressed(Button.A, function () {
    if (numero_1 == 0 && numero_2 == 0) {
        basic.showIcon(IconNames.No)
    } else {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    numero_1 = randint(0, 9)
    numero_2 = randint(0, 9)
    numero_3 = randint(0, 9)
    if (numero_1 != numero_2 && (numero_1 != numero_3 && numero_2 != numero_3)) {
        basic.showIcon(IconNames.Yes)
        basic.showNumber(numero_1)
        basic.showNumber(numero_2)
        basic.showNumber(numero_3)
    } else {
        basic.showIcon(IconNames.No)
        numero_1 = 0
        numero_2 = 0
        numero_3 = 0
    }
})
