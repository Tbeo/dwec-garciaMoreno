/*
  Tarea 7 · DWEC · [Tu nombre y apellidos]
  Funciones, flechas y clases.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · La regla de este tema:
      - declaración, function nombre() { ... }, para las funciones con nombre, como las de los botones;
      - FLECHA para todos los callbacks: forEach, map, filter, sort, reduce, find, some...;
      - nunca una flecha como método: en las clases, la forma corta media() { ... }.
  · Los resultados se pintan en la página como en los temas 5 y 6: createElement, textContent, classList y append.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: pinta una lista de textos en un <ul class="list-group">
// (ya está hecha, y su forEach ya lleva una flecha: es el modelo)
// ============================================================

function pintarLista(selector, textos) {
  const lista = document.querySelector(selector);
  lista.textContent = "";

  textos.forEach((texto) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = texto;
    lista.append(li);
  });
}


// ============================================================
// Ejercicio 1 · Precio final
// ============================================================

function calcularPrecio(base, iva = 21, descuento = 0) {
  const precioDescuento = base * (descuento / 100);
  const precioRebajado = base - precioDescuento;
  const precioIva = precioRebajado * (iva / 100);
  const precioFinal = precioRebajado + precioIva;

  console.log("Precio base: " + base);
  console.log("IVA: " + iva + "%");
  console.log("Descuento: " + descuento + "%");
  console.log("Precio final: " + precioFinal);

  return precioFinal;

}

// Ya está hecha: 74.8 → "74.80 €"
function formatearEuros(cantidad) {
  return cantidad.toFixed(2) + " €";
}

function mostrarPrecio() {
  const base = document.querySelector("#base").value;
  const baseNumero = Number(base);
  const descuento = document.querySelector("#descuento").value;
  const iva = Number(document.querySelector("#iva").value);
  let resultado;

  const error1 = document.querySelector("#error1");

  if(base === ""){
    error1.textContent = "El precio base esta vacio, no tiene sentido";
    error1.classList.remove("d-none");
    return;
  }
  
  else if (baseNumero<0){
    error1.textContent = "El precio base es menor que 0, no tiene sentido";
    error1.classList.remove("d-none");
    return;
  }

  else if(descuento === ""){
    resultado = calcularPrecio(baseNumero,iva);
  }
  else if ( (Number(descuento) >=0) && (Number(descuento) <= 100) ){
    resultado = calcularPrecio(baseNumero,iva,Number(descuento));
  }
  else{
    error1.textContent = "El descuento no puede ser mayor que 100 ni menor que 0";
    error1.classList.remove("d-none");
    return;
  }
  error1.classList.add("d-none");
  const lista = [
    `Precio sin IVA: ${formatearEuros(baseNumero)}`,
    `Descuento: ${Number(descuento)} %`,
    `IVA: ${iva} %`,
    `Precio final: ${formatearEuros(resultado)}`
  ];

  console.log("Ejercicio 1: precio final : ", resultado);
  
  pintarLista("#salida1",lista);

}

// ============================================================
// Ejercicio 2 · Películas: de function a flecha
// ============================================================

const peliculas = [
  { titulo: "El laberinto del fauno", anio: 2006, duracion: 118 },
  { titulo: "Coco", anio: 2017, duracion: 105 },
  { titulo: "Interstellar", anio: 2014, duracion: 169 },
  { titulo: "Regreso al futuro", anio: 1985, duracion: 116 },
  { titulo: "Parásitos", anio: 2019, duracion: 132 },
  { titulo: "Toy Story", anio: 1995, duracion: 81 }
];

// Ya está hecha: una película como texto, «Coco (2017) · 105 min»
function comoTexto(pelicula) {
  return `${pelicula.titulo} (${pelicula.anio}) · ${pelicula.duracion} min`;
}

//Si solo tiene una expresion no hacen falta las llaves ni el return.
//Sino, se deben poner las llaves y devolver un return como tal como una funcion cualquiera.

function verTitulos(){
  const titulos = peliculas.map((pelicula) => pelicula.titulo);

  pintarLista("#salida2", titulos);
  document.querySelector("#mensaje2").textContent = `${titulos.length} títulos.`;
  console.log("Ejercicio 2: map →", titulos);
}

function verLargas() {
  const largas = peliculas.filter((pelicula) => pelicula.duracion >120);

  pintarLista("#salida2", largas.map(comoTexto));   // comoTexto ya es una función: se pasa sin paréntesis
  document.querySelector("#mensaje2").textContent = `${largas.length} películas duran más de 2 horas.`;
  console.log("Ejercicio 2: filter →", largas);
}

function ordenarPorAnio() {
  const ordenadas = [...peliculas].sort((a,b) => a.anio - b.anio);

  pintarLista("#salida2", ordenadas.map(comoTexto));
  document.querySelector("#mensaje2").textContent = "De la más antigua a la más reciente.";
  console.log("Ejercicio 2: sort →", ordenadas);
}

function verDuracionTotal() {
  const minutos = peliculas.reduce((total,pelicula) => total + pelicula.duracion, 0);

  pintarLista("#salida2", [`${minutos} minutos de películas`]);
  document.querySelector("#mensaje2").textContent = "La suma de las seis duraciones.";
  console.log("Ejercicio 2: reduce →", minutos);
}

function buscarAntigua() {

  const antigua = peliculas.find((pelicula) => pelicula.anio < 1990);
  
  if(antigua === undefined){
    document.querySelector("#mensaje2").textContent = "No hay ninguna";
    pintarLista("#salida2",[]); //Tengo que pasarle un array vacio ya que la funcion recorre una lista al segundo argumento.
  } else{
    document.querySelector("#mensaje2").textContent = "Primera pelicula anterior a 1990";
    pintarLista("#salida2", [comoTexto(antigua)]);
  }

  console.log("Ejercicio 2: find →", antigua);

}

// ============================================================
// Ejercicio 3 · Tu propio callback
// ============================================================

const numeros = [3, -1, 4, -1, 5, 9];
document.querySelector("#numeros3").textContent = `const numeros = [${numeros.join(", ")}];`;

function transformar(lista, operacion) {
  const nuevaLista = [];
  for (const elemento of lista){
    nuevaLista.push(operacion(elemento));
  }
  return nuevaLista;
}

// Ya está hecha: escribe en #salida3 tu resultado, el de map y numeros
function mostrar3(nombre, resultado, conMap) {
  const salida = document.querySelector("#salida3");
  salida.textContent = "";
  const lineas = [
    `${nombre} → [${resultado.join(", ")}]`,
    `con map → [${conMap.join(", ")}]`,
    `numeros → [${numeros.join(", ")}] (no cambia)`
  ];
  lineas.forEach((linea) => {
    const p = document.createElement("p");
    p.classList.add("mb-1");
    p.textContent = linea;
    salida.append(p);
  });
}

// El modelo: funcionará cuando hayas escrito transformar()
function verDobles() {
  const resultado = transformar(numeros, (n) => n * 2);
  mostrar3("dobles", resultado, numeros.map((n) => n * 2));
  console.log("Ejercicio 3: dobles ->", resultado);
}

function verCuadrados() {
  // TODO: como verDobles(), con el cuadrado de cada número (n ** 2).
  const resultado = transformar(numeros, (n) => n**2);
  mostrar3("cuadrado", resultado, numeros.map((n) => n ** 2));
  console.log("Ejercicio 3: cuadrado ->", resultado);
}

function verAbsolutos() {
  // Math.abs ya es una función asi que se pasa sin paréntesis
  const resultado = transformar(numeros, Math.abs);
  mostrar3("absoluto", resultado, numeros.map(Math.abs));
  console.log("Ejercicio 3: absolutos ->", resultado);
}


// ============================================================
// Ejercicio 4 · Dos contadores con closure
// ============================================================


function crearContador(paso = 1) {
  let cuenta = 0;
  
  return function(){ //Closure, la funcion recuerda cuenta ( variable ) del sitio de donde nacio
    cuenta += paso;
    return cuenta;
  };
}

const contarDeUno = crearContador();
const contarDeCinco = crearContador(5);

// El modelo
function sumarUno() {
  const valor = contarDeUno();
  document.querySelector("#cuenta1").textContent = valor;
  console.log("Ejercicio 4: de 1 en 1 ->", valor);
}

function sumarCinco() {
  const valor = contarDeCinco();
  document.querySelector("#cuenta5").textContent = valor;
  console.log("Ejercicio 4: de 5 en 5 ->", valor);
}


// ============================================================
// Ejercicio 5 · Clases
// ============================================================

class Alumno {
  constructor(nombre, curso) {
    this.nombre = nombre;
    this.curso = curso;
    this.notas = [];
  }

  // devuelvo true si la nota es valida
  anadirNota(nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }
    this.notas.push(nota);
    return true;
  }
  // si el tamaño del array es 0, devuelvo 0, sino, hago el acumulativo de cada elemento del array empezando en 0 y lo divido entre el tamaño ( media )
  media() {
    if (this.notas.length === 0) {
      return 0;
    }
    return this.notas.reduce((total, n) => total + n, 0) / this.notas.length;
  }

  //Simplemente devuelvo: Nombre, de Curso
  presentarse() {
    return `${this.nombre}, de ${this.curso}`;
  }
}
//AlumnoFCT, clase que hereda de alumno y que tiene un atributo mas: empresa
//Tambien tiene el metodo presentarse que primero ejecuta el del alumno y le añade en practicas en + atributo empresa
class AlumnoFCT extends Alumno {
  constructor(nombre, curso, empresa) {
    super(nombre, curso);   // primero el constructor de Alumno
    this.empresa = empresa;
  }

  presentarse() {
    return `${super.presentarse()}, en prácticas en ${this.empresa}`;
  }

}

const alumnos = [];

const alumno1 = new Alumno("Jorge", "2º DAW");
alumno1.anadirNota(8);
alumno1.anadirNota(9);

const alumno2 = new AlumnoFCT("Juan", "2º DAW", Anthropic);
alumno2.anadirNota(7);
alumno2.anadirNota(10);

// Ya está hecha: pinta una tarjeta por alumno en #listaAlumnos y actualiza #totalAlumnos
function pintarAlumnos() {
  const contenedor = document.querySelector("#listaAlumnos");
  contenedor.textContent = "";

  alumnos.forEach((alumno) => {
    const columna = document.createElement("div");
    columna.classList.add("col-12", "col-md-6", "col-xl-4");

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("border", "rounded", "p-2", "h-100");

    const frase = document.createElement("p");
    frase.classList.add("mb-1");
    frase.textContent = alumno.presentarse();

    const media = document.createElement("span");
    media.classList.add("badge", "me-1");
    if (alumno.notas.length === 0) {
      media.classList.add("text-bg-secondary");
      media.textContent = "Sin notas";
    } else {
      media.classList.add(alumno.media() >= 5 ? "text-bg-success" : "text-bg-danger");
      media.textContent = `Media ${alumno.media().toFixed(2)}`;
    }

    tarjeta.append(frase, media);

    if (alumno instanceof AlumnoFCT) {
      const fct = document.createElement("span");
      fct.classList.add("badge", "text-bg-info");
      fct.textContent = "FCT";
      tarjeta.append(fct);
    }

    columna.append(tarjeta);
    contenedor.append(columna);
  });

  document.querySelector("#totalAlumnos").textContent = alumnos.length;
}

function crearAlumno() {
  const nombre = document.querySelector("#nombre5").value.trim();
  const curso = document.querySelector("#curso5").value;
  const empresa = document.querySelector("#empresa5").value.trim();
  const textoNotas = document.querySelector("#notas5").value.trim();
  const error = document.querySelector("#error5");

  if (nombre ===""){
    error.textContent = "El alumno debe tener algun nombre";
    error.classList.remove("d-none");
    return;
  }

  let alumno;
  if(empresa ===""){
    alumno = new Alumno(nombre,curso);
  }else{
    alumno = new AlumnoFCT(nombre,curso,empresa);
  }
  let notas = [];
  //Si las notas no estan vacias
  if (textoNotas !== ""){
    notas = textoNotas.split(",").map((texto) => Number(texto.trim()));
  }
  const hayNotaMala = notas.some((nota) => Number.isNaN(nota) || nota < 0 || nota > 10);
  //Si hay nota mala, error
  if(hayNotaMala){
    error.textContent = "Las notas tienen que ser números entre 0 y 10, separados por comas.";
    error.classList.remove("d-none");
    return;
  } //Sino, añadimos cada nota de notas al alumno
  //else{   //Realmente no hace falta el else, el error nos saca con return
  notas.forEach((nota) => alumno.anadirNota(nota));
  //}

  //meto el alumno y oculto el error anterior posible
  alumnos.push(alumno);
  error.classList.add("d-none");

  //Vacio cada casilla cuando se ha metido, para que no se tenga que borrar y volver a escribir
  document.querySelector("#nombre5").value = "";
  document.querySelector("#empresa5").value = "";
  document.querySelector("#notas5").value = "";

  //pinto el alumno
  pintarAlumnos();

  console.log("Ejercicio 5, añadir nuevo alumno ->", alumno);
}

pintarAlumnos();


// ============================================================
// Ejercicio 6 · Fechas y textos
// ============================================================

function diasHasta(fecha) {
  const hoy = new Date();
  hoy.setHours(0,0,0,0);  //Hoy a medianoche

  const milisegundosDia = 1000 * 60 *60 * 24;
  const dias =(fecha-hoy) / milisegundosDia;
  //redondeo
  return Math.round(dias);
}

function mostrarDias() {
  const valor = document.querySelector("#fecha6").value;        // "2026-12-25", o "" si está vacía
  const salida = document.querySelector("#salida6a");

  if (valor === "") {
    salida.textContent = "Elige una fecha.";
    return;
  }

  // Ya está hecho: de "2026-12-25" a un Date. Fíjate en el mes - 1: el mes va de 0 a 11
  const [anio, mes, dia] = valor.split("-").map(Number);
  const fecha = new Date(anio, mes - 1, dia);

  const dias = diasHasta(fecha);
  const nombreFecha = fecha.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long", year: "numeric"});

  //si falta almenos un dia, pone Faltan ndias...
  if (dias > 0) {
    salida.textContent = `Faltan ${dias} días: será ${nombreFecha}.`;
  } else if (dias === 0) {
    salida.textContent = `Es hoy: ${nombreFecha}.`;
  } else {
    salida.textContent = `Fue hace ${Math.abs(dias)} días: fue ${nombreFecha}.`;
  }

  console.log("Ejercicio 6 funcion mostrarDias: -> ", dias);
}

function iniciales(nombreCompleto) {
  const iniciales = nombreCompleto.trim().split(" ").filter( (palabra) => palabra !=="").map((palabra) => palabra.slice(0,1).toUpperCase()).join("");
  return nombre;
}

function crearUsuario(nombreCompleto) {
  // random entre 0 y 999
  const numero = Math.floor(Math.random() * 1000); 
  //con padStart devuevo 3 cifras, metiendo ceros si es menor que 100
  const cifras = String(numero).padStart(3, "0");

  //se lo añado sacandole las iniciales usando la funcion de antes:
  return iniciales(nombreCompleto).toLowerCase() + cifras;
}

function mostrarIniciales() {

  const iniciales = document.querySelector("#nombre6").value.trim();
  const salida = document.querySelector("#salida6b");

  if (nombre === "") {
    salida.textContent = "Escribe un nombre completo.";
    return;
  }

  const textoIniciales = iniciales(nombre);
  const usuario = crearUsuario(nombre);
  salida.textContent = `Iniciales: ${textoIniciales} · usuario: ${usuario}`;
  console.log("ejercicio 6 muestro las iniciales del usuario: -> ", textoIniciales, "· usuario ->", usuario);
}
