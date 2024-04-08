const duplicates = ['sushi','pizza','burger','potatoe','pasta','ice-cream','pizza','chicken','onion rings','pasta','soda'];
                       

                   // [burguer,chicken, ice-creaam, onion Rings , pasta, pasta, pizza, pizza, pottatoe, soda, susshi]
  

function removeDuplicates(list) {

    let listaNueva = []

    for (i=0; i<list.length; i++){
              
              if(listaNueva.includes(list[i])){
              console.log("La palabra " + list[i] + " se repite")
              } 
              
              else{
              listaNueva.push(list[i])
              }
          
            }

   return listaNueva
   

}

console.log(removeDuplicates(duplicates))