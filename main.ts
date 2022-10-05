let numero_1 = 0
let numero_2 = 0
let numero_3 = 0
let mayor = 0
let medio = 0
let menor = 0
input.onButtonPressed(Button.A, function () {
    if (numero_1 > numero_2 && numero_1 > numero_3) {
        mayor = numero_1
        if (numero_2 > numero_3) {
            medio = numero_2
            menor = numero_3
        } else {
            medio = numero_3
            menor = numero_2
        }
        basic.showNumber(mayor)
        basic.showNumber(medio)
        basic.showNumber(menor)
    }
    if (numero_2 > numero_1 && numero_2 > numero_3) {
        mayor = numero_2
        if (numero_1 > numero_3) {
            medio = numero_1
            menor = numero_3
        } else {
            medio = numero_3
            menor = numero_1
        }
        basic.showNumber(mayor)
        basic.showNumber(medio)
        basic.showNumber(menor)
    }
    if (numero_3 > numero_1 && numero_3 > numero_1) {
        mayor = numero_3
        if (numero_2 > numero_1) {
            medio = numero_2
            menor = numero_1
        } else {
            medio = numero_1
            menor = numero_2
        }
        basic.showNumber(mayor)
        basic.showNumber(medio)
        basic.showNumber(menor)
    } else {
        basic.showIcon(IconNames.No)
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
