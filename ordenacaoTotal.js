let palavras = [
    [56, 109, 8, 4, 71, 13, 15],
    ["Jair", "Valdir", "Bia", "Ana", "Manoel", "Carla", "Carlos"]   
]
    for (let n = 1; n<=7; n++) {

        for (let i = 0; i <=5; i++) {

            if (palavras[0][i] > palavras[0][i+1]){

                aux = palavras[0][i]
                palavras[0][i] = palavras[0][i+1]
                palavras[0][i+1] = aux

                aux1 = palavras[1][i]
                palavras[1][i] = palavras[1][i+1]
                palavras[1][i+1] = aux1
            }
        }
    }
    console.log(palavras)

