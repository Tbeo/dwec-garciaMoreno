/*
  Tarea 6 · DWEC · Jorge García Moreno
  Objetos y arrays.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · Ya tienes hechas, como modelo, comoTexto(), pintarProductos() y el ejercicio 2 casi entero:
    léelas antes de empezar, porque el resto se hace igual.
  · Los resultados se pintan en la página como en el tema 5: createElement, textContent, classList y append.
    Antes de volver a pintar una lista, vacíala con textContent = "".
  · Las funciones se escriben con function, también las que pasas a forEach, sort, map, filter o reduce.
    Las funciones flecha las veremos en el tema 7: en esta tarea, no las uses.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: un array como texto, por ejemplo [1, 2, 3]
// (ya está hecha: úsala cuando quieras enseñar un array)
// ============================================================

function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}


// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================

const estudiante = { nombre: "Jorge", apellidos: "García Moreno", edad: 29, curso: "DWEC",

  presentarse: function() { //funcion que se declara asi por ser una propiedad del objeto
    return "Soy " + this.nombre + " " + this.apellidos + ", tengo " + this.edad + " años y estudio " + this.curso + ".";
  }
};

function verFicha() {
  //Recojo la caja y la vacio
  const salida = document.querySelector("#salida1");
  salida.textContent = "";
  //creo la lista ul y le agrego la clase list-group
  const lista = document.createElement("ul");
  lista.classList.add("list-group");

  //Le meto las propiedades de cada parte de la lista.
  const claves = ["nombre", "apellidos", "edad", "curso"];
  claves.forEach(function(clave) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = clave + ": " + estudiante[clave];
    lista.append(li);
  });
  //Con esto se le agrega la lista al div de salida
  salida.append(lista);

  //Creo un p con la frase de estudiante
  const frase = document.createElement("p");
  frase.textContent = estudiante.presentarse();
  salida.append(frase);

  console.log("Ejercicio 1: ficha", estudiante);
}

function cumplirAnios() {
  estudiante.edad = estudiante.edad+1; //Sumo 1 a la edad
  console.log ("Se ha utilizado cumplirAnios()");
  verFicha();
}

function quitarCurso() {
  delete estudiante.curso;
  console.log("Se ha utilizado quitarCurso()");
  verFicha();
}


// ============================================================
// Ejercicio 2 · Colores
// mostrarColores() y anadirColor() ya están hechas: son el modelo
// ============================================================

const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";   // vaciamos la lista antes de volver a pintarla

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;
}

function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color);   // push añade al final
  casilla.value = "";
  mostrarColores();
  console.log("Ejercicio 2: push →", comoTexto(colores));
}

function quitarUltimo() {
  let mensaje = "";
  if (colores.length === 0) {
    mensaje = "La lista esta vacia";
    avisar2(mensaje);
    return;
  }
  else {
    const color = colores.pop();  //saco el ultimo elemento del array y lo devuelvo
    mostrarColores();
    console.log("El color que ha salido es: " + color);
  }

}

function quitarPrimero() {
  let mensaje;
  if (colores.length === 0) {
    mensaje = "La lista esta vacia";
    avisar2(mensaje);
  }
  else {
    const color = colores.shift();  //elimino el primer elemento del array y lo devuelvo.
    mostrarColores();
    console.log("El color que ha salido es: " + color);
  }
}

mostrarColores();   // pinta los tres colores de partida nada más cargar


// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================

// Puedes cambiar los productos por otros, pero deja al menos seis, con estas tres propiedades
const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

// Ya está hecha: pinta en la tabla la lista de productos que le pases
function pintarProductos(lista) {
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  lista.forEach(function (producto) {
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";

    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
}

function mostrarProductos() {
  pintarProductos(productos);
  document.querySelector("#mensaje3").textContent = "Hay: " + productos.length + " Productos";
  console.log("Se ha ejecutado mostrarProductos");
}

function ordenarPorPrecio() {
  const copiaProductos = [...productos];
  copiaProductos.sort(function(a,b){
    if(a.precio < b.precio){
      return -1;  //a es menor que b, a va antes
    }
    else if(a.precio > b.precio){
      return 1; //a es mayor que b, a va despues
    }
    else{
      return 0; //a es igual que b
    }
  });

  pintarProductos(copiaProductos);
  document.querySelector("#mensaje3").textContent = "Los productos estan ordenados según el precio, de más baratos a más caros";
  console.log("Se ha ejecutado ordenarPorPrecio");
}

function filtrarCaros() {
  const masDe50 = productos.filter(function (producto) {
    return producto.precio >50;
  });
  pintarProductos(masDe50);
  document.querySelector("#mensaje3").textContent = "Los productos con un precio mayor a 50 € son: " + masDe50.length;

  console.log("Se ha ejecutado filtrarCaros()");
}

function buscarProducto() {
  const texto = document.querySelector("#buscarProducto").value.trim().toLowerCase();
  if (texto ===""){
    document.querySelector("#mensaje3").textContent = "buscarProducto esta vacio";
    return;
  }

  const encontrado = productos.find(function(producto){
    return producto.nombre.toLocaleLowerCase().includes(texto);
  });

  if(encontrado ===undefined){
    document.querySelector("#mensaje3").textContent = " No hay producto con este texto como nombre: " + texto;
    pintarProductos([]); //al pasarle un array vacio, la tabla se queda sin filas.
  }
  else{
    document.querySelector("#mensaje3").textContent = "El producto con nombre: " + texto + "ha sido encontrado";
    pintarProductos([encontrado]);
  }

  console.log("se ha ejecutado buscarProducto()");
}

mostrarProductos();   // la tabla completa nada más cargar


// ============================================================
// Ejercicio 4 · Notas
// ============================================================

const alumno = {
  nombre: "Jorge",
  notas: [],

  anadirNota: function(nota){  //Se escribe de esta manera ya que son metodos del objeto, se terminan con ,
    if (Number.isNaN(nota) || nota < 0 || nota>10){
      return false;
    }
    else{
      this.notas.push(nota);
      return true;
    }
  },

  media: function(){
    if (this.notas.length === 0){
      return 0;
    }
    const suma = this.notas.reduce(function (total, nota){
      return total + nota;
    }, 0);  //Este 0 es el número con el que se empieza a contar
    return suma / this.notas.length;
    }
};

function mostrarNotas() {

  const contenedor = document.querySelector("#notas");
  contenedor.textContent = "";  //contenedor donde van a estar las notas

  alumno.notas.forEach(function (nota){
    const badge = document.createElement("span");
    badge.classList.add("badge", "me-1");

    if(nota >= 5){
      badge.classList.add("text-bg-success"); //verde si es mas de 5
    }
    else{
      badge.classList.add("text-bg-danger"); //rojo si es menor de 5
    }
    badge.textContent = nota; //le meto el valor de la nota despues de ponerle el color
    contenedor.append(badge); //le meto el badge al final
  });

  const media = document.querySelector("#media");
  if(alumno.notas.length ===0){
    media.textContent = "todavia no hay notas puestas";
  }
  else{
    media.textContent = "Tiene una media de: " + alumno.notas.length + " notas: " + alumno.media().toFixed(2);
  }

  console.log("se ha ejecutado mostrarNotas()");
}

function anadirNota() {
  const casilla = document.querySelector("#nota");
  const error = document.querySelector("#error4");

  //casilla vacia
  if(casilla.value.trim()===""){
    error.textContent="Escribe la nota antes de poder añadirla";
    error.classList.remove("d-none"); //muestro el error
    return;
  }

  //se convierte y se la pongo al objeto que decide si es valida
  const nota = Number(casilla.value);
  const guardada = alumno.anadirNota(nota);

  if (guardada ===false){
    error.textContent = "la nota tiene que ser entre 0 y 10";
    error.classList.remove("d-none");
    return;
  }

  //si todo va bien
  error.classList.add("d-none");  //tapo el error
  casilla.value = "";
  mostrarNotas();
  console.log("se ha ejecutado el anadirNota");

}

function borrarNotas() {
  alumno.notas = [];
  mostrarNotas();
  
  console.log("Se ha ejecutado borrarNotas()");
}

mostrarNotas();


// ============================================================
// Ejercicio 5 · map, filter y reduce
// ============================================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verDobles() {
  const dobles = numeros.map(function (n){
    return n*2;
  });

  const salida = document.querySelector("#salida5");
  salida.textContent = "";

  const linea1 = document.createElement("div");
  linea1.textContent = "map: " + comoTexto(dobles);
  salida.append(linea1);

  const linea2 = document.createElement ("div");
  linea2.textContent = "numeros sigue igual: " + comoTexto(numeros);
  salida.append(linea2);

  console.log("se ha ejecutado verDobles()");
}

function verPares() {
  const pares = numeros.filter(function (n){
    return n % 2 ===0;  //true si el resto es 0, por lo que es par
  });

  const salida = document.querySelector("#salida5");
  salida.textContent = "";

  const linea1 = document.createElement("div");
  linea1.textContent = "los pares son: " + comoTexto(pares);
  salida.append(linea1);

  const linea2 = document.createElement ("div");
  linea2.textContent = "numeros sigue igual: " + comoTexto(numeros);
  salida.append(linea2);

  console.log("se ha ejecutado verPares()");

}

function verSuma() {
  const suma = numeros.reduce(function (total, n){
    return total + n; //total mas el numero que toca
  }, 0);  //empieza en 0

  const salida = document.querySelector("#salida5");
  salida.textContent = "";

  const linea1 = document.createElement("div");
  linea1.textContent = "reduce: " + suma;
  salida.append(linea1);

  const linea2 = document.createElement ("div");
  linea2.textContent = "numeros sigue igual: " + comoTexto(numeros);
  salida.append(linea2);

  console.log("se ha ejecutado verSuma()");

}

function verCadena() {

  //Primero los pares
  const pares = numeros.filter(function (n){
    return n%2 === 0;
  });

  //Luego el doble de los pares
  const dobles = pares.map(function (n){
    return n*2;
  });

  //tercero sumo los dobles
  const suma = dobles.reduce(function (total, n){
    return total + n; //total mas el numero que toca
  }, 0);  //empieza en 0

  const salida = document.querySelector("#salida5");
  salida.textContent = "";

  const linea1 = document.createElement("div");
  linea1.textContent = "los pares son: " + comoTexto(pares);
  salida.append(linea1);

  const linea2 = document.createElement ("div");
  linea2.textContent = "map: " + comoTexto(dobles);
  salida.append(linea2);

  const linea3 = document.createElement ("div");
  linea3.textContent = "la suma es: " + suma;
  salida.append(linea3);

  console.log("se ha ejecutado verCadena()");

}


// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================

const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];   // una copia: splice cambia ciudades y así podemos restaurarla

function mostrarCiudades() {
  // TODO: vacía #ciudades y pon un badge por ciudad con su posición: «0 · Granada», «1 · Sevilla»...
  //       Pista: forEach le pasa a tu función dos datos: function (ciudad, posicion) { ... }.
}

function verSlice() {
  // TODO: guarda ciudades.slice(2, 5) y escribe en #salida6 qué devuelve y cuántas ciudades siguen en el array.
}

function hacerSplice() {
  // TODO: si quedan menos de 3 ciudades, avisa en #salida6 de que hay que restaurar y no hagas nada más.
  // TODO: si no, ciudades.splice(2, 2): escribe en #salida6 qué devuelve y cuántas quedan, y vuelve a pintar.
}

function restaurarCiudades() {
  // TODO: vuelve a copiar ciudadesOriginal en ciudades y pinta.
}

function buscarCiudad() {
  // TODO: lee #buscarCiudad (value y trim). Si está vacío, avisa.
  // TODO: escribe en #salida6 lo que dan includes() e indexOf() con ese nombre. Si no está, indexOf da -1.
}

mostrarCiudades();
