
const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

const cities = []

for(const key in placesToTravel){
    if(placesToTravel[key].id !== 40 && placesToTravel[key].id !== 11 ){
        cities.push(placesToTravel[key])
    }
}
console.log(cities)









