let precioBaseGlobal = 10000;

let precioBaseCambiado = precioBaseGlobal + 15000;

const nave1 = {
    nombre: "Ala-X", 
    precioBase: 50000, 
    precioFinal: 60000
};
const nave2 = {
    nombre: "Halcón Milenario", 
    precioBase: 70000, 
    precioFinal: 80000
};

let precioFinalActualizadoNave1 = precioBaseCambiado + nave1.precioBase;
let precioFinalActualizadoNave2 = precioBaseCambiado + nave2.precioBase;

console.log(precioFinalActualizadoNave1)
console.log(precioFinalActualizadoNave2)




