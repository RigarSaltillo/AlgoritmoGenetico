

// Esta función recopila los valores del formulario que son los linfocitos y los po ne en un array
function obtenerNombres() {
  var cantidadNombres = parseInt(document.getElementById("numeroCadenas").value);
  if (isNaN(cantidadNombres)) {
      console.error("El valor de 'numeroCadenas' no es un número válido.");
      return [];
  }

  var nombres = [];
  for (var i = 0; i < cantidadNombres; i++) {
      var elemento = document.getElementById('Cadena' + i);
      if (elemento) {
          var nombre = elemento.value;
          nombre = nombre.toUpperCase();
          nombres.push(nombre.trim());
          console.log("Se encontro el elemento: " + elemento.value)
      } else {
          console.error("No se encontró el elemento con ID 'Cadena" + i + "'.");
      }
  }

  console.log(nombres);
  return nombres;
}


//Imprime los resultados en un label 
function mostrarProceso(texto){
label=document.createElement('label');

}

// Asigna la función obtenerLinfostos a un evento del formulario, por ejemplo,
// al envío del formulario

function BUFO() {
  let m =document.getElementById('numeroCadenas');
  let l1,l2,l3
  let ma=[]
  let n =document.getElementById('Cantidaad_Secuencias');

    ma=obtenerNombres();
    for(i=0; i<ma.length;i++){
    let ca=ma[i]
    console.log("La longitud de "+ma[i]+" es igual a: "+ca.length);
    }
    //Agregar gaPs a las secuencias
    function agregar_gabs(ma){
        let secuModificada=[]
    let vma=valanceo(ma)
        for(i=0;i<vma.length;i++){
        //Primero obtenemos la pocicion aleatroria de la secuencia dentroo de array
        let p=poscicionaleatoria(vma[i].length)
        //despues agregamos el gab en esa pocion
        let temp=vma[i]
            let p1x=temp.slice(0,p)
            let p2x=temp.slice(p)
            let nx=p1x+'-'+p2x
            secuModificada.push(nx)
    }
    console.log(secuModificada)
    return secuModificada;
}
//valanceo
function valanceo(array){
   // Encuentra la longitud máxima de todas las palabras en el array.
  const longitudMaxima = Math.max(...array.map((palabra) => palabra.length));

  // Rellena las palabras más cortas con guiones "-" al final hasta que tengan la longitud máxima.
  const palabrasIgualadas = array.map((palabra) => {
    while (palabra.length < longitudMaxima) {
      palabra += "-";
    }
    return palabra;
  });

  return palabrasIgualadas;
}
//Posicion aleatoria

function poscicionaleatoria(x){
    let poscicionAleatoria
       poscicionAleatoria=Math.floor(Math.random()*x)
    console.log(poscicionAleatoria)
    return poscicionAleatoria
   }

let cma=agregar_gabs(ma)
console.log(cma)

let siu= n.value;
console.log("El numero de iteraciones es: "+siu)
let labestia=creaiteracionesp(siu,ma)
console.log("La mejor iteracion fue: "+labestia)
let lresultado=document.getElementById("resultado")
lresultado.textContent = `Mejor combinación: ${labestia.join(", ")}`;

//Funcion Crea iteraciones 
/*function creaiteracionesp(x, ma) {
    let bajaMutacion=[]
    let altaMutacion=[]
    let Thebesth = [];
    let mejorTemp = { iguales: 0, guiones: 0 }; // Inicializamos con un valor nulo
    let cma5 = [];
  
    for (let i = 0; i < x; i++) {
      cma5 = agregar_gabs(ma);
      const temp = compararPalabras(cma5);
  
      console.log(`Iteración ${i}:`);
      console.log(`Caracteres iguales: ${temp.iguales}`);
      console.log(`Guiones: ${temp.guiones}`);
  
      if (temp.iguales > mejorTemp.iguales) {
        Thebesth = cma5;
        mejorTemp = temp;
      }
  
      console.log("Mejor combinación hasta ahora:");
      console.log(Thebesth)
    }
  
    return Thebesth;
  }*/
  function creaiteracionesp(x, ma) {
    let Thebesth = [];
    let altaMutacion = [];
    let bajaMutacion = [];
    let mejorTemp = { iguales: 0, guiones: 0 }; // Inicializamos con un valor nulo
    let cma5 = [];
  
    for (let i = 0; i < x; i++) {
      cma5 = agregar_gabs(ma);
      const temp = compararPalabras(cma5);
  
      console.log(`Iteración ${i}:`);
      console.log(`Caracteres iguales: ${temp.iguales}`);
      console.log(`Guiones: ${temp.guiones}`);
  
      if (temp.iguales > mejorTemp.iguales) {
        Thebesth = cma5;
        mejorTemp = temp;
      }
  
      console.log("Mejor combinación hasta ahora:");
      console.log(Thebesth);
      
      // Determina si es alta mutación o baja mutación
      const promedio = (temp.iguales + temp.guiones) / 2;
      if (promedio >= mejorTemp.iguales) {
        bajaMutacion.push(cma5);
      } else {
        altaMutacion.push(cma5);
      }
    }
  
    // Iteraciones en altaMutacion y BajaMutacion
    for (let i = 0; i < x; i++) {
      // Aplica la función agregar_gabs a altaMutacion
      altaMutacion = altaMutacion.map((secuencia) => agregar_gabs(secuencia));
  
      // Aplica la función agregar_gabs a bajaMutacion
      bajaMutacion = bajaMutacion.map((secuencia) => agregar_gabs(secuencia));
    }
  
    // Calcula el rendimiento de altaMutacion y BajaMutacion
    const rendimientoAltaMutacion = altaMutacion.map((secuencia) => compararPalabras(secuencia));
    const rendimientoBajaMutacion = bajaMutacion.map((secuencia) => compararPalabras(secuencia));
  
    // Compara el rendimiento de altaMutacion y BajaMutacion con el rendimiento actual
    const mejorRendimientoAltaMutacion = Math.max(...rendimientoAltaMutacion);
    const mejorRendimientoBajaMutacion = Math.max(...rendimientoBajaMutacion);
  
    // Compara con el rendimiento actual y devuelve el mejor resultado
    if (mejorRendimientoAltaMutacion > mejorRendimientoBajaMutacion && mejorRendimientoAltaMutacion > mejorTemp.iguales) {
      return altaMutacion[rendimientoAltaMutacion.indexOf(mejorRendimientoAltaMutacion)];
    } else if (mejorRendimientoBajaMutacion > mejorTemp.iguales) {
      return bajaMutacion[rendimientoBajaMutacion.indexOf(mejorRendimientoBajaMutacion)];
    } else {
      return Thebesth;
    }
  }
  
function compararPalabras(array) {
    if (array.length < 2) {
      console.log("Se necesitan al menos dos palabras para comparar.");
      return;
    }
    const primeraPalabra = array[0];
    const resultados = { iguales: 0, guiones: 0 };
  
    for (let i = 0; i < primeraPalabra.length; i++) {
      const caracterAComparar = primeraPalabra[i];
      
      if (caracterAComparar === '-') {
        resultados.guiones++;
      } else {
        for (let j = 1; j < array.length; j++) {
          if (caracterAComparar === array[j][i]) {
            resultados.iguales++;
          }
        }
      }
    }
  
    return resultados;
  }
  
  /*const array = ["A-CAGACAGC-", "GAGGA-GTGG"];
  const resultado = compararPalabras(array);

  console.log(`Caracteres iguales: ${resultado.iguales}`);
  console.log(`Guiones: ${resultado.guiones}`);
  comparSecuencias(cma)
  comparSecuencias(arcc)*/


};

