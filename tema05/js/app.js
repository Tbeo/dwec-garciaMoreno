/*
  Tarea 5 · DWEC · Jorge García Moreno
  Manipular el DOM.

  Cómo usar esta plantilla:
  · Desde este tema, el JavaScript escribe en la página: selecciona elementos y cambia su texto, sus clases...
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · app.js se carga en el <head> con defer: cuando se ejecuta, el HTML ya está leído.
  · Selecciona con document.querySelector() / querySelectorAll() (o getElementById).
  · Texto con textContent; aspecto con classList y las clases de Bootstrap (no con style).
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ejercicio 1 · Selectores y modificación
// Un selector distinto para cada párrafo
// ============================================================

function aplicarCambios() {
  // El modelo: el primer párrafo, por su id
  const primero = document.getElementById("primero");
  primero.textContent = "Texto modificado por JavaScript";

  const segundo = document.querySelector(".segundo");
  segundo.classList.add("bg-warning-subtle");
  
  const tercero = document.querySelectorAll("#contenido p");
  tercero[2].classList.add("text-danger");

  console.log("Se han aplicado los cambios de aplicarCambios()");
}


// ============================================================
// Ejercicio 2 · Crear y eliminar nodos
// ============================================================

function anadirParrafo() {
  const contenido = document.querySelector("#contenido");
  const nuevo = document.createElement("p");
  nuevo.textContent="Párrafo nuevo " + document.querySelector("#contenido").children.length;
  contenido.append(nuevo);
  console.log("Añadido parrafo nuevo: " + nuevo);
}

function eliminarUltimo() {
  //Cojo el contenedor
  const contenido = document.querySelector("#contenido");
  //recojo el ultimo elemento (el parrafo)
  const ultimo = contenido.lastElementChild;

  if(ultimo === null){
    document.querySelector("#aviso2").classList.remove("d-none");
    console.log("No queda ningun parrado");
  } else{
    ultimo.remove();
    console.log("Parrafo eliminado");
  }
}


// ============================================================
// Ejercicio 3 · Resaltar al pasar el ratón
// ============================================================

function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");

  for (const parrafo of parrafos) {
    // addEventListener("mouseenter", ...) ejecuta la función cuando el ratón entra en el párrafo.
    // Los eventos los veremos a fondo en el tema 9: de momento, copia este modelo.
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });

    // Cuando el ratón sale del párrafo, le quito el fondo gris
    parrafo.addEventListener("mouseleave", function () {
      parrafo.classList.remove("bg-body-secondary");
    });

  }
  console.log("Resaltado activado en: " + parrafos.length + " parrafos");
}


// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {
  const texto = document.querySelector("#nuevoTexto").value.trim();
  const error = document.querySelector("#error4");

  if (texto ===""){
    error.classList.remove("d-none");
  }
  else{
    //el texto en el primer parrafo de #contenido
    document.querySelector("#contenido").firstElementChild.textContent = texto;
    error.classList.add("d-none");
  }
}

function cambiarConHtml() {
  const texto = document.querySelector("#nuevoTexto").value.trim();
  const error = document.querySelector("#error4");

  if (texto ===""){
    error.classList.remove("d-none");
    console.log("Ejecutando el haber algun error con innerHTML");
  }
  else{
    document.querySelector("#contenido").firstElementChild.innerHTML = texto;
    error.classList.add("d-none");
    console.log("Ejecutado el cambiar con innerHTML");
  }
}


// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

function anadirTarea() {
  const input = document.querySelector("#tareaInput");
  //lo que esta escrito sin espacios
  const texto = input.value.trim();
  const error = document.querySelector("#error5");
  const lista = document.querySelector("#listaTareas");

  //Si esta vacio
  if(texto === ""){
    //muestro error y no añado nada
    error.textContent = "No has añadido ninguna tarea, escribela";
    error.classList.remove("d-none");
    console.log("Intento de añadir una tarea vacia");
  }
  else{
    //primero creo el li de la lista
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    //Despues creo la casilla de verificacion
    const casilla = document.createElement("input");
    casilla.type = "checkbox";
    casilla.classList.add("form-check-input", "me-2"); //el me-2 simplemente deja un pcoo de hueco a la derecha

    //meto el span con el texto de la tarea
    const span = document.createElement("span");
    span.textContent = texto;

    li.append(casilla,span); //los pego
    lista.append(li);

    input.value = "";
    error.classList.add("d-none");
  }
  //Actualizo totaltareas con el numero de li que hay en lista
  document.querySelector("#totalTareas").textContent = lista.children.length;
}

function borrarCompletadas() {

  const realizadas = document.querySelectorAll("#listaTareas input:checked");
  const error = document.querySelector("#error5");
  const lista = document.querySelector("#listaTareas");

  if (realizadas.length === 0) {
    error.textContent = "No hay ninguna tarea realizada que borrar";
    error.classList.remove("d-none");
  }
  //Si hay marcadas, las recorro y borro el li de cada una de ellas 
  else {
    for ( const casilla of realizadas){
      casilla.parentElement.remove();
    }
    error.classList.add("d-none");
  }

  //y luego actualizo el contador
  document.querySelector("#totalTareas").textContent = lista.children.length;
}


// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
  // El modelo: el tamaño de la ventana
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;

  let punto = "";
  if(ancho >=1400){
    punto = "xxl (desde 1400 px)";
  }else if (ancho >=1200){
    punto = "xl (de 1200 a 1399 px)";
  }else if (ancho >=992){
    punto = "lg (de 992 a 1199 px)";
  }else if (ancho >=768){
    punto = "md (de 768 a 991 px)";
  }else if (ancho >576){
    punto = "sm (de 576 a 767 px)";
  }else{
    punto = "xs (menos de 576 px)";
  }
  document.querySelector("#datoPunto").textContent = punto;

  //pongo el calculo de la pantalla
  document.querySelector("#datoPantalla").textContent = `${screen.width} x ${screen.height} px`;

  //URL de la pagina y el idioma
  document.querySelector("#datoUrl").textContent = location.href;
  document.querySelector("#datoIdioma").textContent = navigator.language;
}
