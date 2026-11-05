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

  presentarse: function() { //funcion que se declara asi por ser una propiedad de la clase
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
  // TODO: borra la propiedad curso con delete y vuelve a pintar la ficha.
  //       Fíjate en lo que sale ahora en el curso y explícalo en el README.
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
  // TODO: lee #buscarProducto (value, trim y toLowerCase). Si está vacío, avisa en #mensaje3.
  // TODO: con find(), el primer producto cuyo nombre en minúsculas contenga ese texto (includes).
  // TODO: find devuelve undefined si no encuentra nada: en ese caso, dilo en #mensaje3 y vacía la tabla.
  //       Si lo encuentra, píntalo solo a él: pintarProductos([encontrado]).
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
  // TODO: vacía #notas y pon un badge (<span class="badge">) por nota: verde (text-bg-success) si es de 5 o más,
  //       rojo (text-bg-danger) si no.
  // TODO: en #media, «Media de N notas: X» con dos decimales (toFixed(2)), o «Todavía no hay notas.».

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
  // TODO: si #nota está vacía, muestra un error en #error4 (quítale "d-none").
  //       Ojo: Number("") vale 0, así que esta comprobación va antes de convertir.
  // TODO: convierte el valor con Number() y llama a alumno.anadirNota(). Si devuelve false, muestra el error.
  // TODO: si ha ido bien, oculta el error, vacía la casilla y llama a mostrarNotas().

  const casilla = document.querySelector("#nota");
  const error = document.querySelector("#error4");

  //casilla vacia
  if(casilla.value.trim()===""){
    error.textContent="Escribe la nota antes de poder añadirla";
    error.classList.remove("d-none"); //tengo que mostrar el error sino al añadirlo despues de fallar sigue el mensaje
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
  // TODO: deja alumno.notas vacío y vuelve a pintar.
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
  // TODO: con map(), un array nuevo con el doble de cada número.
  // TODO: escribe en #salida5 el resultado y, debajo, numeros (para que se vea que no ha cambiado).
}

function verPares() {
  // TODO: con filter(), los números pares (n % 2 === 0). Escríbelos en #salida5 como en verDobles().
}

function verSuma() {
  // TODO: con reduce(), la suma de todos los números (empieza en 0). Escríbela en #salida5.
}

function verCadena() {
  // TODO: los tres seguidos: los pares, después sus dobles y al final la suma de esos dobles.
  //       Escribe en #salida5 una línea por paso.
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
