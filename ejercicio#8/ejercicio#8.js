const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.',];

     function findLongestWord(stringList) {
 
         let mayor = stringList[0]
         
         for (i = 1; i < stringList.length; i++){

            if ( stringList[i].length > mayor.length){
                mayor = stringList[i]
                
            }
            
        }

         return "El primer String mas largo es : "+ mayor
         

     }
     
        
console.log(findLongestWord(avengers))

 // stringList.legth = 6
// stringList[i] = hulk, thor. ironman, capitan arguments, spiderman, capitana 
 // list = stringList[i].leght = 4, 4, 8, 10, 9, 10




