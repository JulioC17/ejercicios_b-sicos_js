const numbers = [
    12, 
    21, 
    38, 
    5, 
    45, 
    37, 
    6
];


function average(numberList) {

    let suma = 0

    let promedio = 0

for (let i = 0; i < numberList.length; i++){

    suma += numberList[i]
    promedio = suma /numberList.length 
    
}

console.log( " El promedio de estos números es ", + promedio)

}


average(numbers)