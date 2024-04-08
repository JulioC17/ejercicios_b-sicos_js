const words = ['code','repeat','eat','sleep','code','enjoy','sleep','code','enjoy','sleep','code'];
// const prueba =["yo", "tu", "el", "ellos","ellos","ellos","el","tu","tu","tu","yo","yo","el","el","tu","tu"];
                  


function repeatCounter(list) {

    let arrayOrdenado = list.sort()
    let repetidas = []
    let contador = 1
    let arrayContador =[]
        
       for (i=0;  i<arrayOrdenado.length;  i++){
          if( arrayOrdenado[i] === arrayOrdenado[i + 1]){
            contador++
          }

          else{
            repetidas.push(arrayOrdenado[i])
            arrayContador.push(contador)
            contador = 1
          }
}
let conteo = []
        
        for (j = 0; j < repetidas.length; j++){
            let plural = " veces"
        if( arrayContador[j] === 1){
        plural = " vez"
        }
      
        conteo.push("La Palabra " + repetidas[j] + " se repite " + arrayContador[j] + plural) 
       }

      return conteo
  }

console.log(repeatCounter(words))


