const products = ['Camiseta de Metallica', 'Pantalón vaquero', 'Gorra de beisbol', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta']

let ropa = []

for ( i = 0; i < products.length; i++){
    if (products[i].includes("Camiseta")){
        ropa.push(products[i])
    }
}

console.log(ropa)