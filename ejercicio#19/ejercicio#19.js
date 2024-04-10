const toys = [
    {id: 5, name: 'Transformers'}, 
    {id: 11, name: 'LEGO'}, 
    {id: 23, name: 'Hot Wheels'}, 
    {id: 40, name: 'Rescador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];

const nuevoArrayGato = []
const nuevoArraySinGato = []

for(const element of toys){
    if(element.name.includes("gato")){
        nuevoArrayGato.push(element)
    }

    else{
        nuevoArraySinGato.push(element)
    }
}


   console.log(nuevoArraySinGato)

