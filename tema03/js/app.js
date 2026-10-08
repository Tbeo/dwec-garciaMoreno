/*
  Tarea 3 · DWEC · [Tu nombre y apellidos]
  Variables, tipos y conversiones.

  Cómo usar esta plantilla:
  · Hay una función por ejercicio. Cada una se ejecuta al pulsar su botón «Ejecutar» de index.html.
  · Escribe tu código DENTRO de cada función, donde pone TODO. Cuando lo hagas, borra el TODO.
  · Solo console.log() y alert(): el JavaScript no escribe nada dentro de la página.
  · let y const, nunca var. Comillas rectas (" o ').
*/

console.log("app.js cargado: pulsa «Ejecutar» en cada ejercicio");


// Ejercicio 1 · Variables y typeof
function ejercicio1() {
  console.log("--- Ejercicio 1 · Variables y typeof ---");

  // Ejemplo: una variable y su typeof en la consola
  const edad = 20;   // number
  console.log("edad =", edad, "→", typeof edad);

  let nombre = "jorge";     //String 
  console.log("nombre =", nombre, "→", typeof nombre);
  const booleano = true;   // boolean
  console.log("booleano =", booleano, "→", typeof booleano);
  const nulo = null;   // object
  console.log("nulo =", nulo, "→", typeof nulo);
  const indefinido = undefined;   // undefined
  console.log("indefinido =", indefinido, "→", typeof indefinido);
  const numeroGrande = 10n;   // bigint
  console.log("numeroGrande =", numeroGrande, "→", typeof numeroGrande);

  // TODO: declara una variable de cada tipo que falta: string, boolean, null, undefined y bigint (como 10n).
  //       const si no va a cambiar; let para al menos una a la que des valor más tarde.
  // TODO: muestra en la consola el valor y el typeof de cada una, como en el ejemplo.
  // TODO: da valor a tu variable let y vuelve a mostrar su typeof.
}


// Ejercicio 2 · Conversiones explícitas
// Escribe el comentario «espero …» ANTES de ejecutar. Si fallas, no lo cambies: márcalo en la tabla de la página.
function ejercicio2() {
  console.log("--- Ejercicio 2 · Conversiones explícitas ---");

  // Ejemplo: una conversión, tu predicción y el resultado con su tipo
  const a = String(123);   // espero "123" y "string"
  console.log("String(123) →", a, typeof a);

  const b = Number("123");   // espero 123 y "number"
  console.log('Number("123") →', b, typeof b);

  const c = Number("12abc");   // espero NaN y "number"
  console.log('Number("12abc") →', c, typeof c);

  const d = Number("");   // espero  y "number"
  console.log('Number("") →', d, typeof d);

  const e = Number(true);   // espero 1 y "number"
  console.log('Number(true) →', e, typeof e);

  const f = Boolean(0);   // espero false y "boolean"
  console.log('Boolean(0) →', f, typeof f);

  const g = Boolean("texto");   // espero true y "boolean"
  console.log('Boolean("texto") →', g, typeof g);

  const h = Boolean("");   // espero false y "boolean"
  console.log('Boolean("") →', h, typeof h);

  // TODO: el resto de conversiones obligatorias, cada una con su «espero …»:
  //       Number("123"), Number("12abc"), Number(""), Number(true),
  //       Boolean(0), Boolean("texto") y Boolean("").
  // TODO: muestra en la consola el resultado y el typeof de cada una.
}


// Ejercicio 3 · Coerción y comparaciones
function ejercicio3() {
  console.log("--- Ejercicio 3 · Coerción y comparaciones ---");

  // Ejemplo: una expresión que mezcla tipos
  //Muestro 6 expresiones que mezclan tipos:
  console.log('"5" - 2 →', "5" - 2);   // espero 3
  console.log('20 - "20"→', 20 - "20"); //espero 0
  console.log('null + 1 →', null + 1);  // espero 1
  console.log('"true" - 1 →', "true" - 1);   // espero NaN
  console.log('"5" != 5 →', "5" != 5);  //Espero true
  console.log('5+ "4" →', 5 + "4");   // espero "54"

  // Ejemplo: la misma pareja comparada con == y con ===
  console.log('5 == "5" →', 5 == "5");     // espero [tu predicción]
  console.log('5 === "5" →', 5 === "5");   // espero [tu predicción]
  console.log('0 == false →', 0 == false);   // espero [tu predicción]
  console.log('0 === false →', 0 === false);   // espero [tu predicción]
  console.log('null == undefined →', null == undefined);   // espero [tu predicción]
  console.log('null === undefined →', null === undefined);   // espero [tu predicción]


  // TODO: haz lo mismo con 0 y false, y con null y undefined.
}


// Ejercicio 4 · Tu ficha con plantillas de cadena
function ejercicio4() {
  console.log("--- Ejercicio 4 · Tu ficha con plantillas de cadena ---");

  // Tus datos, con const
  const nombre = "Jorge Garcia Moreno";
  const ciclo = "2026-2027";
  const curso = "2º, Desarrollo de Entorno Cliente";
  const aficion = "Jugar videojuegos";
  let horasEstudio = 5; // ejemplo de dato que cambia
  horasEstudio += 5;
  // TODO: ciclo, curso y una afición, también con const.

  // Un dato que cambia, con let
  // TODO: por ejemplo, las horas que has estudiado esta semana. Después súmale algo con +=.

  // La ficha con plantilla de cadena: backticks (`) y ${ }
  const ficha = `Soy ${nombre}, estudio ${curso} durante los años ${ciclo}, he estudiado ${horasEstudio} horas a la semana y me gusta ${aficion}.`;
  // TODO: completa la ficha con todos tus datos y muéstrala con alert() y en la consola.
  console.log(ficha);
  alert(ficha);
  // TODO: escribe la misma ficha concatenando con + en una constante fichaConMas y muéstrala en la consola.
  const fichaMas = "Soy " + nombre + ", estudio " + curso + " durante los años " + ciclo + ", he estudiado " + horasEstudio + " horas a la semana y me gusta " + aficion + ".";
  console.log(fichaMas);
  alert(fichaMas);
  // TODO: compara las dos con === y muestra el resultado en la consola: tiene que salir true.
  console.log(ficha===fichaMas);
  // Recuerda: el error de dar otro valor a una const se provoca en la consola del navegador, no aquí.
  //Doy valor a ficha:
  //ficha = "cambio su valor"; // Esto es lo que deberia de hacer en la consola
}