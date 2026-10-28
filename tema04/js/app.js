/*
  Tarea 4 · DWEC · Jorge García Moreno
  Calculadora y bucles.

  Cómo usar esta plantilla:
  · Hay una función por botón. Cada una se ejecuta al pulsar su botón de index.html.
  · sumar() está hecha: es el modelo. Escribe las demás donde pone TODO y, cuando termines, borra el TODO.
  · Para leer las casillas y escribir el resultado usa las funciones de js/ayudas.js:
      leerNumero("numero1"), mostrar(texto, color), anadirLinea(texto), anadirBadge(texto, color), limpiarSalida()
  · Además de en la página, cada función deja su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;   // para que un bucle no llene la página


// ============================================================
// Ejercicio 1 · Calculadora
// ============================================================

// El modelo: lee los dos números, comprueba que están y opera
function sumar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
  }
}

function restar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Restar: falta algún número");
  } else {
    const resultado = n1 - n2;
    mostrar(`${n1} - ${n2} = ${resultado}`);
    console.log(`Restar: ${n1} - ${n2} = ${resultado}`);
  }
}

function multiplicar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Multiplicar: falta algún número");
  } else {
    const resultado = n1 * n2;
    mostrar(`${n1} * ${n2} = ${resultado}`);
    console.log(`Multiplicar: ${n1} * ${n2} = ${resultado}`);
  }
}

function dividir() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Dividir: falta algún número");
  }
  else if(n2 === 0){
    mostrar("El divisor no puede ser 0, no se puede dividir por 0, introduce otro número","danger");
    console.warn("El segundo número introducido es 0, cámbialo");
  }
  else {
    const resultado = n1 / n2;
    mostrar(`${n1} / ${n2} = ${resultado}`);
    console.log(`Dividir: ${n1} / ${n2} = ${resultado}`);
  }
}

function potencia() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Potencia: falta algún número");
  } else {
    const resultado = n1 ** n2;
    mostrar(`${n1} ** ${n2} = ${resultado}`);
    console.log(`Potencia: ${n1} ** ${n2} = ${resultado}`);
  }
}

function modulo() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Módulo: falta algún número");
  } 
  else if(n2 === 0){
    mostrar("El divisor no puede ser 0, no puedo mostrar el resto si el segundo número es 0, introduce otro número","danger");
    console.warn("El segundo número introducido es 0, cámbialo");
  }
  else {
    const resultado = n1 % n2;
    mostrar(`${n1} % ${n2} = ${resultado}`);
    console.log(`Módulo: ${n1} % ${n2} = ${resultado}`);
  }
}


// ============================================================
// Ejercicio 2 · Comparaciones
// ===================================gf=========================

function cualEsMayor() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");
  let resultado;
  let mensaje;

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("cualEsMayor: falta algún número");
  }
  else{
    if(n1 > n2){
      resultado = n1;
      mensaje = "El múmero mayor es: " + resultado;
      console.log(`El número mayor entre: ${n1} y ${n2} es: ${resultado}`);
    }
    else if(n1 === n2){
      resultado = n1;
      mensaje = "Ámbos números son iguales: " + resultado;
      console.log(`Ámbos números son iguales: ${n1} y ${n2} el resultado es: ${resultado}`);
    }
    else{
      resultado = n2;
      mensaje = "El número mayor es: "+ resultado;
      console.log(`El número mayor entre: ${n1} y ${n2} es: ${resultado}`);
    }
    mostrar(`${mensaje}`);
  }
}

function parOImpar() {
  const n1 = leerNumero("numero1");
  if (Number.isNaN(n1)) {
    mostrar("Escribe el número antes de ver si es par o impar", "danger");
    console.warn("parOImpar: falta introducir el número");
  }
  //Compruebo si es decimal, para avisar si es par o impar
  else if(n1%1 !== 0){
    mostrar(`${n1} tiene decimales: no es ni par ni impar.`, "warning");
    console.warn("parOImpar: El número es decimal, por lo que no es par ni impar");
  }
  else{
    const ParImpar= n1 % 2 === 0 ? "par" : "impar";
    mostrar(`${n1} es ${ParImpar}`);
    console.log(`El número: ${n1} es: ${ParImpar}`);
  }
}
// ============================================================
// Ejercicio 3 · Bucles con texto
// El número 1 dice cuántas veces se repite cada bucle
// ============================================================

function bucleFor() {
  const veces = leerNumero("numero1");
  let repeticiones = 0; //Variable para contar el numero de vueltas
  limpiarSalida();
  if (Number.isNaN(veces) || veces %1 !==0 || veces > MAXIMO_REPETICIONES) {
    mostrar("Fallo en alguna parte, escribeme un número que indique el número de veces a repetir, que no sea decimal y que sea menor a 20", "danger");
    console.warn("bucleFor: falta alguna cosa");
  }
  //El bucle sumando 1 por cada iteracion
  else{
    for(let i=1;i<=veces;i++){
      anadirLinea(`for · repetición ${i} de ${veces}`);
      repeticiones++;
    }
    anadirLinea(`Total: ${repeticiones} repeticiones`);
    console.log(`for: ${repeticiones} repeticiones`);
  }
}

function bucleWhile() {
  const veces = leerNumero("numero1");
  let repeticiones = 0; //Variable para contar el numero de vueltas, la empiezo en 1 por el bucle
  let contador = 1
  limpiarSalida();
  if (Number.isNaN(veces) || veces %1 !==0 || veces > MAXIMO_REPETICIONES) {
    mostrar("Fallo en alguna parte, escribeme un número que indique el número de veces a repetir, que no sea decimal y que sea menor a 20", "danger");
    console.warn("bucleWhile: falta alguna cosa");
  }
  //El bucle sumando 1 por cada iteracion
  else{
    while(contador<=veces){
      anadirLinea(`While · repetición ${repeticiones} de ${veces}`);
      repeticiones++;
      contador++;
    }

    anadirLinea(`Total: ${repeticiones} repeticiones`);
    console.log(`for: ${repeticiones} repeticiones`);
  }
}

function bucleDoWhile() {
  const veces = leerNumero("numero1");
  let repeticiones = 0; //Variable para contar el numero de vueltas, la empiezo en 0 por el bucle
  let contador = 1;
  limpiarSalida();

  if (Number.isNaN(veces) || veces %1 !==0 || veces > MAXIMO_REPETICIONES) {
    mostrar("Fallo en alguna parte, escribeme un número que indique el número de veces a repetir, que no sea decimal y que sea menor a 20", "danger");
    console.warn("bucleDoWhile: falta alguna cosa");
  }
  //El bucle sumando 1 por cada iteracion, en este realizo la operacion primero y luego la repito mientras se cumpla la condicion
  else{
    do{
      anadirLinea(`Do While · repetición ${repeticiones} de ${veces}`);
      repeticiones++;
      contador++;
    }
    while(contador<=veces);

    anadirLinea(`Total: ${repeticiones} repeticiones`);
    console.log(`for: ${repeticiones} repeticiones`);
  }
}


// ============================================================
// Ejercicio 4 · Bucles con badges
// ============================================================

function badgesFor() {
  const veces = leerNumero("numero1");
  let repeticiones = 0; //Variable para contar el numero de vueltas
  limpiarSalida();
  if (Number.isNaN(veces) || veces %1 !==0 || veces > MAXIMO_REPETICIONES) {
    mostrar("Fallo en alguna parte, escribeme un número que indique el número de veces a repetir, que no sea decimal y que sea menor a 20", "danger");
    console.warn("bucleFor: falta alguna cosa");
  }
  //El bucle sumando 1 por cada iteracion
  else{
    for(let i=1;i<=veces;i++){
      //Aqui añado el tipo de badge según si es par/impar
      const color = i % 2 === 0 ? "primary" : "secondary";
      anadirBadge(`${i}`, color);
      repeticiones++;
    }
    anadirLinea(`Total: ${repeticiones} repeticiones`);
    console.log(`for: ${repeticiones} repeticiones`);
  }
}

function badgesWhile() {
  const veces = leerNumero("numero1");
  let repeticiones = 0; //Variable para contar el numero de vueltas, la empiezo en 1 por el bucle
  let contador = 1
  limpiarSalida();
  if (Number.isNaN(veces) || veces %1 !==0 || veces > MAXIMO_REPETICIONES) {
    mostrar("Fallo en alguna parte, escribeme un número que indique el número de veces a repetir, que no sea decimal y que sea menor a 20", "danger");
    console.warn("bucleWhile: falta alguna cosa");
  }
  //El bucle sumando 1 por cada iteracion
  else{
    while(contador<=veces){
      //anadirLinea(`While · repetición ${repeticiones} de ${veces}`);
      const color = contador % 2 === 0 ? "primary" : "secondary";
      anadirBadge(`${contador}`, color);
      repeticiones++;
      contador++;
    }

    anadirLinea(`Total: ${repeticiones} repeticiones`);
    console.log(`for: ${repeticiones} repeticiones`);
  }
}

function badgesDoWhile() {
  const veces = leerNumero("numero1");
  let repeticiones = 0; //Variable para contar el numero de vueltas, la empiezo en 0 por el bucle
  let contador = 1;
  limpiarSalida();

  if (Number.isNaN(veces) || veces %1 !==0 || veces > MAXIMO_REPETICIONES) {
    mostrar("Fallo en alguna parte, escribeme un número que indique el número de veces a repetir, que no sea decimal y que sea menor a 20", "danger");
    console.warn("bucleDoWhile: falta alguna cosa");
  }

  //El bucle sumando 1 por cada iteracion, en este realizo la operacion primero y luego la repito mientras se cumpla la condicion
  else{
    do{
      //anadirLinea(`Do While · repetición ${repeticiones} de ${veces}`);
      const color = contador % 2 === 0 ? "primary" : "secondary";
      anadirBadge(`${contador}`, color);
      repeticiones++;
      contador++;
    }
    while(contador<=veces);

    anadirLinea(`Total: ${repeticiones} repeticiones`);
    console.log(`for: ${repeticiones} repeticiones`);
  }
  
}