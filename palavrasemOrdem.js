let palavras = [
    ["Joaquim"],
    ["Alberto"],
    ["Bruno"],
    ["Cristian"]
]

    for (let i = 0; i<palavras.length; i++) {

        if (palavras[i] > palavras[i+1]) {
    
            aux = palavras[i]
            palavras[i] = palavras[i+1]
            palavras[i+1] = aux
        }
    }
    console.log(palavras)

