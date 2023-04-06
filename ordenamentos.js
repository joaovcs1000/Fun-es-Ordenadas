const prompt = require("prompt-read")

let x = prompt("Digite uma palavra: ")

let palavra = x.split('')

let contador = 1

let n = 1

while (n<=palavra.length && contador==1) {

    contador = 0

    for (let i = 0; i <= palavra.length - 2; i++) {

        if (palavra[i] > palavra[i+1]) {

            aux = palavra[i]
            palavra[i] = palavra[i+1]
            palavra[i+1] = aux

            contador = 1
        }
    }
}
console.log(palavra)