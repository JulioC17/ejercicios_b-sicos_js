const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'
];

function averageWord(list) {

    let conteoNumeros = 0
    let conteoLetras = 0
    
for (i = 0; i < list.length; i++){
            // longitud de lista (array)
            // typeof list[i] = // number, number, string, number, string, string, string, number, string
            if (typeof list[i] === 'string'){
            conteoLetras += list[i].length
                }

            else if(typeof list[i] === 'number'){
                    conteoNumeros += list[i]
                }
     }

        let sumaTotal = conteoLetras + conteoNumeros

        return "La Suma de todos los numeros es " + conteoNumeros + ", la Suma de todas las letras es " + conteoLetras + " y la Suma Total es: " + sumaTotal
}

console.log(averageWord(prueba))




